import { MapPin, Waves } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Badge } from "./ui/Badge";

const Beaches = () => {
  const t = useTranslations();

  return (
    <section id="beaches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Waves className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.beaches.title} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* {t.beaches.subtitle} */}
          </p>
        </div>

        {/* Beach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* {t.beaches.items.map((beach, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={beach.image}
                  alt={beach.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {beach.name}
                  </h3>
                  <div className="flex items-center text-white/90">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{beach.location}</span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-base text-gray-700">
                  {beach.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {beach.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Beaches;
