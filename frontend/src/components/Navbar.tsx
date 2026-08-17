import React, { useState } from 'react';
import { Menu, X, Shield, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  setActiveTab?: (tab: string) => void;
  onNavigate?: (tab: string) => void;
}

const PolandFlag: React.FC<{ size?: number; idPrefix?: string }> = ({ size = 20, idPrefix = 'pl' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className="rounded-full shrink-0 shadow-2xs block"
    aria-hidden="true"
  >
    <clipPath id={`${idPrefix}-round-clip`}>
      <circle cx="12" cy="12" r="12" />
    </clipPath>
    <g clipPath={`url(#${idPrefix}-round-clip)`}>
      <rect width="24" height="12" fill="#FFFFFF" />
      <rect y="12" width="24" height="12" fill="#DC2626" />
    </g>
    <circle cx="12" cy="12" r="11.5" fill="none" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1" />
  </svg>
);

const UKFlag: React.FC<{ size?: number; idPrefix?: string }> = ({ size = 20, idPrefix = 'uk' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className="rounded-full shrink-0 shadow-2xs block"
    aria-hidden="true"
  >
    <clipPath id={`${idPrefix}-round-clip`}>
      <circle cx="12" cy="12" r="12" />
    </clipPath>
    <g clipPath={`url(#${idPrefix}-round-clip)`}>
      <rect width="24" height="24" fill="#012169" />
      <path d="M0,0 L24,24 M24,0 L0,24" stroke="#FFFFFF" strokeWidth="4.2" />
      <path d="M0,0 L24,24 M24,0 L0,24" stroke="#C8102E" strokeWidth="2.2" />
      <path d="M12,0 V24 M0,12 H24" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M12,0 V24 M0,12 H24" stroke="#C8102E" strokeWidth="3.6" />
    </g>
    <circle cx="12" cy="12" r="11.5" fill="none" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1" />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  activeTab,
  setActiveTab,
  onNavigate
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = UI_TRANSLATIONS[lang].nav;

  const handleNavClick = (tabId: string) => {
    if (setActiveTab) setActiveTab(tabId);
    if (onNavigate) {
      onNavigate(tabId);
    } else {
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100/80 shadow-xs transition-all">
      {/* Top micro bar for 24/7 status */}
      <div className="bg-emerald-50/80 border-b border-emerald-100/50 py-1.5 px-4 text-xs font-medium text-emerald-800 text-center flex justify-between items-center max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-900 font-semibold">{t.availability247}</span>
          <span className="hidden sm:inline text-emerald-700/80">| {t.topBarSub}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-800">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t.topBarRight}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 text-left group cursor-pointer"
          >
            {/* Logo Emblem: Leaf inside drop */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5 shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 C50 10 20 50 20 70 C20 86.5 33.5 100 50 100 C66.5 100 80 86.5 80 70 C80 50 50 10 50 10 Z" fill="currentColor"/>
                  <path d="M50 42 C45 52 35 62 35 72 C35 80 41 86 50 86 C52 75 62 65 62 55 C62 48 56 44 50 42 Z" fill="#ffffff"/>
                </svg>
              </div>
            </div>

            <div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 block leading-none">
                Kroplowki<span className="text-emerald-600">.com</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-emerald-700 uppercase block mt-1">
                {t.logoSub}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
              { id: 'home', label: t.home },
              { id: 'offers', label: t.offers },
              { id: 'about', label: t.about },
              { id: 'blog', label: t.blog },
              { id: 'faq', label: t.faq },
              { id: 'contact', label: t.contact }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === link.id
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Language Selector */}
            <div id="desktop-lang-switcher" className="flex items-center gap-1 bg-emerald-50/90 rounded-full p-1 border border-emerald-200/80 ml-3">
              <button
                id="btn-lang-pl"
                onClick={() => onLanguageChange('pl')}
                className={`p-1 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                  lang === 'pl'
                    ? 'bg-white shadow-xs ring-2 ring-emerald-500 scale-105'
                    : 'opacity-60 hover:opacity-100 hover:bg-emerald-100/60'
                }`}
                title="Polski"
                aria-label="Polski"
              >
                <PolandFlag size={20} idPrefix="desk-pl" />
              </button>
              <button
                id="btn-lang-en"
                onClick={() => onLanguageChange('en')}
                className={`p-1 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white shadow-xs ring-2 ring-emerald-500 scale-105'
                    : 'opacity-60 hover:opacity-100 hover:bg-emerald-100/60'
                }`}
                title="English"
                aria-label="English"
              >
                <UKFlag size={20} idPrefix="desk-uk" />
              </button>
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Language toggle for mobile header */}
            <div id="mobile-lang-switcher" className="flex items-center gap-1 bg-emerald-50/90 rounded-full p-1 border border-emerald-200/80 mr-1">
              <button
                id="btn-mobile-lang-pl"
                onClick={() => onLanguageChange('pl')}
                className={`p-0.5 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                  lang === 'pl'
                    ? 'bg-white shadow-xs ring-2 ring-emerald-500 scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
                title="Polski"
                aria-label="Polski"
              >
                <PolandFlag size={18} idPrefix="mob-pl" />
              </button>
              <button
                id="btn-mobile-lang-en"
                onClick={() => onLanguageChange('en')}
                className={`p-0.5 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white shadow-xs ring-2 ring-emerald-500 scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
                title="English"
                aria-label="English"
              >
                <UKFlag size={18} idPrefix="mob-uk" />
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {[
            { id: 'home', label: t.home },
            { id: 'offers', label: t.offers },
            { id: 'about', label: t.about },
            { id: 'blog', label: t.blog },
            { id: 'faq', label: t.faq },
            { id: 'contact', label: t.contact }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-base transition-all cursor-pointer ${
                activeTab === link.id
                  ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
