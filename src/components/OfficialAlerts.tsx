import React from 'react';
import { OFFICIAL_PORTALS, EMERGENCY_HOTLINES, EMERGENCY_RADIO_INFO } from '../data/officialResources';
import { 
  AlertTriangle, 
  ExternalLink, 
  PhoneCall, 
  Radio, 
  ShieldAlert, 
  Info, 
  CheckCircle2, 
  Globe2 
} from 'lucide-react';

interface OfficialAlertsProps {
  lang: 'en' | 'ne';
}

export const OfficialAlerts: React.FC<OfficialAlertsProps> = ({ lang }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
          <Globe2 className="w-4 h-4 text-teal-600" />
          <span>{lang === 'en' ? 'Verified Government Portals' : 'आधिकारिक सरकारी निकायहरू'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'en' ? 'Official Alerts & Emergency Resources' : 'आधिकारिक सूचना तथा आपतकालीन स्रोतहरू'}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          {lang === 'en'
            ? 'Access authoritative live bulletins from Nepal government agencies. SafeNepal is an educational tool; always follow official directives for immediate evacuations.'
            : 'नेपाल सरकारका आधिकारिक निकायहरूबाट जारी हुने वास्तविक समयका सूचना तथा पूर्वचेतावनी लिङ्कहरू।'}
        </p>
      </div>

      {/* MANDATORY PROTOTYPE NOTICE & DISCLAIMER BANNER */}
      <div className="mb-8 p-5 rounded-2xl bg-amber-50 border-2 border-amber-300/80 text-amber-950 shadow-xs">
        <div className="flex items-start gap-3.5">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
            <h2 className="font-extrabold text-base text-amber-950">
              {lang === 'en' ? 'Live Alert Notice & Public Scope' : 'प्रत्यक्ष सूचना सम्बन्धी सार्वजनिक जानकारी'}
            </h2>
            <p className="font-medium text-amber-900">
              {lang === 'en'
                ? 'Live alerts are not available inside this prototype. Check the official sources linked here for real-time river levels, rainfall gauges, active cyclone paths, and earthquake bulletins.'
                : 'यस प्रोटोटाइपभित्र प्रत्यक्ष (live) चेतावनी उपलब्ध छैन। वास्तविक समयको बाढी, वर्षा र भूकम्प सम्बन्धी सूचनाका लागि यहाँ जोडिएका आधिकारिक सरकारी लिङ्कहरू हेर्नुहोस्।'}
            </p>
            <p className="text-amber-800 pt-1 border-t border-amber-200/80 text-xs">
              <strong>{lang === 'en' ? 'Disclaimer: ' : 'सूचना: '}</strong>
              {lang === 'en'
                ? 'SafeNepal is an educational preparedness tool, not an emergency-response dispatch service. Earthquakes cannot be predicted by any application. In an active life-threatening crisis, call Nepal Police at 100 or NEOC at 1155.'
                : 'SafeNepal एक शैक्षिक पूर्वतयारी माध्यम हो, उद्धार सेवा होइन। भूकम्पको भविष्यवाणी गर्न सकिँदैन। आपतकालीन उद्धारका लागि सिधै १०० वा ११५५ मा सम्पर्क गर्नुहोस्।'}
            </p>
          </div>
        </div>
      </div>

      {/* Official Government Portals Section */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-teal-600" />
          <span>{lang === 'en' ? 'Authoritative Government Portals' : 'प्रमुख सरकारी विपद् निकायहरू'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OFFICIAL_PORTALS.map((portal) => (
            <div
              key={portal.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-5 shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
                    {portal.agency}
                  </span>
                  {portal.tollFree && (
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 shrink-0">
                      Toll-Free: {portal.tollFree}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  {lang === 'en' ? portal.name : portal.nameNepali}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-3">
                  {lang === 'en' ? portal.nameNepali : portal.name}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {portal.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono truncate max-w-[200px]">
                  {portal.url}
                </span>
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer min-h-[44px] shrink-0"
                >
                  <span>{lang === 'en' ? 'Open Official Source' : 'आधिकारिक पोर्टल खोल्नुहोस्'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Nepal Emergency Hotlines */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <PhoneCall className="w-5 h-5 text-orange-600" />
          <span>{lang === 'en' ? 'Verified Emergency Numbers in Nepal' : 'नेपालका प्रमाणित आपतकालीन फोन नम्बरहरू'}</span>
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          {lang === 'en'
            ? 'All numbers listed below are genuine, official toll-free/helpline services maintained by the Government of Nepal.'
            : 'यी सबै नम्बरहरू नेपाल सरकारका आधिकारिक तथा चौबीसै घण्टा चल्ने निःशुल्क आपतकालीन सेवा हुन्।'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EMERGENCY_HOTLINES.map((hotline) => (
            <div
              key={hotline.number}
              className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between gap-3 shadow-2xs hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-slate-900 tracking-tight font-mono">
                    {hotline.number}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {hotline.badge}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {lang === 'en' ? hotline.name : hotline.nameNepali}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                  {hotline.agency}
                </p>
              </div>

              <a
                href={`tel:${hotline.number}`}
                className="w-10 h-10 rounded-xl bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm transition-colors cursor-pointer"
                title={`Call ${hotline.number}`}
                aria-label={`Dial ${hotline.number}`}
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Offline Emergency Radio Information */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                {lang === 'en' ? 'Critical Offline Resilience' : 'इन्टरनेट नहुँदा रेडियो सूचना'}
              </span>
              <h3 className="text-lg font-extrabold text-white">
                {EMERGENCY_RADIO_INFO.station}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-teal-300">
              FM: {EMERGENCY_RADIO_INFO.fmFrequency}
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-amber-300">
              AM: {EMERGENCY_RADIO_INFO.amFrequency}
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {lang === 'en'
            ? EMERGENCY_RADIO_INFO.guidance
            : 'ठूलो भूकम्प वा बाढीका बेला मोबाइल टावर र इन्टरनेट बन्द भएमा ब्याट्रीबाट चल्ने रेडियो नै सबैभन्दा भरपर्दो सरकारी सूचनाको माध्यम हो। आफ्नो आपतकालीन झोलामा सानो एफएम रेडियो र अतिरिक्त ब्याट्री सधैं राख्नुहोस्।'}
        </p>
      </div>
    </div>
  );
};
