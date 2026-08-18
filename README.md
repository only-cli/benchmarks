# only-cli benchmarks

Reproducible comparisons of [oc](https://github.com/only-cli/oc) against other ways AI agents read the web. The question every benchmark here answers: for the same page and the same task, how many tokens does the agent have to read, how long does it take, and did it actually get the content?

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

It runs Claude Code headless (`claude -p`, JSON output) on the tasks in `agent-tasks.json`, once per tool condition: oc, raw curl, lynx, Jina Reader, and Playwright MCP (attached as a real MCP server). Each run is restricted to its one tool through allowed-tools rules, with WebFetch and WebSearch disabled so the model cannot cheat. From the JSON it records success, turns, wall time, cost in USD, and full token usage per model: input, output, cache read, and cache creation, summed into the table and broken out in `results/agent-latest.json`. The model column finally earns its name here; set `AGENT_MODEL` to rerun the same conditions on another model.

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

oc-open hands the agent 3x fewer tokens than anything else on the board and 92x fewer than raw HTML. The nearest rivals are floors, not full reads: the computer-use rows price a single 1024x768 screenshot, one look at the top of the page before any scrolling, and browser-use's state message carries indexed elements but drops most page text. Among methods that actually deliver the page content, the gap is 8x to Jina Reader and 13x to Playwright MCP's accessibility snapshot, and the rendered-HTML routes (Playwright, Selenium) cost nearly as much as raw fetch plus a browser.

The failure columns earned their keep. Lynx got blocked outright on the DuckDuckGo search task, raw-fetch got DuckDuckGo's challenge page (HTTP 202, visible in the status column) instead of results, Jina's 295-token Reddit "result" is Reddit's block page ("whoa there, pardner!", a 403 to its crawler wrapped in a 200), and browser-use came back from Reddit nearly empty. oc, riding its Chrome-impersonated client, was the only cleaner that returned real content on all six tasks.

### Latest agent results

Claude Code headless on `claude-sonnet-5`, same date, three tasks (Hacker News front page, a GitHub repository search, an old.reddit thread) times five tool conditions, fifteen agent sessions. Full rows with each agent's answer are in [results/agent-latest.md](results/agent-latest.md).

| tool | model | success | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 3/3 | 291938 | 0.2026 | 11 |
| raw-curl | claude-sonnet-5 | 2/3 | 236852 | 0.1559 | 27 |
| lynx | claude-sonnet-5 | 3/3 | 261073 | 0.2324 | 10 |
| jina-reader | claude-sonnet-5 | 2/3 | 140365 | 0.1730 | 24 |
| playwright-mcp | claude-sonnet-5 | 2/3 | 285364 | 0.3224 | 31 |

oc and lynx were the only conditions to finish all three tasks with real answers, and oc did it on the fewest tokens and the lowest cost of any full-success run. Token and cost totals count successful runs only, which understates how expensive failure is: raw curl, Jina Reader, and Playwright MCP each burned the full 13-turn budget on the Reddit task, roughly 400k tokens and twenty cents apiece, and returned nothing. Raw curl drowned in the page HTML; Reddit blocks both Jina's crawler and Playwright's automated browser, where oc's Chrome-impersonated client read the thread in 4 turns. Lynx kept pace here because these three sites tolerate it; the page-level table above shows what happens when one does not (DuckDuckGo).

Two honesty notes on the absolute numbers. Every total includes Claude Code's own session overhead, roughly 60k tokens per run, mostly cached reads of its system prompt, so the differences between rows are the signal, not the absolute figures. And live sites move between runs: Jina Reader answered the Hacker News task with a cached front page whose #1 story had already rotated out, right or stale depending on when its cache last saw the page.

## Tasks

Tasks live in `tasks.json`: an id, a URL, and what an agent would want from the page. Add tasks that represent real agent work (read an article, scan search results, extract a discussion), not synthetic best cases for any one tool.

## Contributors

- [only-cli](https://github.com/only-cli), creator and maintainer

## License

MIT
