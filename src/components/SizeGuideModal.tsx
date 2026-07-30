import React from 'react';
import { X, Ruler, Footprints, CheckCircle2, ArrowLeft } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeChart = [
    { eu: 36, cm: '23.0 cm', us: '5.5', uk: '3.5' },
    { eu: 37, cm: '23.5 cm', us: '6.5', uk: '4.5' },
    { eu: 38, cm: '24.2 cm', us: '7.5', uk: '5.5' },
    { eu: 39, cm: '25.0 cm', us: '8.5', uk: '6.5' },
    { eu: 40, cm: '25.7 cm', us: '9.5', uk: '7.5' },
    { eu: 41, cm: '26.4 cm', us: '10.5', uk: '8.5' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-amber-700" />
            <span>Retour</span>
          </button>

          <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
            Guide des pointures
          </span>

          <button
            type="button"
            onClick={onClose}
            title="Fermer la fenêtre (X)"
            aria-label="Fermer"
            className="p-2 bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-700 rounded-full transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-amber-100 text-amber-900 rounded-2xl">
            <Ruler className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">Guide des Pointures AZAG</h3>
            <p className="text-xs text-stone-500">Trouvez votre pointure idéale en centimètres</p>
          </div>
        </div>

        {/* Size chart table */}
        <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-6">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-900 text-white uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th className="p-3">EU</th>
                <th className="p-3">Longueur Pied (CM)</th>
                <th className="p-3">US</th>
                <th className="p-3">UK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-700">
              {sizeChart.map((row) => (
                <tr key={row.eu} className="hover:bg-amber-50/50">
                  <td className="p-3 font-extrabold text-stone-900 bg-stone-50">{row.eu}</td>
                  <td className="p-3 font-bold text-amber-700">{row.cm}</td>
                  <td className="p-3">{row.us}</td>
                  <td className="p-3">{row.uk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
          <h4 className="font-bold text-stone-900 flex items-center gap-1.5">
            <Footprints className="w-4 h-4 text-amber-600" /> Conseil de mesure :
          </h4>
          <p>Posez votre pied nu à plat sur une feuille de papier, faites un trait au bout du talon et un au bout du plus grand orteil. Mesurez la distance en cm.</p>
          <div className="flex items-center gap-2 text-emerald-700 font-bold pt-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Nos chaussures et sandales taillent normalement. En cas d'hésitation entre deux pointures, nous recommandons la plus grande.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
