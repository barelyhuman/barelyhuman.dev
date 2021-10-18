---
title: devlog[11]
published: true
date: 18/10/2021
---

This weekend was long, cause we had a break for about 4 days due to Indian celebrations and that gave me enough time to work on things.

## Statico

Managed to add a hacky solution to get previous and next post meta data on Statico which is still unstable but is added to v0.0.7 and this was done since I am now using statico for documentation websites so I need the flow of the documentation. You can see this being used on statico's own documentation.

[Statico Docs](https://statico.reaper.im/docs)

## Stone

Stone's progressing but I'm starting to see the limitations of doing the manual arrow function evaluation and will have to find better solution where user's plan to add local variables to the template and it can't be easily evaluated by babel.

But, it works and the entire project is a WIP right now , so I can do such experiments, It's not a reliable library, yet.
As for additions, the babel plugin was improved and finally added specifiers so it wouldn't collide with other template literals. Also, the plugin supports using multiple `css` template literal functions in one single component / file and its imports will be added accordingly.

You might want to use this with Rollup + CSS plugins or a bundler that supports css imports since the babel plugin will add import statements to the file's calling the template literal

## Taco

Taco is up for review with Razorpay so I can add in subscription for people and that's basically what I worked on, got the payment subscription plans in check and possibly add a few plans that people can choose for and each plan would still give you the same features, but make it accessible for all budgets.

I did start working on the Open Startup part for Taco, which will give you the information of the number of users and the amount of revenue taco has generated.

That's about it and hopefully i'm able to accomplish more the next weekend.
