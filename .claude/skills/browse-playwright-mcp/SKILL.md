---
name: browse-playwright-mcp
description: Browse web pages with the Playwright MCP browser tools. Use it to read pages and interact with them when the playwright MCP server is the available web tool.
allowed-tools: mcp__playwright
---

# Browse with Playwright MCP

- `browser_navigate` opens a URL; the response includes an accessibility snapshot of the page with a `ref` for each element.
- `browser_click`, `browser_type`, and friends act on elements by their `ref`.
- `browser_snapshot` re-reads the current page when you need a fresh snapshot without navigating.

Tips:

- The snapshot is the page content; read it instead of asking for screenshots.
- A security or blocked page in the snapshot means the site refused the automated browser.
