import { FC } from "react";

const Philosophy: FC<{ data: any }> = ({ data }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            {data.title}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            {data.description
              .split("\n\n")
              .map((paragraph: string, index: number) => (
                <p key={index} className="text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
