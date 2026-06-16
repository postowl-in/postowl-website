import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦉</span>
              <span className="font-bold text-xl">
                PostOwl<span className="text-[#F59E0B]">.in</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Send personalised bulk email from your own Gmail, Outlook, or any
              email account. Free desktop app for Mac and Windows.
            </p>
            <p className="text-gray-500 text-sm mt-4">by Rohit Agarwal</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/features", label: "Features" },
                { href: "/#how-it-works", label: "How it works" },
                { href: "/download", label: "Download" },
                { href: "/pricing", label: "Pricing" },
                { href: "/docs", label: "Docs" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/legal/terms", label: "Terms of Service" },
                { href: "/legal/privacy", label: "Privacy Policy" },
                { href: "/legal/anti-spam", label: "Anti-Spam Policy" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/rohitagr0310/email-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@postowl.in"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © 2026 Rohit Agarwal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
