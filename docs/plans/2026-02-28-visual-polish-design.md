# Visual Polish Design — Zenti Landing Page

**Date:** 2026-02-28
**Approach:** CSS + Texture polish (Approach B)
**Goal:** Elevate the existing landing page from "good" to "beautiful" while preserving the current dark/purple/warm meditation vibe.

## Changes

### Typography & Global
- Add Inter variable font via Google Fonts
- Gradient text on h1 `<strong>` (accent to warm)
- CSS noise texture overlay on body (pseudo-element, ~0.03 opacity)
- Section padding: 5rem -> 6rem
- Improved font weight hierarchy (h3: 500 -> 600, section-label: letter-spacing 0.25em)

### Hero
- Second subtle outer ring on breathing circle
- Enhanced CTA glow and hover states
- Refined vertical spacing

### Cards (Steps, Benefits, Pricing)
- Glassmorphism: `backdrop-filter: blur(12px)` on all cards
- Gradient border glow on hover
- Pricing featured card: animated conic-gradient border on hover
- Better text weight hierarchy

### Chat Mockup
- Typing indicator animation (3 bouncing dots)
- Polished borders and spacing

### Dividers
- Wider, more expressive glow dividers
- Warm-to-accent gradient variation

### Animations
- Smoother cubic-bezier easing on scroll reveals
- Snappier stagger timing (100ms gaps)
- Subtle scale transform on card hover

### FAQ
- Smoother open/close transitions
- Better padding rhythm

### Footer
- Refined spacing, subtle glow on top border

## Constraints
- Single HTML file stays single HTML file
- Only new dependency: Google Fonts (Inter)
- No structural HTML changes beyond small additions (typing dots, outer ring)
- Must maintain mobile responsiveness
