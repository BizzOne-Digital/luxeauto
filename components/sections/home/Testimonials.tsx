"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2 } from "@/components/ui/Heading";
import { GOOGLE_REVIEWS, TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div
      className={cn("flex gap-0.5 text-red-500", className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          {i < Math.round(rating) ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

// Shows 3 cards on desktop, 1 on mobile; slides through all testimonials.
export function Testimonials() {
  const [perView, setPerView] = useState(1);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const update = () =>
      setPerView(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = Math.max(1, TESTIMONIALS.length - perView + 1);

  useEffect(() => {
    if (pages <= 1) return;
    const id = setInterval(() => setStart((s) => (s + 1) % pages), 6000);
    return () => clearInterval(id);
  }, [pages]);

  const current = Math.min(start, pages - 1);
  const visible = TESTIMONIALS.slice(current, current + perView);

  return (
    <Section bg="black">
      <div className="mb-12 flex flex-col items-center text-center md:mb-16">
        <Eyebrow className="justify-center text-red-500">
          Customer Reviews
        </Eyebrow>
        <H2 className="mb-6">What Our Customers Say</H2>
        <a
          href={GOOGLE_REVIEWS.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-sm text-white transition-colors hover:border-red-500"
        >
          <span className="font-semibold">Google</span>
          <span className="text-lg font-bold">{GOOGLE_REVIEWS.rating}</span>
          <Stars rating={GOOGLE_REVIEWS.rating} />
          <span className="text-neutral-400">
            {GOOGLE_REVIEWS.count} reviews
          </span>
        </a>
      </div>

      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}
      >
        {visible.map((t) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8"
          >
            <Stars rating={t.rating} className="mb-4 text-lg" />
            <blockquote className="mb-6 flex-1 leading-relaxed text-neutral-200">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-neutral-400">{t.vehicle}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {pages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Show reviews ${i + 1}`}
              onClick={() => setStart(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === current ? "w-8 bg-red-500" : "w-2 bg-neutral-700"
              )}
            />
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <a
          href={GOOGLE_REVIEWS.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-red-500 transition-colors hover:text-red-400"
        >
          Read all reviews on Google &rarr;
        </a>
      </div>
    </Section>
  );
}
