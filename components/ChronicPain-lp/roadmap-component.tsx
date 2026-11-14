/* Black PNG icons tinted with the brand green via CSS mask */
function PngIcon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-[#4f6136] ${className}`}
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
}

/* ---------- steps (road runs 1 → 2 → 3 → 4 along one row) ---------- */
type Step = {
  title: string;
  text: string;
  icon: string;
  from: string; // panel gradient top
  to: string; // panel gradient bottom
  ribbon: string; // darker fold colour
  textColor: string;
  pos: string; // desktop position (percent of the 1210 x 680 artboard)
};

const steps: Step[] = [
  {
    title: "Comprehensive Physiotherapy Assessment",
    text: "Your physiotherapist reviews your pain history, symptoms, mobility and daily activities to understand your condition and identify possible contributing factors.",
    icon: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652065/phy-icons-1.png",
    from: "#d2e46b",
    to: "#b5cc47",
    ribbon: "#8fa233",
    textColor: "#2b3320",
    pos: "xl:left-[0%] xl:top-[5%]",
  },
  {
    title: "Personalised Management Plan",
    text: "A tailored plan is developed to address your needs, focusing on improving mobility, building strength and managing everyday discomfort.",
    icon: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652066/phy-icons-2.png",
    from: "#9fba5c",
    to: "#84a246",
    ribbon: "#61792f",
    textColor: "#1f2616",
    pos: "xl:left-[25.676%] xl:top-[5%]",
  },
  {
    title: "Guided Physiotherapy Sessions",
    text: "Sessions may include supervised exercises, movement training, manual therapy and pain management guidance based on your condition and tolerance.",
    icon: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652066/phy-icons-3.png",
    from: "#5f7c39",
    to: "#46602d",
    ribbon: "#32461f",
    textColor: "#ffffff",
    pos: "xl:left-[51.351%] xl:top-[5%]",
  },
  {
    title: "Progress Monitoring & Self-Management",
    text: "Your progress is regularly reviewed, with adjustments to your rehabilitation plan and guidance on suitable exercises for ongoing self-management.",
    icon: "https://res.cloudinary.com/b5lvyi64/image/upload/v1794652066/phy-icons-4.png",
    from: "#3a4a28",
    to: "#2b3320",
    ribbon: "#1a2112",
    textColor: "#ffffff",
    pos: "xl:left-[77.027%] xl:top-[5%]",
  },
];

function StepCard({ step }: { step: Step }) {
  const { title, text, icon, from, to, ribbon, textColor, pos } = step;
  return (
    <li
      className={`relative mx-auto h-[430px] w-[340px] max-w-full xl:absolute xl:mx-0 xl:h-[90%] xl:w-[22.973%] ${pos}`}
    >
      {/* folded ribbon the road runs through */}
      <span
        aria-hidden="true"
        className="absolute -left-[4.1%] top-[40.83%] h-[10.56%] w-[108.2%] rounded-t-[10px] shadow-[inset_0_-6px_8px_rgba(0,0,0,0.25)]"
        style={{ background: `linear-gradient(180deg, ${ribbon}, ${ribbon}cc)` }}
      />

      {/* coloured text panel */}
      <div
        className="absolute inset-x-0 bottom-0 top-[51.39%] rounded-b-[14px] px-[7%] pt-[9%] text-center shadow-[0_10px_18px_rgba(0,0,0,0.22)]"
        style={{ background: `linear-gradient(180deg, ${from}, ${to})`, color: textColor }}
      >
        <p className="text-[16px] leading-[1.65] md:text-[17px] xl:text-[1.04cqw]">{text}</p>
      </div>

      {/* grey tab with icon + title */}
      <div className="absolute left-[5%] top-0 flex h-[51.39%] w-[90%] flex-col items-center justify-center gap-[8px] rounded-t-[12px] bg-gradient-to-b from-[#fbfbfb] to-[#d9d9d9] px-[10px] pb-[28px] pt-[14px] text-center text-[#2b3320] shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
        <PngIcon src={icon} className="h-[66px] w-[66px] xl:h-[3.7cqw] xl:w-[3.7cqw]" />
        <span className="text-[22px] font-semibold leading-[1.25] tracking-[-0.005em] md:text-[24px] xl:text-[1.47cqw]">
          {title}
        </span>
      </div>

      {/* round notch where the tab meets the panel */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[51.39%] w-[12%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#e9e9e9] to-[#cfcfcf] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.12)]"
        style={{ aspectRatio: "1 / 1" }}
      />
    </li>
  );
}

export default function ChronicPainRoadmap() {
  return (
    <section id="treatment-roadmap" className="w-full bg-white px-5 py-[40px] font-[family-name:var(--primary-font)] text-[#2b3320] md:px-8 lg:py-[56px] xl:py-[24px]">
      <div className="mx-auto w-full max-w-[1520px] text-center">
        {/* heading */}
        <p className="mx-auto max-w-[40em] text-[16px] font-semibold tracking-[-0.005em] text-[#6b8440] md:text-[18px]">Our Personalised Chronic Pain Management Approach</p>
        <h2 className="mx-auto mt-[6px] max-w-[22em] text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] text-[#1f2616] md:text-[clamp(30px,3.4vw,40px)]">
          A Step-by-Step Approach to Managing Persistent Pain
        </h2>

        {/* artboard: one row of four cards on wide screens, stacked cards below */}
        <div className="mt-[32px] [container-type:inline-size] xl:relative xl:mx-auto xl:mt-[16px] xl:aspect-[1480/400] xl:w-full">
          {/* the road */}
          <svg
            viewBox="-200 0 1880 400"
            className="absolute left-[-13.51%] top-0 hidden h-full w-[127.03%] max-w-none overflow-visible xl:block"
            aria-hidden="true"
          >
            <path
              d="M-200 194H1680"
              fill="none"
              stroke="#111"
              strokeWidth="34"
            />
            <path
              d="M-200 194H1680"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeDasharray="13 10"
              strokeLinecap="butt"
              className="road-dashes"
            />
            {/* lime dot that drives round the road */}
            <g className="road-dot">
              <circle r="15" fill="#c3d957" opacity="0.28">
                <animateMotion dur="11s" repeatCount="indefinite" path="M-200 194H1680" />
              </circle>
              <circle r="7" fill="#c3d957">
                <animateMotion dur="11s" repeatCount="indefinite" path="M-200 194H1680" />
              </circle>
            </g>
          </svg>

          <ol className="relative grid list-none grid-cols-1 gap-x-[56px] gap-y-[40px] md:grid-cols-2 xl:absolute xl:inset-0 xl:block">
            {steps.map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
