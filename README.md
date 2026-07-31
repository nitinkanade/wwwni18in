# NI18 Modern Company Website & Web Platform

Official website and digital publishing platform for **NI18** ([www.ni18.in](https://www.ni18.in)).

Built with **Astro 5+**, **TypeScript (Strict Mode)**, **MDX**, **Material Design 3 (MD3)**, and **Pagefind Static Search**, hosted entirely on **GitHub Pages**.

---

## Key Technical Highlights

- **100/100 Lighthouse Target**: Zero client-side JavaScript bundle bloat by default.
- **Pure Static (SSG)**: No backend servers, no databases, zero hosting maintenance costs.
- **Material Design 3**: Modern color tokens, responsive typography scale, surface elevation levels, and dynamic Light/Dark/System theme switching without FOWT (Flash of Wrong Theme).
- **CMS-Free Markdown/MDX**: Every page and blog post is driven by Astro Content Collections with strict Zod type validation.
- **Static Search**: Fast client-side static indexing using Pagefind.
- **SEO & Core Web Vitals**: Automatic XML Sitemap generation, RSS Feed (`/rss.xml`), Schema.org JSON-LD structured data (`Organization`, `WebSite`, `BlogPosting`, `FAQPage`, `BreadcrumbList`), OpenGraph and Twitter Cards.
- **Legacy Google Sites Preservation**: Full URL preservation for legacy indexed routes (`/view/ni18/*`) using static HTML redirect alias pages, canonical tags, and 404 client-side redirect fallbacks.

---

## Quick Start

### Prerequisites
- Node.js `v20+`
- npm `v10+`

### Local Development

```bash
# Install dependencies
npm install

# Start local Astro development server
npm run dev

# Open http://localhost:4321 in your browser
```

### Production Build & Search Indexing

```bash
# Run type check, build static site, and index search
npm run build

# Preview production output locally
npm run preview
```

---

## Project Structure

```
wwwni18in/
├── .github/workflows/deploy.yml   # GitHub Actions workflow
├── public/                        # Static assets (CNAME, favicon, manifest, robots.txt)
├── src/
│   ├── assets/styles/             # MD3 tokens, typography, component styles, Pagefind
│   ├── components/                # Reusable MD3 buttons, cards, navigation, SEO, SchemaOrg
│   ├── content/                   # CMS-free Markdown & MDX collections (blog, services, products, apps, etc.)
│   ├── layouts/                   # BaseLayout & BlogPostLayout
│   └── pages/                     # SSG routes & legacy URL redirect aliases
├── astro.config.mjs               # Astro SSG & plugin configuration
├── tsconfig.json                  # Strict TypeScript configuration
├── MIGRATION.md                   # Legacy URL mapping & SEO preservation guide
├── DEPLOYMENT.md                  # GitHub Pages & CNAME deployment guide
├── CONTENT_GUIDE.md               # Guide to creating pages & blog posts
└── SEO_GUIDE.md                   # Technical SEO & Schema.org documentation
```
