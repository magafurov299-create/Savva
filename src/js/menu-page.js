import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/sections.css";
import "../styles/menu.css";
import { getLang, setLang, applyLangAttrs, t, business, menu, waLink, itemName, categoryName, priceLabel, imgSrcset } from "./data.js";
import { icon } from "./icons.js";
import { initNav, initReveal, markRevealFresh } from "./nav.js";
import { renderNav, renderFooter } from "./chrome.js";

function renderMenuHero(lang) {
  const s = t(lang);
  document.querySelector("[data-menu-title]").textContent = s.menuPage.title;
  document.querySelector("[data-menu-subtitle]").textContent = s.menuPage.subtitle;
  document.querySelector("[data-menu-rating]").textContent = `${business.rating} · ${business.reviewCount.toLocaleString()} ${lang === "ar" ? "تقييم" : "reviews"}`;
  document.querySelector("[data-menu-hours]").textContent = lang === "ar" ? business.hours_ar : business.hours_en;
}

function renderFilters(lang) {
  const s = t(lang);
  const track = document.querySelector("[data-filter-track]");
  track.innerHTML =
    `<button class="filter-pill is-active" data-filter="all">${s.menuPage.all}</button>` +
    menu.map((cat) => `<button class="filter-pill" data-filter="${cat.id}">${categoryName(cat, lang)}</button>`).join("");
}

function itemCard(item, lang) {
  const s = t(lang);
  const { src, srcset } = imgSrcset(item.slot);
  return `
    <article class="menu-item-card reveal">
      <div class="menu-item-thumb">
        <img src="${src}" srcset="${srcset}" sizes="(max-width:640px) 50vw, (max-width:980px) 33vw, 25vw" alt="${itemName(item, lang)}" loading="lazy">
        ${item.popular ? `<span class="menu-item-badge">${s.menuPage.popular}</span>` : ""}
      </div>
      <div class="menu-item-body">
        <div class="menu-item-name">${itemName(item, lang)}</div>
        <div class="menu-item-row">
          <span class="menu-item-price">${priceLabel(item.price)}</span>
          <a class="menu-item-order" href="${waLink(lang, itemName(item, lang))}" target="_blank" rel="noopener" aria-label="${s.menuPage.orderItem} ${itemName(item, lang)}">${icon.arrow}</a>
        </div>
      </div>
    </article>`;
}

function renderCategories(lang) {
  const root = document.querySelector("[data-menu-categories]");
  root.innerHTML = menu
    .map(
      (cat) => `
      <div class="menu-category" id="${cat.id}">
        <div class="container">
          <div class="section-head"><h2>${categoryName(cat, lang)}</h2></div>
          <div class="menu-item-grid">${cat.items.map((item) => itemCard(item, lang)).join("")}</div>
        </div>
      </div>`
    )
    .join("");
}

function wireFilters(lang) {
  const track = document.querySelector("[data-filter-track]");
  const pills = Array.from(track.querySelectorAll(".filter-pill"));
  const sections = menu.map((c) => document.getElementById(c.id)).filter(Boolean);

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const targetId = pill.dataset.filter;
      if (targetId === "all") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.getElementById(targetId);
      if (target) {
        const offset = target.getBoundingClientRect().top + window.pageYOffset - 84;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          pills.forEach((p) => p.classList.toggle("is-active", p.dataset.filter === entry.target.id));
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }
}

function renderStickyBar(lang) {
  const s = t(lang);
  const bar = document.querySelector("[data-sticky-order]");
  bar.querySelector("a").textContent = s.menuPage.stickyOrder;
  bar.querySelector("a").href = waLink(lang);
}

function render(lang) {
  applyLangAttrs(lang);
  renderNav(lang);
  renderMenuHero(lang);
  renderFilters(lang);
  renderCategories(lang);
  renderStickyBar(lang);
  renderFooter(lang);
  markRevealFresh();
  wireFilters(lang);
  requestAnimationFrame(initReveal);
}

let currentLang = getLang();
render(currentLang);
initNav();

document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    setLang(currentLang);
    render(currentLang);
  });
});
