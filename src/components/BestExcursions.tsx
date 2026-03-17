import { Mountain, Camera, Music, Waves, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";

const BestExcursions = () => {
  const t = useTranslations();

  const excursions = [
    {
      icon: Mountain,
      title: "Excursión Serra de Tramuntana",
      description:
        "Ruta por pueblos de montaña y miradores. Patrimonio de la UNESCO con paisajes espectaculares.",
      highlights: [
        "Valldemossa - pueblo de piedra histórico",
        "Deià - vistas al Mediterráneo",
        "Sóller - valle de naranjos",
        "Miradores panorámicos",
      ],
      price: "Desde 50€",
      affiliateLink:
        "https://www.getyourguide.com/mallorca-l1163/?partner_id=PROVISIONAL",
    },
    {
      icon: Camera,
      title: "Excursión Cap de Formentor",
      description:
        "Una de las excursiones más populares de Mallorca. Paisajes impresionantes del norte de la isla.",
      highlights: [
        "Miradores con vistas espectaculares",
        "Playa de Formentor",
        "Pueblos del norte",
        "Faro de Formentor",
      ],
      price: "50-60€",
      affiliateLink:
        "https://www.getyourguide.com/mallorca-l1163/?partner_id=PROVISIONAL",
    },
    {
      icon: Music,
      title: "Cuevas del Drach",
      description:
        "Cuevas naturales con lago subterráneo y conciertos de música clásica. Muy popular entre turistas.",
      highlights: [
        "Lago Martel - lago subterráneo",
        "Concierto de música clásica",
        "Formaciones de estalactitas",
        "Paseo en barca",
      ],
      price: "Desde 35€",
      affiliateLink:
        "https://www.getyourguide.com/mallorca-l1163/?partner_id=PROVISIONAL",
    },
    {
      icon: Waves,
      title: "Excursión en barco por la costa",
      description:
        "Descubre calas escondidas y aguas turquesa desde el mar. Incluye snorkel y paradas para nadar.",
      highlights: [
        "Snorkel en aguas cristalinas",
        "Calas escondidas",
        "Aguas turquesa",
        "Comida a bordo",
      ],
      price: "Desde 45€",
      affiliateLink:
        "https://www.getyourguide.com/mallorca-l1163/?partner_id=PROVISIONAL",
    },
  ];

  return (
    <section id="best-excursions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.bestExcursions?.title || "Mejores Excursiones en Mallorca"} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* {t.bestExcursions?.subtitle ||
              "Tours y actividades imprescindibles para descubrir la isla"} */}
          </p>
        </div>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {excursions.map((excursion, idx) => {
            const Icon = excursion.icon;
            return (
              <Card
                key={idx}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-lg font-bold text-blue-600">
                      {excursion.price}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    {excursion.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {excursion.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Incluye:
                    </h4>
                    <ul className="space-y-2">
                      {excursion.highlights.map((highlight, hIdx) => (
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

                  {/* CTA Button */}
                  <Button
                    className="w-full"
                    onClick={() =>
                      window.open(excursion.affiliateLink, "_blank")
                    }
                  >
                    Reservar excursión
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Affiliate Disclaimer */}
        <div className="text-center text-sm text-gray-500 max-w-2xl mx-auto mt-12">
          <p>
            ℹ️ Los enlaces son de afiliado. Reservando a través de ellos, nos
            ayudas a mantener esta guía actualizada sin coste adicional para ti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestExcursions;
