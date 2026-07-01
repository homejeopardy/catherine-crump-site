# Catherine Crump — personal website

A static, multi-page academic site for Catherine Crump (UC Berkeley School of Law).
No build step, no framework — plain HTML/CSS/JS. Berkeley-scholarly theme.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home (hero, focus areas, contact) |
| `about.html` | Bio / About |
| `publications.html` | Publications (filterable) |
| `teaching.html` | Teaching & the Samuelson Clinic |
| `civil-liberties-60.html` | Civil Liberties in 60 Seconds video series |

## Editing content

- **Publications:** edit the `PUBLICATIONS` array in [`js/publications.js`](js/publications.js).
  Each entry has `category` (`"book"` \| `"article"` \| `"press"`), `year`, `title`,
  `authors`, `cite`, and `links`. A link with `url: null` renders as a greyed-out
  placeholder button — fill in the real URL to activate it.
- **Bio:** edit the prose in `about.html` (marked as a draft — please verify details).
- **Photo:** drop a real headshot at `assets/catherine-crump.jpg` and update the
  `<img src>` in `index.html` (currently `assets/portrait-placeholder.svg`).
- **Colors/fonts:** CSS variables at the top of [`css/style.css`](css/style.css).

## Local preview

```bash
python3 -m http.server 8100
# then open http://localhost:8100
```

## Deploy to GitHub Pages

1. Create a repo and push this directory.
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
   and publishes the site.

## Notes

- Branding (logo `assets/cl60-logo.png`, YouTube `@profcrump`) is shared with the
  sibling *Civil Liberties in 60 Seconds* microsite.
- Some publication links and the bio are placeholders pending real URLs / review.
