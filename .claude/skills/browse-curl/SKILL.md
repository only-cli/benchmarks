---
name: browse-curl
description: Fetch web pages as raw HTML with curl and read the markup directly. Use it to browse when curl is the only available web tool.
allowed-tools: Bash(curl:*)
---

# Browse with curl

- `curl -sL <url>` fetches the page HTML, following redirects.
- Quote URLs that contain `&` or `?`.

Tips:

- Raw HTML is large; find the content you need inside the markup rather than rereading whole pages.
- A tiny or garbled response usually means a block or challenge page, not the content.
