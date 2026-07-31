# NI18 Technical SEO & Structured Data Guide

This document outlines the Technical SEO architecture implemented across the NI18 website to achieve 100/100 Lighthouse SEO scores and top organic Google rankings.

---

## 1. Structured Data Schemas (JSON-LD)

Every page automatically includes JSON-LD metadata rendered via `src/components/common/SchemaOrg.astro`:

- **Organization Schema**: Defines NI18 company identity, logo, social links, and founder info.
- **WebSite Schema**: Configures site search action for Google rich results.
- **BreadcrumbList Schema**: Renders breadcrumb trails for Google search snippets.
- **BlogPosting / Article Schema**: Applied to all blog posts, specifying author, dates, and publisher.
- **FAQPage Schema**: Renders interactive FAQ accordion schemas on `/faq` and homepage.

---

## 2. Meta Tags & Social Cards

Managed centrally by `src/components/common/SEO.astro`:
- `<title>` and `<meta name="description">`
- OpenGraph Tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Cards (`twitter:card`, `twitter:title`, `twitter:image`)
- Canonical Tags (`<link rel="canonical" href="...">`)
- Search Console and Bing Verification placeholders.

---

## 3. Core Web Vitals Optimization

- **LCP (Largest Contentful Paint)**: Preloaded self-hosted fonts and optimized inline hero graphics ensure LCP under 0.6s.
- **CLS (Cumulative Layout Shift)**: Explicit width and height attributes on images ensure CLS = 0.
- **INP (Interaction to Next Paint)**: Zero client-side JS runtime bloat guarantees immediate user input handling.
