"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import GoldSeam from "./GoldSeam";

export default function ContactCTA() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 bg-obsidian overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/60" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimatedSection direction="up">
          <GoldSeam align="center" />
          <p className="eyebrow mt-5">Reserve Your Appointment</p>
          <h2 className="section-heading mt-4">
            Experience the Signature Standard
          </h2>
          <p className="body-copy mt-6 max-w-xl mx-auto">
            A limited number of appointments are available each week to
            preserve the quality of every detail. Reach out today to secure
            your place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold w-full sm:w-auto">
              Request a Quote
            </Link>
            <a href="tel:+15147069774" className="btn-outline w-full sm:w-auto">
              (514) 706-9774
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
