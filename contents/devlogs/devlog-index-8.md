---
title: devlog[8]
date: 27/09/2021
published: true
image_url: https://og.reaper.im/api?fontSize=14&title=devlog-8&subtitle=barelyhuman&fontSizeTwo=8&color=%23000&backgroundImageURL=https%3A%2F%2Freaper.im%2Fassets%2Fog-post-background.png
---

Another week passes by and we're already close to October, like slow down a little!

Getting back to work and development cause that's all I do....

Saturday was fun, woke up around 2 PM and then just sat on my bed thinking about what to do, and then it was somehow already 4. Then I just jumped onto one of the projects that's been waiting to get simple additions to itself.

### Statico

If no one remembers what statico is then it's fine, I haven't talked about it in weeks / months / I don't really know...
The cli was built as an MVP concept of working with Go Templates and Markdown to build simple and quick static websites, example the blog you are reading this on.

- The obvious improvements one could make was to add a http server to the cli so I don't have to use other tools to handle something so simple, **so we added that**
- The other addition would be let people decide what they call their config cause `config.yml` is just to generic and could overlap with other tools, **so that was added as well**

What's left?

Oh yeah, Not everyone understands go templates and would just like to have something up really quick so I created a [template](https://github.com/barelyhuman/statico-default-template) repository that you can use to just get started with. It's simple enough to work with and can be modified to be more complex if you'd like it to be.

### TWUI

Last weekend I talked about starting a simple React UI Library for TillWhen and this weekend we actually styled the library instead of just create generic elements, wasn't able to add a lot of components cause I nitpick while doing design work and so I was just able to spend enough time to make the existing one's look decent.

You can check them out [here](https://twui.barelyhuman.dev/)

it is open source and is using [stone](https://github.com/barelyhuman/stone) as the theme manager because that's the best way to find what I can improve in stone. For now it's going to be the alias management, cause that's a little wonky right now

### Taco

The star of my life for now since I'm trying to stay committed to completing this properly, the [alpha instance](https://alpha.tacotasks.co) now has improved UI for a lot of things.

Specifically the things that were changed / added were with respect to the **Research Trails**

- Project Trails are more consistent
- Can filter trails by Project
- The URLs for each are copyable and you can share them team members
- Searching of Trail notes is now possible

and the other non visual improvements include

- Addition of tables for handling subscriptions
- Tests for razorpay subscription were added

The plan for next weekend is to get done with the subscription and re-test the invitation flow enough times to make sure people don't have any hiccups while collaborating.

### Minor stuff

- Fixed a bug in [eslint-plugin-valtio](https://github.com/pmndrs/eslint-plugin-valtio/)
