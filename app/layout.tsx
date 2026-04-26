import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { getSiteUrl, SEO_KEYWORDS, SITE } from "@/lib/site";

const siteUrl = getSiteUrl();

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

const description = `${SITE.title} with 7+ years building production-scale web and mobile systems. Expertise: React, React Native, TypeScript, real-time & IoT.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} - Senior Frontend & Mobile Engineer`,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${SITE.name} - Portfolio`,
    title: `${SITE.name} - Senior Frontend Engineer | React & React Native`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - Senior Frontend & Mobile Engineer`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.title,
    description,
    knowsAbout: [...SEO_KEYWORDS],
    email: SITE.email.startsWith("[") ? undefined : SITE.email,
    url: siteUrl,
  };

  return (
    <html lang="en" className={`${instrument.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
