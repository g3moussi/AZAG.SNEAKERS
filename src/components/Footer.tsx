import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface FooterProps {
  lang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang = 'fr' }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-[#2C2118] text-[#DDD3C7] pt-12 pb-10 border-t border-[#4A3C31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#4A3C31]">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo variant="light" size="md" className="items-start text-start" />
            <p className="text-xs text-[#C8B8A6] leading-relaxed pt-2">
              {t.footerBrandDesc}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/ayouubg3?igsh=MXdkMTNrMzdkYXAzbQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" title="Instagram AZAG" className="p-2 bg-[#3D3028] hover:bg-[#D4A373] hover:text-[#2C2118] rounded-full transition-colors text-[#DDD3C7]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/share/19RNtD93sV/?mibextid=wwXIfr" target="_blank" rel="noreferrer" title="Facebook AZAG" className="p-2 bg-[#3D3028] hover:bg-[#D4A373] hover:text-[#2C2118] rounded-full transition-colors text-[#DDD3C7]">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-4">{t.footerNavTitle}</h4>
            <ul className="space-y-2 text-xs text-[#C8B8A6]">
              <li><a href="#accueil" className="hover:text-white transition-colors">{t.navHome}</a></li>
              <li><a href="#boutique" className="hover:text-white transition-colors">{t.navShop}</a></li>
              <li><a href="#histoire" className="hover:text-white transition-colors">{t.navCraft}</a></li>
              <li><a href="#avis" className="hover:text-white transition-colors">{t.navReviews}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.navContact}</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Service */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-4">{t.footerSupportTitle}</h4>
            <ul className="space-y-2 text-xs text-[#C8B8A6]">
              <li><a href="#faq" className="hover:text-white transition-colors">{t.navFAQ}</a></li>
              <li><a href="#guide" className="hover:text-white transition-colors">{t.sizeGuide}</a></li>
              <li><a href="#retours" className="hover:text-white transition-colors">{t.trust3Title}</a></li>
              <li><a href="#livraison" className="hover:text-white transition-colors">{t.trust1Title}</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Delivery info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-4">{t.footerContactTitle}</h4>
            <div className="flex items-start gap-2 text-xs text-[#C8B8A6]">
              <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
              <span>49 Lots Supronord Avenue Ibn Al Khatib, Fès, Maroc</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#C8B8A6]">
              <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
              <span>+212 7 52 42 42 60 (WhatsApp)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#C8B8A6]">
              <Mail className="w-4 h-4 text-[#D4A373] shrink-0" />
              <span>ayoubgaa10@gmail.com</span>
            </div>
            <div className="pt-2 text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.codBadge}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7662] gap-4">
          <p>© 2026 AZAG Morocco (azag.ma). {t.rightsReserved}.</p>
        </div>
      </div>
    </footer>
  );
};
