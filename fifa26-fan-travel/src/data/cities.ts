export const SITE = {
  name: "GoalPassport",
  tagline: "Fan travel & matchday intelligence for FIFA World Cup 2026™",
  url: "https://goalpassport.com",
  disclaimer:
    "FIFA World Cup 2026™ is a trademark of FIFA. This site is an independent fan resource and is not affiliated with FIFA.",
} as const;

/** All official FIFA World Cup 2026™ host city slugs (16 venues, 3 countries). */
export type HostCitySlug =
  | "toronto"
  | "vancouver"
  | "mexico-city"
  | "guadalajara"
  | "monterrey"
  | "atlanta"
  | "boston"
  | "dallas"
  | "houston"
  | "kansas-city"
  | "los-angeles"
  | "miami"
  | "new-york"
  | "philadelphia"
  | "san-francisco"
  | "seattle";

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
    slug: "vancouver",
    name: "Vancouver",
    country: "Canada",
    stadium: "BC Place",
    tagline: "Mountain air, seawall sunsets, and the politest ultras in the tournament.",
    accent: "from-teal-500/30 via-sky-400/20 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Yaletown & False Creek — walkable to BC Place, patios, and Canada Line.",
      "Gastown & Downtown Eastside edge — boutique hotels; know your route at night.",
      "Richmond & YVR corridor — airport-sleep stacks; Canada Line to stadium ~25 min.",
      "Kitsilano — beach days between matches; add transit time on game night.",
    ],
    safetyTips: [
      "Respect Downtown Eastside boundaries; don’t treat neighbourhoods as photo backdrops.",
      "Rain gear + layers even in June; evening games can cool quickly by the water.",
      "SkyTrain cars fill fast post-match — position before doors for Expo Line swaps.",
    ],
    transportation: [
      "Expo Line to Stadium–Chinatown — direct to BC Place.",
      "Canada Line from YVR to Waterfront, transfer to Expo for one-seat logic.",
      "Aquabus & False Creek ferries for scenic pre-game hops from Olympic Village.",
      "Bike lanes along seawall — secure locks; stadium bike valet TBC.",
    ],
    sportsBars: [
      { name: "Doolin's Irish Pub", vibe: "Celtic energy, big screens, Granville strip spillover." },
      { name: "Brewhall", vibe: "Craft taps + long tables; good for mixed-nation groups." },
      { name: "Score on Davie", vibe: "Caesars and projectors — rowdy but friendly." },
    ],
    nightlife: [
      "Granville Entertainment District for clubs and late-night food.",
      "Commercial Drive for laid-back taprooms and live music.",
      "Yaletown lounges for post-win bubbles.",
    ],
    hotelsNearStadium: [
      "Paradox Hotel — steps from stadium and Rogers Arena overlap nights.",
      "JW Marriott Parq Vancouver — casino resort stack, spa recovery.",
      "Fairmont Pacific Rim — harbour views, premium shuttle timing.",
    ],
    budgetVsLuxury: {
      budget: "Samesun Vancouver + clean motels on Kingsway.",
      luxury: "Rosewood Hotel Georgia — heritage glam and concierge blocks.",
    },
    fanZones: [
      "Jack Poole Plaza — waterfront screens and sponsor activations.",
      "Robson Street pedestrian stretches on key matchdays.",
      "Granville Island public market for daytime fan energy.",
    ],
    restaurants: [
      "Miku — aburi sushi with harbour context.",
      "Savio Volpe — Italian comfort in East Van.",
      "Vij’s — modern Indian; book weeks ahead.",
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
    slug: "guadalajara",
    name: "Guadalajara",
    country: "Mexico",
    stadium: "Estadio Akron",
    tagline: "Mariachi roots, chiva heart, and high-altitude football in Jalisco.",
    accent: "from-red-600/35 via-amber-500/25 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Zapopan / Valle Real — closest cluster to Estadio Akron; mall hotels and parking.",
      "Chapala Avenue corridor — mid-range chains with quick highway access.",
      "Centro Histórico — cathedral, plazas, and tapatío culture; 25–40 min to venue.",
      "Tlaquepaque — crafts and tejuino stops; best for rest days between matches.",
    ],
    safetyTips: [
      "Ride-hail at night from Centro; know your pickup pin at malls after games.",
      "Sun + altitude — same hydration discipline as CDMX, slightly lower elevation.",
      "Keep tickets and phones in front pockets in packed fan march routes.",
    ],
    transportation: [
      "Macrobús and Mi Macro Periférico for spine routes — study maps before match week.",
      "Uber and Didi widely used; surge spikes after final whistle.",
      "Match shuttles from city centre (confirm FIFA / local transport 2026).",
    ],
    sportsBars: [
      { name: "La Barra de Chapultepec", vibe: "Chivas-heavy energy, outdoor screens." },
      { name: "Deportivo 11", vibe: "Neighbourhood cantina with projector wall." },
      { name: "Malafama", vibe: "Craft beer + tacos, younger crowd mix." },
    ],
    nightlife: [
      "Chapala Ave bar-hopping for norteño bands and late tacos.",
      "Americana district clubs for DJ-heavy post-finals nights.",
      "Tlaquepaque mariachi plazas for traditional wind-down.",
    ],
    hotelsNearStadium: [
      "One Guadalajara Tapatio (Zapopan) — business-traveller staple.",
      "Hilton Midtown Guadalajara — pool deck for heat recovery.",
      "Holiday Inn Express & Suites Av. Chapalita — practical base for highway runs.",
    ],
    budgetVsLuxury: {
      budget: "Centro hostels + clean 3-stars along Av. México.",
      luxury: "Westin Guadalajara / NH Collection for club-lounge buffers.",
    },
    fanZones: [
      "Plaza de la Liberación big-screen setups (check municipal schedules).",
      "Parque Metropolitano tailgate-adjacent green space.",
      "Expo Guadalajara area fan fairs when conventions align.",
    ],
    restaurants: [
      "Kamilos 333 — birria institution; cash-friendly.",
      "Hueso — design-forward tasting in a bone-white house.",
      "La Chata — tortas ahogadas fuel before standing sections.",
    ],
  },
  {
    slug: "monterrey",
    name: "Monterrey",
    country: "Mexico",
    stadium: "Estadio BBVA",
    tagline: "Mountains, steel, and El Gigante de Acero roaring at sunset.",
    accent: "from-blue-700/35 via-slate-600/30 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "San Pedro Garza García — luxury towers, dining, short hops to stadium.",
      "Valle Oriente — malls + chain hotels; easy Uber staging.",
      "Barrio Antiguo — nightlife core; add time for matchday traffic to García.",
      "Fundidora / Santa Lucía canal — modern museums; good for family rest days.",
    ],
    safetyTips: [
      "Flash floods in sudden storms — check low crossings if driving from south.",
      "Heat can exceed 38 °C in June — midday shade plans mandatory.",
      "Use official parking passes; street hawkers sell dubious “VIP” lots.",
    ],
    transportation: [
      "Ecovía and Metrorrey for spine coverage — combine with last-mile Uber.",
      "Dedicated match park-and-ride lots (TBC) usually north of city centre.",
      "Monterrey–Aeropuerto taxis fixed-rate; confirm before departure.",
    ],
    sportsBars: [
      { name: "Brüggers", vibe: "Beer hall screens, Rayados DNA on the walls." },
      { name: "La Taberna del Patrón", vibe: "Cantina classics, late kitchen." },
      { name: "57 Sports Bar", vibe: "Multiple projectors, family tables upfront." },
    ],
    nightlife: [
      "Barrio Antiguo live bands until 3 a.m.",
      "San Pedro rooftop lounges for skyline match recaps.",
      "Casino-adjacent clubs if you want Vegas-lite energy.",
    ],
    hotelsNearStadium: [
      "Safie Hotel & Suites — practical Garza García access.",
      "Crowne Plaza Monterrey — business block staple.",
      "Live Aqua Urban Resort Monterrey — spa-forward recovery.",
    ],
    budgetVsLuxury: {
      budget: "Centro motels + mid chains near Cintermex.",
      luxury: "Grand Fiesta Americana / The Westin Monterrey for butler-tier service.",
    },
    fanZones: [
      "Macroplaza giant-screen concepts (city hall zone).",
      "Fundidora park fan lawns and concert shells.",
      "Paseo Santa Lucía boat rides between activations.",
    ],
    restaurants: [
      "El Tío — cabrito al pastor, Monterrey ritual.",
      "Pangea — fine dining with regio ingredients.",
      "La Nacional — cantina energy and ice-cold carta blanca.",
    ],
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    country: "USA",
    stadium: "Mercedes-Benz Stadium",
    tagline: "Southern hospitality meets retractable-roof spectacle downtown.",
    accent: "from-red-600/25 via-amber-500/20 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Downtown & Castleberry Hill — walkable to MBS; loft conversions and boutique hotels.",
      "Midtown — arts, Piedmont Park, MARTA spine to stadium.",
      "Buckhead — upscale stays if you split rides for knockout nights.",
      "East Atlanta Village — grittier music scene; longer post-game Uber.",
    ],
    safetyTips: [
      "Summer humidity + pop-up storms — poncho in pocket beats umbrella in seats.",
      "Downtown crowds spike on NFL overlap weekends — plan extra door time.",
      "Use official rideshare geofenced lots; avoid random curbside touts.",
    ],
    transportation: [
      "MARTA Gold/Red to Mercedes-Benz Stadium or CNN Center exits.",
      "Atlanta Streetcar for short hops if staying east of downtown.",
      "Hartsfield-Jackson — MARTA to core often faster than I-85 at rush.",
    ],
    sportsBars: [
      { name: "Fado Irish Pub", vibe: "Soccer-first Buckhead crowd, early opens." },
      { name: "Brewhouse Cafe", vibe: "Huge beer list, terrace, Premier League DNA." },
      { name: " STATS Brewpub", vibe: "Downtown walking distance, wall of TVs." },
    ],
    nightlife: [
      "Edgewood Avenue for clubs and late wings.",
      "Little Five Points for indie venues.",
      "Rooftop bars on Peachtree for skyline reels.",
    ],
    hotelsNearStadium: [
      "Signia by Hilton Atlanta — attached to Georgia World Congress Center.",
      "Hotel Indigo Downtown — design-forward, MARTA-adjacent.",
      "Omni Atlanta at CNN Center — classic sports-tourism stack.",
    ],
    budgetVsLuxury: {
      budget: "Airport corridor + Midtown micro-hotels.",
      luxury: "Four Seasons Midtown / St. Regis Buckhead.",
    },
    fanZones: [
      "Centennial Olympic Park fan lawns.",
      "The Battery Atlanta crossover energy (check Braves home schedule).",
      "Ponce City Market pop-up merch rows.",
    ],
    restaurants: [
      "Busy Bee Cafe — Southern soul before noon kickoffs.",
      "Antico Pizza — communal tables, loud and fast.",
      "Bacchanalia — splurge tasting if you snag a res.",
    ],
  },
  {
    slug: "boston",
    name: "Boston",
    country: "USA",
    stadium: "Gillette Stadium (Foxborough)",
    tagline: "Revolution country: colonial streets one hour, ultras chants the next.",
    accent: "from-sky-700/30 via-slate-600/25 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Back Bay & South End — walkable Boston core; commuter rail to Foxborough.",
      "Seaport — new hotels, Silver Line to South Station, water views.",
      "Providence, RI — wildcard base if Boston prices spike; MBTA / Amtrak splits.",
      "Foxborough / Mansfield suburbs — closest pins if you prioritise sleep over nightlife.",
    ],
    safetyTips: [
      "Gillette bag policy is NFL-strict — check clear-bag rules before stadium day.",
      "Commuter rail crush after night games — buy round-trips early.",
      "June can still swing cool + rainy — pack a shell layer.",
    ],
    transportation: [
      "MBTA Commuter Rail Franklin/Foxboro event trains on match days.",
      "Rideshare pins at Patriot Place — surge pricing is real on knockouts.",
      "Logan Airport — Silver Line SL1 free to South Station connections.",
    ],
    sportsBars: [
      { name: "The Banshee", vibe: "Dorchester soccer institution, global kits." },
      { name: "Phoenix Landing", vibe: "Central Sq., late license, European kickoffs." },
      { name: "Lir", vibe: "Back Bay Irish pub, solid projector wall." },
    ],
    nightlife: [
      "Royale / Big Night Live for DJ-led post-match blowouts.",
      "Cambridge jazz and comedy near Harvard/MIT.",
      "Seaport cocktail dens with harbor walks.",
    ],
    hotelsNearStadium: [
      "Renaissance Boston Patriot Place — walk to Gillette.",
      "Hilton Garden Inn Foxborough — practical tailgate adjacency.",
      "Omni Boston Hotel at the Seaport — if you rail in from Boston stay.",
    ],
    budgetVsLuxury: {
      budget: "Medford / Allston motels + hostel dorms downtown.",
      luxury: "Four Seasons One Dalton / Mandarin Oriental Boston.",
    },
    fanZones: [
      "Boston Common large-screen fan fests (city permitting).",
      "Patriot Place plaza activations at stadium.",
      "Fan Pier Harborwalk screens in Seaport.",
    ],
    restaurants: [
      "Neptune Oyster — North End lines worth the lobster roll.",
      "Toro — South End tapas crawl.",
      "Union Oyster House — touristy but historic chowder pit stop.",
    ],
  },
  {
    slug: "dallas",
    name: "Dallas / Arlington",
    country: "USA",
    stadium: "AT&T Stadium",
    tagline: "Everything’s bigger — including the screen, the tailgate, and the highway merge.",
    accent: "from-blue-500/30 via-cyan-400/15 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Downtown Dallas — Deep Ellum music, hotels, DART to event shuttles.",
      "Arlington Entertainment District — walking distance to AT&T; book early.",
      "Fort Worth Stockyards — cowboy culture detour; 30–45 min game runs.",
      "Irving / Las Colinas — corporate hotels with highway spokes.",
    ],
    safetyTips: [
      "Heat domes possible — electrolytes, hats, sunscreen non-negotiable.",
      "Parking lots are vast — pin your row in maps app with offline backup.",
      "Thunderstorm lightning can delay outdoor tailgates — seek stadium concourses.",
    ],
    transportation: [
      "DART Rail to Arlington shuttle connectors (verify 2026 FIFA service maps).",
      "Rideshare from Dallas core — budget surge multiples on knockout exits.",
      "DFW / Love Field — split airport strategy if flying between group cities.",
    ],
    sportsBars: [
      { name: "Truck Yard", vibe: "Outdoor screens, eclectic food stalls." },
      { name: "The Londoner Addison", vibe: "Soccer-mad patio, EPL mornings." },
      { name: "Christie's Sports Bar", vibe: "Uptown Dallas multi-floor TVs." },
    ],
    nightlife: [
      "Deep Ellum live music and craft cocktails.",
      "Uptown rooftop pool parties.",
      "Fort Worth Rodeo Exchange for honky-tonk contrast.",
    ],
    hotelsNearStadium: [
      "Live! by Loews Arlington — entertainment district anchor.",
      "Sheraton Arlington Hotel — classic stadium walk.",
      "Omni Dallas Downtown — if you accept post-game DART + shuttle.",
    ],
    budgetVsLuxury: {
      budget: "Motel strips along I-30 east of Dallas.",
      luxury: "Rosewood Mansion on Turtle Creek + Ritz-Carlton Dallas.",
    },
    fanZones: [
      "AT&T Stadium plazas and tailgate lots.",
      "Klyde Warren Park downtown fan screens.",
      "Texas Live! complex bars spilling into streets.",
    ],
    restaurants: [
      "Pecan Lodge — Deep Ellum BBQ queue discipline.",
      "Mi Cocina — Tex-Mex chain that hits at 2 a.m.",
      "Knife — steakhouse splurge when your team advances.",
    ],
  },
  {
    slug: "houston",
    name: "Houston",
    country: "USA",
    stadium: "NRG Stadium",
    tagline: "Space City humidity, global food halls, and rodeo-hardened crowds.",
    accent: "from-orange-500/30 via-red-700/20 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Medical Center / Museum District — NRG-adjacent hotels and METRORail Red Line.",
      "Montrose & Midtown — nightlife, LGBTQ+ friendly bars, Uber to stadium.",
      "Heights & Washington Ave — bungalow bars; add 20+ min on match nights.",
      "Downtown — convention hotels, light rail spine.",
    ],
    safetyTips: [
      "Heat index can break 40 °C — seek shade queues, stadium misting zones.",
      "Flash flood warnings — avoid underpasses in yellow-cell storms.",
      "NRG lot size — hydration + step count planning for older fans.",
    ],
    transportation: [
      "METRORail Red Line to Stadium Park / NRG stop.",
      "Park-and-ride lots with shuttle buses on mega fixtures.",
      "IAH / Hobby — split rides; Hobby closer but fewer intl nonstops.",
    ],
    sportsBars: [
      { name: "Pitch Soccer Cafe", vibe: "Indoor turf viewing, family-friendly." },
      { name: "King's Court", vibe: "Galleria-area soccer wall, patio screens." },
      { name: "The Richmond Arms Pub", vibe: "British pub DNA, pint-heavy." },
    ],
    nightlife: [
      "Midtown clubs and patio DJ sets.",
      "EaDo warehouse parties after late games.",
      "Rooftop Cinema Club Houston for chill-down nights.",
    ],
    hotelsNearStadium: [
      "Hilton Houston Plaza Medical Center — NRG-adjacent.",
      "Marriott Marquis Houston — downtown lazy river recovery.",
      "Hotel ZaZa Museum District — boutique flair near Hermann Park.",
    ],
    budgetVsLuxury: {
      budget: "Gulf Freeway motels + hostels near Montrose.",
      luxury: "Post Oak Hotel Uptown — high-roller spa stack.",
    },
    fanZones: [
      "NRG Park festival lawns between stadium and arena.",
      "Discovery Green downtown superscreens.",
      "Hermann Park paddle boats for surreal rest-day contrast.",
    ],
    restaurants: [
      "Truth BBQ — line discipline pays off.",
      "Ninfa’s on Navigation — fajita pilgrimage.",
      "Xochi — Oaxacan fine dining from chef Hugo Ortega.",
    ],
  },
  {
    slug: "kansas-city",
    name: "Kansas City",
    country: "USA",
    stadium: "Arrowhead Stadium",
    tagline: "BBQ smoke, Midwest decibels, and the Sea of Red on full display.",
    accent: "from-red-500/35 via-yellow-500/15 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Power & Light / Downtown KC — nightlife hub; rideshare to Truman Sports Complex.",
      "Country Club Plaza — Spanish architecture, shopping, 15–20 min to stadium.",
      "Crossroads Arts District — lofts, breweries, murals.",
      "Independence / East side motels — budget pins; verify routes early.",
    ],
    safetyTips: [
      "Stadium lot tailgates are legendary — pace alcohol + sun exposure.",
      "Tornado season awareness — watch NOAA alerts in late spring.",
      "Post-game traffic from I-70 ramps — leave beer garden before final whistle if rushing.",
    ],
    transportation: [
      "KC Streetcar free downtown loop then transfer to rideshare staging.",
      "Chiefs-style park-and-ride for major events — FIFA will likely mirror NFL flows.",
      "KCI airport — new terminal; rideshare pickup zones redesigned.",
    ],
    sportsBars: [
      { name: "No Other Pub", vibe: "Power & Light, soccer-forward programming." },
      { name: "Coach's Bar & Grill", vibe: "Brookside neighbourhood screens." },
      { name: "The Blue Line", vibe: "Hockey bar that loves big international fixtures." },
    ],
    nightlife: [
      "Power & Light District dance floors.",
      "Westport bars for college-town energy.",
      "Green Lady Lounge for jazz cool-down.",
    ],
    hotelsNearStadium: [
      "Loews Kansas City Hotel — downtown flagship.",
      "Crossroads Hotel — design hotel, short streetcar hops.",
      "Hilton Kansas City Airport — if you prioritise flight access over vibe.",
    ],
    budgetVsLuxury: {
      budget: "Independence chains + Midtown motor courts.",
      luxury: "Loews + InterContinental at the Plaza for high-end suites.",
    },
    fanZones: [
      "KC Live! block parties.",
      "Union Station lawn projections.",
      "City Market farmers market daytime fan meetups.",
    ],
    restaurants: [
      "Joe’s Kansas City BBQ — legendary burnt ends.",
      "Q39 — modern BBQ with shorter lines at midtown location.",
      "Corvino Supper Club — upscale contrast to smokehouse week.",
    ],
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    country: "USA",
    stadium: "SoFi Stadium",
    tagline: "Pacific sunsets, influencer energy, and Hollywood-scale matchday production.",
    accent: "from-violet-500/30 via-amber-400/15 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Inglewood / Hollywood Park — new hotels ringing SoFi; premium walk scores.",
      "Culver City & Palms — Expo Line + shorter rideshare than DTLA beach traffic.",
      "Manhattan Beach & El Segundo — post-match ocean resets; add time to Inglewood.",
      "Downtown LA — Metro spine, arts district nightlife, connector buses TBC.",
    ],
    safetyTips: [
      "Budget 2× map ETA on 405 / 110 merge days — flex departure windows.",
      "Parking pass scams — buy only from official team / stadium channels.",
      "Car break-in awareness — never leave luggage visible in street parking.",
    ],
    transportation: [
      "Metro K Line toward Inglewood; watch FIFA shuttle announcements.",
      "LAX people mover + Metro connections evolving — screenshot wayfinding.",
      "Rideshare from Santa Monica often slower than Expo + last-mile Uber.",
    ],
    sportsBars: [
      { name: "Tom's Watch Bar", vibe: "LA Live mega LED ribbon." },
      { name: "The Fox & Hounds", vibe: "Studio City soccer temple, early opens." },
      { name: "Rock & Reilly's", vibe: "Hollywood rooftop screens." },
    ],
    nightlife: [
      "WeHo rooftops and drag show corridors.",
      "Arts District warehouse parties.",
      "Hermosa Beach pier bars for Pacific breeze.",
    ],
    hotelsNearStadium: [
      "Hollywood Park Casino Hotel — adjacent to SoFi campus.",
      "Courtyard Los Angeles LAX / Hawthorne — practical fan blocks.",
      "Fairmont Century Plaza — luxury base if you accept post-game drives.",
    ],
    budgetVsLuxury: {
      budget: "Hostels on Melrose + Inglewood motels.",
      luxury: "Shutters on the Beach Santa Monica — ocean recovery between drives to Inglewood.",
    },
    fanZones: [
      "LA Live fan campus screens.",
      "Santa Monica Pier watch parties (wind-dependent).",
      "YouTube Theater plaza spillover events.",
    ],
    restaurants: [
      "Guelaguetza — Oaxacan moles in Koreatown.",
      "Bestia — Italian loud room, reservations essential.",
      "Howlin' Ray's — Nashville hot chicken line culture.",
    ],
  },
  {
    slug: "miami",
    name: "Miami",
    country: "USA",
    stadium: "Hard Rock Stadium",
    tagline: "Heat, humidity, and South American rhythm colliding in Miami Gardens.",
    accent: "from-fuchsia-500/30 via-orange-400/20 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Brickell & Downtown — towers, Metrorail, Brightline to Fort Lauderdale splits.",
      "Wynwood & Midtown — murals, art bars, influencer hotels.",
      "Miami Beach — ocean resets; add 35–60 min to Hard Rock on traffic days.",
      "Doral — practical chain hotels west of airport corridor.",
    ],
    safetyTips: [
      "Heat index + UV — light kits, sunscreen every 90 minutes.",
      "Afternoon thunderstorms — ponchos beat umbrellas in tight rows.",
      "Hydration pacing — alternate water with celebratory drinks.",
    ],
    transportation: [
      "Metrorail to Golden Glades + shuttle connectors (confirm 2026 FIFA plan).",
      "Brightline MiamiCentral for South Florida multi-match hops.",
      "MIA / FLL — split ticket strategy if chasing cheapest flights.",
    ],
    sportsBars: [
      { name: "Batch Gastropub", vibe: "Doral watch-party buses to Hard Rock." },
      { name: "Fritz & Franz Bierhaus", vibe: "Coral Gables soccer crowd, steins." },
      { name: "Duffy's Sports Grill", vibe: "Chain reliability, multi-wall TVs." },
    ],
    nightlife: [
      "E11EVEN rooftop energy (dress codes strict).",
      "Little Havana live salsa on Calle Ocho.",
      "South Beach hotel pool parties.",
    ],
    hotelsNearStadium: [
      "AC Hotel Miami Aventura — northeast corridor compromise.",
      "Hilton Miami Airport Blue Lagoon — park-and-shuttle fan favourite.",
      "Faena Hotel Miami Beach — splurge ocean nights between fixtures.",
    ],
    budgetVsLuxury: {
      budget: "Airport motel strips + hostels in South Beach dorms.",
      luxury: "Setai / Four Seasons Surfside calm.",
    },
    fanZones: [
      "Bayfront Park downtown superscreens.",
      "Hard Rock campus plazas and tailgate rows.",
      "Wynwood Walls selfie circuits with DJ trucks.",
    ],
    restaurants: [
      "Versailles — Cuban classics, ventanita coffee.",
      "Cvi.che 105 — Peruvian tasting flights.",
      "Joe's Stone Crab — if budget allows off-season luck.",
    ],
  },
  {
    slug: "new-york",
    name: "New York / New Jersey",
    country: "USA",
    stadium: "MetLife Stadium",
    tagline: "Cross-river energy, skyline views, and East Coast football culture.",
    accent: "from-blue-600/30 via-indigo-500/20 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Hoboken & Jersey City waterfront — PATH trains, ferries, MetLife rideshare pins.",
      "Midtown Manhattan — hotel density; NJ Transit from Penn Station to Secaucus.",
      "Williamsburg & Long Island City — Brooklyn-Queens vibe; add tunnel time.",
      "Secaucus / Meadowlands plaza hotels — closest sleep-to-stadium wins.",
    ],
    safetyTips: [
      "PATH crush after night games — patience or pre-book car service.",
      "MetLife clear-bag policy mirrors NFL — pack accordingly.",
      "Street vendors selling “official” merch — quality varies wildly.",
    ],
    transportation: [
      "NJ Transit train to Secaucus Junction, transfer to Meadowlands rail line on event days.",
      "Ferry from Manhattan to Belford / weekend routes — scenic but weather dependent.",
      "Bus 160 / 161 from Port Authority — budget option when trains overload.",
    ],
    sportsBars: [
      { name: "Smithfield Hall", vibe: "NYC’s Premier League living room." },
      { name: "Legends", vibe: "Yankee Stadium area but draws big soccer finals crowds." },
      { name: "The Ashford", vibe: "Jersey City multi-floor, rooftop screens." },
    ],
    nightlife: [
      "Brooklyn Mirage summer series.",
      "West Village jazz dens.",
      "Hoboken bar strips for post-PATH pints.",
    ],
    hotelsNearStadium: [
      "W Hoboken — skyline views, PATH downstairs.",
      "Renaissance Meadowlands — classic stadium-weekend block.",
      "Hyatt House Jersey City — suite-style rooms for groups.",
    ],
    budgetVsLuxury: {
      budget: "Long Island City micro-hotels + Jersey motels.",
      luxury: "Pendry Manhattan West / Four Seasons Downtown.",
    },
    fanZones: [
      "Times Square fan screens (capacity TBC).",
      "Hudson River barges / pier parties (rumored activations).",
      "American Dream mall mega-screens (Rutherford).",
    ],
    restaurants: [
      "Joe's Pizza — slice sprint fuel.",
      "Xi'an Famous Foods — spicy hand-pulled noodles.",
      "Carbone — if you win the reservation lottery.",
    ],
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    country: "USA",
    stadium: "Lincoln Financial Field",
    tagline: "Brotherly love, brass sections, and a stadium that knows how to boo with affection.",
    accent: "from-green-700/30 via-cyan-600/15 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Center City — hotels, Broad Street Line south to the South Philly sports complex.",
      "University City — campuses, food halls; BSL to stadium.",
      "Fishtown & Northern Liberties — nightlife; Uber to South Philly on game day.",
      "Stadium district hotels — Holiday Inn / Courtyard at the sports complex.",
    ],
    safetyTips: [
      "Broad Street Line post-game pushes — pickpocket awareness in packed cars.",
      "June heat + humidity — stadium misting stations are your friend.",
      "Celebratory climbing light poles is illegal — let the cops celebrate safely.",
    ],
    transportation: [
      "SEPTA Broad Street Line to NRG (AT&T Station).",
      "Regional Rail to Temple / Jefferson then BSL south.",
      "PHL airport — SEPTA Airport Line to Jefferson + transfer.",
    ],
    sportsBars: [
      { name: "Fado Pub", vibe: "Old City soccer HQ, Europa mornings." },
      { name: "Brü Craft & Wurst", vibe: "German beer hall, massive screens." },
      { name: "City Tap House", vibe: "University City projector wall." },
    ],
    nightlife: [
      "Old City clubs and cobblestone bar crawls.",
      "South Street late slices and live music.",
      "Rooftop bars near City Hall for skyline photos.",
    ],
    hotelsNearStadium: [
      "Courtyard Philadelphia South at The Navy Yard — practical stadium distance.",
      "Live! Casino & Hotel Philadelphia — south Philly entertainment stack.",
      "The Notary Hotel Autograph — Center City + BSL combo.",
    ],
    budgetVsLuxury: {
      budget: "Airport area chains + hostel beds in Center City.",
      luxury: "Four Seasons Comcast Center / Ritz-Carlton Philadelphia.",
    },
    fanZones: [
      "Independence Mall fan lawns.",
      "Xfinity Live! complex next to stadiums.",
      "Schuylkill Banks trail pop-up beer gardens.",
    ],
    restaurants: [
      "Reading Terminal Market — one-stop grazing.",
      "Zahav — Israeli tasting menu splurge.",
      "John’s Roast Pork — South Philly sandwich science.",
    ],
  },
  {
    slug: "san-francisco",
    name: "San Francisco Bay Area",
    country: "USA",
    stadium: "Levi's Stadium (Santa Clara)",
    tagline: "Tech capital meets tailgate innovation — fog optional, scarves mandatory.",
    accent: "from-orange-500/25 via-rose-500/20 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Santa Clara & Sunnyvale — closest pins to Levi’s; corporate hotels dominate.",
      "San Jose downtown — Diridon Caltrain spine to stadium.",
      "San Francisco — vibe + culture; Caltrain ~1h to Santa Clara on express.",
      "Palo Alto / Stanford — splurge stays if you mix tech tours with matches.",
    ],
    safetyTips: [
      "Earthquake app notifications — rare but know hotel muster points.",
      "Caltrain last trains stop early — post-midnight Uber from SF can be pricey.",
      "Sun exposure in South Bay seats — midday games burn faster than foggy SF.",
    ],
    transportation: [
      "Caltrain to Santa Clara / Great America station + stadium walk.",
      "VTA light rail Green/Orange to Great America platform.",
      "SJC airport closest; SFO + BART/Caltrain combo for intl fans.",
    ],
    sportsBars: [
      { name: "McTeague's Saloon", vibe: "SF Polk Street soccer den." },
      { name: "Nomads Bar", vibe: "San Jose downtown big-wall TVs." },
      { name: "St. Stephen's Green", vibe: "Mountain View pub with ultras energy." },
    ],
    nightlife: [
      "SF Mission District late tacos and DJ bars.",
      "San Pedro Square Market in San Jose for food hall nights.",
      "Oakland warehouse parties if you extend the Bay loop.",
    ],
    hotelsNearStadium: [
      "Hyatt Regency Santa Clara — Levi’s adjacent conference stack.",
      "Hotel Valencia Santana Row — upscale Santana Row walk nights.",
      "W San Francisco — if you accept Caltrain game-day rhythm.",
    ],
    budgetVsLuxury: {
      budget: "San Jose airport motels + East Bay budget chains.",
      luxury: "Rosewood Sand Hill / Ritz Half Moon Bay coastal detours.",
    },
    fanZones: [
      "Great America plaza pre-game fan fests.",
      "Embarcadero SF pier screens (weather permitting).",
      "Santana Row street closures with DJ stages.",
    ],
    restaurants: [
      "La Taqueria — Mission burrito debate starter pack.",
      "Bird Dog Palo Alto — casual fine dining pit stop.",
      "Adega — San Jose Michelin-level splurge.",
    ],
  },
  {
    slug: "seattle",
    name: "Seattle",
    country: "USA",
    stadium: "Lumen Field",
    tagline: "Emerald City rain songs, Pacific Northwest hops, and stadiums that shake on third down.",
    accent: "from-emerald-600/30 via-teal-500/20 to-slate-950",
    fullGuide: true,
    areasToStay: [
      "Pioneer Square & Stadium District — walk to Lumen; historic brick lofts.",
      "Belltown & Downtown — hotel towers, monorail to Seattle Center rest days.",
      "Capitol Hill — nightlife density; Link light rail to stadium.",
      "Bellevue — Eastside luxury; Link across lake on match morning.",
    ],
    safetyTips: [
      "June drizzle vs downpour — packable shell always in pocket.",
      "Pioneer Square bar close — respect staff; post-game crowds emotional.",
      "Link Light Rail crowded after finals-level games — consider walking one stop north.",
    ],
    transportation: [
      "Link Light Rail to Stadium or International District/Chinatown stations.",
      "King Street Station Amtrak for Vancouver / Portland multi-city legs.",
      "Sea-Tac Airport — Link direct to stadium corridor ~40 min.",
    ],
    sportsBars: [
      { name: "George & Dragon Pub", vibe: "Fremont soccer institution." },
      { name: "Temple Billiards", vibe: "Pioneer Square basement screens." },
      { name: "Fuel Sports", vibe: "Cle Elum vibes in Seattle — massive wall of TVs." },
    ],
    nightlife: [
      "Capitol Hill karaoke and queer bar energy.",
      "Belltown rooftop cocktails.",
      "Ballard breweries for laid-back post-match pints.",
    ],
    hotelsNearStadium: [
      "Silver Cloud Hotel — Stadium / Pioneer Square doorstep.",
      "Hyatt Regency Seattle — downtown tower, Link downstairs.",
      "Lotte Hotel Seattle — luxury blocks from Pike Place resets.",
    ],
    budgetVsLuxury: {
      budget: "Green Lake motels + Capitol Hill hostels.",
      luxury: "Four Seasons Seattle / Fairmont Olympic.",
    },
    fanZones: [
      "Pioneer Square Occidental Park fan stages.",
      "Seattle Center International Fountain screenings.",
      "Waterfront Pier 62 pop-up beer gardens.",
    ],
    restaurants: [
      "Canlis — splurge view dining (jacket history).",
      "Taylor Shellfish Oyster Bar — pre-match iodine boost.",
      "Musashi's — conveyor sushi speed run.",
    ],
  },
];

export function getCity(slug: string): CityGuide | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getCitySlugs(): HostCitySlug[] {
  return CITIES.map((c) => c.slug);
}
