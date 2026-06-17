import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProviderBar from "@/components/ProviderBar";
import UseCaseStrip from "@/components/UseCaseStrip";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import DownloadCTA from "@/components/DownloadCTA";

export const metadata: Metadata = {
  title: "PostOwl.in — Send personalised bulk email for free",
  description:
    "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows. No subscription.",
  alternates: { canonical: "https://postowl.in" },
  openGraph: {
    title: "PostOwl.in — Send personalised bulk email for free",
    description:
      "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows. No subscription.",
    url: "https://postowl.in",
    siteName: "PostOwl.in",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostOwl.in — Send personalised bulk email for free",
    description:
      "Free desktop app to send personalised bulk email from Gmail, Outlook, or any email account. No subscription.",
    site: "@postowlin",
    creator: "@postowlin",
  },
};

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is PostOwl.in really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Download it, connect your email account, and send. No sign-up, no subscription, no credit card.",
        },
      },
      {
        "@type": "Question",
        "name": "Which email accounts work with PostOwl.in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gmail, Outlook / Microsoft 365, Zoho Mail, Yahoo Mail, AWS SES, Postmark, and any other service that supports standard email sending. If your company has a business email, it almost certainly works.",
        },
      },
      {
        "@type": "Question",
        "name": "Does my contact list ever leave my computer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your contacts, templates, and campaign history are stored only on your computer. The only data that leaves your machine is the emails you choose to send — which go through your email provider, not through PostOwl's servers. PostOwl has no servers.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the sending limit for PostOwl.in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PostOwl itself has no sending limit. Your email provider sets the limit. Free Gmail allows about 500 emails per day; Google Workspace allows 2,000 per day; AWS SES has no practical daily cap.",
        },
      },
      {
        "@type": "Question",
        "name": "Does PostOwl.in work on Windows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. PostOwl.in supports macOS 12+ and Windows 10/11 (64-bit).",
        },
      },
      {
        "@type": "Question",
        "name": "What happens if an email fails to send?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Failed emails appear in the campaign log with a plain-English explanation. You can retry any or all failures with one click.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I use my company Outlook account with PostOwl.in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Enter your Microsoft 365 credentials in the setup wizard. If your IT admin has disabled SMTP AUTH for your account, ask them to enable it.",
        },
      },
      {
        "@type": "Question",
        "name": "Is there a mobile version of PostOwl.in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — PostOwl.in is a desktop app for Mac and Windows. A browser-based version may come in the future.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to send personalised bulk email with PostOwl.in",
    "description":
      "Send personalised bulk email to your whole list from your own Gmail, Outlook, or any email account — for free.",
    "totalTime": "PT5M",
    "supply": [
      { "@type": "HowToSupply", "name": "PostOwl.in desktop app" },
      { "@type": "HowToSupply", "name": "Gmail, Outlook, or any email account" },
      { "@type": "HowToSupply", "name": "CSV file with contact list" },
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Connect your email account",
        "text": "Download and open PostOwl.in. Pick Gmail, Outlook, Zoho, Yahoo, or any email provider. Credentials stay encrypted on your computer.",
        "url": "https://postowl.in/docs#email-setup",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Import your contact list",
        "text": "Upload a spreadsheet (CSV from Excel or Google Sheets), or pick a saved group of contacts — no re-uploading needed.",
        "url": "https://postowl.in/docs#contacts",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Write your email with personalisation",
        "text": "Use {{first_name}}, {{company}}, or any column from your list. PostOwl.in replaces each field with that person's data automatically.",
        "url": "https://postowl.in/docs#bulk-send",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Review and send",
        "text": "Preview exactly how the first email looks before anything goes out. Watch sends happen live. Retry any failures instantly.",
        "url": "https://postowl.in/docs#bulk-send",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />
      <HeroSection />
      <ProviderBar />
      <UseCaseStrip />
      <FeatureGrid />
      <HowItWorks />
      <ComparisonTable />
      <FAQAccordion />
      <DownloadCTA location="footer" />
    </>
  );
}
