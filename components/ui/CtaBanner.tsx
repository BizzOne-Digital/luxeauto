"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type CtaBannerProps = {
  heading: string;
  subtext: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bg?: "red" | "black";
};

export function CtaBanner({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  bg = "red",
}: CtaBannerProps) {
  return (
    <Section bg={bg} className="py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
          {heading}
        </h2>
        <p
          className={
            bg === "red"
              ? "mb-10 leading-relaxed text-white/90"
              : "mb-10 leading-relaxed text-neutral-400"
          }
        >
          {subtext}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href={primaryHref}
            variant="primary"
            className={
              bg === "red" ? "bg-white text-red-500 hover:bg-neutral-100" : ""
            }
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              href={secondaryHref}
              variant="secondary"
              className="border-white text-white"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
