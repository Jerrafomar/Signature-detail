"use client";

import Link from "next/link";
import Image from "next/image";
import { Plane, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GoldSeam from "./GoldSeam";

const highlights = [
  "Complete Interior Cleaning",
  "Leather Care",
  "Glass Cleaning",
  "Surface Sanitization",
  "Executive Finish",
];

export default function AircraftSection() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-obsidian overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection direction="right" className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/aircraft/private-jet-cabin.jpg"
              alt="Luxury private jet cabin interior with cream leather seating and wood accents"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            <div className="absolute inset-0 border border-gold/20" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:flex h-28 w-28 items-center justify-center border border-gold/40 bg-obsidian/90 backdrop-blur">
            <Plane size={30} strokeWidth={1} className="text-gold" />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" className="order-1 lg:order-2">
          <GoldSeam />
          <p className="eyebrow mt-5">Above the Clouds</p>
          <h2 className="section-heading mt-4">Private Aircraft Detailing</h2>
          <p className="body-copy mt-6 max-w-lg">
            Cabins that carry your most valuable time deserve the same
            precision as the aircraft itself. Our aviation-grade detailing
            protocol restores every surface to a first-class standard,
            discreetly and on your schedule.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm md:text-base text-silver">
                <Check size={16} className="text-gold shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <Link href="/services" className="btn-outline mt-10 inline-flex">
            Explore Aircraft Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
