import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact | Luxe Auto Accessories",
  description:
    "Get in touch with Luxe Auto Accessories for advice, a quote, or to book an installation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Vehicle"
        subtitle="Whether you need advice, a quote, or want to book an installation, our team is here to help."
      />
      <Section bg="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </Section>
    </>
  );
}
