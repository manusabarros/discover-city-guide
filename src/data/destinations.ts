const destinations: Record<
  string,
  {
    image: string;
    experiences: { icon: string; type: string };
    travelGuides: { type: string; days?: number };
  }
> = {
  mallorca: {
    image:
      "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/8ooepcv2_image.png",
    experiences: { icon: "⛵", type: "excursionsIn" },
    travelGuides: { type: "complete" },
  },
  menorca: {
    image:
      "https://images.unsplash.com/photo-1589979481223-deb893043163?w=800&h=600&fit=crop",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  ibiza: {
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  formentera: {
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  barcelona: {
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop",
    experiences: { icon: "🏖️", type: "excursionsFrom" },
    travelGuides: { type: "whatToSeeIn" },
  },
  madrid: {
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "essential" },
  },
  valencia: {
    image:
      "https://images.unsplash.com/photo-1562887082-13a92c26e30c?w=800&h=600&fit=crop",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  alicante: {
    image:
      "https://images.unsplash.com/photo-1693155119174-4b6e79a27814?w=800&h=600&fit=crop",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  malaga: {
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  roma: {
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    experiences: { icon: "🏛️", type: "toursIn" },
    travelGuides: { type: "inNroDays", days: 3 },
  },
  florencia: {
    image:
      "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/4f0s4iot_image.png",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  venecia: {
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  paris: {
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    experiences: { icon: "🗼", type: "activitiesIn" },
    travelGuides: { type: "inNroDays", days: 4 },
  },
  niza: {
    image:
      "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/kfjwlxgp_image.png",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
  lisboa: {
    image:
      "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/ksxr6ho1_image.png",
    experiences: { icon: "🎵", type: "historicalToursIn" },
    travelGuides: { type: "itineraryOf" },
  },
  oporto: {
    image:
      "https://customer-assets.emergentagent.com/job_island-explorer-28/artifacts/p8v5iz7v_image.png",
    experiences: { icon: "", type: "" },
    travelGuides: { type: "" },
  },
};

export default destinations;
