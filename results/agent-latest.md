| task | tool | model | ok | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| hn-top | oc | claude-sonnet-5 | yes | 4 | 1086 | 172 | 66630 | 11888 | 79776 | 0.0636 | 7 | "Muse Spark 1.3" is the #1 story on Hacker News right now. |
| hn-top | raw-curl | claude-sonnet-5 | yes | 4 | 1013 | 251 | 71352 | 5660 | 78276 | 0.0404 | 8 | The #1 story on Hacker News right now is "Muse Spark 1.3." |
| hn-top | lynx | claude-sonnet-5 | yes | 4 | 1009 | 221 | 71360 | 3986 | 76576 | 0.0334 | 6 | The #1 story on Hacker News right now is "Muse Spark 1.3" (meta.com). |
| hn-top | jina-reader | claude-sonnet-5 | yes | 4 | 1023 | 186 | 71409 | 11397 | 84015 | 0.0627 | 8 | The #1 story on Hacker News right now is "Muse Spark 1.3." |
| hn-top | playwright-mcp | claude-sonnet-5 | yes | 7 | 1015 | 569 | 150215 | 5971 | 157770 | 0.0606 | 15 | The #1 story on Hacker News right now is "Muse Spark 1.3." |
| gh-search | oc | claude-sonnet-5 | yes | 4 | 1097 | 253 | 72079 | 6923 | 80352 | 0.0457 | 11 | The first result is **gokcehan/lf** (a terminal file manager written in Go), wit |
| gh-search | raw-curl | claude-sonnet-5 | yes | 12 | 1040 | 1816 | 295117 | 8926 | 306899 | 0.1139 | 37 | That's fine, I'll leave the leftover file — the answer: The first result is **go |
| gh-search | lynx | claude-sonnet-5 | yes | 4 | 1020 | 183 | 71382 | 10586 | 83171 | 0.0594 | 6 | The first result is **gokcehan/lf** ("Terminal file manager"), with roughly 9.5k |
| gh-search | jina-reader | claude-sonnet-5 | yes | 4 | 1034 | 235 | 71451 | 10615 | 83335 | 0.0601 | 11 | The first result is **gokcehan/lf**, with roughly 9.5k stars. |
| gh-search | playwright-mcp | claude-sonnet-5 | yes | 6 | 1024 | 409 | 124261 | 18383 | 144077 | 0.1034 | 12 | The first result is **gokcehan/lf** with roughly 9.5k stars. |
| stock-price | oc | claude-sonnet-5 | yes | 7 | 1101 | 623 | 153380 | 9264 | 164368 | 0.0750 | 15 | Apple (AAPL) closed at **$324.96** (-0.17, -0.05%) at 4:00:01 PM EDT. |
| stock-price | raw-curl | claude-sonnet-5 | NO | 13 | 1040 | 1793 | 311725 | 6426 | 320984 | 0.1070 | 31 |  |
| stock-price | lynx | claude-sonnet-5 | yes | 6 | 1022 | 548 | 125244 | 6689 | 133503 | 0.0582 | 12 | AAPL closed at $324.96 (−0.17, −0.05%) at 4:00:01 PM EDT. |
| stock-price | jina-reader | claude-sonnet-5 | yes | 5 | 1034 | 392 | 97870 | 5890 | 105186 | 0.0480 | 12 | AAPL's most recent market close price shown on the page was $325.13 (Previous Cl |
| stock-price | playwright-mcp | claude-sonnet-5 | yes | 7 | 1024 | 629 | 153032 | 9226 | 163911 | 0.0748 | 18 | AAPL closed at $324.96 (down $0.17, -0.05%) at 4:00:01 PM EDT. |
| reddit-thread | oc | claude-sonnet-5 | yes | 5 | 1104 | 350 | 98222 | 4891 | 104567 | 0.0438 | 11 | The `oc` tool can't access this page — old.reddit.com redirects it to a login wa |
| reddit-thread | raw-curl | claude-sonnet-5 | yes | 9 | 1039 | 1464 | 210212 | 8956 | 221671 | 0.0935 | 24 | Both old.reddit.com and www.reddit.com are blocking access (login wall / 403). P |
| reddit-thread | lynx | claude-sonnet-5 | yes | 5 | 1027 | 418 | 96852 | 4185 | 102482 | 0.0413 | 11 | The lynx tool is being redirected to a login page by Reddit, so the thread conte |
| reddit-thread | jina-reader | claude-sonnet-5 | yes | 4 | 1039 | 243 | 71470 | 4245 | 76997 | 0.0347 | 7 | The page is blocked (403 Forbidden from Reddit), so I can't retrieve the thread  |
| reddit-thread | playwright-mcp | claude-sonnet-5 | yes | 6 | 1029 | 478 | 124448 | 5316 | 131271 | 0.0519 | 13 | The site blocked the automated browser (403, redirected to a login/blocked page) |
| hn-comments | oc | claude-sonnet-5 | yes | 5 | 1103 | 286 | 100105 | 7412 | 108906 | 0.0536 | 10 | The #1 story is "Muse Spark 1.3," and the top comment argues that Meta has had a |
| hn-comments | raw-curl | claude-sonnet-5 | yes | 6 | 1032 | 530 | 125092 | 6806 | 133460 | 0.0585 | 12 | The #1 story is "Muse Spark 1.3" (developer.meta.com), and the top comment argue |
| hn-comments | lynx | claude-sonnet-5 | yes | 6 | 1028 | 552 | 123498 | 5504 | 130582 | 0.0532 | 15 | The #1 story is "Muse Spark 1.3" (meta.com), and its top comment argues that the |
| hn-comments | jina-reader | claude-sonnet-5 | yes | 6 | 1042 | 555 | 138432 | 18393 | 158422 | 0.1078 | 19 | The #1 story is **"Muse Spark 1.3"**; the top comment argues that avoiding Meta' |
| hn-comments | playwright-mcp | claude-sonnet-5 | yes | 9 | 1034 | 864 | 261223 | 29543 | 292664 | 0.1800 | 19 | The #1 story on Hacker News is "Muse Spark 1.3" (Meta's model), and the top comm |
| gh-repo-detail | oc | claude-sonnet-5 | yes | 5 | 1104 | 349 | 100577 | 9604 | 111634 | 0.0631 | 10 | The first result, gokcehan/lf, is published under the MIT license. |
| gh-repo-detail | raw-curl | claude-sonnet-5 | yes | 10 | 1041 | 1223 | 233964 | 7014 | 243242 | 0.0881 | 21 | I'll leave those temp files in place since removal is blocked by the sandbox. Th |
| gh-repo-detail | lynx | claude-sonnet-5 | yes | 5 | 1027 | 280 | 103566 | 10841 | 115714 | 0.0678 | 10 | The first result, gokcehan/lf, is published under the MIT license. |
| gh-repo-detail | jina-reader | claude-sonnet-5 | yes | 7 | 1045 | 524 | 177953 | 18591 | 198113 | 0.1162 | 35 | The first result, gokcehan/lf, is published under the MIT License. |
| gh-repo-detail | playwright-mcp | claude-sonnet-5 | yes | 9 | 1035 | 607 | 244810 | 19327 | 265779 | 0.1333 | 16 | The first result, gokcehan/lf, is published under the MIT license. |
| ddg-follow | oc | claude-sonnet-5 | yes | 8 | 1126 | 556 | 183609 | 10417 | 195708 | 0.0850 | 15 | The first sentence of the Introduction is: "Welcome to *The Rust Programming Lan |
| ddg-follow | raw-curl | claude-sonnet-5 | yes | 15 | 1067 | 1891 | 382204 | 8487 | 393649 | 0.1303 | 31 | No matter — leaving that file aside, here's the answer: "Welcome to *The Rust Pr |
| ddg-follow | lynx | claude-sonnet-5 | yes | 7 | 1047 | 586 | 166054 | 11098 | 178785 | 0.0845 | 19 | The first sentence of the Introduction is: "Welcome to The Rust Programming Lang |
| ddg-follow | jina-reader | claude-sonnet-5 | yes | 8 | 1063 | 660 | 207330 | 14705 | 223758 | 0.1079 | 19 | "Welcome to _The Rust Programming Language_, an introductory book about Rust." |
| ddg-follow | playwright-mcp | claude-sonnet-5 | yes | 8 | 1049 | 912 | 180103 | 25969 | 208033 | 0.1500 | 18 | Note: the DuckDuckGo HTML search was blocked by a bot-check CAPTCHA, so I naviga |
| reddit-top-comment | oc | claude-sonnet-5 | yes | 5 | 1105 | 298 | 98164 | 4810 | 104377 | 0.0429 | 9 | The page redirects to a login wall and returns no readable content, so I can't a |
| reddit-top-comment | raw-curl | claude-sonnet-5 | yes | 19 | 1060 | 4046 | 523773 | 16184 | 545063 | 0.2110 | 74 | That's fine, I'll leave the temp files as-is rather than fight the sandbox restr |
| reddit-top-comment | lynx | claude-sonnet-5 | yes | 4 | 1026 | 221 | 71410 | 3832 | 76489 | 0.0328 | 6 | The page appears to be blocked/gated (redirecting to a login page) rather than s |
| reddit-top-comment | jina-reader | claude-sonnet-5 | yes | 4 | 1040 | 227 | 71459 | 4200 | 76926 | 0.0343 | 8 | The Jina reader was blocked by Reddit (403 Forbidden network policy block), so I |
| reddit-top-comment | playwright-mcp | claude-sonnet-5 | yes | 6 | 1030 | 463 | 125022 | 5480 | 131995 | 0.0525 | 13 | The site blocked the automated browser (403, "You've been blocked by network sec |
| youtube-watch | oc | claude-sonnet-5 | yes | 4 | 1095 | 246 | 72058 | 5602 | 79001 | 0.0403 | 10 | "Do schools kill creativity? | Sir Ken Robinson | TED" — it has about 24,939,690 |
| youtube-watch | raw-curl | claude-sonnet-5 | yes | 5 | 1024 | 410 | 96787 | 4069 | 102290 | 0.0407 | 12 | The video is "Do schools kill creativity? | Sir Ken Robinson | TED" with roughly |
| youtube-watch | lynx | claude-sonnet-5 | yes | 4 | 1018 | 312 | 71385 | 4730 | 77445 | 0.0373 | 11 | The video is titled "Do schools kill creativity? | Sir Ken Robinson | TED," but  |
| youtube-watch | jina-reader | claude-sonnet-5 | yes | 4 | 1032 | 269 | 71435 | 4293 | 77029 | 0.0351 | 7 | The Jina fetch was blocked by a Google bot-check/CAPTCHA page rather than the ac |
| youtube-watch | playwright-mcp | claude-sonnet-5 | yes | 7 | 1024 | 540 | 151368 | 16628 | 169560 | 0.1032 | 15 | The video is "Do schools kill creativity? | Sir Ken Robinson | TED" with roughly |
| aws-s3-recursive | oc | claude-sonnet-5 | yes | 5 | 1137 | 385 | 98980 | 6546 | 107048 | 0.0509 | 9 | The `--recursive` flag (`aws s3 cp <LocalPath> <S3Uri> --recursive`) copies a di |
| aws-s3-recursive | raw-curl | claude-sonnet-5 | yes | 4 | 1062 | 278 | 71502 | 4483 | 77325 | 0.0360 | 7 | The `--recursive` flag copies a directory and everything under it; the command i |
| aws-s3-recursive | lynx | claude-sonnet-5 | yes | 4 | 1058 | 284 | 71509 | 4605 | 77456 | 0.0366 | 6 | The `--recursive` flag copies a directory and everything under it; the full comm |
| aws-s3-recursive | jina-reader | claude-sonnet-5 | yes | 4 | 1072 | 228 | 71555 | 13155 | 86010 | 0.0702 | 6 | The `--recursive` flag copies a directory and everything under it; the full comm |
| aws-s3-recursive | playwright-mcp | claude-sonnet-5 | yes | 6 | 1062 | 453 | 124598 | 24528 | 150641 | 0.1286 | 12 | The `--recursive` flag copies a directory and everything under it; the full comm |
| gcloud-instance-flags | oc | claude-sonnet-5 | yes | 6 | 1146 | 397 | 125926 | 8379 | 135848 | 0.0638 | 11 | Confirmed: `--machine-type` and `--zone` are the flags. `--machine-type` sets th |
| gcloud-instance-flags | raw-curl | claude-sonnet-5 | yes | 9 | 1079 | 1174 | 201793 | 5314 | 209360 | 0.0744 | 23 | Confirmed both `--machine-type` and `--zone` flags exist on this reference page. |
| gcloud-instance-flags | lynx | claude-sonnet-5 | yes | 5 | 1067 | 386 | 97847 | 5274 | 104574 | 0.0455 | 9 | The flags are `--machine-type` and `--zone`; the full command is: `gcloud comput |
| gcloud-instance-flags | jina-reader | claude-sonnet-5 | yes | 4 | 1079 | 270 | 71567 | 8846 | 81762 | 0.0534 | 7 | `--machine-type` sets the machine type and `--zone` sets the zone; the full comm |
| gcloud-instance-flags | playwright-mcp | claude-sonnet-5 | yes | 6 | 1069 | 578 | 124540 | 6226 | 132413 | 0.0566 | 12 | Confirmed on the page: `--machine-type=MACHINE_TYPE` sets the machine type and ` |
| azure-hns-flag | oc | claude-sonnet-5 | yes | 12 | 1138 | 1059 | 296117 | 10762 | 309076 | 0.1139 | 29 | Confirmed the flag in the syntax block. `--enable-hierarchical-namespace` (alias |
| azure-hns-flag | raw-curl | claude-sonnet-5 | yes | 4 | 1049 | 296 | 71481 | 3927 | 76753 | 0.0339 | 8 | `--hierarchical-namespace` (short form `--hns`), set to `true`, enables the hier |
| azure-hns-flag | lynx | claude-sonnet-5 | yes | 4 | 1045 | 274 | 71489 | 4494 | 77302 | 0.0360 | 6 | `--enable-hierarchical-namespace` (alias `--hns`) turns on the hierarchical name |
| azure-hns-flag | jina-reader | claude-sonnet-5 | yes | 4 | 1059 | 261 | 71541 | 4731 | 77592 | 0.0368 | 10 | The `--enable-hierarchical-namespace` flag (alias `--hns`) turns on hierarchical |
| azure-hns-flag | playwright-mcp | claude-sonnet-5 | yes | 6 | 1049 | 409 | 124559 | 9470 | 135487 | 0.0679 | 13 | `--enable-hierarchical-namespace` (alias `--hns`) turns on the hierarchical name |
| aws-docs-follow | oc | claude-sonnet-5 | yes | 7 | 1146 | 479 | 157649 | 8654 | 167928 | 0.0720 | 16 | The `--recursive` flag copies a directory recursively, and the page's example is |
| aws-docs-follow | raw-curl | claude-sonnet-5 | yes | 11 | 1081 | 1332 | 281660 | 10987 | 295060 | 0.1146 | 23 | That's fine, I'll leave that temp file — it's harmless and not part of the task. |
| aws-docs-follow | lynx | claude-sonnet-5 | yes | 5 | 1065 | 384 | 102906 | 21283 | 125638 | 0.1105 | 11 | The `--recursive` flag copies directories recursively, and the page's example fo |
| aws-docs-follow | jina-reader | claude-sonnet-5 | yes | 5 | 1079 | 470 | 104744 | 21121 | 127414 | 0.1111 | 15 | The flag is `--recursive`, and the page's example for copying a local directory  |
| aws-docs-follow | playwright-mcp | claude-sonnet-5 | yes | 8 | 1071 | 928 | 180453 | 25571 | 208023 | 0.1487 | 21 | Note: the DuckDuckGo search page presented a CAPTCHA the browser tool couldn't s |

### Summary
| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | claude-sonnet-5 | 13/13 ✅ | 77 | 5453 | 1748589 | 0.8135 | 12 |
| raw-curl | claude-sonnet-5 | 12/13 | 121 | 14711 | 2683048 | 1.0352 | 24 |
| lynx | claude-sonnet-5 | 13/13 ✅ | 63 ✅ | 4649 | 1359717 ✅ | 0.6964 ✅ | 10 ✅ |
| jina-reader | claude-sonnet-5 | 13/13 ✅ | 63 ✅ | 4520 ✅ | 1456559 | 0.8783 | 13 |
| playwright-mcp | claude-sonnet-5 | 13/13 ✅ | 91 | 7839 | 2291624 | 1.3114 | 15 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task.

### Cost per tier: one page versus following a link
| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 1,060,036 | 47 | 688,553 | 30 |
| raw-curl | 1,393,558 (1 failed) | 60 | 1,610,474 | 61 |
| lynx | 732,509 | 36 | 627,208 | 27 |
| jina-reader | 671,926 | 33 | 784,633 | 30 |
| playwright-mcp | 1,185,130 | 51 | 1,106,494 | 40 |

Every run in this table counts, failures included.

### What each tool actually cost, failures included
```
oc             #######################                   1,748,589 tokens  77 turns
raw-curl       ########################################  3,004,032 tokens  121 turns  1 failed
lynx           ##################                        1,359,717 tokens  63 turns
jina-reader    ###################                       1,456,559 tokens  63 turns
playwright-mcp ###############################           2,291,624 tokens  91 turns
```
