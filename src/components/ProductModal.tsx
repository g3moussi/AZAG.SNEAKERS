import React, { useState } from 'react';
import { X, Star, Heart, Truck, ShieldCheck, Ruler, ChevronRight, ArrowLeft } from 'lucide-react';
import { Product, ProductColor } from '../types';
import { Currency, formatPrice } from '../utils/format';
import { Language, TRANSLATIONS, getTranslatedProduct } from '../utils/i18n';

interface ProductModalProps {
  product: Product | null;
  currency: Currency;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: number, color: ProductColor, quantity: number) => void;
  onOpenCODCheckout: (product: Product, size: number, color: ProductColor, quantity: number) => void;
  onOpenSizeGuide: () => void;
  lang?: Language;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product: rawProduct,
  currency,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenCODCheckout,
  onOpenSizeGuide,
  lang = 'fr'
}) => {
  if (!rawProduct) return null;

  const product = getTranslatedProduct(rawProduct, lang);
  const t = TRANSLATIONS[lang];

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0] || { name: 'Standard', hex: '#000', image: product.mainImage });
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[1] || product.sizes[0]);
  const [selectedImage, setSelectedImage] = useState<string>(selectedColor.image || product.mainImage);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'materials' | 'shipping' | 'reviews'>('desc');

  // Collect all unique images for this product (color images + gallery)
  const allImages = Array.from(new Set([
    product.mainImage,
    ...(product.colors.map(c => c.image).filter(Boolean) as string[]),
    ...(product.gallery || [])
  ]));

  const galleryImages = allImages;

  const handleColorChange = (color: ProductColor) => {
    setSelectedColor(color);
    if (color.image) {
      setSelectedImage(color.image);
    }
  };

  const handleThumbnailClick = (img: string) => {
    setSelectedImage(img);
    // Auto-select corresponding color if matching
    const matchingColor = product.colors.find(c => c.image === img);
    if (matchingColor) {
      setSelectedColor(matchingColor);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#2C2118]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#E8E2D9] overflow-hidden my-8">
        {/* Sticky Header Navigation Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-[#6B5A4E] hover:text-[#2C2118] bg-white hover:bg-[#F4EFEB] px-3.5 py-1.5 rounded-xl border border-[#E8E2D9] transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#8C5628]" />
            <span>Retour à la boutique</span>
          </button>

          <span className="text-xs font-extrabold text-[#2C2118] uppercase tracking-wider hidden sm:inline-block">
            {product.name}
          </span>

          <button
            type="button"
            onClick={onClose}
            title="Fermer la fenêtre (X)"
            aria-label="Fermer"
            className="p-2 bg-[#F4EFEB] hover:bg-[#2C2118] hover:text-white rounded-full transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5 text-[#3D3028] hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image Gallery */}
          <div className="p-6 bg-[#FAF8F5] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8E2D9]">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-xs border border-[#E8E2D9] mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {product.discountBadge && (
                <span className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.discountBadge}
                </span>
              )}
            </div>

            {/* Thumbnail switcher */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === img ? 'border-[#2C2118] ring-2 ring-[#D4A373]/40' : 'border-[#E8E2D9] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#6B401D] uppercase bg-[#F5EBE6] px-2.5 py-1 rounded-md border border-[#E6CCB2]">
                  {product.category === 'cuir' ? 'Cuir Véritable' : product.category.toUpperCase()}
                </span>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                    isWishlisted ? 'bg-rose-50 text-rose-600 border-rose-200' : 'text-[#6B5746] border-[#E8E2D9] hover:bg-[#F4EFEB]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  {isWishlisted ? 'Favori' : 'Ajouter'}
                </button>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2118] mt-2">
                {product.name}
              </h2>
              <p className="text-xs text-[#7C6E65] mt-1">{product.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center text-[#D4A373]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A373]" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#2C2118]">{product.rating}</span>
                <span className="text-xs text-[#7C6E65]">({product.reviewsCount} {t.verifiedBuyer})</span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-black text-[#2C2118]">
                  {formatPrice(product.price, currency)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8C7662] line-through">
                    {formatPrice(product.originalPrice, currency)}
                  </span>
                )}
                <span className="text-xs text-emerald-700 bg-emerald-50 font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                  {t.inStock}
                </span>
              </div>

              <hr className="my-5 border-[#E8E2D9]" />

              {/* Color Picker */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-[#3D3028] uppercase tracking-wider mb-2">
                  {t.selectColor}: <span className="font-medium text-[#2C2118]">{selectedColor.name}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => handleColorChange(col)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                        selectedColor.name === col.name
                          ? 'border-[#2C2118] bg-[#2C2118] text-white shadow-xs'
                          : 'border-[#E8E2D9] text-[#3D3028] hover:bg-[#F4EFEB]'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-[#E8E2D9]" style={{ backgroundColor: col.hex }} />
                      {col.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Picker */}
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-[#3D3028] uppercase tracking-wider">
                    {t.selectSize}: <span className="font-black text-[#2C2118] text-sm">{selectedSize}</span>
                  </label>
                  <button
                    onClick={onOpenSizeGuide}
                    className="flex items-center gap-1 text-xs text-[#8C5628] hover:text-[#6B401D] font-medium underline"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    {t.sizeGuide}
                  </button>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2.5 rounded-xl text-sm font-bold border transition-all ${
                        selectedSize === sz
                          ? 'bg-[#2C2118] text-[#D4A373] border-[#2C2118] shadow-sm scale-105'
                          : 'bg-[#F4EFEB] text-[#3D3028] border-[#E8E2D9] hover:bg-[#ECE5DD]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="mb-6 flex items-center gap-4">
                <span className="text-xs font-bold text-[#3D3028] uppercase tracking-wider">{t.quantity}:</span>
                <div className="flex items-center border border-[#E8E2D9] rounded-xl overflow-hidden bg-[#F4EFEB]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-[#3D3028] hover:bg-[#ECE5DD] font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-extrabold text-[#2C2118]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-[#3D3028] hover:bg-[#ECE5DD] font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Action Button */}
              <div className="space-y-3">
                {/* Direct Order Button */}
                <button
                  onClick={() => onOpenCODCheckout(product, selectedSize, selectedColor, quantity)}
                  className="w-full bg-[#2C2118] text-white font-extrabold py-4 px-6 rounded-2xl hover:bg-[#3D3028] transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transform active:scale-98 group cursor-pointer"
                >
                  <Truck className="w-5 h-5 text-[#D4A373] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold">
                    {t.buyNowCOD} • {formatPrice(product.price * quantity, currency)}
                  </span>
                </button>
              </div>

              {/* Information Accordion Tabs */}
              <div className="mt-8 pt-4 border-t border-[#E8E2D9]">
                <div className="flex border-b border-[#E8E2D9] text-xs font-bold">
                  <button
                    onClick={() => setActiveTab('desc')}
                    className={`pb-2 px-3 transition-colors border-b-2 ${
                      activeTab === 'desc' ? 'border-[#2C2118] text-[#2C2118]' : 'border-transparent text-[#7C6E65] hover:text-[#2C2118]'
                    }`}
                  >
                    {t.descriptionTitle}
                  </button>
                  <button
                    onClick={() => setActiveTab('materials')}
                    className={`pb-2 px-3 transition-colors border-b-2 ${
                      activeTab === 'materials' ? 'border-[#2C2118] text-[#2C2118]' : 'border-transparent text-[#7C6E65] hover:text-[#2C2118]'
                    }`}
                  >
                    {t.materialsTitle}
                  </button>
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className={`pb-2 px-3 transition-colors border-b-2 ${
                      activeTab === 'shipping' ? 'border-[#2C2118] text-[#2C2118]' : 'border-transparent text-[#7C6E65] hover:text-[#2C2118]'
                    }`}
                  >
                    Livraison & Retour
                  </button>
                </div>

                <div className="py-4 text-xs text-stone-600 leading-relaxed">
                  {activeTab === 'desc' && <p>{product.description}</p>}
                  {activeTab === 'materials' && (
                    <ul className="list-disc pl-4 space-y-1">
                      {product.materials.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'shipping' && (
                    <div className="space-y-2">
                      <p>🚚 <strong>Livraison GRATUITE & Express :</strong> 0 DH partout au Maroc en 24h à 48h (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, etc.).</p>
                      <p>💵 <strong>Paiement à la livraison :</strong> Payez en espèces directement au livreur après inspection du produit.</p>
                      <p>🔄 <strong>Échange gratuit :</strong> Changement de pointure gratuit sous 7 jours.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
