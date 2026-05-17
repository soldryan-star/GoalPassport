/** AWIN deep link — Caesars Paris Las Vegas (near-stadium hotel cards). */
export const CAESARS_LAS_VEGAS_AWIN_URL =
  "https://www.awin1.com/cread.php?awinmid=6145&awinaffid=2892109&ued=https%3A%2F%2Fwww.caesars.com%2Fparis-las-vegas";

/**
 * Hotel affiliate outbound URLs. Not legal advice — align link format with your partner contract.
 *
 * Option A — Booking.com-style search (set NEXT_PUBLIC_BOOKING_PARTNER_ID = your `aid`):
 * Builds a search-results URL with `ss` (search string), `aid`, optional `label`, and UTM params.
 *
 * Option B — Full template (set NEXT_PUBLIC_HOTEL_AFFILIATE_URL_TEMPLATE):
 * Use `{city}` (raw, will be encoded) and optional `{listingId}` placeholders.
 *
 * If neither A nor B is set, a public Booking.com search URL (`ss` only) is returned unless
 * NEXT_PUBLIC_BOOKING_DISABLE_PUBLIC_FALLBACK is "true".
 */

export type HotelSearchOutbound = {
  url: string | null;
  /** True when URL uses your affiliate template or Booking `aid` (use rel=sponsored). */
  monetized: boolean;
};

/**
 * Outbound hotel search URL: partner template, Booking with `aid`, or public Booking `ss` search.
 * Set `NEXT_PUBLIC_BOOKING_DISABLE_PUBLIC_FALLBACK=true` to omit public Booking when `aid` is unset.
 */
export function buildHotelSearchOutbound(opts: {
  city: string;
  listingId?: string;
  utmCampaign?: string;
}): HotelSearchOutbound {
  const city = opts.city.trim();
  if (!city) return { url: null, monetized: false };

  const template = process.env.NEXT_PUBLIC_HOTEL_AFFILIATE_URL_TEMPLATE?.trim();
  if (template) {
    const cityEnc = encodeURIComponent(city);
    const url = template.replaceAll("{city}", cityEnc).replaceAll("{listingId}", opts.listingId ?? "");
    return { url, monetized: true };
  }

  const aid = process.env.NEXT_PUBLIC_BOOKING_PARTNER_ID?.trim();
  if (aid) {
    const label = (process.env.NEXT_PUBLIC_BOOKING_LABEL ?? "goalpassport-hotels").trim();
    const utmSource = process.env.NEXT_PUBLIC_AFFILIATE_UTM_SOURCE ?? "goalpassport";
    const utmMedium = process.env.NEXT_PUBLIC_AFFILIATE_UTM_MEDIUM ?? "affiliate";
    const utmCampaign = opts.utmCampaign ?? "hotel-search";

    const qs = new URLSearchParams({
      ss: `${city} hotels`,
      aid,
      label,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    });

    return { url: `https://www.booking.com/searchresults.html?${qs.toString()}`, monetized: true };
  }

  if (process.env.NEXT_PUBLIC_BOOKING_DISABLE_PUBLIC_FALLBACK === "true") {
    return { url: null, monetized: false };
  }

  const qs = new URLSearchParams({ ss: `${city} hotels` });
  return { url: `https://www.booking.com/searchresults.html?${qs.toString()}`, monetized: false };
}

export function buildHotelSearchAffiliateUrl(opts: {
  city: string;
  listingId?: string;
  utmCampaign?: string;
}): string | null {
  return buildHotelSearchOutbound(opts).url;
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
