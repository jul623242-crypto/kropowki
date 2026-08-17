import React from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Headphones, 
  ShieldCheck,
  CalendarCheck,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

import teamImage from "../assets/images/ratownik4.png";

interface ContactPageProps {
  lang: Language;
  onNavigate: (tabId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang, onNavigate }) => {
  const t = UI_TRANSLATIONS[lang].contact;

  return (
    <div id="kontakt-page" className="bg-slate-50/60 min-h-[calc(100vh-80px)] py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-emerald-700 transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <span>{lang === 'pl' ? 'Strona główna' : 'Home'}</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
            {lang === 'pl' ? 'Kontakt' : 'Contact'}
          </span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-900 text-xs font-bold tracking-wide uppercase mb-3.5">
            <Headphones className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.tag}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.title}
          </h1>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Photo Container & Safety Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dedicated Photo Box */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              {/* Main Photo */}
              <img
                src={teamImage}
                alt="Wykwalifikowany personel medyczny Kroplówki.pl"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Floating Bottom Card on Photo */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-emerald-100 shadow-lg flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                    {t.photoBadgeTitle}
                  </h4>
                  <p className="text-xs text-emerald-800 font-medium mt-0.5">
                    {t.photoBadgeDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Service & Safety Info Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-bold block mb-1 text-sm sm:text-base">
                  {lang === 'pl' ? 'Bezpieczeństwo i profesjonalizm' : 'Safety and professionalism'}
                </strong>
                {lang === 'pl' 
                  ? 'Wszystkie wizyty domowe realizowane są przez dyplomowane pielęgniarki i ratowników medycznych z pełnym wyposażeniem ratunkowym oraz sterylnym sprzętem jednorazowym.'
                  : 'All home visits are conducted by licensed nurses and paramedics equipped with complete clinical medical kits and sterile disposable equipment.'}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Details Cards (Centered & Balanced without form) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Phone Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider block mb-1">
                    {t.phoneLabel}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 block tracking-tight font-mono">
                    {t.phoneValue}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                    {t.phoneDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/25">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider block mb-1">
                    {t.emailLabel}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 block tracking-tight font-mono break-all">
                    {t.emailValue}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                    {t.emailDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-600/25">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider">
                      {t.hoursLabel}
                    </span>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                      24/7 • DOSTĘPNI ZAWSZE
                    </span>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 block tracking-tight">
                    {t.hoursValue}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 flex items-center space-x-1.5 font-medium">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t.hoursDesc}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation back to offers CTA box */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-900 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-1.5 text-xs font-bold text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'pl' ? 'Oferta terapii' : 'Therapies'}</span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold">
                  {lang === 'pl' ? 'Chcesz sprawdzić dostępne kroplówki?' : 'Want to explore available IV drips?'}
                </h4>
                <p className="text-xs text-slate-300">
                  {lang === 'pl' 
                    ? 'Zobacz naszą ofertę wlewów witaminowych, regeneracyjnych i detoksykujących.'
                    : 'Check our full selection of vitamin, regenerative and detox IV drips.'}
                </p>
              </div>

              <button
                onClick={() => onNavigate('offers')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer shrink-0"
              >
                <span>{lang === 'pl' ? 'Zobacz ofertę' : 'View therapies'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
