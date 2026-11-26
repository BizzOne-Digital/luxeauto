"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { VALUES } from "@/lib/constants";

// Compact 4-card layout (audit item #9). Short copy per card; full copy lives on /about.
const SHORT_COPY: Record<string, string> = {
  Excellence:
    "Every installation is checked twice before we call the job done.",
  Integrity: "Honest advice and transparent pricing. No upselling.",
  Passion: "Car enthusiasts first — we only stock products we'd use ourselves.",
  Community: "Proudly serving drivers across the Greater Toronto Area.",
};

export function WhyChooseUs() {
  return (
    <Section bg="light">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <Eyebrow className="justify-center">What Sets Us Apart</Eyebrow>
        <H2 className="mb-4">Built Different, Driven by Standards</H2>
        <Body muted className="mb-0">
          The advice, the fit, the finish, and the follow-through.
        </Body>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value, i) => (
          <motion.div
            key={value.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card"
          >
            <span className="mb-4 block font-heading text-4xl font-bold leading-none text-red-500">
              {value.number}
            </span>
            <h3 className="mb-2 font-heading text-xl font-semibold">
              {value.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-500">
              {SHORT_COPY[value.title] ?? value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
