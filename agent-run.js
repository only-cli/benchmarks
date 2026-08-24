// End-to-end agent benchmark: run Claude Code headless (`claude -p`) on real
// tasks, one web tool per run, and read token usage, cost, and turns from its
// JSON output. Where run.js measures what a tool hands an agent per page,
// this measures what a whole task costs an agent using that tool, model
// included, which is what the model column exists for.
//
// Needs on PATH: claude, plus the tool under test (`oc` from
// @only-cli/oc, lynx, curl). The playwright condition starts the MCP
// server via npx. Every run spends real model quota; three tasks and five
// tools is fifteen agent runs.
//
// Suites, and how to run them:
//
//   node agent-run.js                          browse suite via claude -p
//   AGENT_CLI=codex node agent-run.js          browse suite via codex exec
//   node agent-run.js --suite=wiki             wiki suite via claude -p
//   AGENT_CLI=codex node agent-run.js --suite=wiki   wiki suite via codex exec
//
// The wiki suite lines the oc Wikipedia shortcut up against the two web tools
// Claude Code ships with, so it is the one suite where the conditions are
// built in tools rather than shell commands. Under codex the webfetch
// condition is skipped: codex has no fetch-one-url-through-a-model tool, and
// its own web search stands in for WebSearch via `-c tools.web_search=true`.
// The oc under test is whatever `oc` resolves to on PATH, so to measure an
// unreleased shortcut, put a shim earlier in PATH:
//
//   printf '#!/bin/sh\nexec node /path/to/oc/src/cli.js "$@"\n' > bin/oc
//   chmod +x bin/oc && PATH="$PWD/bin:$PATH" node agent-run.js --suite=wiki
//
// Useful flags either way: --tools=oc-wiki,websearch to narrow the conditions,
// --only=wiki-person to rerun one task into the saved run, --report-only to
// re-render the tables from the last saved JSON without spending a session.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Loaded after the suite is resolved; see SUITES below.
let tasks = [];
// AGENT_CLI=codex runs the same conditions through `codex exec` (OpenAI Codex
// CLI) instead of `claude -p`; results land in agent-latest-codex.{json,md}.
const AGENT = process.env.AGENT_CLI ?? 'claude';
const SUFFIX = AGENT === 'claude' ? '' : `-${AGENT}`;
const MODEL = process.env.AGENT_MODEL ?? 'sonnet';
const MAX_TURNS = 12;

// codex exec does not name its model in the JSONL stream, so read the default
// from its config when AGENT_MODEL is not set explicitly.
const CODEX_MODEL = process.env.AGENT_MODEL ?? (() => {
  try {
    return readFileSync(`${process.env.HOME}/.codex/config.toml`, 'utf8')
      .match(/^model\s*=\s*"([^"]+)"/m)?.[1];
  } catch { return undefined; }
})() ?? 'codex-default';

const PLAYWRIGHT_MCP = JSON.stringify({
  mcpServers: {
    playwright: {
      command: 'npx',
      args: ['-y', '@playwright/mcp@latest', '--browser', 'chromium', '--headless', '--isolated'],
    },
  },
});

// Each condition ships a skill in .claude/skills documenting its tool, and a
// session is allowed exactly its own skill, so every agent starts from the
// same quality of tool documentation instead of whatever it happens to know.
const CONDITIONS = [
  {
    name: 'oc',
    usage: 'the `oc` commands in Bash: `oc open <url>`, `oc do <n>` to follow a numbered link, '
      + '`oc find <query>` to locate a string on the page already open, `oc read <n>` for one '
      + 'region in full, `oc next` for the next screenful, and `oc raw <url>` when you need the '
      + 'whole page text',
    skill: 'browse-oc',
    allowed: ['Bash(oc:*)'],
  },
  {
    name: 'raw-curl',
    usage: 'the command `curl -s <url>` in Bash, reading the raw HTML yourself',
    skill: 'browse-curl',
    allowed: ['Bash(curl:*)'],
  },
  {
    name: 'lynx',
    usage: 'the command `lynx -dump <url>` in Bash',
    skill: 'browse-lynx',
    allowed: ['Bash(lynx:*)'],
  },
  {
    name: 'jina-reader',
    usage: 'the command `curl -s https://r.jina.ai/<url>` in Bash, which returns the page as markdown',
    skill: 'browse-jina',
    allowed: ['Bash(curl:*)'],
  },
  {
    name: 'playwright-mcp',
    usage: 'the playwright MCP browser tools (browser_navigate and friends)',
    skill: 'browse-playwright-mcp',
    allowed: ['mcp__playwright'],
    extraArgs: ['--mcp-config', PLAYWRIGHT_MCP, '--strict-mcp-config'],
    mcp: true,
  },
];

// The wiki suite compares the oc Wikipedia shortcut against the two web tools
// Claude Code ships with, so its conditions are the built in WebFetch and
// WebSearch rather than the shell readers the browse suite lines up. It runs
// on its own task file and its own conditions; `node agent-run.js` with no
// flags still runs the browse suite exactly as before.
const WIKI_CONDITIONS = [
  {
    name: 'oc-wiki',
    usage: 'the `oc` commands in Bash, including its Wikipedia shortcuts: '
      + '`oc wiki search <query>`, `oc wiki article <title>`, `oc wiki lang <code> <title>`, '
      + 'plus `oc do <n>`, `oc find <query>`, `oc read <n>`, `oc next`, and `oc raw`',
    skill: 'browse-oc-wiki',
    allowed: ['Bash(oc:*)'],
  },
  {
    name: 'webfetch',
    usage: 'the built in WebFetch tool, one url and a prompt per call',
    skill: 'browse-webfetch',
    allowed: ['WebFetch'],
    // Every condition is one web tool only, so each names the others it must
    // not reach for instead of sharing one blanket list.
    disallowed: 'WebSearch,Task,TodoWrite',
    // codex ships no fetch-one-url-through-a-model tool, and standing in curl
    // would measure a different thing under the same name, so this condition
    // is skipped rather than approximated when AGENT_CLI=codex.
    claudeOnly: true,
  },
  {
    name: 'websearch',
    usage: 'the built in WebSearch tool, which returns search result snippets',
    skill: 'browse-websearch',
    allowed: ['WebSearch'],
    disallowed: 'WebFetch,Task,TodoWrite',
    // codex's own web search, the nearest equivalent to WebSearch. It is off
    // by default, so the condition turns it on for its runs only.
    codexArgs: ['-c', 'tools.web_search=true'],
  },
];

// A suite is a task file plus the conditions worth putting on it, plus the
// name its results are saved under.
const SUITES = {
  browse: { tasks: 'agent-tasks.json', conditions: CONDITIONS, out: '' },
  wiki: { tasks: 'wiki-tasks.json', conditions: WIKI_CONDITIONS, out: '-wiki' },
};
const SUITE = process.argv.find((a) => a.startsWith('--suite='))?.slice('--suite='.length) ?? 'browse';
if (!SUITES[SUITE]) {
  console.error(`unknown suite '${SUITE}', one of: ${Object.keys(SUITES).join(', ')}`);
  process.exit(1);
}
const suite = SUITES[SUITE];
tasks = JSON.parse(readFileSync(new URL(`./${suite.tasks}`, import.meta.url), 'utf8'));

// Sessions run back to back, which on a task like a GitHub search means five
// tools hitting the same endpoint from one IP inside a minute. GAP_MS paces
// them so a rate limit does not land on the benchmark rather than the tool.
const GAP_MS = Number(process.env.GAP_MS ?? 0);
const pause = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

const skillBody = (name) =>
  readFileSync(new URL(`./.claude/skills/${name}/SKILL.md`, import.meta.url), 'utf8')
    .replace(/^---[\s\S]*?---\n/, '');

// codex exec has no allowed-tools equivalent (the restriction to one web tool
// is prompt-only, backed by the workspace-write sandbox), no turn cap, and it
// cannot load claude skills, so the skill body rides along in the prompt to
// keep the tool documentation identical across agents.
function runCodex(cond, prompt) {
  const args = ['exec', '--json', '--skip-git-repo-check', '--ephemeral', '--approve-for-me',
    '-c', 'sandbox_workspace_write.network_access=true'];
  if (process.env.AGENT_MODEL) args.push('-m', process.env.AGENT_MODEL);
  if (cond.codexArgs) args.push(...cond.codexArgs);
  if (cond.mcp) {
    args.push(
      '-c', 'mcp_servers.playwright.command="npx"',
      '-c', 'mcp_servers.playwright.args=["-y","@playwright/mcp@latest","--browser","chromium","--headless","--isolated"]',
    );
  }
  args.push(prompt);
  return spawnSync('codex', args, {
    cwd: fileURLToPath(new URL('./', import.meta.url)),
    encoding: 'utf8',
    timeout: 600_000,
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function parseCodex(stdout) {
  const breakdown = { input: 0, output: 0, cacheRead: 0, cacheCreation: 0 };
  let answer = '';
  let turns = 0;
  let sawUsage = false;
  for (const line of stdout.split('\n')) {
    if (!line.startsWith('{')) continue;
    let ev;
    try { ev = JSON.parse(line); } catch { continue; }
    if (ev.type === 'item.completed') {
      // codex reports one turn per exec run whatever happens inside it, so
      // count completed items (tool calls and messages) as the iterations.
      turns++;
      if (ev.item?.type === 'agent_message') answer = ev.item.text ?? answer;
    }
    if (ev.type === 'turn.completed' && ev.usage) {
      sawUsage = true;
      breakdown.input += (ev.usage.input_tokens ?? 0) - (ev.usage.cached_input_tokens ?? 0);
      breakdown.cacheRead += ev.usage.cached_input_tokens ?? 0;
      breakdown.cacheCreation += ev.usage.cache_write_input_tokens ?? 0;
      breakdown.output += ev.usage.output_tokens ?? 0;
    }
  }
  if (!sawUsage) return null;
  return { answer: answer.replace(/\s+/g, ' ').trim(), turns, breakdown };
}

// --report-only re-renders the tables from the last saved JSON, no sessions
// spent, for reformatting or inspecting a finished run.
const REPORT_ONLY = process.argv.includes('--report-only');
// --only=id,id reruns just those tasks and merges them into the saved run,
// for when a site rate-limits the machine mid-benchmark and poisons a task
// for every tool at once. Rerunning the whole suite to fix one task would
// spend twenty-odd sessions re-measuring rows that were already clean.
const ONLY = (process.argv.find((a) => a.startsWith('--only='))?.slice('--only='.length) ?? '')
  .split(',').filter(Boolean);
// --tools=id,id narrows which conditions actually run, for when only one
// tool's rows are bad (an uninstalled binary, a broken skill) and the rest
// of the row for that task is still good and shouldn't be re-spent.
const TOOLS = (process.argv.find((a) => a.startsWith('--tools='))?.slice('--tools='.length) ?? '')
  .split(',').filter(Boolean);
let activeConditions = TOOLS.length
  ? suite.conditions.filter((c) => TOOLS.includes(c.name))
  : suite.conditions;
if (AGENT === 'codex') {
  const skipped = activeConditions.filter((c) => c.claudeOnly);
  for (const c of skipped) {
    console.error(`skipping ${c.name}: no codex equivalent, claude only`);
  }
  activeConditions = activeConditions.filter((c) => !c.claudeOnly);
}

const saved = () =>
  JSON.parse(readFileSync(new URL(`./results/agent-latest${suite.out}${SUFFIX}.json`, import.meta.url), 'utf8'));
const results = REPORT_ONLY ? saved()
  : ONLY.length ? saved().filter((r) => !(ONLY.includes(r.task) && activeConditions.some((c) => c.name === r.tool)))
  : [];
const queue = REPORT_ONLY ? [] : ONLY.length ? tasks.filter((t) => ONLY.includes(t.id)) : tasks;
for (const task of queue) {
  for (const cond of activeConditions) {
    const restriction =
      `You may read the web ONLY through ${cond.usage}. Do not use any other ` +
      `way to access web content, and do not answer from memory: if the tool ` +
      `fails, say so instead of guessing.`;
    const taskBlock = `\n\nTask: ${task.goal}\nPage: ${task.url}\n\nReply with just the answer, one sentence.`;
    // Multi step tasks need room to navigate, so a task may raise the cap.
    const turnCap = task.maxTurns ?? MAX_TURNS;
    const t0 = performance.now();
    let proc;
    if (AGENT === 'codex') {
      proc = runCodex(cond, `${restriction}\n\nTool documentation:\n${skillBody(cond.skill)}${taskBlock}`);
    } else {
      proc = spawnSync('claude', [
        '-p', `${restriction} The ${cond.skill} skill documents the tool; load it first.${taskBlock}`,
        '--output-format', 'json',
        '--model', MODEL,
        '--max-turns', String(turnCap),
        '--disallowedTools', cond.disallowed ?? 'WebFetch,WebSearch,Task,TodoWrite',
        '--allowedTools', [...cond.allowed, `Skill(${cond.skill})`].join(','),
        ...(cond.extraArgs ?? []),
      ], {
        // The per-tool skills live in this repo's .claude/skills; sessions
        // must start here to see them.
        cwd: fileURLToPath(new URL('./', import.meta.url)),
        encoding: 'utf8',
        timeout: 600_000,
        maxBuffer: 64 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'pipe'],
      });
    }
    const ms = Math.round(performance.now() - t0);
    let row = { task: task.id, tool: cond.name, agent: AGENT, model: AGENT === 'codex' ? CODEX_MODEL : MODEL, ok: false, ms };
    // ok only says the agent answered. A task may also carry `expect`, a
    // regex for the fact a right answer has to contain, so a confident wrong
    // answer scores as wrong instead of as a success.
    const grade = (answer) => (task.expect
      ? new RegExp(task.expect, 'i').test(answer ?? '')
      : null);
    try {
      if (AGENT === 'codex') {
        const parsed = parseCodex(proc.stdout ?? '');
        if (!parsed) throw new Error('no usage in codex output');
        row = {
          ...row,
          ok: Boolean(parsed.answer),
          turns: parsed.turns,
          tokens: parsed.breakdown.input + parsed.breakdown.output
            + parsed.breakdown.cacheRead + parsed.breakdown.cacheCreation,
          tokenBreakdown: parsed.breakdown,
          answer: parsed.answer,
          correct: grade(parsed.answer),
        };
      } else {
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
          correct: grade(res.result),
        };
      }
    } catch (err) {
      row.error = (proc.stderr || proc.stdout || err.message || 'no output').split('\n')[0].slice(0, 120);
    }
    results.push(row);
    console.error(`${task.id} / ${cond.name} done (${row.ok ? 'ok' : 'FAILED'}, ${Math.round(ms / 1000)}s)`);
    if (GAP_MS) pause(GAP_MS);
  }
}

// Merged reruns arrive at the end of the array; put every row back in task
// then tool order so the table reads the same however the run was assembled.
const order = (r) => tasks.findIndex((t) => t.id === r.task) * 100
  + suite.conditions.findIndex((c) => c.name === r.tool);
results.sort((a, b) => order(a) - order(b));

const lines = [];
const out = (l) => { lines.push(l); console.log(l); };

// Only a suite whose tasks carry `expect` grows the correct columns, so an
// ungraded suite's report keeps exactly the shape it had before grading.
const GRADED = tasks.some((t) => t.expect);
const col = (text) => (GRADED ? text : '');

out('| task | tool | model | ok |' + col(' correct |') + ' turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |');
out('| --- | --- | --- | --- |' + col(' --- |') + ' ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |');
for (const r of results) {
  const answer = r.error ? `error: ${r.error}` : (r.answer ?? '').slice(0, 80);
  const b = r.tokenBreakdown ?? {};
  const correct = r.correct == null ? '' : r.correct ? 'yes' : 'NO';
  out(`| ${r.task} | ${r.tool} | ${r.model} | ${r.ok ? 'yes' : 'NO'} |${col(` ${correct} |`)} ${r.turns ?? ''} `
    + `| ${b.input ?? ''} | ${b.output ?? ''} | ${b.cacheRead ?? ''} | ${b.cacheCreation ?? ''} `
    + `| ${r.tokens ?? ''} | ${r.costUSD?.toFixed(4) ?? ''} | ${Math.round(r.ms / 1000)} | ${answer} |`);
}

out('\n### Summary');
const sums = suite.conditions.map((cond) => {
  const rows = results.filter((r) => r.tool === cond.name);
  const okRows = rows.filter((r) => r.ok);
  return {
    name: cond.name,
    model: rows[0]?.model ?? MODEL,
    ok: okRows.length,
    total: rows.length,
    correct: rows.filter((r) => r.correct).length,
    graded: rows.filter((r) => r.correct != null).length,
    // Cheapest only counts when the answers were also right, so a tool cannot
    // win the token column by answering fast and wrong.
    full: okRows.length === rows.length
      && rows.every((r) => r.correct == null || r.correct),
    turns: rows.reduce((sum, r) => sum + (r.turns ?? 0), 0),
    tokens: okRows.reduce((sum, r) => sum + (r.tokens ?? 0), 0),
    outTokens: okRows.reduce((sum, r) => sum + (r.tokenBreakdown?.output ?? 0), 0),
    cost: okRows.reduce((sum, r) => sum + (r.costUSD ?? 0), 0),
    hasCost: okRows.some((r) => r.costUSD != null),
    avgS: Math.round(rows.reduce((sum, r) => sum + r.ms, 0) / rows.length / 1000),
  };
});
// A tool that skipped a third of the work by failing would "win" every token
// column, so winners are picked among full-success tools only.
const full = sums.filter((s) => s.full);
const best = Object.fromEntries(['turns', 'tokens', 'outTokens', 'cost', 'avgS']
  .map((key) => [key, Math.min(...full.map((s) => s[key]))]));
const mark = (s, key, text) => `${text}${s.full && s[key] === best[key] ? ' ✅' : ''}`;
out('| tool | model | success |' + col(' correct |') + ' turns | output tokens | total tokens | total cost USD | avg s |');
out('| --- | --- | ---: |' + col(' ---: |') + ' ---: | ---: | ---: | ---: | ---: |');
for (const s of sums) {
  // codex on a ChatGPT plan reports no per-run cost; leave the cell empty
  // rather than printing a zero that looks like a measurement.
  const cost = s.hasCost ? mark(s, 'cost', s.cost.toFixed(4)) : '';
  const correct = s.graded ? `${s.correct}/${s.graded}${s.correct === s.graded ? ' ✅' : ''}` : '';
  out(`| ${s.name} | ${s.model} | ${s.full ? `${s.ok}/${s.total} ✅` : `${s.ok}/${s.total}`} `
    + `|${col(` ${correct} |`)}`
    + ` ${mark(s, 'turns', s.turns)} | ${mark(s, 'outTokens', s.outTokens)} | ${mark(s, 'tokens', s.tokens)} `
    + `| ${cost} | ${mark(s, 'avgS', s.avgS)} |`);
}
out('\nTurns count every run, failures included; token and cost totals count successes only. '
  + (GRADED ? 'The correct column grades the answer against the fact the task asked for. ' : '')
  + 'The ✅ marks the best value in each column among tools that '
  + (GRADED ? 'answered every task correctly.' : 'finished every task.'));

// Tasks come in two tiers: read one page, or navigate to a second page and
// read that. Splitting the totals shows how each tool scales per extra hop,
// which is where a bloated page view is re-read on every later turn.
const tierOf = (row) => tasks.find((t) => t.id === row.task)?.tier ?? 'single page';
const TIERS = [...new Set(tasks.map((t) => t.tier ?? 'single page'))];
if (TIERS.length > 1) {
  out('\n### Cost per tier: one page versus following a link');
  out(`| tool | ${TIERS.map((t) => `${t} tokens | ${t} turns`).join(' | ')} |`);
  out(`| --- | ${TIERS.map(() => '---: | ---:').join(' | ')} |`);
  for (const cond of CONDITIONS) {
    const cells = TIERS.map((tier) => {
      const rows = results.filter((r) => r.tool === cond.name && tierOf(r) === tier);
      const tokens = rows.reduce((sum, r) => sum + (r.tokens ?? 0), 0);
      const turns = rows.reduce((sum, r) => sum + (r.turns ?? 0), 0);
      const fails = rows.filter((r) => !r.ok).length;
      return `${tokens.toLocaleString('en-US')}${fails ? ` (${fails} failed)` : ''} | ${turns}`;
    });
    out(`| ${cond.name} | ${cells.join(' | ')} |`);
  }
  out('\nEvery run in this table counts, failures included.');
}

// The spend chart is the honest one: everything claude billed for a tool
// across all tasks, failed runs included, since those tokens were spent too.
out('\n### What each tool actually cost, failures included');
out('```');
const chart = suite.conditions.map((cond) => {
  const rows = results.filter((r) => r.tool === cond.name);
  return {
    name: cond.name,
    tokens: rows.reduce((sum, r) => sum + (r.tokens ?? 0), 0),
    turns: rows.reduce((sum, r) => sum + (r.turns ?? 0), 0),
    fails: rows.filter((r) => !r.ok).length,
  };
});
const maxTokens = Math.max(...chart.map((c) => c.tokens), 1);
for (const c of chart) {
  const bar = '#'.repeat(Math.max(1, Math.round((c.tokens / maxTokens) * 40)));
  out(`${c.name.padEnd(15)}${bar.padEnd(42)}${c.tokens.toLocaleString('en-US').padStart(8)} tokens`
    + `  ${String(c.turns).padStart(2)} turns${c.fails ? `  ${c.fails} failed` : ''}`);
}
out('```');

mkdirSync(new URL('./results/', import.meta.url), { recursive: true });
writeFileSync(new URL(`./results/agent-latest${suite.out}${SUFFIX}.json`, import.meta.url), JSON.stringify(results, null, 2));
writeFileSync(new URL(`./results/agent-latest${suite.out}${SUFFIX}.md`, import.meta.url), lines.join('\n') + '\n');
console.error(`written to results/agent-latest${suite.out}${SUFFIX}.json`);
