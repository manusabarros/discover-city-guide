import HomeHero from "@/components/home/HomeHero";
import PopularDestinations from "@/components/home/PopularDestionations";
import TopHotels from "@/components/home/TopHotels";
import TopExperiences from "@/components/home/TopExperiencies";
import TravelGuides from "@/components/home/TravelGuides";
import AppPromotion from "@/components/home/AppPromotion";
import Philosophy from "@/components/home/Philosophy";
import Principles from "@/components/home/Principles";
import ClosingCTA from "@/components/home/ClosingCTA";

const Homepage = () => {
  const closingCTA = {
    title: "t.home.closingTitle",
    description: "t.home.closingDescription",
    cta: "t.home.closingCta",
  };

  return (
    <div className="homepage">
      <HomeHero />
      <PopularDestinations />
      <TopHotels />
      <TopExperiences />
      <TravelGuides />
      <AppPromotion />
      <Philosophy />
      <Principles />
      <ClosingCTA />
    </div>
  );
};

export default Homepage;
