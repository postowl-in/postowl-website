"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import Link from "next/link";

const ease: Easing = "easeOut";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease },
  }),
};

export default function HeroSection() {
  return (
    <section className="bg-[#1E1B4B] min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              Send personalised emails to your whole list.{" "}
              <span className="text-[#F59E0B]">No monthly fees.</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg"
            >
              PostOwl.in sends from your Gmail, Outlook, or any email account.
              Pay nothing per email. Your contacts never leave your computer.
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/api/download?platform=mac"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E1B4B] font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-amber-500/20"
              >
                🍎 Download for Mac →
              </Link>
              <Link
                href="/api/download?platform=win"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors border border-white/20"
              >
                🪟 Download for Windows
              </Link>
            </motion.div>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 text-white/40 text-sm"
            >
              macOS 12+ · Windows 10/11 · Free
            </motion.p>
          </div>

          {/* Right: app screenshot placeholder */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[16/10]">
              <div className="p-4 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-4 text-white/30 text-xs font-mono">
                  PostOwl.in — Bulk Send
                </span>
              </div>
              <div className="p-6 flex flex-col gap-3">
                {/* Mock campaign UI */}
                <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                  <span className="text-white/60 text-sm">📨 Campaign: Interview Invites — Q2</span>
                  <span className="text-green-400 text-xs font-mono">Sending…</span>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex justify-between text-xs text-white/40 mb-2">
                    <span>Progress</span>
                    <span>142 / 300</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div className="h-2 bg-[#F59E0B] rounded-full" style={{ width: "47%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {[
                    { label: "Sent", val: "142", color: "text-green-400" },
                    { label: "Failed", val: "2", color: "text-red-400" },
                    { label: "Pending", val: "156", color: "text-white/50" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-lg p-3 text-center">
                      <div className={`text-xl font-bold ${s.color}`}>{s.val}</div>
                      <div className="text-white/40 text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 space-y-1">
                  {["sarah@acme.com", "james@corp.io", "priya@startup.in"].map((email, i) => (
                    <div key={email} className="flex items-center gap-3 text-xs text-white/50 font-mono">
                      <span className={i === 1 ? "text-red-400" : "text-green-400"}>
                        {i === 1 ? "✗" : "✓"}
                      </span>
                      {email}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
