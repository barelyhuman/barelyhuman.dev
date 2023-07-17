---
title: Avoiding useless commits | Git
date: 17/07/2023
tags: git, stash, avoid useless commits
---

# Context

I've seen way to many people create temporary commits when they wish to switch
to a different branch and their current branch has uncommited changes.

To clarify, there's nothing wrong with creating these commits, since you can
always create a squash of the branch when merging in most Git UI's today.

But, if it's an incomplete and broken change and you know that then why make a
commit for it? You will now have that implementation in 2 commits in which 1 of
them is broken.

You might just be switching to the other branch to check something or help
someone out while you are on a live call or something.

Let's get to handling this.

# Solutions

There's 2 ways that I primarily use and you are not limited to these solutions.

1. [Git Commit Amend](#amending-commits)
2. [Git Stash](#stashing-commits-recommended)

## Amending commits

It's exactly as the name sounds, you amend / fix a previous commit.

The scenario where this makes sense would be something like this, you
accidentally already made a commit with the incomplete implementation but
**haven't pushed** the commit yet. You wish to now complete the implementation
or change and add it to the previously made incomplete commit.

This can be done by adding the new files as you normally would

```sh
git add path/to/file
# or
git add -A # adds all files in current git tree
```

You can now amend a previous commit by doing

```sh
git commit --amend
# or
git commit --am # short flag
```

This will open up your editor (in most cases vim) and you can now change the
commit message that you previously made.

Using `--am` without a reference to a commit will always amend the previous
commit.

> **WARNING**: git amend generates a new hash for the previous commit since the
> collection of changes is now different from before. So, **do not** use it for
> already pushed commits. Learn more about hashing and internals in
> [Know the Unknown - Git | Part 1](/know-the-unknown-git-1)

## Stashing Commits (recommended)

Now, the other scenario is that you don't wish to make a commit yet but really
need to switch to another branch to fix something else or help someone with
something they are working on.

Instead of creating an incomplete commit, you can just use `git stash` , this
will put all the **tracked** files into a temporary collection that is always
local. Think of it as a local dump of the changes, that isn't a part of the
current change tree so you can switch to other branches without any worry.

```sh
git stash # will stash the current active modifications to the top of the stash

git stash pop # will pick the changes from the top of the stash and put them back in the changes tree and will throw it away

git stash apply # will pick the changes from the top of the stash is provided, it'll pick that instead but not throw it away , so you can reuse the same set of changes again and again if needed
```

Note that you can only stash tracked files, so if you wish to stash a new file
you just added you'll need to add that file and then run `git stash` to push
them into the stash.

You are not limited to the top of the stash either, you can provide a name or
message to the stash so you can remember what the stash was for.

This can be done using the `push` key

```sh
git stash push -m "message"

git stash list # list the available stashed objects and their messages

git stash apply stash@{n} #replace `n` with one of indexes available in the

#or

git stash pop stash@{n} #replace `n` with one of indexes available in the stash
```

I use the indexes since using the actual message is harder to do when you type
it with spaces or special characters.

So the entire flow would look like this

```sh
git add path/to/untracked/file
git stash
git checkout main
# make changes on the branch
git checkout old-branch
git stash pop
# continue working on what you were doing
```

That's it for today, hopefully that helps.

Adios!
