import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface ReviewsSectionProps {
  lang?: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang = 'fr' }) => {
  const t = TRANSLATIONS[lang];

  const reviews = lang === 'ar' ? [
    {
      author: 'سهام بلحاج',
      city: 'الدار البيضاء',
      sandal: 'صندل أحزمة جلد جملي',
      rating: 5,
      date: 'منذ 3 أيام',
      comment: 'صراحة عجبوني بزاف! الجلد مرن ورائع، مشيت بيه النهار كامل فكازا بدون أي ألم. والتوصيل سريع خلال 24 ساعة!'
    },
    {
      author: 'كنزة مرسلي',
      city: 'الرباط',
      sandal: 'ميول رافيا وجلد أنيق',
      rating: 5,
      date: 'منذ أسبوع',
      comment: 'وصلوني البارح فـأكدال. الرافيا المنسوج رائع والتصميم عصري جداً. شكراً لفريق AZAG على النصيحة بالمقاس.'
    },
    {
      author: 'مريم العمراني',
      city: 'مراكش',
      sandal: 'حذاء كعب مريح كونيياك',
      rating: 5,
      date: 'منذ أسبوعين',
      comment: 'جودة وتفاصيل ممتازة. الحذاء مريح جداً ومناسب للمناسبات والسهرات. أنصح به بشدة!'
    }
  ] : [
    {
      author: 'Siham Belhadj',
      city: 'Casablanca',
      sandal: 'Sandale Lanières Cuir Camel',
      rating: 5,
      date: 'Il y a 3 jours',
      comment: 'Franchement coup de cœur ! Le cuir est d’une souplesse incroyable. J’ai marché toute la journée à Casa sans aucune douleur. Et la livraison en 24h au top !'
    },
    {
      author: 'Kenza Morsli',
      city: 'Rabat',
      sandal: 'Mule Raphia & Cuir Chic',
      rating: 5,
      date: 'Il y a 1 semaine',
      comment: 'Reçues hier à Agdal. Le raphia tressé est magnifique et le design très moderne. Merci à l’équipe AZAG pour le conseil pointure.'
    },
    {
      author: 'Meryem El Amrani',
      city: 'Marrakech',
      sandal: 'Compensée Cuir 6cm Cognac',
      rating: 5,
      date: 'Il y a 2 semaines',
      comment: 'Très bonne finition. La compensée est très stable et confortable pour les mariages et soirées. Je recommande !'
    }
  ];

  return (
    <section id="avis" className="py-16 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 bg-[#F5EBE6] text-[#6B401D] border border-[#E6CCB2] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {t.verifiedReviews}
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#2C2118]">
            {t.reviewsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#7C6E65] mt-2">
            {t.reviewsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E8E2D9] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C7662]">{rev.date}</span>
                </div>

                <p className="text-[#3D3028] text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4EFEB] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-[#2C2118] flex items-center gap-1">
                    {rev.author}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                  </h4>
                  <span className="text-[#8C7662] text-[11px]">{rev.city} • {rev.sandal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
