import {
  PREMIUM_UNIVERSAL_SEAT_COVERS,
  getDefaultVariant,
} from "@/lib/products/premium-universal-seat-covers";
import {
  DELUXE_SEAT_COVERS,
  getDeluxeDefaultVariant,
  type ColorVariant,
} from "@/lib/products/deluxe-seat-covers";
import {
  CAR_AIR_FRESHENER,
  getAirFreshenerDefaultVariant,
} from "@/lib/products/car-air-freshener";

export const SITE = {
  name: "Luxe Auto Accessories",
  tagline: "Passion for Cars. Commitment to Quality.",
  phone: "+1 437-265-9090",
  email: "info@luxeautoaccessories.com",
  address: "96 Planchet Rd, Vaughan, ON L4K 2C7, Canada",
  hours: [
    { days: "Mon–Fri", time: "8:00am – 6:00pm" },
    { days: "Sat", time: "9:00am – 4:00pm" },
    { days: "Sun", time: "Closed" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  {
    value: 100,
    suffix: "%",
    label: "Quality Products",
    description:
      "Premium automotive accessories sourced from trusted manufacturers.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Professional Installation",
    description:
      "Expert installation services completed with precision and care.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Customer Satisfaction",
    description:
      "Dedicated to providing exceptional service from consultation to installation.",
  },
  {
    value: 7,
    suffix: " Days",
    label: "Open Every Week",
    description:
      "Serving customers Monday through Sunday for your convenience.",
  },
];

export const VALUES = [
  {
    number: "01",
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we do — from the products we stock to the way we communicate with customers. Every installation is checked twice before we call the job done.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "Honest advice, transparent pricing, and genuine recommendations. We'll never upsell you on something you don't need.",
  },
  {
    number: "03",
    title: "Passion",
    description:
      "We're car enthusiasts first and foremost. Our love for automotive culture drives us to continuously seek the best products on the market.",
  },
  {
    number: "04",
    title: "Community",
    description:
      "Proudly serving Western Sydney, we're committed to being a trusted part of the local automotive community for years to come.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Had my dash cam and floor mats installed here. The fit is perfect and the whole process took under an hour.",
    name: "Daniel Kovač",
    vehicle: "BMW 3 Series 2021",
    rating: 5,
  },
  {
    quote:
      "Best automotive accessories shop I've used in Sydney. Honest advice, fair pricing, flawless installation.",
    name: "Priya Nair",
    vehicle: "Toyota RAV4 2022",
    rating: 5,
  },
  {
    quote:
      "Walked in not knowing what I wanted for my ute, walked out with a full interior refresh. Same-day install as promised.",
    name: "Marcus Webb",
    vehicle: "Ford Ranger 2020",
    rating: 4,
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: "BEST SELLER" | "POPULAR" | "NEW" | "PREMIUM" | "PROFESSIONAL";
  /** Short copy — shown on the card and used as the Quick View fallback description */
  description: string;
  /** Longer copy for the Quick View modal. Falls back to `description` when absent. */
  fullDescription?: string;
  features: string[];
  rating: number;
  reviewCount: number;
  image: string;
  /** Only set for products with a full dedicated page (currently just the seat covers) */
  detailHref?: string;
  /** True when price is a placeholder pending client confirmation */
  priceUnconfirmed?: boolean;
  /** When set, Quick View shows a full variant swatch + crossfade gallery instead of a single image */
  variants?: ColorVariant[];
  defaultVariantSlug?: string;
  /** Extra captioned detail shots shown below the main Quick View content */
  detailsGallery?: { image: string; caption: string }[];
};

export const CATEGORIES = [
  "Interior Accessories",
  "Exterior Accessories",
  "Car Care Products",
  "Seat Covers",
  "Electronics",
  "Steering & Wheel Accessories",
  "Lighting",
  "Storage & Organization",
  "Air Fresheners & Fragrance",
];

export const PRODUCTS: Product[] = [
  {
    slug: "premium-leather-steering-wheel-cover",
    name: "Premium Leather Steering Wheel Cover",
    category: "Interior Accessories",
    price: 89,
    compareAtPrice: 129,
    badge: "POPULAR",
    description:
      "Hand-stitched genuine leather cover for improved grip and a premium feel. Fits most standard wheel sizes.",
    fullDescription:
      "Wrap your steering wheel in genuine hand-stitched leather for a noticeably better grip and a more premium feel on every drive. Designed to fit most standard wheel sizes with a snug, no-slip fit that holds up to daily use.",
    features: [
      "Genuine leather",
      "Hand-stitched seams",
      "Universal fit",
      "Non-slip grip",
    ],
    rating: 4.7,
    reviewCount: 42,
    image:
      "https://images.unsplash.com/photo-1633078674059-35d72a5bd19a?w=800&q=80",
  },
  {
    slug: "console-organizer",
    name: "Console Organizer",
    category: "Interior Accessories",
    price: 35,
    compareAtPrice: 50,
    description: "Center console organizer for phones, keys, and small items.",
    fullDescription:
      "Keep your center console tidy with dedicated slots for your phone, keys, cards, and other small essentials — no more digging through a cluttered console on the go.",
    features: [
      "Multiple storage compartments",
      "Non-slip base",
      "Fits most consoles",
      "Easy-clean material",
    ],
    rating: 4.5,
    reviewCount: 27,
    image:
      "https://images.unsplash.com/photo-1633586020715-0b462f444ed3?w=800&q=80",
  },
  {
    slug: "seat-gap-filler-set",
    name: "Seat Gap Filler Set",
    category: "Interior Accessories",
    price: 25,
    compareAtPrice: 35,
    description:
      "Prevents items falling between seats. Easy tool-free installation.",
    fullDescription:
      "These flexible fillers seal the gap between your seat and console, stopping phones, coins, and other small items from disappearing down the side of your seat. Tool-free install in minutes.",
    features: [
      "Tool-free installation",
      "Flexible, durable material",
      "Universal fit",
      "Set of 2",
    ],
    rating: 4.4,
    reviewCount: 19,
    image:
      "https://images.unsplash.com/photo-1760161339261-56487b766a17?w=800&q=80",
  },
  {
    slug: "3d-carbon-fibre-floor-mats",
    name: "3D Carbon Fibre Floor Mats (Set of 4)",
    category: "Exterior Accessories",
    price: 199,
    compareAtPrice: 249,
    badge: "BEST SELLER",
    description:
      "Precision-molded all-weather protection with a premium carbon fibre finish.",
    fullDescription:
      "Precision-molded to hug your vehicle's floor pan, these all-weather mats trap mud, water, and debris while adding a premium carbon fibre finish to your interior. Built to handle daily wear without cracking or fading.",
    features: [
      "Precision-molded fit",
      "All-weather protection",
      "Carbon fibre finish",
      "Set of 4",
    ],
    rating: 4.8,
    reviewCount: 64,
    image:
      "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?w=800&q=80",
  },
  {
    slug: "window-visors-rain-guards",
    name: "Window Visors / Rain Guards",
    category: "Exterior Accessories",
    price: 99,
    compareAtPrice: 135,
    description:
      "Smoke-tinted visors that reduce rain intrusion and allow fresh air while driving.",
    fullDescription:
      "Crack your windows in the rain without letting water in. These smoke-tinted visors deflect wind and rain while improving airflow, installed cleanly with no drilling or panel damage.",
    features: [
      "Smoke-tinted finish",
      "No-drill installation",
      "Improves airflow",
      "Reduces wind noise",
    ],
    rating: 4.6,
    reviewCount: 31,
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
  },
  {
    slug: "premium-car-cover",
    name: "Premium Car Cover",
    category: "Exterior Accessories",
    price: 149,
    compareAtPrice: 189,
    description:
      "UV-resistant, breathable cover for full vehicle protection in any weather.",
    fullDescription:
      "A breathable, UV-resistant cover that shields your car from sun, rain, dust, and tree sap whether it's parked outside for an afternoon or stored long-term. Snug fit keeps it secure in wind.",
    features: [
      "UV-resistant fabric",
      "Breathable, waterproof",
      "Snug elasticated fit",
      "Compact storage bag",
    ],
    rating: 4.5,
    reviewCount: 22,
    image:
      "https://images.unsplash.com/photo-1688385822171-410271d223b3?w=800&q=80",
  },
  {
    slug: "ceramic-coating-kit",
    name: "Ceramic Coating Kit",
    category: "Car Care Products",
    price: 89,
    compareAtPrice: 119,
    badge: "POPULAR",
    description:
      "DIY-friendly ceramic coating for long-lasting paint protection and shine.",
    fullDescription:
      "A DIY-friendly ceramic coating that bonds to your paint for long-lasting gloss and protection against UV, dirt, and light scratches — professional-level shine without the professional price tag.",
    features: [
      "DIY-friendly application",
      "Long-lasting protection",
      "UV & scratch resistant",
      "High-gloss finish",
    ],
    rating: 4.7,
    reviewCount: 38,
    image:
      "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&q=80",
  },
  {
    slug: "detailing-bundle",
    name: "Interior & Exterior Detailing Bundle",
    category: "Car Care Products",
    price: 65,
    compareAtPrice: 89,
    description: "Complete kit for a showroom-finish clean, inside and out.",
    fullDescription:
      "Everything you need for a showroom-finish clean — interior wipe-downs, glass cleaner, and exterior wash-and-wax products bundled together in one complete kit.",
    features: [
      "Complete detailing kit",
      "Interior & exterior products",
      "Showroom-finish results",
      "Great value bundle",
    ],
    rating: 4.6,
    reviewCount: 29,
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80",
  },
  {
    slug: "premium-leather-seat-cover-set",
    name: "Premium Leather Seat Cover Set",
    category: "Seat Covers",
    price: 299,
    compareAtPrice: 379,
    badge: "PREMIUM",
    description:
      "Handcrafted premium leather, custom-fitted for a luxurious feel.",
    fullDescription:
      "Handcrafted from premium leather and custom-fitted to your vehicle, these seat covers bring a luxurious factory-upgrade feel while protecting your original upholstery from everyday wear.",
    features: [
      "Handcrafted leather",
      "Custom-fitted",
      "Protects factory seats",
      "Luxury finish",
    ],
    rating: 4.8,
    reviewCount: 47,
    image:
      "https://images.unsplash.com/photo-1760161339261-56487b766a17?w=800&q=80",
  },
  {
    slug: PREMIUM_UNIVERSAL_SEAT_COVERS.slug,
    name: PREMIUM_UNIVERSAL_SEAT_COVERS.name,
    category: PREMIUM_UNIVERSAL_SEAT_COVERS.category,
    price: PREMIUM_UNIVERSAL_SEAT_COVERS.price,
    compareAtPrice: PREMIUM_UNIVERSAL_SEAT_COVERS.compareAtPrice,
    badge: PREMIUM_UNIVERSAL_SEAT_COVERS.badge,
    // Quick View for this product intentionally shows only the short description
    // and default-variant image — the full variant gallery stays on its own page.
    description: PREMIUM_UNIVERSAL_SEAT_COVERS.shortDescription,
    features: PREMIUM_UNIVERSAL_SEAT_COVERS.features,
    rating: 4.8,
    reviewCount: 58,
    image: getDefaultVariant().images[0],
    detailHref: `/products/${PREMIUM_UNIVERSAL_SEAT_COVERS.slug}`,
  },
  {
    slug: "neoprene-waterproof-seat-cover-set",
    name: "Neoprene Waterproof Seat Cover Set",
    category: "Seat Covers",
    price: 189,
    compareAtPrice: 229,
    description: "Durable, waterproof, and easy to clean.",
    fullDescription:
      "Built from durable, waterproof neoprene, these seat covers are made for daily life — spills, mud, sand, and pet hair wipe clean in seconds without soaking through to your factory seats.",
    features: [
      "Waterproof neoprene",
      "Easy wipe-clean",
      "Durable daily use",
      "Universal fit",
    ],
    rating: 4.6,
    reviewCount: 24,
    image:
      "https://images.unsplash.com/photo-1748621020739-d1df8bfe293d?w=800&q=80",
  },
  {
    slug: "full-hd-dash-camera",
    name: "Full HD Dash Camera with Night Vision",
    category: "Electronics",
    price: 249,
    compareAtPrice: 349,
    badge: "BEST SELLER",
    description:
      "Front and rear recording with sharp night vision clarity and loop recording.",
    fullDescription:
      "Capture sharp front and rear footage day or night with clear night vision recording and continuous loop recording, so you're always covered on the road.",
    features: [
      "Front & rear recording",
      "Night vision clarity",
      "Loop recording",
      "Easy install",
    ],
    rating: 4.7,
    reviewCount: 53,
    image:
      "https://images.unsplash.com/photo-1639322913462-a97945bf7b85?w=800&q=80",
  },
  {
    slug: "led-interior-lighting-kit",
    name: "LED Interior Lighting Kit",
    category: "Electronics",
    price: 79,
    compareAtPrice: 109,
    badge: "NEW",
    description:
      "App-controlled ambient lighting kit with multiple colour modes.",
    fullDescription:
      "Transform your cabin ambience with app-controlled LED lighting, offering multiple colour modes and brightness settings to match your mood or setup.",
    features: [
      "App-controlled",
      "Multiple colour modes",
      "Easy installation",
      "Low power draw",
    ],
    rating: 4.5,
    reviewCount: 21,
    image:
      "https://images.unsplash.com/photo-1615135902020-f499dc74b655?w=800&q=80",
  },
  {
    slug: "alloy-wheel-spacers",
    name: "Alloy Wheel Spacers (Set of 4)",
    category: "Steering & Wheel Accessories",
    price: 129,
    compareAtPrice: 169,
    description:
      "Precision-engineered for a wider stance and improved handling.",
    fullDescription:
      "Precision-engineered spacers that push your wheels out for a wider, more aggressive stance while improving handling and stability through corners.",
    features: [
      "Precision-engineered fit",
      "Wider stance",
      "Improved handling",
      "Set of 4",
    ],
    rating: 4.6,
    reviewCount: 18,
    image:
      "https://images.unsplash.com/photo-1741366175071-3604c86ec475?w=800&q=80",
  },
  {
    slug: "led-headlight-upgrade-kit",
    name: "LED Headlight Upgrade Kit",
    category: "Lighting",
    price: 159,
    compareAtPrice: 199,
    badge: "NEW",
    description:
      "Brighter, whiter light output with plug-and-play installation.",
    fullDescription:
      "Swap out dim factory bulbs for brighter, whiter LED output with a simple plug-and-play install — no cutting, no splicing, just a clearer view of the road ahead.",
    features: [
      "Brighter, whiter light",
      "Plug-and-play install",
      "Long lifespan",
      "Improved night visibility",
    ],
    rating: 4.7,
    reviewCount: 45,
    image:
      "https://images.unsplash.com/photo-1683791737647-e3e6efb1e2f2?w=800&q=80",
  },
  {
    slug: "boot-trunk-organizer",
    name: "Boot/Trunk Organizer",
    category: "Storage & Organization",
    price: 45,
    compareAtPrice: 65,
    description: "Collapsible, heavy-duty organizer to keep cargo space tidy.",
    fullDescription:
      "A collapsible, heavy-duty organizer that keeps your cargo space tidy — groceries, tools, and gear stay upright and separated instead of sliding around the boot.",
    features: [
      "Collapsible design",
      "Heavy-duty construction",
      "Keeps cargo organized",
      "Folds flat for storage",
    ],
    rating: 4.5,
    reviewCount: 26,
    image:
      "https://images.unsplash.com/photo-1683027908780-4fbd958ee580?w=800&q=80",
  },
  {
    slug: DELUXE_SEAT_COVERS.slug,
    name: DELUXE_SEAT_COVERS.name,
    category: DELUXE_SEAT_COVERS.category,
    price: DELUXE_SEAT_COVERS.price,
    compareAtPrice: DELUXE_SEAT_COVERS.compareAtPrice,
    priceUnconfirmed: DELUXE_SEAT_COVERS.priceUnconfirmed,
    badge: DELUXE_SEAT_COVERS.badge,
    description: DELUXE_SEAT_COVERS.shortDescription,
    fullDescription: DELUXE_SEAT_COVERS.fullDescription,
    features: DELUXE_SEAT_COVERS.features,
    rating: 4.6,
    reviewCount: 33,
    image: getDeluxeDefaultVariant().images[0],
    variants: DELUXE_SEAT_COVERS.variants,
    defaultVariantSlug: DELUXE_SEAT_COVERS.defaultVariant,
    detailsGallery: DELUXE_SEAT_COVERS.detailsGallery,
  },
  {
    slug: CAR_AIR_FRESHENER.slug,
    name: CAR_AIR_FRESHENER.name,
    category: CAR_AIR_FRESHENER.category,
    price: CAR_AIR_FRESHENER.price,
    compareAtPrice: CAR_AIR_FRESHENER.compareAtPrice,
    priceUnconfirmed: CAR_AIR_FRESHENER.priceUnconfirmed,
    description: CAR_AIR_FRESHENER.shortDescription,
    fullDescription: CAR_AIR_FRESHENER.fullDescription,
    features: CAR_AIR_FRESHENER.features,
    rating: 4.5,
    reviewCount: 14,
    image: getAirFreshenerDefaultVariant().images[0],
    variants: CAR_AIR_FRESHENER.variants,
    defaultVariantSlug: CAR_AIR_FRESHENER.defaultVariant,
  },
];

const FEATURED_PRODUCT_SLUGS = [
  "3d-carbon-fibre-floor-mats",
  "full-hd-dash-camera",
  "premium-leather-seat-cover-set",
  "ceramic-coating-kit",
  "led-headlight-upgrade-kit",
  "premium-leather-steering-wheel-cover",
];

// Derived from PRODUCTS (not a separate copy) so the Home page grid always
// shows the exact same data — and image — as the Products page and Quick View.
export const FEATURED_PRODUCTS: Product[] = FEATURED_PRODUCT_SLUGS.map((slug) =>
  PRODUCTS.find((p) => p.slug === slug)!
);

export const FOOTER_LINKS = {
  shop: [
    "Interior Accessories",
    "Exterior Accessories",
    "Car Care Products",
    "Seat Covers",
    "Electronics",
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Book a Consultation", href: "/contact" },
  ],
};

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80";

export const ABOUT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=80";

export const JOURNEY_IMAGES = {
  large:
    "https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&q=80",
  smallTop:
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80",
  smallBottom:
    "https://images.unsplash.com/photo-1768341396286-a6322d588111?w=600&q=80",
};

export const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=1200&q=80";

export const MISSION_VISION_PURPOSE = [
  {
    title: "Mission",
    heading: "To Elevate Every Drive",
    description:
      "Make premium automotive accessories accessible to every driver, backed by expert advice and installation that delivers a perfect result, every time.",
    width: "wide" as const,
  },
  {
    title: "Vision",
    heading: "Australia's Most Trusted Auto Accessories Brand",
    description:
      "We envision Luxe Auto Accessories as synonymous with quality, reliability, and automotive passion — the go-to destination for drivers who demand the best.",
    width: "wide" as const,
  },
  {
    title: "Purpose",
    heading: "Genuine Care for Every Vehicle",
    description:
      "We treat every car as if it were our own — building lasting relationships through honesty and genuine care.",
    width: "narrow" as const,
  },
];

export const SERVICES = [
  {
    slug: "vehicle-styling",
    title: "Vehicle Styling",
    description:
      "Our vehicle styling service gives your car a complete makeover, blending form and function. From custom wraps to chrome delete, our expert stylists craft a look that's uniquely yours — without compromising your vehicle's integrity.",
    image:
      "https://images.unsplash.com/photo-1745946645137-66cfb274ee7d?w=900&q=80",
  },
  {
    slug: "car-customization",
    title: "Car Customization",
    description:
      "Personalise your ride inside and out. Whether it's performance upgrades, custom lighting, or bespoke interior touches, our team works with you to build a vehicle that reflects your style and needs.",
    image:
      "https://images.unsplash.com/photo-1615135902020-f499dc74b655?w=900&q=80",
  },
  {
    slug: "installation-services",
    title: "Installation Services",
    description:
      "Every product we sell can be professionally installed by our certified technicians. Same-day service available on most items, with a 12-month workmanship warranty on every install.",
    image:
      "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=900&q=80",
  },
  {
    slug: "seat-cover-installation",
    title: "Seat Cover Installation",
    description:
      "Professional, custom-fit installation of premium seat covers — leather, neoprene, or fabric. Every install is fitted to your exact make and model.",
    image:
      "https://images.unsplash.com/photo-1633586020715-0b462f444ed3?w=900&q=80",
  },
  {
    slug: "car-mats-trunk-liner-installation",
    title: "Car Mats & Trunk Liner Installation",
    description:
      "Precision fitting of floor mats, boot liners, and trunk protection. Heavy-duty rubber, carpet, or 3D moulded options installed for maximum coverage and fit.",
    image:
      "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?w=900&q=80",
  },
  {
    slug: "window-visor-rain-guard-installation",
    title: "Window Visor / Rain Guard Installation",
    description:
      "Expert fitting of window visors and rain guards, allowing airflow while keeping rain out — installed cleanly with no residue or panel damage.",
    image:
      "https://images.unsplash.com/photo-1744236404781-530428ffbad5?w=900&q=80",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Tell us about your vehicle and what you're looking to achieve. Our team will recommend the right products and approach.",
  },
  {
    number: "02",
    title: "Product Selection",
    description:
      "Choose from our range of 500+ premium products, with expert guidance every step of the way.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Our certified technicians handle the install with precision and care, most completed same-day.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "Every installation is inspected before handover to ensure it meets our standards.",
  },
  {
    number: "05",
    title: "Drive Away",
    description:
      "Leave with a 12-month workmanship warranty and a vehicle that's the best version of itself.",
  },
];

export type GalleryItem = {
  slug: string;
  title: string;
  category: "Interior" | "Exterior" | "Detailing" | "Full Builds";
  image: string;
  aspect: "square" | "portrait" | "landscape";
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    slug: "full-interior-refresh-camry",
    title: "Full Interior Refresh — Toyota Camry",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1615135902020-f499dc74b655?w=800&q=80",
    aspect: "portrait",
  },
  {
    slug: "ceramic-coating-bmw",
    title: "Ceramic Coating Application — BMW 3 Series",
    category: "Detailing",
    image:
      "https://images.unsplash.com/photo-1734554178502-a5ecd7ac7fe9?w=800&q=80",
    aspect: "landscape",
  },
  {
    slug: "custom-wrap-mustang",
    title: "Custom Wrap Install — Ford Mustang",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1745946645137-66cfb274ee7d?w=800&q=80",
    aspect: "landscape",
  },
  {
    slug: "dash-cam-mazda",
    title: "Dash Cam & Electronics Setup — Mazda CX-5",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1639322913462-a97945bf7b85?w=800&q=80",
    aspect: "square",
  },
  {
    slug: "vehicle-styling-audi",
    title: "Complete Vehicle Styling — Audi A4",
    category: "Full Builds",
    image:
      "https://images.unsplash.com/photo-1688385822171-410271d223b3?w=800&q=80",
    aspect: "portrait",
  },
  {
    slug: "window-tint-tucson",
    title: "Window Tint & Visor Install — Hyundai Tucson",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
    aspect: "square",
  },
  {
    slug: "leather-seat-ranger",
    title: "Leather Seat Cover Upgrade — Ford Ranger",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1748621020739-d1df8bfe293d?w=800&q=80",
    aspect: "portrait",
  },
  {
    slug: "alloy-wheel-wrx",
    title: "Alloy Wheel & Spacer Install — Subaru WRX",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1741366175071-3604c86ec475?w=800&q=80",
    aspect: "square",
  },
];
