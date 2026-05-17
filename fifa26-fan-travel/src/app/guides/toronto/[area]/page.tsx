import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TorontoNeighbourhoodGuide } from "@/components/guides/toronto-neighbourhood-guide";
import { getTorontoGuide, TORONTO_GUIDE_SLUGS } from "@/data/toronto-guides";

type Props = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return TORONTO_GUIDE_SLUGS.map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const guide = getTorontoGuide(area);
  if (!guide) return { title: "Toronto Guide" };
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function TorontoGuidePage({ params }: Props) {
  const { area } = await params;
  const guide = getTorontoGuide(area);
  if (!guide) notFound();

  return <TorontoNeighbourhoodGuide guide={guide} />;
}
