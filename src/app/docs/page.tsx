import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docs — PostOwl.in",
  description:
    "PostOwl.in documentation — getting started, email account setup (Gmail, Outlook, AWS SES), contacts, bulk send, personalisation, templates, and more.",
  alternates: { canonical: "https://postowl.in/docs" },
  openGraph: {
    title: "Docs — PostOwl.in",
    description:
      "PostOwl.in documentation — getting started, email account setup, contacts, bulk send, personalisation, templates, and more.",
    url: "https://postowl.in/docs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docs — PostOwl.in",
    description:
      "PostOwl.in documentation — getting started, email account setup, contacts, bulk send, templates, and more.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://postowl.in" },
    { "@type": "ListItem", "position": 2, "name": "Documentation", "item": "https://postowl.in/docs" },
  ],
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "PostOwl.in Documentation",
  "description": "Complete documentation for PostOwl.in — email account setup, contacts, bulk send, personalisation, templates, campaign logs, and keyboard shortcuts.",
  "author": { "@type": "Person", "name": "Rohit Agarwal" },
  "publisher": { "@type": "Person", "name": "Rohit Agarwal" },
  "url": "https://postowl.in/docs",
};

const sections = [
  {
    title: "Getting Started",
    slug: "#getting-started",
    description: "Download, install, and send your first campaign.",
  },
  {
    title: "Email Account Setup",
    slug: "#email-setup",
    description: "Connect Gmail, Outlook, Zoho, Yahoo, AWS SES, or Postmark.",
  },
  {
    title: "Contacts & Groups",
    slug: "#contacts",
    description: "Import contacts from CSV, organise into groups, reuse lists.",
  },
  {
    title: "Bulk Send & Personalisation",
    slug: "#bulk-send",
    description:
      "Upload a list, write with {{first_name}}, preview, and send.",
  },
  {
    title: "Templates",
    slug: "#templates",
    description: "Use and edit the 10 included templates or create your own.",
  },
  {
    title: "Campaign Logs",
    slug: "#logs",
    description: "Track sent / failed per recipient and retry failures.",
  },
  {
    title: "Reference / Keyboard Shortcuts",
    slug: "#reference",
    description: "All keyboard shortcuts and app settings.",
  },
  {
    title: "Legal",
    slug: "/legal/terms",
    description: "Terms of Service, Privacy Policy, Anti-Spam Policy.",
  },
];

const emailProviders = [
  { name: "Gmail", steps: ["Enable 2FA", "Create App Password in Google Account", "Use App Password in PostOwl.in"], note: "Free Gmail: ~500 emails/day · Google Workspace: ~2,000/day" },
  { name: "Outlook / Microsoft 365", steps: ["Ensure SMTP AUTH is enabled (check with IT admin)", "Use your Microsoft 365 email and password"], note: "Microsoft 365 Business: ~10,000 emails/day" },
  { name: "Zoho Mail", steps: ["Go to Zoho Mail → Settings → Mail Accounts", "Enable IMAP/SMTP access", "Use your Zoho email and password"], note: "Free Zoho: 5 accounts, limited volume" },
  { name: "Yahoo Mail", steps: ["Enable 2FA in Yahoo Account Security", "Generate App Password", "Use App Password in PostOwl.in"], note: "Yahoo enforces standard rate limits" },
  { name: "AWS SES", steps: ["Create SMTP credentials in AWS SES console", "Verify your sending domain", "Enter SMTP host, port, and credentials"], note: "AWS SES: ~$0.10/1,000 emails — no daily cap" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#1E1B4B] dark:text-white mb-4">Documentation</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Everything you need to get PostOwl.in working.</p>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.slug}
                  href={s.slug}
                  className="block px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-[#1E1B4B] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-16 min-w-0">
            <section id="getting-started">
              <h2 className="text-2xl font-bold text-[#1E1B4B] dark:text-white mb-6">Getting Started</h2>
              <ol className="space-y-4">
                {[
                  { step: "Download PostOwl.in", detail: "Get the app from the download page. Free — no sign-up.", link: "/download" },
                  { step: "Install", detail: "macOS: open PostOwl.dmg and drag to Applications. Windows: run PostOwl-Setup.exe." },
                  { step: "Connect your email account", detail: "Launch PostOwl.in and follow the setup wizard. Pick Gmail, Outlook, or your provider." },
                  { step: "Import your list", detail: "Upload a CSV from Excel or Google Sheets, or create a group manually." },
                  { step: "Write your email", detail: "Use {{first_name}} or any column from your CSV to personalise." },
                  { step: "Review and send", detail: "Preview the first email. Hit Send. Watch the campaign log." },
                ].map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-[#1E1B4B] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{s.step}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                        {s.detail}{" "}
                        {s.link && (
                          <Link href={s.link} className="text-[#1E1B4B] dark:text-amber-400 underline">
                            Go to download →
                          </Link>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="email-setup">
              <h2 className="text-2xl font-bold text-[#1E1B4B] dark:text-white mb-2">Email Account Setup</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                PostOwl.in works with any email provider. Choose yours below.
              </p>
              <div className="space-y-6">
                {emailProviders.map((p) => (
                  <div key={p.name} className="border border-gray-200 dark:border-gray-700/50 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700/50">
                      {p.name}
                    </div>
                    <div className="px-6 py-5">
                      <ol className="space-y-2 mb-3">
                        {p.steps.map((s, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-[#F59E0B] font-bold shrink-0">{i + 1}.</span>
                            {s}
                          </li>
                        ))}
                      </ol>
                      <p className="text-gray-400 dark:text-gray-500 text-xs">{p.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contacts">
              <h2 className="text-2xl font-bold text-[#1E1B4B] dark:text-white mb-4">Contacts & Groups</h2>
              <div className="prose prose-gray max-w-none text-sm text-gray-600 dark:text-gray-300 space-y-4">
                <p><strong>Importing contacts:</strong> Go to Contacts → Import CSV. PostOwl.in detects all columns. The <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 px-1 rounded">email</code> column is required; all other columns become personalisation fields.</p>
                <p><strong>Groups:</strong> After importing, select contacts and click &quot;Create Group&quot;. Name the group (e.g. &quot;Q2 Candidates&quot;). Send to the whole group from the Bulk Send screen in one click — no re-uploading.</p>
                <p><strong>Editing contacts:</strong> Double-click any contact to edit. Changes take effect in future campaigns.</p>
              </div>
            </section>

            <section id="bulk-send">
              <h2 className="text-2xl font-bold text-[#1E1B4B] dark:text-white mb-4">Bulk Send & Personalisation</h2>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-4">
                <p><strong>Starting a campaign:</strong> Click &quot;New Campaign&quot; → pick a contact group or upload a CSV → write or pick a template → preview → send.</p>
                <p>
                  <strong>Personalisation fields:</strong> Wrap any column name in double curly braces:{" "}
                  <code className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded font-mono">{"{{first_name}}"}</code>,{" "}
                  <code className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded font-mono">{"{{company}}"}</code>.
                  PostOwl.in replaces each placeholder with the matching value from your CSV row.
                </p>
                <p><strong>Preview:</strong> Before sending, PostOwl.in shows you the fully rendered email for the first recipient. Check it carefully.</p>
                <p><strong>Sending speed:</strong> PostOwl.in respects rate limits. It sends emails one at a time with a small delay to avoid triggering spam filters.</p>
              </div>
            </section>

            <section id="templates">
              <h2 className="text-2xl font-bold text-[#1E1B4B] dark:text-white mb-4">Templates</h2>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
                <p>PostOwl.in includes 10 starter templates:</p>
                <ul className="list-disc pl-5 space-y-1 columns-2">
                  {["Interview Invitation", "Job Offer Letter", "Application Update", "Application Rejection", "Cold Outreach", "Demo Follow-Up", "Event Invitation", "Event Reminder", "Welcome Email", "Monthly Newsletter"].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p className="mt-4">Edit any template from the Templates page. Edits are saved locally.</p>
              </div>
            </section>

            <section id="logs">
              <h2 className="text-2xl font-bold text-[#1E1B4B] dark:text-white mb-4">Campaign Logs</h2>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
                <p>Every sent campaign has a log showing per-recipient status:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Sent</strong> — email delivered to your provider successfully.</li>
                  <li><strong>Failed</strong> — email rejected. Reason shown in plain English (e.g. &quot;Mailbox not found&quot;).</li>
                  <li><strong>Pending</strong> — not yet attempted.</li>
                </ul>
                <p>To retry failed emails: open the campaign → click &quot;Retry failed&quot;. Retry individual rows or all failures at once.</p>
              </div>
            </section>

            <section id="reference">
              <h2 className="text-2xl font-bold text-[#1E1B4B] dark:text-white mb-4">Keyboard Shortcuts</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700/50 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700/50">
                      <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">Action</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">Mac</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">Windows</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { action: "New campaign", mac: "⌘N", win: "Ctrl+N" },
                      { action: "New template", mac: "⌘T", win: "Ctrl+T" },
                      { action: "Import CSV", mac: "⌘O", win: "Ctrl+O" },
                      { action: "Settings", mac: "⌘,", win: "Ctrl+," },
                      { action: "Search contacts", mac: "⌘K", win: "Ctrl+K" },
                    ].map((s) => (
                      <tr key={s.action} className="border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{s.action}</td>
                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">{s.mac}</td>
                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">{s.win}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
