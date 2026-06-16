"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📨",
    title: "Send to a list",
    description:
      "Upload a CSV or pick a saved group in one click.",
  },
  {
    icon: "✍️",
    title: "Personalise each email",
    description:
      "{{first_name}}, {{company}} — any column auto-fills.",
  },
  {
    icon: "👥",
    title: "Reuse contacts",
    description:
      "Import once, send to groups without re-uploading.",
  },
  {
    icon: "📝",
    title: "10 starter templates",
    description:
      "Hiring, sales, events, newsletters — edit and reuse.",
  },
  {
    icon: "📊",
    title: "Track every send",
    description:
      "See sent / failed per recipient. Retry failures.",
  },
  {
    icon: "🔒",
    title: "Data stays here",
    description:
      "No cloud. No subscription. Your disk only.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1B4B]">
            Everything you need to send at scale
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            No cloud required. Runs entirely on your computer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-gray-200 rounded-2xl p-6 hover:border-[#1E1B4B]/30 hover:shadow-md transition-all group"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg group-hover:text-[#1E1B4B]">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
