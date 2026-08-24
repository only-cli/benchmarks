| task | tool | model | ok | correct | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| wiki-ambiguous | oc-wiki | gpt-5.6-sol | yes | yes | 3 | 4678 | 164 | 25088 | 0 | 29930 |  | 18 | Anthropic, PBC is an American artificial intelligence public benefit corporation |
| wiki-ambiguous | websearch | gpt-5.6-sol | yes | yes | 2 | 5919 | 111 | 25088 | 0 | 31118 |  | 10 | Anthropic is an American artificial intelligence company headquartered in San Fr |
| wiki-person | oc-wiki | gpt-5.6-sol | yes | yes | 2 | 6252 | 154 | 22016 | 0 | 28422 |  | 9 | Dario Amodei co-founded Anthropic in 2021 and serves as its CEO. |
| wiki-person | websearch | gpt-5.6-sol | yes | yes | 3 | 5987 | 321 | 25088 | 0 | 31396 |  | 14 | Dario Amodei co-founded Anthropic in 2021 and serves as its CEO. |
| wiki-fact-in-long-page | oc-wiki | gpt-5.6-sol | yes | yes | 2 | 8280 | 128 | 19968 | 0 | 28376 |  | 17 | The Eiffel Tower was completed in 1889 and is 330 metres (1,083 feet) tall inclu |
| wiki-fact-in-long-page | websearch | gpt-5.6-sol | yes | yes | 2 | 19260 | 171 | 25088 | 0 | 44519 |  | 13 | The Eiffel Tower was completed in 1889 and is 330 metres (1,083 feet) tall inclu |
| wiki-technical | oc-wiki | gpt-5.6-sol | yes | yes | 4 | 9625 | 402 | 40192 | 0 | 50219 |  | 37 | “Attention Is All You Need” introduced the transformer architecture in 2017. |
| wiki-technical | websearch | gpt-5.6-sol | yes | yes | 2 | 5856 | 108 | 25088 | 0 | 31052 |  | 10 | “Attention Is All You Need” introduced the transformer architecture in 2017. |
| wiki-non-english | oc-wiki | gpt-5.6-sol | yes | yes | 2 | 5354 | 119 | 23040 | 0 | 28513 |  | 12 | Berlin’s population is 3,700,577. |
| wiki-non-english | websearch | gpt-5.6-sol | yes | NO | 4 | 12233 | 732 | 42240 | 0 | 55205 |  | 33 | Berlin’s population is [3,685,265](https://de.wikipedia.org/w/index.php?title=Be |

### Summary
| tool | model | success | correct | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-wiki | gpt-5.6-sol | 5/5 ✅ | 5/5 ✅ | 13 | 967 | 165460 |  | 19 |
| webfetch | sonnet | 0/0 ✅ |  | 0 ✅ | 0 ✅ | 0 ✅ |  | NaN |
| websearch | gpt-5.6-sol | 5/5 | 4/5 | 13 | 1443 | 193290 |  | 16 |

Turns count every run, failures included; token and cost totals count successes only. The correct column grades the answer against the fact the task asked for. The ✅ marks the best value in each column among tools that answered every task correctly.

### What each tool actually cost, failures included
```
oc-wiki        ##################################         165,460 tokens  13 turns
webfetch       #                                                0 tokens   0 turns
websearch      ########################################   193,290 tokens  13 turns
```
