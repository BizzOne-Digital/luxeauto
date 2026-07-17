"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2 } from "@/components/ui/Heading";

type Step = { title: string; description: string };

export function HowItWorksDetail({ steps }: { steps: Step[] }) {
  return (
    <Section bg="light">
      <div className="mb-12 max-w-2xl md:mb-16">
        <Eyebrow>How It Works</Eyebrow>
        <H2>Our Process</H2>
      </div>

      <div className="relative hidden md:grid md:grid-cols-4 md:gap-6">
        <div className="absolute left-0 right-0 top-6 h-px bg-neutral-200" />
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative px-2 text-center"
          >
            <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 font-heading font-bold text-white">
              {i + 1}
            </div>
            <h4 className="mb-2 font-heading text-lg font-semibold">
              {step.title}
            </h4>
            <p className="text-sm leading-relaxed text-neutral-500">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-8 md:hidden">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 font-heading font-bold text-white">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="mt-2 w-px flex-1 bg-neutral-200" />
              )}
            </div>
            <div className="pb-2">
              <h4 className="mb-2 font-heading text-lg font-semibold">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
