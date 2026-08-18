| task | tool | model | ok | turns | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| hn-top | oc | claude-sonnet-5 | yes | 2 | 63136 | 0.0438 | 5 | The #1 story on Hacker News right now is "The Amazon Tax" (seths.blog). |
| hn-top | raw-curl | claude-sonnet-5 | yes | 2 | 63329 | 0.0455 | 7 | The #1 story on Hacker News right now is "The Amazon Tax" (seths.blog). |
| hn-top | lynx | claude-sonnet-5 | yes | 2 | 62588 | 0.0408 | 7 | The #1 story on Hacker News right now is "The Amazon Tax" (seths.blog). |
| hn-top | jina-reader | claude-sonnet-5 | yes | 2 | 69960 | 0.0854 | 7 | The #1 story on Hacker News right now is "Using the railway network as a flatbed |
| hn-top | playwright-mcp | claude-sonnet-5 | yes | 4 | 145371 | 0.1777 | 11 | The #1 story on Hacker News right now is "The Amazon Tax" (seths.blog). |
| gh-search | oc | claude-sonnet-5 | yes | 3 | 97534 | 0.0709 | 11 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly 9.5k |
| gh-search | raw-curl | claude-sonnet-5 | yes | 5 | 173523 | 0.1104 | 18 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly 9,50 |
| gh-search | lynx | claude-sonnet-5 | yes | 3 | 96803 | 0.0648 | 9 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly 9.5k |
| gh-search | jina-reader | claude-sonnet-5 | yes | 2 | 70405 | 0.0876 | 7 | The first result is gokcehan/lf, with roughly 9.5k stars. |
| gh-search | playwright-mcp | claude-sonnet-5 | yes | 4 | 139993 | 0.1446 | 16 | The first result is `gokcehan/lf`, with about 9.5k stars. |
| reddit-thread | oc | claude-sonnet-5 | yes | 4 | 131268 | 0.0878 | 18 | w3m is the most recommended terminal browser among commenters in that thread. |
| reddit-thread | raw-curl | claude-sonnet-5 | NO | 13 | 400368 | 0.2156 | 56 |  |
| reddit-thread | lynx | claude-sonnet-5 | yes | 3 | 101682 | 0.1268 | 13 | w3m is the most recommended terminal web browser in that thread. |
| reddit-thread | jina-reader | claude-sonnet-5 | NO | 13 | 403755 | 0.2016 | 57 |  |
| reddit-thread | playwright-mcp | claude-sonnet-5 | NO | 13 | 401797 | 0.1909 | 65 |  |

### Summary
| tool | model | success | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 3/3 | 291938 | 0.2026 | 11 |
| raw-curl | claude-sonnet-5 | 2/3 | 236852 | 0.1559 | 27 |
| lynx | claude-sonnet-5 | 3/3 | 261073 | 0.2324 | 10 |
| jina-reader | claude-sonnet-5 | 2/3 | 140365 | 0.1730 | 24 |
| playwright-mcp | claude-sonnet-5 | 2/3 | 285364 | 0.3224 | 31 |
