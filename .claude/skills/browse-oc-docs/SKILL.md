---
name: browse-oc-docs
description: Look things up in language documentation with the oc CLI, which renders pages as compact text with numbered actions and ships tuned shortcuts for the major language references. Use it to search and read Python, MDN, Node.js, Ruby, Go, Rust, Java, PHP, TypeScript, C/C++, and .NET docs in minimal tokens.
allowed-tools: Bash(oc:*)
---

# Language docs with oc

Shortcuts, which resolve to a URL and then render like any other page:

- `oc py library <module>` opens a Python standard library page (`oc py library json`); `oc py doc <path>` any other page under docs.python.org/3.
- `oc mdn js <page>` opens an MDN JavaScript reference page (`oc mdn js Array/at`); `oc mdn css <page>` and `oc mdn doc <path>` cover the rest of MDN.
- `oc node api <module>` opens a Node.js API page (`oc node api fs`).
- `oc ruby class <class>` opens a Ruby core class page (`oc ruby class Array`).
- `oc go pkg <path>` opens a package on pkg.go.dev (`oc go pkg encoding/json`).
- `oc rust std <path>` opens a Rust std page (`oc rust std vec/struct.Vec`); `oc rust doc <path>` anything else on doc.rust-lang.org.
- `oc java api <path>` opens a Java API page; the path starts with the module (`oc java api java.base/java/util/Optional`).
- `oc php fn <name>` jumps straight to a PHP function's manual page (`oc php fn array_filter`); `oc php doc <path>` any other manual page.
- `oc ts handbook <page>` opens a TypeScript handbook page (`oc ts handbook utility-types`).
- `oc cpp cpp <path>` opens a cppreference C++ page (`oc cpp cpp container/vector/at`); `oc cpp c <path>` the C pages.
- `oc learn dotnet <api>` opens a .NET API page (`oc learn dotnet system.string.isnullorwhitespace`).
- `oc <site> search <query>` searches that site's docs (`oc py search json dumps`) and lists results as a normal numbered page.

The generic commands work on whatever is open:

- `oc do <n>` follows the link behind number `[n]` on the page you just rendered. Following a search result is always `oc do <n>`, never a second command with a URL.
- `oc find <query>` prints every place a string appears on the page already open, one line per match with the number to read it by.
- `oc read <n>` prints the region at `[n]` in full: one block with its context, or a whole section when `[n]` is a heading.
- `oc next` prints the next ~500 tokens of the page already open, continuing where the last view stopped.
- `oc raw [url]` returns the whole page as distilled markdown. With no URL it uses the page already open.
- `oc open <url>` renders any URL, for when you have one already.

Tips:

- A view is capped at about 500 tokens. `... 164 more blocks (~7,100 tokens)` at the end is the price of the rest of the page.
- On a long reference page, `oc find <query>` then `oc read <n>` on the match is the cheapest way to one fact. Reach for `oc raw` only when you truly need the whole page.
- Numbers belong to the most recent page, so read the newest output before picking one.
- Quote URLs that contain `&` or `?`.
