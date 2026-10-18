import { OfficialResource } from '../types/disaster';

export const OFFICIAL_PORTALS: OfficialResource[] = [
  {
    id: 'dhm',
    name: 'Department of Hydrology and Meteorology (DHM)',
    nameNepali: 'जल तथा मौसम विज्ञान विभाग',
    agency: 'Ministry of Energy, Water Resources and Irrigation, Government of Nepal',
    description: 'Official authoritative source for real-time river water levels, flood early warnings, weather bulletins, satellite cloud imagery, and monsoon forecasts.',
    url: 'https://www.dhm.gov.np/',
    type: 'weather',
    tollFree: '1155'
  },
  {
    id: 'ndrrma',
    name: 'National Disaster Risk Reduction and Management Authority (NDRRMA)',
    nameNepali: 'राष्ट्रिय विपद् जोखिम न्यूनीकरण तथा व्यवस्थापन प्राधिकरण',
    agency: 'Ministry of Home Affairs, Government of Nepal',
    description: 'Lead government executive body overseeing disaster policy, multi-hazard risk assessment, post-disaster response coordination, and relief guidelines across Nepal.',
    url: 'https://ndrrma.gov.np/en',
    type: 'government',
    tollFree: '1155'
  },
  {
    id: 'bipad',
    name: 'BIPAD Portal (Nepal Integrated Disaster Information System)',
    nameNepali: 'विपद् पोर्टल (नेपाल एकीकृत विपद् सूचना प्रणाली)',
    agency: 'Government of Nepal / NDRRMA',
    description: 'National open data spatial platform mapping active disaster incidents, hazard vulnerabilities, critical infrastructure, and real-time incident reports by district.',
    url: 'https://bipadportal.gov.np/',
    type: 'operations'
  },
  {
    id: 'nrcs',
    name: 'Nepal Red Cross Society (NRCS)',
    nameNepali: 'नेपाल रेडक्रस सोसाइटी',
    agency: 'Humanitarian Partner in Disaster Management',
    description: 'Leading humanitarian responder in Nepal providing volunteer search and rescue, community blood bank services, first-aid training, and shelter kits.',
    url: 'https://nrcs.org/',
    type: 'humanitarian'
  }
];

export interface EmergencyHotline {
  number: string;
  name: string;
  nameNepali: string;
  agency: string;
  description: string;
  badge: string;
}

export const EMERGENCY_HOTLINES: EmergencyHotline[] = [
  {
    number: '100',
    name: 'Nepal Police',
    nameNepali: 'नेपाल प्रहरी',
    agency: 'Ministry of Home Affairs',
    description: 'Immediate law enforcement, search, and emergency rescue assistance across Nepal.',
    badge: 'Immediate Response'
  },
  {
    number: '101',
    name: 'Fire Brigade (Damkal)',
    nameNepali: 'दमकल / अग्नि नियन्त्रण',
    agency: 'Municipal Emergency Services',
    description: 'Emergency structural fire extinguishing and industrial rescue.',
    badge: 'Fire Dispatch'
  },
  {
    number: '102',
    name: 'Ambulance Service',
    nameNepali: 'एम्बुलेन्स सेवा',
    agency: 'Red Cross & Health Emergency Network',
    description: 'Emergency medical transport and critical care dispatch to nearest hospital.',
    badge: 'Medical Emergency'
  },
  {
    number: '1155',
    name: 'NEOC / Flood Warning',
    nameNepali: 'राष्ट्रिय आपतकालीन कार्यसञ्चालन केन्द्र (NEOC)',
    agency: 'National Emergency Operations Centre / DHM',
    description: 'Toll-free 24/7 hotline for flood early warnings and disaster coordination status.',
    badge: 'Disaster Hotline'
  },
  {
    number: '1114',
    name: 'Armed Police Force (APF) Disaster Unit',
    nameNepali: 'सशस्त्र प्रहरी बल विपद् उद्धार',
    agency: 'Disaster Management Training Institute',
    description: 'Specialized swift water rescue, deep debris search, and collapsed structure extrication.',
    badge: 'Specialized Rescue'
  },
  {
    number: '103',
    name: 'Traffic Police Helpline',
    nameNepali: 'ट्राफिक प्रहरी हेल्पलाइन',
    agency: 'Nepal Traffic Police',
    description: 'Highway landslide blockages, road clearance updates, and transit emergencies.',
    badge: 'Road Safety'
  }
];

export const EMERGENCY_RADIO_INFO = {
  station: 'Radio Nepal (रेडियो नेपाल)',
  fmFrequency: '100.0 MHz (Nationwide Relay)',
  amFrequency: '792 kHz MW / AM',
  guidance: 'In catastrophic earthquakes or power-grid collapses where cellular towers and home fiber optic Wi-Fi fail, battery-operated analog FM/AM radios remain the most resilient communication link in Nepal.'
};
