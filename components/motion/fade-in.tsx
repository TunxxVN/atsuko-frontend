"use client";

import { type MotionProps } from "framer-motion";

export const hoverLift: MotionProps = {
  whileHover: { y: -4, scale: 1.015 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 340, damping: 24 },
};
