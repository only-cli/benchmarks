| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 41 | 207 | 68 | 4 | 1 | 81 |
| simple-page | oc-raw | none | yes | 200 | 42 | 206 | 69 | 9 | 1 | 81 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 94 | 94 | 0 | 1 | 59 |
| news-front | oc-open | none | yes | 200 | 426 | 402 | 257 | 14 | 34 | 82 |
| news-front | oc-raw | none | yes | 200 | 2824 | 506 | 316 | 48 | 34 | 88 |
| news-front | raw-fetch | none | yes | 200 | 8780 | 228 | 228 | 0 | 34 | 62 |
| discussion | oc-open | none | yes | 200 | 479 | 865 | 692 | 41 | 207 | 90 |
| discussion | oc-raw | none | yes | 200 | 9636 | 971 | 715 | 120 | 207 | 108 |
| discussion | raw-fetch | none | yes | 200 | 52935 | 871 | 871 | 0 | 207 | 74 |
| search-results | oc-open | none | yes | 200 | 84 | 419 | 275 | 9 | 9 | 82 |
| search-results | oc-raw | none | yes | 200 | 2698 | 903 | 730 | 31 | 32 | 82 |
| search-results | raw-fetch | none | yes | 200 | 10290 | 852 | 851 | 0 | 40 | 75 |
| repo-search | oc-open | none | yes | 200 | 441 | 614 | 439 | 35 | 265 | 86 |
| repo-search | oc-raw | none | yes | 200 | 3777 | 311 | 78 | 87 | 265 | 98 |
| repo-search | raw-fetch | none | yes | 200 | 67902 | 467 | 467 | 0 | 265 | 79 |
| company-page | oc-open | none | yes | 200 | 470 | 588 | 438 | 22 | 166 | 84 |
| company-page | oc-raw | none | yes | 200 | 4785 | 722 | 521 | 69 | 152 | 89 |
| company-page | raw-fetch | none | yes | 200 | 39724 | 320 | 320 | 0 | 155 | 76 |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 6/6 | 1941 | 516 | 362 | 682 |
| oc-raw | none | 6/6 | 23762 | 603 | 405 | 691 |
| raw-fetch | none | 6/6 | 179771 | 472 | 472 | 703 |
