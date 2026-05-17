import type { HostCitySlug } from "@/data/cities";
import { EXPEDIA_TRAVEL_SHOP_URL, getExpediaTravelShopOutbound } from "@/lib/affiliate";

export { EXPEDIA_TRAVEL_SHOP_URL };

/** Curated picks from the GoalPassport Expedia Travel Shop collection. */
export const EXPEDIA_HOTELS_BY_CITY: Partial<Record<HostCitySlug, readonly string[]>> = {
  vancouver: [
    "Hyatt Regency Vancouver",
    "Pan Pacific Vancouver",
    "Pinnacle Hotel Harbourfront",
  ],
  "san-francisco": [
    "Fairmont San Francisco",
    "Hilton Santa Clara",
    "Hyatt Regency Santa Clara",
    "Santa Clara Marriott",
    "Hotel Nia, Autograph Collection",
  ],
  "mexico-city": [
    "Hyatt Regency Mexico City",
    "Sofitel Mexico City Reforma",
    "Barceló México Reforma",
    "InterContinental Presidente Mexico City by IHG",
  ],
  atlanta: [
    "Signia By Hilton Atlanta Georgia World Congress Center",
    "Omni Atlanta Hotel at Centennial Park",
    "Hyatt Regency Atlanta Downtown",
    "Hilton Atlanta",
  ],
  dallas: [
    "Thompson Dallas, by Hyatt",
    "Omni Dallas Hotel",
    "Hyatt Regency Dallas",
    "Virgin Hotels Dallas",
    "Canvas Hotel Dallas",
  ],
  "los-angeles": [
    "JW Marriott Los Angeles L.A. LIVE",
    "Hotel Figueroa, Unbound Collection by Hyatt",
    "InterContinental Los Angeles Downtown by IHG",
    "Freehand Los Angeles",
  ],
  miami: [
    "Loews Miami Beach Hotel – South Beach",
    "Kimpton EPIC Hotel by IHG",
    "Fontainebleau Miami Beach",
  ],
  "new-york": [
    "Arlo Midtown",
    "Moxy NYC Times Square",
    "Hard Rock Hotel New York - Partner of ALL Accor",
    "Hyatt Grand Central New York",
    "Margaritaville Resort Times Square",
  ],
  seattle: [
    "Sheraton Grand Seattle",
    "Fairmont Olympic Hotel",
    "Hyatt Regency Seattle",
    "Renaissance Seattle Hotel",
  ],
  toronto: [
    "Hotel X Toronto, a Destination by Hyatt Hotel",
    "Bisha, a Luxury Collection Hotel Toronto",
    "Hyatt Regency Toronto",
    "Delta Hotels by Marriott Toronto",
    "Fairmont Royal York",
  ],
};

export function getExpediaHotelsForCity(slug: HostCitySlug): readonly string[] {
  return EXPEDIA_HOTELS_BY_CITY[slug] ?? [];
}

export function cityHasExpediaPicks(slug: HostCitySlug): boolean {
  return getExpediaHotelsForCity(slug).length > 0;
}

export function getExpediaCityHotelOutbound() {
  return getExpediaTravelShopOutbound();
}
