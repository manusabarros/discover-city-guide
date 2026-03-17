import { Home, Camera, UtensilsCrossed, Church } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Badge } from "./ui/Badge";

const CharmingTowns = () => {
  const t = useTranslations();

  const towns = [
    {
      name: "Valldemossa",
      image:
        "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/s6yn7i00_image.png",
      description:
        "Pueblo de piedra en la Serra de Tramuntana, famoso por su Cartuja donde vivió Chopin.",
      highlights: [
        "Real Cartuja de Valldemossa",
        "Casas de piedra con flores",
        "Vistas panorámicas de montañas",
        "Coca de patata (dulce típico)",
      ],
      gastronomy: [
        "Coca de patata",
        "Tumbet mallorquín",
        "Ensaimadas artesanales",
      ],
      icon: Church,
    },
    {
      name: "Sóller",
      image:
        "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/fo82eia7_image.png",
      description:
        "Valle de naranjos con arquitectura modernista y tren histórico desde 1912.",
      highlights: [
        "Tren de Sóller (histórico de madera)",
        "Tranvía al Puerto de Sóller",
        "Plaza del Mercado con terrazas",
        "Arquitectura modernista",
      ],
      gastronomy: [
        "Naranjas de Sóller (IGP)",
        "Helados artesanales Sa Fàbrica",
        "Sobrasada de Sóller",
      ],
      icon: Home,
    },
    {
      name: "Alcúdia",
      image:
        "https://images.unsplash.com/photo-1647002098677-a58033a2ae61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxhbGN1ZGlhJTIwbWFsbG9yY2ElMjBvbGQlMjB0b3dufGVufDB8fHx8MTc3MzA1ODE1OHww&ixlib=rb-4.1.0&q=85",
      description:
        "Ciudad medieval amurallada con mercado tradicional y yacimientos romanos.",
      highlights: [
        "Murallas medievales (s. XIV)",
        "Teatro romano de Pollentia",
        "Mercado local (martes y domingo)",
        "Puerto deportivo",
      ],
      gastronomy: [
        "Pescado fresco del puerto",
        "Empanadas mallorquinas",
        "Mejillones de Alcúdia",
      ],
      icon: Camera,
    },
  ];

  return (
    <section id="charming-towns" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Home className="h-8 w-8 text-amber-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.charmingTowns?.title || "Pueblos con Encanto"} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* {t.charmingTowns?.subtitle ||
              "Arquitectura, historia y gastronomía auténtica en cada rincón"} */}
          </p>
        </div>

        {/* Towns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {towns.map((town, idx) => {
            const Icon = town.icon;
            return (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={town.image}
                    alt={town.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center mb-2">
                      <Icon className="h-6 w-6 text-white mr-2" />
                      <h3 className="text-3xl font-bold text-white">
                        {town.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardDescription className="text-base text-gray-700">
                    {town.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Camera className="h-4 w-4 mr-2 text-blue-600" />
                      Qué ver:
                    </h4>
                    <ul className="space-y-2">
                      {town.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-sm text-gray-700 flex items-start"
                        >
                          <span className="mr-2 text-blue-600">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gastronomy */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <UtensilsCrossed className="h-4 w-4 mr-2 text-orange-600" />
                      Gastronomía local:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {town.gastronomy.map((food, fIdx) => (
                        <Badge key={fIdx} variant="outline" className="text-xs">
                          {food}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-12 text-center bg-amber-50 rounded-2xl p-8 max-w-4xl mx-auto border border-amber-100">
          <p className="text-lg text-gray-800 mb-4">
            <span className="font-semibold">📸 Consejo fotográfico:</span>{" "}
            Visita estos pueblos por la mañana temprano o al atardecer para
            capturar la mejor luz y evitar las aglomeraciones.
          </p>
          <p className="text-base text-gray-600">
            Cada pueblo tiene su propio mercado local donde encontrarás
            productos artesanales y gastronomía tradicional. ¡No te los pierdas!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharmingTowns;
