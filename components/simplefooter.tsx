import Image from "next/image";

type IconProps = { className?: string };



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

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsappIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z" />
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M13.6 22v-8.3h2.8l.4-3.3h-3.2V8.3c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4v3.3h2.8V22z" />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="5" cy="5" r="2.2" />
    <rect x="3" y="8.8" width="4" height="12.2" rx="0.4" />
    <path d="M9.6 8.8h3.8v1.8c.6-1.1 2-2.1 4-2.1 3.6 0 4.2 2.3 4.2 5.4V21h-4v-6.3c0-1.5-.1-3.2-2-3.2-2 0-2.2 1.5-2.2 3.1V21H9.6z" />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3Z" />
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

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-[20px] text-center md:grid md:grid-cols-3 md:items-center md:gap-0 md:text-left">
          <p className="text-[15px] text-[#eef2e6]/85">2026 &copy; Enhance Physiotherapy &amp; Wellness. All rights reserved.</p>

          <div className="flex items-center justify-center gap-[14px] text-[15px] text-[#eef2e6]/85">
            <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-[#6b8440]" />
            <a href="/privacy-policy" className="transition-colors duration-200 hover:text-[#c3d957]">Privacy Policy</a>
          </div>

          <div className="flex items-center justify-end gap-[32px] md:pr-[12px]">
            {socials.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="text-[#eef2e6] transition-colors duration-200 hover:text-[#c3d957]">
                <Icon className="h-[23px] w-[23px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}