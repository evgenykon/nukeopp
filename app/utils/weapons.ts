export interface SpecEntry {
  label: Record<string, string>
  value: Record<string, string>
}

export interface Weapon {
  id: string
  name: Record<string, string>
  versions: Record<string, string>
  description: Record<string, string>
  upgrades: Record<string, string>
  specs: SpecEntry[]
  history: Record<string, string>
  designers: Record<string, string>
  inventory: Record<string, string>
  tests: Record<string, string>
  source: string
}

export interface Country {
  id: string
  name: Record<string, string>
  warheads: number
  weapons: Weapon[]
}

export const countries: Country[] = [
  {
    id: "russia",
    name: {
      en: "Russia",
      ru: "Россия",
    },
    warheads: 5580,
    weapons: [
      {
        id: "rs-24-yars",
        name: {
          en: "RS-24 Yars / Topol-M",
          ru: "РС-24 Ярс / Тополь-М",
        },
        versions: {
          en: "RS-24 Yars (mobile), RS-12M2 Topol-M (silo), RS-12M1 Topol-M (mobile)",
          ru: "РС-24 Ярс (мобильный), РС-12М2 Тополь-М (шахтный), РС-12М1 Тополь-М (мобильный)",
        },
        description: {
          en: "The RS-24 Yars is a Russian MIRV-capable intercontinental ballistic missile developed as a modernized version of the Topol-M. It forms the backbone of Russia's Strategic Rocket Forces and can carry up to six independently targetable warheads. The missile is deployed in both silo-based and road-mobile configurations.",
          ru: "РС-24 Ярс — российская межконтинентальная баллистическая ракета с разделяющейся головной частью, разработанная как модернизация Тополь-М. Она составляет основу Ракетных войск стратегического назначения России и может нести до шести разделяющихся боеголовок. Ракета развёртывается как в шахтном, так и в мобильном вариантах.",
        },
        upgrades: {
          en: "The Yars has undergone multiple upgrades including improved guidance systems, enhanced MIRV payload capacity, and better countermeasures against missile defense. The RS-24 variant features newer warheads and improved penetration aids compared to the Topol-M. Ongoing modernization includes the RS-28 Sarmat replacement for silo-based systems.",
          ru: "Ярс прошёл несколько модернизаций, включая улучшенные системы наведения, увеличенную ёмкость разделяющейся головной части и лучшие средства преодоления противоракетной обороны. Вариант РС-24 оснащён новыми боеголовками и улучшенными средствами проникновения по сравнению с Тополь-М. Текущая модернизация включает замену шахтных систем на РС-28 Сармат.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "11,000–12,000 km", ru: "11 000–12 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "MIRV 3–6 warheads, 100–500 kt each", ru: "РГЧ 3–6 боеголовок, 100–500 кт каждая" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "22–23 m", ru: "22–23 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "1.8–2.1 m", ru: "1,8–2,1 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~49 t", ru: "~49 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with GLONASS", ru: "инерциальное с ГЛОНАСС" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
          { label: { en: "Accuracy", ru: "Точность" }, value: { en: "~150–250 m CEP", ru: "~150–250 м КВО" } },
        ],
        history: {
          en: "The Topol-M entered service in 1997 as a silo-based system, with the mobile version following in 2000. The RS-24 Yars was first tested in 2007 and entered service in 2010. The system was developed in response to NATO expansion and the US missile defense program in Europe.",
          ru: "Тополь-М поступил на вооружение в 1997 году в шахтном варианте, мобильная версия — в 2000 году. РС-24 Ярс впервые испытан в 2007 году и принят на вооружение в 2010 году. Система разрабатывалась в ответ на расширение НАТО и программу ПРО США в Европе.",
        },
        designers: {
          en: "Moscow Institute of Thermal Technology (MIT): led by Yuri Solomonov. Production at Votkinsk Plant.",
          ru: "Московский институт теплотехники (МИТ): под руководством Юрия Соломонова. Производство на Воткинском заводе.",
        },
        inventory: {
          en: "Approximately 180 deployed missiles, with an estimated 450–650 warheads across all variants. Deployment continues through ongoing modernization programs.",
          ru: "Примерно 180 развёрнутых ракет, по оценкам 450–650 боеголовок на всех вариантах. Развёртывание продолжается в рамках программ модернизации.",
        },
        tests: {
          en: "First test launch of Topol-M in 1994. RS-24 Yars first test in May 2007 from Plesetsk. Multiple subsequent tests from Plesetsk Cosmodrome and mobile launchers.",
          ru: "Первый пуск Тополь-М в 1994 году. Первое испытание РС-24 Ярс в мае 2007 года с Плесецка. Многочисленные последующие пуски с космодрома Плесецк и мобильных пусковых установок.",
        },
        source: "https://en.wikipedia.org/wiki/RS-24_Yars",
      },
      {
        id: "rsm-56-bulava",
        name: {
          en: "RSM-56 Bulava",
          ru: "РСМ-56 Булава",
        },
        versions: {
          en: "RSM-56 Bulava (submarine-launched), modified from Topol-M design",
          ru: "РСМ-56 Булава (морского базирования), модификация конструкции Тополь-М",
        },
        description: {
          en: "The RSM-56 Bulava is a Russian submarine-launched ballistic missile developed for Borei-class nuclear submarines. It is a three-stage solid-fuel missile derived from the Topol-M design adapted for naval launch. The Bulava carries up to ten MIRV warheads and serves as the primary naval component of Russia's nuclear triad.",
          ru: "РСМ-56 Булава — российская баллистическая ракета подводных лодок, разработанная для атомных подводных лодок класса «Борей». Это трёхступенчатая твердотопливная ракета, созданная на основе конструкции Тополь-М, адаптированной для морского пуска. «Булава» несёт до десяти разделяющихся боеголовок и является основным морским компонентом ядерной триады России.",
        },
        upgrades: {
          en: "The Bulava has undergone a series of improvements to address early reliability issues, including redesign of the third stage and guidance system. Later production variants have demonstrated improved launch reliability. The missile continues to be the standard SLBM for Russia's modern submarine fleet.",
          ru: "«Булава» прошла ряд улучшений для устранения ранних проблем с надёжностью, включая переработку третьей ступени и системы наведения. Более поздние производственные варианты показали улучшенную надёжность пуска. Ракета остаётся стандартной БРПЛ для современного подводного флота России.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "9,300 km", ru: "9 300 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "6–10 MIRV, 100–150 kt each", ru: "РГЧ 6–10, 100–150 кт каждая" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "12.1 m", ru: "12,1 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "2.1 m", ru: "2,1 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~36.8 t", ru: "~36,8 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with astro-inertial navigation", ru: "инерциальное с астроинерциальной навигацией" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
          { label: { en: "Accuracy", ru: "Точность" }, value: { en: "~250–350 m CEP", ru: "~250–350 м КВО" } },
        ],
        history: {
          en: "Development began in the 1990s after cancellation of the earlier solid-fuel SLBM program. First test launch in 2004, but early tests suffered multiple failures. Officially accepted into service in 2013 after a troubled testing phase. Now deployed on all Borei and Borei-A class submarines.",
          ru: "Разработка началась в 1990-х годах после отмены предыдущей программы твердотопливных БРПЛ. Первый пуск в 2004 году, но ранние испытания сопровождались многочисленными неудачами. Официально принята на вооружение в 2013 году после сложного этапа испытаний. Развёрнута на всех подводных лодках классов «Борей» и «Борей-А».",
        },
        designers: {
          en: "Moscow Institute of Thermal Technology (MIT). Production at Votkinsk Plant.",
          ru: "Московский институт теплотехники (МИТ). Производство на Воткинском заводе.",
        },
        inventory: {
          en: "Approximately 40 deployed missiles across Borei-class submarines, carrying an estimated 200–300 warheads.",
          ru: "Примерно 40 развёрнутых ракет на подводных лодках класса «Борей», несущих примерно 200–300 боеголовок.",
        },
        tests: {
          en: "Over 30 test launches between 2004 and 2024, with notable failures in early tests including the famous 'dive into the sea' incident. Success rate improved significantly after 2011.",
          ru: "Более 30 испытательных пусков с 2004 по 2024 год, с заметными неудачами в ранних тестах, включая известный инцидент «нырка в море». Доля успешных пусков значительно возросла после 2011 года.",
        },
        source: "https://en.wikipedia.org/wiki/RSM-56_Bulava",
      },
      {
        id: "rs-28-sarmat",
        name: {
          en: "RS-28 Sarmat",
          ru: "РС-28 Сармат",
        },
        versions: {
          en: "RS-28 Sarmat (heavy ICBM, silo-based), NATO reporting name: SS-X-30 Satan II",
          ru: "РС-28 Сармат (тяжёлая МБР, шахтного базирования), обозначение НАТО: SS-X-30 Сатана II",
        },
        description: {
          en: "The RS-28 Sarmat is a Russian heavy intercontinental ballistic missile designed to replace the aging R-36M2 Voevoda (SS-18 Satan). It is one of the largest and most powerful ICBMs ever built, capable of carrying a massive payload including up to ten MIRV warheads or a single very heavy warhead. The missile is primarily silo-based and features advanced penetration aids against missile defenses.",
          ru: "РС-28 Сармат — российская тяжёлая межконтинентальная баллистическая ракета, созданная для замены устаревших Р-36М2 Воевода (SS-18 Сатана). Это одна из самых больших и мощных МБР, когда-либо созданных, способная нести огромную полезную нагрузку, включая до десяти разделяющихся боеголовок или одну сверхтяжёлую боеголовку. Ракета базируется в шахтах и оснащена передовыми средствами преодоления ПРО.",
        },
        upgrades: {
          en: "The Sarmat incorporates modern technologies including digital guidance systems, advanced counter-countermeasures, and a liquid-fuel engine with rapid launch preparation. The missile is designed to fly over both the North and South Poles to evade missile defense systems. Future variants may include additional payload options.",
          ru: "«Сармат» включает современные технологии: цифровые системы наведения, передовые средства преодоления ПРО и жидкостный двигатель с быстрой подготовкой к пуску. Ракета может лететь как через Северный, так и через Южный полюс для обхода систем ПРО. Будущие варианты могут включать дополнительные варианты полезной нагрузки.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "18,000 km", ru: "18 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "10+ MIRV (100–500 kt each) or 1 heavy warhead (~50 Mt)", ru: "10+ РГЧ (100–500 кт каждая) или одна тяжёлая боеголовка (~50 Мт)" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~35.5 m", ru: "~35,5 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "3 m", ru: "3 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~208 t", ru: "~208 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with GLONASS", ru: "инерциальное с ГЛОНАСС" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "liquid fuel (two-stage)", ru: "жидкостный (двухступенчатый)" } },
        ],
        history: {
          en: "Development began in the 2000s as a replacement for the Soviet-era R-36M2. First test launch was conducted in April 2022 from Plesetsk Cosmodrome. The missile was officially put on combat duty in September 2023. Deployment has been slower than initially planned due to technical challenges and production constraints.",
          ru: "Разработка началась в 2000-х годах как замена советской Р-36М2. Первый испытательный пуск проведён в апреле 2022 года с космодрома Плесецк. Ракета официально заступила на боевое дежурство в сентябре 2023 года. Развёртывание идёт медленнее запланированного из-за технических сложностей и производственных ограничений.",
        },
        designers: {
          en: "Makeyev Design Bureau (State Rocket Center named after V.P. Makeyev). Production at Krasnoyarsk Machine-Building Plant.",
          ru: "Государственный ракетный центр имени В. П. Макеева. Производство на Красноярском машиностроительном заводе.",
        },
        inventory: {
          en: "Limited operational deployment: 0–10 missiles as of 2024, with plans to eventually deploy around 50 missiles to replace the R-36M2.",
          ru: "Ограниченное развёртывание: 0–10 ракет по состоянию на 2024 год, с планами развернуть около 50 ракет для замены Р-36М2.",
        },
        tests: {
          en: "First flight test April 2022 (successful). Multiple tests planned but some reportedly experienced issues. Full operational capability expected by 2025–2026.",
          ru: "Первый лётный тест в апреле 2022 года (успешный). Запланированы дополнительные испытания, но некоторые, по сообщениям, имели проблемы. Полная боевая готовность ожидается к 2025–2026 году.",
        },
        source: "https://en.wikipedia.org/wiki/RS-28_Sarmat",
      },
    ],
  },
  {
    id: "usa",
    name: {
      en: "United States",
      ru: "Соединённые Штаты",
    },
    warheads: 5044,
    weapons: [
      {
        id: "lgm-30g-minuteman-iii",
        name: {
          en: "LGM-30G Minuteman III",
          ru: "LGM-30G Minuteman III",
        },
        versions: {
          en: "LGM-30G Minuteman III (ICBM, silo-based)",
          ru: "LGM-30G Minuteman III (МБР шахтного базирования)",
        },
        description: {
          en: "The LGM-30G Minuteman III is an American intercontinental ballistic missile and the only land-based component of the US nuclear triad. It is a three-stage solid-fuel missile housed in hardened underground silos. The Minuteman III has been continuously upgraded since its introduction and remains on alert 24/7.",
          ru: "LGM-30G Minuteman III — американская межконтинентальная баллистическая ракета и единственный наземный компонент ядерной триады США. Это трёхступенчатая твердотопливная ракета, размещённая в укреплённых подземных шахтах. Minuteman III постоянно модернизируется с момента принятия на вооружение и находится на боевом дежурстве 24/7.",
        },
        upgrades: {
          en: "Upgraded under the Solid State Phased Array Radar System, Guidance Replacement Program, and Propulsion Replacement Program. The Mk-12A reentry vehicle with W78 warhead remains the primary payload. The GRP (Guidance Replacement Program) extended service life through 2030. The LEP (Life Extension Program) continues to modernize components.",
          ru: "Модернизирована в рамках программ замены РЛС, системы наведения и двигателей. Головная часть Mk-12A с боеголовкой W78 остаётся основной полезной нагрузкой. Программа замены систем наведения продлила срок службы до 2030 года. Программа продления срока службы продолжает модернизировать компоненты.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "13,000 km", ru: "13 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "W87 (300 kt) or W78 (335–475 kt), single or MIRV", ru: "W87 (300 кт) или W78 (335–475 кт), одна или РГЧ" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "18.3 m", ru: "18,3 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "1.67 m", ru: "1,67 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~35.3 t", ru: "~35,3 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial (NS-50)", ru: "инерциальное (NS-50)" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
          { label: { en: "Accuracy", ru: "Точность" }, value: { en: "~120 m CEP", ru: "~120 м КВО" } },
        ],
        history: {
          en: "Minuteman III entered service in 1970, replacing earlier Minuteman and Titan missiles. Originally over 1,000 were deployed, reduced to 400 under arms control treaties. The missile has undergone multiple life extension programs. The US Air Force plans to replace it with the LGM-35 Sentinel (GBSD) starting in the late 2020s.",
          ru: "Minuteman III поступил на вооружение в 1970 году, заменив более ранние ракеты Minuteman и Titan. Первоначально было развёрнуто более 1 000 ракет, сокращено до 400 по договорам о контроле над вооружениями. Ракета прошла множество программ продления срока службы. ВВС США планируют заменить её на LGM-35 Sentinel (GBSD) начиная с конца 2020-х годов.",
        },
        designers: {
          en: "Boeing (prime contractor). Second stage by Aerojet, third stage by Thiokol. Guidance by Northrop Grumman / Rockwell.",
          ru: "Boeing (главный подрядчик). Вторая ступень — Aerojet, третья — Thiokol. Система наведения — Northrop Grumman / Rockwell.",
        },
        inventory: {
          en: "400 deployed missiles across three wings: Malmstrom AFB (MT), Minot AFB (ND), and FE Warren AFB (WY). Each missile carries 1–3 warheads.",
          ru: "400 развёрнутых ракет в трёх крыльях: авиабаза Мальмстрем (Монтана), авиабаза Майнот (Северная Дакота) и авиабаза Ф. Э. Уоррен (Вайоминг). Каждая ракета несёт 1–3 боеголовки.",
        },
        tests: {
          en: "Regular test launches from Vandenberg SFB (CA) to Kwajalein Atoll. Approximately 3–5 unarmed tests per year to verify reliability. Over 50 test launches since 2000.",
          ru: "Регулярные испытательные пуски с авиабазы Ванденберг (Калифорния) на атолл Кваджалейн. Примерно 3–5 испытаний без боезаряда в год для проверки надёжности. Более 50 пусков с 2000 года.",
        },
        source: "https://en.wikipedia.org/wiki/LGM-30_Minuteman",
      },
      {
        id: "ugm-133-trident-ii",
        name: {
          en: "UGM-133 Trident II D5",
          ru: "UGM-133 Trident II D5",
        },
        versions: {
          en: "UGM-133 Trident II D5 (SLBM), D5LE (Life Extension variant)",
          ru: "UGM-133 Trident II D5 (БРПЛ), D5LE (с продлённым сроком службы)",
        },
        description: {
          en: "The UGM-133 Trident II D5 is a submarine-launched ballistic missile deployed on US Ohio-class and British Vanguard-class nuclear submarines. It is a three-stage solid-fuel missile with exceptional accuracy and range. The Trident II is considered one of the most reliable nuclear delivery systems in the world.",
          ru: "UGM-133 Trident II D5 — баллистическая ракета подводных лодок, развёрнутая на американских подводных лодках класса «Огайо» и британских класса «Вэнгард». Это трёхступенчатая твердотопливная ракета с исключительной точностью и дальностью. Trident II считается одной из самых надёжных систем доставки ядерного оружия в мире.",
        },
        upgrades: {
          en: "The D5LE (Life Extension) program replaced aging solid-propellant motors, guidance, and navigation systems. The Mk-6 guidance system offers improved accuracy. A new fuzing, arming, and firing system was introduced. The missile is expected to remain operational through the 2040s on Columbia-class submarines.",
          ru: "Программа продления срока службы D5LE заменила устаревшие твердотопливные двигатели, системы наведения и навигации. Система наведения Mk-6 обеспечивает улучшенную точность. Внедрена новая система взведения, взрывания и пуска. Ракета останется на вооружении до 2040-х годов на подводных лодках класса «Колумбия».",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "12,000 km", ru: "12 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "W76-1 (100 kt) or W88 (475 kt), up to 14 MIRV (limited to 8 by treaty)", ru: "W76-1 (100 кт) или W88 (475 кт), до 14 РГЧ (ограничено 8 по договору)" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "13.58 m", ru: "13,58 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "2.11 m", ru: "2,11 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~58.5 t", ru: "~58,5 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with GPS", ru: "инерциальное с GPS" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
          { label: { en: "Accuracy", ru: "Точность" }, value: { en: "~100 m CEP", ru: "~100 м КВО" } },
        ],
        history: {
          en: "First deployed in 1990 on Ohio-class submarines. Over 180 successful test launches since 1989 — the longest record of success for any large ballistic missile. The missile has been selected for the UK's Dreadnought-class and the US Columbia-class submarine programs.",
          ru: "Впервые развёрнута в 1990 году на подводных лодках класса «Огайо». Более 180 успешных испытательных пусков с 1989 года — самый продолжительный рекорд успешных пусков среди крупных баллистических ракет. Ракета выбрана для британских подводных лодок класса «Дредноут» и американских класса «Колумбия».",
        },
        designers: {
          en: "Lockheed Martin Space Systems (prime contractor). Aerojet Rocketdyne (propulsion). Draper Laboratory (guidance).",
          ru: "Lockheed Martin Space Systems (главный подрядчик). Aerojet Rocketdyne (двигатели). Draper Laboratory (наведение).",
        },
        inventory: {
          en: "Approximately 288 deployed missiles across 12 US Ohio-class submarines, each carrying up to 8 warheads. Also deployed on 4 UK Vanguard-class boats.",
          ru: "Примерно 288 развёрнутых ракет на 12 подводных лодках класса «Огайо», каждая несёт до 8 боеголовок. Также развёрнуты на 4 британских подводных лодках класса «Вэнгард».",
        },
        tests: {
          en: "Over 190 consecutive successful test flights since 1989. Regular Demonstration and Shakedown Operations (DASO) launches from both US and UK submarines.",
          ru: "Более 190 последовательных успешных испытательных пусков с 1989 года. Регулярные демонстрационные пуски с американских и британских подводных лодок.",
        },
        source: "https://en.wikipedia.org/wiki/Trident_(missile)",
      },
      {
        id: "b61-thermonuclear-bomb",
        name: {
          en: "B61 Thermonuclear Bomb",
          ru: "Термоядерная бомба B61",
        },
        versions: {
          en: "B61-3, B61-4, B61-7, B61-11 (earth-penetrating), B61-12 (current production LEP variant)",
          ru: "B61-3, B61-4, B61-7, B61-11 (проникающая), B61-12 (текущая версия с продлённым сроком службы)",
        },
        description: {
          en: "The B61 is a variable-yield thermonuclear gravity bomb designed for delivery by tactical and strategic aircraft. It is one of the oldest weapons in the US arsenal but has undergone extensive life extension programs. The B61-12 variant integrates existing nuclear components with new guided tail kits for improved accuracy.",
          ru: "B61 — термоядерная бомба свободного падения с переменной мощностью, предназначенная для доставки тактическими и стратегическими самолётами. Это одно из старейших видов оружия в арсенале США, прошедшее масштабные программы продления срока службы. Вариант B61-12 объединяет существующие ядерные компоненты с новыми хвостовыми комплектами наведения для повышения точности.",
        },
        upgrades: {
          en: "The B61-12 life extension program replaces older mods with a consolidated design featuring a guided tail kit, new fuzing, and enhanced safety features. It adds a spin rocket motor for standoff capability. The B61-12 consolidates four older variants into one. Future B61-13 is planned with higher yield.",
          ru: "Программа продления срока службы B61-12 заменяет старые модификации единой конструкцией с хвостовым комплектом наведения, новым взрывателем и улучшенными системами безопасности. Добавлен ракетный двигатель для увеличения дальности. B61-12 объединяет четыре старых варианта в один. Планируется B61-13 с большей мощностью.",
        },
        specs: [
          { label: { en: "Yield", ru: "Мощность" }, value: { en: "0.3–340 kt (variable, selectable in flight)", ru: "0,3–340 кт (переменная, выбирается в полёте)" } },
          { label: { en: "Weight", ru: "Вес" }, value: { en: "~320 kg (B61-12)", ru: "~320 кг (B61-12)" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "3.58 m", ru: "3,58 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "33 cm", ru: "33 см" } },
          { label: { en: "Delivery", ru: "Доставка" }, value: { en: "tactical aircraft (F-16, F-35, B-2, B-21, Tornado, etc.)", ru: "тактические самолёты (F-16, F-35, B-2, B-21, Tornado и др.)" } },
          { label: { en: "Penetration", ru: "Проникновение" }, value: { en: "B61-11 can penetrate up to 6 m of reinforced concrete", ru: "B61-11 может проникать до 6 м железобетона" } },
        ],
        history: {
          en: "Entered service in 1968 during the Cold War. The B61 has undergone multiple modifications (mods 0 through 13). The B61-12 program began in 2010 and entered production in 2021. The B61-13 variant was announced in 2023 as a higher-yield strategic option. B61 bombs are also stored at NATO bases in Europe under nuclear sharing arrangements.",
          ru: "Поступила на вооружение в 1968 году во время Холодной войны. B61 прошла множество модификаций (с 0 по 13). Программа B61-12 началась в 2010 году и вступила в производство в 2021 году. Вариант B61-13 был анонсирован в 2023 году как стратегический вариант повышенной мощности. Бомбы B61 также хранятся на базах НАТО в Европе в рамках соглашений о ядерном обмене.",
        },
        designers: {
          en: "Los Alamos National Laboratory (design). Sandia National Laboratories (safety and arming). Boeing (B61-12 tail kit assembly).",
          ru: "Лос-Аламосская национальная лаборатория (разработка). Сандийские национальные лаборатории (безопасность и взведение). Boeing (хвостовой комплект B61-12).",
        },
        inventory: {
          en: "Approximately 230 B61 bombs in the US stockpile, with around 100 deployed at NATO bases in Belgium, Germany, Italy, Netherlands, and Turkey.",
          ru: "Примерно 230 бомб B61 в арсенале США, около 100 развёрнуты на базах НАТО в Бельгии, Германии, Италии, Нидерландах и Турции.",
        },
        tests: {
          en: "The B61 design was extensively tested during the Cold War, including full-yield tests at the Nevada Test Site. The B61-12 underwent non-nuclear flight tests at Tonopah Test Range and Sandia.",
          ru: "Конструкция B61 была тщательно испытана во время Холодной войны, включая полномасштабные испытания на Невадском испытательном полигоне. B61-12 прошла неядерные лётные испытания на полигоне Tonopah и в Сандии.",
        },
        source: "https://en.wikipedia.org/wiki/B61_nuclear_bomb",
      },
    ],
  },
  {
    id: "china",
    name: {
      en: "China",
      ru: "Китай",
    },
    warheads: 500,
    weapons: [
      {
        id: "df-41",
        name: {
          en: "DF-41 (CSS-20)",
          ru: "DF-41 (CSS-20)",
        },
        versions: {
          en: "DF-41 (silo-based and mobile TEL variants)",
          ru: "DF-41 (шахтного и мобильного базирования)",
        },
        description: {
          en: "The DF-41 is a Chinese intercontinental ballistic missile and the longest-range weapon in the People's Liberation Army Rocket Force arsenal. It can carry up to ten MIRV warheads and is deployed in both silo and road-mobile configurations. The DF-41 represents the most advanced Chinese ICBM and is capable of reaching targets anywhere in the continental United States.",
          ru: "DF-41 — китайская межконтинентальная баллистическая ракета, самая дальнобойная в арсенале Ракетных войск Народно-освободительной армии Китая. Она может нести до десяти разделяющихся боеголовок и развёртывается как в шахтном, так и в мобильном вариантах. DF-41 представляет самую современную китайскую МБР и способна поражать цели в любой точке континентальной части США.",
        },
        upgrades: {
          en: "The DF-41 has been produced in multiple sub-variants with improvements in MIRV payload, guidance accuracy, and countermeasure capabilities. A silo-based version was developed to supplement the mobile launchers. Future upgrades may include hypersonic glide vehicles and advanced penetration aids.",
          ru: "DF-41 выпускался в нескольких подвариантах с улучшениями в разделяющейся головной части, точности наведения и возможностях преодоления ПРО. Шахтная версия была разработана в дополнение к мобильным пусковым установкам. Будущие модернизации могут включать гиперзвуковые планирующие аппараты и передовые средства преодоления ПРО.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "12,000–15,000 km", ru: "12 000–15 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "MIRV 3–10, 100–500 kt each", ru: "РГЧ 3–10, 100–500 кт каждая" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~21 m", ru: "~21 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "2.25 m", ru: "2,25 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~60 t", ru: "~60 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with BeiDou navigation", ru: "инерциальное с BeiDou" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
          { label: { en: "Accuracy", ru: "Точность" }, value: { en: "~100–200 m CEP", ru: "~100–200 м КВО" } },
        ],
        history: {
          en: "Development of the DF-41 began in the 1980s, with first test flights reported in 2012. The missile entered service around 2017. Deployment accelerated significantly in the early 2020s, with multiple silo fields under construction in Gansu and Inner Mongolia.",
          ru: "Разработка DF-41 началась в 1980-х годах, первые испытательные полёты зафиксированы в 2012 году. Ракета поступила на вооружение примерно в 2017 году. Развёртывание значительно ускорилось в начале 2020-х годов: в Ганьсу и Внутренней Монголии строятся новые шахтные поля.",
        },
        designers: {
          en: "China Academy of Launch Vehicle Technology (CALT). Production by China Aerospace Science and Technology Corporation (CASC).",
          ru: "Китайская академия технологии ракет-носителей (CALT). Производство — Китайская корпорация аэрокосмической науки и технологий (CASC).",
        },
        inventory: {
          en: "Approximately 40 deployed missiles, with an estimated 200–400 associated warheads. The number is growing rapidly with new silo construction.",
          ru: "Примерно 40 развёрнутых ракет, по оценкам 200–400 боеголовок. Число быстро растёт за счёт строительства новых шахт.",
        },
        tests: {
          en: "Multiple flight tests reported from the Taiyuan Satellite Launch Center and mobile launchers. The US Department of Defense reports DF-41 testing activity in its annual China Military Power reports.",
          ru: "Многочисленные лётные испытания с космодрома Тайюань и мобильных пусковых установок. Министерство обороны США сообщает о тестах DF-41 в ежегодных докладах о военной мощи Китая.",
        },
        source: "https://en.wikipedia.org/wiki/DF-41",
      },
      {
        id: "df-31ag",
        name: {
          en: "DF-31AG (CSS-10 Mod 2)",
          ru: "DF-31AG (CSS-10 Mod 2)",
        },
        versions: {
          en: "DF-31 (original), DF-31A (extended range), DF-31AG (improved mobile variant)",
          ru: "DF-31 (оригинальный), DF-31A (увеличенной дальности), DF-31AG (улучшенный мобильный вариант)",
        },
        description: {
          en: "The DF-31AG is an improved mobile variant of China's DF-31 intercontinental ballistic missile with extended range and enhanced mobility. It uses a 12-axle transporter-erector-launcher for cross-country deployment. The DF-31AG can reach targets across most of the continental United States and represents a significant portion of China's mobile ICBM force.",
          ru: "DF-31AG — улучшенный мобильный вариант китайской межконтинентальной баллистической ракеты DF-31 с увеличенной дальностью и повышенной мобильностью. Он использует 12-осную транспортно-пусковую установку для передвижения по пересечённой местности. DF-31AG может поражать цели на большей части континентальной территории США и составляет значительную часть мобильных МБР Китая.",
        },
        upgrades: {
          en: "The AG variant features improved off-road mobility with a new TEL, enhanced counter-countermeasures, and a more advanced navigation system compared to earlier DF-31 models. The missile benefits from China's BeiDou satellite navigation network for improved accuracy.",
          ru: "Вариант AG отличается улучшенной проходимостью благодаря новой пусковой установке, усиленными средствами преодоления ПРО и более совершенной системой навигации по сравнению с ранними моделями DF-31. Ракета использует китайскую спутниковую навигационную сеть BeiDou для повышения точности.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "11,000–12,000 km", ru: "11 000–12 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "single warhead, 200–300 kt (possibly MIRV-capable)", ru: "одна боеголовка, 200–300 кт (возможно, с возможностью РГЧ)" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~18 m", ru: "~18 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "2.25 m", ru: "2,25 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~42 t", ru: "~42 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with BeiDou", ru: "инерциальное с BeiDou" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
        ],
        history: {
          en: "The DF-31 program began in the 1980s and faced significant technical challenges, including a failed test in 1995. The original DF-31 entered service in 2006. The DF-31A extended-range variant followed, and the DF-31AG was unveiled at the 2017 National Day parade. The AG variant is now the primary mobile ICBM in Chinese service.",
          ru: "Программа DF-31 началась в 1980-х годах и столкнулась со значительными техническими трудностями, включая неудачный тест в 1995 году. Оригинальный DF-31 поступил на вооружение в 2006 году. Вариант DF-31A увеличенной дальности последовал за ним, а DF-31AG был представлен на параде в 2017 году. Вариант AG теперь является основной мобильной МБР Китая.",
        },
        designers: {
          en: "China Academy of Launch Vehicle Technology (CALT) / CARDC. Production by CASC.",
          ru: "Китайская академия технологии ракет-носителей (CALT) / CARDC. Производство — CASC.",
        },
        inventory: {
          en: "Approximately 60 DF-31 series missiles deployed, including DF-31, DF-31A, and DF-31AG variants.",
          ru: "Примерно 60 ракет серии DF-31 развёрнуты, включая варианты DF-31, DF-31A и DF-31AG.",
        },
        tests: {
          en: "Reported flight tests from mobile launchers and the Taiyuan Satellite Launch Center. DF-31A testing was detected by US intelligence in the mid-2000s.",
          ru: "Зафиксированы лётные испытания с мобильных пусковых установок и космодрома Тайюань. Тесты DF-31A были обнаружены американской разведкой в середине 2000-х годов.",
        },
        source: "https://en.wikipedia.org/wiki/DF-31",
      },
      {
        id: "jl-2",
        name: {
          en: "JL-2 (CSS-N-14)",
          ru: "JL-2 (CSS-N-14)",
        },
        versions: {
          en: "JL-2 (submarine-launched variant of DF-31)",
          ru: "JL-2 (морского базирования, вариант DF-31)",
        },
        description: {
          en: "The JL-2 is a Chinese submarine-launched ballistic missile based on the DF-31 ICBM design. It equips the Jin-class (Type 094) nuclear-powered ballistic missile submarines. The JL-2 provides China with its first credible sea-based nuclear deterrent capability, significantly enhancing second-strike survivability.",
          ru: "JL-2 — китайская баллистическая ракета подводных лодок, созданная на основе МБР DF-31. Она оснащает атомные подводные лодки с баллистическими ракетами класса «Цзинь» (тип 094). JL-2 обеспечивает Китай первым надёжным морским ядерным сдерживанием, значительно повышая устойчивость ответного удара.",
        },
        upgrades: {
          en: "The JL-2 has seen improvements in reliability through its testing phase. A follow-on JL-3 SLBM with longer range and MIRV capability is in development. The missile benefits from China's advancing solid-fuel rocket technology developed through the DF-31 and DF-41 programs.",
          ru: "JL-2 прошёл улучшения надёжности в ходе испытаний. Разрабатывается последующая БРПЛ JL-3 с большей дальностью и возможностью РГЧ. Ракета использует передовые китайские твердотопливные технологии, разработанные в программах DF-31 и DF-41.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "7,200–8,000 km", ru: "7 200–8 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "single or MIRV, 200–500 kt", ru: "одна или РГЧ, 200–500 кт" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~13 m", ru: "~13 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "2 m", ru: "2 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~35 t", ru: "~35 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with BeiDou", ru: "инерциальное с BeiDou" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
        ],
        history: {
          en: "Development of the JL-2 began in the 1990s to provide China with a sea-based nuclear capability. Initial testing faced difficulties, with some reports of failed tests. The missile achieved initial operational capability around 2015 on Jin-class submarines. China continues to expand its SSBN fleet with improved Type 094 submarines.",
          ru: "Разработка JL-2 началась в 1990-х годах для создания морского компонента ядерной триады Китая. Первоначальные испытания столкнулись с трудностями, были сообщения о неудачных пусках. Ракета достигла начальной боеготовности примерно в 2015 году на подводных лодках класса «Цзинь». Китай продолжает расширять флот ПЛАРБ с улучшенными подводными лодками типа 094.",
        },
        designers: {
          en: "China Academy of Launch Vehicle Technology (CALT). Production by CASC.",
          ru: "Китайская академия технологии ракет-носителей (CALT). Производство — CASC.",
        },
        inventory: {
          en: "Approximately 36 missiles deployed across 4–6 Jin-class SSBNs, with an estimated 36–48 warheads.",
          ru: "Примерно 36 ракет развёрнуты на 4–6 ПЛАРБ класса «Цзинь», с примерно 36–48 боеголовками.",
        },
        tests: {
          en: "Multiple test launches from Jin-class submarines and possibly from underwater test platforms. A significant test campaign was conducted before initial operational capability was declared.",
          ru: "Многочисленные испытательные пуски с подводных лодок класса «Цзинь» и, возможно, с подводных испытательных платформ. Проведена масштабная кампания испытаний перед объявлением начальной боеготовности.",
        },
        source: "https://en.wikipedia.org/wiki/JL-2",
      },
    ],
  },
  {
    id: "france",
    name: {
      en: "France",
      ru: "Франция",
    },
    warheads: 290,
    weapons: [
      {
        id: "m51-slbm",
        name: {
          en: "M51 SLBM",
          ru: "M51 БРПЛ",
        },
        versions: {
          en: "M51.1 (original), M51.2 (improved), M51.3 (in development, extended range)",
          ru: "M51.1 (оригинальная), M51.2 (улучшенная), M51.3 (в разработке, увеличенной дальности)",
        },
        description: {
          en: "The M51 is a French submarine-launched ballistic missile deployed on Triomphant-class nuclear-powered ballistic missile submarines. It is a three-stage solid-fuel missile that forms the backbone of France's strategic nuclear deterrent. The M51 replaced the earlier M45 SLBM and significantly improved the range and payload capacity of France's naval nuclear force.",
          ru: "M51 — французская баллистическая ракета подводных лодок, развёрнутая на атомных подводных лодках с баллистическими ракетами класса «Триумфан». Это трёхступенчатая твердотопливная ракета, составляющая основу стратегического ядерного сдерживания Франции. M51 заменила более раннюю БРПЛ M45 и значительно улучшила дальность и полезную нагрузку морских ядерных сил Франции.",
        },
        upgrades: {
          en: "The M51.2 variant introduced the TN-75 warhead and improved penetration aids. The M51.3 is under development with extended range and a new TNO warhead. A new generation of SLBMs (M51.4 or successor) is planned for the future SNLE-3G submarines.",
          ru: "Вариант M51.2 ввёл боеголовку TN-75 и улучшенные средства преодоления ПРО. M51.3 разрабатывается с увеличенной дальностью и новой боеголовкой TNO. Новое поколение БРПЛ (M51.4 или преемник) планируется для будущих подводных лодок SNLE-3G.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "10,000 km (M51.2)", ru: "10 000 км (M51.2)" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "6–10 MIRV TN-75, 100–150 kt each", ru: "6–10 РГЧ TN-75, 100–150 кт каждая" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "12 m", ru: "12 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "2.3 m", ru: "2,3 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~52 t", ru: "~52 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with stellar navigation", ru: "инерциальное с астронавигацией" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
          { label: { en: "Accuracy", ru: "Точность" }, value: { en: "~150–200 m CEP", ru: "~150–200 м КВО" } },
        ],
        history: {
          en: "Development of the M51 began in the 1990s to replace the M45 SLBM. First test launch in 2006, with entry into service in 2010 on the Triomphant-class submarine Le Terrible. The M51 ensures France maintains a continuous at-sea deterrent patrol — the Force océanique stratégique.",
          ru: "Разработка M51 началась в 1990-х годах для замены БРПЛ M45. Первый испытательный пуск в 2006 году, принятие на вооружение в 2010 году на подводной лодке класса «Триумфан» Le Terrible. M51 обеспечивает Франции непрерывное патрулирование в море — Force océanique stratégique.",
        },
        designers: {
          en: "ArianeGroup (formerly EADS / Airbus Safran Launchers). Warheads by Direction des Applications Militaires (CEA/DAM).",
          ru: "ArianeGroup (ранее EADS / Airbus Safran Launchers). Боеголовки — Direction des Applications Militaires (CEA/DAM).",
        },
        inventory: {
          en: "Approximately 48 missiles deployed on 4 Triomphant-class submarines, with an estimated 240–290 warheads.",
          ru: "Примерно 48 ракет развёрнуты на 4 подводных лодках класса «Триумфан», с примерно 240–290 боеголовками.",
        },
        tests: {
          en: "Multiple test launches from the Biscarosse missile test centre and from Triomphant-class submarines. Tests include the M51.1, M51.2, and early M51.3 flights.",
          ru: "Многочисленные испытательные пуски с ракетного испытательного центра Бискаросс и подводных лодок класса «Триумфан». Испытания включают пуски M51.1, M51.2 и ранние полёты M51.3.",
        },
        source: "https://en.wikipedia.org/wiki/M51_(missile)",
      },
      {
        id: "asmp-a",
        name: {
          en: "ASMP-A (Air-Sol Moyenne Portée Amélioré)",
          ru: "ASMP-A (Air-Sol Moyenne Portée Amélioré)",
        },
        versions: {
          en: "ASMP (original), ASMP-A (improved), ASMP-A Rénové (updated), ASN4G (future hypersonic successor)",
          ru: "ASMP (оригинальная), ASMP-A (улучшенная), ASMP-A Rénové (обновлённая), ASN4G (будущий гиперзвуковой преемник)",
        },
        description: {
          en: "The ASMP-A is a French air-launched supersonic cruise missile with a nuclear warhead, providing a tactical/strategic air-delivered capability. It is carried by Rafale fighter aircraft of the French Air Force and Navy. The missile flies at Mach 3 with terrain-following capability, making it difficult to intercept.",
          ru: "ASMP-A — французская сверхзвуковая крылатая ракета воздушного базирования с ядерной боеголовкой, обеспечивающая тактическое/стратегическое ядерное оружие авиационной доставки. Она носится истребителями Rafale ВВС и ВМС Франции. Ракета летит на скорости Мах 3 с возможностью огибания рельефа, что затрудняет её перехват.",
        },
        upgrades: {
          en: "The ASMP-A Rénové program upgraded the missile's guidance and navigation systems. The future ASN4G program aims to develop a hypersonic successor capable of flying at Mach 8 with greater range. The ASMP-A remains France's only air-launched nuclear weapon pending the ASN4G.",
          ru: "Программа ASMP-A Rénové модернизировала системы наведения и навигации ракеты. Будущая программа ASN4G направлена на создание гиперзвукового преемника, способного летать на скорости Мах 8 с большей дальностью. ASMP-A остаётся единственным ядерным оружием воздушного базирования Франции до появления ASN4G.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "~500 km", ru: "~500 км" } },
          { label: { en: "Warheads", ru: "Боеголовка" }, value: { en: "TNA (Tête Nucléaire Aéroportée), 300 kt", ru: "TNA (Tête Nucléaire Aéroportée), 300 кт" } },
          { label: { en: "Speed", ru: "Скорость" }, value: { en: "Mach 3", ru: "Мах 3" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with GPS and terrain-following", ru: "инерциальное с GPS и огибанием рельефа" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "ramjet (liquid-fuel)", ru: "прямоточный (жидкое топливо)" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "5.4 m", ru: "5,4 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~860 kg", ru: "~860 кг" } },
        ],
        history: {
          en: "The original ASMP entered service in 1986. The improved ASMP-A was introduced in 2009 for the Rafale aircraft. The missile has been used in French nuclear deterrent patrols and exercises. The ASN4G successor is expected in the 2035–2040 timeframe.",
          ru: "Оригинальная ASMP поступила на вооружение в 1986 году. Улучшенная ASMP-A была введена в 2009 году для самолёта Rafale. Ракета использовалась во французских патрулях ядерного сдерживания и учениях. Преемник ASN4G ожидается в 2035–2040 годах.",
        },
        designers: {
          en: "MBDA France. Warhead by CEA/DAM.",
          ru: "MBDA France. Боеголовка — CEA/DAM.",
        },
        inventory: {
          en: "Approximately 54 ASMP-A missiles, assigned to Rafale squadrons of the French Air Force and Navy.",
          ru: "Примерно 54 ракеты ASMP-A, закреплённые за эскадрильями Rafale ВВС и ВМС Франции.",
        },
        tests: {
          en: "Non-nuclear flight tests conducted at the Biscarosse test range. Operational training launches are performed periodically.",
          ru: "Неядерные лётные испытания проведены на испытательном полигоне Бискаросс. Периодически проводятся учебно-боевые пуски.",
        },
        source: "https://en.wikipedia.org/wiki/ASMP_(missile)",
      },
    ],
  },
  {
    id: "uk",
    name: {
      en: "United Kingdom",
      ru: "Великобритания",
    },
    warheads: 225,
    weapons: [
      {
        id: "trident-ii-d5-uk",
        name: {
          en: "Trident II D5 (UK Warhead)",
          ru: "Trident II D5 (британская боеголовка)",
        },
        versions: {
          en: "Trident II D5 (SLBM, leased from US), UK-designed warhead on Mk-4 reentry body",
          ru: "Trident II D5 (БРПЛ, арендуется у США), британская боеголовка на головной части Mk-4",
        },
        description: {
          en: "The United Kingdom's nuclear deterrent consists of Trident II D5 submarine-launched ballistic missiles hosted on Vanguard-class nuclear-powered ballistic missile submarines. The warheads are British-designed and built, mated to US-supplied missiles. The UK maintains a continuous at-sea deterrence posture with one submarine always on patrol.",
          ru: "Ядерное сдерживание Великобритании состоит из баллистических ракет подводных лодок Trident II D5 на атомных подводных лодках с баллистическими ракетами класса «Вэнгард». Боеголовки британской разработки и производства установлены на американских ракетах. Великобритания поддерживает режим непрерывного морского сдерживания: одна подводная лодка всегда находится на патрулировании.",
        },
        upgrades: {
          en: "The UK is modernizing its warhead under the replacement warhead program (now referred to as the A21/Mk-7 program). The Dreadnought-class submarine will replace the Vanguard class starting in the early 2030s. The warhead life extension program extends the current capability through the 2030s.",
          ru: "Великобритания модернизирует боеголовку в рамках программы замены (теперь известной как A21/Mk-7). Подводные лодки класса «Дредноут» заменят класс «Вэнгард» начиная с начала 2030-х годов. Программа продления срока службы боеголовок сохраняет текущую боеспособность до 2030-х годов.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "12,000 km", ru: "12 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "UK-designed warhead, estimated yield ~100 kt, up to 8 per missile (limited by treaty)", ru: "британской разработки, расчётная мощность ~100 кт, до 8 на ракету (ограничено договором)" } },
          { label: { en: "Delivery", ru: "Доставка" }, value: { en: "Vanguard-class SSBNs", ru: "ПЛАРБ класса «Вэнгард»" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel (US missile, UK warhead)", ru: "трёхступенчатый твердотопливный (американская ракета, британская боеголовка)" } },
          { label: { en: "Accuracy", ru: "Точность" }, value: { en: "~100 m CEP", ru: "~100 м КВО" } },
        ],
        history: {
          en: "The UK's independent nuclear deterrent began in the 1950s. The Trident system replaced the Polaris system in the 1990s. The 2010 Strategic Defence and Security Review capped the stockpile at 120 operational warheads. The UK has reduced from 48 to 40 missile tubes per submarine and from 8 to 4 deployed missiles per boat under the 2010 review.",
          ru: "Независимое ядерное сдерживание Великобритании началось в 1950-х годах. Система Trident заменила Polaris в 1990-х годах. Обзор стратегической обороны и безопасности 2010 года ограничил арсенал 120 оперативными боеголовками. Великобритания сократила количество ракетных шахт с 48 до 40 на подводную лодку и количество развёрнутых ракет с 8 до 4 в соответствии с обзором 2010 года.",
        },
        designers: {
          en: "Lockheed Martin (missile). Atomic Weapons Establishment (AWE, warhead design and production). Ministry of Defence (program management).",
          ru: "Lockheed Martin (ракета). Atomic Weapons Establishment (AWE, разработка и производство боеголовок). Министерство обороны (управление программой).",
        },
        inventory: {
          en: "Approximately 120 operational warheads, with 40–60 available for immediate use at any time on patrol submarines. Total stockpile estimated at 225.",
          ru: "Примерно 120 оперативных боеголовок, 40–60 доступны для немедленного использования на патрульных подводных лодках. Общий запас оценивается в 225.",
        },
        tests: {
          en: "The UK does not conduct nuclear test explosions but relies on the US testing program for Trident missiles. Joint US-UK Demonstration and Shakedown Operations (DASO) launches are conducted from Vanguard submarines.",
          ru: "Великобритания не проводит ядерные испытательные взрывы, полагаясь на программу испытаний США для ракет Trident. Совместные американо-британские демонстрационные пуски проводятся с подводных лодок класса «Вэнгард».",
        },
        source: "https://en.wikipedia.org/wiki/Trident_(missile)#United_Kingdom",
      },
    ],
  },
  {
    id: "pakistan",
    name: {
      en: "Pakistan",
      ru: "Пакистан",
    },
    warheads: 170,
    weapons: [
      {
        id: "shaheen-iii",
        name: {
          en: "Shaheen-III (Hatf-6)",
          ru: "Shaheen-III (Hatf-6)",
        },
        versions: {
          en: "Shaheen-III (IRBM, mobile launcher)",
          ru: "Shaheen-III (БРСД, мобильная пусковая установка)",
        },
        description: {
          en: "The Shaheen-III is a Pakistani intermediate-range ballistic missile capable of reaching targets across India, the Middle East, and parts of Southeast Asia. It is a two-stage solid-fuel missile deployed on a road-mobile transporter-erector-launcher. The missile represents Pakistan's longest-range ballistic missile and a significant component of its strategic deterrent.",
          ru: "Shaheen-III — пакистанская баллистическая ракета средней дальности, способная поражать цели по всей Индии, на Ближнем Востоке и в некоторых частях Юго-Восточной Азии. Это двухступенчатая твердотопливная ракета на мобильной транспортно-пусковой установке. Ракета является самой дальнобойной пакистанской баллистической ракетой и важным компонентом стратегического сдерживания.",
        },
        upgrades: {
          en: "The Shaheen-III benefits from China's assistance in solid-fuel rocketry. The missile is believed to incorporate improved guidance and navigation systems. Future upgrades may include MIRV capability and improved countermeasure systems.",
          ru: "Shaheen-III использует китайскую помощь в области твердотопливного ракетостроения. Считается, что ракета оснащена улучшенными системами наведения и навигации. Будущие модернизации могут включать возможность РГЧ и улучшенные средства преодоления ПРО.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "2,750 km", ru: "2 750 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "single warhead, 10–50 kt", ru: "одна боеголовка, 10–50 кт" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~17 m", ru: "~17 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "~1.4 m", ru: "~1,4 м" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial", ru: "инерциальное" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "two-stage solid fuel", ru: "двухступенчатый твердотопливный" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~25 t", ru: "~25 т" } },
        ],
        history: {
          en: "Development of the Shaheen series began in the 1990s with Chinese and North Korean technical assistance. Shaheen-III was first tested in 2015 and entered service later that year. The missile was unveiled at a military parade in 2017. It is operated by the Pakistani Army Strategic Forces Command.",
          ru: "Разработка серии Shaheen началась в 1990-х годах с технической помощью Китая и Северной Кореи. Shaheen-III впервые испытан в 2015 году и поступил на вооружение в том же году. Ракета была представлена на военном параде в 2017 году. Она эксплуатируется Командованием стратегических сил армии Пакистана.",
        },
        designers: {
          en: "National Defence Complex (NDC) / NESCOM. Khan Research Laboratories (KRL) involved in earlier Shaheen variants.",
          ru: "National Defence Complex (NDC) / NESCOM. Khan Research Laboratories (KRL) участвовали в ранних вариантах Shaheen.",
        },
        inventory: {
          en: "Approximately 12 Shaheen-III launchers deployed, with 12–24 missiles estimated.",
          ru: "Примерно 12 пусковых установок Shaheen-III развёрнуты, по оценкам 12–24 ракеты.",
        },
        tests: {
          en: "Flight tests conducted from Sonmiani and other launch sites. The March 2015 test was the first publicly announced launch.",
          ru: "Лётные испытания проводились с Сонмиани и других пусковых площадок. Мартовский тест 2015 года был первым публично объявленным пуском.",
        },
        source: "https://en.wikipedia.org/wiki/Shaheen-III",
      },
      {
        id: "nasr-hatf-ix",
        name: {
          en: "Nasr (Hatf-IX)",
          ru: "Nasr (Hatf-IX)",
        },
        versions: {
          en: "Nasr (Hatf-IX), tactical battlefield missile",
          ru: "Nasr (Hatf-IX), тактическая ракета поля боя",
        },
        description: {
          en: "The Nasr is a Pakistani short-range battlefield nuclear missile designed for tactical use on the Indian-Pakistani border. It is a solid-fuel two-stage missile mounted on a mobile launcher. The Nasr is intended as a battlefield deterrent against Indian conventional military superiority and represents a significant shift in Pakistan's nuclear posture toward low-yield tactical nuclear weapons.",
          ru: "Nasr — пакистанская тактическая ядерная ракета малой дальности, предназначенная для использования на индийско-пакистанской границе. Это двухступенчатая твердотопливная ракета на мобильной пусковой установке. Nasr предназначена для сдерживания индийского превосходства в обычных вооружениях и представляет собой значительный сдвиг в ядерной доктрине Пакистана в сторону тактических ядерных боеприпасов малой мощности.",
        },
        upgrades: {
          en: "The Nasr has been tested in multiple salvo launches to demonstrate capability for multiple simultaneous strikes. Improvements likely include enhanced mobility, accuracy, and command-and-control systems. The system is designed for battlefield flexibility with rapid launch capability.",
          ru: "Nasr испытывалась в залповых пусках для демонстрации возможности нанесения нескольких одновременных ударов. Улучшения, вероятно, включают повышенную мобильность, точность и системы управления. Система предназначена для тактической гибкости с быстрым запуском.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "60 km", ru: "60 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "0.5–5 kt (variable yield)", ru: "0,5–5 кт (переменная мощность)" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~6 m", ru: "~6 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "~0.5 m", ru: "~0,5 м" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial", ru: "инерциальное" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "two-stage solid fuel", ru: "двухступенчатый твердотопливный" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~1.2 t", ru: "~1,2 т" } },
        ],
        history: {
          en: "The Nasr was first publicly tested in April 2011. Its development raised international concern due to the risks of escalation with tactical nuclear weapons on a densely populated battlefield. Pakistan has emphasized that the Nasr is a credible deterrent against any Indian military incursion.",
          ru: "Nasr впервые публично испытана в апреле 2011 года. Её разработка вызвала международную обеспокоенность из-за рисков эскалации с применением тактического ядерного оружия на густонаселённом театре военных действий. Пакистан подчёркивает, что Nasr является надёжным средством сдерживания любого индийского военного вторжения.",
        },
        designers: {
          en: "NESCOM (National Engineering and Scientific Commission).",
          ru: "NESCOM (National Engineering and Scientific Commission).",
        },
        inventory: {
          en: "Approximately 20 Nasr launchers deployed, with an estimated 20–30 missiles.",
          ru: "Примерно 20 пусковых установок Nasr развёрнуты, по оценкам 20–30 ракет.",
        },
        tests: {
          en: "Multiple flight tests since 2011, including salvo launches of multiple missiles simultaneously. Tests are announced by Inter-Services Public Relations.",
          ru: "Многочисленные лётные испытания с 2011 года, включая залповые пуски нескольких ракет одновременно. Испытания объявляются Межведомственной связью общественности.",
        },
        source: "https://en.wikipedia.org/wiki/Nasr_(missile)",
      },
    ],
  },
  {
    id: "india",
    name: {
      en: "India",
      ru: "Индия",
    },
    warheads: 164,
    weapons: [
      {
        id: "agni-v",
        name: {
          en: "Agni-V",
          ru: "Agni-V",
        },
        versions: {
          en: "Agni-V (ICBM, canisterized mobile launcher)",
          ru: "Agni-V (МБР, контейнерная мобильная пусковая установка)",
        },
        description: {
          en: "The Agni-V is an Indian intercontinental ballistic missile developed by the Defence Research and Development Organisation (DRDO). It is a three-stage solid-fuel missile deployable from a road-mobile canisterized launcher. The Agni-V gives India the capability to strike targets across China and most of Europe, marking India's entry into the ICBM club.",
          ru: "Agni-V — индийская межконтинентальная баллистическая ракета, разработанная Организацией оборонных исследований и разработок (DRDO). Это трёхступенчатая твердотопливная ракета, развёртываемая с мобильной контейнерной пусковой установки. Agni-V даёт Индии способность поражать цели по всему Китаю и большей части Европы, знаменуя вступление Индии в клуб МБР.",
        },
        upgrades: {
          en: "The Agni-V is believed to have MIRV capability for multiple warheads. A canisterized launch system enables rapid deployment from any location. The missile benefits from India's advanced solid-fuel rocketry program. A follow-on Agni-VI with multiple independently targetable warheads is in development.",
          ru: "Считается, что Agni-V имеет возможность РГЧ для нескольких боеголовок. Контейнерная пусковая система обеспечивает быстрое развёртывание с любого места. Ракета использует передовую индийскую программу твердотопливного ракетостроения. Разрабатывается后继 Agni-VI с разделяющимися головными частями.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "5,000–8,000 km", ru: "5 000–8 000 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "MIRV multiple warheads, estimated 200–300 kt each", ru: "РГЧ несколько боеголовок, по оценкам 200–300 кт каждая" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~17.5 m", ru: "~17,5 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "2 m", ru: "2 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~50 t", ru: "~50 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial with Ring Laser Gyro", ru: "инерциальное с кольцевым лазерным гироскопом" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
        ],
        history: {
          en: "The Agni series began with Agni-I in 2002. Agni-V was first tested in 2012 and was inducted into service in 2018. The missile significantly expands India's strategic reach. India follows a no-first-use nuclear policy but the Agni-V provides essential second-strike credibility against China.",
          ru: "Серия Agni началась с Agni-I в 2002 году. Agni-V впервые испытан в 2012 году и принят на вооружение в 2018 году. Ракета значительно расширяет стратегический охват Индии. Индия придерживается политики неприменения первой, но Agni-V обеспечивает необходимую способность ответного удара по Китаю.",
        },
        designers: {
          en: "Defence Research and Development Organisation (DRDO). Advanced Systems Laboratory (ASL). Production by Bharat Dynamics Limited.",
          ru: "Организация оборонных исследований и разработок (DRDO). Лаборатория передовых систем (ASL). Производство — Bharat Dynamics Limited.",
        },
        inventory: {
          en: "Approximately 16 Agni-V missiles deployed, with an estimated 48–80 warheads.",
          ru: "Примерно 16 ракет Agni-V развёрнуты, по оценкам 48–80 боеголовок.",
        },
        tests: {
          en: "Multiple successful tests: first in 2012 from Wheeler Island, subsequent tests from the Integrated Test Range. The December 2018 user trial validated operational readiness.",
          ru: "Множество успешных испытаний: первый в 2012 году с острова Уилер, последующие с Комплексного испытательного полигона. Пользовательские испытания в декабре 2018 года подтвердили оперативную готовность.",
        },
        source: "https://en.wikipedia.org/wiki/Agni-V",
      },
      {
        id: "k-4-slbm",
        name: {
          en: "K-4 (SLBM)",
          ru: "K-4 (БРПЛ)",
        },
        versions: {
          en: "K-4 (submarine-launched ballistic missile, range 3,500 km)",
          ru: "K-4 (баллистическая ракета подводных лодок, дальность 3 500 км)",
        },
        description: {
          en: "The K-4 is an Indian submarine-launched ballistic missile developed by the DRDO for India's Arihant-class nuclear-powered ballistic missile submarines. It is a two-stage solid-fuel missile with a range sufficient to strike targets across Pakistan and most of China. The K-4 enriches India's nuclear triad by providing a credible sea-based second-strike capability.",
          ru: "K-4 — индийская баллистическая ракета подводных лодок, разработанная DRDO для индийских атомных подводных лодок с баллистическими ракетами класса «Арихант». Это двухступенчатая твердотопливная ракета с дальностью, достаточной для поражения целей по всему Пакистану и большей части Китая. K-4 дополняет ядерную триаду Индии, обеспечивая надёжный морской ответный удар.",
        },
        upgrades: {
          en: "The K-4 is a follow-on to the shorter-range K-15 (B-05) missile. The missile incorporates lessons from the K-15 testing program. India is also developing the longer-range K-5 and K-6 SLBMs for future submarine classes.",
          ru: "K-4 является преемником ракеты K-15 (B-05) меньшей дальности. Ракета учитывает опыт программы испытаний K-15. Индия также разрабатывает БРПЛ K-5 и K-6 большей дальности для будущих классов подводных лодок.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "3,500 km", ru: "3 500 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "single warhead, estimated 200–500 kt", ru: "одна боеголовка, по оценкам 200–500 кт" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~12 m", ru: "~12 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "~1.3 m", ru: "~1,3 м" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial", ru: "инерциальное" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "two-stage solid fuel", ru: "двухступенчатый твердотопливный" } },
        ],
        history: {
          en: "The K-4 was first tested in 2014 from a submerged pontoon. Multiple development tests followed. The missile is now deployed on Arihant-class submarines alongside the shorter-range K-15. The K-4 significantly improves India's assured retaliation capability from the sea.",
          ru: "K-4 впервые испытан в 2014 году с подводного понтона. Последовали многочисленные испытания. Ракета развёрнута на подводных лодках класса «Арихант» вместе с K-15 меньшей дальности. K-4 значительно улучшает способность Индии к гарантированному ответному удару с моря.",
        },
        designers: {
          en: "Defence Research and Development Organisation (DRDO). Production by Bharat Dynamics Limited.",
          ru: "Организация оборонных исследований и разработок (DRDO). Производство — Bharat Dynamics Limited.",
        },
        inventory: {
          en: "Limited deployment on Arihant-class submarines. Estimated fewer than 10 missiles initially, with production ongoing.",
          ru: "Ограниченное развёртывание на подводных лодках класса «Арихант». Первоначально менее 10 ракет, производство продолжается.",
        },
        tests: {
          en: "First test March 2014 from a submerged platform. Multiple subsequent tests including from INS Arihant. Continued development testing for the submarine certification.",
          ru: "Первое испытание в марте 2014 года с подводной платформы. Многочисленные последующие тесты, включая пуски с INS Arihant. Продолжаются испытания для сертификации подводных лодок.",
        },
        source: "https://en.wikipedia.org/wiki/K-4_(missile)",
      },
    ],
  },
  {
    id: "israel",
    name: {
      en: "Israel",
      ru: "Израиль",
    },
    warheads: 90,
    weapons: [
      {
        id: "jericho-iii",
        name: {
          en: "Jericho III",
          ru: "Jericho III",
        },
        versions: {
          en: "Jericho III (ICBM, silo and mobile variants)",
          ru: "Jericho III (МБР, шахтного и мобильного базирования)",
        },
        description: {
          en: "The Jericho III is an Israeli intercontinental ballistic missile developed by Israel Aerospace Industries. It is a three-stage solid-fuel missile believed to be deployed in both silo-based and road-mobile configurations. The Jericho III provides Israel with a long-range nuclear strike capability and is part of Israel's undeclared nuclear deterrent.",
          ru: "Jericho III — израильская межконтинентальная баллистическая ракета, разработанная Israel Aerospace Industries. Это трёхступенчатая твердотопливная ракета, развёртываемая как в шахтном, так и в мобильном вариантах. Jericho III обеспечивает Израиль возможностью нанесения ядерного удара большой дальности и является частью необъявленного ядерного сдерживания Израиля.",
        },
        upgrades: {
          en: "The Jericho III follows the earlier Jericho I and Jericho II missiles with significantly improved range and payload. The missile is believed to incorporate advanced countermeasures and MIRV capability. Israel maintains a policy of deliberate ambiguity regarding its nuclear capabilities.",
          ru: "Jericho III наследует более ранним ракетам Jericho I и Jericho II со значительно улучшенными дальностью и полезной нагрузкой. Считается, что ракета оснащена передовыми средствами преодоления ПРО и возможностью РГЧ. Израиль придерживается политики намеренной неопределённости в отношении своего ядерного потенциала.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "4,800–6,500 km (estimated)", ru: "4 800–6 500 км (оценка)" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "single or MIRV, 200–500 kt", ru: "одна или РГЧ, 200–500 кт" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~15.5 m", ru: "~15,5 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "~1.5 m", ru: "~1,5 м" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial", ru: "инерциальное" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "three-stage solid fuel", ru: "трёхступенчатый твердотопливный" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~30 t", ru: "~30 т" } },
        ],
        history: {
          en: "The Jericho missile program began in the 1960s with French assistance. The Jericho III was first tested in 2008 from the Palmachim Airbase. Israel's nuclear policy is deliberately ambiguous — neither confirming nor denying possession of nuclear weapons. The Jericho III is believed to be the core of Israel's strategic deterrent.",
          ru: "Программа Jericho началась в 1960-х годах с французской помощью. Jericho III впервые испытан в 2008 году с авиабазы Пальмахим. Ядерная политика Израиля намеренно неопределённа — ни подтверждения, ни отрицания наличия ядерного оружия. Jericho III считается основой стратегического сдерживания Израиля.",
        },
        designers: {
          en: "Israel Aerospace Industries (IAI) / MLM Division. Rafael Advanced Defense Systems (warhead).",
          ru: "Israel Aerospace Industries (IAI) / MLM Division. Rafael Advanced Defense Systems (боеголовка).",
        },
        inventory: {
          en: "Estimated 24 Jericho III missiles deployed, with an estimated 50–90 warheads available across all delivery systems.",
          ru: "По оценкам, 24 ракеты Jericho III развёрнуты, с примерно 50–90 боеголовками на всех системах доставки.",
        },
        tests: {
          en: "Publicly announced test in 2008 (pop-up trajectory to the Mediterranean). Other tests have been conducted but details remain classified.",
          ru: "Публично объявленное испытание в 2008 году (навесная траектория в Средиземное море). Другие испытания проводились, но подробности остаются засекреченными.",
        },
        source: "https://en.wikipedia.org/wiki/Jericho_(missile)",
      },
    ],
  },
  {
    id: "north-korea",
    name: {
      en: "North Korea",
      ru: "Северная Корея",
    },
    warheads: 50,
    weapons: [
      {
        id: "hwasong-17",
        name: {
          en: "Hwasong-17",
          ru: "Хвасон-17",
        },
        versions: {
          en: "Hwasong-17 (ICBM, 11-axle mobile TEL)",
          ru: "Хвасон-17 (МБР, 11-осная мобильная пусковая установка)",
        },
        description: {
          en: "The Hwasong-17 is a North Korean intercontinental ballistic missile, the largest road-mobile ICBM ever deployed. It was unveiled at military parades and first flight-tested in 2022. The missile is capable of reaching the entire continental United States and represents a significant advancement in North Korea's missile technology.",
          ru: "Хвасон-17 — северокорейская межконтинентальная баллистическая ракета, самая большая мобильная МБР из когда-либо развёрнутых. Она была представлена на военных парадах и впервые испытана в полёте в 2022 году. Ракета способна достигать любой точки континентальной части США и представляет собой значительный прогресс в ракетной технологии Северной Кореи.",
        },
        upgrades: {
          en: "The Hwasong-17 is believed to have MIRV capability based on analysis of reentry vehicle tests. North Korea continues to refine the missile's guidance and reentry vehicle technology. The missile may have been developed with foreign technical assistance, possibly from China or Russia.",
          ru: "Считается, что Хвасон-17 имеет возможность РГЧ на основе анализа испытаний головных частей. Северная Корея продолжает совершенствовать наведение и технологию входа в атмосферу. Ракета могла быть разработана с иностранной технической помощью, возможно, от Китая или России.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "15,000 km (estimated)", ru: "15 000 км (оценка)" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "single or MIRV capability suspected, estimated 200–500 kt", ru: "возможность одной или РГЧ предполагается, по оценкам 200–500 кт" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~26 m", ru: "~26 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "~2.5 m", ru: "~2,5 м" } },
          { label: { en: "Launch weight", ru: "Стартовая масса" }, value: { en: "~80–90 t", ru: "~80–90 т" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial", ru: "инерциальное" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "liquid fuel (two-stage)", ru: "жидкостный (двухступенчатый)" } },
        ],
        history: {
          en: "The Hwasong-17 was first revealed in October 2020 at a military parade. The first full-range test was conducted on November 18, 2022, with the missile landing near Japan. North Korea claims the missile can reach targets anywhere in the world. The system is deployed on 11-axle transporter-erector-launcher vehicles.",
          ru: "Хвасон-17 впервые показан в октябре 2020 года на военном параде. Первое полномасштабное испытание проведено 18 ноября 2022 года с приземлением ракеты у берегов Японии. Северная Корея утверждает, что ракета может поражать цели в любой точке мира. Система развёрнута на 11-осных транспортно-пусковых установках.",
        },
        designers: {
          en: "Kim Jong-un (oversight). North Korean government/military complex — details of specific design bureaus are not publicly known.",
          ru: "Ким Чен Ын (руководство). Государственный/военный комплекс Северной Кореи — подробности о конкретных конструкторских бюро публично неизвестны.",
        },
        inventory: {
          en: "Estimated 10 Hwasong-17 missiles, possibly with 10–20 warheads.",
          ru: "По оценкам, 10 ракет Хвасон-17, возможно 10–20 боеголовок.",
        },
        tests: {
          en: "At least 5 known flight tests as of 2024, with varying success. The first successful full-range test was in November 2022. North Korea typically conducts tests at high lofted trajectories to simulate range.",
          ru: "По меньшей мере 5 известных лётных испытаний по состоянию на 2024 год с разной степенью успеха. Первый успешный полномасштабный тест — в ноябре 2022 года. Северная Корея обычно проводит испытания по навесным траекториям для симуляции дальности.",
        },
        source: "https://en.wikipedia.org/wiki/Hwasong-17",
      },
      {
        id: "pukguksong-3",
        name: {
          en: "Pukguksong-3 (KN-26)",
          ru: "Пуккыксон-3 (KN-26)",
        },
        versions: {
          en: "Pukguksong-3 (SLBM, submarine-launched)",
          ru: "Пуккыксон-3 (БРПЛ, подводного базирования)",
        },
        description: {
          en: "The Pukguksong-3 is a North Korean submarine-launched ballistic missile developed to provide a sea-based nuclear strike capability. It is a two-stage solid-fuel missile that can be launched from submarines or underwater platforms. The Pukguksong-3 represents North Korea's efforts to diversify its delivery systems and enhance second-strike survivability.",
          ru: "Пуккыксон-3 — северокорейская баллистическая ракета подводных лодок, разработанная для обеспечения ядерного удара с моря. Это двухступенчатая твердотопливная ракета, запускаемая с подводных лодок или подводных платформ. Пуккыксон-3 представляет попытки Северной Кореи диверсифицировать системы доставки и повысить устойчивость ответного удара.",
        },
        upgrades: {
          en: "The Pukguksong-3 follows the earlier Pukguksong-1 (KN-11) with longer range and more reliable solid-fuel motors. North Korea is developing a larger submarine to deploy these missiles, including a newly constructed submarine capable of carrying multiple SLBMs.",
          ru: "Пуккыксон-3 наследует более ранней Пуккыксон-1 (KN-11) с большей дальностью и более надёжными твердотопливными двигателями. Северная Корея разрабатывает более крупную подводную лодку для развёртывания этих ракет, включая новую подводную лодку, способную нести несколько БРПЛ.",
        },
        specs: [
          { label: { en: "Range", ru: "Дальность" }, value: { en: "1,900 km", ru: "1 900 км" } },
          { label: { en: "Warheads", ru: "Боеголовки" }, value: { en: "single warhead, estimated 200–500 kt", ru: "одна боеголовка, по оценкам 200–500 кт" } },
          { label: { en: "Length", ru: "Длина" }, value: { en: "~10 m", ru: "~10 м" } },
          { label: { en: "Diameter", ru: "Диаметр" }, value: { en: "~1.5 m", ru: "~1,5 м" } },
          { label: { en: "Guidance", ru: "Наведение" }, value: { en: "inertial", ru: "инерциальное" } },
          { label: { en: "Propulsion", ru: "Двигатель" }, value: { en: "two-stage solid fuel", ru: "двухступенчатый твердотопливный" } },
        ],
        history: {
          en: "The Pukguksong-3 was first tested in October 2019 from a submerged platform off the coast of Wonsan. North Korea continues to develop both the missile and dedicated submarine platforms. The missile is part of North Korea's expanding nuclear deterrent and provides a potential sea-based launch capability.",
          ru: "Пуккыксон-3 впервые испытан в октябре 2019 года с подводной платформы у побережья Вонсана. Северная Корея продолжает разработку как ракеты, так и специализированных подводных платформ. Ракета является частью расширяющегося ядерного сдерживания Северной Кореи и обеспечивает потенциальную возможность запуска с моря.",
        },
        designers: {
          en: "North Korean defence industry (details classified). Observed guidance from the Second Economic Committee.",
          ru: "Оборонная промышленность Северной Кореи (подробности засекречены). Управление Второго экономического комитета.",
        },
        inventory: {
          en: "Estimated 10 Pukguksong-3 missiles in development or limited deployment.",
          ru: "По оценкам, 10 ракет Пуккыксон-3 в разработке или ограниченном развёртывании.",
        },
        tests: {
          en: "October 2019 test (confirmed by South Korea and Japan). Additional tests from underwater platforms and possibly from North Korea's experimental submarine.",
          ru: "Октябрь 2019 года (подтверждено Южной Кореей и Японией). Дополнительные испытания с подводных платформ и, возможно, с экспериментальной подводной лодки Северной Кореи.",
        },
        source: "https://en.wikipedia.org/wiki/Pukguksong-3",
      },
    ],
  },
]
