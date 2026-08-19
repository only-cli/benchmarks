# Benchmark tasks

Every number in this repo comes from these fourteen tasks against live websites. They are listed here so anyone can check that the benchmark is not a set of best cases for oc, and so anyone adding a task knows what a good one looks like.

There are two suites, because there are two questions.

- `tasks.json` drives `run.js`, which asks what a method hands an agent for one page view. Eleven methods, seven pages.
- `agent-tasks.json` drives `agent-run.js`, which asks what a whole task costs when a real agent does it with one tool. Five tools, seven tasks, run once through Claude Code and once through Codex.

## What earns a task its place

- It is work an agent actually does: read an article, scan search results, read a discussion, find a repository, follow a search result to a documentation page.
- It runs against a live site. That makes the numbers noisy and occasionally makes a task fail because a site changed, which is the honest cost of not testing against fixtures.
- Its answer is present in the HTML the site serves. Where a fact only exists after JavaScript runs, the task would measure headless rendering instead of the tool, so it is out. Two candidates were dropped for exactly this: the Rust book's chapter list and GitHub's language and release sidebar are both injected by script.
- It is not tuned to any tool's strengths. Half of these pages actively fight automated readers, which is the point.
- A low token count on a task is not automatically a win. Several of the smallest numbers below are block pages. Always read the answer column next to the token column.

## Page view suite (`tasks.json`)

Seven pages, chosen to span the range from trivial to hostile. Token counts below are from the run recorded in [results/latest.md](results/latest.md); `stock-quote` was added after that run, so it has no recorded numbers yet.

| id | page | what it exercises |
| --- | --- | --- |
| `simple-page` | example.com | the floor: a page with almost nothing on it |
| `news-front` | news.ycombinator.com | a dense, link heavy front page |
| `discussion` | an old.reddit thread | long threaded comments, on a site that blocks crawlers |
| `search-results` | html.duckduckgo.com search | a search engine that challenges automated clients |
| `repo-search` | GitHub repository search | an application page wrapped in heavy chrome |
| `company-page` | a LinkedIn company page, guest view | a login walled site's public view |
| `stock-quote` | the Yahoo Finance AAPL quote page | a data dense finance page wrapped in heavy portal chrome |

What each one showed, in tokens per page view:

- **simple-page**: 41 for `oc open`, 47 for lynx, 140 for raw fetch. Everything is cheap when the page is empty, except the screenshot floors: 1,049 tokens for Claude computer use and 765 for OpenAI computer use, since an image of a nearly blank page still costs a full image.
- **news-front**: 422 for `oc open` against 8,759 raw and 12,459 for a Playwright accessibility snapshot. This is the shape of a page where distillation pays.
- **discussion**: 477 for `oc open` against 52,872 raw. Three of the small numbers here are failures wearing a success badge: Jina Reader's 295 is Reddit's block page ("whoa there, pardner!", a 403 to its crawler wrapped in a 200), Playwright MCP's 207 is a blocked snapshot, and browser-use's 39 is a state message with almost no page in it.
- **search-results**: 84 for `oc open` against 8,288 raw. Lynx is the outright failure, blocked with zero usable output, and raw fetch gets DuckDuckGo's challenge page as HTTP 202 rather than results.
- **repo-search**: 441 for `oc open` against 67,902 raw and 68,012 for Selenium's rendered HTML.
- **company-page**: 471 for `oc open` against 39,724 raw. browser-use's 238 is again a nearly empty state message.

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

Multi step tasks carry `maxTurns: 25`; the default cap is 12.

### Total tokens per task, Claude Code on claude-sonnet-5

| task | oc | raw curl | lynx | Jina Reader | Playwright MCP |
| --- | ---: | ---: | ---: | ---: | ---: |
| hn-top | 95,276 | 94,235 | 94,306 | 101,589 | 193,367 |
| gh-search | 130,251 | 415,990 (failed) | 129,274 | 102,277 | 173,532 |
| reddit-thread | 166,515 | 407,666 (failed) | 128,583 | 94,768 (blocked) | 159,672 (blocked) |
| hn-comments | 154,511 | 309,665 | 143,597 | 144,508 | 348,298 |
| gh-repo-detail | 187,160 | 128,906 | 139,578 | 263,499 | 267,707 |
| ddg-follow | 138,196 | 499,088 | 137,493 | 148,602 | 433,119 (blocked) |

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

### What each task turned out to measure

- **hn-top** is the control. Every tool answers it in four turns on Claude and two or three on Codex, and the totals sit within a few percent of each other. A benchmark where the easy task separates the field is measuring something other than the task.
- **gh-search** separates on page weight. Raw curl failed it on Claude, spending its entire 13 turn budget and 415,990 tokens on GitHub's markup without producing an answer.
- **reddit-thread** separates on access. Only oc and lynx read the thread under both agents. Jina Reader and Playwright MCP reported the 403, and raw curl failed outright on Claude. It is also the task where Playwright MCP's cost explodes on Codex: 699,810 tokens and 27 tool calls to walk a comment page through browser snapshots.
- **hn-comments** is the cheapest multi step task for everyone, because the link an agent needs is a comment count on a page it has already read.
- **gh-repo-detail** is where oc's missing navigation shows up most sharply. oc spent 187,160 tokens against lynx's 139,578 on Claude, because the compact view leaves link URLs out to save tokens and `oc do <n>` does not ship until v0.2, so the agent had to re-fetch the search page as `oc open --json` or `oc raw` just to learn where the first result pointed. `lynx -dump` prints a references list with every URL for free.
- **ddg-follow** separates on bot challenges twice over. DuckDuckGo showed the Playwright browser a CAPTCHA under both agents, and blocked raw curl under Codex. Raw curl also needed 16 turns and 499,088 tokens on Claude, and left scratch HTML files in the working directory while doing it.

## What these tasks do not cover

- Pages that only exist after JavaScript runs. Deliberate, as above, but it does mean the suite is kinder to static readers than the modern web is.
- Anything behind a login, including the parts of LinkedIn and Reddit that matter most to real users.
- Pagination, long documents that need several fetches to read, and forms. Nothing here fills in a field or submits anything.
- Any task longer than two hops. Real agent sessions run much longer, and the cache read snowball that makes a bloated page expensive gets worse the longer they run, so these numbers understate the effect rather than exaggerate it.
- Computer use and browser-use only appear in the page view suite. Both need a harness of their own to run a whole task, since the computer use rows are a priced screenshot floor rather than a tool an agent can call, and browser-use brings its own model whose spend the outer agent's usage JSON cannot see. See the note in [README.md](README.md).

## Adding a task

Add page view tasks to `tasks.json` as `id`, `url`, and `goal`. Add agent tasks to `agent-tasks.json` as `id`, `tier`, `url`, `goal`, and optionally `maxTurns`.

Then check three things before trusting the result. Confirm the fact you are asking for is in the served HTML, not rendered by script. Read the answer column, not just the token column, so a block page does not get counted as a cheap win. And rerun the whole suite rather than one row, since live sites move and a task compared against last week's numbers is comparing two different pages.
