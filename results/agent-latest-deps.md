| task | tool | model | ok | correct | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| gh-release-v8 | oc-deps | claude-sonnet-5 | yes | yes | 4 | 1110 | 243 | 75620 | 2168 | 79141 | 0.0272 | 7 | Node.js v22.0.0 updated V8 to version 12.4.254.14. |
| gh-release-v8 | webfetch | claude-sonnet-5 | yes | yes | 5 | 30742 | 438 | 101209 | 1846 | 134235 | 0.0621 | 12 | Node.js v22.0.0 updated V8 to version 12.4.254.14. |
| gh-release-v8 | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 21414 | 807 | 97840 | 5939 | 126000 | 0.0805 | 16 | Node.js v22.0.0 updated V8 to version 12.4.254.14. Sources: - [Release 2024-04-2 |
| gh-repo-license | oc-deps | claude-sonnet-5 | yes | yes | 4 | 1091 | 202 | 72365 | 6879 | 80537 | 0.0451 | 7 | Flask is released under the BSD-3-Clause license. |
| gh-repo-license | webfetch | claude-sonnet-5 | yes | yes | 5 | 5205 | 336 | 98009 | 4870 | 108420 | 0.0474 | 9 | Flask is released under the BSD-3-Clause license. |
| gh-repo-license | websearch | claude-sonnet-5 | yes | yes | 5 | 10649 | 448 | 97783 | 5374 | 114254 | 0.0656 | 12 | Flask is released under the BSD-3-Clause license. Sources: - [GitHub - pallets/f |
| npm-package-license | oc-deps | claude-sonnet-5 | yes | yes | 5 | 1101 | 303 | 93901 | 10946 | 106251 | 0.0666 | 9 | The linkedom package is published under the ISC license and lists 5 dependencies |
| npm-package-license | webfetch | claude-sonnet-5 | yes | NO | 5 | 1022 | 336 | 98083 | 4914 | 104355 | 0.0436 | 10 | WebFetch returned an HTTP 403 Forbidden for that npm page, so I can't retrieve t |
| npm-package-license | websearch | claude-haiku-4-5-20251001 | yes | yes | 7 | 32698 | 1129 | 152270 | 6820 | 192917 | 0.1288 | 23 | linkedom is published under the ISC license and lists 5 dependencies (cssom, uhy |
| pypi-release-date | oc-deps | claude-sonnet-5 | yes | yes | 5 | 1100 | 328 | 99273 | 5480 | 106181 | 0.0461 | 11 | requests 2.31.0 was released on May 22, 2023. |
| pypi-release-date | webfetch | claude-sonnet-5 | yes | yes | 5 | 19964 | 360 | 98061 | 4869 | 123254 | 0.0623 | 10 | requests 2.31.0 was released on May 22, 2023, according to PyPI. |
| pypi-release-date | websearch | claude-sonnet-5 | yes | yes | 6 | 30580 | 973 | 124654 | 6063 | 162270 | 0.1073 | 17 | requests 2.31.0 was released on May 22, 2023, according to PyPI. Sources: - [req |
| so-top-answer | oc-deps | claude-sonnet-5 | yes | yes | 5 | 1105 | 400 | 99306 | 7783 | 108594 | 0.0560 | 12 | Branch prediction — the CPU predicts the outcome of the branch (from the `if` co |
| so-top-answer | webfetch | claude-sonnet-5 | yes | NO | 5 | 1026 | 331 | 98137 | 4875 | 104369 | 0.0434 | 7 | WebFetch is unable to fetch from stackoverflow.com, so I can't retrieve this pag |
| so-top-answer | websearch | claude-sonnet-5 | yes | yes | 6 | 11037 | 1028 | 124374 | 6234 | 142673 | 0.0789 | 21 | Branch prediction: the CPU predicts the outcome of the array's comparison branch |
| rfc-status-section | oc-deps | claude-sonnet-5 | yes | yes | 5 | 1108 | 289 | 99316 | 6028 | 106741 | 0.0479 | 10 | Section 15.4.9 defines the 308 status code, with the reason phrase "Permanent Re |
| rfc-status-section | webfetch | claude-sonnet-5 | yes | yes | 5 | 29649 | 451 | 98108 | 5008 | 133216 | 0.0731 | 10 | Section 15.4.9 defines the 308 status code, with the reason phrase "Permanent Re |
| rfc-status-section | websearch | claude-haiku-4-5-20251001 | yes | yes | 6 | 49789 | 1334 | 125190 | 6877 | 183190 | 0.1318 | 24 | RFC 9110 defines the 308 status code in Section 15.4.9, with the reason phrase " |
| caniuse-chrome-has | oc-deps | claude-sonnet-5 | yes | yes | 4 | 1104 | 235 | 72445 | 5902 | 79686 | 0.0415 | 11 | Chrome 105 was the first version to ship `:has()` enabled by default (versions 1 |
| caniuse-chrome-has | webfetch | claude-sonnet-5 | yes | yes | 5 | 2805 | 391 | 98106 | 4921 | 106223 | 0.0456 | 9 | Chrome 105 was the first version to ship `:has()` enabled by default, according  |
| caniuse-chrome-has | websearch | claude-haiku-4-5-20251001 | yes | yes | 7 | 75522 | 1463 | 127076 | 9262 | 213323 | 0.2076 | 26 | Chrome 105 was the first version to ship `:has()` enabled by default (unflagged) |
| dockerhub-nginx-conf | oc-deps | claude-sonnet-5 | yes | yes | 5 | 1099 | 246 | 99337 | 5665 | 106347 | 0.0460 | 12 | The main nginx configuration file inside the container is located at `/etc/nginx |
| dockerhub-nginx-conf | webfetch | claude-sonnet-5 | yes | yes | 5 | 8491 | 432 | 98129 | 4997 | 112049 | 0.0519 | 10 | The main nginx configuration file is located at `/etc/nginx/nginx.conf` inside t |
| dockerhub-nginx-conf | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 18086 | 782 | 97883 | 5707 | 122458 | 0.0761 | 14 | The main nginx configuration file is located at `/etc/nginx/nginx.conf`. Sources |
| crates-license | oc-deps | claude-sonnet-5 | yes | yes | 8 | 1102 | 671 | 181753 | 6858 | 190384 | 0.0715 | 17 | The serde crate is dual-licensed under either the MIT license or the Apache Lice |
| crates-license | webfetch | claude-sonnet-5 | yes | yes | 6 | 39749 | 602 | 124594 | 5182 | 170127 | 0.0904 | 12 | The serde crate is published under a dual license: MIT OR Apache-2.0. |
| crates-license | websearch | claude-sonnet-5 | yes | yes | 5 | 12855 | 416 | 97838 | 5202 | 116311 | 0.0669 | 11 | The serde crate is dual-licensed under MIT OR Apache-2.0. Sources: - [serde - cr |
| node-codename | oc-deps | claude-sonnet-5 | yes | yes | 4 | 1107 | 196 | 72441 | 6856 | 80600 | 0.0449 | 6 | Node.js v22 carries the LTS codename Jod, first released on April 24, 2024. |
| node-codename | webfetch | claude-sonnet-5 | yes | yes | 5 | 4164 | 423 | 98111 | 4954 | 107652 | 0.0473 | 9 | Node.js v22 carries the LTS codename Jod, and it was first released on April 24, |
| node-codename | websearch | claude-haiku-4-5-20251001 | yes | yes | 6 | 31087 | 1529 | 125128 | 6960 | 164704 | 0.1145 | 26 | The Node.js 22.x release line carries the LTS codename "Jod," with its first rel |
| rubygems-version-date | oc-deps | claude-sonnet-5 | yes | yes | 5 | 1114 | 256 | 99613 | 9033 | 110016 | 0.0596 | 9 | Rails 7.1.0 was published on October 05, 2023. |
| rubygems-version-date | webfetch | claude-sonnet-5 | yes | yes | 6 | 8642 | 645 | 124747 | 5250 | 139284 | 0.0599 | 14 | Rails 7.1.0 was published on October 5, 2023. |
| rubygems-version-date | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 11026 | 673 | 97912 | 5551 | 115162 | 0.0678 | 13 | Rails 7.1.0 was published on October 5, 2023. Sources: - [rails 7.1.0](https://r |
| eol-node16 | oc-deps | claude-sonnet-5 | yes | yes | 8 | 1120 | 427 | 183929 | 7917 | 193393 | 0.0738 | 13 | Node.js 16 reached end of life (security support ended) on 11 September 2023. |
| eol-node16 | webfetch | claude-sonnet-5 | yes | yes | 6 | 22320 | 554 | 124654 | 5156 | 152684 | 0.0726 | 14 | Node.js 16 reached end of life (end of security support) on September 11, 2023. |
| eol-node16 | websearch | claude-sonnet-5 | yes | yes | 6 | 21345 | 961 | 124833 | 6351 | 153490 | 0.0990 | 18 | Node.js 16 reached end of life (end of security support) on September 11, 2023.  |

### Summary
| tool | model | success | correct | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-deps | claude-sonnet-5 | 12/12 ✅ | 12/12 ✅ | 62 ✅ | 3796 ✅ | 1347871 ✅ | 0.6262 ✅ | 10 ✅ |
| webfetch | claude-sonnet-5 | 12/12 | 10/12 | 63 | 5299 | 1495868 | 0.6996 | 11 |
| websearch | claude-haiku-4-5-20251001 | 12/12 ✅ | 12/12 ✅ | 69 | 11543 | 1806752 | 1.2247 | 19 |

Turns count every run, failures included; token and cost totals count successes only. The correct column grades the answer against the fact the task asked for. The ✅ marks the best value in each column among tools that answered every task correctly.

### Cost per tier: one page versus following a link
| tool | lookup tokens | lookup turns | follow tokens | follow turns |
| --- | ---: | ---: | ---: | ---: |
| oc-deps | 1,044,462 | 49 | 303,409 | 13 |
| webfetch | 1,203,900 | 51 | 291,968 | 12 |
| websearch | 1,538,100 | 58 | 268,652 | 11 |

Every run in this table counts, failures included.

### What each tool actually cost, failures included
```
oc-deps        ##############################            1,347,871 tokens  62 turns
webfetch       #################################         1,495,868 tokens  63 turns
websearch      ########################################  1,806,752 tokens  69 turns
```
