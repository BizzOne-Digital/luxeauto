"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export function TrustBar() {
  return (
    <Section bg="light">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 lg:pr-12"
        >
          <Eyebrow>Why Drivers Choose Us</Eyebrow>
          <H2 className="mb-6">
            Trusted by Western Sydney&apos;s Most Discerning Drivers
          </H2>
          <Body muted>
            Since 2016, we&apos;ve built our reputation one installation at a
            time. Every product we stock has been personally tested and approved
            by our team before it ever reaches our shelves, and every install is
            carried out by technicians who treat your car the way they&apos;d
            treat their own.
          </Body>
          <Body muted className="mb-0">
            That approach has earned us a 4.8-star average across 127 reviews,
            and a customer base that keeps coming back — not just for their next
            accessory, but to send friends and family our way too.
          </Body>
        </motion.div>

        <div className="relative hidden lg:col-span-1 lg:block">
          <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-200" />
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:col-span-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card md:p-8"
            >
              <div className="mb-2 font-heading text-3xl font-bold text-red-500 md:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.label === "Average Rating" ? 1 : 0}
                />
              </div>
              <div className="mb-2 font-heading text-lg font-semibold">
                {stat.label}
              </div>
              <p className="text-sm leading-relaxed text-neutral-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
