import type { Metadata } from "next";
import Link from "next/link";
import SimpleHeader from "../../components/SimpleHeader";
import Footer from "@/components/simplefooter";

export const metadata: Metadata = {
  title: "Thank You | Enhance Physiotherapy & Wellness",
  description: "Your request has been received. Our team will contact you shortly.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  { title: "We Review Your Request", text: "Our team goes through the details you shared about your condition." },
  { title: "We Call You", text: "A member of our team contacts you to confirm your preferred date and time." },
  { title: "Your Home Visit", text: "Our physiotherapist visits you, assesses your condition, and starts your care." },
];

export default function ThankYouPage() {
  return (
    <>
      <SimpleHeader />

      <main className="flex flex-1 items-center bg-[#eef2e6] px-5 py-[64px] font-sans md:px-8 lg:py-[38px]">
        <div className="mx-auto flex w-full max-w-[880px] flex-col items-center text-center">
          {/* Success badge */}
          <span className="relative flex h-[96px] w-[96px] items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#90a863]/25 [animation-iteration-count:3] motion-reduce:animate-none" />
            <span className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#6b8440] text-white ring-8 ring-[#90a863]/25">
              <svg viewBox="0 0 24 24" className="h-[44px] w-[44px]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
          </span>

          <span className="mt-[32px] text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2b3320] md:text-[13px]">
            Request Received
          </span>
          <span className="mt-[8px] block h-[2px] w-[56px] rounded-full bg-[#90a863]" />

          <h1 className="mt-[18px] text-[#1c1f1a] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Thank You For <span className="text-[#6b8440]">Reaching Out!</span>
          </h1>

          <p className="mt-[16px] max-w-[620px] text-[15px] leading-[1.75] text-[#5b6055] sm:text-[17px]">
            Your request has been received. Our physiotherapy team will contact you shortly to confirm your consultation
            and home visit details.
          </p>

          {/* What happens next */}
          <div className="mt-[44px] grid w-full grid-cols-1 gap-[16px] text-left sm:grid-cols-3">
            {nextSteps.map((step, i) => (
              <div key={step.title} className="rounded-[20px] border border-[#d3dac6] bg-white p-[22px]">
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#90a863]">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-[8px] text-[17px] font-bold leading-tight text-[#2b3320]">{step.title}</h2>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-[#5b6055]">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-[40px] flex flex-col items-center gap-[14px] sm:flex-row">
            <Link
              href="/"
              className="group flex min-h-[54px] items-center gap-[14px] rounded-full bg-[#6b8440] py-[6px] pl-[26px] pr-[6px] text-[16px] font-medium text-white ring-2 ring-[#90a863]/40 ring-offset-2 ring-offset-[#eef2e6] transition-colors duration-300 hover:bg-[#5d7437]"
            >
              Back to Home
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#26301c] transition-transform duration-300 group-hover:translate-x-1">
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>

            <a
              href="tel:+917204441668"
              className="flex min-h-[54px] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[12px] pr-[22px] text-[16px] font-medium text-[#2b3320] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#6b8440] text-white">
                <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8.3 3.5 9.9 7.3a1.2 1.2 0 0 1-.3 1.4L8 10.1a11 11 0 0 0 5.9 5.9l1.4-1.6a1.2 1.2 0 0 1 1.4-.3l3.8 1.6a1.2 1.2 0 0 1 .7 1.3l-.4 2.4a1.9 1.9 0 0 1-1.9 1.6C10.4 21 3 13.6 3 5a1.9 1.9 0 0 1 1.6-1.9l2.4-.4a1.2 1.2 0 0 1 1.3.8Z" />
                </svg>
              </span>
              Call Us: +91 72044 41668
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
