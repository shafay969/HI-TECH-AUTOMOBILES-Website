# HITECH AUTOMOBILES — Project Handoff
**Last updated:** 2026-04-03
**Project root:** `/Users/shafaybilal/Desktop/HITECH website/`
**GitHub repo:** https://github.com/shafay969/HI-TECH-AUTOMOBILES-Website
**Branch:** `main` (1 commit: `78f7487`)

---

## 1. Project Overview

Two deliverables exist in this workspace:

| Deliverable | Folder | Tech | Purpose |
|---|---|---|---|
| **Main production site** | `hitech-scroll/` | Vanilla HTML/CSS/JS | Hi-Tech Automobiles marketing site with scroll animation, badge orbit, neon buttons |
| **React component demo** | `hitech-app/` | Next.js 16 + TypeScript + Tailwind + shadcn | BackgroundPaths + NeonButton component integration demo |

**`hitech-scroll/` is the primary deliverable.** `hitech-app/` is a secondary component exercise.

---

## 2. Exact Asset File Paths

| Asset | Path |
|---|---|
| **Logo PNG** (master copy) | `/Users/shafaybilal/Desktop/HITECH website/assets/HI-TECH LOGO.png` |
| **Logo PNG** (copy used by scroll site) | `/Users/shafaybilal/Desktop/HITECH website/hitech-scroll/HI-TECH LOGO.png` |
| **Extracted frames** (122 JPEGs) | `/Users/shafaybilal/Desktop/HITECH website/hitech-scroll/frames/frame_0001.jpg` → `frame_0122.jpg` |
| **Scroll site HTML** (1833 lines) | `/Users/shafaybilal/Desktop/HITECH website/hitech-scroll/index.html` |
| **React neon button** | `/Users/shafaybilal/Desktop/HITECH website/hitech-app/src/components/ui/neon-button.tsx` |
| **React background paths** | `/Users/shafaybilal/Desktop/HITECH website/hitech-app/src/components/ui/background-paths.tsx` |
| **React page (demo)** | `/Users/shafaybilal/Desktop/HITECH website/hitech-app/src/app/page.tsx` |

**Logo notes:**
- Filename has a space: `HI-TECH LOGO.png` — URL-encode as `HI-TECH%20LOGO.png` in any web context.
- Referenced in site as relative `src="HI-TECH LOGO.png"` — works only over HTTP, NOT `file://`.
- No SVG version exists. PNG only.
- Source animation video (`animation video.mp4`) was deleted during cleanup — frames are already extracted, video is not needed.

---

## 3. All Files and Their Purpose

### 3a. Root Level

| File | Purpose |
|---|---|
| `.gitignore` | Covers `node_modules/`, `.next/`, `.DS_Store`, build artifacts |
| `HANDOFF.md` | This file — project documentation |
| `assets/HI-TECH LOGO.png` | Master copy of logo PNG |

### 3b. `hitech-scroll/` — The Production Site

| File | Purpose |
|---|---|
| `index.html` | Entire site — all HTML, CSS, JS self-contained in one 1833-line file |
| `HI-TECH LOGO.png` | Logo copy referenced by `index.html` — must be next to it |
| `frames/frame_0001.jpg` … `frame_0122.jpg` | 122 JPEG animation frames at 1920px width, `-q:v 2` JPEG quality |

**How to serve locally:**
```bash
cd "/Users/shafaybilal/Desktop/HITECH website/hitech-scroll"
python3 -m http.server 8080
# → open http://localhost:8080
```
> ⚠️ Must use HTTP server. `file://` breaks frame loading and logo display.

**How to deploy on Netlify:**
- Connect GitHub repo `shafay969/HI-TECH-AUTOMOBILES-Website`
- Publish directory: `hitech-scroll`
- Build command: (leave empty)
- Base directory: (leave empty)

### 3c. `hitech-app/` — React Component Demo

| File | Purpose |
|---|---|
| `src/app/page.tsx` | Demo page — renders BackgroundPaths + NeonButton showcase |
| `src/app/layout.tsx` | Next.js root layout with font setup |
| `src/app/globals.css` | Tailwind base styles + shadcn CSS variables |
| `src/components/ui/background-paths.tsx` | Framer-motion animated SVG paths component |
| `src/components/ui/neon-button.tsx` | Neon button component (red #CC0000, 3 variants: default/solid/ghost) |
| `src/components/ui/button.tsx` | Radix-based shadcn Button |
| `src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `components.json` | shadcn config |
| `package.json` | Next.js 16.2.2, React 19, framer-motion, class-variance-authority |

**How to run:**
```bash
cd "/Users/shafaybilal/Desktop/HITECH website/hitech-app"
npm install   # first time only — node_modules was gitignored
npm run dev
# → http://localhost:3000 (or 3001 if 3000 is occupied)
```

---

## 4. `hitech-scroll/index.html` — Full Section Map

| Section | HTML `id` | Notes |
|---|---|---|
| Scroll progress bar | `#scroll-progress` | Fixed 3px red bar at top |
| Particle canvas | `#particle-canvas` | Fixed behind everything, 50 floating red/dark particles |
| Loader | `#loader` | Logo + progress bar while 122 frames preload |
| Navbar | `#navbar` | Transparent → glass pill on scroll past 60px |
| Hero | `#hero` | Background paths + speed lines + watermark + orbs + badge (orbiting) + headline |
| Scroll animation | `#scroll-anim` | 100vh canvas, plays forward then auto-reverses to frame 0 |
| Specs | `#specs` | Dark bg, 4 count-up numbers in red |
| Services | `#services` | 6 cards with red top borders |
| Founder quote | `#founder` | Mudassar Bashir quote with logo |
| CTA | `#cta` | Dark bg, WhatsApp + call buttons |
| Testimonials | `#testimonials` | 5 drag-scrollable cards (PLACEHOLDER — see Section 7) |
| Footer | `#footer` | Red top border, logo, links, social |

---

## 5. Status of All 5 Original Fixes

### Fix 1 — Logo ✅ COMPLETE
- All monograms replaced with `<img src="HI-TECH LOGO.png">` tags
- Logo in: loader (80px), navbar (40px), hero watermark (4.5% opacity, greyscale), founder section (64px), footer (52px)

### Fix 2 — Hero Text Hierarchy ✅ COMPLETE
- `HI-TECH AUTOMOBILES` = `<h1 class="hero-brand-name">` — `clamp(2.8rem, 7vw, 6rem)`, weight 800
- `Destination Before Journey` = tagline below h1 — medium weight, red, `clamp(1.2rem, 2.5vw, 1.9rem)`
- `Gujrat, Punjab, Pakistan` = eyebrow line in red mono above h1

### Fix 3 — Hero Visual Design ✅ COMPLETE
- **Background paths**: 72 animated SVG paths (36 per layer), `#CC0000`, `position: absolute; inset: 0; z-index: 0` — behind all hero text (text is `z-index: 1`)
- **Fade on scroll**: JS in `handleScroll()` fades paths opacity 1→0 as user scrolls through first 55% of hero height
- **Bottom mask**: `linear-gradient(to bottom, black 45%, transparent 88%)` — paths dissolve at hero bottom edge
- **Speed lines**: 8 horizontal gradient lines
- **Watermark**: Logo at 4.5% opacity, greyscale, centered
- **Red glow**: Pulsing radial ellipse behind headline (4s loop)
- **Floating badge**: "Est. 1999 / Gujrat's #1 Workshop" — orbits entire viewport perimeter via JS rAF (30s lap, clockwise, `position: fixed; z-index: 900`)
- **Scroll indicator**: Three cascading red chevron arrows

### Fix 4 — Red Color Usage ✅ COMPLETE
- Service cards: `border-top: 3px solid var(--red)`
- Specs numbers: `color: var(--red)` with red glow during count-up
- Section title underlines: `<span class="section-title-underline">` — 44px, 3px, red
- Footer top border: `border-top: 4px solid var(--red)`
- Specs section top: `border-top: 4px solid var(--red)`

### Fix 5 — Scroll Animation ✅ COMPLETE (with ping-pong)
- **Trigger**: `IntersectionObserver` at 15% threshold on `#scroll-anim`
- **Behavior**: Always plays forward (frames 0→121) at 60fps over 2600ms, then **auto-reverses** (121→0), landing back on frame 0
- **Resting state**: Frame 0 (first frame) is always shown — guaranteed by `stopAnimation()` + `drawFrameAt(0)` on exit
- **No scroll-locking**: Zero snap/hold/lock code
- **rAF engine**: `playAnimation(direction)` uses `requestAnimationFrame` with delta-time

---

## 6. Additional Features Built in This Session

### Badge Perimeter Orbit
- **CSS**: `position: fixed; top: 0; left: 0; z-index: 900; will-change: transform`
- **JS**: `orbitBadge()` IIFE at line ~1727 — pure `requestAnimationFrame` loop
- Traces a rectangular path around the 4 viewport edges clockwise in 30 seconds
- Uses pure pixel `translate(Xpx, Ypx)` — GPU-composited, no Paint triggers
- Clears navbar (84px from top), 28px padding from all edges
- Visible on mobile (padding shrinks to 7px 12px on `max-width: 768px`)

### Neon Button Effect — Vanilla Site
- **CSS at line ~1017**: `::before` (top neon strip) and `::after` (bottom neon strip) on `.btn-primary`, `.btn-secondary`, `.btn-wa`, `.btn-call`
- Solid red buttons (`.btn-primary`, `.btn-wa`): lighter `rgba(255,110,110)` glow visible on dark red bg
- Outline buttons (`.btn-secondary`, `.btn-call`): `#CC0000` glow on light bg
- Top strip: `opacity: 0` at rest → `opacity: 1` on hover (0.5s ease)
- Bottom strip: `opacity: 0.25–0.3` at rest → `opacity: 0.5–0.55` on hover

### Neon Button Component — React (`hitech-app`)
- File: `hitech-app/src/components/ui/neon-button.tsx`
- 3 variants: `default` (outline + glow), `solid` (filled red), `ghost` (no border)
- 3 sizes: `sm`, `default`, `lg`
- `neon={false}` prop disables glow strips entirely
- All blue Tailwind classes replaced with `[#CC0000]` (brand red)
- No new dependencies — `class-variance-authority` was already installed

### Security Fixes
- All `target="_blank"` external links now have `rel="noopener noreferrer"` (8 links total)

### Nav Scroll-Spy
- ⚠️ **Still NOT implemented** — `.active` CSS class is defined but no JS sets it dynamically as user scrolls. All nav links appear in the same muted color. See Section 7.

---

## 7. Known Issues and Incomplete Items

### ⚠️ Testimonials are PLACEHOLDERS
5 cards contain invented names/quotes. Real reviews are not fetchable programmatically (Google Maps uses JS rendering).

**To replace:**
1. Open https://maps.app.goo.gl/K9bYH4VzP1bWpQ6d9 in a browser
2. Copy the text of each review
3. Edit `hitech-scroll/index.html` — find the 5 `.testi-card` blocks (~lines 1330–1360) and replace content

### ⚠️ Nav Active Link Scroll-Spy NOT wired
- CSS: `.nav-links a.active { color: var(--red); }` — defined at line ~156
- JS: **nothing sets this class dynamically**
- Fix: Add a scroll-spy inside `handleScroll()` using `getBoundingClientRect()` on `#services`, `#specs`, `#testimonials`

### ⚠️ Background Paths Performance
- `@keyframes hta-path-travel` animates `stroke-dashoffset` (causes Paint) + `opacity` (GPU-composited)
- 72 paths total — may cause jank on low-end devices
- Quick fix if needed: change `i < 36` to `i < 20` in `buildBackgroundPaths()` (~line 1785), or add `@media (max-width: 768px) { .hero-paths-wrap { display: none; } }`

### ⚠️ GitHub Token — REVOKE IMMEDIATELY
- Token was exposed in a previous chat session and has been redacted here
- **Go to github.com/settings/tokens and delete it now** — generate a fresh one when needed next

### ℹ️ `hitech-app` unused `@base-ui/react` dep
- `npm uninstall @base-ui/react` inside `hitech-app/` removes an unused dependency safely

### ℹ️ No SVG version of logo
- Only the PNG exists. No SVG was created.

### ℹ️ Mobile untested on real device
- Responsive breakpoints exist (`max-width: 768px`) but site has only been verified on desktop

---

## 8. Brand Information

| Field | Value |
|---|---|
| Brand name | Hi-Tech Automobiles |
| Tagline | Destination Before Journey |
| Founded | October 1999 |
| Founder | Mudassar Bashir, Associate Engineer (Auto & Diesel Technology) |
| Location | Gujrat, Punjab, Pakistan |
| Phone / WhatsApp | +92 300 4154606 |
| Email | info@hitechautomobiles.com |
| Facebook | hitechautomobilesofficial |
| Instagram | hitechautomobilesofficial |
| YouTube | @hitechautomobilesofficial |
| Google Maps | https://maps.app.goo.gl/K9bYH4VzP1bWpQ6d9 |
| WhatsApp link | `https://wa.me/923004154606` |
| Accent color | `#CC0000` (deep red — matches logo) |
| Background | `#FFFFFF` white |

---

## 9. Design Tokens (CSS variables in `index.html`)

```css
--red:     #CC0000
--red-dim: rgba(204,0,0,0.08)
--dark:    #0A0A0A
--mid:     #2A2A2A
--muted:   #777
--border:  rgba(0,0,0,0.08)
--white:   #FFFFFF
--offwhite:#F8F8F8
--font-h:  'Space Grotesk', sans-serif      /* headings */
--font-b:  'Archivo', sans-serif            /* body */
--font-m:  'JetBrains Mono', monospace      /* mono / labels */
```

---

## 10. How the Scroll Animation Works (technical)

1. **Preloading**: All 122 `Image` objects created before loader dismisses. Progress bar tracks `loadedCount / 122`
2. **IntersectionObserver**: Fires at 15% threshold on `#scroll-anim` — always calls `playAnimation(1)` on enter
3. **Forward play**: `playAnimation(1)` — rAF loop increments `currentFrame` by `FRAMES_PER_MS * delta` each tick (`PLAY_DURATION = 2600ms`)
4. **Auto-reverse**: When `currentFrame >= 121` (done forward), immediately calls `playAnimation(-1)`
5. **Reverse done**: When `currentFrame <= 0`, stops. Frame 0 is the resting state.
6. **On exit**: `stopAnimation()` + `currentFrame = 0` + `drawFrameAt(0)` — guarantees reset
7. **Drawing**: `drawFrameAt(idx)` uses cover-fit scaling — `Math.max(canvasW/iw, canvasH/ih)` — centered
8. **Retina**: Canvas sized at `window.innerWidth * devicePixelRatio`, CSS width stays at `window.innerWidth`

---

## 11. Git & Deployment

| Item | Value |
|---|---|
| GitHub repo | `https://github.com/shafay969/HI-TECH-AUTOMOBILES-Website` |
| Branch | `main` |
| Remote alias | `origin` |
| GitHub username | `shafay969` |
| Git identity | `shafaybilal` / `shafaybilal123@gmail.com` |
| gh CLI binary | `~/bin/gh` (v2.89.0, downloaded manually — NOT in PATH by default) |

**Future pushes** (after generating a new token):
```bash
cd "/Users/shafaybilal/Desktop/HITECH website"
git add .
git commit -m "your message"
git push   # will prompt for username + token as password
```

**Netlify deployment settings:**
- Repository: `shafay969/HI-TECH-AUTOMOBILES-Website`
- Base directory: (empty)
- Build command: (empty)
- Publish directory: `hitech-scroll`

---

## 12. Remaining Work

| Item | Status | Notes |
|---|---|---|
| Real Google Maps testimonials | ❌ Not done | Manual copy-paste from Google Maps required |
| Nav active link scroll-spy | ❌ Not done | CSS class exists, JS not wired |
| Logo SVG version | ❌ Not created | PNG only |
| Mobile test on real device | ❌ Not tested | Desktop verified only |
| GitHub token revocation | ⚠️ Urgent | Revoke exposed token at github.com/settings/tokens |
| `hitech-app` unused `@base-ui/react` | ⚠️ Minor | `npm uninstall @base-ui/react` in `hitech-app/` |
| Custom domain setup | ❌ Not done | Configure in Netlify → Site settings → Domain management |
