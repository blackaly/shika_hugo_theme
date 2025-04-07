---
title: "Getting Started with Shika Theme"
date: 2024-04-07T11:00:00-05:00
tags: ["documentation", "guide", "theme", "hugo"]
image: "/img/theme-intro.jpg"
weight: 10
draft: false
---

# Getting Started with Shika Theme

Welcome to the Shika theme documentation! This guide will help you understand the basic structure, features, and how to use the Shika theme effectively for your Hugo website.

## Theme Overview

Shika is a modern, clean, and responsive Hugo theme designed for blogs, personal websites, and documentation sites. It features:

- Responsive design that works on all devices
- Beautiful card-based layouts for posts and tutorials
- Multilingual support (English and Arabic)
- Dark mode with bright accent colors
- Customizable sections and layouts

## Basic Structure

The theme follows a standard Hugo structure with some customizations:

```
themes/Shika/
├── archetypes/     # Template files for new content
├── assets/         # CSS, JS, and other assets
├── layouts/        # HTML templates
│   ├── _default/   # Default templates
│   ├── partials/   # Reusable template parts
│   ├── shortcodes/ # Custom shortcodes
│   └── section/    # Section-specific templates
├── static/         # Static files (images, etc.)
│   └── css/        # CSS files
└── config.toml     # Theme configuration
```

## Content Types

Shika supports several content types out of the box:

1. **Posts**: Regular blog posts or articles
2. **Tutorials**: In-depth guides or tutorials
3. **Tutorial Series**: Collections of related tutorials

## Creating Content

### Blog Posts

To create a new blog post:

```bash
hugo new posts/my-post-name.md
```

Your post should have front matter like this:

```yaml
---
title: "My Post Title"
date: 2023-04-07T10:00:00-05:00
tags: ["tag1", "tag2"]
image: "/img/my-featured-image.jpg"
draft: false
---
```

### Tutorials

To create a new tutorial:

```bash
hugo new tutorials/my-tutorial.md
```

With front matter:

```yaml
---
title: "My Tutorial Title"
date: 2023-04-07T10:00:00-05:00
tags: ["tutorial", "howto"]
image: "/img/tutorial-image.jpg"
series: "optional-series-name"
draft: false
---
```

## Home Page Customization

The home page displays:

1. Hero section with your profile
2. Featured posts section
3. Latest tutorials section
4. About section

You can customize these in the `themes/Shika/layouts/index.html` file or by creating your own `layouts/index.html` file in your site root.

## Multilingual Support (Still not implemented yet)

Shika supports multilingual websites. To use this feature:

1. Organize your content in language-specific folders (`content/en/`, `content/ar/`)
2. Configure languages in your `config.toml`:

```toml
[languages]
  [languages.en]
    languageName = "English"
    weight = 1
  [languages.ar]
    languageName = "العربية"
    weight = 2
    rtl = true
```

## Navigation

The navigation menu is configured in your site's `config.toml`:

```toml
[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Posts"
    url = "/posts/"
    weight = 2
  [[menu.main]]
    name = "Tutorials"
    url = "/tutorials/"
    weight = 3
```

## Shortcodes

Shika includes several custom shortcodes to enhance your content:

- `split-article`: Creates a split view for comparing content (see [dedicated documentation](/en/tutorials/theme-documentation/))
- `figure`: Enhanced image display with captions
- `citation`: Properly formatted academic citations

Example of the figure shortcode:

```
{{</* figure src="/img/example.jpg" caption="This is an example image" */>}}
```

## Customizing CSS

The theme's appearance can be customized by modifying the CSS files in `static/css/`. The main files you might want to edit include:

- `style.css`: Core styles
- `home.css`: Home page specific styles
- `article.css`: Article page styles
- `list_article.css`: Listing page styles

## Best Practices

1. **Use featured images**: Each post and tutorial should have a featured image for better visual engagement
2. **Organize with tags**: Use tags consistently to help visitors navigate related content
3. **Follow semantic structure**: Use appropriate heading levels (H1, H2, etc.) within your content
4. **Optimize images**: Compress images before uploading to improve page load times
5. **Test responsive behavior**: Preview your site at different screen sizes to ensure a good mobile experience

## Troubleshooting

- **Missing styles**: Ensure the correct CSS files are being loaded in the head
- **Image display issues**: Check image paths and ensure they're relative to the static directory
- **Layout breaks**: Inspect the page structure to find where elements might be overflowing

---

This guide covers the basics of using the Shika theme. For more detailed instructions on specific features, check out the other documentation pages in this section. 