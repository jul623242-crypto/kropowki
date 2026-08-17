import React from 'react';
import { ShieldCheck, Clock, ArrowRight, Award, Activity, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

import teamImage from "../assets/images/ratownik3.png";

interface HeroProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onNavigate }) => {
  const t = UI_TRANSLATIONS[lang].hero;

  return (
    <section id="home" className="relative bg-gradient-to-b from-emerald-50/40 via-white to-white py-12 lg:py-20 overflow-hidden">
      {/* Delicate background decorative glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/90 text-emerald-900 text-xs font-bold tracking-wide uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{t.tag}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              {t.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-bold text-emerald-700 leading-snug">
              {t.subtitle}
            </p>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => onNavigate('offers')}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{t.btnOffer}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-base border-2 border-emerald-200 shadow-xs hover:border-emerald-300 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <HeartHandshake className="w-5 h-5 text-emerald-600" />
                <span>{t.btnAbout}</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                  {t.paramedicsBadge}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                  {t.availabilityBadge}
                </span>
              </div>

              <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-700 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                  {t.bioavailabilityBadge}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-300/40 via-teal-200/40 to-emerald-100/40 rounded-3xl blur-md -z-10" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                src={teamImage}
                alt="Wykwalifikowany personel medyczny Kroplówki.pl"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />

                {/* Floating overlay badge bottom left */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-emerald-100/80 shadow-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-full bg-emerald-100 text-emerald-700">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none">
                        {t.imgOverlayTitle}
                      </p>
                      <p className="text-xs font-medium text-emerald-700 mt-1">
                        {t.imgOverlayDesc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {t.imgOverlayBadge}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
