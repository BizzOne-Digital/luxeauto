"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2 } from "@/components/ui/Heading";

export function SignsYouNeedThis({ signs }: { signs: string[] }) {
  return (
    <Section bg="black">
      <div className="mb-12 max-w-2xl md:mb-16">
        <Eyebrow className="text-red-500">Is This For You</Eyebrow>
        <H2>Signs You Need This</H2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        {signs.map((sign, i) => (
          <motion.div
            key={sign}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8"
          >
            <span className="font-heading text-2xl font-bold leading-none text-red-500">
              {"0" + (i + 1)}
            </span>
            <p className="leading-relaxed text-neutral-300">{sign}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
