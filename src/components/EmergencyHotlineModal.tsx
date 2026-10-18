import React from 'react';
import { EMERGENCY_HOTLINES } from '../data/officialResources';
import { PhoneCall, X, ShieldAlert } from 'lucide-react';

interface EmergencyHotlineModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ne';
}

export const EmergencyHotlineModal: React.FC<EmergencyHotlineModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hotline-modal-title"
      >
        {/* Modal Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h2 id="hotline-modal-title" className="text-base font-extrabold text-white">
                {lang === 'en' ? 'Nepal Emergency Hotlines' : 'नेपाल आपतकालीन हटलाइन'}
              </h2>
              <span className="text-[11px] text-slate-300">
                {lang === 'en' ? 'Verified 24/7 Government Dispatch' : '२४ सै घण्टा सञ्चालित सरकारी सेवा'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Hotlines List */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-3">
          <p className="text-xs text-slate-500 mb-2">
            {lang === 'en'
              ? 'Tap any number below to initiate a direct telephone call on your mobile device.'
              : 'फोन गर्न सम्बन्धित नम्बरमा थिच्नुहोस्:'}
          </p>

          {EMERGENCY_HOTLINES.map((hotline) => (
            <a
              key={hotline.number}
              href={`tel:${hotline.number}`}
              className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-orange-500 hover:bg-orange-50/40 transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-slate-900 font-mono group-hover:text-orange-600">
                    {hotline.number}
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {hotline.badge}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-800 mt-0.5">
                  {lang === 'en' ? hotline.name : hotline.nameNepali}
                </div>
                <div className="text-[11px] text-slate-500">
                  {hotline.agency}
                </div>
              </div>

              <div className="w-10 h-10 rounded-xl bg-orange-600 group-hover:bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs transition-colors">
                <PhoneCall className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Toll-free emergency numbers in Nepal</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'बन्द गर्नुहोस्'}
          </button>
        </div>
      </div>
    </div>
  );
};
