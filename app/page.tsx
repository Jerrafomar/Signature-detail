import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ServicesPreview from "@/components/ServicesPreview";
import AircraftSection from "@/components/AircraftSection";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <ServicesPreview />
      <AircraftSection />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
