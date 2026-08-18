import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);

// Default to a sibling checkout so the benchmark runs against work in
// progress; OC_BIN overrides (for example OC_BIN="npx only-cli").
const OC = process.env.OC_BIN ?? 'node ../only-cli/src/cli.js';
const [cmd, ...baseArgs] = OC.split(' ');

// oc -v prints its metrics line on stderr, so stdout (what the agent reads,
// and what we count tokens on) is untouched. Parse that line back out so the
// benchmark reports the same numbers oc shows agents.
const METRICS = /HTTP (\d+) via ([^,]+), fetch (\d+)ms, process (\d+)ms, (\d+)KB transferred, (\d+)MB memory/;

async function oc(args) {
  const { stdout, stderr } = await exec(cmd, [...baseArgs, ...args, '-v'], { maxBuffer: 64 * 1024 * 1024 });
  const m = stderr.match(METRICS);
  return {
    output: stdout,
    bytes: m ? Number(m[5]) * 1024 : Buffer.byteLength(stdout),
    status: m ? Number(m[1]) : undefined,
    fetchMs: m ? Number(m[3]) : undefined,
    processMs: m ? Number(m[4]) : undefined,
    memMB: m ? Number(m[6]) : undefined,
  };
}

export const ocOpen = { name: 'oc-open', run: (url) => oc(['open', url]) };
export const ocRaw = { name: 'oc-raw', run: (url) => oc(['raw', url]) };
