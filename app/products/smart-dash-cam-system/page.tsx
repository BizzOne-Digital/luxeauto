import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SimpleGallery } from "@/components/ui/SimpleGallery";
import { ProductInfo } from "@/components/sections/product-detail/ProductInfo";
import { ProductDetailsGallery } from "@/components/ui/ProductDetailsGallery";
import { PRODUCTS, SMART_DASH_CAM_DETAILS } from "@/lib/constants";

const product = PRODUCTS.find((p) => p.slug === "smart-dash-cam-system")!;

export const metadata: Metadata = {
  title: `${product.name} | Luxe Auto Accessories`,
  description: product.description,
};

export default function SmartDashCamSystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Electronics"
        title={product.name}
        subtitle={product.description}
      />
      <Breadcrumb
        items={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <Section bg="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SimpleGallery
            images={[product.image, ...(product.gallery ?? [])]}
            alt={product.name}
          />
          <ProductInfo
            category={product.category}
            name={product.name}
            badge={product.badge}
            description={product.fullDescription ?? product.description}
            features={product.features}
          />
        </div>
      </Section>

      <Section bg="light-alt">
        <ProductDetailsGallery items={SMART_DASH_CAM_DETAILS} />
      </Section>

      <CtaBanner
        heading="Ready to Upgrade Your Vehicle?"
        subtext="Book a consultation and our team will help you get the right dash cam setup for your vehicle."
        primaryLabel="Book Consultation"
        primaryHref="/contact"
        secondaryLabel="Browse More Products"
        secondaryHref="/products"
      />
    </>
  );
}
