# Browse the web in hundreds of tokens, not tens of thousands

Reproducible benchmarks for how AI agents read the web. The same live pages and the same tasks, read eleven ways, [oc](https://github.com/only-cli/oc) among them. Every suite asks one question: how many tokens does the agent have to ingest, how long does it take, and did it actually get the content?

**Where things stand** (oc 0.5.0, August 2026, live sites):

- **142x fewer tokens than raw HTML** across 15 real pages: 10,936 against 1,552,491. 14x fewer than Jina Reader, 49x fewer than Playwright MCP's accessibility snapshot.
- **The only reader that returned real content on every page.** Reddit blocked curl, Jina Reader and Playwright; Jina also failed LinkedIn and Yahoo Finance; DuckDuckGo blocked lynx. oc's Chrome impersonation read all fifteen.
- **Half the cost of Claude Code's built-in WebSearch on Wikipedia lookups**: $0.27 against $0.52 for five questions, both 5/5 correct, on 29x less fresh input.
- **23% cheaper than WebFetch and 35% cheaper than WebSearch** on eleven language docs lookups, at equal or better accuracy.
- **Not a clean sweep.** Under Codex, its own web search beat `oc docs` by 16% on those same lookups because the answers were already in the search snippets. On the thirteen-task browse suite lynx used 20% fewer tokens than oc, most of the gap on one reference page where oc's own `find` pointed the agent at the wrong block. Both results are below, with the reasons.

## Quick start

```
node run.js                                       # page view suite, no model needed
node agent-run.js                                 # browse tasks through claude -p
node agent-run.js --suite=wiki                    # Wikipedia lookups
node agent-run.js --suite=docs                    # language docs lookups
AGENT_CLI=codex node agent-run.js --suite=docs    # any agent suite through codex exec
node agent-run.js --report-only                   # re-render tables from the saved JSON
```

Node 20+, no dependencies. Results print as a markdown table and land in `results/`. Adapters whose tool is not installed announce themselves on stderr and drop out instead of failing the run.

| variable | what it does |
| --- | --- |
| `OC_BIN` | which oc the page suite runs; defaults to a sibling checkout at `../only-cli`, or `OC_BIN="npx -y @only-cli/oc@0.5.0"` for the published package |
| `AGENT_CLI` | `claude` (default) or `codex` |
| `AGENT_MODEL` | rerun the same conditions on another model |
| `LYNX_BIN` | where lynx lives if it is not on PATH |

The agent suites need `claude` (or `codex`) on PATH and logged in, plus `oc` (`npm install -g @only-cli/oc`). To measure an unreleased oc, shim it ahead on PATH:

```
printf '#!/bin/sh\nexec node /path/to/oc/src/cli.js "$@"\n' > bin/oc
chmod +x bin/oc && PATH="$PWD/bin:$PATH" node agent-run.js --suite=wiki
```

Fair warning: every agent run spends real model quota. Thirteen tasks times five tools is sixty-five sessions, a few dollars on Sonnet.

## The four suites

| suite | question it answers | tasks | oc against | results |
| --- | --- | --- | --- | --- |
| Page view (`run.js`) | What does one page view cost per tool, before any model is involved? | 15 pages, `tasks.json` | curl, Jina Reader, lynx, Playwright MCP, Browser Use, Playwright, Selenium, computer-use screenshots | [latest.md](results/latest.md) |
| Browse (`agent-run.js`) | What does a whole task cost a real agent using that tool? | 13 tasks, `agent-tasks.json` | curl, lynx, Jina Reader, Playwright MCP | [claude](results/agent-latest.md), [codex](results/agent-latest-codex.md) |
| Wikipedia (`--suite=wiki`) | Is `oc wiki` worth anything next to the web tools the agent already has? | 5 lookups, `wiki-tasks.json` | WebFetch, WebSearch | [claude](results/agent-latest-wiki.md), [codex](results/agent-latest-wiki-codex.md) |
| Language docs (`--suite=docs`) | Same question for `oc docs`, one fact per language | 11 lookups, `docs-tasks.json` | WebFetch, WebSearch | [claude](results/agent-latest-docs.md), [codex](results/agent-latest-docs-codex.md) |

Every task is documented in [TASKS.md](TASKS.md): what the page is, why it was chosen, and what it turned out to measure.

## Results

### Page view: tokens per page, no model in the loop

oc 0.5.0 from npm (`OC_BIN="npx -y @only-cli/oc@0.5.0"`, so oc's timing columns include npx startup on every call), Node 22, 2026-08-24. Fifteen live pages: a news front page, a Reddit thread, search results, a stock quote, cloud and language reference pages.

| adapter | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | 15/15 | 10,936 | 1291 | 439 | 5944 |
| oc-raw | 15/15 | 257,573 | 1361 | 405 | 5956 |
| raw-fetch | 15/15 | 1,552,491 | 295 | 295 | 6067 |
| jina-reader | 13/15 | 148,479 | 3432 | 3939 | 582 |
| lynx-dump | 14/15 | 276,459 | 489 | 479 | 0 |
| playwright-mcp | 15/15 | 531,335 | 925 | 924 | 0 |
| browser-use | 15/15 | 27,645 | 4112 | 1637 | 0 |
| playwright-html | 15/15 | 1,604,438 | 1295 | 614 | 6269 |
| selenium-html | 15/15 | 1,678,987 | 1753 | 714 | 6560 |
| claude-computer-use | 15/15 | 15,735 | 1219 | 585 | 1824 |
| openai-computer-use | 15/15 | 11,475 | 0 | 585 | 1824 |

- **oc reads all fifteen pages for 10,936 tokens.** A page that fits in about four times the budget prints whole (the Hacker News front page lands at 1,178); everything larger renders near the 500 token budget however much the page weighs. The three cloud reference pages come in at 502, 488 and 467 tokens against 17,990 to 132,497 raw; the three language docs pages at 496, 481 and 475 against 27,940 to 273,820. The starkest single page is the Yahoo Finance quote: 399,881 tokens raw, 456 through oc, about 880x. Node's `fs` reference is close behind at 273,820 raw against 475, a page even lynx needs 119,604 tokens for.
- **The rows near oc are floors, not reads.** The computer-use rows price one 1024x768 screenshot per page, a look at the top third before any scrolling and before any prompt or reasoning tokens, which is why the OpenAI row is nominally the smallest. Browser Use's state message carries indexed elements but drops most of the page text. Among tools that actually deliver the content, the gap is 14x to Jina Reader and 49x to Playwright MCP, and the rendered-HTML routes (Playwright, Selenium) cost slightly more than raw fetch plus a browser.
- **Some success badges are blocks.** Jina's 295 and 283 token Reddit "results" are Reddit's block page ("whoa there, pardner!", a 403 wrapped in a 200). Playwright MCP's 207 and 184 token Reddit snapshots are blocked pages too, and Browser Use came back from both Reddit tasks nearly empty. Lynx was blocked on the DuckDuckGo search; Jina failed LinkedIn and Yahoo Finance outright. oc was the only distilling reader with real content on all fifteen.

### Browse: whole tasks through Claude Code and Codex

Single page tasks answer a question from one URL (Hacker News front page, a GitHub repository search, a Yahoo Finance quote, an old.reddit thread, a YouTube watch page, three cloud CLI reference pages). Multi step tasks start on one page and have to find and open a second (front page to the #1 story's comments, search results to the winning repository's license, DuckDuckGo to the Rust book, DuckDuckGo to an AWS reference page), which is where cost compounds: the first page is re-read on every turn that follows it. Each condition is locked to its one tool, with WebFetch and WebSearch disabled. The lynx condition ran lynx 2.9.0.

**Claude Code, `claude-sonnet-5`, 2026-08-25, oc 0.5.0.** Thirteen tasks, sixty-five sessions.

| tool | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | 13/13 | 79 | 6,328 | 2,169,710 | 0.9524 | 13 |
| raw-curl | 11/13 | 126 | 13,010 | 3,053,279 | 1.1342 | 27 |
| lynx | 13/13 | 64 | 5,005 | 1,738,779 | 0.8853 | 12 |
| jina-reader | 13/13 | 65 | 5,631 | 1,865,679 | 0.9991 | 15 |
| playwright-mcp | 13/13 | 91 | 7,548 | 2,706,043 | 1.3035 | 17 |

**Codex, `gpt-5.6-sol` at xhigh, codex 0.148.0, 2026-08-24, oc 0.4.0.** Thirteen tasks, sixty-five sessions.

| tool | success | turns | output tokens | total tokens | avg s |
| --- | ---: | ---: | ---: | ---: | ---: |
| oc | 13/13 | 68 | 9,606 | 1,092,207 | 31 |
| raw-curl | 13/13 | 60 | 9,281 | 1,585,812 | 24 |
| lynx | 13/13 | 49 | 5,280 | 707,216 | 17 |
| jina-reader | 13/13 | 59 | 6,321 | 1,016,427 | 29 |
| playwright-mcp | 13/13 | 57 | 5,826 | 1,070,006 | 28 |

- **Read the success column as "finished", not "read the page".** Under Claude, GitHub had suspended anonymous access for Jina Reader's whole service that morning (an `AbuseAlleviationError` with an expiry time), so both GitHub tasks came back as block reports, and so did both Reddit tasks: 9 real answers out of 13. Playwright MCP got Reddit's 403 twice and DuckDuckGo's CAPTCHA once: 10 of 13. Raw curl failed the GitHub search and the Yahoo Finance quote outright, 13 turns and about 400k tokens each, and reported Reddit's block page: 10 of 13. oc and lynx read all thirteen, though lynx could not see the YouTube view count, which the page renders with JavaScript. Priced per real answer: lynx 133,752 tokens, Jina Reader 165,237, oc 166,901, Playwright MCP 215,490, raw curl 292,687.
- **lynx still takes the token and cost columns, but for a different reason than last time.** The 2026-08-18 run's gap was a navigation tax: `oc do <n>` had not shipped, so following a link meant re-fetching the page. That is fixed. On `gh-repo-detail` oc now spends 135,028 tokens against lynx's 139,456 (it was 187,160 against 139,578), and across the four multi step tasks the two are within 5% (879,338 against 836,774). What remains is almost one row: `azure-hns-flag`, where oc took 13 turns and 405,331 tokens against 4 turns and about 95,000 for every other tool. Without that row oc's total is 1,764,379 against lynx's 1,643,576.
- **That outlier is an oc bug, not an agent quirk.** On the `az storage account` reference, `oc find hierarchical` lists the flag at `[126]` and `[144]`, but `oc read` of either number returns an unrelated paragraph about account level immutability: the numbers `find` prints and the ones `read` takes do not line up on this page shape. The agent found the flag, read the wrong block, and hunted. It still answered correctly, because the `find` line itself shows the flag.
- **Under Codex, thirteen out of thirteen is not what it looks like either.** Nothing errored, but nine of the sixty-five answers are a polite report that a site refused the tool: Reddit blocked curl, Jina Reader and the Playwright browser; DuckDuckGo showed curl, lynx and Playwright a bot challenge; Yahoo rate-limited curl. Counting only runs that returned real content: oc 13, lynx 12, Jina Reader 11, curl and Playwright MCP 10 each. lynx's 707,216 is the cheapest number in the table and includes a search task it never read.
- **oc's spend has a different shape.** It took the most turns under Codex (68) because budgeted views make the agent navigate: `open`, then `find` or `do <n>`, each a small read. Its fresh input is the lowest in the run (232,681 tokens against 306,106 for Jina and 288,851 for curl), but at xhigh reasoning every extra turn re-reads the cached transcript and buys more reasoning, so its total lands mid-table. The tool that reads less per page pays in turns; the tools that dump whole pages pay in input. On this agent those roughly meet, and what separates the rows is the blocked tasks.
- **Content nobody else gets.** Only oc and lynx read either Reddit task under Claude, and only oc read the YouTube view count. DuckDuckGo showed the Playwright browser a CAPTCHA on `ddg-follow` under both agents, so that agent reported it and stopped. Raw curl spent 23 turns and 785,978 tokens on `reddit-top-comment`, and lost turns on four tasks to scratch HTML files it saved and then could not delete under the sandbox. Jina Reader is the only tool here that routes every URL the agent reads through a third party's servers, which is also how a rate limit on Jina's service, not on the agent, cost it two GitHub tasks.

<details>
<summary>Per-tier breakdown: what an extra hop costs</summary>

Claude Code, nine single page and four multi step tasks:

| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 1,290,372 | 49 | 879,338 | 30 |
| raw-curl | 1,769,753 (2 failed) | 60 | 2,117,415 | 66 |
| lynx | 902,005 | 36 | 836,774 | 28 |
| jina-reader | 1,235,754 | 42 | 629,925 | 23 |
| playwright-mcp | 1,462,391 | 52 | 1,243,652 | 39 |

Codex:

| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 379,157 | 29 | 713,050 | 39 |
| raw-curl | 380,618 | 28 | 1,205,194 | 32 |
| lynx | 403,676 | 31 | 303,540 | 18 |
| jina-reader | 736,286 | 41 | 280,141 | 18 |
| playwright-mcp | 637,801 | 35 | 432,205 | 22 |

Every run counts here, failures included. Raw curl's two Claude failures (the GitHub search and the Yahoo Finance quote) each burned the full 13-turn budget and about 400k tokens; the summary table above excludes failed runs from its token totals but counts their turns.

</details>

### Wikipedia: `oc wiki` against WebFetch and WebSearch

Five ways someone actually reaches for Wikipedia: an ambiguous term whose article competes with homonyms in cosmology and geology (`anthropic`), a person (Dario Amodei), one fact buried in a long article (when the Eiffel Tower was finished and how tall it is), a technical concept (which paper introduced the transformer), and a non-English wiki (Berlin's population on `de.wikipedia.org`). Answers are graded against an `expect` regex, because a search snippet can produce a fluent answer about the wrong Anthropic, and a token count next to a wrong answer is not a saving.

**Claude Code, `claude-sonnet-5`, 2026-08-23, oc 0.4.0.** Fifteen sessions.

| tool | success | correct | turns | input tokens | total tokens | total cost USD | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-wiki | 5/5 | 5/5 | 22 | 5,535 | 549,823 | 0.2692 | 11 |
| webfetch | 5/5 | 5/5 | 25 | 128,792 | 766,491 | 0.3727 | 14 |
| websearch | 5/5 | 5/5 | 27 | 160,431 | 870,953 | 0.5243 | 22 |

**Codex, `gpt-5.6-sol` at xhigh, 2026-08-24, oc 0.4.0.** `webfetch` skipped: codex has no fetch-one-URL tool.

| tool | success | correct | turns | input tokens | total tokens | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-wiki | 5/5 | 5/5 | 13 | 34,189 | 165,460 | 19 |
| websearch | 5/5 | 4/5 | 13 | 49,255 | 193,290 | 16 |

- **On Claude this is a cost result, not an accuracy one.** All three conditions got 5/5. oc's 500 token budget keeps its fresh input flat at roughly 1,100 tokens per task, while WebFetch pays for whatever the article weighs: 6,379 tokens on a short stub, 39,264 on the German Berlin article, a 5.7x to 35x per-task spread. The totals sit closer together because cache reads of the agent's own prompt dominate them.
- **On Codex it is an accuracy result too.** Codex's web search answered the Berlin question with a stale population the current article no longer shows. `oc wiki lang de Berlin` read the infobox and got it right, on fewer input tokens per task.

### Language docs: `oc docs` against WebFetch and WebSearch

One canonical lookup per language shortcut oc ships: the default of `json.dumps`'s `sort_keys` (Python), `Array.prototype.at` with a negative index (MDN), the option `fs.rm` needs for a non-empty directory (Node.js), `Array#dig` on a nil step (Ruby), the `json:"-"` struct tag (Go), what `Vec::pop` returns (Rust), what `Optional.get` throws (Java), whether `array_filter` keeps keys (PHP), what `Partial<Type>` does (TypeScript), what `vector::at` throws (C++ via cppreference), and `String.IsNullOrWhiteSpace` on spaces (.NET via Microsoft Learn). Same conditions and grading as the wiki suite.

**Claude Code, `claude-sonnet-5`, 2026-08-24, oc 0.5.0** (the language docs branch, shimmed onto PATH before it shipped). Thirty-three sessions.

| tool | success | correct | turns | input tokens | total tokens | total cost USD | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-docs | 11/11 | 11/11 | 55 | 12,965 | 1,446,195 | 0.5731 | 9 |
| webfetch | 11/11 | 10/11 | 55 | 203,489 | 1,607,034 | 0.7434 | 11 |
| websearch | 11/11 | 11/11 | 55 | 209,782 | 1,613,874 | 0.8857 | 15 |

**Codex, `gpt-5.6-sol` at xhigh, 2026-08-24, same oc.** `webfetch` skipped.

| tool | success | correct | turns | input tokens | total tokens | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-docs | 11/11 | 11/11 | 39 | 155,700 | 481,628 | 18 |
| websearch | 11/11 | 11/11 | 24 | 116,961 | 406,312 | 11 |

- **On Claude, oc is 23% cheaper than WebFetch and 35% cheaper than WebSearch in dollars, at equal or better accuracy.** Its fresh input is flat at roughly 1,175 tokens per task whatever the page weighs; WebFetch pays 8,604 on the light PHP manual page and 39,613 on Ruby's `Array` class, a 7x to 34x per-task spread. WebFetch's one wrong answer is an access result: cppreference.com returned 403 Forbidden to it, twice, while oc's Chrome impersonation reads the same page.
- **On Codex the built-in tool wins, 16% cheaper.** These are exactly the canonical facts a search snippet already contains, and Codex's web search answered most tasks in two turns without opening a page. The shortcut still buys determinism, since it reads the actual reference page rather than trusting a snippet, which is what decided the Berlin question above. But on well-indexed one-fact lookups Codex's own search is already efficient, and honest numbers say so.

## Reading the numbers

- **Compare rows within a table, never across agents.** Every Claude Code total includes roughly 60k tokens of session overhead per run, mostly cached reads of its system prompt, plus a couple of turns to load the tool's skill. Codex's per-session overhead is much smaller, so its totals run well below the Claude tables. Differences between rows are the signal, not the absolute figures.
- **Almost everything is cache reads.** The agent re-reads its whole conversation every turn, so a bloated page is paid for again on every turn that follows it. That snowball is why each of raw curl's 13-turn failures costs about 400k tokens, why every tool's multi step tier costs more than its single page tier, and why Playwright MCP's doubles.
- **"Success" means the run finished.** In the browse suite a politely reported block page counts as a success. The wiki and docs suites grade every answer against an `expect` regex, and cheapest only counts among conditions that got every answer right, since a tool that skipped work by failing would otherwise win every token column.
- **The conditions are not handed identical inputs.** WebFetch and oc are given the starting URL; WebSearch gets the question and has to find the page itself, which is what that tool is for but is a different job, and part of why it costs the most.
- **Codex differs from Claude Code in ways that shape its tables.** No allowed-tools equivalent, so the one-tool restriction is prompt-only; it cannot load skills, so the same skill body rides along in the prompt; no per-run cost on a ChatGPT plan; no turn cap; and its turns count completed tool calls and messages, since codex reports one turn per session. Its own web search stands in for WebSearch via `-c tools.web_search=true`; `webfetch` is skipped rather than approximated.
- **Claude Code's model router** picked `claude-haiku-4-5` for three of the fifteen wiki sessions and one docs session, visible in the model column of the full rows. The rankings do not change on the Sonnet rows alone.
- **Live sites are noisy.** Numbers move between runs, and a site may block or change at any time. Compare orders of magnitude, not single-digit percentages.

## What is measured

The page view suite reports what oc shows agents under `--verbose`, with token usage on top:

- **Tokens**: chars / 4 over the text the agent must ingest, the same estimator oc uses. The oc adapters run with `-v` and read oc's metrics line from stderr, so stdout, the text an agent would read, is exactly what gets counted.
- **Speed**: wall clock end to end, with the fetch and process split where the adapter reports it.
- **HTTP status**: what the site actually answered, so a block or a challenge page shows up as itself.
- **Resources**: bytes over the network and memory used, where the adapter reports them.
- **Model**: `none` for deterministic adapters; the agent suites fill it in, so the same tool can be compared across models.

The agent suites run Claude Code headless (`claude -p`, JSON output) or `codex exec` (`--json` event stream) once per tool condition and record success, turns, wall time, cost in USD where the agent reports it, and full token usage per model: input, output, cache read, cache creation. Each condition ships a matching [skill](.claude/skills) documenting its tool and is allowed exactly its own, so every agent starts from the same quality of tool documentation instead of whatever the model happens to know. The default turn cap is 12; a task may raise it with `maxTurns`.

## Methods compared

| adapter | what it represents |
| --- | --- |
| `oc-open` | oc compact view, the default agent path |
| `oc-raw` | oc whole-page markdown |
| `raw-fetch` | naive agent behavior: fetch the URL, read the raw HTML |
| `jina-reader` | [Jina Reader](https://jina.ai/reader), a hosted URL-to-markdown service popular in agent stacks (keyless free tier) |
| `lynx-dump` | `lynx -dump`, the 1992 text browser, the oldest text-only baseline (needs lynx) |
| `playwright-mcp` | [Playwright MCP](https://github.com/microsoft/playwright-mcp): what an MCP agent ingests per `browser_navigate`, the tool response plus the accessibility-tree snapshot it points at (needs `npx @playwright/mcp install-browser chrome-for-testing` once) |
| `browser-use` | [Browser Use](https://github.com/browser-use/browser-use): the browser state message it composes for its model on every step, extracted headless via `uvx` (needs [uv](https://docs.astral.sh/uv)) |
| `playwright-html` | plain [Playwright](https://playwright.dev): JS-rendered page HTML from headless Chromium, what a script-your-own-browser agent reads (needs `uvx --with playwright playwright install chromium` once) |
| `selenium-html` | plain [Selenium](https://www.selenium.dev): JS-rendered `page_source`; Selenium Manager provisions its own chrome-for-testing on first run |
| `claude-computer-use` | screenshot floor for [Claude computer use](https://docs.claude.com/en/docs/agents-and-tools/computer-use): one real 1024x768 screenshot, priced with Anthropic's image-token formula (width x height / 750) |
| `openai-computer-use` | the same screenshot priced with [OpenAI's image formula](https://platform.openai.com/docs/guides/images-vision) (85 base + 170 per 512px tile); shares one memoized capture with the row above, hence ~0 ms |

The tool-driven rows measure the per-page-view payload those tools hand their model, which is the same floor whatever the model. They are floors in a second sense too: a real agent re-reads a fresh snapshot or screenshot after every click and scroll, so a five-step task pays those tokens five times, where oc pays its budget once per command.

Browser Use and the computer-use rows are left out of the browse suite on purpose. Computer use is a priced screenshot floor, not a tool an agent can call; benchmarking it means driving a vendor's own loop and reading that API's usage instead. Browser Use ships an MCP server, but its content extraction runs its own model (`Error: LLM not initialized (set OPENAI_API_KEY)`), invisible to the outer agent's usage JSON, so its token column would report a fraction of the real cost, and restricting it to model-free primitives would make it a Playwright MCP clone with the interesting part switched off. Both belong in a table of their own.

**Not measured yet, adapters welcome:** [Firecrawl](https://firecrawl.dev) (needs an API key), [Trafilatura](https://trafilatura.readthedocs.io) and [readability-cli](https://gitlab.com/gardenappl/readability-cli), [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp), and the agent-browsing frameworks [Magnitude](https://github.com/magnitudedev/magnitude), [Notte](https://github.com/nottelabs/notte), [Stagehand](https://github.com/browserbase/stagehand) and [Skyvern](https://github.com/Skyvern-AI/skyvern), which all need a model API key to do anything measurable. **Not measurable:** consumer agentic browsers (ChatGPT Atlas, Perplexity Comet, Claude for Chrome, Gemini in Chrome, Dia, Fellou) have no CLI and no way to meter their token usage from outside. If one grows a scriptable interface, it moves up a tier.

## Contributing

- **An adapter** is one file in `adapters/` exporting `run(url)` and returning `{ output, bytes }`, plus `status`, `fetchMs`, `processMs` and `memMB` when the method can report them. An adapter with a model in the loop also exports `model` (for example `claude-sonnet-5`), so one tool can appear once per model it was tested with.
- **A page task** (`tasks.json`) is an id, a URL, and what an agent would want from the page. Add tasks that represent real agent work (read an article, scan search results, extract a discussion), not synthetic best cases for any one tool.
- **An agent task** (`agent-tasks.json`) adds a `tier` (`single page` or `multi step`), a goal written as a question, and an optional `maxTurns`. A multi step goal should force navigation the agent cannot shortcut, and its answer should be a fact present in the second page's HTML, not one a JavaScript widget renders, or the task measures headless browsing rather than the tool.
- **A lookup task** (`wiki-tasks.json`, `docs-tasks.json`) adds `term`, the thing someone would look up, and `expect`, a regex for the fact a correct answer must contain, with `expectNote` spelling it out in prose. Verify `expect` against the live page first: Berlin's population in the German article was 3.700.577 at the last check, not the 3.9 million a guess would have graded against.

[TASKS.md](TASKS.md) explains what earns a task its place and what the suites deliberately do not cover.

## Contributors

- [only-cli](https://github.com/only-cli), creator and maintainer

## License

MIT
