---
title: "CSS Fundamentals: Styling the Web"
date: 2024-01-02T10:00:00-05:00
image: "/img/css-fundamentals.jpg"
draft: false
---

# CSS Fundamentals: Styling the Web

Cascading Style Sheets (CSS) is the language used to style and layout web pages. It transforms plain HTML into visually appealing websites by controlling colors, fonts, spacing, and more.

## What You'll Learn

In this tutorial, you'll learn:

- How to include CSS in your HTML
- Selectors and their specificity
- Essential CSS properties
- The box model concept
- Flexbox basics for layouts

## Including CSS in HTML

There are three ways to include CSS in your HTML:

### 1. Inline CSS

Applies to a specific HTML element using the `style` attribute:

```html
<p style="color: blue; font-size: 18px;">This is a styled paragraph.</p>
```

### 2. Internal CSS

Defined in the `<head>` section using the `<style>` tag:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This is a styled paragraph.</p>
</body>
</html>
```

### 3. External CSS (Recommended)

Defined in a separate .css file and linked in the HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a styled paragraph.</p>
</body>
</html>
```

And in your styles.css file:

```css
p {
    color: blue;
    font-size: 18px;
}
```

## CSS Selectors

Selectors determine which elements your styles will apply to:

### Element Selectors

Target all elements of a specific type:

```css
p {
    color: blue;
}
```

### Class Selectors

Target elements with a specific class attribute:

```css
.highlight {
    background-color: yellow;
}
```

```html
<p class="highlight">This paragraph has a yellow background.</p>
```

### ID Selectors

Target a specific element with the given ID:

```css
#header {
    font-size: 24px;
}
```

```html
<h1 id="header">This is a large heading.</h1>
```

### Combination Selectors

```css
/* Descendant selector */
article p {
    font-style: italic;
}

/* Child selector */
ul > li {
    list-style-type: square;
}

/* Multiple selectors */
h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```

## Essential CSS Properties

### Text Styling

```css
p {
    color: #333;                 /* Text color */
    font-family: Arial, sans-serif; /* Font */
    font-size: 16px;             /* Font size */
    font-weight: bold;           /* Font weight */
    text-align: center;          /* Text alignment */
    line-height: 1.5;            /* Line spacing */
}
```

### Box Properties

```css
div {
    background-color: lightgray; /* Background color */
    border: 2px solid black;     /* Border */
    padding: 20px;               /* Inner spacing */
    margin: 10px;                /* Outer spacing */
    width: 300px;                /* Width */
    height: 200px;               /* Height */
}
```

## The Box Model

Every element in HTML is a box that consists of:

- Content: The actual content of the element
- Padding: Space between the content and the border
- Border: A line around the padding and content
- Margin: Space outside the border

```css
.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 30px;
}
```

By default, the `width` and `height` properties only control the content area. To include padding and border in the specified dimensions, use:

```css
.box {
    box-sizing: border-box;
    width: 300px; /* Total width including padding and border */
}
```

## Flexbox for Layout

Flexbox is a powerful layout system for arranging elements:

```css
.container {
    display: flex;
    justify-content: space-between; /* Horizontal distribution */
    align-items: center;            /* Vertical alignment */
    flex-wrap: wrap;                /* Allow items to wrap */
}
```

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

## Next Steps

With the CSS fundamentals under your belt, try styling the HTML page you created in the previous tutorial. Experiment with different selectors, properties, and values to see how they affect the appearance of your page.

In the next tutorial, we'll explore JavaScript, which adds interactivity to your web pages. 