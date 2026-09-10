import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/sections.css";
import { getLang, setLang, applyLangAttrs, t, business, menu, waLink, itemName, categoryName, priceLabel, imgSrcset } from "./data.js";
import { icon } from "./icons.js";
import { initNav, initReveal, markRevealFresh, initAnchorScroll } from "./nav.js";
import { initStory, destroyStory } from "./story.js";
import { renderNav, renderFooter } from "./chrome.js";

function renderHero(lang) {
  const s = t(lang);
  document.querySelector("[data-hero-eyebrow]").textContent = s.hero.eyebrow;
  document.querySelector("[data-hero-title]").textContent =
    lang === "ar" ? business.tagline_ar : business.tagline_en;
  document.querySelector("[data-hero-subtext]").textContent = s.hero.subtext;
  const order = document.querySelector("[data-hero-order]");
  order.textContent = s.hero.ctaOrder;
  order.href = waLink(lang);
  const dir = document.querySelector("[data-hero-directions]");
  dir.textContent = s.hero.ctaDirections;
  dir.href = business.mapsUrl;
}

function renderProof(lang) {
  const s = t(lang);
  document.querySelector("[data-proof-rating]").innerHTML =
    `<span class="proof-num">${business.rating}</span><span class="proof-label">${business.reviewCount.toLocaleString()} ${s.proof.reviews}</span>`;
  document.querySelector("[data-proof-hours]").innerHTML =
    `${icon.clock}<span class="proof-label">${s.proof.hours}</span>`;
  document.querySelector("[data-proof-drive]").innerHTML =
    `${icon.car}<span class="proof-label">${s.proof.driveThrough}</span>`;
  document.querySelector("[data-proof-delivery]").innerHTML =
    `${icon.truck}<span class="proof-label">${s.proof.delivery}</span>`;
}

const STORY_SLUGS = ["story-morning", "story-noon", "story-afternoon", "story-night"];

function renderStory(lang) {
  const s = t(lang);
  document.querySelector("[data-story-title]").textContent = s.story.title;
  const stack = document.querySelector("[data-story-stack]");
  stack.innerHTML = s.story.panels
    .map((panel, i) => {
      const { src, srcset } = imgSrcset(STORY_SLUGS[i]);
      const wide = imgSrcset(`${STORY_SLUGS[i]}-wide`);
      return `
        <div class="story-panel">
          <div class="story-panel-media">
            <picture>
              <source media="(min-width: 761px)" srcset="${wide.srcset}" sizes="100vw">
              <img src="${src}" srcset="${srcset}" sizes="100vw" alt="${panel.title}" loading="lazy">
            </picture>
          </div>
          <div class="story-panel-copy">
            <div class="container">
              <span class="story-label">${panel.label}</span>
              <h3>${panel.title}</h3>
              <p>${panel.text}</p>
            </div>
          </div>
        </div>`;
    })
    .join("");
}

function allItems() {
  return menu.flatMap((cat) => cat.items.map((item) => ({ ...item, categoryId: cat.id })));
}

function renderBestsellers(lang) {
  const s = t(lang);
  document.querySelector("[data-best-title]").textContent = s.bestsellers.title;
  const items = allItems().filter((i) => i.popular);
  const grid = document.querySelector("[data-best-grid]");
  grid.innerHTML = items
    .map((item) => {
      const { src, srcset } = imgSrcset(item.slot);
      return `
        <a class="bento-card" href="${waLink(lang, itemName(item, lang))}" aria-label="${s.bestsellers.order}: ${itemName(item, lang)}">
          <picture><img src="${src}" srcset="${srcset}" sizes="(max-width:900px) 50vw, 25vw" alt="${itemName(item, lang)}" loading="lazy"></picture>
          <div class="bento-copy">
            <div>
              <h3>${itemName(item, lang)}</h3>
              <div class="bento-price">${priceLabel(item.price)}</div>
            </div>
            <span class="bento-order">${icon.arrow}</span>
          </div>
        </a>`;
    })
    .join("");
}

function renderMenuTeaser(lang) {
  const s = t(lang);
  document.querySelector("[data-teaser-title]").textContent = s.menuTeaser.title;
  const viewAll = document.querySelector("[data-teaser-viewall]");
  viewAll.textContent = s.menuTeaser.viewAll;

  const tabs = document.querySelector("[data-teaser-tabs]");
  const track = document.querySelector("[data-teaser-track]");

  function renderCategory(cat) {
    track.innerHTML = cat.items
      .map((item) => {
        const { src, srcset } = imgSrcset(item.slot);
        return `
          <a class="teaser-card" href="menu.html#${cat.id}">
            <div class="teaser-thumb"><img src="${src}" srcset="${srcset}" sizes="200px" alt="${itemName(item, lang)}" loading="lazy"></div>
            <div class="teaser-name">${itemName(item, lang)}</div>
            <div class="teaser-price">${priceLabel(item.price)}</div>
          </a>`;
      })
      .join("");
  }

  tabs.innerHTML = menu
    .map((cat, i) => `<button class="teaser-pill${i === 0 ? " is-active" : ""}" data-cat="${cat.id}">${categoryName(cat, lang)}</button>`)
    .join("");
  renderCategory(menu[0]);
  tabs.querySelectorAll(".teaser-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      tabs.querySelectorAll(".teaser-pill").forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      renderCategory(menu.find((c) => c.id === pill.dataset.cat));
    });
  });
}

function renderReviews(lang) {
  const s = t(lang);
  document.querySelector("[data-reviews-title]").textContent = s.reviews.title;
  document.querySelector("[data-reviews-score]").textContent = business.rating;
  document.querySelector("[data-reviews-stars]").innerHTML = icon.star.repeat(5);
  document.querySelector("[data-reviews-count]").textContent = `${business.reviewCount.toLocaleString()} ${lang === "ar" ? "تقييم على جوجل" : "Google reviews"}`;
  const readMore = document.querySelector("[data-reviews-readmore]");
  readMore.textContent = s.reviews.readMore;
  readMore.href = business.mapsReviewsUrl;

  const list = document.querySelector("[data-reviews-list]");
  list.innerHTML = business.reviews
    .map((r) => {
      const role = lang === "ar" ? r.role_ar : r.role_en;
      const quote = lang === "ar" ? r.quote_ar : r.quote_en;
      return `
        <div class="review-card">
          <p class="review-quote">"${quote}"</p>
          <div class="review-attrib">${r.name}${role ? ` · ${role}` : ""}</div>
        </div>`;
    })
    .join("");
}

function renderVisit(lang) {
  const s = t(lang);
  document.querySelector("[data-visit-title]").textContent = s.visit.title;
  document.querySelector("[data-visit-address-label]").textContent = s.visit.addressLabel;
  document.querySelector("[data-visit-address-value]").textContent = lang === "ar" ? business.address_ar : business.address_en;
  document.querySelector("[data-visit-hours-label]").textContent = s.visit.hoursLabel;
  document.querySelector("[data-visit-hours-value]").textContent = lang === "ar" ? business.hours_ar : business.hours_en;
  document.querySelector("[data-visit-phone-label]").textContent = s.visit.phoneLabel;
  const phoneVal = document.querySelector("[data-visit-phone-value]");
  phoneVal.textContent = business.phoneDisplay;
  phoneVal.href = `tel:${business.phone}`;
  document.querySelector("[data-visit-note]").textContent = s.visit.note;

  const dir = document.querySelector("[data-visit-directions]");
  dir.textContent = s.visit.directions;
  dir.href = business.mapsUrl;
  const call = document.querySelector("[data-visit-call]");
  call.textContent = s.visit.call;
  call.href = `tel:${business.phone}`;
  const wa = document.querySelector("[data-visit-whatsapp]");
  wa.textContent = s.visit.whatsapp;
  wa.href = waLink(lang);

  document.querySelectorAll("[data-visit-icon]").forEach((el) => {
    el.innerHTML = icon[el.dataset.visitIcon];
  });
}

function renderInstagram(lang) {
  const s = t(lang);
  document.querySelector("[data-ig-title]").textContent = s.instagram.title;
  const foot = document.querySelector("[data-ig-follow]");
  foot.textContent = s.instagram.follow;
  foot.href = business.instagram;
  const grid = document.querySelector("[data-ig-grid]");
  const slugs = ["ig-1", "ig-2", "ig-3", "ig-4", "ig-5", "ig-6"];
  grid.innerHTML = slugs
    .map((slug) => {
      const { src, srcset } = imgSrcset(slug);
      return `
        <a class="ig-card" href="${business.instagram}" target="_blank" rel="noopener">
          <img src="${src}" srcset="${srcset}" sizes="(max-width:900px) 33vw, 16vw" alt="SAVVA on Instagram" loading="lazy">
          ${icon.play}
        </a>`;
    })
    .join("");
}

const VIDEO_CLIPS = ["video/clip-1.mp4", "video/clip-2.mp4", "video/clip-3.mp4", "video/clip-4.mp4"];

function renderVideos() {
  const grid = document.querySelector("[data-video-grid]");
  if (!grid) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  grid.innerHTML = VIDEO_CLIPS.map(
    (src) => `
      <div class="video-card">
        <video src="${src}" muted loop playsinline preload="metadata" ${reduceMotion ? "controls" : ""}></video>
      </div>`
  ).join("");

  if (reduceMotion || !("IntersectionObserver" in window)) return;

  // Only play a clip while it's actually on screen, so four autoplaying
  // videos don't all compete for bandwidth/CPU at once.
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    },
    { threshold: 0.5 }
  );
  grid.querySelectorAll("video").forEach((v) => io.observe(v));
}

function render(lang) {
  applyLangAttrs(lang);
  renderNav(lang);
  renderHero(lang);
  renderProof(lang);
  renderStory(lang);
  renderBestsellers(lang);
  renderMenuTeaser(lang);
  renderReviews(lang);
  renderVisit(lang);
  renderInstagram(lang);
  renderVideos();
  renderFooter(lang);
  markRevealFresh();
  destroyStory();
  requestAnimationFrame(() => {
    initReveal();
    initStory();
  });
}

let currentLang = getLang();
render(currentLang);
initNav();
initAnchorScroll();

document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    setLang(currentLang);
    render(currentLang);
  });
});
