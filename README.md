<div align="center">

<a href="https://hoshuko.github.io/atelier-nacre/en.html"><img src="https://hoshuko.github.io/assets/readme/nacre-banner-en.jpg" alt="Atelier Nacre on desktop and mobile" width="100%"></a>

# Atelier Nacre

**A website for a nail studio in Bordeaux: a gel set taken apart layer by layer, a colour try-on and online booking.**

**English** · [Français](README.fr.md) · [Español](README.es.md)

[![Live demo](https://img.shields.io/badge/Live_demo-hoshuko.github.io-5B0E22?style=for-the-badge)](https://hoshuko.github.io/atelier-nacre/en.html) [![Promo video](https://img.shields.io/badge/Promo_video-60_s_%C2%B7_3_formats-B8924E?style=for-the-badge)](https://hoshuko.github.io/en.html#nacre) [![Languages](https://img.shields.io/badge/Languages-FR_%C2%B7_EN_%C2%B7_ES-555555?style=for-the-badge)](#languages) [![License](https://img.shields.io/badge/License-PolyForm_Noncommercial-555555?style=for-the-badge)](LICENSE)

</div>

## Preview

<a href="https://hoshuko.github.io/en.html#nacre"><img src="https://hoshuko.github.io/assets/readme/nacre-preview-en.webp" alt="Animated preview of Atelier Nacre" width="100%"></a>

The site’s signature animation, taken from its 60-second promo video. [Watch the full promo video →](https://hoshuko.github.io/en.html#nacre)

## Highlights

- **Anatomy of a set.** The page zooms in on a nail in the photo, then the gel set comes apart into six 3D layers, each with its timing.
- **Colour try-on.** Twelve shades and four finishes (gloss, matte, chrome, glitter) applied to the photo of a hand, keeping its natural reflections.
- **Which shape?** Square, oval, almond, ballerina and stiletto morph into one another.
- **Gallery and price list.** A filterable gallery with a lightbox, services with durations and prices, and the hygiene protocol.
- **Booking in one line.** The booking buttons point to Planity, Treatwell, Booksy, Calendly or Instagram, as set in the config.

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| <img src="https://hoshuko.github.io/assets/shots/nacre-desktop-en.webp" alt="Atelier Nacre on desktop" width="560"> | <img src="https://hoshuko.github.io/assets/shots/nacre-mobile-en.webp" alt="Atelier Nacre on mobile" width="200"> |

## Promo videos

Three formats, 60 seconds each, with music and sound effects created from scratch (no copyrighted audio). Click a poster to play the video.

| Landscape · 16:9 | Feed · 4:5 | Vertical · 9:16 |
| :---: | :---: | :---: |
| <a href="https://hoshuko.github.io/assets/video/nacre-169-en.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-169-en.jpg" alt="Atelier Nacre promo video, Landscape · 16:9" width="360"></a> | <a href="https://hoshuko.github.io/assets/video/nacre-45-en.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-45-en.jpg" alt="Atelier Nacre promo video, Feed · 4:5" width="180"></a> | <a href="https://hoshuko.github.io/assets/video/nacre-916-en.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-916-en.jpg" alt="Atelier Nacre promo video, Vertical · 9:16" width="152"></a> |
| <sub>YouTube, websites</sub> | <sub>Facebook & Instagram feeds</sub> | <sub>Reels, Stories, WhatsApp</sub> |

## Languages

The site ships in French (`index.html`, default), English (`en.html`) and Spanish (`es.html`). Each language is a static page, so search engines and link previews see the right text, and the language switcher sits in the navigation.

## Under the hood

- The six layers are traced from the photo and stacked in CSS 3D; the try-on recolours the nails on a canvas with multiply blending and pixel masks, so highlights stay intact.
- Plain HTML, CSS and JavaScript: no framework, no dependency, no build step needed to run it.
- Content and interface text live in one file per language (`assets/js/config.fr.js · config.en.js · config.es.js`).
- WebP images, self-hosted fonts, `prefers-reduced-motion` support, keyboard navigation and layouts checked from 360 px wide.
- Privacy by design: no cookies, no analytics, no third-party requests, and a strict Content Security Policy.

## Run it locally

Any static web server works. With Python:

```bash
git clone https://github.com/hoshuko/atelier-nacre.git
cd atelier-nacre
python3 -m http.server 8000
```

Then open <http://localhost:8000>. To publish it, upload the folder to any static host (GitHub Pages, Netlify, Apache, Nginx…).

## Make it yours

All the content is in `assets/js/config.fr.js`, `config.en.js` and `config.es.js`: brand, address, opening hours, booking platform, layers, shades, shapes, gallery, prices, hygiene, reviews, FAQ and interface text. `demo: true` shows the demo notice and keeps the booking and Instagram buttons from leaving the page; set it to `false` with your real links.

## Credits

Photos come from Unsplash, Pexels and Wikimedia Commons; full attributions are listed in [CREDITS.md](CREDITS.md). Fonts are under the SIL Open Font License 1.1 ([`assets/fonts/OFL.txt`](assets/fonts/OFL.txt)). All names, addresses, phone numbers, prices and reviews are fictional.

## License

The code is released under the [PolyForm Noncommercial License 1.0.0](LICENSE). You may use, study and modify it for any non-commercial purpose: personal projects, learning, teaching, charities. Commercial use, such as delivering this template to a paying client, requires a separate licence: open an issue on this repository to ask. Photos and fonts keep their own licences (see above).

## Security

Found a vulnerability? Please report it privately from the repository’s **Security** tab (“Report a vulnerability”) rather than in a public issue. See [SECURITY.md](SECURITY.md).

## More templates

Part of **Storefronts in motion**, a series of four scroll-animated website templates:

- **[Maison Billot](https://github.com/hoshuko/maison-billot/blob/main/README.md)**: A scroll-animated website for an artisan butcher: beef explained cut by cut.
- **[Tafat](https://github.com/hoshuko/tafat/blob/main/README.md)**: A website for a women-run home cleaning team on the Kabylian coast: a squeegee wipes the window clean as you scroll.
- **[Tiziri](https://github.com/hoshuko/tiziri/blob/main/README.md)**: A clothing boutique’s wardrobe online: every piece, photographed in the shop, is worn by a wooden mannequin that comes to life.

Portfolio: <https://hoshuko.github.io/en.html> · YouTube: <https://www.youtube.com/@Hosh-uko>
