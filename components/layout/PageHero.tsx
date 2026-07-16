"use client";

import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-neutral-950 pt-20 text-center">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950" />

      <div className="relative z-10 max-w-3xl px-6 py-16 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow mb-4 text-red-500"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg leading-relaxed text-neutral-300"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
