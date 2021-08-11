---
title: Understanding JavaScript Variables - a look at var, let and const
date: 2021-08-03
description: "Explaining JavaScript Variables - const, let and var"
featuredImage: ./box.jpg
---

## Introduction - What is a Variable?

A variable is a container for value.

Think of a variable like a box - container. You use this box in storing (keeping) things and retrieve these things when you need them. Though the word "storing" might be misleading.

We can imagine what a variable is using the box, like this - say you have a box for keeping and organising your jewelry.

You probably have different boxes for the different type of jewelry - diamond, gold and silver. Placing these items in the different boxes, will require you to also label them. With labelling, you can identify which box contains the different collection of your jewelries. Box A will be labelled - "Diamonds", Box B will be labelled - "Gold" and Box C will be labelled - "Silver".

A variable can contain different types of data - from simple data like numbers, and strings, to complex data like arrays and objects.

And like the name says, the value which a variable holds, can change over-time. This is known as variable re-assignment.

So then how do we assign values to a variable? It starts with the declaration of the variable - which we look at in the next section.

## Variable declaration and initialization

### Variable declaration

To use a variable, it must first be created. This is known as variable declaration. And we declare a variable by using the `var` or `let` keyword, followed by the desired name like so:

```javascript
var firstName; // declare a variable with firstName
```

### Variable initialization

A variable can be initialized with a value, after the variable's declaration. By variable initialization, we mean assigning a value to the variable at its point of declaration. We achieve this by first typing the `var` or `let` keyword, followed by the assignment operator (`=`) and the value. Like so:

```javascript
var firstName = "Charles"; // Assign the value 'Charles' to the variable firstName
```

Now when we log firstName to the console, we get 'Charles' as an output. This is so because firstName - a variable - now contains a value of 'Charles.'

```javascript
console.log(firstName); // Charles
```

### `var` statement - the original the keyword for variable

In earlier sections, we mentioned that you can use `var` or `let` in declaring a variable in JavaScript. But how did we get to having two keywords in variable declaration in one language? It began with a bit of the history. When JavaScript was first created, `var` was the original keyword for variable declaration.

So if you encounter legacy JavaScript codes, you'd find `var` been used for variable declarations.

But the use of `var` brought some challenges and pit falls in the language.

These challenges with `var` include:

1. Variables declared and initialized with `var` can be re-declared like so:

```javascript
var age = 30;
var age = 31;

// both valid with var
```

2. Scope - variables declared with `var` is accessible from outside it's block. That is `var` can said to be a function or global scope.

Here's an example:

```javascript
var x = 2;
{
  var x = 4;
}
console.log(x);

// 4 will be logged to the console.
```

3. Hoisting - A varibale can be used before it is declared. While this may sound exciting, it can be misleading, even for you as a developer. Because JavaScript codes are read and executed from top to bottom. And variable declaration is supposed to be processed before code execution.

```javascript
lastName = "Freeborn";
var lastName;

console.log(lastName);
// outputs Freeborn
```

### `let` the new var

In 2015, a major revision (codenamed ES6), to the JavaScript language was done and introduced to the JavaScript community. Known as ECMAScript 2015 or ES6. This release introduced the `let` keyword, for declaring variables and `const` - for declaring constants.

So we can declare a variable with `let` like so:

```javascript
let age = 32;
```

#### And here are some of the reasons why you should use `let` as the new var.

1. A variable declared with `let` can not be redeclared, as we saw with `var`.

The code sample below will throw a SyntaxError: Identifier 'age' has already been declared.

```javascript
let age = 30;
let age = 31;
```

2. `let` is block scope. By block `{}` scope, we mean statements that are grouped together in a curly brace `{}`. Most times, you will find these code blocks in control flow statements like `if...else`.

```javascript
{
  // this is a code block
}
```

Variables declared with `let` have block scope unlike `var` variables.

```javascript
let x = 2;
{
  let x = 4; // accessible only on this block.
}
console.log(x);

// 2 is logged to the console.
```

2 is logged to the console because let is block scope and only accessible within its block.

3. Hoisting - as mentioned earlier in our discussion about `var`, using let for hoisting will throw a reference error.

```javascript
lastName = "Freeborn";
let lastName = "Freeborn";

// ReferenceError: Cannot access 'lastName' before initialization
```

## JavaScript variable naming conventions

Though JavaScript variables can be given any name that you like, there are some recommended naming conventions, limitations and best practices for naming variables. These include:

1. Use meaningful (and descriptive) names in your variable declaration. This will help you - and your team - in understanding what the variable entails and the type of value the variable is expected to hold.

For example use `lastName` instead of `ln` if you want to declare a variable to hold last name of a person.

2. You can not use JavaScript reserved words in naming variables. An example of a JavaScript keyword is `var`. [See here for a comprehensive list of JavaScript reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

3. You can't start a variable name with a number or an underscore.

4. It is recommended to use lower camel case names for compound variable names like `finalScore`, instead of `final_Score`.

5. JavaScript variable names are case sensitive. So `fullName` is not the same as `fullNAme`.

## Variable types (data types variables can hold)

JavaScript is a loosely type language. This implies that you don't have to specify at the point of variable declaration, the data type that a variable in JavaScript can hold.

JavaScript will infer the type of data a variable holds at the point of initialization. This is known as type inference.

Here we take a quick look at the types of data a variable can hold.

1. Numbers.

```javascript
// examples of number data type
let pi = 3.145;
let x = 6;
let weight = 75;
```

Do note that numbers in JavaScript shouldn't be in quotes. Doing that converts the number to a string.

2. Strings - these are characters in JavaScript that are placed inside a single or double quote.

```javascript
// examples of string
let fruit = "Oranges";
let language = "JavaScript";
```

3. Booleans - values that are `true` or `false`.

```javascript
let eligible = true;
```

4. Arrays - An array is a single object that contains multiple values, enclosed in square brackets, separated by a comma.

```javascript
let fruits = ["apples", "bananas", "mangoes", "oranges"];
```

Note: You access an array by using their location like so:

```javascript
console.log(fruits[0]);

// outputs apples.
```

5. Objects - which is an instance of a class. Objects usually have features and/or attributes. For example, a person has a name, age, height, color.

```javascript
let person = {
  fullName: "Charles Freeborn",
  age: 30,
  height: 1.75,
  sex: "male",
};
```

Note: we use the dot notation to access or retrieve the value in an object like so:

```javascript
person.fullName;

// returns 'Charles Freeborn'
```

## const for Constant - Constants in JavaScript

A constant is a variable with a value that doesn't change after its declaration and assignment.

pi = 3.14159 is a Mathematical constant and an example of what a constant is.

The `const` statement was introduced as part of the new ES6 features for declaring a "variable constant."

One of the key take aways for the constants in JavaScript is that you must assign a value to a constant at the point of declaration. This is so because you can not re-assign a value to a constant after its creation nor redeclare it.

```javascript
const pi = 3.14159;
let radius = 2;
let Area = pi * radius ** 2;
console.log(Area);

// outputs 12.56636
```

And just like let, const is also block-scoped.

## Conclusion

In this article we looked at understanding the JavaScript variables - `var`, `let` and `const`. What a variable is? The declaration and assigning values to variables. Some challenges associated with using the `var` statement and then an introduction to the `let` statement. We also briefly talked about `const` for constants.

If you find this article insightful, please consider sharing.

Happy Coding!
