import type { Metadata } from "next";
import { Plug, FolderOpen, Edit3, Send, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How PostOwl.in works — Step-by-step guide",
  description:
    "Connect your email, import contacts, write a personalised template, then send. PostOwl.in runs entirely on your computer — no cloud, no account needed.",
  alternates: { canonical: "https://postowl.in/how-it-works" },
  openGraph: {
    title: "How PostOwl.in works — Step-by-step guide",
    description:
      "Connect your email, import contacts, write a personalised template, then send. PostOwl.in runs entirely on your computer — no cloud, no account needed.",
    url: "https://postowl.in/how-it-works",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How PostOwl.in works — Step-by-step guide",
    description:
      "Send personalised bulk email from your own Gmail, Outlook, or any account. Free desktop app, data stays on your machine.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://postowl.in" },
    { "@type": "ListItem", "position": 2, "name": "How it works", "item": "https://postowl.in/how-it-works" },
  ],
};

const howToSchema = {
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
};

const steps = [
  {
    number: 1,
    icon: Plug,
    title: "Connect your email account",
    description:
      "Download and open PostOwl.in on your Mac or Windows machine. Pick your email provider — Gmail, Outlook, Zoho, Yahoo, or any SMTP-compatible account. PostOwl.in walks you through a one-time setup in under two minutes. Your credentials are encrypted and stored locally; they never touch PostOwl servers.",
  },
  {
    number: 2,
    icon: FolderOpen,
    title: "Import your contact list",
    description:
      "Upload a CSV exported from Excel, Google Sheets, or any spreadsheet tool. PostOwl.in detects your columns automatically — first name, company, email, or any custom field you have. You can also save contacts into named groups and reuse them across campaigns without re-uploading every time.",
  },
  {
    number: 3,
    icon: Edit3,
    title: "Write your email with personalisation",
    description:
      "Type your email in the built-in editor and insert merge fields like {{first_name}}, {{company}}, or any column from your spreadsheet. PostOwl.in substitutes each field with that recipient's real data automatically. Choose from 10 ready-made templates for hiring, sales, events, and marketing — or save your own.",
  },
  {
    number: 4,
    icon: Send,
    title: "Preview, send, and track",
    description:
      "Before anything goes out, preview exactly how the first email will look for the first recipient. When you're happy, hit send and watch each email go out in real time. Per-recipient status shows sent, failed, or pending at a glance. Any failures get a plain-English reason and a one-click retry button.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-widest mb-4">
            Step-by-step guide
          </p>
          <h1 className="font-bold text-5xl sm:text-6xl text-[#1E1B4B] dark:text-white leading-tight">
            How PostOwl.in works
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            From install to inbox in under five minutes. No cloud account.
            No subscription. Just your email, your contacts, and your words.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative space-y-0">
          {/* Vertical connector line */}
          <div
            aria-hidden="true"
            className="absolute left-9 top-12 bottom-12 w-px bg-gray-100 dark:bg-gray-800 hidden sm:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <li key={step.number} className={`relative flex gap-6 sm:gap-8 ${isLast ? "" : "pb-12"}`}>
                {/* Step badge + icon */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-700/40 shadow-sm">
                    <Icon
                      size={28}
                      className="text-[#F59E0B]"
                      strokeWidth={1.75}
                    />
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#F59E0B] text-[#1E1B4B] text-xs font-extrabold flex items-center justify-center shadow">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 pb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] dark:text-white mb-3">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[#1E1B4B] dark:bg-[#2d2960] px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to try it yourself?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
            Download PostOwl.in free. No sign-up. No credit card. Runs on
            Mac and Windows.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FCD34D] text-[#1E1B4B] font-bold px-8 py-4 rounded-xl text-base transition-colors duration-200 shadow-lg shadow-amber-500/20"
          >
            Download Free
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
