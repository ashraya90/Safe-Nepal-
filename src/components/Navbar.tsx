import React from 'react';
import { ShieldAlert, BookOpen, CheckSquare, ExternalLink, PhoneCall, Languages, Home } from 'lucide-react';

export type ActivePage = 'dashboard' | 'simple-mode' | 'family-plan' | 'official-alerts';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  lang: 'en' | 'ne';
  onToggleLang: () => void;
  onOpenHotlines: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  lang,
  onToggleLang,
  onOpenHotlines,
}) => {
  return (
    <>
      {/* Desktop & Tablet Top Navigation */}
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer shrink-0"
            aria-label="SafeNepal Home"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold shadow-md shadow-orange-600/20 group-hover:bg-orange-500 transition-colors">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 whitespace-nowrap">
                SafeNepal
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap ${
                activePage === 'dashboard' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              {lang === 'en' ? 'Dashboard' : 'गृहपृष्ठ'}
            </button>
            <button
              onClick={() => onNavigate('simple-mode')}
              className={`hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap ${
                activePage === 'simple-mode' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              {lang === 'en' ? 'Simple Mode' : 'सुरक्षा निर्देशिका'}
            </button>
            <button
              onClick={() => onNavigate('family-plan')}
              className={`hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap ${
                activePage === 'family-plan' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              {lang === 'en' ? 'Family Preparedness' : 'पारिवारिक तयारी'}
            </button>
            <button
              onClick={() => onNavigate('official-alerts')}
              className={`hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap ${
                activePage === 'official-alerts' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              {lang === 'en' ? 'Official Alerts & Portals' : 'आधिकारिक सूचना'}
            </button>
          </nav>

          {/* Zone 3: Actions (Language switcher & Emergency hotlines trigger) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer min-h-[44px]"
              title={lang === 'en' ? 'Switch to Nepali' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4 text-orange-400" />
              <span>{lang === 'en' ? 'नेपाली' : 'English'}</span>
            </button>

            <button
              onClick={onOpenHotlines}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-sm transition-colors cursor-pointer min-h-[44px] whitespace-nowrap"
              aria-label="Emergency hotlines"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Hotlines 100/1155' : 'आपतकालीन फोन'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fixed Bottom Navigation Bar (Thumb Zone) */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 safe-area-pb"
      >
        <div className="grid grid-cols-4 items-center h-16 max-w-md mx-auto px-1">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`flex flex-col items-center justify-center h-full min-h-[44px] py-1 cursor-pointer transition-colors ${
              activePage === 'dashboard' ? 'text-orange-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Home className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-medium tracking-tight">
              {lang === 'en' ? 'Home' : 'गृह'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('simple-mode')}
            className={`flex flex-col items-center justify-center h-full min-h-[44px] py-1 cursor-pointer transition-colors ${
              activePage === 'simple-mode' ? 'text-orange-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-medium tracking-tight">
              {lang === 'en' ? 'Simple Mode' : 'निर्देशिका'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('family-plan')}
            className={`flex flex-col items-center justify-center h-full min-h-[44px] py-1 cursor-pointer transition-colors ${
              activePage === 'family-plan' ? 'text-orange-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckSquare className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-medium tracking-tight">
              {lang === 'en' ? 'Family Plan' : 'तयारी'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('official-alerts')}
            className={`flex flex-col items-center justify-center h-full min-h-[44px] py-1 cursor-pointer transition-colors ${
              activePage === 'official-alerts' ? 'text-orange-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ExternalLink className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-medium tracking-tight">
              {lang === 'en' ? 'Alerts' : 'सूचना'}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
