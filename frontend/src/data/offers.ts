import { OfferItem } from '../types';

export const OFFERS: OfferItem[] = [
  {
    id: 'regeneracja-organizmu',
    title: {
      pl: 'Regeneracja Organizmu',
      en: 'Body Regeneration'
    },
    shortDescription: {
      pl: 'Regeneracyjne wlewy dożylne to skuteczny sposób na szybką regenerację po intensywnym wysiłku, chorobie czy stresie. Dostarczają niezbędnych witamin i minerałów, poprawiając energię i samopoczucie.',
      en: 'Regenerative IV infusions supporting rapid recovery after intense effort, illness, or stress.'
    },
    fullDescription: {
      pl: 'Regeneracyjne wlewy dożylne to skuteczny sposób na szybką regenerację po intensywnym wysiłku, chorobie czy stresie. Dostarczają niezbędnych witamin i minerałów, poprawiając energię i samopoczucie.',
      en: 'Regenerative IV infusions supporting rapid recovery after intense effort, illness, or stress. They provide essential vitamins and minerals, improving energy and wellbeing.'
    },
    category: 'regeneration',
    price: 400,
    priceFormatted: {
      pl: '400 zł',
      en: '400 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Witamina C', 'Kompleks Witamin B (B1, B2, B3, B5, B6, B12)', 'Magnez', 'Cynk', 'Glutation'],
      en: ['Vitamin C', 'Vitamin B Complex (B1, B2, B3, B5, B6, B12)', 'Magnesium', 'Zinc', 'Glutathione']
    },
    benefits: {
      pl: ['Szybka redukcja uczucia zmęczenia', 'Odbudowa zasobów sił witalnych', 'Wsparcie regeneracji pochorobowej', 'Lepszy sen i opanowanie stresu'],
      en: ['Fast fatigue reduction', 'Restoration of vital energy', 'Post-illness recovery support', 'Improved sleep and stress management']
    },
    indications: {
      pl: ['Przewlekłe zmęczenie', 'Stan po przebytej infekcji', 'Przepracowanie i wyczerpanie', 'Osłabienie organizmu'],
      en: ['Chronic fatigue', 'Post-infection state', 'Overwork and exhaustion', 'General weakness']
    },
    iconName: 'Activity'
  },
  {
    id: 'oczyszczenie-z-toksyn',
    title: {
      pl: 'Oczyszczenie Organizmu z Toksyn',
      en: 'Detox & Cleansing'
    },
    shortDescription: {
      pl: 'Wlewy wspierające detoksykację organizmu, pomagające usunąć szkodliwe substancje i przynieść ulgę przy zmęczeniu czy bólu głowy. Wspierają też prawidłowe funkcjonowanie układu odpornościowego.',
      en: 'Infusions supporting body detoxification, helping eliminate harmful substances and relieve fatigue or headache.'
    },
    fullDescription: {
      pl: 'Wlewy wspierające detoksykację organizmu, pomagające usunąć szkodliwe substancje i przynieść ulgę przy zmęczeniu czy bólu głowy. Wspierają też prawidłowe funkcjonowanie układu odpornościowego.',
      en: 'Infusions supporting body detoxification, helping eliminate harmful substances and bring relief from fatigue or headaches. They also support proper immune function.'
    },
    category: 'detox',
    price: 550,
    priceFormatted: {
      pl: '550 zł',
      en: '550 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Wysokodawkowa Witamina C', 'Glutation', 'Kwas Alfa-Liponowy', 'Sól fizjologiczna 0.9%'],
      en: ['High-dose Vitamin C', 'Glutathione', 'Alpha-Lipoic Acid', 'Saline Solution 0.9%']
    },
    benefits: {
      pl: ['Neutralizacja wolnych rodników', 'Poprawa kondycji skóry', 'Wsparcie funkcjonowania narządów detoksykujących', 'Zwiększenie energii komórkowej'],
      en: ['Neutralization of free radicals', 'Improved skin condition', 'Support for detox organs', 'Enhanced cellular energy']
    },
    indications: {
      pl: ['Narażenie na smog i toksyny', 'Niewłaściwa dieta', 'Niska jakość skóry i włosów', 'Uczucie ciężkości w ciele'],
      en: ['Exposure to pollution & toxins', 'Poor diet', 'Dull skin and hair', 'General sluggishness']
    },
    iconName: 'Sparkles'
  },
  {
    id: 'poprawa-koncentracji',
    title: {
      pl: 'Poprawa Koncentracji i Pamięci',
      en: 'Brain Booster & Focus'
    },
    shortDescription: {
      pl: 'Wlewy dożylne z witaminami z grupy B, kwasami omega-3 i antyoksydantami, wspierające procesy myślowe i pamięciowe. Idealne w sytuacjach wymagających skupienia, np. w pracy czy nauce.',
      en: 'IV infusions with B vitamins, omega-3 acids and antioxidants, supporting memory and cognitive processes.'
    },
    fullDescription: {
      pl: 'Wlewy dożylne z witaminami z grupy B, kwasami omega-3 i antyoksydantami, wspierające procesy myślowe i pamięciowe. Idealne w sytuacjach wymagających skupienia, np. w pracy czy nauce.',
      en: 'IV infusions with B vitamins, omega-3 acids and antioxidants, supporting memory and cognitive processes. Ideal for situations requiring focus, e.g. at work or study.'
    },
    category: 'vitality',
    price: 400,
    priceFormatted: {
      pl: '400 zł',
      en: '400 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Kompleks Witamin B', 'Tauryna', 'Magnez', 'Elektrolity', 'Cynk'],
      en: ['Vitamin B Complex', 'Taurine', 'Magnesium', 'Electrolytes', 'Zinc']
    },
    benefits: {
      pl: ['Zwiększona ostrość widzenia i umysłu', 'Redukcja mgły mózgowej', 'Poprawa zapamiętywania i przyswajania wiedzy', 'Stabilna energia bez spadków'],
      en: ['Enhanced mental sharpness', 'Brain fog reduction', 'Improved memory retention', 'Sustained energy without crashes']
    },
    indications: {
      pl: ['Intensywna praca umysłowa', 'Sesje egzaminacyjne', 'Problemy ze skupieniem', 'Przewlekły stres zawodowy'],
      en: ['Intense mental work', 'Exam periods', 'Focus difficulties', 'Work-related stress']
    },
    iconName: 'Brain'
  },
  {
    id: 'nawodnienie-organizmu',
    title: {
      pl: 'Nawodnienie Organizmu',
      en: 'Hydration Therapy'
    },
    shortDescription: {
      pl: 'Wlewy dla osób aktywnych fizycznie i sportowców, uzupełniające płyny oraz elektrolity. Pomagają szybciej się zregenerować i poczuć przypływ energii.',
      en: 'Infusions for active individuals and athletes, replenishing fluids and electrolytes. Helping recover faster and boost energy.'
    },
    fullDescription: {
      pl: 'Wlewy dla osób aktywnych fizycznie i sportowców, uzupełniające płyny oraz elektrolity. Pomagają szybciej się zregenerować i poczuć przypływ energii.',
      en: 'Infusions for physically active individuals and athletes, replenishing fluids and electrolytes. Helping recover faster and feel a surge of energy.'
    },
    category: 'regeneration',
    price: 300,
    priceFormatted: {
      pl: '300 zł',
      en: '300 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Płyn Wieloelektrolitowy (KKL/Optilyte)', 'Sód', 'Potas', 'Wapń', 'Magnez'],
      en: ['Multi-electrolyte Solution', 'Sodium', 'Potassium', 'Calcium', 'Magnesium']
    },
    benefits: {
      pl: ['Natychmiastowe przywrócenie równowagi płynów', 'Eliminacja bólu głowy wywołanego odwodnieniem', 'Przywrócenie prawidłowego ciśnienia', 'Pobudzenie krążenia'],
      en: ['Instant fluid balance restoration', 'Elimination of dehydration headache', 'BP normalization', 'Enhanced circulation']
    },
    indications: {
      pl: ['Odwodnienie po upałach lub wysiłku', 'Objawy po długim locie (jet lag)', 'Grypa żołądkowa', 'Ogólny spadek poziomu nawodnienia'],
      en: ['Post-heat/workout dehydration', 'Jet lag symptoms', 'Stomach flu', 'General fluid deficiency']
    },
    iconName: 'Droplet'
  },
  {
    id: 'zwiekszenie-odpornosci',
    title: {
      pl: 'Zwiększenie Odporności',
      en: 'Immunity Shield'
    },
    shortDescription: {
      pl: 'Wlewy wspierające naturalne mechanizmy obronne organizmu, pomocne w walce z infekcjami. Wzmacniają organizm szczególnie w okresach zwiększonego ryzyka, np. zmiany pory roku.',
      en: 'Infusions supporting natural defense mechanisms, helpful in fighting infections during seasonal transitions.'
    },
    fullDescription: {
      pl: 'Wlewy wspierające naturalne mechanizmy obronne organizmu, pomocne w walce z infekcjami. Wzmacniają organizm szczególnie w okresach zwiększonego ryzyka, np. zmiany pory roku.',
      en: 'Infusions supporting natural defense mechanisms, helpful in fighting infections. Strengthening the body especially during high-risk periods, such as seasonal changes.'
    },
    category: 'specialized',
    price: 400,
    priceFormatted: {
      pl: '400 zł',
      en: '400 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Wysoka dawka Witaminy C (Ascorbin)', 'Cynk', 'Kompleks B', 'Glutation'],
      en: ['High-dose Vitamin C', 'Zinc', 'B Complex', 'Glutathione']
    },
    benefits: {
      pl: ['Wzmocnienie bariery immunologicznej', 'Szybszy powrót do zdrowia przy pierwszych objawach', 'Redukcja stadiów zapalnych', 'Ochrona przed nawracającymi infekcjami'],
      en: ['Immune barrier enhancement', 'Faster recovery at first symptoms', 'Inflammation reduction', 'Protection against recurring colds']
    },
    indications: {
      pl: ['Częste przeziębienia', 'Okres zwiększonej zachorowalności', 'Pierwsze objawy infekcji', 'Niska odporność komórkowa'],
      en: ['Frequent colds', 'Flu season', 'Early infection symptoms', 'Low cellular immunity']
    },
    iconName: 'ShieldCheck'
  },
  {
    id: 'bomba-witaminowa',
    title: {
      pl: 'Bomba Witaminowa',
      en: 'Vitamin Drip Complex'
    },
    shortDescription: {
      pl: 'Kompleks witamin wspierających odporność, samopoczucie i energię. Szybkie wchłanianie zapewnia niemal natychmiastowe efekty.',
      en: 'Vitamin complex supporting immunity, wellbeing and energy. Fast absorption ensures almost immediate results.'
    },
    fullDescription: {
      pl: 'Kompleks witamin wspierających odporność, samopoczucie i energię. Szybkie wchłanianie zapewnia niemal natychmiastowe efekty.',
      en: 'Vitamin complex supporting immunity, wellbeing and energy. Fast absorption ensures almost immediate results.'
    },
    category: 'vitality',
    price: 500,
    priceFormatted: {
      pl: '500 zł',
      en: '500 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Witamina C', 'Kompleks Witamin B', 'Kwas Foliowy', 'Magnez', 'Elektrolity'],
      en: ['Vitamin C', 'Vitamin B Complex', 'Folic Acid', 'Magnesium', 'Electrolytes']
    },
    benefits: {
      pl: ['Gwałtowny zastrzyk pozytywnej energii', 'Nasycenie organizmu mikroskładnikami', 'Poprawa samopoczucia i humoru', 'Wzmocnienie włosów i paznokci'],
      en: ['Surge of natural energy', 'Cellular micronutrient saturation', 'Mood and wellbeing boost', 'Hair and nail strengthening']
    },
    indications: {
      pl: ['Brak energii na co dzień', 'Diety ubogie w mikroskładniki', 'Oznaki niedoborów witaminowych', 'Ogólne spowolnienie metabolizmu'],
      en: ['Daily lack of energy', 'Nutrient-deficient diets', 'Signs of vitamin shortage', 'Slow metabolism']
    },
    iconName: 'Zap'
  },
  {
    id: 'bomba-aminokwasowa',
    title: {
      pl: 'Bomba Aminokwasowa',
      en: 'Amino Acid Power'
    },
    shortDescription: {
      pl: 'Wlewy z niezbędnymi aminokwasami wspierającymi regenerację mięśni i wydolność organizmu. Polecane sportowcom i osobom aktywnym fizycznie.',
      en: 'Infusions with essential amino acids supporting muscle recovery and physical endurance.'
    },
    fullDescription: {
      pl: 'Wlewy z niezbędnymi aminokwasami wspierającymi regenerację mięśni i wydolność organizmu. Polecane sportowcom i osobom aktywnym fizycznie.',
      en: 'Infusions with essential amino acids supporting muscle recovery and physical endurance. Recommended for athletes and active individuals.'
    },
    category: 'specialized',
    price: 300,
    priceFormatted: {
      pl: '300 zł',
      en: '300 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['L-Arginina', 'L-Karnityna', 'L-Glutamina', 'BCAA aminokwasy', 'Kompleks elektrolitowy'],
      en: ['L-Arginine', 'L-Carnitine', 'L-Glutamine', 'BCAA amino acids', 'Electrolyte Complex']
    },
    benefits: {
      pl: ['Przyspieszona regeneracja mięśniowa', 'Zmniejszenie bolesności (tzw. zakwasów)', 'Odbudowa białek ustrojowych', 'Wsparcie tarczycy i metabolizmu'],
      en: ['Accelerated muscle recovery', 'Reduction of delayed soreness', 'Body protein rebuild', 'Metabolism support']
    },
    indications: {
      pl: ['Intensywny trening sportowy', 'Okresy rozbudowy tkanki mięśniowej', 'Stan po kontuzjach i urazach', 'Utrata masy mięśniowej'],
      en: ['Intense athletic training', 'Muscle building phases', 'Post-injury recovery', 'Muscle tissue decline']
    },
    iconName: 'Dumbbell'
  },
  {
    id: 'bomba-elektrolitowa',
    title: {
      pl: 'Bomba Elektrolitowa',
      en: 'Electrolyte Bomb'
    },
    shortDescription: {
      pl: 'Wlewy uzupełniające sód, potas, magnez i wapń — kluczowe dla równowagi elektrolitowej. Idealne po wysiłku, upałach lub chorobie.',
      en: 'Infusions replenishing sodium, potassium, magnesium and calcium — key for electrolyte balance.'
    },
    fullDescription: {
      pl: 'Wlewy uzupełniające sód, potas, magnez i wapń — kluczowe dla równowagi elektrolitowej. Idealne po wysiłku, upałach lub chorobie.',
      en: 'Infusions replenishing sodium, potassium, magnesium and calcium — key for electrolyte balance. Ideal after exercise, hot weather or illness.'
    },
    category: 'regeneration',
    price: 300,
    priceFormatted: {
      pl: '300 zł',
      en: '300 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Kationy Magnezu', 'Potas', 'Sód', 'Wapń', 'Chlorki'],
      en: ['Magnesium Ions', 'Potassium', 'Sodium', 'Calcium', 'Chlorides']
    },
    benefits: {
      pl: ['Koniec ze skurczami mięśni', 'Stabilizacja pracy układu krążenia', 'Przywrócenie prawidłowego przewodnictwa nerwowego', 'Szybka ulga w osłabieniu'],
      en: ['Muscle cramps relief', 'Cardiovascular stabilization', 'Restoration of nerve impulse transmission', 'Fast relief from weakness']
    },
    indications: {
      pl: ['Częste skurcze łydki i udownia', 'Picie dużej ilości kawy', 'Wysokie temperatury otoczenia', 'Intensywne pocenie się'],
      en: ['Frequent muscle cramps', 'Heavy coffee consumption', 'High summer heat', 'Profuse sweating']
    },
    iconName: 'Flame'
  },
  {
    id: 'odtrucie-alkoholowe',
    title: {
      pl: 'Odtrucie Alkoholowe',
      en: 'Alcohol Detox & Recovery'
    },
    shortDescription: {
      pl: 'Wlewy wspierające detoksykację, nawodnienie i uzupełnienie elektrolitów po nadmiernym spożyciu alkoholu. Pomagają szybko złagodzić skutki kaca.',
      en: 'Infusions supporting detox, hydration and electrolyte replenishment after alcohol consumption.'
    },
    fullDescription: {
      pl: 'Wlewy wspierające detoksykację, nawodnienie i uzupełnienie elektrolitów po nadmiernym spożyciu alkoholu. Pomagają szybko złagodzić skutki kaca.',
      en: 'Infusions supporting detox, hydration and electrolyte replenishment after alcohol consumption. Helping quickly relieve hangover symptoms.'
    },
    category: 'detox',
    price: 750,
    priceFormatted: {
      pl: '750 zł',
      en: '750 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Płyn wieloelektrolitowy', 'Magnez', 'Witaminy z grupy B (w tym B1, B6)', 'Leki przeciwwymiotne i przeciwbólowe (na życzenie/skazanie)', 'Glukoza'],
      en: ['Multi-electrolyte solution', 'Magnesium', 'B Vitamins (B1, B6)', 'Anti-nausea & analgesic agents (if indicated)', 'Glucose']
    },
    benefits: {
      pl: ['Natychmiastowe ustąpienie nudności i bólu głowy', 'Przywrócenie ostrości widzenia i równowagi', 'Uspokojenie akcji serca', 'Dyskretna pomoc medyczna w domowym zaciszu'],
      en: ['Immediate relief from nausea and headache', 'Restoration of balance and clarity', 'Heart rate stabilization', 'Discreet home medical assistance']
    },
    indications: {
      pl: ['Silne objawy kaca', 'Zatrucie alkoholowe', 'Przewlekłe osłabienie po wydarzeniu', 'Konieczność szybkiego powrotu do formy'],
      en: ['Severe hangover', 'Alcohol intoxication', 'Extreme weakness post-event', 'Need for urgent recovery']
    },
    iconName: 'HeartPulse'
  },
  {
    id: 'rewitalizacja-organizmu',
    title: {
      pl: 'Rewitalizacja Organizmu',
      en: 'Total Body Revitalizer'
    },
    shortDescription: {
      pl: 'Wlewy z witaminami, minerałami i antyoksydantami wspierające naturalną regenerację. Pomagają w walce ze zmęczeniem i stresem, przywracając energię.',
      en: 'Infusions with vitamins, minerals and antioxidants supporting natural regeneration.'
    },
    fullDescription: {
      pl: 'Wlewy z witaminami, minerałami i antyoksydantami wspierające naturalną regenerację. Pomagają w walce ze zmęczeniem i stresem, przywracając energię.',
      en: 'Infusions with vitamins, minerals and antioxidants supporting natural regeneration. Helping combat fatigue and stress, restoring energy.'
    },
    category: 'vitality',
    price: 350,
    priceFormatted: {
      pl: '350 zł',
      en: '350 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Wysokodawkowy Glutation', 'Witamina C', 'Biotyna', 'Kompleks mikroelementów'],
      en: ['High-dose Glutathione', 'Vitamin C', 'Biotin', 'Trace mineral complex']
    },
    benefits: {
      pl: ['Lepszy stan skóry, włosów i paznokci', 'Rozjaśnienie przebarwień skórnych', 'Zwiększenie napięcia i elastyczności skóry', 'Lepsze samopoczucie estetyczne'],
      en: ['Improved skin, hair, and nail health', 'Hyperpigmentation reduction', 'Increased skin firmness', 'Enhanced aesthetic wellbeing']
    },
    indications: {
      pl: ['Oznaki starzenia się skóry', 'Narażenie na promienowanie UV', 'Zmęczona, szara cera', 'Chęć przeprowadzenia kuracji Anti-Aging'],
      en: ['Signs of skin aging', 'UV exposure', 'Dull, tired complexion', 'Anti-Aging maintenance']
    },
    iconName: 'Sun'
  },
  {
    id: 'regeneracja-watroby',
    title: {
      pl: 'Regeneracja Wątroby',
      en: 'Hepatic Liver Shield'
    },
    shortDescription: {
      pl: 'Wlewy wspierające detoksykację i regenerację komórek wątroby. Pomocne dla osób narażonych na stres, toksyny czy niewłaściwą dietę.',
      en: 'Infusions supporting liver cell detoxification and regeneration. Helpful for people exposed to stress, toxins or poor diet.'
    },
    fullDescription: {
      pl: 'Wlewy wspierające detoksykację i regenerację komórek wątroby. Pomocne dla osób narażonych na stres, toksyny czy niewłaściwą dietę.',
      en: 'Infusions supporting liver cell detoxification and regeneration. Helpful for people exposed to stress, toxins or poor diet.'
    },
    category: 'specialized',
    price: 350,
    priceFormatted: {
      pl: '350 zł',
      en: '350 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Ornityna (L-ornityna L-asparaginian)', 'Cholina', 'Glutation', 'Witaminy z grupy B'],
      en: ['Ornithine (L-ornithine L-aspartate)', 'Choline', 'Glutathione', 'B Complex Vitamins']
    },
    benefits: {
      pl: ['Przyspieszenie odnowy hepatocytów', 'Usprawnienie metabolizmu amoniaku', 'Odciążenie układu pokarmowego', 'Lepsze trawienie tłuszczów'],
      en: ['Accelerated hepatocyte renewal', 'Improved ammonia clearance', 'Digestive system relief', 'Better fat digestion']
    },
    indications: {
      pl: ['Stłuszczenie wątroby', 'Stosowanie wielu leków', 'Dieta bogata w tłuszcze', 'Po przebytych chorobach wątroby'],
      en: ['Fatty liver', 'Long-term medication use', 'High-fat diet', 'Post-hepatic conditions']
    },
    iconName: 'Shield'
  },
  {
    id: 'dla-sportowcow',
    title: {
      pl: 'Dla Sportowców',
      en: 'Athletic Performance & Drip'
    },
    shortDescription: {
      pl: 'Wlewy z aminokwasami, elektrolitami i witaminami wspierające wydolność i szybszą regenerację po wysiłku. Zwiększają energię i poprawiają kondycję.',
      en: 'Infusions with amino acids, electrolytes and vitamins supporting performance and faster post-workout recovery.'
    },
    fullDescription: {
      pl: 'Wlewy z aminokwasami, elektrolitami i witaminami wspierające wydolność i szybszą regenerację po wysiłku. Zwiększają energię i poprawiają kondycję.',
      en: 'Infusions with amino acids, electrolytes and vitamins supporting performance and faster post-workout recovery. Increasing energy and physical condition.'
    },
    category: 'vitality',
    price: 400,
    priceFormatted: {
      pl: '400 zł',
      en: '400 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['L-Karnityna', 'L-Arginina', 'Wysoka dawka Magnezu', 'Płyn PWE', 'B-Kompleks'],
      en: ['L-Carnitine', 'L-Arginine', 'High-dose Magnesium', 'Balanced Electrolyte Solution', 'B-Complex']
    },
    benefits: {
      pl: ['Maksymalne przyspieszenie powrotu do formy', 'Zwiększenie progu tlenowego', 'Zapobieganie przetrenowaniu', 'Skuteczne wyrównanie bilansu jonowego'],
      en: ['Maximized recovery speed', 'Aerobic threshold support', 'Overreaching prevention', 'Perfect ion balance']
    },
    indications: {
      pl: ['Treningi wyczynowe i maratony', 'Częste starty w zawodach', 'Uczucie ciężkich nóg po treningu', 'Przygotowanie do sezonu'],
      en: ['Marathons & elite sports', 'Frequent competitions', 'Heavy leg feeling after workouts', 'Season preparation']
    },
    iconName: 'Trophy'
  },
  {
    id: 'glutation',
    title: {
      pl: 'Glutation',
      en: 'Glutathione Drip'
    },
    shortDescription: {
      pl: 'Wlew dożylny z glutationem podawany w odpowiedniej dawce i zgodnie z kwalifikacją medyczną przeprowadzaną przez personel przed podaniem.',
      en: 'Intravenous glutathione infusion administered in an appropriate dose and in accordance with medical qualification.'
    },
    fullDescription: {
      pl: 'Glutation to kluczowy antyoksydant naturalnie występujący w komórkach organizmu. Wlew dożylny z glutationem podawany jest w odpowiedniej dawce i ściśle zgodnie z kwalifikacją medyczną przeprowadzaną przez personel medyczny na podstawie wywiadu i badania parametrów pacjenta.',
      en: 'Glutathione is a key antioxidant naturally present in body cells. Intravenous glutathione infusion is administered in an appropriate dose and strictly in accordance with medical qualification performed by medical personnel based on health interview and vital signs.'
    },
    category: 'specialized',
    price: 400,
    priceFormatted: {
      pl: '400 zł',
      en: '400 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Glutation (dawka dobrana po kwalifikacji medycznej)', 'Izotoniczny roztwór soli fizjologicznej 0.9%'],
      en: ['Glutathione (dosage determined by medical qualification)', 'Isotonic saline solution 0.9%']
    },
    benefits: {
      pl: ['Podanie w odpowiedniej dawce zgodnie z kwalifikacją medyczną', 'Uzupełnienie poziomu antyoksydantów w organizmie', 'Wsparcie naturalnych procesów antyoksydacyjnych', 'Sterylna aplikacja i stały nadzór personelu medycznego'],
      en: ['Administered in an appropriate dose per medical qualification', 'Replenishment of antioxidant levels', 'Support for natural antioxidant processes', 'Sterile administration under medical supervision']
    },
    indications: {
      pl: ['Zgodnie z kwalifikacją i wywiadem medycznym', 'Zwiększone zapotrzebowanie na antyoksydanty', 'Narażenie na stres oksydacyjny', 'Uzupełnienie diety w okresie wzmożonego wysiłku'],
      en: ['According to medical qualification and interview', 'Increased demand for antioxidants', 'Exposure to oxidative stress', 'Dietary support during intense periods']
    },
    iconName: 'Sparkles'
  },
  {
    id: 'nad-plus',
    title: {
      pl: 'NAD+',
      en: 'NAD+ Cell Renewal Drip'
    },
    shortDescription: {
      pl: 'Kroplówka wspierająca energię, koncentrację i naturalne procesy regeneracji. Polecana osobom zestresowanym, przemęczonym lub chcącym spowolnić procesy starzenia.',
      en: 'IV drip supporting energy, concentration and natural recovery processes.'
    },
    fullDescription: {
      pl: 'Kroplówka wspierająca energię, koncentrację i naturalne procesy regeneracji. Polecana osobom zestresowanym, przemęczonym lub chcącym spowolnić procesy starzenia.',
      en: 'IV drip supporting energy, concentration and natural recovery processes. Recommended for stressed, overworked individuals or those wanting to slow down aging.'
    },
    category: 'specialized',
    price: 800,
    priceFormatted: {
      pl: '800 zł',
      en: '800 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Czysty Dinukleotyd Nikotynoamidoadeninowy (NAD+)', 'Sól fizjologiczna'],
      en: ['Pure Nicotinamide Adenine Dinucleotide (NAD+)', 'Saline']
    },
    benefits: {
      pl: ['Głęboka aktywacja sirtuin (genów długowieczności)', 'Cofanie procesów starzenia komórkowego', 'Maksymalna regeneracja neurologiczna', 'Poprawa jasności myślenia i energii ATP'],
      en: ['Sirtuin activation (longevity genes)', 'Reversal of cellular aging markers', 'Neurological regeneration', 'Enhanced ATP energy']
    },
    indications: {
      pl: ['Głębokie wyczerpanie bioenergetyczne', 'Medycyna długowieczności (Longevity)', 'Utrata ostrości poznawczej', 'Chęć odmłodzenia organizmu od wewnątrz'],
      en: ['Deep bioenergetic exhaustion', 'Longevity protocols', 'Cognitive sharpness decline', 'Cellular rejuvenation']
    },
    iconName: 'Dna'
  },
  {
    id: 'kwas-alfa-liponowy',
    title: {
      pl: 'Kwas Alfa Liponowy (ALA)',
      en: 'Alpha-Lipoic Acid (ALA)'
    },
    shortDescription: {
      pl: 'Silny antyoksydant neutralizujący wolne rodniki i wspierający regenerację komórek. Pomaga zredukować zmęczenie oraz wspiera pracę wątroby i układu nerwowego.',
      en: 'Potent antioxidant neutralizing free radicals and supporting cell regeneration.'
    },
    fullDescription: {
      pl: 'Silny antyoksydant neutralizujący wolne rodniki i wspierający regenerację komórek. Pomaga zredukować zmęczenie oraz wspiera pracę wątroby i układu nerwowego.',
      en: 'Potent antioxidant neutralizing free radicals and supporting cell regeneration. Helps reduce fatigue and supports liver and nervous system function.'
    },
    category: 'specialized',
    price: 450,
    priceFormatted: {
      pl: '450 zł',
      en: '450 PLN'
    },
    durationMinutes: 45,
    ingredients: {
      pl: ['Kwas Alfa-Liponowy (ALA)', 'Sól fizjologiczna'],
      en: ['Alpha-Lipoic Acid (ALA)', 'Saline solution']
    },
    benefits: {
      pl: ['Wsparcie przy insulinooporności i cukrzycy', 'Ochrona nerwów (działanie neuroprotekcyjne)', 'Oczyszczenie z metali ciężkich', 'Mocna stymulacja antyoksydacyjna'],
      en: ['Insulin resistance & diabetes support', 'Neuroprotective action', 'Heavy metal chelation support', 'Potent antioxidant stimulation']
    },
    indications: {
      pl: ['Insulinooporność i zaburzenia glikemii', 'Drętwienie kończyn i neuropatie', 'Kuracje antyoksydacyjne', 'Stres oksydacyjny'],
      en: ['Insulin resistance & glycemic issues', 'Neuropathy and limb numbness', 'Antioxidant therapy', 'High oxidative stress']
    },
    iconName: 'ShieldAlert'
  }
];
