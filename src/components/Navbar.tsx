import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, Truck, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { Currency } from '../utils/format';
import { Logo } from './Logo';
import { Language, TRANSLATIONS } from '../utils/i18n';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  activeCategory,
  onSelectCategory,
  currency,
  onCurrencyChange,
  lang,
  onLanguageChange
}) => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const announcements = [
    { icon: Truck, text: t.freeShipping },
    { icon: ShieldCheck, text: `${t.codBadge} • ${t.returnsBadge}` },
    { icon: Sparkles, text: t.announcement }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const CurrentIcon = announcements[tickerIndex].icon;

  const siteSections = [
    { href: '#accueil', label: t.navHome },
    { href: '#boutique', label: t.navProducts },
    { href: '#histoire', label: t.navStory },
    { href: '#avis', label: t.navReviews },
    { href: '#faq', label: t.navFaq },
    { href: '#contact', label: t.navContact }
  ];

  const handleNavClick = (href: string) => {
    if (href === '#accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '#boutique') {
      onSelectCategory('all');
      const el = document.getElementById('boutique');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs transition-all border-b border-[#E8E2D9]">
      {/* Top Announcement Bar */}
      <div className="bg-[#2C2118] text-[#FAF8F5] text-xs py-2 px-3 sm:px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex-1 flex justify-center sm:justify-start items-center gap-2 font-medium tracking-wide min-w-0">
            <CurrentIcon className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
            <span className="truncate text-[11px] sm:text-xs">{announcements[tickerIndex].text}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium text-[#DDD3C7] shrink-0">
            <div className="hidden sm:flex items-center gap-1">
              <span>DH (MAD)</span>
            </div>
            <span className="hidden sm:inline">|</span>

            {/* Language Switcher Buttons */}
            <div className="flex items-center bg-[#3D3028] p-0.5 rounded-full border border-[#D4A373]/30">
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 ${
                  lang === 'ar'
                    ? 'bg-[#D4A373] text-[#2C2118] shadow-xs'
                    : 'text-[#DDD3C7] hover:text-white'
                }`}
                title="العربية"
              >
                <span>العربية</span>
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'fr'
                    ? 'bg-[#D4A373] text-[#2C2118] shadow-xs'
                    : 'text-[#DDD3C7] hover:text-white'
                }`}
                title="Français"
              >
                <span>FR</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#3D3028] hover:text-[#2C2118] focus:outline-hidden shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-initial flex justify-center md:justify-start items-center min-w-0 px-1 overflow-hidden">
            <button
              onClick={() => onSelectCategory('all')}
              className="group focus:outline-hidden py-1 max-w-full"
            >
              <Logo size="md" variant="dark" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
            {siteSections.map((section) => (
              <button
                key={section.href}
                onClick={() => handleNavClick(section.href)}
                className="text-xs font-bold tracking-wider uppercase text-[#6B5746] hover:text-[#2C2118] transition-colors relative py-2"
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1.5 sm:space-x-4 rtl:space-x-reverse shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-1.5 sm:p-2 text-[#3D3028] hover:text-[#2C2118] hover:bg-[#F4EFEB] rounded-full transition-colors relative"
              aria-label={t.search}
              title={t.search}
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenWishlist}
              className="p-1.5 sm:p-2 text-[#3D3028] hover:text-[#2C2118] hover:bg-[#F4EFEB] rounded-full transition-colors relative"
              aria-label={t.wishlist}
              title={t.wishlist}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="flex items-center gap-1.5 sm:gap-2 bg-[#2C2118] text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-[#3D3028] transition-all shadow-xs hover:shadow-md group"
              aria-label={t.cart}
            >
              <ShoppingBag className="w-4 h-4 text-[#D4A373] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">{t.cart}</span>
              <span className="bg-[#D4A373] text-[#2C2118] text-xs font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Audience Strip - 3 Buttons: Homme, Femme, Enfant */}
      <div className="bg-[#FAF8F5] border-t border-[#E8E2D9] px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-center gap-3 sm:gap-4">
          {[
            { id: 'homme', label: t.catHomme },
            { id: 'femme', label: t.catFemme },
            { id: 'enfant', label: t.catEnfant }
          ].map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('boutique');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex-1 py-2.5 px-4 sm:px-6 rounded-full text-center text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2C2118] text-[#D4A373] shadow-md scale-105 border border-[#2C2118]'
                    : 'bg-[#F4EFEB] text-[#6B5746] hover:bg-[#E8E2D9] hover:text-[#2C2118] border border-[#E8E2D9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D9] bg-[#F4EFEB] px-4 pt-4 pb-6 space-y-2">
          <p className="text-[11px] font-bold text-[#8C7662] uppercase tracking-widest px-2 mb-1">
            {lang === 'ar' ? 'قائمة التنقل' : 'Navigation du Site'}
          </p>
          {siteSections.map((section) => (
            <button
              key={section.href}
              onClick={() => {
                handleNavClick(section.href);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-start px-3 py-2.5 rounded-lg text-sm font-bold text-[#2C2118] hover:bg-[#ECE5DD] transition-colors"
            >
              {section.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#E8E2D9] text-xs text-[#7C6E65] flex justify-between items-center px-2">
            <span>{lang === 'ar' ? 'العملة: الدرهم المغربي (MAD)' : 'Devise: DH Marocain (MAD)'}</span>
            <div className="flex gap-2">
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-1 rounded text-xs font-bold ${lang === 'ar' ? 'bg-[#2C2118] text-[#D4A373]' : 'bg-[#E8E2D9] text-[#3D3028]'}`}
              >
                العربية
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-1 rounded text-xs font-bold ${lang === 'fr' ? 'bg-[#2C2118] text-[#D4A373]' : 'bg-[#E8E2D9] text-[#3D3028]'}`}
              >
                Français
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
