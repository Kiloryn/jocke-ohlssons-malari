---
name: browser-verify
description: >-
  Verify rendered UI in Cursor's built-in browser after meaningful visual or
  interaction changes. Use when the user asks to test the site, when debugging
  visual, layout, responsive, or interaction behavior, or after creating or
  substantially changing UI. Do not use for copy-only edits, typos, renaming,
  small non-visual values, or unrelated non-visual bugfixes.
---

# Browser verification

Confirm what a visitor actually sees. A screenshot of first paint is not enough.

## When not to use

Skip this skill for text-only edits, typos, renames, and non-visual bugfixes. Do not start Playwright, Python browser scripts, or extra MCP servers; Cursor's browser tools are the default here.

## Default target

- Local app: `http://localhost:3000` via `npm run dev`
- Single page. Sections are in-page: `#tjanster`, `#om`, `#projekt`, `#kontakt`

If the server is not running, start it and wait until the page responds before driving the browser.

## Workflow

1. Open or reuse a tab on the target URL. Lock the tab before a longer pass; unlock when finished.
2. Exercise the changed flow the way a visitor would: click, type, submit, open/close the mobile menu, scroll to the section you touched.
3. Use an accessibility snapshot for structure and a screenshot when the issue is visual.
4. If the change is layout, spacing, or responsive, check a desktop viewport (~1280) and a mobile viewport (~390). Sticky header, overflow-x, and tap targets matter on mobile.
5. If you changed how state is written or derived, hit every surface that reads it (header CTA, contact form, FAQ, etc.).
6. Hunt regressions in neighboring sections. Fix what you broke, then re-check.

## Evidence

Prefer a failed interaction, a console/network error, or a screenshot of a broken state over a claim that "it should work." If browser tools are unavailable, say so and fall back to the closest substitute (`npm run build`, curling `/api/contact`) instead of inventing a Playwright stack.
