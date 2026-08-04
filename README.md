# Foster dog site — starter template

A one-page static site for a foster/adoptable dog. No build step, no framework —
just `index.html`, `style.css`, `script.js`, and `i18n.json`.

## 1. Customize your content

Everything visible on the page lives in **`i18n.json`**. Open it, find the `en`
and `sr` blocks, and edit the text values (the keys on the left must stay the
same — the script looks them up by key).

The dog's name currently appears in a few places as plain text too — do a
find-and-replace for "Luna" across `i18n.json` and `index.html`.

## 2. Add your photos

Drop your real photos into `photos/`, matching these filenames (or edit the
`src=` attributes in `index.html` if you rename them):

| File              | Suggested aspect ratio | Used for              |
|-------------------|------------------------|------------------------|
| `hero.jpg`        | 4:5                    | Hero portrait          |
| `gallery-1.jpg`   | 3:4                    | Gallery                |
| `gallery-2.jpg`   | 1:1                    | Gallery                |
| `gallery-3.jpg`   | 4:3                    | Gallery                |
| `gallery-4.jpg`   | 9:16                   | Gallery                |
| `gallery-5.jpg`   | 4:5                    | Gallery                |
| `gallery-6.jpg`   | 3:4                    | Gallery                |
| `contact.jpg`     | 4:5                    | Contact section        |

Varied aspect ratios are what make the masonry gallery look natural instead of
a rigid grid — try not to use all-square photos.

If you rename files to `.jpg`/`.png`, delete the placeholder `.svg` files and
update the `src` paths in `index.html` to match (e.g. `photos/hero.jpg`).

## 3. Update contact links

In `index.html`, inside `<section id="contact">`, replace:
- `https://wa.me/381600000000` with your real WhatsApp number (international
  format, no `+` or spaces, e.g. `381601234567`)
- `https://t.me/your_username` with your Telegram handle
- `https://maps.google.com/?q=Belgrade` with your actual meeting location

## 4. Preview locally

You need a local server (not just double-clicking the file) because the page
`fetch`es `i18n.json`:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## 5. Host it free on GitHub Pages

1. Create a new **public** repository on GitHub (e.g. `your-dog-adopt`).
2. Push these files to the `main` branch:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two — GitHub will give you a live URL:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
6. Every time you `git push` to `main`, the live site updates automatically.

### Getting a QR code for it
Once you have the live URL, generate a QR code for it (e.g. with any free QR
generator) and save it as `qr.png` in the project root — handy for flyers or
a WhatsApp share.

## How this differs from a "real" web app

There's no backend, no database, no build tooling. That's the point for a
page like this: it's just files a browser reads directly, which is why
GitHub Pages (a static file host) is enough, and why it's basically free to
run forever.
