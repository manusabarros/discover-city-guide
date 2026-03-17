import { useState } from "react";
import {
  Activity,
  Clock,
  Users,
  MapPin,
  Check,
  Leaf,
  Sunrise,
  CreditCard,
  Calendar as CalendarIcon,
  Tag,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { Calendar } from "./ui/Calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import { toast } from "sonner";

const runningImage =
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxydW5uaW5nfGVufDB8fHx8MTc3MzAwODMxMnww&ixlib=rb-4.1.0&q=85";

const RunningTour = () => {
  const t = useTranslations();
  const [tourType, setTourType] = useState("regular");
  const [participants, setParticipants] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();

  // Regular tour pricing (price per person)
  const regularPricing: {
    normalPrice: number;
    launchPrice: number;
    groupDiscounts: Record<number, number>;
  } = {
    normalPrice: 35,
    launchPrice: 29,
    groupDiscounts: {
      1: 29,
      2: 28,
      3: 27,
      4: 25,
      5: 25,
      6: 25,
    },
  };

  // Private tour pricing (price per group)
  const privateTourPricing: Record<
    number,
    { total: number; perPerson: number }
  > = {
    1: { total: 70, perPerson: 70 },
    2: { total: 80, perPerson: 40 },
    3: { total: 90, perPerson: 30 },
    4: { total: 100, perPerson: 25 },
    5: { total: 110, perPerson: 22 },
    6: { total: 120, perPerson: 20 },
  };

  const selectedRegularPrice = regularPricing.groupDiscounts[participants];
  const selectedPrivatePrice = privateTourPricing[participants];
  const privateSavings =
    participants > 1
      ? Math.round((70 - selectedPrivatePrice.perPerson) * participants)
      : 0;

  const tourHighlights = [
    "Catedral de Santa María (La Seu)",
    "Casco antiguo y barrio judío",
    "Paseo del Borne",
    "Castillo de Bellver (vista exterior)",
    "Palacio de la Almudaina",
    "Paseo Marítimo al amanecer",
  ];

  const handleReservation = () => {
    if (!selectedDate) {
      toast.error("Por favor selecciona una fecha");
      return;
    }

    // Provisional Stripe link
    const stripeLink = "https://buy.stripe.com/test_provisional_link";

    toast.success("Redirigiendo a pago seguro...");
    setTimeout(() => {
      window.open(stripeLink, "_blank");
    }, 1000);
  };

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
            Sunrise Running Tour Palma
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Entrena mientras conoces la ciudad cuando aún duerme
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
              Únete a nuestro Sunrise Running Tour y vive Palma de una forma
              única. Mientras la ciudad despierta, recorrerás sus monumentos más
              emblemáticos: desde la majestuosa Catedral de La Seu hasta el
              histórico barrio judío, pasando por el elegante Paseo del Borne.
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
                  <p className="text-sm text-blue-800 mb-1">
                    ¿Prefieres salir más temprano o un poco más tarde? ¡No hay
                    problema! Adaptamos el horario a tus necesidades.
                  </p>
                  <p className="text-sm text-blue-800">
                    <strong>Duración:</strong> 50-60 minutos
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    El tour se desarrolla al ritmo del corredor más lento,
                    garantizando que todos disfruten la experiencia.
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
              {[
                "Recorrido de 8-10 km",
                "Nivel: principiante a intermedio",
                "Grupos reducidos (máx. 6 personas)",
                "Incluye agua y foto de grupo",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-gray-50 rounded-xl p-6">
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
          </div>

          {/* Right Column - Booking */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Reserva tu Tour</CardTitle>
                <CardDescription>
                  Elige entre tour regular o tour privado
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Tour Type Tabs */}
                <Tabs
                  defaultValue="regular"
                  className="mb-6"
                  onValueChange={setTourType}
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="regular">Tour Regular</TabsTrigger>
                    <TabsTrigger value="private">Tour Privado</TabsTrigger>
                  </TabsList>

                  {/* Regular Tour */}
                  <TabsContent value="regular" className="space-y-6 mt-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Precio normal</p>
                          <p className="text-2xl font-bold text-gray-400 line-through">
                            {regularPricing.normalPrice}€
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-green-700 font-semibold">
                            🎉 Precio de lanzamiento
                          </p>
                          <p className="text-3xl font-bold text-green-700">
                            {regularPricing.launchPrice}€
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-center text-gray-600">
                        Precio por persona • Grupos de hasta 8 personas
                      </p>
                    </div>

                    {/* Group Size Selector */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <Users className="h-4 w-4 inline mr-2" />
                        Número de personas
                      </label>
                      <Select
                        value={participants.toString()}
                        onValueChange={(value) =>
                          setParticipants(parseInt(value))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "persona" : "personas"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Pricing Display */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">
                          {participants}{" "}
                          {participants === 1 ? "persona" : "personas"}
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {selectedRegularPrice}€
                        </p>
                        <p className="text-sm text-gray-600">por persona</p>
                        <p className="text-lg font-semibold text-blue-700 mt-2">
                          Total: {selectedRegularPrice * participants}€
                        </p>
                      </div>
                    </div>

                    {participants >= 3 && (
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                        <p className="text-sm text-green-800">
                          ✨ ¡Ahorra hasta 10€ por persona reservando en grupo!
                        </p>
                      </div>
                    )}
                  </TabsContent>

                  {/* Private Tour */}
                  <TabsContent value="private" className="space-y-6 mt-6">
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      <Tag className="h-3 w-3 mr-1" />
                      Pagas por el grupo completo, no por persona
                    </Badge>

                    {/* Group Size Selector */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <Users className="h-4 w-4 inline mr-2" />
                        Número de personas (máx. 6)
                      </label>
                      <Select
                        value={participants.toString()}
                        onValueChange={(value) =>
                          setParticipants(parseInt(value))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "persona" : "personas"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Pricing Display */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-600 mb-1">
                          Precio total del grupo
                        </p>
                        <p className="text-4xl font-bold text-gray-900">
                          {selectedPrivatePrice.total}€
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                          {selectedPrivatePrice.perPerson}€ por persona
                        </p>
                      </div>
                      {privateSavings > 0 && (
                        <div className="text-center text-sm text-green-700 bg-green-100 rounded px-3 py-2">
                          ✨ Ahorras {privateSavings}€ reservando en grupo
                        </div>
                      )}
                    </div>

                    {/* Pricing Table */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                        Precios por grupo:
                      </h4>
                      <div className="overflow-hidden rounded-lg border border-gray-200">
                        <table className="w-full text-xs">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-3 py-2 text-left font-semibold text-gray-900">
                                Personas
                              </th>
                              <th className="px-3 py-2 text-right font-semibold text-gray-900">
                                Total
                              </th>
                              <th className="px-3 py-2 text-right font-semibold text-gray-900">
                                Por persona
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {Object.entries(privateTourPricing).map(
                              ([num, pricing]) => (
                                <tr
                                  key={num}
                                  className={
                                    participants === parseInt(num)
                                      ? "bg-blue-50"
                                      : "hover:bg-gray-50"
                                  }
                                >
                                  <td className="px-3 py-2">{num}p</td>
                                  <td className="px-3 py-2 text-right font-semibold">
                                    {pricing.total}€
                                  </td>
                                  <td className="px-3 py-2 text-right text-green-700 font-semibold">
                                    {pricing.perPerson}€
                                  </td>
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Calendar */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <CalendarIcon className="h-4 w-4 inline mr-2" />
                    Selecciona tu fecha
                  </label>
                  <div className="border rounded-lg p-2">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) =>
                        date < new Date() || date.getDay() === 0
                      }
                      className="rounded-md"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    📅 Disponible: Lunes a Sábado. Los domingos no hay tours.
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Métodos de pago
                  </h4>
                  <div className="flex flex-wrap gap-2 items-center mb-2">
                    <div className="bg-white border rounded px-2 py-1 text-xs font-semibold text-gray-700">
                      💳 Visa
                    </div>
                    <div className="bg-white border rounded px-2 py-1 text-xs font-semibold text-gray-700">
                      💳 Mastercard
                    </div>
                    <div className="bg-white border rounded px-2 py-1 text-xs font-semibold text-gray-700">
                      💳 Amex
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    🔒 Pago 100% seguro procesado por Stripe
                  </p>
                </div>

                {/* Booking Button */}
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleReservation}
                  disabled={!selectedDate}
                >
                  Reservar ahora -{" "}
                  {tourType === "regular"
                    ? `${selectedRegularPrice * participants}€`
                    : `${selectedPrivatePrice.total}€`}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Al reservar, aceptas nuestros términos y condiciones
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
