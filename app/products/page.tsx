import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProductsExplorer } from "@/components/sections/products/ProductsExplorer";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Products | Luxe Auto Accessories",
  description:
    "Browse 500+ hand-picked premium automotive accessories across interior, exterior, electronics, lighting, and more.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Collection"
        title="Premium Products, Expertly Chosen"
        subtitle="Browse our hand-picked selection of luxury automotive accessories, sourced from the world's leading manufacturers."
      />
      <ProductsExplorer />
      <CtaBanner
        heading="Not Sure What Your Car Needs?"
        subtext="Talk to our team and we'll recommend the right products for your vehicle."
        primaryLabel="Book Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
