---
name: site-audit
description: >-
  Manual website audit covering visual design, hierarchy, responsive/mobile
  behavior, UX, accessibility, obvious performance problems, layout, content
  presentation, browser-rendered behavior, and technical issues that affect
  visitors. Use only when the user explicitly asks for an audit, review,
  critique, or diagnosis of the site, a page, or the UI, or invokes /site-audit.
  Do not run for ordinary edits, copy changes, or implementation work.
disable-model-invocation: true
---

# Site audit

Produce a diagnostic report of the **rendered** site. Do not start fixing unless the user asked for fixes.

This is not a design pass (`frontend-design`) and not a post-change smoke test (`browser-verify`). Do not load those skills for the audit itself.

## Scope

Default target: `http://localhost:3000` (`npm run dev`). Production URL is in `src/lib/siteUrl.ts` if the user asked to audit the live site.

This is a one-page Swedish marketing site. Audit the whole page unless the user narrowed it. Include, when relevant:

- Visual design and hierarchy
- Responsive / mobile behavior
- UX (flow, CTAs, forms, navigation)
- Accessibility
- Obvious performance problems
- Layout issues
- Content and presentation
- Browser-rendered behavior (what code review cannot see)
- Obvious technical problems that hurt the visitor experience
- SEO / sharing and obvious security issues **only when they affect this site**

Do not run a separate typography, spacing, UX, a11y, or anti-slop skill. Fold those judgments in here. Anti-slop means "does this read as generic template output?"; it is not a mandate to invent an eccentric look. Conventional craft-business presentation is allowed when it fits.

Existing implementation is evidence, not a freeze. Prefer a better approach when the finding justifies it.

## Method

1. Start from the rendered page, not from source. Use Cursor's browser tools (navigate, snapshot, screenshot, click, scroll, CDP as needed). Do not stand up Playwright or Chrome DevTools MCP for this.
2. Desktop (~1280) and mobile (~390). On mobile: menu, sticky header, tap targets, horizontal overflow, form usability.
3. Walk the page: hero, services, about, projects, process, FAQ, contact, footer. Open the mobile menu; submit or fail the contact form; use keyboard on primary controls.
4. Then skim source only to locate findings (`src/components/`, `src/app/`, `src/lib/content.ts`, `src/app/globals.css`).
5. For performance, look at what is visible: oversized images, layout shift, blocking work, obviously wasted JS. Do not invent a Lighthouse score you did not measure.
6. For detailed check prompts, read [references/checklist.md](references/checklist.md) and skip rows that do not apply.

If the browser cannot open the page, say so, audit what you can from source, and mark visual claims as unverified.

## Report

Lead with a one-line verdict and counts. Group findings as **Blocker / Major / Minor**. Each finding: location, what is wrong, why it matters, a concrete fix. Separate **unverified** items.

Do not pad the report with passing checks. Do not impose a rigid 8pt grid, a mandatory type ratio, or a replacement aesthetic. Recommend, don't restyle the brand, unless the user asked for that.
