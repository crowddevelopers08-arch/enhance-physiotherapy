"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Content elements that get a reveal animation. Descendants of an already-picked element are skipped,
// so a card animates as one piece instead of each of its children separately.
const SELECTOR = "h1, h2, h3, p, li, a, button, img, svg, label, span.uppercase";

type Direction = "left" | "right" | "up" | "zoom";

function pickDirection(el: Element): Direction {
  if (el.tagName === "IMG") return "zoom";
  const rect = el.getBoundingClientRect();
  const vw = window.innerWidth;
  const center = rect.left + rect.width / 2;
  // Wide or centred elements rise up; the rest slide in from the side they sit on
  if (rect.width > vw * 0.6 || Math.abs(center - vw / 2) < vw * 0.12) return "up";
  return center < vw / 2 ? "left" : "right";
}

function isSkippable(el: Element) {
  // data-no-reveal: sections with their own entrance animation (the hero)
  if (el.closest('[aria-hidden="true"], [role="dialog"], [data-no-reveal]')) return true;
  if (el.matches('[class*="animate-"]')) return true;
  // Decorative absolutely-positioned SVG backgrounds (e.g. the hero's white tab shape)
  if (el.tagName === "svg" && getComputedStyle(el).position === "absolute") return true;
  const style = getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden") return true;
  const rect = el.getBoundingClientRect();
  return rect.width === 0 || rect.height === 0;
}

/*
 * Scroll-triggered entrance animations for every page. Mounted once in the root layout.
 * Uses the CSS `transform` property, which Tailwind v4's translate/rotate/scale utilities don't touch,
 * so existing positioning and hover effects keep working.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const picked: Element[] = [];
    document.querySelectorAll(`main ${SELECTOR}, footer ${SELECTOR}`).forEach((el) => {
      if (picked.some((p) => p.contains(el)) || isSkippable(el)) return;
      picked.push(el);
    });

    const finish = (el: HTMLElement) => {
      el.removeAttribute("data-reveal");
      el.classList.remove("is-revealed");
      el.style.removeProperty("--reveal-delay");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        visible.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.style.setProperty("--reveal-delay", `${Math.min(i * 90, 540)}ms`);
          el.classList.add("is-revealed");
          // Hand transitions back to the element's own classes once the entrance is done
          window.setTimeout(() => finish(el), 900 + Math.min(i * 90, 540));
        });
      },
      // No bottom inset: items at the very end of the page (footer bottom bar) must still trigger
      { threshold: 0.1 }
    );

    picked.forEach((el) => {
      el.setAttribute("data-reveal", pickDirection(el));
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      picked.forEach((el) => finish(el as HTMLElement));
    };
  }, [pathname]);

  return null;
}
