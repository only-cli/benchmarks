import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);

// Default to a sibling checkout so the benchmark runs against work in
// progress; OC_BIN overrides (for example OC_BIN="npx only-cli").
const OC = process.env.OC_BIN ?? 'node ../only-cli/src/cli.js';
const [cmd, ...baseArgs] = OC.split(' ');

async function oc(args) {
  const { stdout } = await exec(cmd, [...baseArgs, ...args], { maxBuffer: 64 * 1024 * 1024 });
  return { output: stdout, bytes: Buffer.byteLength(stdout) };
}

export const ocOpen = { name: 'oc-open', run: (url) => oc(['open', url]) };
export const ocRaw = { name: 'oc-raw', run: (url) => oc(['raw', url]) };
