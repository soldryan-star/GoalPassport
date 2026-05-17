import type { HostCitySlug } from "@/data/cities";
import { getExpediaTravelShopOutbound } from "@/lib/affiliate";

export { EXPEDIA_TRAVEL_SHOP_URL } from "@/lib/affiliate";

export type ExpediaCityHotel = {
  hotelName: string;
  /** Paste full URL from Expedia "See details" (keeps affiliate params). */
  url?: string;
};

/**
 * Primary outbound per city — flagship property from the Travel Shop collection.
 * Replace with your dashboard "See details" links when available (clickref params).
 */
export const EXPEDIA_CITY_PRIMARY_URL: Partial<Record<HostCitySlug, string>> = {
  toronto:
    "https://www.expedia.ca/Toronto-Hotels-Hotel-X-Toronto-By-Library-Hotel-Collection.h19822661.Hotel-Information",
  vancouver:
    "https://www.expedia.ca/Vancouver-Hotels-Hyatt-Regency-Vancouver.h3203.Hotel-Information",
  // Paste remaining cities from Expedia Travel Shop "See details" (keeps clickref).
};

const EXPEDIA_HOTELS_BY_CITY: Partial<Record<HostCitySlug, readonly ExpediaCityHotel[]>> = {
  vancouver: [
    { hotelName: "Hyatt Regency Vancouver", url: EXPEDIA_CITY_PRIMARY_URL.vancouver },
    { hotelName: "Pan Pacific Vancouver" },
    { hotelName: "Pinnacle Hotel Harbourfront" },
  ],
  "san-francisco": [
    { hotelName: "Fairmont San Francisco", url: EXPEDIA_CITY_PRIMARY_URL["san-francisco"] },
    { hotelName: "Hilton Santa Clara" },
    { hotelName: "Hyatt Regency Santa Clara" },
    { hotelName: "Santa Clara Marriott" },
    { hotelName: "Hotel Nia, Autograph Collection" },
  ],
  "mexico-city": [
    { hotelName: "Hyatt Regency Mexico City", url: EXPEDIA_CITY_PRIMARY_URL["mexico-city"] },
    { hotelName: "Sofitel Mexico City Reforma" },
    { hotelName: "Barceló México Reforma" },
    { hotelName: "InterContinental Presidente Mexico City by IHG" },
  ],
  atlanta: [
    {
      hotelName: "Signia By Hilton Atlanta Georgia World Congress Center",
      url: EXPEDIA_CITY_PRIMARY_URL.atlanta,
    },
    { hotelName: "Omni Atlanta Hotel at Centennial Park" },
    { hotelName: "Hyatt Regency Atlanta Downtown" },
    { hotelName: "Hilton Atlanta" },
  ],
  dallas: [
    { hotelName: "Thompson Dallas, by Hyatt", url: EXPEDIA_CITY_PRIMARY_URL.dallas },
    { hotelName: "Omni Dallas Hotel" },
    { hotelName: "Hyatt Regency Dallas" },
    { hotelName: "Virgin Hotels Dallas" },
    { hotelName: "Canvas Hotel Dallas" },
  ],
  "los-angeles": [
    { hotelName: "JW Marriott Los Angeles L.A. LIVE", url: EXPEDIA_CITY_PRIMARY_URL["los-angeles"] },
    { hotelName: "Hotel Figueroa, Unbound Collection by Hyatt" },
    { hotelName: "InterContinental Los Angeles Downtown by IHG" },
    { hotelName: "Freehand Los Angeles" },
  ],
  miami: [
    { hotelName: "Loews Miami Beach Hotel – South Beach", url: EXPEDIA_CITY_PRIMARY_URL.miami },
    { hotelName: "Kimpton EPIC Hotel by IHG" },
    { hotelName: "Fontainebleau Miami Beach" },
  ],
  "new-york": [
    { hotelName: "Arlo Midtown", url: EXPEDIA_CITY_PRIMARY_URL["new-york"] },
    { hotelName: "Moxy NYC Times Square" },
    { hotelName: "Hard Rock Hotel New York - Partner of ALL Accor" },
    { hotelName: "Hyatt Grand Central New York" },
    { hotelName: "Margaritaville Resort Times Square" },
  ],
  seattle: [
    { hotelName: "Sheraton Grand Seattle", url: EXPEDIA_CITY_PRIMARY_URL.seattle },
    { hotelName: "Fairmont Olympic Hotel" },
    { hotelName: "Hyatt Regency Seattle" },
    { hotelName: "Renaissance Seattle Hotel" },
  ],
  toronto: [
    {
      hotelName: "Hotel X Toronto, a Destination by Hyatt Hotel",
      url: EXPEDIA_CITY_PRIMARY_URL.toronto,
    },
    { hotelName: "Bisha, a Luxury Collection Hotel Toronto" },
    { hotelName: "Hyatt Regency Toronto" },
    { hotelName: "Delta Hotels by Marriott Toronto" },
    { hotelName: "Fairmont Royal York" },
  ],
};

export function getExpediaHotelsForCity(slug: HostCitySlug): readonly ExpediaCityHotel[] {
  return EXPEDIA_HOTELS_BY_CITY[slug] ?? [];
}

export function cityHasExpediaPicks(slug: HostCitySlug): boolean {
  return getExpediaHotelsForCity(slug).length > 0;
}

export function getHotelOutboundUrl(slug: HostCitySlug, hotel: ExpediaCityHotel): string {
  return hotel.url ?? EXPEDIA_CITY_PRIMARY_URL[slug] ?? getExpediaTravelShopOutbound().url;
}

export function getExpediaCityHotelOutbound(slug: HostCitySlug): { url: string; monetized: boolean } {
  const url = EXPEDIA_CITY_PRIMARY_URL[slug] ?? getExpediaTravelShopOutbound().url;
  return { url, monetized: true };
}
