import Image from "next/image";
import type { ReactNode } from "react";

/* ---------- icons ---------- */
const iconProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ClinicIcon = () => (
  <svg {...iconProps} className="h-[30px] w-[30px]">
    <path d="M5 27V9l11-5 11 5v18" />
    <path d="M3 27h26" />
    <path d="M16 11v8M12 15h8" />
    <path d="M13 27v-5h6v5" />
  </svg>
);

const HomeIcon = () => (
  <svg {...iconProps} className="h-[30px] w-[30px]">
    <path d="M4 15 16 5l12 10" />
    <path d="M7 13v14h18V13" />
    <path d="M16 24c-3-2-4.5-3.6-4.5-5.4a2.6 2.6 0 0 1 4.5-1.6 2.6 2.6 0 0 1 4.5 1.6C20.5 20.4 19 22 16 24Z" />
  </svg>
);

function CheckBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full ${
        dark ? "bg-[#2b3320] text-[#c3d957]" : "bg-[#6b8440] text-white"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

/* ---------- content ---------- */
type Option = {
  tag: string;
  title: string;
  text: string;
  benefits: string[];
  image: string;
  alt: string;
  position: string;
  icon: ReactNode;
  card: string; // card colours
  dark: boolean;
};

const options: Option[] = [
  {
    tag: "At Our Clinic",
    title: "Clinic-Based Physiotherapy",
    text: "Receive supervised physiotherapy sessions at our clinic, with guided exercises, movement training and personalised rehabilitation support tailored to your condition.",
    benefits: ["Supervised physiotherapy sessions", "Access to suitable clinical facilities", "Structured rehabilitation guidance"],
    image: "/hero.webp",
    alt: "Physiotherapist assessing a patient's posture in the clinic",
    position: "50% 35%",
    icon: <ClinicIcon />,
    card: "bg-white",
    dark: false,
  },
  {
    tag: "At Your Home",
    title: "Home Physiotherapy",
    text: "Get professional physiotherapy support at home with guided exercises and personalised care, subject to clinical suitability, location and service availability.",
    benefits: ["Convenient care at home", "Personalised exercise guidance", "Reduced need for travel"],
    image: "/home-physiotherapy-cost-bangalore.png",
    alt: "Physiotherapist treating a patient at home",
    position: "50% 45%",
    icon: <HomeIcon />,
    card: "bg-[#c3d957]",
    dark: true,
  },
];

export default function CareOptions() {
  return (
    <section
      id="clinic-and-home-care"
      className="relative isolate w-full overflow-hidden bg-[#2b3320] px-5 py-[36px] font-[family-name:var(--primary-font)] text-white md:px-8 lg:py-[52px]"
    >
      {/* background glows + faint rings */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[120px] -top-[120px] h-[420px] w-[420px] rounded-full bg-[#6b8440]/40 blur-[110px]" />
        <div className="absolute -bottom-[140px] -right-[100px] h-[460px] w-[460px] rounded-full bg-[#c3d957]/20 blur-[120px]" />
        <svg viewBox="0 0 600 600" className="absolute -right-[180px] -top-[200px] h-[560px] w-[560px] text-white" fill="none" stroke="currentColor">
          <circle cx="300" cy="300" r="140" strokeWidth="1.2" opacity="0.1" />
          <circle cx="300" cy="300" r="200" strokeWidth="1.2" opacity="0.08" />
          <circle cx="300" cy="300" r="260" strokeWidth="1.2" opacity="0.06" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1240px]">
        {/* heading */}
        <div className="text-center">
          <span className="text-[16px] font-semibold tracking-[-0.005em] text-[#c3d957] md:text-[18px]">
            Clinic-Based &amp; Home Physiotherapy
          </span>
          <h2 className="mx-auto mt-[6px] max-w-[18em] text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] text-white md:text-[clamp(30px,3.4vw,40px)]">
            Physiotherapy Care at <span className="text-[#c3d957]">Our Clinic or Your Home</span>
          </h2>
        </div>

        {/* cards */}
        <div className="relative mt-[24px] grid grid-cols-1 gap-[16px] lg:mt-[30px] lg:grid-cols-2 lg:gap-[24px]">
          {options.map((o) => (
            <article
              key={o.title}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] p-[14px] transition-transform duration-300 hover:-translate-y-1 ${o.card}`}
            >
              {/* photo */}
              <div className="relative h-[190px] w-full overflow-hidden rounded-[20px] sm:h-[210px]">
                <Image
                  src={o.image}
                  alt={o.alt}
                  fill
                  sizes="(min-width: 1024px) 590px, 92vw"
                  style={{ objectPosition: o.position }}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2616]/55 via-transparent to-transparent" />
                <span className="absolute left-[14px] top-[14px] rounded-full bg-white/90 px-[14px] py-[7px] text-[13px] font-semibold tracking-[0.02em] text-[#2b3320]">
                  {o.tag}
                </span>
              </div>

              {/* round icon badge overlapping the photo */}
              <span
                className={`relative z-10 -mt-[34px] ml-[22px] flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] ${
                  o.dark ? "border-[#c3d957] bg-[#2b3320] text-[#c3d957]" : "border-white bg-[#6b8440] text-white"
                }`}
              >
                {o.icon}
              </span>

              {/* text */}
              <div className="flex flex-1 flex-col px-[12px] pb-[10px] pt-[10px] sm:px-[18px]">
                <h3 className={`text-[22px] font-semibold leading-[1.25] tracking-[-0.005em] md:text-[24px] ${o.dark ? "text-[#1f2616]" : "text-[#2b3320]"}`}>
                  {o.title}
                </h3>
                <p className={`mt-[8px] text-[16px] leading-[1.65] md:text-[17px] ${o.dark ? "text-[#2b3320]/85" : "text-[#2b3320]/75"}`}>
                  {o.text}
                </p>

                <div className={`mt-[14px] border-t pt-[14px] ${o.dark ? "border-[#2b3320]/20" : "border-[#2b3320]/10"}`}>
                  <p className={`text-[14px] font-semibold uppercase tracking-[0.14em] ${o.dark ? "text-[#2b3320]" : "text-[#6b8440]"}`}>
                    Key Benefits
                  </p>
                  <ul className="mt-[10px] flex flex-col gap-[9px]">
                    {o.benefits.map((b) => (
                      <li key={b} className={`flex items-center gap-[12px] text-[16px] font-medium md:text-[17px] ${o.dark ? "text-[#1f2616]" : "text-[#2b3320]"}`}>
                        <CheckBadge dark={o.dark} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          {/* "or" badge between the cards on desktop */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-20 hidden h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-[#2b3320] bg-white text-[16px] font-bold uppercase text-[#6b8440] lg:flex"
          >
            or
          </span>
        </div>

        {/* CTA */}
        <div className="mt-[24px] flex justify-center lg:mt-[28px]">
          <a
            href="#appointment"
            className="flex min-h-[54px] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[16px] pr-[22px] text-[16px] font-medium text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5"
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
