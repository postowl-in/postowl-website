"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  location?: "hero" | "footer" | "pricing" | "features";
}

export default function DownloadCTA({ location = "footer" }: Props) {
  return (
    <section className="bg-[#1E1B4B] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Stop paying per email.
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Send from your own email account. Keep your data. Pay nothing.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/api/download?platform=mac"
              data-analytics={`download_mac_clicked`}
              data-location={location}
              className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E1B4B] font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-amber-500/20"
            >
              🍎 Download for Mac →
            </Link>
            <Link
              href="/api/download?platform=win"
              data-analytics={`download_windows_clicked`}
              data-location={location}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors border border-white/20"
            >
              🪟 Download for Windows
            </Link>
          </div>

          <p className="mt-4 text-white/30 text-sm">
            macOS · Windows · Free
          </p>
        </motion.div>
      </div>
    </section>
  );
}
