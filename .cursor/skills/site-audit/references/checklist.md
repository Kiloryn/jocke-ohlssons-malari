# Audit checklist

Load this from `site-audit`. Skip anything that does not apply to this one-page Swedish marketing site.

## Visual design and hierarchy

- Can a stranger name the business, what it does, and the next action in a few seconds?
- Is there one primary CTA per view, or several competing ones?
- Do type, color, and space actually rank content, or is everything the same weight?
- Does new chrome look like generic AI template output (SaaS cards, purple gradients, scattered fade-up, decorative 01/02/03, tracked-out eyebrows on every heading)? Flag *new* generic patterns; do not treat the existing cream/ink/green craftsman look as a defect by default.

## Layout and responsive

- Horizontal overflow on mobile (`scrollWidth > innerWidth`).
- Sticky header covering headings, focus, or the skip link.
- Uneven gutters, colliding elements, text clipping, images stretching.
- Mobile menu: open, focus, Escape, restore focus, scroll lock, no hidden off-canvas leak.

## UX

- Primary path to contact (phone + form) is obvious on desktop and mobile.
- Form: labels, errors next to fields, honeypot not shown, disabled/loading states, useful failure when SMTP is unset.
- Interactive states exist: hover, focus-visible, disabled, error, open/closed menu.
- In-page nav and hash targets clear the sticky header (`scroll-margin`).

## Accessibility

- Images have useful `alt` (or empty alt if decorative).
- Icon-only buttons have names; form controls have labels.
- Heading order and landmarks (`header`, `main`, `footer`, skip link).
- Keyboard: Tab order, visible focus, Escape closes the menu.
- Contrast on text and UI chrome (WCAG AA as the bar: ~4.5:1 body, ~3:1 large text).
- `prefers-reduced-motion` is respected where motion exists.

## Performance (obvious only)

- Hero / LCP image: reasonable file size, `priority`/`fetchpriority`, dimensions that avoid CLS.
- Below-fold images lazy; srcset actually used.
- No layout-thrashing animation (`width`/`top`/`left` on hover).
- No huge client JS for a mostly static page.

## Content and presentation

- Swedish copy is specific to this company, not filler.
- Phone, email, area, and years match `src/lib/content.ts`.
- Empty/error/not-configured contact states tell the visitor what to do.

## Technical / SEO / security (only if relevant)

- `lang="sv"`, title, description, canonical, OG image, JSON-LD, sitemap, robots.
- Contact API: honeypot, no secrets in the client, sensible status codes.
- Broken links, 404 images, console errors, failed `/api/contact`.
