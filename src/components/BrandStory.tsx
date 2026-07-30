import React from 'react';
import { Award, Feather, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import sandalHero from '../assets/images/klaim_sandal_hero_1785353472195.jpg';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface BrandStoryProps {
  lang?: Language;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ lang = 'fr' }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="histoire" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Grid */}
          <div className="relative">
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D9] relative group">
              <img
                src={sandalHero}
                alt="Atelier d'Artisanat Cuir AZAG Maroc"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2118]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                  {lang === 'ar' ? 'ورشات AZAG • فاس ومراكش' : 'Ateliers AZAG • Fès & Marrakech'}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                  {lang === 'ar' ? 'فن الصناعة الجلدية التقليدية' : "L'Art de la Maroquinerie Traditionnelle"}
                </h3>
              </div>
            </div>

            {/* Badge floating */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#2C2118] text-[#FAF8F5] p-5 rounded-2xl shadow-xl border border-[#D4A373]/40 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4A373] text-[#2C2118] flex items-center justify-center shrink-0 font-bold text-xl">
                  100%
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">{lang === 'ar' ? 'جلد مغربي أصلي' : 'Cuir Véritable Marocain'}</h4>
                  <p className="text-[11px] text-[#C8B8A6] mt-0.5">{lang === 'ar' ? 'دباغة طبيعية ولمسات يدين المعلمين' : 'Tannage végétal naturel et finitions cousues main par nos Maâlems.'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EBE6] border border-[#E6CCB2] rounded-full text-xs font-bold text-[#6B401D] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              {t.navCraft}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2118] leading-tight">
              {t.storyTitle}
            </h2>

            <p className="text-sm sm:text-base text-[#6B5746] leading-relaxed">
              {t.storyDesc1}
            </p>

            <p className="text-sm sm:text-base text-[#6B5746] leading-relaxed">
              {t.storyDesc2}
            </p>

            {/* 4 Feature pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEB] text-[#2C2118] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#2C2118]">{t.feature1Title}</h4>
                <p className="text-xs text-[#7C6E65]">{t.feature1Desc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEB] text-[#2C2118] flex items-center justify-center font-bold">
                  <Feather className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#2C2118]">{t.feature2Title}</h4>
                <p className="text-xs text-[#7C6E65]">{t.feature2Desc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEB] text-[#2C2118] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#2C2118]">{t.feature3Title}</h4>
                <p className="text-xs text-[#7C6E65]">{t.feature3Desc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEB] text-[#2C2118] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#2C2118]">{t.trust3Title}</h4>
                <p className="text-xs text-[#7C6E65]">{t.trust3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
