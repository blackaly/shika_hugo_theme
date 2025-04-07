---
title: "Demonstrating the Split Article Connector"
date: 2023-12-30T10:00:00-05:00
image: "/img/technology.jpg"
draft: false
featured: true
tags: ["demo", "tutorial", "features"]
---

# Split Article Connector Demo

This post demonstrates the split article connector feature, which allows you to create visual annotations that connect related points between two sections of content.

## Basic Example

{{< split-article 
left=`### Web Development
Web development involves creating websites and web applications using technologies like HTML, CSS, and JavaScript. Frontend development focuses on the user interface, while backend development handles server-side logic.`

right=`### Mobile Development
Mobile development involves creating applications for mobile devices like smartphones and tablets. Native apps are built for specific platforms (iOS, Android), while cross-platform solutions allow code sharing.`

leftPoint="Web technologies" 
rightPoint="Mobile technologies"
note="Both web and mobile development are essential skills in today's technology landscape, with increasing convergence through progressive web apps and responsive design." >}}

## Vertical Example

{{< split-article 
left=`### Traditional Marketing
Traditional marketing uses channels such as print media, TV, radio, and billboards to reach audiences. It often has broader reach but can be harder to measure effectiveness.`

right=`### Digital Marketing
Digital marketing uses online channels like social media, email, SEO, and paid ads to reach specific audiences. It offers detailed analytics and precise targeting capabilities.`

leftPoint="Classic approaches" 
rightPoint="Modern approaches"
note="Most effective marketing strategies combine both traditional and digital approaches for maximum impact across different audience segments."
direction="vertical" >}}

## How It Works

The split-article connector feature uses a combination of HTML, CSS, and Hugo shortcodes to create visually appealing content comparisons with explanatory notes. The connector annotation visually bridges related concepts, helping readers understand relationships between different sections of content.

## Usage

To use this feature in your own content, simply add the split-article shortcode with your desired parameters:

```
{{</* split-article 
left="Left section content"
right="Right section content"
leftPoint="Left reference point"
rightPoint="Right reference point"
note="Connection explanation"
direction="horizontal" */>}}
```

The content supports Markdown formatting for rich text styling. 