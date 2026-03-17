import { useState } from "react";
import {
  Mail,
  ChevronDown,
  ChevronUp,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState<
    "legal" | "privacy" | "affiliation" | "terms" | null
  >(null);

  const toggleSection = (
    section: "legal" | "privacy" | "affiliation" | "terms",
  ) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {/* {t.footer.aboutUs} */}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {/* {t.footer.aboutDescription} */}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {/* {t.footer.aboutGoal} */}
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-gray-300 mb-2">
                {/* {t.footer.findHere} */}
              </p>
              <ul className="space-y-1 ml-4">
                {/* <li>• {t.footer.recommendations}</li>
                <li>• {t.footer.guides}</li>
                <li>• {t.footer.excursions}</li>
                <li>• {t.footer.itineraries}</li> */}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {/* {t.footer.contact} */}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {/* {t.footer.contactDescription} */}
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@discovercityguide.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@discovercityguide.com
              </a>
            </div>
            {/* <p className="text-gray-500 text-xs mt-4">{t.footer.contactNote}</p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {/* {t.footer.legal} */}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => toggleSection("legal")}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                >
                  {/* {t.footer.legalNotice} */}
                  {expandedSection === "legal" ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleSection("privacy")}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                >
                  {/* {t.footer.privacyPolicy} */}
                  {expandedSection === "privacy" ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleSection("affiliation")}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                >
                  {/* {t.footer.affiliateDisclosure} */}
                  {expandedSection === "affiliation" ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleSection("terms")}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                >
                  Términos y Condiciones
                  {expandedSection === "terms" ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Expanded Legal Sections */}
        {expandedSection && (
          <div className="bg-gray-800 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            {expandedSection === "legal" && (
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Aviso Legal
                </h4>
                <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                  <p>
                    Este sitio web, Mallorca Guide, tiene como finalidad ofrecer
                    información turística y recomendaciones relacionadas con
                    viajes en Mallorca.
                  </p>
                  <p>
                    La información publicada se proporciona con fines
                    informativos y puede cambiar con el tiempo. Aunque
                    intentamos mantener el contenido actualizado y preciso, no
                    podemos garantizar que toda la información esté
                    completamente actualizada en todo momento.
                  </p>
                  <p>
                    Mallorca Guide no se responsabiliza de cambios en horarios,
                    precios, disponibilidad o condiciones de servicios ofrecidos
                    por terceros.
                  </p>
                  <p>
                    Los usuarios son responsables de verificar la información
                    directamente con los proveedores correspondientes antes de
                    realizar cualquier reserva o actividad.
                  </p>
                </div>
              </div>
            )}

            {expandedSection === "privacy" && (
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Política de Privacidad
                </h4>
                <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                  <p>
                    En Mallorca Guide respetamos la privacidad de nuestros
                    visitantes.
                  </p>
                  <p>
                    Este sitio web puede recopilar información básica con el
                    objetivo de mejorar la experiencia de navegación y analizar
                    el tráfico del sitio.
                  </p>
                  <p className="font-semibold text-gray-300">
                    La información recopilada puede incluir:
                  </p>
                  <ul className="ml-6 space-y-1">
                    <li>• Datos de navegación</li>
                    <li>• Páginas visitadas</li>
                    <li>• Tiempo de permanencia en el sitio</li>
                    <li>• Tipo de dispositivo o navegador</li>
                  </ul>
                  <p>
                    Estos datos se utilizan únicamente para fines estadísticos y
                    para mejorar el contenido del sitio.
                  </p>
                  <p>
                    Mallorca Guide no vende ni comparte información personal de
                    los usuarios con terceros.
                  </p>
                  <p>
                    En algunos casos utilizamos servicios externos de análisis o
                    plataformas de afiliación que pueden utilizar cookies para
                    realizar el seguimiento de reservas o visitas.
                  </p>
                </div>
              </div>
            )}

            {expandedSection === "affiliation" && (
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Política de Afiliación
                </h4>
                <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                  <p>
                    Algunos enlaces en este sitio web son enlaces de afiliado.
                  </p>
                  <p>
                    Esto significa que, si realizas una reserva o compra a
                    través de estos enlaces, Mallorca Guide puede recibir una
                    comisión del proveedor correspondiente.
                  </p>
                  <p>
                    Estas comisiones no implican ningún coste adicional para el
                    usuario y ayudan a mantener el funcionamiento del sitio y la
                    creación de contenido gratuito.
                  </p>
                  <p>
                    Las recomendaciones realizadas en este sitio se basan en
                    criterios editoriales y en el objetivo de ofrecer
                    información útil a los viajeros.
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    Todas nuestras recomendaciones están pensadas para ayudarte
                    a planificar tu viaje de forma fácil y encontrar las mejores
                    opciones disponibles. Algunos enlaces pueden dirigir a
                    plataformas externas de reserva de hoteles o actividades.
                  </p>
                </div>
              </div>
            )}

            {expandedSection === "terms" && (
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Términos y Condiciones
                </h4>
                <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                  <p>
                    Al utilizar el sitio web Mallorca Guide aceptas los
                    siguientes términos:
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li>
                      • El contenido del sitio tiene únicamente fines
                      informativos y de recomendación turística.
                    </li>
                    <li>
                      • Mallorca Guide actúa como plataforma informativa y no
                      presta directamente servicios de alojamiento, transporte o
                      actividades turísticas, salvo que se indique expresamente.
                    </li>
                    <li>
                      • Las reservas realizadas a través de enlaces externos se
                      gestionan directamente con los proveedores
                      correspondientes.
                    </li>
                    <li>
                      • Mallorca Guide no se hace responsable de los servicios
                      prestados por terceros ni de posibles cambios en
                      condiciones, precios o disponibilidad.
                    </li>
                    <li>
                      • El uso de este sitio implica la aceptación de estos
                      términos.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Pinterest"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          <p className="text-center text-gray-400 text-sm mb-2">
            {/* {t.footer.copyright.replace("2025", currentYear)} */}
          </p>
          <p className="text-center text-gray-500 text-xs">
            discovercityguide.com • Guías de viaje auténticas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
