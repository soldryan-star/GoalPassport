import type { ReactNode } from "react";
import Link from "next/link";

const HREFS = {
  yaletown: "/guides/vancouver/yaletown",
  falseCreek: "/guides/vancouver/false-creek",
  gastown: "/guides/vancouver/gastown",
  richmond: "/guides/vancouver/richmond",
  kitsilano: "/guides/vancouver/kitsilano",
  bcPlace: "/guides/vancouver/bc-place",
  downtownEastside: "/guides/vancouver/downtown-eastside",
  transitSafety: "/guides/vancouver/transit-safety",
  stadiumSafety: "/guides/vancouver/stadium-safety",
  nightlifeSafety: "/guides/vancouver/nightlife-safety",
  weatherGuide: "/guides/vancouver/weather-guide",
  expoLine: "/guides/vancouver/expo-line",
  canadaLine: "/guides/vancouver/canada-line",
  yvrAirport: "/guides/vancouver/yvr-airport",
  aquabus: "/guides/vancouver/aquabus",
  bcPlaceTransportation: "/guides/vancouver/bc-place-transportation",
} as const;

const linkClass =
  "font-semibold text-cyan-400 underline-offset-2 transition hover:text-cyan-300 hover:underline";

export function VancouverGuideLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={className ? `${linkClass} ${className}` : linkClass}>
      {children}
    </Link>
  );
}

export function vancouverAreasToStayContent(): ReactNode[] {
  return [
    <>
      <VancouverGuideLink href={HREFS.yaletown}>Yaletown</VancouverGuideLink>
      {" "}
      &{" "}
      <VancouverGuideLink href={HREFS.falseCreek}>False Creek</VancouverGuideLink>
      {" "}
      — walkable to{" "}
      <VancouverGuideLink href={HREFS.bcPlace}>BC Place</VancouverGuideLink>, patios, and Canada Line.
    </>,
    <>
      <VancouverGuideLink href={HREFS.gastown}>Gastown</VancouverGuideLink>
      {" "}
      & Downtown Eastside edge — boutique hotels; know your route at night. See{" "}
      <VancouverGuideLink href={HREFS.downtownEastside}>Downtown Eastside</VancouverGuideLink> safety tips.
    </>,
    <>
      <VancouverGuideLink href={HREFS.richmond}>Richmond</VancouverGuideLink>
      {" "}
      & YVR corridor — airport-sleep stacks;{" "}
      <VancouverGuideLink href={HREFS.canadaLine}>Canada Line</VancouverGuideLink> to stadium ~25 min.
    </>,
    <>
      <VancouverGuideLink href={HREFS.kitsilano}>Kitsilano</VancouverGuideLink>
      {" "}
      — beach days between matches; add transit time on game night.
    </>,
  ];
}

export function vancouverSafetyTipsContent(): ReactNode[] {
  return [
    <>
      Respect <VancouverGuideLink href={HREFS.downtownEastside}>Downtown Eastside</VancouverGuideLink>{" "}
      boundaries; don&apos;t treat neighbourhoods as photo backdrops.
    </>,
    <>
      <VancouverGuideLink href={HREFS.weatherGuide}>Rain gear + layers</VancouverGuideLink> even in June;
      evening games can cool quickly by the water.
    </>,
    <>
      SkyTrain cars fill fast post-match — see{" "}
      <VancouverGuideLink href={HREFS.transitSafety}>Vancouver transit safety</VancouverGuideLink> and
      position before doors for <VancouverGuideLink href={HREFS.expoLine}>Expo Line</VancouverGuideLink> swaps.
    </>,
  ];
}

export function vancouverTransportationContent(): ReactNode[] {
  return [
    <>
      <VancouverGuideLink href={HREFS.expoLine}>Expo Line</VancouverGuideLink> to Stadium–Chinatown — direct to{" "}
      <VancouverGuideLink href={HREFS.bcPlace}>BC Place</VancouverGuideLink>.
    </>,
    <>
      <VancouverGuideLink href={HREFS.canadaLine}>Canada Line</VancouverGuideLink> from{" "}
      <VancouverGuideLink href={HREFS.yvrAirport}>YVR</VancouverGuideLink> to Waterfront, transfer to Expo for
      one-seat logic.
    </>,
    <>
      <VancouverGuideLink href={HREFS.aquabus}>Aquabus</VancouverGuideLink> & False Creek ferries for scenic
      pre-game hops from Olympic Village.
    </>,
    <>
      Bike lanes along seawall — secure locks; stadium bike valet TBC. Full{" "}
      <VancouverGuideLink href={HREFS.bcPlaceTransportation}>BC Place transportation</VancouverGuideLink>{" "}
      guide available.
    </>,
  ];
}

export function linkBcPlaceInText(text: string): ReactNode {
  const parts = text.split(/(BC Place)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part === "BC Place" ? (
      <VancouverGuideLink key={i} href={HREFS.bcPlace}>
        BC Place
      </VancouverGuideLink>
    ) : (
      part
    ),
  );
}
