import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/services/ProcessTimeline";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Services | Luxe Auto Accessories",
  description:
    "Professional vehicle styling, customization, and installation services backed by certified technicians and a 12-month workmanship warranty.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional Installation"
        title="Professional Services, Premium Results"
        subtitle="From quick accessory installs to full vehicle transformations, our trained technicians deliver exceptional results every time."
      />
      <ServicesGrid />
      <ProcessTimeline />
      <CtaBanner
        heading="Book Your Installation Today"
        subtext="Same-day service available on most items, with a 12-month workmanship warranty."
        primaryLabel="Book Now"
        primaryHref="/contact"
      />
    </>
  );
}
