import React, { useState } from 'react';
import { DISASTER_GUIDES } from '../data/disasterGuides';
import { DisasterId } from '../types/disaster';
import { 
  ShieldCheck, 
  ExternalLink, 
  Printer, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  AlertTriangle, 
  Clock, 
  Sparkles,
  Info
} from 'lucide-react';

interface SimpleModeProps {
  selectedDisasterId?: DisasterId;
  onSelectDisaster?: (id: DisasterId) => void;
  lang: 'en' | 'ne';
}

export const SimpleMode: React.FC<SimpleModeProps> = ({
  selectedDisasterId = 'earthquake',
  onSelectDisaster,
  lang,
}) => {
  const [activeId, setActiveId] = useState<DisasterId>(selectedDisasterId);
  const [activePhase, setActivePhase] = useState<'all' | 'before' | 'during' | 'after'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedStepIndex, setExpandedStepIndex] = useState<string | null>(null);

  const currentGuide = DISASTER_GUIDES.find((g) => g.id === (onSelectDisaster ? selectedDisasterId : activeId)) || DISASTER_GUIDES[0];

  const handleDisasterChange = (id: DisasterId) => {
    setActiveId(id);
    if (onSelectDisaster) {
      onSelectDisaster(id);
    }
    setExpandedStepIndex(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleExpand = (key: string) => {
    setExpandedStepIndex((prev) => (prev === key ? null : key));
  };

  // Filter items by search query if present
  const filterPhaseItems = (items: { en: string; ne: string }[]) => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(
      (item) => item.en.toLowerCase().includes(q) || item.ne.toLowerCase().includes(q)
    );
  };

  const beforeItems = filterPhaseItems(currentGuide.before.items);
  const duringItems = filterPhaseItems(currentGuide.during.items);
  const afterItems = filterPhaseItems(currentGuide.after.items);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 md:pb-12">
      {/* Page Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>{lang === 'en' ? 'Verified Simple Safety Mode' : 'प्रमाणित सरल सुरक्षा निर्देशिका'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Disaster Safety Instructions' : 'विपद् सुरक्षा चरणबद्ध निर्देशिका'}
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            {lang === 'en'
              ? 'Clear, authoritative life-safety steps verified with Nepal NDRRMA & DHM protocols. Organized chronologically: Before, During, and After.'
              : 'राष्ट्रिय विपद् प्राधिकरण (NDRRMA) तथा जल तथा मौसम विभाग (DHM) द्वारा प्रमाणित सुरक्षा उपायहरू।'}
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-2 shrink-0 no-print">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 shadow-sm transition-colors cursor-pointer min-h-[44px]"
            title="Print this guide for offline use"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>{lang === 'en' ? 'Print Guide (Offline)' : 'प्रिन्ट गर्नुहोस्'}</span>
          </button>
        </div>
      </div>

      {/* Disaster Selector Navigation (Horizontal scrollable on mobile, grid on desktop) */}
      <div className="no-print mb-6">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          {lang === 'en' ? 'Select Hazard:' : 'प्रकोप रोज्नुहोस्:'}
        </label>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-4 lg:grid-cols-7">
          {DISASTER_GUIDES.map((disaster) => {
            const isSelected = disaster.id === currentGuide.id;
            return (
              <button
                key={disaster.id}
                onClick={() => handleDisasterChange(disaster.id)}
                className={`flex sm:flex-col items-center gap-2.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl border text-left sm:text-center transition-all cursor-pointer min-w-[150px] sm:min-w-0 min-h-[48px] shrink-0 ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <img
                  src={disaster.iconPath}
                  alt={disaster.name}
                  className="w-8 h-8 rounded-lg object-cover bg-white shrink-0 border border-slate-200"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if image load encounters issues
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="min-w-0">
                  <span className="block text-xs font-bold truncate">
                    {lang === 'en' ? disaster.name : disaster.nameNepali}
                  </span>
                  <span className={`text-[10px] block truncate ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                    {lang === 'en' ? disaster.nameNepali : disaster.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Guide Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8 print-card">
        {/* Banner with icon and hazard summary */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={currentGuide.iconPath}
              alt={currentGuide.name}
              className="w-16 h-16 rounded-xl object-cover bg-white p-1 border-2 border-slate-700 shadow shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  {lang === 'en' ? currentGuide.name : currentGuide.nameNepali}
                </h2>
                <span className="text-sm text-slate-300 font-medium">
                  ({lang === 'en' ? currentGuide.nameNepali : currentGuide.name})
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {lang === 'en' ? currentGuide.tagline : currentGuide.taglineNepali}
              </p>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700/80 text-left shrink-0">
            <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'en' ? 'Authoritative Verification' : 'आधिकारिक प्रमाणीकरण'}</span>
            </div>
            <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>
                {lang === 'en' ? 'Last Verified: ' : 'प्रमाणित मिति: '}
                <strong className="text-white tabular-nums">{currentGuide.lastVerifiedDate}</strong>
              </span>
            </div>
            <a
              href={currentGuide.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-orange-400 hover:text-orange-300 underline"
            >
              <span>{lang === 'en' ? 'View Source Document' : 'स्रोत दस्तावेज हेर्नुहोस्'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Hazard Risk Context strip */}
        <div className="px-5 py-3 bg-amber-50/70 border-b border-amber-200/60 flex items-start sm:items-center gap-2.5 text-amber-950 text-xs sm:text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>{lang === 'en' ? 'Nepal Risk Context: ' : 'नेपालको जोखिम अवस्था: '}</strong>
            {lang === 'en' ? currentGuide.riskContext : currentGuide.riskContextNepali}
          </span>
        </div>

        {/* Search & Phase Filters */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 no-print bg-slate-50/50">
          {/* Phase Segmented Buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActivePhase('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer min-h-[36px] ${
                activePhase === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'en' ? 'All Phases' : 'सबै चरणहरू'}
            </button>
            <button
              onClick={() => setActivePhase('before')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer min-h-[36px] ${
                activePhase === 'before'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'en' ? '1. Before' : '१. पूर्वतयारी'}
            </button>
            <button
              onClick={() => setActivePhase('during')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer min-h-[36px] ${
                activePhase === 'during'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'en' ? '2. DURING (Urgent)' : '२. विपद्का बेला'}
            </button>
            <button
              onClick={() => setActivePhase('after')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer min-h-[36px] ${
                activePhase === 'after'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'en' ? '3. After' : '३. विपद्पछि'}
            </button>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search actions (e.g. water, gas)...' : 'खोज्नुहोस्...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Chronological Step Sections */}
        <div className="p-5 sm:p-7 space-y-8">
          {/* Section 1: BEFORE */}
          {(activePhase === 'all' || activePhase === 'before') && beforeItems.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'en' ? currentGuide.before.title : currentGuide.before.titleNepali}
                </h3>
                <span className="text-xs text-slate-500 font-medium ml-auto">
                  {lang === 'en' ? 'Preparation & Mitigation' : 'रोकथाम र पूर्वतयारी'}
                </span>
              </div>

              <div className="space-y-2.5">
                {beforeItems.map((item, idx) => (
                  <div
                    key={`before-${idx}`}
                    onClick={() => toggleExpand(`before-${idx}`)}
                    className="p-3.5 sm:p-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/60 transition-all cursor-pointer flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                        {lang === 'en' ? item.en : item.ne}
                      </p>
                      {expandedStepIndex === `before-${idx}` && (
                        <div className="mt-2.5 pt-2.5 border-t border-slate-100 text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg">
                          <p className="font-medium text-slate-700">
                            {lang === 'en' ? 'Bilingual Translation:' : 'अङ्ग्रेजी अनुवाद:'}
                          </p>
                          <p className="italic text-slate-600 mt-0.5">
                            {lang === 'en' ? item.ne : item.en}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="text-slate-400 shrink-0 mt-1">
                      {expandedStepIndex === `before-${idx}` ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: DURING (URGENT HIGHLIGHT) */}
          {(activePhase === 'all' || activePhase === 'during') && duringItems.length > 0 && (
            <div className="bg-orange-50/40 p-4 sm:p-5 rounded-2xl border border-orange-200/80">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-orange-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  2
                </span>
                <h3 className="text-lg font-extrabold text-orange-950">
                  {lang === 'en' ? currentGuide.during.title : currentGuide.during.titleNepali}
                </h3>
                <span className="text-xs text-orange-700 font-bold ml-auto uppercase tracking-wide">
                  {lang === 'en' ? 'Immediate Life Safety' : 'तत्काल जीवन सुरक्षा'}
                </span>
              </div>

              <div className="space-y-2.5">
                {duringItems.map((item, idx) => (
                  <div
                    key={`during-${idx}`}
                    onClick={() => toggleExpand(`during-${idx}`)}
                    className="p-3.5 sm:p-4 rounded-xl border border-orange-200 bg-white hover:bg-orange-50/50 transition-all cursor-pointer flex items-start gap-3 shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 border border-orange-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {lang === 'en' ? item.en : item.ne}
                      </p>
                      {expandedStepIndex === `during-${idx}` && (
                        <div className="mt-2.5 pt-2.5 border-t border-orange-100 text-xs text-slate-600 leading-relaxed bg-orange-50/50 p-2.5 rounded-lg">
                          <p className="font-medium text-slate-700">
                            {lang === 'en' ? 'Bilingual Translation:' : 'अङ्ग्रेजी अनुवाद:'}
                          </p>
                          <p className="italic text-slate-600 mt-0.5">
                            {lang === 'en' ? item.ne : item.en}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="text-orange-600 shrink-0 mt-1">
                      {expandedStepIndex === `during-${idx}` ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: AFTER */}
          {(activePhase === 'all' || activePhase === 'after') && afterItems.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'en' ? currentGuide.after.title : currentGuide.after.titleNepali}
                </h3>
                <span className="text-xs text-slate-500 font-medium ml-auto">
                  {lang === 'en' ? 'Inspection & Recovery' : 'क्षति जाँच र स्वास्थ्य सुरक्षा'}
                </span>
              </div>

              <div className="space-y-2.5">
                {afterItems.map((item, idx) => (
                  <div
                    key={`after-${idx}`}
                    onClick={() => toggleExpand(`after-${idx}`)}
                    className="p-3.5 sm:p-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/60 transition-all cursor-pointer flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                        {lang === 'en' ? item.en : item.ne}
                      </p>
                      {expandedStepIndex === `after-${idx}` && (
                        <div className="mt-2.5 pt-2.5 border-t border-slate-100 text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg">
                          <p className="font-medium text-slate-700">
                            {lang === 'en' ? 'Bilingual Translation:' : 'अङ्ग्रेजी अनुवाद:'}
                          </p>
                          <p className="italic text-slate-600 mt-0.5">
                            {lang === 'en' ? item.ne : item.en}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="text-slate-400 shrink-0 mt-1">
                      {expandedStepIndex === `after-${idx}` ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty search results fallback */}
          {beforeItems.length === 0 && duringItems.length === 0 && afterItems.length === 0 && (
            <div className="text-center py-12 px-4">
              <Info className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-800 font-bold text-base">
                {lang === 'en' ? 'No matching instructions found' : 'कुनै मिल्दो निर्देशन भेटिएन'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'en'
                  ? `Try clearing your search "${searchQuery}" or select another disaster.`
                  : 'कृपया फरक शब्द खोज्नुहोस्।'}
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 px-3.5 py-1.5 text-xs font-bold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 cursor-pointer"
              >
                {lang === 'en' ? 'Clear Search' : 'खोज खाली गर्नुहोस्'}
              </button>
            </div>
          )}
        </div>

        {/* Footer Authority Source verification strip */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div>
            <span className="font-semibold text-slate-700">
              {lang === 'en' ? 'Authoritative Source: ' : 'आधिकारिक स्रोत: '}
            </span>
            <span>{currentGuide.authoritativeSource}</span>
            <span className="mx-2 text-slate-300">·</span>
            <span>
              {lang === 'en' ? 'Verified on ' : 'प्रमाणीकरण मिति: '}
              <strong className="text-slate-800 tabular-nums">{currentGuide.lastVerifiedDate}</strong>
            </span>
          </div>

          <a
            href={currentGuide.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 hover:text-slate-950 hover:bg-slate-100 font-bold transition-colors shrink-0"
          >
            <span>{lang === 'en' ? 'Open Official Portal' : 'सरकारी पोर्टल खोल्नुहोस्'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
