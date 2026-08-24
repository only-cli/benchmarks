---
name: browse-webfetch
description: Read web pages with the built in WebFetch tool, which fetches a URL and returns its content processed by a model against your prompt. Use it to read Wikipedia articles and search result pages.
allowed-tools: WebFetch
---

# Browse with WebFetch

- `WebFetch` takes a `url` and a `prompt`. It fetches the page, converts it to markdown, and returns what a small model extracts from it for your prompt.
- Ask for exactly the fact you need in the prompt. A narrow prompt comes back shorter than a broad one.
- To search Wikipedia, fetch a search URL such as `https://en.wikipedia.org/w/index.php?search=<query>&fulltext=1&ns0=1`, read the result titles, then fetch the article itself.
- To read an article directly, fetch `https://en.wikipedia.org/wiki/<Title>`.
- Other language wikis work the same way with their own subdomain, for example `https://de.wikipedia.org/wiki/Berlin`.
- Follow up with another fetch when the first answer is incomplete. Each call is a fresh fetch, so include everything the prompt needs.
