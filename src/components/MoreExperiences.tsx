import { Mountain, Wind, Compass, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

const MoreExperiences = () => {
  const t = useTranslations();

  const experiences = [
    {
      icon: Mountain,
      title: "Rutas de Hiking",
      description: "Explora la Serra de Tramuntana, Patrimonio de la UNESCO",
      highlights: [
        "GR-221: Ruta de Pedra en Sec",
        "Torrent de Pareis",
        "Puig de Massanella (1.365m)",
        "Camí de s'Arxiduc",
      ],
      difficulty: "Variado",
      season: "Todo el año",
      bookingLinks: [
        {
          name: "Viator",
          url: "https://www.viator.com/es-ES/Mallorca-tours/Hiking-Walking/d553-g6",
        },
        {
          name: "GetYourGuide",
          url: "https://www.getyourguide.com/mallorca-l1163/hiking-tc142/",
        },
      ],
    },
    {
      icon: Wind,
      title: "Globos Aerostáticos",
      description:
        "Sobrevuela la isla al amanecer para vistas panorámicas únicas",
      highlights: [
        "Vuelos al amanecer",
        "Duración: 1 hora",
        "Copa de cava incluida",
        "Certificado de vuelo",
      ],
      difficulty: "Fácil",
      season: "Abril - Octubre",
      bookingLinks: [
        { name: "Mallorca Balloons", url: "https://www.mallorcaballoons.com" },
        {
          name: "GetYourGuide",
          url: "https://www.getyourguide.com/mallorca-l1163/hot-air-balloon-tc89/",
        },
      ],
    },
    {
      icon: Compass,
      title: "Tours Locales",
      description: "Experiencias guiadas por expertos locales",
      highlights: [
        "Tours gastronómicos",
        "Visitas a bodegas",
        "Clases de cocina mallorquina",
        "Excursiones en barco",
      ],
      difficulty: "Todos los niveles",
      season: "Todo el año",
      bookingLinks: [
        {
          name: "Booking.com",
          url: "https://www.booking.com/experiences/city/es/palma-de-mallorca.html",
        },
        {
          name: "Viator",
          url: "https://www.viator.com/es-ES/Mallorca-tours/d553-ttd",
        },
        {
          name: "GetYourGuide",
          url: "https://www.getyourguide.com/mallorca-l1163/",
        },
      ],
    },
  ];

  return (
    <section
      id="more-experiences"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.moreExperiences?.title || "Más Experiencias"} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* {t.moreExperiences?.subtitle ||
              "Aventuras y actividades únicas en Mallorca"} */}
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <Card
                key={idx}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {exp.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Destacados:
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-sm text-gray-700 flex items-start"
                        >
                          <span className="mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline">{exp.difficulty}</Badge>
                    <Badge variant="outline">{exp.season}</Badge>
                  </div>

                  {/* Booking Links */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                      Reserva tu experiencia:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.bookingLinks.map((link, lIdx) => (
                        <Button
                          key={lIdx}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                          className="flex items-center text-xs"
                        >
                          {link.name}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Affiliate Disclaimer */}
        <div className="text-center text-sm text-gray-500 max-w-2xl mx-auto">
          <p>
            ℹ️ Los enlaces a plataformas de reserva pueden generar una pequeña
            comisión que nos ayuda a mantener esta guía actualizada, sin coste
            adicional para ti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreExperiences;
