"use client";

import { Smartphone, Download, Map, Star, Bell } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { useTranslations } from "next-intl";

const AppPromotion = () => {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4" />
                {/* {t.home.appAvailableOn} */}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {/* {t.home.appTitle} */}
              </h2>

              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                {/* {t.home.appDescription} */}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Map className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {/* {t.home.appFeature1Title} */}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {/* {t.home.appFeature1Description} */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {/* {t.home.appFeature2Title} */}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {/* {t.home.appFeature2Description} */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {/* {t.home.appFeature3Title} */}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {/* {t.home.appFeature3Description} */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-xl transition-all group"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">
                      {/* {t.home.downloadOnAppStore} */}
                    </div>
                    <div className="text-lg font-semibold -mt-1">
                      {/* {t.home.appStore} */}
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-xl transition-all group"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">
                      {/* {t.home.availableOnGooglePlay} */}
                    </div>
                    <div className="text-lg font-semibold -mt-1">
                      {/* {t.home.googlePlay} */}
                    </div>
                  </div>
                </a>
              </div>

              <p className="text-white/80 text-sm mt-6 italic">
                {/* {t.home.comingSoon} */}
              </p>

              <Button
                size="lg"
                className="mt-4 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm px-8 py-6 text-base rounded-full"
              >
                <Bell className="w-5 h-5 mr-2" />
                {/* {t.home.notifyMe} */}
              </Button>
            </div>

            {/* Right: Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-[280px] sm:w-[320px]">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-8 ring-white/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.3rem] overflow-hidden aspect-[9/19.5]">
                    <img
                      src="https://images.unsplash.com/photo-1562095241-8c6714fd4178?w=400&h=800&fit=crop"
                      alt="App preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* App UI Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Mallorca</h3>
                      <p className="text-sm text-white/90 mb-4">
                        9 playas paradisíacas cerca de ti
                      </p>
                      <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                        <Download className="w-4 h-4 mr-2" />
                        {/* {t.home.downloadOfflineGuide} */}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <Card className="absolute -left-4 top-12 bg-white p-3 shadow-xl max-w-[140px] animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      🏖️
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">
                        Cala Figuera
                      </div>
                      <div className="text-xs text-gray-500">2.3 km</div>
                    </div>
                  </div>
                </Card>

                <Card className="absolute -right-4 bottom-32 bg-white p-3 shadow-xl max-w-[140px] animate-float-delay">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                      🍽️
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">
                        Es Molí de Sal
                      </div>
                      <div className="text-xs text-yellow-600">★ 4.8</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1.5s;
        }
      `}</style> */}
    </section>
  );
};

export default AppPromotion;
