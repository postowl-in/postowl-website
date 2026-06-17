"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import Link from "next/link";
import { Laptop, Monitor, ArrowRight, Zap } from "lucide-react";

interface Props {
  location?: "hero" | "footer" | "pricing" | "features";
}

const ease: Easing = "easeOut";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease },
  }),
};

export default function DownloadCTA({ location = "footer" }: Props) {
  return (
    <section className="bg-[#0F0D2E] grain py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#F59E0B]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-1.5 text-[#F59E0B] text-sm font-semibold tracking-wide uppercase">
              <Zap size={14} />
              Ready to send?
            </span>
          </motion.div>

          {/* H2 */}
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-white"
          >
            Stop paying per email.
          </motion.h2>

          {/* Sub */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-white/60 text-lg"
          >
            Send from your own email account. Keep your data on your computer.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 flex gap-4 flex-wrap justify-center"
          >
            <a
              href="/api/download?platform=mac"
              data-analytics="download_mac_clicked"
              data-location={location}
              className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FCD34D] text-[#1E1B4B] font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              <Laptop size={18} />
              Download for Mac
              <ArrowRight size={16} />
            </a>
            <a
              href="/api/download?platform=win"
              data-analytics="download_windows_clicked"
              data-location={location}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
            >
              <Monitor size={18} />
              Download for Windows
            </a>
          </motion.div>

          {/* Small note */}
          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-5 text-white/30 text-sm"
          >
            macOS · Windows · Free · No sign-up required
          </motion.p>
        </div>
      </div>
    </section>
  );
}
