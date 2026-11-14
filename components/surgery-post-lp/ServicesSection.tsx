import Image from "next/image";
import BrandMark from "../BrandMark";

const conditions = [
  {
    title: "Joint Stiffness",
    text: "Your knee, hip or shoulder may feel stiff, making it difficult to bend, straighten or move comfortably.",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652065/Joint-Stiffnes.jpg",
    alt: "Physiotherapist easing a stiff knee and hip joint",
  },
  {
    title: "Reduced Range of Motion",
    text: "Everyday movements such as reaching, bending or changing positions may feel restricted after surgery.",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652058/en-images-1.jpg",
    alt: "Physiotherapist guiding a patient's arm through a range-of-motion movement",
  },
  {
    title: "Muscle Weakness",
    text: "Reduced activity during recovery can affect muscle strength, making standing, walking or lifting more challenging.",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652058/en-images-3.jpg",
    alt: "Physiotherapist stretching a patient's leg during strengthening work",
  },
  {
    title: "Difficulty Walking",
    text: "You may need support while walking or feel unsure about putting weight on the operated leg.",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652054/Difficulty-Walking.jpg",
    alt: "Physiotherapist guiding a patient's leg movement",
  },
  {
    title: "Balance & Stability Concerns",
    text: "Changes in strength and mobility can affect your confidence while standing, turning or moving around.",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652053/Balance.jpg",
    alt: "Therapist assessing a patient's posture and balance",
  },
  {
    title: "Difficulty with Daily Activities",
    text: "Getting out of bed, climbing stairs, dressing or completing household tasks may require additional effort or assistance.",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652056/Difficulty-with-Daily-Activities.jpg",
    alt: "Therapist supporting a patient's shoulder after surgery",
  },
];

type Condition = (typeof conditions)[number];

function ConditionCard({ condition, hidden = false }: { condition: Condition; hidden?: boolean }) {
  return (
    <div className="w-[292px] shrink-0 pr-[20px] sm:w-[330px] sm:pr-[24px] xl:w-[373px] xl:pr-[25px]" aria-hidden={hidden || undefined}>
      <a
        href="#appointment"
        tabIndex={hidden ? -1 : undefined}
        className="group flex h-full flex-col rounded-[22px] border border-[#e6e4de] bg-white p-[20px] transition-colors duration-300 hover:border-[#d6e6a3] hover:bg-[#eef6d4] xl:p-[23px]"
      >
        <div className="flex flex-1 flex-col rounded-[18px] bg-white">
          {/* Image with notch */}
          <div className="relative aspect-[302/422] w-full overflow-hidden rounded-[16px]">
            <Image
              src={condition.image}
              alt={hidden ? "" : condition.alt}
              fill
              sizes="(min-width: 1280px) 348px, (min-width: 640px) 306px, 272px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />

            {/* White bottom notch */}
            <div className="absolute -bottom-2 left-1/2 h-[54px] w-[188px] -translate-x-1/2">
              <svg
                viewBox="0 0 118 54"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M0 54C14 54 20 47 24 35 30 15 39 0 59 0 79 0 88 15 94 35 98 47 104 54 118 54Z"
                  fill="#fff"
                />
              </svg>
              <BrandMark className="absolute left-1/2 top-[17px] h-[34px] w-[36px] -translate-x-1/2" />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-1 flex-col items-center px-[10px] pb-[22px] pt-[18px] text-center xl:pb-[25px]">
            <h3 className="flex min-h-[2.5em] items-center text-[22px] font-semibold leading-[1.25] tracking-[-0.005em] text-[#1f2616] md:text-[24px]">
              {condition.title}
            </h3>
            <p className="mt-[8px] text-[16px] leading-[1.6] text-[#2b3320]/75 transition-colors duration-300 group-hover:text-[#2b3320]">
              {condition.text}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="how-physio-helps" className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#f8fbef] via-[#eef6d4] to-[#e1edbd] py-[22px] font-[family-name:var(--primary-font)] md:py-[26px] lg:py-[40px]">
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

      {/* Heading */}
      <div className="relative mx-auto w-full max-w-[1466px] px-5 text-center">
        <span className="text-[16px] font-semibold tracking-[-0.005em] md:text-[18px] text-[#6b8440]">
          Are You Facing These Challenges After Surgery?
        </span>
        <h2 className="mx-auto mt-[6px] max-w-[22em] text-[#1f2616] text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] md:text-[clamp(30px,3.4vw,40px)]">
          Are These Post-Surgery Challenges <span className="text-[#6b8440]">Holding You Back?</span>
        </h2>
      </div>

      {/* Auto-scrolling row (pauses on hover) */}
      <div className="group/marquee relative mt-[10px] overflow-hidden md:mt-[22px] lg:mt-[28px] motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,#000_60px,#000_calc(100%-60px),transparent)] md:[mask-image:linear-gradient(to_right,transparent,#000_100px,#000_calc(100%-100px),transparent)]">
        <div className="flex w-max animate-marquee items-stretch [animation-duration:36s] group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          {conditions.map((condition) => (
            <ConditionCard key={condition.title} condition={condition} />
          ))}
          {conditions.map((condition) => (
            <ConditionCard key={`${condition.title}-copy`} condition={condition} hidden />
          ))}
        </div>
      </div>

      {/* Important note */}
      <div className="relative mx-auto mt-[28px] w-full max-w-[1000px] px-5 md:mt-[30px]">
        <p className="flex items-start gap-[14px] rounded-[20px] border border-[#c3d957]/70 bg-white/80 px-[18px] py-[16px] text-[15px] leading-[1.65] text-[#2b3320]/85 md:px-[24px] md:py-[18px] md:text-[16px]">
          <span className="mt-[2px] flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
              <path d="M12 7v6M12 17.2h.01" />
            </svg>
          </span>
          <span>
            <strong className="font-semibold text-[#1f2616]">Important:</strong> Severe or worsening pain, fever, wound discharge, sudden swelling, chest pain or breathing difficulties require prompt medical assessment. Physiotherapy should not delay appropriate medical care.
          </span>
        </p>
      </div>
    </section>
  );
}
