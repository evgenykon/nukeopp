export interface Scenario {
  id: string
  name: Record<string, string>
  description: Record<string, string>
  participants: Record<string, string>
  damage: Record<string, string>
  casualties: Record<string, string>
  planetary: Record<string, string>
  survival: Record<string, string>
  survivalActions: Record<string, string>
  probability: Record<string, string>
  probabilityLabel: Record<string, string>
  probabilitySource: string
  harbingers: Record<string, string>
  source: string
}

export interface Conflict {
  id: string
  name: Record<string, string>
  scenarios: Scenario[]
}

export const conflicts: Conflict[] = [
  {
    id: "russia-nato",
    name: { en: "Russia vs NATO", ru: "Россия против НАТО" },
    scenarios: [
      {
        id: "russia-nato-quick",
        name: { en: "Quick Conflict in Eastern Europe", ru: "Быстрый конфликт в Восточной Европе" },
        description: {
          en: "The most probable scenario involves a rapid escalation of an existing conventional conflict (e.g., in the Baltics or Ukraine) into a limited nuclear exchange. Russia, facing conventional defeat, launches a demonstrative low-yield nuclear strike against a military target in Eastern Europe. NATO responds with a similar tactical nuclear strike. After limited exchanges, both sides recognise the catastrophic risk of further escalation and agree to a ceasefire mediated by China.\n\nThis scenario assumes rational actors and functioning communication channels. However the risk of miscalculation remains extremely high, as both sides have pre-authorized launch procedures that compress decision time to minutes.",
          ru: "Наиболее вероятный сценарий: быстрая эскалация существующего обычного конфликта (например, в Прибалтике или Украине) до ограниченного ядерного обмена. Россия, столкнувшись с обычным поражением, наносит демонстративный ядерный удар малой мощности по военной цели в Восточной Европе. НАТО отвечает аналогичным тактическим ядерным ударом. После ограниченных обменов обе стороны осознают катастрофический риск дальнейшей эскалации и соглашаются на прекращение огня при посредничестве Китая.\n\nЭтот сценарий предполагает рациональных игроков и функционирующие каналы связи. Однако риск просчёта остаётся чрезвычайно высоким, поскольку обе стороны имеют предварительно санкционированные процедуры запуска."
        },
        participants: { en: "Russia, USA, UK, France, Germany, Poland, Baltic states, Belarus, China (mediator)", ru: "Россия, США, Великобритания, Франция, Германия, Польша, страны Балтии, Беларусь, Китай (посредник)" },
        damage: { en: "Localized — several military bases and one or two small cities destroyed. Radiation contamination limited to tactical weapon fallout zones.", ru: "Локальные разрушения — несколько военных баз и 1–2 небольших города уничтожены. Радиационное заражение ограничено зонами выпадения тактических зарядов." },
        casualties: { en: "50,000–200,000 immediate deaths. Hundreds of thousands exposed to radiation.", ru: "50 000–200 000 мгновенных смертей. Сотни тысяч подверглись облучению." },
        planetary: { en: "Minimal. No significant soot injection into the stratosphere. Long-term ozone depletion below 1%.", ru: "Минимальное. Значительного выброса сажи в стратосферу нет. Долгосрочное разрушение озона менее 1%." },
        survival: { en: "High for non-participating countries. Moderate in affected regions outside blast zones.", ru: "Высокая для не участвующих стран. Умеренная в затронутых регионах за пределами зон поражения." },
        survivalActions: {
          en: "— For civilians in Eastern Europe, Baltics, Poland: evacuate major cities immediately; head westward or southward away from Russian borders; avoid military bases and government buildings\n— For civilians in Russia: avoid Moscow, St. Petersburg, and military command centers; head to rural areas 200+ km from any strategic target; stockpile 2–4 weeks of supplies\n— Stockpile 2–4 weeks of supplies in a rural location 100+ km from any city",
          ru: "— Для граждан в Восточной Европе, Прибалтике, Польше: немедленно покинуть крупные города; двигаться на запад или юг в сторону от границ России; избегать военных баз и правительственных зданий\n— Для граждан в России: избегать Москвы, Санкт-Петербурга и военных командных центров; направляться в сельские районы в 200+ км от стратегических целей; создать запас на 2–4 недели\n— Создать запас продуктов и воды на 2–4 недели в сельской местности в 100+ км от любого города",
        },
        probability: { en: "Very Low (3–5%)", ru: "Очень низкая (3–5%)" },
        probabilityLabel: { en: "Very Low", ru: "Очень низкая" },
        probabilitySource: "https://sipri.org",
        harbingers: {
          en: "— Large-scale Russian military exercises near NATO borders\n— Closure of airspace over Eastern Europe\n— Activation of Russian nuclear command and control systems\n— Sudden evacuation of diplomatic personnel from Moscow\n— Unusual US B-2 bomber deployments to Europe",
          ru: "— Крупномасштабные военные учения России у границ НАТО\n— Закрытие воздушного пространства над Восточной Европой\n— Активация российских систем ядерного командования и управления\n— Внезапная эвакуация дипломатического персонала из Москвы\n— Необычные развёртывания бомбардировщиков B-2 в Европе",
        },
        source: "https://sipri.org",
      },
      {
        id: "russia-nato-full",
        name: { en: "Full-Scale War in Europe", ru: "Масштабная война в Европе" },
        description: {
          en: "A large-scale conventional war between Russia and NATO escalates after several weeks of intense fighting. Russia, facing strategic collapse, uses a medium-yield nuclear weapon against a NATO logistics hub in Germany. NATO retaliates with strikes on Russian military command centers. The exchange rapidly widens: Russian submarine-launched missiles target European capitals, NATO bombers strike Moscow and St. Petersburg.\n\nThe conflict involves 300–500 detonations across Europe within the first 24 hours. Major cities are destroyed. Millions flee eastward. The electromagnetic pulses from high-altitude bursts disable power grids across the continent. Europe ceases to exist as a functioning civilization.",
          ru: "Крупномасштабная обычная война между Россией и НАТО перерастает в ядерную после нескольких недель интенсивных боёв. Россия, оказавшись на грани стратегического коллапса, применяет ядерный заряд средней мощности против логистического центра НАТО в Германии. НАТО наносит ответные удары по российским командным центрам. Обмен быстро расширяется: российские подводные ракеты нацеливаются на европейские столицы, бомбардировщики НАТО атакуют Москву и Санкт-Петербург.\n\nКонфликт включает 300–500 ядерных взрывов по всей Европе в первые 24 часа. Крупные города уничтожены. Миллионы бегут на восток. Электромагнитные импульсы от высотных взрывов выводят из строя электросети по всему континенту. Европа перестаёт существовать как функционирующая цивилизация."
        },
        participants: { en: "All NATO members (30+ countries), Russia, Belarus, potential Chinese economic intervention", ru: "Все члены НАТО (30+ стран), Россия, Беларусь, возможное экономическое вмешательство Китая" },
        damage: { en: "Catastrophic — all major European cities (Berlin, Paris, London, Rome, Madrid, Warsaw) partially or completely destroyed. 60% of European infrastructure ruined.", ru: "Катастрофические — все крупные города Европы (Берлин, Париж, Лондон, Рим, Мадрид, Варшава) частично или полностью уничтожены. 60% инфраструктуры Европы разрушено." },
        casualties: { en: "50–80 million immediate deaths in Europe. 100–150 million total casualties including radiation sickness and famine.", ru: "50–80 миллионов мгновенных смертей в Европе. 100–150 миллионов общих потерь с учётом лучевой болезни и голода." },
        planetary: { en: "Moderate — 5–10 Tg of soot injected into the stratosphere. Global temperature drop of 1–2°C. Agricultural collapse in the Northern Hemisphere for 2–3 years.", ru: "Умеренное — 5–10 Тг сажи в стратосфере. Глобальное падение температуры на 1–2°C. Коллапс сельского хозяйства в Северном полушарии на 2–3 года." },
        survival: { en: "Low in Europe. Moderate in the Americas and Australia. High in the Southern Hemisphere away from strategic targets.", ru: "Низкая в Европе. Умеренная в Америке и Австралии. Высокая в Южном полушарии вдали от стратегических целей." },
        survivalActions: {
          en: "— For all Europeans: evacuate any city immediately — you have 12–24 hours before first strikes; head to rural areas in southern Europe (Spain, Greece) or Scandinavia (Norway, Sweden); do NOT head east — fallout from Russian strikes will drift eastward\n— For Russians: evacuate Moscow, St. Petersburg, and ALL major cities; head to rural Siberia (east of Urals) away from military targets; secure a basement or underground shelter\n— For everyone: stockpile 1–3 months of food, water, and medical supplies; have a battery-powered radio for emergency broadcasts; secure a basement or underground shelter — even a cellar reduces radiation exposure by 90%",
          ru: "— Для всех европейцев: немедленно покинуть любой город — у вас 12–24 часа до первых ударов; направляться в сельские районы южной Европы (Испания, Греция) или Скандинавии (Норвегия, Швеция); НЕ двигаться на восток — осадки от российских ударов будут дрейфовать на восток\n— Для россиян: покинуть Москву, Санкт-Петербург и ВСЕ крупные города; направляться в сельскую Сибирь (восточнее Урала) вдали от военных целей; обеспечить подвал или подземное укрытие\n— Для всех: создать запас продуктов, воды и медикаментов на 1–3 месяца; иметь радиоприёмник на батарейках для экстренных сообщений; подвал снижает радиационное облучение на 90%",
        },
        probability: { en: "Very Low (1–3%)", ru: "Очень низкая (1–3%)" },
        probabilityLabel: { en: "Very Low", ru: "Очень низкая" },
        probabilitySource: "https://thebulletin.org",
        harbingers: {
          en: "— Weeks of intense conventional warfare between Russia and NATO\n— Use of chemical or biological weapons as a precursor\n— Russian tactical nuclear weapons moved to forward launch positions\n— NATO activation of Article 5\n— Massive cyberattacks on critical infrastructure\n— Russian submarine patrols surge to record levels",
          ru: "— Недели интенсивных обычных боевых действий между Россией и НАТО\n— Применение химического или биологического оружия как предшественник\n— Выдвижение российского тактического ядерного оружия на передовые позиции\n— Активация статьи 5 НАТО\n— Масштабные кибератаки на критическую инфраструктуру\n— Патрули российских подводных лодок достигают рекордных уровней",
        },
        source: "https://thebulletin.org",
      },
      {
        id: "russia-nato-global",
        name: { en: "Global Nuclear War", ru: "Глобальная ядерная война" },
        description: {
          en: "The worst-case scenario. A strategic conflict between Russia and NATO rapidly escalates to a full exchange of strategic arsenals. All nuclear powers are drawn in: China enters on Russia's side after NATO strikes reach Asia, the UK and France launch their full SLBM salvos, India and Pakistan join opposing sides.\n\nWithin three hours, 3,000–4,000 warheads detonate across the Northern Hemisphere. Every city with a population over 500,000 is targeted. Counterforce strikes destroy missile silos, naval bases, command bunkers. The electromagnetic pulses from 200+ high-altitude bursts disable electronics worldwide. The internet, power grids, water treatment — all fail simultaneously. Nuclear winter begins within days.",
          ru: "Наихудший сценарий. Стратегический конфликт между Россией и НАТО быстро перерастает в полномасштабный обмен стратегическими арсеналами. Втянуты все ядерные державы: Китай вступает на стороне России после того, как удары НАТО достигают Азии, Великобритания и Франция запускают полные залпы БРПЛ, Индия и Пакистан присоединяются к противоположным сторонам.\n\nВ течение трёх часов 3 000–4 000 боеголовок взрываются в Северном полушарии. Каждый город с населением более 500 000 является целью. Контрсиловые удары уничтожают шахты ракет, военно-морские базы, командные бункеры. Электромагнитные импульсы от 200+ высотных взрывов выводят из строя электронику по всему миру. Интернет, электросети, водоснабжение — всё отказывает одновременно. Ядерная зима начинается в течение нескольких дней."
        },
        participants: { en: "Russia, USA, UK, France, China, India, Pakistan, North Korea, Israel (undeclared). All NATO and CSTO members.", ru: "Россия, США, Великобритания, Франция, Китай, Индия, Пакистан, КНДР, Израиль (необъявленный). Все члены НАТО и ОДКБ." },
        damage: { en: "Total — 70% of urban infrastructure in the Northern Hemisphere destroyed. No functioning government remains in any belligerent country.", ru: "Тотальные — 70% городской инфраструктуры Северного полушария уничтожено. Ни в одной из воюющих стран не осталось функционирующего правительства." },
        casualties: { en: "500 million–1 billion immediate deaths. 2–3 billion total deaths within the first year from starvation, radiation, and disease.", ru: "500 миллионов–1 миллиард мгновенных смертей. 2–3 миллиарда общих потерь в первый год от голода, радиации и болезней." },
        planetary: { en: "Severe — 50–150 Tg of soot. Nuclear winter: global temperature drop of 4–8°C. Ozone layer depleted by 40–60%. Agriculture collapses worldwide for 5–10 years. Mass extinction event.", ru: "Тяжёлое — 50–150 Тг сажи. Ядерная зима: падение глобальной температуры на 4–8°C. Разрушение озонового слоя на 40–60%. Коллапс сельского хозяйства на 5–10 лет. Массовое вымирание." },
        survival: { en: "Near zero in the Northern Hemisphere. Below 5% globally. Surviving populations face starvation, radiation, and societal collapse.", ru: "Близка к нулю в Северном полушарии. Менее 5% глобально. Выжившие столкнутся с голодом, радиацией и коллапсом общества." },
        survivalActions: {
          en: "— For everyone in the Northern Hemisphere: your survival chances are near zero — if you can reach the Southern Hemisphere (Australia, NZ, South Africa, Chile, Argentina), do so immediately\n— For Russians and Europeans: both sides will be equally devastated — there is no 'safe side' in a global nuclear war\n— For those in the Southern Hemisphere: head to rural areas away from major ports and cities that might be targeted; stockpile 1–2 years of supplies; join or form a self-sufficient community with farming skills and water access\n— For everyone: learn analog survival skills now — the internet, power grids, and all electronics will fail within days",
          ru: "— Для всех в Северном полушарии: ваши шансы на выживание близки к нулю — если можете добраться до Южного полушария (Австралия, Новая Зеландия, ЮАР, Чили, Аргентина), сделайте это немедленно\n— Для россиян и европейцев: обе стороны будут одинаково уничтожены — «безопасной стороны» в глобальной ядерной войне нет\n— Для тех, кто в Южном полушарии: направляйтесь в сельские районы вдали от крупных портов и городов; создайте запас на 1–2 года; присоединитесь к самообеспечивающейся общине\n— Для всех: освойте аналоговые навыки выживания сейчас — интернет, электросети и вся электроника откажут в течение дней",
        },
        probability: { en: "Extremely Low (<1%)", ru: "Чрезвычайно низкая (<1%)" },
        probabilityLabel: { en: "Extremely Low", ru: "Чрезвычайно низкая" },
        probabilitySource: "https://nature.com",
        harbingers: {
          en: "— Any nuclear use by any nation (breaking the taboo)\n— Full military mobilization of all nuclear powers\n— China and Russia announce joint military command\n— India-Pakistan or Israel-Iran nuclear exchange as a trigger\n— US DEFCON 1 declared\n— Mass evacuation of major cities worldwide\n— Communications blackouts and internet shutdowns",
          ru: "— Любое ядерное применение любой страной (нарушение табу)\n— Полная военная мобилизация всех ядерных держав\n— Китай и Россия объявляют объединённое военное командование\n— Ядерный обмен Индии и Пакистана или Израиля и Ирана как триггер\n— Объявление США DEFCON 1\n— Массовая эвакуация крупных городов по всему миру\n— Отключения связи и интернета",
        },
        source: "https://nature.com",
      },
      {
        id: "russia-nato-accidental",
        name: { en: "Accidental Nuclear Launch", ru: "Случайный ядерный пуск" },
        description: {
          en: "One of the most terrifying scenarios: a false alarm in Russia's early warning system (SPRN) misidentifies a Norwegian research rocket — or a solar storm interference on radar — as a massive incoming US ICBM salvo. With only minutes to decide, and following Russia's 'launch on warning' doctrine, the duty officer or automated system authorizes a retaliatory strike.\n\nA single Topol or Yars missile launches toward what is believed to be a US command center. The US detects the launch and, believing a Russian first strike is underway, retaliates with a limited salvo. Within 30 minutes, both sides have exchanged 50–100 warheads. Only after the exchange do they realize the initial warning was false. The world has stumbled into nuclear war by mistake.\n\nHistorical precedent: multiple false alarms have occurred — 1979 (US NORAD), 1983 (Soviet Serpukhov-15, averted by Stanislav Petrov), 1995 (Norwegian rocket incident).",
          ru: "Один из самых страшных сценариев: ложное срабатывание российской системы раннего предупреждения (СПРН) ошибочно идентифицирует норвежскую исследовательскую ракету — или помехи от солнечной бури на радарах — как массированный залп американских МБР. Имея в распоряжении минуты на решение и следуя доктрине «пуск при получении предупреждения», дежурный офицер или автоматизированная система санкционирует ответный удар.\n\nОдна ракета «Тополь» или «Ярс» запускается по предполагаемому командному центру США. США обнаруживают пуск и, полагая, что начался российский первый удар, отвечают ограниченным залпом. В течение 30 минут обе стороны обмениваются 50–100 боеголовками. Лишь после обмена они понимают, что первоначальное предупреждение было ложным. Мир вступил в ядерную войну по ошибке.\n\nИсторические прецеденты: множество ложных тревог — 1979 (NORAD США), 1983 (Серпухов-15, предотвращена Станиславом Петровым), 1995 (инцидент с норвежской ракетой)."
        },
        participants: { en: "Russia, USA, NATO (involuntary), all nuclear powers (potential escalation)", ru: "Россия, США, НАТО (непроизвольно), все ядерные державы (потенциальная эскалация)" },
        damage: { en: "Moderate — 50–100 warhead detonations mainly against military and command targets. 10–20 cities partially damaged.", ru: "Умеренные — 50–100 взрывов боеголовок, в основном по военным и командным целям. 10–20 городов частично повреждены." },
        casualties: { en: "5–15 million immediate deaths. 30–50 million total from fallout and secondary effects.", ru: "5–15 миллионов мгновенных смертей. 30–50 миллионов общих потерь от радиоактивных осадков и вторичных эффектов." },
        planetary: { en: "Moderate — 10–20 Tg of soot. Temperature drop of 1–2°C. Regional agricultural collapse.", ru: "Умеренное — 10–20 Тг сажи. Падение температуры на 1–2°C. Региональный коллапс сельского хозяйства." },
        survival: { en: "Moderate in non-targeted regions. Low in targeted countries. The absurdity of the cause may accelerate ceasefire.", ru: "Умеренная в нецелевых регионах. Низкая в странах-целях. Абсурдность причины может ускорить прекращение огня." },
        survivalActions: {
          en: "— For everyone in NATO and Russia: this is a limited exchange caused by error — do NOT escalate further; listen for ceasefire announcements\n— For civilians near command centers and military bases (both sides): evacuate immediately — these are primary targets\n— For those in missile silo regions (Montana, North Dakota, USA and Saratov, Orenburg, Russia): pre-evacuate now — these areas will be targeted regardless\n— Stay in shelter for at least 48 hours after the last detonation in your area\n— Do NOT assume it's over after the first wave — escalation is still possible",
          ru: "— Для всех в НАТО и России: это ограниченный обмен, вызванный ошибкой — НЕ эскалируйте дальше; слушайте объявления о прекращении огня\n— Для граждан рядом с командными центрами и военными базами (обе стороны): немедленно эвакуироваться — это первичные цели\n— Для жителей «ракетных регионов» (Монтана, Северная Дакота, США и Саратов, Оренбург, Россия): эвакуироваться заранее — эти районы будут поражены в любом случае\n— Оставайтесь в укрытии минимум 48 часов после последнего взрыва в вашем районе\n— НЕ считайте, что всё кончено после первой волны — эскалация ещё возможна",
        },
        probability: { en: "Very Low (1–3%)", ru: "Очень низкая (1–3%)" },
        probabilityLabel: { en: "Very Low", ru: "Очень низкая" },
        probabilitySource: "https://thebulletin.org/doomsday-clock",
        harbingers: {
          en: "— Solar storms or geomagnetic activity disrupting radar systems\n— Scheduled Russian strategic nuclear exercises (increased false alarm risk)\n— Degraded early warning satellite coverage (gaps in constellation)\n— Heightened political tensions compressing decision time\n— US or Russian test missile launches without prior notification\n— Previous false alarm incidents in the same region",
          ru: "— Солнечные бури или геомагнитная активность, нарушающая работу РЛС\n— Плановые учения стратегических ядерных сил России (повышенный риск ложной тревоги)\n— Деградация спутниковой системы раннего предупреждения\n— Повышенная политическая напряжённость, сжимающая время принятия решений\n— Пуски испытательных ракет США или России без предварительного уведомления\n— Предыдущие инциденты ложных тревог в том же регионе",
        },
        source: "https://en.wikipedia.org/wiki/1983_Soviet_nuclear_false_alarm_incident",
      },
    ],
  },
  {
    id: "russia-ukraine",
    name: { en: "Russia vs Ukraine", ru: "Россия против Украины" },
    scenarios: [
      {
        id: "russia-ukraine-escalation",
        name: { en: "Escalation of the existing conflict", ru: "Эскалация существующего конфликта" },
        description: {
          en: "A protracted conventional conflict reaches a critical point where one side faces conventional defeat. Tactical nuclear weapons are introduced to alter the battlefield calculus and signal resolve. The opposing side, facing nuclear use against its forces, responds with a limited nuclear strike of its own against military targets in the conflict zone.\n\nThe exchange remains limited — both sides recognize that further escalation carries catastrophic risks. Diplomatic channels, mediated by neutral parties, establish communication and a framework for de-escalation. A conditional ceasefire is reached, but nuclear weapons have been used in combat for the first time since 1945, permanently altering the global security landscape.\n\nThis scenario is a generic model of conventional-to-nuclear escalation applicable to various regional conflicts. It does not describe any specific war, its participants, or the course of actual hostilities.",
          ru: "Затяжной конвенциональный конфликт достигает критической точки, когда одна из сторон оказывается на грани обычного поражения. Для изменения баланса на поле боя и демонстрации решимости применяется тактическое ядерное оружие. Противоположная сторона, столкнувшись с ядерным ударом по своим силам, отвечает ограниченным ядерным ударом по военным целям в зоне конфликта.\n\nОбмен остаётся ограниченным — обе стороны осознают, что дальнейшая эскалация несёт катастрофические риски. Дипломатические каналы при посредничестве нейтральных сторон устанавливают связь и рамки для деэскалации. Достигается условное прекращение огня, но ядерное оружие применено в бою впервые с 1945 года, навсегда изменив глобальный ландшафт безопасности.\n\nДанный сценарий представляет собой обобщённую модель эскалации от обычной войны к ядерной, применимую к различным региональным конфликтам. Он не описывает какую-либо конкретную войну, её участников или ход реальных боевых действий.",
        },
        participants: { en: "Russia, Ukraine, NATO member states (potential escalation), Belarus (potential involvement), IAEA (monitoring)", ru: "Россия, Украина, государства-члены НАТО (потенциальная эскалация), Беларусь (потенциальное вовлечение), МАГАТЭ (мониторинг)" },
        damage: { en: "⚠ Information restricted by Russian legislation", ru: "⚠ Информация ограничена законодательством РФ" },
        casualties: { en: "⚠ Information restricted by Russian legislation", ru: "⚠ Информация ограничена законодательством РФ" },
        planetary: { en: "⚠ Information restricted by Russian legislation", ru: "⚠ Информация ограничена законодательством РФ" },
        survival: { en: "⚠ Information restricted by Russian legislation", ru: "⚠ Информация ограничена законодательством РФ" },
        survivalActions: {
          en: "— If you are in or near the conflict zone, identify the nearest potential nuclear targets (military bases, command centers, airports) and plan evacuation routes away from them\n— Stockpile 1–2 months of food, water, and medical supplies\n— Prepare a basement or underground shelter — even a cellar significantly reduces radiation exposure\n— Keep a battery-powered radio, iodine pills, and a Geiger counter ready\n— Establish communication plans with family members and agree on a meeting point outside any major city\n— Monitor official statements and international nuclear risk assessments (IAEA, SIPRI)",
          ru: "— Если вы находитесь в зоне конфликта или рядом с ней, определите ближайшие потенциальные ядерные цели (военные базы, командные центры, аэропорты) и спланируйте маршруты эвакуации в сторону от них\n— Сделайте запас продуктов, воды и медикаментов на 1–2 месяца\n— Подготовьте подвал или подземное укрытие — даже погреб значительно снижает радиационное облучение\n— Держите наготове радиоприёмник на батарейках, йод и дозиметр\n— Согласуйте план связи с близкими и точку встречи за пределами крупных городов\n— Следите за официальными заявлениями и международными оценками ядерного риска (МАГАТЭ, SIPRI)",
        },
        probability: { en: "Low (5–10%)", ru: "Низкая (5–10%)" },
        probabilityLabel: { en: "Low", ru: "Низкая" },
        probabilitySource: "https://sipri.org",
        harbingers: {
          en: "— Movement of tactical nuclear weapons to forward deployment areas\n— Activation of nuclear command and control exercises near conflict zone\n— Statements by officials lowering the threshold for nuclear use\n— Closure of airspace and maritime exclusion zones\n— Evacuation of cities near potential target areas\n— Deployment of additional air defense and missile defense systems to the region\n— Increased readiness of strategic aviation and submarine patrols\n— Unannounced test launches of ballistic or cruise missiles",
          ru: "— Выдвижение тактического ядерного оружия в районы передового развёртывания\n— Активация учений ядерных сил командования вблизи зоны конфликта\n— Заявления официальных лиц о снижении порога применения ядерного оружия\n— Закрытие воздушного пространства и морских зон\n— Эвакуация городов вблизи потенциальных целей\n— Развёртывание дополнительных систем ПВО и ПРО в регионе\n— Повышенная готовность стратегической авиации и подводных патрулей\n— Незаявленные испытательные пуски баллистических или крылатых ракет",
        },
        source: "https://www.consultant.ru/document/cons_doc_LAW_10699/",
      },
    ],
  },
  {
    id: "usa-china",
    name: { en: "USA vs China", ru: "США против Китая" },
    scenarios: [
      {
        id: "usa-china-taiwan",
        name: { en: "Taiwan Strait Escalation", ru: "Эскалация в Тайваньском проливе" },
        description: {
          en: "A Chinese invasion of Taiwan triggers US military intervention. After a conventional naval battle in which both sides lose aircraft carriers, China launches DF-21 anti-ship ballistic missiles with conventional warheads against US Navy task forces, sinking multiple vessels. The US responds with strikes against Chinese naval bases and early warning radars. China, believing its nuclear deterrent is threatened, launches a limited nuclear strike against US naval forces in the Pacific.\n\nThe US responds with a calibrated nuclear strike against Chinese military facilities. Both sides refrain from attacking cities in this phase. Diplomatic backchannels via Russia manage to establish a ceasefire. Taiwan remains divided, but nuclear use has permanently shattered the taboo.",
          ru: "Китайское вторжение на Тайвань провоцирует военное вмешательство США. После обычного морского сражения, в котором обе стороны теряют авианосцы, Китай запускает противокорабельные баллистические ракеты DF-21 с обычными боеголовками по силам ВМС США, топя несколько кораблей. США отвечают ударами по китайским военно-морским базам и радарам раннего предупреждения. Китай, полагая, что его ядерное сдерживание находится под угрозой, наносит ограниченный ядерный удар по силам США в Тихом океане.\n\nСША отвечают калиброванным ядерным ударом по китайским военным объектам. Обе стороны воздерживаются от атак на города в этой фазе. Дипломатические каналы через Россию позволяют установить прекращение огня. Тайвань остаётся разделённым, но применение ядерного оружия навсегда разрушило табу."
        },
        participants: { en: "USA, China, Taiwan, Japan (logistics), South Korea (logistics), Russia (mediator)", ru: "США, Китай, Тайвань, Япония (логистика), Южная Корея (логистика), Россия (посредник)" },
        damage: { en: "Limited to naval assets and military bases in the Western Pacific. Major ports in Taiwan and Chinese coastal cities suffer collateral damage.", ru: "Ограничено военно-морскими активами и базами в западной части Тихого океана. Крупные порты Тайваня и прибрежных городов Китая страдают от сопутствующего ущерба." },
        casualties: { en: "100,000–500,000 military and civilian deaths, primarily from naval engagements and secondary effects.", ru: "100 000–500 000 военных и гражданских смертей, в основном от морских сражений и вторичных эффектов." },
        planetary: { en: "Minimal. Limited soot injection. Some regional radiation contamination.", ru: "Минимальное. Ограниченный выброс сажи. Локальное радиационное заражение." },
        survival: { en: "High globally. Moderate in East Asian coastal regions.", ru: "Высокая глобально. Умеренная в прибрежных регионах Восточной Азии." },
        survivalActions: {
          en: "— For Taiwanese: evacuate ALL major cities — Taipei, Kaohsiung, Taichung; head to rural eastern Taiwan or offshore islands; avoid military bases and ports\n— For Chinese civilians in coastal cities: evacuate Shanghai, Ningbo, Fuzhou, Xiamen; head inland at least 300 km; avoid naval bases and ASBM launch sites\n— For US personnel and civilians near bases in Japan, Guam: evacuate Yokosuka, Sasebo, Kadena, Andersen AFB; head to inland Japan or the US mainland\n— Stockpile 2–4 weeks of supplies; avoid the Taiwan Strait area",
          ru: "— Для тайваньцев: покинуть ВСЕ крупные города — Тайбэй, Гаосюн, Тайчжун; направляться в сельский восточный Тайвань или на отдалённые острова; избегать военных баз и портов\n— Для китайских граждан в прибрежных городах: покинуть Шанхай, Нинбо, Фучжоу, Сямынь; двигаться вглубь материка минимум на 300 км; избегать военно-морских баз\n— Для персонала США и граждан рядом с базами в Японии, на Гуаме: покинуть Йокосуку, Сасебо, Кадену; направляться во внутреннюю Японию или на материковую часть США\n— Создать запас припасов на 2–4 недели; избегать района Тайваньского пролива",
        },
        probability: { en: "Low (5–10%)", ru: "Низкая (5–10%)" },
        probabilityLabel: { en: "Low", ru: "Низкая" },
        probabilitySource: "https://rand.org",
        harbingers: {
          en: "— Chinese missile buildup along the Fujian coast\n— Announcement of large-scale amphibious invasion drills\n— US aircraft carrier groups converge on the Taiwan Strait\n— Taiwan declares emergency\n— China conducts ASAT missile test (precursor to disabling US satellites)\n— Sudden evacuation of foreign nationals from Taiwan",
          ru: "— Наращивание китайских ракет вдоль побережья Фуцзянь\n— Объявление масштабных десантных учений\n— Авианосные группы США сосредотачиваются в Тайваньском проливе\n— Тайвань объявляет чрезвычайное положение\n— Китай проводит испытания противоспутниковых ракет\n— Внезапная эвакуация иностранных граждан с Тайваня",
        },
        source: "https://rand.org",
      },
      {
        id: "usa-china-full",
        name: { en: "Full-Scale US-China War", ru: "Полномасштабная война США и Китая" },
        description: {
          en: "A prolonged conventional conflict in the Pacific escalates to strategic nuclear exchange. China launches a surprise salvo of ICBMs against US West Coast cities and naval bases. The US retaliates with its full Minuteman III and Trident force against Chinese command centers, missile silos, and major cities.\n\nThe exchange involves 800–1,200 warheads on both sides. Major US cities (Los Angeles, San Francisco, Seattle, Portland, San Diego) are hit. On the Chinese side, Beijing, Shanghai, Guangzhou, and all military-industrial centers are destroyed. Japan, South Korea, and Taiwan suffer from fallout and secondary strikes. The global economy, deeply interlinked with both nations, collapses instantly.",
          ru: "Затяжной обычный конфликт в Тихом океане перерастает в стратегический ядерный обмен. Китай наносит внезапный залп МБР по городам западного побережья США и военно-морским базам. США отвечают полной силой Minuteman III и Trident по китайским командным центрам, шахтам ракет и крупным городам.\n\nОбмен включает 800–1 200 боеголовок с обеих сторон. Крупные города США (Лос-Анджелес, Сан-Франциско, Сиэтл, Портленд, Сан-Диего) поражены. С китайской стороны уничтожены Пекин, Шанхай, Гуанчжоу и все военно-промышленные центры. Япония, Южная Корея и Тайвань страдают от радиоактивных осадков и вторичных ударов. Глобальная экономика, глубоко связанная с обеими странами, мгновенно рушится."
        },
        participants: { en: "USA, China, Japan, South Korea, Taiwan, Australia, potentially Russia and India", ru: "США, Китай, Япония, Южная Корея, Тайвань, Австралия, потенциально Россия и Индия" },
        damage: { en: "Massive — all major US West Coast cities destroyed. 60% of Chinese urban infrastructure demolished. Global economic collapse.", ru: "Масштабные — все крупные города западного побережья США уничтожены. 60% китайской городской инфраструктуры разрушено. Глобальный экономический коллапс." },
        casualties: { en: "200–400 million immediate deaths. Up to 1 billion total in the first year.", ru: "200–400 миллионов мгновенных смертей. До 1 миллиарда в первый год." },
        planetary: { en: "Severe — 30–80 Tg of soot. Global temperature drop of 3–5°C. Widespread ozone depletion. Global famine.", ru: "Тяжёлое — 30–80 Тг сажи. Падение температуры на 3–5°C. Массовое разрушение озона. Глобальный голод." },
        survival: { en: "Low in the Northern Hemisphere. Moderate in the Southern Hemisphere.", ru: "Низкая в Северном полушарии. Умеренная в Южном." },
        survivalActions: {
          en: "— For Americans: evacuate ALL West Coast cities (Los Angeles, San Francisco, Seattle, Portland, San Diego); head inland at least 500 km to Nevada, Arizona, Utah, Colorado; avoid military bases, ports, and command centers\n— For Chinese: evacuate ALL major cities (Beijing, Shanghai, Guangzhou, Shenzhen, Tianjin, Nanjing); head to rural western China (Gansu, Qinghai, Inner Mongolia); avoid military industrial centers\n— For Japanese and South Koreans: evacuate ALL coastal cities — fallout from US-China exchange will drift over the Pacific; head to mountainous inland areas\n— For everyone: stockpile 6+ months of supplies; prepare for nuclear winter (3–5°C global temperature drop); the global economy will collapse instantly",
          ru: "— Для американцев: покинуть ВСЕ города западного побережья (Лос-Анджелес, Сан-Франциско, Сиэтл, Портленд, Сан-Диего); двигаться вглубь материка минимум на 500 км в Неваду, Аризону, Юту, Колорадо; избегать военных баз\n— Для китайцев: покинуть ВСЕ крупные города (Пекин, Шанхай, Гуанчжоу, Шэньчжэнь, Тяньцзинь, Нанкин); направляться в сельские западные провинции (Ганьсу, Цинхай, Внутренняя Монголия)\n— Для японцев и южнокорейцев: покинуть ВСЕ прибрежные города — осадки дрейфуют над Тихим океаном; направляться в горные внутренние районы\n— Для всех: создать запас на 6+ месяцев; готовиться к ядерной зиме (падение температуры на 3–5°C); глобальная экономика рухнет мгновенно",
        },
        probability: { en: "Very Low (1–3%)", ru: "Очень низкая (1–3%)" },
        probabilityLabel: { en: "Very Low", ru: "Очень низкая" },
        probabilitySource: "https://csis.org",
        harbingers: {
          en: "— Prolonged trade embargo and naval blockade\n— China tests ICBMs with multiple reentry vehicles\n— US Pacific Command relocates to Guam and Hawaii\n— China conscripts reservists in unprecedented numbers\n— US activates civil defense protocols\n— Global stock markets crash, nations begin hoarding resources",
          ru: "— Затяжное торговое эмбарго и морская блокада\n— Испытания Китаем МБР с разделяющимися головными частями\n— Перемещение Тихоокеанского командования США на Гуам и Гавайи\n— Беспрецедентный призыв резервистов в Китае\n— Активация протоколов гражданской обороны США\n— Обвал мировых фондовых рынков, начало накопления ресурсов",
        },
        source: "https://csis.org",
      },
    ],
  },
  {
    id: "india-pakistan",
    name: { en: "India vs Pakistan", ru: "Индия против Пакистана" },
    scenarios: [
      {
        id: "india-pakistan-kashmir",
        name: { en: "Kashmir Escalation", ru: "Эскалация вокруг Кашмира" },
        description: {
          en: "A terrorist attack traced to Pakistan-based groups triggers Indian conventional retaliation across the Line of Control. Pakistan, unable to match Indian conventional superiority, threatens nuclear escalation. India strikes suspected Pakistani nuclear storage sites with conventional missiles. Pakistan responds with tactical nuclear weapons against Indian forward army bases.\n\nIndia retaliates with airburst nuclear weapons over Pakistani cities, warning civilians to evacuate. Pakistan launches its remaining nuclear arsenal — primarily shorter-range missiles — at Indian cities. The exchange is limited to 80–120 warheads but causes massive civilian casualties in one of the most densely populated regions on Earth.",
          ru: "Теракт, совершённый базирующимися в Пакистане группами, провоцирует обычное возмездие Индии через Линию контроля. Пакистан, не способный противостоять индийскому превосходству в обычных вооружениях, угрожает ядерной эскалацией. Индия наносит удары обычными ракетами по предполагаемым пакистанским ядерным хранилищам. Пакистан отвечает тактическим ядерным оружием по передовым индийским военным базам.\n\nИндия наносит ответный удар воздушными ядерными взрывами над пакистанскими городами, предупреждая гражданских об эвакуации. Пакистан запускает оставшийся ядерный арсенал — в основном ракеты меньшей дальности — по индийским городам. Обмен ограничен 80–120 боеголовками, но вызывает массовые жертвы среди гражданского населения в одном из самых густонаселённых регионов Земли."
        },
        participants: { en: "India, Pakistan, China (potential intervention on Pakistan's side), USA (diplomatic)", ru: "Индия, Пакистан, Китай (возможное вмешательство на стороне Пакистана), США (дипломатия)" },
        damage: { en: "Severe regional — major cities in Punjab (Lahore, Amritsar, Jammu) destroyed. Agricultural heartland of both nations contaminated.", ru: "Тяжёлые региональные — крупные города Пенджаба (Лахор, Амритсар, Джамму) уничтожены. Сельскохозяйственный центр обеих стран заражён." },
        casualties: { en: "10–30 million immediate deaths. 50–80 million total from famine and radiation.", ru: "10–30 миллионов мгновенных смертей. 50–80 миллионов общих потерь от голода и радиации." },
        planetary: { en: "Moderate — 5–15 Tg of soot. Regional climate effects. Monsoon disruption causing additional famine across South Asia.", ru: "Умеренное — 5–15 Тг сажи. Региональные климатические эффекты. Нарушение муссонов вызывает дополнительный голод в Южной Азии." },
        survival: { en: "Low in South Asia. Moderate in the Middle East and Southeast Asia. High elsewhere.", ru: "Низкая в Южной Азии. Умеренная на Ближнем Востоке и в Юго-Восточной Азии. Высокая в остальном мире." },
        survivalActions: {
          en: "— For Indians in Punjab: evacuate Amritsar, Jammu, and border areas immediately; head south toward Delhi or into the Himalayas\n— For Pakistanis in Punjab: evacuate Lahore, Rawalpindi, Islamabad; head south toward Karachi or north into the mountains\n— For both sides: avoid military installations, air force bases, and the Line of Control; the agricultural heartland of both nations will be contaminated — do NOT drink well water for at least 6 months\n— Stockpile 2–3 months of supplies; if you are outside blast zones, you have a good chance of survival",
          ru: "— Для индийцев в Пенджабе: немедленно покинуть Амритсар, Джамму и приграничные зоны; направляться на юг к Дели или в Гималаи\n— Для пакистанцев в Пенджабе: покинуть Лахор, Равалпинди, Исламабад; направляться на юг к Карачи или на север в горы\n— Для обеих сторон: избегать военных объектов, авиабаз и Линии контроля; сельскохозяйственный центр обеих стран будет заражён — НЕ пить колодезную воду минимум 6 месяцев\n— Создать запас припасов на 2–3 месяца; если вы вне зон поражения, у вас хорошие шансы на выживание",
        },
        probability: { en: "Medium (15–25%)", ru: "Средняя (15–25%)" },
        probabilityLabel: { en: "Medium", ru: "Средняя" },
        probabilitySource: "https://sipri.org",
        harbingers: {
          en: "— Major terrorist attack in India with >100 casualties\n— India mobilizes troops along the Line of Control\n— Pakistan places its nuclear arsenal on high alert\n— India test-fires its Agni missile series\n— Massive population displacement in Punjab and Kashmir\n— China increases patrols on India's northern border",
          ru: "— Крупный теракт в Индии с более чем 100 жертвами\n— Мобилизация индийских войск вдоль Линии контроля\n— Пакистан приводит ядерный арсенал в повышенную готовность\n— Индия проводит испытания ракет серии «Агни»\n— Массовое перемещение населения в Пенджабе и Кашмире\n— Усиление патрулирования Китаем северной границы Индии",
        },
        source: "https://sipri.org",
      },
    ],
  },
  {
    id: "israel-iran",
    name: { en: "Israel vs Iran", ru: "Израиль против Ирана" },
    scenarios: [
      {
        id: "israel-iran-nuclear",
        name: { en: "Middle East Nuclear Exchange", ru: "Ядерный обмен на Ближнем Востоке" },
        description: {
          en: "Israel, facing existential threat from Iran's advancing nuclear program and conventional missile barrages, launches a preemptive nuclear strike against Iranian nuclear facilities at Natanz, Fordow, and Isfahan. Iran responds with its own nuclear weapons (if developed) or with massive conventional missile strikes, potentially including chemical weapons. Israel strikes Tehran and other major cities with a small number of nuclear weapons.\n\nThe exchange is relatively small — perhaps 10–30 nuclear detonations — but the densely populated Middle East suffers catastrophic civilian casualties. Fallout spreads across Iraq, Turkey, and the Gulf states. Global oil markets collapse. A humanitarian crisis of unprecedented scale unfolds across the region.",
          ru: "Израиль, столкнувшись с экзистенциальной угрозой от развивающейся ядерной программы Ирана и массированных обычных ракетных обстрелов, наносит превентивный ядерный удар по иранским ядерным объектам в Натанзе, Фордо и Исфахане. Иран отвечает собственным ядерным оружием (если оно разработано) или массированными обычными ракетными ударами, потенциально включая химическое оружие. Израиль наносит удары по Тегерану и другим крупным городам небольшим количеством ядерных боезарядов.\n\nОбмен относительно невелик — возможно, 10–30 ядерных взрывов, — но густонаселённый Ближний Восток страдает от катастрофических гражданских потерь. Радиоактивные осадки распространяются по Ираку, Турции и государствам Персидского залива. Глобальные нефтяные рынки рушатся. Гуманитарный кризис беспрецедентного масштаба разворачивается по всему региону."
        },
        participants: { en: "Israel, Iran, potentially Hezbollah, USA (support for Israel), Gulf states (fallout contamination)", ru: "Израиль, Иран, потенциально Хезболла, США (поддержка Израиля), страны Персидского залива (радиоактивное заражение)" },
        damage: { en: "Severe regional — Tehran partially destroyed, Iranian nuclear facilities eliminated. Major Israeli cities suffer conventional damage.", ru: "Тяжёлые региональные — Тегеран частично разрушен, ядерные объекты Ирана уничтожены. Крупные города Израиля страдают от обычных ударов." },
        casualties: { en: "5–15 million immediate deaths. 20–40 million from radiation, famine, and regional collapse.", ru: "5–15 миллионов мгновенных смертей. 20–40 миллионов от радиации, голода и регионального коллапса." },
        planetary: { en: "Moderate — 3–8 Tg of soot from oil fires. Regional climate effects and severe ozone depletion over the Middle East.", ru: "Умеренное — 3–8 Тг сажи от пожаров на нефтяных объектах. Региональные климатические эффекты и серьёзное разрушение озона над Ближним Востоком." },
        survival: { en: "Very low in Israel and Iran. Low in neighboring countries. High in Europe and the Americas.", ru: "Очень низкая в Израиле и Иране. Низкая в соседних странах. Высокая в Европе и Америке." },
        survivalActions: {
          en: "— For Israelis: evacuate Tel Aviv, Jerusalem, Haifa, Beersheba; head to the Negev desert away from military bases; avoid nuclear facility areas (Dimona)\n— For Iranians: evacuate Tehran, Isfahan, Shiraz, Tabriz, Mashhad; head to rural Caspian coast (away from Natanz and Fordow nuclear sites)\n— For neighbors (Iraq, Turkey, Gulf states): evacuate Baghdad, Ankara, Istanbul, Dubai, Doha — fallout will spread across the region\n— Global oil markets will collapse — prepare for economic breakdown regardless of where you live\n— Stockpile 2–3 months of supplies; radiation from damaged nuclear facilities will be severe and long-lasting",
          ru: "— Для израильтян: покинуть Тель-Авив, Иерусалим, Хайфу, Беэр-Шеву; направляться в пустыню Негев вдали от военных баз; избегать района ядерного центра (Димона)\n— Для иранцев: покинуть Тегеран, Исфахан, Шираз, Тебриз, Мешхед; направляться на сельское побережье Каспия (вдали от Натанза и Фордо)\n— Для соседей (Ирак, Турция, страны Залива): покинуть Багдад, Анкару, Стамбул, Дубай, Доху — осадки распространятся по всему региону\n— Глобальные нефтяные рынки рухнут — готовьтесь к экономическому коллапсу независимо от места жительства\n— Создать запас припасов на 2–3 месяца; радиация от повреждённых ядерных объектов будет серьёзной и долговременной",
        },
        probability: { en: "Medium (10–20%)", ru: "Средняя (10–20%)" },
        probabilityLabel: { en: "Medium", ru: "Средняя" },
        probabilitySource: "https://iaea.org",
        harbingers: {
          en: "— Iran announces uranium enrichment to 90%\n— IAEA inspectors expelled from Iran\n— Israel conducts mass civil defense drills\n— US deploys THAAD batteries to Israel\n— Iran tests ballistic missiles with live warheads\n— Hezbollah and Hamas mobilize along Israel's borders\n— Global oil prices triple within weeks",
          ru: "— Иран объявляет об обогащении урана до 90%\n— Инспекторы МАГАТЭ высланы из Ирана\n— Израиль проводит массовые учения гражданской обороны\n— США развёртывают батареи THAAD в Израиле\n— Иран испытывает баллистические ракеты с боевыми зарядами\n— Хезболла и ХАМАС мобилизуются вдоль границ Израиля\n— Цены на нефть утраиваются за несколько недель",
        },
        source: "https://iaea.org",
      },
    ],
  },
  {
    id: "north-korea",
    name: { en: "North Korea vs South Korea / US", ru: "КНДР против Южной Кореи / США" },
    scenarios: [
      {
        id: "nk-sk-collapse",
        name: { en: "North Korean Regime Collapse Scenario", ru: "Сценарий коллапса режима КНДР" },
        description: {
          en: "North Korea, facing internal collapse or an imminent US-South Korea preemptive strike, launches a desperate nuclear attack. Multiple Hwasong-series missiles are fired at Seoul, Tokyo, and US military bases in Japan and Guam. South Korea is devastated within minutes — Seoul, with 25 million people in the metropolitan area, suffers catastrophic losses.\n\nThe US responds with a full strategic strike against North Korea, eliminating all known military and leadership targets. The exchange is one-sided but the human toll is staggering. Fallout from North Korean surface bursts contaminates the Korean Peninsula and parts of Japan for decades. China and Russia face a refugee crisis and radioactive contamination along their borders.",
          ru: "КНДР, столкнувшись с внутренним коллапсом или неминуемым упреждающим ударом США и Южной Кореи, наносит отчаянный ядерный удар. Множество ракет серии «Хвасон» запущены по Сеулу, Токио и американским военным базам в Японии и на Гуаме. Южная Корея разрушена за считанные минуты — Сеул с 25 миллионами человек в столичном регионе несёт катастрофические потери.\n\nСША отвечают полным стратегическим ударом по КНДР, уничтожая все известные военные цели и руководство. Обмен односторонний, но человеческие потери ошеломляют. Радиоактивные осадки от наземных взрывов КНДР загрязняют Корейский полуостров и части Японии на десятилетия. Китай и Россия сталкиваются с кризисом беженцев и радиоактивным загрязнением вдоль своих границ."
        },
        participants: { en: "North Korea, South Korea, USA, Japan, China (fallout contamination), Russia (fallout contamination)", ru: "КНДР, Южная Корея, США, Япония, Китай (радиоактивное заражение), Россия (радиоактивное заражение)" },
        damage: { en: "Catastrophic regional — Seoul destroyed. Major damage to Tokyo, Osaka. US bases in Japan and Guam severely damaged.", ru: "Катастрофические региональные — Сеул уничтожен. Серьёзные разрушения в Токио, Осаке. Американские базы в Японии и на Гуаме сильно повреждены." },
        casualties: { en: "10–30 million immediate deaths in South Korea and Japan. 50 million total casualties.", ru: "10–30 миллионов мгновенных смертей в Южной Корее и Японии. 50 миллионов общих потерь." },
        planetary: { en: "Moderate — 5–10 Tg of soot. Regional climate effects in East Asia. Severe local fallout.", ru: "Умеренное — 5–10 Тг сажи. Региональные климатические эффекты в Восточной Азии. Серьёзное локальное радиоактивное заражение." },
        survival: { en: "Very low in South Korea and Japan. Low in North Korea. Moderate in China and Russia's Far East. High elsewhere.", ru: "Очень низкая в Южной Корее и Японии. Низкая в КНДР. Умеренная в Китае и на Дальнем Востоке России. Высокая в остальном мире." },
        survivalActions: {
          en: "— For South Koreans: if you are in Seoul, you have 5–15 minutes — leave NOW; evacuate ALL major cities (Busan, Daegu, Incheon, Gwangju); head to rural southern Korea or attempt evacuation to Japan\n— For North Koreans: evacuate Pyongyang, Nampo, Wonsan — your own government is launching missiles from near these cities, making them retaliatory targets; head to rural northern areas near the Chinese border\n— For Japanese: evacuate Tokyo, Osaka, Yokohama — US bases in Japan will be targeted; head to rural northern Honshu or Hokkaido\n— For everyone: fallout from North Korean surface bursts will contaminate the Korean Peninsula for decades; stockpile iodine pills, Geiger counters, and radiation protection",
          ru: "— Для южнокорейцев: если вы в Сеуле, у вас 5–15 минут — УХОДИТЕ СЕЙЧАС ЖЕ; покинуть ВСЕ крупные города (Пусан, Тэгу, Инчхон, Кванджу); направляться в сельские южные районы или попытаться эвакуироваться в Японию\n— Для северокорейцев: покинуть Пхеньян, Нампхо, Вонсан — ваше собственное правительство запускает ракеты рядом с этими городами, делая их целями возмездия; направляться в сельские северные районы у границы с Китаем\n— Для японцев: покинуть Токио, Осаку, Йокогаму — базы США в Японии будут целями; направляться в сельский северный Хонсю или Хоккайдо\n— Для всех: осадки от северокорейских наземных взрывов заразят Корейский полуостров на десятилетия; запастись йодом, дозиметрами и радиационной защитой",
        },
        probability: { en: "Low (5–10%)", ru: "Низкая (5–10%)" },
        probabilityLabel: { en: "Low", ru: "Низкая" },
        probabilitySource: "https://38north.org",
        harbingers: {
          en: "— Signs of internal unrest in North Korea\n— Mass defections of North Korean elites\n— Kim Jong Un disappears from public view\n— South Korea and US conduct joint readiness drills\n— Japan deploys missile defense to full capacity\n— UN security council emergency sessions\n— Chinese military buildup on the North Korean border",
          ru: "— Признаки внутренних волнений в КНДР\n— Массовое бегство северокорейских элит\n— Исчезновение Ким Чен Ына из публичного поля\n— Совместные учебные тревоги Южной Кореи и США\n— Япония приводит систему ПРО в полную готовность\n— Экстренные заседания Совбеза ООН\n— Наращивание китайских войск на границе с КНДР",
        },
        source: "https://38north.org",
      },
    ],
  },
  {
    id: "india-china",
    name: { en: "India vs China", ru: "Индия против Китая" },
    scenarios: [
      {
        id: "india-china-border",
        name: { en: "Border Escalation to Nuclear Exchange", ru: "Приграничная эскалация с ядерным обменом" },
        description: {
          en: "A major border clash in the Himalayas escalates as both nations mobilize millions of troops. China, facing a two-front conventional challenge (India and Taiwan scenario), uses tactical nuclear weapons to destroy Indian military infrastructure in the border regions. India retaliates against Chinese military bases in Tibet and Xinjiang.\n\nThe exchange remains limited to tactical and theater weapons. Neither side targets cities in the initial phase. However, the use of nuclear weapons at high altitudes causes electromagnetic pulse effects across the Himalayan region. China's ability to project power is severely diminished. India's northern military forces are devastated. Both sides eventually de-escalate due to international pressure and mutual fear of city strikes.",
          ru: "Крупный приграничный конфликт в Гималаях перерастает в ядерный по мере того, как обе стороны мобилизуют миллионы военнослужащих. Китай, столкнувшись с обычным вызовом на двух фронтах (Индия и тайваньский сценарий), применяет тактическое ядерное оружие для уничтожения индийской военной инфраструктуры в приграничных районах. Индия наносит ответный удар по китайским военным базам в Тибете и Синьцзяне.\n\nОбмен остаётся ограниченным тактическим и театральным оружием. Ни одна из сторон не нацеливается на города в начальной фазе. Однако применение ядерного оружия на большой высоте вызывает электромагнитные импульсные эффекты по всему Гималайскому региону. Способность Китая проецировать силу серьёзно ослаблена. Северные военные силы Индии уничтожены. Обе стороны в конечном счёте деэскалируют под международным давлением и из-за взаимного страха ударов по городам."
        },
        participants: { en: "India, China, potential involvement of Pakistan on China's side, Russia (mediator)", ru: "Индия, Китай, возможное участие Пакистана на стороне Китая, Россия (посредник)" },
        damage: { en: "Regional — military infrastructure in Tibet, Xinjiang, and northern India destroyed. Border regions uninhabitable due to radiation.", ru: "Региональные — военная инфраструктура в Тибете, Синьцзяне и северной Индии уничтожена. Приграничные регионы непригодны для жизни из-за радиации." },
        casualties: { en: "500,000–2 million immediate deaths, primarily military. Civilian casualties from fallout.", ru: "500 000–2 миллиона мгновенных смертей, в основном военных. Гражданские потери от радиоактивных осадков." },
        planetary: { en: "Minimal. Limited high-altitude detonations cause some EMP effects and local fallout.", ru: "Минимальное. Ограниченные высотные подрывы вызывают локальные ЭМИ-эффекты и местные осадки." },
        survival: { en: "High globally. Moderate in northern India and western China.", ru: "Высокая глобально. Умеренная в северной Индии и западном Китае." },
        survivalActions: {
          en: "— For Indians in border regions: evacuate Ladakh, Arunachal Pradesh, Uttarakhand, Sikkim; head southward away from the Himalayan border; avoid military bases and forward deployment areas\n— For Chinese in border regions: evacuate Tibet (Lhasa, Shigatse) and Xinjiang (Kashgar, Hotan); head eastward away from the border; avoid PLA military installations\n— For both sides: the exchange is limited to tactical weapons — if you are 100+ km from the border, you are likely safe; avoid high-altitude areas where EMP may disrupt communications\n— Listen for ceasefire announcements — this scenario is likely to de-escalate quickly",
          ru: "— Для индийцев в приграничных регионах: покинуть Ладакх, Аруначал-Прадеш, Уттаракханд, Сикким; двигаться на юг от гималайской границы; избегать военных баз\n— Для китайцев в приграничных регионах: покинуть Тибет (Лхаса, Шигадзе) и Синьцзян (Кашгар, Хотан); двигаться на восток от границы; избегать военных объектов НОАК\n— Для обеих сторон: обмен ограничен тактическим оружием — если вы в 100+ км от границы, вы в безопасности; избегать высокогорных районов, где ЭМИ может нарушить связь\n— Слушать объявления о прекращении огня — этот сценарий вероятно деэскалирует быстро",
        },
        probability: { en: "Low (3–8%)", ru: "Низкая (3–8%)" },
        probabilityLabel: { en: "Low", ru: "Низкая" },
        probabilitySource: "https://www.sipri.org",
        harbingers: {
          en: "— Construction of military infrastructure along the LAC\n— India deploys BrahMos missile batteries to the northern border\n— China builds new airstrips in Tibet and Xinjiang\n— Repeated border incursions and skirmishes\n— India and China conduct military exercises near disputed areas\n— Pakistan mobilizes along the Line of Control (potential second front)",
          ru: "— Строительство военной инфраструктуры вдоль LAC\n— Развёртывание Индией ракетных батарей BrahMos на северной границе\n— Строительство Китаем новых взлётно-посадочных полос в Тибете и Синьцзяне\n— Повторяющиеся вторжения и стычки на границе\n— Проведение Индией и Китаем военных учений вблизи спорных территорий\n— Мобилизация Пакистана вдоль Линии контроля",
        },
        source: "https://www.sipri.org",
      },
    ],
  },
  {
    id: "russia-japan",
    name: { en: "Russia vs Japan", ru: "Россия против Японии" },
    scenarios: [
      {
        id: "russia-japan-kuril",
        name: { en: "Kuril Islands Conflict", ru: "Конфликт из-за Курильских островов" },
        description: {
          en: "Japan, emboldened by US security guarantees and facing domestic political pressure, decides to forcibly reclaim the Southern Kuril Islands (Northern Territories). A Japanese naval task force lands marines on Kunashir and Iturup. Russia, caught off guard initially, retaliates with conventional strikes against Japanese naval assets in the Sea of Okhotsk.\n\nThe conflict escalates as Japan strikes Russian military bases in Sakhalin and the Kamchatka Peninsula with long-range cruise missiles. Russia, unable to match Japan's naval superiority in conventional terms, threatens nuclear escalation. A single tactical nuclear weapon is detonated over the Sea of Japan as a warning. The US, bound by the Japan-US Security Treaty, faces a dilemma: intervene directly and risk nuclear war, or pressure Japan to accept a ceasefire.\n\nDiplomatic resolution is reached through Chinese mediation, with the Kurils placed under UN administration. But the nuclear taboo has been broken in East Asia.",
          ru: "Япония, воодушевлённая гарантиями безопасности США и под давлением внутренней политики, решает силой вернуть южные Курильские острова. Японская морская десантная группа высаживается на Кунашире и Итурупе. Россия, застигнутая врасплох, наносит ответные удары обычными средствами по японским военно-морским силам в Охотском море.\n\nКонфликт обостряется: Япония наносит удары крылатыми ракетами по российским военным базам на Сахалине и Камчатке. Россия, неспособная сравниться с японским морским превосходством в обычных вооружениях, угрожает ядерной эскалацией. Один тактический ядерный заряд взрывается над Японским морем как предупреждение. США, связанные Договором безопасности с Японией, оказываются перед дилеммой: вмешаться напрямую с риском ядерной войны или принудить Японию к прекращению огня.\n\nДипломатическое разрешение достигается через посредничество Китая: Курилы передаются под управление ООН. Но ядерное табу в Восточной Азии нарушено."
        },
        participants: { en: "Russia, Japan, USA (security treaty dilemma), China (mediator)", ru: "Россия, Япония, США (дилемма договора безопасности), Китай (посредник)" },
        damage: { en: "Regional — military facilities in the Kurils, Sakhalin, Kamchatka, and northern Japan destroyed. Strategic infrastructure in the Sea of Okhotsk affected.", ru: "Региональные — военные объекты на Курилах, Сахалине, Камчатке и северной Японии уничтожены. Стратегическая инфраструктура в Охотском море затронута." },
        casualties: { en: "50,000–200,000 deaths, primarily military and naval personnel. Civilian casualties from cruise missile strikes and nuclear fallout warning zone.", ru: "50 000–200 000 смертей, в основном военных и моряков. Гражданские потери от ударов крылатыми ракетами и зоны предупреждения о ядерных осадках." },
        planetary: { en: "Minimal. A single tactical detonation at sea produces limited fallout. No significant climate impact.", ru: "Минимальное. Один тактический взрыв в море даёт ограниченные осадки. Значимого климатического эффекта нет." },
        survival: { en: "High globally. Moderate in the Russian Far East and northern Japan.", ru: "Высокая глобально. Умеренная на Дальнем Востоке России и в северной Японии." },
        survivalActions: {
          en: "— For Russians: evacuate the Kuril Islands, Sakhalin, and Kamchatka — these are the primary conflict zone; head to mainland Russia (Khabarovsk, Vladivostok); avoid Pacific Fleet bases\n— For Japanese: evacuate Hokkaido (especially near the Sea of Okhotsk coast); head to southern Japan (Honshu, Kyushu); avoid JSDF bases in northern Japan\n— The nuclear warning detonation at sea creates limited fallout risk — avoid the Sea of Okhotsk coastline for 48 hours\n— Stockpile 2–4 weeks of supplies — shipping disruption in the Sea of Okhotsk may affect supply chains",
          ru: "— Для россиян: покинуть Курильские острова, Сахалин и Камчатку — это основная зона конфликта; направляться на материковую часть России (Хабаровск, Владивосток); избегать баз Тихоокеанского флота\n— Для японцев: покинуть Хоккайдо (особенно побережье Охотского моря); направляться в южную Японию (Хонсю, Кюсю); избегать баз Сил самообороны в северной Японии\n— Предупредительный ядерный взрыв в море создаёт ограниченный риск осадков — избегать побережья Охотского моря 48 часов\n— Создать запас припасов на 2–4 недели — нарушение судоходства в Охотском море может повлиять на поставки",
        },
        probability: { en: "Low (3–8%)", ru: "Низкая (3–8%)" },
        probabilityLabel: { en: "Low", ru: "Низкая" },
        probabilitySource: "https://www.csis.org",
        harbingers: {
          en: "— Japan announces revision of Article 9 of its constitution\n— Russia fortifies Kuril Islands with new missile systems\n— US deploys intermediate-range missiles to Japan\n— Increased Russian naval activity in the Sea of Okhotsk\n— Japan acquires strike-capable cruise missiles\n— Diplomatic negotiations on Kurils break down permanently",
          ru: "— Япония объявляет о пересмотре статьи 9 конституции\n— Россия укрепляет Курильские острова новыми ракетными системами\n— США размещают ракеты средней дальности в Японии\n— Усиление российской военно-морской активности в Охотском море\n— Япония приобретает ударные крылатые ракеты\n— Окончательный срыв дипломатических переговоров по Курилам",
        },
        source: "https://www.sipri.org",
      },
    ],
  },
  {
    id: "russia-china",
    name: { en: "Russia vs China", ru: "Россия против Китая" },
    scenarios: [
      {
        id: "russia-china-central-asia",
        name: { en: "Central Asian Border Escalation", ru: "Эскалация в Центральной Азии" },
        description: {
          en: "A long-term scenario set in the 2030s. As China's population and resource demands grow, Beijing exerts increasing pressure on Russia's resource-rich but sparsely populated Siberian and Far Eastern regions. Chinese migration into Russian territory accelerates, and border skirmishes erupt over water resources in the Altai region and along the Amur River.\n\nRussia, weakened by Western sanctions and demographic decline, struggles to project power eastward. China issues an ultimatum demanding 'special economic zones' in Russian territory. When Russia refuses, China launches precision strikes against Russian military infrastructure in Siberia: early warning radars, air bases, and command centers — using conventional weapons only, avoiding civilian casualties deliberately.\n\nRussia, facing conventional defeat in Asia, threatens tactical nuclear use. China responds that any nuclear use will result in a full strategic response. The world watches in horror as the two largest nuclear powers face off. Diplomatic intervention by India and the US brokers a freeze on hostilities, but the underlying tensions remain.",
          ru: "Долгосрочный сценарий, разворачивающийся в 2030-х годах. По мере роста населения и потребностей Китая в ресурсах Пекин оказывает всё большее давление на богатые ресурсами, но малонаселённые сибирские и дальневосточные регионы России. Китайская миграция на российскую территорию ускоряется, пограничные стычки вспыхивают из-за водных ресурсов на Алтае и вдоль Амура.\n\nРоссия, ослабленная западными санкциями и демографическим спадом, с трудом проецирует силу на восток. Китай выдвигает ультиматум, требуя «особых экономических зон» на российской территории. Когда Россия отказывается, Китай наносит высокоточные удары по российской военной инфраструктуре в Сибири: радарам раннего предупреждения, авиабазам и командным центрам — используя только обычные вооружения, намеренно избегая жертв среди гражданских.\n\nРоссия, столкнувшись с обычным поражением в Азии, угрожает применением тактического ядерного оружия. Китай отвечает, что любой ядерный удар приведёт к полному стратегическому ответу. Мир с ужасом наблюдает, как две крупнейшие ядерные державы противостоят друг другу. Дипломатическое вмешательство Индии и США позволяет заморозить боевые действия, но лежащие в основе напряжённости сохраняются."
        },
        participants: { en: "Russia, China, India (mediator), USA (mediator), Kazakhstan (buffer state)", ru: "Россия, Китай, Индия (посредник), США (посредник), Казахстан (буферное государство)" },
        damage: { en: "Regional — military infrastructure in Siberia, the Russian Far East, and Xinjiang destroyed. Limited collateral damage to cities.", ru: "Региональные — военная инфраструктура в Сибири, на Дальнем Востоке России и в Синьцзяне уничтожена. Ограниченный сопутствующий ущерб городам." },
        casualties: { en: "100,000–500,000 mostly military and border personnel deaths. Limited civilian casualties from precision strikes.", ru: "100 000–500 000 смертей, в основном военных и пограничников. Ограниченные гражданские потери от высокоточных ударов." },
        planetary: { en: "Minimal. Conflict remains below the nuclear threshold. Climate impact negligible.", ru: "Минимальное. Конфликт остаётся ниже ядерного порога. Климатическое воздействие незначительно." },
        survival: { en: "High globally. Moderate in border regions of Russia and China.", ru: "Высокая глобально. Умеренная в приграничных регионах России и Китая." },
        survivalActions: {
          en: "— For Russians: evacuate Altai, Amur region, Zabaikalsky Krai — the border conflict zone; head to central Russia (Novosibirsk, Krasnoyarsk); avoid military installations along the Chinese border\n— For Chinese: evacuate Xinjiang (Kashgar, Urumqi) and Inner Mongolia (Hohhot); head to central China (Xi'an, Chengdu, Wuhan); avoid PLA border bases\n— No nuclear detonations are expected — the primary risks are conventional warfare, power disruptions, and supply chain breaks\n— Stockpile 1–2 months of supplies; cross-border trade will freeze; international mediation may lead to ceasefire within weeks",
          ru: "— Для россиян: покинуть Алтай, Приамурье, Забайкалье — зону приграничного конфликта; направляться в центральную Россию (Новосибирск, Красноярск); избегать военных объектов вдоль китайской границы\n— Для китайцев: покинуть Синьцзян (Кашгар, Урумчи) и Внутреннюю Монголию (Хух-Хото); направляться в центральный Китай (Сиань, Чэнду, Ухань); избегать приграничных баз НОАК\n— Ядерных взрывов не ожидается — основные риски: обычные боевые действия, отключения электричества и нарушение поставок\n— Создать запас припасов на 1–2 месяца; трансграничная торговля заморозится; международное посредничество может привести к прекращению огня в течение недель",
        },
        probability: { en: "Low (2–5%)", ru: "Низкая (2–5%)" },
        probabilityLabel: { en: "Low", ru: "Низкая" },
        probabilitySource: "https://www.rand.org",
        harbingers: {
          en: "— China surpasses Russia in military spending by 5:1 ratio\n— Chinese investment in Siberia and the Far East becomes economic leverage\n— Repeated border incidents in the Altai and Amur regions\n— Russia reopens Soviet-era military bases along the Chinese border\n— China begins water diversion projects affecting Siberian rivers\n— Sino-Russian strategic partnership shows public cracks",
          ru: "— Китай превосходит Россию по военным расходам в 5:1\n— Китайские инвестиции в Сибирь и Дальний Восток становятся экономическим рычагом\n— Повторяющиеся пограничные инциденты на Алтае и Амуре\n— Россия переоткрывает советские военные базы вдоль китайской границы\n— Китай начинает проекты отвода воды, затрагивающие сибирские реки\n— В китайско-российском стратегическом партнёрстве появляются публичные трещины",
        },
        source: "https://www.csis.org",
      },
    ],
  },
  {
    id: "russia-turkey",
    name: { en: "Russia vs Turkey", ru: "Россия против Турции" },
    scenarios: [
      {
        id: "russia-turkey-black-sea",
        name: { en: "Black Sea / Caucasus Confrontation", ru: "Черноморско-кавказское противостояние" },
        description: {
          en: "A crisis erupts over competing interests in the Black Sea and the Caucasus. Turkey, a NATO member, asserts control over the Bosphorus and Dardanelles, blocking Russian naval access to the Mediterranean. Russia retaliates by reinforcing its Black Sea Fleet and striking Turkish radar installations on the Black Sea coast. The conflict quickly expands into a proxy war in the Caucasus: Turkey supports Azerbaijan in a renewed offensive in Nagorno-Karabakh, while Russia backs Armenia.\n\nA Turkish F-16 shoots down a Russian Su-34 over the Black Sea. Russia responds by sinking a Turkish frigate with anti-ship missiles. Turkey invokes NATO Article 5, but NATO members hesitate — a direct confrontation with Russia over a regional Black Sea dispute fractures the alliance. Hungary and Slovakia block full Article 5 activation. The US and Germany provide defensive support to Turkey but refuse offensive operations.\n\nRussia, seeing NATO's indecision, deploys tactical nuclear weapons to Kaliningrad and Syria as a signal. Turkey, conventionally superior in the region but lacking nuclear weapons, is forced to negotiate. A ceasefire freezes the conflict: the Black Sea straits remain under Turkish control, but Russia secures basing rights in Abkhazia and expands its Syrian foothold.",
          ru: "Кризис вспыхивает из-за противоборствующих интересов в Чёрном море и на Кавказе. Турция, член НАТО, устанавливает контроль над Босфором и Дарданеллами, блокируя доступ российского флота в Средиземное море. Россия отвечает усилением Черноморского флота и ударами по турецким радиолокационным установкам на черноморском побережье. Конфликт быстро перерастает в прокси-войну на Кавказе: Турция поддерживает Азербайджан в новом наступлении в Нагорном Карабахе, Россия — Армению.\n\nТурецкий F-16 сбивает российский Су-34 над Чёрным морем. Россия в ответ топит турецкий фрегат противокорабельными ракетами. Турция ссылается на статью 5 НАТО, но члены НАТО колеблются — прямая конфронтация с Россией из-за регионального черноморского спора раскалывает альянс. Венгрия и Словакия блокируют полную активацию статьи 5. США и Германия предоставляют Турции оборонительную поддержку, но отказываются от наступательных операций.\n\nРоссия, видя нерешительность НАТО, развёртывает тактическое ядерное оружие в Калининграде и Сирии как сигнал. Турция, превосходящая Россию в регионе обычными вооружениями, но не имеющая ядерного оружия, вынуждена вести переговоры. Прекращение огня замораживает конфликт: черноморские проливы остаются под турецким контролем, но Россия получает права на базы в Абхазии и расширяет своё присутствие в Сирии."
        },
        participants: { en: "Russia, Turkey, NATO (divided), USA, Germany, France, Azerbaijan, Armenia", ru: "Россия, Турция, НАТО (разделено), США, Германия, Франция, Азербайджан, Армения" },
        damage: { en: "Regional — Black Sea naval assets, radar installations, Caucasus military infrastructure destroyed. Port of Novorossiysk and Istanbul partially damaged.", ru: "Региональные — военно-морские активы Чёрного моря, радиолокационные установки, военная инфраструктура Кавказа уничтожены. Порт Новороссийск и Стамбул частично повреждены." },
        casualties: { en: "30,000–100,000 deaths, primarily military. Civilian casualties from naval bombardments and cruise missile strikes.", ru: "30 000–100 000 смертей, в основном военных. Гражданские потери от морских бомбардировок и ударов крылатыми ракетами." },
        planetary: { en: "Minimal. No nuclear use in this scenario. Regional environmental damage from oil spills in the Black Sea.", ru: "Минимальное. Ядерное оружие в этом сценарии не применяется. Региональный экологический ущерб от разливов нефти в Чёрном море." },
        survival: { en: "High globally. Moderate in the Black Sea and Caucasus regions.", ru: "Высокая глобально. Умеренная в регионах Чёрного моря и Кавказа." },
        survivalActions: {
          en: "— For Russians: evacuate Black Sea coast (Novorossiysk, Sochi, Sevastopol, Anapa); head inland 200+ km; avoid Black Sea Fleet bases and naval infrastructure\n— For Turks: evacuate Istanbul, Trabzon, Samsun, Sinop — the Black Sea coast is the primary conflict zone; head to central Anatolia (Ankara, Konya, Cappadocia); avoid NATO installations and Incirlik Air Base\n— For Caucasus residents (Georgia, Armenia, Azerbaijan): evacuate Tbilisi, Batumi, Baku, Yerevan — conventional strikes may hit Caucasus military infrastructure\n— No nuclear weapons are used in this scenario — the main risks are conventional warfare, economic disruption, and Black Sea trade blockage\n— Stockpile 1–2 months of supplies; global fuel and food prices will spike due to Black Sea route disruption",
          ru: "— Для россиян: покинуть побережье Чёрного моря (Новороссийск, Сочи, Севастополь, Анапа); двигаться вглубь материка на 200+ км; избегать баз Черноморского флота\n— Для турок: покинуть Стамбул, Трабзон, Самсун, Синоп — черноморское побережье — основная зона конфликта; направляться в центральную Анатолию (Анкара, Конья, Каппадокия); избегать объектов НАТО и авиабазы Инджирлик\n— Для жителей Кавказа (Грузия, Армения, Азербайджан): покинуть Тбилиси, Батуми, Баку, Ереван — обычные удары могут поразить кавказскую военную инфраструктуру\n— Ядерное оружие в этом сценарии не применяется — основные риски: обычные боевые действия, экономический срыв и блокировка черноморской торговли\n— Создать запас припасов на 1–2 месяца; цены на топливо и продовольствие взлетят из-за нарушения черноморского маршрута",
        },
        probability: { en: "Low (5–10%)", ru: "Низкая (5–10%)" },
        probabilityLabel: { en: "Low", ru: "Низкая" },
        probabilitySource: "https://www.crisisgroup.org",
        harbingers: {
          en: "— Turkey purchases advanced fighter jets (F-35 or equivalent) from the US\n— Russia upgrades its Black Sea Fleet with new surface combatants\n— Turkey threatens to revise the Montreux Convention\n— Clashes between Turkish and Russian patrols in Syria intensify\n— Turkey deploys S-400 air defense systems independently (bypassing US objections)\n— Russia and Turkey hold competing military exercises in the Black Sea",
          ru: "— Турция закупает истребители F-35 (или аналоги) у США\n— Россия модернизирует Черноморский флот новыми надводными кораблями\n— Турция угрожает пересмотром Конвенции Монтрё\n— Обострение столкновений турецких и российских патрулей в Сирии\n— Турция развёртывает системы ПВО С-400 самостоятельно\n— Россия и Турция проводят конкурирующие военные учения в Чёрном море",
        },
        source: "https://www.sipri.org",
      },
    ],
  },
]
