'use client'
import React, { useState } from "react";
import { OPEN_BOOKING_EVENT } from "./BookingModal";
import SectionLabel from "./SectionLabel";

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
    { name: "Experienced Physiotherapists", icon: "/en-icons-1.png" },
    { name: "Home-Based Convenience", icon: "/en-icons-2.png" },
    { name: "Personalised Treatment Plans", icon: "/en-icons-3.png" },
    { name: "Continuous Progress Monitoring", icon: "/en-icons-4.png" },
    { name: "Support For Families & Caregivers", icon: "/en-icons-5.png" },
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
    <div id="why-choose-us" className="bg-gradient-to-br from-[#f7faee] via-[#f2f1ed] to-[#eef6d4] max-sm:pt-0 py-10 px-4 sm:px-6 lg:px-8 md:pb-0">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center pt-10 lg:pt-0 mb-6 max-sm:mb-2 lg:mb-4">
          <SectionLabel centered className="mb-4">
            Why Choose Us
          </SectionLabel>
          <h2 className="max-w-3xl text-[#2b3320] max-sm:mb-0 mb-4 text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            What Makes Our Physiotherapy Care{" "}
            <span className="text-[#6b8440]">Different</span>
          </h2>
        </div>

        {/* DESKTOP LAYOUT - Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map(({ name, icon }) => (
            <div key={name} className="py-8 px-3 text-center">
              <h3 className="text-[#2b3320] font-bold text-xl mb-2 min-h-[3.5rem]">
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
          <button
            className="bg-[#c3d957] hover:bg-[#b3cb45] text-[#2b3320] font-semibold py-3.5 px-8 rounded-full flex items-center gap-2 transition-colors duration-300 text-base justify-center shadow-md"
            onClick={scrollToBooking}
          >
            <span className="max-[340px]:hidden">Book Your Home Physiotherapy Visit</span>
            <span className="hidden max-[340px]:inline">Book Your Consultation</span>
            <ArrowIcon />
          </button>
        </div>

        {/* =========================================== */}
        {/* MOBILE/TABLET LAYOUT - EXACT FLOW PRESERVED */}
        {/* =========================================== */}
        <div className="lg:hidden">

          {/* 1. CAROUSEL CARD */}
          <div className="relative px-2">
            <div className="py-6 max-sm:py-2 px-4 text-center">
              <h3 className="text-[#2b3320] font-bold text-xl sm:text-2xl mb-2">
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
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#90a863] rounded-full shadow-lg shadow-[#dcebb0]"></div>
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
          <div className="w-full mt-2 mb-4">
            <button className="bg-[#c3d957] hover:bg-[#b3cb45] text-[#2b3320] font-semibold py-3.5 px-6 rounded-xl flex items-center gap-2 transition-colors duration-300 text-sm sm:text-base w-full justify-center shadow-md" onClick={scrollToBooking}>
              <span className="max-[340px]:hidden">Book Your Home Physiotherapy Visit</span>
              <span className="hidden max-[340px]:inline">Book Your Consultation</span>
              <ArrowIcon />
            </button>
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
