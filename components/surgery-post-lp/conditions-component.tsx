"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BrandMark from "../BrandMark";

const conditions = [
  { title: "Improve Joint Mobility", image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652405/orthopedic-rehabilitation.jpg", position: "50% 55%" },
  { title: "Rebuild Muscle Strength", image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652407/sports-physiotherapy.jpg", position: "50% 45%" },
  { title: "Support Flexibility", image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652386/arm-stretch.jpg", position: "50% 40%" },
  { title: "Improve Walking & Balance", image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652403/general-physiotherapy.jpg", position: "50% 40%" },
  { title: "Regain Functional Independence", image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652407/post-operative-rehabilitation.jpg", position: "50% 40%" },
  { title: "Return Gradually to Daily Activities", image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652386/posture-check.jpg", position: "50% 45%" },
];

export default function ChronicPainConditions() {
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedUntil = useRef(0);
  const [active, setActive] = useState(0);

  // Phones only: the cards slide automatically, one at a time (touching pauses it for a few seconds)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const phone = window.matchMedia("(max-width: 639px)");

    const timer = window.setInterval(() => {
      if (!phone.matches || Date.now() < pausedUntil.current) return;
      const step = (el.children[1] as HTMLElement).offsetLeft || 1;
      const current = Math.round(el.scrollLeft / step);
      const next = (current + 1) % conditions.length;
      const card = el.children[next] as HTMLElement;
      el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const step = (el.children[1] as HTMLElement).offsetLeft || 1;
    setActive(Math.min(conditions.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  const pause = () => {
    pausedUntil.current = Date.now() + 6000;
  };

  const goToCard = (i: number) => {
    const el = trackRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) {
      pause();
      el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  return (
    <section
      id="why-physiotherapy-after-surgery"
      className="relative w-full overflow-hidden bg-white px-5 py-[36px] font-sans text-[#2b3320] md:px-8 lg:py-[52px] xl:px-[46px]"
    >
      <div className="relative mx-auto flex w-full max-w-[1468px] flex-col items-center gap-[24px] lg:gap-[30px]">
        {/* ================= TEXT ================= */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2b3320] md:text-[13px]">
            Why Is Physiotherapy Important After Surgery?
          </span>

          <h2
            className={`mt-[14px] max-w-[16em] text-[clamp(32px,8vw,40px)] font-semibold leading-[1.12] tracking-[-0.015em] text-[#2b3320] md:text-[clamp(38px,5vw,48px)] lg:text-[clamp(38px,3.2vw,54px)]`}
          >
            How Physiotherapy Supports{" "}
            <span className="text-[#6b8440]">Your Recovery After Surgery</span>
          </h2>
        </div>

        {/* ================= CONDITIONS ================= */}
        <ul
          ref={trackRef}
          onScroll={handleScroll}
          onTouchStart={pause}
          onPointerDown={pause}
          className="flex w-full snap-x snap-mandatory gap-[14px] overflow-x-auto [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:gap-[16px] sm:overflow-visible lg:grid-cols-3 lg:gap-[18px] [&::-webkit-scrollbar]:hidden"
        >
          {conditions.map((item, i) => (
            <li
              key={item.title}
              className="group relative isolate aspect-[4/3] w-full shrink-0 snap-center overflow-hidden rounded-[24px] bg-[#2b3320] transition-all duration-300 sm:w-auto sm:shrink sm:hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 92vw"
                style={{ objectPosition: item.position }}
                className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* brand green fade so the title stays readable */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1f2616]/90 via-[#1f2616]/25 to-transparent" />

              <span className="absolute left-[16px] top-[16px] flex h-[38px] min-w-[38px] items-center justify-center rounded-full bg-white/90 px-[10px] text-[12px] font-semibold tracking-[0.12em] text-[#2b3320]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute right-[16px] top-[16px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#2b3320]/80 backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#6b8440]">
                <BrandMark className="h-[18px] w-[20px]" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-[18px] sm:p-[20px]">
                <h3 className={`text-[19px] font-semibold leading-[1.25] text-white sm:text-[20px] xl:text-[22px]`}>
                  {item.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>

        {/* phone carousel dots */}
        <div className="-mt-[8px] flex items-center justify-center gap-[8px] sm:hidden">
          {conditions.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => goToCard(i)}
              aria-label={`Show ${item.title}`}
              className={`h-[10px] rounded-full transition-all duration-300 ${active === i ? "w-[26px] bg-[#6b8440]" : "w-[10px] bg-[#6b8440]/30"}`}
            />
          ))}
        </div>

        <a
            href="#appointment"
            className="flex min-h-[56px] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[16px] pr-[24px] text-left text-[15px] font-medium leading-snug text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5 sm:pl-[18px] sm:text-[17px]"
          >
            <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white">
              <svg viewBox="0 0 16 16" className="h-[14px] w-[14px]" aria-hidden="true">
                <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            Book Your Consultation
          </a>
      </div>
    </section>
  );
}
