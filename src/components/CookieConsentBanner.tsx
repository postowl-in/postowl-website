"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 px-4 py-4"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              This site uses analytics cookies to understand how visitors use PostOwl.in.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E1B4B] font-semibold text-sm px-5 py-2 rounded-lg transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
