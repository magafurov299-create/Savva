"""Crop + resize the real SAVVA Instagram photos into responsive WebP sets.

Source: assets/raw/ig_<shortcode>.jpg (downloaded from instagram.com/p/<code>/media/)
Output: public/img/<slug>-<width>.webp  (widths: 480, 960, 1600)

Run: python scripts/optimize-images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "assets" / "raw"
OUT = ROOT / "public" / "img"
OUT.mkdir(parents=True, exist_ok=True)

WIDTHS = [480, 960, 1600]

# slug -> (source shortcode, aspect W/H, optional custom crop box in source px (l,t,r,b))
SLOTS = {
    # Hero / atmosphere
    "hero-interior":    ("DYr0ET1jHjk", 16 / 10, None),
    "hero-portrait":    ("Db31GeksuBw", 4 / 5, None),
    # "A day in SAVVA" pinned story (3:4 panels)
    "story-morning":    ("Dcbp8DSM81h", 3 / 4, None),
    "story-noon":       ("Dc34TRAsAtF", 3 / 4, None),
    "story-afternoon":  ("DceRSuxMQNX", 3 / 4, None),
    "story-night":      ("Dc8_ifwsihu", 3 / 4, None),
    # Wide crops of the same photos for desktop, where the panel is much
    # wider than tall - the 3:4 portrait crop above is for narrow/mobile only.
    "story-morning-wide":   ("Dcbp8DSM81h", 16 / 9, None),
    "story-noon-wide":      ("Dc34TRAsAtF", 16 / 9, None),
    "story-afternoon-wide": ("DceRSuxMQNX", 16 / 9, None),
    "story-night-wide":     ("Dc8_ifwsihu", 16 / 9, None),
    # Bestsellers bento (1:1)
    "best-cappuccino":     ("DcbmHnRs3EE", 1, None),
    "best-cheesecake":     ("Db82ltlMHMa", 1, None),
    "best-cookies":        ("DYNTFLdsHS1", 1, None),
    "best-matcha-berry":   ("DX9ThrBsx5G", 1, None),
    "best-coffee-of-day":  ("Dcbp8DSM81h", 1, None),
    # Menu card photos, keyed by the "slot" field in src/data/menu.json (1:1)
    "coffee-cup-1":       ("Dc1NRBAsmx2", 1, None),
    "coffee-cup-2":       ("Dc1OkdyMeMj", 1, None),
    "coffee-cup-3":       ("DcblgZ0MbzR", 1, None),
    "cappuccino":         ("DcbmHnRs3EE", 1, None),
    "matcha-1":           ("DYHrd3JDEXG", 1, None),
    "pourover":           ("Dcbp8DSM81h", 1, None),
    "iced-trio":          ("Dc34TRAsAtF", 1, None),
    "matcha-berry":       ("DX9ThrBsx5G", 1, None),
    "cookies":            ("DYNTFLdsHS1", 1, None),
    "cheesecake":         ("Db82ltlMHMa", 1, None),
    "sandwich":           ("Dc6pEniMBhh", 1, None),
    "dessert-tarts":      ("DYuWmqbDIRg", 1, None),
    "dessert-mango-1":    ("Db_kfNrs3Xg", 1, None),
    "dessert-mango-2":    ("DacDpiGsP7X", 1, None),
    "dessert-choc-bars":  ("Dbq1RIDMcbS", 1, None),
    "dessert-choc-tray":  ("Db1MA7CMRSX", 1, None),
    # Instagram strip (4:5)
    "ig-1": ("DaVByiDMyX4", 4 / 5, None),
    "ig-2": ("DaLmsizMIjK", 4 / 5, None),
    "ig-3": ("DZNQtJzjN7y", 4 / 5, None),
    "ig-4": ("Dc37CqYsmCr", 4 / 5, None),
    "ig-5": ("DdHV3QCsEbd", 4 / 5, None),
    "ig-6": ("Dc_kJc2MzdV", 4 / 5, None),
}


def center_crop_to_aspect(im: Image.Image, aspect: float) -> Image.Image:
    w, h = im.size
    target_w = h * aspect
    if target_w <= w:
        new_w = target_w
        new_h = h
    else:
        new_w = w
        new_h = w / aspect
    left = (w - new_w) / 2
    top = (h - new_h) / 2
    return im.crop((left, top, left + new_w, top + new_h))


def process(slug: str, code: str, aspect: float, box):
    src = RAW / f"ig_{code}.jpg"
    if not src.exists():
        print(f"MISSING source for {slug}: {src.name}")
        return
    im = Image.open(src).convert("RGB")
    if box:
        im = im.crop(box)
    im = center_crop_to_aspect(im, aspect)
    for w in WIDTHS:
        h = round(w / aspect)
        resized = im.resize((w, h), Image.LANCZOS)
        out_path = OUT / f"{slug}-{w}.webp"
        resized.save(out_path, "WEBP", quality=82, method=6)
    print(f"{slug:22s} <- {code}  {im.size[0]}x{im.size[1]} -> {len(WIDTHS)} sizes")


if __name__ == "__main__":
    for slug, (code, aspect, box) in SLOTS.items():
        process(slug, code, aspect, box)
    print(f"\nDone. {len(SLOTS)} slugs -> {OUT}")
