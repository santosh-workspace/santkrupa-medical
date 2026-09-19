import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="mt-8 lg:mt-4">
        <TrustBar />
      </div>
      <ProductCategories />
      <WhyChooseUs />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
