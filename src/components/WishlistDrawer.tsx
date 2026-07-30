import React from 'react';
import { X, Heart, Trash2, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { Currency, formatPrice } from '../utils/format';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  currency: Currency;
  onRemoveWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onRemoveWishlist,
  onQuickView
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2C2118]/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl">
        <div className="p-5 border-b border-[#E8E2D9] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            <h2 className="font-serif text-xl font-bold text-[#2C2118]">
              Mes Favoris ({items.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7C6E65] hover:text-[#2C2118] hover:bg-[#F4EFEB] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#F4EFEB]">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-300">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C2118]">Aucun favori enregistré</h3>
              <p className="text-xs text-[#7C6E65] max-w-xs mx-auto">
                Cliquez sur l'icône cœur sur n'importe quel modèle pour l'ajouter à vos favoris.
              </p>
            </div>
          ) : (
            items.map((product) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-20 h-20 rounded-xl object-cover bg-[#F4EFEB] border border-[#E8E2D9] shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1">
                  <h4 className="font-serif text-sm font-bold text-[#2C2118] line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#7C6E65] line-clamp-1">{product.subtitle}</p>
                  <span className="font-black text-[#2C2118] text-sm mt-1 block">
                    {formatPrice(product.price, currency)}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onQuickView(product);
                      onClose();
                    }}
                    className="p-2 bg-[#2C2118] text-[#D4A373] rounded-xl hover:bg-[#3D3028] transition-colors"
                    title="Voir les détails"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onRemoveWishlist(product)}
                    className="p-2 bg-[#F4EFEB] text-[#8C7662] hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors"
                    title="Retirer des favoris"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
