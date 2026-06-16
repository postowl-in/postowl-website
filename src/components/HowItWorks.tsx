"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Connect your email account",
    description:
      "Pick Gmail, Outlook, Zoho, Yahoo, or any email provider. Takes 2 minutes. Credentials stay encrypted on your computer.",
  },
  {
    number: "2",
    title: "Import your list",
    description:
      "Upload a spreadsheet (CSV from Excel or Google Sheets). Or pick a saved group — no re-uploading needed.",
  },
  {
    number: "3",
    title: "Write once, personalise for everyone",
    description:
      "Use {{first_name}}, {{company}}, or any column from your list. PostOwl replaces each field with that person's data.",
  },
  {
    number: "4",
    title: "Review, then send",
    description:
      "See exactly how the first email looks before anything goes out. Watch sends happen live. Retry any failures instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#1E1B4B] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How it works
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            From download to first campaign in under 5 minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="w-10 h-10 rounded-full bg-[#F59E0B] text-[#1E1B4B] font-bold text-lg flex items-center justify-center mb-4">
                {step.number}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-12 right-0 h-0.5 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
