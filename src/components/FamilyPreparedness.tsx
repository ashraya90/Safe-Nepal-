import React, { useState, useEffect } from 'react';
import { KitItem, FamilyEmergencyPlan, FamilyContact } from '../types/disaster';
import { DEFAULT_KIT_ITEMS, DEFAULT_FAMILY_PLAN } from '../data/emergencyKit';
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  Save, 
  Printer, 
  ShieldCheck, 
  AlertCircle, 
  RotateCcw, 
  UserCheck, 
  MapPin, 
  PhoneCall, 
  Package, 
  FileText,
  Lock
} from 'lucide-react';

interface FamilyPreparednessProps {
  lang: 'en' | 'ne';
}

export const FamilyPreparedness: React.FC<FamilyPreparednessProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'kit' | 'plan'>('kit');

  // Emergency Kit state (hydrated from localStorage)
  const [kitItems, setKitItems] = useState<KitItem[]>(() => {
    try {
      const saved = localStorage.getItem('safenepal_kit_checklist');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to default
    }
    return DEFAULT_KIT_ITEMS;
  });

  // New custom kit item form state
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<KitItem['category']>('custom');

  // Family Plan state (hydrated from localStorage)
  const [plan, setPlan] = useState<FamilyEmergencyPlan>(() => {
    try {
      const saved = localStorage.getItem('safenepal_family_plan');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return DEFAULT_FAMILY_PLAN;
  });

  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  // Persist kit items whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('safenepal_kit_checklist', JSON.stringify(kitItems));
    } catch {
      // Ignore write errors
    }
  }, [kitItems]);

  const toggleItemPacked = (id: string) => {
    setKitItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isPacked: !item.isPacked } : item))
    );
  };

  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: KitItem = {
      id: `custom-${Date.now()}`,
      name: newItemName.trim(),
      nameNepali: newItemName.trim(),
      category: newItemCategory,
      description: 'Custom family essential item',
      descriptionNepali: 'परिवारको लागि थप आवश्यक सामग्री',
      isPacked: false,
      isCustom: true,
    };

    setKitItems((prev) => [newItem, ...prev]);
    setNewItemName('');
  };

  const handleDeleteCustomItem = (id: string) => {
    setKitItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleResetKit = () => {
    if (window.confirm(lang === 'en' ? 'Reset emergency kit to default items?' : 'सामग्री सूची पुनः सुरु गर्ने?')) {
      setKitItems(DEFAULT_KIT_ITEMS);
    }
  };

  // Plan editing handlers
  const handlePlanChange = (field: keyof FamilyEmergencyPlan, value: string) => {
    setPlan((prev) => ({
      ...prev,
      [field]: value,
      lastUpdated: new Date().toISOString().split('T')[0],
    }));
  };

  const handleOutOfDistrictChange = (field: 'name' | 'city' | 'phone', value: string) => {
    setPlan((prev) => ({
      ...prev,
      outOfDistrictContact: {
        ...prev.outOfDistrictContact,
        [field]: value,
      },
      lastUpdated: new Date().toISOString().split('T')[0],
    }));
  };

  const handleContactChange = (index: number, field: keyof FamilyContact, value: string) => {
    setPlan((prev) => {
      const updatedContacts = [...prev.contacts];
      updatedContacts[index] = {
        ...updatedContacts[index],
        [field]: value,
      };
      return {
        ...prev,
        contacts: updatedContacts,
        lastUpdated: new Date().toISOString().split('T')[0],
      };
    });
  };

  const handleAddContact = () => {
    const newContact: FamilyContact = {
      id: `contact-${Date.now()}`,
      name: '',
      relation: '',
      phone: '',
      notes: '',
    };
    setPlan((prev) => ({
      ...prev,
      contacts: [...prev.contacts, newContact],
    }));
  };

  const handleRemoveContact = (index: number) => {
    setPlan((prev) => ({
      ...prev,
      contacts: prev.contacts.filter((_, i) => i !== index),
    }));
  };

  const handleSavePlan = () => {
    try {
      localStorage.setItem('safenepal_family_plan', JSON.stringify(plan));
      setSaveSuccessMsg(true);
      setTimeout(() => setSaveSuccessMsg(false), 3000);
    } catch {
      alert('Unable to write to local storage');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Progress metrics for Kit
  const packedCount = kitItems.filter((i) => i.isPacked).length;
  const totalCount = kitItems.length;
  const percentage = totalCount > 0 ? Math.round((packedCount / totalCount) * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
            <UserCheck className="w-4 h-4 text-teal-600" />
            <span>{lang === 'en' ? 'Family Disaster Preparedness' : 'पारिवारिक विपद् तयारी'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Emergency Go-Bag & Family Plan' : 'आपतकालीन झोला र पारिवारिक योजना'}
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            {lang === 'en'
              ? 'Prepare your household for 72 hours of self-sufficiency. Save your checklist and emergency contacts locally in your browser.'
              : '७२ घण्टासम्म आत्मनिर्भर रहन आवश्यक सामग्री तयार राख्नुहोस् र आफ्नो पारिवारिक योजना सुरक्षित गर्नुहोस्।'}
          </p>
        </div>

        {/* Print / Save button */}
        <div className="flex items-center gap-2 shrink-0 no-print">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 shadow-sm transition-colors cursor-pointer min-h-[44px]"
            title="Print or save as PDF"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>{lang === 'en' ? 'Print Emergency Card' : 'प्रिन्ट गर्नुहोस्'}</span>
          </button>
        </div>
      </div>

      {/* Privacy & Offline Banner */}
      <div className="mb-6 p-4 rounded-xl bg-slate-900 text-slate-200 text-xs sm:text-sm flex items-start gap-3 border border-slate-800 shadow-sm">
        <Lock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
        <div className="flex-1 leading-relaxed">
          <p className="font-bold text-white mb-0.5">
            {lang === 'en' ? '100% Client-Side Privacy Protection' : 'गोपनीयताको पूर्ण ग्यारेन्टी'}
          </p>
          <p className="text-slate-300">
            {lang === 'en'
              ? 'Your checklist and family contacts are stored strictly in your browser storage (localStorage). Nothing is ever sent to a server. Keep a printed paper copy or screenshot in your emergency kit bag.'
              : 'तपाईंका सम्पर्क विवरण र सूची तपाईंको मोबाइल वा कम्प्युटरको ब्राउजरमा मात्र सुरक्षित रहन्छ; कुनै पनि विवरण सर्भरमा जाँदैन।'}
          </p>
        </div>
      </div>

      {/* Navigation Tabs (Kit vs Plan) */}
      <div className="flex items-center gap-2 p-1 bg-slate-200/80 rounded-xl mb-6 w-full sm:w-fit no-print">
        <button
          onClick={() => setActiveTab('kit')}
          className={`flex items-center gap-2 flex-1 sm:flex-initial px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer min-h-[40px] justify-center ${
            activeTab === 'kit'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Package className="w-4 h-4 text-orange-600" />
          <span>{lang === 'en' ? '72-Hour Go-Bag Checklist' : 'आपतकालीन झोला सामग्री'}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 font-extrabold text-slate-700">
            {packedCount}/{totalCount}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('plan')}
          className={`flex items-center gap-2 flex-1 sm:flex-initial px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer min-h-[40px] justify-center ${
            activeTab === 'plan'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4 text-teal-600" />
          <span>{lang === 'en' ? 'Family Emergency Plan' : 'पारिवारिक योजना फाराम'}</span>
        </button>
      </div>

      {/* TAB 1: EMERGENCY GO-BAG CHECKLIST */}
      {activeTab === 'kit' && (
        <div className="space-y-6">
          {/* Progress Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">
                  {lang === 'en' ? 'Emergency Kit Readiness' : 'झोला तयारी अवस्था'}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-slate-900 tabular-nums">
                    {percentage}%
                  </span>
                  <span className="text-sm font-semibold text-slate-600">
                    ({packedCount} of {totalCount} items packed)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-lg ${
                    percentage === 100
                      ? 'bg-teal-100 text-teal-800 border border-teal-300'
                      : percentage >= 50
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {percentage === 100
                    ? lang === 'en'
                      ? 'Fully Prepared for 72h'
                      : 'पूर्ण तयार (७२ घण्टा)'
                    : percentage >= 50
                    ? lang === 'en'
                      ? 'Partially Packed'
                      : 'आंशिक तयार'
                    : lang === 'en'
                    ? 'Preparation Incomplete'
                    : 'तयारी बाँकी'}
                </span>

                <button
                  onClick={handleResetKit}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Reset checklist"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-300 ${
                  percentage === 100 ? 'bg-teal-600' : 'bg-orange-500'
                }`}
                style={{ width: `${percentage}%` }}
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {lang === 'en'
                ? 'Tip: Store items in a durable, waterproof backpack placed close to your main door exit.'
                : 'सुझाव: यी सामानहरूलाई पानी नछिर्ने झोलामा राखी मूल ढोका नजिकै राख्नुहोस्।'}
            </p>
          </div>

          {/* Add Custom Item Box */}
          <form
            onSubmit={handleAddCustomItem}
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-3 no-print"
          >
            <input
              type="text"
              placeholder={lang === 'en' ? 'Add custom item (e.g., infant formula, pet food, spare glasses)...' : 'थप सामान लेख्नुहोस् (जस्तै: चस्मा, बच्चाको दूध)...'}
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="flex-1 w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <select
              value={newItemCategory}
              onChange={(e) => setNewItemCategory(e.target.value as KitItem['category'])}
              className="w-full sm:w-auto text-xs bg-white border border-slate-300 rounded-xl px-3 py-2.5 font-medium text-slate-700"
            >
              <option value="custom">General / Custom</option>
              <option value="meds">Medicines & Health</option>
              <option value="food">Baby / Nutrition</option>
              <option value="docs">Documents</option>
              <option value="shelter">Clothing / Bedding</option>
            </select>
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer min-h-[44px]"
            >
              <Plus className="w-4 h-4" />
              <span>{lang === 'en' ? 'Add Item' : 'सामग्री थप्नुहोस्'}</span>
            </button>
          </form>

          {/* Checklist Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {kitItems.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItemPacked(item.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 min-h-[56px] select-none ${
                    item.isPacked
                      ? 'bg-teal-50/60 border-teal-300/80 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {item.isPacked ? (
                      <CheckCircle2 className="w-5 h-5 text-teal-600 fill-teal-100" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm sm:text-base font-bold ${
                          item.isPacked ? 'line-through text-slate-500' : 'text-slate-900'
                        }`}
                      >
                        {lang === 'en' ? item.name : item.nameNepali}
                      </span>
                      {item.isCustom && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded font-bold">
                          Custom
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {lang === 'en' ? item.description : item.descriptionNepali}
                    </p>
                  </div>

                  {item.isCustom && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCustomItem(item.id);
                      }}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded cursor-pointer"
                      title="Remove custom item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: FAMILY EMERGENCY PLAN FORM */}
      {activeTab === 'plan' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm print-card">
            {/* Header within plan */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
                  {lang === 'en' ? 'Household Emergency Plan Card' : 'पारिवारिक आपतकालीन कार्ड'}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                  {plan.familyName.trim() ? plan.familyName : lang === 'en' ? 'Family Emergency Plan' : 'पारिवारिक योजना'}
                </h2>
                <span className="text-xs text-slate-500">
                  {lang === 'en' ? 'Last updated: ' : 'अद्यावधिक मिति: '}
                  <strong className="text-slate-700">{plan.lastUpdated}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 no-print">
                <button
                  onClick={handleSavePlan}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer min-h-[44px]"
                >
                  <Save className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Save Locally' : 'सुरक्षित गर्नुहोस्'}</span>
                </button>
              </div>
            </div>

            {saveSuccessMsg && (
              <div className="mt-4 p-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>{lang === 'en' ? 'Plan saved locally in your browser storage!' : 'योजना सुरक्षित गरियो!'}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Family Name */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Family / Household Name' : 'परिवारको नाम:'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'e.g., Sharma Family, Kathmandu Ward 4' : 'जस्तै: शर्मा परिवार, काठमाडौं वडा ४'}
                  value={plan.familyName}
                  onChange={(e) => handlePlanChange('familyName', e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 font-medium"
                />
              </div>

              {/* Safe Meeting Point 1: Neighborhood */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>{lang === 'en' ? '1. Neighborhood Meeting Place' : '१. टोलभित्रको सुरक्षित भेटघाट स्थल'}</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">
                  {lang === 'en'
                    ? 'Where family gathers right after evacuating the house (e.g. local school ground, open park).'
                    : 'घरबाट निस्केपछि तुरुन्त भेट हुने खुला ठाउँ (जस्तै: स्कुलको चौर, खुला पार्क)।'}
                </p>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'e.g., Shanti School Playground' : 'जस्तै: शान्ति स्कुलको चौर'}
                  value={plan.neighborhoodMeetingPlace}
                  onChange={(e) => handlePlanChange('neighborhoodMeetingPlace', e.target.value)}
                  className="w-full text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Safe Meeting Point 2: Out of Area */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>{lang === 'en' ? '2. Out-of-Neighborhood Meeting Place' : '२. टोल बाहिरको भेटघाट स्थल'}</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">
                  {lang === 'en'
                    ? 'Where family meets if local neighborhood is blocked or inundated (e.g. community hall, municipality office).'
                    : 'टोल डुबानमा वा बाटो अवरुद्ध भएमा भेला हुने ठाउँ (जस्तै: वडा कार्यालय)।'}
                </p>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'e.g., Ward Office / Community Hall' : 'जस्तै: वडा कार्यालय / सामुदायिक भवन'}
                  value={plan.outOfAreaMeetingPlace}
                  onChange={(e) => handlePlanChange('outOfAreaMeetingPlace', e.target.value)}
                  className="w-full text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Critical Out-of-District Contact */}
              <div className="md:col-span-2 p-5 rounded-xl bg-orange-50/70 border border-orange-200">
                <div className="flex items-center gap-2 text-orange-950 font-extrabold text-sm mb-1">
                  <PhoneCall className="w-4 h-4 text-orange-600" />
                  <span>{lang === 'en' ? 'Out-of-District Emergency Contact (Vital)' : 'जिल्ला बाहिरको सम्पर्क व्यक्ति (अति आवश्यक)'}</span>
                </div>
                <p className="text-xs text-orange-800 mb-3 leading-relaxed">
                  {lang === 'en'
                    ? 'During major earthquakes or valley floods, local cell towers collapse. Long-distance SMS/calls outside your home district usually succeed. Every family member should call this person to report safety.'
                    : 'विपद्को बेला स्थानीय फोन नचले पनि जिल्ला बाहिरको एसएमएस चल्ने सम्भावना हुन्छ। सबैले यिनलाई खबर गरी आफू सुरक्षित रहेको जानकारी गराउनुहोस्।'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      {lang === 'en' ? 'Contact Name' : 'सम्पर्क व्यक्तिको नाम'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Uncle Ramesh"
                      value={plan.outOfDistrictContact.name}
                      onChange={(e) => handleOutOfDistrictChange('name', e.target.value)}
                      className="w-full text-sm bg-white border border-orange-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      {lang === 'en' ? 'City / District' : 'सहर / जिल्ला'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pokhara / Chitwan"
                      value={plan.outOfDistrictContact.city}
                      onChange={(e) => handleOutOfDistrictChange('city', e.target.value)}
                      className="w-full text-sm bg-white border border-orange-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      {lang === 'en' ? 'Mobile Number' : 'मोबाइल नम्बर'}
                    </label>
                    <input
                      type="tel"
                      placeholder="98xxxxxxxx"
                      value={plan.outOfDistrictContact.phone}
                      onChange={(e) => handleOutOfDistrictChange('phone', e.target.value)}
                      className="w-full text-sm bg-white border border-orange-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Family Contacts List */}
              <div className="md:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {lang === 'en' ? 'Primary Family Members & Numbers' : 'परिवारका सदस्यहरूको सम्पर्क:'}
                  </label>
                  <button
                    type="button"
                    onClick={handleAddContact}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 cursor-pointer no-print"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Add Contact' : 'सम्पर्क थप्नुहोस्'}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {plan.contacts.map((contact, idx) => (
                    <div
                      key={contact.id}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-4 gap-3 items-center"
                    >
                      <div>
                        <input
                          type="text"
                          placeholder={lang === 'en' ? 'Name' : 'नाम'}
                          value={contact.name}
                          onChange={(e) => handleContactChange(idx, 'name', e.target.value)}
                          className="w-full text-sm bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder={lang === 'en' ? 'Relation (e.g. Mother, Son)' : 'सम्बन्ध'}
                          value={contact.relation}
                          onChange={(e) => handleContactChange(idx, 'relation', e.target.value)}
                          className="w-full text-sm bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder={lang === 'en' ? 'Mobile Number' : 'मोबाइल नम्बर'}
                          value={contact.phone}
                          onChange={(e) => handleContactChange(idx, 'phone', e.target.value)}
                          className="w-full text-sm bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={lang === 'en' ? 'Notes / School' : 'कैफियत / स्कुल'}
                          value={contact.notes || ''}
                          onChange={(e) => handleContactChange(idx, 'notes', e.target.value)}
                          className="w-full text-sm bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                        {plan.contacts.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveContact(idx)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 rounded cursor-pointer no-print shrink-0"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medical & Special Needs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Medical Conditions & Special Needs' : 'विशेष स्वास्थ्य आवश्यकता / औषधि:'}
                </label>
                <textarea
                  rows={3}
                  placeholder={lang === 'en' ? 'e.g. Grandmother needs daily blood pressure tablets and walking stick; infant requires baby formula.' : 'जस्तै: हजुरआमाको रक्तचापको औषधि, बच्चाको आहार...'}
                  value={plan.medicalNeeds}
                  onChange={(e) => handlePlanChange('medicalNeeds', e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Go-Bag Storage Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Emergency Go-Bag Exact Location' : 'आपतकालीन झोला राखिएको ठाउँ:'}
                </label>
                <textarea
                  rows={3}
                  placeholder={lang === 'en' ? 'e.g. In the hallway closet right beside the main exit doorway on shelf 1.' : 'जस्तै: मूल ढोका नजिकैको दराजको पहिलो तल्लामा...'}
                  value={plan.goBagLocation}
                  onChange={(e) => handlePlanChange('goBagLocation', e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 no-print">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>
                  {lang === 'en'
                    ? 'Changes persist automatically in your browser localStorage.'
                    : 'परिवर्तनहरू तपाईंको ब्राउजरमा स्वतः सुरक्षित हुन्छन्।'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleSavePlan}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow transition-colors cursor-pointer min-h-[44px]"
                >
                  <Save className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Save Family Plan' : 'योजना सुरक्षित गर्नुहोस्'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
