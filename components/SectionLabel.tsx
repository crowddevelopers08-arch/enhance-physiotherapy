// Section eyebrow: small uppercase text with a short underline (same design as ProcessSteps).
export default function SectionLabel({
  children,
  centered = false,
  className = "",
}: {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start"} ${className}`}>
      <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2b3320] md:text-[13px]">
        {children}
      </span>
      <span className="mt-[8px] block h-[2px] w-[56px] rounded-full bg-[#90a863]" />
    </div>
  );
}
