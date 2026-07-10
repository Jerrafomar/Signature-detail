import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Signature Detail",
  description:
    "Browse Signature Detail's portfolio of luxury car, exotic car, SUV and private jet detailing work in Montreal.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Gallery"
        description="A curated look at the vehicles and aircraft that have passed through our hands."
        image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-obsidian">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up">
            <GalleryGrid />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
