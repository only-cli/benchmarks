# Browse the web in hundreds of tokens, not tens of thousands

The same live pages, eleven ways AI agents read the web: [oc](https://github.com/only-cli/oc) hands the agent a page in a few hundred tokens where raw HTML costs tens of thousands, and it was the only reader to return real content on every task. These benchmarks are the receipts, reproducible on your machine.

Every benchmark here answers the same question: for the same page and the same task, how many tokens does the agent have to read, how long does it take, and did it actually get the content?

## Metrics

The benchmark reports the same metrics oc shows agents under `--verbose`, with token usage added on top:

- **Token usage**: estimated tokens of the text the agent must ingest (chars / 4, same estimator oc uses)
- **Speed**: wall clock milliseconds end to end, plus the fetch and process split where the adapter reports it
- **HTTP status**: what the site actually answered, so a block or a challenge page shows up as itself
- **Resources**: bytes transferred over the network and memory used, where the adapter reports them
- **Success rate**: did the method return usable page content at all
- **Model**: which model drove the tool, so the same tool can be compared across models. Deterministic adapters (plain fetchers, oc itself) report `none`; agent-driven adapters like browser-use report the model they ran with

The oc adapters run with `-v` and read oc's own metrics line from stderr, so stdout, the text an agent would read, stays exactly what gets token-counted.

## Methods compared

| adapter | model | what it represents |
| --- | --- | --- |
| `oc-open` | none | oc compact view, the default agent path |
| `oc-raw` | none | oc whole-page markdown |
| `raw-fetch` | none | naive agent behavior: fetch the URL, read the raw HTML |
| `jina-reader` | none | [Jina Reader](https://jina.ai/reader), a hosted URL-to-markdown service popular in agent stacks (keyless free tier) |
| `lynx-dump` | none | `lynx -dump`, the 1992 text browser, the oldest text-only baseline (skipped unless lynx is installed; set `LYNX_BIN` to point at it) |
| `playwright-mcp` | none | [Playwright MCP](https://github.com/microsoft/playwright-mcp): what an MCP agent ingests per `browser_navigate`, the tool response plus the accessibility-tree snapshot it points at (needs `npx @playwright/mcp install-browser chrome-for-testing` once; skipped if the server cannot start) |
| `browser-use` | none | [Browser Use](https://github.com/browser-use/browser-use): the browser state message it composes for its model on every step, extracted headless via `uvx` (skipped unless [uv](https://docs.astral.sh/uv) is installed) |
| `playwright-html` | none | plain [Playwright](https://playwright.dev): JS-rendered page HTML from headless Chromium, what a script-your-own-browser agent reads (needs `uvx --with playwright playwright install chromium` once) |
| `selenium-html` | none | plain [Selenium](https://www.selenium.dev): JS-rendered `page_source`; Selenium Manager provisions its own chrome-for-testing on first run |
| `claude-computer-use` | none | screenshot floor for [Claude computer use](https://docs.claude.com/en/docs/agents-and-tools/computer-use): one real 1024x768 screenshot of the page, priced with Anthropic's published image-token formula (width x height / 750) |
| `openai-computer-use` | none | the same screenshot priced with [OpenAI's image formula](https://platform.openai.com/docs/guides/images-vision) (85 base + 170 per 512px tile); the two computer-use rows share one memoized capture, so the second reports ~0 ms |

The tool-driven rows report `model: none` because no model drives them here: the adapters measure the per-page-view payload those tools hand their model, which is the same floor whatever the model. They are floors in a second sense too: a real agent re-reads a fresh snapshot or screenshot after every click and scroll, so a five-step task pays those tokens five times, where oc pays its budget once per command. The computer-use rows are the starkest case: the screenshot price buys one look at the top third of the page, before any scrolling and before prompt or reasoning tokens.

PRs adding an adapter are welcome; an adapter is one file in `adapters/` exporting `run(url)` and returning `{ output, bytes }`, plus `status`, `fetchMs`, `processMs`, and `memMB` when the method can report them. An adapter with a model in the loop also exports `model` (for example `claude-sonnet-5`), so one tool can appear once per model it was tested with.

## The agentic browser landscape

Everything an agent can browse the web with, and whether this benchmark can measure it:

**Scriptable page readers, measurable, `model: none`.** Same lane as oc: one call in, text out, deterministic.

- Lynx, w3m, links: classic terminal browsers with a dump mode (lynx implemented)
- [Jina Reader](https://jina.ai/reader): hosted URL-to-markdown (implemented)
- Plain [Playwright](https://playwright.dev) and [Selenium](https://www.selenium.dev): script the browser yourself, read the rendered HTML (both implemented)
- [Firecrawl](https://firecrawl.dev): hosted scraping to LLM-ready markdown; adapter welcome, needs an API key
- [Trafilatura](https://trafilatura.readthedocs.io) and [readability-cli](https://gitlab.com/gardenappl/readability-cli): extraction libraries agents pipe fetched HTML through; adapters welcome

**Model-driven browser automation, measurable, fills the model column.** Their per-page-view payload is measurable without a model (implemented that way above); end-to-end task cost depends on the model driving them, so with an API key each can also appear once per model tested.

- [Playwright MCP](https://github.com/microsoft/playwright-mcp): accessibility-tree snapshots, the de facto standard agent browser tool (implemented, and also a condition in the agent benchmark below)
- [Browser Use](https://github.com/browser-use/browser-use): the popular agent-browsing framework (implemented)
- Claude computer use and [OpenAI computer use](https://platform.openai.com/docs/guides/tools-computer-use): screenshot-driven agents; their per-view screenshot floor is implemented, the full agent loop needs an API key
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp): same shape as Playwright MCP on real Chrome; adapter welcome
- [Magnitude](https://github.com/magnitudedev/magnitude), [Notte](https://github.com/nottelabs/notte), [Stagehand](https://github.com/browserbase/stagehand), [Skyvern](https://github.com/Skyvern-AI/skyvern): agent-browsing frameworks; adapters welcome, all need a model API key to do anything measurable

**Consumer agentic browsers, not measurable.** ChatGPT Atlas, Perplexity Comet, Claude for Chrome, Gemini in Chrome, Dia, Fellou. No CLI and no way to meter their token usage from outside, so they are listed for context, not benchmarked. If one grows a scriptable interface, it moves up a tier.

## Run it

```
node run.js
```

Node 20+, no dependencies. Results print as a markdown table and land in `results/latest.json`. By default the oc adapters run the CLI from a sibling checkout at `../only-cli`; set `OC_BIN` to point somewhere else (for example `OC_BIN="npx @only-cli/oc"`). Adapters whose tool is not installed announce themselves on stderr and drop out instead of failing the run.

## Agent benchmark: claude -p

`run.js` measures what a tool hands an agent per page. `agent-run.js` measures the thing you actually pay for: a whole task done by a real agent using that tool, model included.

```
node agent-run.js
```

It runs Claude Code headless (`claude -p`, JSON output) on the tasks in `agent-tasks.json`, once per tool condition: oc, raw curl, lynx, Jina Reader, and Playwright MCP (attached as a real MCP server). Each run is restricted to its one tool through allowed-tools rules, with WebFetch and WebSearch disabled so the model cannot cheat. Every condition also ships a matching [skill](.claude/skills) documenting its tool (browse-oc, browse-curl, browse-lynx, browse-jina, browse-playwright-mcp), and a session is allowed exactly its own, so every agent starts from the same quality of tool documentation instead of whatever the model happens to know. From the JSON it records success, turns, wall time, cost in USD, and full token usage per model: input, output, cache read, and cache creation, shown as columns in the per-run table and broken out per model in `results/agent-latest.json`. The model column finally earns its name here; set `AGENT_MODEL` to rerun the same conditions on another model. `node agent-run.js --report-only` re-renders the tables from the last saved JSON without spending any sessions.

Requirements: `claude` on PATH and logged in, `oc` on PATH (`npm install -g @only-cli/oc@beta`), lynx for the lynx condition. Fair warning: every run spends real model quota; three tasks times five tools is fifteen agent sessions, a dollar or two on Sonnet.

Network benchmarks are honest but noisy: they hit live sites, so numbers vary run to run and a site may block or change at any time. Compare orders of magnitude, not single-digit percentages.

## Latest results

only-cli 0.2.0-beta.1 (installed from `@only-cli/oc@beta`), Node 24, run on 2026-08-18 against live sites. Full per-task rows are in [results/latest.md](results/latest.md).

| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 6/6 | 1936 | 540 | 387 | 668 |
| oc-raw | none | 6/6 | 21334 | 541 | 353 | 682 |
| raw-fetch | none | 6/6 | 177685 | 406 | 406 | 695 |
| jina-reader | none | 6/6 | 16402 | 636 | 636 | 64 |
| lynx-dump | none | 5/6 | 24657 | 457 | 416 | 0 |
| playwright-mcp | none | 6/6 | 25832 | 365 | 365 | 0 |
| browser-use | none | 6/6 | 6470 | 2543 | 766 | 0 |
| playwright-html | none | 6/6 | 101361 | 730 | 215 | 396 |
| selenium-html | none | 6/6 | 166557 | 1189 | 334 | 651 |
| claude-computer-use | none | 6/6 | 6294 | 840 | 336 | 769 |
| openai-computer-use | none | 6/6 | 4590 | 0 | 336 | 769 |

oc-open reads all six pages for less than half the tokens of its cheapest rival, a single-screenshot floor, and 92x fewer than raw HTML. The nearest rivals are floors, not full reads: the computer-use rows price a single 1024x768 screenshot, one look at the top of the page before any scrolling, and browser-use's state message carries indexed elements but drops most page text. Among methods that actually deliver the page content, the gap is 8x to Jina Reader and 13x to Playwright MCP's accessibility snapshot, and the rendered-HTML routes (Playwright, Selenium) cost nearly as much as raw fetch plus a browser.

The failure columns earned their keep. Lynx got blocked outright on the DuckDuckGo search task, raw-fetch got DuckDuckGo's challenge page (HTTP 202, visible in the status column) instead of results, Jina's 295-token Reddit "result" is Reddit's block page ("whoa there, pardner!", a 403 to its crawler wrapped in a 200), and browser-use came back from Reddit nearly empty. oc, riding its Chrome-impersonated client, was the only cleaner that returned real content on all six tasks.

### Latest agent results

Claude Code headless on `claude-sonnet-5`, same date, three tasks (Hacker News front page, a GitHub repository search, an old.reddit thread) times five tool conditions, fifteen agent sessions. Full rows with each agent's answer are in [results/agent-latest.md](results/agent-latest.md).

| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 3/3 ✅ | 14 | 842 | 353379 | 0.2191 ✅ | 12 |
| raw-curl | claude-sonnet-5 | 2/3 | 23 | 907 | 253776 | 0.1441 | 23 |
| lynx | claude-sonnet-5 | 3/3 ✅ | 13 ✅ | 793 ✅ | 323725 ✅ | 0.2580 | 10 ✅ |
| jina-reader | claude-sonnet-5 | 3/3 ✅ | 13 ✅ | 1082 | 361603 | 0.2684 | 14 |
| playwright-mcp | claude-sonnet-5 | 3/3 ✅ | 18 | 1314 | 491779 | 0.3293 | 17 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task; a tool that skipped a third of the work by failing would otherwise "win" every token column. Charted with nothing hidden, every token claude billed for a tool across the three tasks, failed runs included:

```
oc             ######################                     353,379 tokens  14 turns
raw-curl       ########################################   651,102 tokens  23 turns  1 failed
lynx           ####################                       323,725 tokens  13 turns
jina-reader    ######################                     361,603 tokens  13 turns
playwright-mcp ##############################             491,779 tokens  18 turns
```

oc finished all three tasks at the lowest cost of any full-success condition, and oc and lynx were the only tools whose answers were real content on every task: Jina Reader and Playwright MCP "completed" the Reddit task by correctly reporting that Reddit blocks them, an answer but not the content, where oc's Chrome-impersonated client read the thread. Raw curl burned its full 13-turn budget on that task, roughly 400k tokens and twenty cents, and returned nothing; its totals above count only its successes. Lynx kept pace here because these three sites tolerate it; the page-level table above shows what happens when one does not (DuckDuckGo).

The breakdown columns show where the money actually goes: almost everything is cache reads, because the agent re-reads its whole conversation every turn, so a bloated page is paid for again on every turn that follows it. That snowball is why raw curl's 13-turn Reddit failure costs 400k tokens, and why handing the agent a compact page pays off more the longer the task runs.

Two honesty notes on the absolute numbers. Every total includes Claude Code's own session overhead, roughly 60k tokens per run, mostly cached reads of its system prompt, plus a couple of turns to load the tool's skill, so the differences between rows are the signal, not the absolute figures. And live sites move between runs: Jina Reader answered the Hacker News task with a cached front page whose #1 story had already rotated out, right or stale depending on when its cache last saw the page.

### The same tasks through codex

`AGENT_CLI=codex node agent-run.js` runs the identical conditions through `codex exec`, the OpenAI Codex CLI's answer to `claude -p`, reading token usage from its `--json` event stream into [results/agent-latest-codex.md](results/agent-latest-codex.md). Codex differences: no allowed-tools equivalent, so the one-tool restriction is prompt-only; it cannot load claude skills, so the same skill body rides along in the prompt; no per-run cost on a ChatGPT plan; no turn cap; and its turns count completed tool calls and messages, since codex reports one turn per session however much happens inside it.

| tool | model | success | turns | output tokens | total tokens | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc | gpt-5.6-sol | 3/3 ✅ | 8 | 1021 | 110551 | 16 |
| raw-curl | gpt-5.6-sol | 3/3 ✅ | 46 | 7391 | 978663 | 74 |
| lynx | gpt-5.6-sol | 3/3 ✅ | 11 | 2692 | 201790 | 28 |
| jina-reader | gpt-5.6-sol | 3/3 ✅ | 7 ✅ | 524 ✅ | 91942 ✅ | 12 ✅ |
| playwright-mcp | gpt-5.6-sol | 3/3 ✅ | 10 | 1024 | 190825 | 23 |

```
oc             #####                                      110,551 tokens   8 turns
raw-curl       ########################################   978,663 tokens  46 turns
lynx           ########                                   201,790 tokens  11 turns
jina-reader    ####                                        91,942 tokens   7 turns
playwright-mcp ########                                   190,825 tokens  10 turns
```

Same story, sharper edges. Codex's per-session overhead is far smaller than Claude Code's, so every total shrinks, and the tool differences stand out more. Jina Reader's check marks come with the same asterisk as before: its Reddit "success" (and Playwright MCP's) was a one-sentence report that Reddit blocked it, not the content. Among tools that actually delivered the page on all three tasks, oc is the cheapest at 110,551 tokens across 8 tool calls. The most instructive row is raw curl: where the turn-capped claude gave up on Reddit, codex kept grinding and eventually got the answer, at 41 iterations, 872k tokens, and 191 seconds for that one task, nearly 8x oc's whole three-task total. Token bloat does not always make an agent fail; it makes the same answer cost an order of magnitude more.

## Tasks

Tasks live in `tasks.json`: an id, a URL, and what an agent would want from the page. Add tasks that represent real agent work (read an article, scan search results, extract a discussion), not synthetic best cases for any one tool.

## Contributors

- [only-cli](https://github.com/only-cli), creator and maintainer

## License

MIT
