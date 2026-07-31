import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { VariantGallery } from "@/components/sections/product-detail/VariantGallery";
import { ProductInfo } from "@/components/sections/product-detail/ProductInfo";
import { VehicleCompatibility } from "@/components/sections/product-detail/VehicleCompatibility";
import { PREMIUM_UNIVERSAL_SEAT_COVERS } from "@/lib/products/premium-universal-seat-covers";

const product = PREMIUM_UNIVERSAL_SEAT_COVERS;

export const metadata: Metadata = {
  title: `${product.name} | Luxe Auto Accessories`,
  description: product.shortDescription,
};

export default function PremiumUniversalSeatCoversPage() {
  return (
    <>
      <PageHero
        eyebrow="Seat Covers"
        title={product.name}
        subtitle={product.shortDescription}
      />
      <Breadcrumb
        items={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <Section bg="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <VariantGallery
            variants={product.variants}
            defaultSlug={product.defaultVariant}
            productName={product.name}
          />
          <ProductInfo
            category={product.category}
            name={product.name}
            badge={product.badge}
            description={product.fullDescription}
            features={product.features}
          />
        </div>
      </Section>

      <VehicleCompatibility
        categories={product.compatibility.categories}
        guideImage={product.compatibility.guideImage}
      />

      <CtaBanner
        heading="Ready to Upgrade Your Interior?"
        subtext="Book a consultation and our team will fit these seat covers to your exact vehicle."
        primaryLabel="Book Consultation"
        primaryHref="/contact"
        secondaryLabel="Browse More Products"
        secondaryHref="/products"
      />
    </>
  );
}
