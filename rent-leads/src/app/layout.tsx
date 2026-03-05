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

export const metadata: Metadata = {
  title: "Toronto Rent Leads | New Rental Listings Alerts",
  description:
    "Get new rental listings in Toronto first. Free alerts for North York, Richmond Hill, Downtown Toronto and more.",
  openGraph: {
    title: "Get New Rental Listings in Toronto",
    description: "Free rental alerts for Toronto neighbourhoods.",
  },
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
