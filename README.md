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

It runs Claude Code headless (`claude -p`, JSON output) on the tasks in `agent-tasks.json`, once per tool condition: oc, raw curl, lynx, Jina Reader, and Playwright MCP (attached as a real MCP server). Tasks come in two tiers. Single page tasks answer a question from one URL. Multi step tasks start on one page and require finding a link and opening a second one (front page to comment thread, search results to repository, search engine to documentation site), which is where token cost compounds: the first page is re-read on every turn that follows it. A task may raise the turn cap with `maxTurns`; the default is 12. Each run is restricted to its one tool through allowed-tools rules, with WebFetch and WebSearch disabled so the model cannot cheat. Every condition also ships a matching [skill](.claude/skills) documenting its tool (browse-oc, browse-curl, browse-lynx, browse-jina, browse-playwright-mcp), and a session is allowed exactly its own, so every agent starts from the same quality of tool documentation instead of whatever the model happens to know. From the JSON it records success, turns, wall time, cost in USD, and full token usage per model: input, output, cache read, and cache creation, shown as columns in the per-run table and broken out per model in `results/agent-latest.json`. The model column finally earns its name here; set `AGENT_MODEL` to rerun the same conditions on another model. `node agent-run.js --report-only` re-renders the tables from the last saved JSON without spending any sessions.

Three methods from the page view table are missing here: browser-use and the two computer use rows. The computer use rows are not tools an agent can call at all, they are a priced screenshot floor, so putting them in a task benchmark means driving a vendor's own computer use loop and reading that API's usage instead. browser-use is a closer call, because it ships an MCP server that Claude Code or Codex can attach exactly like Playwright MCP. The problem is what happens inside it: its content extraction runs its own model (`Error: LLM not initialized (set OPENAI_API_KEY)`), and that spend is invisible to the outer agent's usage JSON, so the token column would report a fraction of what the run actually cost. Restricting it to the primitives that need no model would make it a Playwright MCP clone with the interesting part switched off. Both belong in a table of their own, compared against themselves the way codex is here, and neither is in this one.

Requirements: `claude` on PATH and logged in, `oc` on PATH (`npm install -g @only-cli/oc@beta`), lynx for the lynx condition. Fair warning: every run spends real model quota; six tasks times five tools is thirty agent sessions, a few dollars on Sonnet.

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

Claude Code headless on `claude-sonnet-5`, same date, six tasks times five tool conditions, thirty agent sessions. Three single page tasks (Hacker News front page, a GitHub repository search, an old.reddit thread) and three multi step ones (front page to the #1 story's comments, repository search to the winning repository's license, DuckDuckGo to the Rust book's introduction). Full rows with each agent's answer are in [results/agent-latest.md](results/agent-latest.md).

| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 6/6 ✅ | 31 | 2121 | 871909 | 0.7367 | 13 ✅ |
| raw-curl | claude-sonnet-5 | 4/6 | 61 | 3888 | 1031894 | 0.5409 | 39 |
| lynx | claude-sonnet-5 | 6/6 ✅ | 29 ✅ | 1967 | 772831 ✅ | 0.5492 ✅ | 14 |
| jina-reader | claude-sonnet-5 | 6/6 ✅ | 30 | 1899 ✅ | 855243 | 0.7222 | 19 |
| playwright-mcp | claude-sonnet-5 | 6/6 ✅ | 48 | 4837 | 1575695 | 1.2245 | 29 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task; a tool that skipped work by failing would otherwise "win" every token column. Charted with nothing hidden, every token claude billed for a tool across the six tasks, failed runs included:

```
oc             ###################                        871,909 tokens  31 turns
raw-curl       ########################################  1,855,550 tokens  61 turns  2 failed
lynx           #################                          772,831 tokens  29 turns
jina-reader    ##################                         855,243 tokens  30 turns
playwright-mcp ##################################        1,575,695 tokens  48 turns
```

Splitting the totals by tier shows what an extra hop costs:

| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 392,042 | 15 | 479,867 | 16 |
| raw-curl | 917,891 (2 failed) | 30 | 937,659 | 31 |
| lynx | 352,163 | 14 | 420,668 | 15 |
| jina-reader | 298,634 | 12 | 556,609 | 18 |
| playwright-mcp | 526,571 | 19 | 1,049,124 | 29 |

Four of the five tools answered all six tasks. Raw curl failed two, the GitHub search and the Reddit thread, burning its full 13-turn budget and roughly 400k tokens on each before giving up.

The honest headline of this round is that lynx, not oc, takes the token and cost columns. The reason is a missing feature, and it shows up in the multi step tier: oc's compact view leaves link URLs out to save tokens, and `oc do <n>` does not ship until v0.2, so an agent that needs to follow a link has to re-fetch the page as `oc open --json` (18.8k characters on the Hacker News front page) or `oc raw` (11.2k) to see where `[15]` points, against 1.7k for the compact view it already had. Lynx pays nothing for this: `lynx -dump` prints a references list with every URL next to the text. That navigation tax is most of oc's 59k token gap on the multi step tier, and all of it on the GitHub task (187k for oc against 140k for lynx). Numbered actions that an agent can actually activate are the fix, and they are the point of v0.2.

Where oc still stands alone is content nobody else gets. Reddit served Jina Reader and Playwright MCP a 403, so both "answered" that task by reporting the block, and raw curl failed it outright. Only oc and lynx read the thread. Two more texture notes from the multi step runs: DuckDuckGo showed Playwright MCP a CAPTCHA, so that agent navigated to the Rust book directly and said so, and raw curl needed 16 turns and half a million tokens on the same task while leaving scratch HTML files behind in the working directory.

The breakdown columns show where the money actually goes: almost everything is cache reads, because the agent re-reads its whole conversation every turn, so a bloated page is paid for again on every turn that follows it. That snowball is why raw curl's 13-turn Reddit failure costs 400k tokens, why every tool's multi step tier costs more than its single page tier, and why Playwright MCP's doubles.

Two honesty notes on the absolute numbers. Every total includes Claude Code's own session overhead, roughly 60k tokens per run, mostly cached reads of its system prompt, plus a couple of turns to load the tool's skill, so the differences between rows are the signal, not the absolute figures. And live sites move between runs: Jina Reader answered both Hacker News tasks with a cached front page whose #1 story had already rotated out, right or stale depending on when its cache last saw the page.

### The same tasks through codex

`AGENT_CLI=codex node agent-run.js` runs the identical six tasks through `codex exec`, the OpenAI Codex CLI's answer to `claude -p`, reading token usage from its `--json` event stream into [results/agent-latest-codex.md](results/agent-latest-codex.md). Codex differences: no allowed-tools equivalent, so the one-tool restriction is prompt-only; it cannot load claude skills, so the same skill body rides along in the prompt; no per-run cost on a ChatGPT plan; no turn cap; and its turns count completed tool calls and messages, since codex reports one turn per session however much happens inside it.

| tool | model | success | turns | output tokens | total tokens | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc | gpt-5.6-sol | 6/6 ✅ | 20 | 1904 | 287862 | 16 |
| raw-curl | gpt-5.6-sol | 6/6 ✅ | 21 | 2985 | 394156 | 20 |
| lynx | gpt-5.6-sol | 6/6 ✅ | 21 | 2968 | 408548 | 20 |
| jina-reader | gpt-5.6-sol | 6/6 ✅ | 18 ✅ | 1727 ✅ | 285315 ✅ | 14 ✅ |
| playwright-mcp | gpt-5.6-sol | 6/6 ✅ | 52 | 5761 | 1205046 | 64 |

```
oc             ##########                                 287,862 tokens  20 turns
raw-curl       #############                              394,156 tokens  21 turns
lynx           ##############                             408,548 tokens  21 turns
jina-reader    #########                                  285,315 tokens  18 turns
playwright-mcp ########################################  1,205,046 tokens  52 turns
```

| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 96,018 | 7 | 191,844 | 13 |
| raw-curl | 188,351 | 10 | 205,805 | 11 |
| lynx | 230,247 | 10 | 178,301 | 11 |
| jina-reader | 92,174 | 7 | 193,141 | 11 |
| playwright-mcp | 854,163 | 35 | 350,883 | 17 |

Read the success column carefully here, because six out of six is not what it looks like. Nothing errored, so every tool "finished", but four of those thirty answers are a polite report that the site refused the tool: Reddit blocked raw curl and Jina Reader, and DuckDuckGo showed raw curl and the Playwright browser a bot challenge. Counting only runs that returned the actual content, oc and lynx answered all six, Jina Reader and Playwright MCP five, raw curl four. Among the two that delivered everything, oc costs 287,862 tokens against lynx's 408,548, and Jina Reader's headline win includes a Reddit task it never read. Jina is also the only tool here that routes browsing through a third party: every URL the agent reads is sent to Jina's servers, while every other condition talks only to the target site.

Codex's per-session overhead is much smaller than Claude Code's, so its totals run well below the claude tables and the two agents should be compared within their own tables, not across them. Two rows are worth singling out. Playwright MCP spent 699,810 tokens and 27 tool calls dragging the Reddit thread through browser snapshots, more than double what oc spent on all six tasks. And oc's multi step tier costs twice its single page tier, 191,844 against 96,018, for the same reason as in the claude run: without `oc do <n>`, following a link means paying for a second, larger read of a page the agent already had.

## Tasks

Every task in both suites is documented in [TASKS.md](TASKS.md): what each page is, why it was chosen, what it turned out to measure, per task token counts for both agents, and what the suite deliberately does not cover.

Tasks live in `tasks.json`: an id, a URL, and what an agent would want from the page. Add tasks that represent real agent work (read an article, scan search results, extract a discussion), not synthetic best cases for any one tool.

Agent tasks live in `agent-tasks.json`: an id, a `tier` (`single page` or `multi step`), a URL to start from, a goal written as a question, and an optional `maxTurns`. A multi step goal should force navigation the agent cannot shortcut, and its answer should be a fact that is present in the second page's HTML, not one a JavaScript widget renders, or the task measures headless browsing rather than the tool.

## Contributors

- [only-cli](https://github.com/only-cli), creator and maintainer

## License

MIT
