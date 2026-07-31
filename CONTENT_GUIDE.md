# NI18 Content Management Guide (Markdown & MDX)

The NI18 website is **CMS-free**. All content is managed using Markdown (`.md`) and MDX (`.mdx`) files located in `src/content/`.

---

## How to Create a New Blog Post

To add a new blog article, simply create a new Markdown/MDX file in `src/content/blog/`:

**File Path**: `src/content/blog/your-article-title.mdx`

```mdx
---
title: "Your Article Title"
description: "A compelling summary of the article for search engines."
pubDate: 2026-08-01
author: "Nikhil Sharma"
category: "Android Development"
tags: ["Android", "Kotlin", "Compose"]
featured: false
---

## Introduction

Write your Markdown or MDX content here.

### Features
- Native support for syntax highlighting
- Auto-generated Table of Contents
- Social sharing and reading time calculations
```

**No coding or routing changes are required.** The site automatically creates `/blog/your-article-title` and updates pagination, category, tag, sitemap, and RSS feeds on the next build!

---

## How to Create or Edit Service Pages

- **File Path**: `src/content/services/service-name.md`
- Include frontmatter fields: `title`, `description`, `icon`, `summary`, `features`, `order`.

## How to Create or Edit Apps & Products

- **Apps**: `src/content/apps/app-name.md`
- **Products**: `src/content/products/product-name.md`
- **Case Studies**: `src/content/case-studies/study-name.md`
- **Careers**: `src/content/careers/job-name.md`
