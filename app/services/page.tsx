import type { Metadata } from "next";
import {
  Droplets,
  Sparkles,
  ShieldHalf,
  Layers,
  Gem,
  Wind,
  Armchair,
  Droplet,
  ShieldCheck,
  Star,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import GoldSeam from "@/components/GoldSeam";
import { serviceGroups } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Signature Detail",
  description:
    "Explore Signature Detail's full range of luxury car detailing and private aircraft cabin detailing services in Montreal.",
};

const carIcons = [Droplets, Sparkles, ShieldHalf, Layers, Gem];
const jetIcons = [Wind, Armchair, Droplet, ShieldCheck, Star];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Craft"
        title="Services"
        description="Two disciplines, one uncompromising standard: exotic automobiles and private aircraft cabins."
        image="https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=2000&auto=format&fit=crop"
      />

      {serviceGroups.map((group, groupIndex) => {
        const icons = groupIndex === 0 ? carIcons : jetIcons;
        return (
          <section
            key={group.category}
            className={`py-24 md:py-32 px-6 md:px-10 ${
              groupIndex % 2 === 0 ? "bg-obsidian" : "bg-charcoal/30 border-y border-white/5"
            }`}
          >
            <div className="mx-auto max-w-7xl">
              <AnimatedSection direction="up" className="max-w-2xl">
                <GoldSeam />
                <p className="eyebrow mt-5">{group.kicker}</p>
                <h2 className="section-heading mt-4 text-4xl md:text-5xl">
                  {group.category}
                </h2>
              </AnimatedSection>

              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {group.items.map((item, i) => (
                  <AnimatedSection key={item.title} direction="up" delay={i * 0.1}>
                    <ServiceCard icon={icons[i]} {...item} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 md:py-32 px-6 md:px-10 bg-obsidian text-center">
        <AnimatedSection direction="up" className="mx-auto max-w-2xl">
          <GoldSeam align="center" />
          <h2 className="section-heading mt-5">Not Sure Where to Start?</h2>
          <p className="body-copy mt-5">
            Tell us about your vehicle or aircraft and we&apos;ll recommend the
            right package for it.
          </p>
          <Link href="/contact" className="btn-gold mt-9 inline-flex">
            Request a Quote
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
