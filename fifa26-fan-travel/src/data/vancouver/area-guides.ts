import type { VancouverAreaGuide } from "@/data/vancouver/types";
import { VANCOUVER_GUIDE_HERO } from "@/data/vancouver/constants";

const HERO = VANCOUVER_GUIDE_HERO;

export type VancouverAreaGuideSlug =
  | "yaletown"
  | "false-creek"
  | "gastown"
  | "richmond"
  | "kitsilano"
  | "bc-place";

export const VANCOUVER_AREA_GUIDE_SLUGS: VancouverAreaGuideSlug[] = [
  "yaletown",
  "false-creek",
  "gastown",
  "richmond",
  "kitsilano",
  "bc-place",
];

export const VANCOUVER_AREA_GUIDES: Record<VancouverAreaGuideSlug, VancouverAreaGuide> = {
  yaletown: {
    slug: "yaletown",
    name: "Yaletown",
    metaTitle: "Yaletown Fan Guide | Vancouver FIFA 2026™",
    metaDescription:
      "Yaletown hotels, nightlife, and matchday tips for FIFA World Cup 2026™ fans — walkable to BC Place on the Canada Line.",
    heroImage: HERO,
    intro:
      "Yaletown is Vancouver’s polished matchday base — loft condos, marina patios, and a short Canada Line hop to BC Place for FIFA 2026™.",
    whyItMatters: [
      "Closest luxury hotel cluster to BC Place outside False Creek itself.",
      "Canada Line at Yaletown–Roundhouse for fast stadium access.",
      "Post-match lounges and champagne bars without Granville chaos.",
    ],
    stadiumConnection: {
      headline: "Yaletown to BC Place",
      rows: [
        { label: "Canada Line", value: "~5 min to Stadium–Chinatown" },
        { label: "Walking", value: "~15 min via False Creek seawall" },
        { label: "Rideshare", value: "~8 min off-peak" },
      ],
    },
    hotels: [
      { name: "Paradox Hotel", note: "Steps from stadium corridor." },
      { name: "Opus Hotel", note: "Boutique Yaletown classic." },
      { name: "JW Marriott Parq", note: "Casino resort with spa recovery." },
    ],
    foodAndNightlife: [
      "Yaletown lounges for post-win bubbles.",
      "Marina patios on Hamilton Street for pre-match drinks.",
      "Earls and Cactus chains with reliable big screens.",
    ],
    transportation: [
      "Canada Line Yaletown–Roundhouse — primary matchday rail.",
      "Seawall walk to BC Place on dry evenings.",
    ],
    safety: [
      "Well-lit streets; standard urban awareness late night.",
      "Secure phones on packed Canada Line after full-time.",
    ],
  },
  "false-creek": {
    slug: "false-creek",
    name: "False Creek",
    metaTitle: "False Creek Fan Guide | Vancouver FIFA 2026™",
    metaDescription:
      "False Creek and Olympic Village stays for FIFA 2026™ — seawall walks, Aquabus hops, and quick access to BC Place.",
    heroImage: HERO,
    intro:
      "False Creek wraps the 2010 Olympic Village energy around BC Place — seawall sunsets, craft beer, and the shortest walk to kickoff.",
    whyItMatters: [
      "Olympic Village is among the closest residential bases to the stadium.",
      "Aquabus and seawall paths for scenic pre-game arrivals.",
      "Quieter than Granville but still vibrant on match nights.",
    ],
    stadiumConnection: {
      headline: "False Creek to BC Place",
      rows: [
        { label: "Walking", value: "8–12 min along seawall" },
        { label: "Aquabus", value: "2–5 min hop to Plaza of Nations" },
        { label: "Expo Line", value: "Olympic Village Station ~10 min" },
      ],
    },
    hotels: [
      { name: "Residence Inn Vancouver Downtown", note: "Extended-stay near the Village." },
      { name: "Fairmont Pacific Rim", note: "Harbour luxury with seawall access." },
    ],
    foodAndNightlife: [
      "Tap & Barrel Olympic Village for waterside screens.",
      "Craft breweries along 2nd Avenue.",
      "Seawall food trucks on big matchdays.",
    ],
    transportation: [
      "Olympic Village Station on Canada Line.",
      "Aquabus to Yaletown and Granville Island.",
    ],
    safety: [
      "Seawall is busy and safe; watch bike traffic.",
      "Plan indoor layers — waterfront wind after games.",
    ],
  },
  gastown: {
    slug: "gastown",
    name: "Gastown",
    metaTitle: "Gastown Fan Guide | Vancouver FIFA 2026™",
    metaDescription:
      "Gastown boutique hotels and fan bars for FIFA World Cup 2026™ — historic streets, Canada Line access, and BC Place matchday routing.",
    heroImage: HERO,
    intro:
      "Gastown delivers heritage brick lanes, steam-clock tourism, and boutique hotels — a character-rich base if you know the routes to BC Place and the Downtown Eastside edge.",
    whyItMatters: [
      "Unique boutique hotel inventory for design-minded fans.",
      "Waterfront Station hub for Expo and Canada Line transfers.",
      "Strong independent bar scene for pre-match pints.",
    ],
    stadiumConnection: {
      headline: "Gastown to BC Place",
      rows: [
        { label: "Expo Line", value: "Stadium–Chinatown ~8 min from Waterfront" },
        { label: "Walking", value: "~20 min via downtown core" },
        { label: "Canada Line", value: "Waterfront Station transfers" },
      ],
    },
    hotels: [
      { name: "Skwachàys Lodge", note: "Indigenous art hotel experience." },
      { name: "Exchange Hotel", note: "Gastown boutique conversion." },
    ],
    foodAndNightlife: [
      "The Alibi Room for craft taps and football crowds.",
      "Steam Clock area pubs on match Saturdays.",
      "Blood Alley wine bars for upscale pre-game meals.",
    ],
    transportation: [
      "Waterfront Station — main downtown SkyTrain hub.",
      "Avoid driving — one-way streets clog on event nights.",
    ],
    safety: [
      "Stay west of Main Street at night; read Downtown Eastside guide.",
      "Cobblestones can be slick in rain — wear proper footwear.",
    ],
  },
  richmond: {
    slug: "richmond",
    name: "Richmond",
    metaTitle: "Richmond Fan Guide | Vancouver FIFA 2026™",
    metaDescription:
      "Richmond and YVR corridor hotels for FIFA 2026™ fans — Canada Line to BC Place, night markets, and airport convenience.",
    heroImage: HERO,
    intro:
      "Richmond pairs night-market food culture with Canada Line speed to downtown — ideal for fans who want value, diversity, and easy YVR arrivals.",
    whyItMatters: [
      "Canada Line from Richmond Centre reaches BC Place in ~25 min.",
      "Strong hotel supply near YVR for late arrivals.",
      "Asian dining scene unmatched in the host region.",
    ],
    stadiumConnection: {
      headline: "Richmond to BC Place",
      rows: [
        { label: "Canada Line", value: "~25–30 min to Stadium–Chinatown" },
        { label: "YVR proximity", value: "10 min taxi to airport hotels" },
        { label: "Rideshare", value: "~25 min off-peak to stadium" },
      ],
    },
    hotels: [
      { name: "Fairmont Vancouver Airport", note: "Inside YVR terminal." },
      { name: "Aberdeen area hotels", note: "Canada Line at Richmond–Brighouse." },
    ],
    foodAndNightlife: [
      "Richmond Night Market in summer overlap windows.",
      "Aberdeen Centre food courts for late-night eats.",
      "Alexandra Road BBQ rows for group dinners.",
    ],
    transportation: [
      "Canada Line Richmond–Brighouse and Lansdowne stations.",
      "YVR to downtown in 25 min on rail.",
    ],
    safety: [
      "Very safe suburban feel; standard transit awareness.",
      "Allow extra time when Canada Line is packed post-match.",
    ],
  },
  kitsilano: {
    slug: "kitsilano",
    name: "Kitsilano",
    metaTitle: "Kitsilano Fan Guide | Vancouver FIFA 2026™",
    metaDescription:
      "Kitsilano beach neighbourhood guide for FIFA 2026™ — Kits Beach recovery days, Broadway transit, and matchday trips to BC Place.",
    heroImage: HERO,
    intro:
      "Kitsilano is Vancouver’s beach-and-brunch paradise — rest days at Kits Beach, then bus or Canada Line downtown when the match calls.",
    whyItMatters: [
      "Best rest-day neighbourhood between double-header travel.",
      "Young fan energy along West 4th Avenue shops and cafés.",
      "Direct buses to downtown on Broadway corridor.",
    ],
    stadiumConnection: {
      headline: "Kitsilano to BC Place",
      rows: [
        { label: "Bus + Canada Line", value: "~30–35 min via Broadway" },
        { label: "Rideshare", value: "~20–25 min off-peak" },
        { label: "Biking", value: "Seawall route ~25 min" },
      ],
    },
    hotels: [
      { name: "Rosewood Hotel Georgia", note: "Downtown luxury — short Uber from Kits." },
      { name: "Kits area B&Bs", note: "Book early for June FIFA demand." },
    ],
    foodAndNightlife: [
      "West 4th sports bars with casual screens.",
      "Kits Beach sunsets between matchdays.",
      "Broadway craft beer row for group meetups.",
    ],
    transportation: [
      "99 B-Line bus to Commercial–Broadway, transfer to Canada Line.",
      "Bike share along seawall to downtown.",
    ],
    safety: [
      "Very safe residential beaches; standard night caution on Broadway.",
      "Rain gear essential for open-air waits.",
    ],
  },
  "bc-place": {
    slug: "bc-place",
    name: "BC Place",
    metaTitle: "BC Place Matchday Guide | Vancouver FIFA 2026™",
    metaDescription:
      "BC Place stadium guide for FIFA World Cup 2026™ — gates, SkyTrain, bag policy, and where to stay nearby in Vancouver.",
    heroImage:
      VANCOUVER_GUIDE_HERO,
    intro:
      "BC Place is Canada’s retractable-roof cathedral — home of the Whitecaps, Lions, and FIFA 2026™ matches with 54,000 seats under the lights of downtown Vancouver.",
    whyItMatters: [
      "Retractable roof reduces rain delays for June fixtures.",
      "Stadium–Chinatown SkyTrain station at the front door.",
      "Surrounded by Yaletown, False Creek, and Gastown fan energy.",
    ],
    stadiumConnection: {
      headline: "BC Place at a glance",
      rows: [
        { label: "Capacity", value: "~54,000" },
        { label: "Address", value: "777 Pacific Blvd, Vancouver" },
        { label: "SkyTrain", value: "Stadium–Chinatown (Expo Line)" },
        { label: "Best nearby stays", value: "Yaletown, False Creek, Parq" },
      ],
    },
    hotels: [
      { name: "Paradox Hotel", note: "Adjacent to stadium campus." },
      { name: "JW Marriott Parq", note: "Luxury recovery blocks away." },
      { name: "Fairmont Pacific Rim", note: "Harbour views + Canada Line." },
    ],
    foodAndNightlife: [
      "Rogers Arena and BC Place shared entertainment district dining.",
      "Yaletown patios 10 minutes north.",
      "Food trucks on Terry Fox Way for quick bites.",
    ],
    transportation: [
      "Expo Line Stadium–Chinatown — primary matchday station.",
      "Canada Line transfer at Waterfront for YVR fans.",
    ],
    safety: [
      "Follow official bag policy — clear bags common for major events.",
      "Post-match SkyTrain surge — see transit safety guide.",
    ],
  },
};

export const VANCOUVER_AREA_GUIDE_LINKS = VANCOUVER_AREA_GUIDE_SLUGS.map((slug) => ({
  label: VANCOUVER_AREA_GUIDES[slug].name,
  href: `/guides/vancouver/${slug}`,
}));

export function getVancouverAreaGuide(slug: string): VancouverAreaGuide | undefined {
  return VANCOUVER_AREA_GUIDES[slug as VancouverAreaGuideSlug];
}
