# Eonbyte Technologies Pvt Ltd Website

A modern, responsive, scrollable one-page React website for Eonbyte Technologies Pvt Ltd, built with Vite and Tailwind CSS.

## Features
- Hero section with brand, logo, tagline, and CTA
- Partner brands carousel (auto/manual scroll)
- Responsive categories grid (animated)
- Dynamic product pages per category
- Footer with company info, links, and social icons
- Loading animation on route switch
- Smooth scroll and hover animations
- Easy-to-update data files for categories/products
- All images have alt text for accessibility

## File Structure
```
public/
  brands/         # Partner brand logos (brand1.png ... brand8.png)
  icons/          # Category icons (category1.svg ... category9.svg)
  products/       # Product images organized by category
  logo-placeholder.svg
src/
  components/     # All React components
  data/           # categories.js and products.json
  pages/          # Home.jsx and CategoryPage.jsx
  App.jsx         # Main app with routing
  main.jsx        # Entry point
  index.css       # Tailwind and custom styles
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Add your own images and update data in `src/data/` as needed.

---

**Made with ❤️ using React + Tailwind CSS** 