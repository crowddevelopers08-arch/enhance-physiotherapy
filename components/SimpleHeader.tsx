import Image from "next/image";
import Link from "next/link";

// Compact header for inner pages (privacy policy, thank you): logo + back-to-home button.
export default function SimpleHeader() {
  return (
    <header className="w-full border-b border-[#e3e9d8] bg-white font-sans">
      <div className="mx-auto flex h-[82px] w-full max-w-[1500px] items-center justify-between gap-6 px-5 md:px-8 lg:h-[92px]">
        <Link href="/" className="flex shrink-0 items-center gap-[10px]" aria-label="Enhance Physiotherapy & Wellness – Home">
          <Image src="/enhance-emblem.png" alt="" width={766} height={608} priority className="h-[52px] w-auto lg:h-[60px]" />
          <Image
            src="/enhance-wordmark.png"
            alt="Enhance – Be your best self"
            width={650}
            height={176}
            priority
            className="h-[28px] w-auto lg:h-[33px]"
          />
        </Link>

        <Link
          href="/"
          className="flex h-[48px] items-center gap-[10px] whitespace-nowrap rounded-full bg-[#eaf6b9] pl-[8px] pr-[18px] text-[15px] font-medium text-[#2b3320] transition-colors duration-200 hover:bg-[#dcee9c] sm:text-[16px]"
        >
          <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white text-[#6b8440]">
            <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
          </span>
          Back to Home
        </Link>
      </div>
    </header>
  );
}
