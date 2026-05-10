# Sentium - sentium.app

The Sentium Ltd marketing site. Next.js 15 (static export) + Tailwind v4, hosted on Azure Static Web Apps with a linked Azure Function for the contact form.

## Stack

- **Next.js 15** (App Router) + **TypeScript** strict, exported as static (`output: 'export'`)
- **Tailwind CSS v4** with brand tokens defined in `globals.css`
- **Framer Motion** for the hero constellation + section reveals
- **Embla Carousel** for the projects strip
- **Zod** for contact-form validation (shared schema between client and the Function)
- **Azure Functions v4 (Node 20)** for `/api/contact`, uses **Resend** to email `support@sentium.app`

## Project layout

```
src/
  app/                 Next.js App Router entry (layout, page, globals.css)
  ui/
    sections/          Header, Hero, About, FocusAreas, Projects, Contact, Footer
    components/        Button, Constellation, ProjectCarousel, ContactForm, ...
    primitives/        SectionHeading
  domain/
    contact/           Zod schema shared with the Function
    projects/          Project type + content
  infrastructure/
    email/             Server-only helpers
api/
  src/functions/contact.js   POST /api/contact (Resend + zod + per-IP rate limit)
  host.json
  package.json
public/branding/       Logo + favicon
staticwebapp.config.json   SWA routing/headers for the static export
```

Convention: `ui` may import from `domain`; `domain` and `infrastructure` never import from `ui`. Cross-module imports go through each folder's `index.ts` barrel.

## Local development

Prereqs: Node 20+, npm, optional [Azure Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/) for the API.

```bash
# install web deps
npm install

# install API deps
cd api && npm install && cd ..

# Next dev server (no API)
npm run dev   # → http://localhost:3000
```

To run the API alongside the static site, build then use the SWA emulator:

```bash
npm install -g @azure/static-web-apps-cli azure-functions-core-tools@4
npm run build                             # produces /out
swa start out --api-location api          # → http://localhost:4280
```

### Env vars

Copy `.env.example` to `.env.local` for the Next side (none currently consumed at build time, but reserved). For the Function, copy `api/local.settings.json.example` to `api/local.settings.json` and fill in:

| Key | Example | Purpose |
|---|---|---|
| `RESEND_API_KEY` | `re_xxx` | Resend API key (Sending access on `sentium.app`) |
| `RESEND_FROM` | `Sentium <hello@sentium.app>` | Verified sender |
| `SUPPORT_EMAIL` | `support@sentium.app` | Inbox the form delivers to |

## Deploy

Hosted on **Azure Static Web Apps (Free tier)** with the `/api` folder linked as a managed Function. The GitHub Action that SWA generates on first deploy handles build + publish; leave it as-is.

After provisioning, set the three Resend env vars in the Azure Portal under *Configuration → Application settings* on the Static Web App resource.

## Acceptance checklist

- `npm run build` succeeds with no TS or ESLint errors
- Lighthouse mobile ≥ 95 across Performance / Accessibility / Best Practices / SEO
- Hero constellation animates, static under `prefers-reduced-motion`
- Projects carousel keyboard-operable (Arrow Left/Right while focused)
- Contact form: success swaps form for confirmation; failure preserves values; honeypot drops silently
- No secrets committed (`.env.local`, `api/local.settings.json` are gitignored)
