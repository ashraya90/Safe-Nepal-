import React, { useState, useEffect } from 'react';
import { Navbar, ActivePage } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { SimpleMode } from './components/SimpleMode';
import { FamilyPreparedness } from './components/FamilyPreparedness';
import { OfficialAlerts } from './components/OfficialAlerts';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { EmergencyHotlineModal } from './components/EmergencyHotlineModal';
import { DisasterId } from './types/disaster';
import { ShieldAlert, ExternalLink, Heart, Globe, Award, BookOpen, CheckSquare } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('dashboard');
  const [selectedDisasterId, setSelectedDisasterId] = useState<DisasterId>('earthquake');
  const [isHotlineModalOpen, setIsHotlineModalOpen] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  // Language state (English 'en' by default, with structured Nepali 'ne' translations)
  const [lang, setLang] = useState<'en' | 'ne'>(() => {
    try {
      const savedLang = localStorage.getItem('safenepal_lang');
      if (savedLang === 'ne' || savedLang === 'en') {
        return savedLang;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('safenepal_lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ne' : 'en'));
  };

  const handleSelectDisasterFromHome = (id: DisasterId) => {
    setSelectedDisasterId(id);
    setActivePage('simple-mode');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    setShowQuizModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenHotlines={() => setIsHotlineModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {activePage === 'dashboard' && (
          <>
            <HomeDashboard
              onNavigate={handleNavigate}
              onSelectDisaster={handleSelectDisasterFromHome}
              lang={lang}
              onOpenHotlines={() => setIsHotlineModalOpen(true)}
            />

            {/* Embedded Interactive Quiz on Dashboard */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
              <InteractiveQuiz
                lang={lang}
                onNavigateToGuides={(disasterId) => {
                  if (disasterId) {
                    setSelectedDisasterId(disasterId as DisasterId);
                  }
                  setActivePage('simple-mode');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          </>
        )}

        {activePage === 'simple-mode' && (
          <SimpleMode
            selectedDisasterId={selectedDisasterId}
            onSelectDisaster={(id) => setSelectedDisasterId(id)}
            lang={lang}
          />
        )}

        {activePage === 'family-plan' && (
          <FamilyPreparedness lang={lang} />
        )}

        {activePage === 'official-alerts' && (
          <OfficialAlerts lang={lang} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-10 no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-white font-extrabold text-base mb-1">
                <ShieldAlert className="w-5 h-5 text-orange-500" />
                <span>SafeNepal (सेफ नेपाल)</span>
              </div>
              <p className="max-w-md text-slate-400 text-xs leading-relaxed">
                {lang === 'en'
                  ? 'A community disaster preparedness platform designed for Nepal. Verified safety steps, 72-hour family Go-Bag checklist, and official government resources.'
                  : 'नेपालका लागि समर्पित विपद् पूर्वतयारी मञ्च। प्रमाणित सुरक्षा चरणहरू, आपतकालीन झोला सूची र आधिकारिक सरकारी स्रोतहरू।'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-300">
              <a
                href="https://ndrrma.gov.np/en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>NDRRMA Nepal</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href="https://www.dhm.gov.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>DHM Nepal</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href="https://bipadportal.gov.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>BIPAD Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href="https://nrcs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Nepal Red Cross</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <p>
              {lang === 'en'
                ? 'Educational prototype for disaster risk reduction. Not an emergency dispatch service.'
                : 'विपद् जोखिम न्यूनीकरण सम्बन्धी शैक्षिक पूर्वतयारी प्रोटोटाइप।'}
            </p>
            <p className="flex items-center gap-1">
              <span>Dedicated to a resilient & disaster-ready Nepal</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Emergency Hotline Modal */}
      <EmergencyHotlineModal
        isOpen={isHotlineModalOpen}
        onClose={() => setIsHotlineModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
