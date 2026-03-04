---
title: "What is CSS? A Simplified Introduction"
date: "2020-06-18"
excerpt: "Starting from zero — what CSS is, how it works with HTML, and why it's the language of visual design on the web."
category: "css"
---

CSS stands for **Cascading Style Sheets**. If HTML is the skeleton of a webpage — the structure, the content — then CSS is the skin and clothes. It controls how everything looks.

## A Simple Example

Here's an HTML element with no styling:

```html
<p>Hello, world!</p>
```

Now add some CSS:

```css
p {
  color: navy;
  font-size: 1.2rem;
  font-family: Georgia, serif;
}
```

That paragraph is now navy, slightly larger than the default, and rendered in a serif font. That's CSS doing its job.

## The Anatomy of a CSS Rule

A CSS rule has two parts:

```css
selector {
  property: value;
}
```

- **Selector** — what you want to style (`p`, `.my-class`, `#my-id`)
- **Property** — what aspect you want to change (`color`, `font-size`, `margin`)
- **Value** — what you want to set it to (`navy`, `1.2rem`, `16px`)

## How CSS Connects to HTML

There are three ways to add CSS to an HTML page:

**1. External stylesheet** (the standard approach):
```html
<link rel="stylesheet" href="styles.css" />
```

**2. Internal style tag:**
```html
<style>
  p { color: navy; }
</style>
```

**3. Inline styles** (generally avoid this):
```html
<p style="color: navy;">Hello</p>
```

## Why "Cascading"?

The "cascading" part means that when multiple rules target the same element, there's a defined order for which one wins. This is based on **specificity**, **inheritance**, and **source order**.

I'll cover the cascade in more depth in a future post — it's one of the most important (and sometimes confusing) concepts in CSS.

## Wrapping Up

CSS is what makes the web visually interesting. Without it, every page would be black text on a white background. With it, you have full control over layout, color, typography, animation, and more.

It's deceptively simple to start with and deeply powerful once you understand how it really works.
