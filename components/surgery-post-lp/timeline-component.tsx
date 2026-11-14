/* Black PNG icons, coloured with the surrounding text colour via CSS mask */
function PngIcon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block bg-current ${className}`}
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

/* ---------- stages, in order along the timeline (above, below, above, below, above, below) ---------- */
type Stage = {
  label: string;
  title: string;
  icon: string;
  color: string; // flag + circle
  ink: string; // text colour on that colour
  iconInk?: string; // icon colour, when it should differ from the text
  side: "top" | "bottom";
  // desktop positions (percent of the artboard)
  flag: string;
  pole: string;
  circle: string;
  copy: string;
};

const stages: Stage[] = [
  {
    label: "Knee",
    title: "Knee Replacement Rehabilitation",
    icon: "/ps-icon-1.png",
    color: "#c3d957",
    ink: "#2b3320",
    iconInk: "#ffffff",
    side: "top",
    flag: "left-[5.54%] top-[43.5%]",
    pole: "left-[5.54%] top-[35.5%]",
    circle: "left-[1.7%] top-[8%]",
    copy: "left-[11.79%] top-[8.5%]",
  },
  {
    label: "Hip",
    title: "Hip Replacement Rehabilitation",
    icon: "/ps-icon-2.png",
    color: "#9fba5c",
    ink: "#2b3320",
    iconInk: "#ffffff",
    side: "bottom",
    flag: "left-[20%] top-[43.5%]",
    pole: "left-[32.5%] top-[57.5%]",
    circle: "left-[28.66%] top-[70.5%]",
    copy: "right-[73.21%] top-[70.8%] text-right",
  },
  {
    label: "ACL",
    title: "ACL Reconstruction Rehabilitation",
    icon: "/ps-icon-3.png",
    color: "#7c9a46",
    ink: "#ffffff",
    side: "top",
    flag: "left-[36.43%] top-[43.5%]",
    pole: "left-[36.43%] top-[35.5%]",
    circle: "left-[32.59%] top-[8%]",
    copy: "left-[42.68%] top-[8.5%]",
  },
  {
    label: "Shoulder",
    title: "Shoulder Surgery Rehabilitation",
    icon: "/ps-icon-4.png",
    color: "#5f7c39",
    ink: "#ffffff",
    side: "bottom",
    flag: "left-[50.89%] top-[43.5%]",
    pole: "left-[63.39%] top-[57.5%]",
    circle: "left-[59.55%] top-[70.5%]",
    copy: "right-[42.32%] top-[70.8%] text-right",
  },
  {
    label: "Fracture",
    title: "Fracture Surgery Rehabilitation",
    icon: "/ps-icon-5.png",
    color: "#46602d",
    ink: "#ffffff",
    side: "top",
    flag: "left-[67.32%] top-[43.5%]",
    pole: "left-[67.32%] top-[35.5%]",
    circle: "left-[63.48%] top-[8%]",
    copy: "left-[73.57%] top-[8.5%]",
  },
  {
    label: "Spine",
    title: "Spine Surgery Rehabilitation",
    icon: "/ps-icon-6.png",
    color: "#2b3320",
    ink: "#ffffff",
    side: "bottom",
    flag: "left-[81.79%] top-[43.5%]",
    pole: "left-[94.29%] top-[57.5%]",
    circle: "left-[90.45%] top-[70.5%]",
    copy: "right-[11.43%] top-[70.8%] text-right",
  },
];

export default function PostSurgeryTimeline() {
  return (
    <section id="recovery-timeline" className="w-full bg-white px-5 py-[40px] font-[family-name:var(--primary-font)] text-[#2b3320] md:px-8 lg:py-[28px]">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* title */}
        <p className="text-center text-[16px] font-semibold tracking-[-0.005em] text-[#6b8440] md:text-[18px]">
          Surgeries We Provide Rehabilitation Support For
        </p>
        <h2 className="mx-auto mt-[6px] max-w-[34em] text-center text-[clamp(26px,6.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] text-[#1f2616] md:text-[clamp(30px,3.4vw,40px)]">
          Post-Surgery Rehabilitation <span className="text-[#6b8440]">Tailored to Your Procedure</span>
        </h2>

        {/* ===== desktop: the flag timeline ===== */}
        <div className="relative mx-auto mt-[24px] hidden aspect-[560/200] w-full [container-type:inline-size] lg:mt-[8px] lg:block lg:w-[clamp(760px,calc((100svh-250px)*2.8),100%)]">
          {stages.map((s) => (
            <div key={s.label}>
              {/* flag */}
              <span
                className={`absolute flex h-[14%] w-[12.5%] items-center justify-center text-[1.3cqw] font-bold ${s.flag}`}
                style={{ background: s.color, color: s.ink }}
              >
                {s.label}
              </span>

              {/* pole + dot */}
              <span className={`absolute h-[8%] w-[0.18cqw] -translate-x-1/2 ${s.pole}`} style={{ background: s.color }} />
              <span
                className={`absolute h-[1cqw] w-[1cqw] -translate-x-1/2 rounded-full ${s.pole}`}
                style={{
                  background: s.color,
                  marginTop: s.side === "top" ? "-0.5cqw" : "8cqw",
                }}
              />

              {/* circle with icon */}
              <span
                className={`absolute flex aspect-square w-[7.68%] items-center justify-center rounded-full ${s.circle}`}
                style={{ background: s.color, color: s.iconInk ?? s.ink }}
              >
                <PngIcon src={s.icon} className="h-[58%] w-[58%]" />
              </span>

              {/* copy */}
              <div className={`absolute w-[19%] ${s.copy}`}>
                <p className="text-[1.8cqw] font-semibold leading-[1.25] text-[#1f2616]">{s.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== phones & tablets: a simple vertical timeline ===== */}
        <ol className="relative mt-[28px] flex flex-col gap-[26px] lg:hidden">
          <span aria-hidden="true" className="absolute bottom-[24px] left-[27px] top-[24px] w-[2px] bg-[#6b8440]/25" />
          {stages.map((s) => (
            <li key={s.label} className="relative flex items-start gap-[16px]">
              <span
                className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full"
                style={{ background: s.color, color: s.iconInk ?? s.ink }}
              >
                <PngIcon src={s.icon} className="h-[30px] w-[30px]" />
              </span>
              <div className="min-w-0 pt-[2px]">
                <span className="inline-block px-[12px] py-[3px] text-[13px] font-bold" style={{ background: s.color, color: s.ink }}>
                  {s.label}
                </span>
                <p className="mt-[8px] text-[20px] font-semibold leading-[1.25] text-[#1f2616]">{s.title}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-[28px] flex justify-center lg:mt-[10px]">
          <a
            href="#appointment"
            className="flex min-h-[54px] items-center gap-[12px] whitespace-nowrap rounded-full bg-[#c3d957] py-[10px] pl-[16px] pr-[22px] text-[16px] font-medium text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5"
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
