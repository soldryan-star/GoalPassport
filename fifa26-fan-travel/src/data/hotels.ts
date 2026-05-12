export type HotelCategory = "near-stadium" | "budget" | "luxury" | "airbnb-areas";

export const HOTEL_CATEGORIES: { slug: HotelCategory; title: string; description: string }[] = [
  {
    slug: "near-stadium",
    title: "Best Hotels Near Stadium",
    description: "Walk-score kings, post-match showers in under 15 minutes.",
  },
  {
    slug: "budget",
    title: "Budget Hotels",
    description: "Clean beds, fan-friendly lobbies, money left for tickets.",
  },
  {
    slug: "luxury",
    title: "Luxury Hotels",
    description: "Concierge blocks, spa recovery, blackout curtains.",
  },
  {
    slug: "airbnb-areas",
    title: "Best Airbnb Areas",
    description: "Neighbourhoods hosts actually want to list during tournament chaos.",
  },
];

export interface HotelListing {
  id: string;
  name: string;
  city: string;
  neighborhood: string;
  rating: number;
  reviews: number;
  priceFrom: string;
  perks: string[];
  imageHint: string;
}

export const HOTELS_BY_CATEGORY: Record<HotelCategory, HotelListing[]> = {
  "near-stadium": [
    {
      id: "h1",
      name: "Harbourfront Stadium Hotel",
      city: "Toronto",
      neighborhood: "Exhibition Place",
      rating: 4.6,
      reviews: 1842,
      priceFrom: "$289",
      perks: ["0.4 mi to BMO Field", "Rooftop bar", "Bike valet"],
      imageHint: "toronto-lake",
    },
    {
      id: "h2",
      name: "Polanco Grand Tower",
      city: "Mexico City",
      neighborhood: "Polanco",
      rating: 4.8,
      reviews: 3201,
      priceFrom: "$312",
      perks: ["Heli-shuttle partners", "Spa", "Air filtration"],
      imageHint: "cdmx-skyline",
    },
    {
      id: "h3",
      name: "Hudson Yards Residences",
      city: "New York",
      neighborhood: "Hell's Kitchen",
      rating: 4.5,
      reviews: 901,
      priceFrom: "$349",
      perks: ["NJ Transit package", "Gym 24/7", "Fan desk"],
      imageHint: "nyc-night",
    },
  ],
  budget: [
    {
      id: "b1",
      name: "Lakeview Inn Express",
      city: "Toronto",
      neighborhood: "Parkdale",
      rating: 4.1,
      reviews: 612,
      priceFrom: "$119",
      perks: ["Shared kitchen", "Laundry", "Fan bulletin board"],
      imageHint: "cozy-room",
    },
    {
      id: "b2",
      name: "Roma Norte Stay",
      city: "Mexico City",
      neighborhood: "Roma Norte",
      rating: 4.3,
      reviews: 887,
      priceFrom: "$72",
      perks: ["Rooftop hammock", "Filtered water", "Metro card sale"],
      imageHint: "hostel-roof",
    },
    {
      id: "b3",
      name: "Brickell Pod",
      city: "Miami",
      neighborhood: "Brickell",
      rating: 4.0,
      reviews: 1204,
      priceFrom: "$95",
      perks: ["Pod blackout blinds", "Co-working", "Cold brew"],
      imageHint: "pod-hotel",
    },
  ],
  luxury: [
    {
      id: "l1",
      name: "The Skyline Royal",
      city: "Toronto",
      neighborhood: "Financial District",
      rating: 4.9,
      reviews: 756,
      priceFrom: "$589",
      perks: ["Butler floor", "CN Tower view", "Chauffeur waitlist"],
      imageHint: "luxury-bed",
    },
    {
      id: "l2",
      name: "Reforma Imperial",
      city: "Mexico City",
      neighborhood: "Juarez",
      rating: 4.95,
      reviews: 445,
      priceFrom: "$540",
      perks: ["Mezcal sommelier", "Private terrace", "Security detail"],
      imageHint: "marble-bath",
    },
    {
      id: "l3",
      name: "Pacific Palisades Estate",
      city: "Los Angeles",
      neighborhood: "Santa Monica",
      rating: 4.85,
      reviews: 332,
      priceFrom: "$720",
      perks: ["Heated plunge", "Chef tasting", "SoFi shuttle"],
      imageHint: "pool-sunset",
    },
  ],
  "airbnb-areas": [
    {
      id: "a1",
      name: "Neighbourhood pick: Liberty Village",
      city: "Toronto",
      neighborhood: "Lofts & condos",
      rating: 4.7,
      reviews: 2100,
      priceFrom: "$165 avg",
      perks: ["Host response <1h", "Parking decks", "Walk to stadium"],
      imageHint: "loft-brick",
    },
    {
      id: "a2",
      name: "Neighbourhood pick: Condesa",
      city: "Mexico City",
      neighborhood: "Art deco flats",
      rating: 4.8,
      reviews: 1788,
      priceFrom: "$98 avg",
      perks: ["Cafe culture", "Pet-friendly", "Night security"],
      imageHint: "balcony-plants",
    },
    {
      id: "a3",
      name: "Neighbourhood pick: Wynwood",
      city: "Miami",
      neighborhood: "Converted warehouses",
      rating: 4.5,
      reviews: 943,
      priceFrom: "$142 avg",
      perks: ["Mural walks", "Pool access", "Soundproof windows"],
      imageHint: "mural-wall",
    },
  ],
};
