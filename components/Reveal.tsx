"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header";
  y?: number;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  y = 32,
}: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      // Reduced motion: still reveal, just instantly. Branching initial or
      // whileInView on `reduced` left SSR markup stuck at opacity 0.
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }
      }
    >
      {children}
    </MotionTag>
  );
}
