"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FAQS, PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section bg="light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <Eyebrow>FAQ</Eyebrow>
          <H2 className="mb-6">Frequently Asked Questions</H2>
          <Body muted className="mb-8">
            Quick answers to the questions we hear most. Can&apos;t find what
            you&apos;re looking for? Our team is happy to help.
          </Body>
          <div className="flex flex-wrap gap-3">
            <Button href={PHONE_HREF} variant="primary">
              Call Now
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="text-neutral-900"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-neutral-200 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-neutral-900"
                >
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "shrink-0 text-xl leading-none text-red-500 transition-transform duration-200",
                      isOpen && "rotate-45"
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-neutral-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
