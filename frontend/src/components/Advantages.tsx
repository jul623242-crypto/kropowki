import React from 'react';
import { Truck, Clock, UserCheck, ShieldAlert, Zap, UserPlus, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface AdvantagesProps {
  lang: Language;
}

export const Advantages: React.FC<AdvantagesProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang].advantages;

  const icons = [
    Truck,       // Dojazd do klienta
    Clock,       // Dostępność 24/7
    UserCheck,   // Wykwalifikowany personel
    ShieldAlert, // Bezpieczne terapie
    Zap,         // Szybka realizacja
    UserPlus     // Indywidualne podejście
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-bold tracking-wide uppercase">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((item, index) => {
            const IconComponent = icons[index] || CheckCircle2;

            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl bg-slate-50/50 hover:bg-emerald-50/40 border border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text */}
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-emerald-600 font-bold text-lg">✔</span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
