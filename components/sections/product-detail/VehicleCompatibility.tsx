"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2 } from "@/components/ui/Heading";

export function VehicleCompatibility({
  categories,
  guideImage,
}: {
  categories: { label: string; models: string[] }[];
  guideImage?: string;
}) {
  const [enlarged, setEnlarged] = useState(false);

  return (
    <Section bg="black">
      <div className="mb-12 max-w-2xl md:mb-16">
        <Eyebrow className="text-red-500">Fits Most</Eyebrow>
        <H2>Vehicle Compatibility</H2>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h4 className="mb-4 font-heading text-lg font-semibold text-white">
                {cat.label}
              </h4>
              <ul className="flex flex-col gap-2">
                {cat.models.map((model) => (
                  <li
                    key={model}
                    className="text-sm leading-relaxed text-neutral-400"
                  >
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {guideImage && (
          <div>
            <button
              onClick={() => setEnlarged(true)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-800"
            >
              <Image
                src={guideImage}
                alt="Vehicle compatibility guide"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="bg-white object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            <p className="mt-3 text-center text-sm text-neutral-500">
              Tap to enlarge compatibility guide
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {enlarged && guideImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setEnlarged(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-h-[85vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={guideImage}
                  alt="Vehicle compatibility guide enlarged"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setEnlarged(false)}
                aria-label="Close"
                className="absolute -top-4 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-card"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
