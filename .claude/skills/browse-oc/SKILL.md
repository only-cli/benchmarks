---
name: browse-oc
description: Browse any website with the oc CLI, which renders pages as compact text with numbered actions. Use it to read pages, search results, and discussions in minimal tokens.
allowed-tools: Bash(oc:*)
---

# Browse with oc

- `oc open <url>` renders the page as compact text under a ~500 token budget, with `[n]` markers labeling links and actions.
- `oc do <n>` follows the link behind number `[n]` on the page you just rendered, and renders the new page the same way.
- `oc open <url> --budget 1500` loosens the budget when the compact view cut something you need.
- `oc raw <url>` returns the whole page as distilled markdown when you need full text, for example every comment in a thread.

Tips:

- Quote URLs that contain `&` or `?`.
- Following a link is always `oc do <n>`, never a second `oc open`. The compact view leaves URLs out to save tokens, and `do` does not need one: `oc open news.ycombinator.com` then `oc do 15` opens `[15]`. Search result links resolve past the search engine's redirect.
- Numbers belong to the most recent page, so read the newest output before picking one. Numbers hidden behind a `[6-9] 4 similar links` marker still work.
- If a compact view looks empty or blocked, try `oc raw <url>` before giving up.
