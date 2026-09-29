# Altairith Capital: website

Static site for [altairith.capital](https://www.altairith.capital), built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Development

```sh
npm ci
npm run dev       # http://localhost:4321
npm run check     # type-check .astro/.ts
npm run build     # outputs ./dist
npm run preview   # serve ./dist
```

Requires Node ≥ 22.12.

## Structure

- `src/data/site.ts`: all copy and company metadata (the single source of truth for the page, JSON-LD and `llms*.txt`)
- `src/components/`: page sections (Hero, About, Chairman, Mission, Group, Values, Contact), `SEO`, `Analytics`, `CookieConsent`
- `src/scripts/hero.ts`: hero canvas animation (respects `prefers-reduced-motion`, pauses offscreen)
- `src/pages/`: `/`, `/privacy/`, `404`, plus `/llms.txt` and `/llms-full.txt` generated from `site.ts`
- `public/`: static assets, `robots.txt`, favicons, web manifest

## Analytics & consent

Trackers are configured at build time and emitted only when their ID is set:

| Variable            | GitHub secret    | Notes                                          |
| ------------------- | ---------------- | ---------------------------------------------- |
| `PUBLIC_CLARITY_ID` | `CLARITY_ID`     | Microsoft Clarity, injected only after consent |
| `PUBLIC_GA_ID`      | `GA_TRACKING_ID` | GA4 with Consent Mode v2 (default: denied)     |

To enable GA4, add the `GA_TRACKING_ID` repository secret and uncomment the `PUBLIC_GA_ID` line in `.github/workflows/deploy.yml`.

The cookie banner (GDPR / Garante-compliant: Accept / Reject / Preferences with equal weight) stores the choice in `localStorage` (`altairith-consent-v1`) for 6 months. “Cookie settings” in the footer reopens it.

## Deploy

`.github/workflows/deploy.yml` runs `check` + `build` on every PR and push. Pushes to `main` publish `./dist` to the `gh-pages` branch (CNAME `www.altairith.capital`).
