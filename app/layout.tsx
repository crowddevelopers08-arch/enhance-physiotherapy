import type { Metadata } from "next";
import { Khula } from "next/font/google";
import Script from "next/script";
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

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1411814147803405');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1411814147803405&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Google tag (Google Ads) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18497587243" strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18497587243');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "yudzaln452");`}
        </Script>
      </body>
    </html>
  );
}
