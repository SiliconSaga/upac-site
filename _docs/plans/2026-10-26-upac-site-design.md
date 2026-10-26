# UPAC site rebuild — design

**Date:** 2026-10-26 · **Status:** approved, built in the same session · **Owner of the decision:** Rasmus (building it for a friend who owns the studio)

## Problem

uniquepac.com is a hand-rolled PHP in-place editor from years ago: Apache, `login.php`, jQuery, `div.editable` regions that go contenteditable after login, W3.CSS plus a Flickity carousel. Content was pasted from Word and Google Docs with runs of `&nbsp;` for alignment, so it only lines up at one window width, and the two people who need to edit it can barely do so. Nothing on it is dynamic beyond the editor; registration and waivers already live at Akada Dance.

## Goal

A modern, artistic site the owner and her assistant can change by asking an agent (or clicking "Suggest an edit"), with every change previewed and visually diffed before it goes live, and with the shape the gdd-sandbox already knows how to drive. Keep every fact from the old site; invent none.

## Approaches considered

1. **Jekyll on GitHub Pages with the volundr caller stubs** (chosen). Same stack as ken-site and the MTL per-sport sites, so PR previews, visual diff and the sandbox work unchanged.
2. Plain static HTML. Simpler to read but repeats the header on nine pages and has no data files, so a class-time change means editing markup in two or three places.
3. A heavier generator (Astro, Eleventy). Nicer authoring for a developer, but outside the volundr pipeline and outside what the sandbox's briefing assumes.

## Design: "Stage & Studio"

Chosen over a fully light "Studio Light" and a black-and-white "Playbill" direction.

- **Stage** surfaces (hero, inner-page title bands, footer) are midnight navy with two blurred radial "stage lights", pink upper-left and blue lower-right.
- **Studio** surfaces (everything you read: classes, tuition, bios) are cream and white.
- **Royal blue** from the script logo for links and primary buttons; **hot pink** from the Troupe costumes for the accent, the Register button and the announcement strip.
- Playfair Display for display type, Nunito Sans for body. The logo itself is kept unchanged on a white tile.
- No JavaScript except the print button; the mobile nav is a checkbox toggle.

## Structure

```
_config.yml           project-page baseurl /upac-site; staff collection
_data/                classes, tuition, season, announcements, studio, gallery, nav
_staff/               one Markdown file per instructor (9)
_layouts/             default (chrome), page (title band + body), staff (bio)
_includes/            header, footer, icon (inline SVG)
_sass/                tokens, base, header, components, pages, footer, print
assets/img/           logo, og card, favicons, gallery/, troupe/, staff/
index/about/classes/tuition/calendar/troupe/staff/contact .html
.github/workflows/    deploy.yml + pr-preview.yml (volundr callers)
```

Data files are the unit of change: one edit to `_data/classes.yml` updates the program list, the week-at-a-glance view and the home-page age cards. The week view sorts on a `start:` field so the owner never has to order anything by hand.

## Content decisions

- Everything on the public site was scraped and carried over verbatim or lightly copy-edited (typos such as "Awarness" fixed, `&nbsp;` alignment dropped). Nothing was added that the old site did not say, except derived am/pm on times and alt text on photos.
- The 20-cell home carousel became a captioned "What's happening" grid (newest eight on the home page, all in the data file).
- The 34 MB of source images were recompressed to 4.3 MB; the 6 MB headshot is now 42 KB.
- Three inconsistencies are flagged in the README for the owner rather than silently resolved: two email addresses, a probably-dead X account, and the "AAnglesNJ" spelling.

## Out of scope for this PR

- Custom domain cutover (needs DNS access the owner holds).
- Launching gdd-sandbox against the repo (needs a Discord bot token and a scoped machine-account token).
- Analytics, forms, online payments: none existed on the old site; add on request.
