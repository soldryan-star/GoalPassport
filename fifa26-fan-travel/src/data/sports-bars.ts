export interface SportsBar {
  id: string;
  name: string;
  city: string;
  type: "sports-bar" | "rooftop" | "fan-venue";
  atmosphere: string;
  screens: string;
  highlight: string;
}

export const SPORTS_BARS: SportsBar[] = [
  {
    id: "sb1",
    name: "Rally Sports House",
    city: "Toronto",
    type: "rooftop",
    atmosphere: "Chants bounce off glass rails — rooftop mist fans on humid nights.",
    screens: "28 UHD + projector wall",
    highlight: "Reserve tables for knockout rounds 30 days out.",
  },
  {
    id: "sb2",
    name: "The Football Pub",
    city: "Toronto",
    type: "fan-venue",
    atmosphere: "Scarves stapled to ceilings, owner played semi-pro in Leeds.",
    screens: "Every EPL Saturday + World Cup wall-to-wall",
    highlight: "Ask about the hidden back patio for smoke breaks.",
  },
  {
    id: "sb3",
    name: "Bar Jardin",
    city: "Mexico City",
    type: "rooftop",
    atmosphere: "Roma Norte jungle plants, mezcal flights, DJ after full-time.",
    screens: "Outdoor LED + indoor OLED cave",
    highlight: "Sunset kickoffs = golden hour content goldmine.",
  },
  {
    id: "sb4",
    name: "Smithfield Hall",
    city: "New York",
    type: "sports-bar",
    atmosphere: "NYC's living room for away fans who refuse to whisper.",
    screens: "Two floors, sound-separated zones",
    highlight: "PATH-adjacent for Jersey commuters.",
  },
  {
    id: "sb5",
    name: "Batch Gastropub",
    city: "Miami",
    type: "sports-bar",
    atmosphere: "Latin trap playlists between whistles — high energy, high AC.",
    screens: "LED matrix behind bar",
    highlight: "Doral HQ watch party buses to Hard Rock.",
  },
  {
    id: "sb6",
    name: "Tom's Watch Bar",
    city: "Los Angeles",
    type: "fan-venue",
    atmosphere: "Stadium-scale LED ribbon — influencer central.",
    screens: "200+ feet of continuous screen",
    highlight: "LA Live security perimeter on final nights.",
  },
  {
    id: "sb7",
    name: "Doolin's Irish Pub",
    city: "Vancouver",
    type: "sports-bar",
    atmosphere: "Granville strip singalongs — Celtic tilt, rugby overlap friendly.",
    screens: "Main bar UHD + mezzanine projector",
    highlight: "Post-BC Place stumble distance.",
  },
  {
    id: "sb8",
    name: "George & Dragon Pub",
    city: "Seattle",
    type: "fan-venue",
    atmosphere: "Fremont soccer institution — scarves, pints, and Pacific Northwest decibels.",
    screens: "Projector + patio spillover",
    highlight: "Early opens for Euro-heavy kickoffs.",
  },
  {
    id: "sb9",
    name: "Fado Irish Pub",
    city: "Atlanta",
    type: "sports-bar",
    atmosphere: "Buckhead staple — Premier League mornings roll into MLS nights.",
    screens: "Multi-room layout",
    highlight: "Reserve Buckhead tables for USA knockout nights.",
  },
  {
    id: "sb10",
    name: "La Barra de Chapultepec",
    city: "Guadalajara",
    type: "rooftop",
    atmosphere: "Chivas colours everywhere — rooftop mist and norteño playlists.",
    screens: "Rooftop LED + indoor wall",
    highlight: "Uber staging pin shared in supporter WhatsApp chains.",
  },
  {
    id: "sb11",
    name: "Brü Craft & Wurst",
    city: "Philadelphia",
    type: "sports-bar",
    atmosphere: "German beer hall scale — long tables for mixed-nation friendlies.",
    screens: "Stadium-wall projector + matrix TVs",
    highlight: "Broad Street Line crawl starter.",
  },
  {
    id: "sb12",
    name: "The Banshee",
    city: "Boston",
    type: "fan-venue",
    atmosphere: "Dorchester’s global football living room — ultras respect the house.",
    screens: "Every league, every window",
    highlight: "Gillette shuttle buddies meet here first.",
  },
];
