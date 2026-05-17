import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BackButton } from "@/components/layout/back-button";
import { SITE } from "@/data/cities";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | FIFA 2026™ Fan Travel & Matchday`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Host city guides, matchday playbooks, hotel intel, sports bars, and viral fan content for FIFA World Cup 2026™.",
  keywords: [
    "FIFA 2026",
    "World Cup travel",
    "host cities",
    "Toronto",
    "Vancouver",
    "Mexico City",
    "Guadalajara",
    "Monterrey",
    "Miami",
    "Los Angeles",
    "Seattle",
    "matchday guide",
    "sports bars",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | FIFA 2026™ Fan Travel & Matchday`,
    description:
      "Host city guides, matchday playbooks, hotel intel, sports bars, and viral fan content for FIFA World Cup 2026™.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | FIFA 2026™ Fan Travel & Matchday`,
    description: SITE.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} min-h-screen antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors">
            <SiteHeader />
            <BackButton />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
