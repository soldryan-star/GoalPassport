import type { HostCitySlug } from "@/data/cities";
import { getExpediaTravelShopOutbound } from "@/lib/affiliate";

export { EXPEDIA_TRAVEL_SHOP_URL } from "@/lib/affiliate";

export type ExpediaCityHotel = {
  hotelName: string;
  /** Full Expedia property URL — prefer dashboard "See details" links (clickref). */
  url?: string;
};

/** Override per city via env, e.g. NEXT_PUBLIC_EXPEDIA_URL_TORONTO */
function getEnvPrimaryUrl(slug: HostCitySlug): string | undefined {
  const key = `NEXT_PUBLIC_EXPEDIA_URL_${slug.replace(/-/g, "_").toUpperCase()}`;
  const value = process.env[key]?.trim();
  return value || undefined;
}

/**
 * Default flagship property per city (expedia.ca). Replace with dashboard links in env or below.
 * @see https://www.expedia.ca/shop/goalpassport/best-fifa-world-cup-2026-hotels
 */
export const EXPEDIA_CITY_PRIMARY_URL: Partial<Record<HostCitySlug, string>> = {
  toronto:
    "https://www.expedia.ca/Toronto-Hotels-Hotel-X-Toronto-By-Library-Hotel-Collection.h19822661.Hotel-Information",
  vancouver:
    "https://www.expedia.ca/Vancouver-Hotels-Hyatt-Regency-Vancouver.h3203.Hotel-Information",
  "san-francisco":
    "https://www.expedia.ca/San-Francisco-Hotels-Fairmont-San-Francisco.h18200.Hotel-Information",
  "mexico-city":
    "https://www.expedia.ca/Mexico-City-Hotels-Hyatt-Regency-Mexico-City.h23360.Hotel-Information",
  atlanta:
    "https://www.expedia.ca/Atlanta-Hotels-Signia-By-Hilton-Atlanta-Georgia-World-Congress-Center.h93159646.Hotel-Information",
  dallas:
    "https://www.expedia.ca/Dallas-Hotels-THOMPSON-DALLAS.h57077186.Hotel-Information",
  "los-angeles":
    "https://www.expedia.ca/Los-Angeles-Hotels-JW-Marriott-Los-Angeles-LA-LIVE.h2877393.Hotel-Information",
  miami:
    "https://www.expedia.ca/Miami-Beach-Hotels-Loews-Miami-Beach-Hotel-South-Beach.h81223.Hotel-Information",
  "new-york":
    "https://www.expedia.ca/New-York-Hotels-Arlo-Midtown.h48669360.Hotel-Information",
  seattle:
    "https://www.expedia.ca/Seattle-Hotels-Sheraton-Seattle-Hotel.h25290.Hotel-Information",
  boston:
    "https://www.expedia.ca/Foxboro-Hotels-Renaissance-By-Marriott-Boston-Patriot-Place-Hotel.h2571800.Hotel-Information",
  guadalajara:
    "https://www.expedia.ca/Guadalajara-Hotels-NH-Collection-Guadalajara-Providencia.h2665133.Hotel-Information",
  monterrey:
    "https://www.expedia.ca/Monterrey-Hotels-Live-Aqua-Urban-Resort-Monterrey.h12946714.Hotel-Information",
  houston:
    "https://www.expedia.ca/Houston-Hotels-Hilton-Houston-Plaza-Medical-Center.h25188.Hotel-Information",
  "kansas-city":
    "https://www.expedia.ca/Kansas-City-Hotels-Loews-Kansas-City-Hotel.h37225812.Hotel-Information",
  philadelphia:
    "https://www.expedia.ca/Philadelphia-Hotels-Courtyard-Philadelphia-South-At-The-Navy-Yard.h6802037.Hotel-Information",
};

function primaryUrl(slug: HostCitySlug): string | undefined {
  return getEnvPrimaryUrl(slug) ?? EXPEDIA_CITY_PRIMARY_URL[slug];
}

const EXPEDIA_HOTELS_BY_CITY: Partial<Record<HostCitySlug, readonly ExpediaCityHotel[]>> = {
  vancouver: [
    { hotelName: "Hyatt Regency Vancouver" },
    { hotelName: "Pan Pacific Vancouver" },
    { hotelName: "Pinnacle Hotel Harbourfront" },
  ],
  "san-francisco": [
    { hotelName: "Fairmont San Francisco" },
    { hotelName: "Hilton Santa Clara" },
    { hotelName: "Hyatt Regency Santa Clara" },
    { hotelName: "Santa Clara Marriott" },
    { hotelName: "Hotel Nia, Autograph Collection" },
  ],
  "mexico-city": [
    { hotelName: "Hyatt Regency Mexico City" },
    { hotelName: "Sofitel Mexico City Reforma" },
    { hotelName: "Barceló México Reforma" },
    { hotelName: "InterContinental Presidente Mexico City by IHG" },
  ],
  atlanta: [
    { hotelName: "Signia By Hilton Atlanta Georgia World Congress Center" },
    { hotelName: "Omni Atlanta Hotel at Centennial Park" },
    { hotelName: "Hyatt Regency Atlanta Downtown" },
    { hotelName: "Hilton Atlanta" },
  ],
  dallas: [
    { hotelName: "Thompson Dallas, by Hyatt" },
    { hotelName: "Omni Dallas Hotel" },
    { hotelName: "Hyatt Regency Dallas" },
    { hotelName: "Virgin Hotels Dallas" },
    { hotelName: "Canvas Hotel Dallas" },
  ],
  "los-angeles": [
    { hotelName: "JW Marriott Los Angeles L.A. LIVE" },
    { hotelName: "Hotel Figueroa, Unbound Collection by Hyatt" },
    { hotelName: "InterContinental Los Angeles Downtown by IHG" },
    { hotelName: "Freehand Los Angeles" },
  ],
  miami: [
    { hotelName: "Loews Miami Beach Hotel – South Beach" },
    { hotelName: "Kimpton EPIC Hotel by IHG" },
    { hotelName: "Fontainebleau Miami Beach" },
  ],
  "new-york": [
    { hotelName: "Arlo Midtown" },
    { hotelName: "Moxy NYC Times Square" },
    { hotelName: "Hard Rock Hotel New York - Partner of ALL Accor" },
    { hotelName: "Hyatt Grand Central New York" },
    { hotelName: "Margaritaville Resort Times Square" },
  ],
  seattle: [
    { hotelName: "Sheraton Grand Seattle" },
    { hotelName: "Fairmont Olympic Hotel" },
    { hotelName: "Hyatt Regency Seattle" },
    { hotelName: "Renaissance Seattle Hotel" },
  ],
  toronto: [
    { hotelName: "Hotel X Toronto, a Destination by Hyatt Hotel" },
    {
      hotelName: "Hyatt Regency Toronto",
      url: "https://www.expedia.ca/Toronto-Hotels-Hyatt-Regency-Toronto.h19371.Hotel-Information",
    },
    { hotelName: "Bisha, a Luxury Collection Hotel Toronto" },
    { hotelName: "Delta Hotels by Marriott Toronto" },
    { hotelName: "Fairmont Royal York" },
  ],
  boston: [
    { hotelName: "Renaissance Boston Patriot Place Hotel" },
    {
      hotelName: "Omni Boston Hotel at the Seaport",
      url: "https://www.expedia.ca/Boston-Hotels-Omni-Boston-Hotel-At-The-Seaport.h68014393.Hotel-Information",
    },
    {
      hotelName: "Hilton Garden Inn Foxborough",
      url: "https://www.expedia.ca/Foxboro-Hotels-Hilton-Garden-Inn-Foxborough-Patriot-Place.h16103225.Hotel-Information",
    },
  ],
  guadalajara: [
    {
      hotelName: "Hilton Guadalajara Midtown",
      url: "https://www.expedia.ca/Guadalajara-Hotels-Hilton-Guadalajara-Midtown.h64985206.Hotel-Information",
    },
    {
      hotelName: "NH Collection Guadalajara Providencia",
      url: "https://www.expedia.ca/Guadalajara-Hotels-NH-Collection-Guadalajara-Providencia.h2665133.Hotel-Information",
    },
    {
      hotelName: "Holiday Inn Hotel & Suites Guadalajara Centro Historico",
      url: "https://www.expedia.ca/Guadalajara-Hotels-Holiday-Inn-Hotel-Suites-Guadalajara-Centro-Historico.h84127.Hotel-Information",
    },
  ],
  houston: [
    { hotelName: "Hilton Houston Plaza Medical Center" },
    {
      hotelName: "Marriott Marquis Houston",
      url: "https://www.expedia.ca/Houston-Hotels-Marriott-Marquis-Houston.h14986044.Hotel-Information",
    },
    {
      hotelName: "Hotel ZaZa Museum District",
      url: "https://www.expedia.ca/Houston-Hotels-Hotel-Zaza-Houston-Museum-District.h3306.Hotel-Information",
    },
  ],
  "kansas-city": [
    { hotelName: "Loews Kansas City Hotel" },
    {
      hotelName: "Hotel Indigo Kansas City The Crossroads",
      url: "https://www.expedia.ca/Kansas-City-Hotels-Hotel-Indigo-Kansas-City-The-Crossroads.h25806115.Hotel-Information",
    },
  ],
  philadelphia: [
    { hotelName: "Courtyard Philadelphia South at The Navy Yard" },
    {
      hotelName: "Live! Casino & Hotel Philadelphia",
      url: "https://www.expedia.ca/Philadelphia-Hotels-Live-Casino-Hotel-Philadelphia.h59917783.Hotel-Information",
    },
    {
      hotelName: "The Notary Hotel, Autograph Collection",
      url: "https://www.expedia.ca/Philadelphia-Hotels-The-Notary-Hotel.h431312.Hotel-Information",
    },
  ],
  monterrey: [
    { hotelName: "Live Aqua Urban Resort Monterrey" },
    {
      hotelName: "Crowne Plaza Monterrey",
      url: "https://www.expedia.ca/Monterrey-Hotels-Crowne-Plaza-Monterrey.h9975.Hotel-Information",
    },
    { hotelName: "Safie Hotel & Suites" },
  ],
};

/** First hotel in each city uses the city primary URL when no per-hotel url is set. */
function withCityPrimaryUrls(slug: HostCitySlug, hotels: readonly ExpediaCityHotel[]): ExpediaCityHotel[] {
  const cityPrimary = primaryUrl(slug);
  return hotels.map((hotel, index) => ({
    ...hotel,
    url: hotel.url ?? (index === 0 && cityPrimary ? cityPrimary : undefined),
  }));
}

export function getExpediaHotelsForCity(slug: HostCitySlug): readonly ExpediaCityHotel[] {
  const hotels = EXPEDIA_HOTELS_BY_CITY[slug] ?? [];
  return withCityPrimaryUrls(slug, hotels);
}

export function cityHasExpediaPicks(slug: HostCitySlug): boolean {
  return (EXPEDIA_HOTELS_BY_CITY[slug]?.length ?? 0) > 0;
}

export function getHotelOutboundUrl(slug: HostCitySlug, hotel: ExpediaCityHotel): string {
  return hotel.url ?? primaryUrl(slug) ?? getExpediaTravelShopOutbound().url;
}

export function getExpediaCityHotelOutbound(slug: HostCitySlug): { url: string; monetized: boolean } {
  const url = primaryUrl(slug) ?? getExpediaTravelShopOutbound().url;
  return { url, monetized: true };
}
