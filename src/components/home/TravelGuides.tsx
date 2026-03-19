import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "../ui/Card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import destinations from "@/data/destinations";

const cities = ["roma", "barcelona", "paris", "lisboa", "mallorca", "madrid"];

const TravelGuides = () => {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("travelGuides.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("travelGuides.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cities.map((city) => (
            <Link key={city} href={`/${city}`} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destinations[city].image}
                    alt={city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">
                    {t(`travelGuides.${destinations[city].travelGuides.type}`, {
                      city: t(`${city}.name`),
                      days: destinations[city].travelGuides.days || "",
                    })}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 transition-all">
                    {t("travelGuides.readFullGuide")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;
