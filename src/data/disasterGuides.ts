import { DisasterGuide } from '../types/disaster';

export const DISASTER_GUIDES: DisasterGuide[] = [
  {
    id: 'earthquake',
    name: 'Earthquake',
    nameNepali: 'भूकम्प',
    tagline: 'Nepal sits on active tectonic fault lines where the Indian and Eurasian plates collide.',
    taglineNepali: 'नेपाल भारतीय र युरेसियन प्लेटको टकराव हुने सक्रिय भौगर्भिक क्षेत्रमा अवस्थित छ।',
    iconPath: '/src/assets/images/earthquake_icon_1792328726869.jpg',
    riskContext: 'High seismic vulnerability across all provinces; high risk of structural collapse and masonry failure.',
    riskContextNepali: 'सबै प्रदेशहरूमा भूकम्पीय जोखिम; कमजोर संरचना तथा गारो भत्किने उच्च जोखिम।',
    isVerified: true,
    lastVerifiedDate: '2024-11-15',
    authoritativeSource: 'National Disaster Risk Reduction and Management Authority (NDRRMA)',
    sourceUrl: 'https://ndrrma.gov.np/en',
    before: {
      title: 'Before the Shaking',
      titleNepali: 'भूकम्प आउनुअघि',
      items: [
        {
          en: 'Identify safe spots in every room: under sturdy wooden tables, desks, or against interior walls away from glass.',
          ne: 'प्रत्येक कोठामा सुरक्षित ठाउँ पहिचान गर्नुहोस्: बलियो काठको टेबलमुनि वा सिसा नभएको भित्री भित्ता छेउ।'
        },
        {
          en: 'Fasten heavy furniture, cupboards, water tanks, and ceiling fans securely to structural walls.',
          ne: 'दराज, ठूला फर्निचर, पानी ट्याङ्की र सिलिङ पंखाहरूलाई भित्तामा राम्रोसँग बाँध्नुहोस्।'
        },
        {
          en: 'Prepare an emergency Go-Bag with 3 days of water, dry food, first-aid, medicines, and copies of citizenship certificates.',
          ne: '३ दिन पुग्ने पानी, सुक्खा खाना, प्राथमिक उपचार सामग्री र नागरिकताको प्रतिलिपि सहितको आपतकालीन झोला तयार राख्नुहोस्।'
        },
        {
          en: 'Agree with family on two open meeting spots: one near your house and one outside the neighborhood.',
          ne: 'परिवारसँग दुईवटा खुला भेटघाट स्थल तय गर्नुहोस्: एउटा घर नजिकै र अर्को टोल बाहिर।'
        }
      ]
    },
    during: {
      title: 'During the Shaking',
      titleNepali: 'भूकम्पका बेला',
      items: [
        {
          en: 'DROP, COVER, and HOLD ON immediately. Drop to hands and knees, cover head and neck under sturdy furniture, hold on until shaking stops.',
          ne: 'झुक्नुहोस्, गुडुल्किनुहोस् र समात्नुहोस् (Drop, Cover, Hold On)। बलियो टेबलमुनि टाउको र घाँटी छोपेर समात्नुहोस्।'
        },
        {
          en: 'Do NOT run outside or use staircases while ground is shaking; falling masonry and bricks cause most casualties.',
          ne: 'कम्पन भइरहेको बेला बाहिर नदौडिनुहोस् वा भर्याङ प्रयोग नगर्नुहोस्; खस्ने इँटा र वस्तुले बढी चोट पुर्याउँछ।'
        },
        {
          en: 'Stay away from windows, balconies, mirrors, exterior walls, and tall brick boundary walls.',
          ne: 'झ्याल, कौसी, ऐना, बाहिरी भित्ता र इँटाका अग्ला कम्पाउन्ड पर्खालबाट टाढै रहनुहोस्।'
        },
        {
          en: 'If in bed, stay there and protect your head with a firm pillow unless under a heavy hanging fixture.',
          ne: 'ओछ्यानमा हुनुहुन्छ भने त्यहीँ बस्नुहोस् र सिरानीले टाउको ढाक्नुहोस्।'
        },
        {
          en: 'If outdoors, move into an open area away from power lines, buildings, steep cut slopes, and brick chimneys.',
          ne: 'बाहिर हुनुहुन्छ भने बिजुलीको तार, घर, ठाडो भीर र इँटाका पर्खालबाट टाढा खुला ठाउँमा जानुहोस्।'
        }
      ]
    },
    after: {
      title: 'After the Shaking',
      titleNepali: 'भूकम्पपछि',
      items: [
        {
          en: 'Expect aftershocks. Be prepared to Drop, Cover, and Hold On again whenever tremors occur.',
          ne: 'पराकम्पनको सम्भावना रहन्छ। फेरि कम्पन आउनासाथ तुरुन्तै सुरक्षित हुन तयार रहनुहोस्।'
        },
        {
          en: 'Check yourself and family for injuries before moving; provide first aid to minor wounds immediately.',
          ne: 'अरूलाई सघाउनुअघि आफू र परिवारलाई चोट लागेको छ कि जाँच गर्नुहोस् र प्राथमिक उपचार दिनुहोस्।'
        },
        {
          en: 'Shut off the cooking gas (LPG cylinder) valve and electrical main switch if safe to reach. Do NOT light matches or candles.',
          ne: 'खाना पकाउने ग्यासको रेगुलेटर र बिजुलीको मेन स्विच बन्द गर्नुहोस्। सलाई वा मैनबत्ती नबाल्नुहोस्।'
        },
        {
          en: 'Evacuate carefully using sturdy shoes to protect feet against shattered glass and broken debris.',
          ne: 'सिसा र फुटेका इँटाहरूबाट खुट्टा जोगाउन बलियो जुत्ता लगाएर मात्र सतर्कतापूर्वक बाहिर निस्कनुहोस्।'
        },
        {
          en: 'Tune in to official radio broadcasts (Radio Nepal FM / AM) for emergency directives; avoid forwarding unverified rumors.',
          ne: 'रेडियो नेपाल वा आधिकारिक माध्यमबाट जारी सूचना मात्र सुन्नुहोस्; हल्ला र अपुष्ट कुरा नफैलाउनुहोस्।'
        }
      ]
    }
  },
  {
    id: 'flood',
    name: 'Flood & Inundation',
    nameNepali: 'बाढी र डुबान',
    tagline: 'Monsoon river swells, flash floods, and glacial lake outbursts impact lowlands and valleys.',
    taglineNepali: 'मनसुनका बेला नदीको बहाव, आकस्मिक बाढी र डुबानले तराई तथा नदी किनारमा असर गर्दछ।',
    iconPath: '/src/assets/images/flood_icon_1792328728529.jpg',
    riskContext: 'Severe recurring risk during June-September monsoon across Terai, river basins, and riverbanks.',
    riskContextNepali: 'असारदेखि असोजसम्म तराईका नदी किनार र होचा भूभागहरूमा उच्च बाढीको जोखिम।',
    isVerified: true,
    lastVerifiedDate: '2024-10-20',
    authoritativeSource: 'Department of Hydrology and Meteorology (DHM)',
    sourceUrl: 'https://www.dhm.gov.np/',
    before: {
      title: 'Before the Flood',
      titleNepali: 'बाढी आउनुअघि',
      items: [
        {
          en: 'Know your local community high ground and evacuation shelter route designated by your municipality.',
          ne: 'आफ्नो वडा वा पालिकाले तोकेको अग्लो सुरक्षित आश्रयस्थल र जाने बाटो पहिचान गर्नुहोस्।'
        },
        {
          en: 'Keep important citizenship documents, land deeds, and prescription meds in airtight waterproof plastic pouches.',
          ne: 'नागरिकता, लालपुर्जा, कागजात र नियमित औषधिलाई हावा नछिर्ने वाटरप्रुफ प्लास्टिकको झोलामा राख्नुहोस्।'
        },
        {
          en: 'Store water purification tablets (Piyush / Aquatabs) and dry foods (chiura, dalmoth) in safe elevated storage.',
          ne: 'पानी शुद्धिकरण गर्ने पियुष वा क्लोरिन चक्की र सुक्खा खानेकुरा माथिल्लो सुरक्षित ठाउँमा राख्नुहोस्।'
        },
        {
          en: 'Monitor river water warning levels on DHM Toll-Free 1155 or via municipal SMS warnings.',
          ne: 'जल तथा मौसम विज्ञान विभागको ११५५ नम्बर वा एसएमएस पूर्वसूचना प्रणालीमा सतर्कता तह हेर्नुहोस्।'
        }
      ]
    },
    during: {
      title: 'During the Flood',
      titleNepali: 'बाढीको बेला',
      items: [
        {
          en: 'Evacuate immediately to high ground as soon as early warnings sound or water enters your neighborhood.',
          ne: 'साइरन बज्नासाथ वा टोलमा पानी पस्नासाथ ढिलाइ नगरी तुरुन्तै अग्लो ठाउँतिर जानुहोस्।'
        },
        {
          en: 'NEVER walk, swim, or drive through moving flood waters. Just 15 cm of moving water can knock an adult off feet.',
          ne: 'बगिरहेको बाढीको पानीमा कहिल्यै नहिँड्नुहोस् र गाडी नचलाउनुहोस्। १५ सेन्टिमिटर गहिरो पानीले पनि मान्छेलाई बगाउन सक्छ।'
        },
        {
          en: 'Stay clear of drainage canals, submerged culverts, and downed electrical poles.',
          ne: 'पानीको तीव्र निकास भएका नाला, ह्युमपाइप र ढलेका बिजुलीका पोलहरूबाट टाढै रहनुहोस्।'
        },
        {
          en: 'Unplug electrical appliances before water reaches outlets if you can do so safely from dry ground.',
          ne: 'सुरक्षित हुनुहुन्छ भने पानी पस्नुअगावै बिजुलीका उपकरणहरूको तार निकालिदिनुहोस्।'
        }
      ]
    },
    after: {
      title: 'After the Flood',
      titleNepali: 'बाढी घटेपछि',
      items: [
        {
          en: 'Do NOT return home until local authorities declare that floodwaters and building foundations are stable.',
          ne: 'स्थानीय प्रशासनले घर र जग सुरक्षित भएको घोषणा नगरेसम्म घर नफर्कनुहोस्।'
        },
        {
          en: 'Disinfect all drinking water. Boil water vigorously for 3 minutes or use tested chlorine drops before drinking.',
          ne: 'पिउने पानीलाई कम्तीमा ३ मिनेट उमालेर वा पियुष हालेर मात्र पिउनुहोस्; दूषित पानीले झाडापखाला फैलाउँछ।'
        },
        {
          en: 'Watch for poisonous snakes and stinging insects that take shelter on dry elevated furniture or inside homes.',
          ne: 'ओभानो ठाउँ खोज्दै घरभित्र पसेका हुन सक्ने विषालु सर्प र किराहरूबाट सतर्क रहनुहोस्।'
        },
        {
          en: 'Discard any food, grains, or baby formula that has come into contact with floodwater.',
          ne: 'बाढीको पानीले छोएको कुनै पनि खाद्यान्न, चामल वा पिठो प्रयोग नगर्नुहोस्, नष्ट गर्नुहोस्।'
        }
      ]
    }
  },
  {
    id: 'landslide',
    name: 'Landslide & Mudflow',
    nameNepali: 'पहिरो र गेग्रान बहाव',
    tagline: 'Steep Himalayan mountain slopes and fragile soil become saturated during persistent monsoon downpours.',
    taglineNepali: 'मनसुनको अविरल वर्षाका कारण पहाडी भिरालो जमिन भासिने र पहिरो खस्ने जोखिम हुन्छ।',
    iconPath: '/src/assets/images/landslide_icon_1792328728247.jpg',
    riskContext: 'Extremely critical along mid-hill highways, settlement foot-slopes, and newly cut earthen road corridors.',
    riskContextNepali: 'मध्यपहाडी राजमार्ग, नयाँ खनिएका सडक र भीरमुनिका बस्तीहरूमा उच्च जोखिम।',
    isVerified: true,
    lastVerifiedDate: '2024-09-28',
    authoritativeSource: 'National Disaster Risk Reduction and Management Authority (NDRRMA)',
    sourceUrl: 'https://ndrrma.gov.np/en',
    before: {
      title: 'Before Landslides Occur',
      titleNepali: 'पहिरो जानुअघि',
      items: [
        {
          en: 'Recognize warning signs: new ground cracks, tilting trees or utility poles, jammed doors/windows, or sudden muddy spring water.',
          ne: 'पूर्वसंकेत चिन्नुहोस्: जमिनमा नयाँ चिरा पर्नु, रुख वा पोल ढल्कनु, ढोका अडकिनु वा मूलको पानी धमिलो आउनु।'
        },
        {
          en: 'Avoid cutting steep natural slopes beneath your home and ensure stormwater runoff is properly channeled away from slope crowns.',
          ne: 'घरमाथिको भिरालो जमिन जथाभावी नकाट्नुहोस् र वर्षातको भलपानीलाई भीरबाट सुरक्षित रूपमा निकास दिनुहोस्।'
        },
        {
          en: 'Relocate to an evacuation community hall or neighbor’s safe house before nightfall during continuous 24-hour rainfall.',
          ne: 'लगातार २४ घण्टा भारी वर्षा भइरहेको छ भने रात पर्नुअघि नै सुरक्षित आश्रयस्थल वा छिमेकीको सुरक्षित घरमा जानुहोस्।'
        }
      ]
    },
    during: {
      title: 'During a Landslide Event',
      titleNepali: 'पहिरो खस्दा',
      items: [
        {
          en: 'If you hear a deep rumbling sound or breaking trees, evacuate immediately laterally (sideways away from the flow path).',
          ne: 'गडगडाहट आवाज वा रुख भाँचिएको सुनिएमा सोझो तल वा माथि नभई पहिरोको बाटोबाट दायाँ-बायाँ (छेउतिर) भाग्नुहोस्।'
        },
        {
          en: 'Never attempt to cross or photograph active debris flows on mountain roads or foot trails.',
          ne: 'पहाडी बाटोमा लेदो र ढुङ्गा झरिरहेको बेला फोटो खिच्न वा जबर्जस्ती बाटो काट्न नखोज्नुहोस्।'
        },
        {
          en: 'If escape is impossible, curl into a tight ball, wrap your arms to protect your head, and stay behind solid concrete barriers.',
          ne: 'भाग्न सम्भव नभएमा भुइँमा गुडुल्किनुहोस् र दुवै हातले टाउको बलियो गरी छोप्नुहोस्।'
        }
      ]
    },
    after: {
      title: 'After the Landslide',
      titleNepali: 'पहिरो रोकिएपछि',
      items: [
        {
          en: 'Stay away from the slide area; secondary slips frequently occur hours or days after the initial movement.',
          ne: 'पहिरो गएको ठाउँबाट टाढै बस्नुहोस्; सुरुवाती पहिरोपछि फेरि दोस्रो पटक पहिरो खस्ने सम्भावना रहन्छ।'
        },
        {
          en: 'Report damaged electric lines and blocked river channels immediately to local authorities to prevent dam outburst floods.',
          ne: 'ढलेका बिजुलीका तार र थुनिएका खोलाको जानकारी तुरुन्तै स्थानीय प्रहरी वा प्रशासनलाई दिनुहोस्।'
        },
        {
          en: 'Check for trapped neighbors only if the surrounding slope has been confirmed stable by rescue personnel.',
          ne: 'पहिरो गएको ठाउँ पूर्ण सुरक्षित छ भन्ने निश्चित नभएसम्म आफैं उद्धारमा जोखिम नमोल्नुहोस्।'
        }
      ]
    }
  },
  {
    id: 'fire',
    name: 'Fire (Urban & Wildfire)',
    nameNepali: 'आगलागी र डढेलो',
    tagline: 'Dry pre-monsoon winds trigger rampant forest fires and urban structural blazes across Nepal.',
    taglineNepali: 'सुख्खा मौसम र हावाहुरीका कारण बस्तीमा आगलागी र वनमा डढेलोको तीव्र प्रकोप फैलिन्छ।',
    iconPath: '/src/assets/images/fire_icon_1792328728257.jpg',
    riskContext: 'High frequency in March-May across Tarai timber settlements, pine forests, and dense urban clusters.',
    riskContextNepali: 'फागुनदेखि जेठसम्म तराईका खरका छाना भएका बस्ती, सल्लाघारी र साँघुरा सहरहरूमा उच्च जोखिम।',
    isVerified: true,
    lastVerifiedDate: '2024-12-05',
    authoritativeSource: 'National Disaster Risk Reduction and Management Authority (NDRRMA)',
    sourceUrl: 'https://ndrrma.gov.np/en',
    before: {
      title: 'Before a Fire Outbreak',
      titleNepali: 'आगलागी हुनुअघि',
      items: [
        {
          en: 'Keep buckets of sand and clean water readily available near cooking areas and thatched-roof homes.',
          ne: 'भान्सा र खरको छाना भएका घर नजिक बालुवा र पानी भरिएका बाल्टिनहरू सधैं तयार राख्नुहोस्।'
        },
        {
          en: 'Inspect cooking gas (LPG) hoses for cracks; turn off the cylinder valve regulator every night before sleeping.',
          ne: 'ग्यास पाइप र रेगुलेटरको नियमित जाँच गर्नुहोस्; राति सुत्नुअघि रेगुलेटर अनिवार्य बन्द गर्नुहोस्।'
        },
        {
          en: 'Clear a 10-meter combustible-free firebreak perimeter of dry leaves and brush around buildings near forest borders.',
          ne: 'जंगल नजिकका घर वरिपरि सुख्खा पातपतिङ्गर सफा गरी कम्तीमा १० मिटर खुला ठाउँ राख्नुहोस्।'
        },
        {
          en: 'Memorize the national Fire Brigade hotline: 101.',
          ne: 'दमकलको आपतकालीन फोन नम्बर १०१ सधैं सम्झनुहोस्।'
        }
      ]
    },
    during: {
      title: 'During a Fire Emergency',
      titleNepali: 'आगलागी भइरहेको बेला',
      items: [
        {
          en: 'Alert everyone with a loud shout ("AAGO LAGO!") and evacuate immediately. Do not delay to collect belongings.',
          ne: '"आगो लाग्यो" भनेर चिच्याई सबैलाई सचेत गराउनुहोस् र सामानको लोभ नगरी तुरुन्तै बाहिर निस्कनुहोस्।'
        },
        {
          en: 'CRAWL LOW UNDER SMOKE. Toxic smoke and hot gases rise to the ceiling; clean breathable air is near the floor.',
          ne: 'धुवाँबाट बच्न भुइँमा घस्रेर हिँड्नुहोस्; विषाक्त तातो धुवाँ माथि उठ्छ र भुइँ नजिक सफा हावा हुन्छ।'
        },
        {
          en: 'If clothes catch fire: STOP, DROP, and ROLL until flames are smothered. Do not run.',
          ne: 'लुगामा आगो लागेमा नदौडिनुहोस्: रोकिनुहोस्, भुइँमा पल्टिनुहोस् र आगो ननिभ्दासम्म गुडुल्किनुहोस् (Stop, Drop, Roll)।'
        },
        {
          en: 'Never use water on electrical or cooking oil fires; smother grease pans with a damp cloth or metal lid.',
          ne: 'बिजुली वा तातो तेलको आगोमा पानी नहाल्नुहोस्; तेलको आगोलाई ओसिलो कपडा वा ढक्कनले छोपेर निभाउनुहोस्।'
        }
      ]
    },
    after: {
      title: 'After the Fire',
      titleNepali: 'आगो निभेसकेपछि',
      items: [
        {
          en: 'Do not re-enter burned structures until the fire brigade inspects walls and timber roofs for structural stability.',
          ne: 'दमकल वा प्राविधिकले घर सुरक्षित भएको नबताएसम्म जलेको घरभित्र प्रवेश नगर्नुहोस्।'
        },
        {
          en: 'Cool burn injuries with clean cool running water for 10-15 minutes. Never apply ghee, toothpaste, or turmeric.',
          ne: 'डढेको घाउमा १०-१५ मिनेट चिसो पानी बगाउनुहोस्; घिउ, टुथपेस्ट वा बेसार जस्ता पदार्थ कहिल्यै नलगाउनुहोस्।'
        },
        {
          en: 'Discard food, beverages, and medicine exposed to toxic fumes or excessive heat.',
          ne: 'धुवाँ वा तापले असर गरेका खानेकुरा र औषधिहरू प्रयोग नगर्नुहोस्।'
        }
      ]
    }
  },
  {
    id: 'lightning',
    name: 'Lightning & Thunderstorm',
    nameNepali: 'चट्याङ र मेघगर्जन',
    tagline: 'Nepal records one of the highest per-capita lightning casualty rates in South Asia during pre-monsoon storms.',
    taglineNepali: 'नेपालमा प्रि-मनसुनका बेला चट्याङका कारण बर्सेनि ठूलो जनधनको क्षति हुने गर्दछ।',
    iconPath: '/src/assets/images/lightning_icon_1792328728936.jpg',
    riskContext: 'Widespread threat across hills and plains between 2 PM and 7 PM during March to June convective storm cycles.',
    riskContextNepali: 'फागुनदेखि जेठसम्म दिउँसो २ बजेदेखि साँझ ७ बजेसम्म पहाड र तराईमा अत्यधिक चट्याङको जोखिम।',
    isVerified: true,
    lastVerifiedDate: '2024-08-14',
    authoritativeSource: 'Department of Hydrology and Meteorology (DHM)',
    sourceUrl: 'https://www.dhm.gov.np/',
    before: {
      title: 'Before Thunderstorms Strike',
      titleNepali: 'चट्याङ पर्नुअघि',
      items: [
        {
          en: 'Remember the 30-30 rule: If the time between seeing lightning and hearing thunder is less than 30 seconds, seek shelter.',
          ne: '३०-३० को नियम: बिजुली चम्केको र गर्जेको बीच ३० सेकेन्डभन्दा कम समय भएमा तुरुन्तै सुरक्षित कोठाभित्र जानुहोस्।'
        },
        {
          en: 'Install proper grounding and lightning arresters (earthing) on residential and school buildings.',
          ne: 'घर र विद्यालयमा गुणस्तरीय अर्थिङ तथा चट्याङ प्रतिरोधी यन्त्र (Lightning Arrester) जडान गर्नुहोस्।'
        },
        {
          en: 'Unplug television antennas, computer cords, and chargers before the electrical storm moves overhead.',
          ne: 'आँधीबेहरी आउनुअघि टिभीको एन्टिना, कम्प्युटर र मोबाइल चार्जरका तारहरू अनप्लग गर्नुहोस्।'
        }
      ]
    },
    during: {
      title: 'During a Lightning Storm',
      titleNepali: 'चट्याङ परिरहेको बेला',
      items: [
        {
          en: 'Stay inside a substantial enclosed building or hardtop vehicle. Open sheds, verandahs, and tents provide NO safety.',
          ne: 'पक्की घर वा चारैतिर बन्द गाडीभित्र बस्नुहोस्। खुला टहरो, बरण्डा, छाप्रो वा पालले चट्याङबाट जोगाउँदैन।'
        },
        {
          en: 'If caught in an open field with no shelter: crouch low on the balls of your feet with heels touching and head tucked. Do NOT lie flat on the ground.',
          ne: 'खुला चौरमा भएमा दुवै गोडाका पञ्जाले भुइँमा टेकेर, खुट्टा जोडेर टुक्रुक्क बस्नुहोस्; भुइँमा कहिल्यै सुत्नुहुँदैन।'
        },
        {
          en: 'Stay completely away from tall isolated trees, metal fences, utility poles, irrigation canals, and bodies of water.',
          ne: 'अग्लो एक्लो रुख, बिजुलीको पोल, तारबार र पानी जमेका पोखरी वा खोलाबाट कम्तीमा धेरै टाढा बस्नुहोस्।'
        },
        {
          en: 'Avoid wired telephones, metallic plumbing, and showers during active lightning discharges.',
          ne: 'चट्याङ परिरहेको बेला तार भएको फोन नचलाउनुहोस् र पानीको धारा वा नुहाउने काम नगर्नुहोस्।'
        }
      ]
    },
    after: {
      title: 'After the Storm Passes',
      titleNepali: 'चट्याङ रोकिएपछि',
      items: [
        {
          en: 'Wait at least 30 minutes after the last sound of thunder before resuming outdoor farming or traveling.',
          ne: 'अन्तिम मेघगर्जन सुनिएको कम्तीमा ३० मिनेटपछि मात्र बाहिरी काम वा यात्रा सुरु गर्नुहोस्।'
        },
        {
          en: 'Lightning victims carry NO electrical charge; immediately perform CPR (mouth-to-mouth and chest compressions) to save lives.',
          ne: 'चट्याङ लागेका व्यक्तिमा करेन्ट हुँदैन; उनीहरूलाई छुँदा करेन्ट लाग्दैन, तुरुन्तै सीपीआर (छाती थिच्ने र कृत्रिम श्वास) दिनुहोस्।'
        },
        {
          en: 'Call emergency ambulance 102 immediately and transport the victim to the nearest health post.',
          ne: 'एम्बुलेन्स १०२ मा फोन गरी घाइतेलाई तुरुन्तै नजिकको अस्पताल वा स्वास्थ्य चौकी पुर्याउनुहोस्।'
        }
      ]
    }
  },
  {
    id: 'storm',
    name: 'Windstorm & Hailstorm',
    nameNepali: 'हावाहुरी र असिनापानी',
    tagline: 'Sudden squalls and pre-monsoon supercell storms generate destructive straight-line winds and hailstones.',
    taglineNepali: 'प्रि-मनसुनमा आउने तीव्र हावाहुरी, हुन्डरी र ठूलो असिनाले अन्नबाली र कमजोर छाना उडाउने गर्दछ।',
    iconPath: '/src/assets/images/storm_icon_1792328730842.jpg',
    riskContext: 'High seasonal danger in central and southern Tarai districts during April-June storms.',
    riskContextNepali: 'चैतदेखि जेठसम्म तराईका जिल्लाहरूमा तीव्र गतिमा चल्ने विनाशकारी हुन्डरीको जोखिम।',
    isVerified: true,
    lastVerifiedDate: '2024-07-10',
    authoritativeSource: 'Department of Hydrology and Meteorology (DHM)',
    sourceUrl: 'https://www.dhm.gov.np/',
    before: {
      title: 'Before Windstorms Arrive',
      titleNepali: 'हावाहुरी आउनुअघि',
      items: [
        {
          en: 'Anchor corrugated zinc roofing sheets (jasta pata) with heavy screws, stone ballast, or steel wire strapping.',
          ne: 'जस्तापाताका छानालाई बलियो स्क्रू, तार र भार दिएर उडाउन नसक्ने गरी बाँध्नुहोस्।'
        },
        {
          en: 'Trim weak or dead tree branches hanging dangerously close to your roof and power supply lines.',
          ne: 'घरको छाना र बिजुलीको तारमाथि झुन्डिएका रुखका कमजोर हाँगाहरू पहिल्यै काट्नुहोस्।'
        },
        {
          en: 'Bring indoor flower pots, lightweight tin storage drums, and loose outdoor items that could become airborne missiles.',
          ne: 'कौसी वा आँगनमा रहेका गमला, ड्रम र उड्न सक्ने सामानहरू सुरक्षित भित्र राख्नुहोस्।'
        }
      ]
    },
    during: {
      title: 'During Severe Wind and Hail',
      titleNepali: 'हुन्डरी चलिरहेको बेला',
      items: [
        {
          en: 'Remain inside an interior room without large windows. Pull curtains closed to trap flying shards of glass.',
          ne: 'झ्याल नभएको भित्री कोठामा बस्नुहोस् र झ्यालका पर्दाहरू बन्द राख्नुहोस् ताकि सिसा फुट्दा नछिट्टियोस्।'
        },
        {
          en: 'If driving, pull over safely away from massive hoardings, high-voltage towers, and old trees; remain inside the car.',
          ne: 'गाडी चलाउँदै हुनुहुन्छ भने होर्डिङ बोर्ड, बिजुलीका ठूला टावर र पुराना रुखबाट टाढा गाडी रोकी भित्रै बस्नुहोस्।'
        },
        {
          en: 'Protect farm animals and pets inside sturdy enclosed animal sheds.',
          ne: 'गाईवस्तु र घरपालुवा जनावरलाई असिना र हुन्डरीबाट जोगाउन बलियो गोठमा बाँध्नुहोस्।'
        }
      ]
    },
    after: {
      title: 'After the Windstorm Clears',
      titleNepali: 'हावाहुरी रोकिएपछि',
      items: [
        {
          en: 'Watch out for dangling live electric wires on roads and footpaths; treat all fallen wires as lethal and live.',
          ne: 'सडकमा चुँडिएका बिजुलीका तारहरूबाट धेरै टाढा रहनुहोस् र तुरुन्तै विद्युत् प्राधिकरणलाई खबर गर्नुहोस्।'
        },
        {
          en: 'Carefully inspect your roof structure for looseness before walking on or repairing sheets.',
          ne: 'छाना मर्मत गर्नुअघि संरचना खुकुलो भए-नभएको सावधानीपूर्वक जाँच गर्नुहोस्।'
        },
        {
          en: 'Assist elderly neighbors whose residences may have sustained window or roof damage.',
          ne: 'छाना उडेका वा क्षति पुगेका अशक्त र ज्येष्ठ नागरिक छिमेकीहरूलाई सहयोग गर्नुहोस्।'
        }
      ]
    }
  },
  {
    id: 'extreme-heat',
    name: 'Extreme Heat & Heatwave (Loo)',
    nameNepali: 'अत्यधिक गर्मी र तातो हावा (लू)',
    tagline: 'Dangerous daytime temperatures exceeding 42°C in the southern Tarai plains trigger heat exhaustion and heatstroke.',
    taglineNepali: 'तराईका जिल्लाहरूमा तापक्रम ४२ डिग्रीभन्दा माथि पुग्दा तातो हावा (लू) ले स्वास्थ्यमा गम्भीर असर पार्छ।',
    iconPath: '/src/assets/images/extreme_heat_icon_1792328730261.jpg',
    riskContext: 'Occurs annually between May and July across southern plains (Birgunj, Nepalgunj, Janakpur, Bhairahawa, Biratnagar).',
    riskContextNepali: 'वैशाखदेखि असारसम्म तराईका जिल्लाहरूमा निरन्तर चल्ने लूका कारण ज्यान जोखिममा पर्न सक्छ।',
    isVerified: true,
    lastVerifiedDate: '2024-05-18',
    authoritativeSource: 'Ministry of Health and Population (MoHP) / WHO Nepal',
    sourceUrl: 'https://mohp.gov.np/',
    before: {
      title: 'Before the Peak Heat Season',
      titleNepali: 'गर्मी मौसम सुरु हुनुअघि',
      items: [
        {
          en: 'Stock oral rehydration salts (Jeevan Jal) and prepare cooling shaded spaces in your home.',
          ne: 'घरमा जीवनजल, बिरेनुन र कागती मौज्दात राख्नुहोस् र कोठालाई सित्तल बनाउने व्यवस्था मिलाउनुहोस्।'
        },
        {
          en: 'Schedule outdoor agricultural work, heavy labor, or long journeys before 10 AM or after 5 PM.',
          ne: 'खेतबारीको काम, भारी श्रम र लामो यात्रा बिहान १० बजेअगाडि वा साँझ ५ बजेपछि मात्र गर्ने तालिका बनाउनुहोस्।'
        },
        {
          en: 'Identify vulnerable family members (infants, pregnant women, elders over 65) who need dedicated hydration monitoring.',
          ne: 'बालबालिका, गर्भवती महिला र ज्येष्ठ नागरिकलाई लूको छिटो असर पर्ने भएकाले उनीहरूको विशेष ख्याल राख्नुहोस्।'
        }
      ]
    },
    during: {
      title: 'During Peak Heat Hours (11 AM - 4 PM)',
      titleNepali: 'दिउँसोको चर्को घामका बेला',
      items: [
        {
          en: 'Drink plentiful clean water, lemon water, and ORS solution even before feeling thirsty. Avoid sugary carbonated drinks.',
          ne: 'तिर्खा नलागे पनि प्रशस्त पानी, कागती पानी, मोही वा जीवनजल पिइरहनुहोस्। अत्यधिक गुलिया पेयपदार्थ नपिउनुहोस्।'
        },
        {
          en: 'Wear loose-fitting, light-colored cotton clothing and cover your head with a cotton gamcha (scarf) or umbrella.',
          ne: 'पातलो, खुकुलो र हल्का रङको सुती लुगा लगाउनुहोस् र घाममा निस्कनै परे छाता वा गम्छाले टाउको छोप्नुहोस्।'
        },
        {
          en: 'NEVER leave children, elders, or pets inside a closed parked vehicle even for two minutes.',
          ne: 'घाममा रोकिराखेको गाडीभित्र बालबालिका वा कसैलाई पनि केही मिनेटका लागि समेत नछोड्नुहोस्।'
        },
        {
          en: 'Recognize Heat Stroke emergencies: Body temperature > 40°C, dry red skin without sweat, rapid heart rate, confusion or fainting.',
          ne: 'लू (Heatstroke) को लक्षण चिन्नुहोस्: कडा ज्वरो आउनु, पसिना आउन बन्द हुनु, चक्कर लाग्नु वा बेहोस हुनु।'
        }
      ]
    },
    after: {
      title: 'First Aid & Recovery from Heat Illness',
      titleNepali: 'लू लागेमा प्राथमिक उपचार',
      items: [
        {
          en: 'Move the person immediately to a cool shaded room or fan breeze.',
          ne: 'बिरामीलाई तुरुन्तै सित्तल, हावा चल्ने ठाउँ वा पंखा भएको कोठामा सार्नुहोस्।'
        },
        {
          en: 'Sponge body with cool (not freezing) water, apply damp cloths to neck, armpits, and groin, and fan vigorously.',
          ne: 'चिसो कपडाले शरीर पुछ्नुहोस् र घाँटी, काखी र तिघ्राको कापमा चिसो पट्टि राखी हावा हम्किनुहोस्।'
        },
        {
          en: 'If conscious, provide small sips of cool ORS water; if vomiting or unconscious, place in recovery position and rush to clinic.',
          ne: 'होस छ भने बिस्तारै जीवनजल खुवाउनुहोस्; बान्ता गरेमा वा बेहोस भएमा ढिलाइ नगरी अस्पताल लैजानुहोस्।'
        }
      ]
    }
  }
];
