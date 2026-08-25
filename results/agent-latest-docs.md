| task | tool | model | ok | correct | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| py-json-sortkeys | oc-docs | claude-sonnet-5 | yes | yes | 5 | 1172 | 299 | 127173 | 3294 | 131938 | 0.0427 | 10 | The default value of `sort_keys` in `json.dumps` is `False`. |
| py-json-sortkeys | webfetch | claude-sonnet-5 | yes | yes | 5 | 11660 | 538 | 121636 | 5115 | 138949 | 0.0606 | 10 | The default value of `sort_keys` for `json.dumps` is `False`. |
| py-json-sortkeys | websearch | claude-sonnet-5 | yes | yes | 5 | 21639 | 514 | 121382 | 5438 | 148973 | 0.0818 | 15 | The default value of `sort_keys` is `False`. Sources: - [JSON encoder and decode |
| mdn-array-at | oc-docs | claude-sonnet-5 | yes | yes | 4 | 1180 | 233 | 90618 | 5539 | 97570 | 0.0437 | 7 | With a negative index, `Array.prototype.at` counts back from the end of the arra |
| mdn-array-at | webfetch | claude-haiku-4-5-20251001 | yes | yes | 5 | 8878 | 647 | 121652 | 5193 | 136370 | 0.0588 | 15 | For a negative index, `Array.prototype.at()` counts back from the end of the arr |
| mdn-array-at | websearch | claude-sonnet-5 | yes | yes | 5 | 17271 | 719 | 121476 | 5700 | 145166 | 0.0800 | 15 | When given a negative index, `Array.prototype.at()` counts back from the last it |
| node-fs-rm | oc-docs | claude-sonnet-5 | yes | yes | 6 | 1177 | 371 | 157063 | 6361 | 164972 | 0.0617 | 12 | The `recursive` option must be set to `true`. |
| node-fs-rm | webfetch | claude-sonnet-5 | yes | yes | 5 | 34167 | 622 | 121654 | 5201 | 161644 | 0.0840 | 12 | The `recursive` option must be set to `true` for `fsPromises.rm` to remove a non |
| node-fs-rm | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 13880 | 716 | 121454 | 5597 | 141647 | 0.0757 | 13 | The `recursive` option must be set to `true` for `fsPromises.rm` to remove a non |
| ruby-array-dig | oc-docs | claude-sonnet-5 | yes | yes | 6 | 1175 | 290 | 156876 | 6213 | 164554 | 0.0602 | 10 | `Array#dig` returns `nil` if any intermediate step is `nil`. |
| ruby-array-dig | webfetch | claude-sonnet-5 | yes | yes | 5 | 39613 | 422 | 121613 | 4984 | 166632 | 0.0874 | 11 | Array#dig returns nil if any intermediate step is nil. |
| ruby-array-dig | websearch | claude-sonnet-5 | yes | yes | 5 | 20430 | 576 | 121445 | 5530 | 147981 | 0.0814 | 13 | It returns `nil`. Sources: - [class Array - Documentation for Ruby 3.4](https:// |
| go-json-dash-tag | oc-docs | claude-sonnet-5 | yes | yes | 5 | 1171 | 223 | 123721 | 6344 | 131459 | 0.0535 | 10 | A field with a json tag of "-" is always omitted from the marshaled output (the  |
| go-json-dash-tag | webfetch | claude-sonnet-5 | yes | yes | 5 | 31338 | 413 | 121651 | 4947 | 158349 | 0.0790 | 13 | The field is always omitted from the JSON encoding, regardless of its value. |
| go-json-dash-tag | websearch | claude-sonnet-5 | yes | yes | 5 | 20359 | 608 | 121439 | 5624 | 148030 | 0.0820 | 19 | A struct field tagged `json:"-"` is always omitted from the JSON output during m |
| rust-vec-pop | oc-docs | claude-sonnet-5 | yes | yes | 6 | 1187 | 304 | 157335 | 6224 | 165050 | 0.0605 | 10 | `Vec::pop` returns `Some(T)` containing the last element when the vector has ele |
| rust-vec-pop | webfetch | claude-sonnet-5 | yes | yes | 5 | 39569 | 591 | 121698 | 5192 | 167050 | 0.0893 | 12 | `Vec::pop` returns `Some(T)` with the last element when the vector has elements, |
| rust-vec-pop | websearch | claude-sonnet-5 | yes | yes | 5 | 22787 | 641 | 121484 | 5521 | 150433 | 0.0842 | 17 | `Vec::pop` returns `Some(T)` containing the last element (removing it from the v |
| java-optional-get | oc-docs | claude-sonnet-5 | yes | yes | 5 | 1186 | 242 | 123614 | 5773 | 130815 | 0.0514 | 10 | `Optional.get` throws `java.util.NoSuchElementException` when no value is presen |
| java-optional-get | webfetch | claude-sonnet-5 | yes | yes | 5 | 9090 | 471 | 121694 | 5023 | 136278 | 0.0575 | 11 | `Optional.get()` throws `java.util.NoSuchElementException` when no value is pres |
| java-optional-get | websearch | claude-sonnet-5 | yes | yes | 5 | 21737 | 585 | 121472 | 5612 | 149406 | 0.0832 | 11 | `Optional.get` throws `NoSuchElementException` if no value is present. Sources:  |
| php-array-filter-keys | oc-docs | claude-sonnet-5 | yes | yes | 4 | 1173 | 181 | 90560 | 5507 | 97421 | 0.0431 | 7 | array_filter preserves the original array keys (which can leave gaps in indexed  |
| php-array-filter-keys | webfetch | claude-sonnet-5 | yes | yes | 5 | 8604 | 662 | 121645 | 5239 | 136150 | 0.0589 | 13 | array_filter preserves the original (including numeric) keys rather than reindex |
| php-array-filter-keys | websearch | claude-sonnet-5 | yes | yes | 5 | 20519 | 630 | 121429 | 5461 | 148039 | 0.0815 | 16 | `array_filter` preserves the original keys (which may leave gaps in numeric indi |
| ts-partial | oc-docs | claude-sonnet-5 | yes | yes | 6 | 1181 | 293 | 157322 | 6298 | 165094 | 0.0607 | 9 | Partial<Type> constructs a type with all properties of Type set to optional, rep |
| ts-partial | webfetch | claude-sonnet-5 | yes | yes | 5 | 18501 | 504 | 121669 | 5071 | 145745 | 0.0672 | 10 | `Partial<Type>` constructs a type with all properties of `Type` set to optional. |
| ts-partial | websearch | claude-sonnet-5 | yes | yes | 5 | 21328 | 564 | 121457 | 5518 | 148867 | 0.0823 | 14 | `Partial<Type>` constructs a type with all properties of `Type` set to optional. |
| cpp-vector-at | oc-docs | claude-sonnet-5 | yes | yes | 4 | 1172 | 173 | 90553 | 7015 | 98913 | 0.0490 | 8 | std::vector::at throws std::out_of_range when pos >= size(). |
| cpp-vector-at | webfetch | claude-sonnet-5 | yes | NO | 5 | 1025 | 330 | 124721 | 1791 | 127867 | 0.0364 | 10 | WebFetch failed with HTTP 403 Forbidden for that URL, so I can't retrieve the pa |
| cpp-vector-at | websearch | claude-sonnet-5 | yes | yes | 5 | 17704 | 465 | 121413 | 5285 | 144867 | 0.0772 | 13 | `std::vector::at` throws `std::out_of_range` when the index is out of range. Sou |
| dotnet-isnullorwhitespace | oc-docs | claude-sonnet-5 | yes | yes | 4 | 1191 | 175 | 90618 | 6425 | 98409 | 0.0467 | 7 | It returns `true`. |
| dotnet-isnullorwhitespace | webfetch | claude-sonnet-5 | yes | yes | 5 | 1044 | 356 | 121731 | 8869 | 132000 | 0.0643 | 8 | `String.IsNullOrWhiteSpace` returns `true` for a string that consists exclusivel |
| dotnet-isnullorwhitespace | websearch | claude-sonnet-5 | yes | yes | 5 | 12128 | 723 | 121503 | 6111 | 140465 | 0.0765 | 14 | `String.IsNullOrWhiteSpace` returns `true` for a string consisting exclusively o |

### Summary
| tool | model | success | correct | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-docs | claude-sonnet-5 | 11/11 ✅ | 11/11 ✅ | 55 ✅ | 2784 ✅ | 1446195 ✅ | 0.5731 ✅ | 9 ✅ |
| webfetch | claude-sonnet-5 | 11/11 | 10/11 | 55 | 5556 | 1607034 | 0.7434 | 11 |
| websearch | claude-sonnet-5 | 11/11 ✅ | 11/11 ✅ | 55 ✅ | 6741 | 1613874 | 0.8857 | 15 |

Turns count every run, failures included; token and cost totals count successes only. The correct column grades the answer against the fact the task asked for. The ✅ marks the best value in each column among tools that answered every task correctly.

### What each tool actually cost, failures included
```
oc-docs        ####################################      1,446,195 tokens  55 turns
webfetch       ########################################  1,607,034 tokens  55 turns
websearch      ########################################  1,613,874 tokens  55 turns
```
