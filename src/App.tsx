import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { FilterSidebar } from './components/FilterSidebar';
import { CartDrawer } from './components/CartDrawer';
import { CODCheckoutModal } from './components/CODCheckoutModal';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { TrustFeatures } from './components/TrustFeatures';
import { ReviewsSection } from './components/ReviewsSection';
import { BrandStory } from './components/BrandStory';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { INITIAL_PRODUCTS } from './data/products';
import { Product, CartItem, FilterState, ProductColor } from './types';
import { Currency } from './utils/format';
import { SlidersHorizontal, LayoutGrid, Grid, ListFilter, RotateCcw } from 'lucide-react';

export default function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<string>('femme');
  const [currency, setCurrency] = useState<Currency>('MAD');

  // Filter State
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    sizes: [],
    colors: [],
    maxPrice: 600,
    materials: [],
    inStockOnly: false,
    sortBy: 'popular'
  });

  // Cart & Wishlist persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('azag_cart') || localStorage.getItem('klaim_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('azag_wishlist') || localStorage.getItem('klaim_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Drawer / Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterMobileOpen, setIsFilterMobileOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCODOpen, setIsCODOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [directCODProduct, setDirectCODProduct] = useState<{
    product: Product;
    size: number;
    color: ProductColor;
    quantity: number;
  } | null>(null);

  const [gridColumns, setGridColumns] = useState<3 | 4>(3);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('azag_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('azag_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Handle Category selection from Navbar/Banner
  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    setFilters(prev => ({ ...prev, category: catId }));
    window.scrollTo({ top: 420, behavior: 'smooth' });
  };

  // Wishlist Toggle
  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // Add To Cart (with size & color)
  const handleAddToCart = (product: Product, size: number, color: ProductColor, quantity: number = 1) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === size && item.selectedColor.name === color.name
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      } else {
        return [...prev, { product, selectedSize: size, selectedColor: color, quantity }];
      }
    });
  };

  // Direct COD Express Button Handler
  const handleOpenCODDirect = (product: Product, size: number, color: ProductColor, quantity: number = 1) => {
    setDirectCODProduct({ product, size, color, quantity });
    setSelectedProduct(null);
    setIsCODOpen(true);
  };

  const handleOpenCartCOD = () => {
    setDirectCODProduct(null);
    setIsCODOpen(true);
  };

  // Filtered & Sorted Products calculation
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Audience / Category filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'homme' || activeCategory === 'femme' || activeCategory === 'enfant') {
          const audience = p.targetAudience || 'femme';
          if (audience !== activeCategory) {
            return false;
          }
        } else if (p.category !== activeCategory) {
          return false;
        }
      }
      // Price filter
      if (p.price > filters.maxPrice) {
        return false;
      }
      // Sizes filter
      if (filters.sizes.length > 0) {
        const hasSize = filters.sizes.some(s => p.sizes.includes(s));
        if (!hasSize) return false;
      }
      // Colors filter
      if (filters.colors.length > 0) {
        const hasColor = filters.colors.some(c => p.colors.some(pc => pc.name.toLowerCase().includes(c.toLowerCase())));
        if (!hasColor) return false;
      }
      // In stock filter
      if (filters.inStockOnly && !p.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [products, activeCategory, filters]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3D3028] flex flex-col font-sans selection:bg-[#D4A373] selection:text-[#2C2118]">
      {/* Top Header Navbar */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Hero Banner Header */}
      <div id="accueil">
        <HeroBanner
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          totalProducts={products.length}
        />
      </div>

      {/* Main Boutique Content Area */}
      <main id="boutique" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Toolbar & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8E2D9]">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2C2118]">
              {
                {
                  all: 'Toutes nos Chaussures & Sandales',
                  homme: 'Collection Homme — Cuir Véritable',
                  femme: 'Collection Femme — Élégance & Confort',
                  enfant: 'Collection Enfant — Souplesse & Qualité',
                  mocassins: 'Nos Mocassins & Loafers en Cuir',
                  baskets: 'Nos Baskets & Sneakers Chic',
                  escarpins: 'Nos Escarpins & Talons Élégants',
                  sandales: 'Nos Sandales & Nu-Pieds',
                  mules: 'Nos Mules & Sliders Artisanales',
                  bottines: 'Nos Bottines & Derbies en Cuir'
                }[activeCategory] || `Collection ${activeCategory}`
              }
            </h2>
            <p className="text-xs text-[#7C6E65] mt-0.5">
              Affichage de <strong className="text-[#2C2118] font-bold">{filteredProducts.length}</strong> modèles disponibles en livraison gratuite dès 400 DH
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterMobileOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white text-[#3D3028] border border-[#E8E2D9] px-4 py-2 rounded-xl text-xs font-bold shadow-xs hover:bg-[#F4EFEB]"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#2C2118]" />
              <span>Filtres</span>
            </button>

            {/* Grid Columns Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-white border border-[#E8E2D9] p-1 rounded-xl">
              <button
                onClick={() => setGridColumns(3)}
                className={`p-1.5 rounded-lg transition-colors ${gridColumns === 3 ? 'bg-[#2C2118] text-[#D4A373]' : 'text-[#7C6E65] hover:text-[#2C2118]'}`}
                title="3 Colonnes"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                className={`p-1.5 rounded-lg transition-colors ${gridColumns === 4 ? 'bg-[#2C2118] text-[#D4A373]' : 'text-[#7C6E65] hover:text-[#2C2118]'}`}
                title="4 Colonnes"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-white border border-[#E8E2D9] px-3 py-2 rounded-xl text-xs font-medium shadow-xs">
              <span className="text-[#7C6E65] font-bold uppercase text-[10px]">Trier:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
                className="bg-transparent focus:outline-hidden text-[#2C2118] font-bold cursor-pointer"
              >
                <option value="popular">Meilleures Ventes</option>
                <option value="newest">Nouveautés</option>
                <option value="price-asc">Prix: Croissant</option>
                <option value="price-desc">Prix: Décroissant</option>
                <option value="rating">Meilleures Notes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Store Grid + Desktop Sidebar layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <FilterSidebar
              filters={filters}
              onChangeFilters={(updates) => setFilters(prev => ({ ...prev, ...updates }))}
              onResetFilters={() => setFilters({
                category: 'all',
                sizes: [],
                colors: [],
                maxPrice: 600,
                materials: [],
                inStockOnly: false,
                sortBy: 'popular'
              })}
              isOpen={false}
              onClose={() => {}}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-4">
                <div className="w-16 h-16 bg-stone-100 text-stone-400 rounded-full flex items-center justify-center mx-auto">
                  <SlidersHorizontal className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Aucune sandale ne correspond aux filtres</h3>
                <p className="text-xs text-stone-500 max-w-md mx-auto">
                  Essayez d'élargir la plage de prix ou de réinitialiser vos critères de recherche de pointure/couleur.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setFilters({
                      category: 'all',
                      sizes: [],
                      colors: [],
                      maxPrice: 600,
                      materials: [],
                      inStockOnly: false,
                      sortBy: 'popular'
                    });
                  }}
                  className="bg-stone-900 text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Réinitialiser tous les filtres
                </button>
              </div>
            ) : (
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColumns === 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-3'} gap-6 sm:gap-8`}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currency={currency}
                    isWishlisted={wishlist.some(p => p.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onQuickView={(p) => setSelectedProduct(p)}
                    onQuickAddToCart={(p, sz, col) => handleAddToCart(p, sz, col, 1)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Brand Story & Artisanat Section */}
      <BrandStory />

      {/* Trust & Guarantees Bar */}
      <TrustFeatures />

      {/* Customer Reviews Carousel */}
      <div id="avis">
        <ReviewsSection />
      </div>

      {/* FAQ & Help Section */}
      <FAQSection />

      {/* Contact & Showroom Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        currency={currency}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlist.some(p => p.id === selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onOpenCODCheckout={handleOpenCODDirect}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <FilterSidebar
        filters={filters}
        onChangeFilters={(updates) => setFilters(prev => ({ ...prev, ...updates }))}
        onResetFilters={() => setFilters({
          category: 'all',
          sizes: [],
          colors: [],
          maxPrice: 600,
          materials: [],
          inStockOnly: false,
          sortBy: 'popular'
        })}
        isOpen={isFilterMobileOpen}
        onClose={() => setIsFilterMobileOpen(false)}
        totalResults={filteredProducts.length}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        onUpdateQuantity={(idx, newQty) => {
          if (newQty <= 0) {
            setCart(prev => prev.filter((_, i) => i !== idx));
          } else {
            setCart(prev => {
              const copy = [...prev];
              copy[idx].quantity = newQty;
              return copy;
            });
          }
        }}
        onRemoveItem={(idx) => setCart(prev => prev.filter((_, i) => i !== idx))}
        onOpenCODCheckout={handleOpenCartCOD}
      />

      <CODCheckoutModal
        isOpen={isCODOpen}
        onClose={() => setIsCODOpen(false)}
        items={cart}
        directProduct={directCODProduct}
        currency={currency}
        onOrderSuccess={() => {
          if (!directCODProduct) {
            setCart([]);
          }
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        currency={currency}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        currency={currency}
        onRemoveWishlist={handleToggleWishlist}
        onQuickView={(p) => setSelectedProduct(p)}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
