---
title: devlog[12]
published: true
date: 23/11/2021
---

As the lazy guy that I am, I've had a lot of issues that I created on my Github and left them as `Help needed` , `good first issue`, hoping that someone would pick them up since they were actually really simple issues but due to the lack of fame, that didn't happen.

Which, leads to the update content for this weeked.

## New Additions

### react-async

First up is [`react-async` ](https://github.com/barelyhuman/react-async) as simple hook wrapper to handle async functions. Now the straight up question when this is presented or shared with people is that why don't you use `react-query` or `swr` from Vercel?

Well, I've already written about it [here](https://reaper.im/posts/working-with-async-code-in-react.html)

## Updates

Getting back to our older projects that got updates this weekend

### mark

The very editor that this post was written on can now export to PDF and Images and while they are basically close to unusable since there's no style additions, it's finally done, you can use them to generate system styled PDF's so should suffice most cases but I like my PDF's aesthetic so I'll be working on making the styles work, next week.

### og-image

Closed a few older issues of code clean and adding background image option to the cli, the docs were updated for the same and the web version [og.reaper.im](https://og.reaper.im) now uses the latest version to do the same

### hen

Minor code refactor that was needed to avoid having to create a AST every 2 steps in the transform code, which was working fine for smaller snippets but would break due to the vercel limitation of 10 second responses when working with large components (which i don't why I was rendering directly in the browser in the first place) but that's been sorted for a bit. I can still optimize it more and will be doing that as soon as I get time

### tocolor

The hex manipulating color library had no code modifications but finally got a release for the changes I made a while back and were being tested in my side projects and after enough dogfooding , since it seems to be working and the tests in the project also say the same, I had to create a new release.
