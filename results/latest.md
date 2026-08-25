| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 42 | 906 | 80 | 7 | 1 | 86 |
| simple-page | oc-raw | none | yes | 200 | 42 | 955 | 86 | 16 | 1 | 87 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 104 | 104 | 0 | 1 | 60 |
| simple-page | jina-reader | none | yes | 200 | 92 | 147 | 147 |  | 0 |  |
| simple-page | lynx-dump | none | yes |  | 47 | 108 | 108 |  |  |  |
| simple-page | playwright-mcp | none | yes |  | 135 | 1218 | 1218 |  |  |  |
| simple-page | browser-use | none | yes |  | 35 | 5838 | 859 |  |  |  |
| simple-page | playwright-html | none | yes |  | 140 | 1205 | 98 |  | 1 |  |
| simple-page | selenium-html | none | yes |  | 136 | 1858 | 103 |  | 1 |  |
| simple-page | claude-computer-use | none | yes |  | 1049 | 834 | 111 |  | 19 |  |
| simple-page | openai-computer-use | none | yes |  | 765 | 0 | 111 |  | 19 |  |
| news-front | oc-open | none | yes | 200 | 1178 | 1058 | 260 | 35 | 34 | 91 |
| news-front | oc-raw | none | yes | 200 | 2783 | 1166 | 263 | 81 | 34 | 99 |
| news-front | raw-fetch | none | yes | 200 | 8671 | 225 | 225 | 0 | 34 | 72 |
| news-front | jina-reader | none | yes | 200 | 4146 | 237 | 237 |  | 16 |  |
| news-front | lynx-dump | none | yes |  | 4557 | 527 | 527 |  |  |  |
| news-front | playwright-mcp | none | yes |  | 12341 | 458 | 458 |  |  |  |
| news-front | browser-use | none | yes |  | 3249 | 3355 | 1101 |  |  |  |
| news-front | playwright-html | none | yes |  | 8682 | 1063 | 361 |  | 34 |  |
| news-front | selenium-html | none | yes |  | 8682 | 1439 | 410 |  | 34 |  |
| news-front | claude-computer-use | none | yes |  | 1049 | 1096 | 411 |  | 192 |  |
| news-front | openai-computer-use | none | yes |  | 765 | 0 | 411 |  | 192 |  |
| discussion | oc-open | none | yes | 200 | 461 | 1671 | 644 | 89 | 207 | 104 |
| discussion | oc-raw | none | yes | 200 | 9672 | 1736 | 687 | 215 | 207 | 124 |
| discussion | raw-fetch | none | yes | 200 | 52915 | 587 | 587 | 0 | 207 | 77 |
| discussion | jina-reader | none | yes | 200 | 295 | 1392 | 1392 |  | 1 |  |
| discussion | lynx-dump | none | yes |  | 11255 | 598 | 598 |  |  |  |
| discussion | playwright-mcp | none | yes |  | 207 | 139 | 139 |  |  |  |
| discussion | browser-use | none | yes |  | 39 | 2996 | 408 |  |  |  |
| discussion | playwright-html | none | yes |  | 47489 | 893 | 138 |  | 186 |  |
| discussion | selenium-html | none | yes |  | 47489 | 1286 | 196 |  | 186 |  |
| discussion | claude-computer-use | none | yes |  | 1049 | 796 | 158 |  | 72 |  |
| discussion | openai-computer-use | none | yes |  | 765 | 0 | 158 |  | 72 |  |
| search-results | oc-open | none | yes | 200 | 750 | 1614 | 751 | 34 | 32 | 94 |
| search-results | oc-raw | none | yes | 200 | 2710 | 1594 | 758 | 62 | 32 | 91 |
| search-results | raw-fetch | none | yes | 202 | 3558 | 59 | 59 | 0 | 14 | 79 |
| search-results | jina-reader | none | yes | 200 | 2653 | 3077 | 3077 |  | 10 |  |
| search-results | lynx-dump | none | NO |  |  | 639 |  |  |  |  |
| search-results | playwright-mcp | none | yes |  | 298 | 200 | 200 |  |  |  |
| search-results | browser-use | none | yes |  | 215 | 3008 | 737 |  |  |  |
| search-results | playwright-html | none | yes |  | 3525 | 799 | 113 |  | 14 |  |
| search-results | selenium-html | none | yes |  | 3521 | 1278 | 174 |  | 14 |  |
| search-results | claude-computer-use | none | yes |  | 1049 | 872 | 224 |  | 216 |  |
| search-results | openai-computer-use | none | yes |  | 765 | 0 | 224 |  | 216 |  |
| repo-search | oc-open | none | yes | 200 | 1471 | 1316 | 493 | 74 | 265 | 94 |
| repo-search | oc-raw | none | yes | 200 | 3777 | 1379 | 421 | 171 | 265 | 104 |
| repo-search | raw-fetch | none | yes | 200 | 67724 | 365 | 365 | 0 | 265 | 80 |
| repo-search | jina-reader | none | yes | 200 | 4002 | 1543 | 1543 |  | 16 |  |
| repo-search | lynx-dump | none | yes |  | 3857 | 455 | 455 |  |  |  |
| repo-search | playwright-mcp | none | yes |  | 8525 | 659 | 659 |  |  |  |
| repo-search | browser-use | none | yes |  | 2688 | 3668 | 1281 |  |  |  |
| repo-search | playwright-html | none | yes |  | 67801 | 1231 | 555 |  | 265 |  |
| repo-search | selenium-html | none | yes |  | 67662 | 1295 | 326 |  | 264 |  |
| repo-search | claude-computer-use | none | yes |  | 1049 | 1175 | 578 |  | 142 |  |
| repo-search | openai-computer-use | none | yes |  | 765 | 0 | 578 |  | 142 |  |
| company-page | oc-open | none | yes | 200 | 1490 | 1663 | 805 | 50 | 150 | 97 |
| company-page | oc-raw | none | yes | 200 | 4879 | 1187 | 350 | 84 | 165 | 101 |
| company-page | raw-fetch | none | yes | 200 | 39315 | 360 | 360 | 0 | 154 | 83 |
| company-page | jina-reader | none | NO |  |  | 111 |  |  |  |  |
| company-page | lynx-dump | none | yes |  | 4874 | 650 | 650 |  |  |  |
| company-page | playwright-mcp | none | yes |  | 4082 | 685 | 684 |  |  |  |
| company-page | browser-use | none | yes |  | 281 | 3349 | 1196 |  |  |  |
| company-page | playwright-html | none | yes |  | 38626 | 1232 | 611 |  | 151 |  |
| company-page | selenium-html | none | yes |  | 38204 | 1995 | 925 |  | 150 |  |
| company-page | claude-computer-use | none | yes |  | 1049 | 1394 | 665 |  | 164 |  |
| company-page | openai-computer-use | none | yes |  | 765 | 0 | 665 |  | 164 |  |
| stock-quote | oc-open | none | yes | 200 | 456 | 1480 | 635 | 128 | 1384 | 120 |
| stock-quote | oc-raw | none | yes | 200 | 8352 | 1439 | 501 | 243 | 1417 | 140 |
| stock-quote | raw-fetch | none | yes | 200 | 399881 | 354 | 354 | 0 | 1562 | 87 |
| stock-quote | jina-reader | none | NO |  |  | 169 |  |  |  |  |
| stock-quote | lynx-dump | none | yes |  | 8699 | 839 | 839 |  |  |  |
| stock-quote | playwright-mcp | none | yes |  | 23192 | 2432 | 2432 |  |  |  |
| stock-quote | browser-use | none | yes |  | 5128 | 5014 | 2509 |  |  |  |
| stock-quote | playwright-html | none | yes |  | 416413 | 2356 | 1770 |  | 1627 |  |
| stock-quote | selenium-html | none | yes |  | 433438 | 3350 | 2415 |  | 1693 |  |
| stock-quote | claude-computer-use | none | yes |  | 1049 | 2172 | 1475 |  | 91 |  |
| stock-quote | openai-computer-use | none | yes |  | 765 | 0 | 1475 |  | 91 |  |
| subreddit-front | oc-open | none | yes | 200 | 1495 | 1939 | 913 | 52 | 183 | 96 |
| subreddit-front | oc-raw | none | yes | 200 | 5452 | 1828 | 1030 | 115 | 183 | 106 |
| subreddit-front | raw-fetch | none | yes | 200 | 46724 | 789 | 789 | 0 | 183 | 99 |
| subreddit-front | jina-reader | none | yes | 200 | 283 | 1295 | 1295 |  | 1 |  |
| subreddit-front | lynx-dump | none | yes |  | 6092 | 1111 | 1111 |  |  |  |
| subreddit-front | playwright-mcp | none | yes |  | 184 | 140 | 140 |  |  |  |
| subreddit-front | browser-use | none | yes |  | 39 | 2698 | 518 |  |  |  |
| subreddit-front | playwright-html | none | yes |  | 47489 | 662 | 110 |  | 186 |  |
| subreddit-front | selenium-html | none | yes |  | 47489 | 1043 | 122 |  | 186 |  |
| subreddit-front | claude-computer-use | none | yes |  | 1049 | 718 | 134 |  | 72 |  |
| subreddit-front | openai-computer-use | none | yes |  | 765 | 0 | 134 |  | 72 |  |
| video-page | oc-open | none | yes | 200 | 684 | 1387 | 700 | 27 | 1356 | 102 |
| video-page | oc-raw | none | yes | 200 | 6067 | 1424 | 706 | 50 | 1320 | 105 |
| video-page | raw-fetch | none | yes | 200 | 336560 | 620 | 620 | 0 | 1315 | 93 |
| video-page | jina-reader | none | yes | 200 | 403 | 10698 | 10698 |  | 2 |  |
| video-page | lynx-dump | none | yes |  | 493 | 787 | 787 |  |  |  |
| video-page | playwright-mcp | none | yes |  | 502 | 2316 | 2316 |  |  |  |
| video-page | browser-use | none | yes |  | 484 | 5521 | 3053 |  |  |  |
| video-page | playwright-html | none | yes |  | 379026 | 3490 | 2802 |  | 1481 |  |
| video-page | selenium-html | none | yes |  | 383768 | 3163 | 2085 |  | 1499 |  |
| video-page | claude-computer-use | none | yes |  | 1049 | 2577 | 1981 |  | 234 |  |
| video-page | openai-computer-use | none | yes |  | 765 | 0 | 1981 |  | 234 |  |
| aws-cli-ref | oc-open | none | yes | 200 | 502 | 871 | 69 | 66 | 70 | 105 |
| aws-cli-ref | oc-raw | none | yes | 200 | 6474 | 1002 | 80 | 136 | 70 | 105 |
| aws-cli-ref | raw-fetch | none | yes | 200 | 17990 | 56 | 56 | 0 | 70 | 99 |
| aws-cli-ref | jina-reader | none | yes | 200 | 5976 | 873 | 873 |  | 23 |  |
| aws-cli-ref | lynx-dump | none | yes |  | 6808 | 196 | 196 |  |  |  |
| aws-cli-ref | playwright-mcp | none | yes |  | 12683 | 469 | 469 |  |  |  |
| aws-cli-ref | browser-use | none | yes |  | 1094 | 3151 | 1080 |  |  |  |
| aws-cli-ref | playwright-html | none | yes |  | 17880 | 1044 | 372 |  | 70 |  |
| aws-cli-ref | selenium-html | none | yes |  | 17876 | 1406 | 456 |  | 70 |  |
| aws-cli-ref | claude-computer-use | none | yes |  | 1049 | 1105 | 442 |  | 107 |  |
| aws-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 442 |  | 107 |  |
| gcloud-ref | oc-open | none | yes | 200 | 488 | 1748 | 894 | 128 | 518 | 120 |
| gcloud-ref | oc-raw | none | yes | 200 | 46186 | 2003 | 884 | 376 | 518 | 161 |
| gcloud-ref | raw-fetch | none | yes | 200 | 132497 | 705 | 705 | 0 | 518 | 90 |
| gcloud-ref | jina-reader | none | yes | 200 | 31703 | 2542 | 2542 |  | 124 |  |
| gcloud-ref | lynx-dump | none | yes |  | 55118 | 754 | 754 |  |  |  |
| gcloud-ref | playwright-mcp | none | yes |  | 71557 | 1604 | 1603 |  |  |  |
| gcloud-ref | browser-use | none | yes |  | 3555 | 4875 | 2413 |  |  |  |
| gcloud-ref | playwright-html | none | yes |  | 126390 | 1296 | 598 |  | 494 |  |
| gcloud-ref | selenium-html | none | yes |  | 130263 | 2104 | 1145 |  | 509 |  |
| gcloud-ref | claude-computer-use | none | yes |  | 1049 | 1271 | 705 |  | 99 |  |
| gcloud-ref | openai-computer-use | none | yes |  | 765 | 0 | 705 |  | 99 |  |
| azure-cli-ref | oc-open | none | yes | 200 | 467 | 954 | 126 | 125 | 391 | 121 |
| azure-cli-ref | oc-raw | none | yes | 200 | 32238 | 1172 | 83 | 411 | 391 | 159 |
| azure-cli-ref | raw-fetch | none | yes | 200 | 100142 | 55 | 55 | 0 | 391 | 95 |
| azure-cli-ref | jina-reader | none | yes | 200 | 34698 | 4521 | 4521 |  | 136 |  |
| azure-cli-ref | lynx-dump | none | yes |  | 34971 | 158 | 158 |  |  |  |
| azure-cli-ref | playwright-mcp | none | yes |  | 89387 | 1397 | 1397 |  |  |  |
| azure-cli-ref | browser-use | none | yes |  | 4936 | 4412 | 2313 |  |  |  |
| azure-cli-ref | playwright-html | none | yes |  | 111298 | 1294 | 665 |  | 435 |  |
| azure-cli-ref | selenium-html | none | yes |  | 162030 | 2002 | 1058 |  | 633 |  |
| azure-cli-ref | claude-computer-use | none | yes |  | 1049 | 1429 | 777 |  | 118 |  |
| azure-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 777 |  | 118 |  |
| python-lib-ref | oc-open | none | yes | 200 | 496 | 922 | 64 | 62 | 109 | 105 |
| python-lib-ref | oc-raw | none | yes | 200 | 9019 | 879 | 67 | 146 | 109 | 116 |
| python-lib-ref | raw-fetch | none | yes | 200 | 27940 | 37 | 37 | 0 | 109 | 92 |
| python-lib-ref | jina-reader | none | yes | 200 | 9060 | 1067 | 1067 |  | 36 |  |
| python-lib-ref | lynx-dump | none | yes |  | 10330 | 60 | 60 |  |  |  |
| python-lib-ref | playwright-mcp | none | yes |  | 25167 | 256 | 256 |  |  |  |
| python-lib-ref | browser-use | none | yes |  | 2351 | 2705 | 739 |  |  |  |
| python-lib-ref | playwright-html | none | yes |  | 29427 | 761 | 209 |  | 115 |  |
| python-lib-ref | selenium-html | none | yes |  | 29423 | 1104 | 213 |  | 115 |  |
| python-lib-ref | claude-computer-use | none | yes |  | 1049 | 801 | 267 |  | 164 |  |
| python-lib-ref | openai-computer-use | none | yes |  | 765 | 0 | 267 |  | 164 |  |
| mdn-js-ref | oc-open | none | yes | 200 | 481 | 745 | 54 | 46 | 174 | 99 |
| mdn-js-ref | oc-raw | none | yes | 200 | 7032 | 791 | 60 | 85 | 174 | 101 |
| mdn-js-ref | raw-fetch | none | yes | 200 | 44614 | 33 | 33 | 0 | 174 | 92 |
| mdn-js-ref | jina-reader | none | yes | 200 | 2530 | 2588 | 2588 |  | 10 |  |
| mdn-js-ref | lynx-dump | none | yes |  | 9754 | 264 | 264 |  |  |  |
| mdn-js-ref | playwright-mcp | none | yes |  | 13318 | 343 | 343 |  |  |  |
| mdn-js-ref | browser-use | none | yes |  | 2158 | 2865 | 1002 |  |  |  |
| mdn-js-ref | playwright-html | none | yes |  | 23487 | 869 | 225 |  | 92 |  |
| mdn-js-ref | selenium-html | none | yes |  | 22244 | 1488 | 508 |  | 87 |  |
| mdn-js-ref | claude-computer-use | none | yes |  | 1049 | 973 | 384 |  | 72 |  |
| mdn-js-ref | openai-computer-use | none | yes |  | 765 | 0 | 384 |  | 72 |  |
| node-api-ref | oc-open | none | yes | 200 | 475 | 1088 | 94 | 291 | 1070 | 154 |
| node-api-ref | oc-raw | none | yes | 200 | 112890 | 1861 | 98 | 952 | 1070 | 205 |
| node-api-ref | raw-fetch | none | yes | 200 | 273820 | 72 | 72 | 0 | 1071 | 92 |
| node-api-ref | jina-reader | none | yes | 200 | 52638 | 21223 | 21223 |  | 207 |  |
| node-api-ref | lynx-dump | none | yes |  | 119604 | 192 | 192 |  |  |  |
| node-api-ref | playwright-mcp | none | yes |  | 269757 | 1555 | 1552 |  |  |  |
| node-api-ref | browser-use | none | yes |  | 1393 | 8230 | 5351 |  |  |  |
| node-api-ref | playwright-html | none | yes |  | 286765 | 1228 | 576 |  | 1120 |  |
| node-api-ref | selenium-html | none | yes |  | 286762 | 1491 | 575 |  | 1120 |  |
| node-api-ref | claude-computer-use | none | yes |  | 1049 | 1071 | 466 |  | 63 |  |
| node-api-ref | openai-computer-use | none | yes |  | 765 | 0 | 466 |  | 63 |  |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 15/15 | 10936 | 1291 | 439 | 5944 |
| oc-raw | none | 15/15 | 257573 | 1361 | 405 | 5956 |
| raw-fetch | none | 15/15 | 1552491 | 295 | 295 | 6067 |
| jina-reader | none | 13/15 | 148479 | 3432 | 3939 | 582 |
| lynx-dump | none | 14/15 | 276459 | 489 | 479 | 0 |
| playwright-mcp | none | 15/15 | 531335 | 925 | 924 | 0 |
| browser-use | none | 15/15 | 27645 | 4112 | 1637 | 0 |
| playwright-html | none | 15/15 | 1604438 | 1295 | 614 | 6269 |
| selenium-html | none | 15/15 | 1678987 | 1753 | 714 | 6560 |
| claude-computer-use | none | 15/15 | 15735 | 1219 | 585 | 1824 |
| openai-computer-use | none | 15/15 | 11475 | 0 | 585 | 1824 |
