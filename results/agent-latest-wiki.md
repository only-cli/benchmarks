| task | tool | model | ok | correct | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| wiki-ambiguous | oc-wiki | claude-sonnet-5 | yes | yes | 4 | 1119 | 208 | 66777 | 10611 | 78715 | 0.0589 | 7 | Anthropic, PBC is an American artificial intelligence public benefit corporation |
| wiki-ambiguous | webfetch | claude-sonnet-5 | yes | yes | 5 | 6556 | 673 | 98028 | 5333 | 110590 | 0.0526 | 16 | Anthropic, PBC is an American artificial intelligence public benefit corporation |
| wiki-ambiguous | websearch | claude-sonnet-5 | yes | yes | 5 | 27544 | 663 | 97786 | 5553 | 131546 | 0.0844 | 13 | Anthropic, PBC is an American artificial intelligence public benefit corporation |
| wiki-person | oc-wiki | claude-sonnet-5 | yes | yes | 4 | 1107 | 241 | 72099 | 5179 | 78626 | 0.0386 | 6 | Dario Amodei co-founded Anthropic in 2021 (along with his sister Daniela Amodei) |
| wiki-person | webfetch | claude-sonnet-5 | yes | yes | 5 | 16178 | 448 | 97905 | 4997 | 119528 | 0.0596 | 10 | Dario Amodei co-founded Anthropic in 2021, where he serves as CEO. |
| wiki-person | websearch | claude-sonnet-5 | yes | yes | 5 | 19590 | 566 | 97715 | 5427 | 123298 | 0.0754 | 12 | Dario Amodei co-founded Anthropic in 2021 and serves as its CEO. Sources: - [Dar |
| wiki-fact-in-long-page | oc-wiki | claude-sonnet-5 | yes | yes | 4 | 1102 | 223 | 72129 | 5218 | 78672 | 0.0386 | 7 | The Eiffel Tower was completed in 1889 and stands 330 m (1,083 ft) tall includin |
| wiki-fact-in-long-page | webfetch | claude-sonnet-5 | yes | yes | 5 | 33445 | 479 | 97914 | 5022 | 136860 | 0.0772 | 11 | The Eiffel Tower was completed in 1889 and, including antennas, stands 330 metre |
| wiki-fact-in-long-page | websearch | claude-sonnet-5 | yes | yes | 5 | 22918 | 651 | 97702 | 5582 | 126853 | 0.0798 | 12 | The Eiffel Tower was completed in 1889 and stands 330 metres (1,083 ft) tall inc |
| wiki-technical | oc-wiki | claude-sonnet-5 | yes | yes | 6 | 1102 | 414 | 125830 | 5729 | 133075 | 0.0533 | 10 | According to Wikipedia, the transformer architecture was introduced in the 2017  |
| wiki-technical | webfetch | claude-sonnet-5 | yes | yes | 5 | 33807 | 452 | 97917 | 5030 | 137206 | 0.0774 | 10 | The transformer architecture was introduced in the 2017 paper "Attention Is All  |
| wiki-technical | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 11775 | 848 | 97705 | 5818 | 116146 | 0.0707 | 20 | According to Wikipedia, the transformer architecture was introduced in the 2017  |
| wiki-non-english | oc-wiki | claude-sonnet-5 | yes | yes | 4 | 1105 | 233 | 72155 | 5437 | 78930 | 0.0396 | 7 | According to the German Wikipedia article, Berlin's population (Einwohner) is 3, |
| wiki-non-english | webfetch | claude-sonnet-5 | yes | yes | 5 | 39271 | 400 | 97949 | 4948 | 142568 | 0.0822 | 11 | The German Wikipedia article on Berlin gives its population as 3,700,577 (as of  |
| wiki-non-english | websearch | claude-haiku-4-5-20251001 | yes | yes | 6 | 55155 | 1311 | 125041 | 7100 | 188607 | 0.1382 | 24 | The German Wikipedia article on Berlin states a population of approximately 3.7  |

### Summary
| tool | model | success | correct | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-wiki | claude-sonnet-5 | 5/5 ✅ | 5/5 ✅ | 22 ✅ | 1319 ✅ | 448018 ✅ | 0.2289 ✅ | 8 ✅ |
| webfetch | claude-sonnet-5 | 5/5 ✅ | 5/5 ✅ | 25 | 2452 | 646752 | 0.3490 | 12 |
| websearch | claude-sonnet-5 | 5/5 ✅ | 5/5 ✅ | 26 | 4039 | 686450 | 0.4485 | 16 |

Turns count every run, failures included; token and cost totals count successes only. The correct column grades the answer against the fact the task asked for. The ✅ marks the best value in each column among tools that answered every task correctly.

### What each tool actually cost, failures included
```
oc-wiki        ##########################                 448,018 tokens  22 turns
webfetch       ######################################     646,752 tokens  25 turns
websearch      ########################################   686,450 tokens  26 turns
```
