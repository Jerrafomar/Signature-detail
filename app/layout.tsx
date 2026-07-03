import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Signature Detail | Luxury Car & Aircraft Detailing Montreal",
  description:
    "Premium detailing services in Montreal specializing in luxury vehicles and private aircraft interiors.",
  keywords: [
    "luxury car detailing Montreal",
    "aircraft cabin detailing",
    "exotic car detailing",
    "ceramic coating Montreal",
    "private jet detailing",
  ],
  openGraph: {
    title: "Signature Detail | Luxury Car & Aircraft Detailing Montreal",
    description:
      "Premium detailing services in Montreal specializing in luxury vehicles and private aircraft interiors.",
    siteName: "Signature Detail",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Detail | Luxury Car & Aircraft Detailing Montreal",
    description:
      "Premium detailing services in Montreal specializing in luxury vehicles and private aircraft interiors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-obsidian text-ivory">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
