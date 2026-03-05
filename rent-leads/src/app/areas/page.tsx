import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rental Areas | Toronto Rent Leads",
  description: "Browse rental areas: North York, Richmond Hill, Downtown Toronto, Scarborough, Vaughan, Woodbridge, Etobicoke, East York, Aurora, Newmarket.",
};

const areas = [
  {
    slug: "north-york",
    name: "North York",
    description: "Family-friendly neighbourhoods with transit, parks, and schools.",
    cta: "Get North York alerts",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    description: "Suburban living with easy access to Toronto and Vaughan.",
    cta: "Get Richmond Hill alerts",
  },
  {
    slug: "downtown-toronto",
    name: "Downtown Toronto",
    description: "Condos and apartments in the heart of the city.",
    cta: "Get Downtown alerts",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    description: "Diverse east-end neighbourhoods with transit and affordable options.",
    cta: "Get Scarborough alerts",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    description: "Suburban living north of Toronto with transit and new development.",
    cta: "Get Vaughan alerts",
  },
  {
    slug: "woodbridge",
    name: "Woodbridge",
    description: "Community-focused Vaughan neighbourhood with townhouses and homes.",
    cta: "Get Woodbridge alerts",
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    description: "Toronto west end with condos, transit, and highway access.",
    cta: "Get Etobicoke alerts",
  },
  {
    slug: "east-york",
    name: "East York",
    description: "Central-east Toronto with neighbourhood feel and strong transit.",
    cta: "Get East York alerts",
  },
  {
    slug: "aurora",
    name: "Aurora",
    description: "York Region town with historic downtown, GO Transit, and family housing.",
    cta: "Get Aurora alerts",
  },
  {
    slug: "newmarket",
    name: "Newmarket",
    description: "Historic town with GO Transit and a mix of houses and townhomes.",
    cta: "Get Newmarket alerts",
  },
];

export default function AreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Rental areas
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        Choose your area to get new rental listings delivered to your inbox.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map(({ slug, name, description, cta }) => (
          <Link
            key={slug}
            href={`/areas/${slug}`}
            className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-700">
              {name}
            </h2>
            <p className="mt-2 text-sm text-zinc-600">{description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-zinc-900 group-hover:underline">
              {cta} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
