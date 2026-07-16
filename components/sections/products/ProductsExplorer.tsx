"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ProductsExplorer() {
  const [active, setActive] = useState("All");
  const categories = ["All", ...CATEGORIES];

  const filtered =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <div className="sticky top-20 z-40 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur md:top-24">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-12 lg:px-20">
          <div className="scrollbar-none flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === cat
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Section bg="light" className="pt-12 md:pt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
