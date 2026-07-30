import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface ContactSectionProps {
  lang?: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang = 'fr' }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: ''
  });

  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', phone: '', city: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Showroom Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EBE6] border border-[#E6CCB2] rounded-full text-xs font-bold text-[#6B401D] uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#D4A373]" />
                Showroom & Boutique
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2118]">
                {t.contactTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#7C6E65] mt-2 leading-relaxed">
                {t.contactSubtitle}
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D9] flex items-start gap-4">
                <div className="p-3 bg-[#F4EFEB] text-[#D4A373] rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2118]">{lang === 'ar' ? 'عنوان المعرض والورش' : 'Adresse Showroom & Ateliers'}</h4>
                  <p className="text-xs text-[#7C6E65] mt-1">49 Lots Supronord Avenue Ibn Al Khatib, Fès, Maroc</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D9] flex items-start gap-4">
                <div className="p-3 bg-[#F4EFEB] text-[#D4A373] rounded-xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2118]">{lang === 'ar' ? 'أوقات العمل' : "Horaires d'Ouverture"}</h4>
                  <p className="text-xs text-[#7C6E65] mt-1">{lang === 'ar' ? 'من الاثنين إلى السبت: 09:00 - 19:00' : 'Du Lundi au Samedi: 09h00 - 19h00 (Non-stop)'}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D9] flex items-start gap-4">
                <div className="p-3 bg-[#F4EFEB] text-[#D4A373] rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2118]">{t.phoneLabel}</h4>
                  <p className="text-xs text-[#7C6E65] mt-1">+212 7 52 42 42 60 (WhatsApp 7j/7)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D9] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#8C5628] uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4 text-[#D4A373]" />
                {t.navContact}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C2118]">{lang === 'ar' ? 'أرسل لنا رسالة' : 'Envoyez-nous un Message'}</h3>
              <p className="text-xs text-[#7C6E65] mt-1 mb-6">
                {lang === 'ar' ? 'لأي استفسار عن المقاسات أو متابعة الطلبيات.' : "Pour toute demande d'information, question sur une pointure ou suivi de commande."}
              </p>

              {formSent ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-900">{lang === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message bien envoyé !'}</h4>
                  <p className="text-xs text-emerald-700">
                    {lang === 'ar' ? 'شكراً لتوصلك بنا. سيتواصل معك فريق AZAG قريباً.' : 'Merci pour votre message. Notre équipe AZAG vous recontactera sous quelques heures.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                      {t.fullNameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.fullNamePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-[#D4A373] text-[#2C2118]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                        {t.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={t.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-[#D4A373] text-[#2C2118]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                        {t.cityLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Casablanca"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-[#D4A373] text-[#2C2118]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                      {lang === 'ar' ? 'رسالتك' : 'Votre Message'} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={lang === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'Comment pouvons-nous vous aider ?'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-[#D4A373] text-[#2C2118]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2C2118] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#3D3028] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#D4A373]" />
                    {lang === 'ar' ? 'إرسال الرسالة' : 'Envoyer mon message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
