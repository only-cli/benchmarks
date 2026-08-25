| task | tool | model | ok | correct | turns | in | out | cache read | cache write | total tokens | cost USD | s | answer |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| py-json-sortkeys | oc-docs | gpt-5.6-sol | yes | yes | 6 | 26067 | 496 | 58112 | 0 | 84675 |  | 24 | The default value of `sort_keys` is `False`. |
| py-json-sortkeys | websearch | gpt-5.6-sol | yes | yes | 2 | 17636 | 100 | 13056 | 0 | 30792 |  | 10 | The default value of `sort_keys` is `False`. |
| mdn-array-at | oc-docs | gpt-5.6-sol | yes | yes | 2 | 15873 | 172 | 13056 | 0 | 29101 |  | 10 | It returns the element counted back from the end of the array (`index + array.le |
| mdn-array-at | websearch | gpt-5.6-sol | yes | yes | 2 | 7682 | 130 | 23040 | 0 | 30852 |  | 12 | It returns the array element found by counting backward from the end, or `undefi |
| node-fs-rm | oc-docs | gpt-5.6-sol | yes | yes | 4 | 18521 | 397 | 30976 | 0 | 49894 |  | 19 | The `recursive` option must be set to `true`. |
| node-fs-rm | websearch | gpt-5.6-sol | yes | yes | 2 | 7783 | 110 | 23040 | 0 | 30933 |  | 9 | The `recursive` option must be set to `true`. |
| ruby-array-dig | oc-docs | gpt-5.6-sol | yes | yes | 4 | 6168 | 437 | 39168 | 0 | 45773 |  | 23 | Array#dig returns `nil` when an intermediate step is `nil`. |
| ruby-array-dig | websearch | gpt-5.6-sol | yes | yes | 2 | 7503 | 110 | 23040 | 0 | 30653 |  | 10 | Array#dig returns `nil` when an intermediate step is `nil`. |
| go-json-dash-tag | oc-docs | gpt-5.6-sol | yes | yes | 4 | 12425 | 379 | 34048 | 0 | 46852 |  | 14 | A struct field whose `json` tag is `"-"` is always omitted when marshaling. |
| go-json-dash-tag | websearch | gpt-5.6-sol | yes | yes | 3 | 11600 | 262 | 33024 | 0 | 44886 |  | 14 | The field is always omitted from the JSON output when marshaling. |
| rust-vec-pop | oc-docs | gpt-5.6-sol | yes | yes | 4 | 7594 | 430 | 37120 | 0 | 45144 |  | 26 | `Vec::pop` returns `Some(last_element)` when the vector has elements, and `None` |
| rust-vec-pop | websearch | gpt-5.6-sol | yes | yes | 2 | 17496 | 257 | 45312 | 0 | 63065 |  | 14 | `Vec::pop` returns `Some(last_element)` when nonempty and `None` when empty. |
| java-optional-get | oc-docs | gpt-5.6-sol | yes | yes | 3 | 15273 | 389 | 29952 | 0 | 45614 |  | 17 | `Optional.get()` throws `NoSuchElementException` when no value is present. |
| java-optional-get | websearch | gpt-5.6-sol | yes | yes | 2 | 7848 | 132 | 23040 | 0 | 31020 |  | 10 | `Optional.get()` throws `NoSuchElementException` when no value is present. |
| php-array-filter-keys | oc-docs | gpt-5.6-sol | yes | yes | 3 | 15829 | 159 | 13056 | 0 | 29044 |  | 20 | `array_filter()` preserves keys; it does not reindex them. |
| php-array-filter-keys | websearch | gpt-5.6-sol | yes | yes | 3 | 11705 | 174 | 40192 | 0 | 52071 |  | 15 | `array_filter` preserves the original keys; it does not reindex them. |
| ts-partial | oc-docs | gpt-5.6-sol | yes | yes | 4 | 18399 | 410 | 26880 | 0 | 45689 |  | 25 | `Partial<Type>` makes all properties of `Type` optional. |
| ts-partial | websearch | gpt-5.6-sol | yes | yes | 2 | 5372 | 117 | 25088 | 0 | 30577 |  | 10 | `Partial<Type>` constructs a type in which all properties of `Type` are optional |
| cpp-vector-at | oc-docs | gpt-5.6-sol | yes | yes | 2 | 3903 | 156 | 26112 | 0 | 30171 |  | 10 | `std::vector::at` throws `std::out_of_range`. |
| cpp-vector-at | websearch | gpt-5.6-sol | yes | yes | 2 | 11653 | 114 | 18944 | 0 | 30711 |  | 10 | `std::vector::at` throws `std::out_of_range` when the index is out of range. |
| dotnet-isnullorwhitespace | oc-docs | gpt-5.6-sol | yes | yes | 3 | 15648 | 199 | 13824 | 0 | 29671 |  | 10 | It returns `true`. |
| dotnet-isnullorwhitespace | websearch | gpt-5.6-sol | yes | yes | 2 | 10683 | 101 | 19968 | 0 | 30752 |  | 8 | It returns `true`. |

### Summary
| tool | model | success | correct | turns | output tokens | total tokens | total cost USD | avg s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| oc-docs | gpt-5.6-sol | 11/11 ✅ | 11/11 ✅ | 39 | 3624 | 481628 |  | 18 |
| webfetch | sonnet | 0/0 ✅ |  | 0 ✅ | 0 ✅ | 0 ✅ |  | NaN |
| websearch | gpt-5.6-sol | 11/11 ✅ | 11/11 ✅ | 24 | 1607 | 406312 |  | 11 |

Turns count every run, failures included; token and cost totals count successes only. The correct column grades the answer against the fact the task asked for. The ✅ marks the best value in each column among tools that answered every task correctly.

### What each tool actually cost, failures included
```
oc-docs        ########################################   481,628 tokens  39 turns
webfetch       #                                                0 tokens   0 turns
websearch      ##################################         406,312 tokens  24 turns
```
