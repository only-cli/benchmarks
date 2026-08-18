// End-to-end agent benchmark: run Claude Code headless (`claude -p`) on real
// tasks, one web tool per run, and read token usage, cost, and turns from its
// JSON output. Where run.js measures what a tool hands an agent per page,
// this measures what a whole task costs an agent using that tool, model
// included, which is what the model column exists for.
//
// Needs on PATH: claude, plus the tool under test (`oc` from
// @only-cli/oc@beta, lynx, curl). The playwright condition starts the MCP
// server via npx. Every run spends real model quota; three tasks and five
// tools is fifteen agent runs.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const tasks = JSON.parse(readFileSync(new URL('./agent-tasks.json', import.meta.url), 'utf8'));
const MODEL = process.env.AGENT_MODEL ?? 'sonnet';
const MAX_TURNS = 12;

const PLAYWRIGHT_MCP = JSON.stringify({
  mcpServers: {
    playwright: {
      command: 'npx',
      args: ['-y', '@playwright/mcp@latest', '--browser', 'chromium', '--headless', '--isolated'],
    },
  },
});

const CONDITIONS = [
  {
    name: 'oc',
    usage: 'the command `oc open <url>` in Bash (and `oc raw <url>` when you need the full page text)',
    args: ['--allowedTools', 'Bash(oc:*)'],
  },
  {
    name: 'raw-curl',
    usage: 'the command `curl -s <url>` in Bash, reading the raw HTML yourself',
    args: ['--allowedTools', 'Bash(curl:*)'],
  },
  {
    name: 'lynx',
    usage: 'the command `lynx -dump <url>` in Bash',
    args: ['--allowedTools', 'Bash(lynx:*)'],
  },
  {
    name: 'jina-reader',
    usage: 'the command `curl -s https://r.jina.ai/<url>` in Bash, which returns the page as markdown',
    args: ['--allowedTools', 'Bash(curl:*)'],
  },
  {
    name: 'playwright-mcp',
    usage: 'the playwright MCP browser tools (browser_navigate and friends)',
    args: ['--allowedTools', 'mcp__playwright', '--mcp-config', PLAYWRIGHT_MCP, '--strict-mcp-config'],
  },
];

const results = [];
for (const task of tasks) {
  for (const cond of CONDITIONS) {
    const prompt =
      `You may read the web ONLY through ${cond.usage}. Do not use any other ` +
      `way to access web content.\n\nTask: ${task.goal}\nPage: ${task.url}\n\n` +
      `Reply with just the answer, one sentence.`;
    const t0 = performance.now();
    const proc = spawnSync('claude', [
      '-p', prompt,
      '--output-format', 'json',
      '--model', MODEL,
      '--max-turns', String(MAX_TURNS),
      '--disallowedTools', 'WebFetch,WebSearch,Task,TodoWrite',
      ...cond.args,
    ], {
      encoding: 'utf8',
      timeout: 600_000,
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const ms = Math.round(performance.now() - t0);
    let row = { task: task.id, tool: cond.name, model: MODEL, ok: false, ms };
    try {
      // claude may print warnings before the JSON; parse from the first brace.
      const res = JSON.parse(proc.stdout.slice(proc.stdout.indexOf('{')));
      const mu = Object.entries(res.modelUsage ?? {});
      const sum = (pick) => mu.reduce((total, [, u]) => total + (pick(u) ?? 0), 0);
      const breakdown = {
        input: sum((u) => u.inputTokens),
        output: sum((u) => u.outputTokens),
        cacheRead: sum((u) => u.cacheReadInputTokens),
        cacheCreation: sum((u) => u.cacheCreationInputTokens),
      };
      // claude -p also bills small auxiliary models; label the row with the
      // model that did the talking and keep the full list in the JSON.
      const primary = [...mu].sort((a, b) => (b[1].outputTokens ?? 0) - (a[1].outputTokens ?? 0))[0];
      row = {
        ...row,
        model: primary?.[0] ?? MODEL,
        models: mu.map(([name]) => name),
        ok: !res.is_error && Boolean(res.result?.trim()),
        turns: res.num_turns,
        tokens: breakdown.input + breakdown.output + breakdown.cacheRead + breakdown.cacheCreation,
        tokenBreakdown: breakdown,
        costUSD: res.total_cost_usd,
        answer: (res.result ?? '').replace(/\s+/g, ' ').trim(),
      };
    } catch {
      row.error = (proc.stderr || proc.stdout || 'no output').split('\n')[0].slice(0, 120);
    }
    results.push(row);
    console.error(`${task.id} / ${cond.name} done (${row.ok ? 'ok' : 'FAILED'}, ${Math.round(ms / 1000)}s)`);
  }
}

const lines = [];
const out = (l) => { lines.push(l); console.log(l); };

out('| task | tool | model | ok | turns | total tokens | cost USD | s | answer |');
out('| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |');
for (const r of results) {
  const answer = r.error ? `error: ${r.error}` : (r.answer ?? '').slice(0, 80);
  out(`| ${r.task} | ${r.tool} | ${r.model} | ${r.ok ? 'yes' : 'NO'} | ${r.turns ?? ''} `
    + `| ${r.tokens ?? ''} | ${r.costUSD?.toFixed(4) ?? ''} | ${Math.round(r.ms / 1000)} | ${answer} |`);
}

out('\n### Summary');
out('| tool | model | success | total tokens | total cost USD | avg s |');
out('| --- | --- | ---: | ---: | ---: | ---: |');
for (const cond of CONDITIONS) {
  const rows = results.filter((r) => r.tool === cond.name);
  const okRows = rows.filter((r) => r.ok);
  const tokens = okRows.reduce((sum, r) => sum + (r.tokens ?? 0), 0);
  const cost = okRows.reduce((sum, r) => sum + (r.costUSD ?? 0), 0);
  const avgS = Math.round(rows.reduce((sum, r) => sum + r.ms, 0) / rows.length / 1000);
  out(`| ${cond.name} | ${rows[0]?.model ?? MODEL} | ${okRows.length}/${rows.length} | ${tokens} | ${cost.toFixed(4)} | ${avgS} |`);
}

mkdirSync(new URL('./results/', import.meta.url), { recursive: true });
writeFileSync(new URL('./results/agent-latest.json', import.meta.url), JSON.stringify(results, null, 2));
writeFileSync(new URL('./results/agent-latest.md', import.meta.url), lines.join('\n') + '\n');
console.error('written to results/agent-latest.json');
