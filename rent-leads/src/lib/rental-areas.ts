export type RentalAreaSlug =
  | "north-york"
  | "richmond-hill"
  | "downtown-toronto"
  | "scarborough"
  | "vaughan"
  | "woodbridge"
  | "etobicoke"
  | "east-york"
  | "aurora"
  | "newmarket";

export interface RentalAreaContent {
  slug: RentalAreaSlug;
  name: string;
  headline: string;
  description: string;
  benefits: { title: string; description: string }[];
  guideParagraphs: string[];
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
    guideParagraphs: [
      "North York is one of Toronto’s most diverse and family-friendly districts. Neighbourhoods like Willowdale, Bayview Village, and Newtonbrook offer a mix of high-rises, townhouses, and detached homes, with strong public transit along the Yonge Street corridor and easy access to parks and schools.",
      "When searching for a rental in North York, consider your commute: the TTC Line 1 subway runs through the area, and bus routes connect to the rest of the city. Budgets vary widely—condos and apartments typically start in the mid-$1,000s for one bedroom, while larger units and houses command more. Signing up for new-listing alerts helps you see properties as soon as they’re listed, before open houses fill up.",
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
    guideParagraphs: [
      "Richmond Hill offers a quieter, suburban lifestyle while staying within reach of Toronto. The area is popular with families and professionals who want more space, good schools, and access to Highway 404 and public transit. Rental stock includes newer condos, townhouses, and single-family homes.",
      "Rentals in Richmond Hill tend to offer more square footage per dollar than in the city core. If you’re relocating from downtown, expect a different pace and a car-friendly layout, though GO Transit and York Region Transit provide options for commuters. Getting alerts when new listings go live helps you act quickly in a competitive market.",
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
    guideParagraphs: [
      "Downtown Toronto is the city’s core: condos and apartments dominate, with easy access to the financial district, entertainment, and transit. Neighbourhoods like the Entertainment District, King West, and the Waterfront offer a range of building ages and price points, from older rental towers to new luxury condos.",
      "Competition for downtown rentals is high, and new listings often get multiple applications quickly. Setting your budget and bedroom count in advance—and signing up for alerts so you see new listings first—gives you a better chance to view and apply before others. Many buildings are pet-friendly or have gyms and concierge; check each listing for details.",
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
  {
    slug: "scarborough",
    name: "Scarborough",
    headline: "Rental Listings in Scarborough – New Listings First",
    description:
      "Find rentals in Scarborough. Get free alerts when new apartments and homes hit the market in Scarborough neighbourhoods.",
    benefits: [
      { title: "Diverse neighbourhoods", description: "Family-friendly areas with parks, schools, and transit." },
      { title: "Transit and highways", description: "TTC, GO Transit, and Highway 401 for easy commutes." },
      { title: "Affordable options", description: "Wide range of condos, townhouses, and houses to rent." },
    ],
    guideParagraphs: [
      "Scarborough is a large district in Toronto’s east end with diverse neighbourhoods, strong transit links, and more affordable rents than the core. Areas like Scarborough Town Centre, Guildwood, and Agincourt offer a mix of high-rises, townhouses, and single-family homes.",
      "Rentals in Scarborough often provide more space for your budget. The TTC Line 2 subway and bus network, plus GO Transit and Highway 401, make commuting downtown or to the suburbs straightforward. Sign up for alerts to see new Scarborough listings as they go live.",
    ],
    faq: [
      { question: "How do I get rental alerts for Scarborough?", answer: "Sign up with your email and select Scarborough as a preferred area. We’ll send you new listings that match your criteria." },
      { question: "Are Scarborough rental alerts free?", answer: "Yes. Signing up and receiving rental alerts for Scarborough is free." },
      { question: "What types of rentals are in Scarborough?", answer: "Scarborough has condos, townhouses, and single-family homes. You can filter by budget and bedrooms when you sign up." },
    ],
    meta: {
      title: "Rentals in Scarborough | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in Scarborough. Free alerts for apartments & homes. Transit-connected east Toronto.",
      keywords: ["rentals Scarborough", "Scarborough apartments", "Scarborough rental listings", "rent Scarborough Toronto"],
      canonicalPath: "/rentals-scarborough",
    },
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    headline: "Rental Listings in Vaughan – New Listings to Your Inbox",
    description:
      "Searching for a rental in Vaughan? Get free alerts when new listings go live. Suburban living north of Toronto with transit and highways.",
    benefits: [
      { title: "Suburban living", description: "Spacious homes, parks, and family-oriented communities." },
      { title: "Transit and 400", description: "TTC Line 1 extension, Viva, and Highway 400 for commutes." },
      { title: "New development", description: "Many newer condos and townhouses in Vaughan." },
    ],
    guideParagraphs: [
      "Vaughan is a growing city north of Toronto with the TTC subway (Line 1) extending into the area, plus Viva bus rapid transit and Highway 400. Rental options include condos near Vaughan Metropolitan Centre, townhouses, and single-family homes in neighbourhoods like Woodbridge, Thornhill, and Concord.",
      "Rentals in Vaughan tend to offer more space than the city core. New listings can move quickly; getting alerts when properties are first listed helps you view and apply before the crowd.",
    ],
    faq: [
      { question: "How can I get Vaughan rental alerts?", answer: "Enter your details above and choose Vaughan as a preferred area. We’ll email you when new rentals matching your criteria are listed." },
      { question: "Are Vaughan rental alerts free?", answer: "Yes. There is no charge to sign up or receive rental alerts for Vaughan." },
      { question: "What areas of Vaughan have rentals?", answer: "Listings cover Vaughan including Vaughan Metropolitan Centre, Woodbridge, and surrounding neighbourhoods." },
    ],
    meta: {
      title: "Rentals in Vaughan | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in Vaughan. Free alerts for apartments & homes. Suburban living north of Toronto.",
      keywords: ["rentals Vaughan", "Vaughan apartments", "Vaughan rental listings", "rent Vaughan", "Vaughan condos"],
      canonicalPath: "/rentals-vaughan",
    },
  },
  {
    slug: "woodbridge",
    name: "Woodbridge",
    headline: "Rental Listings in Woodbridge – New Listings First",
    description:
      "Find your next rental in Woodbridge. Get free alerts when new apartments and homes hit the market in this Vaughan neighbourhood.",
    benefits: [
      { title: "Community feel", description: "Residential neighbourhoods with parks and local amenities." },
      { title: "Easy access", description: "Highway 400 and transit options to Toronto and the GTA." },
      { title: "Houses and townhomes", description: "Many townhouses and single-family homes to rent." },
    ],
    guideParagraphs: [
      "Woodbridge is a neighbourhood in the city of Vaughan, known for its community feel, parks, and mix of townhouses and single-family homes. Rental stock includes newer townhome complexes and older detached homes, often with more space than in the city.",
      "Commuting from Woodbridge is straightforward via Highway 400 and Viva bus. New rentals can be competitive; signing up for alerts helps you see listings as soon as they’re available.",
    ],
    faq: [
      { question: "How do I get rental alerts for Woodbridge?", answer: "Sign up with your email and select Woodbridge as a preferred area. We’ll send you new listings that match your criteria." },
      { question: "Are Woodbridge rental alerts free?", answer: "Yes. Signing up and receiving rental alerts for Woodbridge is free." },
      { question: "What types of rentals are in Woodbridge?", answer: "Woodbridge has townhouses and single-family homes, plus some condos. Filter by budget and bedrooms when you sign up." },
    ],
    meta: {
      title: "Rentals in Woodbridge | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in Woodbridge. Free alerts for townhouses & homes. Vaughan neighbourhood.",
      keywords: ["rentals Woodbridge", "Woodbridge apartments", "Woodbridge rental listings", "rent Woodbridge Vaughan"],
      canonicalPath: "/rentals-woodbridge",
    },
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    headline: "Rental Listings in Etobicoke – Get New Listings First",
    description:
      "Rent in Etobicoke. Get free alerts when new condos, apartments, and homes hit the market in Toronto’s west end.",
    benefits: [
      { title: "West-end Toronto", description: "Neighbourhoods from the Humber to the airport corridor." },
      { title: "Transit and highways", description: "TTC, UP Express, and Highway 427 for commutes." },
      { title: "Mix of housing", description: "Condos, townhouses, and houses across Etobicoke." },
    ],
    guideParagraphs: [
      "Etobicoke is Toronto’s west end, spanning from the Humber River to Pearson airport. Areas like Mimico, Long Branch, Islington, and Etobicoke Centre offer a mix of condos, townhouses, and single-family homes, with good transit and highway access.",
      "Rentals in Etobicoke range from newer condos near transit to older houses in established neighbourhoods. Getting new-listing alerts helps you view and apply before the best units are taken.",
    ],
    faq: [
      { question: "How do I get rental alerts for Etobicoke?", answer: "Sign up with your email and select Etobicoke as a preferred area. We’ll send you new listings that match your criteria." },
      { question: "Are Etobicoke rental alerts free?", answer: "Yes. Signing up and receiving rental alerts for Etobicoke is free." },
      { question: "What types of rentals are in Etobicoke?", answer: "Etobicoke has condos, townhouses, and single-family homes. You can filter by budget and bedrooms when you sign up." },
    ],
    meta: {
      title: "Rentals in Etobicoke | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in Etobicoke. Free alerts for condos & homes. Toronto west end.",
      keywords: ["rentals Etobicoke", "Etobicoke apartments", "Etobicoke rental listings", "rent Etobicoke Toronto"],
      canonicalPath: "/rentals-etobicoke",
    },
  },
  {
    slug: "east-york",
    name: "East York",
    headline: "Rental Listings in East York – New Listings to Your Inbox",
    description:
      "Find rentals in East York. Get free alerts when new apartments and homes hit the market in this central-east Toronto district.",
    benefits: [
      { title: "Central-east Toronto", description: "Neighbourhood feel with strong transit and bike routes." },
      { title: "Transit connected", description: "TTC Line 2 and buses, plus easy access to the core." },
      { title: "Variety of rentals", description: "Condos, apartments, and houses in East York." },
    ],
    guideParagraphs: [
      "East York is a district in central-east Toronto, known for its neighbourhood feel, parks, and mix of older apartments and newer condos. Areas like the Danforth, Pape Village, and Leaside border offer good transit and walkable streets.",
      "Rentals in East York appeal to those who want a balance of community and city access. The Bloor-Danforth subway and bus routes make commuting straightforward. Sign up for alerts to see new East York listings as they’re listed.",
    ],
    faq: [
      { question: "How do I get rental alerts for East York?", answer: "Sign up with your email and select East York as a preferred area. We’ll send you new listings that match your criteria." },
      { question: "Are East York rental alerts free?", answer: "Yes. Signing up and receiving rental alerts for East York is free." },
      { question: "What types of rentals are in East York?", answer: "East York has condos, apartments, and some houses. You can filter by budget and bedrooms when you sign up." },
    ],
    meta: {
      title: "Rentals in East York | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in East York. Free alerts for apartments & homes. Central-east Toronto.",
      keywords: ["rentals East York", "East York apartments", "East York rental listings", "rent East York Toronto"],
      canonicalPath: "/rentals-east-york",
    },
  },
  {
    slug: "aurora",
    name: "Aurora",
    headline: "Rental Listings in Aurora – New Listings to Your Inbox",
    description:
      "Find rentals in Aurora. Get free alerts when new apartments and homes hit the market in this York Region town.",
    benefits: [
      { title: "Small-town feel", description: "Historic downtown, parks, and family-oriented neighbourhoods." },
      { title: "GO Transit & 404", description: "Easy commute to Toronto and the GTA via GO and Highway 404." },
      { title: "Houses and townhomes", description: "Wide range of single-family homes and townhouses to rent." },
    ],
    guideParagraphs: [
      "Aurora is a town in York Region north of Toronto, known for its historic downtown, trails, and family-friendly communities. Rental options include single-family homes, townhouses, and some newer condos, often with more space than in the city.",
      "GO Transit’s Barrie line serves Aurora for commuters heading to Toronto. New rentals can be limited and competitive; signing up for alerts helps you see listings as soon as they’re available.",
    ],
    faq: [
      { question: "How do I get rental alerts for Aurora?", answer: "Sign up with your email and select Aurora as a preferred area. We’ll send you new listings that match your criteria." },
      { question: "Are Aurora rental alerts free?", answer: "Yes. Signing up and receiving rental alerts for Aurora is free." },
      { question: "What types of rentals are in Aurora?", answer: "Aurora has single-family homes, townhouses, and some condos. You can filter by budget and bedrooms when you sign up." },
    ],
    meta: {
      title: "Rentals in Aurora | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in Aurora. Free alerts for homes & townhouses. York Region north of Toronto.",
      keywords: ["rentals Aurora", "Aurora apartments", "Aurora rental listings", "rent Aurora Ontario", "Aurora townhouses"],
      canonicalPath: "/rentals-aurora",
    },
  },
  {
    slug: "newmarket",
    name: "Newmarket",
    headline: "Rental Listings in Newmarket – Get New Listings First",
    description:
      "Searching for a rental in Newmarket? Get free alerts when new listings go live. Historic town with GO Transit and Highway 404 access.",
    benefits: [
      { title: "Historic downtown", description: "Main Street, trails, and community events." },
      { title: "GO Transit", description: "Barrie line service to Toronto and north." },
      { title: "Family housing", description: "Houses, townhouses, and newer condos to rent." },
    ],
    guideParagraphs: [
      "Newmarket is a town in York Region with a walkable downtown, good schools, and a mix of older and newer housing. Rentals include single-family homes, townhouses, and condos, with GO Transit on the Barrie line for commuters.",
      "Rentals in Newmarket tend to offer more space for your budget than in Toronto. New listings can move quickly; getting alerts when properties are first listed helps you view and apply before the crowd.",
    ],
    faq: [
      { question: "How can I get Newmarket rental alerts?", answer: "Enter your details above and choose Newmarket as a preferred area. We’ll email you when new rentals matching your criteria are listed." },
      { question: "Are Newmarket rental alerts free?", answer: "Yes. There is no charge to sign up or receive rental alerts for Newmarket." },
      { question: "What types of rentals are in Newmarket?", answer: "Newmarket has single-family homes, townhouses, and condos. Filter by budget and bedroom count when you sign up." },
    ],
    meta: {
      title: "Rentals in Newmarket | New Listings & Apartments | Toronto Rent Leads",
      description: "Get new rental listings in Newmarket. Free alerts for homes & townhouses. York Region.",
      keywords: ["rentals Newmarket", "Newmarket apartments", "Newmarket rental listings", "rent Newmarket Ontario"],
      canonicalPath: "/rentals-newmarket",
    },
  },
];

const slugToPath: Record<RentalAreaSlug, string> = {
  "north-york": "/rentals-north-york",
  "richmond-hill": "/rentals-richmond-hill",
  "downtown-toronto": "/rentals-downtown-toronto",
  "scarborough": "/rentals-scarborough",
  "vaughan": "/rentals-vaughan",
  "woodbridge": "/rentals-woodbridge",
  "etobicoke": "/rentals-etobicoke",
  "east-york": "/rentals-east-york",
  "aurora": "/rentals-aurora",
  "newmarket": "/rentals-newmarket",
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
    { area: "scarborough" },
    { area: "vaughan" },
    { area: "woodbridge" },
    { area: "etobicoke" },
    { area: "east-york" },
    { area: "aurora" },
    { area: "newmarket" },
  ];
}
