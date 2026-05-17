import type { HostCitySlug } from "@/data/cities";

/** Unsplash CDN — free to use under the Unsplash License. */
export type CityLandmarkImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/** Landmark-backed photos for all 16 FIFA 2026 host cities. */
export const CITY_LANDMARK_IMAGES: Record<HostCitySlug, CityLandmarkImage> = {
  toronto: {
    src: unsplash("photo-1517935706615-2717063c2225", 900),
    alt: "CN Tower and Toronto skyline at dusk",
  },
  vancouver: {
    src: unsplash("photo-1578961509811-1f55a380e31f", 900),
    alt: "Lions Gate Bridge and Stanley Park, Vancouver",
  },
  "mexico-city": {
    src: unsplash("photo-1564013799919-ab600027ffc6", 900),
    alt: "Mexico City skyline along Paseo de la Reforma",
  },
  guadalajara: {
    src: unsplash("photo-1596436889106-be35e843f974", 900),
    alt: "Guadalajara cathedral and historic centre",
  },
  monterrey: {
    src: unsplash("photo-1564760055775-d63b17a55c44", 900),
    alt: "Monterrey skyline and Cerro de la Silla",
  },
  atlanta: {
    src: unsplash("photo-1519501025264-65ba15a82390", 900),
    alt: "Atlanta downtown skyline",
  },
  boston: {
    src: unsplash("photo-1501594907352-04cda38ebc29", 900),
    alt: "Boston harbour and city skyline",
  },
  dallas: {
    src: unsplash("photo-1625950019503-cae6a7825762", 900),
    alt: "Dallas skyline and Reunion Tower at night from the Trinity River",
  },
  houston: {
    src: unsplash("photo-1749215695604-4d98a9338dec", 900),
    alt: "Houston downtown skyscrapers on a bright day",
  },
  "kansas-city": {
    src: unsplash("photo-1526304640581-d334cdbbf45e", 900),
    alt: "Kansas City downtown and Union Station area",
  },
  "los-angeles": {
    src: unsplash("photo-1512453979798-5ea266f8880c", 900),
    alt: "Los Angeles skyline at sunset",
  },
  miami: {
    src: unsplash("photo-1748615092606-333fe1ab7321", 900),
    alt: "Carlyle Hotel Art Deco landmark on Ocean Drive, South Beach Miami",
  },
  "new-york": {
    src: unsplash("photo-1496442226666-8d4d0e62e6e9", 900),
    alt: "Manhattan skyline and Empire State Building",
  },
  philadelphia: {
    src: unsplash("photo-1486325212027-8081e485255e", 900),
    alt: "Philadelphia skyline with Ben Franklin Bridge",
  },
  "san-francisco": {
    src: unsplash("photo-1542051841857-5f90071e7989", 900),
    alt: "Golden Gate Bridge and San Francisco bay",
  },
  seattle: {
    src: unsplash("photo-1751496631540-d8defbdf631d", 900),
    alt: "Seattle skyline with Space Needle from Kerry Park on a clear day",
  },
};

export function getCityLandmarkImage(slug: HostCitySlug): CityLandmarkImage {
  return CITY_LANDMARK_IMAGES[slug];
}
