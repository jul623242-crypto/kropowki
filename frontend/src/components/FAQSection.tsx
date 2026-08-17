import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { HelpCircle, ChevronDown, PhoneCall } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>('1'); // first item expanded by default
  const t = UI_TRANSLATIONS[lang].faq;

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-hidden hover:bg-emerald-50/30 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {item.question[lang]}
                  </span>
                  <div className={`p-2 rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-emerald-600 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-slate-600 leading-relaxed font-normal text-sm sm:text-base border-t border-slate-100/80 pt-4 animate-in fade-in duration-200">
                    {item.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
