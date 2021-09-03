---
title: Log[1] / Taco
date: 24/05/2021
published: true
---

It's been a super productive week and weekend both in terms of work and stuff I learned over the week while going through a lot of articles and setups, we'll discuss over a few things over the course of the next few posts.

Let's get back to the dev log

## Taco Datepicker

We'll start with the datepicker, on the previous log I talked about the progress on Taco and everything and the datepicker was picked from TillWhen's implementation and while it suffices the base requirement for an Alpha project the codebase is very hacky cause built it too quickly.

Anyway, had to create a better and cleaner version both in terms of design and code so I picked this up and probably the first time I've worked after office hours on something and not felt lazy.

Anyway, this is now a separate repository on my [Github](https://github.com/barelyhuman/taco-datepicker) and while I plan to release the whole Taco-UI as a package, for now we're going to keep the taco datepicker as the only one available to public because the rest of the components are pretty unstable and I wouldn't want people experiencing issues the moment they start using it.

## Taco

Next up is the actual product, Taco, in terms of update, I most spent time working on ways to make the mono repo work with the deployment process and avoid having to create docker images for every small change. Have a process in place, let me know if you'd like to know about the deployment process and setup.

For now, the alpha servers that I planned to release on 1st of June are up and usable with a testing account for now, you can create your own account but the feature set isn't complete and a lot of things are disabled by default since **it is a testing instance** , you're better off waiting till 1st for me to make the instance usable and after 2-3 weeks of monitoring on that instance is when I'll be launching it properly.

Hopefully, it beats TillWhen...

Adios!
