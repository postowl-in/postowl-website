import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PostOwl.in is Free",
  description:
    "No subscription. No per-email fees. Download PostOwl.in and send personalised bulk email from your own Gmail or Outlook — completely free.",
  alternates: { canonical: "https://postowl.in/pricing" },
  openGraph: {
    title: "PostOwl.in is Free — No subscription, no per-email fees",
    description:
      "No subscription. No per-email fees. Download PostOwl.in and send personalised bulk email from your own Gmail or Outlook — completely free.",
    url: "https://postowl.in/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostOwl.in is Free",
    description:
      "No subscription. No per-email fees. Send personalised bulk email from your own email account — free.",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "PostOwl.in",
  "description": "Free desktop app to send personalised bulk email from Gmail, Outlook, or any email account. No subscription, no per-email fees.",
  "brand": { "@type": "Brand", "name": "PostOwl.in" },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Person", "name": "Rohit Agarwal" },
    "url": "https://postowl.in/download"
  },
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "macOS 12+, Windows 10/11",
  "featureList": "Unlimited campaigns, Unlimited contacts, Multiple email accounts, Personalisation fields, 10 starter templates, Full campaign logs and retry, Local data storage"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://postowl.in" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://postowl.in/pricing" }
  ]
};

const included = [
  "Unlimited campaigns",
  "Unlimited contacts",
  "Multiple email accounts",
  "Personalisation fields",
  "10 starter templates",
  "Full campaign logs & retry",
  "Your data — never leaves device",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E1B4B] dark:text-white">
            PostOwl.in is free.
          </h1>
          <p className="mt-5 text-gray-500 dark:text-gray-400 text-xl max-w-xl mx-auto">
            No subscription. No per-email fees. Download and run it on your
            computer — that&apos;s it.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-sm mx-auto mb-10">
          <div className="bg-white dark:bg-gray-800 border-2 border-[#1E1B4B] dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#1E1B4B] px-8 py-6 text-center">
              <p className="text-[#F59E0B] text-sm font-bold uppercase tracking-wider mb-1">
                PostOwl.in
              </p>
              <p className="text-white text-5xl font-extrabold">Free</p>
              <p className="text-white/60 text-sm mt-2">No subscription. No credit card.</p>
            </div>
            <div className="px-8 py-8">
              <ul className="space-y-4 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <Check
                      size={18}
                      className="text-[#F59E0B] shrink-0"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="block w-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E1B4B] font-bold text-center py-4 rounded-xl transition-colors text-base"
              >
                Download Free →
              </Link>
            </div>
          </div>
        </div>

        {/* Provider cost note */}
        <div className="text-center mb-16">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
            You pay your email provider — often nothing at low volume:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Gmail (free)", note: "~500 emails/day" },
              { label: "Outlook (free)", note: "~300 emails/day" },
              { label: "AWS SES", note: "~$0.10/1,000 emails" },
            ].map((p) => (
              <div
                key={p.label}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50 rounded-lg px-4 py-2 text-center"
              >
                <div className="text-gray-800 dark:text-gray-200 font-medium text-sm">{p.label}</div>
                <div className="text-gray-400 dark:text-gray-500 text-xs">{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ context */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white mb-6">Common questions about pricing</h2>
          <div className="space-y-6">
            <div>
              <p className="font-medium text-gray-900 dark:text-white mb-1">Is there a paid plan?</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Not yet. A Pro tier with scheduled sends, team sharing, and priority support is
                planned. The core app will remain free.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white mb-1">What about sending limits?</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                PostOwl itself has no sending limit. Your email provider sets the limit. Free Gmail
                allows about 500 emails/day; Google Workspace 2,000/day; AWS SES has no practical
                daily cap.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white mb-1">No hidden costs?</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Correct. PostOwl charges nothing. You may pay your email provider at high volume —
                most providers include generous free tiers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
