export type TorontoGuideSlug =
  | "liberty-village"
  | "bmo-field"
  | "yorkville"
  | "entertainment-district"
  | "the-beaches";

export type TorontoGuide = {
  slug: TorontoGuideSlug;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  whyItMatters: string[];
  bmoFieldConnection: { headline: string; rows: { label: string; value: string }[] };
  hotels: { name: string; note: string }[];
  foodAndNightlife: string[];
  transportation: string[];
  safety: string[];
};

export const TORONTO_GUIDE_SLUGS: TorontoGuideSlug[] = [
  "liberty-village",
  "bmo-field",
  "yorkville",
  "entertainment-district",
  "the-beaches",
];

export const TORONTO_GUIDES: Record<TorontoGuideSlug, TorontoGuide> = {
  "liberty-village": {
    slug: "liberty-village",
    name: "Liberty Village",
    metaTitle: "Liberty Village Fan Guide | Toronto FIFA 2026™",
    metaDescription:
      "Liberty Village hotels, bars, and matchday tips for FIFA World Cup 2026™ fans — walkable to BMO Field with King West energy.",
    heroImage:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=85&auto=format&fit=crop",
    intro:
      "Liberty Village is Toronto’s creative-industrial pocket turned matchday base camp — loft hotels, craft beer halls, and a 10–15 minute walk to BMO Field when the city is buzzing for FIFA 2026™.",
    whyItMatters: [
      "Shortest fan-friendly walk to BMO Field outside Exhibition Place itself.",
      "King West nightlife is one block north for post-match celebrations.",
      "Strong streetcar and GO connections when crowds surge after the final whistle.",
      "Neighbourhood scale feels local, not tourist-trap — ideal for multi-match stays.",
    ],
    bmoFieldConnection: {
      headline: "Getting to BMO Field from Liberty Village",
      rows: [
        { label: "Walking distance", value: "0.8 – 1.5 km (10–18 min)" },
        { label: "509 Harbourfront streetcar", value: "Exhibition Loop in ~6 min" },
        { label: "Exhibition GO", value: "~5 min walk from core LV" },
        { label: "Rideshare pickup", value: "King St W & Atlantic Ave zones" },
      ],
    },
    hotels: [
      { name: "Hotel X Toronto", note: "Waterfront luxury — closest premium option to the stadium." },
      { name: "Bisha Hotel", note: "Design-forward tower on King West, 15 min walk." },
      { name: "Gladstone House", note: "Boutique art hotel with Queen West nightlife access." },
      { name: "The Drake Hotel", note: "Iconic boutique — book early for knockout rounds." },
    ],
    foodAndNightlife: [
      "Bar Wellington and Brazen Head for pre-match pints and big-screen energy.",
      "King West cocktail bars flip to DJ rooms after 11 p.m.",
      "Liberty Commons — purpose-built for football crowds near the grounds.",
      "Local cafés on Liberty St for early kickoff breakfasts.",
    ],
    transportation: [
      "509 Harbourfront from Union stops at Exhibition Loop — fastest TTC option.",
      "511 Bathurst connects north to Bloor subway for cross-city brackets.",
      "Bike Share docks along the Martin Goodman Trail for sunny matchdays.",
      "Avoid driving — Exhibition Place parking sells out on FIFA nights.",
    ],
    safety: [
      "Well-lit streets but expect dense crowds on Liberty St after games.",
      "Secure phones on packed streetcars leaving Exhibition Loop.",
      "Official rideshare zones only — avoid stopping on Princes’ Blvd.",
    ],
  },
  "bmo-field": {
    slug: "bmo-field",
    name: "BMO Field",
    metaTitle: "BMO Field Matchday Guide | Toronto FIFA 2026™",
    metaDescription:
      "BMO Field logistics for FIFA World Cup 2026™ — gates, transit, bag policy, fan zones, and where to stay nearby in Toronto.",
    heroImage:
      "https://images.unsplash.com/photo-1745997645080-941f962f1392?w=1920&q=85&auto=format&fit=crop",
    intro:
      "BMO Field at Exhibition Place is Canada’s World Cup stage — a 30,000-seat lakefront bowl that hosts Toronto FC and will roar for FIFA 2026™ group and knockout fixtures.",
    whyItMatters: [
      "Home of Canada’s men’s national team matches and key FIFA 2026™ Toronto fixtures.",
      "Exhibition Place fan festival space surrounds the stadium for activations.",
      "Harbourfront views and GO rail make it one of North America’s most transit-friendly venues.",
      "Understanding gate flow and bag rules saves hours on matchday.",
    ],
    bmoFieldConnection: {
      headline: "BMO Field at a glance",
      rows: [
        { label: "Capacity", value: "~30,000 (expandable for major events)" },
        { label: "Address", value: "170 Princes' Blvd, Toronto" },
        { label: "Primary transit", value: "Exhibition GO + 509 streetcar" },
        { label: "Best nearby stays", value: "Liberty Village, King West, Hotel X" },
      ],
    },
    hotels: [
      { name: "Hotel X Toronto", note: "0.6 km — walk or short streetcar." },
      { name: "Westin Harbour Castle", note: "Harbour views, reliable FIFA blocks." },
      { name: "Bisha Hotel", note: "King West design hotel, 15 min walk." },
      { name: "Liberty Grand area hotels", note: "Event-hotel packages on Exhibition grounds." },
    ],
    foodAndNightlife: [
      "Liberty Village pubs fill 2–3 hours before kickoff — reserve tables on knockout nights.",
      "Ontario Place and Harbourfront patios for post-match lake breezes.",
      "Food trucks and fan zone vendors on Exhibition Place for quick bites.",
      "Distillery District beer gardens for late-night crowds willing to rideshare east.",
    ],
    transportation: [
      "Exhibition GO Station — Lakeshore West & Kitchener lines, 400 m to gates.",
      "509 Harbourfront streetcar terminates at Exhibition Loop.",
      "UP Express to Union, then westbound TTC — best Pearson airport route.",
      "Martin Goodman Trail for bike share; secure locks at designated racks.",
    ],
    safety: [
      "Check official BMO Field bag policy before arrival — strict size limits.",
      "Download tickets offline — cellular congestion inside the bowl is common.",
      "Use designated taxi and rideshare pickup on Manitoba Dr after matches.",
      "Hydrate for June humidity; sun exposure on east stands can be intense.",
    ],
  },
  yorkville: {
    slug: "yorkville",
    name: "Yorkville",
    metaTitle: "Yorkville Fan Guide | Toronto FIFA 2026™",
    metaDescription:
      "Yorkville luxury hotels and matchday transit to BMO Field for FIFA World Cup 2026™ fans who want quiet upscale stays in Toronto.",
    heroImage:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=85&auto=format&fit=crop",
    intro:
      "Yorkville is Toronto’s luxury corridor — five-star towers, gallery walks, and a calm counterpoint to matchday chaos, with a straight subway run to Exhibition Place for FIFA 2026™.",
    whyItMatters: [
      "Best neighbourhood for premium fans who want spa recovery between double-header days.",
      "Bay and Yonge subway lines reach Union quickly for westbound stadium connections.",
      "Fine dining and hotel concierges familiar with major-event logistics.",
      "Quieter nights than King West — better sleep before early kickoffs.",
    ],
    bmoFieldConnection: {
      headline: "Yorkville to BMO Field",
      rows: [
        { label: "Subway", value: "Bay → Union → 509 streetcar (~25–30 min)" },
        { label: "GO Train", value: "Union to Exhibition (~12 min) + short walk" },
        { label: "Rideshare", value: "~15–20 min off-peak, longer post-match" },
        { label: "Walking", value: "Not practical (~5 km)" },
      ],
    },
    hotels: [
      { name: "The St. Regis Toronto", note: "Butler service and central Yorkville address." },
      { name: "Shangri-La Toronto", note: "Ultra-luxury tower near University Ave." },
      { name: "Four Seasons Toronto", note: "Gold-standard spa and dining." },
      { name: "Park Hyatt Toronto", note: "Rooftop views over the Annex and ROM." },
    ],
    foodAndNightlife: [
      "Yorkville Avenue bistros for celebratory pre-match dinners.",
      "Cumberland St cafés for morning espresso before transit to the grounds.",
      "Hazelton Lanes and side-street wine bars — reservations essential in June.",
      "Short Uber to King West if you want DJ nightlife after the match.",
    ],
    transportation: [
      "Line 1 Yonge-University to Union, transfer to 509 or GO westbound.",
      "UP Express at Union for airport arrivals — ideal for international fans.",
      "Consider GO for matchday — skips streetcar crush after full-time.",
    ],
    safety: [
      "Low crime area; standard urban awareness on Bloor-Yorkville corridors.",
      "Book return transit before knockout matches — subway platforms pack at Union.",
      "Keep formal wear and valuables minimal on crowded TTC after games.",
    ],
  },
  "entertainment-district": {
    slug: "entertainment-district",
    name: "Entertainment District",
    metaTitle: "Entertainment District Fan Guide | Toronto FIFA 2026™",
    metaDescription:
      "Entertainment District hotels near Union Station with fast access to BMO Field for FIFA World Cup 2026™ Toronto matchdays.",
    heroImage:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=85&auto=format&fit=crop",
    intro:
      "Toronto’s Entertainment District stacks high-rise hotels, theatres, and Union Station hub energy — the default choice for fans who want one-seat transit to BMO Field and downtown fan zones.",
    whyItMatters: [
      "Union Station is the spine for GO, UP Express, and westbound streetcar routes.",
      "Highest concentration of FIFA-friendly hotel inventory and corporate blocks.",
      "Walking distance to Nathan Phillips Square fan festival activations.",
      "Broadway-style energy — easy to pair matches with shows and dining.",
    ],
    bmoFieldConnection: {
      headline: "Entertainment District to BMO Field",
      rows: [
        { label: "509 streetcar", value: "Union to Exhibition Loop (~15 min)" },
        { label: "GO Train", value: "Union to Exhibition (~12 min)" },
        { label: "Walking", value: "~3.5 km (40–45 min along waterfront)" },
        { label: "Rideshare", value: "~10–15 min off-peak" },
      ],
    },
    hotels: [
      { name: "Fairmont Royal York", note: "Historic grand hotel atop Union Station." },
      { name: "InterContinental Toronto Centre", note: "Convention district staple for groups." },
      { name: "Delta Hotels Toronto", note: "Reliable full-service near the CN Tower." },
      { name: "Ritz-Carlton Toronto", note: "Luxury on Wellington with harbour access." },
    ],
    foodAndNightlife: [
      "King St W theatre strip restaurants — book early on match Saturdays.",
      "Real Sports Bar & Grill for massive screens if you skip a ticket.",
      "Roy Thomson Hall area wine bars for upscale pre-match meals.",
      "St. Lawrence Market day trips for food-obsessed fans.",
    ],
    transportation: [
      "Union Station GO — fastest matchday rail to Exhibition.",
      "509 Harbourfront from Queen’s Quay or Union loop.",
      "UP Express from Pearson terminates at Union.",
      "Walk the PATH underground network to avoid rain between hotel and station.",
    ],
    safety: [
      "Dense tourist crowds around Union and Front St — watch for pickpockets.",
      "Use official GO and TTC staff directions during stadium evacuations.",
      "Avoid unlicensed ticket scalpers near stadium shuttle zones.",
    ],
  },
  "the-beaches": {
    slug: "the-beaches",
    name: "The Beaches",
    metaTitle: "The Beaches Fan Guide | Toronto FIFA 2026™",
    metaDescription:
      "The Beaches neighbourhood guide for FIFA World Cup 2026™ fans — lakefront stays, Queen East dining, and transit to BMO Field in Toronto.",
    heroImage:
      "https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=1920&q=85&auto=format&fit=crop",
    intro:
      "The Beaches trades stadium proximity for lakefront calm — boardwalk mornings, Queen East patios, and a relaxed FIFA 2026™ base if you do not mind a 20–25 minute transit ride to BMO Field.",
    whyItMatters: [
      "Ideal for fans on rest days who want swimming, boardwalk runs, and neighbourhood vibes.",
      "More affordable boutique stays than downtown core during peak FIFA weeks.",
      "501 Queen streetcar connects east-end fans to downtown and stadium corridors.",
      "Family-friendly atmosphere for supporters travelling with kids.",
    ],
    bmoFieldConnection: {
      headline: "The Beaches to BMO Field",
      rows: [
        { label: "501 Queen streetcar", value: "To downtown, transfer west (~35–45 min)" },
        { label: "GO + TTC", value: "Danforth GO to Union, then Exhibition (~40 min)" },
        { label: "Rideshare", value: "~25–35 min depending on traffic" },
        { label: "Driving", value: "Lake Shore Blvd — avoid on match nights" },
      ],
    },
    hotels: [
      { name: "The Broadview Hotel", note: "Boutique east-end landmark with rooftop views." },
      { name: "Neighbourhood B&Bs on Queen East", note: "Book early for June FIFA demand." },
      { name: "Downtown day-stays", note: "Many Beaches fans book core hotels for match nights only." },
      { name: "Airbnb lakefront flats", note: "Strong supply along Kew Balmy strip." },
    ],
    foodAndNightlife: [
      "Queen St E pub row — laid-back screens and local craft beer.",
      "Boardwalk fish-and-chips and ice cream stands for post-match lake walks.",
      "Edwardian pubs in the village core for early kickoff breakfasts.",
      "Woodbine Park summer events — check overlap with FIFA fan activations.",
    ],
    transportation: [
      "501 Queen car westbound to Yonge or Spadina, connect to 509 or GO.",
      "Bloor-Danforth subway at Main St or Woodbine for faster downtown jumps.",
      "Bike along the Martin Goodman Trail — scenic but add time on matchday.",
      "Plan extra 15 minutes return trips when streetcars are packed after games.",
    ],
    safety: [
      "Very safe residential area; standard caution on Queen St late nights.",
      "Swim only at supervised beach flags — lake conditions vary in June.",
      "Allow buffer time for transit delays on packed 501 cars after downtown matches.",
    ],
  },
};

export function getTorontoGuide(slug: string): TorontoGuide | undefined {
  return TORONTO_GUIDES[slug as TorontoGuideSlug];
}

export const TORONTO_GUIDE_LINKS: { label: string; href: string }[] = [
  { label: "Liberty Village", href: "/guides/toronto/liberty-village" },
  { label: "BMO Field", href: "/guides/toronto/bmo-field" },
  { label: "Yorkville", href: "/guides/toronto/yorkville" },
  { label: "Entertainment District", href: "/guides/toronto/entertainment-district" },
  { label: "The Beaches", href: "/guides/toronto/the-beaches" },
];
