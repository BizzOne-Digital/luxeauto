"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" className="fill-red-500/10" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="#DB0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AddToCartButton() {
  const [added, setAdded] = useState(false);

  return (
    <Button
      type="button"
      variant="primary"
      className="w-full sm:w-auto"
      onClick={() => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
      }}
    >
      {added ? "Added ✓" : "Add to Cart"}
    </Button>
  );
}

export function QuickViewModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!product) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-2xl bg-white shadow-card-hover md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-900 shadow-card"
            >
              ✕
            </button>

            <div className="relative aspect-[4/3] w-full bg-neutral-100 md:aspect-auto">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge && (
                <div className="absolute left-4 top-4">
                  <Badge tone="red">{product.badge}</Badge>
                </div>
              )}
            </div>

            <div className="flex flex-col p-6 md:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                {product.category}
              </p>
              <h3 className="mb-3 font-heading text-2xl font-bold leading-tight">
                {product.name}
              </h3>

              <div className="mb-3 flex items-center gap-2 text-sm">
                <span className="text-red-500">★</span>
                <span className="font-semibold text-neutral-800">
                  {product.rating}
                </span>
                <span className="text-neutral-400">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl font-bold text-red-500">
                  ${product.price}
                </span>
                {product.compareAtPrice && (
                  <span className="text-base text-neutral-400 line-through">
                    ${product.compareAtPrice}
                  </span>
                )}
              </div>

              <p className="mb-5 leading-relaxed text-neutral-500">
                {product.fullDescription ?? product.description}
              </p>

              <ul className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckIcon />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={cn("mt-auto flex flex-col gap-3 sm:flex-row")}>
                <AddToCartButton />
                <Button
                  href="/contact"
                  variant="secondary"
                  className="w-full border-neutral-300 text-neutral-800 hover:bg-neutral-100 sm:w-auto"
                >
                  Book Consultation
                </Button>
              </div>

              {product.detailHref && (
                <Link
                  href={product.detailHref}
                  onClick={onClose}
                  className="mt-4 text-center text-sm font-semibold text-red-500 hover:text-red-600 sm:text-left"
                >
                  See More Details →
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
