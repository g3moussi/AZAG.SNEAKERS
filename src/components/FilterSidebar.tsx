import React from 'react';
import { SlidersHorizontal, RotateCcw, Check, X } from 'lucide-react';
import { FilterState } from '../types';

interface FilterSidebarProps {
  filters: FilterState;
  onChangeFilters: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
  totalResults: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onChangeFilters,
  onResetFilters,
  isOpen,
  onClose,
  totalResults
}) => {
  const sizesList = [36, 37, 38, 39, 40, 41];
  const colorOptions = [
    { name: 'Camel', hex: '#C18553' },
    { name: 'Noir', hex: '#1C1917' },
    { name: 'Beige', hex: '#E5D3B3' },
    { name: 'Or', hex: '#D4AF37' },
    { name: 'Cognac', hex: '#8B4513' },
    { name: 'Olive', hex: '#6B8E23' }
  ];

  const handleSizeToggle = (size: number) => {
    const updated = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    onChangeFilters({ sizes: updated });
  };

  const handleColorToggle = (colorName: string) => {
    const updated = filters.colors.includes(colorName)
      ? filters.colors.filter(c => c !== colorName)
      : [...filters.colors, colorName];
    onChangeFilters({ colors: updated });
  };

  const content = (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D9]">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#2C2118]" />
          <h3 className="font-bold text-[#2C2118] text-base">Filtres ({totalResults})</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs text-[#7C6E65] hover:text-[#2C2118] flex items-center gap-1 font-medium underline"
        >
          <RotateCcw className="w-3 h-3" /> Reinitialiser
        </button>
      </div>

      {/* Pointure Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3028] mb-3">
          Pointure (EU)
        </label>
        <div className="grid grid-cols-6 gap-1.5">
          {sizesList.map((size) => {
            const isSelected = filters.sizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? 'bg-[#2C2118] text-[#D4A373] border-[#2C2118] shadow-xs'
                    : 'bg-[#F4EFEB] text-[#3D3028] border-[#E8E2D9] hover:bg-[#ECE5DD]'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Couleur Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3028] mb-3">
          Couleur
        </label>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((c) => {
            const isSelected = filters.colors.includes(c.name);
            return (
              <button
                key={c.name}
                onClick={() => handleColorToggle(c.name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-[#2C2118] bg-[#2C2118] text-white shadow-xs'
                    : 'border-[#E8E2D9] bg-white text-[#3D3028] hover:bg-[#F4EFEB]'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full border border-[#E8E2D9]" style={{ backgroundColor: c.hex }} />
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Prix Filter */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3D3028]">
            Prix Maximum
          </label>
          <span className="text-xs font-black text-[#2C2118] bg-[#F4EFEB] px-2.5 py-1 rounded-md">
            {filters.maxPrice} DH
          </span>
        </div>
        <input
          type="range"
          min={250}
          max={600}
          step={10}
          value={filters.maxPrice}
          onChange={(e) => onChangeFilters({ maxPrice: Number(e.target.value) })}
          className="w-full accent-[#2C2118] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#7C6E65] font-bold mt-1">
          <span>250 DH</span>
          <span>600 DH</span>
        </div>
      </div>

      {/* In Stock Only */}
      <div className="pt-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onChangeFilters({ inStockOnly: e.target.checked })}
            className="w-4 h-4 rounded-sm border-[#E8E2D9] text-[#2C2118] focus:ring-[#2C2118]"
          />
          <span className="text-xs font-semibold text-[#3D3028]">Modèles en stock uniquement</span>
        </label>
      </div>
    </div>
  );

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-[#2C2118]/60 backdrop-blur-xs flex justify-end lg:hidden">
        <div className="bg-white w-80 h-full p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex justify-end mb-4">
              <button onClick={onClose} className="p-2 bg-[#F4EFEB] rounded-full text-[#3D3028]">
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
          </div>
          <button
            onClick={onClose}
            className="mt-8 w-full bg-[#2C2118] text-[#D4A373] font-bold py-3 rounded-xl"
          >
            Afficher les résultats ({totalResults})
          </button>
        </div>
      </div>
    );
  }

  return <div className="hidden lg:block bg-[#F4EFEB]/80 p-6 rounded-2xl border border-[#E8E2D9]">{content}</div>;
};
