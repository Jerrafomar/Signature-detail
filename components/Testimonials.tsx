"use client";

import AnimatedSection from "./AnimatedSection";
import GoldSeam from "./GoldSeam";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-charcoal/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto">
          <GoldSeam align="center" />
          <p className="eyebrow mt-5">In Their Words</p>
          <h2 className="section-heading mt-4">Client Testimonials</h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} direction="up" delay={i * 0.15}>
              <TestimonialCard {...t} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
