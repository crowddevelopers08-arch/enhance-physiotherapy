import type { Metadata } from "next";
import SimpleHeader from "../../components/SimpleHeader";
import SectionLabel from "../../components/SectionLabel";
import Footer from "@/components/simplefooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Enhance Physiotherapy & Wellness",
  description: "How Enhance Physiotherapy & Wellness collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you book a consultation, request a home visit, or contact us, we may collect the following information:",
    ],
    list: [
      "Personal details such as your name, phone number, email address, and home address.",
      "Health information you choose to share, such as your symptoms, medical history, and recovery goals.",
      "Appointment details, including preferred dates, times, and visit location.",
      "Basic technical information when you use our website, such as browser type, device, and pages visited.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: ["We use your information only to provide and improve our physiotherapy services, including to:"],
    list: [
      "Schedule, confirm, and manage your appointments and home visits.",
      "Assess your condition and create a personalised treatment plan.",
      "Contact you about your appointments, treatment progress, and follow-up care.",
      "Respond to your questions and requests.",
      "Improve our website and the quality of our care.",
    ],
  },
  {
    title: "Protecting Your Health Information",
    body: [
      "Your health information is treated as confidential. It is accessed only by our physiotherapists and staff who need it to provide your care, and it is stored securely. We take reasonable technical and organisational measures to protect your information from unauthorised access, loss, or misuse.",
    ],
  },
  {
    title: "Sharing Your Information",
    body: [
      "We do not sell, rent, or trade your personal information. We may share it only when it is necessary for your care (for example, with your doctor when you ask us to), with trusted service providers who help us run our services under strict confidentiality, or when we are required to do so by law.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our website may use cookies and similar technologies to understand how visitors use the site and to improve your experience. You can disable cookies in your browser settings; some parts of the website may not work as intended if you do.",
    ],
  },
  {
    title: "Your Rights",
    body: ["You can contact us at any time to:"],
    list: [
      "Request a copy of the personal information we hold about you.",
      "Ask us to correct information that is inaccurate or incomplete.",
      "Ask us to delete your information, where we are not required to keep it.",
      "Opt out of receiving non-essential messages from us.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We keep your information only for as long as it is needed to provide your care, meet our legal and professional obligations, and resolve any questions or disputes.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SimpleHeader />

      <main className="flex-1 bg-white font-sans">
        {/* Page heading */}
        <section className="w-full bg-[#eef2e6] px-5 py-[56px] md:px-8 lg:py-[32px]">
          <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
            <SectionLabel centered>Legal</SectionLabel>
            <h1 className="mt-[18px] text-[#1c1f1a] text-[clamp(26px,6.4vw,36px)] md:text-[clamp(32px,min(4vw,7svh),46px)] lg:text-[clamp(34px,min(2.9vw,7svh),52px)] font-bold leading-[1.1] tracking-[-0.02em]">
              Privacy <span className="text-[#6b8440]">Policy</span>
            </h1>
            <p className="mt-[14px] max-w-[640px] text-[15px] leading-[1.7] text-[#5b6055] sm:text-[17px]">
              Your privacy matters to us. This policy explains how Enhance Physiotherapy &amp; Wellness collects, uses,
              and protects your personal information.
            </p>
            <span className="mt-[18px] text-[13px] font-medium uppercase tracking-[0.12em] text-[#6b8440]">
              Last updated: September 28, 2026
            </span>
          </div>
        </section>

        {/* Policy content */}
        <section className="w-full px-5 py-[56px] md:px-8 lg:py-[72px]">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[20px] md:grid-cols-2 lg:gap-[24px]">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className="flex gap-[16px] rounded-[24px] border border-[#d3dac6] bg-white p-[22px] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(38,48,28,0.08)] sm:gap-[20px] sm:p-[30px]"
              >
                <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#6b8440] text-[14px] font-semibold text-white ring-4 ring-[#90a863]/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col">
                  <h2 className="text-[22px] font-bold leading-[1.3] text-[#1c1f1a] sm:text-[26px]">{section.title}</h2>
                  {section.body.map((text) => (
                    <p key={text} className="mt-[10px] text-[15px] leading-[1.8] text-[#5b6055] sm:text-[16px]">
                      {text}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-[12px] flex flex-col gap-[8px]">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-[12px] text-[15px] leading-[1.7] text-[#5b6055] sm:text-[16px]">
                          <span className="mt-[10px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#90a863]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            {/* Contact box */}
            <div className="rounded-[24px] border border-[#d3dac6] bg-[#eef2e6] p-[24px] sm:p-[32px] md:col-span-2 md:flex md:items-center md:justify-between md:gap-[32px]">
              <div>
              <h2 className="text-[22px] font-bold leading-[1.3] text-[#1c1f1a] sm:text-[26px]">Contact Us</h2>
              <p className="mt-[10px] text-[15px] leading-[1.8] text-[#5b6055] sm:text-[16px]">
                If you have any questions about this Privacy Policy or how we handle your information, please get in touch
                with Enhance Physiotherapy &amp; Wellness.
              </p>
              </div>
              <a
                href="tel:+917204441668"
                className="mt-[18px] inline-flex shrink-0 md:mt-0 h-[52px] items-center gap-[12px] rounded-full bg-[#6b8440] pl-[8px] pr-[22px] text-[16px] font-medium text-white transition-colors duration-200 hover:bg-[#5d7437]"
              >
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#26301c]">
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8.3 3.5 9.9 7.3a1.2 1.2 0 0 1-.3 1.4L8 10.1a11 11 0 0 0 5.9 5.9l1.4-1.6a1.2 1.2 0 0 1 1.4-.3l3.8 1.6a1.2 1.2 0 0 1 .7 1.3l-.4 2.4a1.9 1.9 0 0 1-1.9 1.6C10.4 21 3 13.6 3 5a1.9 1.9 0 0 1 1.6-1.9l2.4-.4a1.2 1.2 0 0 1 1.3.8Z" />
                  </svg>
                </span>
                +91 72044 41668
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
