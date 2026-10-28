# Working on this site

Notes for an AI agent asked to change this site. Humans are welcome to read it, but it is written for the mistakes an agent makes here on its first attempt. The everyday "how do I change content" guide is [`README.md`](README.md), written for the studio's owner and her assistant, who are not technical.

## What this site is

A Jekyll site for a small dance studio, owned by a non-technical business owner. Every page is a plain file she can edit or ask an agent to edit. That independence is the point of the rebuild, so prefer changes that keep it: plain files, data files over markup, no build step she cannot run, no service only you can log into.

Published under the studio's name to parents who will act on what it says: they will show up at the time the Classes page gives and pay the price the Tuition page lists. That makes an invented or stale fact the worst failure available here, worse than an ugly page or a broken build.

## Never invent facts

Do not invent class times, prices, dates, ages, names, quotes or awards, not even as a placeholder that reads better. If a detail is missing, leave it visibly unfilled (`TBD`) in prose and ask. `TBD` never goes in a data field that renders as a time or price.

Only repeat specifics someone gave you or that you read in this repository. Knowing the studio does not tell you a class time.

## Content lives in data files, not pages

| Content | File | Rendered by |
|---|---|---|
| Classes, times, levels, ages | `_data/classes.yml` | `classes.html` (program list and week view), home-page age cards |
| Tuition | `_data/tuition.yml` | `tuition.html` |
| Season label, registration links | `_data/season.yml` | hero, header Register button, Classes registration box |
| Banner strip, "Coming up" | `_data/announcements.yml` | header, hero |
| Studio contact, hours, socials, calendar links (embed, open, iCal), partner, parties | `_data/studio.yml` | header, footer, Contact, Calendar, home |
| Gallery captions | `_data/gallery.yml` | home "What's happening", Troupe photo grid |
| Staff bios | `_staff/*.md` (collection, `order:` sorts) | `staff.html`, `_layouts/staff.html` |
| Menu | `_data/nav.yml` | header |

A phrase that looks like page copy is often read from one of these. **Search the whole project before changing anything**, for the exact text and the words around it, then change every place or say which you are leaving and why. The home page restates About and Troupe in shorter form; a change to the long version usually wants a matching change to the summary.

### The week view sorts on `start:`

Each schedule slot in `_data/classes.yml` has both `time:` (shown as written) and `start:` (24-hour, used only to sort the week-at-a-glance). Change both when you move a class, or the slot renders in the right words at the wrong position.

### Images

Published images are already recompressed (`assets/img/`, ~4 MB total). When adding one, keep it under about 1 MB and name it in kebab-case with a year where it has one (`nutcracker-tickets-2026.jpg`). Every gallery entry needs an `alt:` a screen-reader user would find useful.

## Look and feel

Palette and type live in `_sass/_tokens.scss` ("Stage & Studio": midnight navy for hero, title bands and footer; cream and white for anything to read; the logo's royal blue for links; hot pink for accents). Section backgrounds are driven by classes on `section.block` (`cream`, `white`, `navy`). Do not add a third accent color or a new font without being asked.

The nav is a CSS-only checkbox toggle. The only JavaScript is the print button and `assets/js/header.js`, which marks the sticky bar compact once the masthead has scrolled out of view (state comes from scroll position, nothing is stored). Keep it that way unless a feature genuinely needs more.

## How changes reach the site

Branch, commit, open a pull request. **Never commit to `main`** and never merge your own work: the owner merges, and the PR page is what she reviews on. CI (shared from [volundr](https://github.com/SiliconSaga/volundr)) posts a preview link and before/after screenshots on every PR; the deploy to `gh-pages` runs only on merge.

Say what you changed in a sentence or two and hand over the preview link. The reviewer does not read diffs.

## Checking your work

```bash
ws exec upac-site bundle exec jekyll build     # catches Liquid and YAML errors
ws exec upac-site bundle exec jekyll serve     # http://127.0.0.1:4000/upac-site/
```

Two kinds of YAML mistake in a data file. A syntax error (a stray colon, an unbalanced quote) fails the build, which is the better failure. An ambiguous unquoted value builds fine and renders wrong: `4:30` alone parses as the integer 270 under YAML 1.1, `Note: see below` becomes a nested mapping. So quote clock times and anything else YAML could read as a number or a key. URLs such as `https://…` are safe unquoted, and the data files leave them bare.

## Workspace idiom (GDD)

- One command per call: no `cd`, `&&`, `;` or pipes.
- `ws exec upac-site <command>` to run anything inside this repository.
- `ws commit`, `ws push`, `ws cr` for the steps that need attribution and auth; never raw `git commit` / `git push` / `gh pr create`.
- Narrow output with flags, not pipes, and never truncate a search for content you are about to change.
