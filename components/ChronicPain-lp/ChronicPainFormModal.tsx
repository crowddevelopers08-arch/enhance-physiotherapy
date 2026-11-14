"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { OPEN_BOOKING_EVENT } from "../BookingModal";

// Sent with every lead to /api/submissions → Google Sheet tab "chronic-pain-leads" + TeleCRM
const FORM_NAME = "chronic-pain-form";
const SOURCE_NAME = "chronicpain-leads";

const concerns = [
  "Chronic Lower Back Pain",
  "Persistent Neck Pain",
  "Chronic Shoulder Pain",
  "Knee Pain & Stiffness",
  "Arthritis-Related Pain",
  "Fibromyalgia & Widespread Pain",
  "Other",
];

const highlights = ["Personalised pain assessment", "Clinic & home physiotherapy options", "Guided exercise & recovery plans"];

const inputBase =
  "h-[54px] w-full rounded-[14px] border border-[#d3dac6] bg-white pl-[48px] pr-[16px] text-[16px] text-[#1c1f1a] outline-none transition-colors duration-200 placeholder:text-[#9aa092] focus:border-[#6b8440] focus:ring-4 focus:ring-[#90a863]/20";

const fieldIcon = "pointer-events-none absolute left-[16px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-[#6b8440]";

/*
 * Chronic-pain enquiry popup. Opens when any link to "#appointment" is clicked on this page,
 * or when OPEN_BOOKING_EVENT is dispatched on window. (The site-wide BookingModal switches
 * itself off on /chronic-pain, so only this form opens here.)
 */
export default function ChronicPainFormModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

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
      router.push("/chronic-pain/thank-you");
    } catch {
      setError("Something went wrong. Please try again or call us on +91 72044 41668.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 font-[family-name:var(--primary-font)] transition-opacity duration-300 sm:p-4 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1c1f1a]/65 backdrop-blur-[3px]" onClick={() => setOpen(false)} />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="chronic-pain-form-title"
        className={`relative grid max-h-[calc(100svh-24px)] w-full max-w-[900px] overflow-y-auto rounded-[26px] bg-white shadow-[0_30px_80px_rgba(28,31,26,0.4)] transition-all duration-300 sm:max-h-[calc(100svh-32px)] sm:rounded-[30px] md:grid-cols-[0.92fr_1.08fr] md:overflow-hidden ${
          open ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.97]"
        }`}
      >
        {/* Close */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close form"
          className="absolute right-[14px] top-[14px] z-20 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#2b3320] transition-colors duration-200 hover:bg-[#c3d957]"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Left: brand panel */}
        <div className="relative isolate hidden overflow-hidden bg-[#2b3320] px-[30px] text-white md:flex md:flex-col md:justify-between md:px-[34px] md:py-[34px]">
          <Image
            src="https://res.cloudinary.com/b5lvyi64/image/upload/v1794652406/pain-management.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 420px, 100vw"
            className="-z-20 object-cover object-[50%_60%] opacity-25"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2b3320]/95 via-[#2b3320]/85 to-[#2b3320]/95" />
          <span aria-hidden="true" className="absolute -bottom-[70px] -right-[70px] -z-10 h-[220px] w-[220px] rounded-full border border-[#c3d957]/30" />
          <span aria-hidden="true" className="absolute -left-[60px] -top-[60px] -z-10 h-[160px] w-[160px] rounded-full border border-white/10" />

          <div>
            <Image src="https://res.cloudinary.com/b5lvyi64/image/upload/v1794652054/enhance-emblem.png" alt="" width={766} height={608} className="h-[44px] w-auto" />
            <span className="mt-[16px] block text-[15px] font-semibold tracking-[-0.005em] text-[#c3d957] md:text-[16px]">
              Chronic Pain Care
            </span>
            <h2 id="chronic-pain-form-title" className="mt-[6px] text-[26px] font-semibold leading-[1.15] tracking-[-0.005em] sm:text-[30px] md:text-[34px]">
              Book Your <span className="text-[#c3d957]">Consultation</span>
            </h2>
            <p className="mt-[12px] max-w-[320px] text-[15px] leading-[1.6] text-white/80 md:text-[16px]">
              Share your details and our physiotherapist will get in touch to guide your next step.
            </p>
          </div>

          <ul className="mt-[22px] hidden flex-col gap-[14px] md:flex">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-[12px] text-[15px] font-medium text-white/95">
                <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#c3d957] text-[#2b3320]">
                  <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a href="tel:+917204441668" className="mt-[26px] hidden items-center gap-[10px] text-[15px] font-medium text-white/90 transition-colors hover:text-[#c3d957] md:inline-flex">
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/10">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8.3 3.5 9.9 7.3a1.2 1.2 0 0 1-.3 1.4L8 10.1a11 11 0 0 0 5.9 5.9l1.4-1.6a1.2 1.2 0 0 1 1.4-.3l3.8 1.6a1.2 1.2 0 0 1 .7 1.3l-.4 2.4a1.9 1.9 0 0 1-1.9 1.6C10.4 21 3 13.6 3 5a1.9 1.9 0 0 1 1.6-1.9l2.4-.4a1.2 1.2 0 0 1 1.3.8Z" />
              </svg>
            </span>
            +91 72044 41668
          </a>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] px-[24px] pb-[26px] pt-[24px] sm:px-[30px] md:px-[36px] md:py-[38px]">
          {/* Phones: the dark side panel is hidden, so the form carries the title */}
          <div className="pr-[44px] md:hidden">
            <p className="text-[22px] font-semibold leading-[1.2] text-[#1f2616]">
              Book Your <span className="text-[#6b8440]">Consultation</span>
            </p>
            <p className="mt-[4px] text-[14px] leading-[1.5] text-[#2b3320]/65">Share your details and we will get in touch.</p>
          </div>
          <div className="hidden md:block">
            <p className="text-[22px] font-semibold leading-[1.25] text-[#1f2616]">Your Details</p>
            <p className="mt-[4px] text-[14px] text-[#2b3320]/65">It takes less than a minute.</p>
          </div>

          <label className="flex flex-col gap-[7px]">
            <span className="text-[14px] font-semibold text-[#2b3320]">Name</span>
            <span className="relative">
              <svg viewBox="0 0 24 24" className={fieldIcon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0" />
              </svg>
              <input ref={nameRef} name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputBase} />
            </span>
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className="text-[14px] font-semibold text-[#2b3320]">Phone Number</span>
            <span className="relative">
              <svg viewBox="0 0 24 24" className={fieldIcon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8.3 3.5 9.9 7.3a1.2 1.2 0 0 1-.3 1.4L8 10.1a11 11 0 0 0 5.9 5.9l1.4-1.6a1.2 1.2 0 0 1 1.4-.3l3.8 1.6a1.2 1.2 0 0 1 .7 1.3l-.4 2.4a1.9 1.9 0 0 1-1.9 1.6C10.4 21 3 13.6 3 5a1.9 1.9 0 0 1 1.6-1.9l2.4-.4a1.2 1.2 0 0 1 1.3.8Z" />
              </svg>
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
            </span>
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className="text-[14px] font-semibold text-[#2b3320]">Pain Concern</span>
            <span className="relative">
              <svg viewBox="0 0 24 24" className={fieldIcon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 12h4l2-6 4 12 2-6h6" />
              </svg>
              <select
                name="concern"
                required
                defaultValue=""
                className={`${inputBase} cursor-pointer appearance-none pr-[44px] invalid:text-[#9aa092]`}
              >
                <option value="" disabled>
                  Select your pain concern
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
            className="group mt-[4px] flex min-h-[56px] w-full items-center justify-between rounded-full bg-[#c3d957] py-[7px] pl-[26px] pr-[7px] text-[16px] font-semibold text-[#2b3320] transition-colors duration-300 hover:bg-[#b5cb47] disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Book My Consultation"}
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#2b3320] text-[#c3d957] transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>

          <p className="text-center text-[12px] leading-[1.5] text-[#7a7f73]">
            By submitting, you agree to our{" "}
            <a href="/chronic-pain/privacy-policy" className="font-medium text-[#6b8440] underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
