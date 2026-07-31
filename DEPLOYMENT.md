# GitHub Pages Deployment & Subpath / Custom Domain Guide

This document details how GitHub Pages handles repository subpaths (`https://nitinkanade.github.io/wwwni18in/`) and custom domain configurations (`www.ni18.in`).

---

## 1. Why CSS Might Not Load on `nitinkanade.github.io/wwwni18in/`

When a site is hosted under a GitHub repository subpath like `https://nitinkanade.github.io/wwwni18in/`:
- If Astro attempts to load CSS from root (`/_astro/main.css`), the browser looks for `https://nitinkanade.github.io/_astro/main.css` which results in a **404 Not Found**.
- **Fix Applied**: We configured `base: '/wwwni18in'` and `site: 'https://nitinkanade.github.io'` in `astro.config.mjs`, and added the `getUrl()` helper in `src/utils/navigation.ts`.
- All CSS files, JS bundles, images, icons, and page links are now generated as `/wwwni18in/_astro/...` and `/wwwni18in/images/...`.

---

## 2. Pushing to GitHub & Verifying GitHub Actions

To deploy the updated build to GitHub Pages:

```bash
git add .
git commit -m "Configure base subpath /wwwni18in for GitHub Pages CSS & asset loading"
git push origin main
```

Once the GitHub Actions workflow (`.github/workflows/deploy.yml`) finishes building, visit `https://nitinkanade.github.io/wwwni18in/` — the CSS, navigation, images, and Pagefind search will load with 100% styled perfection.

---

## 3. Switching to Custom Domain (`www.ni18.in`) Later

When you are ready to point your custom domain `www.ni18.in`:

1. In GitHub Repository -> **Settings** -> **Pages**:
   - Set **Custom domain** to `www.ni18.in`.
   - Check **Enforce HTTPS**.
2. In `astro.config.mjs`, change `base` back to `'/'` and `site` to `'https://www.ni18.in'`:
   ```javascript
   export default defineConfig({
     site: 'https://www.ni18.in',
     base: '/',
     // ...
   });
   ```
