import React, { useState } from 'react';
import { Search, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { Currency, formatPrice } from '../utils/format';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currency: Currency;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  currency,
  onSelectProduct
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const popularTags = ['Camel', 'Mules', 'Cuir', 'Compensée', 'Dorée', 'Plates'];

  const filteredProducts = products.filter((p) => {
    const query = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.colors.some((c) => c.name.toLowerCase().includes(query))
    );
  });

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#2C2118]/70 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-[#E8E2D9] overflow-hidden">
        {/* Search input bar */}
        <div className="p-4 sm:p-6 border-b border-[#E8E2D9] flex items-center gap-3 bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-[#8C7662] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Rechercher une sandale, mule, couleur ou matière (ex: Camel, Cuir...)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm bg-transparent focus:outline-hidden text-[#2C2118] font-medium placeholder-[#8C7662]"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-[#8C7662] hover:text-[#2C2118]">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="p-2 bg-[#E8E2D9] hover:bg-[#2C2118] hover:text-white rounded-full text-xs font-bold transition-colors">
            <X className="w-4 h-4 text-[#2C2118] hover:text-white" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-6 py-3 bg-[#F4EFEB] border-b border-[#E8E2D9] flex items-center gap-2 overflow-x-auto">
          <span className="text-[11px] font-bold text-[#8C7662] uppercase tracking-wider shrink-0">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-3 py-1 bg-white hover:bg-[#2C2118] hover:text-[#D4A373] border border-[#E8E2D9] text-[#3D3028] text-xs font-medium rounded-full transition-colors shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-96 overflow-y-auto p-6 space-y-3">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-[#7C6E65] space-y-2">
              <p className="font-semibold text-sm">Aucun produit ne correspond à "{searchTerm}"</p>
              <p className="text-xs text-[#8C7662]">Essayez avec un autre mot-clé comme "Mule", "Cuir" ou "Pointure".</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-2xl border border-[#E8E2D9] hover:bg-[#FAF8F5] hover:border-[#D4A373] cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover bg-[#F4EFEB]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#2C2118] group-hover:text-[#6B401D] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#7C6E65] line-clamp-1">{product.subtitle}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-black text-[#2C2118]">
                        {formatPrice(product.price, currency)}
                      </span>
                      {product.discountBadge && (
                        <span className="text-[10px] bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded font-bold">
                          {product.discountBadge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#8C7662] group-hover:text-[#2C2118] transition-colors">
                  <span className="text-xs font-bold hidden sm:inline">Voir</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
