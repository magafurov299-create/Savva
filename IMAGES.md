# Image index

All photography is real SAVVA content pulled from **[@savva_cafe](https://www.instagram.com/savva_cafe)** on Instagram (downloaded 2026-09-10 via `instagram.com/p/<code>/media/`, no login needed).

- **Source**: `assets/raw/ig_<code>.jpg` — the original downloaded frame, one per Instagram post.
- **Output**: `public/img/<slug>-{480,960,1600}.webp` — cropped and resized per usage slot by `scripts/optimize-images.py` (edit the `SLOTS` dict there, then `python scripts/optimize-images.py` to regenerate).
- **Slug** is what the site code actually references (`src/js/data.js#imgSrcset`, `src/data/menu.json#slot`).

Run `python scripts/optimize-images.py` any time a source photo or crop changes — it rebuilds every slug listed below in one pass.

## Home page

| Slug | Instagram post | Used for | Crop |
|---|---|---|---|
| `hero-interior` | [DYr0ET1jHjk](https://www.instagram.com/p/DYr0ET1jHjk/) | Hero background | 16:10 |
| `hero-portrait` | [Db31GeksuBw](https://www.instagram.com/p/Db31GeksuBw/) | Hero badge (matcha berry, overlapping the hero photo) | 4:5 |
| `story-morning` / `story-morning-wide` | [Dcbp8DSM81h](https://www.instagram.com/p/Dcbp8DSM81h/) | "A day in SAVVA" → Morning panel | 3:4 (mobile) / 16:9 (desktop, ≥761px) |
| `story-noon` / `story-noon-wide` | [Dc34TRAsAtF](https://www.instagram.com/p/Dc34TRAsAtF/) | "A day in SAVVA" → Noon panel | 3:4 / 16:9 |
| `story-afternoon` / `story-afternoon-wide` | [DceRSuxMQNX](https://www.instagram.com/p/DceRSuxMQNX/) | "A day in SAVVA" → Afternoon panel | 3:4 / 16:9 |
| `story-night` / `story-night-wide` | [Dc8_ifwsihu](https://www.instagram.com/p/Dc8_ifwsihu/) | "A day in SAVVA" → Night panel (drive-through) | 3:4 / 16:9 |
| `ig-1` | [DaVByiDMyX4](https://www.instagram.com/p/DaVByiDMyX4/) | Instagram strip | 4:5 |
| `ig-2` | [DaLmsizMIjK](https://www.instagram.com/p/DaLmsizMIjK/) | Instagram strip | 4:5 |
| `ig-3` | [DZNQtJzjN7y](https://www.instagram.com/p/DZNQtJzjN7y/) | Instagram strip | 4:5 |
| `ig-4` | [Dc37CqYsmCr](https://www.instagram.com/p/Dc37CqYsmCr/) | Instagram strip | 4:5 |
| `ig-5` | [DdHV3QCsEbd](https://www.instagram.com/p/DdHV3QCsEbd/) | Instagram strip | 4:5 |
| `ig-6` | [Dc_kJc2MzdV](https://www.instagram.com/p/Dc_kJc2MzdV/) | Instagram strip | 4:5 |

## Bestsellers bento (home) + menu item photos

These slugs are referenced by `slot` in `src/data/menu.json`. The bestsellers bento on the home page reuses the same slug as the matching menu item, so each photo only needs cropping once.

| Slug | Instagram post | Menu item(s) using it |
|---|---|---|
| `best-cappuccino` / `cappuccino` | [DcbmHnRs3EE](https://www.instagram.com/p/DcbmHnRs3EE/) | Cappuccino (bestseller) |
| `best-cheesecake` / `cheesecake` | [Db82ltlMHMa](https://www.instagram.com/p/Db82ltlMHMa/) | Blueberry Cheesecake (bestseller) |
| `best-cookies` / `cookies` | [DYNTFLdsHS1](https://www.instagram.com/p/DYNTFLdsHS1/) | Madini Cookies (bestseller) |
| `best-matcha-berry` / `matcha-berry` | [DX9ThrBsx5G](https://www.instagram.com/p/DX9ThrBsx5G/) | Matcha Berry (bestseller) |
| `best-coffee-of-day` / `pourover` | [Dcbp8DSM81h](https://www.instagram.com/p/Dcbp8DSM81h/) | Coffee of the Day, Drip Coffee (bestseller) |
| `coffee-cup-1` | [Dc1NRBAsmx2](https://www.instagram.com/p/Dc1NRBAsmx2/) | Espresso, Macchiato, Spanish Latte, English Tea |
| `coffee-cup-2` | [Dc1OkdyMeMj](https://www.instagram.com/p/Dc1OkdyMeMj/) | Americano, Flat White, White Mocha, Turkish Coffee |
| `coffee-cup-3` | [DcblgZ0MbzR](https://www.instagram.com/p/DcblgZ0MbzR/) | Cortado, Latte, Hot Chocolate, Turkish Coffee with Milk |
| `matcha-1` | [DYHrd3JDEXG](https://www.instagram.com/p/DYHrd3JDEXG/) | Matcha Latte, Iced Matcha Latte, Iced Matcha Spanish Latte, Savva Matcha |
| `iced-trio` | [Dc34TRAsAtF](https://www.instagram.com/p/Dc34TRAsAtF/) | All other iced drinks (Iced Americano, Alfredo, Iced Latte, Iced Spanish Latte, Iced Tea/Hibiscus Savva, Hibiscus Slush, Iced Shaken, Iced White Mocha, Iced Chocolate, Savva Melon) |
| `sandwich` | [Dc6pEniMBhh](https://www.instagram.com/p/Dc6pEniMBhh/) | Turkey Sandwich, Halloumi Sandwich |
| `dessert-tarts` | [DYuWmqbDIRg](https://www.instagram.com/p/DYuWmqbDIRg/) | Cinnamon Danish |
| `dessert-mango-1` | [Db_kfNrs3Xg](https://www.instagram.com/p/Db_kfNrs3Xg/) | Marble Cake |
| `dessert-mango-2` | [DacDpiGsP7X](https://www.instagram.com/p/DacDpiGsP7X/) | Pecan Cake |
| `dessert-choc-bars` | [Dbq1RIDMcbS](https://www.instagram.com/p/Dbq1RIDMcbS/) | Crunchy Chocolate |
| `dessert-choc-tray` | [Db1MA7CMRSX](https://www.instagram.com/p/Db1MA7CMRSX/) | Chocolate Cake |

All 1:1, except where noted above.

## Downloaded but not used (spares in `assets/raw/`)

Kept in case a slot needs re-cropping or swapping later. Not referenced by any slug, so `optimize-images.py` skips them.

| Post | Why it wasn't used |
|---|---|
| [DYhqwPaMihM](https://www.instagram.com/p/DYhqwPaMihM/) | Cheesecake shot is an annotated infographic (ingredient callout labels baked into the image), not a clean product photo |
| [DakukdKMSVV](https://www.instagram.com/p/DakukdKMSVV/) | Customer's face is the main subject |
| [DZVPielsAt5](https://www.instagram.com/p/DZVPielsAt5/) | Customer's face is the main subject |
| [DYkKOqCjBzX](https://www.instagram.com/p/DYkKOqCjBzX/) | Matcha berry alt angle, `DX9ThrBsx5G` used instead |
| [DYmxXXWjNQz](https://www.instagram.com/p/DYmxXXWjNQz/) | Matcha pour close-up, not needed once `matcha-1` was filled |
| [DYpSteIjF-D](https://www.instagram.com/p/DYpSteIjF-D/) | Branded T-shirt lifestyle shot, no product in frame |
| [DZIUxNcMb-N](https://www.instagram.com/p/DZIUxNcMb-N/) | Matcha berry in a swimming pool, off-brand for a menu/product slot |

## Adding or swapping a photo

1. Download the new source: `curl -sL -A "Mozilla/5.0" -o assets/raw/ig_<code>.jpg "https://www.instagram.com/p/<code>/media/?size=l"`.
2. Add or edit its entry in the `SLOTS` dict in `scripts/optimize-images.py` (slug, shortcode, aspect ratio, optional manual crop box).
3. Run `python scripts/optimize-images.py`.
4. Update this file's table so the index stays accurate.
