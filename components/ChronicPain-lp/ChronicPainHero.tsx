"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ChronicPainHero.module.css";

// Links scroll smoothly to this landing page's own sections and stop at the top of each one
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Conditions", href: "#conditions-we-help" },
  { label: "Our Approach", href: "#treatment-roadmap" },
  { label: "Doctors", href: "#doctors" },
  { label: "FAQ", href: "#faq" },
];

const benefits = [
  "Individual Pain Assessment",
  "Personalised Exercise Plans",
  "Clinic & Home Visits",
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
    <span className={`flex shrink-0 items-center justify-center rounded-full ${className}`}>
      <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden="true">
        <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-[16px] w-[16px] md:h-[17px] md:w-[17px]" aria-hidden="true">
      <path d="M10 1.2l2.6 5.6 6.1.7-4.5 4.2 1.2 6.1L10 14.7l-5.4 3.1 1.2-6.1L1.3 7.5l6.1-.7L10 1.2z" />
    </svg>
  );
}

export default function ChronicPainHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      data-no-reveal
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#1f2616] font-sans text-white px-0 md:px-15"
    >
      {/* ================= BACKGROUND ================= */}
      <Image
        src="/pexels-shkrabaanthony.webp"
        alt="Physiotherapist helping a patient recover from chronic pain"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_60%] md:hidden"
      />
      <Image
        src="/banner-2.png"
        alt="Physiotherapist helping a patient recover from chronic pain"
        fill
        priority
        sizes="100vw"
        className="-z-20 hidden object-cover object-[50%_55%] md:block"
      />
      {/* Warm brand-tinted overlays keep the text readable */}
      <div className="absolute inset-0 -z-10 bg-[#2b3320]/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1f2616]/75 via-[#1f2616]/35 to-transparent max-md:from-[#1f2616]/70 max-md:via-[#1f2616]/55 max-md:to-[#1f2616]/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1f2616]/80 via-transparent to-[#1f2616]/35" />

      {/* ================= NAVBAR ================= */}
      <header className="relative z-30 mx-auto flex h-[88px] w-full max-w-[1468px] shrink-0 items-center justify-between gap-6 px-5 md:px-8 xl:px-0">
        <a href="#" className="flex shrink-0 animate-hero-left items-center gap-[10px]" aria-label="Enhance Physiotherapy & Wellness – Home">
          <Image
            src="/enhance-emblem.png"
            alt=""
            width={766}
            height={608}
            priority
            className="h-[52px] w-auto lg:h-[58px]"
          />
          <Image
            src="/enhance-wordmark.png"
            alt="Enhance – Be your best self"
            width={650}
            height={176}
            priority
            className="h-[30px] w-auto lg:h-[35px]"
          />
        </a>

        <div className="flex items-center gap-[18px] xl:gap-[28px]">
          <nav className="hidden items-center gap-[24px] lg:flex xl:gap-[28px]">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                style={{ animationDelay: `${150 + i * 70}ms` }}
                className="animate-hero-down whitespace-nowrap text-[15px] font-medium leading-none text-white transition-colors duration-200 hover:text-[#c3d957] xl:text-[16px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex animate-hero-right items-center gap-[14px] [animation-delay:200ms] xl:gap-[24px]">
            <a
              href="tel:+917204441668"
              aria-label="Call +91 72044 41668"
              className="hidden h-[52px] w-[52px] items-center justify-center rounded-full bg-white/90 text-[#6b8440] transition-colors duration-200 hover:bg-white sm:flex"
            >
              <PhoneIcon className="h-[24px] w-[24px]" />
            </a>

            <a
              href="#appointment"
              className="hidden h-[54px] items-center gap-[12px] whitespace-nowrap rounded-full bg-white/90 pl-[14px] pr-[22px] text-[16px] font-medium text-[#2b3320] transition-colors duration-200 hover:bg-white sm:flex"
            >
              <PlusBadge className="h-[30px] w-[30px] bg-[#6b8440] text-white" />
              Appointment
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/90 lg:hidden"
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
        </div>

        {/* Mobile dropdown */}
        <div
          className={`absolute left-4 right-4 top-[80px] origin-top rounded-[24px] bg-white p-6 text-[#2b3320] shadow-[0_20px_60px_rgba(31,38,22,0.35)] transition-all duration-300 lg:hidden ${
            menuOpen ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[17px] font-medium transition-colors hover:text-[#6b8440]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-[#eef2e4] pt-6">
            <a href="tel:+917204441668" className="flex items-center gap-3">
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#f3f8e6]">
                <PhoneIcon className="h-[20px] w-[20px] text-[#6b8440]" />
              </span>
              <span className="text-[17px] font-medium">+91 72044 41668</span>
            </a>
            <a
              href="#appointment"
              className="flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#eaf6b9] text-[17px] font-medium"
            >
              <PlusBadge className="h-[28px] w-[28px] bg-white text-[#6b8440]" />
              Appointment
            </a>
          </div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1468px] flex-1 flex-col justify-end px-5 pt-5 md:px-8 xl:px-0">
        <h1
          className={`${styles.headline} animate-hero-left font-semibold leading-[1.1] tracking-[-0.025em] text-white [animation-delay:350ms]`}
        >
          Manage Chronic Pain, Improve Mobility &amp; Stay Active with Physiotherapy
        </h1>

        <p
          className={`mt-4 max-w-[640px] animate-hero-right text-[16px] leading-[1.5] text-white/95 [animation-delay:500ms] md:text-[18px]`}
        >
          Explore chronic pain physiotherapy in Bengaluru with personalised assessments, guided exercises and rehabilitation programmes focused on improving everyday mobility.
        </p>

        {/* CTA + rating */}
        <div className="mt-[28px] flex flex-col items-start justify-between gap-[28px] md:flex-row md:items-end md:gap-[24px]">
          <a
            href="#appointment"
            className="flex min-h-[54px] w-fit max-w-full shrink-0 animate-hero-up items-center gap-[12px] rounded-full bg-white py-3 pl-[18px] pr-[22px] max-md:justify-center text-[16px] font-medium text-[#2b3320] transition-transform duration-200 [animation-delay:650ms] hover:-translate-y-0.5 md:min-h-[55px]"
          >
            <PlusBadge className="h-[28px] w-[28px] bg-[#6b8440] text-white" />
            Book Your Consultation
          </a>

          <div className="flex animate-hero-right flex-col items-start gap-[8px] [animation-delay:800ms] md:items-end">
            <div className="flex gap-[6px] text-[#c3d957]">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <span className="text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-white md:text-[12px]">
              Trusted by 183+ Patients
            </span>
          </div>
        </div>

        {/* Benefits row */}
        <div
          className={`${styles.benefits} mt-[26px] border-t border-white/25 pb-[22px] pt-[22px] text-[17px] leading-[1.3] text-white/95 md:mt-[34px] md:pb-[24px] md:pt-[28px] xl:text-[22px]`}
        >
          <div className={styles.track}>
            {[0, 1].map((copy) => (
              <ul key={copy} className={styles.group} aria-hidden={copy === 1 ? true : undefined}>
                {benefits.map((item) => (
                  <li key={item} className={styles.benefit}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
