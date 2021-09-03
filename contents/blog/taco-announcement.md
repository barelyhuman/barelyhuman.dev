---
title: Announcing Taco
published: true
date: 01/06/2021
---

Nope, I didn't forget about the announcement , nor was I busy doing something else. I wanted it to be a release at night so I can sleep and wake up and not worry about it all day or obsessively checking my email for feedback.

**But night releases don't work!!**, I know.

I'm not Elon musk with millions of people waiting for my one line tweet

> Taco. It's up. check it on [https://alpha.taco.barelyhuman.dev](https://alpha.taco.barelyhuman.dev)

I'm reaper, I talk full paragraphs, even if I can't do that in real life... anyway

Oh by the way, if you do just plan on clicking the above link and going on a test run instead of reading the whole thing

```
Username: demo@reaper.im
Password: Demo@123
```

You won't be able to run the signup, I don't want people spamming the test server with accounts they won't use

## Taco

I'm going to answer a few questions regarding it and then you can go ahead and login with the test credentials to go through the alpha version.

### Why Build another project manager?

I've been on it for a while actually, I built [pending](https://pending.reaper.im) with the same thought and then never went ahead because then I'd be building what everyone else already has.

I'm not a kanban person, I prefer writing down notes and making checklists and marking them to manage my work.

I do have solutions for the checklists part which is [todo](https://todo.reaper.im) and the notes are just me noting down on paper or a tablet device , whatever is closer and it's worked well for years but then I write these notes here and there and never find them when I really need them and have to do stuff off of memory, this is where the idea of just building one for myself came into the picture and also where I accidentally discovered that Linear existed.

Now linear does everything I expect an issue manager to handle and I can use it in the way I intended to build Taco and drop taco as a project altogether but then there's no BarelyHuman in the picture at all.

To become an indie developer supported by people so I can live off of projects I wish to build, there has to be a starting point and/or project. Right?

TillWhen was the prototype or experimental product to see if I'd be able to get users without any significant marketing and what that count is going to be, then I'd add up other metrics to see what I can improve on it and once I saw the hypothetical data of what I could do with a full fledged focused project , I sat down and finalised the designs for Taco.

I could just copy everything from linear and call it a day but the point is to always learn and experiment with things so I sat down to experiment with micro-services for a full app while avoiding any data cloning to be involved and how would I deploy this.

I came up with a go backend and a decent deployment plan but then I threw that away, started again and we ended up with a simple mono repo with a single stateless backend and frontend and obviously the concerns of UI Components and Shared Logical helpers as the other packages in the repo.

Also ended up designing a few new components and I now have a base css that I use with basically everything.

But none of that answers the questions, **Why Project Manager?** , I could've built anything, why project manager? Simple reason being that I've built versions of it before and it wouldn't be hard to build it as a proper product. My mentality was to build something simple enough to attract at least a small group of people and something I've worked towards enough to be able to build it to a bigger proper project in case it worked out.

And so Taco,

The current announcement you are reading is basically for the first alpha release of the product and not an MVP release, the alpha basically means that there's features pending, there's things that are going to keep getting added to it and that's the whole reason you get access to a testing account and not an account of your own. This is to understand and get feedback from you about how things can be improved in the product , because what you see in the product at this stage is good enough for **me** to work with other than the notes part which I plan to add next weekend.

### Those are less features than what JIRA/ASANA/Linear/etc etc has!

You wouldn't be wrong in saying that.
My intention isn't to compete with any of the giants, they have teams, investors, other things that I might not even know off. Like most projects by me the first customer of the project is me and the only difference here is that I plan to make it a project where the customer isn't just a single user and hence the alpha stage release , so we carve out a product that's not just built on my thinking of the product.

### You are wasting time.

Maybe, maybe not. I was happy when TillWhen got 3 users, I was happy when it got 150, that doesn't change for me, I built it. That's all that mattered to me back then and matters to me right now. Commitlog got 50 stars on GitHub, that was my goal for the entire year, I got lucky when it hit that goal in about a month.

I've got a lot of time, 16 hours every weekend. I spend that on multiple projects, This is just another addition to the list of things I'm going to enjoy building

### What's special ?

Honestly, nothing during this release.

There's no USP (Unique Selling Point) , nothing that can get shark tank's attention.

**But** , just like every project by an indie developer, it's built to inspire more developers to build stuff on their own to learn, earn or maybe inspire more people.

> What's special about it for the consumers, genius.

Let's see, you get to run the feedback through an actual person instead of a chat bot, you get to request help regarding issues with the person who's actually developing it, the problems get checked by a human (Even if the name is barely human) and not through a 10 step issue validation process.

### And where do I send this feedback?

You can send this feedback on `ahoy@barelyhuman.dev` for the [reaper.im](https://reaper.im) fans or `me@barelyhuman.dev` for the people who'd like to be professional.

That's about it folks, hope you get through the app and like it, even in the shape that it is in right now.
