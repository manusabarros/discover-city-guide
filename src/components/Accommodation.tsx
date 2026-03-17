import { MapPin, Star, Bed, ExternalLink, DollarSign } from "lucide-react";
// import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";

const Accommodation = () => {
  // const t = useTranslations();

  const zones = [
    {
      name: "Casco Antiguo (La Lonja – Catedral)",
      description: "La mejor zona para quienes visitan Palma por primera vez.",
      advantages: [
        "Cerca de la catedral",
        "Calles históricas",
        "Restaurantes y bares",
        "Todo se puede recorrer caminando",
      ],
      hotels: [
        {
          name: "Hotel Saratoga",
          features: [
            "Rooftop con piscina",
            "Cerca del paseo marítimo",
            "Buena relación calidad-precio",
          ],
          rating: 4.5,
          category: "premium",
        },
        {
          name: "Sant Francesc Hotel Singular",
          features: [
            "Palacio histórico",
            "Rooftop con piscina",
            "Arquitectura única",
          ],
          rating: 5,
          category: "luxury",
        },
        {
          name: "Hotel Cappuccino",
          features: ["Plaza Cort", "Diseño moderno", "Excelente restaurante"],
          rating: 4.5,
          category: "premium",
        },
      ],
    },
    {
      name: "Santa Catalina",
      description: "Zona moderna con muchos restaurantes y bares.",
      advantages: [
        "Viajeros jóvenes",
        "Ambiente nocturno",
        "Gastronomía local",
        "Mercado de Santa Catalina",
      ],
      hotels: [
        {
          name: "Hotel Continental Palma",
          features: [
            "Ubicación céntrica",
            "Ambiente moderno",
            "Terraza rooftop",
          ],
          rating: 4,
          category: "midrange",
        },
        {
          name: "Bordoy Continental",
          features: [
            "Diseño boutique",
            "Cerca del mercado",
            "Habitaciones amplias",
          ],
          rating: 4,
          category: "midrange",
        },
      ],
    },
    {
      name: "Portixol / El Molinar",
      description: "Zona tranquila frente al mar.",
      advantages: [
        "Paseo marítimo",
        "Ambiente relajado",
        "Restaurantes frente al mar",
        "Ideal para correr o caminar",
      ],
      hotels: [
        {
          name: "Portixol Hotel",
          features: ["Vista al mar", "Diseño mediterráneo", "Piscina exterior"],
          rating: 4.5,
          category: "premium",
        },
        {
          name: "HM Balanguera Beach",
          features: ["Primera línea de mar", "Piscina", "Ambiente tranquilo"],
          rating: 4,
          category: "midrange",
        },
      ],
    },
  ];

  const budgetHotels = [
    {
      name: "Hotel Abelux",
      description: "Hotel sencillo con buena relación calidad-precio.",
      features: [
        "Habitaciones amplias",
        "Precio accesible",
        "Ubicación céntrica",
      ],
      rating: 3.5,
    },
    {
      name: "Brick Palma",
      description: "Hotel moderno tipo hostel boutique.",
      features: [
        "Ideal para viajeros jóvenes",
        "Estancias cortas",
        "Zonas comunes",
      ],
      rating: 4,
    },
    {
      name: "Hotel Amic Horizonte",
      description: "Hotel económico con vista al mar.",
      features: ["Piscina", "Precio competitivo", "Cerca de la playa"],
      rating: 3.5,
    },
  ];

  return (
    <section id="accommodation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Bed className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Dónde Alojarse en Palma de Mallorca
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guía completa de las mejores zonas y hoteles para tu estancia
          </p>
        </div>

        {/* Zones */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Las Mejores Zonas
          </h3>
          <div className="space-y-8">
            {zones.map((zone, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                    {zone.name}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {zone.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* Advantages */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Ideal para:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {zone.advantages.map((adv, aIdx) => (
                        <Badge key={aIdx} variant="secondary">
                          {adv}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Hotels */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Hoteles recomendados:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {zone.hotels.map((hotel, hIdx) => (
                        <div
                          key={hIdx}
                          className="border rounded-lg p-4 hover:border-blue-300 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">
                              {hotel.name}
                            </h5>
                            <div className="flex items-center text-yellow-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-sm ml-1">
                                {hotel.rating}
                              </span>
                            </div>
                          </div>
                          <ul className="space-y-1 mb-4">
                            {hotel.features.map((feature, fIdx) => (
                              <li key={fIdx} className="text-xs text-gray-600">
                                • {feature}
                              </li>
                            ))}
                          </ul>
                          <Button
                            size="sm"
                            className="w-full"
                            variant="outline"
                            onClick={() =>
                              window.open(
                                "https://www.booking.com/?aid=PROVISIONAL",
                                "_blank",
                              )
                            }
                          >
                            Ver en Booking
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 text-center">
                    <Button
                      onClick={() =>
                        window.open(
                          "https://www.booking.com/?aid=PROVISIONAL",
                          "_blank",
                        )
                      }
                    >
                      Ver todos los hoteles en {zone.name.split("(")[0]}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Budget Hotels */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="text-center mb-8">
              <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Hoteles Económicos en Palma
              </h3>
              <p className="text-gray-600">
                Opciones de calidad con precios accesibles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {budgetHotels.map((hotel, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{hotel.name}</CardTitle>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm ml-1">{hotel.rating}</span>
                      </div>
                    </div>
                    <CardDescription>{hotel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {hotel.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-gray-700">
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="sm"
                      className="w-full"
                      variant="outline"
                      onClick={() =>
                        window.open(
                          "https://www.booking.com/?aid=PROVISIONAL",
                          "_blank",
                        )
                      }
                    >
                      Ver disponibilidad
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.booking.com/?aid=PROVISIONAL",
                    "_blank",
                  )
                }
              >
                Ver todos los hoteles económicos
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Affiliate Note */}
        <div className="text-center text-sm text-gray-500 max-w-2xl mx-auto mt-12">
          <p>
            ℹ️ Enlaces de afiliado de Booking.com. Al reservar a través de estos
            enlaces, nos ayudas a mantener esta guía sin coste adicional para
            ti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
