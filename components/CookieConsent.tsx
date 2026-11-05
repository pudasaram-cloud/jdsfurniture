"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("jds_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may fail in restricted/private contexts
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("jds_cookie_consent", "accepted");
    } catch {
      // ignore
    }
    setShow(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("jds_cookie_consent", "declined");
    } catch {
      // ignore
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.14)] rounded-xl sm:rounded-2xl p-4 sm:p-5 z-50 flex flex-col sm:flex-row items-center justify-between gap-4 select-none"
          role="region"
          aria-label="Cookie consent banner"
        >
          {/* Left: Icon & Text */}
          <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 shadow-xs">
              <Cookie size={20} className="stroke-[2.2]" />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans pr-2">
              We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. By continuing to browse, you agree to our use of cookies.
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 justify-end">
            <button
              type="button"
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-5 py-2 bg-gray-900 hover:bg-black text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm hover:shadow-md"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleDecline}
              aria-label="Close cookie banner"
              className="hidden sm:flex p-1.5 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors ml-1 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

