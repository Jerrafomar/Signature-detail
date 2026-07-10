import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ServicesPreview from "@/components/ServicesPreview";
import Pricing from "@/components/Pricing";
import AircraftSection from "@/components/AircraftSection";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <ServicesPreview />
      <Pricing />
      <AircraftSection />
      <ContactCTA />
    </>
  );
}
