import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = UI_TRANSLATIONS[lang].footer;
  const nav = UI_TRANSLATIONS[lang].nav;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Info */}
          <div className="md:col-span-8 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5 shadow-sm">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 10 C50 10 20 50 20 70 C20 86.5 33.5 100 50 100 C66.5 100 80 86.5 80 70 C80 50 50 10 50 10 Z" fill="currentColor"/>
                    <path d="M50 42 C45 52 35 62 35 72 C35 80 41 86 50 86 C52 75 62 65 62 55 C62 48 56 44 50 42 Z" fill="#ffffff"/>
                  </svg>
                </div>
              </div>

              <span className="text-2xl font-extrabold text-white tracking-tight">
                Kroplowki<span className="text-emerald-400">.com</span>
              </span>
            </button>

            <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
              {t.description}
            </p>

            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t.legalNotice}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium">
              {[
                { id: 'home', label: nav.home },
                { id: 'offers', label: nav.offers },
                { id: 'about', label: nav.about },
                { id: 'blog', label: nav.blog },
                { id: 'faq', label: nav.faq },
                { id: 'contact', label: nav.contact }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 text-center sm:flex sm:justify-between sm:items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kroplowki.com. {t.rights}</p>
          <p className="mt-2 sm:mt-0">{t.serviceDesc}</p>
        </div>

      </div>
    </footer>
  );
};
