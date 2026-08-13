"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { JOURNEY_IMAGES } from "@/lib/constants";

export function OurJourney() {
  return (
    <Section bg="light">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 lg:pr-8"
        >
          <Eyebrow>Our Journey</Eyebrow>
          <H2 className="mb-6">Built on Passion, Grown Through Trust</H2>
          <Body muted>
            Luxe Auto Accessories was founded in 2016 by a team of passionate
            automotive enthusiasts who saw a gap in the market for a truly
            premium accessories experience in the Greater Toronto Area. We
            believed that drivers deserved better — better products, better
            advice, and better installation.
          </Body>
          <Body muted>
            What started as a small workshop in Mississauga quickly grew into
            one of the region&apos;s most respected automotive accessories
            businesses. Word spread fast: if you wanted quality, you came to
            Luxe Auto.
          </Body>
          <Body muted className="mb-0">
            Today, we stock over 500 products across 12 categories, serve more
            than 3,200 satisfied customers, and continue to grow — driven by the
            same values that have always defined us: quality, honesty, and
            genuine care for every vehicle we touch.
          </Body>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0 lg:ml-auto lg:w-[85%] lg:max-w-none">
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-card-hover">
              <Image
                src={JOURNEY_IMAGES.large}
                alt="Luxe Auto Accessories journey"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -left-8 top-10 hidden h-40 w-32 overflow-hidden rounded-xl border-4 border-neutral-50 shadow-card-hover sm:block md:h-48 md:w-40">
              <Image
                src={JOURNEY_IMAGES.smallTop}
                alt="Luxe Auto Accessories detail"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-4 hidden h-32 w-32 overflow-hidden rounded-xl border-4 border-neutral-50 shadow-card-hover sm:block md:h-40 md:w-40">
              <Image
                src={JOURNEY_IMAGES.smallBottom}
                alt="Luxe Auto Accessories detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
