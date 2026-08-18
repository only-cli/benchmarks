# only-cli benchmarks

Reproducible comparisons of [oc](https://github.com/only-cli/oc) against other ways AI agents read the web. The question every benchmark here answers: for the same page and the same task, how many tokens does the agent have to read, how long does it take, and did it actually get the content?

## Metrics

Three axes, reported per task and summarized per adapter:

- **Token usage**: estimated tokens of the text the agent must ingest (chars / 4, same estimator oc uses)
- **Speed**: wall clock milliseconds, fetch through final output
- **Performance**: success rate (did the method return usable page content) and transferred payload size in bytes

## Methods compared

| adapter | what it represents |
| --- | --- |
| `oc-open` | oc compact view, the default agent path |
| `oc-raw` | oc whole-page markdown |
| `raw-fetch` | naive agent behavior: fetch the URL, read the raw HTML |

Planned: headless browser with screenshots (Playwright), accessibility-tree dumps, opencli adapters, browser-use. PRs adding an adapter are welcome; an adapter is one file in `adapters/` exporting `run(url)` and returning `{ output, bytes }`.

## Run it

```
node run.js
```

Node 20+, no dependencies. Results print as a markdown table and land in `results/latest.json`. By default the oc adapters run the CLI from a sibling checkout at `../only-cli`; set `OC_BIN` to point somewhere else (for example `OC_BIN="npx only-cli"`).

Network benchmarks are honest but noisy: they hit live sites, so numbers vary run to run and a site may block or change at any time. Compare orders of magnitude, not single-digit percentages.

## Tasks

Tasks live in `tasks.json`: an id, a URL, and what an agent would want from the page. Add tasks that represent real agent work (read an article, scan search results, extract a discussion), not synthetic best cases for any one tool.

## Contributors

- [only-cli](https://github.com/only-cli), creator and maintainer

## License

MIT
