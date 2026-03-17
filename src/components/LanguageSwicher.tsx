import { Globe } from "lucide-react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

const LanguageSwitcher = () => {
  const { locale } = useParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <select
        value={locale}
        onChange={(e) => push(pathname, { locale: e.target.value })}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 cursor-pointer hover:bg-gray-50 transition-colors"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
