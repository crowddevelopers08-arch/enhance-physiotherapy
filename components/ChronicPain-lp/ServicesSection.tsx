import Image from "next/image";
import BrandMark from "../BrandMark";

const conditions = [
  {
    title: "Improving Joint Mobility",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652058/en-images-1.jpg",
    alt: "Physiotherapist guiding a patient's arm through a mobility movement",
  },
  {
    title: "Building Muscle Strength",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652058/en-images-3.jpg",
    alt: "Physiotherapist stretching a patient's leg during strengthening work",
  },
  {
    title: "Improving Movement Confidence",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652064/improving.webp",
    alt: "Smiling patient with her physiotherapist",
  },
  {
    title: "Supporting Everyday Function",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652403/general-physiotherapy.jpg",
    alt: "Therapist assessing a patient's posture and shoulder movement",
  },
  {
    title: "Learning Pain Management Strategies",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652070/pain-managament.svg",
    alt: "Therapist applying kinesiology tape to a patient's lower back",
  },
  {
    title: "Encouraging Long-Term Self-Management",
    image: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652404/home-physiotherapy.jpg",
    alt: "Physiotherapist guiding a patient through a leg exercise",
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
          <div className="flex flex-col items-center px-[10px] pb-[22px] pt-[18px] text-center xl:pb-[25px]">
            <h3 className="flex min-h-[2.6em] items-center text-[22px] font-semibold leading-[1.25] tracking-[-0.005em] text-[#1f2616] md:text-[24px]">
              {condition.title}
            </h3>
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
          How Can Physiotherapy Help Manage Chronic Pain?
        </span>
        <h2 className="mx-auto mt-[6px] max-w-[22em] text-[#1f2616] text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] md:text-[clamp(30px,3.4vw,40px)]">
          How Physiotherapy Supports <span className="text-[#6b8440]">Better Movement</span>
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

      {/* CTA */}
      <div className="relative mt-[40px] flex justify-center px-5 md:mt-[22px]">
        <a
          href="#appointment"
          className="flex min-h-[54px] items-center gap-[10px] whitespace-nowrap rounded-full bg-[#c3d957] py-[10px] pl-[10px] pr-[18px] text-left text-[14px] font-medium leading-snug text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5 sm:gap-[12px] sm:pl-[16px] sm:pr-[22px] sm:text-[17px] 2xl:min-h-[60px] 2xl:pl-[20px] 2xl:pr-[24px] 2xl:text-[18px]"
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
