import { UtensilsCrossed, Award, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";

const gastroImages = [
  "https://images.unsplash.com/photo-1653611540493-b3a896319fbf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwZm9vZHxlbnwwfHx8fDE3NzMwMDgzMDJ8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzZWFmb29kfGVufDB8fHx8MTc3MzAwODMwNXww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1650964807311-970cb88d347c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxwYWVsbGF8ZW58MHx8fHwxNzczMDA4MzA4fDA&ixlib=rb-4.1.0&q=85",
];

const Gastronomy = () => {
  const t = useTranslations();

  return (
    <section id="gastronomy" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <UtensilsCrossed className="h-8 w-8 text-orange-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.gastronomy.title} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            {/* {t.gastronomy.subtitle} */}
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            {/* {t.gastronomy.intro} */}
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {gastroImages.map((img, idx) => (
            <div
              key={idx}
              className="relative h-72 rounded-2xl overflow-hidden group"
            >
              <img
                src={img}
                alt={`Gastronomía ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Traditional Dishes */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Platos Tradicionales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {t.gastronomy.dishes.map((dish, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{dish.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{dish.description}</CardDescription>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </div>

        {/* Recommended Restaurants */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Restaurantes Recomendados
          </h3>
          <div className="space-y-6">
            {/* {t.gastronomy.restaurants.map((restaurant, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">
                        {restaurant.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mb-2">
                        {restaurant.location}
                      </p>
                      {restaurant.address && (
                        <div className="flex items-start gap-2 text-sm text-gray-600 mb-1">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{restaurant.address}</span>
                        </div>
                      )}
                      {restaurant.contact && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <a
                            href={`tel:${restaurant.contact}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {restaurant.contact}
                          </a>
                        </div>
                      )}
                    </div>
                    {restaurant.highlight.includes("Michelin") && (
                      <Award className="h-6 w-6 text-yellow-600 flex-shrink-0 ml-4" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2 font-medium">
                    {restaurant.type}
                  </p>
                  <p className="text-sm text-gray-600">
                    {restaurant.highlight}
                  </p>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
