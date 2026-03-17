import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Button } from "./ui/Button";

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "is", name: "Íslenska", flag: "🇮🇸" },
];

const Header = () => {
  const pathname = usePathname();
  const { locale } = useParams();
  const { push } = useRouter();
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const currentLang = languages.find((l) => l.code === locale);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Mallorca
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection("beaches")}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {/* {t.nav.beaches} */}
            </button>
            <button
              onClick={() => scrollToSection("gastronomy")}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {/* {t.nav.gastronomy} */}
            </button>
            <button
              onClick={() => scrollToSection("itineraries")}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {/* {t.nav.itineraries} */}
            </button>
            <button
              onClick={() => scrollToSection("running-tour")}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {/* {t.nav.runningTour} */}
            </button>
            <button
              onClick={() => scrollToSection("practical")}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {/* {t.nav.practical} */}
            </button>
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLang?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 max-h-96 overflow-y-auto"
              >
                <div className="p-2 text-xs text-gray-500 font-semibold">
                  Selecciona idioma
                </div>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => push(pathname, { locale: lang.code })}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span
                      className={locale === lang.code ? "font-semibold" : ""}
                    >
                      {lang.name}
                    </span>
                    {locale === lang.code && <span className="ml-auto">✓</span>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            <button
              onClick={() => scrollToSection("beaches")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              {/* {t.nav.beaches} */}
            </button>
            <button
              onClick={() => scrollToSection("gastronomy")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              {/* {t.nav.gastronomy} */}
            </button>
            <button
              onClick={() => scrollToSection("itineraries")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              {/* {t.nav.itineraries} */}
            </button>
            <button
              onClick={() => scrollToSection("running-tour")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              {/* {t.nav.runningTour} */}
            </button>
            <button
              onClick={() => scrollToSection("practical")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              {/* {t.nav.practical} */}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
