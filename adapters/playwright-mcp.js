// Playwright MCP (https://github.com/microsoft/playwright-mcp): the de facto
// standard browser tool for MCP agents. The adapter runs the real server over
// stdio, calls browser_navigate, and token-counts what the agent would ingest
// for that one page view: the tool response plus the accessibility-tree
// snapshot, which current server versions write to a file the agent then has
// to read. No model is in the loop, so this is the floor: a real agent
// re-reads a snapshot like this after every click. Needs the pinned browser
// fetched once via `npx @playwright/mcp install-browser chrome-for-testing`;
// the adapter is skipped when the server cannot start.
import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';

const SERVER = ['-y', '@playwright/mcp@latest', '--browser', 'chromium', '--headless', '--isolated'];

let child = null;
let nextId = 1;
let buffer = '';
const pending = new Map();

function send(msg) {
  child.stdin.write(JSON.stringify(msg) + '\n');
}

function request(method, params, timeoutMs) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`${method} timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    pending.set(id, { resolve, reject, timer });
    send({ jsonrpc: '2.0', id, method, params });
  });
}

async function start() {
  child = spawn('npx', SERVER, { stdio: ['pipe', 'pipe', 'pipe'] });
  child.on('error', () => {});
  child.stdout.on('data', (chunk) => {
    buffer += chunk;
    let nl;
    while ((nl = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, nl);
      buffer = buffer.slice(nl + 1);
      if (!line.trim()) continue;
      let msg;
      try { msg = JSON.parse(line); } catch { continue; }
      const p = pending.get(msg.id);
      if (!p) continue;
      pending.delete(msg.id);
      clearTimeout(p.timer);
      if (msg.error) p.reject(new Error(msg.error.message));
      else p.resolve(msg.result);
    }
  });
  await request('initialize', {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'only-cli-benchmarks', version: '0.0.0' },
  }, 60_000);
  send({ jsonrpc: '2.0', method: 'notifications/initialized' });
}

export async function playwrightMcpAvailable() {
  try {
    await start();
    return true;
  } catch {
    closePlaywrightMcp();
    return false;
  }
}

export function closePlaywrightMcp() {
  if (child) child.kill();
  child = null;
}

export const playwrightMcp = {
  name: 'playwright-mcp',
  async run(url) {
    if (!child) await start();
    const t0 = performance.now();
    const result = await request('tools/call', {
      name: 'browser_navigate',
      arguments: { url },
    }, 90_000);
    let output = (result.content ?? [])
      .filter((c) => c.type === 'text')
      .map((c) => c.text)
      .join('\n');
    if (result.isError) throw new Error(output.replace(/\s+/g, ' ').slice(0, 200) || 'navigate failed');
    // The server saves the snapshot to a file and returns a link; the agent
    // still has to read it, so its contents count toward the ingest.
    for (const [, path] of output.matchAll(/\[Snapshot\]\(([^)]+)\)/g)) {
      output += '\n' + await readFile(path, 'utf8');
    }
    return {
      output,
      status: null,
      fetchMs: Math.round(performance.now() - t0),
      processMs: null,
      bytes: null,
      memMB: null,
    };
  },
};
