"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Check, X } from "lucide-react";

const ease: Easing = "easeOut";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const tableVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay: 0.1 } },
};

const rows = [
  {
    feature: "Monthly cost",
    postowl: "$0",
    gmass: "$25/mo",
    mailmeteor: "$25/mo",
    sendy: "$69 one-time",
  },
  {
    feature: "Per-email cost",
    postowl: "$0",
    gmass: "$0",
    mailmeteor: "$0",
    sendy: "AWS SES rates",
  },
  {
    feature: "Works outside Gmail",
    postowl: true,
    gmass: false,
    mailmeteor: false,
    sendy: true,
  },
  {
    feature: "Data leaves machine",
    postowl: "Never",
    gmass: "Via Google",
    mailmeteor: "Via Google",
    sendy: "Your server",
  },
  {
    feature: "Desktop app",
    postowl: true,
    gmass: false,
    mailmeteor: false,
    sendy: false,
  },
  {
    feature: "Offline capable",
    postowl: true,
    gmass: false,
    mailmeteor: false,
    sendy: false,
  },
  {
    feature: "Starter templates",
    postowl: "10 included",
    gmass: "None",
    mailmeteor: "Limited",
    sendy: "None",
  },
  {
    feature: "Setup time",
    postowl: "2 min",
    gmass: "5 min",
    mailmeteor: "5 min",
    sendy: "30+ min",
  },
];

const cols = [
  { key: "postowl", label: "PostOwl.in", highlight: true },
  { key: "gmass", label: "GMass", highlight: false },
  { key: "mailmeteor", label: "Mailmeteor", highlight: false },
  { key: "sendy", label: "Sendy", highlight: false },
];

function Cell({
  value,
  highlight,
}: {
  value: string | boolean;
  highlight?: boolean;
}) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check
          size={16}
          strokeWidth={3}
          className={highlight ? "text-[#F59E0B]" : "text-emerald-500"}
        />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <X size={16} strokeWidth={2} className="text-gray-300 dark:text-gray-600" />
      </span>
    );
  }
  return (
    <span
      className={
        highlight
          ? "font-semibold text-[#1E1B4B] dark:text-indigo-300"
          : "text-gray-500 dark:text-gray-400"
      }
    >
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-[#FAFAF8] dark:bg-gray-900 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B4B] dark:text-white">
            How we compare
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
            Against the tools people actually switch from.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={tableVariants}
          className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-sm bg-white dark:bg-gray-800"
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700/50" style={{ background: "rgba(30, 27, 75, 0.03)" }}>
                <th className="text-left px-6 py-4 text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider w-48">
                  Feature
                </th>
                {cols.map((col) => (
                  <th
                    key={col.key}
                    className={`px-6 py-4 text-center font-bold text-sm ${
                      col.highlight
                        ? "text-[#1E1B4B] dark:text-indigo-300 border-x border-[#F59E0B]/20"
                        : "text-gray-400 dark:text-gray-500 font-medium"
                    }`}
                    style={
                      col.highlight
                        ? { background: "rgba(245, 158, 11, 0.08)" }
                        : undefined
                    }
                  >
                    {col.highlight && (
                      <span className="block text-[#F59E0B] text-[10px] font-bold uppercase tracking-widest mb-1">
                        Your choice
                      </span>
                    )}
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-gray-100 dark:border-gray-800 last:border-0 ${
                    i % 2 !== 0 ? "bg-gray-50/40 dark:bg-gray-800/40" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200 font-medium">
                    {row.feature}
                  </td>
                  {cols.map((col) => (
                    <td
                      key={col.key}
                      className={`px-6 py-4 text-center ${
                        col.highlight
                          ? "border-x border-[#F59E0B]/15"
                          : ""
                      }`}
                      style={
                        col.highlight
                          ? { background: "rgba(245, 158, 11, 0.05)" }
                          : undefined
                      }
                    >
                      <Cell
                        value={row[col.key as keyof typeof row]}
                        highlight={col.highlight}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-4 text-gray-400 dark:text-gray-500 text-xs text-center">
          GMass and Mailmeteor work only inside Gmail. Sendy requires a server and AWS SES setup.
        </p>
      </div>
    </section>
  );
}
