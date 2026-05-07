"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisible() {
      const shouldBeVisible = window.scrollY > 600;
      setVisible((current) => (current === shouldBeVisible ? current : shouldBeVisible));
    }

    function onScroll() {
      updateVisible();
    }

    updateVisible();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 340, damping: 24 }}
          onClick={() => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
          }}
          className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-white/15 bg-[#0a1729]/90 text-slate-300 shadow-panel backdrop-blur-sm transition hover:border-atsuko-cyan/40 hover:text-atsuko-cyan hover:shadow-[0_0_20px_rgba(37,207,255,.15)]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
