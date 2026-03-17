import HomeHero from "@/components/home/HomeHero";
import PopularDestinations from "@/components/home/PopularDestionations";
import TopHotels from "@/components/home/TopHotels";
import TopExperiences from "@/components/home/TopExperiencies";
import TravelGuides from "@/components/home/TravelGuides";
import AppPromotion from "@/components/home/AppPromotion";
import Philosophy from "@/components/home/Philosophy";
import Principles from "@/components/home/Principles";
import ClosingCTA from "@/components/home/ClosingCTA";
import { useTranslations } from "next-intl";
import { travelGuides } from "@/data/home";

const Homepage = () => {
  const t = useTranslations();

  const philosophyData = {
    title: "t.home.philosophyTitle",
    description: "t.home.philosophyDescription",
  };

  const principlesData = [
    {
      icon: "🌍",
      title: "t.home.principle1Title",
      description: "t.home.principle1Description",
    },
    {
      icon: "🔎",
      title: "t.home.principle2Title",
      description: "t.home.principle2Description",
    },
    {
      icon: "🧭",
      title: "t.home.principle3Title",
      description: "t.home.principle3Description",
    },
    {
      icon: "🤝",
      title: "t.home.principle4Title",
      description: "t.home.principle4Description",
    },
  ];

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
      <TravelGuides guides={travelGuides} />
      <AppPromotion />
      <Philosophy data={philosophyData} />
      <Principles principles={principlesData} />
      <ClosingCTA data={closingCTA} />
    </div>
  );
};

export default Homepage;
