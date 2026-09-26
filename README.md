# Nagavamsi M — Portfolio

Personal portfolio / resume site built with **React + TypeScript + Vite**.

## Getting started

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
```

Requires Node.js 20.19+ (or 22+).

## Project structure

```
public/                 Static files served as-is (resume .docx, photo)
src/
  data/                 All content — edit these to update the site
    profile.ts          Name, summary, stats, typing phrases, contact links
    skills.ts           Skill groups
    experience.ts       Work history
  components/           UI components (one per section + small shared pieces)
  hooks/                Animation hooks (typewriter, count-up, reveal, parallax)
  styles/
    theme.css           Color palette + fonts — change colors here
    global.css          Layout and component styles
  types.ts              Shared TypeScript types
  App.tsx               Page layout
  main.tsx              Entry point
```

## Updating content

- **Text / jobs / skills:** edit the files in `src/data/`.
- **Colors:** edit the variables in `src/styles/theme.css`. Tags and cards use a
  `tone` (`primary`, `secondary`, `green`, `amber`, `rose`, `neutral`) that maps to
  those variables.
- **Resume file:** replace `public/Nagavamsi.Meduri.docx`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. In the repo settings, set
**Settings → Pages → Source** to **GitHub Actions**.
