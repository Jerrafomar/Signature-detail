"use client";

import { Target, ShieldCheck, Gem } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GoldSeam from "./GoldSeam";

const pillars = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every pass, every product, every step follows a disciplined process refined for exceptional machines.",
  },
  {
    icon: ShieldCheck,
    title: "Professionalism",
    description:
      "Fully insured, discreet, and punctual — treating your property and your time with genuine respect.",
  },
  {
    icon: Gem,
    title: "Premium Results",
    description:
      "A finish that reflects the standard your vehicle or aircraft was built to. Nothing less.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-obsidian">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto">
          <GoldSeam align="center" />
          <p className="eyebrow mt-5">The Standard</p>
          <h2 className="section-heading mt-4">Why Choose Signature Detail</h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} direction="up" delay={i * 0.15}>
              <div className="card-luxury p-10 h-full group">
                <pillar.icon
                  size={30}
                  strokeWidth={1.25}
                  className="text-gold transition-transform duration-500 ease-luxury group-hover:-translate-y-1"
                />
                <h3 className="font-display text-2xl md:text-3xl text-ivory mt-6">
                  {pillar.title}
                </h3>
                <div className="divider-gold my-5" />
                <p className="body-copy text-sm md:text-base">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
