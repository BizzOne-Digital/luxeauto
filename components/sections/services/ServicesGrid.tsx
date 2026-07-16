"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H3, Body } from "@/components/ui/Heading";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <Section bg="light">
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
                <Body muted className="mb-0">
                  {service.description}
                </Body>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
