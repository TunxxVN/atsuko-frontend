"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const hoverLift: MotionProps = {
  whileHover: { y: -4, scale: 1.015 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 340, damping: 24 },
};
