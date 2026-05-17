import type { ReactNode } from "react";
import Link from "next/link";

const GUIDE_HREFS = {
  libertyVillage: "/guides/toronto/liberty-village",
  bmoField: "/guides/toronto/bmo-field",
  yorkville: "/guides/toronto/yorkville",
  entertainmentDistrict: "/guides/toronto/entertainment-district",
  theBeaches: "/guides/toronto/the-beaches",
} as const;

const linkClass = "font-semibold text-cyan-400 underline-offset-2 transition hover:text-cyan-300 hover:underline";

export function TorontoGuideLink({
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

/** First "Best areas to stay" bullet with internal neighbourhood links. */
export function torontoAreasToStayContent(): ReactNode[] {
  return [
    <>
      <TorontoGuideLink href={GUIDE_HREFS.libertyVillage}>Liberty Village</TorontoGuideLink>
      {" "}
      & King West — walkable to{" "}
      <TorontoGuideLink href={GUIDE_HREFS.bmoField}>BMO Field</TorontoGuideLink>; craft beer and loft-style stays.
    </>,
    <>
      <TorontoGuideLink href={GUIDE_HREFS.entertainmentDistrict}>Entertainment District</TorontoGuideLink>
      {" "}
      — high-rise hotels, theatres, and quick Union Station access.
    </>,
    <>
      <TorontoGuideLink href={GUIDE_HREFS.yorkville}>Yorkville</TorontoGuideLink>
      {" "}
      & Midtown — quieter luxury, easy subway to Exhibition GO on matchdays.
    </>,
    <>
      <TorontoGuideLink href={GUIDE_HREFS.theBeaches}>The Beaches</TorontoGuideLink>
      {" "}
      — if you want post-match lake breezes; add 20–25 min transit to the stadium.
    </>,
  ];
}

export function linkBmoFieldInText(text: string): ReactNode {
  const parts = text.split(/(BMO Field)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part === "BMO Field" ? (
      <TorontoGuideLink key={i} href={GUIDE_HREFS.bmoField}>
        BMO Field
      </TorontoGuideLink>
    ) : (
      part
    ),
  );
}
