---
title: Log[1]/wrap
published: true
date: 14/06/2021
---

I planned to write a bundler for a long time and I did write a browser sided bundler but then there's already so many out there and I didn't want to write something that just converted the required modules into a ast, converted it back to a map of modules and custom require function handling that.

Like, grunt in 2016 had plugins that did that, so I did write it to test if I was correct about it and if I could make it work, and I did make it work but then that was too easy so I moved to building something I normally need and use and that's rollup, I have rollup in every library that I've built or I've got the babel cli that's taking care of at least transpiling the needed code to CJS if not rollup.

I thought, while it might not help a lot of people but I do spend about 10-20 mins every library I build in JS to just setup rollup, babel and standard to handle the bundling, the transpilation and the formatting, what if I just had a node script that did all of that for me.

And I wrote the script but then moving that script into each project manually is still a pain so I created it into a cli package that can be installed into any project.

But then rollup is a big installation, babel is a big installation in terms of disk space so I ended up writing a check and install script which checks for deps in the package.json and if you don't have a certain dependency that this script requires then it installs it for you.

Though I still have to add a user prompt before I trigger the install.

This makes sure that the initial install of the script is small and doesn't add deps that might already exist in a project , thus saving you disk space but this does add the risk of version mismatch causing an issue, which I'll add a fix to in the coming versions.

The script got named `wrap` cause I was eating one when I was writing the script and it felt pretty apt for the use case and like every other library I build, if the library can feed on itself for something, it will.

Commitlog generates it's own change logs, Wrap bundles itself

Here's a link to the actual repo - [wrap](https://github.com/barelyhuman/wrap) if you
