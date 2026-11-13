import Image from "next/image";

export default function FinalCtaSection() {
  return (
    <section id="appointment" className="w-full bg-white px-4 py-[56px] font-[family-name:var(--primary-font)] max-sm:py-[28px] sm:px-5 md:px-8 lg:py-[64px] xl:px-[46px]">
      <div className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-[24px] sm:rounded-[32px]">
        {/* Background image + brand-green overlay */}
        <Image
          src="/fta-image.png"
          alt=""
          fill
          sizes="(min-width: 1500px) 1500px, 100vw"
          className="object-cover object-[72%_50%] sm:object-[60%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(38,48,28,0.94)_0%,rgba(52,66,36,0.88)_45%,rgba(107,132,64,0.72)_100%)]" />

        {/* Decorative rings */}
        <span aria-hidden="true" className="absolute -left-[70px] -top-[70px] h-[180px] w-[180px] sm:-left-[90px] sm:-top-[90px] sm:h-[260px] sm:w-[260px] rounded-full border border-white/10" />
        <span aria-hidden="true" className="absolute -bottom-[80px] -right-[50px] h-[220px] w-[220px] sm:-bottom-[120px] sm:-right-[60px] sm:h-[340px] sm:w-[340px] rounded-full border border-[#c3d957]/25" />

        {/* Content */}
        <div className="relative flex flex-col items-center px-5 py-[56px] text-center max-sm:py-[36px] sm:px-10 lg:py-[80px]">
          <h2 className="max-w-[17em] text-balance text-[clamp(24px,6.8vw,36px)] font-semibold leading-[1.15] tracking-[-0.005em] text-white md:text-[clamp(30px,3.4vw,40px)]">
            Persistent Pain Shouldn&rsquo;t Define <span className="text-[#c3d957]">Your Everyday Routine</span>
          </h2>

          <p className="mt-[14px] max-w-[760px] text-[15px] leading-[1.6] sm:mt-[16px] sm:text-[16px] sm:leading-[1.65] text-white/85 md:text-[17px]">
            Whether persistent pain is affecting your work, sleep or daily movement, professional guidance can help you
            understand your options. Connect with Enhance Physiotherapy &amp; Wellness in Bengaluru to explore a
            personalised physiotherapy assessment and suitable management support.
          </p>

          <div className="mt-[24px] flex w-full flex-col items-center justify-center gap-[14px] sm:mt-[30px] sm:w-auto sm:flex-row sm:gap-[18px]">
            <a
              href="#appointment"
              className="flex min-h-[52px] w-auto items-center sm:min-h-[54px] justify-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[16px] pr-[22px] text-[16px] font-medium leading-snug text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5 whitespace-nowrap sm:w-auto"
            >
              <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white">
                <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden="true">
                  <path d="M8 2.2v11.6M2.2 8h11.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </span>
              Book Your Consultation
            </a>

            <a
              href="tel:+917204441668"
              className="flex min-h-[52px] w-auto items-center sm:min-h-[54px] justify-center rounded-full border border-white/45 px-[24px] py-[10px] text-[16px] font-medium leading-snug text-white transition-colors duration-200 hover:border-[#c3d957] hover:bg-white/10 hover:text-[#c3d957] whitespace-nowrap sm:w-auto"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
