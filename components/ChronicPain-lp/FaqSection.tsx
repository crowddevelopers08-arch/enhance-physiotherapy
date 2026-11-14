"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "What is chronic pain, and when should I seek physiotherapy?",
    a: "Chronic pain lasts or recurs for more than three months. If it affects your movement, sleep or daily activities, consider a physiotherapy assessment.",
  },
  {
    q: "Can physiotherapy help manage chronic pain?",
    a: "Physiotherapy may help improve mobility, strength and daily function through personalised exercises, movement guidance and suitable pain management strategies.",
  },
  {
    q: "How many physiotherapy sessions are needed for chronic pain?",
    a: "The number of sessions depends on your condition, symptoms and recovery goals. Your physiotherapist will recommend a suitable plan based on your assessment and progress.",
  },
  {
    q: "Is physiotherapy painful for people with chronic pain?",
    a: "Some exercises may cause mild discomfort. Your physiotherapist will adjust activities according to your condition and tolerance. Report any severe or increasing pain.",
  },
  {
    q: "Can chronic back pain and neck pain be managed with physiotherapy?",
    a: "Yes, physiotherapy may help manage persistent back and neck pain through guided exercises, strengthening and mobility training, depending on your condition.",
  },
  {
    q: "Is home physiotherapy available for chronic pain management?",
    a: "Yes, Enhance Physiotherapy & Wellness offers home physiotherapy services, subject to your clinical needs, location and service availability.",
  },
];

const ArrowIcon = () => (
  <svg
    className="h-6 w-6 text-white sm:h-7 sm:w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const QuestionIcon = () => (
  <svg
    className="h-5 w-5 text-[#6b8440] sm:h-[22px] sm:w-[22px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1.1-1.5 2.2" />
    <path d="M12 17.5h.01" />
  </svg>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 overflow-hidden bg-white px-4 py-7 font-[family-name:var(--primary-font)] text-[#2b3320] sm:px-8 sm:py-9 lg:flex lg:h-[105svh] lg:min-h-[540px] lg:flex-col lg:justify-center lg:px-10 lg:py-20"
    >
      {/* heading */}
      <div className="mx-auto mb-5 max-w-3xl text-center sm:mb-6 lg:mb-[2.4svh]">
        <span className="text-[16px] font-semibold tracking-[-0.005em] text-[#6b8440] md:text-[18px] lg:text-[clamp(15px,2.5svh,20px)]">
          Frequently Asked Questions
        </span>
        <h2 className="mx-auto mt-[6px] max-w-[20em] text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] text-[#1f2616] md:text-[clamp(30px,3.4vw,40px)] lg:text-[clamp(26px,min(3.6vw,5.6svh),44px)]">
          Frequently Asked Questions About <span className="text-[#6b8440]">Chronic Pain Physiotherapy</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:w-full lg:gap-10">
        {/* image side */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0">
          <div className="relative aspect-[4/4.6] w-full overflow-hidden lg:aspect-auto lg:h-[min(64svh,600px)] rounded-2xl border border-[#dfe8cf] shadow-[0_18px_42px_rgba(43,51,32,0.12)]">
            <Image
              src="https://res.cloudinary.com/b5lvyi64/image/upload/v1794652057/faq-chronic.webp"
              alt="Our physiotherapist ready to answer your questions"
              fill
              className="object-cover object-[50%_20%]"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>

          {/* rotating "book" badge */}
          <div className="absolute -right-4 -top-5 h-24 w-24 sm:-right-6 sm:-top-6 sm:h-28 sm:w-28">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin [animation-duration:14s]">
              <defs>
                <path id="faqCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="#6b8440" />
              <text fill="#eaf6b9" fontSize="7.4" fontWeight="700" letterSpacing="1.5">
                <textPath href="#faqCirclePath" startOffset="0%">
                  Book a Consultation &#8226; Book a Consultation &#8226;
                </textPath>
              </text>
            </svg>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <ArrowIcon />
            </div>
          </div>

          {/* floating note */}
          <div className="absolute -bottom-5 left-4 flex max-w-[230px] items-center gap-3 rounded-xl bg-[#6b8440] px-4 py-3.5 shadow-[0_12px_28px_rgba(107,132,64,0.28)] sm:left-6 sm:max-w-[260px] sm:gap-4 sm:px-5 sm:py-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white sm:h-11 sm:w-11">
              <QuestionIcon />
            </span>
            <p className="text-xs font-bold leading-snug text-white sm:text-sm">
              Your Health Questions,
              <br />
              Answered by Experts
            </p>
          </div>
        </div>

        {/* questions */}
        <div>
          <div className="space-y-2.5 sm:space-y-3 lg:space-y-[1.3svh]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-xl border transition ${
                    isOpen ? "border-[#c3d957] bg-[#f3f8e6]" : "border-[#dfe8cf] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-3 text-left sm:px-6 sm:py-3.5 lg:py-[1.3svh]"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3 sm:gap-3.5">
                      <span className="flex aspect-square h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-[15px] font-semibold leading-none tabular-nums text-white sm:h-10 sm:w-10 lg:h-[clamp(34px,5.2svh,44px)] lg:w-[clamp(34px,5.2svh,44px)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[16px] font-semibold leading-[1.35] text-[#1f2616] md:text-[18px] lg:text-[clamp(15px,2.7svh,20px)]">
                        {faq.q}
                      </span>
                    </span>
                    <span className="shrink-0 text-2xl font-bold leading-none text-[#6b8440]">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-3.5 sm:px-6 sm:pb-4 lg:pb-[1.6svh]">
                      <p className="flex gap-2.5 text-[16px] leading-[1.65] text-[#2b3320]/80 md:text-[18px] lg:text-[clamp(15px,2.6svh,20px)]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6b8440]" />
                        <span>{faq.a}</span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#appointment"
            className="mt-[18px] inline-flex min-h-[54px] lg:mt-[2.2svh] lg:min-h-[clamp(44px,6svh,54px)] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[16px] pr-[22px] text-[16px] font-medium text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white">
              <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden="true">
                <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
