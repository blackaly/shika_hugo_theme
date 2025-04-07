# 🌟 Shika Hugo Theme

**Shika** is a modern, elegant Hugo theme designed for bloggers, writers, and content creators. With its clean design and feature-rich layout, Shika makes your content shine while providing an excellent user experience.

## ✨ Features

- **Beautiful Design** - Clean, modern aesthetics with attention to typography and spacing
- **Fully Responsive** - Looks perfect on all devices from mobile to desktop
- **Customizable Home Page** - Showcase your content with various layouts
- **Multi-language Support** - Built-in support for English and Arabic (RTL)
- **Content Types** - Optimized templates for blog posts and tutorials
- **Split-article Shortcode** - Create beautiful side-by-side content comparisons
- **Fast Performance** - Optimized for speed and SEO

## 📋 Quick Start

### Option 1: With Git (Recommended)

```bash
# Create a new Hugo site
hugo new site my-blog
cd my-blog

# Initialize git and add the Shika theme
git init
git submodule add https://github.com/blackaly/shika_hugo_theme.git themes/Shika

# Create a config file
cat > config.toml <<EOF
baseURL = "/"
languageCode = "en-us"
title = "My Blog"
theme = "Shika"
EOF

# Start the Hugo server
hugo server -D
```

### Option 2: With Docker

```bash
# Clone the repository
git clone https://github.com/blackaly/shika_hugo_theme.git
cd shika_hugo_theme

# Build and run with Docker
docker build -t shika_theme .
docker run -p 1313:80 shika_theme

# Access your site at http://localhost:1313
```

## 🛠️ Configuration

### Basic Site Configuration

```toml
baseURL = "/"
languageCode = "en-us"
title = "My Amazing Blog"
theme = "Shika"

# Optional: Enable multilingual support
[languages]
  [languages.en]
    languageName = "English"
    weight = 1
  [languages.ar]
    languageName = "العربية"
    weight = 2
    rtl = true

# Navigation Menu
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
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 4
```

## 📝 Content Creation

### Multilingual Content

Shika theme supports both English and Arabic content. Here's how to create content for both languages:

#### Creating Posts

For **English** posts:
```bash
# Create a new post in English
hugo new content/en/posts/my-post.md
```

```yaml
---
title: "My English Post Title"
date: 2023-04-07T10:00:00-05:00
tags: ["blog", "example"]
image: "/img/my-featured-image.jpg"
draft: false
---

Your English content here.
```

For **Arabic** posts:
```bash
# Create a new post in Arabic
hugo new content/ar/posts/my-post.md
```

```yaml
---
title: "عنوان المقالة بالعربية"
date: 2023-04-07T10:00:00-05:00
tags: ["مدونة", "مثال"]
image: "/img/my-featured-image.jpg"
draft: false
---

المحتوى العربي هنا.
```

#### Creating Tutorials

For **English** tutorials:
```bash
# Create a new tutorial in English
hugo new content/en/tutorials/getting-started.md
```

```yaml
---
title: "Getting Started Guide"
date: 2023-04-07T10:00:00-05:00
tags: ["tutorial", "beginners"]
image: "/img/tutorial-image.jpg"
weight: 1
draft: false
---

Your English tutorial content here.
```

For **Arabic** tutorials:
```bash
# Create a new tutorial in Arabic
hugo new content/ar/tutorials/getting-started.md
```

```yaml
---
title: "دليل البدء"
date: 2023-04-07T10:00:00-05:00
tags: ["درس", "مبتدئين"]
image: "/img/tutorial-image.jpg"
weight: 1
draft: false
---

محتوى الدرس بالعربية هنا.
```

> **Note**: The `weight` parameter determines the order in which tutorials appear on the page. Lower values appear first.

### Translation Management

For the best user experience, create matching content in both languages:

1. When creating a new post or tutorial, create both English and Arabic versions.
2. Keep the same filename in both language directories for easier management.
3. Use the same `weight` parameter in both language versions to maintain consistent ordering.

Example of corresponding files:
- `content/en/posts/welcome.md`
- `content/ar/posts/welcome.md`

## 🧩 Shortcodes

### Split Article Shortcode

This theme includes a powerful split-article shortcode that allows you to create side-by-side comparisons:

```
{{< split-article 
    left="### Left Side Content"
    right="### Right Side Content"
    leftPoint="Left Label" 
    rightPoint="Right Label"
    note="A connecting note between the two sides"
    direction="horizontal"
>}}
```

For detailed documentation and examples, see the [Split Article Documentation](/tutorials/theme-documentation/).

## 🎨 Customization

### CSS Customization

The theme's appearance can be customized by modifying the CSS files in `static/css/`:

- `style.css`: Core styles
- `home.css`: Home page styles
- `article.css`: Article page styles
- `list_article.css`: Listing page styles

## 🔍 Troubleshooting

### Common Issues

- **Theme Not Working**: Make sure the theme name is set to "Shika" (case-sensitive) in your config.toml
- **Missing Styles**: Check that all CSS files are properly loaded in the head partial
- **Images Not Displaying**: Ensure image paths are correct and files exist in the static directory
- **Language Switching**: Verify that your multilingual configuration is correct in config.toml

If you encounter any issues, please [open an issue](https://github.com/blackaly/shika_hugo_theme/issues) on GitHub.

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💖 Acknowledgements

- [Hugo](https://gohugo.io/) for the amazing static site generator
- [Font Awesome](https://fontawesome.com/) for the icons
- All the contributors who make this project better! 