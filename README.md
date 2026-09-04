# Rahil Barawal — Personal Portfolio

Premium personal developer portfolio for **Rahil Barawal**, Mobile App Developer & Frontend Developer.

Deployed as a standalone **Next.js → Vercel** application. No backend, database, API keys, or Railway dependency for this site.

## Overview

Recruiter-focused portfolio showcasing:

- Professional experience (Swivelt, Nityo / Istrives)
- Frontend & mobile expertise (Angular, Ionic, React, Next.js, TypeScript)
- AI / full-product engineering (Next.js, Node.js, PostgreSQL, RAG, payments)
- Live products: DhandaMart, AidLoop, RupeeRadar, The Draft Desk, Study Pilot Engine

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Vercel deployment

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Use default Next.js settings (no env vars required).
4. Deploy.

Architecture for this portfolio: **Next.js → Vercel only**.

## Where profile information lives

All personal contact and positioning data:

```text
src/data/profile.ts
```

Update name, title, email, phone, GitHub, LinkedIn, SEO copy, and related fields there. Components consume this file instead of hardcoding profile URLs.

## Where projects live

```text
src/data/projects.ts
```

Each project follows the `Project` interface (`slug`, `title`, `subtitle`, `description`, `technologies`, `highlights`, `category`, optional `liveUrl` / `githubUrl`, etc.).

### Add a new project

1. Append an object to the `projects` array in `src/data/projects.ts`.
2. Set a unique `slug` (used for `/projects/[slug]`).
3. Choose `category`: `"Frontend" | "Mobile" | "Full Stack" | "AI"`.
4. Add `liveUrl` / `githubUrl` only when real.
5. Optionally set `featured: true` for the primary featured project.
6. Rebuild / redeploy.

Related data files:

- `src/data/experience.ts` — work history
- `src/data/skills.ts` — skill groups
- `src/data/education.ts` — education & certifications

## Project structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
    projects/[slug]/page.tsx
  components/
    Navbar.tsx
    Hero.tsx
    CredibilityBar.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    ProjectCard.tsx
    FeaturedProject.tsx
    Contact.tsx
    SocialLinks.tsx
    Footer.tsx
    Education.tsx
  data/
    profile.ts
    projects.ts
    experience.ts
    skills.ts
    education.ts
  lib/
    utils.ts
```

## Notes

- Contact is mailto / LinkedIn / GitHub / phone only — no backend contact form.
- Railway, Supabase, PostgreSQL, etc. may appear in **project** tech stacks; they are not used by this portfolio app.
- Update `siteUrl` in `src/data/profile.ts` after you know your final Vercel domain (used for sitemap, canonical, and JSON-LD).
# Rahil-Portfolio
