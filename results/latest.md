| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 41 | 200 | 62 | 4 | 1 | 81 |
| simple-page | oc-raw | none | yes | 200 | 42 | 202 | 66 | 9 | 1 | 81 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 85 | 85 | 0 | 1 | 60 |
| simple-page | jina-reader | none | yes | 200 | 81 | 171 | 171 |  | 0 |  |
| simple-page | lynx-dump | none | yes |  | 47 | 103 | 103 |  |  |  |
| news-front | oc-open | none | yes | 200 | 425 | 400 | 254 | 15 | 34 | 81 |
| news-front | oc-raw | none | yes | 200 | 2830 | 439 | 253 | 46 | 34 | 88 |
| news-front | raw-fetch | none | yes | 200 | 8789 | 235 | 235 | 0 | 34 | 73 |
| news-front | jina-reader | none | yes | 200 | 4187 | 253 | 253 |  | 16 |  |
| news-front | lynx-dump | none | yes |  | 4629 | 501 | 501 |  |  |  |
| discussion | oc-open | none | yes | 200 | 479 | 903 | 725 | 42 | 207 | 90 |
| discussion | oc-raw | none | yes | 200 | 9637 | 951 | 689 | 124 | 207 | 105 |
| discussion | raw-fetch | none | yes | 200 | 52936 | 603 | 603 | 0 | 207 | 76 |
| discussion | jina-reader | none | yes | 200 | 295 | 1248 | 1248 |  | 1 |  |
| discussion | lynx-dump | none | yes |  | 11228 | 711 | 711 |  |  |  |
| search-results | oc-open | none | yes | 200 | 84 | 479 | 334 | 8 | 9 | 82 |
| search-results | oc-raw | none | yes | 200 | 2698 | 925 | 769 | 30 | 32 | 83 |
| search-results | raw-fetch | none | yes | 202 | 3562 | 62 | 62 | 0 | 14 | 76 |
| search-results | jina-reader | none | yes | 200 | 2688 | 5088 | 5088 |  | 10 |  |
| search-results | lynx-dump | none | NO |  |  | 663 |  |  |  |  |
| repo-search | oc-open | none | yes | 200 | 441 | 596 | 433 | 35 | 265 | 86 |
| repo-search | oc-raw | none | yes | 200 | 3777 | 297 | 72 | 85 | 265 | 97 |
| repo-search | raw-fetch | none | yes | 200 | 67902 | 380 | 380 | 0 | 265 | 77 |
| repo-search | jina-reader | none | yes | 200 | 4034 | 4448 | 4448 |  | 16 |  |
| repo-search | lynx-dump | none | yes |  | 3899 | 530 | 530 |  |  |  |
| company-page | oc-open | none | yes | 200 | 471 | 711 | 555 | 22 | 166 | 83 |
| company-page | oc-raw | none | yes | 200 | 4784 | 695 | 509 | 59 | 152 | 89 |
| company-page | raw-fetch | none | yes | 200 | 43330 | 334 | 334 | 0 | 170 | 78 |
| company-page | jina-reader | none | yes | 200 | 5059 | 938 | 938 |  | 20 |  |
| company-page | lynx-dump | none | yes |  | 5335 | 458 | 458 |  |  |  |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 6/6 | 1941 | 548 | 394 | 682 |
| oc-raw | none | 6/6 | 23768 | 585 | 393 | 691 |
| raw-fetch | none | 6/6 | 176659 | 283 | 283 | 691 |
| jina-reader | none | 6/6 | 16344 | 2024 | 2024 | 64 |
| lynx-dump | none | 5/6 | 25138 | 494 | 461 | 0 |
