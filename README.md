# Unique Performance Arts Center — website

This is the website for **UPAC** in West Orange, NJ. It is a plain, file-based site: every page, class time and price is a small text file you (or your AI agent) can edit. No website-builder login, no waiting on a volunteer, and every change is previewed before it goes live.

> **The easiest way to change anything: ask your agent.**
> *"Move Hip Hop 2 to Fridays at 6."* · *"Add the Nutcracker tickets flyer to What's happening."* · *"Update the October announcement."*
> Then look at the preview link it sends back, and approve. The rest of this file is the map for when you want the details.

## Where things live

| You want to change… | Edit this file |
|---|---|
| A class time, age range or description | `_data/classes.yml` |
| Tuition prices, cycles, discounts, payment terms | `_data/tuition.yml` |
| The season name, "Still time to register", the Akada registration links | `_data/season.yml` |
| The pink strip across the top, and the "Coming up" box on the home page | `_data/announcements.yml` |
| Address, phone, email, office hours, social links, calendar, Music Together, parties | `_data/studio.yml` |
| Photos and social posts in "What's happening" and on the Troupe page | `_data/gallery.yml` plus the image in `assets/img/gallery/` or `assets/img/troupe/` |
| A staff bio or photo | one file per person in `_staff/`, photo in `assets/img/staff/` |
| The words on About, Troupe, Contact, Calendar | `about.html`, `troupe.html`, `contact.html`, `calendar.html` |
| The menu | `_data/nav.yml` |
| Colors, fonts, spacing | `_sass/_tokens.scss` (palette) and the other files in `_sass/` |

Edit the **data files first** when you can. The Classes page, the home-page age cards and the week-at-a-glance view all read from `_data/classes.yml`, so one edit updates every place a class appears.

### Adding a staff member

Copy any file in `_staff/`, rename it, put their photo in `assets/img/staff/`, and fill in the top:

```markdown
---
title: Full Name
role: UPAC Alumna        # optional
order: 10                # position on the Staff page
photo: /assets/img/staff/full-name.jpg
---
Their bio, as long or short as you like.
```

### Adding a photo to "What's happening"

Drop the image in `assets/img/gallery/` (a phone photo or a square/portrait social post is perfect; big files are fine, but under 1 MB is kinder to phones), then add three lines at the **top** of the `home:` list in `_data/gallery.yml`:

```yaml
  - file: nutcracker-tickets-2026.jpg
    caption: Nutcracker tickets on sale now
    alt: Poster for the UPAC Nutcracker performance
```

The home page shows the newest eight.

### Changing the top announcement

In `_data/announcements.yml`, change `banner: text:`. Leave it blank to hide the strip. The "Coming up" list below it works the same way: one line per event, delete the ones that have passed.

## How changes go live

1. A change is made on a branch and opened as a **pull request**, by your agent or by you via the "Suggest an edit" link in the footer of any page.
2. Within a couple of minutes the pull request gets two comments: a **preview link** to the whole site with the change applied, and **before/after screenshots** of every page that looks different.
3. You look, and click **Merge**. The live site updates within a minute or two.

Nothing reaches the live site without that merge, so there is no way to break the site by trying something.

## Things carried over from the old site to confirm

- The old site showed `uniqueperformanceartscenter@gmail.com` but its email links pointed at `uniqueperformancearts@gmail.com`. This site uses the first one everywhere (it is the Zelle address and the one on the social posts). If that is wrong, change `email:` in `_data/studio.yml`.
- The X (Twitter) link `@uniquepac` was kept; remove it from `_data/studio.yml` if the account is no longer used.
- The October fundraiser notice names "AAnglesNJ" as on the old site; correct the spelling in `_data/announcements.yml` if needed.

## Moving to uniquepac.com

The site currently lives at `https://siliconsaga.github.io/upac-site/`. To serve it from the studio's own domain: set `baseurl: ""` in `_config.yml`, add a file named `CNAME` containing `uniquepac.com`, point the domain's DNS at GitHub Pages, and enable the custom domain in the repository's Pages settings. Your agent can walk you through each step.

## Preview on your own computer (optional)

You never need this to publish. If you want to see changes before pushing, install Ruby, then from the yggdrasil workspace:

```bash
ws exec upac-site bundle install          # once
ws exec upac-site bundle exec jekyll serve
```

and open <http://127.0.0.1:4000/upac-site/>.

---

*Rebuilt in 2026 from the original uniquepac.com so the studio can maintain its own site, with the help of an AI agent, using the [GDD](https://siliconsaga.github.io/yggdrasil/gdd/) workflow. Code is MIT-licensed; the studio's name, logo, photos and text remain its own.*
