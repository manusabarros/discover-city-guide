import { Link } from "@/i18n/navigation";
import { Button } from "../ui/Button";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const ClosingCTA = () => {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t("closingCTA.badge")}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("closingCTA.title")}
          </h2>

          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("closingCTA.description")}
          </p>

          <Link href="/espana">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all"
            >
              {t("closingCTA.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
