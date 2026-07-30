import React from 'react';
import heroImg from '../assets/images/klaim_sandal_hero_1785353472195.jpg';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface HeroBannerProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  totalProducts: number;
  lang: Language;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  activeCategory,
  onSelectCategory,
  totalProducts,
  lang
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="relative overflow-hidden bg-[#2C2118] text-[#FAF8F5]">
      {/* Background Hero Image with Dark Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Collection Chaussures & Maroquinerie AZAG Maroc"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1711]/95 via-[#2C2118]/80 to-[#1E1711]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-18">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#D4A373]/20 backdrop-blur-md border border-[#D4A373]/40 px-3 py-1 rounded-full text-[#E6CCB2] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-ping" />
            {t.heroTagline}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t.heroTitle} <span className="text-[#D4A373] italic font-normal">{t.heroHighlight}</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#DDD3C7] font-light leading-relaxed max-w-2xl">
            {t.heroSubtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-[#C8B8A6]">
            <span className="flex items-center gap-1.5 text-emerald-300 font-bold bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.freeShipping}
            </span>
            <span className="flex items-center gap-1.5 bg-[#3D3028]/80 px-3 py-1.5 rounded-full border border-[#E8E2D9]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t.codBadge}
            </span>
            <span className="flex items-center gap-1.5 bg-[#3D3028]/80 px-3 py-1.5 rounded-full border border-[#E8E2D9]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t.returnsBadge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
