import Alpine from "alpinejs";
import Swup from "swup";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
window.Alpine = Alpine;

const isTouch = window.matchMedia("(pointer: coarse)").matches;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Smooth scroll (Lenis) piloté par GSAP ticker ---------- */
let lenis;
function initSmoothScroll() {
  if (prefersReducedMotion) return;
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.on("scroll", ScrollTrigger.update);
}

/* ---------- Préloader ---------- */
function runPreloader() {
  return new Promise((resolve) => {
    const loader = document.querySelector("[data-preloader]");
    if (!loader || prefersReducedMotion) {
      loader?.remove();
      resolve();
      return;
    }
    const bar = loader.querySelector("[data-preloader-bar]");
    const tl = gsap.timeline({
      onComplete: () => {
        loader.remove();
        resolve();
      }
    });
    tl.to(bar, { scaleX: 1, duration: 1.1, ease: "power2.inOut" })
      .to(loader, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "+=0.1");
  });
}

/* ---------- Split text en mots (sans plugin premium) ---------- */
function splitWords(el) {
  if (el.dataset.split === "done") return el.querySelectorAll(".word-inner");
  const text = el.textContent.trim();
  el.textContent = "";
  const words = text.split(/\s+/);
  words.forEach((word, i) => {
    const wrap = document.createElement("span");
    wrap.className = "word-wrap";
    const inner = document.createElement("span");
    inner.className = "word-inner";
    inner.textContent = word;
    wrap.appendChild(inner);
    el.appendChild(wrap);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
  el.dataset.split = "done";
  return el.querySelectorAll(".word-inner");
}

function animateHeroText(container = document, delayBase = 0.15) {
  container.querySelectorAll("[data-split-text]").forEach((el, i) => {
    const words = splitWords(el);
    gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.045,
        delay: delayBase + i * 0.08
      }
    );
  });
}

/* ---------- Hero: image reveal (mask) ---------- */
function revealHeroMedia(container = document, delay = 0.2) {
  container.querySelectorAll("[data-media-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.inOut", delay }
    );
  });
}

/* ---------- Révélations au scroll (cascade + scale) ---------- */
function revealSections(container = document) {
  const groups = new Map();
  container.querySelectorAll(".reveal").forEach((el) => {
    const key = el.dataset.revealGroup || el;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(el);
  });

  groups.forEach((els) => {
    gsap.fromTo(
      els,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: els[0],
          start: "top 85%",
          once: true
        }
      }
    );
  });
}

/* ---------- Reveal image en masque au scroll (portfolio, visuels) ---------- */
function revealImagesOnScroll(container = document) {
  container.querySelectorAll("[data-img-reveal]").forEach((el) => {
    const img = el.querySelector("img");
    gsap.fromTo(
      el,
      { clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      }
    );
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.25 },
        {
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        }
      );
    }
  });
}

/* ---------- Parallax léger sur visuels ---------- */
function parallaxVisuals(container = document) {
  if (isTouch || prefersReducedMotion) return;
  container.querySelectorAll("[data-parallax]").forEach((el) => {
    const strength = Number(el.dataset.parallax) || 40;
    gsap.fromTo(
      el,
      { y: -strength },
      {
        y: strength,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  });
}

/* ---------- Orbes flottantes (fond sombre) ---------- */
function floatOrbs(container = document) {
  if (prefersReducedMotion) return;
  container.querySelectorAll("[data-float]").forEach((el) => {
    const distance = Number(el.dataset.float) || 20;
    gsap.to(el, {
      y: distance,
      x: distance * 0.4,
      duration: 6 + Math.random() * 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  });
}

/* ---------- Compteurs animés ---------- */
function animateCounters(container = document) {
  container.querySelectorAll("[data-counter]").forEach((el) => {
    const target = Number(el.dataset.counter);
    const counterState = { value: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(counterState, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(counterState.value).toLocaleString("fr-FR");
          }
        });
      }
    });
  });
}

/* ---------- Cartes: hover inclinaison/élévation ---------- */
function tiltCards(container = document) {
  if (isTouch) return;
  container.querySelectorAll("[data-tilt]").forEach((card) => {
    const strength = 10;
    gsap.set(card, { transformPerspective: 800 });
    const rotateX = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power2.out" });
    const rotateY = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power2.out" });
    const lift = gsap.quickTo(card, "translateY", { duration: 0.4, ease: "power2.out" });
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateX(-py * strength);
      rotateY(px * strength);
      lift(-6);
    };
    const onLeave = () => {
      rotateX(0);
      rotateY(0);
      lift(0);
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
  });
}

/* ---------- Boutons magnétiques ---------- */
function magneticButtons(container = document) {
  if (isTouch) return;
  container.querySelectorAll("[data-magnetic]").forEach((btn) => {
    const moveX = gsap.quickTo(btn, "x", { duration: 0.3, ease: "power2.out" });
    const moveY = gsap.quickTo(btn, "y", { duration: 0.3, ease: "power2.out" });
    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      moveX((e.clientX - rect.left - rect.width / 2) * 0.35);
      moveY((e.clientY - rect.top - rect.height / 2) * 0.35);
    };
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    };
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
  });
}

/* ---------- Liens: soulignement animé au survol ---------- */
function animatedUnderlines(container = document) {
  container.querySelectorAll("[data-underline]").forEach((link) => {
    if (link.dataset.underlineInit) return;
    link.dataset.underlineInit = "true";
    link.classList.add("link-underline");
  });
}

/* ---------- Curseur personnalisé (desktop uniquement) ---------- */
function initCustomCursor() {
  if (isTouch || prefersReducedMotion) return;
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  gsap.set(cursor, { xPercent: -50, yPercent: -50 });
  const moveX = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" });
  const moveY = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" });

  window.addEventListener("mousemove", (e) => {
    moveX(e.clientX);
    moveY(e.clientY);
  });

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, [data-tilt]")) {
      cursor.classList.add("is-hover");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, [data-tilt]")) {
      cursor.classList.remove("is-hover");
    }
  });
}

function initPageAnimations(container = document, { hero = false } = {}) {
  animateHeroText(container, hero ? 0.1 : 0);
  revealHeroMedia(container, hero ? 0.05 : 0);
  revealSections(container);
  revealImagesOnScroll(container);
  parallaxVisuals(container);
  floatOrbs(container);
  animateCounters(container);
  tiltCards(container);
  magneticButtons(container);
  animatedUnderlines(container);
  ScrollTrigger.refresh();
}

Alpine.start();
initCustomCursor();
initSmoothScroll();

runPreloader().then(() => {
  initPageAnimations(document, { hero: true });
});

/* ---------- Transitions de page: fade simple ---------- */
const swup = new Swup({
  animateHistoryBrowsing: true
});

swup.hooks.on("visit:start", () => {
  lenis?.stop();
});

swup.hooks.on("content:replace", () => {
  window.scrollTo(0, 0);
  document.querySelector("[data-preloader]")?.remove();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});

swup.hooks.on("page:view", () => {
  initPageAnimations(document, { hero: true });
  lenis?.start();
});
