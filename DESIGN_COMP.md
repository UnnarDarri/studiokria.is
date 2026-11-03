# Studio Kria — Design Comp

**A cinematic, gritty film production company website for music videos & advertisements**

---

## 1. Reference Analysis

### 1.1 arkafilms.is (Icelandic Film Production)

| Aspect | Observation |
|--------|-------------|
| **Layout** | Single-page scroll, hero → work grid → about → services → team → contact |
| **Typography** | Massive display type (Gill Sans–style condensed), tight leading, all-caps labels |
| **Color** | Dark base (`#0a0a0a`), warm gold accent (`#E8C58A`), high-contrast white text |
| **Images** | Full-bleed, 16:9 or 21:9, hover reveals metadata (type, year, status) |
| **Navigation** | Hamburger → full-screen overlay, logo top-left, language switcher top-right |
| **Effects** | Subtle film grain overlay, scroll-triggered fade/slide, reduced-motion support |
| **Unique** | Icelandic/English toggle, "rentals" as separate section, project detail pages with full-width galleries |

**What makes it unique**: The restraint. Everything serves the work. Type is the hero. Gold accent feels like film stock warmth. Navigation disappears until needed.

---

### 1.2 sensor.tv (Cinematic Portfolio)

| Aspect | Observation |
|--------|-------------|
| **Layout** | Masonry-style grid, alternating featured/standard items, full-viewport hero |
| **Typography** | Condensed sans display, extreme scale (`clamp(6rem, 10vw, 14rem)`), glitch on hover |
| **Color** | Near-black (`#050505`), electric accent (cyan/gold), glow shadows on text |
| **Images** | Edge-to-edge, zero gaps on desktop, hover zoom + saturation shift |
| **Interactions** | Cursor-following radial glow, image reveal on scroll, stagger delays |
| **Effects** | Canvas film grain (mouse-tracked intensity), CSS glitch (`::before/::after` + `clip-path`), glow variables |

**What makes it unique**: The *cursor glow* — a radial gradient following mouse position via CSS custom properties. The grain isn't a static overlay; it's a `<canvas>` redrawing at 60fps with mouse-influenced noise. Glitch is pure CSS, no JS.

---

### 1.3 LSD (lsd.productions / lsdfilms.co.uk)

| Aspect | lsd.productions | lsdfilms.co.uk |
|--------|-----------------|----------------|
| **Vibe** | Enterprise agency, conversion-focused | Avant-garde, experimental, minimal |
| **Layout** | Multi-section single page | Single hero card + footer |
| **Typography** | Geometric sans (Inter/Plus Jakarta) | System default, logo is custom glyph |
| **Color** | Neutral dark, brand-logo accents | Monochrome, desaturated imagery |
| **Images** | Card grids, hover-swap thumbnails | Heavy blur (`blur_2`), AVIF, unsharp mask |
| **Motion** | Slider, radio-triggered panels, smooth scroll | None detectable in static markup |
| **Unique** | "AI Lab" nav, problem-selector UX | Bilingual asset naming (CN/EN), Wix-hosted |

**What makes LSD unique**: Two identities under one name. `.productions` = commercial clarity. `.films` = atmospheric mystery. The blur/desaturation on lsdfilms creates a "dreamy, hallucinogenic" texture — very LSD.

---

### 1.4 Studio Kria Demo (unnardarri.github.io/Studio-Kria-Website/is/)

| Aspect | Observation |
|--------|-------------|
| **Layout** | Hero → 4-card grid (Projects, Services, About, Contact) → CTA → Footer |
| **Navigation** | Sticky top bar, logo + 5 links + EN/IS toggle |
| **Typography** | Condensed display for headings, system sans for UI |
| **Images** | Pre-built `/img/built/` assets, card thumbnails, CTA background |
| **Effects** | (Not visible in static HTML — requires CSS/JS bundle) |
| **Unique** | Icelandic-first, bilingual toggle, card-based home |

**What makes it unique**: It's the *client's own reference*. They want this aesthetic but "grittier, bolder, with grain that works."

---

## 2. Synthesis — What Makes These Sites Unique

| Quality | arkafilms | sensor.tv | LSD Films | Studio Kria Demo |
|---------|-----------|-----------|-----------|------------------|
| **Grit** | Subtle grain | Canvas grain + cursor glow | Heavy blur/desaturation | Unknown |
| **Bold Type** | Yes (Gill Sans condensed) | Extreme (clamp 6–14rem) | Minimal | Condensed display |
| **Full-Width Images** | Yes | Yes (edge-to-edge grid) | Single hero | Card thumbs |
| **Glow** | No | **Yes (cursor radial)** | No | Unknown |
| **Glitch** | No | **Yes (CSS clip-path)** | No | Unknown |
| **Navigation** | Hamburger overlay | Minimal top bar | Top bar + AI Lab | Sticky top bar |
| **Language** | EN/IS toggle | Single | Single | EN/IS toggle |
| **Motion** | Scroll reveal | Stagger + hover zoom | Slider | Unknown |

**The Gap**: No single reference has *all* of: working canvas grain + cursor glow + CSS glitch + bold condensed type + full-width project images + bilingual EN/IS + music-video/ad focus.

---

## 3. Studio Kria Design Concept

### 3.1 Core Identity

> **"Raw. Rhythmic. Real."**
>
> A production company that lives at the intersection of music video energy and commercial craft. The site should feel like a dark room with a projector running — grain dancing, light bleeding, type burning through.

### 3.2 Visual Language

#### Color Palette
```css
:root {
  /* Base — near-black, not pure black (film stock) */
  --bg: #050505;
  --bg-elevated: #0d0d0d;
  --bg-card: #0a0a0a;

  /* Foreground */
  --fg: #fafafa;
  --fg-muted: #999;
  --fg-subtle: #666;

  /* Accent — "Kodak Gold" warmth */
  --accent: #E8C58A;
  --accent-bright: #F0D4A8;
  --accent-dim: #B8965E;

  /* Electric — for music video energy */
  --electric: #00F5FF;
  --electric-dim: #00C4D1;

  /* Borders & dividers */
  --border: #1f1f1f;
  --border-hover: #333;

  /* Glow shadows (sensor.tv style) */
  --glow-soft: 0 0 20px rgba(232, 197, 138, 0.15);
  --glow-medium: 0 0 40px rgba(232, 197, 138, 0.25);
  --glow-strong: 0 0 60px rgba(232, 197, 138, 0.35);
  --glow-intense: 0 0 80px rgba(232, 197, 138, 0.5);
  --glow-electric: 0 0 40px rgba(0, 245, 255, 0.3);
}
```

#### Typography
```css
:root {
  /* Display — Gill Sans MT Ext Condensed Bold (primary) */
  --font-display: 'Gill Sans MT Ext Condensed Bold', 'Gill Sans MT Condensed', 'Anton', 'League Spartan', system-ui, sans-serif;
  
  /* UI — clean, readable */
  --font-sans: 'Inter', 'Space Grotesk', system-ui, sans-serif;
  
  /* Mono — credits, tech specs */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Fluid scale (sensor.tv approach) */
  --display-xl: clamp(6rem, 12vw, 14rem);    /* Hero titles */
  --display-lg: clamp(4rem, 8vw, 8rem);       /* Section titles */
  --display-md: clamp(3rem, 5vw, 5rem);       /* Card titles */
  --display-sm: clamp(2rem, 3.5vw, 3.5rem);   /* Mobile titles */
  --text-xl: clamp(1.25rem, 2vw, 1.5rem);     /* Lead copy */
  --text-lg: 1.125rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
}
```

#### Spacing & Layout
```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;

  --container-sm: 640px;
  --container-md: 1024px;
  --container-lg: 1280px;
  --container-xl: 1536px;

  --radius-sm: 4px;      /* Rectangular buttons (not pills) */
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 500ms ease;
  --transition-slower: 800ms ease;
  --transition-spring: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

### 3.3 Effects System (The "Grit")

#### 3.3.1 Canvas Film Grain (sensor.tv + demo)
```javascript
// Single <canvas> fixed top-left, z-index: 99999
// drawImageData with mouse-influenced alpha
// alphaMax: 40 (visible but not overwhelming)
// scale: 1.0 (1:1 pixel noise)
// No flicker: persistent noise pattern, only alpha shifts
```

#### 3.3.2 Cursor Radial Glow (sensor.tv signature)
```css
/* On <body> via CSS custom properties */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99998;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(232, 197, 138, 0.08),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}
body:hover::before { opacity: 1; }
```
```javascript
// Update --mouse-x / --mouse-y on mousemove (throttled)
```

#### 3.3.3 CSS Glitch Text (sensor.tv)
```css
.glitch-text {
  position: relative;
  color: var(--fg);
}
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  clip-path: inset(0 0 0 0);
}
.glitch-text::before {
  color: var(--accent);
  animation: glitch-1 2.5s infinite linear alternate-reverse;
}
.glitch-text::after {
  color: var(--electric);
  animation: glitch-2 3s infinite linear alternate-reverse;
}
@keyframes glitch-1 {
  0% { clip-path: inset(10% 0 85% 0); transform: translate(-2px, 0); }
  20% { clip-path: inset(40% 0 40% 0); transform: translate(2px, 0); }
  40% { clip-path: inset(70% 0 10% 0); transform: translate(-1px, 0); }
  60% { clip-path: inset(20% 0 60% 0); transform: translate(1px, 0); }
  80% { clip-path: inset(55% 0 25% 0); transform: translate(-2px, 0); }
  100% { clip-path: inset(5% 0 90% 0); transform: translate(2px, 0); }
}
@keyframes glitch-2 { /* different slices */ }
@media (prefers-reduced-motion: reduce) {
  .glitch-text::before, .glitch-text::after { animation: none; }
}
```

#### 3.3.4 Image Glow on Hover
```css
.glow-element {
  transition: box-shadow var(--transition-slow);
}
.glow-element:hover {
  box-shadow: var(--glow-medium);
}
.glow-element-intense:hover {
  box-shadow: var(--glow-intense);
}
```

---

### 3.4 Page Architecture

#### Home (`/`)
```
Hero (100vh)
  ├─ Minimal: massive glitch title "STUDIO KRIA"
  ├─ Sub-label: "Music Videos · Commercials · Film"
  ├─ CTA: "View Work" → /projects/
  └─ Cursor glow active

Featured Projects (3 cards, alternating full-width)
  ├─ Project 1: Full-bleed 21:9, hover reveal
  ├─ Project 2: Standard 16:9
  └─ Project 3: Standard 16:9

CTA Band
  ├─ "Ready to make something?"
  └─ Button → /contact/
```

#### Projects Index (`/projects/`)
```
Hero (60vh)
  ├─ Label: "WORK"
  ├─ Title: "Selected Projects"
  ├─ Count: "12 Projects · 2020–2025"
  └─ No image — type only

Grid (full-viewport width, 0 gaps)
  ├─ Desktop: 3-col, featured spans 3
  ├─ Tablet: 2-col, featured spans 2
  └─ Mobile: 1-col, 16:10 ratio

Each Card:
  ├─ Full-bleed thumbnail (contrast 1.1, saturate 0.8)
  ├─ Gradient overlay (transparent → #050505)
  ├─ Hover: zoom 1.12, saturate 1, brighten 1.05
  ├─ Content reveals (staggered): type, year, status, title, role, desc, festivals
  └─ Action pill: "View Project" → /projects/[slug]/
```

#### Project Detail (`/projects/[slug]/`)
```
Hero (90vh)
  ├─ Full-bleed hero image/video poster
  ├─ Play button (if videoUrl)
  ├─ Gradient overlay
  ├─ Meta bar: type · year · duration · status
  ├─ Massive glitch title
  ├─ Role line
  ├─ Description
  └─ Festival badges

Gallery (full-width, single column)
  ├─ Each image: 100vw, hover zoom 1.05
  └─ Staggered scroll reveal

Details (split: 1fr / 380px sticky sidebar)
  ├─ Left: Rich text body (markdown → HTML)
  └─ Right: Credits card + Watch Film button

Project Nav (3-col: prev / all / next)
  ├─ Prev: thumbnail + title + year + ← arrow
  ├─ All: centered, count badge
  └─ Next: title + year + thumbnail + → arrow
```

#### Services (`/services/`)
```
Hero → 3 Sections (Core / Specialized / Formats)
Each: Card grid with glow on hover
Core (6): Music Videos, Commercials, Branded Content, Documentaries, Short Films, Post-Production
Specialized (4): VFX, Color Grading, Sound Design, Motion Design
Formats (8): 16:9, 9:16, 4:5, 1:1, 21:9, 4:3, Anamorphic, Vertical
```

#### Team (`/team/`)
```
Hero → 3 Tiers
Core Team (3, XL cards): Founder, EP, Creative Director
Creative Leads (4, LG cards): DoP, Editor, Colorist, Producer
Collaborators (5, compact): Freelancers, regular partners
```

#### Rentals (`/rentals/`)
```
Hero → 5 Categories (cards with reverse layout for facilities)
Cameras (4, XL): ALEXA Mini LF, RED V-Raptor, Sony Venice 2, ARRI Alexa 35
Lenses (12, compact): Prime sets, zooms, anamorphic
Lighting (4): ARRI SkyPanel, Aputure, Nanlite, Dedolight
Facilities (4, reverse): Studio A, Studio B, Grading Suite, Sound Stage
Terms (3): Insurance, Deposit, Damage Policy
```

#### Contact (`/contact/`)
```
Hero (minimal, type only)
Split layout (form left / info right, sticky on desktop)
Form: Name, Email, Subject (dropdown), Message → Formspree
Info Cards: Address, Rentals CTA, Careers CTA, Map placeholder
```

#### About (`/about/`)
```
Hero → Values (6 cards) → Process (6 cards) → Team preview → CTA
```

---

### 3.5 Navigation & IA

#### Primary Nav (Hamburger → Full-screen Overlay)
```
STUDIO KRIA
├── Work          → /projects/
├── Services      → /services/
├── Team          → /team/
├── Rentals       → /rentals/
├── About         → /about/
└── Contact       → /contact/

Language: EN / IS (top-right in overlay)
Social: Instagram, TikTok, YouTube, Vimeo
```

#### Footer (Minimal)
```
STUDIO KRIA
Grandagarður 16, 101 Reykjavík
info@studiokria.is · +354 860 6690
© 2025 Studio Kria. All rights reserved.
```

---

### 3.6 Responsive Behavior

| Breakpoint | Grid | Hero Type | Nav | Grain |
|------------|------|-----------|-----|-------|
| `< 640px` | 1-col | `--display-sm` | Hamburger | alphaMax 30 |
| `640–1024px` | 2-col | `--display-md` | Hamburger | alphaMax 35 |
| `1024–1280px` | 3-col | `--display-lg` | Hamburger | alphaMax 40 |
| `> 1280px` | 3-col + featured span | `--display-xl` | Hamburger | alphaMax 40 |

**Mobile-specific**:
- Project cards: content always visible (gradient bg), no hover
- Gallery: single column, no stagger
- Form: stacked fields
- Glitch: reduced intensity

---

### 3.7 Motion & Accessibility

```css
/* Reduced motion — respects prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .film-grain-canvas { display: none; }
  body::before { display: none; }
}

/* Focus visible — keyboard navigation */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

/* Scroll animations — IntersectionObserver */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s var(--transition-spring), transform 0.8s var(--transition-spring);
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

### 3.8 Internationalization (EN/IS)

```
src/i18n/
├── en.json
├── is.json
└── index.ts      # t() function, locale detection, alternate links
```

**Route structure**: `/en/`, `/is/` (manual `[lang]` folder, not Astro i18n)
**Switcher**: In nav overlay + footer, preserves current path
**Content**: Projects have `title_en`, `title_is`, `description_en`, `description_is` in frontmatter

---

### 3.9 Technical Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro v5+ (static output) |
| Styling | CSS Custom Properties + `<style>` in components |
| Content | Astro Content Collections (projects, team, services) |
| Images | Astro Assets + Sharp (auto WebP/AVIF, srcset) |
| Forms | Formspree (contact),mailto (rentals/careers) |
| Deploy | GitHub Pages (`base: '/studio-kria-website'`) |
| CI/CD | GitHub Actions → `dist/` → Pages |
| Fonts | Self-hosted Gill Sans MT Ext Condensed Bold + Google Fonts fallback |

---

### 3.10 Implementation Priority

| Phase | Tasks |
|-------|-------|
| **1. Foundation** | Design system (CSS vars), Layout, FilmGrain, CursorGlow, Button, Hero |
| **2. Pages** | Home, Projects Index, Project Detail, Services, Team, Rentals, Contact, About |
| **3. Content** | Real project data, images, translations (EN/IS) |
| **4. Polish** | Scroll animations, glitch refinement, performance, a11y audit |
| **5. Deploy** | GitHub Actions, custom domain, analytics |

---

## 4. Visual Reference Moodboard

```
┌─────────────────────────────────────────────────────────────┐
│  HERO                                                        │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [grain]  [cursor glow]                             │    │
│  │                                                     │    │
│  │           S T U D I O   K R I A                     │    │
│  │         (glitch: gold / electric cyan)              │    │
│  │                                                     │    │
│  │    Music Videos · Commercials · Film                │    │
│  │                                                     │    │
│  │                    [ View Work ]                    │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│  PROJECTS GRID (full viewport, 0 gaps)                      │
│  ┌──────────────┬──────────────┬──────────────┐             │
│  │  FEATURED    │  STANDARD    │  STANDARD    │  ← 3-col    │
│  │  (21:9 span) │  (16:9)      │  (16:9)      │             │
│  │  [full bleed]│  [full bleed]│  [full bleed]│             │
│  │  hover→reveal│  hover→reveal│  hover→reveal│             │
│  └──────────────┴──────────────┴──────────────┘             │
├─────────────────────────────────────────────────────────────┤
│  PROJECT DETAIL                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  HERO: full-bleed 90vh, play button, meta, title   │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  GALLERY: 100vw images, stagger reveal              │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌──────────────┬──────────────┐                            │
│  │  BODY TEXT   │  CREDITS     │  ← split, sidebar sticky  │
│  │  (markdown)  │  + WATCH BTN │                            │
│  └──────────────┴──────────────┘                            │
│  ┌──────────┬──────────┬──────────┐                         │
│  │  PREV    │   ALL    │  NEXT    │  ← 3-card nav           │
│  │  [thumb] │  count   │  [thumb] │                         │
│  └──────────┴──────────┴──────────┘                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Open Questions

1. **Gill Sans licensing** — Do we have a license for Gill Sans MT Ext Condensed Bold? If not, Anton/League Spartan fallback is close but not identical. Consider variable font alternative.

2. **Video hosting** — Vimeo Pro? YouTube unlisted? Self-hosted MP4/WebM? Affects project detail hero implementation.

3. **Formspree endpoint** — Need production form ID for contact form.

4. **Real imagery** — Placeholder images currently in `public/assets/images/`. Need actual film stills, team photos, equipment shots.

5. **Analytics** — Plausible? Umami? GA4? None?

6. **CMS vs. static** — Content collections work for now. If client wants visual editing later, consider TinaCMS or CloudCannon.

---

## 6. Next Steps

1. ✅ Design comp complete (this document)
2. 🔄 Review with stakeholder
3. 🔄 Implement Phase 1 (design system + core components)
4. 🔄 Replace placeholder content with real assets
5. 🔄 Deploy to staging for review
6. 🔄 Production deploy

---

*Document created: 2026-11-02*  
*For: Studio Kria — Music Videos & Commercials*  
*Reference sites: arkafilms.is, sensor.tv, lsd.productions, lsdfilms.co.uk, unnardarri.github.io/Studio-Kria-Website/is/*