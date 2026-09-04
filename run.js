import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { ocOpen, ocRaw } from './adapters/oc.js';
import { rawFetch } from './adapters/raw-fetch.js';
import { jinaReader } from './adapters/jina-reader.js';
import { lynxDump, lynxAvailable } from './adapters/lynx.js';
import { playwrightMcp, playwrightMcpAvailable, closePlaywrightMcp } from './adapters/playwright-mcp.js';
import { browserUse, browserUseAvailable } from './adapters/browser-use.js';
import { playwrightHtml, seleniumHtml, uvxAvailable } from './adapters/rendered-html.js';
import { claudeComputerUse, openaiComputerUse } from './adapters/computer-use.js';

const ADAPTERS = [ocOpen, ocRaw, rawFetch, jinaReader];
if (await lynxAvailable()) ADAPTERS.push(lynxDump);
else console.error('lynx not found, skipping lynx-dump (set LYNX_BIN or install lynx)');
if (await playwrightMcpAvailable()) ADAPTERS.push(playwrightMcp);
else console.error('Playwright MCP server failed to start, skipping playwright-mcp');
if (await browserUseAvailable()) {
  ADAPTERS.push(browserUse, playwrightHtml, seleniumHtml, claudeComputerUse, openaiComputerUse);
} else {
  console.error('uvx not found, skipping browser-use, playwright-html, selenium-html, and computer-use (install uv)');
}
const allTasks = JSON.parse(readFileSync(new URL('./tasks.json', import.meta.url), 'utf8'));

// --only=id,id reruns just those tasks and merges them into the saved run, so
// one page that hit a rate limit does not cost a fresh pass over all fifteen.
const ONLY = (process.argv.find((a) => a.startsWith('--only='))?.slice('--only='.length) ?? '')
  .split(',').filter(Boolean);
const tasks = ONLY.length ? allTasks.filter((t) => ONLY.includes(t.id)) : allTasks;
const saved = () => {
  try {
    return JSON.parse(readFileSync(new URL('./results/latest.json', import.meta.url), 'utf8'));
  } catch {
    return [];
  }
};

const estimateTokens = (s) => Math.ceil(s.length / 4);

const results = ONLY.length ? saved().filter((r) => !ONLY.includes(r.task)) : [];
// Some sites meter anonymous readers per IP (Reddit's feeds allow about ten
// requests a minute). A task can set pauseMs to space the adapters out so the
// suite measures the page and not its own burst.
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (const task of tasks) {
  for (const [i, adapter] of ADAPTERS.entries()) {
    // Pause before every metered request, the task's first one included, so
    // the previous task's burst has cleared before this one starts.
    if (task.pauseMs && (i > 0 || results.length)) await sleep(task.pauseMs);
    const t0 = performance.now();
    try {
      const r = await adapter.run(task.url);
      results.push({
        task: task.id,
        adapter: adapter.name,
        model: adapter.model ?? 'none',
        ok: r.output.trim().length > 0,
        status: r.status,
        tokens: r.tokens ?? estimateTokens(r.output),
        ms: Math.round(performance.now() - t0),
        fetchMs: r.fetchMs,
        processMs: r.processMs,
        bytes: r.bytes,
        memMB: r.memMB,
      });
    } catch (err) {
      results.push({
        task: task.id,
        adapter: adapter.name,
        model: adapter.model ?? 'none',
        ok: false,
        error: err.message.split('\n')[0],
        ms: Math.round(performance.now() - t0),
      });
    }
    console.error(`${task.id} / ${adapter.name} done`);
  }
}

// Merged reruns land back in task order, then adapter order, so the table
// reads the same however the rows were collected.
const taskIndex = new Map(allTasks.map((t, i) => [t.id, i]));
const adapterIndex = new Map(ADAPTERS.map((a, i) => [a.name, i]));
results.sort((a, b) => (taskIndex.get(a.task) - taskIndex.get(b.task))
  || ((adapterIndex.get(a.adapter) ?? 99) - (adapterIndex.get(b.adapter) ?? 99)));

const lines = [];
const out = (l) => { lines.push(l); console.log(l); };

const cell = (v) => v ?? '';
const kb = (bytes) => (bytes == null ? '' : Math.round(bytes / 1024));

out('| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |');
out('| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');
for (const r of results) {
  out(
    `| ${r.task} | ${r.adapter} | ${r.model} | ${r.ok ? 'yes' : 'NO'} | ${cell(r.status)} | ${cell(r.tokens)} `
    + `| ${r.ms} | ${cell(r.fetchMs)} | ${cell(r.processMs)} | ${kb(r.bytes)} | ${cell(r.memMB)} |`,
  );
}

out('\n### Summary');
out('| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |');
out('| --- | --- | ---: | ---: | ---: | ---: | ---: |');
for (const adapter of ADAPTERS) {
  const rows = results.filter((r) => r.adapter === adapter.name);
  const okRows = rows.filter((r) => r.ok);
  const totalTokens = okRows.reduce((sum, r) => sum + r.tokens, 0);
  const avgMs = Math.round(rows.reduce((sum, r) => sum + r.ms, 0) / rows.length);
  const fetched = okRows.filter((r) => r.fetchMs != null);
  const avgFetchMs = fetched.length
    ? Math.round(fetched.reduce((sum, r) => sum + r.fetchMs, 0) / fetched.length)
    : '';
  const totalKB = kb(okRows.reduce((sum, r) => sum + (r.bytes ?? 0), 0));
  out(`| ${adapter.name} | ${adapter.model ?? 'none'} | ${okRows.length}/${rows.length} | ${totalTokens} | ${avgMs} | ${avgFetchMs} | ${totalKB} |`);
}

mkdirSync(new URL('./results/', import.meta.url), { recursive: true });
writeFileSync(new URL('./results/latest.json', import.meta.url), JSON.stringify(results, null, 2));
writeFileSync(new URL('./results/latest.md', import.meta.url), lines.join('\n') + '\n');
console.error('written to results/latest.json');
closePlaywrightMcp();
