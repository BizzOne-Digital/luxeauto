"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SimpleGallery({
  images,
  alt,
  imageFit = "cover",
}: {
  images: string[];
  alt: string;
  imageFit?: "cover" | "contain";
}) {
  const fitClass =
    imageFit === "contain" ? "object-contain p-2" : "object-cover";
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div>
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeImage]}
              alt={alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={fitClass}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="scrollbar-none flex gap-3 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImage(i)}
              aria-label={`Show image ${i + 1}`}
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
    </div>
  );
}
