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
  phone: "+1 437 265 9090",
  email: "Sales.luxeauto@gmail.com",
  address: "966 Pantera Dr #21, Mississauga ON L4W 2S1, Canada",
  hours: [
    { days: "Mon–Fri", time: "8:00am – 7:00pm" },
    { days: "Sat", time: "9:00am – 6:00pm" },
    { days: "Sun", time: "9:00am – 5:00pm" },
  ],
};

// WhatsApp intentionally omitted pending client confirmation of the correct link —
// see the commented placeholder slot in Footer.tsx for where it goes once confirmed.
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/luxeauto_accessories",
  tiktok: "https://www.tiktok.com/@luxeauto_accessories",
  facebook: "https://www.facebook.com/luxeautoaccessories",
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
      "Proudly serving the Greater Toronto Area, we're committed to being a trusted part of the local automotive community for years to come.",
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
      "Best automotive accessories shop I've used in Toronto. Honest advice, fair pricing, flawless installation.",
    name: "Priya Nair",
    vehicle: "Toyota RAV4 2022",
    rating: 5,
  },
  {
    quote:
      "Walked in not knowing what I wanted for my truck, walked out with a full interior refresh. Same-day install as promised.",
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
  /** Additional main-gallery images (no color variants) shown alongside `image` as a thumbnail-swappable gallery */
  gallery?: string[];
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
  "Air Fresheners & Fragrance",
  "Tires",
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
    image: "/images/products/steering-wheel-cover/color-options.jpg",
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
    image: "/images/products/window-visors/airflow-diagram.jpg",
    gallery: [
      "/images/products/window-visors/fitment-detail.jpg",
      "/images/products/window-visors/window-trim-view.jpg",
      "/images/products/window-visors/pillar-mount-arrows.jpg",
    ],
    detailsGallery: [
      {
        image: "/images/products/window-visors/why-install-benefits.jpg",
        caption: "Air circulation, rainproof venting, anti-fog, and sun shade",
      },
      {
        image: "/images/products/window-visors/pillar-trim-closeup.jpg",
        caption: "Clean pillar-mount trim fit",
      },
    ],
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
  {
    slug: "smart-dash-cam-system",
    name: "Smart Dash Cam System (4CH with Rear View Camera)",
    category: "Electronics",
    price: 249,
    badge: "PROFESSIONAL",
    description:
      "A 4-channel smart dash cam system with front and rear coverage, night vision, GPS tracking, and touch screen control.",
    fullDescription:
      "This smart dash cam system delivers comprehensive front and rear coverage with a high-performance STARVIS 2 sensor for sharp footage in any lighting condition. Featuring a responsive touch screen display, voice control, GPS tracking, and loop recording, it pairs with a mobile app for easy playback and footage management. Includes 128GB of onboard storage and simple installation with a suction cup mount and Type-C power input.",
    features: [
      "128GB memory card included",
      "STARVIS 2 image sensor",
      "Touch screen & voice control",
      "Front and rear camera coverage",
      "GPS tracking",
      "Night vision recording",
      "Loop recording",
      "Mobile app playback (iOS/Android)",
      "PC/macOS video playback support",
    ],
    rating: 4.7,
    reviewCount: 36,
    image: "/images/products/dash-cam/hero-128gb-starvis2.jpg",
    gallery: [
      "/images/products/dash-cam/touchscreen-voice-control.jpg",
      "/images/products/dash-cam/dashboard-rearview-display.jpg",
    ],
    detailsGallery: [
      {
        image: "/images/products/dash-cam/installation-suction-typec.jpg",
        caption: "Easy installation with suction mount and Type-C power",
      },
      {
        image: "/images/products/dash-cam/night-vision-loop-recording.jpg",
        caption: "Night vision and loop recording",
      },
      {
        image: "/images/products/dash-cam/gps-cross-platform-playback.jpg",
        caption: "GPS tracking and cross-platform playback",
      },
    ],
    detailHref: "/products/smart-dash-cam-system",
  },
  {
    slug: "mirror-dash-cam-3-channel",
    name: "4K Mirror Dash Cam System (3-Channel)",
    category: "Electronics",
    price: 269,
    badge: "NEW",
    description:
      "A 4K mirror-mount dash cam that replaces your rearview mirror with a 3-channel front, rear, and cabin recording system.",
    fullDescription:
      "This mirror dash cam mounts directly over your existing rearview mirror, replacing the view with a wide touchscreen display while recording front, rear, and cabin footage simultaneously. Built for durability with an upgraded super capacitor for stable performance in extreme heat and cold, it includes GPS tracking, loop recording with G-sensor event locking, and enhanced night vision for clear footage day or night.",
    features: [
      "3-channel: front, rear & cabin recording",
      "4K UHD front camera",
      "Mirror-mount touchscreen display",
      "GPS tracking with route playback",
      "Super night vision (WDR)",
      "Loop recording & G-sensor",
      "Upgraded super capacitor (heat & cold resistant)",
      "Mobile app connectivity",
    ],
    rating: 4.5,
    reviewCount: 9,
    image: "/images/products/mirror-dash-cam/hero-mirror-cam-gps.jpg",
    gallery: [
      "/images/products/mirror-dash-cam/4k-uhd-banner.jpg",
      "/images/products/mirror-dash-cam/3-channel-desert-scene.jpg",
    ],
    detailsGallery: [
      {
        image: "/images/products/mirror-dash-cam/super-night-vision.jpg",
        caption: "Super night vision with WDR",
      },
      {
        image: "/images/products/mirror-dash-cam/gps-tracking-playback.jpg",
        caption: "GPS tracking and route playback",
      },
      {
        image: "/images/products/mirror-dash-cam/loop-recording-g-sensor.jpg",
        caption: "Loop recording with G-sensor event locking",
      },
      {
        image: "/images/products/mirror-dash-cam/whats-in-the-box.jpg",
        caption: "What's in the box",
      },
      {
        image: "/images/products/mirror-dash-cam/upgraded-super-capacitor.jpg",
        caption: "Upgraded super capacitor for extreme heat & cold",
      },
    ],
  },
  {
    slug: "hard-folding-tonneau-cover",
    name: "Hard Folding Tonneau Cover",
    category: "Exterior Accessories",
    price: 549,
    description:
      "A durable tri-fold hard tonneau cover with a matte finish that protects your truck bed while giving full access when you need it.",
    fullDescription:
      "This hard folding tonneau cover combines a rugged matte-black finish with all-weather protection for your truck bed. The tri-fold hard panel design gives you full bed access in seconds, while the low-profile styling keeps your truck looking sharp on and off the road.",
    features: [
      "Matte black finish",
      "Full bed access",
      "All-weather protection",
      "Tri-fold hard panel design",
      "Secure locking mechanism",
      "Fits most full-size trucks",
    ],
    rating: 4.6,
    reviewCount: 21,
    image: "/images/products/tonneau-cover/hero-f150.jpg",
    gallery: [
      "/images/products/tonneau-cover/hero-offroad.jpg",
      "/images/products/tonneau-cover/feature-icons.jpg",
    ],
    detailsGallery: [
      {
        image: "/images/products/tonneau-cover/space-utilization.jpg",
        caption: "Locked, partially folded, or fully folded for flexible access",
      },
      {
        image: "/images/products/tonneau-cover/confirm-size-1.jpg",
        caption: "Confirm your bed size before ordering",
      },
      {
        image: "/images/products/tonneau-cover/confirm-size-2.jpg",
        caption: "Confirm your bed size before ordering",
      },
      {
        image: "/images/products/tonneau-cover/confirm-size-3.jpg",
        caption: "Measure your bed length before ordering",
      },
    ],
  },
  {
    slug: "all-weather-tpe-floor-mats",
    name: "Premium 5D Custom TPE Floor Mats",
    category: "Exterior Accessories",
    price: 179,
    description:
      "Precision fit 5D floor mats made from 100 percent original TPE material, offering complete all-weather protection.",
    fullDescription:
      "Protect your vehicle's interior with precision fit mats made from 100 percent original TPE material. These 5D floor mats offer complete all-weather protection with raised edges to contain mud, snow, water, and spills. Durable, odourless, waterproof, and easy to clean, our mats are designed to handle Canada's toughest seasons. Professional installation is available at Luxe Auto Accessories to ensure a perfect fit and a clean, factory look that elevates your vehicle's interior.",
    features: [
      "100% original TPE material",
      "Precision custom fit",
      "5D raised-edge design",
      "All-weather protection (mud, snow, water, spills)",
      "Durable and odourless",
      "Waterproof and easy to clean",
      "Professional installation available",
    ],
    rating: 4.6,
    reviewCount: 18,
    image: "/images/products/floor-mats-tpe/hero-rav4-set.jpg",
    gallery: ["/images/products/floor-mats-tpe/wear-resistant.jpg"],
    detailsGallery: [
      {
        image: "/images/products/floor-mats-tpe/waterproof-test.jpg",
        caption: "Waterproof and easy to clean",
      },
      {
        image: "/images/products/floor-mats-tpe/high-ridges-grooves.jpg",
        caption: "High ridges capture mud, slush, and debris",
      },
      {
        image: "/images/products/floor-mats-tpe/all-season-durability.jpg",
        caption: "All-season durability in extreme weather",
      },
      {
        image: "/images/products/floor-mats-tpe/before-after.jpg",
        caption: "Refresh the look of your interior",
      },
    ],
  },
  {
    // PENDING CLIENT CONFIRMATION — name, description, and price below are
    // placeholders written to match the site's tone. No product photos exist
    // yet for this SKU; using licensed stock tire photography in the meantime.
    slug: "all-season-tires",
    name: "All-Season Performance Tires",
    category: "Tires",
    price: 159,
    priceUnconfirmed: true,
    badge: "NEW",
    description:
      "Reliable all-season tires built for year-round grip and a smooth, quiet ride. Details pending final confirmation.",
    fullDescription:
      "Keep your vehicle planted in rain, shine, and light winter conditions with our all-season performance tires. Engineered for a balance of grip, tread life, and a quiet ride, they're a solid everyday choice backed by our fast, professional tire change service. Exact sizing, pricing, and full specs are still being finalized with our supplier — this listing is a placeholder pending final client confirmation before launch.",
    features: [
      "All-season tread compound",
      "Reliable wet and dry grip",
      "Reduced road noise",
      "Fast professional fitting available in-store",
      "Sizing and full specs pending confirmation",
    ],
    rating: 4.6,
    reviewCount: 12,
    image:
      "https://images.unsplash.com/photo-1753030148904-16130157a3e5?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1656232976683-7b688560e427?w=800&q=80",
    ],
    detailsGallery: [
      {
        image:
          "https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?w=800&q=80",
        caption: "Professional tire fitting available in-store",
      },
    ],
  },
];

// Full detail set for the dedicated Smart Dash Cam System page — Quick View
// only shows a short curated set (see PRODUCTS above); the full page shows everything.
export const SMART_DASH_CAM_DETAILS: { image: string; caption: string }[] = [
  {
    image: "/images/products/dash-cam/installation-suction-typec.jpg",
    caption: "Easy installation with suction mount and Type-C power",
  },
  {
    image: "/images/products/dash-cam/night-vision-loop-recording.jpg",
    caption: "Night vision and loop recording",
  },
  {
    image: "/images/products/dash-cam/gps-cross-platform-playback.jpg",
    caption: "GPS tracking and cross-platform playback",
  },
  {
    image: "/images/products/dash-cam/whats-in-the-box.jpg",
    caption: "What's in the box",
  },
  {
    image: "/images/products/dash-cam/4-channel-rideshare-recording.jpg",
    caption: "4-channel recording, ideal for rideshare drivers",
  },
  {
    image: "/images/products/dash-cam/24h-parking-monitor.jpg",
    caption: "24H parking monitor with impact detection",
  },
  {
    image: "/images/products/dash-cam/multi-angle-ir-cabin-camera.jpg",
    caption: "Multi-angle IR cabin camera",
  },
  {
    image: "/images/products/dash-cam/detachable-design-typec.jpg",
    caption: "Detachable design with upgraded Type-C interface",
  },
  {
    image: "/images/products/dash-cam/low-voltage-protection.jpg",
    caption: "Adjustable low voltage protection",
  },
  {
    image: "/images/products/dash-cam/2-5k-clarity-comparison.jpg",
    caption: "2.5K clarity reveals the details others miss",
  },
];

const FEATURED_PRODUCT_SLUGS = [
  PREMIUM_UNIVERSAL_SEAT_COVERS.slug,
  "full-hd-dash-camera",
  "premium-leather-seat-cover-set",
  "ceramic-coating-kit",
  "smart-dash-cam-system",
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
    heading: "Canada's Most Trusted Auto Accessories Brand",
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
  {
    slug: "tire-change-service",
    title: "Tire Change Service",
    description:
      "Fast, professional tire changes, swaps, and rotations — walk in or book ahead, most vehicles done in under 30 minutes.",
    image:
      "https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?w=900&q=80",
  },
  {
    slug: "dash-cam-installation",
    title: "Dash Cam Installation",
    description:
      "Clean, hardwired dash cam installs with hidden cabling — front, rear, and mirror-style systems all professionally fitted.",
    image:
      "/images/products/dash-cam/installation-suction-typec.jpg",
  },
  {
    slug: "window-tinting",
    title: "Window Tinting",
    description:
      "Professional-grade window tint for heat rejection, privacy, and UV protection, applied bubble-free and legally compliant.",
    image:
      "https://images.unsplash.com/photo-1761123090853-9262493448c4?w=900&q=80",
  },
  {
    slug: "paint-protection-film",
    title: "Paint Protection Film (PPF)",
    description:
      "Self-healing, invisible film that shields your paint from chips, scratches, and road debris while preserving the factory finish.",
    image:
      "https://images.unsplash.com/photo-1679897422600-dbcc37196105?w=900&q=80",
  },
  {
    slug: "interior-lighting-installation",
    title: "Interior Lighting Installation",
    description:
      "App-controlled ambient interior lighting professionally wired and installed for a clean, factory-integrated finish.",
    image:
      "https://images.unsplash.com/photo-1748569924394-1cd406885eb4?w=900&q=80",
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
