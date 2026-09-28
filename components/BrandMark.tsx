import { useId } from "react";

/* Small version of the ENHANCE cross mark, used as an icon */
export default function BrandMark({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 100 92" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-l`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#eaf6b9" />
          <stop offset="1" stopColor="#c3d957" />
        </linearGradient>
        <linearGradient id={`${id}-r`} x1="1" x2="0" y1="0" y2="0">
          <stop offset="0" stopColor="#eaf6b9" />
          <stop offset="1" stopColor="#c3d957" />
        </linearGradient>
      </defs>
      <rect x="38.6" y="0" width="23" height="92" fill="#90a863" />
      <path d="M0 38.4C30 38.4 61.6 28 61.6 0 60 38 38 61.6 0 61.6Z" fill={`url(#${id}-l)`} />
      <path d="M100 53.6C70 53.6 38.4 64 38.4 92 40 54 62 30.4 100 30.4Z" fill={`url(#${id}-r)`} />
    </svg>
  );
}
