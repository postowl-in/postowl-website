"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import Link from "next/link";
import { Laptop, Monitor, ArrowRight, Mail, CheckCircle2, X } from "lucide-react";

const ease: Easing = "easeOut";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease },
  }),
};

export default function HeroSection() {
  return (
    <section className="bg-[#1E1B4B] grain min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#F59E0B]/8 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#1E1B4B]/50 blur-3xl pointer-events-none -z-10" />

      <div className="grain-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: copy */}
          <div className="text-center lg:text-left">
            {/* Pill badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="w-fit mx-auto lg:mx-0"
            >
              <span className="inline-flex items-center bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 text-xs font-bold px-3 py-1.5 rounded-full">
                ✦ Free desktop app · No subscription
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight text-balance"
            >
              Send personalised emails to your whole list.
              <br />
              <span className="text-[#F59E0B]">No monthly fees.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 text-lg text-white/65 leading-relaxed max-w-[440px] text-center lg:text-left mx-auto lg:mx-0"
            >
              PostOwl.in sends from your Gmail, Outlook, or any email account.
              Pay nothing per email. Your contacts never leave your computer.
            </motion.p>

            {/* Trust chips */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {[
                "No sign-up",
                "No credit card",
                "Your data stays local",
              ].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-white/50 text-sm"
                >
                  <CheckCircle2 size={14} className="text-[#F59E0B]/70 shrink-0" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start"
            >
              <Link
                href="/api/download?platform=mac"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FCD34D] text-[#1E1B4B] font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20"
              >
                <Laptop size={18} />
                Download for Mac
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/api/download?platform=win"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                <Monitor size={18} />
                Download for Windows
              </Link>
            </motion.div>

            {/* Platform note */}
            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 text-white/30 text-xs text-center lg:text-left"
            >
              macOS 12+ · Windows 10/11 · Free
            </motion.p>
          </div>

          {/* Right column: animated app UI mockup */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative mt-10 lg:mt-0"
          >
            {/* Amber glow behind the card */}
            <div className="absolute -inset-6 bg-[#F59E0B]/8 rounded-3xl blur-2xl -z-10" />

            {/* Mock app window */}
            <div className="bg-[#0F0D2E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Window chrome */}
              <div className="p-3 border-b border-white/10 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                <span className="ml-3 text-white/25 text-xs font-mono">
                  PostOwl.in — Bulk Send
                </span>
              </div>

              {/* Window body */}
              <div className="p-5 space-y-3">
                {/* Campaign header row */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#F59E0B]" />
                    <span className="text-white/80 text-sm">
                      Interview Invites — Q2 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs">Sending</span>
                  </div>
                </div>

                {/* Progress section */}
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="flex justify-between text-xs text-white/40 mb-2">
                    <span>Progress</span>
                    <span>142 / 300</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div
                      className="h-1.5 bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] rounded-full"
                      style={{ width: "47%" }}
                    />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Sent", val: "142", color: "text-emerald-400" },
                    { label: "Failed", val: "2", color: "text-red-400" },
                    { label: "Pending", val: "156", color: "text-white/40" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/5 rounded-xl p-3 text-center"
                    >
                      <div
                        className={`text-xl font-bold font-mono ${s.color}`}
                      >
                        {s.val}
                      </div>
                      <div className="text-xs text-white/30 mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Log entries */}
                <div className="space-y-1 mt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                    <span className="text-white/40 text-xs font-mono">
                      sarah@acme.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X size={12} className="text-red-400 shrink-0" />
                    <span className="text-white/40 text-xs font-mono">
                      james@old-domain.io
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                    <span className="text-white/40 text-xs font-mono">
                      priya@startup.in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
