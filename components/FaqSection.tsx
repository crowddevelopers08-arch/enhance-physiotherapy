import Image from "next/image";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    question: "Who needs Home Physiotherapy?",
    answer:
      "Home Physiotherapy is ideal for individuals with pain, mobility challenges, recovery needs, age-related concerns, or difficulty travelling to a clinic.",
  },
  {
    question: "What conditions can be treated through Physiotherapy at Home?",
    answer:
      "Home physiotherapy can support conditions like back pain, neck pain, knee pain, sports injuries, post-surgery recovery, arthritis, and mobility issues.",
  },
  {
    question: "How does a home physiotherapy session work?",
    answer:
      "A physiotherapist visits your home, assesses your condition, provides suitable therapy, guides exercises, and tracks your progress.",
  },
  {
    question: "How frequently are physiotherapy sessions required?",
    answer:
      "The number of sessions depends on your condition, recovery goals, and physiotherapist’s assessment.",
  },
  {
    question: "Is Home Physiotherapy suitable for seniors?",
    answer:
      "Yes. It provides seniors with comfortable support to improve mobility, strength, balance, and daily activities.",
  },
  {
    question: "Do I need any equipment at home?",
    answer:
      "No. Our physiotherapists bring the required equipment based on your treatment needs and guide you through suitable exercises during the sessions.",
  },
];

type Faq = (typeof faqs)[number];

function FaqItem({ faq, index, align }: { faq: Faq; index: number; align: "left" | "right" }) {
  const isLeft = align === "left";
  return (
    <div className={`flex items-start gap-[14px] ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-[13px] font-semibold text-white ring-4 ring-[#90a863]/25">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-col">
        <h3 className="text-[18px] font-bold leading-[1.3] text-[#1c1f1a] sm:text-[20px]">{faq.question}</h3>
        <p className="mt-[6px] text-[14px] leading-[1.65] text-[#5b6055] sm:text-[15px]">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const left = faqs.slice(0, 3);
  const right = faqs.slice(3);

  return (
    <section id="faq" className="w-full bg-[#eef2e6] px-5 py-[32px] font-sans md:px-8 lg:py-[40px] xl:px-[46px]">
      <div className="mx-auto w-full max-w-[1710px]">
        {/* ================= HEADING ================= */}
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <SectionLabel centered>Frequently Asked Questions</SectionLabel>

          <h2 className="mt-[10px] text-[#1c1f1a] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Frequently Asked Questions About <span className="text-[#6b8440]">Home Physiotherapy</span>
          </h2>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-[48px] grid grid-cols-1 items-center gap-[40px] lg:mt-[34px] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-[48px] xl:gap-[64px]">
          {/* Left questions */}
          <div className="order-2 flex flex-col gap-[36px] lg:order-1 lg:gap-[48px]">
            {left.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i} align="right" />
            ))}
          </div>

          {/* Center image */}
          <div className="order-1 mx-auto w-full max-w-[460px] lg:order-2">
            <div className="relative rounded-t-[999px] rounded-b-[28px] border border-[#c9d4b4] p-[12px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[20px]">
                <Image
                  src="/conditions/home-physiotherapy.jpg"
                  alt="Physiotherapist guiding a patient through a leg stretch at home"
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover object-[62%_50%]"
                />
              </div>

              {/* Badge */}
              <div className="absolute bottom-[28px] left-1/2 flex -translate-x-1/2 items-center gap-[10px] whitespace-nowrap rounded-full bg-white py-[10px] pl-[10px] pr-[20px] shadow-[0_10px_30px_rgba(38,48,28,0.15)]">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#6b8440] text-white">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
                  </svg>
                </span>
                <span className="text-[14px] font-medium text-[#1c1f1a] sm:text-[15px]">Care at Your Doorstep</span>
              </div>
            </div>
          </div>

          {/* Right questions */}
          <div className="order-3 flex flex-col gap-[36px] lg:gap-[48px]">
            {right.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i + 3} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
