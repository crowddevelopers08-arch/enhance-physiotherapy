import Image from "next/image";

/* size in px, position classes, float delay / duration in seconds */
const bubbles = [
  { size: 170, pos: "left-[2%] top-[6%]", delay: 0, dur: 9 },
  { size: 230, pos: "right-[3%] top-[10%]", delay: 1.8, dur: 11 },
  { size: 110, pos: "right-[10%] bottom-[8%]", delay: 3, dur: 10 },
];

export default function ChronicPainAbout() {
  return (
    <section id="doctors" className="relative isolate w-full overflow-hidden bg-[#f8fbef] px-5 py-[48px] font-[family-name:var(--primary-font)] text-[#2b3320] md:px-8 lg:py-[32px]">
      {/* ===== background design: floating bubbles ===== */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className={`bubble-float absolute rounded-full border border-white/80 ${b.pos}`}
            style={{
              width: b.size,
              height: b.size,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.dur}s`,
              background:
                "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 14%, rgba(195,217,87,0.30) 46%, rgba(107,132,64,0.14) 100%)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-[28px] lg:grid-cols-2 lg:gap-[40px]">
        {/* ================= IMAGE SIDE ================= */}
        <div className="relative order-2 mx-auto h-[480px] w-full max-w-[540px] sm:h-[560px] lg:order-1 lg:h-[600px]">
          {/* big pale leaf, top-left */}
          <span
            aria-hidden="true"
            className="absolute left-[4%] top-[8%] h-[64%] w-[58%] -rotate-[12deg] rounded-[70%_30%_62%_38%/58%_44%_56%_42%] bg-[#eaf6b9]"
          />
          {/* darker lime leaf, behind the right shoulder */}
          <span
            aria-hidden="true"
            className="absolute right-[10%] top-[2%] h-[56%] w-[34%] rotate-[14deg] rounded-[60%_40%_58%_42%/46%_54%_46%_54%] bg-[#c3d957]/45"
          />
          {/* thin outline ring */}
          <span
            aria-hidden="true"
            className="absolute bottom-[10%] left-[22%] h-[44%] w-[56%] rounded-full border border-[#90a863]/40"
          />

          {/* main photo, edges melt into the shapes so the figure stands out */}
          <div
            className="absolute inset-x-[8%] inset-y-0"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 58% 62% at 50% 46%, #000 60%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 58% 62% at 50% 46%, #000 60%, transparent 100%)",
            }}
          >
            <Image
              src="/DSC03790.JPG"
              alt="Our physiotherapist"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover object-[50%_20%]"
            />
          </div>

          {/* small round photos overlapping the figure */}
          <div className="absolute left-[2%] top-[9%] h-[112px] w-[112px] overflow-hidden rounded-full border-[6px] border-white bg-white sm:h-[136px] sm:w-[136px]">
            <Image src="/DSC03775.JPG" alt="Our physiotherapy team" fill sizes="136px" className="object-cover object-[78%_50%]" />
          </div>
          <div className="absolute bottom-[14%] right-[2%] h-[120px] w-[120px] overflow-hidden rounded-full border-[6px] border-white bg-white sm:h-[146px] sm:w-[146px]">
            <Image src="/en-doc-1.JPG" alt="Guided stretching session" fill sizes="146px" className="object-cover object-[50%_58%]" />
          </div>

          {/* dashed swirl accent */}
          <svg viewBox="0 0 120 120" className="absolute bottom-[2%] left-[0%] h-[104px] w-[104px] text-[#6b8440]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M12 88c10-26 38-34 52-18 12 14-4 30-18 22-12-8-4-28 16-34" strokeDasharray="2 7" />
            <circle cx="18" cy="96" r="4" fill="currentColor" stroke="none" />
          </svg>
        </div>

        {/* ================= TEXT SIDE ================= */}
        {/* Phone order: label + title, then the images, then the rest. Desktop: one text column beside the images. */}
        <div className="contents lg:order-2 lg:flex lg:flex-col lg:items-start lg:pl-[16px]">
          <div className="order-1 flex flex-col items-start">
            <span className="text-[16px] font-semibold tracking-[-0.005em] md:text-[18px] text-[#6b8440]">About the Physiotherapist</span>

            <h2 className="mt-[6px] max-w-[16em] text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] md:text-[clamp(30px,3.4vw,40px)] text-[#1f2616]">
              Meet the Physiotherapist <span className="text-[#6b8440]">Supporting Your Recovery</span>
            </h2>
          </div>

          <div className="order-3 flex flex-col items-start">
          <p className="mt-[22px] max-w-[540px] text-[16px] leading-[1.65] text-[#2b3320]/80 md:text-[17px]">
            Dr. Sweata Basnett is associated with Enhance Physiotherapy &amp; Wellness, where she provides personalised
            physiotherapy care tailored to individual patient needs. Patient testimonials highlight her experience in ACL
            rehabilitation, shoulder concerns, ankle ligament injuries and back-related conditions.
          </p>

          <p className="mt-[14px] max-w-[540px] text-[16px] leading-[1.65] text-[#2b3320]/80 md:text-[17px]">
            Her approach focuses on understanding each patient&apos;s condition, recommending suitable exercises and
            providing attentive guidance throughout rehabilitation. With an emphasis on individual progress and
            functional improvement, she helps patients work towards better movement, strength and confidence in daily
            activities.
          </p>

          <a
            href="#appointment"
            className="mt-[30px] flex min-h-[54px] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[16px] pr-[22px] text-[16px] font-medium text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white">
              <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden="true">
                <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            Book Your consultation
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
