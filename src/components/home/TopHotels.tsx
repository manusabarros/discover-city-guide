import { Card, CardContent } from "../ui/Card";
import { Hotel } from "lucide-react";
import BookingButton from "../BookingButton";
import { useTranslations } from "next-intl";

const cities = ["barcelona", "roma", "paris", "lisboa", "madrid", "mallorca"];

const TopHotels = () => {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("topHotels.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t("topHotels.description")}
          </p>
          <BookingButton variant="primary">
            {t("topHotels.bookingButton")}
          </BookingButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cities.map((city) => (
            <Card
              key={city}
              className="hover:shadow-xl transition-all duration-300 h-full"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Hotel className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t("topHotels.bestHotelsIn")} {t(`${city}.name`)}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t(`${city}.hotels`)}
                    </p>
                  </div>
                </div>
                <BookingButton
                  city={city}
                  variant="outline"
                  className="w-full justify-center"
                >
                  {t("topHotels.bookingButton")}
                </BookingButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopHotels;
