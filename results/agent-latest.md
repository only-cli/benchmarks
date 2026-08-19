| task | tool | model | ok | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| hn-top | oc | claude-sonnet-5 | yes | 4 | 1086 | 183 | 84363 | 12127 | 97759 | 0.1018 | 13 | The #1 story on Hacker News right now is "GrapheneOS in 2027 available on high-e |
| hn-top | raw-curl | claude-sonnet-5 | yes | 4 | 1013 | 255 | 89072 | 3814 | 94154 | 0.0543 | 12 | The #1 story on Hacker News right now is "GrapheneOS in 2027 available on high-e |
| hn-top | lynx | claude-sonnet-5 | yes | 4 | 1009 | 176 | 88965 | 3927 | 94077 | 0.0538 | 8 | The #1 story on Hacker News right now is "Turbovec – Google's TurboQuant for vec |
| hn-top | jina-reader | claude-sonnet-5 | yes | 4 | 1023 | 198 | 89128 | 11407 | 101756 | 0.0990 | 35 | "GrapheneOS in 2027 available on high-end Motorola phones" is currently the #1 s |
| hn-top | playwright-mcp | claude-sonnet-5 | yes | 7 | 1015 | 568 | 185678 | 5971 | 193232 | 0.1009 | 24 | "GrapheneOS in 2027 available on high-end Motorola phones" |
| gh-search | oc | claude-sonnet-5 | yes | 4 | 1097 | 232 | 89759 | 5217 | 96305 | 0.0627 | 11 | The first result is **gokcehan/lf**, with roughly 9.5k stars. |
| gh-search | raw-curl | claude-sonnet-5 | yes | 12 | 1040 | 1828 | 346788 | 7428 | 357084 | 0.1770 | 38 | The first result is **gokcehan/lf**, a terminal file manager written in Go, with |
| gh-search | lynx | claude-sonnet-5 | yes | 5 | 1022 | 319 | 121251 | 6306 | 128898 | 0.0799 | 10 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly 9.5k |
| gh-search | jina-reader | claude-sonnet-5 | yes | 4 | 1034 | 225 | 89134 | 3909 | 94302 | 0.0545 | 7 | The Jina Reader tool failed (blocked with an authentication-required error due t |
| gh-search | playwright-mcp | claude-sonnet-5 | yes | 6 | 1024 | 431 | 153169 | 17934 | 172558 | 0.1609 | 16 | The first result is **gokcehan/lf**, with roughly 9.5k stars. |
| stock-price | oc | claude-sonnet-5 | yes | 7 | 1101 | 541 | 188743 | 9135 | 199520 | 0.1205 | 26 | The market is currently open (as of 10:29:53 AM EDT), so the most recent close s |
| stock-price | raw-curl | claude-sonnet-5 | NO | 13 | 1040 | 1947 | 380408 | 17631 | 401026 | 0.2501 | 122 |  |
| stock-price | lynx | claude-sonnet-5 | NO | 4 | 1018 | 196 | 89116 | 3766 | 94096 | 0.0532 | 10 | lynx isn't installed on this system, so I can't fetch the page — I'm unable to a |
| stock-price | jina-reader | claude-sonnet-5 | yes | 6 | 1036 | 633 | 156815 | 9655 | 168139 | 0.1154 | 22 | Apple's (AAPL) stock closed at $310.03 (+4.44, +1.45%) on August 18 at 4:00:02 P |
| stock-price | playwright-mcp | claude-sonnet-5 | yes | 6 | 1022 | 604 | 153833 | 7537 | 162996 | 0.1013 | 24 | Apple's (AAPL) most recent market close price shown on the page was $310.03 (lis |
| reddit-thread | oc | claude-sonnet-5 | yes | 6 | 1106 | 417 | 155424 | 6603 | 163550 | 0.0935 | 19 | Lynx is recommended most often by commenters in this thread. |
| reddit-thread | raw-curl | claude-sonnet-5 | yes | 12 | 1045 | 1814 | 347179 | 6899 | 356937 | 0.1737 | 51 | 403 confirmed — this is a block/challenge page, not the actual thread content. I |
| reddit-thread | lynx | claude-sonnet-5 | yes | 5 | 1027 | 331 | 121217 | 5654 | 128229 | 0.0762 | 12 | Commenters most often recommend w3m. |
| reddit-thread | jina-reader | claude-sonnet-5 | yes | 4 | 1039 | 233 | 89191 | 4227 | 94690 | 0.0565 | 14 | The Jina reader tool was blocked by Reddit (403 Forbidden), so I can't fetch the |
| reddit-thread | playwright-mcp | claude-sonnet-5 | yes | 6 | 1029 | 479 | 153921 | 5136 | 160565 | 0.0851 | 20 | The page is blocked by Reddit's network security (403 — "You've been blocked by  |
| hn-comments | oc | claude-sonnet-5 | yes | 5 | 1103 | 399 | 124070 | 7697 | 133269 | 0.0904 | 17 | The #1 story is "GrapheneOS in 2027 available on high-end Motorola phones," and  |
| hn-comments | raw-curl | claude-sonnet-5 | yes | 5 | 1030 | 374 | 121282 | 8381 | 131067 | 0.0932 | 18 | The #1 story is "GrapheneOS in 2027 available on high-end Motorola phones," and  |
| hn-comments | lynx | claude-sonnet-5 | yes | 5 | 1026 | 348 | 128970 | 15897 | 146241 | 0.1402 | 13 | The #1 story is "Turbovec – Google's TurboQuant for vector search in Rust," and  |
| hn-comments | jina-reader | claude-sonnet-5 | yes | 5 | 1040 | 530 | 127865 | 21960 | 151395 | 0.1790 | 20 | The #1 story, "GrapheneOS in 2027 available on high-end Motorola phones," has it |
| hn-comments | playwright-mcp | claude-sonnet-5 | yes | 9 | 1034 | 880 | 314498 | 28756 | 345168 | 0.2810 | 34 | The story is "GrapheneOS in 2027 available on high-end Motorola phones," and the |
| gh-repo-detail | oc | claude-sonnet-5 | NO | 26 | 1146 | 4498 | 857787 | 11056 | 874487 | 0.3922 | 244 |  |
| gh-repo-detail | raw-curl | claude-sonnet-5 | yes | 25 | 1071 | 4137 | 939409 | 15918 | 960535 | 0.4404 | 120 | Stopped auto-retrying after ~1 hour of GitHub secondary rate-limiting on all cur |
| gh-repo-detail | lynx | claude-sonnet-5 | yes | 4 | 1025 | 192 | 92217 | 694 | 94128 | 0.0356 | 10 | lynx is not installed in this environment, so I can't browse the web to complete |
| gh-repo-detail | jina-reader | claude-sonnet-5 | yes | 6 | 1043 | 406 | 170950 | 9287 | 181686 | 0.1140 | 20 | gokcehan/lf (the first result) is published under the MIT License. |
| gh-repo-detail | playwright-mcp | claude-sonnet-5 | yes | 21 | 1059 | 2992 | 704835 | 13200 | 722086 | 0.3365 | 91 | I mistakenly kept retrying immediately instead of actually waiting for the sched |
| ddg-follow | oc | claude-sonnet-5 | yes | 4 | 1118 | 310 | 89875 | 4850 | 96153 | 0.0617 | 14 | DuckDuckGo blocked the request with an image CAPTCHA that `oc` can't solve, so I |
| ddg-follow | raw-curl | claude-sonnet-5 | yes | 20 | 1077 | 3697 | 650537 | 11279 | 666590 | 0.3193 | 84 | The DuckDuckGo search page returned a bot-detection challenge ("Unfortunately, b |
| ddg-follow | lynx | claude-sonnet-5 | yes | 5 | 1043 | 303 | 126106 | 10401 | 137853 | 0.1057 | 11 | "Welcome to The Rust Programming Language, an introductory book about Rust." |
| ddg-follow | jina-reader | claude-sonnet-5 | yes | 5 | 1057 | 307 | 126966 | 20713 | 149043 | 0.1679 | 15 | Welcome to *The Rust Programming Language*, an introductory book about Rust. |
| ddg-follow | playwright-mcp | claude-sonnet-5 | yes | 6 | 1045 | 574 | 154637 | 5708 | 161964 | 0.0902 | 27 | DuckDuckGo blocked the automated browser with a bot-check challenge, so I can't  |
| reddit-top-comment | oc | claude-sonnet-5 | yes | 8 | 1111 | 717 | 236043 | 11649 | 249520 | 0.1524 | 30 | The top post is "Anthropic has twice the revenue of OpenAI," and its top comment |
| reddit-top-comment | raw-curl | claude-sonnet-5 | NO | 26 | 1074 | 4839 | 857879 | 11718 | 875510 | 0.4013 | 113 |  |
| reddit-top-comment | lynx | claude-sonnet-5 | NO | 4 | 1026 | 296 | 89133 | 3852 | 94307 | 0.0551 | 12 | lynx isn't installed on this machine, so I can't browse the page as instructed — |
| reddit-top-comment | jina-reader | claude-sonnet-5 | yes | 4 | 1040 | 232 | 89179 | 4181 | 94632 | 0.0562 | 24 | The page is blocked (403 Forbidden by Reddit's network policy), so I can't fetch |
| reddit-top-comment | playwright-mcp | claude-sonnet-5 | yes | 6 | 1030 | 498 | 154558 | 5447 | 161533 | 0.0874 | 21 | I can't complete this task: old.reddit.com blocked the Playwright browser with " |

### Summary
| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 7/8 | 64 | 2799 | 1036076 | 0.6829 | 47 |
| raw-curl | claude-sonnet-5 | 6/8 | 117 | 12105 | 2566367 | 1.2579 | 70 |
| lynx | claude-sonnet-5 | 6/8 | 36 | 1669 | 729426 | 0.4914 | 11 |
| jina-reader | claude-sonnet-5 | 8/8 ✅ | 38 ✅ | 2764 ✅ | 1035643 ✅ | 0.8425 ✅ | 20 ✅ |
| playwright-mcp | claude-sonnet-5 | 8/8 ✅ | 67 | 7026 | 2080102 | 1.2434 | 32 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task.

### Cost per tier: one page versus following a link
| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 557,134 | 21 | 1,353,429 (1 failed) | 43 |
| raw-curl | 1,209,201 (1 failed) | 41 | 2,633,702 (1 failed) | 76 |
| lynx | 445,300 (1 failed) | 18 | 472,529 (1 failed) | 18 |
| jina-reader | 458,887 | 18 | 576,756 | 20 |
| playwright-mcp | 689,351 | 25 | 1,390,751 | 42 |

Every run in this table counts, failures included.

### What each tool actually cost, failures included
```
oc             ####################                      1,910,563 tokens  64 turns  1 failed
raw-curl       ########################################  3,842,903 tokens  117 turns  2 failed
lynx           ##########                                 917,829 tokens  36 turns  2 failed
jina-reader    ###########                               1,035,643 tokens  38 turns
playwright-mcp ######################                    2,080,102 tokens  67 turns
```
