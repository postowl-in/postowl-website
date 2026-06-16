"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

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
    postowl: "10",
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
  { key: "gmass", label: "GMass" },
  { key: "mailmeteor", label: "Mailmeteor" },
  { key: "sendy", label: "Sendy" },
];

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === true)
    return (
      <span className={`flex justify-center ${highlight ? "text-[#F59E0B]" : "text-green-600"}`}>
        <Check size={18} strokeWidth={2.5} />
      </span>
    );
  if (value === false)
    return (
      <span className="flex justify-center text-gray-300">
        <X size={18} strokeWidth={2} />
      </span>
    );
  return (
    <span className={`${highlight ? "font-semibold text-[#1E1B4B]" : "text-gray-600"}`}>
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1B4B]">
            How we compare
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Against tools people actually switch from.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-6 py-4 text-gray-500 font-medium w-48">Feature</th>
                {cols.map((col) => (
                  <th
                    key={col.key}
                    className={`px-6 py-4 text-center font-semibold ${
                      col.highlight
                        ? "text-[#1E1B4B] bg-amber-50 border-x border-amber-100"
                        : "text-gray-500"
                    }`}
                  >
                    {col.highlight && (
                      <span className="block text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-0.5">
                        ← You are here
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
                  className={`border-b border-gray-100 last:border-0 ${
                    i % 2 === 0 ? "" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                  {cols.map((col) => (
                    <td
                      key={col.key}
                      className={`px-6 py-4 text-center ${
                        col.highlight ? "bg-amber-50/50 border-x border-amber-100" : ""
                      }`}
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

        <p className="mt-4 text-gray-400 text-xs text-center">
          GMass and Mailmeteor work only inside Gmail. Sendy requires a server and AWS SES configuration.
        </p>
      </div>
    </section>
  );
}
