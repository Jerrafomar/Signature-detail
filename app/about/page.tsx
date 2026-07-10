import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GoldSeam from "@/components/GoldSeam";
import { coreValues } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Signature Detail",
  description:
    "Signature Detail is a premium detailing company based in Montreal specializing in luxury automotive detailing and private aircraft cabin detailing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Signature Detail"
        image="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-obsidian">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <AnimatedSection direction="right">
            <GoldSeam />
            <p className="eyebrow mt-5">Who We Are</p>
            <h2 className="section-heading mt-4 text-4xl md:text-5xl">
              Locally Owned, Quality Focused
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.1} className="space-y-6">
            <p className="body-copy">
              Signature Detail is a locally owned detailing business based in
              Montreal. We started this business because we care about cars
              — and because too many detailing services rush through
              vehicles just to move on to the next one.
            </p>
            <p className="body-copy">
              We&apos;d rather take on fewer vehicles and do the job right
              than book back-to-back appointments and cut corners. Every car
              that comes to us — whether it&apos;s a daily driver or a
              weekend car — gets the same careful attention.
            </p>
            <p className="body-copy">
              We&apos;re still growing, and every appointment matters to us.
              That&apos;s the reason we got into this in the first place.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-10 bg-charcoal/30 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto">
            <GoldSeam align="center" />
            <p className="eyebrow mt-5">What Guides Us</p>
            <h2 className="section-heading mt-4">Our Core Values</h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <AnimatedSection key={v.title} direction="up" delay={i * 0.12}>
                <div className="card-luxury p-8 h-full">
                  <span className="font-display italic text-4xl text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-ivory mt-4">
                    {v.title}
                  </h3>
                  <div className="divider-gold my-4" />
                  <p className="body-copy text-sm">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-10 bg-obsidian text-center">
        <AnimatedSection direction="up" className="mx-auto max-w-2xl">
          <GoldSeam align="center" />
          <h2 className="section-heading mt-5">
            Ready to Experience the Difference?
          </h2>
          <p className="body-copy mt-5">
            Let us bring first-class care to your vehicle or aircraft.
          </p>
          <Link href="/contact" className="btn-gold mt-9 inline-flex">
            Request a Quote
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
