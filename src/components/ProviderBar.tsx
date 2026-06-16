"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Mail } from "lucide-react";

const providers = [
  { name: "Gmail" },
  { name: "Outlook" },
  { name: "Zoho Mail" },
  { name: "Yahoo Mail" },
  { name: "AWS SES" },
  { name: "Any email account", distinguished: true },
];

const ease: Easing = "easeOut";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

export default function ProviderBar() {
  return (
    <section className="bg-[#FAFAF8] border-y border-gray-200/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.15em] mb-7">
          Works with your existing email account
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {providers.map((provider) => (
            <motion.div
              key={provider.name}
              variants={pillVariants}
              className={
                provider.distinguished
                  ? "flex items-center gap-2 bg-[#1E1B4B]/5 border border-[#1E1B4B]/20 text-[#1E1B4B] font-semibold text-sm px-4 py-2.5 rounded-full shadow-sm hover:border-[#1E1B4B]/40 hover:shadow-md transition-all duration-200 cursor-default"
                  : "flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-full shadow-sm hover:border-[#1E1B4B]/30 hover:shadow-md transition-all duration-200 cursor-default"
              }
            >
              <Mail size={14} className="text-[#F59E0B] shrink-0" />
              {provider.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
