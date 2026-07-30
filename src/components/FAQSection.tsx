import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  lang?: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang = 'fr' }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const t = TRANSLATIONS[lang];

  const faqs: FAQItem[] = lang === 'ar' ? [
    {
      question: "كم يستغرق الشحن في المغرب وما هي التكلفة؟",
      answer: "نقوم بالتوصيل لجميع مدن المملكة (الدار البيضاء، الرباط، مراكش، طنجة، أكادير، فاس، وجدة، العيون...). التوصيل مجاني لجميع الطلبات من 400 درهم (أو 30 درهم). الآجال: 24 إلى 48 ساعة للمدن الكبرى و48 إلى 72 ساعة لباقي المناطق."
    },
    {
      question: "كيف تعمل خدمة الدفع عند الاستلام (COD)؟",
      answer: "لا تدفع أي شيء عبر الإنترنت! عندما يصل موزع التوصيل إلى عنوانك، يمكنك معاينة الطرد ثم دفع المبلغ المحدد نقداً مباشرة للموزع."
    },
    {
      question: "كيف أختار مقاسي المناسب في أحذية AZAG؟",
      answer: "جميع موديلاتنا (الموكاسان، السنيكرز، الصنادل) تأتي بمقاسات معيارية أوروبية (EU 36 إلى 41). إذا كنت تلبس عادة بين مقاسين، نوصي باختيار المقاس الأكبر لضمان الراحة التامة."
    },
    {
      question: "ماذا أفعل إذا كان المقاس غير مناسب بعد الاستلام؟",
      answer: "لا تقلق! نوفر لك خدمة التبديل المجاني خلال 7 أيام. اتصل بخدمة الزبناء عبر الواتساب وسيصلك الموزع لاستبدال المقاس."
    },
    {
      question: "هل الأحذية مصنوعة حقاً من الجلد الطبيعي الأصلي؟",
      answer: "بالتأكيد. جميع أحذيتنا وصنادلنا مصنوعة 100% من الجلد الطبيعي الممتاز لضمان المتانة والراحة التامة للقدمين."
    }
  ] : [
    {
      question: "Combien de temps prend la livraison au Maroc et quel est le coût ?",
      answer: "Nous livrons partout au Maroc (Casablanca, Rabat, Marrakech, Tanger, Agadir, Fès, Oujda, Laâyoune...). La livraison est OFFERTE pour toute commande à partir de 400 DH (sinon 30 DH). Délais : 24 à 48 heures pour les grandes villes et 48 à 72 heures pour les autres régions."
    },
    {
      question: "Comment fonctionne le paiement à la livraison (Cash on Delivery) ?",
      answer: "Vous ne payez rien en ligne ! Lorsque le livreur se présente à votre adresse, vous pouvez vérifier le colis puis régler le montant exact en espèces directement auprès du livreur."
    },
    {
      question: "Comment choisir ma pointure pour les chaussures AZAG ?",
      answer: "Nos modèles (mocassins, sneakers, escarpins, sandales) taillent normalement selon les standards européens (EU 36 à 41). Si vous êtes habituellement entre deux pointures (par exemple 38.5), nous vous recommandons de choisir la pointure supérieure (39) pour un confort optimal."
    },
    {
      question: "Que faire si la pointure reçue ne me convient pas ?",
      answer: "Pas d'inquiétude ! Nous vous proposons un échange gratuit sous 7 jours. Contactez simplement notre service client sur WhatsApp (+212 7 52 42 42 60) et un livreur repassera récupérer la paire et vous remettre la bonne taille."
    },
    {
      question: "S'agit-il vraiment de cuir véritable ?",
      answer: "Absolument. Toutes nos chaussures, mocassins, escarpins, bottines et sandales sont confectionnés exclusivement en cuir véritable (agneau souple pour la tige, veau et vachette pour la structure). Nous refusons l'utilisation de cuir synthétique ou de PU pour garantir une respirabilité totale du pied."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-[#E8E2D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EBE6] border border-[#E6CCB2] rounded-full text-xs font-bold text-[#6B401D] uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4A373]" />
            {t.navFAQ}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2118]">
            {t.faqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#7C6E65] mt-2">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#2C2118] bg-[#FAF8F5] shadow-md'
                    : 'border-[#E8E2D9] bg-white hover:border-[#D4A373]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#2C2118] focus:outline-hidden"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#D4A373] text-sm font-sans font-black">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C7662] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#2C2118]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#6B5746] leading-relaxed border-t border-[#E8E2D9]/60">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#2C2118] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4A373]/30">
          <div className="space-y-1 text-center sm:text-start">
            <h4 className="font-serif text-lg font-bold">{lang === 'ar' ? 'هل لديك سؤال خاص؟' : 'Vous avez une question spécifique ?'}</h4>
            <p className="text-xs text-[#DDD3C7]">{lang === 'ar' ? 'فريقنا متاح للإجابة على جميع تساؤلاتكم طيلة أيام الأسبوع.' : 'Notre équipe service client répond à toutes vos demandes de 9h à 21h 7j/7.'}</p>
          </div>
          <a
            href="https://wa.me/212752424260?text=Bonjour%20AZAG"
            target="_blank"
            rel="noreferrer"
            className="bg-[#D4A373] text-[#2C2118] hover:bg-[#C08552] font-extrabold px-6 py-3 rounded-xl text-xs transition-colors shrink-0 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            {t.contactViaWhatsApp}
          </a>
        </div>
      </div>
    </section>
  );
};
