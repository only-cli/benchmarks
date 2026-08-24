| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 42 | 242 | 72 | 6 | 1 | 89 |
| simple-page | oc-raw | none | yes | 200 | 42 | 252 | 69 | 9 | 1 | 85 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 84 | 83 | 0 | 1 | 60 |
| simple-page | jina-reader | none | yes | 200 | 92 | 230 | 230 |  | 0 |  |
| simple-page | lynx-dump | none | yes |  | 47 | 87 | 87 |  |  |  |
| simple-page | playwright-mcp | none | yes |  | 135 | 287 | 286 |  |  |  |
| simple-page | browser-use | none | yes |  | 35 | 2512 | 406 |  |  |  |
| simple-page | playwright-html | none | yes |  | 140 | 828 | 73 |  | 1 |  |
| simple-page | selenium-html | none | yes |  | 136 | 1288 | 58 |  | 1 |  |
| simple-page | claude-computer-use | none | yes |  | 1049 | 588 | 121 |  | 19 |  |
| simple-page | openai-computer-use | none | yes |  | 765 | 0 | 121 |  | 19 |  |
| news-front | oc-open | none | yes | 200 | 1154 | 440 | 255 | 25 | 34 | 90 |
| news-front | oc-raw | none | yes | 200 | 2772 | 426 | 223 | 41 | 34 | 92 |
| news-front | raw-fetch | none | yes | 200 | 8698 | 226 | 226 | 0 | 34 | 73 |
| news-front | jina-reader | none | yes | 200 | 4135 | 217 | 217 |  | 16 |  |
| news-front | lynx-dump | none | yes |  | 4572 | 474 | 474 |  |  |  |
| news-front | playwright-mcp | none | yes |  | 12362 | 395 | 395 |  |  |  |
| news-front | browser-use | none | yes |  | 3253 | 2362 | 758 |  |  |  |
| news-front | playwright-html | none | yes |  | 8709 | 835 | 333 |  | 34 |  |
| news-front | selenium-html | none | yes |  | 8709 | 1155 | 372 |  | 34 |  |
| news-front | claude-computer-use | none | yes |  | 1049 | 818 | 361 |  | 179 |  |
| news-front | openai-computer-use | none | yes |  | 765 | 0 | 361 |  | 179 |  |
| discussion | oc-open | none | yes | 200 | 461 | 832 | 624 | 58 | 206 | 103 |
| discussion | oc-raw | none | yes | 200 | 9666 | 882 | 622 | 104 | 206 | 112 |
| discussion | raw-fetch | none | yes | 200 | 52856 | 434 | 434 | 0 | 207 | 77 |
| discussion | jina-reader | none | yes | 200 | 295 | 3244 | 3244 |  | 1 |  |
| discussion | lynx-dump | none | yes |  | 11250 | 797 | 797 |  |  |  |
| discussion | playwright-mcp | none | yes |  | 207 | 117 | 117 |  |  |  |
| discussion | browser-use | none | yes |  | 39 | 2152 | 445 |  |  |  |
| discussion | playwright-html | none | yes |  | 47489 | 598 | 96 |  | 186 |  |
| discussion | selenium-html | none | yes |  | 47489 | 880 | 106 |  | 186 |  |
| discussion | claude-computer-use | none | yes |  | 1049 | 601 | 111 |  | 72 |  |
| discussion | openai-computer-use | none | yes |  | 765 | 0 | 111 |  | 72 |  |
| search-results | oc-open | none | yes | 200 | 750 | 985 | 805 | 29 | 32 | 92 |
| search-results | oc-raw | none | yes | 200 | 2667 | 918 | 728 | 29 | 32 | 86 |
| search-results | raw-fetch | none | yes | 200 | 10141 | 556 | 556 | 0 | 40 | 79 |
| search-results | jina-reader | none | yes | 200 | 2653 | 1998 | 1998 |  | 10 |  |
| search-results | lynx-dump | none | NO |  |  | 600 |  |  |  |  |
| search-results | playwright-mcp | none | yes |  | 298 | 155 | 155 |  |  |  |
| search-results | browser-use | none | yes |  | 215 | 2168 | 532 |  |  |  |
| search-results | playwright-html | none | yes |  | 3525 | 579 | 124 |  | 14 |  |
| search-results | selenium-html | none | yes |  | 3521 | 919 | 141 |  | 14 |  |
| search-results | claude-computer-use | none | yes |  | 1049 | 615 | 186 |  | 212 |  |
| search-results | openai-computer-use | none | yes |  | 765 | 0 | 186 |  | 212 |  |
| repo-search | oc-open | none | yes | 200 | 1471 | 566 | 394 | 36 | 265 | 92 |
| repo-search | oc-raw | none | yes | 200 | 3778 | 583 | 372 | 69 | 265 | 102 |
| repo-search | raw-fetch | none | yes | 200 | 67726 | 368 | 368 | 0 | 265 | 80 |
| repo-search | jina-reader | none | yes | 200 | 4002 | 3964 | 3964 |  | 16 |  |
| repo-search | lynx-dump | none | yes |  | 3857 | 476 | 476 |  |  |  |
| repo-search | playwright-mcp | none | yes |  | 8525 | 417 | 417 |  |  |  |
| repo-search | browser-use | none | yes |  | 2651 | 2602 | 1003 |  |  |  |
| repo-search | playwright-html | none | yes |  | 67801 | 967 | 454 |  | 265 |  |
| repo-search | selenium-html | none | yes |  | 67803 | 1350 | 571 |  | 265 |  |
| repo-search | claude-computer-use | none | yes |  | 1049 | 915 | 455 |  | 142 |  |
| repo-search | openai-computer-use | none | yes |  | 765 | 0 | 455 |  | 142 |  |
| company-page | oc-open | none | yes | 200 | 1490 | 563 | 377 | 36 | 150 | 96 |
| company-page | oc-raw | none | yes | 200 | 4755 | 535 | 332 | 55 | 150 | 93 |
| company-page | raw-fetch | none | yes | 200 | 39315 | 341 | 341 | 0 | 154 | 82 |
| company-page | jina-reader | none | NO |  |  | 113 |  |  |  |  |
| company-page | lynx-dump | none | yes |  | 4873 | 378 | 378 |  |  |  |
| company-page | playwright-mcp | none | yes |  | 4081 | 611 | 611 |  |  |  |
| company-page | browser-use | none | yes |  | 404 | 2707 | 909 |  |  |  |
| company-page | playwright-html | none | yes |  | 38626 | 838 | 342 |  | 151 |  |
| company-page | selenium-html | none | yes |  | 41751 | 1464 | 675 |  | 163 |  |
| company-page | claude-computer-use | none | yes |  | 1049 | 998 | 542 |  | 165 |  |
| company-page | openai-computer-use | none | yes |  | 765 | 0 | 542 |  | 165 |  |
| stock-quote | oc-open | none | yes | 200 | 456 | 2197 | 1944 | 96 | 1231 | 128 |
| stock-quote | oc-raw | none | yes | 200 | 8282 | 1013 | 702 | 150 | 1257 | 128 |
| stock-quote | raw-fetch | none | yes | 200 | 375721 | 298 | 298 | 0 | 1468 | 86 |
| stock-quote | jina-reader | none | yes | 200 | 15714 | 837 | 837 |  | 62 |  |
| stock-quote | lynx-dump | none | yes |  | 8631 | 696 | 696 |  |  |  |
| stock-quote | playwright-mcp | none | yes |  | 23483 | 1900 | 1900 |  |  |  |
| stock-quote | browser-use | none | yes |  | 5443 | 4307 | 2492 |  |  |  |
| stock-quote | playwright-html | none | yes |  | 374156 | 2467 | 1918 |  | 1462 |  |
| stock-quote | selenium-html | none | yes |  | 389465 | 3220 | 2393 |  | 1522 |  |
| stock-quote | claude-computer-use | none | yes |  | 1049 | 2072 | 1583 |  | 84 |  |
| stock-quote | openai-computer-use | none | yes |  | 765 | 0 | 1583 |  | 84 |  |
| subreddit-front | oc-open | none | yes | 200 | 1556 | 1065 | 859 | 41 | 162 | 94 |
| subreddit-front | oc-raw | none | yes | 200 | 5479 | 1046 | 803 | 73 | 162 | 102 |
| subreddit-front | raw-fetch | none | yes | 200 | 41526 | 595 | 595 | 0 | 162 | 94 |
| subreddit-front | jina-reader | none | yes | 200 | 283 | 1132 | 1132 |  | 1 |  |
| subreddit-front | lynx-dump | none | yes |  | 6428 | 747 | 747 |  |  |  |
| subreddit-front | playwright-mcp | none | yes |  | 184 | 94 | 94 |  |  |  |
| subreddit-front | browser-use | none | yes |  | 39 | 2272 | 545 |  |  |  |
| subreddit-front | playwright-html | none | yes |  | 47489 | 605 | 104 |  | 186 |  |
| subreddit-front | selenium-html | none | yes |  | 47489 | 865 | 110 |  | 186 |  |
| subreddit-front | claude-computer-use | none | yes |  | 1049 | 581 | 147 |  | 72 |  |
| subreddit-front | openai-computer-use | none | yes |  | 765 | 0 | 147 |  | 72 |  |
| video-page | oc-open | none | yes | 200 | 684 | 1148 | 986 | 21 | 1336 | 104 |
| video-page | oc-raw | none | yes | 200 | 6067 | 1118 | 953 | 28 | 1329 | 102 |
| video-page | raw-fetch | none | yes | 200 | 342730 | 1022 | 1022 | 0 | 1339 | 92 |
| video-page | jina-reader | none | yes | 200 | 6444 | 6978 | 6978 |  | 25 |  |
| video-page | lynx-dump | none | yes |  | 493 | 700 | 700 |  |  |  |
| video-page | playwright-mcp | none | yes |  | 502 | 1899 | 1899 |  |  |  |
| video-page | browser-use | none | yes |  | 485 | 4172 | 2273 |  |  |  |
| video-page | playwright-html | none | yes |  | 377236 | 2381 | 1861 |  | 1474 |  |
| video-page | selenium-html | none | yes |  | 376138 | 2623 | 1780 |  | 1469 |  |
| video-page | claude-computer-use | none | yes |  | 1049 | 2204 | 1670 |  | 225 |  |
| video-page | openai-computer-use | none | yes |  | 765 | 0 | 1670 |  | 225 |  |
| aws-cli-ref | oc-open | none | yes | 200 | 502 | 435 | 220 | 54 | 70 | 102 |
| aws-cli-ref | oc-raw | none | yes | 200 | 6474 | 308 | 78 | 72 | 70 | 99 |
| aws-cli-ref | raw-fetch | none | yes | 200 | 17990 | 38 | 38 | 0 | 70 | 97 |
| aws-cli-ref | jina-reader | none | yes | 200 | 5976 | 12807 | 12807 |  | 23 |  |
| aws-cli-ref | lynx-dump | none | yes |  | 6808 | 175 | 175 |  |  |  |
| aws-cli-ref | playwright-mcp | none | yes |  | 12630 | 5439 | 5439 |  |  |  |
| aws-cli-ref | browser-use | none | yes |  | 1080 | 3010 | 1397 |  |  |  |
| aws-cli-ref | playwright-html | none | yes |  | 17880 | 813 | 332 |  | 70 |  |
| aws-cli-ref | selenium-html | none | yes |  | 17876 | 2305 | 1502 |  | 70 |  |
| aws-cli-ref | claude-computer-use | none | yes |  | 1049 | 934 | 461 |  | 107 |  |
| aws-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 461 |  | 107 |  |
| gcloud-ref | oc-open | none | yes | 200 | 488 | 701 | 439 | 100 | 518 | 119 |
| gcloud-ref | oc-raw | none | yes | 200 | 46186 | 872 | 456 | 255 | 518 | 143 |
| gcloud-ref | raw-fetch | none | yes | 200 | 132545 | 362 | 362 | 0 | 518 | 98 |
| gcloud-ref | jina-reader | none | yes | 200 | 31584 | 10839 | 10839 |  | 123 |  |
| gcloud-ref | lynx-dump | none | yes |  | 55118 | 906 | 906 |  |  |  |
| gcloud-ref | playwright-mcp | none | yes |  | 71679 | 2157 | 2156 |  |  |  |
| gcloud-ref | browser-use | none | yes |  | 3566 | 3453 | 1792 |  |  |  |
| gcloud-ref | playwright-html | none | yes |  | 126391 | 1040 | 555 |  | 494 |  |
| gcloud-ref | selenium-html | none | yes |  | 126400 | 1502 | 713 |  | 494 |  |
| gcloud-ref | claude-computer-use | none | yes |  | 1049 | 1676 | 1210 |  | 100 |  |
| gcloud-ref | openai-computer-use | none | yes |  | 765 | 0 | 1210 |  | 100 |  |
| azure-cli-ref | oc-open | none | yes | 200 | 467 | 418 | 153 | 107 | 391 | 121 |
| azure-cli-ref | oc-raw | none | yes | 200 | 32238 | 608 | 159 | 283 | 391 | 145 |
| azure-cli-ref | raw-fetch | none | yes | 200 | 100142 | 75 | 75 | 0 | 391 | 94 |
| azure-cli-ref | jina-reader | none | yes | 200 | 35099 | 4663 | 4663 |  | 137 |  |
| azure-cli-ref | lynx-dump | none | yes |  | 34971 | 117 | 117 |  |  |  |
| azure-cli-ref | playwright-mcp | none | yes |  | 89375 | 859 | 858 |  |  |  |
| azure-cli-ref | browser-use | none | yes |  | 4935 | 3736 | 1967 |  |  |  |
| azure-cli-ref | playwright-html | none | yes |  | 111298 | 1120 | 591 |  | 435 |  |
| azure-cli-ref | selenium-html | none | yes |  | 161492 | 1819 | 1011 |  | 631 |  |
| azure-cli-ref | claude-computer-use | none | yes |  | 1049 | 1328 | 765 |  | 118 |  |
| azure-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 765 |  | 118 |  |
| python-lib-ref | oc-open | none | yes | 200 | 496 | 261 | 54 | 53 | 109 | 101 |
| python-lib-ref | oc-raw | none | yes | 200 | 9019 | 323 | 63 | 104 | 109 | 101 |
| python-lib-ref | raw-fetch | none | yes | 200 | 27940 | 32 | 32 | 0 | 109 | 92 |
| python-lib-ref | jina-reader | none | yes | 200 | 9060 | 778 | 778 |  | 36 |  |
| python-lib-ref | lynx-dump | none | yes |  | 10330 | 52 | 52 |  |  |  |
| python-lib-ref | playwright-mcp | none | yes |  | 25167 | 241 | 241 |  |  |  |
| python-lib-ref | browser-use | none | yes |  | 2351 | 2473 | 732 |  |  |  |
| python-lib-ref | playwright-html | none | yes |  | 29427 | 675 | 197 |  | 115 |  |
| python-lib-ref | selenium-html | none | yes |  | 29423 | 984 | 176 |  | 115 |  |
| python-lib-ref | claude-computer-use | none | yes |  | 1049 | 766 | 199 |  | 164 |  |
| python-lib-ref | openai-computer-use | none | yes |  | 765 | 0 | 199 |  | 164 |  |
| mdn-js-ref | oc-open | none | yes | 200 | 481 | 255 | 50 | 45 | 174 | 96 |
| mdn-js-ref | oc-raw | none | yes | 200 | 7032 | 269 | 53 | 64 | 174 | 95 |
| mdn-js-ref | raw-fetch | none | yes | 200 | 44501 | 26 | 26 | 0 | 174 | 93 |
| mdn-js-ref | jina-reader | none | yes | 200 | 2530 | 2201 | 2201 |  | 10 |  |
| mdn-js-ref | lynx-dump | none | yes |  | 9754 | 293 | 293 |  |  |  |
| mdn-js-ref | playwright-mcp | none | yes |  | 13318 | 335 | 335 |  |  |  |
| mdn-js-ref | browser-use | none | yes |  | 2157 | 2434 | 819 |  |  |  |
| mdn-js-ref | playwright-html | none | yes |  | 22252 | 777 | 287 |  | 87 |  |
| mdn-js-ref | selenium-html | none | yes |  | 22286 | 1115 | 334 |  | 87 |  |
| mdn-js-ref | claude-computer-use | none | yes |  | 1049 | 823 | 349 |  | 72 |  |
| mdn-js-ref | openai-computer-use | none | yes |  | 765 | 0 | 349 |  | 72 |  |
| node-api-ref | oc-open | none | yes | 200 | 475 | 490 | 113 | 202 | 1070 | 159 |
| node-api-ref | oc-raw | none | yes | 200 | 112890 | 831 | 93 | 564 | 1070 | 200 |
| node-api-ref | raw-fetch | none | yes | 200 | 273820 | 85 | 85 | 0 | 1071 | 96 |
| node-api-ref | jina-reader | none | yes | 200 | 52638 | 26607 | 26607 |  | 207 |  |
| node-api-ref | lynx-dump | none | yes |  | 119604 | 174 | 174 |  |  |  |
| node-api-ref | playwright-mcp | none | yes |  | 269757 | 1078 | 1076 |  |  |  |
| node-api-ref | browser-use | none | yes |  | 1381 | 6322 | 4172 |  |  |  |
| node-api-ref | playwright-html | none | yes |  | 286765 | 1041 | 501 |  | 1120 |  |
| node-api-ref | selenium-html | none | yes |  | 286762 | 1440 | 561 |  | 1120 |  |
| node-api-ref | claude-computer-use | none | yes |  | 1049 | 988 | 410 |  | 63 |  |
| node-api-ref | openai-computer-use | none | yes |  | 765 | 0 | 410 |  | 63 |  |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 15/15 | 10973 | 707 | 490 | 5749 |
| oc-raw | none | 15/15 | 257347 | 666 | 380 | 5768 |
| raw-fetch | none | 15/15 | 1535791 | 303 | 303 | 6002 |
| jina-reader | none | 14/15 | 170505 | 5107 | 5464 | 668 |
| lynx-dump | none | 14/15 | 276736 | 445 | 434 | 0 |
| playwright-mcp | none | 15/15 | 531703 | 1066 | 1065 | 0 |
| browser-use | none | 15/15 | 28034 | 3112 | 1349 | 0 |
| playwright-html | none | 15/15 | 1559184 | 1038 | 518 | 6092 |
| selenium-html | none | 15/15 | 1626740 | 1529 | 700 | 6356 |
| claude-computer-use | none | 15/15 | 15735 | 1060 | 571 | 1792 |
| openai-computer-use | none | 15/15 | 11475 | 0 | 571 | 1792 |
