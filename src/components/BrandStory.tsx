import React from 'react';
import { Award, Feather, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import sandalHero from '../assets/images/klaim_sandal_hero_1785353472195.jpg';

export const BrandStory: React.FC = () => {
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
                  Ateliers AZAG • Marrakech & Fès
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                  L'Art de la Maroquinerie Traditionnelle
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
                  <h4 className="font-serif font-bold text-sm text-white">Cuir Véritable Marocain</h4>
                  <p className="text-[11px] text-[#C8B8A6] mt-0.5">Tannage végétal naturel et finitions cousues main par nos Maâlems.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EBE6] border border-[#E6CCB2] rounded-full text-xs font-bold text-[#6B401D] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              Savoir-Faire & Création
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2118] leading-tight">
              Une Maison Dédiée à l'Elégance et au Confort
            </h2>

            <p className="text-sm sm:text-base text-[#6B5746] leading-relaxed">
              Fondée avec la passion d'allier l'artisanat ancestral marocain aux tendances contemporaines, <strong>AZAG</strong> conçoit des chaussures en cuir véritable : mocassins, baskets chic, escarpins, bottines, mules et sandales d'une légèreté et d'une souplesse inégalées.
            </p>

            <p className="text-sm sm:text-base text-[#6B5746] leading-relaxed">
              Chaque paire est fabriquée en petites séries à partir de peaux de cuir d'agneau et de vachette rigoureusement sélectionnées. Nos semelles ergonomiques intègrent une mousse à mémoire de forme pour vous offrir un amorti parfait du matin au soir.
            </p>

            {/* 4 Feature pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEB] text-[#2C2118] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#2C2118]">Cuir Première Qualité</h4>
                <p className="text-xs text-[#7C6E65]">Cuir souple qui s'adapte naturellement à la morphologie de votre pied.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEB] text-[#2C2118] flex items-center justify-center font-bold">
                  <Feather className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#2C2118]">Semelle Amortissante</h4>
                <p className="text-xs text-[#7C6E65]">Matelassage intérieur anti-fatigue pour une marche tout en douceur.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEB] text-[#2C2118] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#2C2118]">Éthique & Fait Main</h4>
                <p className="text-xs text-[#7C6E65]">Valorisation du travail artisanal local et juste rémunération des artisans.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEB] text-[#2C2118] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#2C2118]">Échange Simplifié 7j</h4>
                <p className="text-xs text-[#7C6E65]">Essayez chez vous. Changement de pointure garanti rapidement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
