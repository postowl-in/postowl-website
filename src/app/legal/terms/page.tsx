import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PostOwl.in",
  description:
    "Read the PostOwl.in Terms of Service — acceptable use, warranties, liability, and your rights when using the app.",
  alternates: { canonical: "https://postowl.in/legal/terms" },
  openGraph: {
    title: "Terms of Service — PostOwl.in",
    description: "PostOwl.in Terms of Service — acceptable use, warranties, liability, and your rights.",
    url: "https://postowl.in/legal/terms",
    type: "website",
  },
  robots: { index: true, follow: false },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://postowl.in" },
    { "@type": "ListItem", "position": 2, "name": "Legal", "item": "https://postowl.in/legal/terms" },
    { "@type": "ListItem", "position": 3, "name": "Terms of Service", "item": "https://postowl.in/legal/terms" },
  ],
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-[#1E1B4B] mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: 1 January 2026</p>

        <div className="prose prose-gray max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B]">1. Acceptance of Terms</h2>
            <p>By downloading or using PostOwl.in (&quot;the App&quot;), you agree to these Terms of Service. If you do not agree, do not use the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B]">2. Description of Service</h2>
            <p>PostOwl.in is a desktop application that enables users to send personalised bulk email through their own email accounts. The App runs locally on your device. Rohit Agarwal (&quot;we&quot;, &quot;us&quot;) does not operate email sending infrastructure — all emails are sent through your own email provider.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B]">3. Acceptable Use</h2>
            <p>You agree to use PostOwl.in only for lawful purposes. You must not use the App to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
              <li>Send unsolicited commercial email (spam) to recipients who have not opted in.</li>
              <li>Violate any applicable law or regulation, including CAN-SPAM, GDPR, CASL, or equivalent.</li>
              <li>Impersonate another person or organisation.</li>
              <li>Distribute malware or phishing content.</li>
              <li>Violate the terms of service of your email provider.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B]">4. No Warranties</h2>
            <p>The App is provided &quot;as is&quot; without warranty of any kind. We do not guarantee that the App will be error-free, uninterrupted, or suitable for any particular purpose. Your use of the App is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B]">5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Rohit Agarwal shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to email delivery failures, account suspension by your email provider, or data loss.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B]">6. Intellectual Property</h2>
            <p>PostOwl.in and its source code, design, and trademarks are the property of Rohit Agarwal. You may not copy, modify, distribute, or create derivative works without prior written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B]">7. Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of the App after changes constitutes acceptance of the updated terms. The &quot;Last updated&quot; date at the top of this page indicates when the terms were last revised.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E1B4B]">8. Contact</h2>
            <p>Questions about these terms? Email <a href="mailto:hello@postowl.in" className="text-[#1E1B4B] underline">hello@postowl.in</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
