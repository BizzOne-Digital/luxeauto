"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";

export function WhatIsIt({
  paragraphs,
  image,
  serviceName,
}: {
  paragraphs: string[];
  image: string;
  serviceName: string;
}) {
  return (
    <Section bg="light">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 lg:pr-8"
        >
          <Eyebrow>What Is It</Eyebrow>
          <H2 className="mb-6">Understanding {serviceName}</H2>
          {paragraphs.map((p, i) => (
            <Body
              key={i}
              muted
              className={i === paragraphs.length - 1 ? "mb-0" : undefined}
            >
              {p}
            </Body>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-6"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card-hover">
            <Image
              src={image}
              alt={serviceName}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
