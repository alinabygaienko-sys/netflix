# Netflix Design System — Extended Foundations

Covers the layers a component library alone doesn't: **iconography, motion, and responsive layout**. Pairs with `tokens.json`, `tailwind.config.js`, and the React component files.

---

## 1. Icon system

Netflix's product icons are clean, line-based, and recede so content (artwork) leads.

| Rule | Spec |
|---|---|
| Style | Line / outline (not filled), rounded joins and caps |
| Stroke | **2px** at 24px; scale stroke with size to keep optical weight |
| Sizes | 16 · 20 · **24 (base)** · 32 — on a 4px grid |
| Color | Inherit text color (white/grey-300). **Netflix Red only on hover/active or for a single emphasis icon** |
| Padding | Keep ~10–12% clear space inside the bounding box |
| Don't | No two-tone icons, no drop shadows, no decorative gradients, no mixing line + filled in one set |

**Library:** the components use **`lucide-react`** — a consistent, open-source outline set — as a stand-in for Netflix's internal icon library. If you obtain the official set, swap the imports; sizing/stroke rules stay identical.

Common actions → icon mapping: play, add (+), like (heart), rate (thumbs-up), download, notify (bell), share, audio, info, done (check), search, settings.

---

## 2. Motion

Motion is quick and confident — it should feel cinematic, never sluggish. Everything eases; nothing is linear except progress bars and the Tudum-adjacent reveals.

### Durations
| Token | Value | Use |
|---|---|---|
| `duration.instant` | 100ms | Hover color/opacity shifts |
| `duration.fast` | 140ms | Buttons, toggles, taps |
| `duration.base` | 240ms | Cards, tabs, default transitions |
| `duration.slow` | 480ms | Poster hover-zoom, hero reveals |

### Easing
| Token | Curve | Use |
|---|---|---|
| `ease` (standard) | `cubic-bezier(.2,.7,.2,1)` | Most transitions |
| `easeOut` | `cubic-bezier(.16,1,.3,1)` | Entrances, reveals, modals, toasts |
| `easeIn` | `cubic-bezier(.4,0,1,1)` | Exits |

### Named patterns (ready to drop in)
- **hover** — `all 140ms ease`
- **posterZoom** — `transform 240ms ease` (scale 1.0 → 1.04)
- **overlayIn** — `opacity 240ms easeOut`
- **modalPop** — `transform 280ms easeOut, opacity 280ms` (scale .94 → 1, +8px → 0)
- **toastIn** — `transform 300ms easeOut, opacity 300ms` (+16px → 0)

**Principles:** one orchestrated reveal beats scattered micro-animations · respect `prefers-reduced-motion` (drop transforms, keep opacity) · never animate the logo.

---

## 3. Breakpoints & grid

| Breakpoint | Min width | Target |
|---|---|---|
| `sm` | 480px | Large phone |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |
| `tv` | 1920px | Connected TV / 10-foot UI |

**Grid**
- Container max-width: **1280px**, centered.
- Gutters: **16px** mobile → **32px** desktop.
- **12-column** base grid for layouts.
- Poster rails: horizontal scroll on mobile, fixed columns at `lg`+ (e.g. 6 across).

**10-foot UI note:** on `tv`, scale type and touch targets up, increase focus-state contrast (focusable elements get a visible red/white ring), and assume D-pad navigation — every interactive element needs a clear focused state, not just hover.

---

## 4. What the system now covers

✅ Color · ✅ Typography · ✅ Spacing/radius · ✅ Elevation · ✅ Buttons · ✅ Badges/ratings · ✅ Inputs · ✅ Toggles · ✅ Cards · ✅ Logo rules · ✅ **Navbar** · ✅ **Tabs** · ✅ **Modal** · ✅ **Toast** · ✅ **Icons** · ✅ **Motion** · ✅ **Breakpoints/grid**

**Still external (can't be reproduced):** the licensed **Netflix Sans** font, the official **icon library**, and partner-gated **Motion + Sonic** master assets — all via the Netflix brand team (`brand@netflix.com`).

---
*Brand marks and Netflix Sans © Netflix, Inc. For internal design use.*
