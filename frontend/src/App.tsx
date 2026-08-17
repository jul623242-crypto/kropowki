import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { OfferSection } from './components/OfferSection';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('pl');
  const [activeTab, setActiveTab] = useState<string>('home');

  // Handle URL / Hash routing (/kontakt, /contact, #contact, #kontakt, etc.)
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const pathname = window.location.pathname.toLowerCase();

      if (
        pathname === '/kontakt' || 
        pathname === '/contact' || 
        hash === 'kontakt' || 
        hash === 'contact'
      ) {
        setActiveTab('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'blog' || pathname === '/blog') {
        setActiveTab('blog');
        const blogEl = document.getElementById('blog');
        if (blogEl) blogEl.scrollIntoView({ behavior: 'smooth' });
      } else if (hash) {
        setActiveTab(hash);
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setActiveTab('home');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'contact') {
      setActiveTab('contact');
      window.history.pushState({ page: 'contact' }, '', '/kontakt');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigating back to home or a main page anchor
    setActiveTab(sectionId);
    if (sectionId === 'home') {
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', `/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header Navbar */}
      <Navbar
        lang={lang}
        onLanguageChange={(newLang) => setLang(newLang)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'contact' ? (
          /* Dedicated Contact Subpage (NOT rendered on the main page) */
          <ContactPage lang={lang} onNavigate={handleNavigate} />
        ) : (
          /* Main Landing Page (Hero, Advantages, Offers, About, Blog, FAQ) */
          <>
            {/* Hero Section */}
            <Hero lang={lang} onNavigate={handleNavigate} />

            {/* Advantages Section */}
            <Advantages lang={lang} />

            {/* Offer Section */}
            <OfferSection lang={lang} />

            {/* About Section */}
            <AboutSection lang={lang} />

            {/* Blog Section */}
            <BlogSection lang={lang} />

            {/* FAQ Section */}
            <FAQSection lang={lang} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} onNavigate={handleNavigate} />
    </div>
  );
}
