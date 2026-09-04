# Browse the web in hundreds of tokens, not tens of thousands

Reproducible benchmarks for how AI agents read the web. The same live pages and the same tasks, read eleven ways, [oc](https://github.com/only-cli/oc) among them. Every suite asks one question: how many tokens does the agent have to ingest, how long does it take, and did it actually get the content?

**Where things stand** (oc 0.5.1 to 0.5.3, September 2026, live sites):

- **118x fewer tokens than raw HTML** across the fourteen real pages both could read: 9,466 against 1,119,003. 17x fewer than Jina Reader, 54x fewer than Playwright MCP's accessibility snapshot.
- **Real content on all fifteen pages, Reddit included.** Reddit's pages now sit behind a login wall, so the suite reads its thread and subreddit through the Atom feeds that still answer anonymously: 459 and 493 tokens through oc against 10,452 and 21,155 for the feed XML, while the browser-based tools and Jina Reader got the block pages Reddit serves their fingerprints. Yahoo Finance refuses plain fetch outright and DuckDuckGo still blocks lynx; oc's Chrome impersonation read both.
- **Half the cost of Claude Code's built-in WebSearch on Wikipedia lookups**: $0.23 against $0.45 for five questions, both 5/5 correct, on 25x less fresh input.
- **21% cheaper than WebFetch and 34% cheaper than WebSearch** on eleven language docs lookups, at equal or better accuracy.
- **10% cheaper than WebFetch and 49% cheaper than WebSearch** on twelve dependency lookups across GitHub, npm, PyPI, RubyGems, crates.io, Docker Hub, Stack Overflow and an RFC, 12/12 correct with no tuned shortcut for most of those sites. WebFetch was refused by npm and Stack Overflow.
- **Not a clean sweep.** Under Codex, its own web search beat `oc docs` by 16% on those same lookups because the answers were already in the search snippets. On the thirteen-task browse suite lynx used 22% fewer tokens than oc, most of the gap on one reference page where oc's own `find` points the agent at a block `read` cannot open. Both results are below, with the reasons.

## Quick start

```
node run.js                                       # page view suite, no model needed
node agent-run.js                                 # browse tasks through claude -p
node agent-run.js --suite=wiki                    # Wikipedia lookups
node agent-run.js --suite=docs                    # language docs lookups
node agent-run.js --suite=deps                    # dependency research lookups
AGENT_CLI=codex node agent-run.js --suite=docs    # any agent suite through codex exec
node agent-run.js --report-only                   # re-render tables from the saved JSON
```

Node 20+, no dependencies. Results print as a markdown table and land in `results/`. Adapters whose tool is not installed announce themselves on stderr and drop out instead of failing the run. A task in `tasks.json` can carry `pauseMs` to space the adapters out; the two Reddit tasks wait a minute between tools, because Reddit meters anonymous feed readers tightly (a second request from the same client thirty seconds after the first came back 429 in testing) and a burst of eleven tools would measure the rate limit instead of the page. `node run.js --only=discussion,subreddit-front` reruns named tasks and merges them into the saved results.

| variable | what it does |
| --- | --- |
| `OC_BIN` | which oc the page suite runs; defaults to a sibling checkout at `../only-cli`, or `OC_BIN="npx -y @only-cli/oc@0.5.3"` for the published package |
| `AGENT_CLI` | `claude` (default) or `codex` |
| `AGENT_MODEL` | rerun the same conditions on another model |
| `LYNX_BIN` | where lynx lives if it is not on PATH |

The agent suites need `claude` (or `codex`) on PATH and logged in, plus `oc` (`npm install -g @only-cli/oc`). To measure an unreleased oc, shim it ahead on PATH:

```
printf '#!/bin/sh\nexec node /path/to/oc/src/cli.js "$@"\n' > bin/oc
chmod +x bin/oc && PATH="$PWD/bin:$PATH" node agent-run.js --suite=wiki
```

Fair warning: every agent run spends real model quota. Thirteen tasks times five tools is sixty-five sessions, a few dollars on Sonnet.

## The five suites

| suite | question it answers | tasks | oc against | results |
| --- | --- | --- | --- | --- |
| Page view (`run.js`) | What does one page view cost per tool, before any model is involved? | 15 pages, `tasks.json` | curl, Jina Reader, lynx, Playwright MCP, Browser Use, Playwright, Selenium, computer-use screenshots | [latest.md](results/latest.md) |
| Browse (`agent-run.js`) | What does a whole task cost a real agent using that tool? | 13 tasks, `agent-tasks.json` | curl, lynx, Jina Reader, Playwright MCP | [claude](results/agent-latest.md), [codex](results/agent-latest-codex.md) |
| Wikipedia (`--suite=wiki`) | Is `oc wiki` worth anything next to the web tools the agent already has? | 5 lookups, `wiki-tasks.json` | WebFetch, WebSearch | [claude](results/agent-latest-wiki.md), [codex](results/agent-latest-wiki-codex.md) |
| Language docs (`--suite=docs`) | Same question for `oc docs`, one fact per language | 11 lookups, `docs-tasks.json` | WebFetch, WebSearch | [claude](results/agent-latest-docs.md), [codex](results/agent-latest-docs-codex.md) |
| Dependency research (`--suite=deps`) | When the fact lives on GitHub, a package registry, Stack Overflow or a spec, with no tuned shortcut, does the generic renderer still pay off? | 12 lookups, `deps-tasks.json` | WebFetch, WebSearch | [claude](results/agent-latest-deps.md) |

Every task is documented in [TASKS.md](TASKS.md): what the page is, why it was chosen, and what it turned out to measure.

## Results

### Page view: tokens per page, no model in the loop

oc 0.5.3 from npm (`OC_BIN="npx -y @only-cli/oc@0.5.3"`, so oc's timing columns include npx startup on every call), Node 22, 2026-09-04. Fifteen live pages: a news front page, a Reddit thread and a subreddit front page through their Atom feeds, search results, a stock quote, cloud and language reference pages. The two Reddit tasks were collected with a minute between tools, for reasons the second bullet explains.

| adapter | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | 15/15 | 9,913 | 1296 | 435 | 5641 |
| oc-raw | 15/15 | 259,068 | 1225 | 333 | 5625 |
| raw-fetch | 14/15 | 1,119,003 | 280 | 274 | 4374 |
| jina-reader | 14/15 | 145,679 | 5360 | 5733 | 571 |
| lynx-dump | 14/15 | 293,136 | 430 | 413 | 0 |
| playwright-mcp | 15/15 | 535,908 | 820 | 820 | 0 |
| browser-use | 15/15 | 28,559 | 4860 | 1388 | 0 |
| playwright-html | 15/15 | 1,552,996 | 1136 | 503 | 6068 |
| selenium-html | 15/15 | 1,657,181 | 2200 | 712 | 6475 |
| claude-computer-use | 15/15 | 15,735 | 1151 | 552 | 1703 |
| openai-computer-use | 15/15 | 11,475 | 0 | 552 | 1703 |

- **oc reads all fifteen pages for 9,913 tokens.** A page that fits in about four times the budget prints whole (the Hacker News front page lands at 1,121); everything larger renders near the 500 token budget however much the page weighs. The three cloud reference pages come in at 506, 492 and 471 tokens against 17,990 to 138,030 raw; the three language docs pages at 500, 484 and 479 against 27,940 to 275,425. The starkest single page is the YouTube watch page: 363,516 tokens raw, 688 through oc, about 530x. Node's `fs` reference is close behind at 275,425 raw against 479, a page even lynx needs 120,928 tokens for. On the fourteen pages both tools read, raw HTML costs 118x what oc does: 1,119,003 against 9,466.
- **Reddit is back, through its feeds, and the feed is metered.** old.reddit.com still ends at a login wall, so both Reddit tasks now hand every tool the www.reddit.com Atom feed for the same thread and subreddit. oc reads the thread for 459 tokens and the subreddit for 493, against 10,452 and 21,155 for the feed XML itself, which is what raw fetch and lynx return verbatim. The feed has terms. Reddit refuses the Chrome fingerprint outright, so the Playwright browser's 207 and 185 are block snapshots, browser-use's 39 is a state message, and the rendered-HTML routes got the login page (47,489) or nothing (10); Jina Reader's 160 and 92 are Reddit turning its crawler away. Reddit also meters anonymous readers per client: with eight, fifteen and thirty seconds between tools, a second request from the same client came back 429 every time, and after a burst of manual probes one thirty-second pass refused oc's first request too. The rows above come from a pass with a minute between requests after fifteen minutes of quiet. Run the two tasks faster and you measure the limiter, which is why they carry `pauseMs`.
- **The rows near oc are floors, not reads.** The computer-use rows price one 1024x768 screenshot per page, a look at the top third before any scrolling and before any prompt or reasoning tokens, which is why the OpenAI row is nominally the smallest. Browser Use's state message carries indexed elements but drops most of the page text. Among tools that actually deliver the content, the gap is 17x to Jina Reader and 54x to Playwright MCP, and the rendered-HTML routes (Playwright, Selenium) cost slightly more than raw fetch plus a browser.
- **Some failures are the site's.** Yahoo Finance now refuses a plain `fetch` connection outright, on every retry, where oc's Chrome identity reads the quote for 447 tokens, lynx for 9,108 and Playwright MCP for 23,796. Lynx was blocked on the DuckDuckGo search again, and Jina Reader failed LinkedIn (403) and got block pages from Reddit; it did read the Node.js `fs` page this time, after a 503 on the previous run. oc was the only distilling reader with real content on all fifteen pages.

### Browse: whole tasks through Claude Code and Codex

Single page tasks answer a question from one URL (Hacker News front page, a GitHub repository search, a Yahoo Finance quote, a Reddit thread through its Atom feed, a YouTube watch page, three cloud CLI reference pages). Multi step tasks start on one page and have to find and open a second (front page to the #1 story's comments, search results to the winning repository's license, a subreddit feed to its first post's comments, DuckDuckGo to the Rust book, DuckDuckGo to an AWS reference page), which is where cost compounds: the first page is re-read on every turn that follows it. Each condition is locked to its one tool, with WebFetch and WebSearch disabled. The lynx condition ran lynx 2.9.0.

**Claude Code, `claude-sonnet-5`, 2026-09-02 on oc 0.5.1, the two Reddit tasks rerun on 2026-09-04 on oc 0.5.3 through the Atom feeds.** Thirteen tasks, sixty-five sessions.

| tool | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | 12/13 | 97 | 5,049 | 1,626,242 | 0.8177 | 24 |
| raw-curl | 11/13 | 129 | 10,493 | 2,186,422 | 0.9091 | 30 |
| lynx | 12/13 | 89 | 8,182 | 1,837,815 | 0.8572 | 18 |
| jina-reader | 13/13 | 74 | 7,509 | 1,762,289 | 0.9894 | 18 |
| playwright-mcp | 13/13 | 91 | 7,819 | 2,290,981 | 1.3093 | 15 |

**Codex, `gpt-5.6-sol` at xhigh, codex 0.148.0, 2026-08-24, oc 0.4.0.** Thirteen tasks, sixty-five sessions, not yet rerun on 0.5.1.

| tool | success | turns | output tokens | total tokens | avg s |
| --- | ---: | ---: | ---: | ---: | ---: |
| oc | 13/13 | 68 | 9,606 | 1,092,207 | 31 |
| raw-curl | 13/13 | 60 | 9,281 | 1,585,812 | 24 |
| lynx | 13/13 | 49 | 5,280 | 707,216 | 17 |
| jina-reader | 13/13 | 59 | 6,321 | 1,016,427 | 29 |
| playwright-mcp | 13/13 | 57 | 5,826 | 1,070,006 | 28 |

- **Read the success column as "finished", not "read the page".** Under Claude, oc and raw curl now read the Reddit thread from its feed and name w3m, in 4 and 10 turns. Jina Reader got the same feed back with every entry empty and the Playwright browser got a 403 block page, on both Reddit tasks, and each reported that as its answer, which the harness counts as finished. Beyond Reddit, Jina Reader got Google's bot check on the YouTube page and read Yahoo's previous close as the close, Playwright MCP hit DuckDuckGo's CAPTCHA on both search tasks and skipped the hop by navigating straight to the destination, lynx could not see the YouTube view count, which the page renders with JavaScript, and raw curl failed the Yahoo quote outright after 13 turns and 320,984 tokens, then named a flag that does not exist (`--hierarchical-namespace`) on the Azure page. oc answered twelve tasks with the real content each time and failed the thirteenth. Priced per answer with real content: Jina Reader 122,561 tokens, oc 135,520, lynx 153,151, Playwright MCP 184,396, raw curl 198,766.
- **The multi step Reddit task is the one oc lost, and the fault is oc's.** The feed view names each post as a heading, and the link to the post is a per entry `open` anchor carrying the same label on all twenty-five entries, which the repeated-controls filter hides as chrome. So `oc do 1` on the first post read its heading instead of following it, the agent reopened the feed hunting for the link, and Reddit's meter answered the third fetch inside a minute with 429: 26 turns, 870,398 tokens, no answer. Raw curl saved the same feed to a scratch file and also ran out of turns. lynx got there in 22 turns by reading the post's own comments feed, and its answer is the honest one: the first post listed is a pinned index post by a moderator bot with no comments at all. The fix belongs in oc, not in the task: the entry title should be the link, so `do <n>` on a post follows it, and a reddit.com post URL should reach its feed rather than the login wall.
- **lynx and oc are still within one row of each other.** On `gh-repo-detail` oc spends 111,634 tokens against lynx's 115,714, and across the four multi step tasks outside Reddit the two are within 6% (584,176 against 550,719). What remains is `azure-hns-flag`, where oc took 12 turns and 309,076 tokens against 4 turns and about 77,000 for every other tool. Without that row oc's successes total 1,317,166 against lynx's 1,760,513, which now carries lynx's 657,069-token Reddit walk; with every run counted, failures included, oc is at 2,496,640 and lynx at 2,171,002.
- **That outlier is an oc bug, not an agent quirk, and 0.5.1 does not fix it.** On the `az storage account` reference, `oc find hierarchical` lists the flag at `[126]` and `[144]`, but `oc read` of either number returns an unrelated paragraph about account level immutability: the numbers `find` prints and the ones `read` takes do not line up on this page shape. The agent found the flag, read the wrong block, and hunted. It still answered correctly, because the `find` line itself shows the flag.
- **Under Codex, thirteen out of thirteen is not what it looks like either.** Nothing errored, but nine of the sixty-five answers are a polite report that a site refused the tool: Reddit blocked curl, Jina Reader and the Playwright browser; DuckDuckGo showed curl, lynx and Playwright a bot challenge; Yahoo rate-limited curl. Counting only runs that returned real content: oc 13, lynx 12, Jina Reader 11, curl and Playwright MCP 10 each. lynx's 707,216 is the cheapest number in the table and includes a search task it never read.
- **oc's spend has a different shape.** It took the most turns under Codex (68) because budgeted views make the agent navigate: `open`, then `find` or `do <n>`, each a small read. Its fresh input is the lowest in the run (232,681 tokens against 306,106 for Jina and 288,851 for curl), but at xhigh reasoning every extra turn re-reads the cached transcript and buys more reasoning, so its total lands mid-table. The tool that reads less per page pays in turns; the tools that dump whole pages pay in input. On this agent those roughly meet, and what separates the rows is the blocked tasks.
- **Content nobody else gets, and content everybody lost.** Under Claude only oc, raw curl and the Playwright browser reported the YouTube view count. The Reddit thread, lost to a login wall on the 2026-09-02 run, is back for oc and raw curl through its Atom feed, while Jina Reader and the Playwright browser still get Reddit's block pages there. DuckDuckGo showed the Playwright browser a CAPTCHA on both search tasks under Claude and on `ddg-follow` under Codex. Raw curl spent 26 turns and 770,176 tokens on `reddit-top-comment` without an answer, and again lost turns on four tasks to scratch HTML files it saved and then could not delete under the sandbox. Jina Reader is the only tool here that routes every URL the agent reads through a third party's servers, which is how a rate limit on Jina's service, not on the agent, cost it two GitHub tasks on the 2026-08-25 run.

<details>
<summary>Per-tier breakdown: what an extra hop costs</summary>

Claude Code, nine single page and four multi step tasks:

| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 1,042,066 | 46 | 1,454,574 (1 failed) | 51 |
| raw-curl | 1,441,995 (1 failed) | 61 | 1,835,587 (1 failed) | 68 |
| lynx | 963,214 (1 failed) | 44 | 1,207,788 | 45 |
| jina-reader | 869,575 | 40 | 892,714 | 34 |
| playwright-mcp | 1,184,245 | 51 | 1,106,736 | 40 |

Codex:

| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 379,157 | 29 | 713,050 | 39 |
| raw-curl | 380,618 | 28 | 1,205,194 | 32 |
| lynx | 403,676 | 31 | 303,540 | 18 |
| jina-reader | 736,286 | 41 | 280,141 | 18 |
| playwright-mcp | 637,801 | 35 | 432,205 | 22 |

Every run counts here, failures included. The two `reddit-top-comment` failures ran to the 25-turn cap (oc 870,398 tokens, raw curl 770,176), and lynx's `reddit-thread` failure and raw curl's Yahoo Finance failure burned the full 13-turn budget (333,187 and 320,984 tokens); the summary table above excludes failed runs from its token totals but counts their turns.

</details>

### Wikipedia: `oc wiki` against WebFetch and WebSearch

Five ways someone actually reaches for Wikipedia: an ambiguous term whose article competes with homonyms in cosmology and geology (`anthropic`), a person (Dario Amodei), one fact buried in a long article (when the Eiffel Tower was finished and how tall it is), a technical concept (which paper introduced the transformer), and a non-English wiki (Berlin's population on `de.wikipedia.org`). Answers are graded against an `expect` regex, because a search snippet can produce a fluent answer about the wrong Anthropic, and a token count next to a wrong answer is not a saving.

**Claude Code, `claude-sonnet-5`, 2026-09-02, oc 0.5.1.** Fifteen sessions.

| tool | success | correct | turns | input tokens | total tokens | total cost USD | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-wiki | 5/5 | 5/5 | 22 | 5,535 | 448,018 | 0.2289 | 8 |
| webfetch | 5/5 | 5/5 | 25 | 129,257 | 646,752 | 0.3490 | 12 |
| websearch | 5/5 | 5/5 | 26 | 136,982 | 686,450 | 0.4485 | 16 |

**Codex, `gpt-5.6-sol` at xhigh, 2026-08-24, oc 0.4.0.** Not yet rerun on 0.5.1. `webfetch` skipped: codex has no fetch-one-URL tool.

| tool | success | correct | turns | input tokens | total tokens | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-wiki | 5/5 | 5/5 | 13 | 34,189 | 165,460 | 19 |
| websearch | 5/5 | 4/5 | 13 | 49,255 | 193,290 | 16 |

- **On Claude this is a cost result, not an accuracy one.** All three conditions got 5/5. oc's 500 token budget keeps its fresh input flat at roughly 1,100 tokens per task, while WebFetch pays for whatever the article weighs: 6,556 tokens on a short stub, 39,271 on the German Berlin article, a 5.9x to 35x per-task spread. The totals sit closer together because cache reads of the agent's own prompt dominate them.
- **On Codex it is an accuracy result too.** Codex's web search answered the Berlin question with a stale population the current article no longer shows. `oc wiki lang de Berlin` read the infobox and got it right, on fewer input tokens per task.

### Language docs: `oc docs` against WebFetch and WebSearch

One canonical lookup per language shortcut oc ships: the default of `json.dumps`'s `sort_keys` (Python), `Array.prototype.at` with a negative index (MDN), the option `fs.rm` needs for a non-empty directory (Node.js), `Array#dig` on a nil step (Ruby), the `json:"-"` struct tag (Go), what `Vec::pop` returns (Rust), what `Optional.get` throws (Java), whether `array_filter` keeps keys (PHP), what `Partial<Type>` does (TypeScript), what `vector::at` throws (C++ via cppreference), and `String.IsNullOrWhiteSpace` on spaces (.NET via Microsoft Learn). Same conditions and grading as the wiki suite.

**Claude Code, `claude-sonnet-5`, 2026-09-02, oc 0.5.1.** Thirty-three sessions.

| tool | success | correct | turns | input tokens | total tokens | total cost USD | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-docs | 11/11 | 11/11 | 56 | 12,967 | 1,212,561 | 0.5605 | 8 |
| webfetch | 11/11 | 10/11 | 56 | 203,497 | 1,373,058 | 0.7112 | 12 |
| websearch | 11/11 | 11/11 | 55 | 215,833 | 1,360,666 | 0.8470 | 14 |

**Codex, `gpt-5.6-sol` at xhigh, 2026-08-24, oc 0.5.0** (the language docs branch, shimmed onto PATH before it shipped), not yet rerun on 0.5.1. `webfetch` skipped.

| tool | success | correct | turns | input tokens | total tokens | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-docs | 11/11 | 11/11 | 39 | 155,700 | 481,628 | 18 |
| websearch | 11/11 | 11/11 | 24 | 116,961 | 406,312 | 11 |

- **On Claude, oc is 21% cheaper than WebFetch and 34% cheaper than WebSearch in dollars, at equal or better accuracy.** Its fresh input is flat at roughly 1,180 tokens per task whatever the page weighs; WebFetch pays 8,606 on the light PHP manual page and 39,614 on Ruby's `Array` class, a 7x to 34x per-task spread. WebFetch's one wrong answer is an access result: cppreference.com returned 403 Forbidden to it, twice, while oc's Chrome impersonation reads the same page.
- **On Codex the built-in tool wins, 16% cheaper.** These are exactly the canonical facts a search snippet already contains, and Codex's web search answered most tasks in two turns without opening a page. The shortcut still buys determinism, since it reads the actual reference page rather than trusting a snippet, which is what decided the Berlin question above. But on well-indexed one-fact lookups Codex's own search is already efficient, and honest numbers say so.

### Dependency research: `oc open` against WebFetch and WebSearch

Twelve lookups on the pages around a dependency, where oc has a tuned shortcut only for GitHub and Stack Overflow and renders the rest generically: the V8 version in Node.js v22.0.0's release notes, Flask's license on its GitHub page, linkedom's license on npm, when requests 2.31.0 shipped on PyPI, what the top Stack Overflow answer blames for a sorted array being faster, the section of RFC 9110 that defines status 308 (a single 1.2 MB page), the first Chrome to ship `:has()` on caniuse, the nginx config path on Docker Hub, serde's license on crates.io (a page rendered entirely by JavaScript), the Node.js line codenamed Jod, and two that start a link away: Rails 7.1.0's release date on RubyGems and Node.js 16's end of life on endoflife.date. Same conditions and grading as the wiki suite.

**Claude Code, `claude-sonnet-5`, 2026-09-02, oc 0.5.1.** Thirty-six sessions. Not yet run on Codex.

| tool | success | correct | turns | input tokens | total tokens | total cost USD | avg s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-deps | 12/12 | 12/12 | 62 | 13,261 | 1,347,871 | 0.6262 | 10 |
| webfetch | 12/12 | 10/12 | 63 | 173,779 | 1,495,868 | 0.6996 | 11 |
| websearch | 12/12 | 12/12 | 69 | 326,088 | 1,806,752 | 1.2247 | 19 |

- **oc is the only condition that got every answer right at the lowest cost**: 10% cheaper than WebFetch and 49% cheaper than WebSearch, with fresh input flat between 1,091 and 1,120 tokens on all twelve tasks. WebFetch put 2,805 to 39,749 fresh tokens in front of the model per page it could read, WebSearch 10,649 to 75,522.
- **WebFetch's two misses are access, not comprehension.** npmjs.com answered it 403 Forbidden and stackoverflow.com refused it outright, and both times the agent said so instead of guessing. oc's Chrome impersonation read both pages, the same pattern as cppreference in the docs suite and Yahoo Finance in the page view suite.
- **The generic renderer is not free on hard pages.** oc's two most expensive rows are the two the suite planted: the JavaScript-only crates.io page (8 turns and 190,384 tokens, still the right answer) and the endoflife.date table, where the Node 16 row splits across several numbered blocks and the agent needed 8 turns to see the security support date. On the two follow tasks WebFetch and WebSearch used fewer tokens than oc, 291,968 and 268,652 against 303,409.
- **WebSearch got 12/12 at nearly twice the price**, and the model router sent seven of its twelve sessions to Haiku, which is cheaper per token, so on Sonnet throughout the gap would be wider still.

## Reading the numbers

- **Compare rows within a table, never across agents.** Every Claude Code total includes roughly 60k tokens of session overhead per run, mostly cached reads of its system prompt, plus a couple of turns to load the tool's skill. Codex's per-session overhead is much smaller, so its totals run well below the Claude tables. Differences between rows are the signal, not the absolute figures.
- **Almost everything is cache reads.** The agent re-reads its whole conversation every turn, so a bloated page is paid for again on every turn that follows it. That snowball is why each of raw curl's 13-turn failures costs about 400k tokens, why every tool's multi step tier costs more than its single page tier, and why Playwright MCP's doubles.
- **"Success" means the run finished.** In the browse suite a politely reported block page counts as a success. The wiki, docs, and deps suites grade every answer against an `expect` regex, and cheapest only counts among conditions that got every answer right, since a tool that skipped work by failing would otherwise win every token column.
- **The conditions are not handed identical inputs.** WebFetch and oc are given the starting URL; WebSearch gets the question and has to find the page itself, which is what that tool is for but is a different job, and part of why it costs the most.
- **Codex differs from Claude Code in ways that shape its tables.** No allowed-tools equivalent, so the one-tool restriction is prompt-only; it cannot load skills, so the same skill body rides along in the prompt; no per-run cost on a ChatGPT plan; no turn cap; and its turns count completed tool calls and messages, since codex reports one turn per session. Its own web search stands in for WebSearch via `-c tools.web_search=true`; `webfetch` is skipped rather than approximated.
- **Claude Code's model router** picked `claude-haiku-4-5` for two of the fifteen wiki sessions, four docs sessions, and seven of the twelve WebSearch sessions in the deps suite, visible in the model column of the full rows. The rankings do not change on the Sonnet rows alone.
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
