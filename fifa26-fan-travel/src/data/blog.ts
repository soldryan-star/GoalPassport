export type BlogCategory = "travel" | "matchday" | "culture" | "gear" | "news";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
  body: string[];
}

export const BLOG_CATEGORIES: { slug: BlogCategory; label: string }[] = [
  { slug: "travel", label: "Travel" },
  { slug: "matchday", label: "Matchday" },
  { slug: "culture", label: "Culture" },
  { slug: "gear", label: "Gear" },
  { slug: "news", label: "News" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "48-hours-toronto-world-cup",
    title: "48 Hours in Toronto Between Group Stage Matches",
    excerpt: "Lakefront runs, peameal bacon, and the fastest streetcar routes when sleep is optional.",
    category: "travel",
    author: "Maya Chen",
    date: "2026-05-02",
    readTime: "6 min",
    featured: true,
    trending: true,
    body: [
      "Toronto rewards fans who treat travel days like training sessions — hydrate, layer, and never trust a single navigation app during Jays + FIFA overlap weekends.",
      "Start Thursday night in Liberty Village: scout BMO Field approaches, then slide into a supporters' pub for chant recon.",
      "Friday morning, jog the Martin Goodman Trail eastbound — you'll understand wind patterns that matter for open-air fan fests.",
      "Budget an hour for Union Station transfers if you're hopping to Pearson; UP Express is worth the premium when legs are heavy from standing sections.",
    ],
  },
  {
    slug: "altitude-hacks-mexico-city",
    title: "Altitude Hacks for Mexico City Match Weeks",
    excerpt: "Why your first beer hits different at 2,240 m — and how pros acclimate in 72 hours.",
    category: "travel",
    author: "Diego R.",
    date: "2026-04-28",
    readTime: "8 min",
    trending: true,
    body: [
      "Arrive at least 48 hours before knockout rounds if you can — light cardio, sleep, and salt moderation beat any energy drink hack.",
      "Layer sunscreen like you're on a glacier — UV is deceptive under haze.",
      "Matchday 2: swap late-night mezcal for electrolyte mocktails until your resting heart rate normalises.",
    ],
  },
  {
    slug: "ultras-safe-standing-etiquette",
    title: "Safe Standing Etiquette for Neutral Fans",
    excerpt: "When to jump, when to film, and when to simply hold the line.",
    category: "culture",
    author: "Sam Okonkwo",
    date: "2026-04-20",
    readTime: "5 min",
    body: [
      "Neutral fans in capo-led sections should mirror energy, not lead it — watch shoulders, not phones.",
      "If someone taps your backpack, they're asking you to jump on the beat — it's a compliment.",
      "Security appreciates fans who secure flags before final whistle crush begins.",
    ],
  },
  {
    slug: "carry-on-kit-ultras-compact",
    title: "The Ultralight Carry-On Kit for Multi-City Tours",
    excerpt: "USB-C everything, collapsible jug, and the one jacket that survives three climates.",
    category: "gear",
    author: "Jordan Lee",
    date: "2026-04-15",
    readTime: "7 min",
    body: [
      "One 45L backpack beats roller bags on metro stairs — compression cubes are non-negotiable.",
      "Pack a paper ticket photocopy — digital wallets fail in concrete bowls more than you'd think.",
      "Noise-sensitive? Loop earplugs tuned for concerts dampen drums without killing atmosphere.",
    ],
  },
  {
    slug: "schedule-release-strategy",
    title: "How to Game the Schedule Release Without Losing Deposits",
    excerpt: "Hold-cancellable stacks, fare alerts, and the ethical line on speculative bookings.",
    category: "news",
    author: "Editorial Desk",
    date: "2026-04-10",
    readTime: "9 min",
    body: [
      "Never nonrefundable until FIFA confirms your team's path — flexibility tax is cheaper than sunk flights.",
      "Use incognito fare searches sparingly; myth busted, but clearing cookies still helps some legacy airline UIs.",
      "Fan cooperatives sometimes bulk-buy rooms — join verified orgs only.",
    ],
  },
  {
    slug: "miami-heat-index-matchday",
    title: "Miami Heat Index: What TV Doesn't Show",
    excerpt: "Hydration math, fabric choices, and why the third water break matters even if you're in the stands.",
    category: "matchday",
    author: "Elena V.",
    date: "2026-04-08",
    readTime: "6 min",
    body: [
      "Light kits reflect sun; dark kits absorb — plan supporter scarf placement around sun arc, not just aesthetics.",
      "Cooling towels work if you recharge them at halftime with cold water from concessions — not tap from bathroom sinks.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function postsByCategory(cat: BlogCategory): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === cat);
}
