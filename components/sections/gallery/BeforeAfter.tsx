"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { BEFORE_AFTER } from "@/lib/constants";

export function BeforeAfter() {
  if (BEFORE_AFTER.length === 0) return null;

  return (
    <Section bg="light-alt">
      <div className="mb-10 max-w-2xl md:mb-12">
        <Eyebrow>Real Results</Eyebrow>
        <H2 className="mb-6">Before &amp; After</H2>
        <Body muted className="mb-0">
          Real vehicles, real installs — see the difference our work makes.
        </Body>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BEFORE_AFTER.map((item, i) => (
          <motion.figure
            key={item.image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card"
          >
            <div className="relative aspect-square">
              <Image
                src={item.image}
                alt={`${item.title} — before and after`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <figcaption className="p-4">
              <p className="text-xs uppercase tracking-widest text-red-500">
                {item.service}
              </p>
              <p className="font-semibold text-neutral-900">{item.title}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
