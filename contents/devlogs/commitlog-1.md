---
title: Log[1] / commitlog
published: true
date: 07/06/2021
---

I could actually use commit log to just generate this log but that's not what the blog is meant for so let's go onto the changes that were made.

People who follow my [github](https://github.com/barelyhuman) would've seen a good few releases early in the morning today and that's because there were a few changes and commits that I had stashed and all I did was apply them one by one , test the actual change and push a release.

Could've just tested all at once but I have times where I'm a completely dumb human (also, I was half asleep).

Anyways, the overview of the changes and why they were done.

I use commitlog in all my projects and so I needed to cleanup the generated changelogs,

1. The big **Changelog** on the top is unnecessary, it's a new release, obviously it's a changelog, don't have to scream that on people, do we now.
2. The keys that are used to detect the categorisation are sliced out of the commit message and now we have clean messages on the release, the hash still stays so if you need reference to what the change is in case you decide to change the message to a more descriptive one, you can still do that.
3. A subcommand `release` was added to the cli, it has been there since `0.0.6` but i'm not really confident of the whole thing since I wrote it based on my versioning method which doesn't really align with the semver spec. So, it isn't written in the readme either that the command does semver versioning but you can use it to tag you commits with a similar spec that I use.
4. The last change which I haven't pushed and am still working on is to setup a `commitlog.release.yml` file in the repository using `commitlog release` to make it CI friendly if you do use a certain CI setup to release patches from the `patch` branch for instance. That's still to be done and is raised as an issue for people to pick up if you'd like to. Else, I'll pick it up once I'm done with taco

The other change is obviously just upgrading the version of commitlog in [commitlog-web](https://commitlog-web.herokuapp.com/) it now uses the latest release so all the above changes will be reflected on the web version as well, in case someone is using the web version as an API to get changelogs for their repositories.

That's about it in commitlog.

Adios
