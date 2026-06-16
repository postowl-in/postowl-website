"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is PostOwl.in really free?",
    a: "Yes. Download it, connect your email account, and send. No sign-up, no subscription, no credit card.",
  },
  {
    q: "Which email accounts work with it?",
    a: "Gmail, Outlook / Microsoft 365, Zoho Mail, Yahoo Mail, AWS SES, Postmark, and any other service that supports standard email sending. If your company has a business email, it almost certainly works.",
  },
  {
    q: "Does my contact list ever leave my computer?",
    a: "No. Your contacts, templates, and campaign history are stored only on your computer. The only data that leaves your machine is the emails you choose to send — which go through your email provider, not through PostOwl's servers. PostOwl has no servers.",
  },
  {
    q: "What's the sending limit?",
    a: "PostOwl itself has no limit. Your email provider sets the limit. Free Gmail allows about 500 emails/day; Google Workspace allows 2,000/day; AWS SES has no practical daily cap.",
  },
  {
    q: "Does it work on Windows?",
    a: "Yes. macOS 12+ and Windows 10/11 (64-bit) are both supported.",
  },
  {
    q: "What if an email fails to send?",
    a: "Failed emails are shown in the campaign log with a plain-English explanation. Retry any or all failures with one click.",
  },
  {
    q: "Can I use my company Outlook account?",
    a: "Yes. Enter your Microsoft 365 credentials in the setup wizard. If your IT admin has disabled SMTP AUTH for your account, ask them to enable it.",
  },
  {
    q: "Is there a mobile version?",
    a: "No — PostOwl is a desktop app for Mac and Windows. A browser-based version may come in the future.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1B4B]">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
