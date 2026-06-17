import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PostOwl.in",
  description:
    "PostOwl.in Privacy Policy — what data is stored on your device, what the website collects, and how your information is protected.",
  alternates: { canonical: "https://postowl.in/legal/privacy" },
  openGraph: {
    title: "Privacy Policy — PostOwl.in",
    description: "What data PostOwl.in stores on your device, what the website collects, and how your info is protected.",
    url: "https://postowl.in/legal/privacy",
    type: "website",
  },
  robots: { index: true, follow: false },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://postowl.in" },
    { "@type": "ListItem", "position": 2, "name": "Legal", "item": "https://postowl.in/legal/privacy" },
    { "@type": "ListItem", "position": 3, "name": "Privacy Policy", "item": "https://postowl.in/legal/privacy" },
  ],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-[#1E1B4B] dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-10">Last updated: 1 January 2026</p>

        <div className="prose prose-gray max-w-none text-gray-700 dark:text-gray-300 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">1. Data stored on your device</h2>
            <p>PostOwl.in stores all contact data, templates, campaign history, and email credentials locally on your computer. This data never leaves your device except when you actively send emails through your email provider.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">2. Data we collect (website)</h2>
            <p>This website (postowl.in) uses Google Analytics 4 to understand aggregate traffic patterns. GA4 collects anonymised usage data including page views, referrer, and approximate geographic region. No personally identifiable information is sent to Google Analytics.</p>
            <p className="mt-2">You can decline analytics tracking via the cookie consent banner at the bottom of this page. Declining prevents GA4 from loading.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">3. Email account credentials</h2>
            <p>Your email password or App Password is stored encrypted in your operating system&apos;s local application data folder. It is used only to authenticate with your email provider when you send a campaign. It is never transmitted to PostOwl.in servers (which do not exist).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">4. Notify-me form</h2>
            <p>If you submit your email on the Download page to be notified of the Linux version, we store your email address solely for that purpose. We will not use it for any other marketing. You can request deletion by emailing <a href="mailto:hello@postowl.in" className="text-[#1E1B4B] dark:text-amber-400 underline">hello@postowl.in</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">5. Third parties</h2>
            <p>We do not sell or share your data with third parties. The only third-party service this website uses is Google Analytics (subject to Google&apos;s Privacy Policy) and Vercel hosting (for serving these web pages).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">6. Your rights</h2>
            <p>You have the right to access, correct, or delete any personal data we hold about you. Contact us at <a href="mailto:hello@postowl.in" className="text-[#1E1B4B] dark:text-amber-400 underline">hello@postowl.in</a> to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">7. Contact</h2>
            <p>Privacy questions: <a href="mailto:hello@postowl.in" className="text-[#1E1B4B] dark:text-amber-400 underline">hello@postowl.in</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
