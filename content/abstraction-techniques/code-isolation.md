---
title: Code Isolation
date: 18/05/2023
tags: abstraction, layouts, code isolates, functional programming
---

It's a simple thing when you understand it but a lot harder if you don't know
that you are supposed to do it.

The point of abstraction and code isolation has always been to be able to create
a black box and only expose what's required by the external world or what you
take from the external world.

This is one of the core principles of functional programming.

**Why think so much about it?**

There's no specific reason for you to do isolations unless you are working on
tech that you might not be sure about. I use it when I'm evaluating a new
library and when I'm refactoring codebases where I know this area could be
better off abstracted or isolated.

There's a few advantages to it and we'll go through them.

**Modification of business logic becomes easier** This is what you'll usualy
find as an argument of why you should be doing this and as I mentioned, it's not
always required but it definitely helps when done.

A simple trivial example could be this

```js
/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function add(a, b) {
	return a + b
}
```

The function `add` only knows that it's going to get 2 numbers and it's going to
add and return them. Now this is a pure function based on the fact that the same
input gives the same result. But we aren't talking about pure functions today.

The above is also easily changeable as long as the type signatures of the input
and result that the function gives is maintained.

```js
/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function add(a, b) {
	return a - b
}
```

The only change we've made is change `+` to `-` and the remainder of your code
would still work since the expectation of getting back a number from this
function is still satisifed. Even though the functionality might be wrong.

**You think we're dumb don't you?**

Eh, no.

Moving further onto a more descriptive use case that let's say frontend
developers would be happy with would be component abstractions.

This time it's specifically when you're working with an external UI library and
you are trying to just get a feel for the library and not commit to it right
now, but this can also be the _de facto_ solution that you go even when you've
been comfortable with a UI library to save the future you.

To explain better.

Let's say I use `mui` which is a well known react library for material ui.

And we have used the `Button` component out of it in a few pages directly.

```jsx
// pages/login.jsx
import Button from '@mui/material/Button'
function LoginPage() {
	return (
		<>
			{/*rest of the form*/}
			<Button variant="contained">Login</Button>
		</>
	)
}

// pages/user-details.jsx
import Button from '@mui/material/Button'
function UserDetailsPage() {
	return (
		<>
			{/*rest of the user details*/}
			<Button variant="outlined" color="error">
				Delete User
			</Button>
		</>
	)
}
```

This is fine and it's **okay** to use it like this but, it's not uncommon for
API's to change over versions and you might now have to go ahead and replace
that API change everywhere you've used this button.

As an example, let's say the `color="error"` is now supposed to be
`color="danger"`, you'd have to make that change in every file and this could be
a simple _replace all_ instance but we're talking about one change, there might
be more than one Breaking API change that you might have to deal with.

But, if we had abstracted this out into a wrapper before. A simple one, let's
not complicate it too much.

```jsx
// components/Button.jsx
import MUIButton from '@mui/material/Button'
function Button({ ...props }) {
	return <MUIButton />
}
```

That's it, that's all I need to do (at least as an example). Now if the API
changes for the button, and I've used this button in 100 places. I don't replace
or fix it in 100 places. I fix this in one place.

```jsx
import MUIButton from '@mui/material/Button'

const colorRemap = {
	error: 'danger',
}

function Button({ color, ...props }) {
	const _color = colorRemap[color] ?? color
	return <MUIButton color={_color} />
}
```

We simply, added a prop mapping for the older value and the new value and we are
done, no other changes required.

**What if we never made this abstraction, what do we do now!?**

As I said, it's okay to not have the abstraction as you might not have to make
the change ever but in case you do and there was no abstraction , we can still
isolate it while we are making the changes. You now define a new Component like
above and then replace just the import paths with the new component.

**I'm not a frontend dev, explain it to me better.**

The `add` logic above should've helped but this isn't uncommon when writing
backend code and specifically REST API related code. One such thing we at
fountane try to do is to keep the network away from the logic.

A more structured version of this implementation is called the **Onion
Architecture** or **Hexagonal Architecture** which involves maintaining both
internal and external blackboxes but that's a topic for later.


Let's just go through one of the many snippets. A lot of the logic has been removed to simplify the explanation here.


```js
// Just a namespace to be able to refer and expand it easily.
const User = (app.functions.User = {})

// a function that defines it's requirements as a primitive `email` and `orgId` which 
// have no specific network requirement. 
User.inviteUser = async (email, orgId) => {
	if (!orgId) {
		// ParamMissingError is just and expansion on the `Error` class 
		// with the optional constructor that allows a message and a statusCode
		// if you need to be specific about the error code.
		throw new ParamMissingError({
			message: `${orgId} is a required argument`,
		})
	}
	await db('users').invites.insert({ email, orgId })
	return true
}

// app.expose is just an instance of `router` from `express.Router`, abstracted 
// so that any router instance with the signature `.get(path,handler)` can be 
// used later. 
app.expose.get('/:orgId/invite', async (req, res) => {
	try {
		// Call the function from the namespace and pass in the required params 
		await app.functions.User.inviteUser(req.body.email, req.params.orgId)
		return res.status(200).send({ invited: true })
	} catch (err) {
		// Define the required status codes and handlers accordingly
		if (err instanceof ParamMissingError) {
			return res.status(400).send({
				message: err.message,
			})
		}
		return res.status(500).send({
			message: 'Oops! Something went wrong',
			stack: isDev() ? err : null,
		})
	}
})
```

Now that looks excessive doesn't it? I know. 

Let's go through the advantages. I've not abstracted database out of the functions since I don't expect knex to fail on me, but that could happen someday and I've decided to deal with it when it does. 

As for the other abstractions, you now have a function which can take in 2 params and then talks to the DB to make use of those params. I can now expose it on a REST API or if I decide to write a GraphQL extension later, I just point the resolver to this function. I change nothing for that shift. Or, let's say you are a TRPC fan, I still change nothing. 

**What if I switch to mongodb tomorrow!?** 

Well, in that case I change the internals of the function and nothing else, everything else still works as long as the signatures are same. If you do end up changing the signatures of the function then that's a code and business logic change overall in which case, the re-work can't be helped.

This post has gone long, so I'll end it with a summary for now. 


## Summary
1. Try to keep them simple 
2. It's not always necessary 
3. It's done for save the future you and to avoid crazy long refactors



