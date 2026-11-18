import LandingHero from "../components/landing/LandingHero";
import { FinderProvider } from "../components/landing/FinderContext";
import PropertyFinder from "../components/landing/PropertyFinder";
import BrowseByRequirement from "../components/landing/BrowseByRequirement";
import FeaturedProperties from "../components/landing/FeaturedProperties";
import WhyChoose from "../components/landing/WhyChoose";
import HowItWorks from "../components/landing/HowItWorks";
import Localities from "../components/landing/Localities";
import TrustSection from "../components/landing/TrustSection";
import AboutSection from "../components/landing/AboutSection";
import EnquirySection from "../components/landing/EnquirySection";
import { PROJECTS } from "../data/landing";

export default function Home() {
  return (
    <div className="flex w-full flex-col font-body">
      <LandingHero featured={PROJECTS[0]} />
      <FinderProvider>
        <PropertyFinder />
        <BrowseByRequirement />
        <FeaturedProperties />
      </FinderProvider>
      <WhyChoose />
      <HowItWorks />
      <Localities />
      <TrustSection />
      <AboutSection />
      <EnquirySection />
    </div>
  );
}