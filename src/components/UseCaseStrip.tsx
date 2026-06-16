"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    emoji: "👩‍💼",
    title: "HR teams",
    description: "Interview invites, offer letters, hiring updates",
  },
  {
    emoji: "📅",
    title: "Event organisers",
    description: "Invitations, reminders, follow-ups",
  },
  {
    emoji: "📣",
    title: "Small businesses",
    description: "Newsletters, announcements, outreach",
  },
];

export default function UseCaseStrip() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8"
        >
          Who uses PostOwl.in
        </motion.p>
        <div className="grid sm:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm"
            >
              <span className="text-3xl">{uc.emoji}</span>
              <div>
                <div className="font-semibold text-gray-900">{uc.title}</div>
                <div className="text-gray-500 text-sm mt-0.5">{uc.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
