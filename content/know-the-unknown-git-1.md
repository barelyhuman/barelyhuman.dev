---
title: Know the Unknown - Git | Part 1
date: 29/05/2023
tags: git, know the unknown
---

## Intro

The boring intro "Version management system", the fun one, "time travelling
tool". Also, git isn't the only one out there but it's pretty common so we'll
get started with it.

**Version Management** is a very simple tool to keep track of what was done, it
could be done by using date marked comments in the code like so

```go
// 29/5/2023 - reaper
// Basic implementation
// ----
// 30/5/2023 - reaper
// Deleted basic implementation
func main(){
  log.Println("Amazing codebase")
}
```

But, doing this get's pretty hard to read after a few modifications and you have
to now remove the older comments, and then loose the history.

Point of maintaining history in most cases is to not repeat the same mistake
again but in case of coding, we might want to go back to the older code as well.

The same as above could be done with code but then you realise that you'd have
more comments than actual code and the readability issue just stays as is.

**Enter version management systems** There's Mercurial, Git, Sapling ...100
others that I didn't feel like searching for right now.

These systems at the core provide very similar features.

- Way to differentiate file state
- Manage file state at different points
- A summary of the current state

To be put very simply.

## File States

Let's address the first point, now you don't need to know the details of how
this is maintained but I'll try to explain a bit about it.

Every file, both binary(executable/non-readable) and text files have a signature
that can be generated using various algorithms, a common one is hashing the
data. Hash's are repeatable with the same input so this gives us a easy way to
identify if a file has changed.

1. I maintain the hash of the current file state.
2. Generate new hash after the changes are made
3. Compare with the older one to make sure there's a change.

That's basically how the tools figure out if a change was made and these older
hashes are stored as an identifier of file state.

**But what about the file line diffs?**

### Tracking

Some of these tools maintain line level diffs, some maintain character level
diffs. The logic is very similar but let's go through the basic logic of how
this can be done.

Let's take the below code snippet

```js
console.log('hello')
```

and then modify it like the next one

```js
console.log('hello, world')
```

The **diff** for the above, might look like so

```diff
- console.log('hello')
+ console.log('hello, world')
```

This is called tracking files, when a file is being tracked, every line (or
character) of it is compared between the 2 file states. This is also why git
calls them `Untracked` when you haven't asked git to keep track of a file.

We'll get to `staged` and `committed` in a bit.

The logic behind tracking goes in the following fashion

1. Read the file, line by line
2. Break the lines down into characters if doing character diffs.
3. Compare with the same line number of the previous file state
4. Create a diff file which maintains the line numbers (git specific)

The final step varies in each tool in a bit but the base comparision is very
similar. Also why it's slower when you do a lot of changes in a file that huge.
The comparision is still faster than most app and tools today but it does get
laggy when there's RAM limitations.

Back to tracking, So, the diff generation is between file states and so when you
need to revert the diff is reversed, so the added characters are removed and the
removed characters are added back. It feels like time travel but it's just
reversing your action.

Now, in case of binary files, very rarely does it track lines of binary data and
instead, just maintains a duplicate of the modified file. This is because some
binary file specifications are closed and writing diff parsers for them could be
hard without knowing the details of how it's implemented.

If you really want to go through the details of implmentation, go through the
[git source code](https://github.com/git/git)

### Confirming the changes

The next step after tracking the differences of a file is to make sure we save
this change with a comment so we remember what the change was for. In some tools
you can do this by selecting the lines of changes and adding them to a
confirmation message.

In git, we have a middle area. It's called the staged files. This is done to
group the changes that you wish to save.

You can do a file to file change history but grouping is an option you might
want to consider and so the staged area acts as a group of diffs that you wish
to save.

When a file is added to the staged area, there's not much that git does other
than add it to it's internal memory of what the new group of diffs is and where
they stand in the history. This logic is reused in other areas of git and is
pretty straightforward.

The remaining step is to save these diffs with a comment and add an identifier
to it so we can go back and forth between the current state and the state that
the diff was/is in. These identifiers are called `refs` (references) and are
unique hashes generated everytime you run git commands that need to save state
(`rebase`, `commit`, `stash`, `merge`, etc). The latest unique hashe is stored
in a `refs` directory under the `.git` directory.

If you wish to find the other references, you'll have to go through the
`objects` directory in the `.git` directory[^1]

[^1]:
    To read these files and their changes you'll need to use the `git cat-file`
    command since it's a hashmap database that git maintains and is not simple
    utf8 text

A few shortcut files for these references are `HEAD`, `FETCH_HEAD` which just
have the path for local and remote latest reference respectively.

The same logic is used for stashing, a bit more complicated version of the diff
is used for conflict handling in `rebase` and `merge` and we'll have another
post talking about them in detail.
