import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/Button";

const Hero = () => {
  const t = useTranslations();

  const scrollToItineraries = () => {
    const element = document.getElementById("itineraries");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1608538810980-d29299cfbd6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxtZWRpdGVycmFuZWFuJTIwY29hc3R8ZW58MHx8fHwxNzczMDA4Mjc3fDA&ixlib=rb-4.1.0&q=85"
          alt="Mallorca Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-white/90 text-sm font-medium">
            {/* ✨ {t.hero.tagline || "Descubre Mallorca como la viven los locales"} */}
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          {/* {t.hero.title} */}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light">
          {/* {t.hero.subtitle} */}
        </p>
        <Button
          onClick={scrollToItineraries}
          size="lg"
          className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-medium shadow-xl transition-all hover:scale-105"
        >
          {/* {t.hero.cta} */}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="h-8 w-8 text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
