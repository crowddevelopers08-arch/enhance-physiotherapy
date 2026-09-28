"use client";

import { useEffect, useRef, useState } from "react";

// Section eyebrow: lines draw in, then each dot loops along its line (outwards and back); the text fades up.
export default function AnimatedLabel({
  children,
  centered = false,
  className = "",
}: {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-inview={inView} className={`group flex items-center gap-[14px] ${centered ? "justify-center" : ""} ${className}`}>
      <Track side="left" />
      <span className="translate-y-[6px] text-[13px] font-medium uppercase tracking-[0.04em] text-[#2b3320] opacity-0 transition-all delay-500 duration-500 ease-out group-data-[inview=true]:translate-y-0 group-data-[inview=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:text-[15px]">
        {children}
      </span>
      {centered && <Track side="right" />}
    </div>
  );
}

function Track({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <span className="relative flex h-[14px] w-[70px] items-center sm:w-[86px]">
      <span
        className={`block h-[2px] w-full scale-x-0 bg-[#90a863] transition-transform duration-700 ease-out group-data-[inview=true]:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none ${
          isLeft ? "origin-left" : "origin-right"
        }`}
      />
      {/* Dot starts next to the text: right end on the left track, left end on the right track */}
      <span
        className={`absolute top-0 block h-[14px] w-[14px] scale-0 rounded-full bg-[#90a863] transition-transform delay-500 duration-300 group-data-[inview=true]:scale-100 group-data-[inview=true]:animate-dot-slide motion-reduce:scale-100 motion-reduce:animate-none motion-reduce:transition-none ${
          isLeft ? "right-0 [animation-delay:-1.6s]" : "left-0"
        }`}
      />
    </span>
  );
}
