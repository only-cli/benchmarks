| task | tool | model | ok | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| hn-top | oc | gpt-5.6-sol | yes | 3 | 16535 | 172 | 13056 | 0 | 29763 |  | 12 | GrapheneOS in 2027 available on high-end Motorola phones. |
| hn-top | raw-curl | gpt-5.6-sol | yes | 2 | 25744 | 174 | 13056 | 0 | 38974 |  | 11 | GrapheneOS in 2027 available on high-end Motorola phones. |
| hn-top | lynx | gpt-5.6-sol | yes | 3 | 19472 | 180 | 13056 | 0 | 32708 |  | 9 | Claude: Degraded Performance for Multiple Models. |
| hn-top | jina-reader | gpt-5.6-sol | yes | 3 | 7323 | 206 | 25088 | 0 | 32617 |  | 11 | GrapheneOS in 2027 available on high-end Motorola phones. |
| hn-top | playwright-mcp | gpt-5.6-sol | yes | 3 | 12778 | 231 | 49152 | 0 | 62161 |  | 19 | GrapheneOS in 2027 available on high-end Motorola phones. |
| gh-search | oc | gpt-5.6-sol | yes | 3 | 5483 | 233 | 23040 | 0 | 28756 |  | 19 | The first result is `gokcehan/lf`, with roughly 9,500 stars. |
| gh-search | raw-curl | gpt-5.6-sol | yes | 3 | 19523 | 436 | 53504 | 0 | 73463 |  | 16 | The first result is `gokcehan/lf`, with roughly 9.5K stars. |
| gh-search | lynx | gpt-5.6-sol | yes | 2 | 4107 | 192 | 23040 | 0 | 27339 |  | 10 | I couldn’t determine it because GitHub returned a secondary rate-limit error. |
| gh-search | jina-reader | gpt-5.6-sol | yes | 2 | 9136 | 197 | 23040 | 0 | 32373 |  | 15 | The first result is `gokcehan/lf`, with roughly 9,500 stars. |
| gh-search | playwright-mcp | gpt-5.6-sol | yes | 5 | 13526 | 453 | 78592 | 0 | 92571 |  | 26 | gokcehan/lf is the first result, with roughly 9.5K stars. |
| stock-price | oc | gpt-5.6-sol | yes | 3 | 39452 | 290 | 13056 | 0 | 52798 |  | 17 | Apple’s most recent closing stock price was $310.03. |
| stock-price | raw-curl | gpt-5.6-sol | yes | 2 | 13900 | 295 | 13056 | 0 | 27251 |  | 14 | I couldn’t retrieve the page because Yahoo Finance returned “Too Many Requests.” |
| stock-price | lynx | gpt-5.6-sol | NO | 2 | 3907 | 189 | 23040 | 0 | 27136 |  | 9 | I couldn’t retrieve the stock price because `lynx` is unavailable. |
| stock-price | jina-reader | gpt-5.6-sol | yes | 4 | 13336 | 396 | 50432 | 0 | 64164 |  | 19 | Apple’s stock price was $310.03 at the most recent market close shown. |
| stock-price | playwright-mcp | gpt-5.6-sol | yes | 5 | 43092 | 521 | 46336 | 0 | 89949 |  | 29 | Apple’s stock price at the most recent market close was $310.03. |
| reddit-thread | oc | gpt-5.6-sol | yes | 4 | 14344 | 922 | 40192 | 0 | 55458 |  | 29 | Lynx is the terminal web browser commenters recommend most. |
| reddit-thread | raw-curl | gpt-5.6-sol | yes | 2 | 22658 | 335 | 24064 | 0 | 47057 |  | 12 | I couldn’t determine it because Reddit blocked the `curl` request. |
| reddit-thread | lynx | gpt-5.6-sol | yes | 5 | 37165 | 1591 | 126720 | 0 | 165476 |  | 46 | Lynx is the most-recommended terminal web browser in the thread. |
| reddit-thread | jina-reader | gpt-5.6-sol | yes | 3 | 14243 | 245 | 13056 | 0 | 27544 |  | 13 | I can’t determine it because Reddit blocked Jina Reader from accessing the threa |
| reddit-thread | playwright-mcp | gpt-5.6-sol | yes | 2 | 18756 | 302 | 29184 | 0 | 48242 |  | 21 | I can’t determine it because Reddit blocked the Playwright browser with a 403 re |
| hn-comments | oc | gpt-5.6-sol | yes | 6 | 38917 | 1264 | 61440 | 0 | 101621 |  | 39 | The story is “GrapheneOS in 2027 available on high-end Motorola phones,” and the |
| hn-comments | raw-curl | gpt-5.6-sol | yes | 3 | 27654 | 360 | 50432 | 0 | 78446 |  | 17 | “GrapheneOS in 2027 available on high-end Motorola phones” — the top comment moc |
| hn-comments | lynx | gpt-5.6-sol | yes | 4 | 34745 | 410 | 32256 | 0 | 67411 |  | 24 | “Using the railway network as a flatbed scanner” — the top commenter says he and |
| hn-comments | jina-reader | gpt-5.6-sol | yes | 3 | 28759 | 363 | 31232 | 0 | 60354 |  | 18 | “GrapheneOS in 2027 available on high-end Motorola phones” — the top comment arg |
| hn-comments | playwright-mcp | gpt-5.6-sol | yes | 6 | 39646 | 716 | 98816 | 0 | 139178 |  | 41 | “GrapheneOS in 2027 available on high-end Motorola phones” — the top comment cri |
| gh-repo-detail | oc | gpt-5.6-sol | yes | 4 | 27570 | 1634 | 220672 | 0 | 249876 |  | 76 | The repository is published under the MIT License. |
| gh-repo-detail | raw-curl | gpt-5.6-sol | yes | 5 | 21023 | 753 | 80896 | 0 | 102672 |  | 33 | It is published under the MIT License. |
| gh-repo-detail | lynx | gpt-5.6-sol | yes | 3 | 40563 | 236 | 18176 | 0 | 58975 |  | 15 | The lf repository is published under the MIT License. |
| gh-repo-detail | jina-reader | gpt-5.6-sol | yes | 5 | 35038 | 472 | 46336 | 0 | 81846 |  | 30 | The repository is published under the MIT License. |
| gh-repo-detail | playwright-mcp | gpt-5.6-sol | yes | 3 | 8810 | 330 | 39168 | 0 | 48308 |  | 27 | GitHub returned HTTP 429 (“Too many requests”), so I couldn’t determine the repo |
| ddg-follow | oc | gpt-5.6-sol | yes | 7 | 9934 | 1289 | 88576 | 0 | 99799 |  | 57 | Welcome to *The Rust Programming Language*, an introductory book about Rust. |
| ddg-follow | raw-curl | gpt-5.6-sol | yes | 3 | 22249 | 487 | 30208 | 0 | 52944 |  | 20 | DuckDuckGo returned a bot challenge, so I couldn’t retrieve the requested senten |
| ddg-follow | lynx | gpt-5.6-sol | yes | 3 | 11228 | 303 | 40192 | 0 | 51723 |  | 15 | Welcome to The Rust Programming Language, an introductory book about Rust. |
| ddg-follow | jina-reader | gpt-5.6-sol | yes | 3 | 13084 | 307 | 43264 | 0 | 56655 |  | 19 | Welcome to *The Rust Programming Language*, an introductory book about Rust. |
| ddg-follow | playwright-mcp | gpt-5.6-sol | yes | 3 | 16250 | 353 | 40192 | 0 | 56795 |  | 21 | I couldn’t access the search results because DuckDuckGo blocked the automated br |
| reddit-top-comment | oc | gpt-5.6-sol | yes | 7 | 30240 | 1045 | 91648 | 0 | 122933 |  | 38 | “Anthropic has twice the revenue of OpenAI”; its top comment says people prefer  |
| reddit-top-comment | raw-curl | gpt-5.6-sol | yes | 30 | 160895 | 5103 | 2005760 | 0 | 2171758 |  | 174 | “Anthropic has twice the revenue of OpenAI” — its top comment says people may fi |
| reddit-top-comment | lynx | gpt-5.6-sol | NO | 3 | 13924 | 227 | 13056 | 0 | 27207 |  | 12 | I couldn’t retrieve the page because `lynx` is not installed in this environment |
| reddit-top-comment | jina-reader | gpt-5.6-sol | yes | 2 | 27288 | 234 | 0 | 0 | 27522 |  | 18 | Jina Reader was blocked by Reddit, so I can’t determine the top post or comment  |
| reddit-top-comment | playwright-mcp | gpt-5.6-sol | yes | 4 | 6166 | 372 | 50176 | 0 | 56714 |  | 22 | I couldn’t determine the answer because Reddit blocked the Playwright browser wi |

### Summary
| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | gpt-5.6-sol | 8/8 ✅ | 37 | 6849 | 741004 |  | 36 |
| raw-curl | gpt-5.6-sol | 8/8 ✅ | 50 | 7943 | 2592565 |  | 37 |
| lynx | gpt-5.6-sol | 6/8 | 25 | 2912 | 403632 |  | 17 |
| jina-reader | gpt-5.6-sol | 8/8 ✅ | 25 ✅ | 2420 ✅ | 383075 ✅ |  | 18 ✅ |
| playwright-mcp | gpt-5.6-sol | 8/8 ✅ | 31 | 3278 | 593918 |  | 26 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task.

### Cost per tier: one page versus following a link
| tool | single page tokens | single page turns | multi step tokens | multi step turns |
| --- | ---: | ---: | ---: | ---: |
| oc | 166,775 | 13 | 574,229 | 24 |
| raw-curl | 186,745 | 9 | 2,405,820 | 41 |
| lynx | 252,659 (1 failed) | 12 | 205,316 (1 failed) | 13 |
| jina-reader | 156,698 | 12 | 226,377 | 13 |
| playwright-mcp | 292,923 | 15 | 300,995 | 16 |

Every run in this table counts, failures included.

### What each tool actually cost, failures included
```
oc             ###########                                741,004 tokens  37 turns
raw-curl       ########################################  2,592,565 tokens  50 turns
lynx           #######                                    457,975 tokens  25 turns  2 failed
jina-reader    ######                                     383,075 tokens  25 turns
playwright-mcp #########                                  593,918 tokens  31 turns
```
