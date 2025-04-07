---
title: "HTML Basics: Structure of the Web"
date: 2023-12-31T10:00:00-05:00
image: "/img/html-basics.jpg"
draft: false
---

# HTML Basics: Structure of the Web

HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages.

## What You'll Learn

In this tutorial, you'll learn:

- The basic structure of an HTML document
- Essential HTML tags and elements
- How to create headings, paragraphs, and lists
- Adding links and images to your pages
- HTML semantic elements and their importance

## Basic HTML Document Structure

Every HTML document has a standard structure that looks like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <!-- Your content goes here -->
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

Let's break down the key components:

1. `<!DOCTYPE html>` - Declares the document type and version of HTML
2. `<html>` - The root element of an HTML page
3. `<head>` - Contains meta-information about the document
4. `<title>` - Specifies the title of the document (shown in browser tabs)
5. `<body>` - Contains the visible page content

## Essential HTML Elements

### Headings

HTML offers six levels of headings, from `<h1>` (most important) to `<h6>` (least important):

```html
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>
```

### Paragraphs

The `<p>` element defines a paragraph:

```html
<p>This is a paragraph of text. It can contain multiple sentences and will automatically wrap based on the size of the viewport.</p>
```

### Lists

HTML supports ordered lists (`<ol>`) and unordered lists (`<ul>`):

```html
<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

### Links

The `<a>` (anchor) element creates hyperlinks:

```html
<a href="https://www.example.com">Visit Example.com</a>
```

### Images

The `<img>` element embeds images:

```html
<img src="image.jpg" alt="Description of the image">
```

The `alt` attribute provides alternative text for screen readers and is displayed if the image cannot be loaded.

## Next Steps

Now that you've learned the basics of HTML, try creating a simple web page that includes headings, paragraphs, lists, links, and images. In the next tutorial, we'll explore CSS and how to style your HTML elements to create visually appealing web pages.

Practice is key to mastering HTML, so don't hesitate to experiment with the elements you've learned today. 