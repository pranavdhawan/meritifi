# Figma Landing Page Implementation Checklist

Source: `edtech[1]` → node `landing page final` (Figma)

Milestones
- [x] Confirm access and parse structure (frames, sections, styles)
- [ ] Scaffold new route `src/app/landing/page.tsx`
- [ ] Header: logo + nav + login (blur bg gradient, spacing)
- [ ] Hero: headline, subtext, gradient blobs, CTA buttons
- [ ] How It Works: student card (purple), teacher card (yellow)
- [ ] Dashboard: headline, dual CTAs, right preview with bubbles
- [ ] Top Tutors: 3 cards with stats chips and actions
- [ ] Magazine: 3 cards + socials row + feature card
- [ ] Success Stories: 6 testimonial tiles carousel grid
- [ ] College Search: 3 selects + search button + info card + right image
- [ ] Footer: gradient bg, sections, socials, contact, bottom bar
- [ ] Export/download all images/icons to `public/assets/...`
- [ ] Pixel QA pass against Figma (typography, spacing, radii, shadows)

Notes
- Use DS typography utilities and button sizes (`btn1/btn2/btn3`).
- Gradients and borders follow Figma tokens (add as inline styles if needed).
- Keep classNames minimal and derive sizes from DS tokens.
