| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 42 | 238 | 70 | 5 | 1 | 86 |
| simple-page | oc-raw | none | yes | 200 | 42 | 236 | 74 | 10 | 1 | 85 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 89 | 88 | 0 | 1 | 60 |
| simple-page | jina-reader | none | yes | 200 | 92 | 343 | 343 |  | 0 |  |
| simple-page | lynx-dump | none | yes |  | 47 | 94 | 93 |  |  |  |
| simple-page | playwright-mcp | none | yes |  | 135 | 350 | 350 |  |  |  |
| simple-page | browser-use | none | yes |  | 35 | 2244 | 410 |  |  |  |
| simple-page | playwright-html | none | yes |  | 140 | 561 | 87 |  | 1 |  |
| simple-page | selenium-html | none | yes |  | 136 | 860 | 62 |  | 1 |  |
| simple-page | claude-computer-use | none | yes |  | 1049 | 580 | 105 |  | 19 |  |
| simple-page | openai-computer-use | none | yes |  | 765 | 0 | 105 |  | 19 |  |
| news-front | oc-open | none | yes | 200 | 1134 | 410 | 234 | 24 | 34 | 90 |
| news-front | oc-raw | none | yes | 200 | 2716 | 481 | 284 | 45 | 34 | 92 |
| news-front | raw-fetch | none | yes | 200 | 8646 | 216 | 216 | 0 | 34 | 67 |
| news-front | jina-reader | none | yes | 200 | 4092 | 239 | 239 |  | 16 |  |
| news-front | lynx-dump | none | yes |  | 4517 | 444 | 444 |  |  |  |
| news-front | playwright-mcp | none | yes |  | 12306 | 384 | 384 |  |  |  |
| news-front | browser-use | none | yes |  | 3219 | 2401 | 773 |  |  |  |
| news-front | playwright-html | none | yes |  | 8653 | 838 | 303 |  | 34 |  |
| news-front | selenium-html | none | yes |  | 8653 | 1201 | 392 |  | 34 |  |
| news-front | claude-computer-use | none | yes |  | 1049 | 870 | 350 |  | 177 |  |
| news-front | openai-computer-use | none | yes |  | 765 | 0 | 350 |  | 177 |  |
| discussion | oc-open | none | yes | 200 | 461 | 769 | 559 | 58 | 207 | 103 |
| discussion | oc-raw | none | yes | 200 | 9683 | 858 | 602 | 101 | 207 | 112 |
| discussion | raw-fetch | none | yes | 200 | 52866 | 552 | 552 | 0 | 207 | 71 |
| discussion | jina-reader | none | yes | 200 | 295 | 1965 | 1965 |  | 1 |  |
| discussion | lynx-dump | none | yes |  | 11267 | 570 | 570 |  |  |  |
| discussion | playwright-mcp | none | yes |  | 207 | 88 | 88 |  |  |  |
| discussion | browser-use | none | yes |  | 39 | 2208 | 475 |  |  |  |
| discussion | playwright-html | none | yes |  | 47489 | 605 | 94 |  | 186 |  |
| discussion | selenium-html | none | yes |  | 47489 | 923 | 95 |  | 186 |  |
| discussion | claude-computer-use | none | yes |  | 1049 | 621 | 157 |  | 72 |  |
| discussion | openai-computer-use | none | yes |  | 765 | 0 | 157 |  | 72 |  |
| search-results | oc-open | none | yes | 200 | 750 | 884 | 709 | 25 | 32 | 93 |
| search-results | oc-raw | none | yes | 200 | 2667 | 1283 | 1089 | 36 | 32 | 86 |
| search-results | raw-fetch | none | yes | 200 | 8291 | 708 | 708 | 0 | 32 | 73 |
| search-results | jina-reader | none | yes | 200 | 3797 | 266 | 266 |  | 15 |  |
| search-results | lynx-dump | none | NO |  |  | 602 |  |  |  |  |
| search-results | playwright-mcp | none | yes |  | 298 | 162 | 162 |  |  |  |
| search-results | browser-use | none | yes |  | 215 | 2271 | 590 |  |  |  |
| search-results | playwright-html | none | yes |  | 3525 | 611 | 138 |  | 14 |  |
| search-results | selenium-html | none | yes |  | 3521 | 947 | 137 |  | 14 |  |
| search-results | claude-computer-use | none | yes |  | 1049 | 663 | 186 |  | 203 |  |
| search-results | openai-computer-use | none | yes |  | 765 | 0 | 186 |  | 203 |  |
| repo-search | oc-open | none | yes | 200 | 1472 | 581 | 383 | 38 | 265 | 92 |
| repo-search | oc-raw | none | yes | 200 | 3779 | 679 | 451 | 70 | 265 | 101 |
| repo-search | raw-fetch | none | yes | 200 | 67731 | 447 | 447 | 0 | 265 | 74 |
| repo-search | jina-reader | none | yes | 200 | 4003 | 382 | 382 |  | 16 |  |
| repo-search | lynx-dump | none | yes |  | 3858 | 367 | 367 |  |  |  |
| repo-search | playwright-mcp | none | yes |  | 8526 | 455 | 455 |  |  |  |
| repo-search | browser-use | none | yes |  | 2691 | 2419 | 814 |  |  |  |
| repo-search | playwright-html | none | yes |  | 67804 | 896 | 423 |  | 265 |  |
| repo-search | selenium-html | none | yes |  | 67805 | 1357 | 542 |  | 265 |  |
| repo-search | claude-computer-use | none | yes |  | 1049 | 962 | 487 |  | 142 |  |
| repo-search | openai-computer-use | none | yes |  | 765 | 0 | 487 |  | 142 |  |
| company-page | oc-open | none | yes | 200 | 1490 | 544 | 359 | 38 | 150 | 96 |
| company-page | oc-raw | none | yes | 200 | 4754 | 574 | 372 | 53 | 150 | 93 |
| company-page | raw-fetch | none | yes | 200 | 42975 | 354 | 354 | 0 | 168 | 77 |
| company-page | jina-reader | none | yes | 200 | 5002 | 273 | 273 |  | 20 |  |
| company-page | lynx-dump | none | yes |  | 4873 | 501 | 501 |  |  |  |
| company-page | playwright-mcp | none | yes |  | 4324 | 651 | 651 |  |  |  |
| company-page | browser-use | none | yes |  | 390 | 2607 | 967 |  |  |  |
| company-page | playwright-html | none | yes |  | 42297 | 922 | 361 |  | 166 |  |
| company-page | selenium-html | none | yes |  | 38203 | 1501 | 659 |  | 150 |  |
| company-page | claude-computer-use | none | yes |  | 1049 | 1027 | 549 |  | 165 |  |
| company-page | openai-computer-use | none | yes |  | 765 | 0 | 549 |  | 165 |  |
| stock-quote | oc-open | none | yes | 200 | 456 | 865 | 612 | 98 | 1236 | 127 |
| stock-quote | oc-raw | none | yes | 200 | 8298 | 805 | 505 | 142 | 1260 | 129 |
| stock-quote | raw-fetch | none | yes | 200 | 371597 | 385 | 385 | 0 | 1452 | 80 |
| stock-quote | jina-reader | none | NO |  |  | 115 |  |  |  |  |
| stock-quote | lynx-dump | none | yes |  | 8644 | 662 | 662 |  |  |  |
| stock-quote | playwright-mcp | none | yes |  | 23561 | 2484 | 2483 |  |  |  |
| stock-quote | browser-use | none | yes |  | 5404 | 4204 | 2403 |  |  |  |
| stock-quote | playwright-html | none | yes |  | 386443 | 2034 | 1450 |  | 1510 |  |
| stock-quote | selenium-html | none | yes |  | 400816 | 2947 | 2145 |  | 1566 |  |
| stock-quote | claude-computer-use | none | yes |  | 1049 | 2034 | 1507 |  | 90 |  |
| stock-quote | openai-computer-use | none | yes |  | 765 | 0 | 1507 |  | 90 |  |
| subreddit-front | oc-open | none | yes | 200 | 1541 | 970 | 773 | 37 | 162 | 94 |
| subreddit-front | oc-raw | none | yes | 200 | 5459 | 1064 | 808 | 79 | 162 | 101 |
| subreddit-front | raw-fetch | none | yes | 200 | 41403 | 617 | 617 | 0 | 162 | 89 |
| subreddit-front | jina-reader | none | yes | 200 | 283 | 1304 | 1304 |  | 1 |  |
| subreddit-front | lynx-dump | none | yes |  | 6409 | 652 | 652 |  |  |  |
| subreddit-front | playwright-mcp | none | yes |  | 184 | 95 | 95 |  |  |  |
| subreddit-front | browser-use | none | yes |  | 39 | 2084 | 478 |  |  |  |
| subreddit-front | playwright-html | none | yes |  | 47489 | 639 | 138 |  | 186 |  |
| subreddit-front | selenium-html | none | yes |  | 47489 | 925 | 106 |  | 186 |  |
| subreddit-front | claude-computer-use | none | yes |  | 1049 | 652 | 157 |  | 72 |  |
| subreddit-front | openai-computer-use | none | yes |  | 765 | 0 | 157 |  | 72 |  |
| video-page | oc-open | none | yes | 200 | 684 | 960 | 776 | 23 | 1320 | 102 |
| video-page | oc-raw | none | yes | 200 | 6067 | 982 | 803 | 31 | 1324 | 102 |
| video-page | raw-fetch | none | yes | 200 | 338815 | 962 | 962 | 0 | 1324 | 94 |
| video-page | jina-reader | none | yes | 200 | 587 | 9614 | 9614 |  | 2 |  |
| video-page | lynx-dump | none | yes |  | 493 | 812 | 812 |  |  |  |
| video-page | playwright-mcp | none | yes |  | 502 | 1781 | 1781 |  |  |  |
| video-page | browser-use | none | yes |  | 482 | 4500 | 2583 |  |  |  |
| video-page | playwright-html | none | yes |  | 374759 | 2281 | 1721 |  | 1464 |  |
| video-page | selenium-html | none | yes |  | 375559 | 2521 | 1691 |  | 1467 |  |
| video-page | claude-computer-use | none | yes |  | 1049 | 2188 | 1693 |  | 225 |  |
| video-page | openai-computer-use | none | yes |  | 765 | 0 | 1693 |  | 225 |  |
| aws-cli-ref | oc-open | none | yes | 200 | 502 | 371 | 163 | 52 | 70 | 102 |
| aws-cli-ref | oc-raw | none | yes | 200 | 6474 | 332 | 105 | 71 | 70 | 98 |
| aws-cli-ref | raw-fetch | none | yes | 200 | 17990 | 31 | 31 | 0 | 70 | 89 |
| aws-cli-ref | jina-reader | none | yes | 200 | 5976 | 871 | 871 |  | 23 |  |
| aws-cli-ref | lynx-dump | none | yes |  | 6808 | 182 | 182 |  |  |  |
| aws-cli-ref | playwright-mcp | none | yes |  | 12683 | 427 | 426 |  |  |  |
| aws-cli-ref | browser-use | none | yes |  | 1094 | 2396 | 723 |  |  |  |
| aws-cli-ref | playwright-html | none | yes |  | 17880 | 902 | 382 |  | 70 |  |
| aws-cli-ref | selenium-html | none | yes |  | 17876 | 1265 | 477 |  | 70 |  |
| aws-cli-ref | claude-computer-use | none | yes |  | 1049 | 838 | 368 |  | 107 |  |
| aws-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 368 |  | 107 |  |
| gcloud-ref | oc-open | none | yes | 200 | 488 | 977 | 708 | 103 | 518 | 119 |
| gcloud-ref | oc-raw | none | yes | 200 | 46186 | 1248 | 852 | 231 | 518 | 144 |
| gcloud-ref | raw-fetch | none | yes | 200 | 132553 | 533 | 532 | 0 | 518 | 90 |
| gcloud-ref | jina-reader | none | yes | 200 | 31703 | 3697 | 3697 |  | 124 |  |
| gcloud-ref | lynx-dump | none | yes |  | 55118 | 580 | 580 |  |  |  |
| gcloud-ref | playwright-mcp | none | yes |  | 55293 | 762 | 762 |  |  |  |
| gcloud-ref | browser-use | none | NO |  |  | 180115 |  |  |  |  |
| gcloud-ref | playwright-html | none | yes |  | 126390 | 1305 | 796 |  | 494 |  |
| gcloud-ref | selenium-html | none | yes |  | 126503 | 2594 | 1801 |  | 494 |  |
| gcloud-ref | claude-computer-use | none | yes |  | 1049 | 1254 | 782 |  | 100 |  |
| gcloud-ref | openai-computer-use | none | yes |  | 765 | 0 | 782 |  | 100 |  |
| azure-cli-ref | oc-open | none | yes | 200 | 467 | 460 | 199 | 102 | 391 | 121 |
| azure-cli-ref | oc-raw | none | yes | 200 | 32238 | 658 | 244 | 255 | 391 | 146 |
| azure-cli-ref | raw-fetch | none | yes | 200 | 100142 | 205 | 205 | 0 | 391 | 94 |
| azure-cli-ref | jina-reader | none | yes | 200 | 35099 | 5644 | 5644 |  | 137 |  |
| azure-cli-ref | lynx-dump | none | yes |  | 34971 | 218 | 218 |  |  |  |
| azure-cli-ref | playwright-mcp | none | yes |  | 89734 | 1092 | 1092 |  |  |  |
| azure-cli-ref | browser-use | none | yes |  | 4936 | 3894 | 2203 |  |  |  |
| azure-cli-ref | playwright-html | none | yes |  | 111298 | 1044 | 566 |  | 435 |  |
| azure-cli-ref | selenium-html | none | yes |  | 137235 | 1484 | 666 |  | 536 |  |
| azure-cli-ref | claude-computer-use | none | yes |  | 1049 | 1305 | 829 |  | 133 |  |
| azure-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 829 |  | 133 |  |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 12/12 | 9487 | 669 | 462 | 4386 |
| oc-raw | none | 12/12 | 128363 | 767 | 516 | 4414 |
| raw-fetch | none | 12/12 | 1183149 | 425 | 425 | 4623 |
| jina-reader | none | 11/12 | 90929 | 2059 | 2236 | 355 |
| lynx-dump | none | 11/12 | 137005 | 474 | 462 | 0 |
| playwright-mcp | none | 12/12 | 207753 | 728 | 727 | 0 |
| browser-use | none | 11/12 | 18544 | 17612 | 1129 | 0 |
| playwright-html | none | 12/12 | 1234167 | 1053 | 538 | 4822 |
| selenium-html | none | 12/12 | 1271285 | 1544 | 731 | 4967 |
| claude-computer-use | none | 12/12 | 12588 | 1083 | 598 | 1505 |
| openai-computer-use | none | 12/12 | 9180 | 0 | 598 | 1505 |
