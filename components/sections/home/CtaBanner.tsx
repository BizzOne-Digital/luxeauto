"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <Section bg="red" className="py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
          Ready to Transform Your Drive?
        </h2>
        <p className="mb-10 leading-relaxed text-white/90">
          Book a free consultation or browse our full product range online.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            className="bg-white text-red-500 hover:bg-neutral-100"
          >
            Book Now
          </Button>
          <Button
            href="/products"
            variant="secondary"
            className="border-white text-white"
          >
            Shop Products
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
