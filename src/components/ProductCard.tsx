import React, { useState } from 'react';
import { Heart, Star, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product, ProductColor } from '../types';
import { Currency, formatPrice } from '../utils/format';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onQuickAddToCart: (product: Product, size: number, color: ProductColor) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onQuickAddToCart
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0] || { name: 'Standard', hex: '#000', image: product.mainImage });
  const [isHovered, setIsHovered] = useState(false);
  const [addedSize, setAddedSize] = useState<number | null>(null);

  const displayImage = selectedColor.image || (isHovered && product.secondaryImage ? product.secondaryImage : product.mainImage);

  const handleSizeClick = (e: React.MouseEvent, size: number) => {
    e.stopPropagation();
    onQuickAddToCart(product, size, selectedColor);
    setAddedSize(size);
    setTimeout(() => setAddedSize(null), 1500);
  };

  return (
    <div
      className="group relative bg-white rounded-2xl border border-[#E8E2D9] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#D4A373]/50 transition-all duration-300 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Box */}
      <div className="relative aspect-4/3 sm:aspect-square w-full bg-[#F4EFEB] overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.discountBadge && (
            <span className="bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              {product.discountBadge}
            </span>
          )}
          {product.isBestSeller && !product.discountBadge && (
            <span className="bg-[#D4A373] text-[#2C2118] text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Best-Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#2C2118] text-[#D4A373] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Nouveau
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full transition-all duration-200 z-10 shadow-sm ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 shadow-md'
              : 'bg-white/80 text-[#3D3028] hover:bg-white hover:text-[#2C2118] hover:scale-110'
          }`}
          aria-label="Ajouter aux favoris"
          title="Ajouter aux favoris"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Quick View Floating Button on Hover */}
        <div className="absolute inset-x-4 bottom-4 z-10 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full bg-white/95 backdrop-blur-md text-[#2C2118] font-bold text-xs py-2.5 px-4 rounded-xl shadow-lg hover:bg-[#2C2118] hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4 text-[#D4A373]" />
            Aperçu Rapide
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Color Swatches */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mb-2.5">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(color);
                  }}
                  className={`w-4 h-4 rounded-full border border-[#E8E2D9] transition-all ${
                    selectedColor.name === color.name ? 'ring-2 ring-[#2C2118] scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              <span className="text-[11px] text-[#7C6E65] font-medium ml-1">
                {selectedColor.name}
              </span>
            </div>
          )}

          {/* Title & Subtitle */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-base sm:text-lg font-bold text-[#2C2118] group-hover:text-[#C08552] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#7C6E65] mt-1 line-clamp-1">
            {product.subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-[#D4A373]">
              <Star className="w-3.5 h-3.5 fill-[#D4A373]" />
              <span className="text-xs font-bold text-[#2C2118] ml-1">{product.rating}</span>
            </div>
            <span className="text-[11px] text-[#7C6E65]">({product.reviewsCount} avis)</span>
          </div>
        </div>

        {/* Price & Quick Size Selector */}
        <div className="mt-4 pt-3 border-t border-[#F4EFEB]">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg sm:text-xl font-black text-[#2C2118]">
              {formatPrice(product.price, currency)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8C7662] line-through font-medium">
                {formatPrice(product.originalPrice, currency)}
              </span>
            )}
          </div>

          {/* Quick Add Size Buttons */}
          <div>
            <div className="text-[10px] font-bold text-[#8C7662] uppercase tracking-wider mb-1 flex justify-between items-center">
              <span>Ajout rapide pointure</span>
              {addedSize && (
                <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Ajouté ({addedSize})
                </span>
              )}
            </div>

            <div className="grid grid-cols-6 gap-1">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => handleSizeClick(e, size)}
                  className={`py-1 rounded text-xs font-semibold border transition-all ${
                    addedSize === size
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-[#F4EFEB] text-[#3D3028] border-[#E8E2D9] hover:bg-[#2C2118] hover:text-[#D4A373] hover:border-[#2C2118]'
                  }`}
                  title={`Ajouter au panier en pointure ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
