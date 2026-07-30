import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Truck, Tag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { Currency, formatPrice } from '../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onOpenCODCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCODCheckout
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 400;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = Math.round((subtotal * discountPercent) / 100);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0;
  const shippingCost = items.length === 0 ? 0 : isFreeShipping ? 0 : 30;
  const grandTotal = Math.max(0, subtotal - discount + shippingCost);

  const missingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'AZAG10' || code === 'KLAIM10' || code === 'ETE2026') {
      setDiscountPercent(10);
      setPromoSuccess('Code promo -10% appliqué avec succès !');
      setPromoError('');
    } else {
      setPromoError('Code invalide (Essayez AZAG10)');
      setPromoSuccess('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2C2118]/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl transition-transform duration-300 transform">
        {/* Header */}
        <div className="p-5 border-b border-[#E8E2D9] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2C2118]" />
            <h2 className="font-serif text-xl font-bold text-[#2C2118]">
              Votre Panier ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7C6E65] hover:text-[#2C2118] hover:bg-[#F4EFEB] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter Banner */}
        <div className="bg-emerald-50 px-5 py-3 border-b border-emerald-200">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-600" />
              <span>🚚 Livraison 100% GRATUITE partout au Maroc</span>
            </span>
            <span className="text-[10px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full font-extrabold uppercase">Offerte</span>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#F4EFEB]">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-20 h-20 bg-[#F4EFEB] rounded-full flex items-center justify-center mx-auto text-[#8C7662]">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C2118]">Votre panier est vide</h3>
              <p className="text-xs text-[#7C6E65] max-w-xs mx-auto">
                Parcourez nos paires de chaussures en cuir véritable et profitez du paiement à la livraison.
              </p>
              <button
                onClick={onClose}
                className="bg-[#2C2118] text-[#D4A373] font-bold text-xs px-6 py-3 rounded-xl hover:bg-[#3D3028] transition-colors"
              >
                Découvrir la Collection
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="pt-4 first:pt-0 flex gap-4">
                <img
                  src={item.selectedColor.image || item.product.mainImage}
                  alt={item.product.name}
                  className="w-20 h-20 rounded-xl object-cover bg-[#F4EFEB] border border-[#E8E2D9] shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif text-sm font-bold text-[#2C2118] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-[#8C7662] hover:text-rose-600 p-1"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-xs text-[#7C6E65]">
                      <span className="bg-[#F4EFEB] px-2 py-0.5 rounded text-[#2C2118] font-bold">
                        Pointure {item.selectedSize}
                      </span>
                      <span>•</span>
                      <span>{item.selectedColor.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Qty Counter */}
                    <div className="flex items-center border border-[#E8E2D9] rounded-lg overflow-hidden bg-[#F4EFEB]">
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                        className="px-2 py-0.5 text-[#3D3028] hover:bg-[#ECE5DD] text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-[#2C2118]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="px-2 py-0.5 text-[#3D3028] hover:bg-[#ECE5DD] text-xs font-bold"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-black text-[#2C2118] text-sm">
                      {formatPrice(item.product.price * item.quantity, currency)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E8E2D9] bg-[#FAF8F5] space-y-4">
            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-4 h-4 text-[#8C7662] absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Code promo (ex: AZAG10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 border border-[#E8E2D9] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#2C2118] bg-white text-[#2C2118]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#2C2118] text-[#D4A373] text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#3D3028] transition-colors"
              >
                Appliquer
              </button>
            </form>

            {promoSuccess && <p className="text-xs font-bold text-emerald-700">{promoSuccess}</p>}
            {promoError && <p className="text-xs font-bold text-rose-600">{promoError}</p>}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#7C6E65] pt-2 border-t border-[#E8E2D9]">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span className="font-bold text-[#2C2118]">{formatPrice(subtotal, currency)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Réduction (-10%)</span>
                  <span>-{formatPrice(discount, currency)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Frais de livraison Maroc</span>
                <span className="font-extrabold text-emerald-700">GRATUITE (0 DH)</span>
              </div>

              <div className="flex justify-between text-base font-black text-[#2C2118] pt-2 border-t border-[#D4A373]/40">
                <span>Total à payer</span>
                <span className="text-[#8C5628]">{formatPrice(grandTotal, currency)}</span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              onClick={() => {
                onClose();
                onOpenCODCheckout();
              }}
              className="w-full bg-[#D4A373] text-[#2C2118] font-black py-4 px-6 rounded-2xl hover:bg-[#C08552] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
            >
              <Truck className="w-5 h-5" />
              <span>Commander en 1-Clic (Paiement à la Livraison)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#7C6E65] font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Paiement sécurisé en espèces au livreur après réception</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
