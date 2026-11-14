'use client'
import React, { useState } from "react";
import { OPEN_BOOKING_EVENT } from "../BookingModal";

// Black PNG icons tinted with the brand colour via CSS mask (colour comes from the bg-* class)
const PngIcon = ({ src, className = "" }: { src: string; className?: string }) => (
  <span
    aria-hidden="true"
    className={`inline-block bg-[#6b8440] ${className}`}
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

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l9.586 0 0 9.586" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7L7 17" />
  </svg>
);

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    { name: "13+ Years of Experience", icon: "/membership.png" },
    { name: "Experienced Physiotherapy Team", icon: "/why-icons-1.png" },
    { name: "Detailed Physiotherapy Assessment", icon: "/why-icons-2.png" },
    { name: "Personalised Exercise Programmes", icon: "/why-icons-3.png" },
    { name: "Rehabilitation That Adapts to Your Progress", icon: "/why-icons-4.png" },
    { name: "Home Visit Physiotherapy Options", icon: "/why-icons-5.png" },
  ];

  // Carousel navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const scrollToBooking = () => {
    window.dispatchEvent(new Event(OPEN_BOOKING_EVENT));
  };

  return (
    <div id="why-choose-us" className="font-[family-name:var(--primary-font)] bg-white max-sm:pt-0 py-10 px-4 sm:px-6 lg:px-8 md:pb-0">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center pt-10 lg:pt-0 max-sm:mb-2 lg:mb-0">
          <span className="mb-4 text-[16px] font-semibold tracking-[-0.005em] md:text-[18px] text-[#6b8440]">
            Why Choose Us
          </span>
          <h2 className="max-w-3xl text-[#1f2616] max-sm:mb-0 text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] md:text-[clamp(30px,3.4vw,40px)]">
            Why Choose Enhance{" "}
            <span className="text-[#6b8440]">Physiotherapy &amp; Wellness?</span>
          </h2>
        </div>

        {/* DESKTOP LAYOUT - Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {teamMembers.map(({ name, icon }) => (
            <div key={name} className="py-8 px-3 text-center">
              <h3 className="mb-2 flex min-h-[7.5rem] items-center justify-center text-[22px] font-semibold leading-[1.25] tracking-[-0.005em] text-[#2b3320] md:text-[24px]">
                {name}
              </h3>
              <div className="flex justify-center items-center py-5">
                <PngIcon src={icon} className="w-20 h-20" />
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP ONLY - Button (bottom centre) */}
        <div className="hidden lg:flex justify-center pt-4 pb-14">
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

        {/* =========================================== */}
        {/* MOBILE/TABLET LAYOUT - EXACT FLOW PRESERVED */}
        {/* =========================================== */}
        <div className="lg:hidden">

          {/* 1. CAROUSEL CARD */}
          <div className="relative px-2">
            <div className="py-6 max-sm:py-2 px-4 text-center">
              <h3 className="mb-2 text-[22px] font-semibold leading-[1.25] tracking-[-0.005em] text-[#2b3320] md:text-[24px]">
                {teamMembers[currentIndex].name}
              </h3>
              <div className="flex justify-center items-center py-6 max-sm:py-3">
                <PngIcon src={teamMembers[currentIndex].icon} className="w-24 h-24 sm:w-28 sm:h-28" />
              </div>
            </div>
          </div>

          {/* 2. NAVIGATION ARROWS - Below carousel */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#eef6d4] hover:bg-[#e2efb8] flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#c3d957]"
              aria-label="Previous reason"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b8440"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#eef6d4] hover:bg-[#e2efb8] flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#c3d957]"
              aria-label="Next reason"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b8440"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* 3. DOTS INDICATOR - Below arrows */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {teamMembers.map((member, index) => (
              <button
                key={member.name}
                onClick={() => goToSlide(index)}
                className="focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                {currentIndex === index ? (
                  <div className="relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#90a863] rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-[#90a863] rounded-full animate-ping opacity-30"></div>
                  </div>
                ) : (
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#c3d957] bg-white hover:bg-[#eef6d4] transition-all duration-300"></div>
                )}
              </button>
            ))}
          </div>

          {/* 4. SLIDE COUNTER - Below dots */}
          <div className="text-center text-sm text-gray-500 mt-3 mb-5">
            <span className="font-semibold text-[#6b8440]">{currentIndex + 1}</span>
            <span className="mx-1">/</span>
            <span className="text-gray-400">{teamMembers.length}</span>
          </div>

          {/* 5. BUTTON - At the bottom after counter */}
          <div className="mt-2 mb-4 flex w-full justify-center">
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
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .lg\\:grid {
            display: none;
          }
          .hidden.lg\\:block {
            display: none !important;
          }
        }

        @media (min-width: 1024px) {
          .lg\\:hidden {
            display: none;
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;
