import Image from "next/image";

export default function FinalCtaSection() {
  return (
    <section id="appointment" className="w-full bg-white px-5 py-[56px] font-sans md:px-8 lg:py-[64px] xl:px-[46px]">
      <div className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-[24px] sm:rounded-[32px]">
        {/* Background image + brand-green overlay */}
        <Image
          src="/fta-image.png"
          alt=""
          fill
          sizes="(min-width: 1500px) 1500px, 100vw"
          className="object-cover object-[60%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(38,48,28,0.94)_0%,rgba(52,66,36,0.88)_45%,rgba(107,132,64,0.72)_100%)]" />

        {/* Decorative rings */}
        <span aria-hidden="true" className="absolute -left-[90px] -top-[90px] h-[260px] w-[260px] rounded-full border border-white/10" />
        <span aria-hidden="true" className="absolute -bottom-[120px] -right-[60px] h-[340px] w-[340px] rounded-full border border-[#c3d957]/25" />

        {/* Content */}
        <div className="relative flex flex-col items-center px-6 py-[56px] text-center sm:px-10 lg:py-[80px]">
          <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c3d957] md:text-[13px]">
            Begin Your Recovery
          </span>
          <span className="mt-[8px] block h-[2px] w-[56px] rounded-full bg-[#c3d957]" />

          <h2 className="mt-[18px] max-w-[16em] text-white text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Still Thinking About Taking <span className="text-[#c3d957]">The First Step?</span>
          </h2>

          <p className="mt-[16px] max-w-[640px] text-[15px] leading-[1.7] text-white/80 sm:text-[17px]">
            Whether it&rsquo;s pain management, recovery after surgery, or improving mobility, our physiotherapists are
            here to guide you.
          </p>

          <a
            href="#appointment"
            className="mt-[32px] flex min-h-[54px] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[14px] pr-[22px] text-[15px] font-medium leading-snug text-[#2b3320] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-0.5 sm:whitespace-nowrap sm:pl-[16px] sm:text-[17px]"
          >
            <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white">
              <svg viewBox="0 0 16 16" className="h-[14px] w-[14px]" aria-hidden="true">
                <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="max-[340px]:hidden">Schedule A Physiotherapy Home Visit Today</span>
            <span className="hidden max-[340px]:inline">Book Your Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
