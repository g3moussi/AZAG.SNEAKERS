import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: ''
  });

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
                Venez Essayer nos Chaussures à Fès
              </h2>
              <p className="text-xs sm:text-sm text-[#7C6E65] mt-2 leading-relaxed">
                Notre équipe vous accueille dans nos locaux à Fès pour découvrir l'intégralité de nos collections de chaussures et bénéficier de nos conseils.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D9] flex items-start gap-4">
                <div className="p-3 bg-[#F4EFEB] text-[#D4A373] rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2118]">Adresse Showroom & Ateliers</h4>
                  <p className="text-xs text-[#7C6E65] mt-1">49 Lots Supronord Avenue Ibn Al Khatib, Fès, Maroc</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D9] flex items-start gap-4">
                <div className="p-3 bg-[#F4EFEB] text-[#D4A373] rounded-xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2118]">Horaires d'Ouverture</h4>
                  <p className="text-xs text-[#7C6E65] mt-1">Du Lundi au Samedi: 09h00 - 19h00 (Non-stop)</p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Ouvert 7j/7 pour le service client WhatsApp</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D9] flex items-start gap-4">
                <div className="p-3 bg-[#F4EFEB] text-[#D4A373] rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2118]">WhatsApp & Support Client</h4>
                  <p className="text-xs text-[#7C6E65] mt-1">+212 7 52 42 42 60 (Disponible 7j/7)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D9] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#8C5628] uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4 text-[#D4A373]" />
                Formulaire de Contact
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C2118]">Envoyez-nous un Message</h3>
              <p className="text-xs text-[#7C6E65] mt-1 mb-6">
                Pour toute demande d'information, question sur une pointure ou suivi de commande.
              </p>

              {formSent ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-900">Message bien envoyé !</h4>
                  <p className="text-xs text-emerald-700">
                    Merci pour votre message. Notre équipe AZAG vous recontactera sous quelques heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Meriem Alami"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-[#D4A373] text-[#2C2118]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="06 61 00 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-[#D4A373] text-[#2C2118]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                        Ville *
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
                      Votre Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Comment pouvons-nous vous aider ?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-[#D4A373] text-[#2C2118]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2C2118] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#3D3028] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#D4A373]" />
                    Envoyer mon message
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
