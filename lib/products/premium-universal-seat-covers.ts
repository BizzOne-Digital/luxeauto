export type SeatCoverVariant = {
  name: string;
  slug: string;
  /** Single hex for solid colors, [hex, hex] for two-tone swatches */
  swatch: string | [string, string];
  images: string[];
};

const base = "/images/products/seat-covers/premium-universal";

export const PREMIUM_UNIVERSAL_SEAT_COVERS = {
  slug: "premium-universal-seat-covers",
  name: "Premium Universal Car Seat Covers",
  category: "Seat Covers",
  price: 259,
  compareAtPrice: 329,
  priceUnconfirmed: true,
  badge: "BEST SELLER" as const,
  shortDescription:
    "Napa leather seat covers with a universal 5-seat fit, airbag-compatible and built for daily durability with added lumbar support.",
  fullDescription:
    "Crafted from premium Napa leather, these universal-fit seat covers are designed to fit most 5-seat vehicles while remaining fully compatible with factory airbag systems. Waterproof and breathable materials keep seats protected without sacrificing comfort, while built-in lumbar support adds everyday driving comfort. Scratch-resistant and easy to install, they're a durable upgrade for any interior.",
  features: [
    "Napa leather",
    "Universal fit (5 seats)",
    "Airbag compatible",
    "Waterproof & breathable",
    "Easy installation",
    "Scratch-resistant",
    "Lumbar support",
  ],
  compatibility: {
    categories: [
      {
        label: "Pickup Trucks",
        models: [
          "Ford F-150",
          "Toyota Tundra",
          "Toyota Tacoma",
          "GMC Sierra",
          "Ram 1500",
        ],
      },
      {
        label: "Mid-Size SUVs",
        models: [
          "Honda CR-V",
          "Hyundai Kona",
          "Nissan Rogue",
          "and similar models",
        ],
      },
    ],
    guideImage: `${base}/compatibility-guide.jpg`,
  },
  defaultVariant: "black",
  variants: [
    {
      name: "Beige",
      slug: "beige",
      swatch: "#D9C2A0",
      images: [
        `${base}/beige/beige-1.jpg`,
        `${base}/beige/beige-2.jpg`,
        `${base}/beige/beige-3.jpg`,
      ],
    },
    {
      name: "Black",
      slug: "black",
      swatch: "#1C1C1C",
      images: [`${base}/black/black-1.jpg`, `${base}/black/black-2.jpg`],
    },
    {
      name: "Red",
      slug: "red",
      swatch: "#8B1A1A",
      images: Array.from(
        { length: 10 },
        (_, i) => `${base}/red/red-${i + 1}.jpg`
      ),
    },
    {
      name: "Brown",
      slug: "brown",
      swatch: "#6F4530",
      images: [`${base}/brown/brown-1.jpg`],
    },
    {
      name: "Black/Grey",
      slug: "black-grey",
      swatch: ["#1C1C1C", "#9CA3AF"],
      images: [
        `${base}/black-grey/black-grey-1.jpg`,
        `${base}/black-grey/black-grey-2.jpg`,
      ],
    },
    {
      name: "Black/Blue",
      slug: "black-blue",
      swatch: ["#1C1C1C", "#2F6FEB"],
      images: [
        `${base}/black-blue/black-blue-1.jpg`,
        `${base}/black-blue/black-blue-2.jpg`,
      ],
    },
    {
      name: "Black/Red",
      slug: "black-red",
      swatch: ["#1C1C1C", "#8B1A1A"],
      images: [
        `${base}/black-red/black-red-1.jpg`,
        `${base}/black-red/black-red-2.jpg`,
      ],
    },
  ] satisfies SeatCoverVariant[],
};

export function getDefaultVariant() {
  return (
    PREMIUM_UNIVERSAL_SEAT_COVERS.variants.find(
      (v) => v.slug === PREMIUM_UNIVERSAL_SEAT_COVERS.defaultVariant
    ) ?? PREMIUM_UNIVERSAL_SEAT_COVERS.variants[0]
  );
}
