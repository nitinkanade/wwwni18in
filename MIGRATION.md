# NI18 Google Sites Migration & Legacy URL Preservation Strategy

This document outlines the strategy and technical mechanisms used to migrate from Google Sites (`https://sites.google.com/view/ni18/home`) to GitHub Pages with custom domain (`https://www.ni18.in`), ensuring zero negative impact on search engine indexing or SEO rankings.

---

## 1. URL Mapping Strategy

| Legacy Google Sites Route | New Canonical Route | Migration Mechanism |
| :--- | :--- | :--- |
| `https://sites.google.com/view/ni18/home` | `https://www.ni18.in/` | Static HTML Redirect + 404 Matcher + Canonical Tag |
| `https://sites.google.com/view/ni18/about` | `https://www.ni18.in/about` | Static HTML Redirect + 404 Matcher + Canonical Tag |
| `https://sites.google.com/view/ni18/services` | `https://www.ni18.in/services` | Static HTML Redirect + 404 Matcher + Canonical Tag |
| `https://sites.google.com/view/ni18/contact` | `https://www.ni18.in/contact` | Static HTML Redirect + 404 Matcher + Canonical Tag |
| `/home` | `https://www.ni18.in/` | 404 Client Matcher + Canonical Tag |

---

## 2. Multi-Layered Redirect Implementation

### Layer 1: Static HTML Redirect Alias Pages
Static HTML files are generated at `src/pages/view/ni18/home/index.astro`, `about/index.astro`, `services/index.astro`, and `contact/index.astro`.
When a user or search crawler accesses these legacy paths, the browser receives:
```html
<meta http-equiv="refresh" content="0;url=/about" />
<link rel="canonical" href="https://www.ni18.in/about" />
```

### Layer 2: Client-Side 404 Redirect Matcher
The `src/pages/404.astro` template includes an inline route matcher script that intercepts requests to legacy Google Sites paths or `.html` extensions and redirects immediately to the canonical route.

### Layer 3: Canonical URLs & XML Sitemap
Every page includes a `<link rel="canonical" href="...">` tag pointing to the new domain, and `sitemap-index.xml` informs search engines of all new pages.
