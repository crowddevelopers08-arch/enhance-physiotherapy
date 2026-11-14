"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};
const getToday = () =>
  new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "Asia/Kolkata" });

// Today's date in India time, e.g. "September 29, 2026". Rendered in the browser only,
// because the page is pre-built and a server-side date would be stuck at build day.
export default function TodayDate() {
  const today = useSyncExternalStore(noopSubscribe, getToday, () => null);
  return <span suppressHydrationWarning>{today ?? " "}</span>;
}
