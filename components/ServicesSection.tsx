import Image from "next/image";
import BrandMark from "./BrandMark";
import SectionLabel from "./SectionLabel";

const conditions = [
  {
    title: "Neuro Rehabilitation",
    description: "Support for neurological conditions with guided therapy to improve movement, balance, and daily function.",
    image: "/conditions/neuro-rehabilitation.jpg",
    alt: "Physiotherapist guiding a patient's arm movement",
  },
  {
    title: "Orthopedic Rehabilitation",
    description: "Personalised care for bone, joint, muscle, and spine-related conditions to improve mobility and recovery.",
    image: "/conditions/orthopedic-rehabilitation.jpg",
    alt: "Physiotherapist mobilising a patient's hip and leg",
  },
  {
    title: "Pain Management",
    description: "Guided physiotherapy techniques to help manage acute and chronic pain conditions.",
    image: "/conditions/pain-management.jpg",
    alt: "Therapist applying kinesiology tape to a patient's lower back",
  },
  {
    title: "Home Physiotherapy",
    description: "Professional physiotherapy sessions delivered at your home for convenient and comfortable recovery.",
    image: "/conditions/home-physiotherapy.jpg",
    alt: "Physiotherapist treating a patient in a comfortable home setting",
  },
  {
    title: "Sports Physiotherapy",
    description: "Rehabilitation support for sports injuries, improving strength, mobility, and performance.",
    image: "/conditions/sports-physiotherapy.jpg",
    alt: "Physiotherapist stretching a patient's leg during sports rehab",
  },
  {
    title: "Women's Health Physiotherapy",
    description: "Specialised care for women’s health concerns and recovery needs.",
    image: "/conditions/womens-health.jpg",
    alt: "Smiling female patient with her physiotherapist",
  },
  {
    title: "Post-Operative Rehabilitation & Prehabilitation",
    description: "Structured support before and after surgery to improve strength, movement, and recovery.",
    image: "/conditions/post-operative-rehabilitation.jpg",
    alt: "Therapist applying support tape to a patient's shoulder",
  },
  {
    title: "General Physiotherapy",
    description: "Support for improving flexibility, strength, posture, and overall physical wellness.",
    image: "/conditions/general-physiotherapy.jpg",
    alt: "Therapist assessing a patient's shoulder posture",
  },
  {
    title: "Nutrition & Diet",
    description: "Personalised nutrition guidance to support recovery, wellness, and healthy lifestyle goals.",
    image: "/conditions/nutrition-diet.jpg",
    alt: "Healthy bowl of fresh vegetables and grains",
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
            <h3 className="flex min-h-[2.6em] items-center text-[20px] font-medium leading-[1.3] text-[#1c1f1a] xl:text-[22px]">
              {condition.title}
            </h3>
            <span className="mt-[18px] hidden h-px w-[46px] bg-[#dcdcd4] sm:block" />
            <p className="mt-[10px] max-w-[280px] sm:mt-[20px] text-[15px] leading-[26px] text-[#3a3d36] transition-colors duration-300 group-hover:text-[#6b8440] xl:text-[16px]">
              {condition.description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="conditions" className="w-full bg-[#f2f1ed] py-[22px] font-sans md:py-[26px] lg:py-[40px] lg:mt-10">
      {/* Heading */}
      <div className="mx-auto w-full max-w-[1466px] px-5 text-center">
        <SectionLabel centered>Conditions We Help With</SectionLabel>
        <h2 className="mx-auto mt-[14px] max-w-[18em] text-[#1c1f1a] lg:mt-[16px] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
          Physiotherapy Support For <span className="text-[#6b8440]">Different Pain &amp; Mobility Conditions</span>
        </h2>
      </div>

      {/* Auto-scrolling row (pauses on hover) */}
      <div className="group/marquee relative mt-[10px] overflow-hidden md:mt-[22px] lg:mt-[28px] motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-marquee items-stretch group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          {conditions.map((condition) => (
            <ConditionCard key={condition.title} condition={condition} />
          ))}
          {conditions.map((condition) => (
            <ConditionCard key={`${condition.title}-copy`} condition={condition} hidden />
          ))}
        </div>

        {/* Soft edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[40px] bg-gradient-to-r from-[#f2f1ed] to-transparent md:w-[80px]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[40px] bg-gradient-to-l from-[#f2f1ed] to-transparent md:w-[80px]" />
      </div>

      {/* CTA */}
      <div className="mt-[40px] flex justify-center px-5 md:mt-[22px]">
        <a
          href="#appointment"
          className="flex min-h-[54px] items-center gap-[10px] whitespace-nowrap rounded-full bg-[#c3d957] py-[10px] pl-[10px] pr-[18px] text-left text-[14px] font-medium leading-snug text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5 sm:gap-[12px] sm:pl-[16px] sm:pr-[22px] sm:text-[17px] 2xl:min-h-[60px] 2xl:pl-[20px] 2xl:pr-[24px] 2xl:text-[18px]"
        >
          <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white">
            <svg viewBox="0 0 16 16" className="h-[14px] w-[14px]" aria-hidden="true">
              <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="max-[340px]:hidden">Book Your Physiotherapy Consultation</span>
          <span className="hidden max-[340px]:inline">Book Your Consultation</span>
        </a>
      </div>
    </section>
  );
}
