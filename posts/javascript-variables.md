---
title: "Understanding JavaScript Variables — var, let, and const"
date: "2021-08-03"
excerpt: "A clear guide to variable declarations in JavaScript, when to use each, and the subtle differences that matter."
category: "javascript"
---

JavaScript has three ways to declare a variable: `var`, `let`, and `const`. If you're newer to the language, this might seem like unnecessary complexity. But each exists for a reason, and knowing when to reach for which one makes you a clearer, safer programmer.

## `var` — The Original

`var` has been in JavaScript since the beginning. But it has some quirks that caused a lot of bugs over the years.

```js
var name = 'Charles';
```

**Problem 1: Function scope, not block scope**

`var` is scoped to the *function* it's declared in, not the *block* (like an `if` or `for` loop):

```js
if (true) {
  var greeting = 'Hello';
}
console.log(greeting); // 'Hello' — leaks out of the block!
```

**Problem 2: Hoisting**

`var` declarations are *hoisted* to the top of their scope, but not their values:

```js
console.log(x); // undefined (not an error)
var x = 5;
```

These behaviors can lead to subtle bugs. That's why `let` and `const` were introduced in ES6 (2015).

## `let` — Block-Scoped Variables

`let` works like `var` but respects block scope:

```js
if (true) {
  let greeting = 'Hello';
}
console.log(greeting); // ReferenceError — greeting is not defined
```

Use `let` when you have a variable whose value will change:

```js
let count = 0;
count = count + 1;
```

## `const` — Block-Scoped Constants

`const` also has block scope, but it can't be *reassigned*:

```js
const PI = 3.14159;
PI = 3; // TypeError: Assignment to constant variable
```

**Important nuance:** `const` prevents *reassignment*, not *mutation*. Objects and arrays declared with `const` can still be modified:

```js
const user = { name: 'Charles' };
user.name = 'Charlie'; // This works fine
user = {};             // TypeError — can't reassign
```

## When to Use Each

In modern JavaScript, a simple rule of thumb:

- **`const` by default** — use it for everything unless you know the value will change
- **`let`** — when you need to reassign (loop counters, values that update over time)
- **`var`** — avoid in new code; you'll encounter it in older codebases

```js
// Good modern JavaScript
const API_URL = 'https://api.example.com';

let retries = 0;
while (retries < 3) {
  // ...
  retries++;
}
```

## Wrapping Up

The shift from `var` to `let` and `const` was a big quality-of-life improvement for JavaScript developers. Block scoping makes code easier to reason about, and `const` signals intent — "this value won't change" — which helps both you and anyone reading your code later.

If you're starting out, just default to `const` and switch to `let` when you need to. You probably won't need `var` at all.
