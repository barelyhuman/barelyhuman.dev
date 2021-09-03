---
title: Log[1]/statico
published: true
date: 14/06/2021
---

Released a base version of statico and moved it out of the beta versions. There's no change to the actual feature-set, this was done so I could have the 3 sites that use statico to build themselves use [gobinaries.com](https://gobinaries.com/) instead of the curl scripts that I have in place as it is comparatively faster and caches the builds so the deploy time remains almost the same (10 seconds) after the initial run which is about (20 seconds) which isn't a huge amount of time to build websites like [reaper.im](https://reaper.im), [barelyhuman.dev](https://barelyhuman.dev) and [rlayouts.reaper.im](https://rlayouts.reaper.im/) , this is considering the total time something like vercel takes to setup the build environment and upload the changes to the required CDN instances. Locally this should take you more than a second or so.
