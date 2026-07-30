import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2118] text-[#DDD3C7] pt-12 pb-10 border-t border-[#4A3C31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#4A3C31]">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo variant="light" size="md" className="items-start text-left" />
            <p className="text-xs text-[#C8B8A6] leading-relaxed pt-2">
              Maison de création de chaussures, mocassins, sneakers chic et sandales de luxe accessibles au Maroc. Confection artisanale en cuir véritable.
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-4">Navigation du Site</h4>
            <ul className="space-y-2 text-xs text-[#C8B8A6]">
              <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#boutique" className="hover:text-white transition-colors">Toutes nos Chaussures</a></li>
              <li><a href="#histoire" className="hover:text-white transition-colors">Notre Savoir-Faire</a></li>
              <li><a href="#avis" className="hover:text-white transition-colors">Avis & Témoignages</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Showroom & Ateliers Fès</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Service */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-4">Service Client Maroc</h4>
            <ul className="space-y-2 text-xs text-[#C8B8A6]">
              <li><a href="#suivi" className="hover:text-white transition-colors">Suivi de commande</a></li>
              <li><a href="#guide" className="hover:text-white transition-colors">Guide des pointures</a></li>
              <li><a href="#retours" className="hover:text-white transition-colors">Politique d'échange 7 jours</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Foire aux questions (FAQ)</a></li>
              <li><a href="#livraison" className="hover:text-white transition-colors">Zones de livraison au Maroc</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Delivery info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-4">Contact & Showroom</h4>
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
              <span>Livraison & Paiement COD Garantie</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7662] gap-4">
          <p>© 2026 AZAG Morocco (azag.ma). Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#mentions" className="hover:text-[#DDD3C7]">Mentions Légales</a>
            <a href="#confidentialite" className="hover:text-[#DDD3C7]">Politique de Confidentialité</a>
            <a href="#cgv" className="hover:text-[#DDD3C7]">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
