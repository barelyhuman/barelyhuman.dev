---
title: devlog[10]
published: true
date: 11/10/2021
image_url: https://og.reaper.im/api?fontSize=14&title=devlog%5B10%5D&subtitle=Weekend+Updates&fontSizeTwo=8&color=%23333&backgroundImageURL=https%3A%2F%2Freaper.im%2Fassets%2Fog-post-background.png
---

Didn't see many pushes and releases this week did you?
That's cause I didn't make any. I was too busy researching the babel parser and traverser the last 2 days that I made close to no progress on other tools.

Which is totally fine, but here's the updates on what's going on.

## Stone

For those who don't know, stone is a CSS-in-JS library and you can read all about it on [Stone Documentation](https://stone.reaper.im).
So, there's a functionality that was to be added to stone that would generate CSS files for you and I was going to do that with Babel and while I've worked with ASTs(Abstract Syntax Tree) before, I ended up having to research babel's implementation for this since they add a lot of helper functions that could make it easier to implement the plugin.

It kinda did too, the only issue is that I was able to get static variables to evaluate to proper values but I wasn't able to do it for functional parameters.
What I mean is

```js
const padding = theme.alias.small.value();

css`
  padding: ${padding};
`;
```

Would turn out to be

```js
const padding = "10px";

css`
  padding: 10px;
`;
```

and then I could take the input inside `css` template literal and use the static generated css to create a `.css` file, but then the below doesn't work

```js
css`
  padding: ${(theme) => theme.alias.small.value()};
`;
```

I wasn't able to get this to evaluate directly from babel's traverser and now I'm looking at alternative ways to accomplish this.

1. Replace the function definition with a placeholder like `theme-alias-small` and then during the 2nd parse of this while creating the css file replace the placeholder values with the values in the theme definition. Which is going to make the plugin a little slower and then your dev environment get's slower, which I don't want to do but then this is one option.

2. Consider doing 1. but instead of a babel-plugin , i add it to the `stone-cli` so that it can watch but then that's heavy on lower end computers so I have to rethink that as well.

3. Discard the idea of using functions inside `css` template literal, which beats the point of building a new css-in-js library altogether.

So, most probably 1 and 2 is what we'll be doing but it's a good amount of work since there's going to be a lot of error handlers and workers that need to make sure you don't do any more than use the theme inside the template literal. Which , I understand is limiting the user of basic functionality but unless I make the base handler for functions it makes no sense to give them full liberty because then I'll have to handle each form of mutation that they might do inside the function.

## Taco

Taco isn't a research oriented project so there's not much exciting going on right now but I made a few bug fixes on the live version.

1. Searching `notes` in the command palette shows the `research trail` as an option
2. Research Trails now handle line breaks better so, you get back what you types in the initial textarea (I didn't know I didn't add handling for that), added that now.

### Subscription and Plans

In local development changes we are almost done with the subscription handling, I just need to confirm a few things with RazorPay and based on that confirmation I need to modify the UI.

It's about their `subscription.completed` status. That status basically means that all payments of the given subscription are done and the user's subscription is over, but then there's no way to renew the subscription so based on theory, I will have to raise a new subscription request every , let's say 6 months or 12 months and then the user can cancel at any given point during that 12 month subscription but then post 12 months he/she/they would have to re-request a subscription, or I have to run a cron for the same.

Now the doubt is, do they automatically handle the renewal process, if yes, then I don't do any of the above. If not, then well, we have to add more work and then the invoices page will have to categorise based on your subscription period, so all your 2021 subscription payment invoices would be in one selection and 2022 separately and so on.

I could actually just let it go without a cron since if no user joins, I add in handling for things that aren't needed so that's also there.

That's basically what I did for the past 2 days, I need longer than 2 days to make significant changes...
