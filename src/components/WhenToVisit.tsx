import {
  Sun,
  Cloud,
  Droplets,
  Wind,
  Calendar,
  ThermometerSun,
} from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Badge } from "./ui/Badge";

const WhenToVisit = () => {
  const t = useTranslations();

  const seasons = [
    {
      icon: Sun,
      season: "Primavera (Marzo - Mayo)",
      temperature: "15-23°C",
      description:
        "Temporada ideal para senderismo y explorar la isla. Clima suave y agradable.",
      pros: [
        "Precios más bajos",
        "Menos turistas",
        "Naturaleza en flor",
        "Perfecto para hiking",
      ],
      cons: ["Agua del mar aún fría", "Algunos hoteles cerrados"],
      recommended: true,
      color: "green",
    },
    {
      icon: ThermometerSun,
      season: "Verano (Junio - Agosto)",
      temperature: "25-32°C",
      description:
        "Temporada alta. Playas perfectas, ambiente festivo, todos los servicios abiertos.",
      pros: [
        "Agua de mar cálida",
        "Todo abierto",
        "Vida nocturna",
        "Eventos y festivales",
      ],
      cons: ["Muy concurrido", "Precios altos", "Mucho calor en agosto"],
      recommended: false,
      color: "orange",
    },
    {
      icon: Sun,
      season: "Otoño (Septiembre - Noviembre)",
      temperature: "18-26°C",
      description:
        "Mejor momento para visitarMallorca. Clima perfecto, menos gente, precios moderados.",
      pros: [
        "Clima ideal",
        "Agua aún cálida",
        "Menos turistas",
        "Precios moderados",
      ],
      cons: ["Algunos servicios cierran en noviembre", "Posibles lluvias"],
      recommended: true,
      color: "amber",
    },
    {
      icon: Cloud,
      season: "Invierno (Diciembre - Febrero)",
      temperature: "8-16°C",
      description:
        "Temporada baja. Ideal para conocer la Mallorca auténtica y disfrutar de tranquilidad.",
      pros: [
        "Precios muy bajos",
        "Mallorca auténtica",
        "Perfecto para ciclismo",
        "Sin aglomeraciones",
      ],
      cons: [
        "Muchos servicios cerrados",
        "Playas no recomendables",
        "Clima impredecible",
      ],
      recommended: false,
      color: "blue",
    },
  ];

  const bestMonths = [
    {
      month: "Mayo",
      rating: 5,
      reason: "Clima perfecto, precios buenos, todo empieza a abrir",
    },
    {
      month: "Junio",
      rating: 5,
      reason: "Inicio del verano, agua cálida, menos gente que julio/agosto",
    },
    {
      month: "Septiembre",
      rating: 5,
      reason: "El mejor mes: clima ideal, agua cálida, menos turistas",
    },
    {
      month: "Octubre",
      rating: 4,
      reason: "Aún buen clima, precios razonables, tranquilo",
    },
  ];

  return (
    <section
      id="when-to-visit"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-blue-600 mr-2" />
            <Sun className="h-8 w-8 text-yellow-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Cuándo Visitar Mallorca
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clima y temporada: Guía completa para elegir la mejor época para tu
            viaje
          </p>
        </div>

        {/* Best Time Alert */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-900">
                <Sun className="h-6 w-6 mr-2 text-green-600" />
                Mejor Época para Visitar Mallorca
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-900 font-semibold mb-3">
                🌟 Mayo, Junio, Septiembre y Octubre son los meses ideales
              </p>
              <p className="text-green-800 text-sm">
                Combina buen clima, precios razonables y menos turistas.
                Septiembre es considerado el mejor mes del año para visitar la
                isla.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Seasons */}
        <div className="max-w-7xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Clima por Temporada
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasons.map((season, idx) => {
              const Icon = season.icon;
              return (
                <Card
                  key={idx}
                  className={`hover:shadow-xl transition-all duration-300 ${season.recommended ? "ring-2 ring-green-500" : ""}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div
                          className={`p-3 bg-${season.color}-100 rounded-full mr-3`}
                        >
                          <Icon
                            className={`h-6 w-6 text-${season.color}-600`}
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {season.season}
                          </CardTitle>
                          <div className="flex items-center mt-1">
                            <ThermometerSun className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm text-gray-600">
                              {season.temperature}
                            </span>
                          </div>
                        </div>
                      </div>
                      {season.recommended && (
                        <Badge className="bg-green-600">Recomendado</Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">
                      {season.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Pros */}
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">
                          ✓ Ventajas:
                        </h4>
                        <ul className="space-y-1">
                          {season.pros.map((pro, pIdx) => (
                            <li key={pIdx} className="text-xs text-gray-700">
                              • {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Cons */}
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2 text-sm">
                          ✗ Desventajas:
                        </h4>
                        <ul className="space-y-1">
                          {season.cons.map((con, cIdx) => (
                            <li key={cIdx} className="text-xs text-gray-700">
                              • {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Best Months */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meses Recomendados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestMonths.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{item.month}</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Sun
                          key={i}
                          className={`h-4 w-4 ${i < item.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{item.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weather Tips */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-900">
                <Droplets className="h-6 w-6 mr-2 text-blue-600" />
                Consejos sobre el Clima
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-900">
                <div>
                  <h4 className="font-semibold mb-2">☀️ Verano (Jun-Ago)</h4>
                  <p>
                    Mucho sol y calor. Lleva protección solar, gorra y agua.
                    Evita las horas centrales del día si planeas hacer
                    senderismo.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🌧️ Otoño/Invierno</h4>
                  <p>
                    Posibles lluvias, especialmente en octubre y noviembre. Trae
                    chaqueta ligera y calzado cómodo resistente al agua.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    🌊 Temperatura del Agua
                  </h4>
                  <p>
                    Junio-Octubre: 21-26°C (ideal). Mayo: 18-20°C (fresca).
                    Nov-Abril: 14-17°C (fría).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">💨 Viento</h4>
                  <p>
                    La Tramuntana puede traer vientos fuertes en invierno. Ideal
                    para surfistas y kitesurfers en la costa norte.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Link back to main guide */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600">
            ← Volver a la{" "}
            <a
              href="/mallorca"
              className="text-blue-600 hover:underline font-semibold"
            >
              Guía de Mallorca
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhenToVisit;
