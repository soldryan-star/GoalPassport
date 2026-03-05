"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID, GA_ADS_ID } from "@/lib/gtag";

const GA_SCRIPT_SRC = "https://www.googletagmanager.com/gtag/js";

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`${GA_SCRIPT_SRC}?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          ${GA_ADS_ID ? `gtag('config', '${GA_ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
