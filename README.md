# Nazir Hussain — Private Taxi Tours, Leh, Ladakh

Website for **Nazir Hussain**, private taxi tour operator based in Leh, Ladakh.

**Live site:** https://misrarah.github.io/nazirhussain/
**Repository:** https://github.com/misrarah/nazirhussain

---

## Deploying to GitHub Pages

1. Push this folder (all files) to the `main` branch of `https://github.com/misrarah/nazirhussain`
2. In the repository, go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main` and folder to `/ (root)`
5. Click **Save** — the site will be live at `https://misrarah.github.io/nazirhussain/` within a minute or two

No build step required. The site is pure HTML/CSS/JS.

---

## Adding photos

Drop image files into the `/images/` folder and push. See `/images/README.md` for the full list of filenames and recommended sizes.

Key images:

| File              | Used in       |
|-------------------|---------------|
| `images/hero.jpg` | Hero section background |
| `images/nazir.jpg`| About section portrait |
| `images/gallery-1.jpg` … `gallery-9.jpg` | Gallery grid |

---

## Updating content

All content is in `index.html`. Search for the text you want to change and edit it directly.

Common updates:
- **Phone / WhatsApp number** — search for `919906988895` (appears in nav, hero, contact, footer)
- **Testimonials** — find the `<!-- Replace with real testimonials -->` section
- **Instagram link** — search for `href="#"` near the Instagram icon in the footer and replace with your profile URL
- **Gallery captions** — update the `<figcaption>` text inside each `.gallery-item`

---

## File structure

```
/
├── index.html      — Single-page site (all sections)
├── styles.css      — All styles (mobile-first, no framework)
├── script.js       — Nav, lightbox, scroll animations, email obfuscation
├── README.md       — This file
└── images/
    ├── README.md   — Photo requirements and tips
    ├── hero.jpg    — Add your own
    ├── nazir.jpg   — Add your own
    └── gallery-*.jpg — Add your own (1–9)
```

---

## Contact

**Nazir Hussain** · +91 99069 88895 · [WhatsApp](https://wa.me/919906988895)

Site designed by Rahul Misra
