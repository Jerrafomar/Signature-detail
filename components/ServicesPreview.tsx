"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Droplets, ShieldHalf, Layers, Cog } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GoldSeam from "./GoldSeam";

const preview = [
  { icon: Droplets, title: "Interior Deep Cleaning" },
  { icon: Sparkles, title: "Exterior Wash" },
  { icon: ShieldHalf, title: "Paint Protection" },
  { icon: Layers, title: "Leather Treatment" },
  { icon: Cog, title: "Ceramic Coating" },
];

export default function ServicesPreview() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-charcoal/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <AnimatedSection direction="right">
            <GoldSeam />
            <p className="eyebrow mt-5">Our Craft</p>
            <h2 className="section-heading mt-4">Services, Refined</h2>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest2 text-gold hover:text-gold-bright transition-colors duration-300 group"
            >
              View All Services
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {preview.map((s, i) => (
            <AnimatedSection key={s.title} direction="up" delay={i * 0.08}>
              <div className="card-luxury p-6 md:p-8 h-full flex flex-col items-start gap-5 group">
                <s.icon
                  size={26}
                  strokeWidth={1.25}
                  className="text-gold transition-transform duration-500 ease-luxury group-hover:scale-110"
                />
                <p className="font-body text-sm md:text-base text-ivory font-medium leading-snug">
                  {s.title}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
