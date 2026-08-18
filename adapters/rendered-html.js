// Plain Playwright and plain Selenium, the two workhorse automation
// libraries agents script directly: render the page in a real headless
// browser and read the JS-rendered HTML. Compared to raw-fetch this pays
// for a browser and gets script-generated content in return; the token
// bill is the full rendered markup. Both run via uv
// (https://docs.astral.sh/uv) and are skipped when uvx is missing.
// Playwright needs its browser fetched once: `uvx --with playwright
// playwright install chromium`. Selenium Manager provisions its own
// chrome-for-testing build on first run.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const HELPER = new URL('./render_page.py', import.meta.url).pathname;

export async function uvxAvailable() {
  try {
    await run('uvx', ['--version']);
    return true;
  } catch {
    return false;
  }
}

async function render(pkg, engine, mode, url) {
  const { stdout } = await run(
    'uvx', ['--with', pkg, 'python', HELPER, engine, mode, url],
    { maxBuffer: 64 * 1024 * 1024, timeout: 180_000 },
  );
  return JSON.parse(stdout);
}

export const playwrightHtml = {
  name: 'playwright-html',
  async run(url) {
    const r = await render('playwright', 'playwright', 'html', url);
    return {
      output: r.output,
      status: null,
      fetchMs: r.fetchMs,
      processMs: null,
      bytes: Buffer.byteLength(r.output),
      memMB: null,
    };
  },
};

export const seleniumHtml = {
  name: 'selenium-html',
  async run(url) {
    const r = await render('selenium', 'selenium', 'html', url);
    return {
      output: r.output,
      status: null,
      fetchMs: r.fetchMs,
      processMs: null,
      bytes: Buffer.byteLength(r.output),
      memMB: null,
    };
  },
};
