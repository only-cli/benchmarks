| task | tool | model | ok | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| hn-top | oc | gpt-5.6-sol | yes | 3 | 4655 | 174 | 23040 | 0 | 27869 |  | 12 | Using the railway network as a flatbed scanner. |
| hn-top | raw-curl | gpt-5.6-sol | yes | 2 | 19901 | 280 | 18944 | 0 | 39125 |  | 13 | Using the railway network as a flatbed scanner. |
| hn-top | lynx | gpt-5.6-sol | yes | 3 | 8346 | 197 | 23040 | 0 | 31583 |  | 10 | Using the railway network as a flatbed scanner. |
| hn-top | jina-reader | gpt-5.6-sol | yes | 3 | 19146 | 205 | 13056 | 0 | 32407 |  | 11 | Using the railway network as a flatbed scanner. |
| hn-top | playwright-mcp | gpt-5.6-sol | yes | 3 | 26015 | 312 | 36096 | 0 | 62423 |  | 23 | Using the railway network as a flatbed scanner. |
| gh-search | oc | gpt-5.6-sol | yes | 3 | 5310 | 257 | 38144 | 0 | 43711 |  | 15 | The first result is `gokcehan/lf`, with roughly 9,500 stars. |
| gh-search | raw-curl | gpt-5.6-sol | yes | 3 | 17890 | 391 | 49408 | 0 | 67689 |  | 16 | The first result is `gokcehan/lf`, with roughly 9.5K stars. |
| gh-search | lynx | gpt-5.6-sol | yes | 2 | 6789 | 180 | 25088 | 0 | 32057 |  | 12 | The first result is `gokcehan/lf`, with roughly 9,500 stars. |
| gh-search | jina-reader | gpt-5.6-sol | yes | 2 | 8925 | 124 | 23040 | 0 | 32089 |  | 13 | The first result is `gokcehan/lf`, with roughly 9.5K stars. |
| gh-search | playwright-mcp | gpt-5.6-sol | yes | 5 | 24442 | 384 | 55296 | 0 | 80122 |  | 25 | The first result is `gokcehan/lf`, with roughly 9.5K stars. |
| reddit-thread | oc | gpt-5.6-sol | yes | 2 | 19437 | 590 | 18944 | 0 | 38971 |  | 20 | Lynx is the terminal web browser commenters recommend most. |
| reddit-thread | raw-curl | gpt-5.6-sol | yes | 41 | 60521 | 6720 | 804608 | 0 | 871849 |  | 191 | W3m is the terminal web browser commenters recommend most. |
| reddit-thread | lynx | gpt-5.6-sol | yes | 6 | 23451 | 2315 | 112384 | 0 | 138150 |  | 60 | Lynx is the terminal browser commenters recommend most. |
| reddit-thread | jina-reader | gpt-5.6-sol | yes | 2 | 14195 | 195 | 13056 | 0 | 27446 |  | 12 | I couldn’t determine it because Reddit blocked Jina Reader’s access to the threa |
| reddit-thread | playwright-mcp | gpt-5.6-sol | yes | 2 | 18768 | 328 | 29184 | 0 | 48280 |  | 21 | Reddit blocked the Playwright browser with HTTP 403, so I can’t determine which  |

### Summary
| tool | model | success | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| oc | gpt-5.6-sol | 3/3 ✅ | 8 | 1021 | 110551 |  | 16 |
| raw-curl | gpt-5.6-sol | 3/3 ✅ | 46 | 7391 | 978663 |  | 74 |
| lynx | gpt-5.6-sol | 3/3 ✅ | 11 | 2692 | 201790 |  | 28 |
| jina-reader | gpt-5.6-sol | 3/3 ✅ | 7 ✅ | 524 ✅ | 91942 ✅ |  | 12 ✅ |
| playwright-mcp | gpt-5.6-sol | 3/3 ✅ | 10 | 1024 | 190825 |  | 23 |

Turns count every run, failures included; token and cost totals count successes only. The ✅ marks the best value in each column among tools that finished every task.

### What each tool actually cost, failures included
```
oc             #####                                      110,551 tokens   8 turns
raw-curl       ########################################   978,663 tokens  46 turns
lynx           ########                                   201,790 tokens  11 turns
jina-reader    ####                                        91,942 tokens   7 turns
playwright-mcp ########                                   190,825 tokens  10 turns
```
