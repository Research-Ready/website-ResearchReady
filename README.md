# Research-Ready website

Astro site for research-ready.nl, with Dutch (default) and English content.

- `npm install` — install dependencies
- `npm run dev` — run the dev server
- `npm run build` — build the static site to `dist/`
- `npm run preview` — preview the production build locally

## Structure

- `src/pages/` — Dutch pages (default locale, unprefixed URLs)
- `src/pages/en/` — English pages (`/en/...`)
- `src/i18n/nl.ts`, `src/i18n/en.ts` — page copy per language
- `src/layouts/BaseLayout.astro` — shared page shell, head tags, hreflang links
- `src/components/` — Navbar (language toggle), Footer, Cal.com booking embed

## Before launch

- Replace the placeholder `calLink` in `src/components/CalEmbed.astro` with the real Cal.com event link once that account exists.
- Provision the `info@research-ready.nl` mailbox and DNS records at the registrar.
