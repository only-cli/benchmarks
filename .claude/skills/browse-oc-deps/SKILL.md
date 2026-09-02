---
name: browse-oc-deps
description: Research a dependency with the oc CLI, which renders pages as compact text with numbered actions and ships shortcuts for GitHub and Stack Overflow. Use it to read repositories, release notes, issues, package registry pages, Stack Overflow answers, specs, and compatibility tables in minimal tokens.
allowed-tools: Bash(oc:*)
---

# Dependency research with oc

Shortcuts, which resolve to a URL and then render like any other page:

- `oc gh repo <owner> <name>` opens a GitHub repository page (`oc gh repo pallets flask`); `oc gh issues <owner> <name>` its issue list; `oc gh user <name>` a profile; `oc gh search <query>` a repository search.
- `oc so question <id>` opens a Stack Overflow question with its answers (`oc so question 11227809`); `oc so search <query>` searches the site.
- Everything else is `oc open <url>`: npm, PyPI, RubyGems, crates.io, Docker Hub, endoflife.date, the RFC editor, caniuse, release pages. A URL that returns JSON renders as a table of its fields.

The generic commands work on whatever is open:

- `oc do <n>` follows the link behind number `[n]` on the page you just rendered. Following a link you can see is always `oc do <n>`, never a second command with a URL.
- `oc find <query>` prints every place a string appears on the page already open, one line per match with the number to read it by.
- `oc read <n>` prints the region at `[n]` in full: one block with its context, or a whole section when `[n]` is a heading.
- `oc next` prints the next ~500 tokens of the page already open, continuing where the last view stopped.
- `oc raw [url]` returns the whole page as distilled markdown. With no URL it uses the page already open.

Tips:

- A view is capped at about 500 tokens. `... 164 more blocks (~7,100 tokens)` at the end is the price of the rest of the page.
- On a long page, `oc find <query>` then `oc read <n>` on the match is the cheapest way to one fact. Reach for `oc raw` only when you truly need the whole page.
- A table row can span several numbered blocks, so when `oc read <n>` shows half a row, `oc next` or `oc raw` has the rest.
- A page that comes back with no readable text says so on stderr and exits 2. That page is JavaScript-only, gated, or challenged; report that rather than guessing.
- Numbers belong to the most recent page, so read the newest output before picking one.
- Quote URLs that contain `&` or `?`.
