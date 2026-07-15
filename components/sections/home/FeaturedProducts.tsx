"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { FEATURED_PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FeaturedProducts() {
  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(FEATURED_PRODUCTS.map((p) => p.category))),
    ],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.category === active);

  return (
    <Section bg="light-alt" className="border-y border-neutral-100">
      <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Our Collection</Eyebrow>
          <H2 className="mb-6">Premium Products, Expertly Chosen</H2>
          <Body muted className="mb-0">
            Browse our hand-picked selection of luxury automotive accessories,
            sourced from the world&apos;s leading manufacturers. Every product
            in our range has been selected for one reason: it&apos;s what
            we&apos;d choose for our own vehicles.
          </Body>
        </div>
        <Button href="/products" variant="ghost" className="shrink-0 px-0">
          View All Products →
        </Button>
      </div>

      <div className="scrollbar-none -mx-6 mb-10 flex gap-3 overflow-x-auto px-6 pb-2 md:mx-0 md:mb-12 md:px-0">
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

      <div className="scrollbar-none -mx-6 flex gap-6 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
        {filtered.map((product, i) => (
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="w-[80vw] shrink-0 sm:w-[45vw] md:w-auto md:shrink"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
