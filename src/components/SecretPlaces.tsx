import { MapPin, Users, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Badge } from "./ui/Badge";

const SecretPlaces = () => {
  const t = useTranslations();

  const secretPlaces = [
    {
      name: "Cala Varques",
      location: "Manacor",
      description:
        "Cala virgen accesible solo a pie. Arena blanca, cuevas submarinas y aguas cristalinas.",
      type: "Playa",
      crowd: "Bajo",
    },
    {
      name: "Es Pontàs",
      location: "Santanyí",
      description:
        "Arco natural de piedra en el mar. Espectacular para fotografía al atardecer.",
      type: "Natural",
      crowd: "Medio",
    },
    {
      name: "Cala Torta",
      location: "Artà",
      description:
        "Playa salvaje en el norte, rodeada de dunas. Perfecta para desconectar.",
      type: "Playa",
      crowd: "Bajo",
    },
    {
      name: "Sa Foradada",
      location: "Deià",
      description:
        "Península rocosa con agujero natural. Restaurante familiar con vistas únicas.",
      type: "Natural",
      crowd: "Medio",
    },
    {
      name: "Cala Mesquida",
      location: "Capdepera",
      description:
        "Playa virgen protegida con dunas y pinos. Sistema dunar de gran valor ecológico.",
      type: "Playa",
      crowd: "Bajo",
    },
  ];

  return (
    <section id="secret-places" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.secretPlaces?.title || "Lugares Secretos"} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            {/* {t.secretPlaces?.subtitle ||
              "Rincones escondidos que solo conocen los locales"} */}
          </p>
          <p className="text-lg text-purple-600 font-medium">
            🌟{" "}
            {/* {t.secretPlaces?.tagline ||
              "Descubre Mallorca como la viven los locales"} */}
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {secretPlaces.map((place, idx) => (
            <Card
              key={idx}
              className="hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                      {place.name}
                    </CardTitle>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {place.location}
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {place.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {place.description}
                </CardDescription>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-600">
                    Afluencia:{" "}
                    <span className="font-medium text-gray-900">
                      {place.crowd}
                    </span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-purple-50 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            💡 <span className="font-semibold">Consejo local:</span> Visita
            estos lugares temprano en la mañana o al atardecer para disfrutarlos
            en su máximo esplendor y con menos gente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecretPlaces;
