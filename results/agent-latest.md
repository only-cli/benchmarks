| task | tool | model | ok | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| hn-top | oc | claude-sonnet-5 | yes | 4 | 1006 | 173 | 89102 | 4615 | 94896 | 0.0579 | 9 | The #1 story on Hacker News right now is "The Amazon Tax." |
| hn-top | raw-curl | claude-sonnet-5 | yes | 4 | 994 | 232 | 89036 | 4720 | 94982 | 0.0594 | 7 | "The Amazon Tax" is the #1 story on Hacker News right now. |
| hn-top | lynx | claude-sonnet-5 | yes | 4 | 990 | 187 | 89041 | 3900 | 94118 | 0.0538 | 8 | The #1 story on Hacker News right now is "The Amazon Tax" (seths.blog). |
| hn-top | jina-reader | claude-sonnet-5 | yes | 4 | 1004 | 173 | 89073 | 11255 | 101505 | 0.0977 | 9 | "Using the railway network as a flatbed scanner" is the #1 story on Hacker News  |
| hn-top | playwright-mcp | claude-sonnet-5 | yes | 6 | 994 | 418 | 152940 | 5516 | 159868 | 0.0861 | 15 | The #1 story on Hacker News right now is "The Amazon Tax." |
| gh-search | oc | claude-sonnet-5 | yes | 5 | 1019 | 301 | 121420 | 7503 | 130243 | 0.0869 | 12 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly **9. |
| gh-search | raw-curl | claude-sonnet-5 | yes | 6 | 1009 | 675 | 152458 | 4652 | 158794 | 0.0847 | 19 | The first result is **gokcehan/lf**, with roughly 9,500 stars (~9,464). |
| gh-search | lynx | claude-sonnet-5 | yes | 4 | 1001 | 183 | 89066 | 10582 | 100832 | 0.0938 | 11 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly 9.5k |
| gh-search | jina-reader | claude-sonnet-5 | yes | 3 | 1015 | 299 | 90517 | 8418 | 100249 | 0.0830 | 9 | The first result is **gokcehan/lf**, a terminal file manager written in Go, with |
| gh-search | playwright-mcp | claude-sonnet-5 | yes | 6 | 1005 | 418 | 153068 | 17840 | 172331 | 0.1601 | 20 | The first result is **gokcehan/lf**, with roughly 9.5k stars (9,464). |
| reddit-thread | oc | claude-sonnet-5 | yes | 5 | 1024 | 368 | 121611 | 5237 | 128240 | 0.0743 | 15 | Commenters most often recommend **elinks**, with w3m as the next most popular al |
| reddit-thread | raw-curl | claude-sonnet-5 | NO | 13 | 1028 | 2505 | 385829 | 7964 | 397326 | 0.2021 | 43 |  |
| reddit-thread | lynx | claude-sonnet-5 | yes | 5 | 1008 | 423 | 115958 | 11386 | 128775 | 0.1104 | 12 | w3m appears to be the most recommended terminal browser in that thread (mentione |
| reddit-thread | jina-reader | claude-sonnet-5 | yes | 6 | 1024 | 610 | 152944 | 5271 | 159849 | 0.0876 | 24 | Reddit is blocking the Jina reader with a 403 (network policy block), not return |
| reddit-thread | playwright-mcp | claude-sonnet-5 | yes | 6 | 1010 | 478 | 153265 | 4827 | 159580 | 0.0830 | 15 | Reddit blocked the automated browser (403 "blocked by network security"), so I c |

### Summary
| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 3/3 ✅ | 14 | 842 | 353379 | 0.2191 ✅ | 12 |
| raw-curl | claude-sonnet-5 | 2/3 | 23 | 907 | 253776 | 0.1441 | 23 |
| lynx | claude-sonnet-5 | 3/3 ✅ | 13 ✅ | 793 ✅ | 323725 ✅ | 0.2580 | 10 ✅ |
| jina-reader | claude-sonnet-5 | 3/3 ✅ | 13 ✅ | 1082 | 361603 | 0.2684 | 14 |
| playwright-mcp | claude-sonnet-5 | 3/3 ✅ | 18 | 1314 | 491779 | 0.3293 | 17 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task.

### What each tool actually cost, failures included
```
oc             ######################                     353,379 tokens  14 turns
raw-curl       ########################################   651,102 tokens  23 turns  1 failed
lynx           ####################                       323,725 tokens  13 turns
jina-reader    ######################                     361,603 tokens  13 turns
playwright-mcp ##############################             491,779 tokens  18 turns
```
