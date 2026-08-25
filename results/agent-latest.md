| task | tool | model | ok | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| hn-top | oc | claude-sonnet-5 | yes | 4 | 1086 | 197 | 84336 | 12024 | 97643 | 0.0680 | 7 | The #1 story on Hacker News right now is "Apple Introduces New Mac Studio with M |
| hn-top | raw-curl | claude-sonnet-5 | yes | 4 | 1013 | 231 | 89007 | 4734 | 94985 | 0.0400 | 10 | "Apple Introduces New Mac Studio with M5 Max and M5 Ultra" is currently the #1 s |
| hn-top | lynx | claude-sonnet-5 | yes | 4 | 1009 | 233 | 89035 | 3990 | 94267 | 0.0370 | 9 | The #1 story on Hacker News right now is "Apple Introduces New Mac Studio with M |
| hn-top | jina-reader | claude-sonnet-5 | yes | 4 | 1023 | 243 | 89083 | 11567 | 101916 | 0.0675 | 10 | The #1 story on Hacker News right now is "Apple Introduces New Mac Studio with M |
| hn-top | playwright-mcp | claude-sonnet-5 | yes | 7 | 1015 | 582 | 185532 | 5992 | 193121 | 0.0679 | 23 | The #1 story on Hacker News right now is "Apple Introduces New Mac Studio with M |
| gh-search | oc | claude-sonnet-5 | yes | 4 | 1097 | 215 | 89752 | 6901 | 97965 | 0.0487 | 10 | The first result is **gokcehan/lf** with about 9.5k stars. |
| gh-search | raw-curl | claude-sonnet-5 | NO | 13 | 1042 | 2402 | 389583 | 9087 | 402114 | 0.1393 | 34 |  |
| gh-search | lynx | claude-sonnet-5 | yes | 5 | 1022 | 340 | 121507 | 6326 | 129195 | 0.0540 | 10 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly 9.5k |
| gh-search | jina-reader | claude-sonnet-5 | yes | 4 | 1034 | 296 | 89125 | 4096 | 94551 | 0.0381 | 7 | The Jina reader tool is blocked from accessing github.com entirely right now (an |
| gh-search | playwright-mcp | claude-sonnet-5 | yes | 6 | 1024 | 346 | 153712 | 17497 | 172579 | 0.1052 | 13 | The first result is **gokcehan/lf**, with roughly 9.5k stars. |
| stock-price | oc | claude-sonnet-5 | yes | 7 | 1101 | 615 | 188729 | 9231 | 199676 | 0.0819 | 14 | The market is currently open, so the most recent close shown on the page is the  |
| stock-price | raw-curl | claude-sonnet-5 | NO | 13 | 1040 | 2184 | 414832 | 13719 | 431775 | 0.1607 | 42 |  |
| stock-price | lynx | claude-sonnet-5 | yes | 5 | 1020 | 438 | 121083 | 9274 | 131815 | 0.0666 | 14 | The page shows the market as currently open (as of 11:32:28 AM EDT) with a live  |
| stock-price | jina-reader | claude-sonnet-5 | yes | 6 | 1036 | 618 | 155977 | 8296 | 165927 | 0.0715 | 24 | The page shows the market is currently open (as of 11:32 AM EDT), so the most re |
| stock-price | playwright-mcp | claude-sonnet-5 | yes | 6 | 1022 | 534 | 153775 | 27110 | 182441 | 0.1455 | 20 | Since the market is currently open (shown as "Market Open" at the time of the sn |
| reddit-thread | oc | claude-sonnet-5 | yes | 7 | 1104 | 548 | 122377 | 6212 | 130241 | 0.0559 | 12 | Lynx is recommended most often by commenters in that thread. |
| reddit-thread | raw-curl | claude-sonnet-5 | yes | 5 | 1031 | 436 | 120347 | 4591 | 126405 | 0.0478 | 9 | The page is blocked by Reddit's network policy — curl received a "whoa there, pa |
| reddit-thread | lynx | claude-sonnet-5 | yes | 5 | 1027 | 402 | 121329 | 8879 | 131637 | 0.0648 | 15 | w3m is mentioned most often and praised repeatedly ("I like w3m the best", "w3m  |
| reddit-thread | jina-reader | claude-sonnet-5 | yes | 4 | 1039 | 271 | 89141 | 4268 | 94719 | 0.0386 | 8 | The page fetch was blocked (Reddit returned a 403 to the Jina reader), so I can' |
| reddit-thread | playwright-mcp | claude-sonnet-5 | yes | 6 | 1029 | 515 | 153903 | 5188 | 160635 | 0.0577 | 13 | The page load was blocked (HTTP 403 — "You've been blocked by network security"  |
| hn-comments | oc | claude-sonnet-5 | yes | 5 | 1103 | 380 | 123938 | 7698 | 133119 | 0.0604 | 9 | The #1 story is "Apple Introduces New Mac Studio with M5 Max and M5 Ultra," and  |
| hn-comments | raw-curl | claude-sonnet-5 | yes | 5 | 1030 | 363 | 121239 | 7531 | 130163 | 0.0590 | 9 | The #1 story is "Apple Introduces New Mac Studio with M5 Max and M5 Ultra," and  |
| hn-comments | lynx | claude-sonnet-5 | yes | 6 | 1028 | 455 | 152908 | 5394 | 159785 | 0.0577 | 17 | The #1 story is "Apple Introduces New Mac Studio with M5 Max and M5 Ultra," and  |
| hn-comments | jina-reader | claude-sonnet-5 | yes | 5 | 1040 | 392 | 128187 | 19536 | 149155 | 0.1087 | 16 | The #1 story is "Apple Introduces New Mac Studio with M5 Max and M5 Ultra," and  |
| hn-comments | playwright-mcp | claude-sonnet-5 | yes | 9 | 1034 | 795 | 308548 | 28109 | 338486 | 0.1831 | 17 | Found the top comment. The #1 story is "Apple Introduces New Mac Studio with M5  |
| gh-repo-detail | oc | claude-sonnet-5 | yes | 5 | 1104 | 288 | 124074 | 9562 | 135028 | 0.0670 | 10 | gokcehan/lf is published under the MIT license. |
| gh-repo-detail | raw-curl | claude-sonnet-5 | yes | 17 | 1055 | 2053 | 520941 | 9802 | 533851 | 0.1650 | 34 | I'll leave those temp files in place rather than risk a blocked destructive oper |
| gh-repo-detail | lynx | claude-sonnet-5 | yes | 5 | 1027 | 290 | 121810 | 16329 | 139456 | 0.0935 | 13 | The first result, gokcehan/lf, is published under the MIT license. |
| gh-repo-detail | jina-reader | claude-sonnet-5 | yes | 4 | 1039 | 320 | 89168 | 4132 | 94659 | 0.0385 | 11 | The Jina reader tool is currently blocking access to github.com entirely (return |
| gh-repo-detail | playwright-mcp | claude-sonnet-5 | yes | 8 | 1033 | 641 | 245302 | 19037 | 266013 | 0.1326 | 23 | gokcehan/lf is published under the MIT license. |
| ddg-follow | oc | claude-sonnet-5 | yes | 5 | 1120 | 346 | 122961 | 7882 | 132309 | 0.0606 | 13 | The first sentence of the introduction is: "Welcome to The Rust Programming Lang |
| ddg-follow | raw-curl | claude-sonnet-5 | yes | 11 | 1059 | 1267 | 322094 | 7158 | 331578 | 0.1067 | 31 | Leaving that cleanup aside — the answer: "Welcome to *The Rust Programming Langu |
| ddg-follow | lynx | claude-sonnet-5 | yes | 5 | 1043 | 299 | 125898 | 13572 | 140812 | 0.0834 | 12 | The first sentence of the introduction is: "Welcome to The Rust Programming Lang |
| ddg-follow | jina-reader | claude-sonnet-5 | yes | 5 | 1057 | 394 | 126989 | 12318 | 140758 | 0.0796 | 12 | "Welcome to _The Rust Programming Language_, an introductory book about Rust." |
| ddg-follow | playwright-mcp | claude-sonnet-5 | yes | 8 | 1049 | 875 | 221351 | 6845 | 230120 | 0.0814 | 20 | DuckDuckGo blocked the automated browser with a CAPTCHA challenge ("select all s |
| reddit-top-comment | oc | claude-sonnet-5 | yes | 8 | 1111 | 906 | 252822 | 20661 | 275500 | 0.1433 | 19 | The top post is **"I built a handwriting notebook app where Claude writes back a |
| reddit-top-comment | raw-curl | claude-sonnet-5 | yes | 23 | 1068 | 4865 | 759910 | 20135 | 785978 | 0.2822 | 92 | The top post, "I built a handwriting notebook app where Claude writes back and i |
| reddit-top-comment | lynx | claude-sonnet-5 | yes | 7 | 1032 | 836 | 225052 | 19893 | 246813 | 0.1339 | 26 | The top post is "I built a handwriting notebook app where Claude writes back and |
| reddit-top-comment | jina-reader | claude-sonnet-5 | yes | 4 | 1040 | 239 | 89147 | 4188 | 94614 | 0.0379 | 9 | The page is blocked — Jina's request to old.reddit.com/r/ClaudeAI/ returned a 40 |
| reddit-top-comment | playwright-mcp | claude-sonnet-5 | yes | 6 | 1030 | 437 | 153819 | 5099 | 160385 | 0.0565 | 15 | The page returned a 403 — reddit blocked the automated browser ("You've been blo |
| youtube-watch | oc | claude-sonnet-5 | yes | 4 | 1095 | 238 | 89747 | 5569 | 96649 | 0.0436 | 8 | The video is "Do schools kill creativity? | Sir Ken Robinson | TED" by TED, with |
| youtube-watch | raw-curl | claude-sonnet-5 | yes | 5 | 1024 | 410 | 120374 | 4061 | 125869 | 0.0454 | 13 | The video is "Do schools kill creativity? | Sir Ken Robinson | TED" with roughly |
| youtube-watch | lynx | claude-sonnet-5 | yes | 5 | 1020 | 471 | 121259 | 5401 | 128151 | 0.0515 | 11 | The title is "Do schools kill creativity? | Sir Ken Robinson | TED," but lynx co |
| youtube-watch | jina-reader | claude-sonnet-5 | yes | 4 | 1032 | 263 | 89128 | 18598 | 109021 | 0.0958 | 21 | The video is "Do schools kill creativity? | Sir Ken Robinson | TED" and has abou |
| youtube-watch | playwright-mcp | claude-sonnet-5 | yes | 8 | 1026 | 649 | 220614 | 11704 | 233993 | 0.0984 | 16 | The video's title is "Do schools kill creativity? | Sir Ken Robinson | TED" and  |
| aws-s3-recursive | oc | claude-sonnet-5 | yes | 5 | 1137 | 363 | 122530 | 6524 | 130554 | 0.0553 | 13 | The `--recursive` flag makes `aws s3 cp` copy a directory and everything under i |
| aws-s3-recursive | raw-curl | claude-sonnet-5 | yes | 4 | 1062 | 294 | 89192 | 7885 | 98433 | 0.0533 | 10 | The `--recursive` flag makes `aws s3 cp` copy a directory and everything under i |
| aws-s3-recursive | lynx | claude-sonnet-5 | yes | 4 | 1058 | 284 | 89198 | 4961 | 95501 | 0.0415 | 8 | The `--recursive` flag copies a directory and everything under it; the full comm |
| aws-s3-recursive | jina-reader | claude-sonnet-5 | yes | 4 | 1072 | 288 | 89250 | 13194 | 103804 | 0.0745 | 12 | The `--recursive` flag makes `aws s3 cp` copy a directory and everything under i |
| aws-s3-recursive | playwright-mcp | claude-sonnet-5 | yes | 6 | 1062 | 515 | 153403 | 6071 | 161051 | 0.0611 | 16 | The `--recursive` flag makes `aws s3 cp` copy a directory and everything under i |
| gcloud-instance-flags | oc | claude-sonnet-5 | yes | 5 | 1144 | 378 | 122558 | 8233 | 132313 | 0.0623 | 11 | Confirmed: the flags are `--machine-type=MACHINE_TYPE` and `--zone=ZONE`, so the |
| gcloud-instance-flags | raw-curl | claude-sonnet-5 | yes | 12 | 1085 | 1497 | 373861 | 19250 | 395693 | 0.1678 | 26 | That's fine — I'll leave the file; it's not sensitive. Here's the answer: The ma |
| gcloud-instance-flags | lynx | claude-sonnet-5 | yes | 4 | 1065 | 299 | 89204 | 5668 | 96236 | 0.0445 | 10 | The flags are `--machine-type` and `--zone`; the full command is `gcloud compute |
| gcloud-instance-flags | jina-reader | claude-sonnet-5 | yes | 12 | 1095 | 1539 | 446148 | 21639 | 470421 | 0.1922 | 37 | That's a permission-mode restriction, not something I can bypass — I'll leave `g |
| gcloud-instance-flags | playwright-mcp | claude-sonnet-5 | yes | 7 | 1071 | 604 | 180852 | 11976 | 194503 | 0.0911 | 14 | Confirmed `--machine-type` sets the machine type; the `--zone` flag (visible in  |
| azure-hns-flag | oc | claude-sonnet-5 | yes | 13 | 1140 | 1373 | 394683 | 8135 | 405331 | 0.1263 | 25 | `--enable-hierarchical-namespace` (alias `--hns`). |
| azure-hns-flag | raw-curl | claude-sonnet-5 | yes | 4 | 1049 | 298 | 89211 | 3921 | 94479 | 0.0375 | 8 | `--hierarchical-namespace` (short form `--hns`), set to `true`, enables the hier |
| azure-hns-flag | lynx | claude-sonnet-5 | yes | 4 | 1045 | 288 | 89218 | 4652 | 95203 | 0.0403 | 6 | `--enable-hierarchical-namespace` (alias `--hns`) turns on the hierarchical name |
| azure-hns-flag | jina-reader | claude-sonnet-5 | yes | 4 | 1059 | 293 | 89270 | 4773 | 95395 | 0.0409 | 10 | `--enable-hierarchical-namespace` (alias `--hns`) turns on the hierarchical name |
| azure-hns-flag | playwright-mcp | claude-sonnet-5 | yes | 6 | 1049 | 404 | 154074 | 8541 | 164068 | 0.0700 | 11 | `--enable-hierarchical-namespace` (alias `--hns`) enables the hierarchical names |
| aws-docs-follow | oc | claude-sonnet-5 | yes | 7 | 1146 | 481 | 193098 | 8657 | 203382 | 0.0791 | 12 | The recursive-copy flag is `--recursive`, and the page's Example 7 command for c |
| aws-docs-follow | raw-curl | claude-sonnet-5 | yes | 10 | 1079 | 1296 | 320572 | 12898 | 335845 | 0.1297 | 29 | That cleanup was blocked by the sandbox (likely requires manual approval); the f |
| aws-docs-follow | lynx | claude-sonnet-5 | yes | 5 | 1065 | 370 | 126872 | 21601 | 149908 | 0.1165 | 9 | The flag is `--recursive`, and the page's local-directory-to-bucket example is ` |
| aws-docs-follow | jina-reader | claude-sonnet-5 | yes | 5 | 1079 | 475 | 128225 | 20960 | 150739 | 0.1152 | 16 | The `--recursive` flag copies a directory recursively, and the page's example fo |
| aws-docs-follow | playwright-mcp | claude-sonnet-5 | yes | 8 | 1071 | 651 | 221595 | 25331 | 248648 | 0.1532 | 17 | The recursive-copy flag is `--recursive`; the page's example for copying a local |

### Summary
| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 13/13 ✅ | 79 | 6328 | 2169710 | 0.9524 | 13 |
| raw-curl | claude-sonnet-5 | 11/13 | 126 | 13010 | 3053279 | 1.1342 | 27 |
| lynx | claude-sonnet-5 | 13/13 ✅ | 64 ✅ | 5005 ✅ | 1738779 ✅ | 0.8853 ✅ | 12 ✅ |
| jina-reader | claude-sonnet-5 | 13/13 ✅ | 65 | 5631 | 1865679 | 0.9991 | 15 |
| playwright-mcp | claude-sonnet-5 | 13/13 ✅ | 91 | 7548 | 2706043 | 1.3035 | 17 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task.

### Cost per tier: one page versus following a link
| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 1,290,372 | 49 | 879,338 | 30 |
| raw-curl | 1,769,753 (2 failed) | 60 | 2,117,415 | 66 |
| lynx | 902,005 | 36 | 836,774 | 28 |
| jina-reader | 1,235,754 | 42 | 629,925 | 23 |
| playwright-mcp | 1,462,391 | 52 | 1,243,652 | 39 |

Every run in this table counts, failures included.

### What each tool actually cost, failures included
```
oc             ######################                    2,169,710 tokens  79 turns
raw-curl       ########################################  3,887,168 tokens  126 turns  2 failed
lynx           ##################                        1,738,779 tokens  64 turns
jina-reader    ###################                       1,865,679 tokens  65 turns
playwright-mcp ############################              2,706,043 tokens  91 turns
```
