"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants, type Easing } from "framer-motion";
import { X } from "lucide-react";

const ease: Easing = "easeOut";

const bannerVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.35, ease } },
  exit: { y: 100, opacity: 0, transition: { duration: 0.25, ease } },
};

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    window.dispatchEvent(new Event("postowl:consent-accepted"));
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
          key="cookie-banner"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={bannerVariants}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-[#1E1B4B]/95 backdrop-blur-xl border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/70 text-sm text-center sm:text-left leading-relaxed">
                This site uses Google Analytics to understand how visitors find PostOwl.in. No personal data shared.
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={decline}
                  className="text-white/50 hover:text-white/80 text-sm px-4 py-2 transition-colors duration-200"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FCD34D] text-[#1E1B4B] font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20"
                >
                  Accept
                </button>
                <button
                  onClick={decline}
                  aria-label="Dismiss"
                  className="text-white/30 hover:text-white/60 transition-colors duration-200 p-1"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
