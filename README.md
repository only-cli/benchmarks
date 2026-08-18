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

PRs adding an adapter are welcome; an adapter is one file in `adapters/` exporting `run(url)` and returning `{ output, bytes }`, plus `status`, `fetchMs`, `processMs`, and `memMB` when the method can report them. An adapter with a model in the loop also exports `model` (for example `claude-sonnet-5`), so one tool can appear once per model it was tested with.

## The agentic browser landscape

Everything an agent can browse the web with, and whether this benchmark can measure it:

**Scriptable page readers, measurable, `model: none`.** Same lane as oc: one call in, text out, deterministic.

- Lynx, w3m, links: classic terminal browsers with a dump mode (lynx implemented)
- [Jina Reader](https://jina.ai/reader): hosted URL-to-markdown (implemented)
- [Firecrawl](https://firecrawl.dev): hosted scraping to LLM-ready markdown; adapter welcome, needs an API key
- [Trafilatura](https://trafilatura.readthedocs.io) and [readability-cli](https://gitlab.com/gardenappl/readability-cli): extraction libraries agents pipe fetched HTML through; adapters welcome

**Model-driven browser automation, measurable, fills the model column.** Token cost depends on the model driving them, so each appears once per model tested.

- [Playwright MCP](https://github.com/microsoft/playwright-mcp): accessibility-tree snapshots, the de facto standard agent browser tool (planned next)
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp): same shape on real Chrome
- [Browser Use](https://github.com/browser-use/browser-use), [Stagehand](https://github.com/browserbase/stagehand), [Skyvern](https://github.com/Skyvern-AI/skyvern): agent-browsing frameworks; adapters welcome, need a model API key

**Consumer agentic browsers, not measurable.** ChatGPT Atlas, Perplexity Comet, Claude for Chrome, Gemini in Chrome, Dia, Fellou. No CLI and no way to meter their token usage from outside, so they are listed for context, not benchmarked. If one grows a scriptable interface, it moves up a tier.

## Run it

```
node run.js
```

Node 20+, no dependencies. Results print as a markdown table and land in `results/latest.json`. By default the oc adapters run the CLI from a sibling checkout at `../only-cli`; set `OC_BIN` to point somewhere else (for example `OC_BIN="npx @only-cli/oc"`).

Network benchmarks are honest but noisy: they hit live sites, so numbers vary run to run and a site may block or change at any time. Compare orders of magnitude, not single-digit percentages.

## Latest results

only-cli 0.2.0-beta.1 (installed from `@only-cli/oc@beta`), Node 24, run on 2026-08-18 against live sites. Full per-task rows are in [results/latest.md](results/latest.md).

| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 6/6 | 1941 | 548 | 394 | 682 |
| oc-raw | none | 6/6 | 23768 | 585 | 393 | 691 |
| raw-fetch | none | 6/6 | 176659 | 283 | 283 | 691 |
| jina-reader | none | 6/6 | 16344 | 2024 | 2024 | 64 |
| lynx-dump | none | 5/6 | 25138 | 494 | 461 | 0 |

oc-open hands the agent 8x fewer tokens than the next-best method (Jina Reader) and 91x fewer than raw HTML, at the lowest latency of anything that cleans the page: Jina averages 2 seconds per page against oc's half second. GitHub repository search drops from 67,902 raw tokens to 441 with oc-open (154x), and a LinkedIn company page in guest view drops from 43,330 to 471 (92x).

The failure columns earned their keep this run. Lynx got blocked outright on the DuckDuckGo search task, raw-fetch got a challenge page there (HTTP 202, visible in the status column) instead of results, and Jina's 295-token Reddit "result" is actually Reddit's block page ("whoa there, pardner!", a 403 to Jina's crawler wrapped in a 200), counted as a success only because the harness checks for non-empty output. oc, riding its Chrome-impersonated client, was the only method that returned real content on all six tasks.

## Tasks

Tasks live in `tasks.json`: an id, a URL, and what an agent would want from the page. Add tasks that represent real agent work (read an article, scan search results, extract a discussion), not synthetic best cases for any one tool.

## Contributors

- [only-cli](https://github.com/only-cli), creator and maintainer

## License

MIT
