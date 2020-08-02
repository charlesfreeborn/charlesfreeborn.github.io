---
title: Understanding Basic CSS Selectors
date: 2020-08-03
description: Introducing CSS Selectors, selector lists and basic CSS selector types
---
# Introduction to CSS Selectors
How do you determine (target) what part or section of a HTML document that needs to be styled? You can achieve this, by using `CSS selectors`. So then what is a `selector`? 

At the most fundamental level, CSS selectors are used to define or target the element we wish to style. 

Every CSS rule-set begins with a selector, telling the browser the element the rule should be applied to.
``` css 
selector {property: value;}
```
Now the selector from the syntax above, can be a HTML element/tag like `<p>` with `property/value` pair like ` {color: green}`. 

This can be written like so. 

``` css
p{
    color: green;
}
```
And there are different types of selectors, though we will be looking at basic selectors in this article.
## Selector List 
You can create a selector list by combining different elements using the comma (`,`) for properties whose values will be the same when styled. Assuming that two elements on your page will have the style rule, you can reduce the number of styles rules written by combining those elements as a selector list.

Here’s an example. 

```html
<h2>This is a level 2 heading</h2>
<h3>And this is level 3 heading</h3>
```
You can have separate styles targeting the `<h1>` and `<h2>` elements on our CSS file like this.
```css
h2 {
color: green;
}

h3 {
color: green;
}
```
Using a selector list however, you can style both `h1` and `h2` to use the same style and reduce the number of style-rule like so.

```css
h1, h2 {
color: green;
}
```
## Basic Selector Types
### Tag or Type Selector
Tag or type selector is used to target and style unique HTML elements or tags like `<body>`, `<h1>`, `<p>`. For example, say you have a `<h1>` in our html file like so.
```html
<h1>Understanding Basic CSS Selectors</h1>
```
You can target the `h1` using tag selector like this.
```css
h1 {
  text-align: center;
  margin-bottom: 10px;
}
```
### Class Selectors (`.`)
The [HTML class attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) can be used to specify a class for a HTML element. And several HTML elements can have the same class.

You can have multiple classes by separating them with a space like so.
```html
<h2 class="selector1 selector2">Class Selectors</h2>
```
Class selectors can be styled by preceding the name of the class with a period (`.`). 
```html
<h2>Class Selector</h2>
<p class=”para”>Styling the paragraph using classes</p>
<p class=”para”>Taking a deep dive into selectors</p>
```
```css
.para{
  font-size: 18px;
  color: #1E47FA;
}
```
You can view the output of the syling on [CodePen](https://codepen.io/freeborncharles/pen/qBbjZOz)
### ID Selectors (#)
The ID selector is used to select and style unique HTML element. The element name is preceded by the hashtag (or pound) sign. Unlike class selector, a HTML document can only have a unique ID.

ID selectors will override class and tag selectors style. And this is because IDs have a high precedence over class and tag selectors. 

We will discuss this on our specificity article.
```html
<h2 id=”sub-heading”>ID Selectors</h2>
<p>An ID selector example</p>
```
```css
#sub-heading{
font-size: 18px;
}
```
ID selectors has a high precedence over the class and tag selectors. That is 
### Attribute Selectors
Elements in HTML have [attributes](https://www.w3schools.com/html/html_attributes.asp) which give more information about the HTML element. Therefore, you can also style an element by targeting an attribute or using the value present in the attribute.

For example - 
```css
/* targeting an element using the presence of the title attribute */
a [title] {

}

/* targeting an element using the particular value of an attribute */
a [href="https://freeborncharles.com"] {

}
```
Want to learn more about attribute selectors? Please read the spec [here](https://www.w3.org/TR/selectors-3/#attribute-selectors)
### Pseudo-class and Pseudo-element Selectors
HTML elements can have different states which can be selected and styled, using pseudo-class selectors.

For example the `:hover` pseudo class can be selected and styled when a user hovers the mouse on the element.

Here’s an example.
```html
<a href="#">Hover around here</a>
```
And the CSS
```css
a:hover{
color: #6893F7;
}
```

Pseudo element selectors select a part of an element for styling. For example, let’s assume you want to style the first-line paragraph of an online newspaper article, you can target the first-line like so.

```css
p:first-line {
color: blue;
text-transform: capitalize;
}
```
### Universal Selectors (*)
Most web browsers have a default stylesheet, which they use to render a page in the absence of an external stylesheet. These default stylesheets are known as [user agent](https://en.wikipedia.org/wiki/User_agent) stylesheets. 

And this default stylesheets from the browser sets values for the padding and margin. 

So how do we alter the state of the default values? Steps in the universal selector. We can use the universal selector.

You can use this to reset the browser’s default style and start with a clean slate.

```css
* {
margin: 0;
padding: 0;
}
```
## Summary and Key Take-aways
Being able to know what element to `select` and style is an invaluable skill-set in CSS.

I do hope you find this quite article on basic CSS selectors quite insightful. We looked at the following -
`selectors` - the method in CSS used to target an element or group of elements for styling.

Basic types of selectors - tag/element, class, ID, attribute, pseudo-class and pseudo-element selectors, and universal selectors.
### Wanna go deeper?
Thanks for reading - this is my digital garden where I will be sharing my learnings and cogitations on the modern web. I will be looking at specificity in the next article.

Here is the link to the code sample of all the basic CSS selector examples on [CodePen](https://codepen.io/freeborncharles/pen/qBbjZOz)

And you if you wish to dive deeper, you can check [the MDN docs on CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) and the [CSS Selectors Spec on W3](https://www.w3.org/TR/selectors-3/)

Please help to share this.
