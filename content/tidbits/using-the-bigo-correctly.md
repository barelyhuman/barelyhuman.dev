---
title: Using the BigO correctly
date: 11/09/2024
tags: tidbit, performance
---

A lot of developers compare their perf by using the BigO notation but use it
wrong when working with languages that do a lot of things internally.

For example:  
If I take JS string comparision, the code would look like so

```js
'123' == '123'
```

If I asked you about the BigO for this, a few developers would say it's `O(1)`
since it's a static compare but it reality it's `O(N)` where `N` is the length
of the longer string because the engine internally has to compare each character
separately. This is because the internal engine is based on C and `strcmp` is
used when the above expression is evaluated.

On the other hand, if the same was done with numbers it'd be O(1) because that's
a truly static operation for C

```js
21 = 1
```

This is a very simple example but enough to explain the difference between high
level and low level languages and how the complexity notations are to be
computed when working with high level languages.
