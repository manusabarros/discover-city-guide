import { Car, Home, Plane, ExternalLink, Info } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";

const bookingLinks: any = {};

const PracticalInfo = () => {
  const t = useTranslations();

  return (
    <section id="practical" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Info className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.practical.title} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* {t.practical.subtitle} */}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Car Rental */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Car className="h-6 w-6 text-blue-600 mr-3" />
                <CardTitle className="text-2xl">
                  {/* {t.practical.carRental.title} */}
                </CardTitle>
              </div>
              <CardDescription className="text-base">
                {/* {t.practical.carRental.description} */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Consejo:</span>{" "}
                {/* {t.practical.carRental.tip} */}
              </p>
              <div className="flex flex-wrap gap-3">
                {bookingLinks.carRental.map((link: any, idx: any) => (
                  <Button
                    key={idx}
                    variant="outline"
                    onClick={() => window.open(link.url, "_blank")}
                    className="flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Transport */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Plane className="h-6 w-6 text-blue-600 mr-3" />
                <CardTitle className="text-2xl">
                  {/* {t.practical.transport.title} */}
                </CardTitle>
              </div>
              <CardDescription className="text-base">
                {/* {t.practical.transport.description} */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {bookingLinks.flights.map((link: any, idx: any) => (
                  <Button
                    key={idx}
                    variant="outline"
                    onClick={() => window.open(link.url, "_blank")}
                    className="flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Booking Hotels */}
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {/* {t.practical.booking.title} */}
              </CardTitle>
              <CardDescription className="text-base text-gray-700">
                {/* {t.practical.booking.description} */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {bookingLinks.hotels.map((link: any, idx: any) => (
                  <Button
                    key={idx}
                    onClick={() => window.open(link.url, "_blank")}
                    className="flex items-center bg-blue-600 hover:bg-blue-700"
                  >
                    {link.name}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
