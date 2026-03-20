# Zenti Landing Page - Conversion Audit

**Date:** 2026-03-19
**Goal:** Maximize click-throughs to app.zentiapp.pro (try the app)
**Methodology:** 5 parallel specialist reviews (CRO, Copywriting, UX/Trust, Best Practices Research, Competitive Analysis)

---

## Executive Summary

The page has strong foundations: a clear value proposition, low-friction entry (no registration, 3 free sessions), good CTA repetition, and a genuinely differentiated interactive demo. But it has **one structural problem that every reviewer flagged independently: zero social proof on a product that asks users to be emotionally vulnerable with an AI.** This is the single biggest conversion blocker.

Beyond that, several elements are actively hurting conversions: the announcement banner signals the product isn't ready, pricing appears too early, and animations may cause performance issues on Mexican mobile devices.

---

## The 10 Changes That Will Move the Needle Most

Ranked by expected conversion impact. Changes 1-4 are critical. Changes 5-10 are high-value optimizations.

---

### 1. Add Social Proof (CRITICAL - flagged by all 5 reviewers)

**The problem:** There are zero testimonials, zero user counts, zero ratings, zero press mentions. Every major competitor (Calm, Headspace, Aura, Insight Timer, Endel) leads with social proof. For a product asking strangers to share emotional states with an AI, this is a structural conversion blocker that no amount of good copy can overcome.

**What to do:**
- Add 2-3 real testimonials after the "How It Works" section. Format: outcome-specific quote + first name + city. Example:
  > "Le conté a Zenti que no podía dormir por el estrés del trabajo. La meditación habló exactamente de lo que sentía. Esa noche dormí completo." -- Daniel R., Guadalajara
- Add an aggregate stat near the hero: "Mas de X meditaciones personalizadas creadas" (use real numbers, even if small)
- If any press/podcast/blog mentions exist, add a "Como aparecimos en" logo strip below the hero

**Why it matters:** Testimonials increase conversion by ~34% (industry benchmark). For wellness apps specifically, outcome-based social proof is the #1 conversion driver after the CTA itself.

---

### 2. Kill or Radically Redesign the Announcement Banner (CRITICAL)

**The problem:** "La app de Zenti llega pronto a iOS y Android" is the first thing visitors see. It communicates: (a) the product doesn't have a native app, (b) what exists now is a compromise, (c) you should wait for the real thing. This directly contradicts the goal of getting people to try the web app NOW.

**What to do:**
- **Best option:** Remove the banner entirely from the landing page. Collect emails inside the app after users have tried it.
- **Acceptable alternative:** Reframe as confidence signal: "Disponible ahora en web. App nativa para iOS y Android en camino." Move below the fold.
- The email capture can live in a post-session flow inside the app, where conversion to email will be much higher anyway.

---

### 3. Move Pricing Below the Bottom CTA or Off the Page (HIGH)

**The problem:** Pricing ($199-$899 MXN) appears before the visitor has tried anything. It introduces cost anxiety before trust is established. The entire acquisition strategy is "3 free sessions, no registration" -- showing a paywall before the free experience undermines this.

**What to do:**
- Move pricing section below the bottom CTA and FAQ, or remove from the landing page entirely (introduce pricing in-app after free sessions)
- If keeping it, add per-session price breakdown: "$499 = $33 por sesion" (trivial vs. lump sum)
- Add value anchor: "Una sesion de coaching en Mexico cuesta $500-$1,200. Con Zenti, desde $33."
- Add a guarantee: "Si no te gusta tu primera meditacion de pago, te devolvemos tu dinero."

---

### 4. Surface Privacy Assurance at the Point of Anxiety (HIGH)

**The problem:** The product asks users to describe emotional vulnerability to an AI. The privacy statement is buried in FAQ item 6 of 7. By the time a visitor reaches it, they've already bounced.

**What to do:**
- Add a privacy micro-line directly below the hero CTA hint text:
  `Gratis . 3 sesiones . Sin registro`
  `Tu conversacion es privada y confidencial`
- Consider a small lock icon for visual reinforcement
- One line of HTML. Highest effort-to-impact ratio on this list.

---

### 5. Rewrite the Hero CTA to Be Outcome-Oriented (HIGH)

**The problem:** "Pruebalo gratis ahora" is generic and hedging. "Pruebalo" (try it) implies "this might not be for you." Competitors use outcome language: Calm's "Try Calm for Free," Headspace's "Try for $0."

**What to do:**
- Change hero CTA from "Pruebalo gratis ahora" to "Crear mi primera meditacion -- gratis" or "Sentirme mejor en 2 minutos"
- This matches the strongest CTA already on the page ("Crear mi meditacion gratis" after the mockup), which should have been the hero CTA all along
- Keep "Gratis . 3 sesiones . Sin registro" hint text -- it's excellent
- Consider adding "Sin tarjeta de credito" to the hint text (high-impact for Mexican market where online billing skepticism is high)

---

### 6. Fix the "2 Minutes" vs "3 Minutes" Inconsistency (MEDIUM-HIGH)

**The problem:** Hero says "En 2 minutos." How It Works says "Tu primera meditacion en 3 minutos." This is a small inconsistency that erodes trust with skeptical visitors.

**What to do:** Pick one number and use it everywhere. "En minutos" works if you want to avoid committing. If the real time is closer to 2-3 min, "en menos de 3 minutos" is honest and specific.

---

### 7. Add a Use-Case / Intent Selector Section (MEDIUM-HIGH)

**The problem:** The page assumes all visitors arrive for the same reason. Headspace's homepage quiz/intent selector ("What kind of headspace are you looking for?") improved free trial conversion ~10% because visitors self-identify before clicking.

**What to do:** Add 6-8 emotional/situational tiles between the hero and "How It Works":
- Ansiedad y estres
- Dormir mejor
- Concentracion y enfoque
- Confianza antes de algo importante
- Soltar algo que paso
- Calmar la mente

Clicking a tile could highlight it and update a line below: "Zenti crea meditaciones para exactamente eso." This makes personalization feel real before the user even enters the app. Optionally pass the selection as a query param to the app URL.

---

### 8. Add a Competitor Contrast Section (MEDIUM)

**The problem:** Visitors cross-shopping Calm or Headspace have no frame for why Zenti is different. Aura uses a direct comparison matrix. Zenti's no-subscription model is a genuine differentiator but it's not contrasted against the competition.

**What to do:** Add a simple two-column comparison before or after benefits:

| Otras apps | Zenti |
|---|---|
| Miles de audios genericos | Una meditacion creada solo para ti |
| La misma sesion para todos | Adaptada a como te sientes hoy |
| Suscripcion mensual ($100-200/mes) | Sin suscripcion -- tuya para siempre |
| Biblioteca de otros | Tu biblioteca personal |

---

### 9. Reduce Animation Load for Mobile Performance (MEDIUM)

**The problem:** 15+ concurrent animations (3 orbs, particle system spawning DOM elements every 1.8s, 3-layer breathing circle, pulsing dividers, breathing benefit icons, CTA pulse, mockup orbs, counter animation) + glassmorphism backdrop-filter on every card. Mid-range Android devices (dominant in Mexico) will jank on scroll. Jank = "broken product" = bounce.

**What to do:**
- Remove floating particles entirely (highest CPU cost, lowest conversion value)
- Reduce ambient orbs from 3 to 2
- Remove individual benefit-icon breathing animations (static icons are fine)
- Add `@media (prefers-reduced-motion: reduce)` to disable non-essential animations
- Consider disabling backdrop-filter on mobile (very GPU-intensive)
- Keep the breathing circle (it communicates the product instantly) but simplify to one animation layer

---

### 10. Fix Secondary Navigation and CTA Alignment (MEDIUM)

**The problem:** Multiple small issues compound:
- Nav links "Para psicologos" / "Para empresas" confuse consumer visitors about who the product is for
- "Crear mi coleccion" CTA after library section is premature (user hasn't tried the product yet)
- The `hola@zennes.io` email creates a domain mismatch with zentiapp.pro, hurting credibility

**What to do:**
- Move "Para psicologos" / "Para empresas" links to the footer. Replace with a single "Probar gratis" CTA button in nav on mobile.
- Change "Crear mi coleccion" to "Empieza con tu primera meditacion gratis" (match where the user's head actually is)
- Either use an @zentiapp.pro email or add "Hecho por Zennes" context to explain the domain relationship

---

## Copy-Specific Rewrites

### Hero Subtitle (currently feature-focused, should be outcome-focused)

**Current:** "Dile a Zenti como te sientes hoy. En minutos, recibiras una meditacion de audio unica, creada solo para ti."

**Rewrite:** "Escribe como estas -- con tus palabras, sin filtros. En minutos, recibiras una meditacion que habla exactamente de lo que estas viviendo."

### Benefits Section (currently features, should be outcomes)

| Current | Rewrite |
|---|---|
| Unica en cada momento | Nunca la misma meditacion dos veces |
| Hecha para lo que necesitas hoy | Para lo que sientes hoy, no para "estres en general" |
| Una voz que te acompana | Una voz que se siente como compania, no como instruccion |
| Tu guia personal, a un mensaje | Tu espacio de calma, a un mensaje de distancia |

### Chat Mockup Resolution (currently vague)

**Current:** "Voy a crear una meditacion para que vivas ese momento..."

**Rewrite:** "Perfecto. Voy a crear una meditacion para que entres a esa presentacion sintiendote seguro, claro, y con la energia que describes. Lista en segundos."

(Mirrors the user's own words back -- strongest possible trust signal for an AI product.)

---

## What's Working Well (Don't Touch)

- "Gratis . 3 sesiones . Sin registro" hint text -- textbook friction removal
- The interactive chat mockup -- best-in-class "show don't tell"
- The playable audio demo -- if the audio quality is good, this is the most powerful element on the page
- CTA repetition after each section -- correct pattern
- No-subscription pricing model -- genuine differentiator in a market exhausted by subscription fatigue
- The phone mockup with specific meditation titles ("Calmar mi enojo con mi papa") -- makes personalization feel real
- Dark, atmospheric design -- appropriate for a meditation product
- The breathing circle animation -- immediately communicates what the product is about

---

## Competitive Gaps Summary

| Element | Calm | Headspace | Aura | Insight Timer | Endel | Zenti |
|---|---|---|---|---|---|---|
| User count / downloads | 100M+ | -- | 8M+ | 30M | 4M+ | None |
| Star ratings shown | Yes | 4.7 (1.28M) | 45K 5-star | Yes | 4.6 (18K) | None |
| Press logos | Yes | Yes | 10+ logos | TIME, etc. | 15+ logos | None |
| Testimonials | Yes | Yes | Yes + Oprah | Yes | 28+ | None |
| Intent selector / quiz | No | Yes (5 tiles) | Assessment | Categories | No | None |
| Competitor contrast | No | No | Yes (matrix) | "#1 Free" | vs playlists | None |
| Science/clinical claims | Some | 32% stress reduction | Billions of data points | Stanford/Harvard | Peer-reviewed, 7x focus | None |
| Guarantee | Yes | Yes | Yes | Free tier | Free tier | None |

---

## Implementation Priority

**This week (1-2 hours each):**
1. Remove or reframe announcement banner
2. Add privacy line below hero CTA
3. Fix hero CTA copy
4. Fix time inconsistency
5. Move pricing below bottom CTA

**This week (half day):**
6. Add 2-3 testimonials section (requires collecting real quotes)
7. Add aggregate stat ("X meditaciones creadas")

**Next sprint:**
8. Add use-case intent selector tiles
9. Add competitor contrast section
10. Reduce animation load for mobile

**Ongoing:**
- Collect more testimonials from users
- Pursue press/media coverage for credibility signals
- A/B test hero CTA variants
- Track audio demo play rate vs. conversion correlation in GA4
