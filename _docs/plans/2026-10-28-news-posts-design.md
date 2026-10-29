# News posts — design

**Date:** 2026-10-28 · **Status:** approved in conversation, built in the same session · **Decision owner:** Rasmus, for the studio owner

## Problem

The old site's "What's happening" slider held 18 images and nothing else: no date, no words, nothing to click. Thirteen of the originals carry Facebook CDN file names or "Social Post" in their names, so they were Instagram and Facebook posts that lost their captions on the way to the website. The studio has no place of its own where a post lives on after it scrolls off a timeline.

## Goal

Posts first, on the site, then promoted to social. Each post is a permanent page with the image, the words, a date and download sizes. The home page shows the latest ones. Parents can follow without an account. The owner adds a post by asking the agent or by one file in GitHub's editor, and the PR preview shows it before it is live. Later, the MTL-style promotion step (caption drafts, then automated posting) slots in without changing the content.

## Approach

Copied from the MTL per-sport sites (mtl-basketball `_posts/`, post layout, post list, follow box, Atom and JSON feeds), restyled for Stage & Studio. The MTL design doc says a fourth adopter should move the shared files into volundr; UPAC is that fourth site, but its look differs enough that only the post layout, list include and feed template are truly shared, so this copies the pattern now and leaves the consolidation as its own volundr item.

Alternatives set aside: keeping the gallery data file and adding a `link` field (no words, no dates, no feed); a third-party news embed from Instagram (needs a token, breaks on their schedule, nothing permanent).

## Shape

- `_posts/YYYY-MM-DD-slug.md`: `title`, one-line `description`, `image`, `image_alt`, optional `downloads` (list of label + file), optional `date_approximate: true` for retrofitted posts whose day is not known; those render as "October 2026". Body is the post text written for the web: links as links, no hashtags.
- Images for a post live in `assets/news/<slug>/`. The 18 retrofitted posts moved their image out of `assets/img/gallery/` into those folders; the four gallery images used elsewhere (student of the year, birthday parties, Music Together, troupe photos) stayed.
- `/news/` lists every post as a card; the home page "What's happening" grid is the latest eight, same cards, now clickable.
- `jekyll-feed` publishes `/feed.xml`; `news/feed.json` is a JSON Feed 1.1 of the same posts. Both are advertised in the page head. The follow box on News and on each post links Instagram, Facebook and the feeds.
- Post pages set `og:image` to their own image, so a shared link previews the picture.
- Nav gains News after Calendar. The footer links it.

## Retrofit

Captions became titles. Dates: the playbills and the MLK event carry a date in the image and are exact; everything else is dated to the month the event belongs to and marked approximate for the owner to correct. Body text says only what the image shows. Where the owner can supply the original Instagram or Facebook link it goes in a `source` field and the post links to it.

## Later

- Flyer kit (volundr `flyer-kit`) for fall registration and the spring show, in the site colors with the logo and a QR to Akada; the season post links the exports.
- Promotion: caption drafts next to the post until the shared automation lands.
