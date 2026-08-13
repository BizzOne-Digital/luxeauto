import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurJourney } from "@/components/sections/about/OurJourney";
import { MissionVisionPurpose } from "@/components/sections/about/MissionVisionPurpose";
import { OurTeam } from "@/components/sections/about/OurTeam";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Luxe Auto Accessories",
  description:
    "From a small Mississauga workshop to the Greater Toronto Area's most trusted automotive accessories destination — learn the story behind Luxe Auto Accessories.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurJourney />
      <MissionVisionPurpose />
      <OurTeam />
      <CtaBanner
        heading="Ready to Work With Us?"
        subtext="Book a consultation with our team or browse our full product range online."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="Browse Products"
        secondaryHref="/products"
      />
    </>
  );
}
