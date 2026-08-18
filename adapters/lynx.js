// Lynx, the 1992 text browser: the oldest way to hand a web page to
// something that only reads text. `lynx -dump` renders the page and exits.
// Set LYNX_BIN if lynx is not on PATH; the adapter is skipped when the
// binary cannot be found. Lynx does not report the HTTP status or bytes
// transferred, so those columns stay empty.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const LYNX = process.env.LYNX_BIN ?? 'lynx';

export async function lynxAvailable() {
  try {
    await run(LYNX, ['-version']);
    return true;
  } catch {
    return false;
  }
}

export const lynxDump = {
  name: 'lynx-dump',
  async run(url) {
    const t0 = performance.now();
    const { stdout } = await run(LYNX, ['-dump', '-nomargins', url], {
      maxBuffer: 32 * 1024 * 1024,
      timeout: 60_000,
    });
    return {
      output: stdout,
      status: null,
      fetchMs: Math.round(performance.now() - t0),
      processMs: null,
      bytes: null,
      memMB: null,
    };
  },
};
