import React from 'react';
import { X, Clock, CheckCircle, ShieldCheck, Sparkles, Tag } from 'lucide-react';
import { OfferItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface OfferModalProps {
  offer: OfferItem | null;
  lang: Language;
  onClose: () => void;
}

export const OfferModal: React.FC<OfferModalProps> = ({
  offer,
  lang,
  onClose
}) => {
  if (!offer) return null;

  const t = UI_TRANSLATIONS[lang].offers.modal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 sm:p-8 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>{t.headerBadge}</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {offer.title[lang]}
            </h3>
            {offer.priceFormatted && (
              <span className="text-2xl sm:text-3xl font-black text-amber-300">
                {offer.priceFormatted[lang]}
              </span>
            )}
          </div>

          <p className="text-emerald-50/90 text-sm sm:text-base mt-2 font-medium">
            {offer.shortDescription[lang]}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-emerald-200" />
              <span>{t.avgDuration}</span>
            </div>
            {offer.priceFormatted && (
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold border border-amber-300/30">
                <Tag className="w-3.5 h-3.5" />
                <span>{t.priceLabel} {offer.priceFormatted[lang]}</span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-normal text-slate-700">
          
          {/* Detailed Description */}
          <div className="prose prose-emerald max-w-none">
            <p className="text-base text-slate-700 leading-relaxed">
              {offer.fullDescription[lang]}
            </p>
          </div>

          {/* Composition / Ingredients */}
          {offer.ingredients && offer.ingredients[lang] && offer.ingredients[lang].length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-emerald-800">
                🧪 {t.compositionTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {offer.ingredients[lang].map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-200/80 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Benefits */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-emerald-800">
              ✨ {t.benefitsTitle}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {offer.benefits[lang].map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Indications */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-emerald-800">
              🎯 {t.indicationsTitle}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {offer.indications[lang].map((indication, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-slate-600 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{indication}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-emerald-900 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.medicalCheckNotice}</span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-500">{t.priceLabel}</span>
            <span className="text-lg font-extrabold text-emerald-700">{offer.priceFormatted[lang]}</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
