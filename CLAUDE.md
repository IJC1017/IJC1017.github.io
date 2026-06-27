# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static website for イノベーション情報株式会社 (branded as 王子建設不動産) — a Tokyo-based real estate, renovation, and study-abroad agency. Deployed via **GitHub Pages** from the `main` branch with a custom domain (`www.ijc1017.com`).

**Legacy files at the repo root** (`index.html`, `intro.html`, `contact.html`) are the original hand-written static site — kept as reference but no longer maintained.

**Active development is in `astro-site/`**, an Astro v4 project that rebuilds the site with shared components.

## Commands

```bash
cd astro-site

npm install          # install dependencies (needed once)
npm run dev          # start dev server (http://localhost:4321)
npm run build        # build to astro-site/dist/
npm run preview      # preview the build output locally
```

Astro | Node.js 20.5+ is supported (Astro 5 would need Node 22+).

## Project structure (astro-site)

```
astro-site/
├── public/
│   ├── CNAME                  # www.ijc1017.com
│   └── assists/images/        # all image assets
├── src/
│   ├── layouts/BaseLayout.astro   # <head>, <header>, <footer>, company-info
│   └── pages/
│       ├── index.astro        # homepage (hero, about, services, dept-intro)
│       ├── intro.astro        # company profile / recruitment
│       └── contact.astro      # contact form (EmailJS)
├── astro.config.mjs
├── package.json
└── dist/                      # build output (deployed to GitHub Pages)
```

## Architecture

- **`BaseLayout.astro`** is the single shared layout. It renders `<head>`, the sticky `<header>` (logo, contact info, hamburger toggle), each page's `<nav>` links via a **named slot** (`<slot name="nav" />`), the page body via the default `<slot />`, and the shared footer/company-info section. Changes to header or footer happen here once and apply everywhere.
- **Nav links** differ per page: on `index.astro` they point to `/#dynamic-services`, `/#department-intro` etc.; on `intro.astro` and `contact.astro` those same links point to `/#dynamic-services` and `/#department-intro` (full URL to homepage anchors).
- **Page-specific CSS** lives in a `<style>` block inside each page component. The shared global CSS (header, nav, footer, responsive breakpoints) lives in `BaseLayout.astro`.
- **Page-specific JS** lives in a `<script>` block at the bottom of each page. The shared `copyToClipboard` function and hamburger-menu toggle live in `BaseLayout.astro`.

## Deployment

Build then deploy `dist/` to GitHub Pages:

```bash
cd astro-site && npm run build
```

The `astro-site/dist/` folder is the site root. `CNAME` is copied there automatically from `public/`. Currently GitHub Pages is configured to serve from the repo root — to switch to Astro, point GitHub Pages at the `astro-site/dist/` directory (or use a GitHub Action to deploy on push).

## Key technical details

- **Responsive breakpoints**: 1024px (tablet), 768px (mobile). Mobile nav: hamburger slide-in drawer.
- **Scroll animations** (homepage only): `IntersectionObserver` — `.section` and `.hero` get `.is-visible` on scroll.
- **Interactive service cards** (homepage only): Clicking `.service-item` toggles `.is-active`, expanding the card and revealing `.service-intro`. Background images set via `data-bg-url` attribute → CSS custom property `--bg-url`.
- **Contact form**: EmailJS v3 (CDN). Public key `Du5s6wCOIH4_VBCD8`, service `service_kt9avrg`, template `template_d08oy78`. 30-second cooldown after submit.
- **Icons**: Google Material Symbols (not Material Icons).
- **Font stack**: `Hiragino Kaku Gothic ProN`, Meiryo, sans-serif.
