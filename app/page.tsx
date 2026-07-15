import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { FeaturedProducts } from "@/components/sections/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CtaBanner } from "@/components/sections/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
