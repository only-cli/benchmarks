| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 46 | 764 | 74 | 5 | 1 | 88 |
| simple-page | oc-raw | none | yes | 200 | 42 | 709 | 58 | 11 | 1 | 86 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 102 | 102 | 0 | 1 | 60 |
| simple-page | jina-reader | none | yes | 200 | 92 | 147 | 147 |  | 0 |  |
| simple-page | lynx-dump | none | yes |  | 47 | 99 | 99 |  |  |  |
| simple-page | playwright-mcp | none | yes |  | 135 | 331 | 331 |  |  |  |
| simple-page | browser-use | none | yes |  | 35 | 4182 | 466 |  |  |  |
| simple-page | playwright-html | none | yes |  | 140 | 616 | 87 |  | 1 |  |
| simple-page | selenium-html | none | yes |  | 136 | 6884 | 69 |  | 1 |  |
| simple-page | claude-computer-use | none | yes |  | 1049 | 603 | 115 |  | 19 |  |
| simple-page | openai-computer-use | none | yes |  | 765 | 0 | 115 |  | 19 |  |
| news-front | oc-open | none | yes | 200 | 1065 | 933 | 275 | 27 | 34 | 93 |
| news-front | oc-raw | none | yes | 200 | 2758 | 1389 | 722 | 57 | 34 | 97 |
| news-front | raw-fetch | none | yes | 200 | 8622 | 258 | 258 | 0 | 34 | 65 |
| news-front | jina-reader | none | yes | 200 | 4115 | 321 | 321 |  | 16 |  |
| news-front | lynx-dump | none | yes |  | 4532 | 572 | 572 |  |  |  |
| news-front | playwright-mcp | none | yes |  | 12290 | 489 | 489 |  |  |  |
| news-front | browser-use | none | yes |  | 3173 | 2569 | 745 |  |  |  |
| news-front | playwright-html | none | yes |  | 8634 | 894 | 378 |  | 34 |  |
| news-front | selenium-html | none | yes |  | 8634 | 1263 | 429 |  | 34 |  |
| news-front | claude-computer-use | none | yes |  | 1049 | 921 | 435 |  | 171 |  |
| news-front | openai-computer-use | none | yes |  | 765 | 0 | 435 |  | 171 |  |
| discussion | oc-open | none | NO |  |  | 794 |  |  |  |  |
| discussion | oc-raw | none | NO |  |  | 798 |  |  |  |  |
| discussion | raw-fetch | none | yes | 200 | 88184 | 105 | 105 | 0 | 344 | 72 |
| discussion | jina-reader | none | yes | 200 | 295 | 1207 | 1207 |  | 1 |  |
| discussion | lynx-dump | none | yes |  | 50 | 162 | 162 |  |  |  |
| discussion | playwright-mcp | none | yes |  | 223 | 126 | 126 |  |  |  |
| discussion | browser-use | none | yes |  | 39 | 2408 | 531 |  |  |  |
| discussion | playwright-html | none | yes |  | 47489 | 663 | 136 |  | 186 |  |
| discussion | selenium-html | none | yes |  | 47489 | 953 | 149 |  | 186 |  |
| discussion | claude-computer-use | none | yes |  | 1049 | 658 | 163 |  | 72 |  |
| discussion | openai-computer-use | none | yes |  | 765 | 0 | 163 |  | 72 |  |
| search-results | oc-open | none | yes | 200 | 758 | 1385 | 682 | 53 | 32 | 93 |
| search-results | oc-raw | none | yes | 200 | 2711 | 1341 | 634 | 42 | 32 | 91 |
| search-results | raw-fetch | none | yes | 202 | 3559 | 49 | 49 | 0 | 14 | 73 |
| search-results | jina-reader | none | yes | 200 | 2854 | 5099 | 5099 |  | 11 |  |
| search-results | lynx-dump | none | NO |  |  | 654 |  |  |  |  |
| search-results | playwright-mcp | none | yes |  | 296 | 157 | 157 |  |  |  |
| search-results | browser-use | none | yes |  | 215 | 2326 | 575 |  |  |  |
| search-results | playwright-html | none | yes |  | 3524 | 604 | 79 |  | 14 |  |
| search-results | selenium-html | none | yes |  | 3520 | 982 | 159 |  | 14 |  |
| search-results | claude-computer-use | none | yes |  | 1049 | 667 | 175 |  | 208 |  |
| search-results | openai-computer-use | none | yes |  | 765 | 0 | 175 |  | 208 |  |
| repo-search | oc-open | none | yes | 200 | 1468 | 1146 | 494 | 47 | 265 | 93 |
| repo-search | oc-raw | none | yes | 200 | 3758 | 1160 | 414 | 98 | 265 | 107 |
| repo-search | raw-fetch | none | yes | 200 | 67917 | 404 | 404 | 0 | 265 | 75 |
| repo-search | jina-reader | none | yes | 200 | 3983 | 5167 | 5167 |  | 16 |  |
| repo-search | lynx-dump | none | yes |  | 3837 | 502 | 502 |  |  |  |
| repo-search | playwright-mcp | none | yes |  | 8612 | 519 | 519 |  |  |  |
| repo-search | browser-use | none | yes |  | 2692 | 2763 | 1069 |  |  |  |
| repo-search | playwright-html | none | yes |  | 67986 | 1294 | 791 |  | 266 |  |
| repo-search | selenium-html | none | yes |  | 67986 | 1531 | 720 |  | 266 |  |
| repo-search | claude-computer-use | none | yes |  | 1049 | 1085 | 530 |  | 142 |  |
| repo-search | openai-computer-use | none | yes |  | 765 | 0 | 530 |  | 142 |  |
| company-page | oc-open | none | yes | 200 | 1562 | 1077 | 396 | 38 | 165 | 98 |
| company-page | oc-raw | none | yes | 200 | 4749 | 1030 | 363 | 75 | 150 | 102 |
| company-page | raw-fetch | none | yes | 200 | 39277 | 327 | 327 | 0 | 154 | 76 |
| company-page | jina-reader | none | NO |  |  | 145 |  |  |  |  |
| company-page | lynx-dump | none | yes |  | 5305 | 377 | 377 |  |  |  |
| company-page | playwright-mcp | none | yes |  | 4081 | 591 | 591 |  |  |  |
| company-page | browser-use | none | yes |  | 295 | 2718 | 920 |  |  |  |
| company-page | playwright-html | none | yes |  | 38587 | 842 | 341 |  | 151 |  |
| company-page | selenium-html | none | yes |  | 41709 | 1477 | 671 |  | 163 |  |
| company-page | claude-computer-use | none | yes |  | 1049 | 1070 | 563 |  | 165 |  |
| company-page | openai-computer-use | none | yes |  | 765 | 0 | 563 |  | 165 |  |
| stock-quote | oc-open | none | yes | 200 | 452 | 1358 | 610 | 107 | 1302 | 118 |
| stock-quote | oc-raw | none | yes | 200 | 8306 | 1315 | 428 | 214 | 1301 | 140 |
| stock-quote | raw-fetch | none | NO |  |  | 501 |  |  |  |  |
| stock-quote | jina-reader | none | yes | 200 | 8963 | 6125 | 6125 |  | 35 |  |
| stock-quote | lynx-dump | none | yes |  | 9039 | 580 | 580 |  |  |  |
| stock-quote | playwright-mcp | none | yes |  | 24333 | 2080 | 2080 |  |  |  |
| stock-quote | browser-use | none | yes |  | 5639 | 4189 | 2101 |  |  |  |
| stock-quote | playwright-html | none | yes |  | 403789 | 1922 | 1365 |  | 1578 |  |
| stock-quote | selenium-html | none | yes |  | 273575 | 5400 | 4547 |  | 1069 |  |
| stock-quote | claude-computer-use | none | yes |  | 1049 | 1886 | 1321 |  | 90 |  |
| stock-quote | openai-computer-use | none | yes |  | 765 | 0 | 1321 |  | 90 |  |
| subreddit-front | oc-open | none | NO |  |  | 797 |  |  |  |  |
| subreddit-front | oc-raw | none | NO |  |  | 795 |  |  |  |  |
| subreddit-front | raw-fetch | none | yes | 200 | 88011 | 108 | 108 | 0 | 344 | 77 |
| subreddit-front | jina-reader | none | yes | 200 | 283 | 1298 | 1298 |  | 1 |  |
| subreddit-front | lynx-dump | none | yes |  | 38 | 143 | 143 |  |  |  |
| subreddit-front | playwright-mcp | none | yes |  | 198 | 144 | 144 |  |  |  |
| subreddit-front | browser-use | none | yes |  | 39 | 2332 | 507 |  |  |  |
| subreddit-front | playwright-html | none | yes |  | 47489 | 639 | 128 |  | 186 |  |
| subreddit-front | selenium-html | none | yes |  | 47489 | 984 | 125 |  | 186 |  |
| subreddit-front | claude-computer-use | none | yes |  | 1049 | 674 | 168 |  | 72 |  |
| subreddit-front | openai-computer-use | none | yes |  | 765 | 0 | 168 |  | 72 |  |
| video-page | oc-open | none | yes | 200 | 688 | 1612 | 951 | 24 | 1358 | 102 |
| video-page | oc-raw | none | yes | 200 | 6067 | 1843 | 1177 | 38 | 1356 | 106 |
| video-page | raw-fetch | none | yes | 200 | 345487 | 841 | 841 | 0 | 1350 | 88 |
| video-page | jina-reader | none | yes | 200 | 324 | 2751 | 2751 |  | 1 |  |
| video-page | lynx-dump | none | yes |  | 493 | 816 | 816 |  |  |  |
| video-page | playwright-mcp | none | yes |  | 502 | 1932 | 1932 |  |  |  |
| video-page | browser-use | none | yes |  | 484 | 4767 | 2963 |  |  |  |
| video-page | playwright-html | none | yes |  | 378496 | 2285 | 1761 |  | 1479 |  |
| video-page | selenium-html | none | yes |  | 376838 | 3065 | 2244 |  | 1472 |  |
| video-page | claude-computer-use | none | yes |  | 1049 | 2444 | 1926 |  | 225 |  |
| video-page | openai-computer-use | none | yes |  | 765 | 0 | 1926 |  | 225 |  |
| aws-cli-ref | oc-open | none | yes | 200 | 506 | 812 | 74 | 56 | 70 | 104 |
| aws-cli-ref | oc-raw | none | yes | 200 | 6474 | 906 | 104 | 112 | 70 | 105 |
| aws-cli-ref | raw-fetch | none | yes | 200 | 17990 | 73 | 73 | 0 | 70 | 93 |
| aws-cli-ref | jina-reader | none | yes | 200 | 5976 | 659 | 659 |  | 23 |  |
| aws-cli-ref | lynx-dump | none | yes |  | 6808 | 212 | 212 |  |  |  |
| aws-cli-ref | playwright-mcp | none | yes |  | 12683 | 569 | 569 |  |  |  |
| aws-cli-ref | browser-use | none | yes |  | 1095 | 3167 | 1322 |  |  |  |
| aws-cli-ref | playwright-html | none | yes |  | 17880 | 973 | 441 |  | 70 |  |
| aws-cli-ref | selenium-html | none | yes |  | 17876 | 1504 | 643 |  | 70 |  |
| aws-cli-ref | claude-computer-use | none | yes |  | 1049 | 766 | 237 |  | 106 |  |
| aws-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 237 |  | 106 |  |
| gcloud-ref | oc-open | none | yes | 200 | 492 | 1124 | 391 | 107 | 521 | 125 |
| gcloud-ref | oc-raw | none | yes | 200 | 46382 | 1368 | 426 | 291 | 521 | 159 |
| gcloud-ref | raw-fetch | none | yes | 200 | 133363 | 657 | 657 | 0 | 521 | 80 |
| gcloud-ref | jina-reader | none | yes | 200 | 31646 | 8385 | 8385 |  | 124 |  |
| gcloud-ref | lynx-dump | none | yes |  | 55303 | 847 | 847 |  |  |  |
| gcloud-ref | playwright-mcp | none | yes |  | 72247 | 2139 | 2138 |  |  |  |
| gcloud-ref | browser-use | none | yes |  | 3566 | 5227 | 3381 |  |  |  |
| gcloud-ref | playwright-html | none | yes |  | 127112 | 1606 | 1102 |  | 497 |  |
| gcloud-ref | selenium-html | none | yes |  | 127224 | 1740 | 888 |  | 497 |  |
| gcloud-ref | claude-computer-use | none | yes |  | 1049 | 1383 | 861 |  | 101 |  |
| gcloud-ref | openai-computer-use | none | yes |  | 765 | 0 | 861 |  | 101 |  |
| azure-cli-ref | oc-open | none | yes | 200 | 471 | 986 | 254 | 109 | 391 | 122 |
| azure-cli-ref | oc-raw | none | yes | 200 | 32238 | 1079 | 81 | 336 | 391 | 157 |
| azure-cli-ref | raw-fetch | none | yes | 200 | 100140 | 184 | 184 | 0 | 391 | 88 |
| azure-cli-ref | jina-reader | none | yes | 200 | 35088 | 3686 | 3686 |  | 137 |  |
| azure-cli-ref | lynx-dump | none | yes |  | 34971 | 147 | 147 |  |  |  |
| azure-cli-ref | playwright-mcp | none | yes |  | 84716 | 1186 | 1185 |  |  |  |
| azure-cli-ref | browser-use | none | yes |  | 4935 | 4013 | 2072 |  |  |  |
| azure-cli-ref | playwright-html | none | yes |  | 111296 | 1258 | 720 |  | 435 |  |
| azure-cli-ref | selenium-html | none | yes |  | 137312 | 1777 | 938 |  | 536 |  |
| azure-cli-ref | claude-computer-use | none | yes |  | 1049 | 1250 | 748 |  | 133 |  |
| azure-cli-ref | openai-computer-use | none | yes |  | 765 | 0 | 748 |  | 133 |  |
| python-lib-ref | oc-open | none | yes | 200 | 500 | 754 | 81 | 53 | 109 | 104 |
| python-lib-ref | oc-raw | none | yes | 200 | 9019 | 781 | 62 | 128 | 109 | 115 |
| python-lib-ref | raw-fetch | none | yes | 200 | 27940 | 29 | 29 | 0 | 109 | 87 |
| python-lib-ref | jina-reader | none | yes | 200 | 9049 | 2419 | 2419 |  | 35 |  |
| python-lib-ref | lynx-dump | none | yes |  | 10330 | 67 | 67 |  |  |  |
| python-lib-ref | playwright-mcp | none | yes |  | 25167 | 278 | 277 |  |  |  |
| python-lib-ref | browser-use | none | yes |  | 2351 | 2567 | 781 |  |  |  |
| python-lib-ref | playwright-html | none | yes |  | 29427 | 676 | 156 |  | 115 |  |
| python-lib-ref | selenium-html | none | yes |  | 29423 | 1047 | 194 |  | 115 |  |
| python-lib-ref | claude-computer-use | none | yes |  | 1049 | 711 | 215 |  | 164 |  |
| python-lib-ref | openai-computer-use | none | yes |  | 765 | 0 | 215 |  | 164 |  |
| mdn-js-ref | oc-open | none | yes | 200 | 484 | 711 | 55 | 43 | 174 | 99 |
| mdn-js-ref | oc-raw | none | yes | 200 | 7032 | 756 | 48 | 82 | 174 | 100 |
| mdn-js-ref | raw-fetch | none | yes | 200 | 44614 | 30 | 30 | 0 | 174 | 87 |
| mdn-js-ref | jina-reader | none | yes | 200 | 2530 | 301 | 301 |  | 10 |  |
| mdn-js-ref | lynx-dump | none | yes |  | 9754 | 254 | 254 |  |  |  |
| mdn-js-ref | playwright-mcp | none | yes |  | 13318 | 326 | 326 |  |  |  |
| mdn-js-ref | browser-use | none | yes |  | 2158 | 2873 | 1074 |  |  |  |
| mdn-js-ref | playwright-html | none | yes |  | 22253 | 836 | 283 |  | 87 |  |
| mdn-js-ref | selenium-html | none | yes |  | 22243 | 1279 | 411 |  | 87 |  |
| mdn-js-ref | claude-computer-use | none | yes |  | 1049 | 831 | 335 |  | 72 |  |
| mdn-js-ref | openai-computer-use | none | yes |  | 765 | 0 | 335 |  | 72 |  |
| node-api-ref | oc-open | none | yes | 200 | 479 | 963 | 120 | 194 | 1076 | 161 |
| node-api-ref | oc-raw | none | yes | 200 | 114150 | 1461 | 98 | 703 | 1076 | 206 |
| node-api-ref | raw-fetch | none | yes | 200 | 275425 | 75 | 75 | 0 | 1077 | 87 |
| node-api-ref | jina-reader | none | NO |  |  | 31385 |  |  |  |  |
| node-api-ref | lynx-dump | none | yes |  | 120928 | 162 | 162 |  |  |  |
| node-api-ref | playwright-mcp | none | yes |  | 272502 | 1220 | 1219 |  |  |  |
| node-api-ref | browser-use | none | yes |  | 1380 | 6143 | 4073 |  |  |  |
| node-api-ref | playwright-html | none | yes |  | 288443 | 1018 | 508 |  | 1127 |  |
| node-api-ref | selenium-html | none | yes |  | 288439 | 1334 | 510 |  | 1127 |  |
| node-api-ref | claude-computer-use | none | yes |  | 1049 | 943 | 452 |  | 62 |  |
| node-api-ref | openai-computer-use | none | yes |  | 765 | 0 | 452 |  | 62 |  |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 13/15 | 8971 | 1014 | 343 | 5498 |
| oc-raw | none | 13/15 | 243686 | 1115 | 355 | 5480 |
| raw-fetch | none | 14/15 | 1240669 | 250 | 232 | 4848 |
| jina-reader | none | 13/15 | 105198 | 4606 | 2890 | 411 |
| lynx-dump | none | 14/15 | 261435 | 373 | 353 | 0 |
| playwright-mcp | none | 15/15 | 531303 | 806 | 806 | 0 |
| browser-use | none | 15/15 | 28096 | 3483 | 1505 | 0 |
| playwright-html | none | 15/15 | 1592545 | 1075 | 552 | 6222 |
| selenium-html | none | 15/15 | 1489893 | 2081 | 846 | 5821 |
| claude-computer-use | none | 15/15 | 15735 | 1059 | 550 | 1802 |
| openai-computer-use | none | 15/15 | 11475 | 0 | 550 | 1802 |
