---
name: browse-oc
description: Browse any website with the oc CLI, which renders pages as compact text with numbered actions. Use it to read pages, search results, and discussions in minimal tokens.
allowed-tools: Bash(oc:*)
---

# Browse with oc

- `oc open <url>` renders the page as compact text under a ~500 token budget, with `[n]` markers labeling links, headings, and long text blocks.
- `oc do <n>` follows the link behind number `[n]` on the page you just rendered, and renders the new page the same way.
- `oc find <query>` prints every place a string appears on the page already open, one line per match with the number to read it by.
- `oc read <n>` prints the region at `[n]` in full: one block with its context, or a whole section when `[n]` is a heading.
- `oc next` prints the next ~500 tokens of the page already open, continuing where the last view stopped.
- `oc raw [url]` returns the whole page as distilled markdown. With no URL it uses the page already open.

Tips:

- Quote URLs that contain `&` or `?`.
- Following a link is always `oc do <n>`, never a second `oc open`. The compact view leaves URLs out to save tokens, and `do` does not need one: `oc open news.ycombinator.com` then `oc do 15` opens `[15]`. Search result links resolve past the search engine's redirect.
- When you are looking for something specific on a long page, `oc find <query>` is the cheapest way to it, then `oc read <n>` on the match. When you are reading rather than looking something up, `oc next` continues the page. Reach for `oc raw` only when you truly need the whole page: it usually costs ten to twenty times a `find` or a `next`.
- `... 164 more blocks (~7,100 tokens)` at the end of a view is the price of the rest of the page. `... +820 chars` at the end of a line means that block was cut there and `oc read <n>` prints it whole.
- Numbers belong to the most recent page, so read the newest output before picking one. Numbers hidden behind a `[6-9] 4 similar links` marker still work.
- If a compact view looks empty or blocked, try `oc raw <url>` before giving up.
