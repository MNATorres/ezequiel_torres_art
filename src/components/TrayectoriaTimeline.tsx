"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Experience } from "@/lib/experiences";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-AR", { year: "numeric", month: "long" });
}

export default function TrayectoriaTimeline({ experiences }: { experiences: Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The line "paints in" as the timeline scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });
  const fillHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  if (experiences.length === 0) {
    return (
      <p className="text-center font-sans text-neutral-500">
        Aún no hay experiencias cargadas.
      </p>
    );
  }

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      {/* faint static track */}
      <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10" />

      {!reduce && (
        <>
          {/* glowing line that grows from the top as you scroll */}
          <motion.div
            style={{ height: fillHeight }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-white/40 via-white/80 to-white shadow-[0_0_10px_1px_rgba(255,255,255,0.5)]"
          />
          {/* bright travelling head at the tip of the fill */}
          <motion.div
            style={{ top: fillHeight }}
            className="absolute left-0 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          >
            <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_16px_5px_rgba(255,255,255,0.85)]" />
          </motion.div>
        </>
      )}

      <div className="flex flex-col gap-16 md:gap-20">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-80px", once: true }}
            transition={{ duration: 0.6, delay: Math.min(i, 4) * 0.05 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Milestone dot sitting on the timeline */}
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-[#0a0a0a]" />

            <time className="font-serif text-sm uppercase tracking-[0.25em] text-neutral-500">
              {formatDate(exp.date)}
            </time>

            <h3 className="mt-2 font-serif text-2xl text-white md:text-3xl">{exp.title}</h3>

            {exp.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={exp.imageUrl}
                alt={exp.title}
                className="mt-5 aspect-video w-full max-w-lg rounded-lg object-cover shadow-2xl shadow-black/40"
              />
            )}

            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-neutral-400 md:text-lg">
              {exp.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
