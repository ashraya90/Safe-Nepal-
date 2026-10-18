export type DisasterId = 
  | 'earthquake'
  | 'flood'
  | 'landslide'
  | 'fire'
  | 'lightning'
  | 'storm'
  | 'extreme-heat';

export interface SafetyActionPhase {
  title: string;
  titleNepali: string;
  items: {
    en: string;
    ne: string;
  }[];
}

export interface DisasterGuide {
  id: DisasterId;
  name: string;
  nameNepali: string;
  tagline: string;
  taglineNepali: string;
  iconPath: string;
  riskContext: string;
  riskContextNepali: string;
  isVerified: boolean;
  lastVerifiedDate: string; // e.g. "2024-11-15"
  authoritativeSource: string;
  sourceUrl: string;
  before: SafetyActionPhase;
  during: SafetyActionPhase;
  after: SafetyActionPhase;
}

export interface KitItem {
  id: string;
  name: string;
  nameNepali: string;
  category: 'water' | 'food' | 'light' | 'firstaid' | 'meds' | 'docs' | 'shelter' | 'comms' | 'custom';
  description: string;
  descriptionNepali: string;
  isPacked: boolean;
  isCustom?: boolean;
}

export interface FamilyContact {
  id: string;
  name: string;
  relation: string;
  phone: string;
  notes?: string;
}

export interface FamilyEmergencyPlan {
  familyName: string;
  neighborhoodMeetingPlace: string;
  outOfAreaMeetingPlace: string;
  outOfDistrictContact: {
    name: string;
    city: string;
    phone: string;
  };
  contacts: FamilyContact[];
  medicalNeeds: string;
  goBagLocation: string;
  lastUpdated: string;
}

export interface OfficialResource {
  id: string;
  name: string;
  nameNepali: string;
  agency: string;
  description: string;
  url: string;
  type: 'government' | 'weather' | 'humanitarian' | 'operations';
  tollFree?: string;
}
