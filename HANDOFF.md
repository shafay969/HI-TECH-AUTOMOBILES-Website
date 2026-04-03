# HITECH AUTOMOBILES — Project Handoff
**Written:** 2026-04-02
**Project root:** `/Users/shafaybilal/Desktop/HITECH website/`

---

## 1. Project Overview

Two parallel deliverables exist in this workspace:

| Deliverable | Folder | Tech | Purpose |
|---|---|---|---|
| **Scroll-stop site** | `hitech-scroll/` | Vanilla HTML/CSS/JS | Production-ready marketing site for Hi-Tech Automobiles with Apple-style scroll animation |
| **React component demo** | `hitech-app/` | Next.js 16 + TypeScript + Tailwind + shadcn | Integration of the `BackgroundPaths` UI component, separate from the main site |

The **scroll-stop site (`hitech-scroll/`)** is the primary deliverable. The `hitech-app/` is a secondary task (component integration exercise).

---

## 2. Exact Asset File Paths

| Asset | Path |
|---|---|
| **Logo PNG** (master copy in assets) | `/Users/shafaybilal/Desktop/HITECH website/assets/HI-TECH LOGO.png` |
| **Logo PNG** (copy used by scroll site) | `/Users/shafaybilal/Desktop/HITECH website/hitech-scroll/HI-TECH LOGO.png` |
| **Animation video** (source MP4) | `/Users/shafaybilal/Desktop/HITECH website/scroll-stop-builder-skill/assets/animation video.mp4` |
| **Extracted frames** (122 JPEGs) | `/Users/shafaybilal/Desktop/HITECH website/hitech-scroll/frames/frame_0001.jpg` → `frame_0122.jpg` |
| **Scroll site HTML** | `/Users/shafaybilal/Desktop/HITECH website/hitech-scroll/index.html` |
| **Skill definition** | `/Users/shafaybilal/Desktop/HITECH website/scroll-stop-builder-skill/SKILL.md` |
| **Sections reference guide** | `/Users/shafaybilal/Desktop/HITECH website/scroll-stop-builder-skill/references/sections-guide.md` |
| **3D asset template** | `/Users/shafaybilal/Desktop/HITECH website/assets/3d-asset-template.html` |

**Logo notes:**
- The logo file name has a space in it: `HI-TECH LOGO.png` — must be quoted in CLI commands and URL-encoded as `HI-TECH%20LOGO.png` in any web context.
- The scroll site references it as a relative path `src="HI-TECH LOGO.png"` — this works only when served over HTTP (the `python3 -m http.server` local server), NOT when opened as a `file://` URL directly in the browser.
- There is **no SVG version** of the logo. Only the PNG exists.

---

## 3. All Files Created and Their Purpose

### 3a. `hitech-scroll/` — The Main Site

| File | Size | Purpose |
|---|---|---|
| `hitech-scroll/index.html` | ~60 KB | The entire scroll-stop site — all HTML, CSS, JS in one self-contained file |
| `hitech-scroll/HI-TECH LOGO.png` | (copy) | Logo referenced by the site — must live next to index.html |
| `hitech-scroll/frames/frame_0001.jpg` … `frame_0122.jpg` | ~20 MB total | 122 JPEG frames extracted from the animation video at 24fps, 1920px width, `-q:v 2` quality |

**How to serve the scroll site:**
```bash
cd "/Users/shafaybilal/Desktop/HITECH website/hitech-scroll"
python3 -m http.server 8080
# → open http://localhost:8080
```
> ⚠️ Must use a local HTTP server. `file://` protocol breaks frame image loading and logo display.

### 3b. `hitech-app/` — React Component Demo

| File | Purpose |
|---|---|
| `hitech-app/src/app/page.tsx` | Root page — renders `<BackgroundPaths title="Background Paths" />` |
| `hitech-app/src/app/layout.tsx` | Next.js root layout with font setup |
| `hitech-app/src/app/globals.css` | Tailwind base styles + shadcn CSS variables |
| `hitech-app/src/components/ui/background-paths.tsx` | The `BackgroundPaths` + `FloatingPaths` component (framer-motion animated SVG paths) |
| `hitech-app/src/components/ui/button.tsx` | Radix-based shadcn Button (replaced the Base UI version that shadcn auto-generated) |
| `hitech-app/src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `hitech-app/components.json` | shadcn config — style: `base-nova`, aliases point to `@/components/ui` |
| `hitech-app/package.json` | Next.js 16.2.2, React 19, framer-motion, @radix-ui/react-slot, class-variance-authority |
| `hitech-app/tsconfig.json` | TypeScript config with `@/*` path alias pointing to `src/` |
| `hitech-app/next.config.ts` | Minimal Next.js config |

**How to run the React demo:**
```bash
cd "/Users/shafaybilal/Desktop/HITECH website/hitech-app"
npm run dev
# → http://localhost:3001 (port 3000 is occupied by another process, PID 6237)
```

---

## 4. `hitech-scroll/index.html` — Full Section Map

The site is one ~60KB self-contained HTML file. Sections in order:

| Section | HTML id | Notes |
|---|---|---|
| Scroll progress bar | `#scroll-progress` | Fixed 3px red bar at top |
| Particle canvas | `#particle-canvas` | Fixed behind everything, 50 floating red/dark particles |
| Loader | `#loader` | Shows logo + progress bar while 122 frames preload |
| Navbar | `#navbar` | Transparent → glass pill on scroll past 60px |
| Hero | `#hero` | Background paths + speed lines + watermark + orbs + badge + headline |
| Scroll animation | `#scroll-anim` | 100vh canvas, auto-plays on IntersectionObserver |
| Specs | `#specs` | Dark bg, 4 count-up numbers in red |
| Services | `#services` | 6 cards, each with red top border |
| Founder quote | `#founder` | Mudassar Bashir quote with logo |
| CTA | `#cta` | Dark bg, WhatsApp + call buttons |
| Testimonials | `#testimonials` | 5 drag-scrollable cards (PLACEHOLDER — see Section 6) |
| Footer | `#footer` | Red top border stripe, logo, links, social |

---

## 5. State of All 5 Fixes (from the "Fix these 5 things" request)

### Fix 1 — Logo ✅ COMPLETE
- All `H|A` CSS/text monograms replaced with `<img src="HI-TECH LOGO.png">` tags
- Logo appears in: loader, navbar, hero watermark (faded), founder section, footer
- Logo sizes: loader=80px height, navbar=40px height, founder=64px height, footer=52px height
- **No remaining monogram anywhere in the file**

### Fix 2 — Hero Text Hierarchy ✅ COMPLETE
- `HI-TECH AUTOMOBILES` is the primary `<h1>` in large bold (`clamp(2.8rem, 7vw, 6rem)`, weight 800)
- `Destination Before Journey` is the tagline below it in medium weight, red color (`1.9rem` max)
- `Gujrat, Punjab, Pakistan` eyebrow line in red mono above the h1

### Fix 3 — Hero Visual Design ✅ COMPLETE
All elements implemented:
- **Background paths**: 72 animated SVG paths (36 per position layer), `#CC0000` red, traveling animation
- **Speed lines**: 8 horizontal gradient lines shooting across hero at staggered timing
- **Watermark**: Logo PNG at 4.5% opacity, full-width, greyscale, centered
- **Red glow**: Radial ellipse behind headline, gently pulses on 4s loop
- **Floating badge**: "Est. 1999 / Gujrat's #1 Workshop" card, floats top-right, hidden on mobile
- **Scroll indicator**: Three cascading red chevron arrows replacing old mouse-dot

### Fix 4 — Red Color Usage ✅ COMPLETE
- Service cards: `border-top: 3px solid var(--red)` on all 6 cards
- Specs numbers: `color: var(--red)` (was white), red `text-shadow` glow during count-up
- Section title underlines: `<span class="section-title-underline">` — 44px wide, 3px, red, auto-margin center
- Footer top border: `border-top: 4px solid var(--red)` on `#footer`
- Specs section top: `border-top: 4px solid var(--red)` on `#specs`
- Nav links: `.active` class → `color: var(--red)` (note: active class is CSS-only; no JS sets it dynamically — see known issues)

### Fix 5 — Scroll Animation ✅ COMPLETE
- **Mechanism**: `IntersectionObserver` at 15% threshold watches `#scroll-anim`
- **Forward play**: When section enters from below (user scrolling down) → auto-plays frames 1→122 at 60fps over 2600ms
- **Reverse play**: When section enters from above (user scrolling up) → auto-plays frames 122→1
- **No scroll-locking**: All `body.scroll-locked`, `SNAP_ZONE`, `HOLD_DURATION`, `isSnapping` code is completely removed — verified with grep
- **rAF engine**: `playAnimation(direction)` uses `requestAnimationFrame` with delta-time for smooth 60fps
- **Annotation cards**: Fade in/out as overlays based on `currentFrame / (TOTAL_FRAMES - 1)` progress ratio — no snap stops
- **Section height**: 100vh (no longer 350vh — user doesn't scroll to drive frames)

---

## 6. Known Issues and Incomplete Items

### ⚠️ Testimonials are PLACEHOLDERS
The 5 testimonial cards contain invented customer names and quotes. Real reviews could not be fetched because Google Maps renders via JavaScript (not accessible via WebFetch).

**To replace with real reviews:**
1. Open: https://maps.app.goo.gl/K9bYH4VzP1bWpQ6d9 in a browser
2. Copy the text of each review
3. Edit `hitech-scroll/index.html` — find the 5 `.testi-card` blocks (lines ~1275–1302) and replace content
4. The placeholder note (`★ Replace with verified Google Maps reviews...`) is at line 1302 — delete it when done

### ⚠️ Nav "active" link is CSS-only, not scroll-tracked
The `.active` class on nav links is defined in CSS but **no JavaScript sets it dynamically** as the user scrolls through sections. All three nav links (Services, About, Reviews) appear in the same muted color unless you manually add `class="active"` in the HTML.

**To fix:** Add a scroll-spy function to `handleScroll()` that uses `getBoundingClientRect()` to detect which section is in view and toggles the `.active` class on the corresponding `<a>` element.

### ⚠️ Background paths animation: `stroke-dashoffset` is not GPU-composited
The `@keyframes hta-path-travel` animates both `stroke-dashoffset` (causes paint) and `opacity` (composited). `will-change: opacity` was added to the path elements to batch opacity on the GPU, but `stroke-dashoffset` still triggers repaints on every frame for 72 paths. On lower-end devices this may cause jank.

**If performance is an issue:** Reduce path count from 36 to 20 per layer in the `buildBackgroundPaths` IIFE (change `i < 36` to `i < 20`), or disable the paths on mobile with a `@media (max-width: 768px) { .hero-paths-wrap { display: none; } }` rule.

### ⚠️ ffmpeg binary was downloaded to /tmp — not permanent
The ARM64 static ffmpeg binary used to extract frames was saved to `/tmp/ffmpeg-arm64`. If you need to re-extract frames (e.g., from a different video), you will need to re-download it:
```bash
curl -L "https://github.com/eugeneware/ffmpeg-static/releases/download/b6.0/ffmpeg-darwin-arm64" \
  -o /tmp/ffmpeg-arm64 && chmod +x /tmp/ffmpeg-arm64
```

### ⚠️ `hitech-app` button.tsx was overridden
shadcn initialized with `style: "base-nova"` which uses `@base-ui/react/button`. The provided Radix-based `button.tsx` was written on top of it. Both `@base-ui/react` and `@radix-ui/react-slot` are now in `package.json`. The `@base-ui/react` package is an unused dependency — it can be removed with `npm uninstall @base-ui/react` without breaking anything.

### ℹ️ Port conflicts
- Port 3000: occupied by PID 6237 (`node serve.mjs` — separate unrelated process)
- `hitech-app` dev server uses port 3001
- `hitech-scroll` HTTP server uses port 8080

### ℹ️ No Google Maps reviews API integration
Google Maps reviews require the **Google Places API** (paid). The Place ID for Hi-Tech Automobiles is:
```
0x391f1adc833b229d:0x4fd6a249656ba6ed
```
Coordinates: `32.5737037, 74.067955` (Gujrat, Punjab, Pakistan)

---

## 7. Brand Information (collected during build)

| Field | Value |
|---|---|
| Brand name | Hi-Tech Automobiles |
| Tagline | Destination Before Journey |
| Founded | October 1999 |
| Founder | Mudassar Bashir, Associate Engineer (Auto & Diesel Technology) |
| Location | Gujrat, Punjab, Pakistan |
| Phone / WhatsApp | +92 300 4154606 |
| Email | info@hitechautomobiles.com |
| Website | https://hitechautomobiles.com |
| Facebook | hitechautomobilesofficial |
| Instagram | hitechautomobilesofficial |
| YouTube | @hitechautomobilesofficial |
| Google Maps | https://maps.app.goo.gl/K9bYH4VzP1bWpQ6d9 |
| Accent color | `#CC0000` (deep red — matches logo) |
| Background | `#FFFFFF` (white) |
| WhatsApp link | `https://wa.me/923004154606` |

---

## 8. Design Tokens (CSS variables in `hitech-scroll/index.html`)

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

## 9. How the Scroll Animation Works (technical)

1. **Frame extraction**: `ffmpeg` at 24fps from `animation video.mp4` (5.08s) → 122 JPEG frames at 1920px width, `-q:v 2` (highest JPEG quality)
2. **Preloading**: All 122 `<Image>` objects are created before loader dismisses. Progress bar tracks `loadedCount / 122`
3. **IntersectionObserver**: Fires at 15% threshold on `#scroll-anim`
4. **Direction detection**: `entry.boundingClientRect.top > 0` = entering from below = scroll down = play forward
5. **Animation loop**: `playAnimation(direction)` calls `requestAnimationFrame`, increments `currentFrame` by `FRAMES_PER_MS * deltaTime` each tick (`PLAY_DURATION = 2600ms` for full sequence)
6. **Drawing**: `drawFrameAt(idx)` uses cover-fit scaling — `Math.max(canvasW/iw, canvasH/ih)` — centered
7. **Retina**: Canvas is sized at `window.innerWidth * devicePixelRatio`, CSS width stays at `window.innerWidth`, context is pre-scaled by DPR
8. **Annotation cards**: Each card has `from` / `to` progress thresholds. `updateAnnotations(progress)` runs every frame tick and toggles `.visible` class

---

## 10. Remaining Work / What's Not Done

| Item | Status | Notes |
|---|---|---|
| Real Google Maps testimonials | ❌ Not done | Blocked — requires manual copy-paste or Places API |
| Nav active link scroll-spy | ❌ Not done | CSS class defined but JS not wired |
| Logo SVG version | ❌ Not created | Only PNG exists in assets |
| Mobile test on real device | ❌ Not tested | Desktop verified only |
| Production deployment / hosting | ❌ Not done | Site is local-only |
| `hitech-app` unused `@base-ui/react` dep | ⚠️ Minor | Can run `npm uninstall @base-ui/react` in `hitech-app/` |
| Video with white first frame verification | ✅ User confirmed | "The animation video has a white background" |
| `sections-guide.md` referenced in SKILL.md | ⚠️ Exists but unused | File at `scroll-stop-builder-skill/references/sections-guide.md` — was not read during build |
