import { Card, CardContent } from "../ui/Card";
import { useTranslations } from "next-intl";
import experiences from "@/data/experiences";

const TopExperiences = () => {
  const t = useTranslations();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("topExperiences.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t("topExperiences.description")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.getyourguide.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {t("topExperiences.viewToursGetYourGuide")}
            </a>
            <a
              href="https://www.viator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {t("topExperiences.viewExperiencesViator")}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp) => (
            <a
              key={exp.city}
              href="https://www.getyourguide.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {t(`topExperiences.${exp.type}`)} {t(`${exp.city}.name`)}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t(`${exp.city}.experiences`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopExperiences;
