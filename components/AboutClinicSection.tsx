import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function AboutClinicSection() {
  return (
    <section id="about-clinic" className="w-full bg-white px-5 py-[32px] font-sans md:px-8 lg:py-[56px] xl:px-[46px]">
      <div className="mx-auto grid w-full max-w-[1710px] grid-cols-1 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[56px] xl:gap-[76px]">
        {/* ================= TEXT ================= */}
        {/* Mobile order: label, heading → logo → paragraph, button. Desktop: text left, logo right. */}
        <div className="contents lg:flex lg:flex-col">
          <div className="order-1 flex flex-col lg:order-none">
          {/* Label */}
          <SectionLabel>About the Clinic</SectionLabel>

          {/* Heading */}
          <h2 className="mt-[24px] text-[#1c1f1a] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            A Trusted Space For <span className="text-[#6b8440]">Personalised Physiotherapy Care</span>
          </h2>
          </div>

          <div className="order-3 flex flex-col lg:order-none">
          {/* Paragraph */}
          <p className="mt-[28px] text-[16px] lg:mt-[16px] leading-[1.85] text-[#5b6055] sm:text-[18px]">
            Enhance Physiotherapy &amp; Wellness is dedicated to providing personalised physiotherapy care focused on
            improving mobility, managing pain, and supporting recovery. Our experienced team uses effective
            rehabilitation techniques, modern equipment, and patient-focused approaches to help individuals with
            conditions such as sports injuries, chronic pain, and post-surgical recovery. With a supportive environment
            and a focus on patient education, we help you understand your condition better and work towards improved
            strength, movement, and overall wellbeing.
          </p>

          {/* Button */}
          <a
            href="#appointment"
            className="group mt-[36px] inline-flex min-h-[64px] w-fit max-w-full items-center gap-[16px] rounded-full bg-[#6b8440] py-[8px] pl-[26px] pr-[8px] text-[16px] font-medium leading-snug text-white ring-2 ring-[#90a863]/40 ring-offset-2 ring-offset-white transition-colors duration-300 hover:bg-[#5d7437] sm:gap-[24px] sm:pl-[42px] sm:text-[20px]"
          >
            <span className="max-[340px]:hidden">Book Your Consultation Today</span>
            <span className="hidden max-[340px]:inline">Book Your Consultation</span>
            <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#26301c] transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
          </div>
        </div>

        {/* ================= LOGO ================= */}
        {/* Clinic card image (1015×561): box matches its ratio so the whole card shows, uncropped */}
        <div className="relative order-2 mt-[28px] aspect-[1015/561] w-full overflow-hidden rounded-[18px] border border-[#d3dac6] bg-white shadow-[0_18px_50px_rgba(38,48,28,0.08)] sm:rounded-[28px] lg:order-none lg:mt-0">
          <Image
            src="/image.png"
            alt="Enhance Physiotherapy & Wellness – Dr. Sweata Basnett, contact details and clinic address"
            fill
            sizes="(min-width: 1710px) 820px, (min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
