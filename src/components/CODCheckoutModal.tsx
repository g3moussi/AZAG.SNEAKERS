import React, { useState } from 'react';
import { X, Truck, CheckCircle2, ShieldCheck, MapPin, Phone, User, ShoppingBag, ArrowLeft, CloudCheck } from 'lucide-react';
import { CartItem, Product, ProductColor } from '../types';
import { MOROCCAN_CITIES } from '../data/products';
import { Currency, formatPrice } from '../utils/format';
import { Language, TRANSLATIONS, getTranslatedProduct } from '../utils/i18n';
import { sendOrderToAdminApp, OrderPayload } from '../utils/orderSync';

interface CODCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  directProduct?: {
    product: Product;
    size: number;
    color: ProductColor;
    quantity: number;
  } | null;
  currency: Currency;
  onOrderSuccess: () => void;
  lang?: Language;
}

export const CODCheckoutModal: React.FC<CODCheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  directProduct,
  currency,
  onOrderSuccess,
  lang = 'fr'
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Casablanca');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'failed'>('idle');

  const rawCheckoutItems: CartItem[] = directProduct
    ? [{ product: directProduct.product, selectedSize: directProduct.size, selectedColor: directProduct.color, quantity: directProduct.quantity }]
    : items;

  const checkoutItems: CartItem[] = rawCheckoutItems.map(item => ({
    ...item,
    product: getTranslatedProduct(item.product, lang)
  }));

  const subtotal = checkoutItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= 400;
  const shipping = isFreeShipping ? 0 : 30;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) return;

    setIsSubmitting(true);
    setSyncStatus('syncing');
    const generatedCode = 'AZAG-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedCode);

    const orderData: OrderPayload = {
      orderId: generatedCode,
      customerName: fullName,
      phone,
      city,
      address,
      notes: notes || undefined,
      items: checkoutItems.map((item) => {
        const rawImg = item.selectedColor.image || item.product.mainImage;
        const imgUrl = rawImg.startsWith('http') ? rawImg : `${window.location.origin}${rawImg}`;
        return {
          id: item.product.id,
          productName: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          size: item.selectedSize,
          color: item.selectedColor.name,
          image: imgUrl
        };
      }),
      totalPrice: total,
      currency,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const waUrl = generateWhatsAppUrl(generatedCode);

    // REST API call to send order to the Admin App (https://azagshoes.ai.studio)
    sendOrderToAdminApp(orderData).then((res) => {
      setSyncStatus(res.success ? 'success' : 'failed');
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      onOrderSuccess();
      try {
        window.open(waUrl, '_blank');
      } catch {
        // Fallback if popup blocked
      }
    }, 400);
  };

  const generateWhatsAppUrl = (code: string) => {
    const itemsText = checkoutItems.map((item, idx) => {
      const rawImg = item.selectedColor.image || item.product.mainImage;
      const imgUrl = rawImg.startsWith('http') ? rawImg : `${window.location.origin}${rawImg}`;
      return `${checkoutItems.length > 1 ? `${idx + 1}. ` : ''}*${lang === 'ar' ? 'الموديل' : 'Modèle'}:* ${item.product.name}\n   • *${lang === 'ar' ? 'اللون' : 'Couleur'}:* ${item.selectedColor.name}\n   • *${lang === 'ar' ? 'المقاس' : 'Pointure'}:* ${item.selectedSize}\n   • *${lang === 'ar' ? 'الكمية' : 'Quantité'}:* ${item.quantity}\n   • *${lang === 'ar' ? 'الثمن' : 'Prix'}:* ${formatPrice(item.product.price * item.quantity, currency)}\n   • *${lang === 'ar' ? 'صورة الموديل' : 'Photo du modèle'}:* ${imgUrl}`;
    }).join('\n\n');

    const message = `*${lang === 'ar' ? 'طلب جديد AZAG - الدفع عند الاستلام' : 'NOUVELLE COMMANDE AZAG - PAIEMENT À LA LIVRAISON'}* 📦\n\n` +
      `📌 *${lang === 'ar' ? 'رمز الطلب' : 'Code Commande'}:* ${code}\n\n` +
      `👤 *${lang === 'ar' ? 'معلومات الزبون' : 'INFORMATIONS CLIENT'}:*\n` +
      `• *${t.fullNameLabel}:* ${fullName}\n` +
      `• *${t.phoneLabel}:* ${phone}\n` +
      `• *${t.cityLabel}:* ${city}\n` +
      `• *${t.addressLabel}:* ${address}` +
      (notes ? `\n• *Notes:* ${notes}` : '') +
      `\n\n👞 *${t.orderSummary}:*\n${itemsText}\n\n` +
      `💰 *${t.totalToPay}:* ${formatPrice(total, currency)} (${isFreeShipping ? t.freeShippingText : '30 DH'})\n\n` +
      `${lang === 'ar' ? 'مرحباً AZAG، يرجى تأكيد توصيل طلبي وشكراً !' : 'Bonjour AZAG, merci de confirmer la livraison de ma commande !'}`;

    return `https://wa.me/212752424260?text=${encodeURIComponent(message)}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#2C2118]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-[#E8E2D9] overflow-hidden my-8">
        {/* Sticky Header Bar with Back & Close X Buttons */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-[#6B5A4E] hover:text-[#2C2118] bg-white hover:bg-[#F4EFEB] px-3.5 py-1.5 rounded-xl border border-[#E8E2D9] transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#8C5628] rtl:rotate-180" />
            <span>{t.continueShopping}</span>
          </button>

          <span className="text-xs font-extrabold text-[#2C2118] uppercase tracking-wider hidden sm:inline-block">
            AZAG • Cash on Delivery
          </span>

          <button
            type="button"
            onClick={onClose}
            title={t.closeBtn}
            aria-label={t.closeBtn}
            className="p-2 bg-[#F4EFEB] hover:bg-[#2C2118] hover:text-white rounded-full transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5 text-[#3D3028] hover:text-white" />
          </button>
        </div>

        {orderComplete ? (
          /* Order Confirmation Success View */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {t.orderSuccessTitle}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2C2118] mt-3">
                {lang === 'ar' ? `شكراً ${fullName}!` : `Merci ${fullName} !`}
              </h2>
              <p className="text-[#7C6E65] text-sm mt-1">
                {t.orderSuccessDesc}
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8E2D9] text-start space-y-3 text-xs text-[#3D3028]">
              <div className="flex justify-between border-b border-[#E8E2D9] pb-2">
                <span className="font-semibold text-[#7C6E65]">{t.cityLabel}:</span>
                <span className="font-bold text-[#2C2118]">{city}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E2D9] pb-2">
                <span className="font-semibold text-[#7C6E65]">{t.phoneLabel}:</span>
                <span className="font-bold text-[#2C2118]">{phone}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E2D9] pb-2">
                <span className="font-semibold text-[#7C6E65]">{t.totalToPay}:</span>
                <span className="font-black text-[#8C5628] text-sm">{formatPrice(total, currency)}</span>
              </div>
              <div className="flex justify-between items-center pt-1 text-[11px]">
                <span className="font-semibold text-[#7C6E65] flex items-center gap-1.5">
                  <CloudCheck className="w-3.5 h-3.5 text-[#8C5628]" />
                  {lang === 'ar' ? 'المزامنة مع لوحة التحكم:' : 'Maison Admin Sync:'}
                </span>
                <span className="font-bold text-[#8C5628] bg-[#F5EBE6] px-2.5 py-0.5 rounded-full border border-[#E6CCB2]">
                  https://azagshoes.ai.studio
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={generateWhatsAppUrl(orderId)}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-emerald-600 text-white font-bold py-3.5 rounded-2xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>{t.openWhatsAppBtn}</span>
              </a>

              <button
                onClick={onClose}
                className="flex-1 bg-[#2C2118] text-[#D4A373] font-bold py-3.5 rounded-2xl hover:bg-[#3D3028] transition-colors text-xs uppercase tracking-wider"
              >
                {t.continueShopping}
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form View */
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#F5EBE6] text-[#8C5628] rounded-2xl">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2C2118]">
                  {t.codModalTitle}
                </h2>
                <p className="text-xs text-[#7C6E65]">
                  {t.codModalSubtitle}
                </p>
              </div>
            </div>

            {/* Order Items Preview */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E2D9] mb-6 space-y-3">
              <span className="text-xs font-bold text-[#8C7662] uppercase tracking-wider block">
                {t.orderSummary} ({checkoutItems.reduce((acc, i) => acc + i.quantity, 0)})
              </span>
              <div className="max-h-36 overflow-y-auto space-y-2 pr-1">
                {checkoutItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs bg-white p-2.5 rounded-xl border border-[#E8E2D9]">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.selectedColor.image || item.product.mainImage}
                        alt={item.product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-[#2C2118] line-clamp-1">{item.product.name}</h4>
                        <span className="text-[#7C6E65]">{t.selectSize} {item.selectedSize} • {item.selectedColor.name} x{item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-extrabold text-[#2C2118]">{formatPrice(item.product.price * item.quantity, currency)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#E8E2D9] flex justify-between items-center text-xs font-bold">
                <span className="text-[#7C6E65]">{t.cartTotal}:</span>
                <span className="text-base text-[#8C5628] font-black">{formatPrice(total, currency)}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                    {t.fullNameLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C7662] absolute left-3 rtl:left-auto rtl:right-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder={t.fullNamePlaceholder}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-xs pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2.5 border border-[#E8E2D9] rounded-xl focus:ring-2 focus:ring-[#2C2118] focus:outline-hidden bg-white text-[#2C2118]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                    {t.phoneLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8C7662] absolute left-3 rtl:left-auto rtl:right-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder={t.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2.5 border border-[#E8E2D9] rounded-xl focus:ring-2 focus:ring-[#2C2118] focus:outline-hidden bg-white text-[#2C2118]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                  {t.cityLabel} <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#8C7662] absolute left-3 rtl:left-auto rtl:right-3 top-3" />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs pl-9 rtl:pl-3 rtl:pr-9 pr-8 border border-[#E8E2D9] rounded-xl focus:ring-2 focus:ring-[#2C2118] focus:outline-hidden bg-white text-[#2C2118] appearance-none cursor-pointer"
                  >
                    {MOROCCAN_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-1">
                  {t.addressLabel} <span className="text-rose-600">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder={t.addressPlaceholder}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs p-3 border border-[#E8E2D9] rounded-xl focus:ring-2 focus:ring-[#2C2118] focus:outline-hidden bg-white text-[#2C2118]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2C2118] text-[#D4A373] font-extrabold py-4 px-6 rounded-2xl hover:bg-[#3D3028] transition-all shadow-xl flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
              >
                {isSubmitting ? (
                  <span>{t.submittingOrder}</span>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5 text-[#D4A373]" />
                    <span>{t.confirmOrderBtn} • {formatPrice(total, currency)}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs text-[#7C6E65] hover:text-[#2C2118] font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
                <span>{t.continueShopping}</span>
              </button>

              <p className="text-[11px] text-center text-[#7C6E65] font-medium">
                {t.codBadge}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
