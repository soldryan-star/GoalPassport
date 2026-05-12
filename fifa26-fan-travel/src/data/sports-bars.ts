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
];
