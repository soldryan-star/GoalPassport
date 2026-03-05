export type RentalAreaSlug = "north-york" | "richmond-hill" | "downtown-toronto";

export interface RentalAreaContent {
  slug: RentalAreaSlug;
  name: string;
  headline: string;
  description: string;
  benefits: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
    canonicalPath: string;
  };
}

export const RENTAL_AREAS: RentalAreaContent[] = [
  {
    slug: "north-york",
    name: "North York",
    headline: "Rental Listings in North York – Get New Listings First",
    description:
      "Find your next rental in North York. Get free alerts when new apartments and homes hit the market in North York neighbourhoods—before they’re widely listed.",
    benefits: [
      { title: "Family-friendly areas", description: "Quiet streets, parks, and strong schools across North York." },
      { title: "Transit connected", description: "TTC subway and buses for an easy commute downtown or elsewhere." },
      { title: "Variety of rentals", description: "Condos, townhouses, and single-family homes to match your budget." },
    ],
    faq: [
      { question: "How do I get rental alerts for North York?", answer: "Sign up with your email and select North York as a preferred area. We’ll send you new listings that match your criteria as they become available." },
      { question: "Is there a cost to get North York rental alerts?", answer: "No. Signing up and receiving rental alerts for North York is free." },
      { question: "What types of rentals are available in North York?", answer: "North York offers condos, townhouses, and single-family homes. You can filter by budget and number of bedrooms when you sign up." },
    ],
    meta: {
      title: "Rentals in North York | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in North York first. Free alerts for apartments, condos & homes. Family-friendly, transit-connected neighbourhoods.",
      keywords: ["rentals North York", "North York apartments", "North York rental listings", "rent North York Toronto", "North York condos"],
      canonicalPath: "/rentals-north-york",
    },
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    headline: "Rental Listings in Richmond Hill – New Listings to Your Inbox",
    description:
      "Searching for a rental in Richmond Hill? Get free alerts when new listings go live. Suburban comfort with easy access to Toronto and Vaughan.",
    benefits: [
      { title: "Suburban living", description: "More space, parks, and family-oriented communities." },
      { title: "Easy commute", description: "Highway 404 and transit options to Toronto and the GTA." },
      { title: "Range of options", description: "From condos to detached homes to suit different budgets." },
    ],
    faq: [
      { question: "How can I get Richmond Hill rental alerts?", answer: "Enter your details above and choose Richmond Hill as a preferred area. We’ll email you when new rentals matching your criteria are listed." },
      { question: "Are Richmond Hill rental alerts free?", answer: "Yes. There is no charge to sign up or receive rental alerts for Richmond Hill." },
      { question: "What areas of Richmond Hill have rentals?", answer: "Listings cover Richmond Hill neighbourhoods. You can specify your budget and bedroom count to get relevant alerts." },
    ],
    meta: {
      title: "Rentals in Richmond Hill | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in Richmond Hill. Free alerts for apartments & homes. Suburban living near Toronto.",
      keywords: ["rentals Richmond Hill", "Richmond Hill apartments", "Richmond Hill rental listings", "rent Richmond Hill", "Richmond Hill condos"],
      canonicalPath: "/rentals-richmond-hill",
    },
  },
  {
    slug: "downtown-toronto",
    name: "Downtown Toronto",
    headline: "Downtown Toronto Rentals – New Condos & Apartments First",
    description:
      "Rent in the heart of Toronto. Get free alerts for new downtown condos and apartments so you can view and apply before everyone else.",
    benefits: [
      { title: "Central location", description: "Walk to work, transit, restaurants, and entertainment." },
      { title: "New builds & condos", description: "Many new and modern condo buildings with amenities." },
      { title: "Flexible budgets", description: "Listings across a range of price points and bedroom counts." },
    ],
    faq: [
      { question: "How do I get downtown Toronto rental alerts?", answer: "Sign up above with your email and select Downtown Toronto. We’ll send you new condo and apartment listings as they’re listed." },
      { question: "Are downtown Toronto rental alerts free?", answer: "Yes. Signing up and receiving alerts for downtown Toronto rentals is free." },
      { question: "What kind of rentals are in downtown Toronto?", answer: "Most downtown listings are condos and apartments. You can filter by budget and number of bedrooms when you sign up." },
    ],
    meta: {
      title: "Downtown Toronto Rentals | New Condos & Apartments | Toronto Rent Leads",
      description: "Get new downtown Toronto rental listings first. Free alerts for condos & apartments in the core.",
      keywords: ["downtown Toronto rentals", "Toronto downtown apartments", "downtown Toronto condos", "rent downtown Toronto", "Toronto core rentals"],
      canonicalPath: "/rentals-downtown-toronto",
    },
  },
];

const slugToPath: Record<RentalAreaSlug, string> = {
  "north-york": "/rentals-north-york",
  "richmond-hill": "/rentals-richmond-hill",
  "downtown-toronto": "/rentals-downtown-toronto",
};

export function getRentalAreaBySlug(slug: string): RentalAreaContent | null {
  return RENTAL_AREAS.find((a) => a.slug === slug) ?? null;
}

export function getRentalAreaByPath(path: string): RentalAreaContent | null {
  const entry = Object.entries(slugToPath).find(([, p]) => p === path);
  return entry ? getRentalAreaBySlug(entry[0]) : null;
}

export function requireRentalAreaByPath(path: string): RentalAreaContent {
  const area = getRentalAreaByPath(path);
  if (!area) throw new Error(`Missing rental area for path: ${path}`);
  return area;
}

export function getRentalPaths(): { area: RentalAreaSlug }[] {
  return [
    { area: "north-york" },
    { area: "richmond-hill" },
    { area: "downtown-toronto" },
  ];
}
