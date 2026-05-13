/**
 * Hotel affiliate outbound URLs. Not legal advice — align link format with your partner contract.
 *
 * Option A — Booking.com-style search (set NEXT_PUBLIC_BOOKING_PARTNER_ID = your `aid`):
 * Builds a search-results URL with `ss` (search string), `aid`, optional `label`, and UTM params.
 *
 * Option B — Full template (set NEXT_PUBLIC_HOTEL_AFFILIATE_URL_TEMPLATE):
 * Use `{city}` (raw, will be encoded) and optional `{listingId}` placeholders.
 */

export function buildHotelSearchAffiliateUrl(opts: {
  city: string;
  listingId?: string;
  utmCampaign?: string;
}): string | null {
  const template = process.env.NEXT_PUBLIC_HOTEL_AFFILIATE_URL_TEMPLATE?.trim();
  if (template) {
    const cityEnc = encodeURIComponent(opts.city.trim());
    return template.replaceAll("{city}", cityEnc).replaceAll("{listingId}", opts.listingId ?? "");
  }

  const aid = process.env.NEXT_PUBLIC_BOOKING_PARTNER_ID?.trim();
  if (!aid) return null;

  const label = (process.env.NEXT_PUBLIC_BOOKING_LABEL ?? "groundline26-hotels").trim();
  const utmSource = process.env.NEXT_PUBLIC_AFFILIATE_UTM_SOURCE ?? "groundline26";
  const utmMedium = process.env.NEXT_PUBLIC_AFFILIATE_UTM_MEDIUM ?? "affiliate";
  const utmCampaign = opts.utmCampaign ?? "hotel-search";

  const qs = new URLSearchParams({
    ss: `${opts.city.trim()} hotels`,
    aid,
    label,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
  });

  return `https://www.booking.com/searchresults.html?${qs.toString()}`;
}

export function isSportsbookFeatureEnabled(): boolean {
  return process.env.NEXT_PUBLIC_SPORTSBOOK_ENABLED === "true";
}

/** ISO 3166-1 alpha-2 country codes allowed to see sportsbook CTAs after gating (self-attestation). */
export function getSportsbookAllowedCountries(): string[] {
  const raw = process.env.NEXT_PUBLIC_SPORTSBOOK_ALLOWED_COUNTRIES ?? "US,CA,MX";
  return raw
    .split(",")
    .map((c) => c.trim().toUpperCase())
    .filter(Boolean);
}

export function getSportsbookOutboundUrl(): string | null {
  const u = process.env.NEXT_PUBLIC_SPORTSBOOK_OUTBOUND_URL?.trim();
  return u || null;
}
