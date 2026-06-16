"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Inbox, Edit3, Users, FileText, BarChart2, Shield } from "lucide-react";

const ease: Easing = "easeOut";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const features = [
  {
    icon: Inbox,
    title: "Send to a list",
    description:
      "Upload a CSV or pick a saved contact group in one click. PostOwl auto-detects columns.",
  },
  {
    icon: Edit3,
    title: "Personalise each email",
    description:
      "{{first_name}}, {{company}} — any column auto-fills. Each recipient gets their own version.",
  },
  {
    icon: Users,
    title: "Reuse contact groups",
    description:
      "Import once, send to any group without re-uploading. Extra columns become personalisation fields.",
  },
  {
    icon: FileText,
    title: "10 starter templates",
    description:
      "Hiring, sales, events, newsletters — edit any template and save your own version.",
  },
  {
    icon: BarChart2,
    title: "Track every send",
    description:
      "Per-recipient status: sent, failed, pending. Plain-English errors. Retry failures instantly.",
  },
  {
    icon: Shield,
    title: "Data stays on your computer",
    description:
      "No cloud. No subscription. All contacts, templates, and credentials stored locally — encrypted.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={headerVariants}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-3">
            What you get
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B4B] leading-tight">
            Everything you need to send at scale
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#1E1B4B]/20 hover:shadow-lg group cursor-default transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E1B4B]/5 group-hover:bg-[#F59E0B]/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#1E1B4B] group-hover:text-[#F59E0B] transition-colors duration-300"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
