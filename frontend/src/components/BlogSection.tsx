import React, { useState } from 'react';
import { BLOG_ARTICLES } from '../data/blog';
import { BlogArticle, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft, Tag } from 'lucide-react';

interface BlogSectionProps {
  lang: Language;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ lang }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const t = UI_TRANSLATIONS[lang].blog;

  return (
    <section id="blog" className="py-16 lg:py-24 bg-slate-50/50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If an article is open for reading */}
        {selectedArticle ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
            
            {/* Back button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToList}</span>
            </button>

            {/* Article Meta */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-emerald-700">
                <span className="flex items-center space-x-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedArticle.date[lang]}</span>
                </span>
                <span className="flex items-center space-x-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedArticle.readTime[lang]}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {selectedArticle.title[lang]}
              </h1>
            </div>

            {/* Main Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-md max-h-[420px]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-emerald lg:prose-lg max-w-none text-slate-700 leading-relaxed font-normal space-y-4 whitespace-pre-line">
              {selectedArticle.content[lang]}
            </div>

            {/* Article Tags */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-emerald-600" />
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags[lang].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Main Blog List View */
          <>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-bold tracking-wide uppercase">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t.title}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal">
                {t.subtitle}
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_ARTICLES.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={article.image}
                        alt={article.title[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-emerald-800 shadow-xs">
                        {article.date[lang]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center space-x-2 text-xs font-medium text-emerald-700">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime[lang]}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {article.title[lang]}
                      </h3>

                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                        {article.excerpt[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Read More button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-bold text-sm transition-all duration-200 cursor-pointer"
                    >
                      <span>{t.readMore}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </article>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};
