# Madlas Global

Marketing website for **Madlas Global**, a steel manufacturing & fabrication
company. Built with the latest **Next.js (App Router)**, TypeScript, and
Tailwind CSS v4, styled in a **gold / black / white** industrial theme.

## Tech Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- Fully static-friendly rendering (SSG for blog posts, static pages elsewhere)

## SEO Features

- Centralized metadata builder (`src/lib/seo.ts`) — canonical URLs, Open
  Graph, Twitter cards, and keyword tags on every route.
- Structured data (JSON-LD) for `Organization`, `WebSite`, `BreadcrumbList`,
  `Service`, `Article`, and `FAQPage` (`src/lib/json-ld.ts`).
- Dynamic `sitemap.xml`, `robots.txt`, and `manifest.webmanifest`
  (`src/app/sitemap.ts`, `robots.ts`, `manifest.ts`).
- Semantic HTML (`header`/`nav`/`main`/`section`/`article`/`footer`), a single
  `<h1>` per page, and a "skip to content" link.
- `next/font` (Oswald + Inter, `display: swap`) for fast, self-hosted fonts.
- Descriptive `alt`/`aria` attributes and accessible focus states.

## Pages

| Route | Description |
| --- | --- |
| `/` | Full homepage (hero, services, process, team, testimonials, projects, blog, FAQ, CTA) |
| `/about` | Company story, mission/vision, values, timeline, team |
| `/services` | Full service catalog with details |
| `/products` | Product catalog with specs |
| `/projects` | Project/portfolio showcase |
| `/blog` + `/blog/[slug]` | Blog listing and individual article pages (SSG) |
| `/contact` | Contact form, contact details, map placeholder |
| `/privacy-policy`, `/terms-of-service` | Legal placeholder pages |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Notes

- Content in `src/lib/data.ts` (services, products, projects, blog posts,
  team, testimonials, FAQs) is placeholder/dummy data — swap in real content,
  imagery, and copy before launch.
- Update `src/lib/site-config.ts` with real contact details, social links,
  and domain before deploying.
- Replace the SVG-based visuals with real photography (`next/image`) for
  production.
