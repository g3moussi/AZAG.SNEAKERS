import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface FloatingWhatsAppProps {
  lang?: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang = 'fr' }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const t = TRANSLATIONS[lang];
  const whatsappNumber = '212752424260';
  const rawMessage = lang === 'ar' 
    ? "مرحباً AZAG، أتواصل معكم من الموقع الإلكتروني للحصول على معلومات حول أحذيتكم."
    : "Bonjour AZAG, je vous contacte depuis le site web pour des informations sur vos chaussures.";
  const message = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-5 end-5 sm:bottom-6 sm:end-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-[#2C2118] text-white text-xs px-3.5 py-2 rounded-2xl shadow-2xl border border-[#D4A373]/30 flex items-center gap-2 max-w-[220px] sm:max-w-xs animate-bounce-short">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-medium text-[11px] sm:text-xs leading-tight">
            {t.floatingHelp} <strong>{t.contactViaWhatsApp}</strong>
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-white p-0.5 rounded-full transition-colors ms-auto shrink-0"
            title="Fermer"
            aria-label="Fermer le message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 end-5 w-3 h-3 bg-[#2C2118] rotate-45 border-r border-b border-[#D4A373]/30" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter AZAG sur WhatsApp"
        className="relative bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center border-2 border-white/30 group-hover:shadow-emerald-600/50"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        
        {/* WhatsApp Icon SVG */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};
