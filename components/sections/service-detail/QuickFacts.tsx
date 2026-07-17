"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2 } from "@/components/ui/Heading";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="11" className="fill-red-500/15" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="#DB0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuickFacts({ facts }: { facts: string[] }) {
  return (
    <Section bg="black">
      <div className="mb-12 max-w-2xl md:mb-16">
        <Eyebrow className="text-red-500">Quick Facts</Eyebrow>
        <H2>At a Glance</H2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-5">
        {facts.map((fact, i) => (
          <motion.div
            key={fact}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
          >
            <CheckIcon />
            <p className="text-sm leading-relaxed text-neutral-300">{fact}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
