"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_HERO_IMAGE } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-neutral-950">
      <Image
        src={ABOUT_HERO_IMAGE}
        alt="Luxe Auto Accessories workshop"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-40 md:px-12 md:pb-20 md:pt-48 lg:px-20">
        <div className="w-full md:w-[60%] lg:w-[55%]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-4 text-red-500"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Passion for Cars. Commitment to Quality.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-xl text-lg leading-relaxed text-neutral-300"
          >
            From a small Mississauga workshop to the Greater Toronto
            Area&apos;s most trusted automotive accessories destination — our journey has been
            driven by one passion: making every car the best version of itself.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
