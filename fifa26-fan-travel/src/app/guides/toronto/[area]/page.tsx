import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TorontoNeighbourhoodGuide } from "@/components/guides/toronto-neighbourhood-guide";
import { TorontoSafetyGuidePage } from "@/components/guides/toronto-safety-guide";
import { getTorontoGuide, TORONTO_GUIDE_SLUGS } from "@/data/toronto-guides";
import { getTorontoSafetyGuide, TORONTO_SAFETY_GUIDE_SLUGS } from "@/data/toronto-safety-guides";

type Props = { params: Promise<{ area: string }> };

const ALL_TORONTO_GUIDE_SLUGS = [...TORONTO_GUIDE_SLUGS, ...TORONTO_SAFETY_GUIDE_SLUGS];

export function generateStaticParams() {
  return ALL_TORONTO_GUIDE_SLUGS.map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const neighbourhood = getTorontoGuide(area);
  if (neighbourhood) {
    return {
      title: neighbourhood.metaTitle,
      description: neighbourhood.metaDescription,
      openGraph: {
        title: neighbourhood.metaTitle,
        description: neighbourhood.metaDescription,
      },
    };
  }
  const safety = getTorontoSafetyGuide(area);
  if (safety) {
    return {
      title: safety.metaTitle,
      description: safety.metaDescription,
      openGraph: {
        title: safety.metaTitle,
        description: safety.metaDescription,
      },
    };
  }
  return { title: "Toronto Guide" };
}

export default async function TorontoGuidePage({ params }: Props) {
  const { area } = await params;
  const neighbourhood = getTorontoGuide(area);
  if (neighbourhood) return <TorontoNeighbourhoodGuide guide={neighbourhood} />;

  const safety = getTorontoSafetyGuide(area);
  if (safety) return <TorontoSafetyGuidePage guide={safety} />;

  notFound();
}
