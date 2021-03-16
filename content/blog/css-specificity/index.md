---
title: What does the Cascade Mean in CSS?
date: 2021-03-16
description: "Explaining cascade in CSS in the simplest of terms"
# featuredImage: ![Photo by [James Wheeler](https://www.pexels.com/@souvenirpixels?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com/photo/time-lapse-photography-of-waterfalls-1486902/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)(./css-cascade.jpg)
featuredImage: ./css-cascade.jpg
# transforms: ![Photo by [James](https://example.com)](/css-cascade.jpg)
---

## What does the Cascade mean in CSS
> The CSS cascade assigns a weight to each style rule. When several rules apply, the one with the greatest weight takes precedence. - <a href="https://www.w3.org/TR/css3-cascade/#cascade">CSS Spec</a>

Cascade in CSS is the interpretation of style rules from top to bottom.

> The cascade is the set of rules of how different styles fit together, override each other and how the browser puts together these different variables and renders them. -  <a href="https://twitter.com/MiriSuzanne" target="_blank">Mariam Suzanne</a>


As a presentation layer, CSS interpets how elements are styled and rendered in the browser according to the style rule, using a top to bottom order. And this is the underlying premise of the `Cascade` in CSS.

From the definition above, this is what happens when we talk about cascade. First there is the set of rules (`property/value` pair) stating how the style should be rendered. 

These rules can then be overriden by the cascade, following the order in which the rules were written. When there is conflict in the rules, assumiong the conflicting rules have the same weight and specificity, then the latest rule takes precedence.

The Cascade in CSS means that style-rules are interpreted from top to bottom, such that should elements have the same weight and specificity, the latest style rule will be applied. 

So the cascade helps in resolving conflicting style-rules. Here is an example.

```html
<p>This is a sample text</p>
```

```css
p{
    color: blue;
}

p{
    color: lightgreen;
}

/* The text color will be lightgreen because it appears last in the order of the style rule. */
```

