import React, { useState } from 'react';
import { OFFERS } from '../data/offers';
import { OfferItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { OfferModal } from './OfferModal';
import {
  Activity,
  Sparkles,
  Brain,
  Droplet,
  ShieldCheck,
  Zap,
  Dumbbell,
  Flame,
  HeartPulse,
  Sun,
  Shield,
  Trophy,
  Dna,
  ShieldAlert,
  ArrowRight,
  Search
} from 'lucide-react';

interface OfferSectionProps {
  lang: Language;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ lang }) => {
  const [selectedOffer, setSelectedOffer] = useState<OfferItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const t = UI_TRANSLATIONS[lang].offers;

  // Icon mapping helper
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-emerald-600" };
    switch (iconName) {
      case 'Activity': return <Activity {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Brain': return <Brain {...props} />;
      case 'Droplet': return <Droplet {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Dumbbell': return <Dumbbell {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Trophy': return <Trophy {...props} />;
      case 'Dna': return <Dna {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  // Filter offers
  const filteredOffers = OFFERS.filter((offer) => {
    const matchesCategory =
      activeCategory === 'all' || offer.category === activeCategory;
    const matchesSearch =
      offer.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.shortDescription[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="offers" className="py-16 lg:py-24 bg-slate-50/50 relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters & Search bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: t.filterAll },
              { id: 'regeneration', label: t.filterRegen },
              { id: 'detox', label: t.filterDetox },
              { id: 'vitality', label: t.filterVitality },
              { id: 'specialized', label: t.filterSpecial }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/20'
                    : 'bg-white text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-medium focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-2xs"
            />
          </div>

        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 hover:border-emerald-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Top icon & category pill */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {renderIcon(offer.iconName)}
                  </div>

                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-100">
                    {t.avgDuration}
                  </span>
                </div>

                {/* Title and Price */}
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {offer.title[lang]}
                    </h3>
                  </div>
                  {offer.priceFormatted && (
                    <div className="mt-1">
                      <span className="text-lg font-black text-emerald-700">
                        {offer.priceFormatted[lang]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {offer.shortDescription[lang]}
                </p>
              </div>

              {/* Bottom CTA button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  id={`btn-offer-details-${offer.id}`}
                  onClick={() => setSelectedOffer(offer)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-600 text-slate-800 hover:text-white font-bold text-sm border border-slate-200/80 hover:border-emerald-600 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md"
                >
                  <span>{t.learnMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredOffers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium">
              {t.noResults}
            </p>
          </div>
        )}

      </div>

      {/* Offer Detail Modal */}
      <OfferModal
        offer={selectedOffer}
        lang={lang}
        onClose={() => setSelectedOffer(null)}
      />
    </section>
  );
};
