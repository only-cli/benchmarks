# Benchmark tasks

Every number in this repo comes from these twenty-eight tasks against live websites. They are listed here so anyone can check that the benchmark is not a set of best cases for oc, and so anyone adding a task knows what a good one looks like.

There are two suites, because there are two questions.

- `tasks.json` drives `run.js`, which asks what a method hands an agent for one page view. Eleven methods, fifteen pages.
- `agent-tasks.json` drives `agent-run.js`, which asks what a whole task costs when a real agent does it with one tool. Five tools, thirteen tasks, run once through Claude Code and once through Codex.

## What earns a task its place

- It is work an agent actually does: read an article, scan search results, read a discussion, find a repository, follow a search result to a documentation page.
- It runs against a live site. That makes the numbers noisy and occasionally makes a task fail because a site changed, which is the honest cost of not testing against fixtures.
- Its answer is present in the HTML the site serves. Where a fact only exists after JavaScript runs, the task would measure headless rendering instead of the tool, so it is out. Two candidates were dropped for exactly this: the Rust book's chapter list and GitHub's language and release sidebar are both injected by script.
- It is not tuned to any tool's strengths. Half of these pages actively fight automated readers, which is the point.
- A low token count on a task is not automatically a win. Several of the smallest numbers below are block pages. Always read the answer column next to the token column.

## Page view suite (`tasks.json`)

Fifteen pages, chosen to span the range from trivial to hostile. Token counts below are from the run recorded in [results/latest.md](results/latest.md), which covers all fifteen. Lynx (2.9.0) is in the run too; its one failure, on the DuckDuckGo search task, is a real block and recorded as such.

| id | page | what it exercises |
| --- | --- | --- |
| `simple-page` | example.com | the floor: a page with almost nothing on it |
| `news-front` | news.ycombinator.com | a dense, link heavy front page |
| `discussion` | an old.reddit thread | long threaded comments, on a site that blocks crawlers |
| `search-results` | html.duckduckgo.com search | a search engine that challenges automated clients |
| `repo-search` | GitHub repository search | an application page wrapped in heavy chrome |
| `company-page` | a LinkedIn company page, guest view | a login walled site's public view |
| `stock-quote` | the Yahoo Finance AAPL quote page | a data dense finance page wrapped in heavy portal chrome |
| `subreddit-front` | old.reddit.com/r/ClaudeAI | a front page of post listings, one hop before the discussion task's comments |
| `video-page` | a YouTube watch page (a TED talk) | a page whose real content (title, byline, description, caption links) rides inside a large inline JSON blob rather than the visible DOM |
| `aws-cli-ref` | the `aws s3 cp` reference page | a mid sized CLI reference: options, then a long tail of worked examples |
| `gcloud-ref` | the `gcloud compute instances create` reference page | the extreme of the genre, several hundred flags in one document |
| `azure-cli-ref` | the `az storage account` reference page | one command group listing every subcommand and every flag of each |
| `python-lib-ref` | the Python `json` module reference | a standard library reference page: functions, examples, notes |
| `mdn-js-ref` | MDN's `Array.prototype.map` reference | a modern docs site: syntax, parameters, examples, compatibility tables |
| `node-api-ref` | the Node.js `fs` module page | one of the longest single page API documents on the web |

The cloud CLI pages are the coding lookup case. An agent writing a deploy or provisioning script goes to a cloud CLI reference page for one flag, and that flag is buried in a document that costs 18,000 to 132,000 tokens to fetch whole. It is a good stress case precisely because it is not a page anyone reads end to end. The three language documentation pages extend the same case to everyday programming lookups, and they went in alongside oc's `py`, `mdn`, and `node` shortcuts. The Node.js `fs` page is the heaviest document in the suite: one page, 273,820 tokens fetched raw.

What each one showed, in tokens per page view:

- **simple-page**: 42 for `oc open`, 140 for raw fetch, 47 for lynx. Everything is cheap when the page is empty, except the screenshot floors: 1,049 tokens for Claude computer use and 765 for OpenAI computer use, since an image of a nearly blank page still costs a full image.
- **news-front**: 1,154 for `oc open` against 8,698 raw and 12,362 for a Playwright accessibility snapshot. This is the shape of a page where distillation pays.
- **discussion**: 461 for `oc open` against 52,856 raw. Three of the small numbers here are failures wearing a success badge: Jina Reader's 295 is Reddit's block page ("whoa there, pardner!", a 403 to its crawler wrapped in a 200), Playwright MCP's 207 is a blocked snapshot, and browser-use's 39 is a state message with almost no page in it.
- **search-results**: 750 for `oc open` against 10,141 raw. Lynx was the one outright failure here, blocked with zero usable output, and raw fetch has come back as DuckDuckGo's challenge page (HTTP 202, visible in the status column) on other runs of this task.
- **repo-search**: 1,471 for `oc open` against 67,726 raw and 67,803 for Selenium's rendered HTML.
- **company-page**: 1,490 for `oc open` against 39,315 raw. browser-use's 404 is again a nearly empty state message, and Jina Reader failed the page outright, its one hard failure in the run.
- **stock-quote**: 456 for `oc open` against 375,721 raw and 389,465 for Selenium. Jina Reader failed this page in the previous run; this time it read it, for 15,714. The heaviest page in the suite by far, and the widest spread.
- **subreddit-front**: 1,556 for `oc open` against 41,526 raw, with the same three block pages as the thread task: Jina Reader 283, Playwright MCP 184, browser-use 39.
- **video-page**: 684 for `oc open` against 342,730 raw and 377,236 for Playwright's rendered HTML. Playwright MCP's 502 and browser-use's 485 are the visible DOM only, which is the part of a watch page that does not carry the description or the caption links.
- **aws-cli-ref**: 502 for `oc open` against 17,990 raw. The whole distilled page is 6,474 (`oc raw`), so the first view is the top slice of a document with 257 blocks still behind it.
- **gcloud-ref**: 488 for `oc open` against 132,545 raw, 46,186 for the whole distilled page, and 31,584 for Jina Reader. 1,467 blocks are still unread after the first view. browser-use timed out on this page after three minutes in the previous run; this run it came back normally.
- **azure-cli-ref**: 467 for `oc open` against 100,142 raw and 161,492 for Selenium's rendered HTML, with 2,891 blocks left over.
- **python-lib-ref**: 496 for `oc open` against 27,940 raw. The whole distilled page is 9,019, and Jina Reader (9,060) and lynx (10,330) land in the same band, so this page separates first-view tools from whole-page tools more than it separates readers.
- **mdn-js-ref**: 481 for `oc open` against 44,501 raw. Jina Reader's 2,530 is its best showing on any documentation page here; MDN's markup is unusually clean under the chrome.
- **node-api-ref**: 475 for `oc open` against 273,820 raw, 269,757 for Playwright MCP's accessibility snapshot, and 119,604 for lynx. Even the whole distilled page is 112,890 tokens, so this is a page to `find` and `read` through, never to hand over whole.

The cloud reference first-view numbers are the clearest case in the suite for reading the answer column rather than the token column. **On none of the three pages does the first `oc open` view contain the flag the task asks for.** The page is far past the budget, so what prints is the opening slice plus a pointer to the rest, and the agent has to spend a second command. Measured on the same pages, `oc find` is the cheap way through: 314 tokens to land on `--recursive` in the AWS page (820 in total), 203 tokens to land on `--enable-hierarchical-namespace` in the Azure page (670 in total), and 84 tokens on the gcloud page. Reading those totals next to raw fetch's 17,990 and 132,553 is the honest comparison; reading 488 next to 132,545 is not.

Two limits turned up while checking these pages, both worth knowing before trusting a run:

- `oc find` cannot search for a string that starts with a dash, which on a CLI reference page is most of what you would want to search for. `oc find -- "--machine-type"` is parsed as flags, not as a query. Searching for `machine-type` without the leading dashes works.
- On `azure-cli-ref`, the block numbers `oc find` prints do not match the ones `oc read` takes: `find` reports `--enable-hierarchical-namespace` at `[126]` and `[144]`, and `read` of either returns an unrelated paragraph about account level immutability. The same sequence lines up correctly on `aws-cli-ref`, so it is page shape dependent rather than always wrong. Still present in 0.5.0, and it is what made `azure-hns-flag` oc's most expensive row in the agent suite (see below).

One more thing to know when comparing against older recorded runs: several `oc open` numbers here are larger than the ones in the committed run from 0.2.0-beta.1 (news-front 422 then, 1,154 now; repo-search 441 then, 1,471 now). The pages did not grow. oc now prints a page whole when it would finish within about four times the budget, so a page that fits trades a bigger first view for never needing a second command. Every number that grew is under 2,000 tokens, which is four times the default budget of 500, and every page too large for that rule still renders near 500.

## Agent task suite (`agent-tasks.json`)

Each task is an id, a `tier`, a starting URL, a goal phrased as a question, and an optional `maxTurns`. Single page tasks are answerable from one URL. Multi step tasks start on one page and require finding a link and opening a second, which is where token cost compounds, because the first page is re-read on every turn that follows it.

| id | tier | starts at | goal |
| --- | --- | --- | --- |
| `hn-top` | single page | news.ycombinator.com | the title of the #1 story |
| `gh-search` | single page | GitHub search for terminal file managers | the first result and roughly its star count |
| `stock-price` | single page | the Yahoo Finance AAPL quote page | the price at the most recent market close |
| `reddit-thread` | single page | an old.reddit thread on terminal browsers | which browser commenters recommend most |
| `hn-comments` | multi step | news.ycombinator.com | open the #1 story's comment page, report the story and the top comment's point |
| `gh-repo-detail` | multi step | the same GitHub search | open the first result's repository, report its license |
| `ddg-follow` | multi step | a DuckDuckGo search for the Rust book | open the book on doc.rust-lang.org, report the first sentence of its introduction |
| `reddit-top-comment` | multi step | old.reddit.com/r/ClaudeAI | open the top post's comments, report the post title and the top comment's point |
| `youtube-watch` | single page | the same YouTube watch page as `video-page` | the video's title and roughly its view count |
| `aws-s3-recursive` | single page | the `aws s3 cp` reference page | the flag that copies a directory, and the full command to upload a build directory |
| `gcloud-instance-flags` | single page | the `gcloud compute instances create` reference page | the machine type and zone flags, and the full command for one named instance |
| `azure-hns-flag` | single page | the `az storage account` reference page | the flag of `az storage account create` that turns on the hierarchical namespace |
| `aws-docs-follow` | multi step | a DuckDuckGo search for `site:docs.aws.amazon.com s3 cp recursive` | open the reference page and report the recursive flag plus the example command |

The four cloud docs tasks are the coding shape the rest of the suite was missing. Every other task asks an agent to read a page; these ask it to find one flag inside a reference document and write a working command with it, which is what an agent does dozens of times in a session that touches AWS, Google Cloud, or Azure. They are phrased as script writing rather than as lookups on purpose, so a tool that returns a plausible looking flag that does not exist is caught by the command it produces. Each one's answer was checked against the served HTML before it went in: `--recursive` and its example are in the AWS page, `--machine-type` and `--zone` in the gcloud page, and `--enable-hierarchical-namespace` in the Azure page.

These are also the tasks where the page view suite's cheap first view stops meaning anything, since none of the three answers is in it. What the agent suite measures here is the cost of the whole search, which for a paging reader is the first view plus a `find` and a `read`, and for a fetch-the-page reader is 18,000 to 132,000 tokens up front, once per turn that re-reads it.

Multi step tasks carry `maxTurns: 25`; the default cap is 12. All thirteen ran together on Claude Code on 2026-08-25 with oc 0.5.0, and on Codex on 2026-08-24 with oc 0.4.0; the tables below are from those runs.

`youtube-watch` deliberately stops at the watch page. A video's transcript lives behind a second URL (`captionTracks[].baseUrl`, a signed link to YouTube's `timedtext` endpoint) that only oc's distiller currently surfaces as a followable link; every other tool would have to notice the JSON blob, extract that URL, and construct the fetch itself. It is not in the suite yet because live-checking it while adding this task turned up a live-site problem, not a tool problem: fetching a real `captionTracks` URL directly, with either plain curl or oc's Chrome-impersonating client, gets a `200` with an empty body. Whatever YouTube requires to serve that endpoint's content now (likely a request tied to a real browser session), no scriptable reader here can supply it, so a transcript task would measure that gate rather than any tool, the same reason the Rust book's chapter list and GitHub's sidebar were dropped. Revisit if that changes.

### Total tokens per task, Claude Code on claude-sonnet-5

2026-08-25, oc 0.5.0, lynx 2.9.0, all thirteen tasks in one run.

| task | oc | raw curl | lynx | Jina Reader | Playwright MCP |
| --- | ---: | ---: | ---: | ---: | ---: |
| hn-top | 97,643 | 94,985 | 94,267 | 101,916 | 193,121 |
| gh-search | 97,965 | 402,114 (failed) | 129,195 | 94,551 (blocked) | 172,579 |
| stock-price | 199,676 | 431,775 (failed) | 131,815 | 165,927 | 182,441 |
| reddit-thread | 130,241 | 126,405 (blocked) | 131,637 | 94,719 (blocked) | 160,635 (blocked) |
| youtube-watch | 96,649 | 125,869 | 128,151 (no view count) | 109,021 | 233,993 |
| aws-s3-recursive | 130,554 | 98,433 | 95,501 | 103,804 | 161,051 |
| gcloud-instance-flags | 132,313 | 395,693 | 96,236 | 470,421 | 194,503 |
| azure-hns-flag | 405,331 | 94,479 | 95,203 | 95,395 | 164,068 |
| hn-comments | 133,119 | 130,163 | 159,785 | 149,155 | 338,486 |
| gh-repo-detail | 135,028 | 533,851 | 139,456 | 94,659 (blocked) | 266,013 |
| ddg-follow | 132,309 | 331,578 | 140,812 | 140,758 | 230,120 (blocked) |
| reddit-top-comment | 275,500 | 785,978 | 246,813 | 94,614 (blocked) | 160,385 (blocked) |
| aws-docs-follow | 203,382 | 335,845 | 149,908 | 150,739 | 248,648 |

### Total tokens per task, Codex on gpt-5.6-sol

| task | oc | raw curl | lynx | Jina Reader | Playwright MCP |
| --- | ---: | ---: | ---: | ---: | ---: |
| hn-top | 27,996 | 39,007 | 32,708 | 32,365 | 62,192 |
| gh-search | 29,077 | 67,700 | 32,063 | 32,306 | 92,161 |
| reddit-thread | 38,945 | 81,644 (blocked) | 165,476 | 27,503 (blocked) | 699,810 |
| hn-comments | 97,905 | 78,590 | 67,411 | 54,266 | 150,765 |
| gh-repo-detail | 46,055 | 95,683 | 59,167 | 81,909 | 143,063 |
| ddg-follow | 47,884 | 31,532 (blocked) | 51,723 | 56,966 | 57,055 (blocked) |

"blocked" marks a run that returned an answer saying the site refused the tool. Those runs count as successes in the harness, because the agent did reply and did not error, but they did not read the page, and any token comparison that ignores them rewards the tool that did the least work.

### The cloud docs group

The four reference page tasks, pulled out of the Claude table above:

| tool | tokens | turns | answered |
| --- | ---: | ---: | ---: |
| oc | 871,580 | 30 | 4/4 |
| raw curl | 924,450 | 30 | 4/4 |
| lynx | 436,848 | 17 | 4/4 |
| Jina Reader | 820,359 | 25 | 4/4 |
| Playwright MCP | 768,270 | 27 | 4/4 |

**oc does not win this group, and the reason is worth reading.** lynx answered all four for 436,848 tokens in 17 turns against oc's 871,580 in 30. Every total here is dominated by cache reads, which is to say by turn count: the pages are 18,000 to 132,000 tokens, and the conversation carrying them is re-read on every turn that follows. oc's per view is the smallest in the suite, but on a reference page it takes an `open`, then a `find`, then a `read` to reach one flag, and three turns of a small page cost more than one turn of a large one once the page fits in a context at all. Handing the agent lynx's dump of the gcloud page once beat handing it 467 tokens three times.

On `azure-hns-flag` the turn tax became a bug. `oc find hierarchical` lists the flag at `[126]` and `[144]`, but `oc read` of either number returns the account level immutability paragraph (the mismatch noted in the page view section above, still present in 0.5.0), so the agent found the flag, read the wrong block, and hunted: 13 turns and 405,331 tokens where lynx spent 4 and 95,203. Without that row oc's total for the group is 466,249, within 7% of lynx.

That is the boundary of the page view result rather than a contradiction of it. Where a page is genuinely too large to hand over (`stock-quote` at 399,881, `video-page` at 338,815) or where the reader is blocked, one big read is not an option and paging wins by default. Where a documentation page is merely large, the turn tax decides it. Three things follow for oc: the `find`/`read` numbering mismatch needs fixing before this group is a fair measure of paging; `oc raw` on the gcloud page is 46,186 tokens in one turn, which would have beaten several turns of paging; and neither the tool nor its skill tells an agent when to prefer it.

Read the answer column here too. All five tools answered `aws-docs-follow` this time, where on the earlier run raw curl reported DuckDuckGo's CAPTCHA and Playwright MCP hit it and skipped straight to the AWS page. Raw curl and Jina Reader both saved a page to a scratch file (`awscp.html`, `gcloud_ref.md`) and then spent turns failing to delete it under the sandbox, which is where Jina's twelve turns on the gcloud page went.

### What each task turned out to measure

- **hn-top** is the control. Every shell tool answers it in four turns on Claude (the Playwright browser takes seven) and two or three on Codex, and the totals sit within a few percent of each other. A benchmark where the easy task separates the field is measuring something other than the task.
- **gh-search** separates on page weight. Raw curl failed it on Claude, spending its entire 13 turn budget and 402,114 tokens on GitHub's markup without producing an answer. On the 2026-08-25 run GitHub had also suspended anonymous access for Jina Reader's whole service, so Jina's 94,551 there is a block report, not a read.
- **reddit-thread** separates on access. Only oc and lynx read the thread under both agents. Jina Reader and Playwright MCP reported the 403, and raw curl reported Reddit's block page (it failed outright on the earlier Claude run). The two that read it also disagree: oc's agent named Lynx the most recommended browser and lynx's agent named w3m, which is what a judgment question over a long thread looks like. It is also the task where Playwright MCP's cost explodes on Codex: 699,810 tokens and 27 tool calls to walk a comment page through browser snapshots.
- **hn-comments** is the cheapest multi step task for everyone, because the link an agent needs is a comment count on a page it has already read.
- **gh-repo-detail** is where oc's missing navigation showed up most sharply before `oc do <n>` shipped. On the 2026-08-18 run oc spent 187,160 tokens against lynx's 139,578, because the compact view leaves link URLs out to save tokens and the agent had to re-fetch the search page as `oc open --json` or `oc raw` just to learn where the first result pointed, where `lynx -dump` prints a references list with every URL for free. With `do` the gap is gone: 135,028 against 139,456 on 2026-08-25, in the same five turns.
- **aws-s3-recursive** is the cloud docs control, and it separates nothing: the page is 17,990 tokens raw, which every tool can simply read, so lynx's 95,501 and raw curl's 98,433 are the cheapest of the five and all five produce the same correct command. oc pays one extra turn (130,554) for a `find` the page did not need. A reference page only becomes a benchmark when it is too big to swallow.
- **gcloud-instance-flags** and **azure-hns-flag** are where it does. Raw curl failed both on the earlier run and needed 12 turns and 395,693 tokens for the gcloud page this time, against pages of 132,545 and 100,142 tokens. Every tool that distills or pages answered correctly, and the cheapest was the one that handed over the whole distilled page in a single turn: lynx at 96,236 and 95,203. `azure-hns-flag` is oc's worst row in the suite, 13 turns and 405,331 tokens, because of the `find`/`read` numbering mismatch described above.
- **aws-docs-follow** separates on the entry point rather than the documentation. On the earlier run DuckDuckGo challenged both raw curl and the Playwright browser, so only two of the four tools did the two hops the task describes; on 2026-08-25 all five answered, raw curl in 10 turns and 335,845 tokens against oc's 7 and 203,382 and lynx's 5 and 149,908.
- **ddg-follow** separates on bot challenges twice over. DuckDuckGo showed the Playwright browser a CAPTCHA under both agents, and blocked raw curl under Codex. Raw curl also needed 11 turns and 331,578 tokens on Claude (16 and 499,088 on the earlier run), and left scratch HTML files in the working directory while doing it.

## Language docs suite: one fact per language

`docs-tasks.json` runs the wiki suite's design over the eleven language references oc ships shortcuts for. Each task is one fact an agent actually stops to look up mid coding session, phrased as a question and graded with an `expect` regex, and each was checked against the live page before it went in. The facts were picked to be stable (a default value, a return type, a documented exception), so the grading should not rot with the next docs release.

What the run separated, from [results/agent-latest-docs.md](results/agent-latest-docs.md) and [results/agent-latest-docs-codex.md](results/agent-latest-docs-codex.md):

- **cpp-vector-at** separates on access, the way reddit-thread does above: cppreference.com answers `WebFetch` with 403 Forbidden, consistently across a retry, while oc's Chrome impersonation reads the page. It is the suite's only wrong answer.
- **ruby-array-dig**, **rust-vec-pop**, **node-fs-rm**, and **go-json-dash-tag** separate on page weight. `WebFetch` put 31,000 to 40,000 fresh tokens in front of the model for those pages; oc stayed at its flat ~1,175 per task, a 27x to 34x spread.
- **php-array-filter-keys** and **java-optional-get** are the controls: light pages every tool reads cheaply, where the conditions land within a few percent of each other.
- Under codex, nothing separates on accuracy and the ranking flips: its web search answered most tasks from result snippets in two turns, 16% cheaper than reading the page through oc. A canonical API fact is exactly what a snippet is good for; the wiki suite's stale-population miss shows where trusting the snippet stops working.

## What these tasks do not cover

- Pages that only exist after JavaScript runs. Deliberate, as above, but it does mean the suite is kinder to static readers than the modern web is.
- Anything behind a login, including the parts of LinkedIn and Reddit that matter most to real users.
- Pagination and forms. Nothing here fills in a field or submits anything. Long documents that need several commands to read are covered now, by the three cloud CLI reference pages, but only in the shape where the agent is hunting one fact rather than reading the document through.
- Any task longer than two hops. Real agent sessions run much longer, and the cache read snowball that makes a bloated page expensive gets worse the longer they run, so these numbers understate the effect rather than exaggerate it.
- Computer use and browser-use only appear in the page view suite. Both need a harness of their own to run a whole task, since the computer use rows are a priced screenshot floor rather than a tool an agent can call, and browser-use brings its own model whose spend the outer agent's usage JSON cannot see. See the note in [README.md](README.md).

## Adding a task

Add page view tasks to `tasks.json` as `id`, `url`, and `goal`. Add agent tasks to `agent-tasks.json` as `id`, `tier`, `url`, `goal`, and optionally `maxTurns`.

Then check three things before trusting the result. Confirm the fact you are asking for is in the served HTML, not rendered by script. Read the answer column, not just the token column, so a block page does not get counted as a cheap win. And rerun the whole suite rather than one row, since live sites move and a task compared against last week's numbers is comparing two different pages.
