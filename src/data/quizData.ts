export interface QuizQuestion {
  id: string;
  category: string;
  disaster: string;
  disasterNepali: string;
  question: string;
  questionNepali: string;
  options: {
    text: string;
    textNepali: string;
    isCorrect: boolean;
    explanation: string;
    explanationNepali: string;
  }[];
}

export const PREPAREDNESS_QUIZZES: QuizQuestion[] = [
  {
    id: 'q-earthquake-shaking',
    category: 'Earthquake',
    disaster: 'Earthquake',
    disasterNepali: 'भूकम्प',
    question: 'If you are indoors and strong earthquake shaking starts, what is the safest immediate action?',
    questionNepali: 'भूकम्पको कडा कम्पन सुरु हुँदा तपाईं घरभित्र हुनुहुन्छ भने तत्काल के गर्नु सबैभन्दा सुरक्षित हुन्छ?',
    options: [
      {
        text: 'Rush outside down the staircase as fast as you can.',
        textNepali: 'जतिसक्दो छिटो भर्याङबाट बाहिर दौडिने।',
        isCorrect: false,
        explanation: 'Incorrect. Running while the ground shakes leads to falls, and falling bricks or shattered window glass from building facades cause most injuries.',
        explanationNepali: 'गलत। कम्पनका बेला दौडँदा लड्ने र बाहिरबाट खस्ने इँटा तथा सिसाले गम्भीर चोट पुर्याउँछ।'
      },
      {
        text: 'Drop, Cover, and Hold On under a sturdy table or desk.',
        textNepali: 'झुक्ने, बलियो टेबलमुनि टाउको छोप्ने र समात्ने (Drop, Cover & Hold On)।',
        isCorrect: true,
        explanation: 'Correct! Authoritative guidelines (NDRRMA & Red Cross) emphasize Drop, Cover, and Hold On to protect your head and vital organs from falling debris.',
        explanationNepali: 'सहि! राष्ट्रिय विपद् जोखिम न्यूनीकरण प्राधिकरण अनुसार बलियो टेबलमुनि ओत लिई टाउको र घाँटी जोगाउनु नै सबैभन्दा सुरक्षित विधि हो।'
      },
      {
        text: 'Stand directly under a doorway or run to the balcony.',
        textNepali: 'ढोकाको चौकोस मुनि उभिने वा बरण्डामा जाने।',
        isCorrect: false,
        explanation: 'Incorrect. Modern door frames are not stronger than the rest of the house, and balconies often shear off first during structural stress.',
        explanationNepali: 'गलत। आधुनिक घरका चौकोस अरू भागभन्दा बलिया हुँदैनन् र बरण्डाहरू सबैभन्दा पहिला भत्किने जोखिम हुन्छ।'
      },
      {
        text: 'Stand near the refrigerator to brace against it.',
        textNepali: 'फ्रिजको सहारा लिएर त्यसै छेउ उभिने।',
        isCorrect: false,
        explanation: 'Incorrect. Heavy appliances can easily topple over and crush you during violent shaking.',
        explanationNepali: 'गलत। कम्पनका बेला गह्रुँगा उपकरणहरू लडेर च्याप्ने डर हुन्छ।'
      }
    ]
  },
  {
    id: 'q-flood-water',
    category: 'Flood',
    disaster: 'Flood & Inundation',
    disasterNepali: 'बाढी र डुबान',
    question: 'How much moving floodwater is enough to sweep an adult off their feet?',
    questionNepali: 'कति गहिरो बगिरहेको बाढीको पानीले वयस्क मानिसलाई बगाउन सक्छ?',
    options: [
      {
        text: 'Only 15 centimeters (approx. 6 inches).',
        textNepali: 'मात्र १५ सेन्टिमिटर (करिब ६ इन्च)।',
        isCorrect: true,
        explanation: 'Correct! Just 15 cm (6 inches) of swiftly moving flood water generates enough lateral force to knock an adult down, while 30-60 cm can float cars.',
        explanationNepali: 'सहि! १५ सेन्टिमिटर (६ इन्च) मात्र बगिरहेको पानीले मानिसलाई लडाएर बगाउन सक्छ।'
      },
      {
        text: 'At least chest-deep water (1.5 meters).',
        textNepali: 'कम्तीमा छातीसम्म आउने पानी (१.५ मिटर)।',
        isCorrect: false,
        explanation: 'Incorrect. Moving water carries enormous hydrostatic pressure. Even shallow ankle-to-calf water is extremely treacherous.',
        explanationNepali: 'गलत। बगिरहेको पानीमा तीव्र चाप हुन्छ; गोलीगाँठो माथिको पानीले पनि लडाउन सक्छ।'
      },
      {
        text: 'Only water deeper than 3 meters.',
        textNepali: '३ मिटरभन्दा गहिरो पानी मात्र।',
        isCorrect: false,
        explanation: 'Incorrect. Never underestimate water speed and hidden submerged obstacles.',
        explanationNepali: 'गलत। पानीको बहाव र मुनि लुकेका खाल्डाखुल्डीलाई कम आँक्नु हुँदैन।'
      }
    ]
  },
  {
    id: 'q-lightning-shelter',
    category: 'Lightning',
    disaster: 'Lightning',
    disasterNepali: 'चट्याङ',
    question: 'If you are caught in an open field during an active lightning storm with no building nearby, what should you do?',
    questionNepali: 'चट्याङ परिरहेको बेला खुला चौरमा पर्नुभयो र ओत लाग्ने घर छैन भने के गर्नुपर्छ?',
    options: [
      {
        text: 'Lie completely flat on your stomach on the wet grass.',
        textNepali: 'ओसिलो घाँसमा पेटले भुइँमा पूरै तेर्सिएर सुत्ने।',
        isCorrect: false,
        explanation: 'Incorrect! Never lie flat. Ground currents from nearby lightning strikes travel across wet soil and will enter your body through multiple contact points.',
        explanationNepali: 'गलत! भुइँमा कहिल्यै सुत्नुहुँदैन; जमिनबाट बग्ने करेन्टले शरीरलाई गम्भीर असर गर्छ।'
      },
      {
        text: 'Stand directly under the tallest tree in the field for rain cover.',
        textNepali: 'पानीबाट ओत लाग्न चौरको सबैभन्दा अग्लो रुखमुनि उभिने।',
        isCorrect: false,
        explanation: 'Incorrect! Tall isolated trees are lightning magnets. Lightning will strike the tree and side-flash to anyone standing beneath it.',
        explanationNepali: 'गलत! अग्लो एक्लो रुखमा चट्याङ पर्ने सम्भावना बढी हुन्छ र त्यसको करेन्ट मुनि बसेका मानिसमा सर्छ।'
      },
      {
        text: 'Crouch low on the balls of your feet with heels touching, hands over ears, minimizing ground contact.',
        textNepali: 'दुवै गोडाका पञ्जाले भुइँमा टेकेर, कुर्कुच्चा जोडेर, टाउको निहुराएर टुक्रुक्क बस्ने।',
        isCorrect: true,
        explanation: 'Correct! The lightning crouch keeps you low while ensuring only a tiny surface touches the ground, keeping your heels together so current does not pass across your torso.',
        explanationNepali: 'सहि! खुट्टाका पञ्जाले मात्र भुइँमा टेकेर कुर्कुच्चा जोडी टुक्रुक्क बस्दा जमिनको करेन्ट मुटुसम्म पुग्न पाउँदैन।'
      }
    ]
  },
  {
    id: 'q-family-out-of-district',
    category: 'Family Planning',
    disaster: 'Emergency Planning',
    disasterNepali: 'पारिवारिक योजना',
    question: 'Why should your family emergency plan designate an "Out-of-District" contact (e.g. relative outside Kathmandu or your district)?',
    questionNepali: 'पारिवारिक आपतकालीन योजनामा "जिल्ला बाहिरको सम्पर्क व्यक्ति" किन राख्नुपर्छ?',
    options: [
      {
        text: 'Because local phone networks within a disaster zone often jam, but long-distance calls and texts usually connect.',
        textNepali: 'विपद् क्षेत्रभित्रका स्थानीय फोन लाइनहरू जाम हुन्छन्, तर जिल्ला बाहिरका कल र एसएमएस चल्ने सम्भावना हुन्छ।',
        isCorrect: true,
        explanation: 'Correct! After the 2015 Gorkha earthquake, local lines were overwhelmed, but SMS messages to family in other districts went through, allowing families to coordinate.',
        explanationNepali: 'सहि! २०७२ को भूकम्पमा पनि स्थानीय नेटवर्क अवरुद्ध हुँदा जिल्ला बाहिरका एसएमएस सजिलै आदानप्रदान भएका थिए।'
      },
      {
        text: 'Because government laws require all families to have relatives outside their district.',
        textNepali: 'किनभने सरकारी नियमले अनिवार्य गरेको हुन्छ।',
        isCorrect: false,
        explanation: 'Incorrect. It is a proven communication resilience practice, not a legal requirement.',
        explanationNepali: 'गलत। यो एक व्यावहारिक सुरक्षा रणनीति हो, कुनै कानुनी बाध्यता होइन।'
      },
      {
        text: 'To avoid having to speak with nearby neighbors.',
        textNepali: 'नजिकका छिमेकीसँग बोल्न नपरोस् भनेर।',
        isCorrect: false,
        explanation: 'Incorrect. Local community assistance is crucial during the initial golden hours of rescue.',
        explanationNepali: 'गलत। विपद्को समयमा छिमेकीहरूको सहयोग सबैभन्दा महत्वपूर्ण हुन्छ।'
      }
    ]
  },
  {
    id: 'q-water-storage',
    category: 'Emergency Kit',
    disaster: 'Emergency Go-Bag',
    disasterNepali: 'आपतकालीन झोला',
    question: 'According to disaster preparedness standards, how much clean water should you store per person for 3 days?',
    questionNepali: 'विपद् पूर्वतयारी मापदण्ड अनुसार ३ दिनका लागि प्रतिव्यक्ति कति पानी भण्डारण गर्नुपर्छ?',
    options: [
      {
        text: 'At least 9 liters (3 liters per person per day).',
        textNepali: 'कम्तीमा ९ लिटर (प्रतिव्यक्ति प्रतिदिन ३ लिटर)।',
        isCorrect: true,
        explanation: 'Correct! Minimum emergency standard is 3 liters per person per day (2 liters for hydration, 1 liter for essential sanitation/food preparation).',
        explanationNepali: 'सहि! प्रतिव्यक्ति प्रतिदिन ३ लिटर (पिउन २ लिटर र न्यूनतम सरसफाइ/खानाका लागि १ लिटर) का दरले ३ दिनको लागि ९ लिटर पानी चाहिन्छ।'
      },
      {
        text: 'Half a liter total for all 3 days.',
        textNepali: '३ दिनका लागि जम्मा आधा लिटर।',
        isCorrect: false,
        explanation: 'Incorrect. Dehydration leads to kidney failure and heat exhaustion within 48 to 72 hours, especially during stressful emergencies.',
        explanationNepali: 'गलत। पानीको कमीले ४८ घण्टाभित्रै मानिस गम्भीर बिरामी पर्न सक्छ।'
      },
      {
        text: 'Store soda or energy drinks instead of water.',
        textNepali: 'पानीको सट्टा चिसो पेय वा इनर्जी ड्रिंक राख्ने।',
        isCorrect: false,
        explanation: 'Incorrect. Sugary and caffeinated drinks worsen dehydration.',
        explanationNepali: 'गलत। चिनी र क्याफिनयुक्त पेयले शरीरमा पानीको कमी झन् बढाउँछ।'
      }
    ]
  },
  {
    id: 'q-fire-clothing',
    category: 'Fire Safety',
    disaster: 'Fire',
    disasterNepali: 'आगलागी',
    question: 'If your clothing accidentally catches fire, what should you do immediately?',
    questionNepali: 'यदि शरीरको कपडामा अचानक आगो सल्कियो भने तत्काल के गर्नुपर्छ?',
    options: [
      {
        text: 'Run as fast as possible to find water.',
        textNepali: 'पानी खोज्न जतिसक्दो छिटो दौडिने।',
        isCorrect: false,
        explanation: 'Incorrect! Running fans the flames with oxygen, causing the fire to spread across your body rapidly.',
        explanationNepali: 'गलत! दौडिँदा अक्सिजनको प्रवाह बढेर आगो शरीरभरि झन् तीव्र गतिमा फैलिन्छ।'
      },
      {
        text: 'Stop, Drop, and Roll on the ground until the flames are smothered.',
        textNepali: 'रोकिने, भुइँमा पल्टिने र आगो ननिभ्दासम्म गुडुल्किने (Stop, Drop & Roll)।',
        isCorrect: true,
        explanation: 'Correct! Stopping prevents oxygen fan-effect; dropping and rolling smothers the flames against the ground while protecting your face with your hands.',
        explanationNepali: 'सहि! नदौडी रोकिने, भुइँमा पल्टिएर गुडुल्किँदा भुइँसँगको घर्षणले आगो निभ्छ र मुखलाई हातले छोप्नुपर्छ।'
      },
      {
        text: 'Wave your arms and scream for help.',
        textNepali: 'हात हल्लाउँदै गुहार माग्ने।',
        isCorrect: false,
        explanation: 'Incorrect. Screaming inhales superheated smoke into your lungs; drop and roll immediately.',
        explanationNepali: 'गलत। चिच्याउँदा तातो धुवाँ र आगोको लप्का फोक्सोमा पस्न सक्छ; तुरुन्तै पल्टिएर गुडुल्किनुपर्छ।'
      }
    ]
  }
];
