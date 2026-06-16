"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Plug, FolderOpen, Edit3, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: "01",
    icon: Plug,
    title: "Connect your email account",
    description:
      "Pick Gmail, Outlook, Zoho, Yahoo, or any email provider. Takes 2 minutes. Credentials stay encrypted on your computer.",
  },
  {
    num: "02",
    icon: FolderOpen,
    title: "Import your list",
    description:
      "Upload a spreadsheet (CSV from Excel or Google Sheets). Or pick a saved group — no re-uploading needed.",
  },
  {
    num: "03",
    icon: Edit3,
    title: "Write once, personalise for everyone",
    description:
      "Use {{first_name}}, {{company}}, or any column from your list. PostOwl replaces each field with that person's data.",
  },
  {
    num: "04",
    icon: Send,
    title: "Review, then send",
    description:
      "See exactly how the first email looks before anything goes out. Watch sends happen live. Retry any failures instantly.",
  },
];

const ease: Easing = "easeOut";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#1E1B4B] grain py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#F59E0B]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-4">
            Getting started
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            How it works
          </h2>
          <p className="text-white/50 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            From download to first campaign in under 5 minutes.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={cardVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
              >
                {/* Step number */}
                <p className="text-[#F59E0B]/40 font-mono text-xs font-bold mb-3 tracking-widest">
                  {step.num}
                </p>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#F59E0B]" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
