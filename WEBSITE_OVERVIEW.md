# ThinkAI Website — Full Overview

## What is ThinkAI?

ThinkAI is a Hungarian AI consulting company based in Budapest. The company helps businesses leverage artificial intelligence to improve efficiency and competitiveness. Their tagline: *"A jövő tegnap volt. Mi a holnap vagyunk."* (The future was yesterday. We are tomorrow.)

**Contact:** hello@thinkai.hu | Budapest, Hungary
**Live site:** https://thinkai.hu

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 14.2.35** (App Router) |
| Language | **TypeScript** |
| Styling | **CSS-in-JS** (styled-jsx, built into Next.js) + `globals.css` |
| Fonts | **Inter** (body), **Montserrat** (headings) via `next/font/google` |
| Deployment | **Vercel** (hobby tier) |
| Analytics | **Google Analytics** (`G-JCNSN0SDBQ`) + **Meta Pixel** (`1402820247806743`) |
| Email / CRM | **Brevo** (transactional email), **MailerLite** (subscriber management), **Twenty CRM** (lead tracking) |
| Voice AI | **Vapi** (AI voice assistant demo) |
| i18n | Custom `LanguageProvider` context + dictionary file (HU/EN) |

No external UI libraries, no Tailwind, no component libraries. All styling is inline via `<style jsx>` blocks inside each component, with shared tokens in `globals.css`.

---

## Design System (`globals.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--background-dark` | `#0A1118` | Dark sections, hero, nav, footer |
| `--background-dark-alt` | `#0D1520` | Alternate dark sections |
| `--background-light` | `#ffffff` | Light sections |
| `--background-alt` | `#F0F4F8` | Alternate light sections |
| `--accent` | `#47D7D1` | Teal — buttons, links, highlights |
| `--accent-hover` | `#38B2AC` | Button hover state |
| `--accent-purple` | `#8B5CF6` | Purple accent (gradients, card borders) |
| `--accent-blue` | `#3B82F6` | Blue accent (EAISY pillar, gradients) |
| `--accent-green` | `#10b981` | Green accent (success states) |
| `--hero-gradient` | `135deg, #0A1118 → #0D1520 → #111827` | Hero background |
| `--gradient-accent` | `135deg, purple → blue → teal` | Multi-color gradient for borders/highlights |
| `--container-width` | `1200px` | Max content width |
| `--spacing-section` | `6rem` (4rem tablet, 3rem mobile) | Vertical section padding |
| `--card-radius` | `20px` | Card border radius |

**Button styles:** `.btn` (filled teal), `.btn-outline` (ghost teal), rounded pill shape (`border-radius: 50px`).

**Typography:** h1=800 weight, h2=700 weight (or 300 weight with `.section-title` class for uppercase variant), h3=600 weight.

**Image borders:** Multi-color gradient borders via `.feladat-image` and `.hero-dashboard-img` utility classes using `background-clip` technique.

---

## Project Structure

```
thinkai-website/
├── public/
│   ├── logo.webp                       # ThinkAI logo (WebP)
│   ├── images/                         # Section images (14 WebP files)
│   │   ├── ai-dashboard.webp
│   │   ├── grant-process.webp
│   │   ├── grant-programs.webp
│   │   ├── howwework-audit.webp
│   │   ├── howwework-technical.webp
│   │   ├── industry-*.webp             # 5 industry card images
│   │   ├── misszionk-dashboard.webp
│   │   └── pillar-*.webp              # 3 pillar card images
│   ├── logos/                          # 18 real partner logos (WebP/SVG)
│   └── case-studies/                   # 23 case study hero images (WebP)
├── src/
│   ├── app/
│   │   ├── globals.css                 # Design tokens & base styles
│   │   ├── layout.tsx                  # Root layout (fonts, metadata, analytics, CookieConsent)
│   │   ├── page.tsx                    # HU Homepage — assembles all sections
│   │   ├── robots.ts                   # Dynamic robots.txt generation
│   │   ├── sitemap.ts                  # Dynamic sitemap.xml generation (HU + EN pages + case studies)
│   │   ├── favicon.ico
│   │   ├── fonts/                      # (2 font files)
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts            # Contact form: Brevo email + MailerLite + Twenty CRM
│   │   ├── en/
│   │   │   ├── layout.tsx              # EN layout (sets lang="en", EN metadata/SEO)
│   │   │   ├── page.tsx                # EN Homepage (identical sections, LanguageProvider lang="en")
│   │   │   ├── ai-customer-service/    # EN AI customer service page
│   │   │   ├── case-studies/           # EN case studies list + [slug] detail
│   │   │   ├── our-method/            # EN methodology page
│   │   │   ├── grant/                 # EN grant page
│   │   │   ├── privacy/              # EN privacy policy
│   │   │   ├── cookie-policy/        # EN cookie policy
│   │   │   └── sitemap/              # EN sitemap page
│   │   ├── adatvedelem/               # HU Privacy policy (Adatvédelem) page
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── ai-ugyfelszolgalat/        # HU AI customer service page + DigiDesk.pdf
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── DigiDesk.pdf
│   │   ├── cookie-szabalyzat/         # HU Cookie policy page
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── modszerunk/                 # HU Methodology page (detailed how-we-work)
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── oldalterkep/               # HU Sitemap page
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── palyazat/                  # HU Grant/funding page
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # Includes Calculator + WhitepaperForm
│   │   └── sikertortenetek/           # HU Case studies listing + dynamic detail pages
│   │       ├── layout.tsx
│   │       ├── page.tsx              # Listing with category filters
│   │       └── [slug]/               # Dynamic case study detail pages
│   ├── components/
│   │   ├── Navigation.tsx             # Sticky nav + mobile hamburger + language switcher (HU/EN)
│   │   ├── Hero.tsx                   # Full-screen hero with animated particle background
│   │   ├── AnimatedHeroBg.tsx         # Canvas-based particle animation for dark sections
│   │   ├── AnimatedLightBg.tsx        # Animated accents for light sections
│   │   ├── Misszionk.tsx              # Mission section ("Most companies still work like 10 yrs ago")
│   │   ├── PartnerLogos.tsx           # Logo strip with 14 real partner logos
│   │   ├── HowWeWork.tsx              # Two-path methodology (audit vs. direct) + guarantee badge
│   │   ├── FeaturedCaseStudies.tsx     # 3 featured case study cards (data-driven)
│   │   ├── Industries.tsx             # 3 target industry cards with real images
│   │   ├── Pillars.tsx                # 3 service pillars with images
│   │   ├── Contact.tsx                # Contact form with backend (Brevo + MailerLite + CRM)
│   │   ├── Footer.tsx                 # 3-column footer with animated background
│   │   ├── VoiceAssistant.tsx         # Vapi AI voice demo widget (FAB + panel)
│   │   ├── CookieConsent.tsx          # GDPR cookie consent banner
│   │   ├── Calculator.tsx             # Grant amount estimator (used on /palyazat)
│   │   ├── CaseStudyCard.tsx          # Reusable case study card
│   │   ├── WhitepaperForm.tsx         # PDF download lead form (used on /palyazat)
│   │   ├── About.tsx                  # Legacy component (superseded by Misszionk)
│   │   └── References.tsx             # Legacy component (superseded by PartnerLogos)
│   ├── data/
│   │   ├── caseStudies.ts             # 23 case studies with full content (HU)
│   │   ├── caseStudiesEn.ts           # English translations of case studies
│   │   └── translateCaseStudy.ts      # Helper to get translated case study by lang
│   └── i18n/
│       ├── LanguageContext.tsx         # React context providing current language (hu/en)
│       └── dictionaries.ts            # Master dictionary: all UI strings for HU & EN
├── email-templates/
│   └── welcome-hu.html               # Welcome email template (Hungarian)
├── package.json
├── tsconfig.json
├── next.config.mjs                    # Empty config (no custom settings)
├── .eslintrc.json
├── .env.local                         # Vercel OIDC token
├── DESIGN.md                          # Design documentation
├── TECHNICAL.md                       # Technical documentation
├── CASE_STUDIES.md                     # Case studies reference documentation
├── ThinkAI_Website_Redesign_Instruction.md  # Redesign instructions
└── hungarorisk-case-study.md / listamester-onboarding-case-study.md  # Case study drafts
```

---

## Internationalization (i18n)

The site supports **Hungarian** (default) and **English** via a custom i18n system:

| Component | Purpose |
|-----------|---------|
| `LanguageContext.tsx` | React context providing `Lang` type (`"hu" | "en"`) and `useLang()` hook |
| `dictionaries.ts` | Master dictionary object with all UI strings keyed by `{ hu: string, en: string }` |
| `t(val, lang)` | Helper function to resolve a dictionary entry for the current language |

**Route mapping:** HU ↔ EN paths are mapped in `Navigation.tsx` (e.g., `/sikertortenetek` ↔ `/en/case-studies`).

**Structure:** HU pages live at root (`/`, `/palyazat`, `/sikertortenetek`), EN pages live under `/en/` (`/en`, `/en/grant`, `/en/case-studies`). Each EN page has its own `layout.tsx` with translated metadata.

---

## Pages

### Homepage (`/` and `/en`)

Assembled in `page.tsx` wrapped in `<LanguageProvider>`:

| # | Component | Section ID | Background | Purpose |
|---|-----------|-----------|------------|---------|
| 1 | `Navigation` | — | Dark translucent + blur | Sticky nav: Rólunk, Módszerünk, Sikertörténetek, Pályázat, Kapcsolat, AJÁNLATKÉRÉS + HU/EN switcher |
| 2 | `Hero` | — | Dark gradient + particle animation | Headline "A jövő tegnap volt. Mi a holnap vagyunk.", CTA button, animated text reveal |
| 3 | `Misszionk` | `#rolunk` / `#about` | Light alt + animated accents | Hook line + body text + CTA + dashboard image |
| 4 | `PartnerLogos` | — | Dark (#0c1222) | 14 real partner logos in a horizontal strip, monochrome filter |
| 5 | `HowWeWork` | `#hogyan` | Light + animated bg | Two-path methodology (Path A: audit-first, Path B: direct build) + guarantee badge + blockquote |
| 6 | `FeaturedCaseStudies` | `#projektek` | Dark | 3 featured case study cards (Listamester, Hungarorisk, Könyvelés) from data layer |
| 7 | `Industries` | — | Light + animated bg | 3 industry cards: Pénzügy & Számvitel, E-kereskedelem, Marketing & Sales |
| 8 | `Pillars` | — | Dark | 3 service pillars: Egyedi Fejlesztés, AI-ügyfélszolgálat, EAISY-termékcsalád (coming soon) |
| 9 | `Contact` | `#kapcsolat` / `#ajanlatkeres` | Dark | Two-column: contact info (email, location) + form (name, company, email, phone, message, privacy checkbox, marketing consent) |
| 10 | `Footer` | — | Darkest + particle animation | Logo, copyright, site map links, legal links (Adatvédelem, Cookie Szabályzat, Oldaltérkép) |

**Global overlays:** `CookieConsent` (bottom banner, appears after 1.2s if not previously accepted/declined).

### AI Ügyfélszolgálat / AI Customer Service (`/ai-ugyfelszolgalat`, `/en/ai-customer-service`)

Dedicated AI customer service page featuring:
- Full page layout with VoiceAssistant widget integration
- DigiDesk PDF download available
- Detailed service description and features

### Módszerünk / Our Method (`/modszerunk`, `/en/our-method`)

Detailed methodology page (~18K content) with:
- Extended version of the two-path approach
- Comprehensive process descriptions
- Page-specific layout and metadata

### Pályázat / Grant (`/palyazat`, `/en/grant`)

Grant/funding opportunities page with:
- Small hero with heading
- Two-column layout: content + sidebar
- **Content side:** description, feature list (free pre-qualification, success-fee grant writing, project management), `Calculator` component
- **Sidebar:** `WhitepaperForm` (PDF download lead gen) + contact info box

### Sikertörténetek / Case Studies (`/sikertortenetek`, `/en/case-studies`)

Case studies listing page with:
- Category filter tabs (Összes, Pénzügy, Marketing & Sales, E-kereskedelem, HR & Oktatás, Logisztika, Kommunikáció, Egészségügy, Iparági)
- Card grid populated from `src/data/caseStudies.ts` (23 entries)
- Dynamic detail pages at `[slug]` with: hero, challenge (feladat), solution (megoldás), results (előnyök), CTA

### Adatvédelem / Privacy Policy (`/adatvedelem`, `/en/privacy`)

Full privacy policy page with page-specific metadata.

### Cookie Szabályzat / Cookie Policy (`/cookie-szabalyzat`, `/en/cookie-policy`)

Cookie policy page with page-specific metadata.

### Oldaltérkép / Sitemap (`/oldalterkep`, `/en/sitemap`)

HTML sitemap page listing all pages hierarchically.

---

## Component Details

### Navigation (`Navigation.tsx`)
- **Sticky** top position with dark translucent background + blur
- Desktop: horizontal link row
- Mobile (≤768px): hamburger button → slide-in right panel (fixed, full height)
- Links: Rólunk, Módszerünk, Sikertörténetek, Pályázat, Kapcsolat + AJÁNLATKÉRÉS button
- **Language switcher** button (HU/EN) with route mapping between Hungarian and English paths
- Uses `useLang()` hook + dictionary for all strings
- Logo: `/logo.webp` (real WebP file)

### Hero (`Hero.tsx`)
- Full viewport height (90vh min), dark gradient background
- `AnimatedHeroBg` canvas particle animation behind content
- Logo image, two-line headline with staggered reveal animation, gradient text highlight on line 2
- Subtitle + AJÁNLATKÉRÉS CTA button, all with fade-in animations
- Responsive: auto height + smaller text on mobile

### AnimatedHeroBg (`AnimatedHeroBg.tsx`)
- Canvas-based particle animation with connected lines
- Uses `requestAnimationFrame` for smooth 60fps rendering
- Particles with random movement + line connections based on distance proximity
- Used in Hero and Footer sections

### AnimatedLightBg (`AnimatedLightBg.tsx`)
- Subtle animated accent lines and dots for light-background sections
- Used in Misszionk, HowWeWork, and Industries sections

### Misszionk (`Misszionk.tsx`)
- **Replaces old `About.tsx`** — mission/about section
- Hook heading with accent-colored span ("Mi ezt megváltoztatjuk.")
- Two-column grid: text content (body paragraph with `<strong>` highlights) + dashboard image
- CTA button linking to contact/quote section
- Real image: `/images/misszionk-dashboard.webp` with gradient border

### PartnerLogos (`PartnerLogos.tsx`)
- **Replaces old `References.tsx`** — real partner logos instead of placeholders
- 12 real partner logos: Develor, ClearService, Duna Autó, WWF Hungary, AgroLYNX, Taxology, Metrical, Magination, Piktorfesték, Diego, Homan Transport, HungaroRisk
- Horizontal strip with wrap, monochrome filter (`brightness(0) invert(1)`), hover opacity effect
- Uses `next/image` for raster files, native `<img>` for SVGs

### HowWeWork (`HowWeWork.tsx`)
- **Two-path layout** (was single-path 4-step):
  - **Path A:** "You don't know what you need" → 4 steps (Audit → Prezentáció → Kiválasztás → Megvalósítás)
  - **Path B:** "You know what you want" → 3 steps (Technical Spec Meeting → Árajánlat → Megvalósítás)
- Each path has a header image (real WebP) + numbered steps
- 100% money-back guarantee badge (shield emoji + teal border)
- Closing blockquote + "Részletes módszertanunk →" link to `/modszerunk`
- `AnimatedLightBg` in background

### FeaturedCaseStudies (`FeaturedCaseStudies.tsx`)
- **New component** — showcases 3 featured case studies on the homepage
- Data-driven from `src/data/caseStudies.ts` (featured slugs: `listamester`, `hungarorisk`, `konyveles-automatizacio`)
- Cards with category badge (color-coded), title, description, "Részletek →" link
- Gradient border animation via `background-image` technique
- "Összes sikertörténet →" button linking to full case studies page

### Industries (`Industries.tsx`)
- 3 industry cards (was also 3 but different content): Pénzügy & Számvitel, E-kereskedelem, Marketing & Sales
- Each card has a real image header with hover zoom
- First card highlighted with teal border + gradient
- `AnimatedLightBg` in background

### Pillars (`Pillars.tsx`)
- 3 pillar cards with real images:
  1. **Egyedi Fejlesztés** → links to contact/quote form
  2. **AI-ügyfélszolgálat** → links to `/ai-ugyfelszolgalat`
  3. **EAISY-termékcsalád** → "Hamarosan" (coming soon) badge
- Third card highlighted with blue gradient + border
- Images with hover zoom

### Contact (`Contact.tsx`)
- Two-column: info + form
- **Working backend** — form submits POST to `/api/contact`
- Form fields: name, **company** (new), email, phone, message, privacy checkbox, **marketing consent** checkbox (new)
- States: idle → sending → success/error with feedback messages
- **Meta Pixel event:** fires `fbq("track", "Lead")` on successful submission
- SVG icons for email and location

### VoiceAssistant (`VoiceAssistant.tsx`)
- **New component** — Vapi AI voice assistant demo
- Two-column layout: left text (features list) + right widget
- FAB button (large gradient circle) toggles a floating panel
- Panel: avatar, status indicator (Készenáll/Hívásban/Beszél/Hallgat), audio visualizer bars, call timer, live transcripts
- Integrates with Vapi SDK via CDN (`@vapi-ai/web@2.5.2`)
- Start/end call buttons, mute toggle
- Ring animation when call is active
- **Note:** Currently used on `/ai-ugyfelszolgalat` page, not on homepage

### CookieConsent (`CookieConsent.tsx`)
- **New component** — GDPR-compliant cookie consent banner
- Appears after 1.2s delay if `cookie-consent` not in localStorage
- Backdrop overlay + bottom-center banner
- Accept/decline buttons, link to privacy policy
- Bilingual (detects lang from pathname)
- Rendered globally in `layout.tsx`

### Footer (`Footer.tsx`)
- Three-column grid: brand/copyright | site links | legal links
- `AnimatedHeroBg` particle animation behind content
- Legal links: Adatvédelem, Cookie szabályzat, Oldaltérkép
- Dynamic copyright year

### Calculator (`Calculator.tsx`)
- Grant amount estimator (client-side only)
- Dropdown: Gyártás, Logisztika, Mezőgazdaság, Szolgáltatás
- Shows estimated grant range (e.g., "50 - 500 millió Ft")

### WhitepaperForm (`WhitepaperForm.tsx`)
- Lead gen form for free "Pályázati Kisokos" PDF
- Fields: name, email, company name
- No backend — just UI

---

## Data Layer (`src/data/`)

### Case Studies (`caseStudies.ts`)

23 detailed case studies with the following structure per entry:

```typescript
interface CaseStudy {
  slug: string;           // URL slug
  title: string;          // Full title
  shortTitle: string;     // Card display title
  icon: string;           // Emoji icon
  image?: string;         // Hero image path (/case-studies/*.webp)
  category: string;       // Category name
  categoryColor: string;  // Category badge color
  shortDescription: string;
  feladat: string;        // Challenge/task description
  megoldas: string[];     // Solution bullet points
  elonyok: { title: string; description: string }[]; // Benefits
}
```

**Categories:** Pénzügy, Marketing & Sales, E-kereskedelem, HR & Oktatás, Logisztika, Kommunikáció, Egészségügy, Iparági, Email Marketing, Biztosítás

**Case studies include:** Smart Számla Értesítő, Előadás Tömörítő, Egészségügyi Asszisztens, Marketing Disztribútor, Döntéstámogató AI, AI E-learning, Ajánlatkészítő AI, Cégmonitor, Pályázatíró AI, Transport AI, Belső Kommunikációs AI, Bevételezés Automatizáció, HR Támogató AI, Social AI, E-kereskedelem Támogató AI, Fogyás Prognózis, Partner Webáruházak Integráció, Könyvelés Automatizáció, Integrált Pénzügyi Rendszer, Vooicy Meeting Összefoglaló, Logisztikai Optimalizáció, ListaMester Onboarding, Hungarorisk Ajánlatkérés

### English Translations (`caseStudiesEn.ts`, `translateCaseStudy.ts`)

- `caseStudiesEn.ts`: English translations for all case study text fields
- `translateCaseStudy.ts`: Helper function that merges HU base data with EN overrides

---

## API Routes

### Contact Form (`/api/contact`)

**POST `/api/contact`** — Handles contact form submissions from the website.

| Service | Purpose | Env Var |
|---------|---------|---------|
| **Brevo** | Sends HTML notification email to hello@thinkai.hu | `BREVO_API_KEY` |
| **MailerLite** | Adds subscriber to group (Marketingnyilatkoztatva or Ajánlatkérő) | `MAILERLITE_API_KEY` |
| **Twenty CRM** | Creates Company → Person → Opportunity → Note records | `TWENTY_CRM_URL`, `TWENTY_API_KEY` |

**Flow:** Validates required fields (name, email, message) → attempts all 3 services in parallel → returns success if at least one succeeds.

---

## SEO & Analytics

### SEO Configuration

| Feature | Implementation |
|---------|---------------|
| **Metadata** | Comprehensive `metadata` in `layout.tsx` — title template, description, keywords, OpenGraph, Twitter cards, robots |
| **robots.txt** | Dynamic via `robots.ts` — allows all crawlers, links to sitemap |
| **sitemap.xml** | Dynamic via `sitemap.ts` — includes all HU pages, all EN pages, and all 23 case study detail pages in both languages |
| **Alternate languages** | `hreflang` tags via `alternates` in metadata (hu, en, x-default) |
| **Per-page metadata** | Each subpage has its own `layout.tsx` with unique title, description, and canonical URL |

### Analytics & Tracking

| System | ID | Implementation |
|--------|----|---------------|
| **Google Analytics 4** | `G-JCNSN0SDBQ` | `<Script>` tag in root `layout.tsx` |
| **Meta Pixel** | `1402820247806743` | `<Script>` tag in root `layout.tsx` + noscript fallback |
| **Conversion tracking** | Meta Pixel `Lead` event | Fired on successful contact form submission |

---

## Static Assets

### Logo
- `/logo.webp` — ThinkAI logo in WebP format (2.4 KB)

### Section Images (`/images/`) — 14 WebP files
- `ai-dashboard.webp`, `grant-process.webp`, `grant-programs.webp`
- `howwework-audit.webp`, `howwework-technical.webp`
- `industry-ecommerce.webp`, `industry-finance.webp`, `industry-logistics.webp`, `industry-manufacturing.webp`, `industry-marketing.webp`
- `misszionk-dashboard.webp`
- `pillar-custom-dev.webp`, `pillar-customer-service.webp`, `pillar-eaisy.webp`

### Partner Logos (`/logos/`) — 16 files (WebP + SVG)
Agrolynx, Bege, Budaprime, ClearService, Develor, Diego, Duna Autó, Homan Transport, Hungarorisk, Magination, Metrical, Piktorfesték, Taxology, Up2You, WWF

### Case Study Images (`/case-studies/`) — 23 WebP files
One hero image per case study, varying sizes (74KB–730KB).

---

## Email Templates

- `email-templates/welcome-hu.html` — Hungarian welcome email template

---

## Known Issues / Incomplete Items

1. ~~**Missing logo** — RESOLVED:~~ `/logo.webp` exists in `public/`
2. ~~**No form backends** — RESOLVED:~~ Contact form submits to `/api/contact` (Brevo + MailerLite + Twenty CRM)
3. ~~**No actual partner logos** — RESOLVED:~~ 14 real partner logos in `/logos/`
4. ~~**No actual case study images** — RESOLVED:~~ 23 real case study hero images in `/case-studies/`
5. ~~**About section placeholder image** — RESOLVED:~~ Replaced by `Misszionk` with real dashboard image
6. ~~**Legal pages missing** — RESOLVED:~~ `/adatvedelem`, `/cookie-szabalyzat`, `/oldalterkep` pages exist with content
7. **EAISY product family:** Still marked as "Hamarosan" (coming soon) with no content
8. ~~**No analytics/tracking** — RESOLVED:~~ Google Analytics 4 + Meta Pixel configured
9. ~~**No SEO meta tags** — RESOLVED:~~ Full SEO: metadata, robots.txt, sitemap.xml, hreflang, per-page titles
10. ~~**No favicon customization** — RESOLVED:~~ Custom `favicon.ico` exists (26KB)
11. **WhitepaperForm** has no backend — just UI (PDF download form on `/palyazat`)
12. **Legacy components:** `About.tsx` and `References.tsx` still exist but are not used in any page (superseded by `Misszionk` and `PartnerLogos`)
13. **VoiceAssistant** text content is hardcoded in Hungarian (not using i18n dictionary)
