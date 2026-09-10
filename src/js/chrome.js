import { business, t, waLink } from "./data.js";

export function renderNav(lang) {
  const s = t(lang);
  document.querySelectorAll("[data-nav-menu]").forEach((el) => (el.textContent = s.nav.menu));
  document.querySelectorAll("[data-nav-story]").forEach((el) => (el.textContent = s.nav.story));
  document.querySelectorAll("[data-nav-reviews]").forEach((el) => (el.textContent = s.nav.reviews));
  document.querySelectorAll("[data-nav-visit]").forEach((el) => (el.textContent = s.nav.visit));
  document.querySelectorAll("[data-nav-order]").forEach((el) => {
    el.textContent = s.nav.order;
    el.href = waLink(lang);
  });
  document.querySelectorAll("[data-lang-switch]").forEach((el) => (el.textContent = s.nav.langSwitch));
}

export function renderFooter(lang) {
  const s = t(lang);
  document.querySelector("[data-footer-cta]").textContent = s.footer.cta;
  const order = document.querySelector("[data-footer-order]");
  order.textContent = s.footer.order;
  order.href = waLink(lang);
  document.querySelector("[data-footer-address]").textContent = lang === "ar" ? business.address_ar : business.address_en;
  const phone = document.querySelector("[data-footer-phone]");
  phone.textContent = business.phoneDisplay;
  phone.href = `tel:${business.phone}`;
  document.querySelector("[data-footer-ig]").href = business.instagram;
  document.querySelector("[data-footer-rights]").textContent = `© ${new Date().getFullYear()} SAVVA. ${s.footer.rights}`;
}
