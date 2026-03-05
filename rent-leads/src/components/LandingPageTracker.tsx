"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackLandingPageView } from "@/lib/gtag";

const LANDING_PATHS = [
  "/rentals-north-york",
  "/rentals-richmond-hill",
  "/rentals-downtown-toronto",
  "/rentals-scarborough",
  "/rentals-vaughan",
  "/rentals-woodbridge",
  "/rentals-etobicoke",
  "/rentals-east-york",
  "/rentals-aurora",
  "/rentals-newmarket",
];

export default function LandingPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && LANDING_PATHS.includes(pathname)) {
      trackLandingPageView(pathname, document.title);
    }
  }, [pathname]);

  return null;
}
