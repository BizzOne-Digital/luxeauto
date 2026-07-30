import type { ColorVariant } from "@/lib/products/deluxe-seat-covers";

const base = "/images/products/air-freshener";

export type AirFreshenerVariant = ColorVariant & { scentName: string };

export const CAR_AIR_FRESHENER = {
  slug: "car-air-freshener-aromatherapy",
  name: "Car Air Freshener (Aromatherapy)",
  category: "Air Fresheners & Fragrance",
  price: 19,
  compareAtPrice: 25,
  priceUnconfirmed: true,
  shortDescription:
    "A compact aromatherapy car air freshener available in five scent options, designed to keep your car's interior smelling fresh with a subtle, long-lasting fragrance.",
  fullDescription:
    "Our aromatherapy car air fresheners bring a subtle, long-lasting scent to your vehicle's interior. Compact and easy to place in any cupholder, vent, or console, each scent is crafted to freshen your drive without overwhelming the senses. Available in five fragrance options to suit your preference.",
  features: [
    "Compact hanging design",
    "Long-lasting fragrance",
    "Fits cupholder, vent, or console",
    "Five scent options",
  ],
  defaultVariant: "yellow",
  // Actual scent name behind each color is not yet confirmed by the client —
  // "TBC" is a placeholder, not a real scent name.
  variants: [
    {
      name: "Yellow",
      slug: "yellow",
      scentName: "TBC",
      swatch: "#F2C230",
      images: [`${base}/yellow/yellow-1.jpg`],
    },
    {
      name: "Pink",
      slug: "pink",
      scentName: "TBC",
      swatch: "#F2A6C4",
      images: [`${base}/pink/pink-1.jpg`],
    },
    {
      name: "Green",
      slug: "green",
      scentName: "TBC",
      swatch: "#7FBF8E",
      images: [`${base}/green/green-1.jpg`],
    },
    {
      name: "Lavender",
      slug: "lavender",
      scentName: "TBC",
      swatch: "#B79FD1",
      images: [`${base}/lavender/lavender-1.jpg`],
    },
    {
      name: "Red",
      slug: "red",
      scentName: "TBC",
      swatch: "#C8232C",
      images: [],
      comingSoon: true,
    },
  ] satisfies AirFreshenerVariant[],
};

export function getAirFreshenerDefaultVariant() {
  return (
    CAR_AIR_FRESHENER.variants.find(
      (v) => v.slug === CAR_AIR_FRESHENER.defaultVariant
    ) ?? CAR_AIR_FRESHENER.variants[0]
  );
}
