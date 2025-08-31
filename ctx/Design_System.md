# Meritifi Design System

This document defines the design tokens, typography scale, and usage guidelines for building UI consistently across the app.

## Typefaces

- Primary body: Lato (`--font-lato`)
- Display/headings: Balsamiq Sans (`--font-balsamiq`)

Applied globally via `next/font` in `src/app/layout.tsx`. Tailwind families:

- `font-sans` → Lato
- `font-balsamiq` → Balsamiq Sans

## Line spacing

- Headings: 180% (applied via token line-heights below)
- Body: 1.5 (24px on 16px base)

## Typography scale

Desktop (root 16px):

- Heading 1: 54px → `text-ds-h1` (Balsamiq)
- Heading 2: 40px → `text-ds-h2` (Balsamiq)
- Subheading: 28px → `text-ds-sub` (Balsamiq)
- Body 1: 24px → `text-ds-b1` (Lato)
- Body 2: 16px → `text-ds-b2` (Lato)
- Body 3: 12px → `text-ds-b3` (Lato)
- Notes/Bubbles: 28px → `text-ds-notes` (Lato)
- Footer/Header text: 16px → `text-ds-footer` (Lato)

Mobile overrides:

- H1: 34px → `dsm-h1`
- H2: 22px → `dsm-h2`
- Text 1: 16px → `dsm-text1`
- Text 2: 13px → `dsm-text2`

Convenience utility classes (Tailwind utilities defined in `globals.css`):

- `.ds-heading-1`, `.ds-heading-2`, `.ds-subheading`
- `.ds-body-1`, `.ds-body-2`, `.ds-body-3`, `.ds-notes`, `.ds-footer`

Use these instead of ad-hoc sizes for consistency.

## Buttons

Sizes (ALL CAPS, letter spacing applied):

- Button 1: 32px → `.ds-btn-1` or `size="btn1"` on `Button`
- Button 2: 28px → `.ds-btn-2` or `size="btn2"`
- Button 3: 16px → `.ds-btn-3` or `size="btn3"`

Component API (`src/components/ui/button.tsx`):

- `variant`: `default | outline | destructive | secondary | ghost | link`
- `size`: `default | sm | lg | icon | btn1 | btn2 | btn3`

Button sizes automatically apply uppercase and tracking; pass additional colors/borders via className.

## Colors

Colors are CSS variables in `src/app/globals.css` and mapped in Tailwind `theme.extend.colors`.
Use semantic tokens: `bg-primary`, `text-primary-foreground`, `bg-secondary`, `bg-accent`, etc.

## Usage examples

Heading:

```tsx
<h1 className="ds-heading-1 text-gray-900">Page Title</h1>
```

Body copy:

```tsx
<p className="ds-body-2 text-gray-700">Readable paragraph text.</p>
```

Primary CTA:

```tsx
<Button
  size="btn1"
  className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black border-2 border-yellow-400"
>
  GET STARTED
</Button>
```

## Breakpoints

- Mobile < 768px: mobile font tokens apply in utilities
- Tablet/Desktop ≥ 768px: desktop tokens

## Do/Don't

- Do use the provided utilities and component sizes
- Don’t inline ad-hoc pixel font sizes; prefer tokens/utilities
