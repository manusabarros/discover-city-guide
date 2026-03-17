import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "./ui/Card";
import { Avatar, AvatarFallback } from "./ui/Avatar";

const Testimonials = () => {
  const t = useTranslations();

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "UK",
      rating: 5,
      text: "¡Experiencia increíble! El Sunrise Running Tour fue el mejor momento de mi viaje. Ver Palma despertar mientras haces ejercicio es mágico.",
      initials: "SJ",
    },
    {
      name: "Marco Bianchi",
      country: "Italia",
      rating: 5,
      text: "Perfecto para conocer la ciudad de forma diferente. El guía local nos mostró lugares que nunca habría encontrado solo. ¡Muy recomendable!",
      initials: "MB",
    },
    {
      name: "Anna Schmidt",
      country: "Alemania",
      rating: 5,
      text: "Una forma única de empezar el día. Combina deporte, cultura y paisajes espectaculares. El ambiente en grupo es fantástico.",
      initials: "AS",
    },
    {
      name: "Thomas Dubois",
      country: "Francia",
      rating: 5,
      text: "¡Simplemente perfecto! La ruta está muy bien pensada y el ritmo es ideal para todos los niveles. Las vistas del amanecer son impresionantes.",
      initials: "TD",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.testimonials?.title || "Lo que dicen nuestros viajeros"} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* {t.testimonials?.subtitle ||
              "Experiencias reales de personas que han descubierto Mallorca con nosotros"} */}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="pt-6">
                {/* Avatar and Name */}
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarFallback className="bg-blue-600 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.country}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-medium">
            ⭐ 4.9/5 ·{" "}
            {/* {t.testimonials?.reviews || "Más de 500 opiniones verificadas"} */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
