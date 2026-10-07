export default function Footer() {
  return (
    <footer className="w-full bg-[#26301c] px-5 py-[26px] font-sans text-[#eef2e6] md:px-8">
      <div className="mx-auto w-full max-w-[1632px]">
        {/* Bottom bar: and stacked on mobile, copyright left / policy right from tablet up */}
        <div className="flex flex-col items-center gap-[12px] text-center md:flex-row md:justify-between md:gap-6 md:text-left">
          <p className="text-[15px] leading-[1.7] text-white/80">2026 &copy; Enhance Physiotherapy &amp; Wellness. All rights reserved.</p>

          <div className="flex items-center justify-center gap-[8px] text-[15px] leading-[1.7] text-white/80">
            <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-[#6b8440]" />
            <a href="/privacy-policy" className="transition-colors duration-200 hover:text-[#c3d957]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
