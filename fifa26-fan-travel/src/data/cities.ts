export const SITE = {
  name: "Groundline 26",
  tagline: "Fan travel & matchday intelligence for FIFA World Cup 2026™",
  url: "https://groundline26.com",
  disclaimer:
    "FIFA World Cup 2026™ is a trademark of FIFA. This site is an independent fan resource and is not affiliated with FIFA.",
} as const;

export type HostCitySlug =
  | "toronto"
  | "mexico-city"
  | "new-york"
  | "miami"
  | "los-angeles"
  | "vancouver";

export interface CityGuide {
  slug: HostCitySlug;
  name: string;
  country: string;
  stadium: string;
  tagline: string;
  accent: string;
  fullGuide: boolean;
  areasToStay: string[];
  safetyTips: string[];
  transportation: string[];
  sportsBars: { name: string; vibe: string }[];
  nightlife: string[];
  hotelsNearStadium: string[];
  budgetVsLuxury: { budget: string; luxury: string };
  fanZones: string[];
  restaurants: string[];
  teaser?: string;
}

export const CITIES: CityGuide[] = [
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    stadium: "BMO Field",
    tagline: "Lakefront energy, global food, and the loudest terraces in the North.",
    accent: "from-emerald-500/30 via-cyan-500/20 to-slate-900",
    fullGuide: true,
    areasToStay: [
      "Liberty Village & King West — walkable to BMO Field; craft beer and loft-style stays.",
      "Entertainment District — high-rise hotels, theatres, and quick Union Station access.",
      "Yorkville & Midtown — quieter luxury, easy subway to Exhibition GO on matchdays.",
      "The Beaches — if you want post-match lake breezes; add 20–25 min transit to the stadium.",
    ],
    safetyTips: [
      "Use official taxi ranks or rideshare pickup zones after night matches; crowds are dense near gates.",
      "Keep phones secured on packed streetcars — pickpocket risk rises on the 509/511 lines after games.",
      "Summer heat + humidity spikes in June — hydrate; stadium bag policies are strict (see venue site).",
    ],
    transportation: [
      "509 Harbourfront & 511 Bathurst streetcars stop closest to BMO Field.",
      "GO Train to Exhibition Station — ideal from Pearson-corridor suburbs.",
      "UP Express to Union, then TTC west — fastest airport-to-core combo.",
      "Bike share (Bike Share Toronto) has docks along Martin Goodman Trail for sunny matchdays.",
    ],
    sportsBars: [
      { name: "The Football Pub", vibe: "Scarves on the wall, early kickoffs, chant-friendly." },
      { name: "Rally Sports House", vibe: "Big screens, rooftop, reservations essential on knockout nights." },
      { name: "Liberty Commons", vibe: "Pre-match pints 10 min walk from BMO Field." },
    ],
    nightlife: [
      "King West cocktail dens turn into DJ rooms after 11 p.m.",
      "Ossington strip for indie bars and late tacos.",
      "Rebel / CODA area for electronic fans willing to rideshare east.",
    ],
    hotelsNearStadium: [
      "Hotel X Toronto — skyline pool, 15 min streetcar.",
      "Bisha Hotel — design-forward, King West core.",
      "Westin Harbour Castle — harbour views, reliable corporate block releases.",
    ],
    budgetVsLuxury: {
      budget: "Hostels near Church-Wellesley + boutique motels on Lakeshore West.",
      luxury: "St. Regis / Shangri-La for butler-level service; book 90-day windows early.",
    },
    fanZones: [
      "Nathan Phillips Square fan festival (check city permits for 2026).",
      "Ontario Place waterfront activations — sunset DJ sets expected.",
      "Distillery District pop-up merch & beer gardens.",
    ],
    restaurants: [
      "Canoe — celebratory Canadian tasting with CN Tower views.",
      "Pai — legendary Northern Thai; line up off-peak.",
      "Richmond Station — farm-to-table comfort before a slow walk to the lake.",
    ],
  },
  {
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    stadium: "Estadio Azteca",
    tagline: "Altitude, passion, and the soul of the tournament.",
    accent: "from-rose-600/30 via-amber-500/20 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Condesa & Roma Norte — tree-lined streets, third-wave coffee, safe evening strolls.",
      "Polanco — five-star clusters, museum mile, Uber-friendly.",
      "Coyoacán — artsy colonial vibe; longer ride to Azteca but magical rest days.",
      "Santa Fe — corporate towers if you prioritise malls over centro energy.",
    ],
    safetyTips: [
      "Use sitio taxis or verified Uber; avoid hailing random street cabs at night.",
      "Altitude (2,240 m) hits hard day one — light training walks, skip heavy drinking pre-match.",
      "Carry small pesos for metro; keep bags in front on Line 2 transfers.",
    ],
    transportation: [
      "Metro + cablebús combo — study Line 2 to Tasqueña then dedicated shuttle routes (TBC 2026).",
      "Uber from Condesa to Azteca ~45–70 min depending on traffic; leave early.",
      "Metrobús Line 2 connects key corridors; prepaid card saves time.",
    ],
    sportsBars: [
      { name: "La Gruta", vibe: "Cavern bar under a pyramid replica — peak CDMX drama." },
      { name: "Bar Jardin", vibe: "Roma Norte screens + mezcal flights." },
      { name: "Louie Louie", vibe: "Neapolitan pizza + projector wall for away fans." },
    ],
    nightlife: [
      "Zinco Jazz Club for post-match wind-downs.",
      "Patrick Miller — legendary marathon DJ set Fridays.",
      "Rooftop bars along Paseo de la Reforma for skyline photos.",
    ],
    hotelsNearStadium: [
      "Novotel Mexico City Toreo — northwest corridor with mall access.",
      "InterContinental Presidente Polanco — base camp for luxury shuttles.",
      "Gran Hotel Ciudad de México — if you split nights between centro and stadium runs.",
    ],
    budgetVsLuxury: {
      budget: "Roma guesthouses and clean 3-stars near Chapultepec.",
      luxury: "Las Alcobas / Four Seasons CDMX for concierge-stacked itineraries.",
    },
    fanZones: [
      "Zócalo mega-screens (capacity TBC).",
      "Chapultepec fairgrounds fan park concepts floated by local media.",
      "Colonia Narvarte street-food crawls with supporter-group pop-ups.",
    ],
    restaurants: [
      "Pujol — tasting-menu pilgrimage (book months ahead).",
      "Contramar — tuna tostadas, long lunch between double-headers.",
      "El Turix — cochinita pibil tacos when you need speed.",
    ],
  },
  {
    slug: "new-york",
    name: "New York / NJ",
    country: "USA",
    stadium: "MetLife Stadium",
    tagline: "Cross-river energy, skyline views, and East Coast football culture.",
    accent: "from-blue-600/30 via-indigo-500/20 to-slate-950",
    fullGuide: false,
    teaser: "Full borough-by-borough guide drops Q3 — subscribe for PATH hacks and Secaucus express lanes.",
    areasToStay: ["Hoboken & Jersey City waterfront", "Midtown Manhattan", "Williamsburg"],
    safetyTips: ["PATH peak crowding", "Bag policy at MetLife"],
    transportation: ["NJ Transit", "Ferry", "Uber pool from Brooklyn"],
    sportsBars: [{ name: "Smithfield Hall", vibe: "Premier League mornings" }],
    nightlife: ["Brooklyn Mirage summer series", "West Village jazz"],
    hotelsNearStadium: ["W Hoboken", "Hyatt House Jersey City"],
    budgetVsLuxury: { budget: "Long Island City micro-hotels", luxury: "Pendry Manhattan West" },
    fanZones: ["Hudson River fan barges (rumored)", "Times Square screens"],
    restaurants: ["Carbone (impossible rez)", "Joe's Pizza slice sprint"],
  },
  {
    slug: "miami",
    name: "Miami",
    country: "USA",
    stadium: "Hard Rock Stadium",
    tagline: "Heat, humidity, and South American rhythm colliding in Miami Gardens.",
    accent: "from-fuchsia-500/30 via-orange-400/20 to-slate-950",
    fullGuide: false,
    teaser: "Heat-index playbook + Wynwood mural routes — launching soon.",
    areasToStay: ["Brickell", "Wynwood", "Miami Beach (split stays)"],
    safetyTips: ["Hydration protocols", "Afternoon storm windows"],
    transportation: ["Metrorail + Brightline", "Rideshare zones"],
    sportsBars: [{ name: "Batch Gastropub", vibe: "Doral watch parties" }],
    nightlife: ["E11EVEN rooftop", "Little Havana live salsa"],
    hotelsNearStadium: ["AC Hotel Doral", "Hilton Aventura"],
    budgetVsLuxury: { budget: "Airport corridor chains", luxury: "Faena oceanfront" },
    fanZones: ["Bayfront Park activations", "South Beach fan beach"],
    restaurants: ["Versailles Cuban", "Cvi.che 105"],
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    country: "USA",
    stadium: "SoFi Stadium",
    tagline: "Pacific sunsets, influencer energy, and Hollywood-scale matchday production.",
    accent: "from-violet-500/30 via-amber-400/15 to-slate-950",
    fullGuide: false,
    teaser: "405 survival guide + Inglewood rail timeline — editors assembling now.",
    areasToStay: ["Culver City", "Downtown LA", "Manhattan Beach"],
    safetyTips: ["Traffic buffers", "Parking pass scams"],
    transportation: ["K Line", "Metro E Line", "Rideshare"],
    sportsBars: [{ name: "Tom's Watch Bar", vibe: "LA Live mega screens" }],
    nightlife: ["WeHo rooftops", "Arts District warehouses"],
    hotelsNearStadium: ["Hollywood Park Casino Hotel", "Courtyard LA Westside"],
    budgetVsLuxury: { budget: "Hostels on Melrose", luxury: "Fairmont Century Plaza" },
    fanZones: ["LA Live fan campus", "Santa Monica pier screenings"],
    restaurants: ["Guelaguetza Oaxacan", "Bestia Italian"],
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    country: "Canada",
    stadium: "BC Place",
    tagline: "Mountain air, seawall sunsets, and the politest ultras in the tournament.",
    accent: "from-teal-500/30 via-sky-400/20 to-slate-950",
    fullGuide: false,
    teaser: "Sea-to-Sky day-trip combos + SkyTrain matchday map — coming soon.",
    areasToStay: ["Yaletown", "Gastown", "Richmond for airport"],
    safetyTips: ["Safe injection awareness Downtown Eastside borders"],
    transportation: ["Canada Line", "Aquabus", "Seaplane charters"],
    sportsBars: [{ name: "Doolin's", vibe: "Celtic pub energy" }],
    nightlife: ["Granville strip", "Commercial Drive taprooms"],
    hotelsNearStadium: ["Paradox Hotel", "JW Marriott Parq"],
    budgetVsLuxury: { budget: "Samesun hostel", luxury: "Rosewood Hotel Georgia" },
    fanZones: ["Jack Poole Plaza", "Robson Street closures"],
    restaurants: ["Miku aburi sushi", "Savio Volpe Italian"],
  },
];

export function getCity(slug: string): CityGuide | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getCitySlugs(): HostCitySlug[] {
  return CITIES.map((c) => c.slug);
}
