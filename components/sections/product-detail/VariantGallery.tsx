"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Deliberately not imported from any specific product's data file — this
// shape is satisfied structurally by every product's variant type (the
// original seat cover's SeatCoverVariant included), so this component stays
// reusable without importing (and thus depending on) any one product.
type GalleryVariant = {
  name: string;
  slug: string;
  swatch: string | [string, string];
  images: string[];
  comingSoon?: boolean;
};

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
  variants: GalleryVariant[];
  defaultSlug: string;
  productName: string;
}) {
  const [activeSlug, setActiveSlug] = useState(defaultSlug);
  const [activeImage, setActiveImage] = useState(0);

  const variant = variants.find((v) => v.slug === activeSlug) ?? variants[0];
  const isComingSoon = variant.comingSoon || variant.images.length === 0;

  function selectVariant(slug: string) {
    setActiveSlug(slug);
    setActiveImage(0);
  }

  return (
    <div>
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-card">
        <AnimatePresence mode="wait">
          {isComingSoon ? (
            <motion.div
              key={`${variant.slug}-coming-soon`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-100"
            >
              <span
                className="h-10 w-10 rounded-full border border-black/10"
                style={swatchStyle(variant.swatch)}
              />
              <p className="font-heading text-lg font-semibold text-neutral-500">
                Coming Soon
              </p>
              <p className="text-sm text-neutral-400">
                {variant.name} photos pending confirmation
              </p>
            </motion.div>
          ) : (
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
          )}
        </AnimatePresence>
      </div>

      {!isComingSoon && variant.images.length > 1 && (
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
          {isComingSoon && (
            <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold normal-case tracking-normal text-amber-700">
              Coming Soon
            </span>
          )}
        </p>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <button
              key={v.slug}
              onClick={() => selectVariant(v.slug)}
              aria-label={v.name}
              aria-pressed={v.slug === activeSlug}
              title={v.comingSoon ? `${v.name} (Coming Soon)` : v.name}
              className={cn(
                "relative h-9 w-9 rounded-full border border-black/10 transition-all",
                v.slug === activeSlug &&
                  "ring-2 ring-red-500 ring-offset-2 ring-offset-white",
                v.comingSoon && "opacity-50"
              )}
              style={swatchStyle(v.swatch)}
            >
              {v.comingSoon && (
                <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-amber-400 text-[8px] font-bold text-white">
                  ?
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
