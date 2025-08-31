# Figma Polish Checklist

Reference: `edtech[1]` → `landing page final`

Process

- Always re-open the Figma node for the section you’re touching and verify redlines before making edits.

## Visual differences to verify/fix

- [x] Header: logo wordmark spacing vs 40px spec; login button gradient stroke
- [x] Hero: H1 exact size (Figma shows 48), line-height; CTA border gradients
- [ ] Hero right image: bottom radius matches 229.39px; x/y position
- [ ] How It Works: dashed connector stroke length, gap, and color (#868686)
- [ ] How It Works chips: icon sizes inside 45px pill; purple text color (#957CFF)
- [ ] Teacher card bg tone (#FFDA8C) and right radius values
- [ ] Dashboard bubbles: exact positions (416px/ -4px) and shadows
- [ ] Tutors cards: top image corner radius 60; divider opacity 0.7
- [ ] Tutors chips: tiny icon alignments and letter-spacing (-1%)
- [ ] Magazine left card: shadow strength (22.85 blur) and label type weight
- [ ] Magazine center image: size 294x299 precisely; overlay alpha
- [ ] About card: arrow icon size (34.97), margins; text sizes (22.08)
- [ ] Success cards: tile opacity 40%, corner radius 10.8
- [ ] College right image container radii 130.27/21.54/21.63 precise
- [ ] Footer: gradient image scale/position; “Information” casing and opacity

## Interactions/animations to add

- [ ] Header links: subtle underline grow on hover, active bold
- [ ] CTAs: gradient shift on hover, soft outer glow (focus-visible ring)
- [ ] Bubbles (hero/dashboard): slow float (3-5s), slight parallax on scroll
- [ ] Cards: elevation increase on hover, translate-y-1, shadow-lg → xl
- [ ] Magazine “Read more”: chevron nudge on hover
- [ ] Tutors actions: outline button tint and filled button brightness pulse on hover
- [ ] Smooth anchor scroll offset for fixed header (scroll-margin-top)

## Responsive checklist

- [ ] Apply mobile tokens: H1 34px, H2 22px, btn1 20, btn2 13, text 16/13
- [ ] Header: stack nav under logo; hamburger optional
- [ ] Hero: image above text; maintain bottom radius scale
- [ ] How It Works: stack cards; maintain dashed connectors
- [ ] Dashboard: stack left over right; bubbles reposition to not overlap
- [ ] Tutors: 1-per-row on mobile; spacing 16
- [ ] Magazine: vertical stack; ensure images keep aspect
- [ ] Success: 1-per-row; spacing 12
- [ ] College: inputs full-width; image below; CTA full-width
- [ ] Footer: collapse columns; center-aligned; spacing 16

## Notes

- Keep effects subtle; prefer 150–250ms transitions, ease-out.
- Use existing DS tokens; avoid ad-hoc pixel fonts in code.
