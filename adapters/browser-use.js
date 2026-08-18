// Browser Use (https://github.com/browser-use/browser-use): the popular
// agent-browsing framework. On every step it hands its model a browser state
// message (page text plus indexed interactive elements); this adapter
// navigates once and token-counts that message, the per-page-view floor a
// browser-use agent pays regardless of which model drives it. No model in
// the loop, so `model` stays none. Runs via uv (https://docs.astral.sh/uv),
// skipped when uvx is not installed. The wall-clock ms column includes
// Python startup; the fetch ms column is navigation plus state extraction.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const HELPER = new URL('./browser_use_state.py', import.meta.url).pathname;

export async function browserUseAvailable() {
  try {
    await run('uvx', ['--version']);
    return true;
  } catch {
    return false;
  }
}

export const browserUse = {
  name: 'browser-use',
  async run(url) {
    const { stdout } = await run(
      'uvx', ['--with', 'browser-use', 'python', HELPER, url],
      { maxBuffer: 32 * 1024 * 1024, timeout: 180_000 },
    );
    const r = JSON.parse(stdout);
    return {
      output: r.output,
      status: null,
      fetchMs: r.fetchMs,
      processMs: null,
      bytes: null,
      memMB: null,
    };
  },
};
