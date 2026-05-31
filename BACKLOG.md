# rawbuild.de — Project Backlog

## Project Overview

Personal portfolio website to showcase apps and development work.

- **Domain**: rawbuild.de
- **Stack**: Astro + Tailwind CSS
- **Hosting**: GitHub Pages (free tier) with custom domain
- **Deployment**: GitHub Actions — build with `astro build`, deploy to `gh-pages` branch via `actions/deploy-pages` on push to `main`

---

## Epics & User Stories

---

### EPIC 1 — Project Setup `[DONE]`

**US-001** `[DONE]` — Initialize Astro project
- Create new Astro project with TypeScript support
- Install and configure Tailwind CSS
- Set up folder structure: `src/pages`, `src/components`, `src/layouts`, `src/data`, `public/`
- Add `.devcontainer/devcontainer.json` for dev container support

**US-002** `[DONE]` — Configure base layout
- Create `BaseLayout.astro` with `<head>` meta tags
- Add SEO meta: title, description, Open Graph tags, canonical URL
- Add favicon
- Make layout accept `title` and `description` props per page

**US-003** `[DONE]` — Configure GitHub Pages deployment
- Add `.github/workflows/deploy.yml` — GitHub Actions workflow that runs `astro build` and deploys `dist/` to GitHub Pages using `actions/upload-pages-artifact` + `actions/deploy-pages`
- Set `site: 'https://rawbuild.de'` in `astro.config.mjs` so Astro generates correct canonical URLs and sitemap entries
- Add `public/CNAME` containing `rawbuild.de` so GitHub Pages preserves the custom domain after each deploy
- Document DNS setup steps for rawbuild.de in `README.md` (A records pointing to GitHub Pages IPs, CNAME for www)

---

### EPIC 2 — Hero Section `[DONE]`

**US-004** `[DONE]` — Build Hero component
- Full-viewport-height section
- Display name (e.g. "Hi, I'm [Name]")
- One-liner tagline (e.g. "I build useful things")
- CTA button "See my work" that smooth-scrolls to Projects section
- Minimal layout, generous whitespace, no background image

---

### EPIC 3 — About Section `[DONE]`

**US-005** `[DONE]` — Build About component
- Short bio paragraph (2–4 sentences): who you are, what you build, what drives you
- Location and current focus line
- Content stored as a string in `src/data/about.ts` so it's easy to update

---

### EPIC 4 — Skills Section `[DONE]`

**US-006** `[DONE]` — Build Skills component
- Responsive tag/pill grid listing technologies and tools
- Skills stored as a flat array in `src/data/skills.ts`
- Example skills: TypeScript, React Native, Flutter, Astro, Tailwind CSS, Firebase, Git
- No icons needed for v1 — plain text tags only

---

### EPIC 5 — Projects Section `[DONE]`

**US-007** `[DONE]` — Create projects data file
- Create `src/data/projects.ts` with a typed `Project` interface:
  ```ts
  interface Project {
    name: string
    description: string
    techStack: string[]
    status: 'live' | 'in-progress' | 'open-source'
    githubUrl?: string
    demoUrl?: string
    coverImage?: string
  }
  ```
- Add initial entries:
  - Fitness Tracker
  - Water Intake Tracker

**US-008** `[DONE]` — Build ProjectCard component
- Display: app name, description, tech stack tags, status badge, links
- Status badge colors: `live` → green, `in-progress` → amber, `open-source` → blue
- GitHub and demo links open in new tab
- Show demo link only if `demoUrl` is defined
- Show GitHub link only if `githubUrl` is defined
- Cover image slot — show placeholder if no image provided

**US-009** `[DONE]` — Build Projects section
- Responsive card grid: 1 col mobile, 2 col tablet, 3 col desktop
- Renders all projects from `src/data/projects.ts`
- Section title: "Apps & Projects"

---

### EPIC 6 — Contact Section `[DONE]`

**US-010** `[DONE]` — Build Contact component
- Section title: "Get in touch"
- Short line of text (e.g. "I'm always open to interesting conversations.")
- Three links: Email, GitHub, LinkedIn
- Links as icon + label pairs — no contact form
- Links open in new tab except email (uses `mailto:`)
- Social URLs and email stored in `src/data/contact.ts`

---

### EPIC 7 — Navigation & Footer `[DONE]`

**US-011** `[DONE]` — Build Navigation component
- Fixed top navbar
- Logo/name on the left: "rawbuild"
- Nav links on the right: About, Skills, Projects, Contact
- Smooth scroll to section on click
- Collapses to hamburger menu on mobile

**US-012** `[DONE]` — Build Footer component
- Single line: copyright + year
- Link to GitHub profile
- Keep it minimal — no duplicate nav links

---

### EPIC 8 — Dark Mode `[DONE]`

**US-013** `[DONE]` — Implement dark mode toggle
- Respect `prefers-color-scheme` system setting on first load
- Toggle button in navbar to override system preference
- Persist user preference in `localStorage`
- Use Tailwind's `dark:` variant classes throughout — no custom CSS

---

### EPIC 9 — Performance & SEO

**US-014** — Image optimization
- Use Astro's built-in `<Image />` component for all images
- Add `alt` text to every image
- Use WebP format for cover images

**US-015** — SEO & Open Graph
- Unique `<title>` and `<meta name="description">` per page
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- Add `robots.txt` and `sitemap.xml` via `@astrojs/sitemap` integration

**US-016** — Performance baseline
- Run Lighthouse audit after first deployment
- Target scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- Fix any issues before marking epic done

---

### EPIC 10 — Responsive Design

**US-017** — Mobile-first layout review
- Test all sections on 375px, 768px, 1280px viewports
- Ensure navbar hamburger menu works correctly on mobile
- Ensure project card grid stacks correctly on small screens
- Ensure no horizontal scroll on any viewport width

---

## Backlog (Future / Not in v1)

- **Blog / Devlog** — markdown-based posts about what I'm building
- **App detail pages** — individual page per project with full screenshots and feature list
- **Analytics** — add Umami (self-hosted, privacy-friendly) or Plausible
- **RSS feed** — for blog posts via `@astrojs/rss`
- **Animations** — subtle scroll-triggered entrance animations (View Transition API)
- **i18n** — German language version

---

## Definition of Done

A user story is done when:
- [ ] Feature works correctly on desktop and mobile
- [ ] No TypeScript errors (`astro check` passes)
- [ ] No console errors in browser
- [ ] Committed to `main` and deployed to Netlify