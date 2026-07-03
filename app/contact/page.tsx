import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GoldSeam from "@/components/GoldSeam";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Signature Detail",
  description:
    "Request a quote from Signature Detail — Montreal's premium car and private aircraft detailing service.",
};

const details = [
  { icon: Mail, label: "Email", value: "info@signaturedetail.ca", href: "mailto:info@signaturedetail.ca" },
  { icon: Phone, label: "Phone", value: "(514) 706-9774", href: "tel:+15147069774" },
  { icon: MapPin, label: "Location", value: "Montreal, Quebec", href: undefined },
  { icon: Clock, label: "Hours", value: "By appointment, 7 days a week", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Tell us about your vehicle or aircraft and we'll be in touch to arrange your appointment."
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-obsidian">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-14">
          <AnimatedSection direction="right" className="lg:col-span-3">
            <GoldSeam />
            <p className="eyebrow mt-5">Request a Quote</p>
            <h2 className="section-heading mt-4 text-4xl md:text-5xl">
              Let&apos;s Get Started
            </h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1} className="lg:col-span-2">
            <div className="card-luxury p-8 md:p-10">
              <h3 className="font-display text-2xl text-ivory">
                Contact Details
              </h3>
              <div className="divider-gold my-5" />
              <ul className="space-y-6">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40">
                      <d.icon size={16} className="text-gold" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest2 text-silver-dim">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-sm text-ivory hover:text-gold transition-colors duration-300"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm text-ivory">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 relative aspect-[4/3] overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-charcoal flex flex-col items-center justify-center gap-3 text-silver-dim">
                <MapPin size={28} strokeWidth={1} className="text-gold" />
                <p className="text-xs uppercase tracking-widest2">
                  Map — Montreal, Quebec
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
