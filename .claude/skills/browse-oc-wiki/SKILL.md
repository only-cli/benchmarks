---
name: browse-oc-wiki
description: Look things up on Wikipedia with the oc CLI, which renders pages as compact text with numbered actions and ships a tuned Wikipedia shortcut. Use it to search Wikipedia, read articles, and read non English wikis in minimal tokens.
allowed-tools: Bash(oc:*)
---

# Wikipedia with oc

Wikipedia shortcuts, which resolve to a URL and then render like any other page:

- `oc wiki search <query>` searches Wikipedia and lists the matching articles, each with a snippet, its size, and when it was last edited.
- `oc wiki article <title>` renders that article. The title takes every word after it, so `oc wiki article Eiffel Tower` works unquoted.
- `oc wiki lang <code> <title>` renders the article from another language wiki: `oc wiki lang de Berlin` reads the German article.

The generic commands work on whatever is open:

- `oc do <n>` follows the link behind number `[n]` on the page you just rendered. Following a search result is always `oc do <n>`, never a second command with a URL.
- `oc find <query>` prints every place a string appears on the page already open, one line per match with the number to read it by.
- `oc read <n>` prints the region at `[n]` in full: one block with its context, or a whole section when `[n]` is a heading.
- `oc next` prints the next ~500 tokens of the page already open, continuing where the last view stopped.
- `oc raw [url]` returns the whole page as distilled markdown. With no URL it uses the page already open.
- `oc open <url>` renders any URL, for when you have one already.

Tips:

- A view is capped at about 500 tokens. `... 164 more blocks (~7,100 tokens)` at the end is the price of the rest of the page.
- On a long article, `oc find <query>` then `oc read <n>` on the match is the cheapest way to one fact. Reach for `oc raw` only when you truly need the whole page.
- Numbers belong to the most recent page, so read the newest output before picking one.
- Quote URLs that contain `&` or `?`.
