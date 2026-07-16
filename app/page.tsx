import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { FeaturedProducts } from "@/components/sections/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner
        heading="Ready to Transform Your Drive?"
        subtext="Book a free consultation or browse our full product range online."
        primaryLabel="Book Now"
        primaryHref="/contact"
        secondaryLabel="Shop Products"
        secondaryHref="/products"
      />
    </>
  );
}
