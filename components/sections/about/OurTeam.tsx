"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { TEAM_IMAGE } from "@/lib/constants";

export function OurTeam() {
  return (
    <Section bg="light">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <Eyebrow>Our Team</Eyebrow>
          <H2 className="mb-6">Certified Technicians, Genuine Expertise</H2>
          <Body muted className="mb-0">
            Every installation is completed by trained, certified technicians
            with years of hands-on experience across every category we stock —
            from delicate electronics to full interior refits. We don&apos;t
            outsource, and we don&apos;t cut corners.
          </Body>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative lg:col-span-7"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl shadow-card-hover">
            <Image
              src={TEAM_IMAGE}
              alt="Luxe Auto Accessories technician at work"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-neutral-950 px-6 py-5 shadow-card-hover sm:right-6 md:px-8 md:py-6">
            <div className="font-heading text-3xl font-bold text-red-500 md:text-4xl">
              8+
            </div>
            <div className="text-xs text-neutral-400 md:text-sm">
              Years of Combined Expertise
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
