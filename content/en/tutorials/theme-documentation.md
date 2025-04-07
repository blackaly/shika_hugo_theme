---
title: "Shika Theme Documentation: Split Article Shortcode"
date: 2024-04-07T12:00:00-05:00
tags: ["documentation", "tutorial", "theme", "shortcodes"]
image: "/img/theme-docs.jpg"
weight: 20
draft: false
---

# Shika Theme Documentation

This guide will help you understand how to use the split article shortcode in the Shika theme. The split article shortcode is a powerful feature that allows you to create visually appealing comparisons or parallel content sections in your articles.

## What is the Split Article Shortcode?

The split article shortcode divides content into two sections (left and right) with a connector note in the middle. This layout is perfect for:

- Comparing two approaches, technologies, or methods
- Showing before/after examples
- Presenting cause and effect relationships
- Displaying translations side by side
- Creating timelines with detailed explanations

## Basic Usage

Here's the basic syntax for the split article shortcode:

```
{{</* split-article 
    left="Your left section content here, can include **markdown**" 
    right="Your right section content here, can also include **markdown**"
    leftPoint="Description for left section" 
    rightPoint="Description for right section"
    note="A connecting note that ties the two sections together"
    direction="horizontal" 
*/>}}
```

## Parameters

The shortcode accepts the following parameters:

| Parameter | Description | Default |
|-----------|-------------|---------|
| left | Content for the left section (supports markdown) | Required |
| right | Content for the right section (supports markdown) | Required |
| leftPoint | Short description for the left section | "Left section" |
| rightPoint | Short description for the right section | "Right section" |
| note | A note that connects the two sections (supports markdown) | Empty |
| direction | Layout direction: "horizontal" or "vertical" | "horizontal" |

## Examples

### Basic Comparison Example

```
{{</* split-article 
    left="## CSS
```css
body {
  background-color: black;
  color: white;
}
```" 
    right="## SCSS
```scss
$bgcolor: black;
$textcolor: white;

body {
  background-color: $bgcolor;
  color: $textcolor;
}
```"
    leftPoint="Standard CSS" 
    rightPoint="SCSS with variables"
    note="Notice how SCSS allows you to define variables, making your code more maintainable."
*/>}}
```

### Vertical Layout Example

For content that flows better vertically (like chronological events):

```
{{</* split-article 
    left="## Planning Phase
During the planning phase, we defined the project scope and created initial wireframes."
    right="## Implementation Phase
The implementation phase involved coding the frontend and backend components according to the specifications."
    leftPoint="First phase" 
    rightPoint="Second phase"
    note="A good planning phase leads to smoother implementation."
    direction="vertical"
*/>}}
```

## Styling

The split article component uses responsive styling:

- On large screens, horizontal layouts show content side by side
- On small screens, the layout automatically switches to vertical for better readability
- The connector lines adjust based on the direction parameter
- The component uses your theme's color variables for a consistent look

## Best Practices

1. **Keep content balanced**: Try to maintain similar content length in both sections
2. **Use headers wisely**: Start each section with a header for clarity
3. **Be concise in connection points**: The leftPoint and rightPoint should be brief
4. **Make the note meaningful**: The connecting note should highlight the relationship between sections
5. **Consider direction carefully**: Choose horizontal for comparisons, vertical for sequential content

## Advanced Usage

You can nest other shortcodes within the split-article sections:

```
{{</* split-article 
    left="## Desktop View
{{< figure src=\"/images/desktop.png\" caption=\"Desktop layout\" >}}"
    right="## Mobile View
{{< figure src=\"/images/mobile.png\" caption=\"Mobile layout\" >}}"
    leftPoint="Desktop" 
    rightPoint="Mobile"
    note="Our responsive design adjusts automatically to different screen sizes."
*/>}}
```

## Troubleshooting

- **Content not splitting correctly**: Ensure you're using proper markdown syntax within the parameters
- **Connection lines not showing**: Check if your theme's CSS variables are properly defined
- **Responsiveness issues**: Make sure your content works well at different widths

---

This documentation provides a comprehensive guide to using the split article shortcode in the Shika theme. Experiment with different combinations to create engaging and visually appealing content for your readers. 