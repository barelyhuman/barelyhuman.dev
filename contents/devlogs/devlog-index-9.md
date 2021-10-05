---
title: devlog[9]
published: true
date: 05/10/2021
image_url: https://og.reaper.im/api?fontSize=14&title=devlog+%5B9%5D&fontSizeTwo=8&color=%23666&backgroundImageURL=https%3A%2F%2Freaper.im%2Fassets%2Fog-post-background.png
---

Ahoy readers!

No, i'm not high on oxygen. I'm just excited about 3 projects that i'm working on right now extensively.

## Statico

The first one is what this site (https://barelyhuman.dev), https://reaper.im and a few other documentation sites I wrote are built on. I finally spent time writing documentation for tools that need a little more work than just running the cli command (eg: commitlog ).

So, now you can host your own blogs and simple static websites using something as simple as markdown and a few modified go templates , I know hugo already does this but I didn't write hugo so I'm not going to promote hugo right now(It's a pretty good SSG though).

Basically, spent the weekend writing documentation for it and you can read it at [Statico Documentation](https://statico.reaper.im)

## Stone

The next one is a CSS-in-JS solution that I was working on every friday night and saturday for the past 2-3 weeks and is now usable with 2 of it's adaptors and I'm already working on creating the zero-runtime adaptor for it. This is a very ambitious project for someone to do alone with no contributors cause, I'm unknown in the developer community but it's fun to build so we are going to try to complete this!

Things that were done,

- I cleaned up a bit of the typescript code to remove any un-needed generics that would further complicate maintenance over time and so now I can move the codebase back to JS and just keep the `.d.ts` files and it should still provide all the intellisense for any editor that uses the ts-server for intellisense/autocompletion suggestions. Don't worry, I won't be moving it back to JS again, I'm just saying I could.

- The API was changed with regards to the above point and v1.0.0 was released with the currently working 2 adaptors and a partially working IO adaptor that I still am thinking on how best to implement it.

My thought process lead me to building a babel-plugin first and a cli parser that's independent of babel so that might just be what I do next, might change cause I might find a better alternative.

and obviously, documentation for the above can be found at [Stone Documentation](https://stone.reaper.im)

## Taco

Didn't work much on Taco last weekend but I was busy researching on the Taxation and Legality bindings of setting up something like this as an Individual in India, I was also looking for ways to use BuyMeACoffee as a transaction and payment manager but their API's would need a lot more hacking than what I could achieve with a normal Payment Gateway.

Current idea is to let Taco run just for India to begin with and not worry about all these legal bindings and then scale up later on, which seems like a good idea but I'm going to give it a good thought before I finalize on it.

The above ideation for taco is definitely in the category of overthinking stuff, but I'd prefer going slow this time than rushing the hell out of it and then regretting it later, it's an already saturated market, just making it "Made in India for India" wouldn't change the fact that bigger companies can build stuff like this in a month and a lot better than this and probably market the crap out of it.

... this is a devlog, why am I writing about my overthinking

That's all folks _looney toons end track playing in the background_

Adios!
