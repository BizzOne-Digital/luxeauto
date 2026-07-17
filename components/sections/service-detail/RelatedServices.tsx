"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2 } from "@/components/ui/Heading";
import { SERVICES } from "@/lib/constants";

export function RelatedServices({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  if (related.length === 0) return null;

  return (
    <Section bg="light">
      <div className="mb-12 max-w-2xl md:mb-16">
        <Eyebrow>Explore More</Eyebrow>
        <H2>Related Services</H2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {related.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="mb-2 font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-red-500">Learn More →</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
