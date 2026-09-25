# Serhat Aslan | Portfolio

Personal portfolio of Serhat Aslan, Data Engineer — live at **[serhataslan.com](https://www.serhataslan.com)**.

Built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS**, deployed on Vercel.

## Features

- Statically rendered pages; Medium articles fetched server-side and revalidated hourly (ISR)
- All profile content in one place: [`src/lib/site.ts`](src/lib/site.ts) — keep it in sync with the resume PDF
- SEO: per-page metadata and canonical URLs, generated `sitemap.xml` / `robots.txt`, Open Graph image, JSON-LD `Person` data
- Light/dark theme (follows the system by default), accessible navigation and forms
- Short links: `/cv` and `/resume` open the resume PDF

## Getting started

```bash
npm install
npm run dev
```

## Updating content

| What | Where |
| --- | --- |
| Experience, projects, skills, links | `src/lib/site.ts` |
| Resume PDF | `public/Resume_Serhat.pdf` |
| Social preview image | `src/app/opengraph-image.tsx` |

## Project structure

- `src/app` — routes (`/`, `/projects`, `/blog`, `/contact`), metadata, sitemap, robots
- `src/components` — Navbar, Footer, cards
- `src/lib` — site content and the Medium feed loader
