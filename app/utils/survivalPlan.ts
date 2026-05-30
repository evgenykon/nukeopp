export const locationTypes = [
  { id: "capital", en: "Capital city", ru: "Столица" },
  { id: "major-europe", en: "Major city (European part)", ru: "Крупный город (европейская часть)" },
  { id: "major-asia", en: "Major city (Asian part)", ru: "Крупный город (азиатская часть)" },
  { id: "medium-europe", en: "Medium city (European part)", ru: "Средний город (европейская часть)" },
  { id: "medium-asia", en: "Medium city (Asian part)", ru: "Средний город (азиатская часть)" },
  { id: "small-town", en: "Small town", ru: "Небольшой город" },
  { id: "suburb", en: "Suburb of a major city", ru: "Пригород крупного города" },
  { id: "rural", en: "Rural area / village", ru: "Сельская местность / деревня" },
  { id: "remote", en: "Remote area (taiga, tundra, mountains)", ru: "Удалённая местность (тайга, тундра, горы)" },
  { id: "near-base", en: "Near a military base", ru: "Рядом с военной базой" },
  { id: "near-npp", en: "Near a nuclear power plant", ru: "Рядом с АЭС" },
  { id: "coastal", en: "Coastal area", ru: "Побережье" },
]

export const factors = [
  { id: "hasFamily", en: "I have a family / dependents", ru: "У меня есть семья / иждивенцы" },
  { id: "hasCar", en: "I have a car", ru: "У меня есть машина" },
  { id: "hasMobileTransport", en: "I have a motorcycle / bicycle", ru: "У меня есть мотоцикл / велосипед" },
  { id: "hasDacha", en: "I have a country house / dacha", ru: "У меня есть дача / загородный дом" },
  { id: "hasRelativesCity", en: "I have relatives in another city", ru: "У меня есть родственники в другом городе" },
  { id: "hasRelativesNearby", en: "I have relatives nearby", ru: "У меня есть родственники недалеко" },
  { id: "hasAcquaintancesAbroad", en: "I have acquaintances abroad", ru: "У меня есть знакомые в другой стране" },
  { id: "hasPets", en: "I have pets", ru: "У меня есть домашние животные" },
  { id: "hasMedicalNeeds", en: "I require regular medication", ru: "Мне нужно регулярно принимать лекарства" },
  { id: "hasWeapon", en: "I have a firearm for self-defense", ru: "У меня есть огнестрельное оружие" },
  { id: "hasBasement", en: "I have a basement / cellar", ru: "У меня есть подвал / погреб" },
  { id: "hasGenerator", en: "I have a generator or solar panels", ru: "У меня есть генератор или солнечные панели" },
  { id: "hasRadio", en: "I have a radio / walkie-talkie", ru: "У меня есть радио / рация" },
  { id: "hasSkills", en: "I have survival skills (first aid, hunting, building)", ru: "У меня есть навыки выживания (медицина, охота, стройка)" },
]

export interface PlanFactors {
  countryId: string
  locationId: string
  scenarioId: string
  checked: Record<string, boolean>
}

interface PlanSection {
  title: Record<string, string>
  items: Record<string, string>[]
}

const locationAdvice: Record<string, { before: Record<string, string>; during: Record<string, string>; after: Record<string, string> }> = {
  capital: {
    before: { en: "You live in a primary target zone. Do NOT count on staying. Plan evacuation routes to rural areas 300+ km away. Pre-position supplies at your destination.", ru: "Вы живёте в зоне первоочередного удара. НЕ рассчитывайте остаться. Планируйте эвакуацию в сельскую местность за 300+ км. Заранее разместите припасы по месту назначения." },
    during: { en: "Leave immediately. You have 15–30 minutes before the first wave. Head away from government centers and military bases. Do NOT use main roads — they will be jammed.", ru: "Уходите немедленно. У вас 15–30 минут до первой волны. Двигайтесь в сторону от правительственных центров и военных баз. НЕ используйте главные дороги — они будут заблокированы." },
    after: { en: "Do NOT return to the city for at least 2 weeks. Fallout will be severe. Seek shelter in rural buildings with basements.", ru: "НЕ возвращайтесь в город минимум 2 недели. Осадки будут сильными. Ищите убежище в сельских домах с подвалами." },
  },
  "major-europe": {
    before: { en: "Major European city — likely target. Plan evacuation westward or southward. Avoid areas near military bases and ports.", ru: "Крупный европейский город — вероятная цель. Планируйте эвакуацию на запад или юг. Избегайте районов военных баз и портов." },
    during: { en: "Evacuate city immediately. Head to rural areas 200+ km away. Do NOT head east — fallout drifts eastward.", ru: "Немедленно покиньте город. Направляйтесь в сельскую местность за 200+ км. НЕ двигайтесь на восток — осадки дрейфуют на восток." },
    after: { en: "Find shelter with basement. Do not return for 1–2 weeks. Radiation levels drop significantly after 48 hours.", ru: "Найдите укрытие с подвалом. Не возвращайтесь 1–2 недели. Уровень радиации значительно снижается после 48 часов." },
  },
  "major-asia": {
    before: { en: "Major Asian city — potential target. Evacuation routes lead inland, away from coasts and military installations.", ru: "Крупный азиатский город — потенциальная цель. Маршруты эвакуации — вглубь материка, от побережий и военных объектов." },
    during: { en: "Evacuate immediately. Head inland, away from coastal areas and military zones. Seek high ground away from blast zones.", ru: "Немедленно эвакуируйтесь. Двигайтесь вглубь материка, от побережий и военных зон. Ищите возвышенности вдали от зон поражения." },
    after: { en: "Fallout patterns depend on wind direction. Monitor radio for contamination reports. Do not drink local water without purification.", ru: "Картина осадков зависит от направления ветра. Слушайте радио. Не пейте местную воду без очистки." },
  },
  "medium-europe": {
    before: { en: "Medium city — secondary target risk. Pre-position supplies and fuel. Identify rural evacuation destination.", ru: "Средний город — риск вторичной цели. Заранее приготовьте припасы и топливо. Определите пункт эвакуации в сельской местности." },
    during: { en: "Evacuate within 1–2 hours. Secondary targets may be hit later. Head to rural areas 100+ km away.", ru: "Эвакуируйтесь в течение 1–2 часов. Вторичные цели могут быть поражены позже. Направляйтесь в сельскую местность за 100+ км." },
    after: { en: "Check if your area is contaminated via radio. If safe, you may stay. If not, move further away.", ru: "Проверьте по радио, загрязнён ли ваш район. Если безопасно, можно остаться. Если нет — двигайтесь дальше." },
  },
  "medium-asia": {
    before: { en: "Medium Asian city — prepare evacuation routes inland. Stockpile 2+ weeks of supplies.", ru: "Средний азиатский город — подготовьте маршруты эвакуации вглубь материка. Запасите 2+ недели припасов." },
    during: { en: "Evacuate within 1–2 hours. Head away from coastlines and military facilities.", ru: "Эвакуируйтесь в течение 1–2 часов. Двигайтесь от побережий и военных объектов." },
    after: { en: "Monitor radio for radiation reports. Boil all water. Stay sheltered for 48+ hours.", ru: "Слушайте радио. Кипятите всю воду. Оставайтесь в укрытии 48+ часов." },
  },
  "small-town": {
    before: { en: "Small town — lower risk of direct strike. Focus on shelter preparation and supply stockpiling.", ru: "Небольшой город — низкий риск прямого удара. Сосредоточьтесь на подготовке укрытия и запасов." },
    during: { en: "Stay sheltered unless military targets are nearby (check map). If safe, stay put — you are better off than in cities.", ru: "Оставайтесь в укрытии, если рядом нет военных целей (проверьте карту). Если безопасно — оставайтесь на месте." },
    after: { en: "You have a good chance of survival. Help refugees from cities but guard your resources. Organize community quickly.", ru: "У вас хорошие шансы на выживание. Помогайте беженцам из городов, но охраняйте свои ресурсы. Быстро организуйте общину." },
  },
  suburb: {
    before: { en: "Suburb — close enough to be affected by city strike. Plan evacuation further out. Do NOT assume safety.", ru: "Пригород — достаточно близко, чтобы быть затронутым ударом по городу. Планируйте эвакуацию дальше. НЕ рассчитывайте на безопасность." },
    during: { en: "Evacuate within 1 hour. The city 5–10 km away will be destroyed — fallout will reach you. Head further out.", ru: "Эвакуируйтесь в течение часа. Город в 5–10 км будет уничтожен — осадки достигнут вас. Двигайтесь дальше." },
    after: { en: "Severe fallout from nearby city. Stay sheltered for 72+ hours. Do not return to check property.", ru: "Сильные осадки от близлежащего города. Оставайтесь в укрытии 72+ часа. Не возвращайтесь проверять имущество." },
  },
  rural: {
    before: { en: "Rural area — safest location. Strengthen your home's shelter capabilities. Stockpile food, water, and medical supplies for 3+ months.", ru: "Сельская местность — самое безопасное место. Укрепите укрытие в доме. Запасите еду, воду и медикаменты на 3+ месяца." },
    during: { en: "Stay put. You are in the best position. Go to basement or cellar. If no basement, create a sheltered area in the center of the house.", ru: "Оставайтесь на месте. Вы в лучшем положении. Спуститесь в подвал или погреб. Если нет подвала, создайте укрытие в центре дома." },
    after: { en: "You are a survivor hub. Expect refugees. Organize community quickly — security, food distribution, and sanitation are your priorities.", ru: "Вы — центр выживания. Ожидайте беженцев. Быстро организуйте общину — безопасность, распределение еды и санитария — ваши приоритеты." },
  },
  remote: {
    before: { en: "Remote area — extreme survival environment. Stockpile for self-sufficiency: tools, ammunition, medical supplies, warm clothing.", ru: "Удалённая местность — экстремальная среда выживания. Запаситесь для самообеспечения: инструменты, патроны, медикаменты, тёплая одежда." },
    during: { en: "You are safe from direct strikes. Stay in your shelter. Conserve resources — resupply is unlikely.", ru: "Вы в безопасности от прямых ударов. Оставайтесь в укрытии. Экономьте ресурсы — пополнение маловероятно." },
    after: { en: "Self-sufficiency is key. Hunting, fishing, foraging. Check radio for news. Travel is difficult — stay put unless absolutely necessary.", ru: "Ключевой фактор — самообеспечение. Охота, рыбалка, собирательство. Слушайте радио. Перемещение сложно — оставайтесь на месте, если нет крайней необходимости." },
  },
  "near-base": {
    before: { en: "You are in a high-risk zone near a military base. Evacuation is your ONLY option. Do not stay. Plan departure within 10–15 minutes of warning.", ru: "Вы в зоне высокого риска рядом с военной базой. Эвакуация — ваш ЕДИНСТВЕННЫЙ вариант. НЕ оставайтесь. Планируйте выезд через 10–15 минут после предупреждения." },
    during: { en: "LEAVE NOW. The base will be targeted in the first wave. You have minutes. Drive away from the base, not toward it.", ru: "УХОДИТЕ СЕЙЧАС. База будет поражена в первой волне. У вас минуты. Уезжайте ОТ базы, а не к ней." },
    after: { en: "If you survived, you are likely injured or irradiated. Seek medical help. Do not return to your home near the base.", ru: "Если вы выжили, вы вероятно ранены или облучены. Ищите медпомощь. Не возвращайтесь домой рядом с базой." },
  },
  "near-npp": {
    before: { en: "Near a nuclear power plant — risk of secondary contamination if the plant is damaged. Plan evacuation upwind of the plant. Stockpile iodine tablets.", ru: "Рядом с АЭС — риск вторичного заражения при повреждении станции. Планируйте эвакуацию с наветренной стороны. Запаситесь йодом." },
    during: { en: "Do NOT stay downwind of the plant. Evacuate perpendicular to wind direction. Take iodine tablets immediately (130 mg KI).", ru: "НЕ оставайтесь с подветренной стороны станции. Эвакуируйтесь перпендикулярно направлению ветра. Примите йод (130 мг KI) немедленно." },
    after: { en: "Severe and long-term contamination from damaged reactor. Do not return. Seek relocation assistance if available.", ru: "Серьёзное и долгосрочное заражение от повреждённого реактора. Не возвращайтесь. Ищите помощь в переселении." },
  },
  coastal: {
    before: { en: "Coastal area — risk of naval strikes and tsunami from near-shore detonations. Plan evacuation inland, minimum 50 km.", ru: "Побережье — риск ударов по флоту и цунами от взрывов у берега. Планируйте эвакуацию вглубь материка, минимум 50 км." },
    during: { en: "Evacuate inland immediately. Naval targets (ports, bases) will be hit. Find high ground at least 50 m above sea level.", ru: "Немедленно эвакуируйтесь вглубь материка. Морские цели (порты, базы) будут поражены. Найдите возвышенность минимум 50 м над уровнем моря." },
    after: { en: "Risk of radioactive contamination of seawater and seafood. Do not fish or collect shellfish for months. Seek inland shelter.", ru: "Риск радиоактивного загрязнения моря и морепродуктов. Не ловите рыбу и не собирайте моллюсков месяцами. Ищите убежище вглубь материка." },
  },
}

type SideAdvice = { before: Record<string, string>; during: Record<string, string>; after: Record<string, string> }
type Role = "sideA" | "sideB" | "nearby" | "neutral"

const scenarioRoles: Record<string, { sideA: string[]; sideB: string[]; nearby: string[] }> = {
  "russia-nato-quick": { sideA: ["Russia"], sideB: ["USA", "UK", "France", "Germany", "Poland"], nearby: ["Ukraine", "Belarus", "Other European"], },
  "russia-nato-full": { sideA: ["Russia"], sideB: ["USA", "UK", "France", "Germany", "Poland", "Other European"], nearby: ["Ukraine", "Belarus"], },
  "russia-nato-global": { sideA: ["Russia"], sideB: ["USA", "UK", "France", "Other European"], nearby: ["China", "India", "Japan", "South Korea"], },
  "russia-nato-accidental": { sideA: ["Russia", "USA"], sideB: ["UK", "France", "Germany", "Poland", "Other European"], nearby: [], },
  "usa-china-taiwan": { sideA: ["China"], sideB: ["USA", "Japan", "South Korea"], nearby: ["Other Asian"], },
  "usa-china-full": { sideA: ["China"], sideB: ["USA", "Japan", "South Korea"], nearby: ["Other Asian", "Other European"], },
  "india-pakistan-kashmir": { sideA: ["India", "Pakistan"], sideB: [], nearby: ["China", "Other Asian"], },
  "israel-iran-nuclear": { sideA: ["Israel", "Iran"], sideB: [], nearby: ["Other Asian", "Other European"], },
  "nk-sk-collapse": { sideA: ["North Korea", "South Korea"], sideB: ["USA", "Japan"], nearby: ["China", "Russia"], },
  "india-china-border": { sideA: ["India", "China"], sideB: [], nearby: ["Pakistan", "Other Asian"], },
  "russia-japan-kuril": { sideA: ["Russia", "Japan"], sideB: [], nearby: ["Other Asian"], },
  "russia-china-central-asia": { sideA: ["Russia", "China"], sideB: [], nearby: ["India", "Pakistan", "Other Asian"], },
  "russia-turkey-black-sea": { sideA: ["Russia", "Turkey"], sideB: [], nearby: ["Ukraine", "Other European"], },
  "russia-ukraine-escalation": { sideA: ["Russia", "Ukraine"], sideB: ["USA", "UK", "France", "Germany", "Poland", "Other European"], nearby: ["Belarus"], },
}

const scenarioTexts: Record<string, { sideA: SideAdvice; sideB: SideAdvice; nearby: SideAdvice; neutral: SideAdvice }> = {
  "russia-nato-quick": {
    sideA: {
      before: { en: "Limited escalation scenario. If you are located in or near the conflict zone, prepare for evacuation. Stockpile 2–4 weeks of supplies. Avoid military facilities.", ru: "Сценарий ограниченной эскалации. Если вы находитесь в зоне конфликта или рядом — готовьтесь к эвакуации. Запаситесь припасами на 2–4 недели. Избегайте военных объектов." },
      during: { en: "Leave immediately if you are near military targets. The exchange is limited — high radiation only within 10 km of strike zones. Shelter 48 hours. Listen for ceasefire — this scenario de-escalates quickly.", ru: "Уходите немедленно, если вы рядом с военными целями. Обмен ограничен — высокая радиация только в 10 км от зон ударов. Укрытие 48 часов. Слушайте объявления о прекращении огня — этот сценарий быстро деэскалирует." },
      after: { en: "Ceasefire likely within days. Do not return to damaged areas without radiation assessment. Prepare for diplomatic resolution.", ru: "Прекращение огня вероятно в течение дней. Не возвращайтесь в повреждённые районы без оценки радиации. Готовьтесь к дипломатическому разрешению." },
    },
    sideB: {
      before: { en: "Limited escalation scenario. Evacuate cities near military bases. Stockpile 2–4 weeks of supplies.", ru: "Сценарий ограниченной эскалации. Покинуть города рядом с военными базами. Запастись на 2–4 недели." },
      during: { en: "Evacuate if you live near a military installation. The exchange is limited to tactical targets. Shelter 48 hours. Radiation risk is low if you are far from strike zones.", ru: "Эвакуируйтесь, если живёте рядом с военными объектами. Обмен ограничен тактическими целями. Укрытие 48 часов. Риск радиации низок, если вы далеко от зон ударов." },
      after: { en: "Diplomatic resolution expected. Monitor radiation levels before returning home. Economy may be disrupted for weeks.", ru: "Ожидается дипломатическое разрешение. Проверьте радиацию перед возвращением. Экономика может быть нарушена на недели." },
    },
    nearby: {
      before: { en: "You are in a region that may be affected by fallout or economic disruption. Stockpile 2 weeks of supplies. Monitor news.", ru: "Вы в регионе, который может быть затронут осадками или экономическими нарушениями. Запаситесь на 2 недели. Следите за новостями." },
      during: { en: "You are not a direct target. Stay sheltered if fallout is reported. Monitor wind direction and radiation reports.", ru: "Вы не являетесь прямой целью. Оставайтесь в укрытии, если сообщается об осадках. Следите за направлением ветра." },
      after: { en: "Regional recovery expected within months. Cross-border cooperation may be affected.", ru: "Региональное восстановление ожидается в течение месяцев. Трансграничное сотрудничество может быть нарушено." },
    },
    neutral: {
      before: { en: "You are not directly threatened by this scenario. Maintain situational awareness. Keep basic emergency supplies.", ru: "Этот сценарий вам напрямую не угрожает. Сохраняйте ситуационную осведомлённость. Держите базовый запас." },
      during: { en: "No immediate threat to your region. Continue normal life but monitor international news.", ru: "Непосредственной угрозы вашему региону нет. Продолжайте нормальную жизнь, но следите за новостями." },
      after: { en: "No direct impact on your country. Global economic effects may affect prices and trade.", ru: "Прямого влияния на вашу страну нет. Глобальные экономические эффекты могут повлиять на цены и торговлю." },
    },
  },
  "russia-nato-full": {
    sideA: {
      before: { en: "Full-scale war in Europe. If your country is a participant, evacuate ALL major cities immediately. You have 12–24 hours. Stockpile 3+ months of supplies. Head to rural areas.", ru: "Масштабная война в Европе. Если ваша страна — участник, немедленно покинуть ВСЕ крупные города. У вас 12–24 часа. Запастись на 3+ месяца. Направляться в сельскую местность." },
      during: { en: "Evacuate all major cities now. Hundreds of nuclear detonations expected across Europe. Seek deep shelter with 1+ m earth cover. Stay 72+ hours. Fallout drifts eastward.", ru: "Покинуть все крупные города сейчас. Ожидаются сотни ядерных взрывов по всей Европе. Ищите глубокое укрытие с 1+ м земли. Оставайтесь 72+ часа. Осадки дрейфуют на восток." },
      after: { en: "Europe as a functioning civilization is destroyed. Long-term survival requires relocation to the Southern Hemisphere or a self-sufficient community.", ru: "Европа как цивилизация уничтожена. Долгосрочное выживание требует переезда в Южное полушарие или самообеспечивающейся общины." },
    },
    sideB: {
      before: { en: "Full-scale European war. Evacuate cities. Stockpile 3+ months. Plan relocation to southern Europe or North America.", ru: "Масштабная европейская война. Покинуть города. Запастись на 3+ месяца. Планировать переезд в южную Европу или Северную Америку." },
      during: { en: "Mass strikes across Europe. Seek deep shelter immediately. Do not head east.", ru: "Массированные удары по Европе. Немедленно ищите глубокое укрытие. Не двигайтесь на восток." },
      after: { en: "Europe devastated. Relocate to less affected regions if possible.", ru: "Европа разрушена. Переселяйтесь в менее пострадавшие регионы, если возможно." },
    },
    nearby: {
      before: { en: "This scenario will cause massive fallout and economic collapse across the region. Stockpile 6+ months. Prepare for long-term disruption.", ru: "Этот сценарий вызовет масштабные осадки и экономический коллапс в регионе. Запаситесь на 6+ месяцев. Готовьтесь к долгосрочным нарушениям." },
      during: { en: "Fallout may reach your region within days. Monitor wind patterns. Shelter if radiation detected.", ru: "Осадки могут достичь вашего региона в течение дней. Следите за ветром. Укрывайтесь при обнаружении радиации." },
      after: { en: "Severe economic and environmental effects. Prepare for food and fuel shortages.", ru: "Серьёзные экономические и экологические последствия. Готовьтесь к нехватке еды и топлива." },
    },
    neutral: {
      before: { en: "This is the most dangerous scenario for global stability. Stay informed. Stockpile supplies as a precaution.", ru: "Это самый опасный сценарий для глобальной стабильности. Будьте в курсе. Запаситесь припасами на всякий случай." },
      during: { en: "Global crisis unfolding. No immediate direct threat but prepare for economic shock and potential secondary effects.", ru: "Глобальный кризис разворачивается. Нет непосредственной угрозы, но готовьтесь к экономическому шоку." },
      after: { en: "Global economic collapse likely. Prepare for long-term scarcity of imported goods.", ru: "Вероятен глобальный экономический коллапс. Готовьтесь к долгосрочной нехватке импортных товаров." },
    },
  },
}

function getRole(scenarioId: string, countryId: string): Role {
  const roles = scenarioRoles[scenarioId]
  if (!roles) return "neutral"
  if (roles.sideA.includes(countryId)) return "sideA"
  if (roles.sideB.includes(countryId)) return "sideB"
  if (roles.nearby.includes(countryId)) return "nearby"
  return "neutral"
}

// Placeholder for remaining scenarios that reuse existing generic advice
const fallbackTexts: Record<string, SideAdvice> = {
  "russia-nato-global": {
    before: { en: "GLOBAL NUCLEAR WAR. If you can reach the Southern Hemisphere, do it now. Otherwise, prepare for the end of civilization.", ru: "ГЛОБАЛЬНАЯ ЯДЕРНАЯ ВОЙНА. Если можете добраться до Южного полушария — делайте это сейчас. Иначе готовьтесь к концу цивилизации." },
    during: { en: "Your chances in the Northern Hemisphere are near zero. Deep bunker 3+ m underground may save you. Stay 2+ weeks.", ru: "Ваши шансы в Северном полушарии близки к нулю. Глубокий бункер 3+ м под землёй может спасти. Оставайтесь 2+ недели." },
    after: { en: "Nuclear winter for 5–10 years. Agriculture impossible. Survival requires stockpiled food, self-sufficient community, and extreme resilience.", ru: "Ядерная зима 5–10 лет. Сельское хозяйство невозможно. Выживание требует запасов еды, самообеспечивающейся общины и экстремальной устойчивости." },
  },
  "russia-nato-accidental": {
    before: { en: "Limited false-alarm exchange. Prepare for 2 weeks of disruption. Do not panic — escalation is not inevitable.", ru: "Ограниченный обмен по ошибке. Готовьтесь к 2 неделям нарушений. Не паникуйте — эскалация не неизбежна." },
    during: { en: "Exchange is limited to command targets. Shelter 48 hours. Listen for ceasefire broadcasts.", ru: "Обмен ограничен командными целями. Укрытие 48 часов. Слушайте сообщения о прекращении огня." },
    after: { en: "High chance of ceasefire. Return home within 1–2 weeks. Tensions remain high — maintain preparedness.", ru: "Высокий шанс прекращения огня. Возврат через 1–2 недели. Напряжённость остаётся — сохраняйте готовность." },
  },
  "usa-china-taiwan": {
    before: { en: "Pacific regional conflict. Evacuate coastal China and Taiwan. Stockpile 2–4 weeks.", ru: "Региональный конфликт в Тихом океане. Эвакуируйтесь с побережья Китая и Тайваня. Запаситесь на 2–4 недели." },
    during: { en: "Naval strikes and limited nuclear exchange. Stay away from military bases and ports.", ru: "Морские удары и ограниченный ядерный обмен. Держитесь подальше от военных баз и портов." },
    after: { en: "Ceasefire likely. Avoid contaminated naval zones. Economic disruption in Asia.", ru: "Прекращение огня вероятно. Избегайте загрязнённых морских зон. Экономические нарушения в Азии." },
  },
  "usa-china-full": {
    before: { en: "Full US-China war. Evacuate all coastal cities in both countries. Stockpile 6+ months.", ru: "Полномасштабная война США и Китая. Покинуть все прибрежные города обеих стран. Запастись на 6+ месяцев." },
    during: { en: "Mass strikes on both sides. Seek deep shelter. Do not stay in any major city.", ru: "Массированные удары с обеих сторон. Ищите глубокое укрытие. Не оставайтесь в крупных городах." },
    after: { en: "Global economic collapse. Nuclear winter likely. Prepare for long-term subsistence.", ru: "Глобальный экономический коллапс. Ядерная зима вероятна. Готовьтесь к долгосрочному выживанию." },
  },
  "india-pakistan-kashmir": {
    before: { en: "Regional nuclear exchange. Evacuate Punjab. Stockpile 2–3 months.", ru: "Региональный ядерный обмен. Покинуть Пенджаб. Запастись на 2–3 месяца." },
    during: { en: "80–120 warheads exchange. Seek shelter 100+ km from border. Do not drink well water.", ru: "Обмен 80–120 боеголовками. Укрытие в 100+ км от границы. Не пить колодезную воду." },
    after: { en: "Agricultural heartland of both nations contaminated. Famine likely. Relocate if possible.", ru: "Сельскохозяйственный центр обеих стран заражён. Голод вероятен. Переселяйтесь, если возможно." },
  },
  "israel-iran-nuclear": {
    before: { en: "Middle East nuclear exchange. Evacuate cities in Israel, Iran, and Gulf. Stockpile 2–3 months.", ru: "Ядерный обмен на Ближнем Востоке. Покинуть города Израиля, Ирана и Залива. Запастись на 2–3 месяца." },
    during: { en: "10–30 detonations. Fallout spreads across the region. Seek shelter with thick walls.", ru: "10–30 взрывов. Осадки распространяются по региону. Ищите укрытие с толстыми стенами." },
    after: { en: "Oil markets collapse. Regional contamination severe. Relocate outside Middle East if possible.", ru: "Нефтяные рынки рухнут. Региональное заражение серьёзное. Переселяйтесь за пределы Ближнего Востока." },
  },
  "nk-sk-collapse": {
    before: { en: "Korean Peninsula conflict. Evacuate South Korea. Stockpile 3+ months.", ru: "Конфликт на Корейском полуострове. Покинуть Южную Корею. Запастись на 3+ месяца." },
    during: { en: "Seoul destroyed within minutes. Fallout contaminates peninsula for decades.", ru: "Сеул уничтожен за минуты. Осадки заражают полуостров на десятилетия." },
    after: { en: "Humanitarian catastrophe. Massive casualties. Relocate to China or Japan if possible.", ru: "Гуманитарная катастрофа. Массовые жертвы. Переселение в Китай или Японию, если возможно." },
  },
  "india-china-border": {
    before: { en: "Limited border conflict. Evacuate Himalayan border regions. Stockpile 1–2 months.", ru: "Ограниченный приграничный конфликт. Покинуть гималайские приграничные регионы. Запастись на 1–2 месяца." },
    during: { en: "Tactical nuclear weapons on border. Stay 100+ km from LAC.", ru: "Тактическое ядерное оружие на границе. Держитесь в 100+ км от LAC." },
    after: { en: "De-escalation likely. Avoid high-altitude areas. Check EMP damage to electronics.", ru: "Деэскалация вероятна. Избегайте высокогорных районов. Проверьте повреждение электроники от ЭМИ." },
  },
  "russia-japan-kuril": {
    before: { en: "Regional conflict over Kuril Islands. Evacuate Sakhalin, Kamchatka, Hokkaido.", ru: "Региональный конфликт за Курилы. Покинуть Сахалин, Камчатку, Хоккайдо." },
    during: { en: "Naval confrontation with nuclear warning shot. Stay away from Sea of Okhotsk coast.", ru: "Морское противостояние с ядерным предупреждением. Держитесь подальше от побережья Охотского моря." },
    after: { en: "Limited escalation. Ceasefire likely. Shipping disruption in region.", ru: "Ограниченная эскалация. Прекращение огня вероятно. Нарушение судоходства в регионе." },
  },
  "russia-china-central-asia": {
    before: { en: "Conventional border conflict — no nuclear use expected. Stockpile 1–2 months.", ru: "Обычный приграничный конфликт — ядерное применение не ожидается. Запастись на 1–2 месяца." },
    during: { en: "Conventional strikes only. Avoid military zones and border areas.", ru: "Только обычные удары. Избегайте военных зон и приграничных районов." },
    after: { en: "Economic disruption from trade freeze. Diplomatic resolution within weeks.", ru: "Экономические нарушения от заморозки торговли. Дипломатическое разрешение в течение недель." },
  },
  "russia-turkey-black-sea": {
    before: { en: "Black Sea/Caucasus conventional conflict. Evacuate coastal cities. Stockpile 1–2 months.", ru: "Конвенциональный конфликт в Чёрном море/на Кавказе. Покинуть прибрежные города. Запастись на 1–2 месяца." },
    during: { en: "No nuclear use. Conventional strikes on naval and military targets. Avoid Black Sea coast.", ru: "Ядерное оружие не применяется. Обычные удары по морским и военным целям. Избегайте побережья Чёрного моря." },
    after: { en: "Economic disruption from Black Sea trade blockage. Fuel and food price spikes globally.", ru: "Экономические нарушения от блокировки черноморской торговли. Рост цен на топливо и еду." },
  },
  "russia-ukraine-escalation": {
    before: { en: "Generic escalation scenario. Assess your location relative to conflict zone. Stockpile 1–2 months.", ru: "Обобщённый сценарий эскалации. Оцените своё положение относительно зоны конфликта. Запаситесь на 1–2 месяца." },
    during: { en: "Follow general nuclear safety protocols: shelter, decontaminate, monitor radio.", ru: "Следуйте общим протоколам ядерной безопасности: укрытие, дезактивация, прослушивание радио." },
    after: { en: "Monitor official channels. Do not return to affected areas without radiation assessment.", ru: "Следите за официальными каналами. Не возвращайтесь в пострадавшие районы без оценки радиации." },
  },
}

function getScenarioAdvice(scenarioId: string, countryId: string): SideAdvice {
  const role = getRole(scenarioId, countryId)
  const texts = scenarioTexts[scenarioId]
  if (texts) return texts[role]
  const fallback = fallbackTexts[scenarioId]
  if (fallback) return fallback
  return { before: { en: "No specific advice for this scenario.", ru: "Нет конкретных рекомендаций для этого сценария." }, during: { en: "Follow general nuclear safety protocols.", ru: "Следуйте общим протоколам безопасности." }, after: { en: "Monitor official channels.", ru: "Следите за официальными каналами." } }
}

function has(factors: PlanFactors, id: string): boolean {
  return factors.checked[id] === true
}

export function generatePlan(factors: PlanFactors, locale: string): PlanSection[] {
  const sections: PlanSection[] = []

  const loc = locationAdvice[factors.locationId]
  const scen = getScenarioAdvice(factors.scenarioId, factors.countryId)

  if (!loc || !scen) return []

  // Phase 1: Before (preparation)
  const beforeItems: Record<string, string>[] = [
    { en: loc.before.en ?? "", ru: loc.before.ru ?? "" },
    { en: scen.before.en ?? "", ru: scen.before.ru ?? "" },
  ]

  if (has(factors, "hasFamily")) {
    beforeItems.push({ en: "Designate family meeting points — one near home, one outside the city, one in another region. Agree on communication schedule (daily at 8AM, 8PM) and a backup frequency.", ru: "Назначьте точки встречи семьи — одну у дома, одну за городом, одну в другом регионе. Согласуйте расписание связи (ежедневно в 8:00, 20:00) и запасную частоту." })
  }
  if (has(factors, "hasCar")) {
    beforeItems.push({ en: "Keep gas tank at least half full at all times. Prepare car bug-out bag: water, food, blankets, tools, maps, spare tire, fuel can. Know alternate routes.", ru: "Держите бензобак минимум наполовину полным. Подготовьте автомобильный тревожный набор: вода, еда, одеяла, инструменты, карты, запаска, канистра. Знайте запасные маршруты." })
  }
  if (has(factors, "hasMobileTransport")) {
    beforeItems.push({ en: "Motorcycle/bicycle are useful for navigating blocked roads. Keep them maintained and fueled. Have a small go-bag for them.", ru: "Мотоцикл/велосипед полезны для объезда пробок. Держите их в исправности. Подготовьте небольшой рюкзак для них." })
  }
  if (has(factors, "hasDacha")) {
    beforeItems.push({ en: "Your country house is an ideal evacuation destination ONLY if it is 50+ km from any major city, military base, or strategic target. Verify shelter capabilities (basement, well, wood stove). Pre-position 3+ months of supplies there. If it is closer than 50 km — treat it as part of the danger zone and plan for evacuation further away.", ru: "Ваш загородный дом — идеальное место эвакуации ТОЛЬКО если он находится в 50+ км от любого крупного города, военной базы или стратегической цели. Проверьте укрытие (подвал, колодец, дровяная печь). Заранее разместите там 3+ месяца припасов. Если он ближе 50 км — считайте его частью зоны поражения и планируйте эвакуацию дальше." })
  }
  if (has(factors, "hasRelativesCity")) {
    beforeItems.push({ en: "If your relatives in another city live outside the danger zone — that city can serve as your evacuation destination. Coordinate with them: they may also need to evacuate. Have 2+ alternate destinations in case the first is also targeted.", ru: "Если ваши родственники в другом городе живут за пределами зоны поражения — этот город может стать вашим пунктом эвакуации. Свяжитесь с ними: им тоже может понадобиться эвакуация. Имейте 2+ запасных варианта на случай, если первый город тоже окажется под ударом." })
  }
  if (has(factors, "hasRelativesNearby")) {
    beforeItems.push({ en: "Nearby relatives can join your survival group or vice versa. Coordinate supplies, roles, and meeting point. Pool resources.", ru: "Близкие родственники могут присоединиться к вашей группе. Скоординируйте припасы, роли и точку встречи. Объедините ресурсы." })
  }
  if (has(factors, "hasAcquaintancesAbroad")) {
    const global = factors.scenarioId.includes("global") || factors.scenarioId.includes("full")
    beforeItems.push({ en: global ? "If scenario is global, having contacts abroad (especially Southern Hemisphere) may be life-saving. Establish communication plan and potential relocation route." : "Your contacts abroad may offer support or relocation options if the conflict expands. Establish a communication plan with them.", ru: global ? "Если сценарий глобальный, контакты за рубежом (особенно в Южном полушарии) могут спасти жизнь. Установите план связи и возможный маршрут переезда." : "Ваши контакты за рубежом могут предложить поддержку или варианты переезда, если конфликт расширится. Установите с ними план связи." })
  }
  if (has(factors, "hasPets")) {
    beforeItems.push({ en: "Prepare a pet go-bag: 2+ weeks of food, water, bowls, leash, vaccination records, carrier. Some shelters may not accept pets — plan for this.", ru: "Подготовьте набор для питомца: 2+ недели еды, воды, миски, поводок, документы о прививках, переноска. В некоторые убежища могут не пускать с животными." })
  }
  if (has(factors, "hasMedicalNeeds")) {
    beforeItems.push({ en: "Stockpile 3+ months of essential medications. Request emergency supply from your doctor. Keep printed prescriptions and medical history in go-bag.", ru: "Запасите 3+ месяца необходимых лекарств. Попросите у врача экстренный запас. Храните рецепты и медкарту в тревожном рюкзаке." })
  }
  if (has(factors, "hasWeapon")) {
    beforeItems.push({ en: "Firearm useful for self-defense and hunting. Stockpile ammunition separately from weapon. Ensure safe storage. Know local laws — in crisis, laws may change.", ru: "Оружие полезно для самообороны и охоты. Храните патроны отдельно от оружия. Обеспечьте безопасное хранение. В кризис законы могут измениться." })
  }
  if (has(factors, "hasBasement")) {
    beforeItems.push({ en: "Your basement is a valuable shelter. Reinforce it: seal cracks, add earth cover if possible, stockpile supplies there, set up ventilation filter.", ru: "Ваш подвал — ценное укрытие. Укрепите его: заделайте трещины, добавьте земляное покрытие, храните там припасы, установите вентиляционный фильтр." })
  }
  if (has(factors, "hasGenerator")) {
    beforeItems.push({ en: "If you have solar panels — they work even after EMP (if disconnected during blast). If generator — stockpile fuel. Test both systems regularly.", ru: "Если есть солнечные панели — они работают после ЭМИ (если отключены при взрыве). Если генератор — запасите топливо. Регулярно тестируйте оба." })
  }
  if (has(factors, "hasRadio")) {
    beforeItems.push({ en: "You can receive emergency broadcasts. Program all key frequencies (see Cheatsheet). Keep spare batteries. Print frequency list.", ru: "Вы можете принимать экстренные сообщения. Запрограммируйте все ключевые частоты (см. Шпаргалку). Держите запасные батарейки. Распечатайте список частот." })
  }
  if (has(factors, "hasSkills")) {
    beforeItems.push({ en: "Your skills make you a valuable community member. Offer training to family and neighbors. Identify others with complementary skills.", ru: "Ваши навыки делают вас ценным членом общины. Обучите семью и соседей. Определите людей с дополняющими навыками." })
  }

  sections.push({
    title: { en: "📋 Before (Preparation)", ru: "📋 До (Подготовка)" },
    items: beforeItems,
  })

  // Phase 2: During (immediate actions)
  const duringItems: Record<string, string>[] = [
    { en: loc.during.en ?? "", ru: loc.during.ru ?? "" },
    { en: scen.during.en ?? "", ru: scen.during.ru ?? "" },
  ]

  if (has(factors, "hasFamily")) {
    duringItems.push({ en: "Gather family immediately. If separated, proceed to pre-agreed meeting point. Leave a note if you evacuate without them.", ru: "Немедленно соберите семью. Если разлучены, следуйте к заранее согласованной точке. Оставьте записку, если эвакуируетесь без них." })
  }
  if (has(factors, "hasCar")) {
    duringItems.push({ en: "Use car for evacuation if safe. Do NOT stay in car during blast — seek shelter underneath or inside building. After shockwave, use car to leave.", ru: "Используйте машину для эвакуации, если безопасно. НЕ оставайтесь в машине при взрыве — укройтесь под ней или в здании. После волны используйте машину." })
  }
  if (has(factors, "hasPets")) {
    duringItems.push({ en: "Take pets if possible. If shelter doesn't allow them, make a difficult choice. Pets cannot survive alone in contaminated areas.", ru: "Возьмите питомцев, если возможно. Если убежище не принимает их — трудный выбор. Питомцы не выживут одни в загрязнённых зонах." })
  }
  if (has(factors, "hasMedicalNeeds")) {
    duringItems.push({ en: "Take your medication stockpile with you. Do not skip doses — stress makes medical conditions worse.", ru: "Возьмите запас лекарств с собой. Не пропускайте приём — стресс усугубляет болезни." })
  }

  sections.push({
    title: { en: "⚡ During (Immediate Actions)", ru: "⚡ Во время (Немедленные действия)" },
    items: duringItems,
  })

  // Phase 3: After (survival)
  const afterItems: Record<string, string>[] = [
    { en: loc.after.en ?? "", ru: loc.after.ru ?? "" },
    { en: scen.after.en ?? "", ru: scen.after.ru ?? "" },
  ]

  if (has(factors, "hasFamily")) {
    afterItems.push({ en: "Keep family together. Group survival is more effective than individual. Assign roles: water, food, security, medical, childcare.", ru: "Держитесь вместе. Групповое выживание эффективнее. Распределите роли: вода, еда, безопасность, медицина, уход за детьми." })
  }
  if (has(factors, "hasDacha")) {
    afterItems.push({ en: "Relocate to your country house if suitable. It should be 50+ km from any major city. Verify well water is safe (test or treat).", ru: "Переместитесь в загородный дом, если он подходит. Он должен быть в 50+ км от крупных городов. Проверьте колодезную воду." })
  }
  if (has(factors, "hasAcquaintancesAbroad")) {
    const global = factors.scenarioId.includes("global") || factors.scenarioId.includes("full")
    afterItems.push({ en: global ? "Attempt to contact your acquaintances abroad via radio or messenger. If possible, arrange relocation to a safer region or country." : "Keep in touch with your contacts abroad via radio if possible. They may offer support or relay information about safe zones.", ru: global ? "Попробуйте связаться со знакомыми за рубежом по радио. Если возможно, организуйте переезд в более безопасный регион." : "Поддерживайте связь с контактами за рубежом по радио, если возможно. Они могут предложить поддержку или информацию о безопасных зонах." })
  }
  if (has(factors, "hasWeapon")) {
    afterItems.push({ en: "Use weapon responsibly for hunting and self-defense. Ammo conservation is critical — each shot should count. Secure weapon from children.", ru: "Используйте оружие ответственно для охоты и самообороны. Экономия патронов критична — каждый выстрел на счету. Храните оружие в недоступном для детей месте." })
  }
  if (has(factors, "hasSkills")) {
    afterItems.push({ en: "Apply your skills: teach others, treat injuries, build shelter, hunt. Skills multiply survival chances for the entire group.", ru: "Примените навыки: обучайте других, лечите, стройте укрытия, охотитесь. Навыки умножают шансы на выживание всей группы." })
  }

  sections.push({
    title: { en: "🏠 After (Survival & Recovery)", ru: "🏠 После (Выживание и восстановление)" },
    items: afterItems,
  })

  return sections
}
