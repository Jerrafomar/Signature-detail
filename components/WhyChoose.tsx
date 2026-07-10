"use client";

import { Sparkles, Crosshair, Car, CalendarClock, Wrench, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GoldSeam from "./GoldSeam";

const reasons = [
  {
    icon: Sparkles,
    title: "Premium Detailing Products",
    description:
      "We use professional-grade cleaners, coatings and leather care products — nothing off the shelf.",
  },
  {
    icon: Crosshair,
    title: "Attention to Every Detail",
    description:
      "From door jambs to vents, every surface is inspected and treated with the same care.",
  },
  {
    icon: Car,
    title: "Mobile Service Available",
    description:
      "We come to your home, office or garage in the greater Montreal area — no need to drive anywhere.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description:
      "Appointments that work around your schedule, including evenings and weekends.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    description:
      "Steam extraction, dual-action polishers and proper technique — not a bucket and a hose.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction Focused",
    description:
      "We'd rather do fewer vehicles and do them right than rush through a long list.",
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

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} direction="up" delay={i * 0.1}>
              <div className="card-luxury p-8 md:p-9 h-full group">
                <reason.icon
                  size={28}
                  strokeWidth={1.25}
                  className="text-gold transition-transform duration-500 ease-luxury group-hover:-translate-y-1"
                />
                <h3 className="font-display text-xl md:text-2xl text-ivory mt-6">
                  {reason.title}
                </h3>
                <div className="divider-gold my-4" />
                <p className="body-copy text-sm">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
