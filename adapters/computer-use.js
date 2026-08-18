// Computer-use agents (OpenAI computer-use, Claude computer use) browse by
// screenshot: every page view reaches the model as an image. These adapters
// take a real 1024x768 headless-browser screenshot of the page (the viewport
// size both vendors document for computer use) and price it with each
// vendor's published image-token formula. That is the per-view floor: it
// buys one look at the top of the page, and a real agent pays it again
// after every scroll and click, plus prompt and reasoning tokens on top.
// Anthropic: tokens = width * height / 750
//   https://docs.claude.com/en/docs/build-with-claude/vision
// OpenAI: 85 base + 170 per 512px tile at high detail
//   https://platform.openai.com/docs/guides/images-vision
// Screenshots are memoized per URL so both adapters price the same capture.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const HELPER = new URL('./render_page.py', import.meta.url).pathname;

const shots = new Map();
function screenshot(url) {
  if (!shots.has(url)) {
    shots.set(url, run(
      'uvx', ['--with', 'playwright', 'python', HELPER, 'playwright', 'screenshot', url],
      { maxBuffer: 64 * 1024 * 1024, timeout: 180_000 },
    ).then(({ stdout }) => JSON.parse(stdout)));
  }
  return shots.get(url);
}

function makeAdapter(name, imageTokens) {
  return {
    name,
    async run(url) {
      const shot = await screenshot(url);
      const tokens = imageTokens(shot.width, shot.height);
      return {
        output: `[${shot.width}x${shot.height} PNG screenshot, one per page view]`,
        tokens,
        status: null,
        fetchMs: shot.fetchMs,
        processMs: null,
        bytes: shot.bytes,
        memMB: null,
      };
    },
  };
}

export const claudeComputerUse = makeAdapter(
  'claude-computer-use',
  (w, h) => Math.ceil((w * h) / 750),
);

export const openaiComputerUse = makeAdapter(
  'openai-computer-use',
  (w, h) => 85 + 170 * Math.ceil(w / 512) * Math.ceil(h / 512),
);
