// Smooth-scrolls same-page anchor links via JS instead of CSS
// `scroll-behavior: smooth`, which fights GSAP ScrollTrigger's scroll math.
export function initAnchorScroll() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });
}

export function initNav() {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const mobileClose = document.querySelector("[data-mobile-close]");

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  navToggle?.addEventListener("click", openMenu);
  mobileClose?.addEventListener("click", closeMenu);
  mobileMenu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  const header = document.querySelector("[data-header]");
  const sentinel = document.querySelector("[data-scroll-sentinel]");
  if (header && sentinel && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(sentinel);
  }
}

export function initReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));
}

export function markRevealFresh(root = document) {
  root.querySelectorAll(".reveal").forEach((el) => el.classList.remove("is-visible"));
}
