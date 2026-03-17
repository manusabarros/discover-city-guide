// Datos para la página principal de Discover City Guide

export const heroData = {
  title: "Discover City Guide",
  subtitle:
    "Explora el mundo con confianza. Nosotros encontramos lo mejor para ti.",
  description:
    "Planificar un viaje debería ser emocionante, no abrumador. En Discover City Guide investigamos, analizamos y seleccionamos los mejores hoteles, experiencias y lugares en cada ciudad para que puedas disfrutar tu viaje desde el primer momento.",
  ctaPrimary: "Explorar guías de ciudades",
  ctaSecondary: "Encontrar hoteles y experiencias",
};

export const philosophyData = {
  title: "Nuestra filosofía",
  description: `En Discover City Guide creemos que cada viaje es una oportunidad para descubrir algo nuevo: una cultura, una historia o un lugar que recordarás toda la vida.

Por eso creamos guías claras, prácticas y honestas que ayudan a los viajeros a tomar mejores decisiones.

Nuestro objetivo es simple: ahorrarte horas de búsqueda y ayudarte a encontrar las mejores experiencias en cada destino.

Cuando recomendamos un hotel, un tour o una actividad, lo hacemos después de investigar y comparar opciones para asegurarnos de que realmente aporten valor a tu viaje.

Si decides reservar a través de nuestros enlaces, no pagarás nada adicional. Simplemente nos ayudas a seguir creando contenido útil para viajeros como tú.

Porque más que mostrar destinos, queremos ayudarte a vivirlos de verdad.`,
};

export const principlesData = [
  {
    icon: "🌍",
    title: "El viajero primero",
    description:
      "Cada recomendación está pensada para ayudarte a tener la mejor experiencia posible.",
  },
  {
    icon: "🔎",
    title: "Investigación y selección",
    description:
      "Analizamos cientos de opciones para mostrarte solo lo que realmente merece la pena.",
  },
  {
    icon: "🧭",
    title: "Guías prácticas",
    description:
      "Información clara, directa y útil para que puedas planificar tu viaje fácilmente.",
  },
  {
    icon: "🤝",
    title: "Transparencia",
    description:
      "Algunos enlaces pueden generar una pequeña comisión, pero nuestras recomendaciones siempre se basan en calidad y valor para el viajero.",
  },
];

export const closingCTA = {
  title: "Tu próxima aventura empieza con una buena guía",
  description:
    "Descubre ciudades increíbles, encuentra alojamientos perfectos y reserva experiencias inolvidables con Discover City Guide.",
  cta: "Empieza a explorar ahora",
};

// Destinos populares organizados por región
export const popularDestinations = {
  spain: {
    name: "España",
    cities: [
      {
        name: "Mallorca",
        slug: "mallorca",
        country: "España",
        region: "Islas Baleares",
        image:
          "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/8ooepcv2_image.png",
        description:
          "Playas paradisíacas, calas escondidas y la auténtica vida mediterránea",
        highlights: [
          "Playas cristalinas",
          "Serra de Tramuntana",
          "Gastronomía local",
        ],
      },
      {
        name: "Menorca",
        slug: "menorca",
        country: "España",
        region: "Islas Baleares",
        image:
          "https://images.unsplash.com/photo-1589979481223-deb893043163?w=800&h=600&fit=crop",
        description:
          "Reserva de la Biosfera con calas vírgenes y paisajes naturales",
        highlights: ["Calas turquesas", "Camí de Cavalls", "Tranquilidad"],
      },
      {
        name: "Ibiza",
        slug: "ibiza",
        country: "España",
        region: "Islas Baleares",
        image:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop",
        description:
          "Playas espectaculares, puestas de sol mágicas y vida nocturna",
        highlights: ["Cala Comte", "Dalt Vila", "Ambiente único"],
      },
      {
        name: "Formentera",
        slug: "formentera",
        country: "España",
        region: "Islas Baleares",
        image:
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop",
        description:
          "El paraíso del Mediterráneo con las aguas más cristalinas",
        highlights: ["Ses Illetes", "Playas vírgenes", "Espalmador"],
      },
      {
        name: "Barcelona",
        slug: "barcelona",
        country: "España",
        region: "Cataluña",
        image:
          "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop",
        description:
          "Arte, Gaudí, playa y vida mediterránea en la ciudad condal",
        highlights: ["Sagrada Familia", "Park Güell", "Barrio Gótico"],
      },
      {
        name: "Madrid",
        slug: "madrid",
        country: "España",
        region: "Comunidad de Madrid",
        image:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
        description:
          "Capital vibrante con arte, cultura y la mejor vida nocturna",
        highlights: ["Museo del Prado", "Retiro", "Gran Vía"],
      },
      {
        name: "Valencia",
        slug: "valencia",
        country: "España",
        region: "Comunidad Valenciana",
        image:
          "https://images.unsplash.com/photo-1562887082-13a92c26e30c?w=800&h=600&fit=crop",
        description:
          "Ciudad de las Artes, playas urbanas y la auténtica paella",
        highlights: [
          "Ciudad de las Artes",
          "Playa Malvarrosa",
          "Centro histórico",
        ],
      },
      {
        name: "Alicante",
        slug: "alicante",
        country: "España",
        region: "Comunidad Valenciana",
        image:
          "https://images.unsplash.com/photo-1693155119174-4b6e79a27814?w=800&h=600&fit=crop",
        description: "Costa Blanca, castillo y playas de aguas cristalinas",
        highlights: ["Castillo Santa Bárbara", "Explanada", "Calas"],
      },
      {
        name: "Málaga",
        slug: "malaga",
        country: "España",
        region: "Andalucía",
        image:
          "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
        description: "Puerta de la Costa del Sol con arte, historia y playas",
        highlights: ["Museo Picasso", "Alcazaba", "Playas"],
      },
    ],
  },
  italy: {
    name: "Italia",
    cities: [
      {
        name: "Roma",
        slug: "roma",
        country: "Italia",
        region: "Lacio",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
        description: "La Ciudad Eterna con historia milenaria en cada rincón",
        highlights: ["Coliseo", "Vaticano", "Fontana di Trevi"],
      },
      {
        name: "Florencia",
        slug: "florencia",
        country: "Italia",
        region: "Toscana",
        image:
          "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/4f0s4iot_image.png",
        description:
          "Cuna del Renacimiento con arte y arquitectura incomparables",
        highlights: ["Duomo", "Uffizi", "Ponte Vecchio"],
      },
      {
        name: "Venecia",
        slug: "venecia",
        country: "Italia",
        region: "Véneto",
        image:
          "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop",
        description: "La ciudad de los canales, góndolas y romance",
        highlights: ["Gran Canal", "San Marcos", "Góndolas"],
      },
    ],
  },
  france: {
    name: "Francia",
    cities: [
      {
        name: "París",
        slug: "paris",
        country: "Francia",
        region: "Île-de-France",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
        description:
          "La Ciudad de la Luz, capital del arte, moda y gastronomía",
        highlights: ["Torre Eiffel", "Louvre", "Notre-Dame"],
      },
      {
        name: "Niza",
        slug: "niza",
        country: "Francia",
        region: "Costa Azul",
        image:
          "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/kfjwlxgp_image.png",
        description:
          "Perla de la Costa Azul con playas y elegancia mediterránea",
        highlights: ["Promenade des Anglais", "Casco antiguo", "Playas"],
      },
    ],
  },
  portugal: {
    name: "Portugal",
    cities: [
      {
        name: "Lisboa",
        slug: "lisboa",
        country: "Portugal",
        region: "Lisboa",
        image:
          "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/ksxr6ho1_image.png",
        description: "Ciudad de las siete colinas, tranvías y fado",
        highlights: ["Belém", "Alfama", "Tranvía 28"],
      },
      {
        name: "Oporto",
        slug: "oporto",
        country: "Portugal",
        region: "Norte",
        image:
          "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/p8v5iz7v_image.png",
        description: "Vino de Oporto, puentes icónicos y ribera del Duero",
        highlights: ["Ribeira", "Bodegas", "Puente Luis I"],
      },
    ],
  },
};

// Top hoteles por ciudad
export const topHotelsByCity = [
  {
    city: "Barcelona",
    slug: "barcelona",
    description: "Hoteles boutique en el Eixample y frente al mar",
  },
  {
    city: "Roma",
    slug: "roma",
    description: "Alojamientos con historia en el centro histórico",
  },
  {
    city: "París",
    slug: "paris",
    description: "Hoteles de lujo en Le Marais y Champs-Élysées",
  },
  {
    city: "Lisboa",
    slug: "lisboa",
    description: "Hoteles con encanto en Alfama y Baixa",
  },
  {
    city: "Madrid",
    slug: "madrid",
    description: "Hoteles céntricos cerca de Gran Vía y Retiro",
  },
  {
    city: "Mallorca",
    slug: "mallorca",
    description: "Resorts de playa y hoteles boutique en Palma",
  },
];

// Experiencias imperdibles
export const topExperiences = [
  {
    title: "Tours en Roma",
    slug: "roma",
    description: "Coliseo, Vaticano y tours nocturnos",
    icon: "🏛️",
  },
  {
    title: "Excursiones desde Barcelona",
    slug: "barcelona",
    description: "Montserrat, Girona y Costa Brava",
    icon: "🏖️",
  },
  {
    title: "Actividades en París",
    slug: "paris",
    description: "Cruceros por el Sena y tours gastronómicos",
    icon: "🗼",
  },
  {
    title: "Tours históricos en Lisboa",
    slug: "lisboa",
    description: "Sintra, Cascais y tour de fado",
    icon: "🎵",
  },
  {
    title: "Excursiones en Mallorca",
    slug: "mallorca",
    description: "Serra de Tramuntana y tours en barco",
    icon: "⛵",
  },
];

// Guías de viaje destacadas
export const travelGuides = [
  {
    title: "Roma en 3 días",
    slug: "roma",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop",
  },
  {
    title: "Qué ver en Barcelona",
    slug: "barcelona",
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=300&fit=crop",
  },
  {
    title: "París en 4 días",
    slug: "paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
  },
  {
    title: "Itinerario de Lisboa",
    slug: "lisboa",
    image:
      "https://images.unsplash.com/photo-1588900749969-7e49f9e21e73?w=400&h=300&fit=crop",
  },
  {
    title: "Mallorca completa",
    slug: "mallorca",
    image:
      "https://images.unsplash.com/photo-1562095241-8c6714fd4178?w=400&h=300&fit=crop",
  },
  {
    title: "Madrid imprescindible",
    slug: "madrid",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop",
  },
];
