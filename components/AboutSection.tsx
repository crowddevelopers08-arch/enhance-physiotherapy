import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { Great_Vibes } from "next/font/google";

const signatureFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#eef2e6] px-5 py-[32px] font-sans md:px-8 lg:py-[56px] xl:px-[46px]">
      <div className="mx-auto grid w-full max-w-[1710px] grid-cols-1 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-[56px] xl:gap-[76px]">
        {/* ================= IMAGES ================= */}
        {/* Mobile order: label, heading, intro → images → rest of the text. Desktop: images left, text right. */}
        <div className="relative order-2 mt-[32px] grid grid-cols-[529fr_362fr] gap-[3.5%] lg:order-none lg:mt-0 lg:h-full lg:min-h-[560px]">
          {/* Large portrait */}
          <div className="relative aspect-[529/685] overflow-hidden lg:aspect-auto lg:h-full rounded-[18px] sm:rounded-[28px]">
            <Image
              src="/DSC03790.JPG"
              alt="Smiling physiotherapist in the treatment room"
              fill
              sizes="(min-width: 1024px) 30vw, 58vw"
              className="object-cover object-[72%_50%]"
            />
          </div>

          {/* Two stacked images */}
          <div className="flex flex-col gap-[7.5%] lg:h-full lg:gap-[26px]">
            <div className="relative aspect-[362/305] overflow-hidden lg:aspect-auto lg:flex-[305] rounded-[18px] sm:rounded-[28px]">
              <Image
                src="/DSC03775.JPG"
                alt="Physiotherapist guiding a patient through an arm stretch"
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
            <div className="relative aspect-[362/353] overflow-hidden lg:aspect-auto lg:flex-[353] rounded-[18px] sm:rounded-[28px]">
              <Image
                src="/en-doc-1.JPG"
                alt="Physiotherapist checking a patient's shoulder posture"
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover object-[58%_40%]"
              />
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute left-[57.3%] top-[46%] z-10 flex aspect-square w-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-[#eef2e6] bg-[radial-gradient(circle_at_50%_40%,#3a4a2a_0%,#26301c_70%)] sm:border-[16px]">
            <div className="flex flex-col items-center text-center text-white">
              <span className="text-[clamp(20px,3.4vw,38px)] leading-none lg:text-[clamp(24px,2.2vw,38px)]">
                18+
              </span>
              <span className="mt-[8%] whitespace-nowrap text-[clamp(7px,1.6vw,14px)] font-medium uppercase leading-tight tracking-[0.01em] lg:mt-[18px] lg:text-[clamp(8px,0.72vw,14px)]">
                Years of Expertise
              </span>
            </div>
          </div>
        </div>

        {/* ================= TEXT ================= */}
        <div className="contents lg:flex lg:flex-col">
          <div className="order-1 flex flex-col lg:order-none">
          {/* Label */}
          <SectionLabel>About the Doctor</SectionLabel>

          {/* Heading */}
          <h2 className="mt-[24px] text-[#1c1f1a] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Meet Your <span className="text-[#6b8440]">Physiotherapy Expert</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-[10px] text-[16px] leading-[1.85] text-[#5b6055] sm:text-[18px]">
            Dr. Sweata Basnett is an experienced physiotherapist with over 11 years of expertise in sports,
            orthopedic, and post-operative rehabilitation. With an internationally recognised professional license in
            Texas, USA, she provides personalised physiotherapy care based on each patient&apos;s condition and
            recovery goals.
          </p>
          </div>

          <div className="order-3 flex flex-col lg:order-none">
          {/* Paragraph 2 */}
          <p className="mt-[28px] text-[16px] lg:mt-[10px] leading-[1.85] text-[#2b3320] sm:text-[18px]">
            Certified in Prenatal and Postnatal Pilates, Dr. Basnett brings a specialised approach to women&rsquo;s
            health and wellness. Her patient-focused care helps individuals manage pain, improve mobility, and work
            towards better recovery.
          </p>

          {/* Divider */}
          <span className="mt-[26px] block h-px w-full bg-[#d3dac6]" />

          {/* Author + signature */}
          {/* Name block keeps each line on one row; on narrow phones the signature drops below, right-aligned */}
          <div className="mt-[24px] flex flex-wrap items-center justify-between gap-x-6 gap-y-[6px]">
            <div className="flex min-w-0 items-center gap-[12px] sm:gap-[18px]">
              <div className="relative h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full ring-2 ring-white sm:h-[54px] sm:w-[54px]">
                <Image src="/DSC03787.JPG" alt="" fill sizes="54px" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.02em] text-[#4a4e45] sm:text-[14px]">
                  MPT (Master in Physiotherapy)
                </span>
                <span className="mt-[2px] whitespace-nowrap text-[16px] font-medium leading-tight text-[#1c1f1a] sm:text-[19px]">
                  Dr. Sweata Basnett
                </span>
              </div>
            </div>
          </div>

          {/* Button */}
          <a
            href="#appointment"
            className="group mt-[36px] inline-flex min-h-[64px] w-fit max-w-full items-center gap-[12px] whitespace-nowrap rounded-full bg-[#6b8440] py-[8px] pl-[22px] pr-[8px] text-[15px] font-medium leading-snug sm:gap-[24px] sm:pl-[42px] text-white ring-2 ring-[#90a863]/40 ring-offset-2 ring-offset-[#eef2e6] transition-colors duration-300 hover:bg-[#5d7437] sm:text-[20px]"
          >
            <span className="max-[340px]:hidden">Consult With Our Physiotherapist</span>
            <span className="hidden max-[340px]:inline">Book Your Consultation</span>
            <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#26301c] transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
