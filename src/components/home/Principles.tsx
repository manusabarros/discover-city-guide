import { FC } from "react";
import { Card, CardContent } from "../ui/Card";

const Principles: FC<{ principles: any }> = ({ principles }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros principios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada recomendación sigue estos valores fundamentales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {principles.map((principle: any, index: number) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
