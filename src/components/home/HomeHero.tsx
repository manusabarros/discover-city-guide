"use client";

import { ChangeEventHandler, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Search, Globe2, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useTranslations } from "next-intl";
import destinations from "@/data/destinations";

const HomeHero = () => {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Filter destinations based on search term (case insensitive)
  const filteredDestinations = searchTerm.trim()
    ? Object.entries(destinations).filter(([destination]) =>
        destination.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  // Handle search input change
  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowResults(value.trim().length > 0);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    setShowResults(false);
  };

  // Close search results when clicking outside
  const handleBlur = () => {
    // Delay to allow click on result to register
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1610987067555-2947ed187d8b?w=1920&h=1080&fit=crop"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-purple-900/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Search bar at top with results */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
            <Input
              type="text"
              placeholder={t("hero.searchPlaceholder")}
              className="w-full pl-12 pr-12 py-6 text-lg rounded-full border-2 border-white/30 bg-white/95 backdrop-blur-sm focus:border-white shadow-2xl"
              value={searchTerm}
              onChange={handleSearchChange}
              onBlur={handleBlur}
              onFocus={() => searchTerm.trim() && setShowResults(true)}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* Search Results Dropdown */}
            {showResults && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl max-h-96 overflow-y-auto z-50">
                {filteredDestinations.length > 0 ? (
                  <div className="p-2">
                    {filteredDestinations.map(([destination, data]) => (
                      <Link
                        key={destination}
                        href={`/espana/${destination}`}
                        className="flex items-start gap-4 p-3 hover:bg-blue-50 rounded-xl transition-colors"
                        onClick={clearSearch}
                      >
                        <img
                          src={data.image}
                          alt={destination}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-base">
                            {t(`${destination}.name`)}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {t(`${destination}.region`)},{" "}
                            {t(`${destination}.country`)}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1 mt-1">
                            {t(`${destination}.description`)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-gray-500 text-base">
                      {t("hero.noDestinationsTitle")}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {t("hero.noDestinationsSubtitle")}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main hero content */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe2 className="w-4 h-4" />
            {t("hero.badge")}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {t("hero.title")}
          </h1>

          <p className="text-lg sm:text-xl text-white/95 mb-4 leading-relaxed drop-shadow-md">
            {t("hero.subtitle")}
          </p>

          <p className="text-base text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/espana">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all bg-white text-blue-600 hover:bg-blue-50"
              >
                {t("hero.primaryCTA")}
              </Button>
            </Link>
            <a
              href="https://www.booking.com/index.es.html?aid=YOUR_AFFILIATE_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                {t("hero.secondaryCTA")}
              </Button>
            </a>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-sm text-white/80">
              {t("hero.destinations")}
            </div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">300+</div>
            <div className="text-sm text-white/80">
              {t("hero.verifiedHotels")}
            </div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-sm text-white/80">
              {t("hero.uniqueExperiences")}
            </div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">100k+</div>
            <div className="text-sm text-white/80">
              {t("hero.happyTravelers")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
