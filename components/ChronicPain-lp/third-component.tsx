import Image from "next/image";
import BrandMark from "../BrandMark";

type Point = { title: string; text: string };

const leftPoints: Point[] = [
  {
    title: "Difficulty Sitting or Standing",
    text: "Staying seated for long periods or standing during routine tasks may increase discomfort and require frequent changes in position.",
  },
  {
    title: "Pain During Everyday Movement",
    text: "Bending, lifting, climbing stairs or reaching overhead may become challenging, even when these movements were previously part of your normal routine.",
  },
];

const rightPoints: Point[] = [
  {
    title: "Sleep Disturbances Related to Pain",
    text: "Persistent discomfort can make finding a comfortable sleeping position difficult, affecting sleep quality and how rested you feel the next day.",
  },
  {
    title: "Reduced Mobility & Activity Levels",
    text: "You may find yourself walking less, avoiding exercise or limiting social activities because movement feels uncomfortable or tiring.",
  },
];

function PointBlock({ point, align }: { point: Point; align: "left" | "right" }) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <h3 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.005em] text-[#2b3320] md:text-[24px]">
        {point.title}
      </h3>
      <p className="mt-[clamp(12px,2svh,18px)] text-[16px] leading-[1.65] text-[#2b3320]/80 md:text-[17px]">{point.text}</p>
    </div>
  );
}

export default function TeamSectioned() {
  return (
    <section
      id="daily-life-impact"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#f8fbef] via-[#eef6d4] to-[#e1edbd] lg:h-[min(100svh,800px)] lg:min-h-[560px] font-[family-name:var(--primary-font)] text-[#2b3320] px-0 py-10 lg:px-15"
    >
      {/* ===== background design ===== */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* dotted grid, fading toward the middle */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: "radial-gradient(rgba(107,132,64,0.28) 1.4px, transparent 1.6px)",
            backgroundSize: "26px 26px",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, transparent 25%, #000 85%)",
            maskImage: "radial-gradient(ellipse at 50% 50%, transparent 25%, #000 85%)",
          }}
        />
        {/* concentric rings, top-left and bottom-right */}
        <svg viewBox="0 0 600 600" className="absolute -left-[180px] -top-[220px] h-[560px] w-[560px] text-[#6b8440]" fill="none" stroke="currentColor">
          <circle cx="300" cy="300" r="120" strokeWidth="1.5" opacity="0.28" />
          <circle cx="300" cy="300" r="180" strokeWidth="1.5" opacity="0.22" />
          <circle cx="300" cy="300" r="240" strokeWidth="1.5" opacity="0.16" />
          <circle cx="300" cy="300" r="295" strokeWidth="1.5" opacity="0.1" />
        </svg>
        <svg viewBox="0 0 600 600" className="absolute -bottom-[240px] -right-[200px] h-[620px] w-[620px] text-[#6b8440]" fill="none" stroke="currentColor">
          <circle cx="300" cy="300" r="120" strokeWidth="1.5" opacity="0.28" />
          <circle cx="300" cy="300" r="180" strokeWidth="1.5" opacity="0.22" />
          <circle cx="300" cy="300" r="240" strokeWidth="1.5" opacity="0.16" />
          <circle cx="300" cy="300" r="295" strokeWidth="1.5" opacity="0.1" />
        </svg>
        {/* soft lime glows */}
        <div className="absolute left-[8%] top-[18%] h-[260px] w-[260px] rounded-full bg-[#c3d957]/30 blur-[90px]" />
        <div className="absolute bottom-[6%] right-[10%] h-[300px] w-[300px] rounded-full bg-[#90a863]/25 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1880px] grid-cols-1 items-end gap-y-[40px] px-5 pt-[10px] pb-[0px] md:grid-cols-2 md:gap-x-[40px] md:px-8 lg:h-full lg:grid-cols-[minmax(0,1fr)_568px_minmax(0,1fr)] lg:gap-x-[97px] lg:gap-y-0 lg:px-8 lg:pb-0">
        {/* ================= ARCH ================= */}
        <div className="relative order-1 mx-auto h-[480px] w-full max-w-[568px] overflow-hidden rounded-t-[284px] rounded-b-[30px] bg-[#2b3320] sm:h-[560px] md:col-span-2 lg:order-2 lg:col-span-1 lg:h-auto lg:self-stretch">
          <Image
            src="https://res.cloudinary.com/b5lvyi64/image/upload/v1794652406/pain-management.jpg"
            alt="Physiotherapist treating a patient for chronic pain"
            fill
            sizes="(min-width: 1024px) 568px, 90vw"
            className="object-cover object-[40%_35%]"
          />
          {/* Brand green fades into the photo at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2b3320] from-[38%] via-[#2b3320]/80 via-[52%] to-[#2b3320]/10" />

          <div className="relative z-10 flex h-full flex-col items-center px-4 pt-[64px] sm:px-8 text-center text-white sm:pt-[76px] lg:pt-[clamp(40px,9svh,96px)]">
            <BrandMark className="h-[30px] w-[32px]" />

            <span className="mt-[34px] text-balance text-[16px] font-semibold tracking-[-0.005em] md:text-[18px] text-white sm:mt-[40px] lg:mt-[clamp(24px,5.5svh,58px)]">
              Chronic Pain Affecting Daily Life?
            </span>

            <h2
              className="mt-[26px] max-w-[12em] text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] md:text-[clamp(30px,3.4vw,40px)] sm:mt-[32px] lg:mt-[clamp(20px,4.5svh,48px)]"
            >
              Don&apos;t Let Recurring Pain Take Over Your Daily Routine
            </h2>

            <a
              href="#appointment"
              className="mt-auto mb-[28px] flex min-h-[54px] items-center gap-[12px] whitespace-nowrap rounded-full bg-white py-[10px] pl-[16px] pr-[22px] text-[16px] font-medium text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5 lg:mb-[clamp(24px,6svh,64px)]"
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

        {/* ================= LEFT COLUMN ================= */}
        <div className="order-2 flex flex-col gap-[34px] sm:mx-auto sm:max-w-[560px] md:mx-0 md:max-w-none lg:order-1 lg:mx-0 lg:mb-[clamp(24px,6.5svh,60px)] lg:ml-auto lg:max-w-[430px] lg:gap-[clamp(24px,5.5svh,56px)]">
          {leftPoints.map((p) => (
            <div key={p.title} className="lg:hidden">
              <PointBlock point={p} align="left" />
            </div>
          ))}
          {leftPoints.map((p) => (
            <div key={`d-${p.title}`} className="hidden lg:block">
              <PointBlock point={p} align="left" />
            </div>
          ))}
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="order-3 flex flex-col gap-[34px] sm:mx-auto sm:max-w-[560px] md:mx-0 md:max-w-none lg:mx-0 lg:mb-[clamp(24px,6.5svh,60px)] lg:mr-auto lg:max-w-[430px] lg:gap-[clamp(24px,5.5svh,56px)]">
          {rightPoints.map((p) => (
            <PointBlock key={p.title} point={p} align="left" />
          ))}
        </div>
      </div>
    </section>
  );
}
