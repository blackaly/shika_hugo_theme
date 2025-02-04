# Shika Hugo Theme

**Shika** is a clean and modern Hugo theme designed for bloggers who want a simple yet elegant way to showcase their content. It is lightweight, responsive, and easy to customize.

### Key Features
- Responsive design
- Syntax highlighting for code blocks
- SEO-friendly **(Soon)**
- Customizable homepage layout
- Support for Hugo menus and taxonomies

## Installation

### Step 1: Create a New Hugo Site
If you don’t already have a Hugo site, create one:

```bash
hugo new site my-blog
cd my-blog

git init
git submodule add https://github.com/blackaly/shika_hugo_theme.git themes/shika
theme = "shika"
hugo server -D
```
## Docker Installation

```bash
docker build -t shika_theme .
docker run -p 8085:80 shika_theme
```


---

## Configuration

### Basic Configuration
Here’s an example `config.toml` file:
```toml
baseURL = "/"
languageCode = 'en-us'
title = 'My New Hugo Site'
theme = 'Shika'
contentDir = "content"
publishDir = "public"
```

## Troubleshooting

### Theme Not Applied
Ensure the theme is set correctly in `config.toml`:
```toml
theme = "Shika"
```
If the theme is not cloned, run:
```bash
git submodule update --init --recursive
```

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature
```