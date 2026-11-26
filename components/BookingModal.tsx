"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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

const consultationModes = [
  {
    value: "In-Clinic Physiotherapy – HBR Layout",
    title: "In-Clinic Physiotherapy",
    detail: "HBR Layout",
    icon: <path d="M4 21V7l8-4 8 4v14M2 21h20M12 8v6M9 11h6M10 21v-4h4v4" />,
  },
  {
    value: "Home Physiotherapy",
    title: "Home Physiotherapy",
    detail: "",
    icon: <path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M10 20v-5h4v5" />,
  },
  {
    value: "Telephysiotherapy – Online Consultation",
    title: "Telephysiotherapy",
    detail: "Online Consultation",
    icon: <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h10A1.5 1.5 0 0 1 16 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 16.5zM16 10.5l5-3v9l-5-3" />,
  },
];

const inputBase =
  "h-[48px] w-full rounded-[14px] border border-[#d3dac6] bg-white px-[16px] text-[15px] text-[#1c1f1a] outline-none transition-colors duration-200 placeholder:text-[#9aa092] focus:border-[#6b8440] focus:ring-4 focus:ring-[#90a863]/20";

/*
 * Booking form popup. Mounted once in the root layout; opens when any link to "#appointment"
 * is clicked, or when OPEN_BOOKING_EVENT is dispatched on window.
 */
export default function BookingModal() {
  const router = useRouter();
  // The chronic-pain and post-surgery pages have their own form popups, so this one stays off there
  const pathname = usePathname() ?? "";
  const disabled = pathname.startsWith("/chronic-pain") || pathname.startsWith("/post-surgery");
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  // Open on appointment-link clicks and on the custom event
  useEffect(() => {
    if (disabled) return;
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
  }, [disabled]);

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
          consultationMode: String(data.get("consultationMode") || ""),
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
        className={`relative max-h-[calc(100svh-24px)] w-full max-w-[580px] overflow-y-auto rounded-[28px] bg-white shadow-[0_30px_80px_rgba(28,31,26,0.35)] transition-all duration-300 ${
          open ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.97]"
        }`}
      >
        {/* Header */}
        <div className="relative overflow-hidden rounded-t-[28px] bg-[#eef2e6] px-[20px] py-[14px] sm:px-[26px]">
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

          <div className="flex items-center gap-[14px] pr-[44px]">
            <Image src="https://res.cloudinary.com/b5lvyi64/image/upload/v1794652054/enhance-emblem.png" alt="" width={766} height={608} className="h-[40px] w-auto shrink-0 sm:h-[46px]" />
            <div className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b8440]">
                Book a Consultation
              </span>
              <h2 id="booking-title" className="mt-[2px] text-[22px] font-bold leading-tight text-[#1c1f1a] sm:text-[26px]">
                Talk to Our <span className="text-[#6b8440]">Physiotherapist</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-[14px] gap-y-[12px] px-[20px] pb-[18px] pt-[14px] sm:grid-cols-2 sm:px-[26px]">
          <label className="flex flex-col gap-[5px]">
            <span className="text-[14px] font-medium text-[#2b3320]">Name</span>
            <input ref={nameRef} name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputBase} />
          </label>

          <label className="flex flex-col gap-[5px]">
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

          <label className="flex flex-col gap-[5px] sm:col-span-2">
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

          <fieldset className="min-w-0 sm:col-span-2">
            <legend className="mb-[6px] text-[14px] font-medium text-[#2b3320]">Preferred Mode of Consultation</legend>
            <div className="grid grid-cols-1 gap-[8px] sm:grid-cols-3">
              {consultationModes.map((option) => (
                <label
                  key={option.value}
                  className="relative flex min-h-[50px] cursor-pointer items-center gap-[10px] rounded-[14px] border border-[#d3dac6] bg-white px-[12px] py-[7px] transition-colors duration-200 hover:border-[#90a863] has-[:checked]:border-[#6b8440] has-[:checked]:bg-[#f3f8e6] has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-[#90a863]/20 sm:flex-col sm:justify-start sm:gap-[5px] sm:px-[8px] sm:py-[10px] sm:text-center"
                >
                  <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#eef2e6] text-[#6b8440]">
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {option.icon}
                    </svg>
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col sm:flex-none">
                    <span className="text-[14px] font-medium leading-[1.25] text-[#1c1f1a] sm:text-[13px]">{option.title}</span>
                    {option.detail && <span className="text-[12px] leading-[1.35] text-[#7a7f73]">{option.detail}</span>}
                  </span>
                  <input type="radio" name="consultationMode" value={option.value} required className="h-[17px] w-[17px] shrink-0 cursor-pointer accent-[#6b8440] outline-none sm:absolute sm:right-[8px] sm:top-[8px]" />
                </label>
              ))}
            </div>
          </fieldset>

          {error && (
            <p role="alert" className="rounded-[12px] sm:col-span-2 bg-[#fdecea] px-[14px] py-[10px] text-[13px] leading-[1.5] text-[#a33a2b]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group flex min-h-[52px] w-full sm:col-span-2 items-center justify-between rounded-full bg-[#6b8440] py-[7px] pl-[26px] pr-[7px] text-[16px] font-medium text-white transition-colors duration-300 hover:bg-[#5d7437] disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Consult Our Physiotherapist"}
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#26301c] transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>

          <p className="text-center text-[12px] leading-[1.5] text-[#7a7f73] sm:col-span-2">
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
