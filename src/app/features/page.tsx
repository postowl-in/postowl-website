import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — PostOwl.in",
  description:
    "Mail merge, contacts, 10 starter templates, campaign logs, and more. Works with Gmail, Outlook, and any email account.",
  alternates: { canonical: "https://postowl.in/features" },
  openGraph: {
    title: "Features — PostOwl.in",
    description:
      "Mail merge, contacts, 10 starter templates, campaign logs, and more. Works with Gmail, Outlook, and any email account.",
    url: "https://postowl.in/features",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — PostOwl.in",
    description:
      "Mail merge, contacts, 10 starter templates, campaign logs, and more. Free desktop email app.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "PostOwl.in Features",
  "description": "Complete feature list for PostOwl.in personalised bulk email desktop app",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Send to a list in minutes", "description": "Upload a CSV from Excel or Google Sheets, or pick a saved group of contacts. PostOwl detects columns automatically." },
    { "@type": "ListItem", "position": 2, "name": "Personalise every email automatically", "description": "Use {{first_name}}, {{company}}, or any column. Each recipient gets their own personalised version." },
    { "@type": "ListItem", "position": 3, "name": "10 starter templates included", "description": "Hiring, sales, events, marketing templates included. Edit any and save as your own." },
    { "@type": "ListItem", "position": 4, "name": "Contacts and groups", "description": "Import from any CSV. Organise into groups. Send to a group in one click." },
    { "@type": "ListItem", "position": 5, "name": "Track every send and retry failures", "description": "Per-recipient status, plain-English errors, one-click retry." },
    { "@type": "ListItem", "position": 6, "name": "Data never leaves your computer", "description": "No cloud sync, no account required. All data stored locally, encrypted." }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://postowl.in" },
    { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://postowl.in/features" }
  ]
};

const features = [
  {
    id: "send-to-list",
    icon: "📨",
    title: "Send to a list in minutes",
    bullets: [
      "Upload a CSV from Excel or Google Sheets — or pick a saved group of contacts.",
      "PostOwl detects columns automatically.",
      "Review exactly how the first email looks before anything sends.",
    ],
    mockup: (
      <div className="bg-[#1E1B4B] rounded-xl p-5 font-mono text-xs text-white/60 space-y-2">
        <div className="text-[#F59E0B] font-bold mb-3">📁 Import contacts</div>
        <div className="flex items-center gap-2">
          <span className="text-green-400">✓</span> contacts_q2.csv (300 rows)
        </div>
        <div className="text-white/40 mt-2">Detected columns:</div>
        <div className="flex flex-wrap gap-2 mt-1">
          {["first_name", "last_name", "email", "company", "role"].map((c) => (
            <span key={c} className="bg-white/10 px-2 py-0.5 rounded text-white/70">
              {c}
            </span>
          ))}
        </div>
        <div className="mt-3 bg-white/5 rounded-lg p-3">
          <div className="text-white/40 text-[10px] mb-1">Preview — first recipient</div>
          <div className="text-white/80">To: sarah@acme.com</div>
          <div className="text-white/80">Subject: Hi Sarah, interview invite</div>
        </div>
      </div>
    ),
  },
  {
    id: "personalise",
    icon: "✍️",
    title: "Personalise every email automatically",
    bullets: [
      "Use {{first_name}}, {{company}}, or any column in your file.",
      "Each recipient gets their own version — no copy-paste, no mail-merge macros.",
    ],
    mockup: (
      <div className="bg-[#1E1B4B] rounded-xl p-5 font-mono text-xs text-white/60 space-y-3">
        <div className="text-[#F59E0B] font-bold mb-3">✍️ Email template</div>
        <div className="bg-white/5 rounded-lg p-3 leading-relaxed">
          <span className="text-white/80">Hi </span>
          <span className="bg-amber-500/20 text-[#F59E0B] px-1 rounded">{"{{first_name}}"}</span>
          <span className="text-white/80">,</span>
          <br /><br />
          <span className="text-white/80">We&apos;d love to have </span>
          <span className="bg-amber-500/20 text-[#F59E0B] px-1 rounded">{"{{company}}"}</span>
          <span className="text-white/80"> join us...</span>
        </div>
        <div className="text-white/40 text-[10px]">↓ Rendered for recipient 1</div>
        <div className="bg-white/5 rounded-lg p-3 leading-relaxed text-white/70">
          Hi <span className="text-white font-medium">Sarah</span>,
          <br /><br />
          We&apos;d love to have <span className="text-white font-medium">Acme Corp</span> join us...
        </div>
      </div>
    ),
  },
  {
    id: "templates",
    icon: "📝",
    title: "10 starter templates included",
    bullets: [
      "Hiring: interview invitation, job offer, application update, rejection.",
      "Sales: cold outreach, demo follow-up.",
      "Events: invitation, reminder.",
      "Marketing: welcome email, monthly newsletter.",
      "Edit any template and save it as your own.",
    ],
    mockup: (
      <div className="bg-[#1E1B4B] rounded-xl p-5 font-mono text-xs text-white/60 space-y-2">
        <div className="text-[#F59E0B] font-bold mb-3">📝 Templates</div>
        {[
          { cat: "Hiring", name: "Interview Invitation" },
          { cat: "Hiring", name: "Job Offer Letter" },
          { cat: "Sales", name: "Cold Outreach" },
          { cat: "Events", name: "Event Invitation" },
          { cat: "Marketing", name: "Monthly Newsletter" },
        ].map((t) => (
          <div key={t.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
            <div>
              <div className="text-white/80">{t.name}</div>
              <div className="text-white/30 text-[10px]">{t.cat}</div>
            </div>
            <span className="text-[#F59E0B] text-[10px]">Use →</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "contacts",
    icon: "👥",
    title: "Contacts and groups — import once, reuse forever",
    bullets: [
      "Import from any CSV. Extra columns become personalisation fields.",
      "Organise into groups. Send to a group in one click — no re-uploading.",
    ],
    mockup: (
      <div className="bg-[#1E1B4B] rounded-xl p-5 font-mono text-xs text-white/60 space-y-2">
        <div className="text-[#F59E0B] font-bold mb-3">👥 Contacts</div>
        {[
          { name: "All Contacts", count: "847" },
          { name: "Q2 Candidates", count: "142" },
          { name: "Event Guests", count: "300" },
          { name: "Newsletter List", count: "405" },
        ].map((g) => (
          <div key={g.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
            <span className="text-white/80">{g.name}</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-white/60">{g.count}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "tracking",
    icon: "📊",
    title: "Track every send, retry failures instantly",
    bullets: [
      "Per-recipient status: sent, failed, pending.",
      "Plain-English error descriptions — no cryptic codes.",
      "Retry one or all failures with one click.",
    ],
    mockup: (
      <div className="bg-[#1E1B4B] rounded-xl p-5 font-mono text-xs text-white/60 space-y-3">
        <div className="text-[#F59E0B] font-bold mb-1">📊 Campaign: Q2 Outreach</div>
        <div className="flex justify-between text-[10px] text-white/40">
          <span>Progress</span><span>285 / 300</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full">
          <div className="h-1.5 bg-[#F59E0B] rounded-full" style={{ width: "95%" }} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Sent", val: "281", color: "text-green-400" },
            { label: "Failed", val: "4", color: "text-red-400" },
            { label: "Pending", val: "15", color: "text-white/40" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded p-2 text-center">
              <div className={`text-lg font-bold ${s.color}`}>{s.val}</div>
              <div className="text-white/30 text-[10px]">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2">
          <div className="text-red-400 text-[10px] font-medium mb-1">4 failed · Retry all →</div>
          <div className="text-white/40 text-[10px]">
            ✗ bob@old-domain.io — mailbox not found
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "privacy",
    icon: "🔒",
    title: "Your data never leaves your computer",
    bullets: [
      "No cloud sync, no account required, no telemetry (unless you opt in to anonymous analytics).",
      "All contacts, templates, and credentials stored locally, encrypted.",
    ],
    mockup: (
      <div className="bg-[#1E1B4B] rounded-xl p-5 font-mono text-xs text-white/60 space-y-3">
        <div className="text-[#F59E0B] font-bold mb-3">🔒 Data location</div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-white/40 text-[10px] mb-2">macOS</div>
          <div className="text-white/70 break-all">~/Library/Application Support/PostOwl/</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-white/40 text-[10px] mb-2">Windows</div>
          <div className="text-white/70 break-all">%APPDATA%\PostOwl\</div>
        </div>
        <div className="flex items-center gap-2 text-green-400 text-[10px] font-medium mt-1">
          <Check size={12} /> Encrypted at rest
        </div>
        <div className="flex items-center gap-2 text-green-400 text-[10px] font-medium">
          <Check size={12} /> No PostOwl servers. Ever.
        </div>
      </div>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E1B4B] dark:text-white">
            Everything in PostOwl.in
          </h1>
          <p className="mt-5 text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto">
            A complete email sending toolkit. Runs entirely on your computer.
          </p>
        </div>

        {/* Feature sections — alternating layout */}
        <div className="space-y-24">
          {features.map((f, i) => (
            <div
              key={f.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-4xl mb-4 block">{f.icon}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B] dark:text-white mb-6">
                  {f.title}
                </h2>
                <ul className="space-y-3">
                  {f.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <Check
                        size={18}
                        className="text-[#F59E0B] mt-0.5 shrink-0"
                        strokeWidth={2.5}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>{f.mockup}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center bg-[#1E1B4B] rounded-2xl py-14 px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to try PostOwl.in?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Download it free. No sign-up. No credit card.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/api/download?platform=mac"
              className="bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E1B4B] font-bold px-8 py-4 rounded-xl text-base transition-colors"
            >
              🍎 Download for Mac →
            </a>
            <a
              href="/api/download?platform=win"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors border border-white/20"
            >
              🪟 Download for Windows
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
