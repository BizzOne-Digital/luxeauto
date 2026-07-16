"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

const TABS = [
  "All",
  "Interior",
  "Exterior",
  "Detailing",
  "Full Builds",
] as const;

const aspectClass: Record<GalleryItem["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

export function GalleryExplorer() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    active === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <Section bg="light">
      <div className="scrollbar-none mb-10 flex gap-3 overflow-x-auto md:mb-12">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === tab
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 sm:columns-2 md:gap-8 lg:columns-3">
        {filtered.map((item, i) => (
          <motion.button
            key={item.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            onClick={() => setLightbox(item)}
            className="group relative mb-6 block w-full overflow-hidden rounded-2xl shadow-card md:mb-8"
          >
            <div className={cn("relative w-full", aspectClass[item.aspect])}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.title}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-h-[85vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center font-heading text-lg text-white">
                {lightbox.title}
              </p>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute -top-4 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-card md:-right-4 md:-top-4"
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
