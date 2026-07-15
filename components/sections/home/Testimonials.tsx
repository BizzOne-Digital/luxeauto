"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2 } from "@/components/ui/Heading";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const testimonial = TESTIMONIALS[index];

  return (
    <Section bg="black">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow className="justify-center text-red-500">
          Customer Stories
        </Eyebrow>
        <H2 className="mb-12 md:mb-16">What Our Customers Say</H2>

        <div className="relative flex min-h-[240px] items-center justify-center md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="mb-6 flex gap-1 text-xl text-red-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < testimonial.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p className="mb-8 font-heading text-xl leading-relaxed text-white md:text-2xl md:leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="text-sm text-neutral-400">
                {testimonial.name} &middot; {testimonial.vehicle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-red-500" : "w-2 bg-neutral-700"
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
