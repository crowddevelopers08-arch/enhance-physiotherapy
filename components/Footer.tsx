import Image from "next/image";
import Link from "next/link";
import FooterTimings from "./FooterTimings";

type IconProps = { className?: string };

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Conditions", href: "/#conditions" },
      { label: "Why Choose Us", href: "/#why-choose-us" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About the Doctor", href: "/#about" },
      { label: "About the Clinic", href: "/#about-clinic" },
      { label: "How Home Visits Work", href: "/#how-it-works" },
      { label: "Book an Appointment", href: "/#appointment" },
    ],
  },
  {
    title: "Conditions We Help With",
    links: [
      { label: "Neuro Rehabilitation", href: "/#conditions" },
      { label: "Orthopedic Rehabilitation", href: "/#conditions" },
      { label: "Pain Management", href: "/#conditions" },
      { label: "Home Physiotherapy", href: "/#conditions" },
      { label: "Sports Physiotherapy", href: "/#conditions" },
    ],
  },
];

const PhoneIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8.6 4.5 6.4 3.6a1.3 1.3 0 0 0-1.5.4L3.6 5.6c-.5.6-.6 1.5-.3 2.2a22 22 0 0 0 12.9 12.9c.7.3 1.6.2 2.2-.3l1.6-1.3c.5-.4.6-1 .4-1.5l-.9-2.2a1.3 1.3 0 0 0-1.4-.8l-2.5.4a11 11 0 0 1-5.5-5.5l.4-2.5a1.3 1.3 0 0 0-.8-1.4z" />
    <path d="M14.5 3.5v2.3M18.6 5.4l-1.6 1.6M20.5 9.5h-2.3" />
  </svg>
);

const PlusIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);


const WhatsappIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z" />
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.6v-7.7H10v-3h2.6V9.1c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3h-2.6V22H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3Z" />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="5" cy="5" r="2.2" />
    <rect x="3" y="8.8" width="4" height="12.2" rx="0.4" />
    <path d="M9.6 8.8h3.8v1.8c.6-1.1 2-2.1 4-2.1 3.6 0 4.2 2.3 4.2 5.4V21h-4v-6.3c0-1.5-.1-3.2-2-3.2-2 0-2.2 1.5-2.2 3.1V21H9.6z" />
  </svg>
);

const PinterestIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.02 0C5.4 0 .03 5.37.03 11.99c0 5.08 3.16 9.42 7.62 11.16-.1-.95-.2-2.4.04-3.44.22-.94 1.41-5.96 1.41-5.96s-.36-.72-.36-1.78c0-1.66.97-2.91 2.17-2.91 1.02 0 1.52.77 1.52 1.69 0 1.03-.65 2.57-.99 3.99-.29 1.19.6 2.17 1.77 2.17 2.13 0 3.77-2.25 3.77-5.49 0-2.86-2.06-4.87-5.01-4.87-3.41 0-5.41 2.56-5.41 5.2 0 1.03.39 2.14.89 2.74.1.12.11.23.09.35-.09.37-.3 1.2-.34 1.36-.05.23-.17.27-.4.17-1.5-.69-2.43-2.88-2.43-4.65 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.97 7.39 6.92 0 4.14-2.61 7.46-6.23 7.46-1.21 0-2.35-.63-2.76-1.38l-.75 2.85c-.27 1.05-1 2.35-1.5 3.15 1.12.34 2.31.54 3.55.54 6.61 0 11.99-5.37 11.99-11.99C24 5.37 18.63 0 12.02 0Z" />
  </svg>
);

const socials = [
  { label: "WhatsApp", href: "https://wa.me/917204441668", Icon: WhatsappIcon },
  { label: "Share on Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=https://www.enhancephysiotherapy.in", Icon: FacebookIcon },
  { label: "Share on X", href: "https://x.com/i/jf/onboarding/web?redirect_after_login=%2Fintent%2Ftweet%3Ftext%3DCheck%2Bout%2B%26url%3Dhttps%3A%2F%2Fwww.enhancephysiotherapy.in&mode=login", Icon: XIcon },
  { label: "Share on LinkedIn", href: "https://www.linkedin.com/login/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%3A%2F%2Fwww.enhancephysiotherapy.in", Icon: LinkedinIcon },
  { label: "Share on Pinterest", href: "https://in.pinterest.com/pin/create/button/?url=https://www.enhancephysiotherapy.in", Icon: PinterestIcon },
];
const MailIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5 12 13l8.5-6.5" />
  </svg>
);

const PinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const ClockIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const contactItems = [
  { label: "contact@enhance-physio.com", href: "mailto:contact@enhance-physio.com", Icon: MailIcon },
  {
    label: "#116, Raiyaan Arcade, HBR 1st Stage, 1st Block",
    href: "https://www.google.com/maps/search/?api=1&query=%23116%2C+Raiyaan+Arcade%2C+HBR+1st+Stage%2C+1st+Block%2C+Bangalore",
    Icon: PinIcon,
  },
];

/* Hairline with a small dot at each end */
function DotLine({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`relative block h-px bg-[#4f6136] ${className}`}>
      <span className="absolute -left-[2px] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#6b8440]" />
      <span className="absolute -right-[2px] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#6b8440]" />
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#26301c] px-5 pt-[34px] pb-[26px] font-sans text-[#eef2e6] md:px-8">
      <div className="mx-auto w-full max-w-[1632px]">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center" aria-label="Enhance Physiotherapy & Wellness – Home">
          <Image src="/enhance-emblem.png" alt="" width={766} height={608} className="h-[76px] w-auto" />
          <Image
            src="/enhance-wordmark.png"
            alt="Enhance – Be your best self"
            width={650}
            height={176}
            className="mt-[12px] h-[38px] w-auto"
          />
        </Link>

        {/* Phone + line + CTA */}
        <div className="mt-[22px] flex flex-col items-center gap-[22px] md:flex-row md:justify-center md:gap-0">
          <a href="tel:+917204441668" className="flex items-center gap-[12px]">
            <span className="flex h-[51px] w-[51px] items-center justify-center rounded-full bg-[#c3d957] text-[#26301c]">
              <PhoneIcon className="h-[24px] w-[24px]" />
            </span>
            <span className="text-[24px] font-bold tracking-[-0.02em] text-white sm:text-[27px]">+91 72044 41668</span>
          </a>

          <DotLine className="mx-[52px] hidden w-[354px] md:block" />

          {/* Plain <a> on purpose: BookingModal opens on "#appointment" link clicks, and <Link> would
              preventDefault first and navigate instead of opening the form. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/#appointment"
            className="flex min-h-[54px] items-center gap-[12px] rounded-full bg-[#c3d957] py-[10px] pl-[14px] pr-[22px] text-[15px] font-medium leading-snug text-[#2b3320] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-0.5 sm:pl-[16px] sm:text-[17px]"
          >
            <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-white">
              <PlusIcon className="h-[14px] w-[14px]" />
            </span>
            Book Appointment
          </a>
        </div>

        {/* Link columns */}
        <div className="mt-[54px] grid grid-cols-2 gap-x-6 gap-y-[20px] md:grid-cols-3 lg:grid-cols-[1fr_1fr_1.15fr_1.15fr_1.35fr]">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c3d957] md:text-[13px]">{col.title}</h3>
              <span className="mt-[8px] block h-[2px] w-[56px] rounded-full bg-[#c3d957]" />
              <ul className="mt-[18px] flex flex-col gap-[6px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] leading-[1.7] text-white/80 transition-colors duration-200 hover:text-[#c3d957] sm:text-[17px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <FooterTimings />

          {/* Contact details */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c3d957] md:text-[13px]">Contact Us</h3>
            <span className="mt-[8px] block h-[2px] w-[56px] rounded-full bg-[#c3d957]" />
            <ul className="mt-[18px] flex flex-col gap-[12px] text-[15px] leading-[1.6] text-white/80 sm:text-[17px]">
              {contactItems.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-start gap-[12px] transition-colors duration-200 hover:text-[#c3d957]"
                  >
                    <Icon className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[#c3d957]" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-[12px]">
                <ClockIcon className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[#c3d957]" />
                <span>
                  Open till <span className="font-semibold text-white">8:00 PM</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <DotLine className="mt-[32px] w-full" />

        {/* Bottom bar */}
        <div className="mt-[30px] flex flex-col items-center gap-[20px] text-center md:grid md:grid-cols-3 md:items-center md:gap-0 md:text-left">
          <p className="text-[15px] leading-[1.7] text-white/80">2026 &copy; Enhance Physiotherapy &amp; Wellness. All rights reserved.</p>

          <div className="flex items-center justify-center gap-[8px] text-[15px] leading-[1.7] text-white/80">
            <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-[#6b8440]" />
            <a href="/privacy-policy" className="transition-colors duration-200 hover:text-[#c3d957]">Privacy Policy</a>
          </div>

          <div className="flex items-center justify-end gap-[32px] md:pr-[12px]">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label} className="text-[#eef2e6] transition-colors duration-200 hover:text-[#c3d957]">
                <Icon className="h-[21px] w-[21px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}