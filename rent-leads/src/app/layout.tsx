import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LandingPageTracker from "@/components/LandingPageTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://torontorentleads.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Toronto Rent Leads | New Rental Listings Alerts",
  description:
    "Get new rental listings in Toronto first. Free alerts for North York, Richmond Hill, Downtown Toronto and more.",
  openGraph: {
    title: "Get New Rental Listings in Toronto",
    description: "Free rental alerts for Toronto neighbourhoods.",
    url: "/",
    siteName: "Toronto Rent Leads",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Toronto Rent Leads – New rental listings first" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get New Rental Listings in Toronto",
    description: "Free rental alerts for Toronto neighbourhoods.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen font-sans antialiased`}>
        <GoogleAnalytics />
        <LandingPageTracker />
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
