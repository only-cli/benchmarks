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
import { fileURLToPath } from 'node:url';

const tasks = JSON.parse(readFileSync(new URL('./agent-tasks.json', import.meta.url), 'utf8'));
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
    usage: 'the command `oc open <url>` in Bash (and `oc raw <url>` when you need the full page text)',
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

const results = REPORT_ONLY
  ? JSON.parse(readFileSync(new URL(`./results/agent-latest${SUFFIX}.json`, import.meta.url), 'utf8'))
  : [];
for (const task of REPORT_ONLY ? [] : tasks) {
  for (const cond of CONDITIONS) {
    const restriction =
      `You may read the web ONLY through ${cond.usage}. Do not use any other ` +
      `way to access web content, and do not answer from memory: if the tool ` +
      `fails, say so instead of guessing.`;
    const taskBlock = `\n\nTask: ${task.goal}\nPage: ${task.url}\n\nReply with just the answer, one sentence.`;
    const t0 = performance.now();
    let proc;
    if (AGENT === 'codex') {
      proc = runCodex(cond, `${restriction}\n\nTool documentation:\n${skillBody(cond.skill)}${taskBlock}`);
    } else {
      proc = spawnSync('claude', [
        '-p', `${restriction} The ${cond.skill} skill documents the tool; load it first.${taskBlock}`,
        '--output-format', 'json',
        '--model', MODEL,
        '--max-turns', String(MAX_TURNS),
        '--disallowedTools', 'WebFetch,WebSearch,Task,TodoWrite',
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
        };
      }
    } catch (err) {
      row.error = (proc.stderr || proc.stdout || err.message || 'no output').split('\n')[0].slice(0, 120);
    }
    results.push(row);
    console.error(`${task.id} / ${cond.name} done (${row.ok ? 'ok' : 'FAILED'}, ${Math.round(ms / 1000)}s)`);
  }
}

const lines = [];
const out = (l) => { lines.push(l); console.log(l); };

out('| task | tool | model | ok | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |');
out('| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |');
for (const r of results) {
  const answer = r.error ? `error: ${r.error}` : (r.answer ?? '').slice(0, 80);
  const b = r.tokenBreakdown ?? {};
  out(`| ${r.task} | ${r.tool} | ${r.model} | ${r.ok ? 'yes' : 'NO'} | ${r.turns ?? ''} `
    + `| ${b.input ?? ''} | ${b.output ?? ''} | ${b.cacheRead ?? ''} | ${b.cacheCreation ?? ''} `
    + `| ${r.tokens ?? ''} | ${r.costUSD?.toFixed(4) ?? ''} | ${Math.round(r.ms / 1000)} | ${answer} |`);
}

out('\n### Summary');
const sums = CONDITIONS.map((cond) => {
  const rows = results.filter((r) => r.tool === cond.name);
  const okRows = rows.filter((r) => r.ok);
  return {
    name: cond.name,
    model: rows[0]?.model ?? MODEL,
    ok: okRows.length,
    total: rows.length,
    full: okRows.length === rows.length,
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
out('| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |');
out('| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |');
for (const s of sums) {
  // codex on a ChatGPT plan reports no per-run cost; leave the cell empty
  // rather than printing a zero that looks like a measurement.
  const cost = s.hasCost ? mark(s, 'cost', s.cost.toFixed(4)) : '';
  out(`| ${s.name} | ${s.model} | ${s.full ? `${s.ok}/${s.total} ✅` : `${s.ok}/${s.total}`} `
    + `| ${mark(s, 'turns', s.turns)} | ${mark(s, 'outTokens', s.outTokens)} | ${mark(s, 'tokens', s.tokens)} `
    + `| ${cost} | ${mark(s, 'avgS', s.avgS)} |`);
}
out('\nTurns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task.');

// The spend chart is the honest one: everything claude billed for a tool
// across all tasks, failed runs included, since those tokens were spent too.
out('\n### What each tool actually cost, failures included');
out('```');
const chart = CONDITIONS.map((cond) => {
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
writeFileSync(new URL(`./results/agent-latest${SUFFIX}.json`, import.meta.url), JSON.stringify(results, null, 2));
writeFileSync(new URL(`./results/agent-latest${SUFFIX}.md`, import.meta.url), lines.join('\n') + '\n');
console.error(`written to results/agent-latest${SUFFIX}.json`);
