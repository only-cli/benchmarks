---
name: browse-oc
description: Browse any website with the oc CLI, which renders pages as compact text with numbered actions. Use it to read pages, search results, and discussions in minimal tokens.
allowed-tools: Bash(oc:*)
---

# Browse with oc

- `oc open <url>` renders the page as compact text under a ~500 token budget, with `[n]` markers labeling links and actions.
- `oc open <url> --budget 1500` loosens the budget when the compact view cut something you need.
- `oc raw <url>` returns the whole page as distilled markdown when you need full text, for example every comment in a thread.

Tips:

- Quote URLs that contain `&` or `?`.
- Following a link: the compact view leaves URLs out to save tokens, so to get one, use `oc open <url> --json`, which lists every `[n]` with its `href`, or `oc raw <url>`, whose markdown links carry the URLs. Relative hrefs resolve against the page you opened. Then `oc open` that URL.
- If a compact view looks empty or blocked, try `oc raw <url>` before giving up.
