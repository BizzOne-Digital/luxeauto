"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { HERO_IMAGE, STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGE}
          alt="Performance car in motion"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32 md:px-12 lg:px-20">
        <div className="w-full md:w-[60%] lg:w-[55%]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow mb-4 text-red-500"
          >
            Ontario&apos;s Premier Automotive Destination
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl md:leading-[1.05] lg:text-7xl"
          >
            Premium Auto Accessories That Define Your Drive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-300"
          >
            Premium styling, protection, and customisation for every vehicle.
            Expert installation. Guaranteed results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mb-8 flex flex-wrap gap-4"
          >
            <Button href="/products" variant="primary">
              Shop Products
            </Button>
            <Button href="/contact" variant="secondary" className="text-white">
              Book Consultation
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mb-16 text-sm text-neutral-400 md:mb-20"
          >
            4.8/5 · 127 reviews &nbsp;|&nbsp; 12 Month Warranty &nbsp;|&nbsp;
            Same Day Install
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 md:gap-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-bold text-white md:text-3xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.label === "Average Rating" ? 1 : 0}
                  />
                </div>
                <div className="mt-1 text-xs leading-relaxed text-neutral-400 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
