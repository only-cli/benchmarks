| task | tool | model | ok | correct | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| wiki-ambiguous | oc-wiki | claude-sonnet-5 | yes | yes | 4 | 1119 | 214 | 84697 | 10674 | 96704 | 0.0628 | 9 | According to Wikipedia, Anthropic, PBC is an American artificial intelligence pu |
| wiki-ambiguous | webfetch | claude-haiku-4-5-20251001 | yes | yes | 5 | 6379 | 692 | 122017 | 5363 | 134451 | 0.0573 | 16 | Anthropic is an American artificial intelligence public benefit corporation head |
| wiki-ambiguous | websearch | claude-sonnet-5 | yes | yes | 5 | 21674 | 467 | 121805 | 5384 | 149330 | 0.0816 | 18 | Anthropic (formally Anthropic, PBC) is an American artificial intelligence publi |
| wiki-person | oc-wiki | claude-sonnet-5 | yes | yes | 4 | 1107 | 240 | 84622 | 10673 | 96642 | 0.0630 | 9 | Dario Amodei co-founded Anthropic in 2021 (along with his sister Daniela Amodei) |
| wiki-person | webfetch | claude-sonnet-5 | yes | yes | 5 | 15896 | 441 | 121966 | 4961 | 143264 | 0.0640 | 14 | Dario Amodei co-founded Anthropic in 2021 and serves as its CEO. |
| wiki-person | websearch | claude-sonnet-5 | yes | yes | 5 | 21987 | 505 | 121736 | 5380 | 149608 | 0.0821 | 15 | Dario Amodei co-founded Anthropic in 2021 and serves as its CEO. Sources: - [Dar |
| wiki-fact-in-long-page | oc-wiki | claude-sonnet-5 | yes | yes | 4 | 1102 | 232 | 90156 | 5201 | 96691 | 0.0422 | 10 | The Eiffel Tower was completed in 1889, and with antennas it stands 330 m (1,083 |
| wiki-fact-in-long-page | webfetch | claude-sonnet-5 | yes | yes | 5 | 33446 | 467 | 121953 | 4994 | 160860 | 0.0818 | 14 | The Eiffel Tower was completed in 1889 and stands 330 metres (1,083 feet) tall i |
| wiki-fact-in-long-page | websearch | claude-haiku-4-5-20251001 | yes | yes | 6 | 49587 | 1105 | 154848 | 6669 | 212209 | 0.1352 | 24 | The Eiffel Tower was completed in 1889 and stands 330 metres (1,083 ft) tall inc |
| wiki-technical | oc-wiki | claude-sonnet-5 | yes | yes | 6 | 1102 | 321 | 155767 | 5610 | 162800 | 0.0579 | 15 | Wikipedia says the transformer architecture was introduced in the 2017 paper "At |
| wiki-technical | webfetch | claude-sonnet-5 | yes | yes | 5 | 33807 | 493 | 121952 | 5064 | 161316 | 0.0826 | 14 | "Attention Is All You Need" (published by Google researchers) introduced the tra |
| wiki-technical | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 12164 | 749 | 121740 | 5726 | 140379 | 0.0747 | 17 | "Attention Is All You Need" (2017) introduced the transformer architecture, acco |
| wiki-non-english | oc-wiki | claude-sonnet-5 | yes | yes | 4 | 1105 | 248 | 90206 | 5427 | 96986 | 0.0433 | 10 | According to the German Wikipedia article, Berlin's population (Einwohner) is 3, |
| wiki-non-english | webfetch | claude-sonnet-5 | yes | yes | 5 | 39264 | 410 | 121988 | 4938 | 166600 | 0.0871 | 14 | According to the German Wikipedia article, Berlin's population is 3,700,577 (as  |
| wiki-non-english | websearch | claude-sonnet-5 | yes | yes | 6 | 55019 | 1849 | 155306 | 7253 | 219427 | 0.1506 | 33 | According to the German Wikipedia article, Berlin had 3,700,577 inhabitants as o |

### Summary
| tool | model | success | correct | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-wiki | claude-sonnet-5 | 5/5 ✅ | 5/5 ✅ | 22 ✅ | 1255 ✅ | 549823 ✅ | 0.2692 ✅ | 11 ✅ |
| webfetch | claude-haiku-4-5-20251001 | 5/5 ✅ | 5/5 ✅ | 25 | 2503 | 766491 | 0.3727 | 14 |
| websearch | claude-sonnet-5 | 5/5 ✅ | 5/5 ✅ | 27 | 4675 | 870953 | 0.5243 | 22 |

Turns count every run, failures included; token and cost totals count successes only. The correct column grades the answer against the fact the task asked for. The ✅ marks the best value in each column among tools that answered every task correctly.

### What each tool actually cost, failures included
```
oc-wiki        #########################                  549,823 tokens  22 turns
webfetch       ###################################        766,491 tokens  25 turns
websearch      ########################################   870,953 tokens  27 turns
```
