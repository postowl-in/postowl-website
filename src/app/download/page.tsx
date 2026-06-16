"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const macSteps = [
  "Open PostOwl.dmg",
  "Drag PostOwl.in to your Applications folder",
  "Launch PostOwl.in",
  "Connect your email account — pick Gmail, Outlook, or your provider",
  "Send your first campaign",
];

const winSteps = [
  "Run PostOwl-Setup.exe",
  "Follow the install wizard",
  "Launch PostOwl.in from the Start menu",
  "Connect your email account — pick Gmail, Outlook, or your provider",
  "Send your first campaign",
];

const sysReqs = [
  { label: "OS version", mac: "macOS 12+", win: "Windows 10 64-bit" },
  { label: "RAM", mac: "256 MB", win: "256 MB" },
  { label: "Disk", mac: "150 MB", win: "150 MB" },
  { label: "Internet", mac: "For sending only", win: "For sending only" },
];

export default function DownloadPage() {
  const [os, setOs] = useState<"mac" | "win" | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/Mac/.test(ua)) setOs("mac");
    else if (/Win/.test(ua)) setOs("win");
  }, []);

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#1E1B4B]">
            Download PostOwl.in
          </h1>
          <p className="mt-3 text-gray-500 text-lg">Version 1.0.0 · Free</p>
        </motion.div>

        {/* Primary download card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6"
        >
          {/* Mac */}
          <div
            className={`p-8 ${
              os === "mac" ? "bg-amber-50 border-b-2 border-[#F59E0B]" : "border-b border-gray-100"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🍎</span>
                  <span className="font-bold text-xl text-gray-900">
                    Download for macOS
                  </span>
                  {os === "mac" && (
                    <span className="bg-[#F59E0B] text-[#1E1B4B] text-xs font-bold px-2 py-0.5 rounded-full">
                      Your OS
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">
                  macOS 12 Monterey or later · Apple Silicon + Intel
                </p>
              </div>
              <Link
                href="/api/download?platform=mac"
                className="shrink-0 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E1B4B] font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Download .dmg
              </Link>
            </div>
          </div>

          {/* Windows */}
          <div
            className={`p-8 ${
              os === "win" ? "bg-amber-50 border-b-2 border-[#F59E0B]" : ""
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🪟</span>
                  <span className="font-bold text-xl text-gray-900">
                    Download for Windows
                  </span>
                  {os === "win" && (
                    <span className="bg-[#F59E0B] text-[#1E1B4B] text-xs font-bold px-2 py-0.5 rounded-full">
                      Your OS
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">Windows 10/11 (64-bit)</p>
              </div>
              <Link
                href="/api/download?platform=win"
                className="shrink-0 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-gray-200"
              >
                Download .exe
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Meta links */}
        <p className="text-center text-gray-400 text-sm mb-12">
          SHA-256 checksums · Release notes ·{" "}
          <a
            href="https://github.com/rohitagr0310/email-app/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors underline"
          >
            All versions
          </a>
        </p>

        {/* What's next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-6"
        >
          <h2 className="text-xl font-bold text-[#1E1B4B] mb-6">
            What&apos;s next after downloading?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span>🍎</span> macOS
              </h3>
              <ol className="space-y-2">
                {macSteps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-[#1E1B4B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span>🪟</span> Windows
              </h3>
              <ol className="space-y-2">
                {winSteps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-[#1E1B4B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Security note */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 font-medium mb-1">
              macOS: Gatekeeper warning
            </p>
            <p className="text-sm text-amber-700">
              If macOS says &quot;PostOwl.in cannot be opened because the developer cannot be verified&quot;,
              go to System Settings → Privacy &amp; Security → scroll down and click &quot;Open Anyway&quot;.
              This is normal for apps not yet in the Mac App Store.
            </p>
          </div>
          <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800 font-medium mb-1">
              Windows: SmartScreen warning
            </p>
            <p className="text-sm text-blue-700">
              If Windows SmartScreen shows a warning, click &quot;More info&quot; then &quot;Run anyway&quot;.
              This appears for newly published apps.
            </p>
          </div>
        </motion.div>

        {/* System requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-6"
        >
          <h2 className="text-xl font-bold text-[#1E1B4B] mb-6">
            System requirements
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-gray-500 font-medium" />
                  <th className="text-center py-3 text-gray-900 font-semibold">🍎 macOS</th>
                  <th className="text-center py-3 text-gray-900 font-semibold">🪟 Windows</th>
                </tr>
              </thead>
              <tbody>
                {sysReqs.map((r) => (
                  <tr key={r.label} className="border-b border-gray-100 last:border-0">
                    <td className="py-3 text-gray-500">{r.label}</td>
                    <td className="py-3 text-center text-gray-700">{r.mac}</td>
                    <td className="py-3 text-center text-gray-700">{r.win}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Linux notify */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1E1B4B] rounded-2xl p-8 text-center"
        >
          <p className="text-white font-semibold mb-2">Linux version coming soon?</p>
          <p className="text-white/60 text-sm mb-6">
            Enter your email and we&apos;ll notify you when a Linux build is ready.
          </p>
          {submitted ? (
            <p className="text-[#F59E0B] font-medium">✓ You&apos;re on the list!</p>
          ) : (
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#F59E0B]"
              />
              <button
                type="submit"
                className="bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E1B4B] font-bold px-6 py-3 rounded-xl text-sm transition-colors shrink-0"
              >
                Notify me →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
