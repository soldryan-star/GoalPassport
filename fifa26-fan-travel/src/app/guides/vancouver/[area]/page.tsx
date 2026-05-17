import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VancouverAreaGuidePage } from "@/components/guides/vancouver-area-guide-page";
import { VancouverTopicGuidePage } from "@/components/guides/vancouver-topic-guide-page";
import {
  getVancouverAreaGuide,
  VANCOUVER_AREA_GUIDE_SLUGS,
} from "@/data/vancouver/area-guides";
import {
  getVancouverSafetyGuide,
  VANCOUVER_SAFETY_GUIDE_LINKS,
  VANCOUVER_SAFETY_GUIDE_SLUGS,
} from "@/data/vancouver/safety-guides";
import {
  getVancouverTransportGuide,
  VANCOUVER_TRANSPORT_GUIDE_LINKS,
  VANCOUVER_TRANSPORT_GUIDE_SLUGS,
} from "@/data/vancouver/transport-guides";

type Props = { params: Promise<{ area: string }> };

const ALL_VANCOUVER_GUIDE_SLUGS = [
  ...VANCOUVER_AREA_GUIDE_SLUGS,
  ...VANCOUVER_SAFETY_GUIDE_SLUGS,
  ...VANCOUVER_TRANSPORT_GUIDE_SLUGS,
];

export function generateStaticParams() {
  return ALL_VANCOUVER_GUIDE_SLUGS.map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const neighbourhood = getVancouverAreaGuide(area);
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
  const safety = getVancouverSafetyGuide(area);
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
  const transport = getVancouverTransportGuide(area);
  if (transport) {
    return {
      title: transport.metaTitle,
      description: transport.metaDescription,
      openGraph: {
        title: transport.metaTitle,
        description: transport.metaDescription,
      },
    };
  }
  return { title: "Vancouver Guide" };
}

export default async function VancouverGuidePage({ params }: Props) {
  const { area } = await params;
  const neighbourhood = getVancouverAreaGuide(area);
  if (neighbourhood) return <VancouverAreaGuidePage guide={neighbourhood} />;

  const safety = getVancouverSafetyGuide(area);
  if (safety) {
    return (
      <VancouverTopicGuidePage
        guide={safety}
        badge="Vancouver Safety Guide"
        relatedTitle="More safety guides"
        relatedLinks={VANCOUVER_SAFETY_GUIDE_LINKS}
      />
    );
  }

  const transport = getVancouverTransportGuide(area);
  if (transport) {
    return (
      <VancouverTopicGuidePage
        guide={transport}
        badge="Vancouver Transportation Guide"
        relatedTitle="More transportation guides"
        relatedLinks={VANCOUVER_TRANSPORT_GUIDE_LINKS}
      />
    );
  }

  notFound();
}
