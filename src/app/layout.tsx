import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "PostOwl.in — Send personalised bulk email for free",
    template: "%s — PostOwl.in",
  },
  description:
    "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows. No subscription.",
  metadataBase: new URL("https://postowl.in"),
  openGraph: {
    type: "website",
    siteName: "PostOwl.in",
    title: "PostOwl.in — Send personalised bulk email for free",
    description:
      "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows. No subscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostOwl.in — Send personalised bulk email for free",
    description:
      "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PostOwl.in",
  applicationCategory: "BusinessApplication",
  operatingSystem: "macOS, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows.",
  url: "https://postowl.in",
  author: {
    "@type": "Person",
    name: "Rohit Agarwal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
