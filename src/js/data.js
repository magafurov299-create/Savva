import i18n from "../data/i18n.json";
import business from "../data/business.json";
import menu from "../data/menu.json";

export { i18n, business, menu };

const LANG_KEY = "savva-lang";

export function getLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") return saved;
  } catch (e) {
    /* storage unavailable, fall back to default */
  }
  return "en";
}

export function setLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* ignore */
  }
}

export function applyLangAttrs(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = i18n[lang].dir;
}

export function t(lang) {
  return i18n[lang];
}

export function waLink(lang, itemName) {
  const base = `https://wa.me/${business.whatsapp}`;
  const greeting =
    lang === "ar"
      ? `مرحبًا سافا، أرغب في طلب${itemName ? `: ${itemName}` : ""}`
      : `Hi SAVVA, I'd like to order${itemName ? `: ${itemName}` : ""}`;
  return `${base}?text=${encodeURIComponent(greeting)}`;
}

export function itemName(item, lang) {
  return lang === "ar" ? item.name_ar : item.name_en;
}

export function categoryName(cat, lang) {
  return lang === "ar" ? cat.name_ar : cat.name_en;
}

export function priceLabel(price) {
  return typeof price === "string" ? `${price} SAR` : `${price} SAR`;
}

export function imgSrcset(slug) {
  // Relative (no leading slash) so it resolves correctly regardless of
  // where the built site is hosted, including a subpath or file://.
  return {
    src: `img/${slug}-960.webp`,
    srcset: `img/${slug}-480.webp 480w, img/${slug}-960.webp 960w, img/${slug}-1600.webp 1600w`,
  };
}
