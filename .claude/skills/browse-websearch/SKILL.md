---
name: browse-websearch
description: Find facts with the built in WebSearch tool, which runs a web search and returns result snippets. Use it to answer questions from Wikipedia content without fetching pages yourself.
allowed-tools: WebSearch
---

# Search with WebSearch

- `WebSearch` takes a `query` and returns search results with snippets.
- Put the site in the query when you want a particular source, for example `anthropic wikipedia` or `Eiffel Tower height site:en.wikipedia.org`.
- Use `allowed_domains` to keep results on one site, for example `allowed_domains: ["en.wikipedia.org"]`, or `["de.wikipedia.org"]` for the German wiki.
- The snippets often carry the fact already. Search again with a narrower query when they do not, rather than guessing.
- Name the language wiki explicitly when the question asks for a non English article, since a plain query returns the English one.
