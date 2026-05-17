export type TorontoSafetyGuideSlug =
  | "safe-areas"
  | "transit-safety"
  | "nightlife-safety"
  | "stadium-bag-policy"
  | "airport-transportation";

export type TorontoSafetyGuide = {
  slug: TorontoSafetyGuideSlug;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  sections: { title: string; items: string[] }[];
};

export const TORONTO_SAFETY_GUIDE_SLUGS: TorontoSafetyGuideSlug[] = [
  "safe-areas",
  "transit-safety",
  "nightlife-safety",
  "stadium-bag-policy",
  "airport-transportation",
];

export const TORONTO_SAFETY_GUIDES: Record<TorontoSafetyGuideSlug, TorontoSafetyGuide> = {
  "safe-areas": {
    slug: "safe-areas",
    name: "Safe Areas",
    metaTitle: "Safe Areas in Toronto for FIFA 2026™ Fans | GoalPassport",
    metaDescription:
      "Where to stay and walk safely in Toronto during FIFA World Cup 2026™ — neighbourhood tips for fans near BMO Field and downtown.",
    heroImage:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=85&auto=format&fit=crop",
    intro:
      "Toronto is one of North America’s safest major cities, but matchweek crowds change how neighbourhoods feel at night. Here’s where fans stay confident during FIFA 2026™.",
    highlights: [
      "Liberty Village, King West, and the Entertainment District are well-lit and heavily policed on match nights.",
      "Yorkville and Midtown offer quieter luxury stays with strong subway access.",
      "Avoid unlicensed street vendors and unofficial ticket sellers near stadium gates.",
    ],
    sections: [
      {
        title: "Recommended fan-friendly zones",
        items: [
          "Liberty Village — walkable to BMO Field, active restaurant security, visible foot traffic.",
          "Entertainment District — hotel-heavy blocks with 24/7 activity near Union Station.",
          "Harbourfront — scenic and patrolled; good for families and first-time visitors.",
          "Yorkville — upscale, low street disorder; plan extra transit time to Exhibition Place.",
        ],
      },
      {
        title: "Areas to use extra caution",
        items: [
          "Packed streetcar platforms after full-time — secure bags and phones.",
          "Alley shortcuts off King West late at night — stick to main arteries.",
          "Unofficial parking lots near Exhibition Place — use marked lots only.",
        ],
      },
    ],
  },
  "transit-safety": {
    slug: "transit-safety",
    name: "TTC & Transit Safety",
    metaTitle: "TTC & Transit Safety for FIFA 2026™ Toronto | GoalPassport",
    metaDescription:
      "TTC streetcar, subway, and GO Train safety tips for FIFA World Cup 2026™ fans travelling to BMO Field in Toronto.",
    heroImage:
      "https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=1920&q=85&auto=format&fit=crop",
    intro:
      "Toronto’s TTC and GO network move millions on match days. A few habits keep your group safe, on time, and stress-free heading to BMO Field.",
    highlights: [
      "509 Harbourfront and 511 Bathurst are the main stadium streetcar lines — expect crush loads after games.",
      "Exhibition GO Station is the fastest rail option from Union when platforms are manageable.",
      "Presto or contactless tap is standard — have payment ready before boarding.",
    ],
    sections: [
      {
        title: "Onboard safety",
        items: [
          "Stand clear of doors until passengers exit — platform gaps are real on older streetcars.",
          "Keep backpacks in front in crowded cars; pickpockets target packed 509/511 routes.",
          "Use the TTC “Safe TTC” app or text 393939 for discreet help if you feel unsafe.",
          "Night buses replace some streetcar service after 1 a.m. — check ttc.ca before you leave the pub.",
        ],
      },
      {
        title: "Matchday routing",
        items: [
          "Arrive 90+ minutes early for knockout fixtures — queues at Exhibition Loop stack quickly.",
          "After the match, walk five minutes away from the loop before calling rideshare.",
          "GO Train westbound to Exhibition skips streetcar crush when running on schedule.",
        ],
      },
    ],
  },
  "nightlife-safety": {
    slug: "nightlife-safety",
    name: "Nightlife Safety",
    metaTitle: "Nightlife Safety in Toronto for FIFA 2026™ | GoalPassport",
    metaDescription:
      "Pre-match and post-match nightlife safety for FIFA World Cup 2026™ fans on King West, Ossington, and downtown Toronto.",
    heroImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=85&auto=format&fit=crop",
    intro:
      "Toronto’s nightlife is a huge part of the World Cup experience — King West, Liberty Village, and Ossington all spike after matches. Celebrate smart so the next day’s fixture still happens.",
    highlights: [
      "Reserve tables on knockout nights — walk-in bars hit capacity by kickoff.",
      "Stay with your group; split rides home instead of wandering alone after 1 a.m.",
      "Licensed venues cut off alcohol at legal hours — plan your exit route early.",
    ],
    sections: [
      {
        title: "Before you go out",
        items: [
          "Share live location with friends and pin your hotel address offline.",
          "Charge phones fully — mobile networks congest near stadium and club districts.",
          "Eat and hydrate; June humidity plus alcohol dehydrates fast.",
        ],
      },
      {
        title: "At the venue & after",
        items: [
          "Watch drinks being poured; never leave a beverage unattended.",
          "Use official taxi ranks on King St W or in-app rideshare — avoid unmarked cars.",
          "Disputes escalate quickly in post-match crowds — walk away and find security if needed.",
        ],
      },
    ],
  },
  "stadium-bag-policy": {
    slug: "stadium-bag-policy",
    name: "Stadium Bag Policy",
    metaTitle: "BMO Field Bag Policy for FIFA 2026™ | GoalPassport",
    metaDescription:
      "BMO Field bag size rules, prohibited items, and security screening tips for FIFA World Cup 2026™ matches in Toronto.",
    heroImage:
      "https://images.unsplash.com/photo-1745997645080-941f962f1392?w=1920&q=85&auto=format&fit=crop",
    intro:
      "BMO Field enforces strict bag and entry rules — especially for FIFA matches. Arriving unprepared means missed kickoff or a trip back to your hotel.",
    highlights: [
      "Clear bag policies are common for major tournaments — check the official venue site 48 hours before kickoff.",
      "Small clutch bags may be allowed if they meet published size limits.",
      "Prohibited items typically include large umbrellas, professional cameras, and outside alcohol.",
    ],
    sections: [
      {
        title: "What to bring",
        items: [
          "Government ID matching the ticket holder name on assigned seats.",
          "Mobile ticket downloaded offline — stadium Wi-Fi and LTE often fail at capacity.",
          "Clear stadium-approved bag or no bag; wear essentials in pockets if allowed.",
          "Sunscreen and hat if permitted — afternoon June matches get intense on open stands.",
        ],
      },
      {
        title: "What to leave at the hotel",
        items: [
          "Large backpacks and roller bags — almost always turned away.",
          "Selfie sticks, drones, and professional lens cameras without credentials.",
          "Outside food and beverages unless medically required with documentation.",
          "Noisemakers and fireworks — security will confiscate and may deny entry.",
        ],
      },
    ],
  },
  "airport-transportation": {
    slug: "airport-transportation",
    name: "Airport Transportation",
    metaTitle: "Toronto Airport Transport Safety for FIFA 2026™ | GoalPassport",
    metaDescription:
      "Safe routes from Toronto Pearson (YYZ) and Billy Bishop (YTZ) to downtown and BMO Field for FIFA World Cup 2026™ fans.",
    heroImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85&auto=format&fit=crop",
    intro:
      "International fans land at Pearson (YYZ) or the downtown island airport (YTZ). Official options are reliable; unlicensed offers at arrivals are not worth the risk.",
    highlights: [
      "UP Express from Pearson to Union takes 25 minutes — fastest and safest rail option.",
      "Licensed taxis and rideshare use designated zones at every terminal.",
      "Pre-book airport shuttles if travelling in large groups with luggage.",
    ],
    sections: [
      {
        title: "From Toronto Pearson (YYZ)",
        items: [
          "UP Express to Union Station, then TTC 509 or GO to Exhibition — best matchday combo.",
          "Licensed taxi flat rates to downtown — confirm meter or prepaid desk before entering.",
          "Avoid unsolicited drivers in arrivals hall; use official queue only.",
          "Allow 60–90 minutes from landing to downtown during peak FIFA arrival windows.",
        ],
      },
      {
        title: "From Billy Bishop (YTZ)",
        items: [
          "Free airport shuttle to Union Station, then westbound to stadium corridor.",
          "Short rideshare to Liberty Village — verify plate and name before entering vehicle.",
          "Walking distance to Harbourfront hotels for fans staying lakeside.",
        ],
      },
    ],
  },
};

export function getTorontoSafetyGuide(slug: string): TorontoSafetyGuide | undefined {
  return TORONTO_SAFETY_GUIDES[slug as TorontoSafetyGuideSlug];
}

export const TORONTO_SAFETY_GUIDE_LINKS: { label: string; href: string }[] = [
  { label: "Safe Areas", href: "/guides/toronto/safe-areas" },
  { label: "TTC & Transit Safety", href: "/guides/toronto/transit-safety" },
  { label: "Nightlife Safety", href: "/guides/toronto/nightlife-safety" },
  { label: "Stadium Bag Policy", href: "/guides/toronto/stadium-bag-policy" },
  { label: "Airport Transportation", href: "/guides/toronto/airport-transportation" },
];
