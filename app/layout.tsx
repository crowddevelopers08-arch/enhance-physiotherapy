import type { Metadata } from "next";
import { Khula } from "next/font/google";
import "./globals.css";
import BookingModal from "../components/BookingModal";
import ScrollReveal from "../components/ScrollReveal";

// Khula has no 500 weight; globals.css maps font-medium to 600
const khula = Khula({
  variable: "--primary-font",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Enhance Physiotherapy & Wellness | Physiotherapy & Chiropractic Care",
  description: "Pain-free living starts with chiropractic care.",
  // ENHANCE.png on a white background (the original PNG is transparent)
  icons: {
    icon: [{ url: "/enhance-icon.png", type: "image/png" }],
    shortcut: "/enhance-icon.png",
    apple: "/enhance-apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${khula.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <BookingModal />
        <ScrollReveal />
      </body>
    </html>
  );
}
