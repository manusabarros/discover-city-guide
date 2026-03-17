import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { MapPin, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import destinations from "@/data/destinations";

const PopularDestinations = () => {
  const t = useTranslations();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("popularDestinations.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("popularDestinations.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(destinations).map(([destination, data]) => (
            <Link key={destination} href={`/${destination}`} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={data.image}
                    alt={destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {t(`${destination}.country`)}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    {t(`${destination}.region`)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {t(`${destination}.name`)}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {t(`${destination}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {t(`${destination}.highlight1`)}
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {t(`${destination}.highlight2`)}
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {t(`${destination}.highlight3`)}
                    </span>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 transition-all">
                    {t("popularDestinations.explore")}{" "}
                    {t(`${destination}.name`)}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/espana">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full"
            >
              {t("popularDestinations.viewAllDestinations")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
