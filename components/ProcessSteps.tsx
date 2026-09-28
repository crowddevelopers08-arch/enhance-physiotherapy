type IconProps = { className?: string };

const iconBase = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const CalendarIcon = ({ className }: IconProps) => (
  <svg {...iconBase} className={className}>
    <rect x="7" y="10" width="34" height="31" rx="4" />
    <path d="M7 19h34M16 6v8M32 6v8" />
    <path d="M18 30l4 4 8-8" />
  </svg>
);

const HomeVisitIcon = ({ className }: IconProps) => (
  <svg {...iconBase} className={className}>
    <path d="M5 22L24 6l19 16" />
    <path d="M10 18v23h28V18" />
    <circle cx="24" cy="25" r="4.5" />
    <path d="M16 41c0-4.8 3.6-8.5 8-8.5s8 3.7 8 8.5" />
  </svg>
);

const PlanIcon = ({ className }: IconProps) => (
  <svg {...iconBase} className={className}>
    <rect x="10" y="8" width="28" height="34" rx="3" />
    <path d="M18 5h12v6H18z" />
    <path d="M16 21l2.5 2.5L23 19M27 21h6M16 32l2.5 2.5L23 30M27 32h6" />
  </svg>
);

const TargetIcon = ({ className }: IconProps) => (
  <svg {...iconBase} className={className}>
    <circle cx="22" cy="26" r="16" />
    <circle cx="22" cy="26" r="9.5" />
    <circle cx="22" cy="26" r="3" />
    <path d="M22 26L38 10M32 10h6v6" />
  </svg>
);

const steps = [
  {
    number: "01",
    title: "Assessment",
    description: "Our physiotherapist understands your pain, medical history, mobility concerns, and recovery goals.",
    color: "#9aab86",
    light: "#c3cfb4",
    Icon: HomeVisitIcon,
  },
  {
    number: "02",
    title: "Personalised Treatment Plan",
    description: "Based on your assessment, a suitable physiotherapy plan is created according to your needs.",
    color: "#90a863",
    light: "#b9cb96",
    Icon: PlanIcon,
  },
  {
    number: "03",
    title: "Home Physiotherapy Sessions",
    description: "Receive guided exercises, rehabilitation support, and therapy sessions at your home.",
    color: "#9fb838",
    light: "#d2e37f",
    Icon: CalendarIcon,
  },
  {
    number: "04",
    title: "Progress Monitoring",
    description: "Your progress is reviewed regularly to ensure your treatment approach matches your recovery needs.",
    color: "#6b8440",
    light: "#9db371",
    Icon: TargetIcon,
  },
];

/* Ring made of two arcs (top + bottom) leaving gaps where the road passes through */
function Ring({ color, light }: { color: string; light: string }) {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full rotate-90 md:rotate-0" aria-hidden="true">
      <path d="M14.7 65.5A92 92 0 0 1 185.3 65.5" fill="none" stroke={color} strokeWidth="13" />
      <path d="M185.3 134.5A92 92 0 0 1 14.7 134.5" fill="none" stroke={color} strokeWidth="13" />
      <path d="M26 60A82 82 0 0 1 174 60" fill="none" stroke={light} strokeWidth="4" opacity="0.7" />
      <path d="M174 140A82 82 0 0 1 26 140" fill="none" stroke={light} strokeWidth="4" opacity="0.7" />
    </svg>
  );
}

export default function ProcessSteps() {
  return (
    <section id="how-it-works" className="w-full overflow-hidden bg-white px-5 py-[32px] font-sans md:py-[36px]">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2b3320] md:text-[13px]">
            How Home Visits Work
          </span>
          <span className="mt-[8px] block h-[2px] w-[56px] rounded-full bg-[#90a863]" />
          <h2 className="mt-[18px] max-w-[20em] text-[#1c1f1a] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Simple Steps To Begin Your <span className="text-[#6b8440]">Physiotherapy Recovery At Home</span>
          </h2>
        </div>

        {/* Steps */}
        <ol className="mt-[48px] grid grid-cols-1 md:mt-[38px] md:grid-cols-4 md:px-8">
          {steps.map((step, i) => {
            const first = i === 0;
            const last = i === steps.length - 1;

            // Mobile: vertical road through the circles. Desktop: horizontal road through circle centres.
            const road = first
              ? "top-[-16px] bottom-0 rounded-t-full md:-left-8 md:right-0 md:rounded-tr-none md:rounded-bl-full"
              : last
                ? "top-0 h-[140px] rounded-b-full md:left-0 md:-right-8 md:rounded-bl-none md:rounded-tr-full"
                : "top-0 bottom-0 md:left-0 md:right-0";

            return (
              <li
                key={step.number}
                className="relative grid grid-cols-[120px_1fr] items-start gap-x-6 pb-[44px] last:pb-0 md:flex md:flex-col md:items-center md:gap-x-0 md:pb-0 md:text-center"
              >
                {/* Road segment */}
                <div
                  aria-hidden="true"
                  className={`absolute left-[60px] z-0 w-[20px] -translate-x-1/2 bg-[#3b3d38] md:top-[140px] md:bottom-auto md:h-[22px] md:w-auto md:translate-x-0 ${road}`}
                >
                  {/* dashed centre line */}
                  <span className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-[repeating-linear-gradient(180deg,#fff_0_8px,transparent_8px_15px)] md:hidden" />
                  <span className="absolute inset-x-0 top-1/2 hidden h-[2px] -translate-y-1/2 bg-[repeating-linear-gradient(90deg,#fff_0_10px,transparent_10px_18px)] md:block" />
                </div>

                {/* Step label (desktop, above circle) */}
                <div className="hidden h-[58px] flex-col items-center md:mb-[8px] md:flex">
                  <span className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: step.color }}>
                    Step
                  </span>
                  <span className="text-[28px] font-bold leading-none" style={{ color: step.color }}>
                    {step.number}
                  </span>
                </div>

                {/* Circle */}
                <div className="relative z-10 h-[120px] w-[120px] md:h-[170px] md:w-[170px]">
                  <Ring color={step.color} light={step.light} />
                  <div className="absolute inset-[13%] flex items-center justify-center rounded-full bg-white shadow-[5px_8px_16px_rgba(35,40,28,0.22)]">
                    <div
                      className="flex h-[76%] w-[76%] items-center justify-center rounded-full shadow-[inset_-3px_-4px_8px_rgba(0,0,0,0.12)]"
                      style={{ background: `linear-gradient(145deg, ${step.light} 0%, ${step.color} 70%)` }}
                    >
                      <step.Icon className="h-[46%] w-[46%] text-white" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="pt-[10px] md:mt-[22px] md:px-3 md:pt-0">
                  <span className="mb-[6px] block text-[12px] font-bold uppercase tracking-[0.18em] md:hidden" style={{ color: step.color }}>
                    Step {step.number}
                  </span>
                  <h3 className="text-[19px] font-bold leading-tight md:text-[20px]" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className="mt-[8px] max-w-[250px] text-[14px] leading-[1.55] text-[#4a4e45] md:mx-auto md:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* CTA */}
        <div className="mt-[48px] flex justify-center md:mt-[30px]">
          <a
            href="#appointment"
            className="flex min-h-[54px] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[14px] pr-[22px] text-[15px] font-medium leading-snug text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5 sm:whitespace-nowrap sm:pl-[16px] sm:text-[17px] 2xl:min-h-[60px] 2xl:pl-[20px] 2xl:pr-[24px] 2xl:text-[18px]"
          >
            <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white">
              <svg viewBox="0 0 16 16" className="h-[14px] w-[14px]" aria-hidden="true">
                <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="max-[340px]:hidden">Schedule Your Home Visit Today</span>
            <span className="hidden max-[340px]:inline">Book Your Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
