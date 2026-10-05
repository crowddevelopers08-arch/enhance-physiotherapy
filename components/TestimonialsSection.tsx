"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    name: "Ruben Lewis",
    tag: "Knee Replacement",
    quote:
      "Thank you Dr. Mrunal for treating my father. Your assistance in conducting physio sessions helped him recover at a quicker pace and was able to walk confidently post his knee replacement surgery. Thank you for instilling confidence in him and also giving right advice on how to take care of himself. Your services are much appreciated.",
  },
  {
    name: "Rita Dutt",
    tag: "Muscle & Bone Care",
    quote:
      "I am very pleased to say that my experience at the Enhance clinic has been 💯 satisfactory and successful. I have used their expertise and services on a number of occasions and for multiple muscle and bone related issues and they have always used the most appropriate and relevant treatments to relieve pain, cure the problem and, literally, get me back on my feet in the shortest possible time. I strongly recommend that for any problem requiring physiotherapy, Ehance would be the right place to go.",
  },
  {
    name: "Sarah Bareen",
    tag: "Pain Relief",
    quote:
      "Dr shwetha is one of the best Dr i have met. She gives full atention to all the problems. I always say she has a “Healing touch in her hands”. I know her from past 4-5 years. I always go back to her anytime i have any isaue. She is more of a lil sister to me than only my therapist. May Allah bless her.",
  },
  {
    name: "rajendra bk",
    tag: "Post TKR Rehab",
    quote:
      "Patient is very happy and doing good with Dr.Raj’s Physiotherapy. After 28 sessions patient is doing good and improved now she is doing her exercises on her own. I once again thank Dr.Raj for his training and guidance which has helped the patient improve post TKR.",
  },
  {
    name: "aechath chieba",
    tag: "Post-Surgery Rehab",
    quote:
      "My Mother in had a pleasant experience with her physiotherapist after her knee surgery. The therapist (Ms. Anung) was always on time, helpful and showed kindness to her and very detail oriented in explaining on her she should be taking care of her post surgery days with everyday physio exercises.",
  },
  {
    name: "Uma Krishnakumar",
    tag: "Knee Pain & Gait",
    quote:
      "Have attended 10 physio sessions at Enhance and feel considerable improvement in my gait. Dr Sweata and Ramya conducted these sessions and helped in the recovery process. My knee pain and muscle stiffness have reduced a lot. My legs feel stronger and I am able to walk more confidently.",
  },
];

const avatars = ["/en-images-1.JPG", "/en-doc-1.JPG", "/en-images-2.JPG", "/en-images-3.JPG"];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-[21px] sm:w-[21px]" fill="currentColor" aria-hidden="true">
      <path d="M12 1.8l3.05 6.53 7.15.86-5.27 4.92 1.38 7.07L12 17.7l-6.31 3.48 1.38-7.07L1.8 9.19l7.15-.86z" />
    </svg>
  );
}

function ArrowButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#c9d4b4] bg-white text-[#2b3320] transition-colors duration-200 hover:border-[#6b8440] hover:bg-[#6b8440] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#90a863]/30 sm:h-[57px] sm:w-[57px]"
    >
      <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "prev" ? <path d="M19 12H5m6-6-6 6 6 6" /> : <path d="M5 12h14m-6-6 6 6-6 6" />}
      </svg>
    </button>
  );
}

/*
 * One card slot. Every testimonial is stacked in the same grid cell so the card is always as tall
 * as the longest review: all cards share one height and nothing jumps when the slide changes.
 */
function QuoteCard({ active, className = "" }: { active: number; className?: string }) {
  return (
    <article
      className={`grid rounded-[24px] border border-[#e4ead8] bg-gradient-to-b from-[#fbfcf8] to-white px-[24px] pb-[30px] pt-[32px] sm:rounded-[28px] sm:px-[34px] sm:pb-[38px] sm:pt-[40px] ${className}`}
    >
      {testimonials.map((t, i) => {
        const isActive = i === active;
        return (
          <div
            key={t.name}
            aria-hidden={!isActive}
            className={`flex flex-col [grid-area:1/1] transition-all duration-500 ease-out ${
              isActive ? "translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-[14px] opacity-0"
            }`}
          >
            <svg viewBox="0 0 32 24" className="h-[22px] w-[29px] text-[#6b8440] sm:h-[26px] sm:w-[34px]" fill="currentColor" aria-hidden="true">
              <path d="M0 24V14.4C0 6.9 4.2 1.9 11.6 0l1.6 3.3C9.3 4.6 7.1 7.4 6.8 10.8H13V24H0Zm19 0V14.4C19 6.9 23.2 1.9 30.6 0l1.6 3.3c-3.9 1.3-6.1 4.1-6.4 7.5H32V24H19Z" />
            </svg>
            <p className="mt-[22px] text-[15px] leading-[1.7] text-[#5b6055] sm:mt-[28px] sm:text-[16px] 2xl:text-[17px]">
              {t.quote}
            </p>
            <p className="mt-auto pt-[24px] text-[14px] text-[#5b6055] sm:pt-[32px] sm:text-[15px]">
              <span className="font-bold text-[#1c1f1a]">{t.name}</span> / {t.tag}
            </p>
          </div>
        );
      })}
    </article>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-b from-[#f7faee] via-[#f2f1ed] to-[#eef2e6] px-4 py-[40px] font-sans sm:px-6 md:px-8 md:py-[56px] lg:py-[64px] xl:px-[46px]"
    >
      <div className="mx-auto w-full max-w-[1468px]">
        {/* ================= HEADING ================= */}
        <SectionLabel>Testimonials</SectionLabel>

        <div className="mt-[10px] flex flex-col items-start gap-[18px] sm:flex-row sm:items-end sm:justify-between sm:gap-[24px]">
          <h2 className="text-[#1c1f1a] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Real People, <span className="text-[#6b8440]">Real Results</span>
          </h2>
          <button
            type="button"
            onClick={next}
            className="shrink-0 whitespace-nowrap rounded-full bg-[#e2efb8] px-[28px] pb-[11px] pt-[14px] text-[15px] font-semibold leading-none text-[#2b3320] transition-colors duration-200 hover:bg-[#c3d957] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#90a863]/30 sm:px-[36px] sm:py-[15px] sm:text-[16px]"
          >
            View More
          </button>
        </div>

        {/* ================= CARDS ================= */}
        {/* Mobile: 1 column · Tablet/small laptop: rating card on top + 2 reviews · Desktop: 3 equal-height columns */}
        <div className="mt-[28px] grid grid-cols-1 gap-[16px] sm:mt-[40px] md:grid-cols-2 md:gap-[20px] xl:mt-[58px] xl:grid-cols-[minmax(0,1.025fr)_minmax(0,1fr)_minmax(0,1fr)] xl:gap-[24px]">
          {/* Rating card */}
          <div className="flex flex-col items-center rounded-[24px] border border-[#e4ead8] bg-white px-[24px] py-[32px] sm:rounded-[28px] sm:py-[40px] md:col-span-2 xl:col-span-1 xl:justify-center xl:pb-[39px] xl:pt-[40px]">
            <p className="text-[56px] font-bold leading-none tracking-[-0.02em] text-[#1c1f1a] sm:text-[64px] xl:text-[72px]">4.9</p>

            <div className="mt-[12px] flex items-center gap-[5px] text-[#f5b301] sm:mt-[14px]" aria-label="Rated 4.9 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>

            <p className="mt-[8px] text-[14px] text-[#5b6055] sm:text-[15px]">
              <span className="font-bold text-[#1c1f1a]">183+</span> reviews on Trustpilot
            </p>

            <div className="mt-[20px] flex items-center sm:mt-[26px]">
              {avatars.map((src, i) => (
                <span
                  key={src}
                  className={`relative h-[40px] w-[40px] overflow-hidden rounded-full ring-2 ring-white sm:h-[45px] sm:w-[45px] ${i > 0 ? "-ml-[9px]" : ""}`}
                >
                  <Image src={src} alt="" fill sizes="45px" className="object-cover" />
                </span>
              ))}
            </div>

            <div className="mt-[28px] flex items-center gap-[12px] sm:mt-[36px] xl:mt-[64px]">
              <ArrowButton dir="prev" onClick={prev} />
              <ArrowButton dir="next" onClick={next} />
            </div>
          </div>

          {/* Review cards (second one appears from tablet up) */}
          <QuoteCard active={index} />
          <QuoteCard active={(index + 1) % count} className="max-md:hidden" />
        </div>
      </div>
    </section>
  );
}
