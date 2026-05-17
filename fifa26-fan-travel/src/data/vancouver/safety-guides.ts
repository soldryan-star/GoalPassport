import type { VancouverTopicGuide } from "@/data/vancouver/types";
import { VANCOUVER_GUIDE_HERO } from "@/data/vancouver/constants";

const HERO = VANCOUVER_GUIDE_HERO;

export type VancouverSafetyGuideSlug =
  | "downtown-eastside"
  | "transit-safety"
  | "stadium-safety"
  | "nightlife-safety"
  | "weather-guide";

export const VANCOUVER_SAFETY_GUIDE_SLUGS: VancouverSafetyGuideSlug[] = [
  "downtown-eastside",
  "transit-safety",
  "stadium-safety",
  "nightlife-safety",
  "weather-guide",
];

export const VANCOUVER_SAFETY_GUIDES: Record<VancouverSafetyGuideSlug, VancouverTopicGuide> = {
  "downtown-eastside": {
    slug: "downtown-eastside",
    name: "Downtown Eastside",
    metaTitle: "Downtown Eastside Safety for FIFA Fans | Vancouver 2026™",
    metaDescription:
      "Respectful routing and safety awareness near Vancouver Downtown Eastside for FIFA World Cup 2026™ fans visiting Gastown and BC Place.",
    heroImage: HERO,
    intro:
      "The Downtown Eastside (DTES) borders Gastown and Stadium–Chinatown. Fans should understand boundaries, avoid voyeurism, and choose well-lit routes to BC Place.",
    highlights: [
      "DTES is a community in crisis — not a tourist attraction.",
      "Main Street and Hastings are key boundary references.",
      "Gastown hotels are safe when you use direct routes west and south.",
    ],
    sections: [
      {
        title: "Smart routing",
        items: [
          "Walk west on Water Street from Gastown toward Canada Place corridor.",
          "Use SkyTrain at Stadium–Chinatown rather than cutting through side alleys.",
          "Avoid photographing residents without consent.",
        ],
      },
      {
        title: "What to avoid",
        items: [
          "East Hastings Street foot traffic after dark without local knowledge.",
          "Unlicensed street markets selling counterfeit goods.",
          "Engaging with aggressive panhandling — donate to local charities instead.",
        ],
      },
    ],
  },
  "transit-safety": {
    slug: "transit-safety",
    name: "Vancouver Transit Safety",
    metaTitle: "Vancouver SkyTrain Safety | FIFA 2026™",
    metaDescription:
      "SkyTrain and bus safety tips for FIFA World Cup 2026™ fans travelling to BC Place on Expo and Canada Lines.",
    heroImage: HERO,
    intro:
      "TransLink moves huge crowds on match nights. A few habits keep your group safe on Expo Line, Canada Line, and downtown buses.",
    highlights: [
      "Stadium–Chinatown station is ground zero for post-match surges.",
      "Compass Card or contactless tap required before boarding.",
      "NightBus service replaces some routes after 1 a.m.",
    ],
    sections: [
      {
        title: "Onboard safety",
        items: [
          "Stand clear of doors until passengers exit.",
          "Keep backpacks in front on packed trains.",
          "Use TransLink Transit Police text 87-77-77 for discreet help.",
        ],
      },
      {
        title: "Matchday tips",
        items: [
          "Arrive 90+ minutes early for knockout fixtures.",
          "Walk one station away before calling rideshare after games.",
          "Check translink.ca for Stadium–Chinatown capacity alerts.",
        ],
      },
    ],
  },
  "stadium-safety": {
    slug: "stadium-safety",
    name: "Stadium Safety",
    metaTitle: "BC Place Stadium Safety | FIFA 2026™",
    metaDescription:
      "BC Place entry, security screening, and crowd safety for FIFA World Cup 2026™ matches in Vancouver.",
    heroImage: HERO,
    intro:
      "BC Place security and crowd flow differ on FIFA matchdays. Plan entry, meeting points, and exit routes before you reach the gates.",
    highlights: [
      "Clear bag policies likely for FIFA matches — verify before travel.",
      "Designated family and accessible entrances on the north side.",
      "Post-match pedestrian flow toward SkyTrain is controlled.",
    ],
    sections: [
      {
        title: "Before you enter",
        items: [
          "Download tickets offline — cell service degrades inside.",
          "No outside alcohol or professional camera lenses without credentials.",
          "Arrive early for security screening queues.",
        ],
      },
      {
        title: "Inside and after",
        items: [
          "Note your section, row, and gate on the ticket.",
          "Use official merchandise stands only.",
          "Follow signage to Stadium–Chinatown after full-time.",
        ],
      },
    ],
  },
  "nightlife-safety": {
    slug: "nightlife-safety",
    name: "Nightlife Safety",
    metaTitle: "Vancouver Nightlife Safety | FIFA 2026™",
    metaDescription:
      "Granville Street and Yaletown nightlife safety for FIFA World Cup 2026™ fans celebrating in Vancouver.",
    heroImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=85&auto=format&fit=crop",
    intro:
      "Vancouver nightlife peaks on Granville and Yaletown after matches. Celebrate smart with your crew and planned rides home.",
    highlights: [
      "Granville Entertainment District is dense and policed on weekends.",
      "Last SkyTrain is around 1 a.m. — plan NightBus or rideshare.",
      "BC liquor laws cut off service at legal hours.",
    ],
    sections: [
      {
        title: "Before you go out",
        items: [
          "Share live location with friends.",
          "Charge phones — networks congest near stadium.",
          "Eat and hydrate — coastal humidity plus alcohol dehydrates.",
        ],
      },
      {
        title: "At venues",
        items: [
          "Watch drinks being poured; never leave beverages unattended.",
          "Use official taxi ranks on Granville.",
          "Walk away from confrontations — crowds amplify tension.",
        ],
      },
    ],
  },
  "weather-guide": {
    slug: "weather-guide",
    name: "Rain & Weather Guide",
    metaTitle: "Vancouver Weather Guide for FIFA Fans | 2026™",
    metaDescription:
      "Rain, layers, and June weather tips for FIFA World Cup 2026™ fans at BC Place and outdoor fan zones in Vancouver.",
    heroImage: HERO,
    intro:
      "Vancouver’s June weather is mild but wet. BC Place’s roof helps, but fan zones, queues, and seawall walks demand proper gear.",
    highlights: [
      "Pack a light waterproof shell even if the forecast looks clear.",
      "Evening waterfront games cool quickly with ocean wind.",
      "Layers beat a single heavy jacket for stadium entry.",
    ],
    sections: [
      {
        title: "What to pack",
        items: [
          "Compact umbrella or Gore-Tex shell.",
          "Waterproof shoes with grip for cobblestones in Gastown.",
          "Thin fleece for evening kickoffs.",
        ],
      },
      {
        title: "Matchday planning",
        items: [
          "Check BC Place roof status for open-air fan zones nearby.",
          "Store wet gear in clear bags if required by security.",
          "Plan indoor meetup points if fan festivals are outdoors.",
        ],
      },
    ],
  },
};

export const VANCOUVER_SAFETY_GUIDE_LINKS = VANCOUVER_SAFETY_GUIDE_SLUGS.map((slug) => ({
  label: VANCOUVER_SAFETY_GUIDES[slug].name,
  href: `/guides/vancouver/${slug}`,
}));

export function getVancouverSafetyGuide(slug: string): VancouverTopicGuide | undefined {
  return VANCOUVER_SAFETY_GUIDES[slug as VancouverSafetyGuideSlug];
}
