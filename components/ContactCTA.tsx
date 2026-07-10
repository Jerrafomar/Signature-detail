"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import GoldSeam from "./GoldSeam";

export default function ContactCTA() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 bg-obsidian overflow-hidden">
      <Image
        src="/images/gallery/lamborghini-urus-rear.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        quality={70}
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/60" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimatedSection direction="up">
          <GoldSeam align="center" />
          <p className="eyebrow mt-5">Reserve Your Appointment</p>
          <h2 className="section-heading mt-4">
            Ready to Bring Your Vehicle Back to Life?
          </h2>
          <p className="body-copy mt-6 max-w-xl mx-auto">
            Your vehicle deserves professional care. Request your
            appointment today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold w-full sm:w-auto">
              Book Now
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
