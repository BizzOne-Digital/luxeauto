"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, H3, Body } from "@/components/ui/Heading";
import { VALUES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  return (
    <Section bg="light">
      <div className="mb-12 max-w-2xl md:mb-16">
        <Eyebrow>What Sets Us Apart</Eyebrow>
        <H2 className="mb-6">Built Different, Driven by Standards</H2>
        <Body muted className="mb-0">
          Anyone can sell car accessories. What sets Luxe Auto apart is what
          happens after the sale — the advice, the fit, the finish, and the
          follow-through.
        </Body>
      </div>

      <div className="divide-y divide-neutral-200 border-b border-t border-neutral-200">
        {VALUES.map((value, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{ duration: 0.5 }}
              className={cn(
                "flex flex-col items-start gap-4 py-10 md:flex-row md:items-center md:gap-10 md:py-12",
                reversed && "md:flex-row-reverse md:text-right"
              )}
            >
              <span className="shrink-0 font-heading text-6xl font-bold leading-none text-red-500 md:text-7xl">
                {value.number}
              </span>
              <div className={cn("max-w-2xl", reversed && "md:ml-auto")}>
                <H3 className="mb-3">{value.title}</H3>
                <Body muted className="mb-0">
                  {value.description}
                </Body>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
