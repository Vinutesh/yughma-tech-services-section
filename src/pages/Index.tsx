import { useState } from "react";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PinnedImageSection from "@/components/PinnedImageSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WorkSection, { Category } from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundWrapper from "@/components/BackgroundWrapper";

const Index = () => {
  const [openWorkCategory, setOpenWorkCategory] = useState<Category | null>(null);

  return (
    <BackgroundWrapper>
      <Navigation />

      <main>
        <HeroSection />
        <PinnedImageSection />
        <AboutSection />

        <ServicesSection onExploreWork={(category) => setOpenWorkCategory(category)} />

        <WorkSection
          openCategory={openWorkCategory}
          onCategoryOpened={() => setOpenWorkCategory(null)}
        />

        <ContactSection />
      </main>

      <Footer />
    </BackgroundWrapper>
  );
};

export default Index;
