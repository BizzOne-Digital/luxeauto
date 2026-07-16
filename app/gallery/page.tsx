import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryExplorer } from "@/components/sections/gallery/GalleryExplorer";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery | Luxe Auto Accessories",
  description:
    "A look at recent installations, detailing work, and vehicle transformations completed by our team.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="See the Transformation"
        subtitle="A look at recent installations, detailing work, and vehicle transformations completed by our team."
      />
      <GalleryExplorer />
      <CtaBanner
        heading="Want Results Like These?"
        subtext="Book a consultation and let our team bring your vision to life."
        primaryLabel="Book Consultation"
        primaryHref="/contact"
        bg="black"
      />
    </>
  );
}
