"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Links scroll smoothly to this landing page's own sections and stop at the top of each one
const navItems = [
  { label: "Home", href: "#" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Recovery", href: "#rehabilitation-steps" },
  { label: "Treatments", href: "#recovery-timeline" },
  { label: "FAQ", href: "#faq" },
];

/* Black PNG icons tinted with the brand green via CSS mask */
function PngIcon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-[#6b8440] ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/* Key USPs / patient benefits */
const usps = [
  { label: "Personalised Rehabilitation Plans", icon: "/ps-icons-1.png" },
  { label: "Guided Strength & Mobility Training", icon: "/ps-icons-2.png" },
  { label: "Home Visit Options", icon: "/ps-icons-3.png" },
];

const avatars = ["/about/therapist-avatar.jpg", "/conditions/womens-health.jpg", "/conditions/general-physiotherapy.jpg", "/about/posture-check.jpg"];

function ArrowBadge({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full ${dark ? "bg-[#2b3320] text-white" : "bg-white text-[#2b3320]"} ${className}`}>
      <svg viewBox="0 0 24 24" className="h-[52%] w-[52%]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m9 6 6 6-6 6" />
      </svg>
    </span>
  );
}

/* Outlined letters, like the reference headline */
const outline = "text-transparent [-webkit-text-stroke:1.6px_#2b3320]";

export default function PostSurgeryHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Left / right / top / bottom entrance animations: everything on the first screen plays at page load;
  // anything further down (the phone layout stacks it below the fold) waits and plays when it scrolls into view.
  useEffect(() => {
    const root = sectionRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const below = Array.from(root.querySelectorAll<HTMLElement>('[class*="animate-hero-"]')).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.92
    );
    below.forEach((el) => {
      el.style.animation = "none";
      el.style.opacity = "0";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.style.animation = "";
          el.style.opacity = "";
          el.style.animationDelay = "80ms";
        });
      },
      { threshold: 0.15 }
    );
    below.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} data-no-reveal className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#f3f8e6] via-[#eef6d4] to-[#e4efcf] font-[family-name:var(--primary-font)] text-[#1f2616] lg:h-[min(100svh,50vw)] lg:min-h-[600px]">
      {/* ===== dark right panel (desktop background) ===== */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 hidden w-[48.2%] bg-gradient-to-b from-[#46592f] to-[#2b3320] lg:block">
        <span className="absolute -top-[14%] left-[1%] aspect-square w-[46%] rounded-full bg-white/[0.07]" />
        {/* checker squares */}
        <div className="absolute bottom-0 left-[31%] grid w-[21%] grid-cols-3">
          {[0.1, 0.18, 0, 0.18, 0.1, 0.18, 0.1, 0, 0.1].map((o, i) => (
            <span key={i} className="aspect-square" style={{ background: `rgba(255,255,255,${o})` }} />
          ))}
        </div>
      </div>

      {/* ===== header ===== */}
      <header className="relative z-30 flex items-center justify-between bg-white px-5 py-4 lg:bg-transparent lg:absolute lg:inset-x-0 lg:top-0 lg:justify-start lg:px-0 lg:py-0 lg:pl-[3.3%] lg:pr-[2%] lg:pt-[1.0%]">
        {/* logo */}
        <a href="#" className="flex shrink-0 animate-hero-left items-center gap-[8px]" aria-label="Enhance Physiotherapy & Wellness – Home">
          <Image src="/enhance-emblem.png" alt="" width={766} height={608} priority className="h-[40px] w-auto lg:h-[3.1vw]" />
          <Image
            src="/enhance-wordmark.png"
            alt="Enhance – Be your best self"
            width={650}
            height={176}
            priority
            className="h-[24px] w-auto [filter:brightness(0.62)_saturate(1.5)] lg:h-[1.9vw]"
          />
        </a>

        {/* nav pill */}
        <nav className="hidden animate-hero-down items-center justify-between rounded-full bg-white px-[1.6%] [animation-delay:150ms] lg:ml-[4%] lg:flex lg:h-[3.2vw] lg:w-[33.5%]">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center whitespace-nowrap text-[0.85vw] font-semibold text-[#1f2616] transition-colors duration-200 hover:text-[#6b8440]">
              {item.label}
            </a>
          ))}
        </nav>

        {/* right controls */}
        <div className="hidden animate-hero-right items-center text-white [animation-delay:250ms] lg:ml-auto lg:flex lg:gap-[2vw]">
          <a href="tel:+917204441668" className="flex items-center gap-[0.7vw] whitespace-nowrap text-[0.95vw] font-semibold transition-colors duration-200 hover:text-[#c3d957]" aria-label="Call +91 72044 41668">
            <span className="flex h-[2.6vw] w-[2.6vw] items-center justify-center rounded-full bg-white/15">
              <svg viewBox="0 0 24 24" className="h-[1.3vw] w-[1.3vw]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8.3 3.5 9.9 7.3a1.2 1.2 0 0 1-.3 1.4L8 10.1a11 11 0 0 0 5.9 5.9l1.4-1.6a1.2 1.2 0 0 1 1.4-.3l3.8 1.6a1.2 1.2 0 0 1 .7 1.3l-.4 2.4a1.9 1.9 0 0 1-1.9 1.6C10.4 21 3 13.6 3 5a1.9 1.9 0 0 1 1.6-1.9l2.4-.4a1.2 1.2 0 0 1 1.3.8Z" />
                <path d="M14.5 3.5a6 6 0 0 1 6 6" />
                <path d="M14.2 6.7a3 3 0 0 1 3.1 3.1" />
              </svg>
            </span>
            +91 72044 41668
          </a>
          <a
            href="#appointment"
            className="flex items-center gap-[0.9vw] whitespace-nowrap rounded-full border border-white/80 py-[0.3vw] pl-[1.2vw] pr-[0.3vw] text-[0.85vw] font-semibold transition-colors duration-200 hover:bg-white/10"
          >
            Book Your Consultation
            <ArrowBadge className="h-[2.1vw] w-[2.1vw]" />
          </a>
        </div>

        {/* phone menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#2b3320] lg:hidden"
        >
          <span className="relative block h-[12px] w-[20px]">
            <span className={`absolute left-0 h-[1.8px] w-full rounded bg-white transition-all duration-300 ${menuOpen ? "top-[5px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-[1.8px] w-full rounded bg-white transition-all duration-300 ${menuOpen ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
          </span>
        </button>

        <div
          className={`absolute left-4 right-4 top-[68px] origin-top rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(31,38,22,0.25)] transition-all duration-300 lg:hidden ${
            menuOpen ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-[17px] font-semibold text-[#1f2616] hover:text-[#6b8440]">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#appointment" onClick={() => setMenuOpen(false)} className="mt-6 flex h-[52px] items-center justify-center rounded-full bg-[#2b3320] text-[16px] font-semibold text-white">
            Book Your Consultation
          </a>
        </div>
      </header>

      {/* ===== headline, button ===== */}
      <div className="relative z-20 px-5 pt-[18px] lg:absolute lg:left-[3.3%] lg:top-[14%] lg:w-[40%] lg:px-0 lg:pt-12">
        <span aria-hidden="true" className="absolute top-[20px] left-0 hidden lg:block">
          <span className="absolute -left-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-[#2b3320]" />
          <span className="block h-[1px] w-[5.2vw] bg-[#2b3320]/70" />
          <span className="absolute left-0 top-0 block h-[2.6vw] w-[1px] bg-[#2b3320]/70" />
        </span>

        <h1 className="text-[clamp(22px,6.2vw,30px)] font-semibold uppercase leading-[1.16] tracking-[-0.005em] text-[#1f2616] lg:hidden ">
          <span className="block animate-hero-left [animation-delay:300ms]">Personalised Post-Surgery</span>
          <span className="block animate-hero-left [animation-delay:440ms]">
            <span className={outline}>Reha</span>
            <span className="text-[#6b8440]">bi</span>
            <span className={outline}>litation</span> to Help
          </span>
          <span className="block animate-hero-left [animation-delay:580ms]">You Move Forward</span>
        </h1>
        <h1 className="hidden font-semibold uppercase leading-[1.3] tracking-[-0.005em] text-[#1f2616] lg:block lg:pl-[1.2vw] lg:text-[min(3.5vw,7.9svh)] lg:leading-[1.16]">
          <span className="block animate-hero-left [animation-delay:300ms]">Personalised</span>
          <span className="block animate-hero-left [animation-delay:420ms]">Post-Surgery</span>
          <span className="block animate-hero-left [animation-delay:540ms]">
            <span className={outline}>Reha</span>
            <span className="text-[#6b8440]">bi</span>
            <span className={outline}>litation</span> to
          </span>
          <span className="block animate-hero-left [animation-delay:660ms]">Help You Move</span>
          <span className="block animate-hero-left [animation-delay:780ms]">Forward</span>
        </h1>
      </div>

      {/* ===== centre figure ===== */}
      {/* phones & tablets: arch-framed portrait with a name badge */}
      <div className="relative z-10 mx-auto mt-[18px] w-[min(94%,420px)] animate-hero-up pb-[26px] mb-[18px] [animation-delay:400ms] lg:hidden">
        <span aria-hidden="true" className="absolute -right-[10%] top-[6%] aspect-square w-[78%] rounded-full bg-[#eaf6b9]" />
        <span aria-hidden="true" className="absolute -left-[8%] bottom-[14%] aspect-square w-[34%] rounded-full border-2 border-dashed border-[#6b8440]/45" />
        <div className="relative h-[clamp(360px,calc(100svh-250px),600px)] w-full overflow-hidden rounded-t-[999px] rounded-b-[28px] border-[6px] border-white bg-[#e9ece4]">
          <Image src="/DSC03790.JPG" alt="Dr. Sweata Basnett, physiotherapist" fill priority sizes="420px" className="object-cover object-[50%_16%]" />
        </div>
        <div className="absolute inset-x-[8%] bottom-0 flex items-center gap-[12px] rounded-[16px] bg-[#2b3320] px-[16px] py-[12px] text-white">
          <span aria-hidden="true" className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#c3d957]" />
          <span className="min-w-0">
            <span className="block text-[15px] font-semibold leading-[1.2]">Dr. Sweata Basnett</span>
            <span className="mt-[2px] block text-[12px] leading-[1.3] text-white/75">Physiotherapist</span>
          </span>
        </div>
      </div>

      {/* phones: button under the photo */}
      <div className="relative z-20 flex justify-center px-5 lg:hidden">
        <a
          href="#appointment"
          className="flex w-fit animate-hero-up items-center gap-[12px] rounded-full bg-[#2b3320] py-[5px] pl-[22px] pr-[5px] text-[15px] font-semibold text-white [animation-delay:800ms]"
        >
          Book Your Consultation
          <ArrowBadge className="h-[38px] w-[38px]" />
        </a>
      </div>

      {/* desktop: centre figure */}
      <div className="relative z-10 hidden animate-hero-zoom [animation-delay:150ms] lg:absolute lg:bottom-0 lg:left-[39%] lg:-top-[14%] lg:block lg:h-auto lg:w-[38%]">
        <span aria-hidden="true" className="absolute left-[6%] right-[6%] top-[4%] aspect-square rounded-full bg-[#f3f8e6] lg:top-[17%]" />
        <div className="absolute inset-0 [-webkit-mask-image:radial-gradient(ellipse_47%_64%_at_50%_46%,#000_70%,transparent_100%)] [mask-image:radial-gradient(ellipse_47%_64%_at_50%_46%,#000_70%,transparent_100%)] lg:[-webkit-mask-image:radial-gradient(ellipse_46%_64%_at_50%_44%,#000_60%,transparent_100%)] lg:[mask-image:radial-gradient(ellipse_46%_64%_at_50%_44%,#000_60%,transparent_100%)]">
          <div className="absolute inset-x-0 bottom-0 top-0 max-lg:-top-[16%]">
            <Image src="/DSC03790.JPG" alt="Dr. Sweata Basnett, physiotherapist" fill priority sizes="(min-width: 1024px) 38vw, 90vw" className="object-cover object-[50%_18%]" />
          </div>
        </div>
      </div>

      {/* ===== key benefits (no background): one row that drifts slowly, then the button ===== */}
      <div className="relative z-20 mt-[22px] animate-hero-up [animation-delay:950ms] lg:absolute lg:left-[3.3%] lg:top-[68%] lg:mt-0 lg:w-[39.7%]">
        <div className="group/usp overflow-hidden px-5 [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] lg:px-0 lg:pl-[1.2vw] lg:[mask-image:linear-gradient(to_right,#000,#000_92%,transparent)] motion-reduce:overflow-x-auto">
          <div className="flex w-max animate-marquee items-center [animation-duration:28s] group-hover/usp:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
                {usps.map((u) => (
                  <li
                    key={u.label}
                    className="mr-[28px] flex shrink-0 items-center gap-[14px] border-r border-[#2b3320]/20 pr-[28px] lg:mr-[2.2vw] lg:gap-[0.9vw] lg:pr-[2.2vw]"
                  >
                    <PngIcon src={u.icon} className="h-[44px] w-[44px] lg:h-[3.4vw] lg:w-[3.4vw]" />
                    <span className="whitespace-nowrap text-[15px] font-semibold leading-[1.3] text-[#1f2616] lg:text-[0.95vw]">{u.label}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="hidden animate-hero-up [animation-delay:1150ms] lg:mt-[2.2vw] lg:block">
          <a
            href="#appointment"
            className="flex w-fit items-center gap-[12px] rounded-full bg-[#2b3320] py-[6px] pl-[22px] pr-[6px] text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 lg:ml-[1.2vw] lg:gap-[1.2vw] lg:py-[0.35vw] lg:pl-[1.5vw] lg:pr-[0.35vw] lg:text-[0.85vw]"
          >
            Book Your Consultation
            <ArrowBadge className="h-[36px] w-[36px] lg:h-[2.2vw] lg:w-[2.2vw]" />
          </a>
        </div>
      </div>

      {/* ===== right panel content ===== */}
      <div className="relative z-20 mx-5 mb-5 mt-[22px] overflow-hidden rounded-[24px] bg-gradient-to-b from-[#46592f] to-[#2b3320] p-[22px] text-white lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mb-0 lg:mt-0 lg:w-[48.2%] lg:overflow-visible lg:rounded-none lg:bg-none lg:p-0">
        {/* title + text */}
        <div className="animate-hero-right [animation-delay:500ms] max-lg:border-b max-lg:border-white/15 max-lg:pb-[18px] lg:absolute lg:left-[50.2%] lg:top-[20.6%] lg:w-[47.9%]">
          <h2 className="text-[18px] font-semibold leading-[1.25] lg:text-[1.2vw]">Work towards better movement, improved strength and greater independence with physiotherapy tailored to your recovery needs.</h2>
          {/* <p className="mt-[8px] text-[14px] leading-[1.6] text-white/80 lg:mt-[0.5vw] lg:text-[0.78vw] lg:leading-[1.55]">
            Post-surgery physiotherapy is a specialised practice focused on restoring movement, strength and confidence through safe, guided rehabilitation.
          </p> */}
        </div>

        {/* phase cards */}
        <div className="mt-[18px] grid grid-cols-2 gap-[14px] lg:mt-0 lg:flex lg:items-end">
          <div className="flex animate-hero-up flex-col items-center [animation-delay:800ms] lg:absolute lg:bottom-[29.9%] lg:left-[66.6%] lg:w-[13.3%]">
            <span className="mb-[10px] text-[16px] font-semibold tracking-[0.02em] lg:mb-[0.6vw] lg:text-[1.4vw]">Phase 1</span>
            <div className="relative h-[190px] w-full overflow-hidden rounded-[16px] lg:h-[7.2vw] lg:w-full lg:rounded-[0.9vw]">
              <Image src="/conditions/orthopedic-rehabilitation.jpg" alt="" fill sizes="120px" className="object-cover object-[50%_40%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2616]/90 via-[#1f2616]/25 to-transparent" />
              <span className="absolute bottom-[12px] right-[10px] rotate-180 text-[14px] font-semibold [writing-mode:vertical-rl] lg:bottom-[0.7vw] lg:right-[0.6vw] lg:text-[0.8vw]">Mobility</span>
            </div>
          </div>
          <div className="flex animate-hero-up flex-col items-center [animation-delay:950ms] lg:absolute lg:bottom-[29.9%] lg:left-[82.3%] lg:w-[13.5%]">
            <span className="mb-[10px] text-[16px] font-semibold tracking-[0.02em] lg:mb-[0.6vw] lg:text-[1.4vw]">Phase 2</span>
            <div className="relative h-[190px] w-full overflow-hidden rounded-[16px] lg:h-[9.9vw] lg:w-full lg:rounded-[0.9vw]">
              <Image src="/conditions/sports-physiotherapy.jpg" alt="" fill sizes="120px" className="object-cover object-[50%_40%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2616]/90 via-[#1f2616]/25 to-transparent" />
              <span className="absolute bottom-[12px] right-[10px] rotate-180 text-[14px] font-semibold [writing-mode:vertical-rl] lg:bottom-[0.7vw] lg:right-[0.6vw] lg:text-[0.8vw]">Strength</span>
            </div>
          </div>
        </div>

        {/* quote + avatars */}
        <div className="mt-[20px] animate-hero-up [animation-delay:1100ms] max-lg:border-t max-lg:border-white/15 max-lg:pt-[18px] lg:absolute lg:left-[47.9%] lg:right-[4.2%] lg:top-[76.3%] lg:mt-0">
          <p className="text-[13px] leading-[1.6] text-white/90 lg:text-right lg:text-[0.78vw] lg:leading-[1.55]">
            &ldquo;Get personalised physiotherapy support to improve mobility, rebuild strength and regain confidence in everyday movements. &rdquo;
          </p>
          <div className="mt-[10px] flex lg:mt-[0.7vw] lg:justify-end">
            {avatars.map((src, i) => (
              <span key={src} className={`relative block h-[34px] w-[34px] overflow-hidden rounded-full border-2 border-[#2b3320] lg:h-[2.9vw] lg:w-[2.9vw] lg:border-[0.18vw] ${i ? "-ml-[9px] lg:-ml-[0.8vw]" : ""}`}>
                <Image src={src} alt="" fill sizes="48px" className="object-cover" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
