import { useState } from "react";
import {
  Activity,
  Clock,
  Users,
  Euro,
  MapPin,
  Check,
  Leaf,
  Sunrise,
  CreditCard,
} from "lucide-react";
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
import { Alert, AlertDescription } from "./ui/Alert";

const runningImage =
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxydW5uaW5nfGVufDB8fHx8MTc3MzAwODMxMnww&ixlib=rb-4.1.0&q=85";

const RunningTour = () => {
  const t = useTranslations();
  const [participants, setParticipants] = useState(1);
  // Calculate price based on group size
  const calculatePrice = (numPeople: number) => {
    if (numPeople === 1) return 29; // Launch price
    if (numPeople === 2) return 28;
    if (numPeople === 3) return 27;
    if (numPeople >= 4 && numPeople <= 6) return 25;
    return 35; // Normal price
  };

  const pricePerPerson = calculatePrice(participants);
  const totalPrice = pricePerPerson * participants;

  const pricingTiers = [
    { people: "1 persona", price: "29€", note: "Precio lanzamiento" },
    { people: "2 personas", price: "28€/persona", note: "" },
    { people: "3 personas", price: "27€/persona", note: "¡Descuento grupo!" },
    { people: "4-6 personas", price: "25€/persona", note: "¡Mejor precio!" },
  ];

  const tourHighlights = [
    "Catedral de Santa María (La Seu)",
    "Casco antiguo y barrio judío",
    "Paseo del Borne",
    "Castillo de Bellver (vista exterior)",
    "Palacio de la Almudaina",
    "Paseo Marítimo al amanecer",
  ];

  return (
    <section id="running-tour" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sunrise className="h-8 w-8 text-orange-500 mr-2" />
            <Activity className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.runningTour?.title || "Sunrise Running Tour Palma"} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            {/* {t.runningTour?.subtitle ||
              "Entrena mientras conoces la ciudad cuando aún duerme"} */}
          </p>
          <div className="flex items-center justify-center text-green-600 font-medium">
            <Leaf className="h-5 w-5 mr-2" />
            <span>
              Amigable con el medio ambiente • Haz ejercicio • Conoce locales
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            {/* Image */}
            <div className="relative h-80 rounded-2xl overflow-hidden mb-8 group">
              <img
                src={runningImage}
                alt="Sunrise Running Tour"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-orange-500 text-white">
                  <Sunrise className="h-4 w-4 mr-1" />
                  Amanecer
                </Badge>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {/* {t.runningTour?.description ||
                "Únete a nuestro Sunrise Running Tour y vive Palma de una forma única. Mientras la ciudad despierta, recorrerás sus monumentos más emblemáticos: desde la majestuosa Catedral de La Seu hasta el histórico barrio judío, pasando por el elegante Paseo del Borne. Descubre el Castillo de Bellver desde sus mejores ángulos y disfruta del amanecer sobre el Mediterráneo en el Paseo Marítimo. Un guía local apasionado te llevará por los secretos de Palma al ritmo que mejor se adapte al grupo."} */}
            </p>

            {/* Flexible Schedule Info */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Horarios Flexibles
                  </h4>
                  <p className="text-sm text-blue-800 mb-2">
                    <strong>Horario estándar:</strong> Lunes a Sábado a las
                    7:00h
                  </p>
                  <p className="text-sm text-blue-800">
                    ¿Prefieres salir más temprano o un poco más tarde? ¡No hay
                    problema! Adaptamos el horario a tus necesidades. El tour se
                    desarrolla al ritmo del corredor más lento, garantizando que
                    todos disfruten la experiencia.
                  </p>
                </div>
              </div>
            </div>

            {/* Eco-Friendly Message */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded-r-lg">
              <div className="flex items-start">
                <Leaf className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-1">
                    Compromiso Ambiental
                  </h4>
                  <p className="text-sm text-green-800">
                    Cero emisiones, máximo respeto por el entorno. Promovemos el
                    turismo sostenible y el cuidado de nuestra isla.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ¿Qué incluye?
              </h3>
              {/* {(
                t.runningTour?.features || [
                  "Recorrido de 8-10 km",
                  "Nivel: principiante a intermedio",
                  "Grupos reducidos (máx. 8 personas)",
                  "Incluye agua y foto de grupo",
                ]
              ).map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))} */}
            </div>

            {/* Highlights */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                Ruta del Tour
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Un recorrido completo por los monumentos y lugares más
                emblemáticos de Palma:
              </p>
              <ul className="space-y-3">
                {tourHighlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="mr-3 text-blue-600 font-semibold">
                      {idx + 1}.
                    </span>
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  💡 Combina historia, cultura, ejercicio y las mejores vistas
                  de la ciudad en un solo tour.
                </p>
              </div>
            </div>

            {/* Schedule */}
            <Card className="mb-8">
              <CardHeader className="pb-3">
                <div className="flex items-center text-blue-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <CardTitle className="text-lg">Horario</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold mb-2">
                  {/* {t.runningTour?.schedule || "Lunes a Sábado - 7:00h"} */}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  ⏱️ Duración aproximada: 1.5 - 2 horas
                </p>
                <p className="text-sm text-green-700 bg-green-50 p-2 rounded mt-2">
                  ✨ Horarios flexibles disponibles según tu preferencia
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Pricing & Coming Soon */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Precios y Reserva</CardTitle>
                <CardDescription>
                  Descuentos especiales para grupos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Coming Soon Alert */}
                <Alert className="mb-6 bg-yellow-50 border-yellow-200">
                  <AlertDescription className="text-yellow-800">
                    <span className="font-semibold">
                      🚀 Próximamente disponible
                    </span>
                    <br />
                    El sistema de reservas online estará activo pronto. Mientras
                    tanto, puedes contactarnos para reservar tu plaza.
                  </AlertDescription>
                </Alert>

                {/* Price Info */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6 border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Precio normal</p>
                      <p className="text-2xl font-bold text-gray-400 line-through">
                        35€
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-700 font-semibold">
                        🎉 Precio de lanzamiento
                      </p>
                      <p className="text-3xl font-bold text-green-700">29€</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    ¡Aprovecha el precio especial de lanzamiento!
                  </p>
                </div>

                {/* Pricing Tiers */}
                <h4 className="font-semibold text-gray-900 mb-3">
                  Descuentos por grupo:
                </h4>
                <div className="space-y-3 mb-6">
                  {pricingTiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {tier.people}
                        </p>
                        {tier.note && (
                          <p className="text-sm text-green-600">{tier.note}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">
                          {tier.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Group Discount Info */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">💡 Consejo:</span> Invita a
                    tus amigos y ahorrad todos. A partir de 3 personas, obtienes
                    descuento automático.
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Métodos de pago aceptados
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Aceptamos todas las tarjetas principales (no aceptamos
                    efectivo):
                  </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <div className="bg-white border rounded px-3 py-2 text-sm font-semibold text-gray-700">
                      💳 Visa
                    </div>
                    <div className="bg-white border rounded px-3 py-2 text-sm font-semibold text-gray-700">
                      💳 Mastercard
                    </div>
                    <div className="bg-white border rounded px-3 py-2 text-sm font-semibold text-gray-700">
                      💳 Amex
                    </div>
                    <div className="bg-white border rounded px-3 py-2 text-sm font-semibold text-gray-700">
                      💳 Discover
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    🔒 Pago 100% seguro procesado por Stripe
                  </p>
                </div>

                {/* Contact Button */}
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() =>
                    (window.location.href =
                      "mailto:info@mallorca-guide.com?subject=Reserva Sunrise Running Tour")
                  }
                >
                  Contactar para reservar
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  📧 Responderemos en menos de 24 horas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningTour;
