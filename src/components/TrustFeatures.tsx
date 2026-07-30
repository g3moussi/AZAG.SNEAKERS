import React from 'react';
import { Award, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface TrustFeaturesProps {
  lang?: Language;
}

export const TrustFeatures: React.FC<TrustFeaturesProps> = ({ lang = 'fr' }) => {
  const t = TRANSLATIONS[lang];

  const features = [
    {
      icon: Award,
      title: t.trustQualityTitle,
      desc: t.trustQualityDesc
    },
    {
      icon: Truck,
      title: t.trustFreeDeliveryTitle,
      desc: t.trustFreeDeliveryDesc
    },
    {
      icon: ShieldCheck,
      title: t.trustCodTitle,
      desc: t.trustCodDesc
    },
    {
      icon: RefreshCw,
      title: t.trustExchangeTitle,
      desc: t.trustExchangeDesc
    }
  ];

  return (
    <section className="bg-stone-900 text-stone-100 py-12 px-4 sm:px-6 lg:px-8 border-y border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-stone-800/40 border border-stone-800 hover:border-amber-400/40 transition-all">
                <div className="p-3 bg-amber-400/10 text-amber-300 rounded-xl shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
