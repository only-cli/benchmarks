| task | tool | model | ok | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| hn-top | oc | claude-sonnet-5 | yes | 4 | 1086 | 169 | 62335 | 34097 | 97687 | 0.1516 | 17 | The #1 story on Hacker News right now is "The End of an Athlon." |
| hn-top | raw-curl | claude-sonnet-5 | yes | 4 | 1013 | 255 | 89072 | 3814 | 94154 | 0.0543 | 12 | The #1 story on Hacker News right now is "GrapheneOS in 2027 available on high-e |
| hn-top | lynx | claude-sonnet-5 | yes | 4 | 1009 | 176 | 88965 | 3927 | 94077 | 0.0538 | 8 | The #1 story on Hacker News right now is "Turbovec – Google's TurboQuant for vec |
| hn-top | jina-reader | claude-sonnet-5 | yes | 4 | 1023 | 198 | 89128 | 11407 | 101756 | 0.0990 | 35 | "GrapheneOS in 2027 available on high-end Motorola phones" is currently the #1 s |
| hn-top | playwright-mcp | claude-sonnet-5 | yes | 7 | 1015 | 568 | 185678 | 5971 | 193232 | 0.1009 | 24 | "GrapheneOS in 2027 available on high-end Motorola phones" |
| gh-search | oc | claude-sonnet-5 | yes | 4 | 1097 | 230 | 89888 | 6885 | 98100 | 0.0489 | 9 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly **9. |
| gh-search | raw-curl | claude-sonnet-5 | yes | 12 | 1040 | 1828 | 346788 | 7428 | 357084 | 0.1770 | 38 | The first result is **gokcehan/lf**, a terminal file manager written in Go, with |
| gh-search | lynx | claude-sonnet-5 | yes | 5 | 1022 | 319 | 121251 | 6306 | 128898 | 0.0799 | 10 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly 9.5k |
| gh-search | jina-reader | claude-sonnet-5 | yes | 4 | 1034 | 225 | 89134 | 3909 | 94302 | 0.0545 | 7 | The Jina Reader tool failed (blocked with an authentication-required error due t |
| gh-search | playwright-mcp | claude-sonnet-5 | yes | 6 | 1024 | 431 | 153169 | 17934 | 172558 | 0.1609 | 16 | The first result is **gokcehan/lf**, with roughly 9.5k stars. |
| stock-price | oc | claude-sonnet-5 | yes | 7 | 1101 | 473 | 188788 | 9065 | 199427 | 0.0798 | 16 | AAPL closed at $309.35 (down $1.95, -0.63%) at market close on August 21, 2026 a |
| stock-price | raw-curl | claude-sonnet-5 | NO | 13 | 1040 | 1947 | 380408 | 17631 | 401026 | 0.2501 | 122 |  |
| stock-price | lynx | claude-sonnet-5 | NO | 4 | 1018 | 196 | 89116 | 3766 | 94096 | 0.0532 | 10 | lynx isn't installed on this system, so I can't fetch the page — I'm unable to a |
| stock-price | jina-reader | claude-sonnet-5 | yes | 6 | 1036 | 633 | 156815 | 9655 | 168139 | 0.1154 | 22 | Apple's (AAPL) stock closed at $310.03 (+4.44, +1.45%) on August 18 at 4:00:02 P |
| stock-price | playwright-mcp | claude-sonnet-5 | yes | 6 | 1022 | 604 | 153833 | 7537 | 162996 | 0.1013 | 24 | Apple's (AAPL) most recent market close price shown on the page was $310.03 (lis |
| reddit-thread | oc | claude-sonnet-5 | yes | 5 | 1104 | 379 | 122540 | 6739 | 130762 | 0.0563 | 13 | Lynx is recommended most often by commenters in that thread. |
| reddit-thread | raw-curl | claude-sonnet-5 | yes | 12 | 1045 | 1814 | 347179 | 6899 | 356937 | 0.1737 | 51 | 403 confirmed — this is a block/challenge page, not the actual thread content. I |
| reddit-thread | lynx | claude-sonnet-5 | yes | 5 | 1027 | 331 | 121217 | 5654 | 128229 | 0.0762 | 12 | Commenters most often recommend w3m. |
| reddit-thread | jina-reader | claude-sonnet-5 | yes | 4 | 1039 | 233 | 89191 | 4227 | 94690 | 0.0565 | 14 | The Jina reader tool was blocked by Reddit (403 Forbidden), so I can't fetch the |
| reddit-thread | playwright-mcp | claude-sonnet-5 | yes | 6 | 1029 | 479 | 153921 | 5136 | 160565 | 0.0851 | 20 | The page is blocked by Reddit's network security (403 — "You've been blocked by  |
| hn-comments | oc | claude-sonnet-5 | yes | 6 | 1105 | 396 | 158924 | 8110 | 168535 | 0.0692 | 15 | The #1 story is "The End of an Athlon," and the top comment (by c0l0) recounts h |
| hn-comments | raw-curl | claude-sonnet-5 | yes | 5 | 1030 | 374 | 121282 | 8381 | 131067 | 0.0932 | 18 | The #1 story is "GrapheneOS in 2027 available on high-end Motorola phones," and  |
| hn-comments | lynx | claude-sonnet-5 | yes | 5 | 1026 | 348 | 128970 | 15897 | 146241 | 0.1402 | 13 | The #1 story is "Turbovec – Google's TurboQuant for vector search in Rust," and  |
| hn-comments | jina-reader | claude-sonnet-5 | yes | 5 | 1040 | 530 | 127865 | 21960 | 151395 | 0.1790 | 20 | The #1 story, "GrapheneOS in 2027 available on high-end Motorola phones," has it |
| hn-comments | playwright-mcp | claude-sonnet-5 | yes | 9 | 1034 | 880 | 314498 | 28756 | 345168 | 0.2810 | 34 | The story is "GrapheneOS in 2027 available on high-end Motorola phones," and the |
| gh-repo-detail | oc | claude-sonnet-5 | yes | 6 | 1106 | 407 | 158895 | 9769 | 170177 | 0.0760 | 18 | The first result, gokcehan/lf, is published under the MIT license. |
| gh-repo-detail | raw-curl | claude-sonnet-5 | yes | 25 | 1071 | 4137 | 939409 | 15918 | 960535 | 0.4404 | 120 | Stopped auto-retrying after ~1 hour of GitHub secondary rate-limiting on all cur |
| gh-repo-detail | lynx | claude-sonnet-5 | yes | 4 | 1025 | 192 | 92217 | 694 | 94128 | 0.0356 | 10 | lynx is not installed in this environment, so I can't browse the web to complete |
| gh-repo-detail | jina-reader | claude-sonnet-5 | yes | 6 | 1043 | 406 | 170950 | 9287 | 181686 | 0.1140 | 20 | gokcehan/lf (the first result) is published under the MIT License. |
| gh-repo-detail | playwright-mcp | claude-sonnet-5 | yes | 21 | 1059 | 2992 | 704835 | 13200 | 722086 | 0.3365 | 91 | I mistakenly kept retrying immediately instead of actually waiting for the sched |
| ddg-follow | oc | claude-sonnet-5 | yes | 7 | 1124 | 387 | 192106 | 8422 | 202039 | 0.0771 | 15 | "Welcome to The Rust Programming Language, an introductory book about Rust." |
| ddg-follow | raw-curl | claude-sonnet-5 | yes | 20 | 1077 | 3697 | 650537 | 11279 | 666590 | 0.3193 | 84 | The DuckDuckGo search page returned a bot-detection challenge ("Unfortunately, b |
| ddg-follow | lynx | claude-sonnet-5 | yes | 5 | 1043 | 303 | 126106 | 10401 | 137853 | 0.1057 | 11 | "Welcome to The Rust Programming Language, an introductory book about Rust." |
| ddg-follow | jina-reader | claude-sonnet-5 | yes | 5 | 1057 | 307 | 126966 | 20713 | 149043 | 0.1679 | 15 | Welcome to *The Rust Programming Language*, an introductory book about Rust. |
| ddg-follow | playwright-mcp | claude-sonnet-5 | yes | 6 | 1045 | 574 | 154637 | 5708 | 161964 | 0.0902 | 27 | DuckDuckGo blocked the automated browser with a bot-check challenge, so I can't  |
| reddit-top-comment | oc | claude-sonnet-5 | yes | 16 | 1127 | 3156 | 631970 | 26032 | 662285 | 0.2631 | 79 | The top post is "I built an English ↔ Claudish translator," and its top comment  |
| reddit-top-comment | raw-curl | claude-sonnet-5 | NO | 26 | 1074 | 4839 | 857879 | 11718 | 875510 | 0.4013 | 113 |  |
| reddit-top-comment | lynx | claude-sonnet-5 | NO | 4 | 1026 | 296 | 89133 | 3852 | 94307 | 0.0551 | 12 | lynx isn't installed on this machine, so I can't browse the page as instructed — |
| reddit-top-comment | jina-reader | claude-sonnet-5 | yes | 4 | 1040 | 232 | 89179 | 4181 | 94632 | 0.0562 | 24 | The page is blocked (403 Forbidden by Reddit's network policy), so I can't fetch |
| reddit-top-comment | playwright-mcp | claude-sonnet-5 | yes | 6 | 1030 | 498 | 154558 | 5447 | 161533 | 0.0874 | 21 | I can't complete this task: old.reddit.com blocked the Playwright browser with " |
| youtube-watch | oc | claude-sonnet-5 | yes | 4 | 1095 | 223 | 89857 | 5548 | 96723 | 0.0434 | 10 | The video is "Do schools kill creativity? | Sir Ken Robinson | TED" with roughly |
| aws-s3-recursive | oc | claude-sonnet-5 | yes | 5 | 1137 | 347 | 122694 | 5744 | 129922 | 0.0521 | 13 | The `--recursive` flag makes `aws s3 cp` copy a directory and everything under i |
| aws-s3-recursive | raw-curl | claude-sonnet-5 | yes | 4 | 1062 | 271 | 89276 | 7120 | 97729 | 0.0500 | 8 | The `--recursive` flag copies a directory and everything under it, so the full c |
| aws-s3-recursive | jina-reader | claude-sonnet-5 | yes | 4 | 1072 | 233 | 89354 | 13142 | 103801 | 0.0738 | 11 | The `--recursive` flag copies a directory and everything under it; the full comm |
| aws-s3-recursive | playwright-mcp | claude-sonnet-5 | yes | 6 | 1062 | 461 | 153539 | 24193 | 179255 | 0.1331 | 15 | The `--recursive` flag makes `aws s3 cp` copy a directory and everything under i |
| gcloud-instance-flags | oc | claude-sonnet-5 | yes | 6 | 1146 | 404 | 156014 | 6356 | 163920 | 0.0618 | 19 | Confirmed both flags (`--machine-type` at [163] and `--zone` at [205]) exist on  |
| gcloud-instance-flags | raw-curl | claude-sonnet-5 | NO | 13 | 1087 | 1891 | 382905 | 7200 | 393083 | 0.1253 | 43 |  |
| gcloud-instance-flags | jina-reader | claude-sonnet-5 | yes | 5 | 1081 | 399 | 121683 | 10011 | 133174 | 0.0694 | 11 | The `--machine-type` flag sets the machine type and `--zone` sets the zone; the  |
| gcloud-instance-flags | playwright-mcp | claude-sonnet-5 | yes | 8 | 1071 | 607 | 186023 | 7786 | 195487 | 0.0754 | 18 | The machine type is set with `--machine-type=MACHINE_TYPE` and the zone with `-- |
| azure-hns-flag | oc | claude-sonnet-5 | yes | 5 | 1124 | 300 | 122562 | 5475 | 129461 | 0.0504 | 11 | The flag is `--enable-hierarchical-namespace` (short alias `--hns`). |
| azure-hns-flag | raw-curl | claude-sonnet-5 | NO | 13 | 1067 | 1809 | 380451 | 6098 | 389425 | 0.1196 | 38 |  |
| azure-hns-flag | jina-reader | claude-sonnet-5 | yes | 4 | 1059 | 266 | 89325 | 4954 | 95604 | 0.0413 | 8 | `--enable-hierarchical-namespace` (or its shorthand `--hns`), set to `true`, ena |
| azure-hns-flag | playwright-mcp | claude-sonnet-5 | yes | 7 | 1051 | 514 | 187436 | 9738 | 198739 | 0.0826 | 18 | `--enable-hierarchical-namespace` (alias `--hns`) turns on the hierarchical name |
| aws-docs-follow | oc | claude-sonnet-5 | yes | 13 | 1158 | 1187 | 406415 | 9777 | 418537 | 0.1334 | 36 | The `--recursive` flag copies a directory recursively, and the page's example is |
| aws-docs-follow | raw-curl | claude-sonnet-5 | yes | 5 | 1069 | 570 | 126349 | 15706 | 143694 | 0.0948 | 14 | DuckDuckGo is blocking curl with a bot-detection CAPTCHA challenge, so I can't r |
| aws-docs-follow | jina-reader | claude-sonnet-5 | yes | 5 | 1079 | 400 | 128401 | 21019 | 150899 | 0.1148 | 16 | The flag is `--recursive`, and the page's example for copying a local directory  |
| aws-docs-follow | playwright-mcp | claude-sonnet-5 | yes | 8 | 1071 | 1042 | 222072 | 25658 | 249843 | 0.1585 | 24 | (Note: the DuckDuckGo search page was blocked by a CAPTCHA, so I navigated direc |

### Summary
| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 13/13 ✅ | 88 | 8058 | 2667575 | 1.1630 | 21 |
| raw-curl | claude-sonnet-5 | 8/12 | 152 | 12946 | 2807790 | 1.4027 | 55 |
| lynx | claude-sonnet-5 | 6/8 | 36 | 1669 | 729426 | 0.4914 | 11 |
| jina-reader | claude-sonnet-5 | 12/12 ✅ | 56 ✅ | 4062 ✅ | 1519121 ✅ | 1.1418 ✅ | 17 ✅ |
| playwright-mcp | claude-sonnet-5 | 12/12 ✅ | 96 | 9650 | 2903426 | 1.6929 | 28 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task.

### Cost per tier: one page versus following a link
| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 1,046,002 | 40 | 1,621,573 | 48 |
| raw-curl | 2,089,438 (3 failed) | 71 | 2,777,396 (1 failed) | 81 |
| lynx | 445,300 (1 failed) | 18 | 472,529 (1 failed) | 18 |
| jina-reader | 791,466 | 31 | 727,655 | 25 |
| playwright-mcp | 1,262,832 | 46 | 1,640,594 | 50 |

Every run in this table counts, failures included.

### What each tool actually cost, failures included
```
oc             ######################                    2,667,575 tokens  88 turns
raw-curl       ########################################  4,866,834 tokens  152 turns  4 failed
lynx           ########                                   917,829 tokens  36 turns  2 failed
jina-reader    ############                              1,519,121 tokens  56 turns
playwright-mcp ########################                  2,903,426 tokens  96 turns
```
