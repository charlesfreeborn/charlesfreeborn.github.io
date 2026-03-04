---
title: "Understanding Basic CSS Selectors"
date: "2020-08-03"
excerpt: "An introduction to CSS selectors — selector lists, type selectors, class selectors, and the basics of targeting elements."
category: "css"
---

Before you can style anything in CSS, you need to know how to *target* it. That's what selectors are for. They tell the browser: "apply these styles to *this* element (or group of elements)."

## Type Selectors

The simplest selector targets an HTML element by its tag name:

```css
p    { color: #333; }
h1   { font-size: 2rem; }
a    { color: blue; }
```

Every `<p>` on the page gets `color: #333`. Every `<h1>` gets the larger font size. Simple.

## Class Selectors

Classes are reusable. Add a class to your HTML, then target it in CSS with a dot (`.`):

```html
<p class="intro">This is the intro paragraph.</p>
<p>This is a regular paragraph.</p>
```

```css
.intro {
  font-size: 1.2rem;
  font-weight: bold;
}
```

Only the paragraph with `class="intro"` gets the extra size and weight.

## ID Selectors

IDs are unique — one per page. Target them with a hash (`#`):

```html
<section id="about">...</section>
```

```css
#about {
  background: #f5f5f5;
  padding: 2rem;
}
```

In practice, IDs in CSS carry high specificity and can cause headaches later. Classes are usually a better choice for styling.

## Selector Lists

You can apply the same styles to multiple selectors by separating them with a comma:

```css
h1, h2, h3 {
  font-family: Georgia, serif;
  line-height: 1.3;
}
```

This is more efficient than writing three separate rules.

## Universal Selector

The `*` selector targets every element on the page. It's commonly used in CSS resets:

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

## Combining Selectors

You can get more specific by chaining selectors:

```css
/* Targets <a> tags inside .nav only */
.nav a { color: white; }

/* Targets <p> with class "lead" */
p.lead { font-size: 1.15rem; }
```

## Wrapping Up

These basic selectors will get you a long way. Once you're comfortable with type, class, and ID selectors, you're ready to explore more powerful combinators (descendant, child, sibling) and pseudo-classes like `:hover` and `:focus`.

CSS selectors are the foundation — everything else builds on top of them.
