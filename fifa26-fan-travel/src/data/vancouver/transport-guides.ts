import type { VancouverTopicGuide } from "@/data/vancouver/types";
import { VANCOUVER_GUIDE_HERO } from "@/data/vancouver/constants";

const HERO = VANCOUVER_GUIDE_HERO;

export type VancouverTransportGuideSlug =
  | "expo-line"
  | "canada-line"
  | "yvr-airport"
  | "aquabus"
  | "bc-place-transportation";

export const VANCOUVER_TRANSPORT_GUIDE_SLUGS: VancouverTransportGuideSlug[] = [
  "expo-line",
  "canada-line",
  "yvr-airport",
  "aquabus",
  "bc-place-transportation",
];

export const VANCOUVER_TRANSPORT_GUIDES: Record<VancouverTransportGuideSlug, VancouverTopicGuide> = {
  "expo-line": {
    slug: "expo-line",
    name: "Expo Line",
    metaTitle: "Expo Line to BC Place | Vancouver FIFA 2026™",
    metaDescription:
      "Expo Line SkyTrain guide for FIFA World Cup 2026™ fans — Stadium–Chinatown station, transfers, and matchday timing to BC Place.",
    heroImage: HERO,
    intro:
      "The Expo Line is the direct rail link to BC Place — Stadium–Chinatown station sits at the stadium’s doorstep for FIFA matchdays.",
    highlights: [
      "Runs from Waterfront through downtown to Surrey.",
      "Stadium–Chinatown is the stop for BC Place.",
      "Connects with Canada Line at Waterfront.",
    ],
    sections: [
      {
        title: "Matchday routing",
        items: [
          "From Waterfront: 2 min ride to Stadium–Chinatown.",
          "From Commercial–Broadway: Expo to Stadium ~12 min.",
          "Allow 20 min for post-match platform queues.",
        ],
      },
      {
        title: "Fares & tips",
        items: [
          "Use Compass Card or tap contactless credit card.",
          "Check translink.ca for Stadium station crowd alerts.",
          "Consider walking one stop west before rideshare pickup.",
        ],
      },
    ],
  },
  "canada-line": {
    slug: "canada-line",
    name: "Canada Line",
    metaTitle: "Canada Line Guide | Vancouver FIFA 2026™",
    metaDescription:
      "Canada Line SkyTrain from YVR airport and Richmond to downtown Vancouver and BC Place for FIFA 2026™ fans.",
    heroImage: HERO,
    intro:
      "The Canada Line links YVR airport, Richmond, and downtown Vancouver — fans transfer to Expo Line at Waterfront for BC Place.",
    highlights: [
      "YVR to Waterfront in ~25 minutes.",
      "Yaletown–Roundhouse stop for False Creek hotels.",
      "Bridges and tunnel sections — no traffic delays.",
    ],
    sections: [
      {
        title: "Airport to stadium",
        items: [
          "YVR → Waterfront on Canada Line (~25 min).",
          "Transfer to Expo Line → Stadium–Chinatown (2 min).",
          "Buy Compass Card at airport station kiosks.",
        ],
      },
      {
        title: "Richmond & Yaletown",
        items: [
          "Richmond–Brighouse to downtown ~20 min.",
          "Yaletown–Roundhouse for False Creek walks to BC Place.",
        ],
      },
    ],
  },
  "yvr-airport": {
    slug: "yvr-airport",
    name: "Vancouver Airport (YVR)",
    metaTitle: "YVR Airport Guide for FIFA Fans | Vancouver 2026™",
    metaDescription:
      "Vancouver International Airport (YVR) to BC Place transport for FIFA World Cup 2026™ — Canada Line, taxis, and hotel corridors.",
    heroImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85&auto=format&fit=crop",
    intro:
      "YVR is the main international gateway for FIFA fans. Canada Line is the fastest downtown link; Richmond hotels suit late arrivals.",
    highlights: [
      "Canada Line station inside the terminal.",
      "Customs can queue 60+ min on peak arrival days.",
      "Fairmont Vancouver Airport inside the terminal.",
    ],
    sections: [
      {
        title: "Getting downtown",
        items: [
          "Canada Line to Waterfront (~25 min), transfer Expo to Stadium.",
          "Licensed taxi flat rates to downtown — confirm before entering.",
          "Rideshare pickup at designated zones only.",
        ],
      },
      {
        title: "Staying near YVR",
        items: [
          "Richmond hotels with Canada Line access.",
          "Ideal for red-eye arrivals before afternoon kickoffs.",
        ],
      },
    ],
  },
  aquabus: {
    slug: "aquabus",
    name: "Aquabus",
    metaTitle: "Aquabus False Creek Guide | Vancouver FIFA 2026™",
    metaDescription:
      "Aquabus and False Creek ferry hops to BC Place for FIFA World Cup 2026™ fans staying in Olympic Village and Yaletown.",
    heroImage: HERO,
    intro:
      "Aquabus ferries cross False Creek between Yaletown, Olympic Village, Granville Island, and Plaza of Nations — a scenic pre-game option when weather cooperates.",
    highlights: [
      "Runs year-round with frequent summer service.",
      "Short hops from Olympic Village to stadium side.",
      "Complements seawall walking routes.",
    ],
    sections: [
      {
        title: "Routes fans use",
        items: [
          "Olympic Village ↔ Plaza of Nations near BC Place.",
          "Yaletown ↔ Granville Island for daytime exploring.",
          "Check falsecreekferries.com for matchday schedules.",
        ],
      },
      {
        title: "Tips",
        items: [
          "Bring Compass Card or small cash for fares.",
          "Allow extra time vs SkyTrain on rainy nights.",
          "Combine with seawall walk for photo-worthy arrivals.",
        ],
      },
    ],
  },
  "bc-place-transportation": {
    slug: "bc-place-transportation",
    name: "BC Place Transportation",
    metaTitle: "BC Place Transportation Hub | Vancouver FIFA 2026™",
    metaDescription:
      "All transport options to BC Place for FIFA World Cup 2026™ — SkyTrain, Aquabus, biking, rideshare, and walking routes.",
    heroImage: HERO,
    intro:
      "BC Place sits at the centre of Vancouver’s transport web — Stadium–Chinatown SkyTrain, seawall paths, and Aquabus docks all converge here on match night.",
    highlights: [
      "Stadium–Chinatown is the primary SkyTrain stop.",
      "Multiple rideshare zones on Pacific Boulevard.",
      "Seawall connects False Creek and Yaletown on foot.",
    ],
    sections: [
      {
        title: "Best options by origin",
        items: [
          "YVR / Richmond: Canada Line + Expo transfer.",
          "Yaletown / False Creek: Walk, Aquabus, or Canada Line.",
          "Gastown: Walk or Expo from Waterfront.",
          "Kitsilano: Bus to Broadway, Canada Line downtown.",
        ],
      },
      {
        title: "After the match",
        items: [
          "Expect 20–30 min to clear Stadium station platforms.",
          "Walk to Yaletown for calmer rideshare pickup.",
          "NightBus if you miss last SkyTrain.",
        ],
      },
    ],
  },
};

export const VANCOUVER_TRANSPORT_GUIDE_LINKS = VANCOUVER_TRANSPORT_GUIDE_SLUGS.map((slug) => ({
  label: VANCOUVER_TRANSPORT_GUIDES[slug].name,
  href: `/guides/vancouver/${slug}`,
}));

export function getVancouverTransportGuide(slug: string): VancouverTopicGuide | undefined {
  return VANCOUVER_TRANSPORT_GUIDES[slug as VancouverTransportGuideSlug];
}
