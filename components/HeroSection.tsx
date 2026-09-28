"use client";

import Image from "next/image";
import { useState } from "react";
import BrandMark from "./BrandMark";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Conditions", href: "#conditions" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8.3 3.5 9.9 7.3a1.2 1.2 0 0 1-.3 1.4L8 10.1a11 11 0 0 0 5.9 5.9l1.4-1.6a1.2 1.2 0 0 1 1.4-.3l3.8 1.6a1.2 1.2 0 0 1 .7 1.3l-.4 2.4a1.9 1.9 0 0 1-1.9 1.6C10.4 21 3 13.6 3 5a1.9 1.9 0 0 1 1.6-1.9l2.4-.4a1.2 1.2 0 0 1 1.3.8Z" />
      <path d="M14.5 3.5a6 6 0 0 1 6 6" />
      <path d="M14.2 6.7a3 3 0 0 1 3.1 3.1" />
    </svg>
  );
}

function PlusBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center justify-center rounded-full ${className}`}>
      <svg viewBox="0 0 16 16" className="h-[14px] w-[14px]" aria-hidden="true">
        <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
      <path d="M10 1.2l2.6 5.6 6.1.7-4.5 4.2 1.2 6.1L10 14.7l-5.4 3.1 1.2-6.1L1.3 7.5l6.1-.7L10 1.2z" />
    </svg>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section data-no-reveal className="w-full bg-white font-sans text-[#2b3320]">
      {/* ================= NAVBAR ================= */}
      <header className="relative z-30 mx-auto flex h-[82px] w-full max-w-[1900px] items-center justify-between gap-6 px-5 md:px-8 lg:h-[96px] xl:px-[4%] 2xl:h-[105px] 2xl:px-[7.1%]">
        {/* Logo */}
        <a href="#" className="flex shrink-0 animate-hero-left items-center gap-[10px] xl:gap-[12px]" aria-label="Enhance Physiotherapy & Wellness – Home">
          <Image
            src="/enhance-emblem.png"
            alt=""
            width={766}
            height={608}
            priority
            className="h-[56px] w-auto lg:h-[66px] 2xl:h-[76px]"
          />
          <Image
            src="/enhance-wordmark.png"
            alt="Enhance – Be your best self"
            width={650}
            height={176}
            priority
            className="h-[32px] w-auto lg:h-[37px] 2xl:h-[42px]"
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-[22px] lg:flex xl:gap-[26px] 2xl:gap-[32px]">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              style={{ animationDelay: `${150 + i * 70}ms` }}
              className={`relative animate-hero-down whitespace-nowrap pb-[3px] text-[16px] font-medium leading-none transition-colors duration-200 xl:text-[17px] 2xl:text-[18px] ${
                link.active ? "text-[#6b8440]" : "text-[#2b3320] hover:text-[#6b8440]"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-[6px] left-0 h-[1.5px] w-full rounded-full bg-[#90a863]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex shrink-0 animate-hero-right items-center gap-[16px] [animation-delay:200ms] xl:gap-[20px] 2xl:gap-[26px]">
          <a href="tel:+917204441668" className="hidden items-center gap-[12px] xl:flex" aria-label="Call +91 72044 41668">
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f3f8e6] 2xl:h-[50px] 2xl:w-[50px]">
              <PhoneIcon className="h-[21px] w-[21px] text-[#7c9450] 2xl:h-[22px] 2xl:w-[22px]" />
            </span>
            <span className="hidden whitespace-nowrap text-[17px] font-medium tracking-[0.005em] text-[#2b3320] min-[1400px]:inline 2xl:text-[18px]">
              +91 72044 41668
            </span>
          </a>

          <a
            href="#appointment"
            className="hidden h-[50px] items-center gap-[12px] whitespace-nowrap rounded-full bg-[#eaf6b9] pl-[16px] pr-[20px] text-[16px] font-medium text-[#2b3320] transition-colors duration-200 hover:bg-[#dcee9c] sm:flex xl:h-[54px] xl:text-[17px] 2xl:h-[58px] 2xl:gap-[14px] 2xl:pl-[20px] 2xl:pr-[21px] 2xl:text-[18px]"
          >
            <PlusBadge className="h-[28px] w-[28px] bg-white text-[#90a863] 2xl:h-[30px] 2xl:w-[30px]" />
            Appointment
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#eaf6b9] lg:hidden"
          >
            <span className="relative block h-[12px] w-[20px]">
              <span
                className={`absolute left-0 h-[1.8px] w-full rounded bg-[#2b3320] transition-all duration-300 ${
                  menuOpen ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.8px] w-full rounded bg-[#2b3320] transition-all duration-300 ${
                  menuOpen ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`absolute left-4 right-4 top-[78px] origin-top rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(43,51,32,0.15)] transition-all duration-300 lg:hidden ${
            menuOpen ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[17px] font-medium ${link.active ? "text-[#6b8440]" : "text-[#2b3320]"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-[#eef2e4] pt-6">
            <a href="tel:+917204441668" className="flex items-center gap-3">
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#f3f8e6]">
                <PhoneIcon className="h-[20px] w-[20px] text-[#7c9450]" />
              </span>
              <span className="text-[17px] font-medium">+91 72044 41668</span>
            </a>
            <a
              href="#appointment"
              className="flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#eaf6b9] text-[17px] font-medium"
            >
              <PlusBadge className="h-[28px] w-[28px] bg-white text-[#90a863]" />
              Appointment
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO CARD ================= */}
      <div className="px-3 md:px-[2%] ">
        <div className="relative mx-auto h-[calc(100svh-94px)] min-h-[600px] w-full max-w-[1826px] overflow-hidden rounded-[28px] md:h-[min(calc(100svh-106px),900px)] md:min-h-[540px] md:rounded-[34px] lg:h-[min(calc(100svh-116px),48vw)] 2xl:h-[min(calc(100svh-125px),48vw)] 2xl:rounded-[40px]">
          {/* Background image */}
          <Image
            src="/hero.jpg"
            alt="Physiotherapist treating a patient at home in Bangalore"
            fill
            priority
            sizes="100vw"
            className="origin-[46%_62%] scale-[1.38] animate-hero-zoom object-cover object-[50%_40%]"
          />
          {/* Dark warm overlay */}
          <div className="absolute inset-0 bg-[#1f2616]/40" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pb-[148px] pt-[24px] text-center lg:pb-[118px] 2xl:pb-[112px] lg:mb-[20px]">
            <h1 className="max-w-[13.6em] animate-hero-left [animation-delay:350ms] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Expert Physiotherapy Care at Your Doorstep in Bangalore
            </h1>

            <p className="mt-[clamp(14px,2.4svh,22px)] animate-hero-right [animation-delay:500ms] max-w-[640px] text-[16px] leading-[1.6] text-white/90 md:text-[18px] 2xl:max-w-[700px] 2xl:text-[20px]">
              Get personalised Home Physiotherapy support from experienced physiotherapists without the stress of
              travelling to a clinic.
            </p>

            {/* CTA */}
            <div className="mt-[clamp(22px,4svh,40px)] animate-hero-up [animation-delay:650ms] flex flex-col items-center gap-[12px] sm:flex-row sm:gap-[20px] 2xl:gap-[26px]">
              <a
                href="#appointment"
                className="flex min-h-[54px] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[14px] pr-[22px] text-left text-[15px] font-medium leading-snug text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5 sm:whitespace-nowrap sm:pl-[16px] sm:text-[17px] 2xl:min-h-[60px] 2xl:pl-[20px] 2xl:pr-[24px] 2xl:text-[18px]"
              >
                <PlusBadge className="h-[32px] w-[32px] shrink-0 bg-[#6b8440] text-white" />
                <span className="max-[340px]:hidden">Book a Home Physiotherapy Consultation</span>
                <span className="hidden max-[340px]:inline">Book Your Consultation</span>
              </a>
            </div>

            {/* Rating */}
            <div className="mt-[clamp(22px,4.2svh,40px)] flex items-center gap-[14px]">
              <span className="animate-hero-left [animation-delay:800ms] text-[clamp(44px,min(3.1vw,7svh),58px)] font-light leading-none tracking-[0.02em] text-white">
                4.9
              </span>
              <div className="flex animate-hero-right flex-col items-start gap-[7px] pt-[4px] [animation-delay:800ms]">
                <div className="flex gap-[6px] text-white">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <span className="text-[12px] font-semibold uppercase leading-none tracking-[0.16em] text-white md:text-[13px]">
                  183+ Reviews on Trustpilot
                </span>
              </div>
            </div>
          </div>

          {/* Bottom white tab */}
          <div className="absolute bottom-0 left-1/2 z-20 animate-hero-up [animation-delay:900ms] w-[min(88%,780px)] -translate-x-1/2 max-[366px]:w-full lg:w-[min(90%,900px)]">
            <svg
              viewBox="0 0 780 108"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M0 108C44 108 56 88 67 58 79 24 96 0 134 0L646 0C684 0 701 24 713 58 724 88 736 108 780 108Z"
                fill="#fff"
              />
            </svg>

            <div className="relative flex h-[128px] flex-col items-center justify-center gap-[10px] px-[40px] pt-[10px] text-[10px] font-medium uppercase tracking-[0.14em] text-[#2b3320] max-[366px]:gap-[8px] max-[366px]:px-[22px] max-[366px]:text-[9px] max-[366px]:tracking-[0.06em] sm:px-[64px] sm:text-[11px] sm:tracking-[0.18em] lg:h-[108px] lg:gap-[20px] lg:px-[70px] lg:pt-[6px] lg:text-[12px] lg:tracking-[0.18em] 2xl:text-[13px] 2xl:tracking-[0.2em]">
              <span className="flex animate-hero-left items-center gap-[12px] [animation-delay:1050ms] max-[366px]:gap-[8px] max-[366px]:whitespace-nowrap sm:whitespace-nowrap">
                <BrandMark className="h-[18px] w-[20px] shrink-0 max-[366px]:h-[14px] max-[366px]:w-[16px]" />
                Experienced Physiotherapists at Home
              </span>
              <div className="flex flex-col items-center gap-[10px] max-[366px]:gap-[8px] lg:flex-row lg:gap-[26px]">
                <span className="flex animate-hero-left items-center gap-[12px] whitespace-nowrap [animation-delay:1150ms] max-[366px]:gap-[8px]">
                  <BrandMark className="h-[18px] w-[20px] shrink-0 max-[366px]:h-[14px] max-[366px]:w-[16px]" />
                  Personalised Treatment Plans
                </span>
                <span className="flex animate-hero-right items-center gap-[12px] whitespace-nowrap [animation-delay:1250ms] max-[366px]:gap-[8px]">
                  <BrandMark className="h-[18px] w-[20px] shrink-0 max-[366px]:h-[14px] max-[366px]:w-[16px]" />
                  Support for Pain Relief &amp; Recovery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
