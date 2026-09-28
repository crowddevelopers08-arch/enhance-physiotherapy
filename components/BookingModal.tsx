"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const OPEN_BOOKING_EVENT = "open-booking";

// Sent with every lead to /api/submissions (Google Sheet + TeleCRM)
const FORM_NAME = "enhance-physio-leads";
const SOURCE_NAME = "Enhance Physiotherapy Clinic";

const concerns = [
  "Neuro Rehabilitation",
  "Orthopedic Rehabilitation",
  "Pain Management",
  "Home Physiotherapy",
  "Sports Physiotherapy",
  "Women's Health Physiotherapy",
  "Post-Operative Rehabilitation & Prehabilitation",
  "General Physiotherapy",
  "Nutrition & Diet",
  "Other",
];

const inputBase =
  "h-[52px] w-full rounded-[14px] border border-[#d3dac6] bg-white px-[16px] text-[15px] text-[#1c1f1a] outline-none transition-colors duration-200 placeholder:text-[#9aa092] focus:border-[#6b8440] focus:ring-4 focus:ring-[#90a863]/20";

/*
 * Booking form popup. Mounted once in the root layout; opens when any link to "#appointment"
 * is clicked, or when OPEN_BOOKING_EVENT is dispatched on window.
 */
export default function BookingModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  // Open on appointment-link clicks and on the custom event
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as HTMLElement).closest("a");
      if (link?.getAttribute("href")?.endsWith("#appointment")) {
        e.preventDefault();
        setOpen(true);
      }
    };
    const onOpen = () => setOpen(true);
    document.addEventListener("click", onClick);
    window.addEventListener(OPEN_BOOKING_EVENT, onOpen);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener(OPEN_BOOKING_EVENT, onOpen);
    };
  }, []);

  // While open: lock page scroll, focus the first field, close on Escape
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nameRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: FORM_NAME,
          source: SOURCE_NAME,
          name: String(data.get("name") || ""),
          phone: String(data.get("phone") || ""),
          concern: String(data.get("concern") || ""),
          pageUrl: window.location.href,
        }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.success) throw new Error(result?.error || "Submission failed");

      form.reset();
      setOpen(false);
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or call us on +91 72044 41668.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans transition-opacity duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1c1f1a]/60 backdrop-blur-[3px]" onClick={() => setOpen(false)} />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className={`relative max-h-[calc(100svh-32px)] w-full max-w-[480px] overflow-y-auto rounded-[28px] bg-white shadow-[0_30px_80px_rgba(28,31,26,0.35)] transition-all duration-300 ${
          open ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.97]"
        }`}
      >
        {/* Header */}
        <div className="relative overflow-hidden rounded-t-[28px] bg-[#eef2e6] px-[26px] pb-[22px] pt-[26px] sm:px-[32px]">
          <span aria-hidden="true" className="absolute -right-[50px] -top-[50px] h-[150px] w-[150px] rounded-full border border-[#90a863]/30" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close form"
            className="absolute right-[16px] top-[16px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#2b3320] transition-colors duration-200 hover:bg-[#6b8440] hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <Image src="/enhance-emblem.png" alt="" width={766} height={608} className="h-[46px] w-auto" />
          <span className="mt-[16px] block text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2b3320]">
            Book a Home Visit
          </span>
          <span className="mt-[8px] block h-[2px] w-[56px] rounded-full bg-[#90a863]" />
          <h2 id="booking-title" className="mt-[14px] text-[28px] font-bold leading-tight text-[#1c1f1a] sm:text-[32px]">
            Schedule Your <span className="text-[#6b8440]">Consultation</span>
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] px-[26px] pb-[28px] pt-[22px] sm:px-[32px]">
          <label className="flex flex-col gap-[7px]">
            <span className="text-[14px] font-medium text-[#2b3320]">Name</span>
            <input ref={nameRef} name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputBase} />
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className="text-[14px] font-medium text-[#2b3320]">Phone Number</span>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="+91 98765 43210"
              pattern="^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$"
              title="Enter a valid 10-digit mobile number"
              className={inputBase}
            />
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className="text-[14px] font-medium text-[#2b3320]">Concern</span>
            <span className="relative">
              <select name="concern" required defaultValue="" className={`${inputBase} cursor-pointer appearance-none pr-[44px] invalid:text-[#9aa092]`}>
                <option value="" disabled>
                  Select your concern
                </option>
                {concerns.map((concern) => (
                  <option key={concern} value={concern} className="text-[#1c1f1a]">
                    {concern}
                  </option>
                ))}
              </select>
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute right-[16px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#6b8440]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </label>

          {error && (
            <p role="alert" className="rounded-[12px] bg-[#fdecea] px-[14px] py-[10px] text-[13px] leading-[1.5] text-[#a33a2b]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group mt-[6px] flex min-h-[56px] w-full items-center justify-between rounded-full bg-[#6b8440] py-[7px] pl-[26px] pr-[7px] text-[16px] font-medium text-white transition-colors duration-300 hover:bg-[#5d7437] disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Book My Home Visit"}
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#26301c] transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>

          <p className="text-center text-[12px] leading-[1.5] text-[#7a7f73]">
            By submitting, you agree to our{" "}
            <a href="/privacy-policy" className="font-medium text-[#6b8440] underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
