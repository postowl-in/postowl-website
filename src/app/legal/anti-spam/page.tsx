import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Spam Policy — PostOwl.in",
  description:
    "PostOwl.in Anti-Spam Policy — responsible sending rules, what counts as spam, and your obligations as a sender.",
  alternates: { canonical: "https://postowl.in/legal/anti-spam" },
  openGraph: {
    title: "Anti-Spam Policy — PostOwl.in",
    description: "Responsible sending rules, what counts as spam, and sender obligations under PostOwl.in.",
    url: "https://postowl.in/legal/anti-spam",
    type: "website",
  },
  robots: { index: true, follow: false },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://postowl.in" },
    { "@type": "ListItem", "position": 2, "name": "Legal", "item": "https://postowl.in/legal/anti-spam" },
    { "@type": "ListItem", "position": 3, "name": "Anti-Spam Policy", "item": "https://postowl.in/legal/anti-spam" },
  ],
};

export default function AntiSpamPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-[#1E1B4B] dark:text-white mb-2">Anti-Spam Policy</h1>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-10">Last updated: 1 January 2026</p>

        <div className="prose prose-gray max-w-none text-gray-700 dark:text-gray-300 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">Our position on spam</h2>
            <p>PostOwl.in is designed for legitimate bulk email — HR communications, event invitations, newsletters to opted-in audiences, and business outreach to people who have a reasonable expectation of hearing from you. We take a zero-tolerance approach to spam.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">What counts as spam?</h2>
            <p>Spam is unsolicited commercial email sent to recipients who have not given consent. Specific examples:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
              <li>Emailing purchased or scraped lists.</li>
              <li>Sending to recipients who have previously unsubscribed or asked not to be contacted.</li>
              <li>Disguising the sender identity or using misleading subject lines.</li>
              <li>Sending bulk email that violates CAN-SPAM, GDPR, CASL, or equivalent laws in your jurisdiction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">Your responsibilities as a sender</h2>
            <p>When you use PostOwl.in, you are the sender — not us. You are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
              <li>Only emailing people who have given you a legitimate reason to contact them.</li>
              <li>Including a clear way for recipients to opt out of future emails.</li>
              <li>Honouring opt-out requests promptly.</li>
              <li>Including your physical mailing address in commercial emails (required by CAN-SPAM).</li>
              <li>Complying with applicable anti-spam laws in your country and the countries of your recipients.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">Technical note</h2>
            <p>PostOwl.in sends emails through your own email account. Misuse may result in your email provider suspending your account. We are not liable for consequences arising from your violation of your email provider&apos;s terms or applicable anti-spam law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">Report abuse</h2>
            <p>If you believe PostOwl.in is being used to send you spam, contact us at <a href="mailto:hello@postowl.in" className="text-[#1E1B4B] dark:text-amber-400 underline">hello@postowl.in</a>. Include the full email headers so we can investigate.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
