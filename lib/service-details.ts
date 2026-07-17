export type ServiceDetail = {
  slug: string;
  name: string;
  heroSubline: string;
  heroImage: string;
  whatIsIt: {
    paragraphs: string[];
    image: string;
  };
  quickFacts: string[];
  howItWorks: { title: string; description: string }[];
  signs: string[];
  related: string[];
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "vehicle-styling": {
    slug: "vehicle-styling",
    name: "Vehicle Styling",
    heroSubline:
      "Transform your vehicle's aesthetic without compromising its integrity.",
    heroImage:
      "https://images.unsplash.com/photo-1745946645137-66cfb274ee7d?w=1600&q=80",
    whatIsIt: {
      image:
        "https://images.unsplash.com/photo-1763178907914-c05ca7eeeceb?w=900&q=80",
      paragraphs: [
        "Vehicle styling is about more than looks — it's about giving your car a complete visual identity that reflects who you are behind the wheel. Our styling service covers everything from custom vinyl wraps and colour changes to chrome delete treatments, badge removal, and subtle trim upgrades.",
        "Every styling job starts with a conversation. We listen to what you're picturing, walk you through material and finish options, and make sure the final look is achievable on your specific make and model before any work begins.",
        "The result is a vehicle that looks intentionally designed, not aftermarket-bolted-on. We take the same care with a subtle chrome delete as we do with a full wrap — every edge finished cleanly, every panel aligned.",
      ],
    },
    quickFacts: [
      "Full and partial vinyl wrap options available",
      "Chrome delete and badge removal included",
      "Colour-matched and custom finish options",
      "Most styling jobs completed within 1-3 days depending on scope",
      "12-month workmanship warranty on all styling work",
    ],
    howItWorks: [
      {
        title: "Consultation",
        description:
          "Share your vision, we advise on what's achievable and recommend materials/finishes for your vehicle.",
      },
      {
        title: "Design Confirmation",
        description:
          "Review a mockup or sample panel before we proceed with the full job.",
      },
      {
        title: "Application",
        description:
          "Our stylists apply wraps, trims, or finishes with precision, panel by panel.",
      },
      {
        title: "Final Inspection",
        description: "Every edge and seam checked before handover.",
      },
    ],
    signs: [
      "Your car feels visually outdated compared to when you bought it",
      "You want a bold look without permanently altering the paint",
      "Chrome trim and badges feel dated against a modern colour scheme",
      "You're preparing your car for a show, meet, or resale and want it to stand out",
    ],
    related: [
      "car-customization",
      "window-visor-rain-guard-installation",
      "installation-services",
    ],
  },

  "car-customization": {
    slug: "car-customization",
    name: "Car Customization",
    heroSubline: "Build a vehicle that's uniquely yours, inside and out.",
    heroImage:
      "https://images.unsplash.com/photo-1615135902020-f499dc74b655?w=1600&q=80",
    whatIsIt: {
      image:
        "https://images.unsplash.com/photo-1633078674059-35d72a5bd19a?w=900&q=80",
      paragraphs: [
        "Car customization is where personal style meets performance and function. Whether you're after custom ambient lighting, upgraded audio, performance accessories, or bespoke interior touches, our team works with you to plan a build that fits your exact vision and budget.",
        "Unlike a standard accessory install, customization projects are often multi-part — combining several products and services into one cohesive result. We manage the whole process so you're not coordinating multiple appointments or guessing what works together.",
        "We've handled everything from single-accessory personal touches to full interior and exterior overhauls, and we approach every project — big or small — with the same attention to detail.",
      ],
    },
    quickFacts: [
      "Combines multiple accessories and services into one coordinated project",
      "Interior and exterior customization options",
      "Budget-based project planning available",
      "Performance and aesthetic upgrades both covered",
      "Custom timeline based on project scope",
    ],
    howItWorks: [
      {
        title: "Planning Session",
        description: "Discuss your goals, budget, and timeline with our team.",
      },
      {
        title: "Custom Proposal",
        description:
          "Receive a full breakdown of recommended products, services, and costs.",
      },
      {
        title: "Staged Installation",
        description:
          "Work is scheduled and completed in the most efficient order.",
      },
      {
        title: "Walkthrough",
        description: "We review every change with you before you drive away.",
      },
    ],
    signs: [
      "You have multiple upgrades in mind but don't know where to start",
      "You want your car to feel genuinely personal, not just accessorized",
      "You're working toward a specific build vision over time",
      "You want one team managing the whole process instead of piecing it together yourself",
    ],
    related: [
      "vehicle-styling",
      "installation-services",
      "car-mats-trunk-liner-installation",
    ],
  },

  "installation-services": {
    slug: "installation-services",
    name: "Installation Services",
    heroSubline:
      "Every product we sell, professionally installed — most same-day.",
    heroImage:
      "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=1600&q=80",
    whatIsIt: {
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=900&q=80",
      paragraphs: [
        "Buying the right accessory is only half the job — the installation is what determines whether it looks factory-fitted or obviously aftermarket. Our certified technicians install every product we sell, from a simple steering wheel cover to a full dash camera system.",
        "We don't rush installations. Every job follows the same process regardless of size: careful prep, precise fitting, and a final quality check before your car leaves our workshop.",
        "Same-day installation is available on most products, and every install comes with a 12-month workmanship warranty — so if anything isn't right, we make it right.",
      ],
    },
    quickFacts: [
      "Same-day service available on most products",
      "12-month workmanship warranty on every installation",
      "Certified technicians for every product category",
      "No appointment needed for small accessory installs",
      "Price-match guarantee on comparable installation quotes",
    ],
    howItWorks: [
      {
        title: "Product Selection",
        description: "Choose your product in-store or online.",
      },
      {
        title: "Book or Walk In",
        description: "Same-day slots available for most installs.",
      },
      {
        title: "Professional Fitting",
        description: "Our technicians install with precision and care.",
      },
      {
        title: "Quality Check & Warranty",
        description: "Final inspection, then you're covered for 12 months.",
      },
    ],
    signs: [
      "You've bought accessories elsewhere and need professional fitting",
      "You've attempted a DIY install and it isn't sitting right",
      "You want warranty-backed peace of mind on the fitting, not just the product",
      "You need it done same-day without a long wait",
    ],
    related: [
      "seat-cover-installation",
      "car-mats-trunk-liner-installation",
      "window-visor-rain-guard-installation",
    ],
  },

  "seat-cover-installation": {
    slug: "seat-cover-installation",
    name: "Seat Cover Installation",
    heroSubline: "Custom-fit seat covers, installed for a factory-look finish.",
    heroImage:
      "https://images.unsplash.com/photo-1633586020715-0b462f444ed3?w=1600&q=80",
    whatIsIt: {
      image:
        "https://images.unsplash.com/photo-1760161339261-56487b766a17?w=900&q=80",
      paragraphs: [
        "A seat cover is only as good as its fit. Our installation service ensures every cover — leather, neoprene, or fabric — sits exactly the way it should on your specific make and model, with no bunching, gaps, or loose edges.",
        "We stock a range of premium seat cover materials to suit different needs: neoprene for waterproofing and daily durability, leather for a luxury factory-style upgrade, and fabric options for a balance of comfort and value.",
        "Installation typically takes under an hour per vehicle, and includes a check of all seat functions (airbags, adjustments, heating if equipped) to confirm nothing is obstructed after fitting.",
      ],
    },
    quickFacts: [
      "Compatible with leather, neoprene, and fabric seat covers",
      "Airbag and seat function compatibility checked on every install",
      "Most installs completed in under an hour",
      "Available as a standalone service or bundled with a seat cover purchase",
      "12-month workmanship warranty included",
    ],
    howItWorks: [
      {
        title: "Cover Selection",
        description: "Choose material and style, or bring your own covers.",
      },
      {
        title: "Fit Check",
        description:
          "We confirm compatibility with your seat type and safety features.",
      },
      {
        title: "Installation",
        description:
          "Covers are fitted with attention to seams, straps, and tension.",
      },
      {
        title: "Function Test",
        description:
          "All seat functions tested to confirm nothing is obstructed.",
      },
    ],
    signs: [
      "Your factory seats are showing wear, stains, or fading",
      "You want extra protection before selling or trading in your vehicle",
      "You're preparing your car for a new baby, pets, or heavy daily use",
      "A previous cover installation is loose, bunched, or poorly fitted",
    ],
    related: [
      "installation-services",
      "car-mats-trunk-liner-installation",
      "car-customization",
    ],
  },

  "car-mats-trunk-liner-installation": {
    slug: "car-mats-trunk-liner-installation",
    name: "Car Mats & Trunk Liner Installation",
    heroSubline:
      "Precision-fitted floor and trunk protection for daily peace of mind.",
    heroImage:
      "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?w=1600&q=80",
    whatIsIt: {
      image:
        "https://images.unsplash.com/photo-1683027908780-4fbd958ee580?w=900&q=80",
      paragraphs: [
        "Floor mats and trunk liners take the brunt of daily wear — mud, spills, cargo, pets, and everything in between. Getting the fit right matters, both for protection and for keeping factory floor sensors and pedal clearance unobstructed.",
        "We install heavy-duty rubber, carpet, and 3D moulded mat options, along with trunk and boot liners shaped to your vehicle's exact cargo area. Every fitting is checked against your vehicle's floor anchor points for a secure, rattle-free fit.",
        "This is one of our quickest installs — most vehicles are done in 20-30 minutes, making it an easy add-on to any other service booking.",
      ],
    },
    quickFacts: [
      "Rubber, carpet, and 3D moulded mat options",
      "Custom-shaped trunk and boot liners available",
      "Floor anchor point compatibility checked on install",
      "Most installs completed in 20-30 minutes",
      "Easy to bundle with any other service booking",
    ],
    howItWorks: [
      {
        title: "Mat/Liner Selection",
        description: "Choose material and coverage level for your vehicle.",
      },
      {
        title: "Fit Confirmation",
        description:
          "Cross-checked against your vehicle's exact floor plan and anchor points.",
      },
      {
        title: "Installation",
        description:
          "Mats and liners secured using factory anchor points where available.",
      },
      {
        title: "Pedal & Clearance Check",
        description: "Confirmed no obstruction to pedals or floor sensors.",
      },
    ],
    signs: [
      "Your current mats are worn, torn, or sliding out of position",
      "You're doing regular trades, deliveries, or outdoor activities that dirty your interior",
      "You want to protect your resale value with minimal-wear flooring",
      "You've just purchased a new or used vehicle with no floor protection",
    ],
    related: [
      "seat-cover-installation",
      "installation-services",
      "vehicle-styling",
    ],
  },

  "window-visor-rain-guard-installation": {
    slug: "window-visor-rain-guard-installation",
    name: "Window Visor / Rain Guard Installation",
    heroSubline:
      "Fresh air, rain protection, installed without residue or panel damage.",
    heroImage:
      "https://images.unsplash.com/photo-1744236404781-530428ffbad5?w=1600&q=80",
    whatIsIt: {
      image:
        "https://images.unsplash.com/photo-1603599913548-7db8eec51383?w=900&q=80",
      paragraphs: [
        "Window visors let you crack your windows for airflow in light rain or heat without letting water in — a small upgrade that makes a noticeable daily difference. The key to a good visor install is a clean, residue-free fit that doesn't damage your paint or window trim.",
        "We fit both adhesive and channel-mounted visor styles depending on your vehicle, always testing fitment before final application. Smoke-tinted finishes are available to blend with most factory window tints.",
        "A proper visor install should be nearly invisible when the windows are closed, and clean when they're cracked — we check both before calling the job complete.",
      ],
    },
    quickFacts: [
      "Adhesive and channel-mounted styles available",
      "Smoke-tinted finish to blend with window tint",
      "No panel damage or paint residue from installation",
      "Compatible with most sedans, SUVs, and utes",
      "Most installs completed within 30-45 minutes",
    ],
    howItWorks: [
      {
        title: "Style Confirmation",
        description:
          "Determine whether your vehicle takes adhesive or channel-mount visors.",
      },
      {
        title: "Surface Prep",
        description: "Panel cleaned and prepped to ensure secure adhesion.",
      },
      {
        title: "Precision Fitting",
        description: "Visors aligned and fitted to each window.",
      },
      {
        title: "Cure Check",
        description: "Confirmed secure fit before handover.",
      },
    ],
    signs: [
      "You want fresh air while driving in light rain without getting wet",
      "You crack windows in hot weather and want to keep interior dry",
      "Your current visors are lifting, discoloured, or poorly fitted",
      "You're upgrading a new or newly purchased vehicle with no visors installed",
    ],
    related: [
      "car-mats-trunk-liner-installation",
      "vehicle-styling",
      "installation-services",
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_DETAILS);
