import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { ThemeProvider } from "@/components/ThemeProvider";
import GoogleAnalyticsConsent from "@/components/GoogleAnalyticsConsent";

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

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PostOwl.in",
    applicationCategory: "BusinessApplication",
    operatingSystem: "macOS 12+, Windows 10/11",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    downloadUrl: "https://postowl.in/download",
    description:
      "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows. No subscription.",
    featureList: [
      "Mail merge personalisation",
      "CSV contact import",
      "10 starter templates",
      "Campaign tracking and retry",
      "Multiple email accounts",
      "Local data storage — no cloud",
    ],
    url: "https://postowl.in",
    author: {
      "@type": "Person",
      name: "Rohit Agarwal",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://postowl.in",
    name: "PostOwl.in",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://postowl.in/docs?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rohit Agarwal",
    url: "https://postowl.in",
    sameAs: ["https://github.com/rohitagr0310"],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <GoogleAnalyticsConsent />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
