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

const siteUrl = "https://www.signaturedetail.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Signature Detail | Premium Mobile Auto Detailing in Montreal",
    template: "%s | Signature Detail",
  },
  description:
    "Premium mobile auto detailing in Montreal, QC. Meticulous interior and exterior detailing for every vehicle, from daily drivers to exotic cars. Book your appointment today.",
  keywords: [
    "car detailing Montreal",
    "mobile car detailing Montreal",
    "auto detailing Montreal",
    "interior detailing Montreal",
    "exterior detailing Montreal",
    "exotic car detailing",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Signature Detail | Premium Mobile Auto Detailing in Montreal",
    description:
      "Meticulous interior and exterior detailing for every vehicle. Serving Montreal, QC — book your appointment today.",
    siteName: "Signature Detail",
    url: siteUrl,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Detail | Premium Mobile Auto Detailing in Montreal",
    description:
      "Meticulous interior and exterior detailing for every vehicle. Serving Montreal, QC — book your appointment today.",
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
