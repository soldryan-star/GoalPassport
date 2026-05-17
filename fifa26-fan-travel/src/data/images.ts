import type { HostCitySlug } from "@/data/cities";

/** Unsplash CDN — free to use under the Unsplash License. */
export type SiteImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const HOME_HERO_IMAGE: SiteImage = {
  src: unsplash("photo-1574629810360-7efbbe195018", 1920),
  alt: "Football stadium under lights at dusk",
};

export const CITY_CARD_IMAGES: Record<HostCitySlug, SiteImage> = {
  toronto: {
    src: unsplash("photo-1517935706615-2717063c2225"),
    alt: "Toronto skyline and CN Tower at dusk",
  },
  vancouver: {
    src: unsplash("photo-1578662996442-48f60103fc96"),
    alt: "Vancouver harbour and mountains",
  },
  "mexico-city": {
    src: unsplash("photo-1564013799919-ab600027ffc6"),
    alt: "Colorful colonial architecture in Mexico City",
  },
  guadalajara: {
    src: unsplash("photo-1596436889106-be35e843f974"),
    alt: "Guadalajara cathedral and plaza",
  },
  monterrey: {
    src: unsplash("photo-1564760055775-d63b17a55c44"),
    alt: "Monterrey cityscape with mountains",
  },
  atlanta: {
    src: unsplash("photo-1519501025264-65ba15a82390"),
    alt: "Atlanta downtown skyline",
  },
  boston: {
    src: unsplash("photo-1501594907352-04cda38ebc29"),
    alt: "Boston harbour and skyline",
  },
  dallas: {
    src: unsplash("photo-1558618666-fcd25c85cd64"),
    alt: "Dallas skyline at sunset",
  },
  houston: {
    src: unsplash("photo-1587831990711-23ca6441447b"),
    alt: "Houston downtown skyline",
  },
  "kansas-city": {
    src: unsplash("photo-1526304640581-d334cdbbf45e"),
    alt: "Kansas City downtown",
  },
  "los-angeles": {
    src: unsplash("photo-1512453979798-5ea266f8880c"),
    alt: "Los Angeles downtown skyline",
  },
  miami: {
    src: unsplash("photo-1613490493576-7fde63acd811"),
    alt: "Miami beach and skyline",
  },
  "new-york": {
    src: unsplash("photo-1496442226666-8d4d0e62e6e9"),
    alt: "New York City skyline",
  },
  philadelphia: {
    src: unsplash("photo-1486325212027-8081e485255e"),
    alt: "Philadelphia skyline at dusk",
  },
  "san-francisco": {
    src: unsplash("photo-1542051841857-5f90071e7989"),
    alt: "Golden Gate Bridge and San Francisco bay",
  },
  seattle: {
    src: unsplash("photo-1598300042247-d088f8ab3a91"),
    alt: "Seattle skyline with Space Needle",
  },
};

export const BLOG_COVER_IMAGES: Record<string, SiteImage> = {
  "48-hours-toronto-world-cup": {
    src: unsplash("photo-1517935706615-2717063c2225", 1200),
    alt: "Toronto waterfront and lakefront skyline",
  },
  "altitude-hacks-mexico-city": {
    src: unsplash("photo-1564013799919-ab600027ffc6", 1200),
    alt: "Mexico City historic centre",
  },
};

export function getCityCardImage(slug: HostCitySlug): SiteImage {
  return CITY_CARD_IMAGES[slug];
}

export function getBlogCoverImage(slug: string): SiteImage | undefined {
  return BLOG_COVER_IMAGES[slug];
}
