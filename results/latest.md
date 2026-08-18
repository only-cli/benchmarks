| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 41 | 214 | 72 | 4 | 1 | 81 |
| simple-page | oc-raw | none | yes | 200 | 42 | 209 | 66 | 10 | 1 | 81 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 84 | 84 | 0 | 1 | 60 |
| simple-page | jina-reader | none | yes | 200 | 92 | 196 | 196 |  | 0 |  |
| simple-page | lynx-dump | none | yes |  | 47 | 104 | 104 |  |  |  |
| simple-page | playwright-mcp | none | yes |  | 135 | 312 | 311 |  |  |  |
| simple-page | browser-use | none | yes |  | 35 | 2342 | 446 |  |  |  |
| simple-page | playwright-html | none | yes |  | 140 | 611 | 99 |  | 1 |  |
| simple-page | selenium-html | none | yes |  | 136 | 965 | 64 |  | 1 |  |
| simple-page | claude-computer-use | none | yes |  | 1049 | 615 | 118 |  | 19 |  |
| simple-page | openai-computer-use | none | yes |  | 765 | 0 | 118 |  | 19 |  |
| news-front | oc-open | none | yes | 200 | 422 | 436 | 291 | 15 | 34 | 82 |
| news-front | oc-raw | none | yes | 200 | 2806 | 447 | 266 | 45 | 34 | 88 |
| news-front | raw-fetch | none | yes | 200 | 8759 | 221 | 221 | 0 | 34 | 73 |
| news-front | jina-reader | none | yes | 200 | 4049 | 1607 | 1607 |  | 16 |  |
| news-front | lynx-dump | none | yes |  | 4605 | 468 | 468 |  |  |  |
| news-front | playwright-mcp | none | yes |  | 12459 | 441 | 441 |  |  |  |
| news-front | browser-use | none | yes |  | 3301 | 2598 | 781 |  |  |  |
| news-front | playwright-html | none | yes |  | 8771 | 872 | 339 |  | 34 |  |
| news-front | selenium-html | none | yes |  | 8771 | 1326 | 474 |  | 34 |  |
| news-front | claude-computer-use | none | yes |  | 1049 | 906 | 400 |  | 180 |  |
| news-front | openai-computer-use | none | yes |  | 765 | 0 | 400 |  | 180 |  |
| discussion | oc-open | none | yes | 200 | 477 | 860 | 689 | 40 | 207 | 90 |
| discussion | oc-raw | none | yes | 200 | 9595 | 897 | 647 | 110 | 207 | 107 |
| discussion | raw-fetch | none | yes | 200 | 52872 | 626 | 626 | 0 | 207 | 77 |
| discussion | jina-reader | none | yes | 200 | 295 | 1293 | 1293 |  | 1 |  |
| discussion | lynx-dump | none | yes |  | 11189 | 538 | 538 |  |  |  |
| discussion | playwright-mcp | none | yes |  | 207 | 97 | 97 |  |  |  |
| discussion | browser-use | none | yes |  | 39 | 2325 | 497 |  |  |  |
| discussion | playwright-html | none | yes |  | 47489 | 646 | 138 |  | 186 |  |
| discussion | selenium-html | none | yes |  | 47489 | 964 | 113 |  | 186 |  |
| discussion | claude-computer-use | none | yes |  | 1049 | 641 | 140 |  | 72 |  |
| discussion | openai-computer-use | none | yes |  | 765 | 0 | 140 |  | 72 |  |
| search-results | oc-open | none | yes | 200 | 84 | 535 | 399 | 7 | 9 | 82 |
| search-results | oc-raw | none | yes | 200 | 235 | 483 | 334 | 18 | 9 | 82 |
| search-results | raw-fetch | none | yes | 200 | 8288 | 719 | 719 | 0 | 32 | 79 |
| search-results | jina-reader | none | yes | 200 | 2688 | 219 | 219 |  | 10 |  |
| search-results | lynx-dump | none | NO |  |  | 664 |  |  |  |  |
| search-results | playwright-mcp | none | yes |  | 298 | 173 | 173 |  |  |  |
| search-results | browser-use | none | yes |  | 215 | 2286 | 608 |  |  |  |
| search-results | playwright-html | none | yes |  | 3532 | 621 | 122 |  | 14 |  |
| search-results | selenium-html | none | yes |  | 3535 | 978 | 146 |  | 14 |  |
| search-results | claude-computer-use | none | yes |  | 1049 | 720 | 212 |  | 193 |  |
| search-results | openai-computer-use | none | yes |  | 765 | 0 | 212 |  | 193 |  |
| repo-search | oc-open | none | yes | 200 | 441 | 619 | 452 | 35 | 265 | 86 |
| repo-search | oc-raw | none | yes | 200 | 3777 | 678 | 461 | 79 | 265 | 97 |
| repo-search | raw-fetch | none | yes | 200 | 67902 | 455 | 455 | 0 | 265 | 80 |
| repo-search | jina-reader | none | yes | 200 | 4219 | 231 | 231 |  | 17 |  |
| repo-search | lynx-dump | none | yes |  | 3899 | 489 | 489 |  |  |  |
| repo-search | playwright-mcp | none | yes |  | 8582 | 514 | 514 |  |  |  |
| repo-search | browser-use | none | yes |  | 2642 | 2758 | 1074 |  |  |  |
| repo-search | playwright-html | none | yes |  | 2393 | 696 | 161 |  | 9 |  |
| repo-search | selenium-html | none | yes |  | 68012 | 1440 | 618 |  | 266 |  |
| repo-search | claude-computer-use | none | yes |  | 1049 | 863 | 348 |  | 142 |  |
| repo-search | openai-computer-use | none | yes |  | 765 | 0 | 348 |  | 142 |  |
| company-page | oc-open | none | yes | 200 | 471 | 574 | 417 | 24 | 152 | 82 |
| company-page | oc-raw | none | yes | 200 | 4879 | 530 | 341 | 57 | 166 | 90 |
| company-page | raw-fetch | none | yes | 200 | 39724 | 329 | 329 | 0 | 155 | 82 |
| company-page | jina-reader | none | yes | 200 | 5059 | 269 | 269 |  | 20 |  |
| company-page | lynx-dump | none | yes |  | 4917 | 480 | 480 |  |  |  |
| company-page | playwright-mcp | none | yes |  | 4151 | 653 | 653 |  |  |  |
| company-page | browser-use | none | yes |  | 238 | 2948 | 1187 |  |  |  |
| company-page | playwright-html | none | yes |  | 39036 | 936 | 430 |  | 153 |  |
| company-page | selenium-html | none | yes |  | 38614 | 1458 | 588 |  | 151 |  |
| company-page | claude-computer-use | none | yes |  | 1049 | 1297 | 797 |  | 164 |  |
| company-page | openai-computer-use | none | yes |  | 765 | 0 | 797 |  | 164 |  |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 6/6 | 1936 | 540 | 387 | 668 |
| oc-raw | none | 6/6 | 21334 | 541 | 353 | 682 |
| raw-fetch | none | 6/6 | 177685 | 406 | 406 | 695 |
| jina-reader | none | 6/6 | 16402 | 636 | 636 | 64 |
| lynx-dump | none | 5/6 | 24657 | 457 | 416 | 0 |
| playwright-mcp | none | 6/6 | 25832 | 365 | 365 | 0 |
| browser-use | none | 6/6 | 6470 | 2543 | 766 | 0 |
| playwright-html | none | 6/6 | 101361 | 730 | 215 | 396 |
| selenium-html | none | 6/6 | 166557 | 1189 | 334 | 651 |
| claude-computer-use | none | 6/6 | 6294 | 840 | 336 | 769 |
| openai-computer-use | none | 6/6 | 4590 | 0 | 336 | 769 |
