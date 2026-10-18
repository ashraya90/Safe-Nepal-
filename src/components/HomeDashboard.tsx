import React from 'react';
import { DISASTER_GUIDES } from '../data/disasterGuides';
import { DisasterId } from '../types/disaster';
import { ActivePage } from './Navbar';
import { 
  ShieldAlert, 
  ArrowRight, 
  BookOpen, 
  CheckSquare, 
  ExternalLink, 
  PhoneCall, 
  HelpCircle, 
  HeartHandshake, 
  MapPin, 
  AlertCircle 
} from 'lucide-react';

interface HomeDashboardProps {
  onNavigate: (page: ActivePage) => void;
  onSelectDisaster: (id: DisasterId) => void;
  lang: 'en' | 'ne';
  onOpenHotlines: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onNavigate,
  onSelectDisaster,
  lang,
  onOpenHotlines,
}) => {
  const handleDisasterClick = (id: DisasterId) => {
    onSelectDisaster(id);
    onNavigate('simple-mode');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 md:pb-12 space-y-10">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-md relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
            <ShieldAlert className="w-4 h-4" />
            <span>{lang === 'en' ? 'Disaster Preparedness for Nepal' : 'नेपाल विपद् पूर्वतयारी'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 text-balance">
            {lang === 'en' ? (
              <>
                Be Prepared. Stay Safe. <br className="hidden sm:inline" />
                <span className="text-orange-400">Protect Your Family.</span>
              </>
            ) : (
              <>
                तयारी गरौं, सुरक्षित रहौं। <br className="hidden sm:inline" />
                <span className="text-orange-400">आफ्नो परिवार जोगाऔं।</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            {lang === 'en'
              ? 'SafeNepal helps people in Nepal prepare for natural disasters, understand verified life-safety actions, create offline family emergency plans, and find trustworthy official emergency resources.'
              : 'SafeNepal ले भूकम्प, बाढी, पहिरो जस्ता प्राकृतिक प्रकोपहरूबाट बच्न प्रमाणित सुरक्षा चरणहरू, ७२ घण्टे आपतकालीन झोला, पारिवारिक योजना र आधिकारिक सरकारी जानकारी प्रदान गर्दछ।'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('simple-mode')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer min-h-[48px]"
            >
              <span>{lang === 'en' ? 'Explore Safety Guides' : 'सुरक्षा निर्देशिका हेर्नुहोस्'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('family-plan')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-all cursor-pointer min-h-[48px]"
            >
              <CheckSquare className="w-4 h-4 text-teal-400" />
              <span>{lang === 'en' ? 'Build 72h Family Kit' : 'आपतकालीन झोला बनाउनुहोस्'}</span>
            </button>
          </div>

          {/* Key Trust Pillars */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              {lang === 'en' ? 'Verified with NDRRMA & DHM' : 'NDRRMA र DHM द्वारा प्रमाणित'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              {lang === 'en' ? '100% Client-Side Privacy' : '१००% गोपनीयता (कुनै सर्भर डेटा छैन)'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              {lang === 'en' ? 'Printable Offline Cards' : 'अफलाइन प्रिन्ट गर्न मिल्ने'}
            </span>
          </div>
        </div>
      </section>

      {/* Immediate Emergency Hotlines Strip */}
      <section className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
              {lang === 'en' ? 'Toll-Free Emergency Dispatch (Nepal)' : 'नेपाल आपतकालीन सेवा नम्बरहरू'}
            </span>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              {lang === 'en' ? 'Need Immediate Rescue or Police Assistance?' : 'तत्काल उद्धार वा सहयोग आवश्यक छ?'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="tel:100"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
              <span>{lang === 'en' ? 'Police 100' : 'प्रहरी १००'}</span>
            </a>
            <a
              href="tel:101"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
              <span>{lang === 'en' ? 'Fire 101' : 'दमकल १०१'}</span>
            </a>
            <a
              href="tel:102"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
              <span>{lang === 'en' ? 'Ambulance 102' : 'एम्बुलेन्स १०२'}</span>
            </a>
            <button
              onClick={onOpenHotlines}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <span>{lang === 'en' ? 'All Hotlines (1155)' : 'सबै नम्बरहरू'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7 Natural Disasters Grid */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
              {lang === 'en' ? 'Hazard Safety Manual' : 'प्रकोप सुरक्षा निर्देशिका'}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              {lang === 'en' ? '7 Common Hazards in Nepal' : 'नेपालका ७ प्रमुख प्राकृतिक प्रकोपहरू'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {lang === 'en'
                ? 'Select a hazard card below to view verified step-by-step guidance for Before, During, and After.'
                : 'प्रकोप रोज्नुहोस् र आउनुअघि, आइपर्दा र पछि अपनाउनुपर्ने प्रमाणित उपायहरू हेर्नुहोस्।'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('simple-mode')}
            className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>{lang === 'en' ? 'View all guides in Simple Mode' : 'सबै निर्देशिकाहरू हेर्नुहोस्'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {DISASTER_GUIDES.map((disaster) => (
            <div
              key={disaster.id}
              onClick={() => handleDisasterClick(disaster.id)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-400 p-5 shadow-xs hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Modern generated icon badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-white border border-slate-200 p-1 group-hover:scale-105 transition-transform shrink-0">
                    <img
                      src={disaster.iconPath}
                      alt={disaster.name}
                      className="w-full h-full object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 font-mono">
                    {disaster.lastVerifiedDate}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {lang === 'en' ? disaster.name : disaster.nameNepali}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {lang === 'en' ? disaster.nameNepali : disaster.name}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {lang === 'en' ? disaster.tagline : disaster.taglineNepali}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 group-hover:text-orange-600 transition-colors">
                <span>{lang === 'en' ? 'View Safety Steps' : 'सुरक्षा चरणहरू'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Core Interactive Modules Bento Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Module 1: Simple Mode */}
        <div
          onClick={() => onNavigate('simple-mode')}
          className="bg-white rounded-2xl border border-slate-200 hover:border-teal-400 p-6 shadow-xs hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {lang === 'en' ? 'Simple Mode' : 'सरल सुरक्षा निर्देशिका'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {lang === 'en'
                ? 'Clear Before, During, and After action checklists with official source verification and printable offline views.'
                : 'भूकम्प, बाढी र पहिरोका बेला अपनाउनुपर्ने ३ मुख्य चरणहरूको सरल र स्पष्ट सूची।'}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 group-hover:text-teal-900">
            <span>{lang === 'en' ? 'Open Simple Guide' : 'निर्देशिका खोल्नुहोस्'}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Module 2: Family Preparedness */}
        <div
          onClick={() => onNavigate('family-plan')}
          className="bg-white rounded-2xl border border-slate-200 hover:border-orange-400 p-6 shadow-xs hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <CheckSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {lang === 'en' ? 'Family Preparedness' : 'पारिवारिक विपद् तयारी'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {lang === 'en'
                ? 'Interactive 72-hour Go-Bag checklist, safe neighborhood meeting spots, and out-of-district contact cards saved in your browser.'
                : '७२ घण्टे आपतकालीन झोला सूची र परिवारको भेटघाट स्थल तथा आपतकालीन सम्पर्क फाराम।'}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 group-hover:text-orange-700">
            <span>{lang === 'en' ? 'Build Family Plan' : 'योजना बनाउनुहोस्'}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Module 3: Official Alerts & Portals */}
        <div
          onClick={() => onNavigate('official-alerts')}
          className="bg-white rounded-2xl border border-slate-200 hover:border-slate-400 p-6 shadow-xs hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {lang === 'en' ? 'Official Alerts & Portals' : 'आधिकारिक सरकारी सूचना'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {lang === 'en'
                ? 'Direct links to Nepal DHM (flood/weather) and NDRRMA (national disaster authority) plus Radio Nepal offline frequencies.'
                : 'जल तथा मौसम विभाग (DHM) र राष्ट्रिय विपद् प्राधिकरण (NDRRMA) का प्रत्यक्ष सरकारी लिङ्कहरू।'}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 group-hover:text-slate-950">
            <span>{lang === 'en' ? 'View Official Links' : 'सरकारी स्रोतहरू हेर्नुहोस्'}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* Clear Educational Status & Prototype Disclaimer */}
      <section className="p-4 rounded-xl bg-slate-100/90 border border-slate-200/90 text-slate-600 text-xs flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500 shrink-0" />
          <span>
            {lang === 'en'
              ? 'SafeNepal is an educational disaster preparedness initiative. For real-time emergency dispatch in Nepal, dial Police 100 or NEOC 1155.'
              : 'SafeNepal एक शैक्षिक विपद् पूर्वतयारी माध्यम हो। प्रत्यक्ष आपतकालीन उद्धारका लागि प्रहरी १०० वा राष्ट्रिय आपतकालीन केन्द्र ११५५ मा सम्पर्क गर्नुहोस्।'}
          </span>
        </div>
        <a
          href="https://ndrrma.gov.np/en"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-slate-800 hover:underline flex items-center gap-1 shrink-0"
        >
          <span>NDRRMA Nepal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </section>
    </div>
  );
};
