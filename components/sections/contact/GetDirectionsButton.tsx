"use client";

import { SITE } from "@/lib/constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GetDirectionsButton() {
  const href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address)}`;

  const handleClick = () => {
    // Google Ads conversion: Get directions
    window.gtag?.("event", "conversion", {
      send_to: "AW-18480860036/fGtxCIvwqrodEISXruxE",
      value: 1.0,
      currency: "CAD",
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
    >
      Get Directions
    </a>
  );
}
