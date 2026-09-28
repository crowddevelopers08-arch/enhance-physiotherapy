"use client";

import { useSyncExternalStore } from "react";

const timings = [
  { day: "Mon", hours: "8:00 AM - 8:00 PM" },
  { day: "Tue", hours: "8:00 AM - 8:00 PM" },
  { day: "Wed", hours: "8:00 AM - 8:00 PM" },
  { day: "Thu", hours: "8:00 AM - 8:00 PM" },
  { day: "Fri", hours: "8:00 AM - 8:00 PM" },
  { day: "Sat", hours: "8:00 AM - 8:00 PM" },
  { day: "Sun", hours: "Closed" },
];

const noopSubscribe = () => () => {};
const getToday = () => new Date().toLocaleDateString("en-US", { weekday: "short", timeZone: "Asia/Kolkata" });

// Footer "Our Timings" column; today's row (India time) is highlighted in the browser only.
export default function FooterTimings() {
  const today = useSyncExternalStore(noopSubscribe, getToday, () => null);

  return (
    <div>
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c3d957] md:text-[13px]">Our Timings</h3>
      <span className="mt-[8px] block h-[2px] w-[56px] rounded-full bg-[#c3d957]" />
      <ul className="mt-[18px] flex flex-col gap-[6px]">
        {timings.map(({ day, hours }) => {
          const isToday = day === today;
          return (
            <li
              key={day}
              className={`grid grid-cols-[44px_1fr] text-[14px] leading-[1.7] sm:grid-cols-[52px_1fr] sm:text-[16px] ${
                isToday ? "font-bold text-[#c3d957]" : "text-white/80"
              }`}
            >
              <span>{day}</span>
              <span className="whitespace-nowrap">{hours}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
