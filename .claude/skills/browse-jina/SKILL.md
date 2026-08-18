---
name: browse-jina
description: Read web pages as markdown through the Jina Reader service. Use it to browse when r.jina.ai is the available web tool.
allowed-tools: Bash(curl:*)
---

# Browse with Jina Reader

- `curl -s "https://r.jina.ai/<full-url>"` returns the page converted to markdown. Keep the scheme in the appended URL, for example `https://r.jina.ai/https://example.com/page`.

Tips:

- Responses may come from Jina's cache, so very fresh page changes can be missing.
- A "Blocked" title or a bot-challenge body means the target site refused Jina's crawler, not that the page is empty.
