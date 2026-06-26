import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--heading-font" });

export const metadata: Metadata = {
  metadataBase: new URL("https://thinkai.hu"),
  title: {
    default: "ThinkAI — Működő AI megoldások vállalkozásoknak",
    template: "%s | ThinkAI",
  },
  description:
    "Működő AI megoldásokat szállítunk: ügyfélszolgálat automatizálás, egyedi fejlesztés, pályázati támogatás. Több mint 20 sikeres projekt, mérhető eredmények.",
  keywords: [
    "AI megoldások",
    "mesterséges intelligencia",
    "AI tanácsadás",
    "AI fejlesztés",
    "ügyfélszolgálat automatizálás",
    "AI pályázat",
    "chatbot",
    "üzleti automatizálás",
    "ThinkAI",
  ],
  authors: [{ name: "ThinkAI Kft." }],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    alternateLocale: "en_US",
    siteName: "ThinkAI",
    title: "ThinkAI — Működő AI megoldások vállalkozásoknak",
    description:
      "Működő AI megoldásokat szállítunk: ügyfélszolgálat automatizálás, egyedi fejlesztés, pályázati támogatás.",
    url: "https://thinkai.hu",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkAI — Működő AI megoldások vállalkozásoknak",
    description:
      "Működő AI megoldásokat szállítunk: ügyfélszolgálat automatizálás, egyedi fejlesztés, pályázati támogatás.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://thinkai.hu",
    languages: {
      "hu": "https://thinkai.hu",
      "en": "https://thinkai.hu/en",
      "x-default": "https://thinkai.hu",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1402820247806743&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1402820247806743');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JCNSN0SDBQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JCNSN0SDBQ');
          `}
        </Script>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
