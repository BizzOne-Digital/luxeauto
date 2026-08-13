"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H3, Body } from "@/components/ui/Heading";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <Section bg="light">
      <div className="mb-16 max-w-3xl md:mb-20">
        <Body muted className="mb-0 text-lg leading-relaxed">
          At Luxe Auto Accessories, we specialize in premium automotive
          accessories and professional installation services. Our
          experienced team is committed to enhancing your vehicle&apos;s
          comfort, protection, style, and functionality with high-quality
          products and expert workmanship. We proudly offer custom seat
          cover installation, precision fit 5D floor mats, and fast tire
          change services. Additional services include window visor
          installation, dash cam installation, interior lighting
          installation, window tinting, paint protection film (PPF), and
          vinyl wrapping. At Luxe Auto Accessories, we&apos;re dedicated to
          exceptional customer service, premium products, and professional
          installations you can trust. Your satisfaction is our priority.
        </Body>
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {SERVICES.map((service, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={cn(
                "grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2",
                reversed && "lg:[&>*:first-child]:order-2"
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <H3 className="mb-4">{service.title}</H3>
                <Body muted>{service.description}</Body>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-red-500 transition-colors hover:text-red-600"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
