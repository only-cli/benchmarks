---
name: browse-lynx
description: Browse web pages as plain text with the lynx terminal browser. Use it to read pages, search results, and discussions when lynx is the available web tool.
allowed-tools: Bash(lynx:*)
---

# Browse with lynx

- `lynx -dump <url>` prints the rendered page as plain text, with numbered links inline and a references list of their URLs at the end.
- Quote URLs that contain `&` or `?`.

Tips:

- To follow a numbered link, look up its URL in the references list and `lynx -dump` it.
- Some sites block lynx; a challenge or robot page in the output means the content is not there.
