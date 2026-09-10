import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let ctx = null;

// Sticky-stack: each panel pins at the viewport top while the next one
// slides over it, so scrolling through the section reads as one story
// (morning -> noon -> afternoon -> night) instead of four static blocks.
export function initStory() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stack = document.querySelector("[data-story-stack]");
  if (!stack || reduceMotion || window.innerWidth < 760) return;

  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray(".story-panel");
    panels.forEach((panel, i) => {
      if (i === panels.length - 1) return;
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: panels[panels.length - 1],
        end: "top top",
        pin: true,
        pinSpacing: false,
      });
      gsap.to(panel, {
        scale: 0.94,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: panels[i + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    });
  }, stack);
}

export function destroyStory() {
  ctx?.revert();
  ctx = null;
}
