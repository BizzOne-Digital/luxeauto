"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, H3, H4, Body } from "@/components/ui/Heading";
import { MISSION_VISION_PURPOSE, VALUES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MissionVisionPurpose() {
  return (
    <Section bg="black">
      <div className="mb-16 max-w-2xl">
        <Eyebrow className="text-red-500">Our Foundation</Eyebrow>
        <H2>Mission, Vision &amp; Purpose</H2>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-6 md:mb-20 md:gap-8 lg:grid-cols-5 lg:items-stretch">
        {MISSION_VISION_PURPOSE.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8",
              item.width === "wide" ? "lg:col-span-2" : "lg:col-span-1"
            )}
          >
            <span className="eyebrow mb-4 block text-red-500">
              {item.title}
            </span>
            <H3 className="mb-4">{item.heading}</H3>
            <Body muted className="mb-0 text-neutral-400">
              {item.description}
            </Body>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {VALUES.map((value, i) => (
          <motion.div
            key={value.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="mb-2 block font-heading text-3xl font-bold text-red-500">
              {value.number}
            </span>
            <H4 className="mb-2">{value.title}</H4>
            <p className="text-sm leading-relaxed text-neutral-400">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
