"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H2 } from "@/components/ui/Heading";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <Section bg="black">
      <H2 className="mb-12 text-center md:mb-16">How It Works</H2>

      <div className="relative hidden md:grid md:grid-cols-5 md:gap-6">
        <div className="absolute left-0 right-0 top-6 h-px bg-neutral-800" />
        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative px-2 text-center"
          >
            <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 font-heading font-bold text-white">
              {step.number}
            </div>
            <h4 className="mb-2 font-heading text-lg font-semibold">
              {step.title}
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-8 md:hidden">
        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 font-heading font-bold text-white">
                {step.number}
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="mt-2 w-px flex-1 bg-neutral-800" />
              )}
            </div>
            <div className="pb-2">
              <h4 className="mb-2 font-heading text-lg font-semibold">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-neutral-400">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
