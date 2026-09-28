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

const YelpIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <rect x="9.6" y="1.5" width="4" height="10" rx="2" transform="rotate(-8 11.6 6.5)" />
    <rect x="3" y="9.8" width="7.4" height="3.8" rx="1.9" transform="rotate(14 6.7 11.7)" />
    <rect x="14.2" y="8.6" width="7.4" height="3.8" rx="1.9" transform="rotate(-24 17.9 10.5)" />
    <rect x="4.6" y="15.2" width="6.8" height="3.8" rx="1.9" transform="rotate(-38 8 17.1)" />
    <rect x="12.8" y="15.2" width="6.8" height="3.8" rx="1.9" transform="rotate(42 16.2 17.1)" />
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

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Yelp", Icon: YelpIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
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