| task | tool | model | ok | correct | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| py-json-sortkeys | oc-docs | claude-sonnet-5 | yes | yes | 5 | 1172 | 278 | 94713 | 11997 | 108160 | 0.0708 | 10 | The default value of `sort_keys` in `json.dumps` is `False`. |
| py-json-sortkeys | webfetch | claude-sonnet-5 | yes | yes | 5 | 11660 | 566 | 97911 | 5150 | 115287 | 0.0561 | 11 | The default value of `sort_keys` in `json.dumps` is `False`. |
| py-json-sortkeys | websearch | claude-sonnet-5 | yes | yes | 5 | 21927 | 486 | 97661 | 5434 | 125508 | 0.0771 | 12 | The default value of `sort_keys` is `False`. Sources: - [json — JSON encoder and |
| mdn-array-at | oc-docs | claude-sonnet-5 | yes | yes | 4 | 1180 | 225 | 72821 | 5549 | 79775 | 0.0401 | 7 | Given a negative index, `Array.prototype.at()` counts back from the end of the a |
| mdn-array-at | webfetch | claude-sonnet-5 | yes | yes | 5 | 8878 | 632 | 97971 | 5175 | 112656 | 0.0541 | 11 | With a negative index, `at()` counts back from the end of the array (i.e., acces |
| mdn-array-at | websearch | claude-sonnet-5 | yes | yes | 5 | 18272 | 773 | 97765 | 5852 | 122662 | 0.0771 | 14 | When given a negative index, `Array.prototype.at()` counts back from the last it |
| node-fs-rm | oc-docs | claude-sonnet-5 | yes | yes | 5 | 1175 | 290 | 99841 | 5852 | 107158 | 0.0474 | 9 | The `recursive` option must be set to `true`. |
| node-fs-rm | webfetch | claude-sonnet-5 | yes | yes | 5 | 34169 | 500 | 97889 | 5064 | 137622 | 0.0780 | 10 | The `recursive` option must be set to `true` for `fsPromises.rm` to remove a non |
| node-fs-rm | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 21925 | 735 | 97721 | 5660 | 126041 | 0.0795 | 13 | The `recursive` option must be set to `true` for `fsPromises.rm()` to remove a n |
| ruby-array-dig | oc-docs | claude-sonnet-5 | yes | yes | 6 | 1175 | 256 | 127349 | 6289 | 135069 | 0.0543 | 8 | It returns `nil`. |
| ruby-array-dig | webfetch | claude-sonnet-5 | yes | yes | 5 | 39614 | 465 | 97932 | 5048 | 143059 | 0.0831 | 12 | It returns nil. |
| ruby-array-dig | websearch | claude-sonnet-5 | yes | yes | 5 | 22941 | 585 | 97724 | 5550 | 126800 | 0.0792 | 16 | It returns `nil`. Sources: - [class Array - RDoc Documentation](https://docs.rub |
| go-json-dash-tag | oc-docs | claude-sonnet-5 | yes | yes | 5 | 1171 | 247 | 100037 | 6071 | 107526 | 0.0478 | 8 | A struct field tagged `json:"-"` is ignored entirely by the package and never ma |
| go-json-dash-tag | webfetch | claude-sonnet-5 | yes | yes | 5 | 31345 | 436 | 97922 | 4953 | 134656 | 0.0745 | 11 | The field is always omitted from the JSON output, regardless of its value (note: |
| go-json-dash-tag | websearch | claude-sonnet-5 | yes | yes | 5 | 21747 | 685 | 97714 | 5686 | 125832 | 0.0792 | 15 | The field is always omitted from the encoding, being treated as if it doesn't ex |
| rust-vec-pop | oc-docs | claude-sonnet-5 | yes | yes | 6 | 1187 | 398 | 127818 | 6336 | 135739 | 0.0560 | 12 | `Vec::pop` returns `Some(T)` containing the last element when the vector has ele |
| rust-vec-pop | webfetch | claude-sonnet-5 | yes | yes | 5 | 39569 | 564 | 97931 | 5174 | 143238 | 0.0842 | 14 | `Vec::pop` returns `Some(T)` with the last element when the vector has elements, |
| rust-vec-pop | websearch | claude-sonnet-5 | yes | yes | 5 | 21371 | 608 | 97759 | 5525 | 125263 | 0.0778 | 12 | `Vec::pop` returns `Some(last_element)` when the vector has elements, and `None` |
| java-optional-get | oc-docs | claude-sonnet-5 | yes | yes | 7 | 1190 | 348 | 154558 | 6150 | 162246 | 0.0601 | 11 | `java.util.NoSuchElementException`. |
| java-optional-get | webfetch | claude-sonnet-5 | yes | yes | 5 | 9088 | 433 | 97963 | 4982 | 112466 | 0.0524 | 10 | `Optional.get()` throws `java.util.NoSuchElementException` when no value is pres |
| java-optional-get | websearch | claude-sonnet-5 | yes | yes | 5 | 19187 | 695 | 97751 | 5760 | 123393 | 0.0771 | 14 | `Optional.get()` throws `NoSuchElementException` when no value is present. Sourc |
| php-array-filter-keys | oc-docs | claude-sonnet-5 | yes | yes | 4 | 1173 | 208 | 72767 | 5542 | 79690 | 0.0399 | 7 | array_filter preserves the original (including non-consecutive) keys of the arra |
| php-array-filter-keys | webfetch | claude-haiku-4-5-20251001 | yes | yes | 5 | 8606 | 655 | 97916 | 5210 | 112387 | 0.0539 | 13 | array_filter preserves the original keys (including numeric ones, which can leav |
| php-array-filter-keys | websearch | claude-sonnet-5 | yes | yes | 5 | 20217 | 617 | 97712 | 5459 | 124005 | 0.0764 | 14 | array_filter preserves the original keys of the array (may leave gaps in numeric |
| ts-partial | oc-docs | claude-sonnet-5 | yes | yes | 6 | 1181 | 383 | 127674 | 6286 | 135524 | 0.0556 | 9 | It constructs a type with all properties of Type set to optional. |
| ts-partial | webfetch | claude-sonnet-5 | yes | yes | 5 | 18497 | 587 | 97948 | 5201 | 122233 | 0.0634 | 14 | Partial<Type> constructs a type with all properties of Type set to optional. |
| ts-partial | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 18334 | 725 | 97734 | 5685 | 122478 | 0.0760 | 13 | `Partial<Type>` constructs a type with all properties of `Type` set to optional. |
| cpp-vector-at | oc-docs | claude-sonnet-5 | yes | yes | 4 | 1172 | 185 | 72765 | 7001 | 81123 | 0.0455 | 6 | `std::vector::at` throws `std::out_of_range` when `pos >= size()`. |
| cpp-vector-at | webfetch | claude-sonnet-5 | yes | NO | 6 | 1027 | 524 | 124407 | 5211 | 131169 | 0.0519 | 13 | WebFetch failed with HTTP 403 Forbidden on cppreference.com for both URL variant |
| cpp-vector-at | websearch | claude-sonnet-5 | yes | yes | 5 | 16855 | 718 | 97700 | 5450 | 120723 | 0.0738 | 19 | `std::vector::at` throws `std::out_of_range` when the requested index is not wit |
| dotnet-isnullorwhitespace | oc-docs | claude-sonnet-5 | yes | yes | 4 | 1191 | 150 | 72801 | 6409 | 80551 | 0.0428 | 6 | It returns `true`. |
| dotnet-isnullorwhitespace | webfetch | claude-sonnet-5 | yes | yes | 5 | 1044 | 353 | 98010 | 8878 | 108285 | 0.0596 | 9 | `String.IsNullOrWhiteSpace` returns `true` for a string that consists only of wh |
| dotnet-isnullorwhitespace | websearch | claude-haiku-4-5-20251001 | yes | yes | 5 | 13057 | 822 | 97790 | 6292 | 117961 | 0.0738 | 16 | `String.IsNullOrWhiteSpace` returns `true` for a string that consists only of wh |

### Summary
| tool | model | success | correct | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-docs | claude-sonnet-5 | 11/11 ✅ | 11/11 ✅ | 56 | 2968 ✅ | 1212561 ✅ | 0.5605 ✅ | 8 ✅ |
| webfetch | claude-sonnet-5 | 11/11 | 10/11 | 56 | 5715 | 1373058 | 0.7112 | 12 |
| websearch | claude-sonnet-5 | 11/11 ✅ | 11/11 ✅ | 55 ✅ | 7449 | 1360666 | 0.8470 | 14 |

Turns count every run, failures included; token and cost totals count successes only. The correct column grades the answer against the fact the task asked for. The ✅ marks the best value in each column among tools that answered every task correctly.

### What each tool actually cost, failures included
```
oc-docs        ###################################       1,212,561 tokens  56 turns
webfetch       ########################################  1,373,058 tokens  56 turns
websearch      ########################################  1,360,666 tokens  55 turns
```
