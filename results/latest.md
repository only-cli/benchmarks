| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 46 | 1220 | 109 | 7 | 1 | 88 |
| simple-page | oc-raw | none | yes | 200 | 42 | 735 | 72 | 10 | 1 | 88 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 105 | 105 | 0 | 1 | 59 |
| simple-page | jina-reader | none | yes | 200 | 81 | 151 | 151 |  | 0 |  |
| simple-page | lynx-dump | none | yes |  | 47 | 117 | 117 |  |  |  |
| simple-page | playwright-mcp | none | yes |  | 135 | 808 | 808 |  |  |  |
| simple-page | browser-use | none | yes |  | 35 | 4393 | 378 |  |  |  |
| simple-page | playwright-html | none | yes |  | 140 | 988 | 85 |  | 1 |  |
| simple-page | selenium-html | none | yes |  | 136 | 8897 | 68 |  | 1 |  |
| simple-page | claude-computer-use | none | yes |  | 1049 | 655 | 110 |  | 19 |  |
| simple-page | openai-computer-use | none | yes |  | 765 | 0 | 110 |  | 19 |  |
| news-front | oc-open | none | yes | 200 | 1121 | 984 | 309 | 27 | 34 | 91 |
| news-front | oc-raw | none | yes | 200 | 2793 | 969 | 275 | 64 | 34 | 97 |
| news-front | raw-fetch | none | yes | 200 | 8669 | 271 | 271 | 0 | 34 | 71 |
| news-front | jina-reader | none | yes | 200 | 4160 | 282 | 282 |  | 16 |  |
| news-front | lynx-dump | none | yes |  | 4567 | 476 | 476 |  |  |  |
| news-front | playwright-mcp | none | yes |  | 12328 | 648 | 648 |  |  |  |
| news-front | browser-use | none | yes |  | 3270 | 2690 | 796 |  |  |  |
| news-front | playwright-html | none | yes |  | 8674 | 973 | 392 |  | 34 |  |
| news-front | selenium-html | none | yes |  | 8674 | 1377 | 537 |  | 34 |  |
| news-front | claude-computer-use | none | yes |  | 1049 | 1026 | 525 |  | 181 |  |
| news-front | openai-computer-use | none | yes |  | 765 | 0 | 525 |  | 181 |  |
| discussion | oc-open | none | yes | 200 | 459 | 1835 | 453 | 55 | 41 | 96 |
| discussion | oc-raw | none | yes | 200 | 4842 | 1437 | 421 | 64 | 41 | 97 |
| discussion | raw-fetch | none | yes | 200 | 10452 | 395 | 394 | 0 | 41 | 67 |
| discussion | jina-reader | none | yes | 200 | 160 | 190 | 190 |  | 1 |  |
| discussion | lynx-dump | none | yes |  | 10452 | 369 | 369 |  |  |  |
| discussion | playwright-mcp | none | yes |  | 207 | 456 | 456 |  |  |  |
| discussion | browser-use | none | yes |  | 39 | 2965 | 502 |  |  |  |
| discussion | playwright-html | none | yes |  | 10 | 1206 | 93 |  | 0 |  |
| discussion | selenium-html | none | yes |  | 47489 | 1528 | 129 |  | 186 |  |
| discussion | claude-computer-use | none | yes |  | 1049 | 1308 | 240 |  | 72 |  |
| discussion | openai-computer-use | none | yes |  | 765 | 0 | 240 |  | 72 |  |
| search-results | oc-open | none | yes | 200 | 771 | 1502 | 726 | 29 | 32 | 95 |
| search-results | oc-raw | none | yes | 200 | 2803 | 1320 | 630 | 42 | 32 | 90 |
| search-results | raw-fetch | none | yes | 202 | 3559 | 46 | 46 | 0 | 14 | 77 |
| search-results | jina-reader | none | yes | 200 | 2653 | 4592 | 4592 |  | 10 |  |
| search-results | lynx-dump | none | NO |  |  | 657 |  |  |  |  |
| search-results | playwright-mcp | none | yes |  | 296 | 168 | 167 |  |  |  |
| search-results | browser-use | none | yes |  | 321 | 2383 | 591 |  |  |  |
| search-results | playwright-html | none | yes |  | 3524 | 651 | 125 |  | 14 |  |
| search-results | selenium-html | none | yes |  | 3521 | 1016 | 151 |  | 14 |  |
| search-results | claude-computer-use | none | yes |  | 1049 | 764 | 216 |  | 223 |  |
| search-results | openai-computer-use | none | yes |  | 765 | 0 | 216 |  | 223 |  |
| repo-search | oc-open | none | yes | 200 | 1468 | 1099 | 392 | 41 | 266 | 93 |
| repo-search | oc-raw | none | yes | 200 | 3761 | 821 | 70 | 111 | 266 | 107 |
| repo-search | raw-fetch | none | yes | 200 | 68134 | 425 | 425 | 0 | 266 | 79 |
| repo-search | jina-reader | none | yes | 200 | 174 | 3644 | 3644 |  | 1 |  |
| repo-search | lynx-dump | none | yes |  | 3839 | 498 | 498 |  |  |  |
| repo-search | playwright-mcp | none | yes |  | 8632 | 528 | 528 |  |  |  |
| repo-search | browser-use | none | yes |  | 2879 | 3123 | 1328 |  |  |  |
| repo-search | playwright-html | none | yes |  | 68199 | 1055 | 496 |  | 266 |  |
| repo-search | selenium-html | none | yes |  | 68201 | 1630 | 777 |  | 266 |  |
| repo-search | claude-computer-use | none | yes |  | 1049 | 700 | 194 |  | 41 |  |
| repo-search | openai-computer-use | none | yes |  | 765 | 0 | 194 |  | 41 |  |
| company-page | oc-open | none | yes | 200 | 1488 | 1169 | 482 | 45 | 150 | 97 |
| company-page | oc-raw | none | yes | 200 | 4872 | 1411 | 359 | 96 | 165 | 100 |
| company-page | raw-fetch | none | yes | 200 | 39276 | 602 | 602 | 0 | 154 | 81 |
| company-page | jina-reader | none | NO |  |  | 129 |  |  |  |  |
| company-page | lynx-dump | none | yes |  | 4868 | 456 | 456 |  |  |  |
| company-page | playwright-mcp | none | yes |  | 4081 | 697 | 697 |  |  |  |
| company-page | browser-use | none | yes |  | 321 | 2822 | 897 |  |  |  |
| company-page | playwright-html | none | yes |  | 38588 | 947 | 411 |  | 151 |  |
| company-page | selenium-html | none | yes |  | 41712 | 1592 | 747 |  | 163 |  |
| company-page | claude-computer-use | none | yes |  | 1049 | 1030 | 518 |  | 164 |  |
| company-page | openai-computer-use | none | yes |  | 765 | 0 | 518 |  | 164 |  |
| stock-quote | oc-open | none | yes | 200 | 447 | 1265 | 512 | 109 | 1295 | 120 |
| stock-quote | oc-raw | none | yes | 200 | 8378 | 1451 | 544 | 215 | 1294 | 140 |
| stock-quote | raw-fetch | none | NO |  |  | 363 |  |  |  |  |
| stock-quote | jina-reader | none | yes | 200 | 63 | 14067 | 14067 |  | 0 |  |
| stock-quote | lynx-dump | none | yes |  | 9108 | 636 | 636 |  |  |  |
| stock-quote | playwright-mcp | none | yes |  | 23796 | 2064 | 2063 |  |  |  |
| stock-quote | browser-use | none | yes |  | 6011 | 14272 | 2143 |  |  |  |
| stock-quote | playwright-html | none | yes |  | 399584 | 2028 | 1488 |  | 1561 |  |
| stock-quote | selenium-html | none | yes |  | 414583 | 2530 | 1616 |  | 1620 |  |
| stock-quote | claude-computer-use | none | yes |  | 1049 | 1830 | 1265 |  | 86 |  |
| stock-quote | openai-computer-use | none | yes |  | 765 | 0 | 1265 |  | 86 |  |
| subreddit-front | oc-open | none | yes | 200 | 493 | 2710 | 1347 | 77 | 83 | 107 |
| subreddit-front | oc-raw | none | yes | 200 | 10255 | 1870 | 773 | 105 | 83 | 106 |
| subreddit-front | raw-fetch | none | yes | 200 | 21155 | 645 | 645 | 0 | 83 | 67 |
| subreddit-front | jina-reader | none | yes | 200 | 92 | 257 | 257 |  | 0 |  |
| subreddit-front | lynx-dump | none | yes |  | 21155 | 710 | 710 |  |  |  |
| subreddit-front | playwright-mcp | none | yes |  | 185 | 91 | 91 |  |  |  |
| subreddit-front | browser-use | none | yes |  | 39 | 3002 | 517 |  |  |  |
| subreddit-front | playwright-html | none | yes |  | 47489 | 1141 | 149 |  | 186 |  |
| subreddit-front | selenium-html | none | yes |  | 47489 | 1821 | 144 |  | 186 |  |
| subreddit-front | claude-computer-use | none | yes |  | 1049 | 1326 | 230 |  | 72 |  |
| subreddit-front | openai-computer-use | none | yes |  | 765 | 0 | 230 |  | 72 |  |
| video-page | oc-open | none | yes | 200 | 688 | 1614 | 842 | 23 | 1380 | 105 |
| video-page | oc-raw | none | yes | 200 | 6067 | 1674 | 938 | 38 | 1350 | 107 |
| video-page | raw-fetch | none | yes | 200 | 363516 | 677 | 677 | 0 | 1420 | 95 |
| video-page | jina-reader | none | yes | 200 | 403 | 9410 | 9410 |  | 2 |  |
| video-page | lynx-dump | none | yes |  | 493 | 1078 | 1078 |  |  |  |
| video-page | playwright-mcp | none | yes |  | 502 | 1792 | 1792 |  |  |  |
| video-page | browser-use | none | yes |  | 479 | 14840 | 2712 |  |  |  |
| video-page | playwright-html | none | yes |  | 398541 | 2508 | 1906 |  | 1557 |  |
| video-page | selenium-html | none | yes |  | 378111 | 3057 | 2125 |  | 1477 |  |
| video-page | claude-computer-use | none | yes |  | 1049 | 2327 | 1793 |  | 225 |  |
| video-page | openai-computer-use | none | yes |  | 765 | 0 | 1793 |  | 225 |  |
| aws-cli-ref | oc-open | none | yes | 200 | 506 | 900 | 157 | 56 | 70 | 103 |
| aws-cli-ref | oc-raw | none | yes | 200 | 6474 | 842 | 77 | 121 | 70 | 104 |
| aws-cli-ref | raw-fetch | none | yes | 200 | 17990 | 45 | 45 | 0 | 70 | 91 |
| aws-cli-ref | jina-reader | none | yes | 200 | 5964 | 2133 | 2133 |  | 23 |  |
| aws-cli-ref | lynx-dump | none | yes |  | 6808 | 204 | 204 |  |  |  |
| aws-cli-ref | playwright-mcp | none | yes |  | 12683 | 457 | 457 |  |  |  |
| aws-cli-ref | browser-use | none | yes |  | 1122 | 2969 | 1057 |  |  |  |
| aws-cli-ref | playwright-html | none | yes |  | 17880 | 943 | 420 |  | 70 |  |
| aws-cli-ref | selenium-html | none | yes |  | 17876 | 1395 | 514 |  | 70 |  |
| aws-cli-ref | claude-computer-use | none | yes |  | 1049 | 1011 | 478 |  | 106 |  |
| aws-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 478 |  | 106 |  |
| gcloud-ref | oc-open | none | yes | 200 | 492 | 1577 | 813 | 115 | 539 | 122 |
| gcloud-ref | oc-raw | none | yes | 200 | 46342 | 1456 | 462 | 317 | 539 | 157 |
| gcloud-ref | raw-fetch | none | yes | 200 | 138030 | 418 | 418 | 0 | 539 | 94 |
| gcloud-ref | jina-reader | none | yes | 200 | 31733 | 3213 | 3213 |  | 124 |  |
| gcloud-ref | lynx-dump | none | yes |  | 55816 | 513 | 513 |  |  |  |
| gcloud-ref | playwright-mcp | none | yes |  | 72162 | 1532 | 1532 |  |  |  |
| gcloud-ref | browser-use | none | yes |  | 3558 | 3941 | 2017 |  |  |  |
| gcloud-ref | playwright-html | none | yes |  | 130853 | 1060 | 544 |  | 511 |  |
| gcloud-ref | selenium-html | none | yes |  | 134726 | 2537 | 1692 |  | 526 |  |
| gcloud-ref | claude-computer-use | none | yes |  | 1049 | 1380 | 860 |  | 99 |  |
| gcloud-ref | openai-computer-use | none | yes |  | 765 | 0 | 860 |  | 99 |  |
| azure-cli-ref | oc-open | none | yes | 200 | 471 | 1033 | 127 | 115 | 391 | 122 |
| azure-cli-ref | oc-raw | none | yes | 200 | 32238 | 1167 | 152 | 349 | 391 | 165 |
| azure-cli-ref | raw-fetch | none | yes | 200 | 100140 | 67 | 67 | 0 | 391 | 90 |
| azure-cli-ref | jina-reader | none | yes | 200 | 35088 | 4095 | 4095 |  | 137 |  |
| azure-cli-ref | lynx-dump | none | yes |  | 34971 | 137 | 137 |  |  |  |
| azure-cli-ref | playwright-mcp | none | yes |  | 89905 | 1187 | 1186 |  |  |  |
| azure-cli-ref | browser-use | none | yes |  | 4935 | 4106 | 2200 |  |  |  |
| azure-cli-ref | playwright-html | none | yes |  | 99430 | 920 | 374 |  | 388 |  |
| azure-cli-ref | selenium-html | none | yes |  | 154590 | 1807 | 924 |  | 604 |  |
| azure-cli-ref | claude-computer-use | none | yes |  | 1049 | 1268 | 749 |  | 118 |  |
| azure-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 749 |  | 118 |  |
| python-lib-ref | oc-open | none | yes | 200 | 500 | 801 | 62 | 57 | 109 | 104 |
| python-lib-ref | oc-raw | none | yes | 200 | 9019 | 893 | 65 | 142 | 109 | 118 |
| python-lib-ref | raw-fetch | none | yes | 200 | 27940 | 35 | 35 | 0 | 109 | 87 |
| python-lib-ref | jina-reader | none | yes | 200 | 9060 | 4982 | 4982 |  | 36 |  |
| python-lib-ref | lynx-dump | none | yes |  | 10330 | 64 | 64 |  |  |  |
| python-lib-ref | playwright-mcp | none | yes |  | 25167 | 273 | 273 |  |  |  |
| python-lib-ref | browser-use | none | yes |  | 2352 | 2514 | 717 |  |  |  |
| python-lib-ref | playwright-html | none | yes |  | 29427 | 739 | 217 |  | 115 |  |
| python-lib-ref | selenium-html | none | yes |  | 29423 | 1085 | 220 |  | 115 |  |
| python-lib-ref | claude-computer-use | none | yes |  | 1049 | 766 | 246 |  | 164 |  |
| python-lib-ref | openai-computer-use | none | yes |  | 765 | 0 | 246 |  | 164 |  |
| mdn-js-ref | oc-open | none | yes | 200 | 484 | 733 | 59 | 42 | 174 | 99 |
| mdn-js-ref | oc-raw | none | yes | 200 | 7032 | 807 | 56 | 83 | 174 | 100 |
| mdn-js-ref | raw-fetch | none | yes | 200 | 44577 | 33 | 33 | 0 | 174 | 88 |
| mdn-js-ref | jina-reader | none | yes | 200 | 2530 | 5453 | 5453 |  | 10 |  |
| mdn-js-ref | lynx-dump | none | yes |  | 9754 | 340 | 340 |  |  |  |
| mdn-js-ref | playwright-mcp | none | yes |  | 13327 | 324 | 324 |  |  |  |
| mdn-js-ref | browser-use | none | yes |  | 1811 | 2652 | 822 |  |  |  |
| mdn-js-ref | playwright-html | none | yes |  | 22214 | 799 | 288 |  | 87 |  |
| mdn-js-ref | selenium-html | none | yes |  | 22211 | 1205 | 363 |  | 87 |  |
| mdn-js-ref | claude-computer-use | none | yes |  | 1049 | 862 | 343 |  | 72 |  |
| mdn-js-ref | openai-computer-use | none | yes |  | 765 | 0 | 343 |  | 72 |  |
| node-api-ref | oc-open | none | yes | 200 | 479 | 997 | 129 | 211 | 1076 | 157 |
| node-api-ref | oc-raw | none | yes | 200 | 114150 | 1522 | 101 | 759 | 1076 | 207 |
| node-api-ref | raw-fetch | none | yes | 200 | 275425 | 79 | 79 | 0 | 1077 | 89 |
| node-api-ref | jina-reader | none | yes | 200 | 53518 | 27797 | 27797 |  | 210 |  |
| node-api-ref | lynx-dump | none | yes |  | 120928 | 190 | 190 |  |  |  |
| node-api-ref | playwright-mcp | none | yes |  | 272502 | 1273 | 1272 |  |  |  |
| node-api-ref | browser-use | none | yes |  | 1387 | 6223 | 4144 |  |  |  |
| node-api-ref | playwright-html | none | yes |  | 288443 | 1086 | 558 |  | 1127 |  |
| node-api-ref | selenium-html | none | yes |  | 288439 | 1527 | 671 |  | 1127 |  |
| node-api-ref | claude-computer-use | none | yes |  | 1049 | 1013 | 507 |  | 62 |  |
| node-api-ref | openai-computer-use | none | yes |  | 765 | 0 | 507 |  | 62 |  |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 15/15 | 9913 | 1296 | 435 | 5641 |
| oc-raw | none | 15/15 | 259068 | 1225 | 333 | 5625 |
| raw-fetch | none | 14/15 | 1119003 | 280 | 274 | 4374 |
| jina-reader | none | 14/15 | 145679 | 5360 | 5733 | 571 |
| lynx-dump | none | 14/15 | 293136 | 430 | 413 | 0 |
| playwright-mcp | none | 15/15 | 535908 | 820 | 820 | 0 |
| browser-use | none | 15/15 | 28559 | 4860 | 1388 | 0 |
| playwright-html | none | 15/15 | 1552996 | 1136 | 503 | 6068 |
| selenium-html | none | 15/15 | 1657181 | 2200 | 712 | 6475 |
| claude-computer-use | none | 15/15 | 15735 | 1151 | 552 | 1703 |
| openai-computer-use | none | 15/15 | 11475 | 0 | 552 | 1703 |
