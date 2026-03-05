export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const GA_ADS_ID = process.env.NEXT_PUBLIC_GA_ADS_ID ?? "";
export const GA_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GA_ADS_CONVERSION_LABEL ?? "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function gtag(...args: unknown[]): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag(...args);
}

export function trackFormSubmission(): void {
  if (GA_MEASUREMENT_ID) {
    gtag("event", "generate_lead");
  }
  if (GA_ADS_ID && GA_ADS_CONVERSION_LABEL) {
    const sendTo = GA_ADS_CONVERSION_LABEL.startsWith("AW-")
      ? GA_ADS_CONVERSION_LABEL
      : `${GA_ADS_ID}/${GA_ADS_CONVERSION_LABEL}`;
    gtag("event", "conversion", { send_to: sendTo });
  }
}

export function trackPhoneClick(): void {
  if (GA_MEASUREMENT_ID) {
    gtag("event", "contact", { method: "phone" });
  }
}

export function trackWhatsAppClick(): void {
  if (GA_MEASUREMENT_ID) {
    gtag("event", "contact", { method: "whatsapp" });
  }
}

export function trackLandingPageView(pagePath: string, pageTitle?: string): void {
  if (GA_MEASUREMENT_ID) {
    gtag("event", "view_landing_page", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}
