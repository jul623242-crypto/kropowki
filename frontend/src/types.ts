export type Language = 'pl' | 'en';

export interface OfferItem {
  id: string;
  title: {
    pl: string;
    en: string;
  };
  shortDescription: {
    pl: string;
    en: string;
  };
  fullDescription: {
    pl: string;
    en: string;
  };
  category: 'regeneration' | 'detox' | 'vitality' | 'specialized';
  price: number;
  priceFormatted: {
    pl: string;
    en: string;
  };
  durationMinutes: number;
  ingredients: {
    pl: string[];
    en: string[];
  };
  benefits: {
    pl: string[];
    en: string[];
  };
  indications: {
    pl: string[];
    en: string[];
  };
  iconName: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: {
    pl: string;
    en: string;
  };
  excerpt: {
    pl: string;
    en: string;
  };
  content: {
    pl: string;
    en: string;
  };
  date: {
    pl: string;
    en: string;
  };
  readTime: {
    pl: string;
    en: string;
  };
  image: string;
  tags: {
    pl: string[];
    en: string[];
  };
}

export interface FAQItem {
  id: string;
  question: {
    pl: string;
    en: string;
  };
  answer: {
    pl: string;
    en: string;
  };
}

export interface ContactFormData {
  name: string;
  phone: string;
  selectedOffer: string;
  location: string;
  preferredTime: string;
  notes: string;
  consent: boolean;
}
