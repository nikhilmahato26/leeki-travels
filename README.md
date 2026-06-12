# LIKES CALL TAXI — Pilgrimage Taxi Website

Premium devotional travel website built with React + Vite + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing Content

**Everything lives in one file: `src/data/siteContent.js`**

- Business name, phone, tagline
- Temple packages & prices
- Routes & fares
- Gallery images, testimonials, services

Change it there — every section updates automatically.

## Replacing Images

Current images are Unsplash placeholders. To use real photos:

1. Drop photos into `src/assets/`
2. In `siteContent.js`, import and swap the URLs:
   ```js
   import pkg1 from '../assets/venkateswara.jpg';
   // ...
   image: pkg1,
   ```

If any image fails to load, a sacred-gradient placeholder appears automatically — the site never looks broken.

## How Bookings Work

No backend needed. The booking form validates input (react-hook-form), then opens WhatsApp with a pre-filled message to **+91 8919369510**. Change the number once in `siteContent.js` (`business.phone`).

## Adding Icons

Icons are curated in `src/components/ui/Icons.jsx` (named imports only — keeps the bundle ~19 kB instead of 1 MB+). Add new icons there, then reference by key.

## Tech

React 19 · Vite 8 · Tailwind CSS 3 · Framer Motion · Swiper · React Hook Form · React Router · Lucide / React Icons

## Deploy

Static site — deploy `dist/` to Netlify, Vercel, or Hostinger. For React Router on Netlify, add `public/_redirects` with `/* /index.html 200` if you add more routes later.
