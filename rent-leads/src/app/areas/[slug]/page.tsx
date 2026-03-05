import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const areas: Record<
  string,
  { name: string; description: string; metaDescription: string }
> = {
  "north-york": {
    name: "North York",
    description:
      "North York offers family-friendly neighbourhoods with strong transit links, parks, and schools. Get new rental listings in North York before they’re widely listed.",
    metaDescription: "Get new rental listings in North York. Free alerts for apartments and homes.",
  },
  "richmond-hill": {
    name: "Richmond Hill",
    description:
      "Richmond Hill combines suburban comfort with easy access to Toronto and Vaughan. Sign up for rental alerts to find your next home.",
    metaDescription: "Get new rental listings in Richmond Hill. Free alerts for rentals.",
  },
  "downtown-toronto": {
    name: "Downtown Toronto",
    description:
      "Downtown Toronto has condos and apartments in the heart of the city. Be first to know when new listings go live.",
    metaDescription: "Get new rental listings in Downtown Toronto. Free condo and apartment alerts.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [
    { slug: "north-york" },
    { slug: "richmond-hill" },
    { slug: "downtown-toronto" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug];
  if (!area)
    return { title: "Area | Toronto Rent Leads" };
  return {
    title: `${area.name} Rentals | Toronto Rent Leads`,
    description: area.metaDescription,
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas[slug];

  if (!area) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-bold text-zinc-900">Area not found</h1>
        <Link href="/areas" className="mt-4 inline-block text-zinc-600 hover:underline">
          ← Back to areas
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/areas"
        className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
      >
        ← All areas
      </Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            New rentals in {area.name}
          </h1>
          <p className="mt-4 text-lg text-zinc-600">{area.description}</p>
          <a
            href="#lead-form"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800"
          >
            Get free alerts for {area.name}
          </a>
        </div>
        <div id="lead-form" className="scroll-mt-24">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
