export type ColorVariant = {
  name: string;
  slug: string;
  /** Single hex for solid colors, [hex, hex] for two-tone swatches */
  swatch: string | [string, string];
  images: string[];
  /** True when no confirmed photo exists yet for this color */
  comingSoon?: boolean;
};

const base = "/images/products/seat-covers/deluxe";

export const DELUXE_SEAT_COVERS = {
  slug: "deluxe-car-seat-covers",
  name: "Deluxe Car Seat Covers",
  category: "Seat Covers",
  price: 299,
  compareAtPrice: 379,
  priceUnconfirmed: true,
  badge: "PREMIUM" as const,
  shortDescription:
    "Premium Deluxe seat cover set with 12 color options, including matching headrest covers and lumbar support cushions for complete interior comfort.",
  fullDescription:
    "This Deluxe seat cover set brings premium comfort and style to your vehicle's interior, available in 12 distinct colors to match any taste. Each set includes 2 headrest covers and 2 lumbar support cushions, crafted with the same attention to detail and durability across every color option. Waterproof, breathable, and built to last — with airbag compatibility and an easy, secure installation.",
  features: [
    "Premium leather",
    "Universal fit (5 seats)",
    "Airbag compatible",
    "Waterproof & breathable",
    "Easy installation",
    "Includes 2 headrest covers",
    "Includes 2 lumbar support cushions",
    "12 color options available",
  ],
  defaultVariant: "mysterious-black",
  // 11 named colors confirmed by the client, plus one slot from the source
  // listing's own color chart that duplicated "Martha Red" instead of naming
  // a distinct 12th color — kept as an unconfirmed placeholder rather than
  // guessing what it should say.
  variants: [
    {
      name: "Martha Red",
      slug: "martha-red",
      swatch: "#7B1521",
      images: [`${base}/martha-red/martha-red-1.jpg`],
    },
    {
      name: "Mysterious Black",
      slug: "mysterious-black",
      swatch: "#1A1A1A",
      images: [
        `${base}/mysterious-black/mysterious-black-1.jpg`,
        `${base}/mysterious-black/mysterious-black-2.jpg`,
      ],
    },
    {
      name: "Black Red Line",
      slug: "black-red-line",
      swatch: ["#1A1A1A", "#B3141C"] as [string, string],
      images: [
        `${base}/black-red-line/black-red-line-1.jpg`,
        `${base}/black-red-line/black-red-line-2.jpg`,
        `${base}/black-red-line/black-red-line-3.jpg`,
        `${base}/black-red-line/black-red-line-4.jpg`,
        `${base}/black-red-line/black-red-line-5.jpg`,
      ],
    },
    {
      name: "Black with White Lines",
      slug: "black-white-lines",
      swatch: ["#1A1A1A", "#F5F5F5"] as [string, string],
      images: [],
      comingSoon: true,
    },
    {
      name: "Black Brown",
      slug: "black-brown",
      swatch: "#2E2320",
      images: [],
      comingSoon: true,
    },
    {
      name: "Coffee Brown",
      slug: "coffee-brown",
      swatch: "#4A3222",
      images: [],
      comingSoon: true,
    },
    {
      name: "Dark Grey",
      slug: "dark-grey",
      swatch: "#4B4B4B",
      images: [],
      comingSoon: true,
    },
    {
      name: "China Red",
      slug: "china-red",
      swatch: "#C8102E",
      images: [],
      comingSoon: true,
    },
    {
      name: "Soft Pink",
      slug: "soft-pink",
      swatch: "#F2C9CF",
      images: [
        `${base}/soft-pink/soft-pink-1.jpg`,
        `${base}/soft-pink/soft-pink-2.jpg`,
        `${base}/soft-pink/soft-pink-3.jpg`,
        `${base}/soft-pink/soft-pink-4.jpg`,
        `${base}/soft-pink/soft-pink-5.jpg`,
      ],
    },
    {
      name: "Nordic Green",
      slug: "nordic-green",
      swatch: "#A8C3B0",
      images: [],
      comingSoon: true,
    },
    {
      name: "Vibrant Orange",
      slug: "vibrant-orange",
      swatch: "#E8732A",
      images: [],
      comingSoon: true,
    },
    {
      name: "Color 12 (Unconfirmed)",
      slug: "color-12-unconfirmed",
      swatch: "#9CA3AF",
      images: [],
      comingSoon: true,
    },
  ] satisfies ColorVariant[],
  // Below the main variant gallery — general product detail shots, not tied
  // to any single color.
  detailsGallery: [
    {
      image: `${base}/details/color-options-overview.jpg`,
      caption: "All 12 color options",
    },
    {
      image: `${base}/details/headrest-detail.jpg`,
      caption: "Included headrest cover",
    },
    {
      image: `${base}/details/headrest-lumbar-collocation.jpg`,
      caption: "Included lumbar support cushion",
    },
    {
      image: `${base}/details/material-texture-1.jpg`,
      caption: "Premium leather texture",
    },
    {
      image: `${base}/details/material-texture-2.jpg`,
      caption: "Premium leather texture",
    },
    {
      image: `${base}/details/storage-pocket-1.jpg`,
      caption: "Reinforced storage pocket",
    },
    {
      image: `${base}/details/storage-pocket-2.jpg`,
      caption: "Reinforced storage pocket",
    },
    {
      image: `${base}/details/airbag-1.jpg`,
      caption: "Airbag-compatible seam design",
    },
    {
      image: `${base}/details/airbag-2.jpg`,
      caption: "Airbag-compatible seam design",
    },
  ],
};

export function getDeluxeDefaultVariant() {
  return (
    DELUXE_SEAT_COVERS.variants.find(
      (v) => v.slug === DELUXE_SEAT_COVERS.defaultVariant
    ) ?? DELUXE_SEAT_COVERS.variants[0]
  );
}
