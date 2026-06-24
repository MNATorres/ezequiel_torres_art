"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Wraps an image (or any block) and traces a thin glowing white line around
 * its perimeter as the element is scrolled through the viewport. The line is
 * driven by scroll progress (not a one-shot), so it draws in as you scroll
 * down and undraws as you scroll back up — matching the side scroll beam.
 */
export default function GlowFrame({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });
  const pathLength = useTransform(smooth, [0, 1], [0, 1]);
  const opacity = useTransform(smooth, [0, 0.25, 1], [0, 0.7, 1]);

  return (
    <div ref={ref} className="relative">
      {children}
      {!reduce && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            filter:
              "drop-shadow(0 0 4px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.45))",
          }}
        >
          <motion.rect
            x="1.2"
            y="1.2"
            width="97.6"
            height="97.6"
            rx="3"
            ry="3"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength, opacity }}
          />
        </svg>
      )}
    </div>
  );
}
