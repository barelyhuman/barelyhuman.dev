---
title: Devlog
published: true
date: 22/07/2021
---

### React Native Template

I have an [rnboiler](github.com/barelyhuman/rnboiler) repo that I normally use to bootstrap a react native project but that's old news since https://callstack.com/ releases a new iteration of Haul, I mean the announced it a few weeks back but it was still not released as a package for people to use.

Anyway, it's out now and I had to write a react native template for the same so I did. We now have a new template that you can use for bootstrapping your react-native app and this is what the boilerplate includes

- [Sustained](https://zustand.surge.sh/) for state management
- [Re.pack](https://github.com/callstack/repack) for building and bundling the app (fully configured)
- [React Native Paper](https://callstack.github.io/react-native-paper/) as the UI Library , Material Design right off the bat and the vector icons are already setup for you, you can read the template readme to understand how to enable all the icon fonts

And that's about it.

_"What!? Just 3 things were added?"_ Yeah, I don't like a bulky boilerplate, it has the bare minimum to start and get productive without pulling you down, I should probably add SVG support since that's something that most projects need anyway.

**How do I get this template?**

1 command

```sh
$ npx react-native init NewApp --template react-native-zustand-repack
```

that should take care of setting it up for you, obviously change the `NewApp` with whatever you want the app to be named.

### Hen

Hen, the React Native Playground got a major upgrade and is now an ESM supported playground.

Basically, it allows you to use cdn providers like [esm.sh](https://esm.sh/) to import modules and use it in the component you are building.

It was also made a little more performant by moving the transform and formatting to the serverless functions thus not blocking the editor when doing either and can have better error handling later on. The url is still the same so you can check that out and you'll see it

https://hen.reaper.im - for people who don't know about it

### Statico

The SSG that this website and reaper.im runs on had minor fixes made for the watch mode and minor cleanup of the code and the binaries are now available for people to use as well, check that out on https://github.com/barelyhuman/statico/releases

### Taco

Taco had a few local design changes and that hasn't been deployed, will be up this weekend and as promised will be on the live site for everyone to try and give early feedback on.

That's about it for the weekend, I did contribute a few additions to a few projects but nothing else.
