import React from 'react';
import { ShieldCheck, Award, HeartHandshake, UserCheck, Stethoscope } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

import teamImage from "../assets/images/ratownik5.png";

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
              <img
                src={teamImage}
                alt="Wykwalifikowany personel medyczny Kroplówki.pl"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Floating trust badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-emerald-100 shadow-xl flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                    {t.imgOverlayTitle}
                  </h4>
                  <p className="text-xs text-emerald-800 font-medium mt-0.5">
                    {t.imgOverlayDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-bold tracking-wide uppercase">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.tag}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h2>

            {/* Main required exact content text without quotes */}
            <p className="text-lg text-slate-700 leading-relaxed font-medium bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
              {t.text}
            </p>

            {/* Feature bullets */}
            <div className="space-y-3 pt-2">
              {[
                t.feature1,
                t.feature2,
                t.feature3,
                t.feature4
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust highlights bar */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-2xl font-extrabold text-emerald-600 block">24/7</span>
                <span className="text-xs font-semibold text-slate-600">{t.dispatchReadiness}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-2xl font-extrabold text-emerald-600 block">100%</span>
                <span className="text-xs font-semibold text-slate-600">{t.sterileSets}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
