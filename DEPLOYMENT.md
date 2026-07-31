# GitHub Pages & Custom Domain Deployment Guide

This guide details the steps to deploy the NI18 website to GitHub Pages with the custom domain `www.ni18.in`.

---

## 1. Automated GitHub Actions Deployment

The repository includes an automated workflow at `.github/workflows/deploy.yml`.

### How it works:
1. Every push to `main` or `master` branch triggers the build job.
2. The workflow sets up Node.js 20, installs dependencies with `npm ci`, and runs `npm run build`.
3. Astro generates static HTML files in `dist/` and Pagefind builds the search index.
4. The static artifacts are published to GitHub Pages.

---

## 2. GitHub Repository Configuration

1. Go to your GitHub repository: `https://github.com/ni18/wwwni18in` (or repository name).
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `GitHub Actions`.
4. Under **Custom domain**:
   - Enter `www.ni18.in`.
   - Check **Enforce HTTPS**.

---

## 3. DNS Configuration for `www.ni18.in`

Configure the following records with your domain registrar (e.g. Cloudflare, Namecheap, GoDaddy):

### CNAME Record (Recommended)
- **Type**: `CNAME`
- **Name / Host**: `www`
- **Target / Value**: `ni18.github.io`
- **TTL**: Auto or 3600

### Apex / Root Domain A Records (for `ni18.in`)
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`
