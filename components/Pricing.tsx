"use client";

import { Car, Truck, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GoldSeam from "./GoldSeam";
import { pricingTiers } from "@/lib/data";

const icons = [Car, Truck];

const includedFeatures = [
  "Full interior vacuum & wipe-down",
  "Exterior hand wash & dry",
  "Wheels, tires & glass detailed",
];

export default function Pricing() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-obsidian">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto">
          <GoldSeam align="center" />
          <p className="eyebrow mt-5">Simple, Honest Pricing</p>
          <h2 className="section-heading mt-4">Interior &amp; Exterior Detailing</h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {pricingTiers.map((tier, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={tier.vehicleType} direction="up" delay={i * 0.15}>
                <div className="card-luxury p-8 md:p-10 h-full flex flex-col">
                  <Icon size={30} strokeWidth={1.25} className="text-gold" />
                  <h3 className="font-display text-2xl md:text-3xl text-ivory mt-6">
                    {tier.vehicleType}
                  </h3>
                  <div className="divider-gold my-5" />
                  <p className="font-body text-sm uppercase tracking-widest2 text-silver-dim">
                    Starting at
                  </p>
                  <p className="font-display text-4xl md:text-5xl text-gold mt-1">
                    {tier.startingPrice}
                  </p>
                  <ul className="mt-8 space-y-2.5 pt-6 border-t border-white/10">
                    {includedFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-xs md:text-sm text-silver"
                      >
                        <Check size={14} className="text-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-center text-xs md:text-sm text-silver-dim mt-10">
            Final pricing may vary depending on the vehicle&apos;s size and condition.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
