import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { Badge } from "./ui/Badge";

const Itineraries = () => {
  const t = useTranslations();

  return (
    <section id="itineraries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {/* {t.itineraries.title} */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* {t.itineraries.subtitle} */}
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="3days" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="3days" className="text-base">
                {/* 3 {t.itineraries.days3.title.includes("Días") ? "Días" : "Days"} */}
              </TabsTrigger>
              <TabsTrigger value="5days" className="text-base">
                {/* 5 {t.itineraries.days5.title.includes("Días") ? "Días" : "Days"} */}
              </TabsTrigger>
              <TabsTrigger value="7days" className="text-base">
                {/* 7 {t.itineraries.days7.title.includes("Días") ? "Días" : "Days"} */}
              </TabsTrigger>
            </TabsList>

            {/* 3 Days Itinerary */}
            <TabsContent value="3days" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {/* {t.itineraries.days3.title} */}
                </h3>
                <p className="text-lg text-gray-600">
                  {/* {t.itineraries.days3.description} */}
                </p>
              </div>
              <div className="space-y-6">
                {/* {t.itineraries.days3.days.map((day, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-blue-600">
                        {day.day}
                      </Badge>
                      <CardTitle className="text-2xl">{day.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {day.activities.map((activity, actIdx) => (
                          <li key={actIdx} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))} */}
              </div>
            </TabsContent>

            {/* 5 Days Itinerary */}
            <TabsContent value="5days" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {/* {t.itineraries.days5.title} */}
                </h3>
                <p className="text-lg text-gray-600">
                  {/* {t.itineraries.days5.description} */}
                </p>
              </div>
              <div className="space-y-6">
                {/* {t.itineraries.days5.days.map((day, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-green-600">
                        {day.day}
                      </Badge>
                      <CardTitle className="text-2xl">{day.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {day.activities.map((activity, actIdx) => (
                          <li key={actIdx} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))} */}
              </div>
            </TabsContent>

            {/* 7 Days Itinerary */}
            <TabsContent value="7days" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {/* {t.itineraries.days7.title} */}
                </h3>
                <p className="text-lg text-gray-600">
                  {/* {t.itineraries.days7.description} */}
                </p>
              </div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    La experiencia completa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {/* {t.itineraries.days7.summary} */}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Itineraries;
