import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ServiceDetailHero } from "@/components/sections/service-detail/ServiceDetailHero";
import { WhatIsIt } from "@/components/sections/service-detail/WhatIsIt";
import { QuickFacts } from "@/components/sections/service-detail/QuickFacts";
import { HowItWorksDetail } from "@/components/sections/service-detail/HowItWorksDetail";
import { SignsYouNeedThis } from "@/components/sections/service-detail/SignsYouNeedThis";
import { RelatedServices } from "@/components/sections/service-detail/RelatedServices";
import { SERVICE_DETAILS, SERVICE_SLUGS } from "@/lib/service-details";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = SERVICE_DETAILS[params.slug];
  if (!service) return {};

  return {
    title: `${service.name} | Luxe Auto Accessories`,
    description: service.heroSubline,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICE_DETAILS[params.slug];
  if (!service) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />
      <ServiceDetailHero
        name={service.name}
        subline={service.heroSubline}
        image={service.heroImage}
      />
      <WhatIsIt
        paragraphs={service.whatIsIt.paragraphs}
        image={service.whatIsIt.image}
        serviceName={service.name}
      />
      <QuickFacts facts={service.quickFacts} />
      <HowItWorksDetail steps={service.howItWorks} />
      <SignsYouNeedThis signs={service.signs} />
      <RelatedServices slugs={service.related} />
      <CtaBanner
        heading="Book This Service"
        subtext="Same-day service available on most items, with a 12-month workmanship warranty."
        primaryLabel="Book This Service"
        primaryHref="/contact"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
