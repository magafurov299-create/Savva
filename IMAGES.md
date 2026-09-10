# Image index

All photography is real SAVVA content, pulled from [@savva_cafe](https://www.instagram.com/savva_cafe) on Instagram and processed by `scripts/optimize-images.py` into `public/img/`. This file embeds every photo actually shipped on the site, grouped by where it appears.

- **Source**: `assets/raw/ig_<code>.jpg` — one original frame per Instagram post.
- **Output**: `public/img/<slug>-{480,960,1600}.webp` — cropped/resized per slot. Regenerate with `python scripts/optimize-images.py` after editing the `SLOTS` dict there.
- **Slug** is what the site code references (`src/js/data.js#imgSrcset`, `src/data/menu.json#slot`).

## Hero

<table>
<tr>
<td align="center"><img src="public/img/hero-interior-480.webp" width="260"><br><code>hero-interior</code><br>Hero background</td>
<td align="center"><img src="public/img/hero-portrait-480.webp" width="180"><br><code>hero-portrait</code><br>Hero badge overlay</td>
</tr>
</table>

## "A day in SAVVA" story panels

Each panel has a portrait crop for mobile and a wide crop for desktop (`<picture><source media>` swap at 761px).

<table>
<tr>
<td align="center"><img src="public/img/story-morning-480.webp" width="180"><br><code>story-morning</code></td>
<td align="center"><img src="public/img/story-morning-wide-480.webp" width="260"><br><code>story-morning-wide</code></td>
<td align="center"><b>Morning</b><br>"Pick your beans"</td>
</tr>
<tr>
<td align="center"><img src="public/img/story-noon-480.webp" width="180"><br><code>story-noon</code></td>
<td align="center"><img src="public/img/story-noon-wide-480.webp" width="260"><br><code>story-noon-wide</code></td>
<td align="center"><b>Noon</b><br>"Cool off"</td>
</tr>
<tr>
<td align="center"><img src="public/img/story-afternoon-480.webp" width="180"><br><code>story-afternoon</code></td>
<td align="center"><img src="public/img/story-afternoon-wide-480.webp" width="260"><br><code>story-afternoon-wide</code></td>
<td align="center"><b>Afternoon</b><br>"Something sweet"</td>
</tr>
<tr>
<td align="center"><img src="public/img/story-night-480.webp" width="180"><br><code>story-night</code></td>
<td align="center"><img src="public/img/story-night-wide-480.webp" width="260"><br><code>story-night-wide</code></td>
<td align="center"><b>Night</b><br>"Drive through, till 2 AM"</td>
</tr>
</table>

## Bestsellers bento / menu item photos

Referenced by `slot` in `src/data/menu.json`. The home-page bestsellers bento reuses the same source photo as the matching menu item (separate `best-*` slug, cropped independently).

<table>
<tr>
<td align="center"><img src="public/img/cappuccino-480.webp" width="180"><br><code>cappuccino</code> / <code>best-cappuccino</code><br>Cappuccino</td>
<td align="center"><img src="public/img/cheesecake-480.webp" width="180"><br><code>cheesecake</code> / <code>best-cheesecake</code><br>Blueberry Cheesecake</td>
<td align="center"><img src="public/img/cookies-480.webp" width="180"><br><code>cookies</code> / <code>best-cookies</code><br>Madini Cookies</td>
</tr>
<tr>
<td align="center"><img src="public/img/matcha-berry-480.webp" width="180"><br><code>matcha-berry</code> / <code>best-matcha-berry</code><br>Matcha Berry</td>
<td align="center"><img src="public/img/pourover-480.webp" width="180"><br><code>pourover</code> / <code>best-coffee-of-day</code><br>Coffee of the Day, Drip Coffee</td>
<td align="center"><img src="public/img/matcha-1-480.webp" width="180"><br><code>matcha-1</code><br>Matcha Latte, Iced Matcha (Latte/Spanish), Savva Matcha</td>
</tr>
<tr>
<td align="center"><img src="public/img/coffee-cup-1-480.webp" width="180"><br><code>coffee-cup-1</code><br>Espresso, Macchiato, Spanish Latte, English Tea</td>
<td align="center"><img src="public/img/coffee-cup-2-480.webp" width="180"><br><code>coffee-cup-2</code><br>Americano, Flat White, White Mocha, Turkish Coffee</td>
<td align="center"><img src="public/img/coffee-cup-3-480.webp" width="180"><br><code>coffee-cup-3</code><br>Cortado, Latte, Hot Chocolate, Turkish Coffee with Milk</td>
</tr>
<tr>
<td align="center"><img src="public/img/iced-trio-480.webp" width="180"><br><code>iced-trio</code><br>All other iced drinks (Americano, Alfredo, Latte, Spanish Latte, Tea/Hibiscus Savva, Hibiscus Slush, Shaken, White Mocha, Chocolate, Savva Melon)</td>
<td align="center"><img src="public/img/sandwich-480.webp" width="180"><br><code>sandwich</code><br>Turkey Sandwich, Halloumi Sandwich</td>
<td align="center"><img src="public/img/dessert-tarts-480.webp" width="180"><br><code>dessert-tarts</code><br>Cinnamon Danish</td>
</tr>
<tr>
<td align="center"><img src="public/img/dessert-mango-1-480.webp" width="180"><br><code>dessert-mango-1</code><br>Marble Cake</td>
<td align="center"><img src="public/img/dessert-mango-2-480.webp" width="180"><br><code>dessert-mango-2</code><br>Pecan Cake</td>
<td align="center"><img src="public/img/dessert-choc-bars-480.webp" width="180"><br><code>dessert-choc-bars</code><br>Crunchy Chocolate</td>
</tr>
<tr>
<td align="center"><img src="public/img/dessert-choc-tray-480.webp" width="180"><br><code>dessert-choc-tray</code><br>Chocolate Cake</td>
<td></td>
<td></td>
</tr>
</table>

## Instagram strip (home page footer band)

<table>
<tr>
<td align="center"><img src="public/img/ig-1-480.webp" width="150"><br><code>ig-1</code></td>
<td align="center"><img src="public/img/ig-2-480.webp" width="150"><br><code>ig-2</code></td>
<td align="center"><img src="public/img/ig-3-480.webp" width="150"><br><code>ig-3</code></td>
<td align="center"><img src="public/img/ig-4-480.webp" width="150"><br><code>ig-4</code></td>
<td align="center"><img src="public/img/ig-5-480.webp" width="150"><br><code>ig-5</code></td>
<td align="center"><img src="public/img/ig-6-480.webp" width="150"><br><code>ig-6</code></td>
</tr>
</table>

## Source → slug lookup

| Slug | Instagram post |
|---|---|
| `hero-interior` | [DYr0ET1jHjk](https://www.instagram.com/p/DYr0ET1jHjk/) |
| `hero-portrait` | [Db31GeksuBw](https://www.instagram.com/p/Db31GeksuBw/) |
| `story-morning` / `-wide` | [Dcbp8DSM81h](https://www.instagram.com/p/Dcbp8DSM81h/) |
| `story-noon` / `-wide` | [Dc34TRAsAtF](https://www.instagram.com/p/Dc34TRAsAtF/) |
| `story-afternoon` / `-wide` | [DceRSuxMQNX](https://www.instagram.com/p/DceRSuxMQNX/) |
| `story-night` / `-wide` | [Dc8_ifwsihu](https://www.instagram.com/p/Dc8_ifwsihu/) |
| `cappuccino` / `best-cappuccino` | [DcbmHnRs3EE](https://www.instagram.com/p/DcbmHnRs3EE/) |
| `cheesecake` / `best-cheesecake` | [Db82ltlMHMa](https://www.instagram.com/p/Db82ltlMHMa/) |
| `cookies` / `best-cookies` | [DYNTFLdsHS1](https://www.instagram.com/p/DYNTFLdsHS1/) |
| `matcha-berry` / `best-matcha-berry` | [DX9ThrBsx5G](https://www.instagram.com/p/DX9ThrBsx5G/) |
| `pourover` / `best-coffee-of-day` | [Dcbp8DSM81h](https://www.instagram.com/p/Dcbp8DSM81h/) |
| `coffee-cup-1` | [Dc1NRBAsmx2](https://www.instagram.com/p/Dc1NRBAsmx2/) |
| `coffee-cup-2` | [Dc1OkdyMeMj](https://www.instagram.com/p/Dc1OkdyMeMj/) |
| `coffee-cup-3` | [DcblgZ0MbzR](https://www.instagram.com/p/DcblgZ0MbzR/) |
| `matcha-1` | [DYHrd3JDEXG](https://www.instagram.com/p/DYHrd3JDEXG/) |
| `iced-trio` | [Dc34TRAsAtF](https://www.instagram.com/p/Dc34TRAsAtF/) |
| `sandwich` | [Dc6pEniMBhh](https://www.instagram.com/p/Dc6pEniMBhh/) |
| `dessert-tarts` | [DYuWmqbDIRg](https://www.instagram.com/p/DYuWmqbDIRg/) |
| `dessert-mango-1` | [Db_kfNrs3Xg](https://www.instagram.com/p/Db_kfNrs3Xg/) |
| `dessert-mango-2` | [DacDpiGsP7X](https://www.instagram.com/p/DacDpiGsP7X/) |
| `dessert-choc-bars` | [Dbq1RIDMcbS](https://www.instagram.com/p/Dbq1RIDMcbS/) |
| `dessert-choc-tray` | [Db1MA7CMRSX](https://www.instagram.com/p/Db1MA7CMRSX/) |
| `ig-1` | [DaVByiDMyX4](https://www.instagram.com/p/DaVByiDMyX4/) |
| `ig-2` | [DaLmsizMIjK](https://www.instagram.com/p/DaLmsizMIjK/) |
| `ig-3` | [DZNQtJzjN7y](https://www.instagram.com/p/DZNQtJzjN7y/) |
| `ig-4` | [Dc37CqYsmCr](https://www.instagram.com/p/Dc37CqYsmCr/) |
| `ig-5` | [DdHV3QCsEbd](https://www.instagram.com/p/DdHV3QCsEbd/) |
| `ig-6` | [Dc_kJc2MzdV](https://www.instagram.com/p/Dc_kJc2MzdV/) |

## Downloaded but not used (spares in `assets/raw/`)

Not referenced by any slug — `optimize-images.py` skips them. Kept in case a slot needs re-cropping later.

<table>
<tr>
<td align="center"><img src="assets/raw/ig_DYhqwPaMihM.jpg" width="150"><br>Annotated infographic, not a clean photo</td>
<td align="center"><img src="assets/raw/ig_DakukdKMSVV.jpg" width="150"><br>Customer's face is the subject</td>
<td align="center"><img src="assets/raw/ig_DZVPielsAt5.jpg" width="150"><br>Customer's face is the subject</td>
<td align="center"><img src="assets/raw/ig_DYkKOqCjBzX.jpg" width="150"><br>Matcha berry alt angle</td>
</tr>
<tr>
<td align="center"><img src="assets/raw/ig_DYmxXXWjNQz.jpg" width="150"><br>Matcha pour close-up, unused</td>
<td align="center"><img src="assets/raw/ig_DYpSteIjF-D.jpg" width="150"><br>Lifestyle shot, no product</td>
<td align="center"><img src="assets/raw/ig_DZIUxNcMb-N.jpg" width="150"><br>Off-brand (swimming pool)</td>
<td></td>
</tr>
</table>

## Adding or swapping a photo

1. Download the new source: `curl -sL -A "Mozilla/5.0" -o assets/raw/ig_<code>.jpg "https://www.instagram.com/p/<code>/media/?size=l"`.
2. Add or edit its entry in the `SLOTS` dict in `scripts/optimize-images.py` (slug, shortcode, aspect ratio, optional manual crop box).
3. Run `python scripts/optimize-images.py`.
4. Update the thumbnail and table rows above so the index stays accurate.
