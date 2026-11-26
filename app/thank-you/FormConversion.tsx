"use client";

import { useEffect } from "react";
import { FORM_CONVERSION_SEND_TO } from "@/lib/constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Fires once per page load of /thank-you.
export function FormConversion() {
  useEffect(() => {
    window.dataLayer?.push({ event: "form_submit_success" });
    if (FORM_CONVERSION_SEND_TO) {
      window.gtag?.("event", "conversion", {
        send_to: FORM_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "CAD",
      });
    }
  }, []);

  return null;
}
