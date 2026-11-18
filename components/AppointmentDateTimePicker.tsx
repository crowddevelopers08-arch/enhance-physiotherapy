"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const TIMES = Array.from({ length: 25 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 30;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const value = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  const label = new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit" }).format(new Date(2026, 0, 1, hours, minutes));
  return { value, label };
});

function toDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toDateTimeLabel(value: string) {
  if (!value) return "Select your appointment date & time";
  const [date, time] = value.split("T");
  const [year, month, day] = date.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(year, month - 1, day, hours, minutes));
}

export default function AppointmentDateTimePicker() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [month, setMonth] = useState(() => new Date());
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const calendarStart = new Date(month.getFullYear(), month.getMonth(), 1 - firstDay.getDay());
  const selectedValue = selectedDate && selectedTime ? `${selectedDate}T${selectedTime}` : "";
  const monthLabel = new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric" }).format(month);
  const dates = Array.from({ length: 42 }, (_, index) => new Date(calendarStart.getFullYear(), calendarStart.getMonth(), calendarStart.getDate() + index));

  return (
    <div className="relative">
      <input name="appointmentTime" value={selectedValue} readOnly required className="sr-only" />
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="group flex h-[58px] w-full items-center overflow-hidden rounded-[14px] border border-[#c9d6b7] bg-[#f7faef] text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all hover:border-[#95aa70] focus:outline-none focus:ring-4 focus:ring-[#90a863]/20"
      >
        <span className="flex h-full w-[48px] shrink-0 items-center justify-center border-r border-[#d9e3ca] bg-[#edf3df] text-[#5f7638]">
          <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M7.5 3.5v3M16.5 3.5v3M3.5 10h17M12 13.5v3.5l2.5 1.5" /></svg>
        </span>
        <span className={`min-w-0 flex-1 px-[15px] text-[14px] ${selectedValue ? "font-semibold text-[#2b3320]" : "text-[#849077]"}`}>{toDateTimeLabel(selectedValue)}</span>
        <svg viewBox="0 0 24 24" className={`mr-[15px] h-[18px] w-[18px] shrink-0 text-[#5f7638] transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>

      {open && createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#1c1f1a]/55 p-3 backdrop-blur-[2px] sm:p-5">
          <button type="button" aria-label="Close appointment picker" onClick={() => setOpen(false)} className="absolute inset-0 cursor-default" />
          <div role="dialog" aria-modal="true" aria-label="Choose appointment date and time" className="relative w-full max-w-[400px] rounded-[22px] border border-[#d3dfc1] bg-white p-[14px] shadow-[0_24px_65px_rgba(28,31,26,0.35)] sm:p-[18px]">
            <div className="mb-[14px] flex items-center justify-between">
              <p className="text-[14px] font-bold text-[#2b3320]">Choose your preferred slot</p>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close appointment picker" className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-[#52643a] hover:bg-[#edf3df]"><svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
            </div>
          <div className="mb-[14px] flex items-center justify-between">
            <button type="button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} aria-label="Previous month" className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[#52643a] transition-colors hover:bg-[#edf3df]"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m14 6-6 6 6 6" /></svg></button>
            <span className="text-[15px] font-bold text-[#2b3320]">{monthLabel}</span>
            <button type="button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} aria-label="Next month" className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[#52643a] transition-colors hover:bg-[#edf3df]"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m10 6 6 6-6 6" /></svg></button>
          </div>
          <div className="grid grid-cols-7 gap-y-[4px] text-center">
            {DAYS.map((day) => <span key={day} className="py-[3px] text-[11px] font-bold uppercase text-[#879379]">{day}</span>)}
            {dates.map((date) => {
              const value = toDateValue(date);
              const disabled = date < today || date.getMonth() !== month.getMonth();
              const active = value === selectedDate;
              return <button key={value} type="button" disabled={disabled} onClick={() => setSelectedDate(value)} className={`mx-auto flex h-[31px] w-[31px] items-center justify-center rounded-full text-[13px] transition-colors ${active ? "bg-[#6b8440] font-bold text-white shadow-[0_4px_10px_rgba(107,132,64,0.3)]" : disabled ? "cursor-not-allowed text-[#c9d1c1]" : "text-[#354027] hover:bg-[#e8efda]"}`}>{date.getDate()}</button>;
            })}
          </div>
          <div className="mt-[16px] border-t border-[#e4eadb] pt-[13px]">
            <p className="mb-[9px] text-[12px] font-bold uppercase tracking-[0.08em] text-[#687659]">Choose a time</p>
            <div className="relative">
              <select value={selectedTime} onChange={(event) => setSelectedTime(event.target.value)} className="h-[46px] w-full cursor-pointer appearance-none rounded-[11px] border border-[#d4dfc3] bg-[#f4f7ef] px-[14px] pr-[42px] text-[14px] font-semibold text-[#40502d] outline-none transition-colors focus:border-[#6b8440] focus:ring-4 focus:ring-[#90a863]/20">
                <option value="" disabled>Select a convenient time</option>
                {TIMES.map((time) => <option key={time.value} value={time.value}>{time.label}</option>)}
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-[14px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#5f7638]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </div>
          </div>
          <div className="mt-[14px] flex items-center justify-between border-t border-[#e4eadb] pt-[12px]">
            <button type="button" onClick={() => { setSelectedDate(""); setSelectedTime(""); }} className="text-[12px] font-semibold text-[#78866b] hover:text-[#52643a]">Clear</button>
            <button type="button" onClick={() => selectedValue && setOpen(false)} disabled={!selectedValue} className="rounded-full bg-[#2b3320] px-[15px] py-[7px] text-[12px] font-bold text-[#d5e96e] transition-colors disabled:cursor-not-allowed disabled:opacity-40">Confirm slot</button>
          </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
