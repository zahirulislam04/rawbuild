# rawbuild.de

Personal portfolio website built with [Astro](https://astro.build) and Tailwind CSS.

## Stack

- **Framework**: Astro 6
- **Styling**: Tailwind CSS 4
- **Hosting**: GitHub Pages
- **Domain**: rawbuild.de

## Local development

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # type-check + production build
npm run preview  # preview the production build locally
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys it to GitHub Pages automatically.

### First-time GitHub Pages setup

1. Go to your repo → **Settings → Pages**
2. Set **Source** to `GitHub Actions`
3. Push to `main` — the workflow handles everything

### Custom domain DNS setup (rawbuild.de)

Add the following records at your DNS registrar:

| Type  | Name | Value                   |
| ----- | ---- | ----------------------- |
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | &lt;your-github-username&gt;.github.io |

After DNS propagates, enter `rawbuild.de` in **Settings → Pages → Custom domain** and enable **Enforce HTTPS**.

The `public/CNAME` file ensures GitHub Pages retains the custom domain after each deploy.

## Project structure

```text
/
├── .github/workflows/deploy.yml   # CI/CD pipeline
├── public/
│   ├── CNAME                      # custom domain for GitHub Pages
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```
