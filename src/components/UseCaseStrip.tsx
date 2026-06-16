"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Users2, CalendarDays, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  color: string;
  bg: string;
  title: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    icon: Users2,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "HR teams",
    description: "Interview invites, offer letters, hiring updates",
  },
  {
    icon: CalendarDays,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Event organisers",
    description: "Invitations, reminders, follow-ups",
  },
  {
    icon: Store,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Small businesses",
    description: "Newsletters, announcements, outreach",
  },
];

const ease: Easing = "easeOut";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

export default function UseCaseStrip() {
  return (
    <section className="bg-[#F4F3F0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.15em] mb-8"
          variants={labelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          Who uses PostOwl.in
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.title}
                variants={cardVariants}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#1E1B4B]/20 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${uc.bg}`}
                >
                  <Icon size={22} className={uc.color} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-lg leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{uc.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
