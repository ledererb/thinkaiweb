# ThinkAI — Design System

---

## Color Palette

### Primary Colors

| Token                  | Value       | Usage                                       |
|------------------------|-------------|----------------------------------------------|
| `--background-dark`    | `#0A1118`   | Main dark background (hero, sections)        |
| `--background-dark-alt`| `#0D1520`   | Alternate dark background (cards, panels)    |
| `--background-light`   | `#FFFFFF`   | Light sections                               |
| `--background-alt`     | `#F0F4F8`   | Alternate light background                   |
| `--foreground-dark`    | `#FFFFFF`   | Text on dark backgrounds                     |
| `--foreground-light`   | `#1A202C`   | Text on light backgrounds                    |

### Accent Colors

| Token              | Value       | Usage                                 |
|--------------------|-------------|---------------------------------------|
| `--accent`         | `#47D7D1`   | **Primary teal** — CTAs, links, hovers, badges |
| `--accent-hover`   | `#38B2AC`   | Teal hover state (buttons)            |
| `--accent-purple`  | `#8B5CF6`   | Gradient accent (purple)              |
| `--accent-blue`    | `#3B82F6`   | Gradient accent (blue)                |
| `--accent-green`   | `#10B981`   | Success / supplementary accent        |

### Text Colors

| Token                | Value       | Usage                    |
|----------------------|-------------|--------------------------|
| `--text-muted-dark`  | `#94A3B8`   | Secondary text on dark   |
| `--text-muted-light` | `#64748B`   | Secondary text on light  |

### Gradients

| Name               | Value                                                           | Usage                |
|--------------------|-----------------------------------------------------------------|----------------------|
| Hero Gradient      | `linear-gradient(135deg, #0A1118 0%, #0D1520 50%, #111827 100%)`| Hero section bg      |
| Accent Gradient    | `linear-gradient(135deg, #8B5CF6, #3B82F6, #47D7D1)`           | Card borders, decorative |
| Card Border        | `linear-gradient(135deg, #8B5CF6, #3B82F6, #47D7D1, #2DD4BF)`  | Gradient border on cards & images |

---

## Typography

### Fonts

| Role      | Font Family   | Fallback       | CSS Variable       |
|-----------|---------------|----------------|---------------------|
| Headings  | **Montserrat** | sans-serif    | `--heading-font`    |
| Body      | **Inter**      | sans-serif    | `--body-font`       |

Both fonts are loaded via Google Fonts (`next/font/google`).

### Heading Hierarchy

| Element | Weight | Size (desktop) | Line Height | Notes                              |
|---------|--------|----------------|-------------|------------------------------------|
| `h1`    | 800    | 3.5rem         | 1.15        | Hero: weight 300 (thin variant)    |
| `h2`    | 700    | 2.5rem         | 1.2         | —                                  |
| `h2.section-title` | 300 | 2.5rem  | 1.2         | Thin, uppercase, letter-spacing 2px |
| `h3`    | 600    | 1.25rem        | 1.3         | —                                  |

### Body Text

- Font size: `1rem` (default)
- Line height: `1.6`
- Muted text: `0.9rem` – `1.05rem`
- Labels/badges: `0.72rem` – `0.85rem`, uppercase, letter-spacing `0.5px`–`3px`

### Responsive Typography

| Breakpoint   | `h1`     | `h2`     | `h3`     |
|-------------|----------|----------|----------|
| ≤768px      | 2rem     | 1.75rem  | 1.25rem  |
| ≤480px      | 1.5rem   | 1.4rem   | —        |

---

## Layout

### Container

- Max width: `1200px`
- Horizontal padding: `1.5rem` (≤768px: `1rem`)
- Centered with `margin: 0 auto`

### Section Spacing

| Breakpoint | Section Padding         |
|-----------|-------------------------|
| Desktop   | `6rem` (96px) vertical  |
| ≤768px    | `4rem` (64px) vertical  |
| ≤480px    | `3rem` (48px) vertical  |

### Grid

- Case study cards: `3-column` grid, `32px` gap → `1-column` on mobile (≤900px)
- Partner logos: flexbox, `48px` gap, `center` justified, `wrap` → `32px` gap on mobile

---

## Components

### Navigation

- **Position**: Fixed, top, full-width, `z-index: 1000`
- **Background**: `rgba(10, 17, 24, 0.95)` with `backdrop-filter: blur(10px)`
- **Height**: `72px`
- **Links**: White (`#FFFFFF`), uppercase, `0.85rem`, weight 500
- **Hover**: Teal (`#47D7D1`)
- **CTA Button**: Outline variant (teal border + text)
- **Language Switch**: Bordered pill, `0.75rem`, hover → teal border + text
- **Mobile**: Hamburger menu → slide-in panel from right, `80%` width, max `320px`

### Hero Section

- **Height**: `min-height: 90vh`
- **Background**: Hero gradient + animated particle background (canvas)
- **Title**: `3.5rem`, weight 300 (thin), white
- **Highlight Line**: Teal color (`#47D7D1`), `text-shadow: 0 0 40px rgba(71,215,209,0.3)`
- **Subtitle**: Muted text (`#94A3B8`), `1.15rem`
- **CTA**: Primary teal button, pill shape
- **Animation**: `fadeInUp` keyframes, staggered delay (0.2s, 0.4s, 0.6s)

### Buttons

| Variant      | Background        | Text Color  | Border              | Radius  |
|-------------|-------------------|-------------|----------------------|---------|
| Primary     | `#47D7D1`         | `#0A1118`   | `2px solid #47D7D1`  | `50px`  |
| Outline     | Transparent       | `#47D7D1`   | `2px solid #47D7D1`  | `50px`  |

**Hover effects:**
- Primary: bg → `#38B2AC`, `translateY(-2px)`, teal glow shadow
- Outline: bg → `#47D7D1`, text → `#FFF`

**Sizing:**
- Default: `0.9rem` font, `0.9rem 2.2rem` padding
- Uppercase, letter-spacing `1px`, font weight `700`

### Cards (Case Studies)

- **Background**: `#0D1520` with gradient border
- **Border**: `2px solid transparent` with `background-image` gradient border technique (purple → blue → teal)
- **Radius**: `20px`
- **Padding**: `32px 28px`
- **Top accent bar**: `3px` height, category color, `opacity: 0.6`
- **Hover**: `translateY(-6px)`, enhanced gradient border, deep shadow (`0 16px 48px rgba(0,0,0,0.35)`), purple glow

### Category Badges

- Pill shape (`border-radius: 50px`)
- Background: 15% category color tint
- Text: category color
- Font: `0.72rem`, weight 600, uppercase, letter-spacing `0.8px`

### Partner Logos

- **Filter**: `brightness(0) invert(1)` — all logos rendered as monochrome white
- **Opacity**: `0.55` default → `0.9` on hover
- **Layout**: Flexbox, centered, wrapped
- **Max Height**: `50px` per logo

### Footer

- **Background**: `#010E18` (darker than main dark)
- **Layout**: 3-column grid (brand, site map, legal) → stacked on mobile
- **Links**: `rgba(255,255,255,0.7)` → teal (`#47D7D1`) on hover
- **Headings**: White, `0.85rem`, uppercase, letter-spacing `2px`
- **Copyright text**: `rgba(255,255,255,0.5)`
- **Animated background**: Same canvas particle animation as hero

---

## Animated Background

A full-viewport **canvas-based particle animation** used in the hero and footer:
- Floating dots with random opacity and size
- Smooth `requestAnimationFrame` loop
- Positioned absolutely behind content with `z-index: 0`
- Creates a subtle, organic starfield/network effect

---

## Borders & Decorative Elements

### Gradient Borders

Used on cards and images. Technique: double `background-image` with `background-clip: padding-box, border-box`:

```css
border: 2px solid transparent;
background-image:
  linear-gradient(#0D1520, #0D1520),
  linear-gradient(135deg, #8B5CF6, #3B82F6, #47D7D1, #2DD4BF);
background-origin: border-box;
background-clip: padding-box, border-box;
```

### Section Dividers

- Subtle horizontal borders: `1px solid rgba(255, 255, 255, 0.06)`
- Used between partner logos section and adjacent sections

---

## Interactions & Transitions

| Element           | Property              | Duration | Easing        |
|-------------------|-----------------------|----------|---------------|
| Links             | `color`               | `0.3s`   | default       |
| Buttons           | `all`                 | `0.3s`   | `ease`        |
| Cards             | `all`                 | `0.35s`  | `ease`        |
| Logo opacity      | `opacity`             | `0.3s`   | default       |
| Mobile menu       | `right`               | `0.3s`   | `ease`        |
| Hero text         | `fadeInUp` keyframe   | `0.8s`   | `ease-out`    |

### Card Hover

```
transform: translateY(-6px);
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35),
            0 0 24px rgba(139, 92, 246, 0.15);
```

### Button Hover

```
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(71, 215, 209, 0.35);
```

---

## Responsive Breakpoints

| Breakpoint | Target          | Key Changes                              |
|-----------|-----------------|-------------------------------------------|
| `≤900px`  | Tablet          | Case study grid → 1 column               |
| `≤768px`  | Tablet/Mobile   | Hamburger nav, reduced section padding, smaller fonts |
| `≤700px`  | Mobile          | Logo strip gap reduced                    |
| `≤480px`  | Small mobile    | Further font size reduction               |

---

## Dark Theme

The site is **dark-first**. All primary sections use the dark palette:

- Backgrounds: `#0A1118` → `#0D1520` → `#111827`
- Text: White (`#FFFFFF`) primary, `#94A3B8` secondary
- Accents: Teal (`#47D7D1`) for interactive elements
- Cards: Slightly lighter dark (`#0D1520`) with gradient borders
- Shadows: Deep blacks with subtle colored glows

**Light sections** (if used) switch to `#FFFFFF` background with `#1A202C` text.
