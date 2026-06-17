import Link from "next/link";
import { Mail } from "lucide-react";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/download", label: "Download" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

const legalLinks = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/anti-spam", label: "Anti-Spam Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0D2E] text-white">
      {/* Amber gradient rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-5 group">
              <span className="text-2xl select-none">🦉</span>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                PostOwl
                <span className="text-[#F59E0B]">.in</span>
              </span>
            </Link>

            <p className="text-[#F59E0B] font-display font-semibold text-lg mb-3 leading-snug">
              Post it in.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Send personalised bulk email from your own Gmail, Outlook, or any
              email account. Free desktop app for Mac and Windows — no monthly
              fees, no sending limits.
            </p>

            <p className="text-gray-500 text-xs mb-5">
              by Rohit Agarwal
            </p>

            {/* Social / contact icons */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@postowl.in"
                aria-label="Send us an email"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-5">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h3 className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-5">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@postowl.in"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <Mail size={14} className="shrink-0" />
                  hello@postowl.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Rohit Agarwal. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Made with ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
