export interface MilitaryTarget {
  id: string
  category: "city"
  name: Record<string, string>
  lat: number
  lng: number
  description: Record<string, string>
  source: string
  sourceLabel: Record<string, string>
  date: string
}

export interface TargetTab {
  id: string
  icon: string
  label: Record<string, string>
  targets: MilitaryTarget[]
}

export const targetTabs: TargetTab[] = [
  {
    id: "usa",
    icon: "🇺🇸",
    label: { en: "USA", ru: "США" },
    targets: [
      { id: "new-york", category: "city", name: { en: "New York", ru: "Нью-Йорк" }, lat: 40.7128, lng: -74.006, description: { en: "Largest city in the US. Financial and cultural center, major port.", ru: "Крупнейший город США. Финансовый и культурный центр, крупный порт." }, source: "https://www.census.gov", sourceLabel: { en: "US Census Bureau", ru: "Бюро переписи США" }, date: "2024-07" },
      { id: "washington", category: "city", name: { en: "Washington, D.C.", ru: "Вашингтон" }, lat: 38.9072, lng: -77.0369, description: { en: "Capital of the United States. Seat of government, White House, Pentagon.", ru: "Столица США. Местонахождение правительства, Белый дом, Пентагон." }, source: "https://www.census.gov", sourceLabel: { en: "US Census Bureau", ru: "Бюро переписи США" }, date: "2024-07" },
      { id: "los-angeles", category: "city", name: { en: "Los Angeles", ru: "Лос-Анджелес" }, lat: 34.0522, lng: -118.2437, description: { en: "Second-largest US city. Major port, entertainment industry hub.", ru: "Второй по величине город США. Крупный порт, центр индустрии развлечений." }, source: "https://www.census.gov", sourceLabel: { en: "US Census Bureau", ru: "Бюро переписи США" }, date: "2024-07" },
      { id: "chicago", category: "city", name: { en: "Chicago", ru: "Чикаго" }, lat: 41.8781, lng: -87.6298, description: { en: "Major Midwestern city. Transport and industrial hub on Lake Michigan.", ru: "Крупнейший город Среднего Запада. Транспортный и промышленный центр на озере Мичиган." }, source: "https://www.census.gov", sourceLabel: { en: "US Census Bureau", ru: "Бюро переписи США" }, date: "2024-07" },
      { id: "san-francisco", category: "city", name: { en: "San Francisco", ru: "Сан-Франциско" }, lat: 37.7749, lng: -122.4194, description: { en: "Major tech and financial center on the West Coast. Near Travis AFB, Vandenberg SFB.", ru: "Крупный технологический и финансовый центр на Западном побережье. Рядом авиабаза Трэвис, база Ванденберг." }, source: "https://www.census.gov", sourceLabel: { en: "US Census Bureau", ru: "Бюро переписи США" }, date: "2024-07" },
      { id: "colorado-springs", category: "city", name: { en: "Colorado Springs", ru: "Колорадо-Спрингс" }, lat: 38.8339, lng: -104.8214, description: { en: "Home to NORAD, Peterson SFB, Schriever SFB, and US Space Force HQ.", ru: "Штаб-квартира NORAD, Peterson SFB, Schriever SFB и Космических сил США." }, source: "https://www.census.gov", sourceLabel: { en: "US Census Bureau", ru: "Бюро переписи США" }, date: "2024-07" },
      { id: "norfolk", category: "city", name: { en: "Norfolk", ru: "Норфолк" }, lat: 36.8508, lng: -76.2859, description: { en: "World's largest naval base. Homeport of the US Atlantic Fleet.", ru: "Крупнейшая военно-морская база в мире. База Атлантического флота США." }, source: "https://www.navy.mil", sourceLabel: { en: "US Navy", ru: "ВМС США" }, date: "2024-07" },
      { id: "san-diego", category: "city", name: { en: "San Diego", ru: "Сан-Диего" }, lat: 32.7157, lng: -117.1611, description: { en: "Major Navy base and Marine Corps installations. Homeport of Pacific Fleet.", ru: "Крупная база ВМС и КМП США. База Тихоокеанского флота." }, source: "https://www.navy.mil", sourceLabel: { en: "US Navy", ru: "ВМС США" }, date: "2024-07" },
      { id: "honolulu", category: "city", name: { en: "Honolulu", ru: "Гонолулу" }, lat: 21.3069, lng: -157.8583, description: { en: "Pearl Harbor naval base and multiple military installations on Oahu.", ru: "Военно-морская база Перл-Харбор и множество военных объектов на Оаху." }, source: "https://www.navy.mil", sourceLabel: { en: "US Navy", ru: "ВМС США" }, date: "2024-07" },
    ],
  },
  {
    id: "russia",
    icon: "🇷🇺",
    label: { en: "Russia", ru: "Россия" },
    targets: [
      { id: "moscow", category: "city", name: { en: "Moscow", ru: "Москва" }, lat: 55.7558, lng: 37.6173, description: { en: "Capital of Russia. Largest city in Europe, political and economic center.", ru: "Столица России. Крупнейший город Европы, политический и экономический центр." }, source: "https://rosstat.gov.ru", sourceLabel: { en: "Rosstat", ru: "Росстат" }, date: "2024-01" },
      { id: "saint-petersburg", category: "city", name: { en: "Saint Petersburg", ru: "Санкт-Петербург" }, lat: 59.9343, lng: 30.3351, description: { en: "Second-largest city. Major Baltic port and cultural capital.", ru: "Второй по величине город. Крупный порт на Балтике, культурная столица." }, source: "https://rosstat.gov.ru", sourceLabel: { en: "Rosstat", ru: "Росстат" }, date: "2024-01" },
      { id: "novosibirsk", category: "city", name: { en: "Novosibirsk", ru: "Новосибирск" }, lat: 55.0084, lng: 82.9357, description: { en: "Largest city in Siberia. Major scientific and industrial center.", ru: "Крупнейший город Сибири. Крупный научный и промышленный центр." }, source: "https://rosstat.gov.ru", sourceLabel: { en: "Rosstat", ru: "Росстат" }, date: "2024-01" },
      { id: "vladivostok", category: "city", name: { en: "Vladivostok", ru: "Владивосток" }, lat: 43.1155, lng: 131.8855, description: { en: "Major Pacific port city. Home to the Russian Pacific Fleet.", ru: "Крупный тихоокеанский порт. База Тихоокеанского флота России." }, source: "https://rosstat.gov.ru", sourceLabel: { en: "Rosstat", ru: "Росстат" }, date: "2024-01" },
      { id: "murmansk", category: "city", name: { en: "Murmansk", ru: "Мурманск" }, lat: 68.9585, lng: 33.0827, description: { en: "Largest Arctic port. Near Northern Fleet HQ in Severomorsk.", ru: "Крупнейший арктический порт. Рядом штаб Северного флота в Североморске." }, source: "https://rosstat.gov.ru", sourceLabel: { en: "Rosstat", ru: "Росстат" }, date: "2024-01" },
      { id: "kaliningrad", category: "city", name: { en: "Kaliningrad", ru: "Калининград" }, lat: 54.7104, lng: 20.4522, description: { en: "Baltic exclave. HQ of the Baltic Fleet and Iskander missile bases.", ru: "Балтийский эксклав. Штаб Балтийского флота, базы «Искандер»." }, source: "https://ria.ru/iskander_kaliningrad_anti_PRO_/", sourceLabel: { en: "RIA Novosti", ru: "РИА Новости" }, date: "2024-01" },
      { id: "rostov-on-don", category: "city", name: { en: "Rostov-on-Don", ru: "Ростов-на-Дону" }, lat: 47.2357, lng: 39.7015, description: { en: "Southern Military District HQ. Key command center for operations.", ru: "Штаб Южного военного округа. Ключевой командный центр." }, source: "https://rosstat.gov.ru", sourceLabel: { en: "Rosstat", ru: "Росстат" }, date: "2024-01" },
    ],
  },
  {
    id: "china",
    icon: "🇨🇳",
    label: { en: "China", ru: "Китай" },
    targets: [
      { id: "beijing", category: "city", name: { en: "Beijing", ru: "Пекин" }, lat: 39.9042, lng: 116.4074, description: { en: "Capital of China. Political center and one of the world's most populous cities.", ru: "Столица Китая. Политический центр, один из крупнейших городов мира." }, source: "https://www.stats.gov.cn", sourceLabel: { en: "National Bureau of Statistics", ru: "Национальное бюро статистики" }, date: "2023-12" },
      { id: "shanghai", category: "city", name: { en: "Shanghai", ru: "Шанхай" }, lat: 31.2304, lng: 121.4737, description: { en: "Largest city in China. Global financial hub and major port.", ru: "Крупнейший город Китая. Глобальный финансовый центр и крупный порт." }, source: "https://www.stats.gov.cn", sourceLabel: { en: "National Bureau of Statistics", ru: "Национальное бюро статистики" }, date: "2023-12" },
      { id: "guangzhou", category: "city", name: { en: "Guangzhou", ru: "Гуанчжоу" }, lat: 23.1291, lng: 113.2644, description: { en: "Major manufacturing and transport hub in southern China. Near PLA Southern Theater Command.", ru: "Крупный промышленный и транспортный центр на юге Китая. Рядом штаб Южного военного округа НОАК." }, source: "https://www.stats.gov.cn", sourceLabel: { en: "National Bureau of Statistics", ru: "Национальное бюро статистики" }, date: "2023-12" },
      { id: "wuhan", category: "city", name: { en: "Wuhan", ru: "Ухань" }, lat: 30.5928, lng: 114.3055, description: { en: "Transport hub and PLA joint command center. Central Theater HQ.", ru: "Транспортный центр и объединённое командование НОАК. Штаб Центрального военного округа." }, source: "https://www.stats.gov.cn", sourceLabel: { en: "National Bureau of Statistics", ru: "Национальное бюро статистики" }, date: "2023-12" },
      { id: "qingdao", category: "city", name: { en: "Qingdao", ru: "Циндао" }, lat: 36.0671, lng: 120.3826, description: { en: "Major port and home of the PLA North Sea Fleet HQ.", ru: "Крупный порт и штаб Северного флота ВМС НОАК." }, source: "https://www.stats.gov.cn", sourceLabel: { en: "National Bureau of Statistics", ru: "Национальное бюро статистики" }, date: "2023-12" },
    ],
  },
  {
    id: "uk",
    icon: "🇬🇧",
    label: { en: "UK", ru: "Великобритания" },
    targets: [
      { id: "london", category: "city", name: { en: "London", ru: "Лондон" }, lat: 51.5074, lng: -0.1278, description: { en: "Capital of the UK. Global financial center and largest city in Western Europe.", ru: "Столица Великобритании. Мировой финансовый центр, крупнейший город Западной Европы." }, source: "https://www.ons.gov.uk", sourceLabel: { en: "UK Office for National Statistics", ru: "Национальная статистическая служба Великобритании" }, date: "2024-06" },
      { id: "manchester", category: "city", name: { en: "Manchester", ru: "Манчестер" }, lat: 53.4808, lng: -2.2426, description: { en: "Major industrial and cultural city in northern England.", ru: "Крупный промышленный и культурный центр на севере Англии." }, source: "https://www.ons.gov.uk", sourceLabel: { en: "UK Office for National Statistics", ru: "Национальная статистическая служба Великобритании" }, date: "2024-06" },
      { id: "edinburgh", category: "city", name: { en: "Edinburgh", ru: "Эдинбург" }, lat: 55.9533, lng: -3.1883, description: { en: "Capital of Scotland. Political and cultural center.", ru: "Столица Шотландии. Политический и культурный центр." }, source: "https://www.ons.gov.uk", sourceLabel: { en: "UK Office for National Statistics", ru: "Национальная статистическая служба Великобритании" }, date: "2024-06" },
      { id: "plymouth", category: "city", name: { en: "Plymouth", ru: "Плимут" }, lat: 50.3755, lng: -4.1427, description: { en: "Home to HMNB Devonport, largest naval base in Western Europe.", ru: "Крупнейшая военно-морская база Западной Европы — Девоипорт." }, source: "https://www.royalnavy.mod.uk", sourceLabel: { en: "Royal Navy", ru: "Королевский ВМФ" }, date: "2024-06" },
      { id: "portsmouth", category: "city", name: { en: "Portsmouth", ru: "Портсмут" }, lat: 50.8198, lng: -1.087, description: { en: "Historic naval base. HMNB Portsmouth, home of the Royal Navy surface fleet.", ru: "Историческая военно-морская база. База надводных сил Королевского ВМФ." }, source: "https://www.royalnavy.mod.uk", sourceLabel: { en: "Royal Navy", ru: "Королевский ВМФ" }, date: "2024-06" },
    ],
  },
  {
    id: "france",
    icon: "🇫🇷",
    label: { en: "France", ru: "Франция" },
    targets: [
      { id: "paris", category: "city", name: { en: "Paris", ru: "Париж" }, lat: 48.8566, lng: 2.3522, description: { en: "Capital of France. Global center for culture, fashion, and politics.", ru: "Столица Франции. Мировой центр культуры, моды и политики." }, source: "https://www.insee.fr", sourceLabel: { en: "INSEE", ru: "INSEE" }, date: "2024-01" },
      { id: "marseille", category: "city", name: { en: "Marseille", ru: "Марсель" }, lat: 43.2965, lng: 5.3698, description: { en: "Major Mediterranean port city.", ru: "Крупный средиземноморский порт." }, source: "https://www.insee.fr", sourceLabel: { en: "INSEE", ru: "INSEE" }, date: "2024-01" },
      { id: "lyon", category: "city", name: { en: "Lyon", ru: "Лион" }, lat: 45.764, lng: 4.8357, description: { en: "Third-largest city. Major industrial and economic center.", ru: "Третий по величине город. Крупный промышленный и экономический центр." }, source: "https://www.insee.fr", sourceLabel: { en: "INSEE", ru: "INSEE" }, date: "2024-01" },
      { id: "brest", category: "city", name: { en: "Brest", ru: "Брест" }, lat: 48.3904, lng: -4.4861, description: { en: "Major naval base on the Atlantic. Homeport of French SSBNs at Île Longue.", ru: "Крупная военно-морская база на Атлантике. База французских ПЛАРБ на Иль-Лонг." }, source: "https://www.defense.gouv.fr", sourceLabel: { en: "French Navy", ru: "ВМС Франции" }, date: "2024-06" },
      { id: "toulon", category: "city", name: { en: "Toulon", ru: "Тулон" }, lat: 43.1242, lng: 5.928, description: { en: "Primary Mediterranean naval base. Home of the French aircraft carrier.", ru: "Главная военно-морская база на Средиземном море. Базирование авианосца ВМС Франции." }, source: "https://www.defense.gouv.fr", sourceLabel: { en: "French Navy", ru: "ВМС Франции" }, date: "2024-06" },
    ],
  },
  {
    id: "india",
    icon: "🇮🇳",
    label: { en: "India", ru: "Индия" },
    targets: [
      { id: "delhi", category: "city", name: { en: "Delhi", ru: "Дели" }, lat: 28.7041, lng: 77.1025, description: { en: "Capital of India. One of the oldest and most populous cities in the world.", ru: "Столица Индии. Один из древнейших и крупнейших городов мира." }, source: "https://www.censusindia.gov.in", sourceLabel: { en: "Census of India", ru: "Перепись Индии" }, date: "2023-12" },
      { id: "mumbai", category: "city", name: { en: "Mumbai", ru: "Мумбаи" }, lat: 19.076, lng: 72.8777, description: { en: "Largest city and financial center. Major port on the Arabian Sea.", ru: "Крупнейший город и финансовый центр. Крупный порт на Аравийском море." }, source: "https://www.censusindia.gov.in", sourceLabel: { en: "Census of India", ru: "Перепись Индии" }, date: "2023-12" },
      { id: "kolkata", category: "city", name: { en: "Kolkata", ru: "Калькутта" }, lat: 22.5726, lng: 88.3639, description: { en: "Major cultural and commercial center in eastern India. Near Eastern Command HQ.", ru: "Крупный культурный и коммерческий центр на востоке Индии. Рядом штаб Восточного командования." }, source: "https://www.censusindia.gov.in", sourceLabel: { en: "Census of India", ru: "Перепись Индии" }, date: "2023-12" },
      { id: "visakhapatnam", category: "city", name: { en: "Visakhapatnam", ru: "Вишакхапатнам" }, lat: 17.6868, lng: 83.2185, description: { en: "Eastern Naval Command HQ. Submarine base and shipbuilding center.", ru: "Штаб Восточного военно-морского командования. База подводных лодок." }, source: "https://www.censusindia.gov.in", sourceLabel: { en: "Census of India", ru: "Перепись Индии" }, date: "2023-12" },
      { id: "chennai", category: "city", name: { en: "Chennai", ru: "Ченнаи" }, lat: 13.0827, lng: 80.2707, description: { en: "Major port and naval base on the Bay of Bengal.", ru: "Крупный порт и военно-морская база на Бенгальском заливе." }, source: "https://www.censusindia.gov.in", sourceLabel: { en: "Census of India", ru: "Перепись Индии" }, date: "2023-12" },
    ],
  },
  {
    id: "pakistan",
    icon: "🇵🇰",
    label: { en: "Pakistan", ru: "Пакистан" },
    targets: [
      { id: "islamabad", category: "city", name: { en: "Islamabad", ru: "Исламабад" }, lat: 33.6844, lng: 73.0479, description: { en: "Capital of Pakistan. Seat of government.", ru: "Столица Пакистана. Местонахождение правительства." }, source: "https://www.pbs.gov.pk", sourceLabel: { en: "Pakistan Bureau of Statistics", ru: "Бюро статистики Пакистана" }, date: "2023-06" },
      { id: "karachi", category: "city", name: { en: "Karachi", ru: "Карачи" }, lat: 24.8607, lng: 67.0011, description: { en: "Largest city and economic hub. Major Arabian Sea port.", ru: "Крупнейший город и экономический центр. Крупный порт на Аравийском море." }, source: "https://www.pbs.gov.pk", sourceLabel: { en: "Pakistan Bureau of Statistics", ru: "Бюро статистики Пакистана" }, date: "2023-06" },
      { id: "lahore", category: "city", name: { en: "Lahore", ru: "Лахор" }, lat: 31.5497, lng: 74.3436, description: { en: "Second-largest city. Cultural and industrial center.", ru: "Второй по величине город. Культурный и промышленный центр." }, source: "https://www.pbs.gov.pk", sourceLabel: { en: "Pakistan Bureau of Statistics", ru: "Бюро статистики Пакистана" }, date: "2023-06" },
      { id: "rawalpindi", category: "city", name: { en: "Rawalpindi", ru: "Равалпинди" }, lat: 33.5651, lng: 73.0169, description: { en: "Army GHQ and Joint Staff HQ. Nuclear command authority located here.", ru: "Штаб сухопутных войск и объединённый штаб. Командование ядерными силами." }, source: "https://www.pbs.gov.pk", sourceLabel: { en: "Pakistan Bureau of Statistics", ru: "Бюро статистики Пакистана" }, date: "2023-06" },
      { id: "gwadar", category: "city", name: { en: "Gwadar", ru: "Гвадар" }, lat: 25.1264, lng: 62.325, description: { en: "Strategic deep-sea port on the Arabian Sea. Naval base under development.", ru: "Стратегический глубоководный порт на Аравийском море. Строящаяся военно-морская база." }, source: "https://www.pbs.gov.pk", sourceLabel: { en: "Pakistan Bureau of Statistics", ru: "Бюро статистики Пакистана" }, date: "2023-06" },
    ],
  },
  {
    id: "north_korea",
    icon: "🇰🇵",
    label: { en: "North Korea", ru: "КНДР" },
    targets: [
      { id: "pyongyang", category: "city", name: { en: "Pyongyang", ru: "Пхеньян" }, lat: 39.0392, lng: 125.7625, description: { en: "Capital and largest city of North Korea.", ru: "Столица и крупнейший город КНДР." }, source: "https://www.38north.org", sourceLabel: { en: "38 North", ru: "38 North" }, date: "2024-01" },
      { id: "nampo", category: "city", name: { en: "Nampo", ru: "Нампхо" }, lat: 38.7375, lng: 125.4078, description: { en: "Major port city on the west coast. Naval base and shipbuilding center.", ru: "Крупный портовый город на западном побережье. Военно-морская база и судостроение." }, source: "https://www.38north.org", sourceLabel: { en: "38 North", ru: "38 North" }, date: "2024-01" },
      { id: "wonsan", category: "city", name: { en: "Wonsan", ru: "Вонсан" }, lat: 39.1521, lng: 127.4344, description: { en: "East coast naval base. Missile test and launch site nearby.", ru: "Военно-морская база на восточном побережье. Рядом полигон для испытаний ракет." }, source: "https://www.38north.org", sourceLabel: { en: "38 North", ru: "38 North" }, date: "2024-01" },
    ],
  },
  {
    id: "israel",
    icon: "🇮🇱",
    label: { en: "Israel", ru: "Израиль" },
    targets: [
      { id: "tel-aviv", category: "city", name: { en: "Tel Aviv", ru: "Тель-Авив" }, lat: 32.0853, lng: 34.7818, description: { en: "Economic and technological center of Israel.", ru: "Экономический и технологический центр Израиля." }, source: "https://www.cbs.gov.il", sourceLabel: { en: "Central Bureau of Statistics", ru: "Центральное бюро статистики" }, date: "2023-12" },
      { id: "jerusalem", category: "city", name: { en: "Jerusalem", ru: "Иерусалим" }, lat: 31.7683, lng: 35.2137, description: { en: "Capital of Israel. Holy city for three major religions.", ru: "Столица Израиля. Священный город для трёх крупнейших религий." }, source: "https://www.cbs.gov.il", sourceLabel: { en: "Central Bureau of Statistics", ru: "Центральное бюро статистики" }, date: "2023-12" },
      { id: "haifa", category: "city", name: { en: "Haifa", ru: "Хайфа" }, lat: 32.794, lng: 34.9896, description: { en: "Major Mediterranean port and home of the Israeli Navy HQ.", ru: "Крупный средиземноморский порт. Штаб ВМС Израиля." }, source: "https://www.cbs.gov.il", sourceLabel: { en: "Central Bureau of Statistics", ru: "Центральное бюро статистики" }, date: "2023-12" },
    ],
  },
  {
    id: "nato",
    icon: "🇪🇺",
    label: { en: "NATO capitals", ru: "Столицы НАТО" },
    targets: [
      { id: "berlin", category: "city", name: { en: "Berlin", ru: "Берлин" }, lat: 52.52, lng: 13.405, description: { en: "Capital of Germany. Largest EU city by population.", ru: "Столица Германии. Крупнейший город ЕС." }, source: "https://www.destatis.de", sourceLabel: { en: "Destatis", ru: "Destatis" }, date: "2023-12" },
      { id: "rome", category: "city", name: { en: "Rome", ru: "Рим" }, lat: 41.9028, lng: 12.4964, description: { en: "Capital of Italy. Historic center of Western civilization.", ru: "Столица Италии. Исторический центр западной цивилизации." }, source: "https://www.istat.it", sourceLabel: { en: "ISTAT", ru: "ISTAT" }, date: "2024-01" },
      { id: "madrid", category: "city", name: { en: "Madrid", ru: "Мадрид" }, lat: 40.4168, lng: -3.7038, description: { en: "Capital of Spain. Political and economic center.", ru: "Столица Испании. Политический и экономический центр." }, source: "https://www.ine.es", sourceLabel: { en: "INE", ru: "INE" }, date: "2024-01" },
      { id: "warsaw", category: "city", name: { en: "Warsaw", ru: "Варшава" }, lat: 52.2297, lng: 21.0122, description: { en: "Capital of Poland. Major Eastern European hub.", ru: "Столица Польши. Крупный центр Восточной Европы." }, source: "https://stat.gov.pl", sourceLabel: { en: "GUS", ru: "GUS" }, date: "2023-12" },
      { id: "brussels", category: "city", name: { en: "Brussels", ru: "Брюссель" }, lat: 50.8503, lng: 4.3517, description: { en: "Capital of Belgium. Headquarters of NATO and EU institutions.", ru: "Столица Бельгии. Штаб-квартира НАТО и институтов ЕС." }, source: "https://www.nato.int", sourceLabel: { en: "NATO", ru: "НАТО" }, date: "2024-01" },
      { id: "london-nato", category: "city", name: { en: "London", ru: "Лондон" }, lat: 51.5074, lng: -0.1278, description: { en: "Capital of the UK. Major NATO contributor.", ru: "Столица Великобритании. Крупный участник НАТО." }, source: "https://www.nato.int", sourceLabel: { en: "NATO", ru: "НАТО" }, date: "2024-01" },
      { id: "paris-nato", category: "city", name: { en: "Paris", ru: "Париж" }, lat: 48.8566, lng: 2.3522, description: { en: "Capital of France. Major NATO contributor.", ru: "Столица Франции. Крупный участник НАТО." }, source: "https://www.nato.int", sourceLabel: { en: "NATO", ru: "НАТО" }, date: "2024-01" },
      { id: "ankara", category: "city", name: { en: "Ankara", ru: "Анкара" }, lat: 39.9334, lng: 32.8597, description: { en: "Capital of Turkey. NATO Allied Land Command HQ.", ru: "Столица Турции. Командование сухопутных сил НАТО." }, source: "https://www.nato.int", sourceLabel: { en: "NATO", ru: "НАТО" }, date: "2024-01" },
      { id: "lisbon", category: "city", name: { en: "Lisbon", ru: "Лиссабон" }, lat: 38.7223, lng: -9.1393, description: { en: "Capital of Portugal. NATO Joint Force Command HQ.", ru: "Столица Португалии. Командование объединённых сил НАТО." }, source: "https://www.nato.int", sourceLabel: { en: "NATO", ru: "НАТО" }, date: "2024-01" },
      { id: "athens", category: "city", name: { en: "Athens", ru: "Афины" }, lat: 37.9838, lng: 23.7275, description: { en: "Capital of Greece. Major NATO naval base at Souda Bay.", ru: "Столица Греции. Крупная военно-морская база НАТО в Суда." }, source: "https://www.nato.int", sourceLabel: { en: "NATO", ru: "НАТО" }, date: "2024-01" },
    ],
  },
]
