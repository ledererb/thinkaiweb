# ThinkAI — Technical Specification

> Everything an AI agent needs to build a similar multilingual, dark-themed, conversion-focused company website.

---

## Tech Stack

| Layer         | Technology                | Version   |
|---------------|---------------------------|-----------|
| Framework     | **Next.js** (App Router)  | 14.2.35   |
| Language      | **TypeScript**            | ^5        |
| UI Library    | **React**                 | ^18       |
| Styling       | **styled-jsx** (built into Next.js) + `globals.css` |  |
| Fonts         | **Google Fonts** via `next/font/google` | — |
| Deployment    | **Vercel**                | —         |
| Package Mgr   | **npm**                   | —         |

### No external UI libraries

No Tailwind, no CSS Modules, no styled-components. All styling is done via:
1. `globals.css` — CSS custom properties (design tokens), resets, utilities
2. `<style jsx>` / `<style jsx global>` — component-scoped styles within TSX files

---

## Project Structure

```
thinkai-website/
├── public/
│   ├── logo.webp
│   ├── logos/                    # Partner logos (WebP + SVG)
│   └── case-studies/             # Case study images (WebP)
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens & global styles
│   │   ├── layout.tsx            # Root layout (fonts, metadata, cookie consent)
│   │   ├── page.tsx              # Hungarian homepage
│   │   ├── robots.ts             # SEO robots.txt generator
│   │   ├── sitemap.ts            # SEO sitemap generator
│   │   ├── favicon.ico
│   │   ├── en/                   # English routes (mirrors HU structure)
│   │   │   ├── page.tsx
│   │   │   ├── case-studies/
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── grant/page.tsx
│   │   │   ├── method/page.tsx
│   │   │   ├── privacy/page.tsx
│   │   │   ├── cookie-policy/page.tsx
│   │   │   └── sitemap/page.tsx
│   │   ├── sikertortenetek/      # HU case study listing + detail
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── palyazat/page.tsx     # HU grant page
│   │   ├── modszerunk/page.tsx   # HU method page
│   │   ├── adatvedelem/page.tsx  # HU privacy
│   │   ├── cookie-szabalyzat/    # HU cookie policy
│   │   ├── oldalterkep/          # HU sitemap page
│   │   └── api/
│   │       └── contact/route.ts  # Serverless API (Brevo + MailerLite)
│   ├── components/               # 18 React components
│   ├── data/                     # Case study data + translations
│   │   ├── caseStudies.ts        # All case study data (Hungarian)
│   │   ├── caseStudiesEn.ts      # English translations overlay
│   │   └── translateCaseStudy.ts # Translation utility
│   └── i18n/                     # Internationalization
│       ├── LanguageContext.tsx    # React Context for current language
│       └── dictionaries.ts       # All UI string translations (HU/EN)
├── next.config.mjs
├── tsconfig.json
├── package.json
└── DESIGN.md
```

---

## Internationalization (i18n)

### Architecture

Custom-built, no i18n library. Three-layer system:

#### 1. Language Context (`LanguageContext.tsx`)

```tsx
export type Lang = "hu" | "en";

const LangContext = createContext<LangContextValue>({ lang: "hu" });

export function LanguageProvider({ lang, children }) {
  return <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return useContext(LangContext).lang;
}
```

- Hungarian pages wrap content in `<LanguageProvider lang="hu">`
- English pages wrap content in `<LanguageProvider lang="en">`

#### 2. UI Dictionaries (`dictionaries.ts`)

All UI strings are defined as `{ hu: "...", en: "..." }` pairs:

```tsx
const dict = {
  nav: {
    about: { hu: "Rólunk", en: "About" },
    method: { hu: "Módszerünk", en: "Our Method" },
    // ...
  },
  hero: {
    line1: { hu: "Működő AI", en: "Working AI" },
    // ...
  },
  routes: {
    about: { hu: "/#rolunk", en: "/en#about" },
    caseStudies: { hu: "/sikertortenetek", en: "/en/case-studies" },
    // ...
  },
} as const;

export function t(entry: { hu: string; en: string }, lang: Lang): string {
  return entry[lang];
}
```

Usage in components: `{t(dict.nav.about, lang)}`

#### 3. Case Study Translations (`caseStudiesEn.ts`)

Hungarian case study data lives in `caseStudies.ts`. English overrides are defined per-slug in `caseStudiesEn.ts`:

```tsx
export const caseStudyTranslations: Record<string, {
  title?: string;
  shortTitle?: string;
  shortDescription?: string;
  feladat?: string;
  megoldas?: string[];
  elonyok?: { title: string; description: string }[];
}> = {
  "slug-name": { title: "English Title", ... },
};
```

The `translateCaseStudy()` function merges English overrides onto Hungarian defaults.

### Routing Strategy

| Language | URL Pattern                          | Example                          |
|----------|--------------------------------------|----------------------------------|
| Hungarian| `/[page]`                            | `/sikertortenetek`, `/palyazat`  |
| English  | `/en/[page]`                         | `/en/case-studies`, `/en/grant`  |

No redirects or middleware — separate page files for each language, sharing the same components via the LanguageProvider.

---

## Components (18 total)

### Page-Level Components

| Component               | Description                                          |
|--------------------------|------------------------------------------------------|
| `Hero.tsx`               | Full-viewport hero with animated bg, title, CTA      |
| `About.tsx`              | Company intro section                                |
| `Misszionk.tsx`          | Mission/value proposition with image and CTA          |
| `HowWeWork.tsx`          | 3-step methodology cards                             |
| `Pillars.tsx`            | Core service pillars / competencies                   |
| `FeaturedCaseStudies.tsx`| 3 highlighted case studies on homepage                |
| `Industries.tsx`         | Industry vertical cards                               |
| `PartnerLogos.tsx`       | Client logo strip (monochrome white filter)            |
| `Contact.tsx`            | Contact form with validation, privacy + marketing checkboxes |
| `Calculator.tsx`         | ROI / cost calculator widget                          |
| `References.tsx`         | Testimonials / references section                     |
| `WhitepaperForm.tsx`     | Lead magnet form for whitepaper download               |
| `VoiceAssistant.tsx`     | VAPI-powered voice assistant demo                     |

### Utility Components

| Component               | Description                                          |
|--------------------------|------------------------------------------------------|
| `Navigation.tsx`         | Fixed navbar with hamburger mobile menu               |
| `Footer.tsx`             | 3-column footer with animated bg                     |
| `AnimatedHeroBg.tsx`     | Canvas particle animation (dark theme)                |
| `AnimatedLightBg.tsx`    | Canvas particle animation (light theme variant)       |
| `CookieConsent.tsx`      | GDPR cookie consent banner                            |

### Styling Pattern

Every component uses inline `<style jsx>` or `<style jsx global>`:

```tsx
export default function MyComponent() {
  return (
    <section className="my-section">
      {/* content */}
      <style jsx>{`
        .my-section { padding: 100px 0; }
      `}</style>
    </section>
  );
}
```

Use `<style jsx global>` when styles need to reach into child components (e.g., Link-rendered `<a>` tags).

> **Critical**: Never use inline `style={{ color: '...' }}` on elements that need CSS `:hover` states — inline styles always override CSS selectors.

---

## Data Architecture

### Case Studies (`caseStudies.ts`)

Central data file defining all case studies as a typed array:

```tsx
export interface CaseStudy {
  slug: string;
  image: string;
  title: string;
  shortTitle: string;
  icon: string;
  category: string;
  categoryColor: string;
  shortDescription: string;
  feladat: string;          // "Challenge" section
  megoldas: string[];       // "Solution" bullet points
  elonyok: {                // "Benefits" cards
    title: string;
    description: string;
  }[];
}
```

Each case study has:
- A listing card view (shortTitle + shortDescription)
- A detail page view (feladat + megoldas + elonyok)

### Featured Selection

Homepage features are controlled by a simple slug array:

```tsx
const featured = ["listamester", "hungarorisk", "konyveles-automatizacio"];
```

### Dynamic Routes

Case study detail pages use Next.js `[slug]` dynamic routing with `generateStaticParams()`:

```tsx
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}
```

---

## API Routes

### Contact Form (`/api/contact/route.ts`)

Serverless function handling form submissions:

1. **Brevo** (email notification) — sends form data to `hello@thinkai.hu`
2. **MailerLite** (list building) — adds subscriber to appropriate group

```tsx
export async function POST(request: Request) {
  const { name, email, company, message, marketingConsent } = await request.json();

  // Run both independently (one failure doesn't block the other)
  const [brevoResult, mailerliteResult] = await Promise.allSettled([
    sendBrevoEmail(...),
    addToMailerLite(...),
  ]);

  // Return success if at least one succeeded
}
```

**Environment Variables** (set in Vercel):
- `BREVO_API_KEY`
- `MAILERLITE_API_KEY`

---

## SEO

### Metadata

- Root layout defines default `<title>`, `<meta description>`, OpenGraph, Twitter cards
- Per-page metadata via `export const metadata: Metadata = { ... }`
- `robots.ts` — dynamic `robots.txt` generation
- `sitemap.ts` — dynamic XML sitemap including all case study slugs
- `hreflang` alternates for HU/EN

### Semantic HTML

- Single `<h1>` per page
- Proper heading hierarchy (`h1` → `h2` → `h3`)
- Semantic elements: `<section>`, `<nav>`, `<footer>`, `<main>`
- All interactive elements have unique IDs

---

## Image Strategy

- **Format**: WebP for raster, SVG for vectors
- **Partner logos**: Stored in `/public/logos/`, rendered monochrome via CSS `filter: brightness(0) invert(1)`
- **Case study images**: Stored in `/public/case-studies/`, loaded via Next.js `<Image>` component
- **Logo**: WebP format, lazy-loaded where appropriate

---

## Deployment

### Vercel

- **Deploy command**: `vercel deploy --prod`
- **Build**: `next build` (automatic)
- **Environment**: Node.js serverless functions for API routes
- **Domain**: Custom domain configured in Vercel dashboard

### Environment Variables

| Variable           | Purpose                        |
|--------------------|--------------------------------|
| `BREVO_API_KEY`    | Email sending via Brevo API    |
| `MAILERLITE_API_KEY`| Subscriber management         |

---

## Animated Background

Canvas-based particle system (`AnimatedHeroBg.tsx`):

- Creates a `<canvas>` element sized to parent container
- Generates ~80 particles with random position, size (1–3px), opacity, and velocity
- `requestAnimationFrame` loop moves particles and redraws
- Particles that exit viewport wrap around to opposite side
- `ResizeObserver` handles viewport changes
- Used in Hero and Footer sections

---

## Key Patterns for Replication

### 1. Dark-First Color System
Define all colors as CSS custom properties in `:root`. Use `var(--token)` throughout. Dark backgrounds with white/muted text and teal accents.

### 2. Gradient Borders
Use the double `background-image` technique with `background-clip: padding-box, border-box` for animated-looking gradient borders on cards.

### 3. Component Self-Containment
Each component owns its own styles via `<style jsx>`. No external CSS files per component. Global overrides only via `globals.css`.

### 4. Translation by Overlay
Keep primary language data as the source of truth. Create a separate translation file that overlays/overrides specific fields. Untranslated fields fall back to the primary language.

### 5. Hover Microinteractions
Every interactive element has a transition:
- Cards: `translateY(-6px)` + enhanced shadow
- Buttons: `translateY(-2px)` + glow
- Links: color transition to teal
- Logos: opacity increase

### 6. Responsive Mobile-First Breakpoints
Three breakpoints: 900px (grid collapse), 768px (nav + typography), 480px (small mobile typography).

### 7. Image Optimization
All images in WebP. Use Next.js `<Image>` for raster images (automatic optimization). Use `<img>` for SVGs. Apply CSS filters for monochrome effects.
