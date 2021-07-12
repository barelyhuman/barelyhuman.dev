---
title: Devlog
date: 12/07/2021
published: true
---

I've tried the per project log approach and it didn't really click, so I'm going to keep doing single development logs.
Let's get to it.

## Major Updates

### Taco

As promised the Team API's were done by Monday and were added so you could now view and invite people to your team. But just that alone wouldn't help so we were done with the assignment of tasks to team members yesterday and that's up on the alpha url as well.

The next thing is to make sure the email restrictions I have right now to be removed and move this to the live instance so people can finally start creating their own accounts, if all goes well, this should be up by next Monday and you will be able to move ahead and use the app as intended.

Things that I'm - reconsidering it the todo design , since the movement of element from one list to the other gives a glitchy feeling and that's something I think I'll change, not sure right now, but definitely something I'm reconsidering.

## Minor Updates

### commitlog

Commitlog got in stability fixes and another patch release to handle version management and logs better.

### date-utils

I started a new mini project that would have basic date utilities that I can use around my other projects, it's not a very complex set of utils but just enough for day to day development use, for over the top features you always have libraries like [date-fns](https://date-fns.org/).

### utils

A collection of mini utilities that I write, not available as a package but more as snippets. I added an availability range implementation into the same for a simple implementation of how you can use availability ranges in javascript.
This was also added to [snips.reaper.im](https://snips.reaper.im) in case someone would like to copy it quickly sometime in the future.

### statico

Statico got it's watch folders feature a few weeks back and that was missing a few folders (like the templates and public assets), these folders were also added to the watcher list and now it'll recompile on changes to them as well, though there's a small issue, watcher works but a certain set of errors aren't shown during the watch phase and only show up when you run `statico` in build mode, which needs to be addressed
