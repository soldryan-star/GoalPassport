export interface MatchGuide {
  slug: string;
  title: string;
  subtitle: string;
  heroAccent: string;
  readTime: string;
  atmosphere: string[];
  viewing: string[];
  transport: string[];
  hotelsNearby: string[];
  weather: string[];
  fanTips: string[];
}

export const MATCH_GUIDES: MatchGuide[] = [
  {
    slug: "opening-match-guide",
    title: "Opening Match Survival Guide",
    subtitle: "First whistle energy — how to navigate ceremonies, security waves, and post-match exits.",
    heroAccent: "from-amber-500/40 via-emerald-500/25 to-slate-950",
    readTime: "9 min",
    atmosphere: [
      "Expect staggered arrivals — opening ceremonies add 45–60 min to door times.",
      "Drums and supporter-section capos start 90 minutes out; casual seats still feel electric.",
      "Camera phones everywhere — download offline maps before cellular networks choke.",
    ],
    viewing: [
      "Lower sideline if you want tifo reveals; upper corners for tactical overview.",
      "Fan parks mirror in-stadium audio delay — sync expectations if you hop outside at halftime.",
      "Portable radios / FM apps still work in some venues for local commentary backup.",
    ],
    transport: [
      "Identify three exit routes: primary transit, secondary rideshare pin, tertiary walk-off grid.",
      "Pre-purchase transit day passes where available — queues spike after final whistle.",
      "If driving, screenshot parking QR before arrival; LTE fails under concrete bowls.",
    ],
    hotelsNearby: [
      "Book cancellable rates until schedule lock — FIFA reshuffles happen.",
      "Cluster nights around back-to-back host cities to save on domestic flights.",
      "Airbnb hosts sometimes cancel during mega-events — have a backup hotel hold.",
    ],
    weather: [
      "June heat domes possible in North American hosts — pack electrolyte packets.",
      "Sudden thunderstorms in Central Mexico — poncho beats umbrella in tight rows.",
      "Layer for Toronto evening lake breeze even when afternoons hit 28 °C.",
    ],
    fanTips: [
      "Join official supporter WhatsApp chains for your nation — intel on meetups spreads there first.",
      "Portable battery + USB-C + short cable = security-friendly power.",
      "Respect capo cues in drums sections; ask before standing on seats.",
    ],
  },
  {
    slug: "messi-in-toronto",
    title: "Messi in Toronto",
    subtitle: "If La Albiceleste lands at BMO Field — the pilgrimage playbook.",
    heroAccent: "from-sky-400/35 via-white/10 to-slate-950",
    readTime: "7 min",
    atmosphere: [
      "Argentine diaspora packs pubs 6 hours early — singing starts at breakfast.",
      "Expect dual-language chants bouncing between Spanish and Canadian English.",
      "Media perimeter tightens — celeb tunnel sightlines go to premium seats only.",
    ],
    viewing: [
      "South end for supporters' group smoke (metaphorical) — north shore for calmer families.",
      "Liberty Village patios spill into street viewing parties if tickets elude you.",
      "CN Tower broadcast decks sometimes sell watch-party bundles — monitor Ticketmaster oddities.",
    ],
    transport: [
      "Exhibition GO train doubles frequency on rumour days — still arrive 3 hours early.",
      "Uber surge maps look like heat vision — split rides from King & Strachan pin.",
      "Water taxi from Harbourfront is underrated if weather cooperates.",
    ],
    hotelsNearby: [
      "Anything on Blue Jays game nights stacks pricing — separate MLB vs FIFA searches.",
      "Corporate housing swaps open two weeks out — check Facebook expat groups.",
    ],
    weather: [
      "Humidex can push 'feels like' 38 °C — light kits, not black polyester.",
      "Sudden lakefront gust — secure hats and flags.",
    ],
    fanTips: [
      "Bring mate gourd if that's your ritual — security may inspect hollow vessels slowly.",
      "Resale spikes hit 400% when lineups leak — set price alerts early.",
    ],
  },
  {
    slug: "argentina-fan-guide",
    title: "Argentina Fan Guide",
    subtitle: "Canción eterna — routes, rituals, and safety for traveling Albiceleste.",
    heroAccent: "from-sky-300/30 via-sky-600/30 to-slate-950",
    readTime: "11 min",
    atmosphere: [
      "Bus caravan culture meets North American parking lots — adapt your drum line spacing.",
      "Expect generational families; help abuelas with stairs in steep sections.",
    ],
    viewing: [
      "Official AFA partner pubs publish 48h ahead — verify neon crest decals at door.",
      "Fan embassy desks often near main squares — grab wristbands for organised marches.",
    ],
    transport: [
      "Inter-city flights spike after group stage — book flex on LATAM + Air Canada pairs.",
      "Night buses between host cities exist but sleep quality is poor — neck pillow mandatory.",
    ],
    hotelsNearby: [
      "South American consulates sometimes negotiate hotel blocks — follow embassy Twitter.",
    ],
    weather: [
      "Pack for three climates if chasing Mexico + Canada double-headers in one week.",
    ],
    fanTips: [
      "Learn two new canciones per trip — locals reward effort over perfection.",
      "Credit cards widely accepted; still stash USD small bills for pop-up merch.",
    ],
  },
  {
    slug: "mexico-city-match-experience",
    title: "Mexico City Match Experience",
    subtitle: "Azteca altitude, volcanic sunsets, and the loudest concrete bowl on Earth.",
    heroAccent: "from-green-600/35 via-red-600/25 to-slate-950",
    readTime: "10 min",
    atmosphere: [
      "Wave travels counterclockwise — join early or you'll block sightlines standing.",
      "Fireworks smell lingers — asthmatics pack inhalers even if 'controlled'.",
    ],
    viewing: [
      "Sol (sun) side vs sombra — pay for sombra if you're not acclimated to altitude + UV.",
      "Upper deck sway is real — embrace it or choose lower bowl stability.",
    ],
    transport: [
      "Return journeys take 2× longer than map estimates — bladder plan before exit.",
      "Collectivo culture is intimate — small bills, patience, and Spanish greetings help.",
    ],
    hotelsNearby: [
      "South-side hotels shave minutes off post-match traffic toward Oaxaca highway escapes.",
    ],
    weather: [
      "Afternoon hail possible June — ultralight poncho in pocket.",
      "Nights cool fast — pack a windbreaker for open-air rides home.",
    ],
    fanTips: [
      "Hydrate with electrolytes, not just beer — altitude punishes hubris.",
      "Learn basic metro Spanish phrases — staff appreciate por favor / gracias loops.",
    ],
  },
];

export function getMatchGuide(slug: string): MatchGuide | undefined {
  return MATCH_GUIDES.find((m) => m.slug === slug);
}

export function getMatchGuideSlugs(): string[] {
  return MATCH_GUIDES.map((m) => m.slug);
}
