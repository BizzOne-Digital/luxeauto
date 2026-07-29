"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SeatCoverVariant } from "@/lib/products/premium-universal-seat-covers";

function swatchStyle(swatch: string | [string, string]) {
  if (Array.isArray(swatch)) {
    return {
      backgroundImage: `linear-gradient(135deg, ${swatch[0]} 50%, ${swatch[1]} 50%)`,
    };
  }
  return { backgroundColor: swatch };
}

export function VariantGallery({
  variants,
  defaultSlug,
  productName,
}: {
  variants: SeatCoverVariant[];
  defaultSlug: string;
  productName: string;
}) {
  const [activeSlug, setActiveSlug] = useState(defaultSlug);
  const [activeImage, setActiveImage] = useState(0);

  const variant = variants.find((v) => v.slug === activeSlug) ?? variants[0];

  function selectVariant(slug: string) {
    setActiveSlug(slug);
    setActiveImage(0);
  }

  return (
    <div>
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${variant.slug}-${activeImage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={variant.images[activeImage]}
              alt={`${productName} — ${variant.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {variant.images.length > 1 && (
        <div className="scrollbar-none mb-8 flex gap-3 overflow-x-auto">
          {variant.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImage(i)}
              aria-label={`Show image ${i + 1} of ${variant.name}`}
              className={cn(
                "relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors",
                i === activeImage
                  ? "border-red-500"
                  : "border-transparent hover:border-neutral-300"
              )}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Color: <span className="text-neutral-700">{variant.name}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <button
              key={v.slug}
              onClick={() => selectVariant(v.slug)}
              aria-label={v.name}
              aria-pressed={v.slug === activeSlug}
              title={v.name}
              className={cn(
                "h-9 w-9 rounded-full border border-black/10 transition-all",
                v.slug === activeSlug &&
                  "ring-2 ring-red-500 ring-offset-2 ring-offset-white"
              )}
              style={swatchStyle(v.swatch)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
