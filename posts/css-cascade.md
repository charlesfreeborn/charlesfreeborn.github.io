---
title: "What Does the Cascade Mean in CSS?"
date: "2021-03-16"
excerpt: "Explaining how the cascade actually works — specificity, inheritance, and the order of precedence, simply."
category: "css"
---

CSS stands for **Cascading** Style Sheets, but the cascade is one of those things most people learn to work around before they actually understand it. Let's fix that.

## What the Cascade Actually Is

The cascade is the algorithm browsers use to decide which CSS rule "wins" when multiple rules target the same element and the same property.

Consider this:

```css
p { color: black; }
p { color: red; }
```

Which color does the paragraph get? The cascade answers that question.

(In this case: red, because it comes later in the stylesheet.)

## Three Factors That Decide the Winner

### 1. Origin and Importance

CSS can come from three places: the browser's defaults (user-agent stylesheet), the developer's stylesheet, and the user's custom stylesheet. Developer styles generally win over browser defaults.

The `!important` flag can override this, but it should be used sparingly — it makes debugging painful.

```css
p { color: red !important; } /* This wins even over higher-specificity rules */
```

### 2. Specificity

When two rules come from the same origin, the more *specific* one wins. Specificity is calculated roughly like this:

| Selector type | Score |
|---|---|
| Inline styles | Highest |
| ID selector `#id` | High |
| Class `.class`, attribute `[type]`, pseudo-class `:hover` | Medium |
| Type selector `p`, `h1` | Low |

```css
/* Specificity: low */
p { color: black; }

/* Specificity: medium — this wins */
.intro { color: red; }
```

If you apply both to the same `<p class="intro">`, the text will be red.

### 3. Source Order

When specificity is equal, the rule that appears *later* in the stylesheet wins:

```css
p { color: black; }
p { color: red; }  /* This wins — comes last */
```

This is why the order of your stylesheets and rules matters.

## Inheritance

Some CSS properties are *inherited* — children automatically get the value from their parent unless you override it.

Properties like `color`, `font-family`, and `line-height` inherit. Properties like `margin`, `padding`, and `border` don't.

```html
<div style="color: blue;">
  <p>This text is also blue — inherited from the div.</p>
</div>
```

## Putting It Together

When you're debugging a CSS problem where a style isn't applying, walk through these questions:

1. Is there a more specific selector overriding it?
2. Is something marked `!important` overriding it?
3. Is a later rule in the stylesheet overriding it?
4. Is the property even inheritable?

The browser's DevTools "Computed" panel shows you exactly which rule is winning and why — it's the best tool for debugging the cascade.

## Wrapping Up

The cascade isn't magic. It's a deterministic set of rules. Once you internalize specificity and source order, the "why isn't my style working?" moments become much less mysterious.
