| task | adapter | model | ok | status | tokens | ms | fetch ms | process ms | KB | mem MB |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| simple-page | oc-open | none | yes | 200 | 41 | 199 | 64 | 4 | 1 | 81 |
| simple-page | oc-raw | none | yes | 200 | 42 | 198 | 60 | 9 | 1 | 81 |
| simple-page | raw-fetch | none | yes | 200 | 140 | 83 | 83 | 0 | 1 | 59 |
| news-front | oc-open | none | yes | 200 | 428 | 419 | 279 | 15 | 34 | 83 |
| news-front | oc-raw | none | yes | 200 | 2825 | 439 | 254 | 50 | 34 | 91 |
| news-front | raw-fetch | none | yes | 200 | 8771 | 227 | 227 | 0 | 34 | 63 |
| discussion | oc-open | none | yes | 200 | 477 | 896 | 730 | 40 | 207 | 90 |
| discussion | oc-raw | none | yes | 200 | 9625 | 954 | 697 | 120 | 207 | 106 |
| discussion | raw-fetch | none | yes | 200 | 52899 | 621 | 621 | 0 | 207 | 75 |
| search-results | oc-open | none | yes | 200 | 498 | 851 | 712 | 12 | 32 | 81 |
| search-results | oc-raw | none | yes | 200 | 2678 | 1046 | 888 | 30 | 32 | 82 |
| search-results | raw-fetch | none | yes | 202 | 3562 | 58 | 58 | 0 | 14 | 75 |

### Summary
| adapter | model | success | total tokens | avg ms | avg fetch ms | total KB |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| oc-open | none | 4/4 | 1444 | 591 | 446 | 274 |
| oc-raw | none | 4/4 | 15170 | 659 | 475 | 274 |
| raw-fetch | none | 4/4 | 65372 | 247 | 247 | 256 |
