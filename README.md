# only-cli benchmarks

Reproducible comparisons of [oc](https://github.com/only-cli/only-cli) against other ways AI agents read the web. The question every benchmark here answers: for the same page and the same task, how many tokens does the agent have to read, how long does it take, and did it actually get the content?

## Metrics

The benchmark reports the same metrics oc shows agents under `--verbose`, with token usage added on top:

- **Token usage**: estimated tokens of the text the agent must ingest (chars / 4, same estimator oc uses)
- **Speed**: wall clock milliseconds end to end, plus the fetch and process split where the adapter reports it
- **HTTP status**: what the site actually answered, so a block or a challenge page shows up as itself
- **Resources**: bytes transferred over the network and memory used, where the adapter reports them
- **Success rate**: did the method return usable page content at all

The oc adapters run with `-v` and read oc's own metrics line from stderr, so stdout, the text an agent would read, stays exactly what gets token-counted.

## Methods compared

| adapter | what it represents |
| --- | --- |
| `oc-open` | oc compact view, the default agent path |
| `oc-raw` | oc whole-page markdown |
| `raw-fetch` | naive agent behavior: fetch the URL, read the raw HTML |

Planned: headless browser with screenshots (Playwright), accessibility-tree dumps, opencli adapters, browser-use. PRs adding an adapter are welcome; an adapter is one file in `adapters/` exporting `run(url)` and returning `{ output, bytes }`, plus `status`, `fetchMs`, `processMs`, and `memMB` when the method can report them.

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
