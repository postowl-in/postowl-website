"use client";

import { motion } from "framer-motion";

const providers = [
  { name: "Gmail", emoji: "📧" },
  { name: "Outlook", emoji: "📮" },
  { name: "Zoho", emoji: "📬" },
  { name: "Yahoo", emoji: "📭" },
  { name: "AWS SES", emoji: "☁️" },
  { name: "Any email account", emoji: "✉️" },
];

export default function ProviderBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">
          Works with your existing email account
        </p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8"
        >
          {providers.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 text-gray-700 font-medium px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm"
            >
              <span className="text-lg">{p.emoji}</span>
              {p.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
