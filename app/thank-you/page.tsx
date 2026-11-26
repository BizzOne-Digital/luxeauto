import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow, H1, Body } from "@/components/ui/Heading";
import { PHONE_HREF, SITE } from "@/lib/constants";
import { FormConversion } from "./FormConversion";

export const metadata: Metadata = {
  title: "Thank You | Luxe Auto Accessories",
  description: "Your message has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Section bg="light" firstSection className="min-h-[70vh]">
      <FormConversion />
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">Message Received</Eyebrow>
        <H1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
          Thank You!
        </H1>
        <Body muted className="mb-10 text-lg">
          Your inquiry has been submitted successfully. A member of our team
          will get back to you shortly — usually within one business day. Need
          help sooner? Give us a call.
        </Body>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={PHONE_HREF} variant="primary">
            Call {SITE.phone}
          </Button>
          <Button
            href="/services"
            variant="secondary"
            className="text-neutral-900"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </Section>
  );
}
