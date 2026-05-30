export interface SafetyModel {
  id: string
  name: Record<string, string>
  description: Record<string, string>
  authors: Record<string, string>
  guarantors: Record<string, string>
  requirements: Record<string, string>
  breachProbability: Record<string, string>
  source: string
}

export const safetyModels: SafetyModel[] = [
  {
    id: "general-disarmament",
    name: { en: "General and Complete Disarmament", ru: "Всеобщее и полное разоружение" },
    description: {
      en: "A phased, verifiable elimination of all nuclear weapons under strict international supervision. Based on the UN General Assembly resolutions and the Treaty on General and Complete Disarmament proposals. All nuclear states gradually reduce their arsenals through mutually agreed stages, culminating in zero. Each stage includes transparency measures, on-site inspections, and verification by the IAEA and a dedicated disarmament agency.\n\nThe model assumes that as stockpiles shrink, the strategic value of retaining a few hidden weapons diminishes. A final 'breakout' scenario — where one state secretly retains warheads — is prevented by a robust inspection regime and the threat of conventional retaliation by a coalition of powers.",
      ru: "Поэтапная, верифицируемая ликвидация всего ядерного оружия под строгим международным контролем. Основана на резолюциях ГА ООН и предложениях Договора о всеобщем и полном разоружении. Все ядерные государства постепенно сокращают свои арсеналы согласованными этапами, кульминацией которых является ноль. Каждый этап включает меры транспарентности, инспекции на местах и верификацию МАГАТЭ и специальным агентством по разоружению.\n\nМодель предполагает, что по мере сокращения запасов стратегическая ценность сохранения нескольких скрытых боеголовок снижается. Финальный сценарий «прорыва» — когда одно государство тайно сохраняет боеголовки — предотвращается жёстким инспекционным режимом и угрозой обычного возмездия коалицией держав."
    },
    authors: {
      en: "UN General Assembly (First Special Session on Disarmament, 1978), numerous scholars — Jonathan Schell, John Burroughs",
      ru: "ГА ООН (Первая специальная сессия по разоружению, 1978), множество учёных — Джонатан Шелл, Джон Берроуз"
    },
    guarantors: {
      en: "UN Security Council (permanent members), IAEA, proposed International Disarmament Agency, coalition of non-nuclear states",
      ru: "СБ ООН (постоянные члены), МАГАТЭ, предлагаемое Международное агентство по разоружению, коалиция безъядерных государств"
    },
    requirements: {
      en: "— Political will of all nuclear states\n— Binding treaty with strict verification protocol\n— Inspection regime covering military and civilian nuclear facilities\n— Secure disposal of fissile material\n— Conventional force balance to prevent post-disarmament aggression\n— Funding for verification infrastructure (estimated $5–10B annually)",
      ru: "— Политическая воля всех ядерных государств\n— Обязательный договор со строгим протоколом верификации\n— Инспекционный режим, охватывающий военные и гражданские ядерные объекты\n— Безопасное захоронение расщепляющихся материалов\n— Баланс обычных вооружений для предотвращения агрессии после разоружения\n— Финансирование инфраструктуры верификации (оценка $5–10 млрд в год)"
    },
    breachProbability: {
      en: "**USA**: Low (functional democracy, treaty compliance tradition). **Russia**: Medium (historical compliance mixed, treaty withdrawal precedent). **China**: Medium (opaque decision-making, selective compliance). **UK/France**: Low. **India/Pakistan**: Medium-High (regional rivalry, unresolved conflicts). **North Korea**: High (isolated regime, history of treaty violations). **Israel**: Medium (undeclared status, no NPT membership).",
      ru: "**США**: Низкая (функциональная демократия, традиция соблюдения договоров). **Россия**: Средняя (исторически смешанное соблюдение, прецедент выхода из договоров). **Китай**: Средняя (непрозрачное принятие решений, выборочное соблюдение). **Великобритания/Франция**: Низкая. **Индия/Пакистан**: Средне-высокая (региональное соперничество, неразрешённые конфликты). **КНДР**: Высокая (изолированный режим, история нарушений договоров). **Израиль**: Средняя (необъявленный статус, не член ДНЯО)."
    },
    source: "https://en.wikipedia.org/wiki/General_and_complete_disarmament",
  },
  {
    id: "nuclear-weapons-convention",
    name: { en: "Nuclear Weapons Convention (NWC)", ru: "Конвенция о ядерном оружии" },
    description: {
      en: "A legally binding international treaty that comprehensively prohibits nuclear weapons, similar to the Biological Weapons Convention and Chemical Weapons Convention. The NWC would ban development, testing, production, stockpiling, transfer, use, and threat of use of nuclear weapons. It would establish a timeline for destruction of existing arsenals with strict verification.\n\nThe model draws on the Template NWC drafted by civil society and endorsed by the International Campaign to Abolish Nuclear Weapons (ICAN). The Treaty on the Prohibition of Nuclear Weapons (TPNW, 2017) is a partial step — it bans nuclear weapons but lacks enforcement mechanisms against nuclear-armed states.",
      ru: "Юридически обязывающий международный договор, всесторонне запрещающий ядерное оружие, аналогичный Конвенции о биологическом оружии и Конвенции о химическом оружии. Конвенция запретила бы разработку, испытания, производство, накопление, передачу, применение и угрозу применения ядерного оружия. Она установила бы график уничтожения существующих арсеналов со строгой верификацией.\n\nМодель опирается на шаблон Конвенции, разработанный гражданским обществом и одобренный Международной кампанией за ликвидацию ядерного оружия (ICAN). Договор о запрещении ядерного оружия (ДЗЯО, 2017) — частичный шаг: он запрещает ядерное оружие, но не имеет механизмов принуждения в отношении ядерных государств."
    },
    authors: {
      en: "ICAN (International Campaign to Abolish Nuclear Weapons), UN working groups, civil society drafters",
      ru: "ICAN (Международная кампания за ликвидацию ядерного оружия), рабочие группы ООН, разработчики от гражданского общества"
    },
    guarantors: {
      en: "States Parties to the Convention, UN Security Council, IAEA verification, civil society monitoring",
      ru: "Государства-участники Конвенции, СБ ООН, верификация МАГАТЭ, мониторинг гражданского общества"
    },
    requirements: {
      en: "— Ratification by all nuclear-armed states\n— Robust verification and challenge inspection mechanism\n— Destruction timeline with intermediate milestones\n— Management of fissile material stockpiles\n— Compliance and enforcement provisions\n— Technical and financial assistance for disarmament",
      ru: "— Ратификация всеми ядерными государствами\n— Надёжный механизм верификации и инспекций по вызову\n— График уничтожения с промежуточными этапами\n— Управление запасами расщепляющихся материалов\n— Положения о соблюдении и принуждении\n— Техническая и финансовая помощь в разоружении"
    },
    breachProbability: {
      en: "**USA**: Low. **Russia**: Medium. **China**: Medium. **UK/France**: Low. **India/Pakistan**: Medium. **North Korea**: High. **Israel**: Medium.\n\nThe NWC faces the same enforcement challenges as the TPNW — nuclear states currently reject it outright. Breach probability drops significantly only after the first 10–15 years of successful implementation.",
      ru: "**США**: Низкая. **Россия**: Средняя. **Китай**: Средняя. **Великобритания/Франция**: Низкая. **Индия/Пакистан**: Средняя. **КНДР**: Высокая. **Израиль**: Средняя.\n\nКонвенция сталкивается с теми же проблемами принуждения, что и ДЗЯО — ядерные государства сейчас категорически отвергают его. Вероятность нарушения значительно снижается только после первых 10–15 лет успешной реализации."
    },
    source: "https://en.wikipedia.org/wiki/Nuclear_Weapons_Convention",
  },
  {
    id: "world-federalism",
    name: { en: "World Federal Government", ru: "Мировое федеративное правительство" },
    description: {
      en: "Establishment of a supranational federal government with a monopoly on legitimate use of force, including nuclear weapons. Drawing on the ideas of world federalism (Albert Einstein, the Russell-Einstein Manifesto), this model proposes a world federation where nations retain autonomy over local affairs but cede military power to a central authority.\n\nThe federation would maintain a minimal nuclear deterrent solely for enforcement against any state that attempts to develop or use nuclear weapons. Over time, as trust builds, the central arsenal is dismantled. The model requires fundamental restructuring of international relations — a 'constitutional moment' for humanity.",
      ru: "Создание наднационального федерального правительства с монополией на легитимное применение силы, включая ядерное оружие. Опираясь на идеи мирового федерализма (Альберт Эйнштейн, Манифест Рассела — Эйнштейна), эта модель предлагает мировую федерацию, где нации сохраняют автономию в местных делах, но передают военную власть центральному органу.\n\nФедерация сохранит минимальный ядерный сдерживающий потенциал исключительно для принуждения любого государства, которое попытается разработать или применить ядерное оружие. Со временем, по мере укрепления доверия, центральный арсенал ликвидируется. Модель требует фундаментальной перестройки международных отношений — «конституционного момента» для человечества."
    },
    authors: {
      en: "Albert Einstein, Bertrand Russell, Grenville Clark, Louis B. Sohn, world federalist movement",
      ru: "Альберт Эйнштейн, Бертран Рассел, Гренвилл Кларк, Луис Сон, движение мирового федерализма"
    },
    guarantors: {
      en: "World Federal Government (legislative, executive, judicial branches). Initially formed by consensus of major powers. Transition period overseen by a UN-chartered constitutional assembly.",
      ru: "Мировое федеральное правительство (законодательная, исполнительная, судебная ветви). Первоначально формируется консенсусом крупных держав. Переходный период контролируется конституционной ассамблеей по уставу ООН."
    },
    requirements: {
      en: "— Global constitutional convention\n— Agreement on representation (one-state-one-vote vs population-based)\n— Transfer of nuclear arsenals to federal authority\n— Establishment of federal enforcement mechanisms\n— Regional security arrangements during transition\n— Deep integration of global economic and legal systems",
      ru: "— Глобальная конституционная ассамблея\n— Соглашение о представительстве (одна страна — один голос vs по населению)\n— Передача ядерных арсеналов федеральной власти\n— Создание федеральных механизмов принуждения\n— Региональные соглашения безопасности на переходный период\n— Глубокая интеграция глобальных экономических и правовых систем"
    },
    breachProbability: {
      en: "**All states**: Initially High — the transition to world government would face resistance from sovereign governments, nationalist movements, and power elites. Breach probability decreases over time as the federal system consolidates.\n\nThe greatest risk is during the transition period. Historical analogues (formation of the US federal government, EU integration) suggest 20–50 years of instability before consolidation.",
      ru: "**Все государства**: Изначально высокая — переход к мировому правительству столкнётся с сопротивлением суверенных правительств, националистических движений и элит. Вероятность нарушения снижается по мере консолидации федеральной системы.\n\nНаибольший риск — в переходный период. Исторические аналоги (формирование федерального правительства США, интеграция ЕС) предполагают 20–50 лет нестабильности до консолидации."
    },
    source: "https://en.wikipedia.org/wiki/World_government",
  },
  {
    id: "mutual-assured-safety",
    name: { en: "Mutual Assured Safety (MAS)", ru: "Взаимная гарантированная безопасность" },
    description: {
      en: "A cooperative security model where states define security not in terms of military power against each other, but in terms of shared threats: climate change, pandemics, terrorism, and nuclear proliferation. Nuclear weapons are progressively eliminated as irrelevant to addressing these common challenges.\n\nThe concept, developed by the Commission on Global Security, Justice & Governance, shifts the paradigm from 'how to deter enemies' to 'how to solve problems together'. Joint threat reduction programs (like the Nunn-Lugar Cooperative Threat Reduction program) are scaled up globally. Intelligence-sharing, joint command structures, and integrated defense systems replace competitive military postures.",
      ru: "Модель кооперативной безопасности, где государства определяют безопасность не через военную силу друг против друга, а через общие угрозы: изменение климата, пандемии, терроризм и ядерное распространение. Ядерное оружие постепенно ликвидируется как нерелевантное для решения этих общих задач.\n\nКонцепция, разработанная Комиссией по глобальной безопасности, правосудию и управлению, смещает парадигму с «как сдерживать врагов» на «как решать проблемы вместе». Совместные программы снижения угроз (такие как программа Нанна — Лугара) расширяются до глобального масштаба. Обмен разведданными, совместные командные структуры и интегрированные системы обороны заменяют конкурентные военные позиции."
    },
    authors: {
      en: "Commission on Global Security, Justice & Governance (2015), Gareth Evans, Mohamed Sahnoun, Rolf Ekéus",
      ru: "Комиссия по глобальной безопасности, правосудию и управлению (2015), Гарет Эванс, Мохамед Сахнун, Рольф Экеус"
    },
    guarantors: {
      en: "Regional security organizations (AU, ASEAN, OSCE, etc.), UN Department of Political and Peacebuilding Affairs, joint threat reduction centers",
      ru: "Региональные организации безопасности (АС, АСЕАН, ОБСЕ и др.), Департамент ООН по политическим вопросам и миростроительству, совместные центры снижения угроз"
    },
    requirements: {
      en: "— Reorientation of military budgets toward cooperative security\n— Establishment of joint intelligence and early warning centers\n— Integration of regional security architectures\n— Joint threat assessment and response mechanisms\n— Transparency and confidence-building measures\n— Robust verification of disarmament pledges",
      ru: "— Переориентация военных бюджетов на кооперативную безопасность\n— Создание совместных центров разведки и раннего предупреждения\n— Интеграция региональных архитектур безопасности\n— Совместные механизмы оценки угроз и реагирования\n— Меры транспарентности и укрепления доверия\n— Надёжная верификация обязательств по разоружению"
    },
    breachProbability: {
      en: "**All states**: Medium. The model requires a fundamental shift in security culture, which takes decades. Breach is most likely when a state perceives a direct military threat from another — if cooperation breaks down in one region, it could cascade globally.\n\nRegional conflicts (e.g., India-Pakistan, Israel-Iran) present the greatest challenge for this model, as their security perceptions are deeply rooted in military competition.",
      ru: "**Все государства**: Средняя. Модель требует фундаментального сдвига в культуре безопасности, что занимает десятилетия. Нарушение наиболее вероятно, когда государство воспринимает прямую военную угрозу от другого — если сотрудничество разрушается в одном регионе, это может каскадно распространиться глобально.\n\nРегиональные конфликты (напр., Индия-Пакистан, Израиль-Иран) представляют наибольший вызов для этой модели, поскольку их восприятие безопасности глубоко укоренено в военном соперничестве."
    },
    source: "https://www.globalsecurityjusticegovernance.org",
  },
  {
    id: "minimum-deterrence",
    name: { en: "Minimum / Existential Deterrence", ru: "Минимальное / экзистенциальное сдерживание" },
    description: {
      en: "Reduction of nuclear arsenals to the absolute minimum required for deterrence — perhaps 50–100 warheads per major power, and fewer for smaller nuclear states. The model accepts that complete zero may be unattainable in the foreseeable future, but seeks to minimize risks through drastic reductions.\n\nPioneered by scholars like Kenneth Waltz (defensive realism), the model argues that even a few nuclear weapons are sufficient for deterrence. By reducing to minimum levels, the risks of accidental launch, terrorist acquisition, and escalation during crises are dramatically decreased. Missiles are de-alerted (warheads stored separately from delivery systems), and no cities are targeted under peacetime posture.\n\nThe concept of 'minimum deterrence' was adopted in practice by India, Pakistan, and China, though their definitions of 'minimum' vary.",
      ru: "Сокращение ядерных арсеналов до абсолютного минимума, необходимого для сдерживания — возможно, 50–100 боеголовок на крупную державу и меньше для небольших ядерных государств. Модель признаёт, что полный ноль может быть недостижим в обозримом будущем, но стремится минимизировать риски через радикальное сокращение.\n\nРазработанная такими учёными, как Кеннет Уолтц (оборонительный реализм), модель утверждает, что даже несколько ядерных боезарядов достаточно для сдерживания. Сокращение до минимального уровня резко снижает риски случайного пуска, приобретения террористами и эскалации во время кризисов. Ракеты снимаются с боевого дежурства (боеголовки хранятся отдельно от средств доставки), и ни один город не является целью в мирное время.\n\nКонцепция «минимального сдерживания» принята на практике Индией, Пакистаном и Китаем, хотя их определения «минимума» различаются."
    },
    authors: {
      en: "Kenneth Waltz, Morton Halperin, McGeorge Bundy (the 'minimum deterrence' concept), Bruce Blair (de-alerting advocacy)",
      ru: "Кеннет Уолтц, Мортон Халперин, Макджордж Банди (концепция «минимального сдерживания»), Брюс Блэр (пропаганда снятия с боевого дежурства)"
    },
    guarantors: {
      en: "Nuclear-armed states themselves, monitored by bilateral agreements (e.g., New START successor) or multilateral frameworks. Verification by IAEA and national technical means.",
      ru: "Сами ядерные государства под контролем двусторонних соглашений (напр., преемник СНВ-3) или многосторонних рамок. Верификация МАГАТЭ и национальными техническими средствами."
    },
    requirements: {
      en: "— Reduction treaties with verified warhead counting\n— De-alerting of all delivery systems\n— Separation of warheads from delivery vehicles\n— No-first-use pledges by all nuclear states\n— Transparency on fissile material stockpiles\n— Robust crisis communication channels",
      ru: "— Договоры о сокращении с верифицированным подсчётом боеголовок\n— Снятие всех средств доставки с боевого дежурства\n— Раздельное хранение боеголовок и средств доставки\n— Обязательства о неприменении первыми всеми ядерными государствами\n— Прозрачность в отношении запасов расщепляющихся материалов\n— Надёжные каналы связи в кризисных ситуациях"
    },
    breachProbability: {
      en: "**USA/Russia**: Low-Medium (de-alerting is reversible). **China**: Low (doctrine already close to minimum). **India/Pakistan**: Medium (mutual suspicion, arms race dynamic). **UK/France**: Low. **North Korea**: Medium (unpredictable leadership). **Israel**: Low-Medium.\n\nThe main risk is not deliberate breach but rapid re-alerting in a crisis — what one expert calls 'the bolt-out-of-the-blue paradox': minimum deterrence systems can be re-alerted quickly, which could itself trigger escalation.",
      ru: "**США/Россия**: Низкая-средняя (снятие с дежурства обратимо). **Китай**: Низкая (доктрина уже близка к минимальной). **Индия/Пакистан**: Средняя (взаимное подозрение, динамика гонки вооружений). **Великобритания/Франция**: Низкая. **КНДР**: Средняя (непредсказуемое руководство). **Израиль**: Низкая-средняя.\n\nГлавный риск — не преднамеренное нарушение, а быстрое возвращение на боевое дежурство в кризис, что один эксперт называет «парадоксом внезапного удара»: системы минимального сдерживания могут быть быстро возвращены в боевую готовность, что само по себе может спровоцировать эскалацию."
    },
    source: "https://en.wikipedia.org/wiki/Minimum_deterrence",
  },
  {
    id: "nuclear-free-zones",
    name: { en: "Expansion of Nuclear-Weapon-Free Zones", ru: "Расширение безъядерных зон" },
    description: {
      en: "Building on existing nuclear-weapon-free zones (Latin America — Treaty of Tlatelolco, South Pacific — Rarotonga, Southeast Asia — Bangkok, Africa — Pelindaba, Central Asia — Semipalatinsk, Mongolia), this model proposes their global expansion until all territory is covered.\n\nEach zone prohibits development, stationing, transit, and use of nuclear weapons within its boundaries. Nuclear-armed states are required to sign protocols respecting the zone's status. Overlapping and adjacent zones eventually merge, creating a global nuclear-free norm. As the zones expand, nuclear powers find it increasingly difficult to maintain their arsenals — basing options shrink, transit routes are constrained, and testing becomes logistically impossible.",
      ru: "Опираясь на существующие безъядерные зоны (Латинская Америка — Договор Тлателолко, Южная часть Тихого океана — Раратонга, Юго-Восточная Азия — Бангкок, Африка — Пелиндаба, Центральная Азия — Семипалатинск, Монголия), эта модель предлагает их глобальное расширение до покрытия всей территории.\n\nКаждая зона запрещает разработку, размещение, транзит и применение ядерного оружия в своих границах. Ядерные государства обязаны подписать протоколы, уважающие статус зоны. Перекрывающиеся и смежные зоны в конечном счёте сливаются, создавая глобальную безъядерную норму. По мере расширения зон ядерным державам становится всё труднее поддерживать свои арсеналы — варианты базирования сокращаются, маршруты транзита ограничиваются, испытания становятся логистически невозможными."
    },
    authors: {
      en: "Alfonso García Robles (Treaty of Tlatelolco, Nobel Peace Prize 1982), Ramesh Thakur, nuclear-free zone treaty drafters across five continents",
      ru: "Альфонсо Гарсиа Роблес (Договор Тлателолко, Нобелевская премия мира 1982), Рамеш Тхакур, разработчики договоров безъядерных зон на пяти континентах"
    },
    guarantors: {
      en: "Zone member states, UN Office for Disarmament Affairs (UNODA), IAEA (safeguards), nuclear-weapon states (protocol signatories)",
      ru: "Государства-члены зоны, Управление ООН по вопросам разоружения (UNODA), МАГАТЭ (гарантии), ядерные государства (подписанты протоколов)"
    },
    requirements: {
      en: "— Nuclear-weapon states must sign and ratify zone protocols (currently some have not)\n— Resolution of territorial disputes within proposed zones (e.g., South Asia, Middle East)\n— Verification and compliance mechanisms for each zone\n— Prohibition of nuclear transit through zone territory\n— Universalization of IAEA comprehensive safeguards\n— Establishment of a Middle East NWFZ (the most challenging remaining region)",
      ru: "— Ядерные государства должны подписать и ратифицировать протоколы зон (в настоящее время некоторые не сделали этого)\n— Разрешение территориальных споров в пределах предлагаемых зон (напр., Южная Азия, Ближний Восток)\n— Механизмы верификации и соблюдения для каждой зоны\n— Запрет транзита ядерного оружия через территорию зоны\n— Универсализация всеобъемлющих гарантий МАГАТЭ\n— Создание безъядерной зоны на Ближнем Востоке (самый сложный оставшийся регион)"
    },
    breachProbability: {
      en: "**All states**: Low-Medium. Existing zones have strong compliance records — no state has developed nuclear weapons within a NWFZ. The main breach risks are:\n— Transit violations by nuclear states\n— Withdrawal from zone treaties by member states\n— Failure to establish a Middle East zone due to Israel-Iran tensions\nOnce established, zones tend to be self-reinforcing: exiting a zone signals hostile intent and invites sanctions.",
      ru: "**Все государства**: Низкая-средняя. Существующие зоны имеют хорошую историю соблюдения — ни одно государство не разработало ядерное оружие в рамках безъядерной зоны. Основные риски нарушения:\n— Нарушения транзита ядерными государствами\n— Выход государств-членов из договоров зоны\n— Невозможность создания зоны на Ближнем Востоке из-за напряжённости между Израилем и Ираном\nПосле создания зоны, как правило, самоподкрепляются: выход из зоны сигнализирует о враждебных намерениях и влечёт санкции."
    },
    source: "https://en.wikipedia.org/wiki/Nuclear-weapon-free_zone",
  },
  {
    id: "defensive-dominance",
    name: { en: "Strategic Defensive Dominance / Mutually Assured Protection", ru: "Стратегическое превосходство обороны / Взаимная гарантированная защита" },
    description: {
      en: "A technological approach where advanced missile defense systems (ground-based, space-based, and directed-energy) make nuclear attack virtually impossible. If every nation is protected by an effective defense shield, nuclear weapons lose their strategic value and become obsolete.\n\nProposed by the Strategic Defense Initiative (SDI, 'Star Wars') under Reagan and revived in modified form by modern concepts. The model acknowledges that perfect defense is likely unattainable — but a defense level high enough to make the cost-benefit calculus of a first strike unfavorable (e.g., 90%+ interception rate) could suffice. Combined with boost-phase intercept and space-based sensors, the offense-defense balance shifts to defense.\n\nCritically, the model requires universal participation — if only one power has defenses, others will build more offensive weapons to overwhelm it.",
      ru: "Технологический подход, при котором передовые системы противоракетной обороны (наземные, космические и с использованием направленной энергии) делают ядерную атаку практически невозможной. Если каждая нация защищена эффективным оборонительным щитом, ядерное оружие теряет свою стратегическую ценность и устаревает.\n\nПредложена Стратегической оборонной инициативой (СОИ, «Звёздные войны») при Рейгане и возрождена в модифицированной форме в современных концепциях. Модель признаёт, что совершенная оборона, вероятно, недостижима — но достаточно высокий уровень защиты, делающий расчёт выгод первого удара неблагоприятным (напр., 90%+ перехвата), может сработать. В сочетании с перехватом на разгонном участке и космическими сенсорами баланс нападения и обороны смещается в пользу обороны.\n\nКритически важно: модель требует всеобщего участия — если только одна держава имеет оборону, другие будут наращивать наступательные вооружения, чтобы её преодолеть."
    },
    authors: {
      en: "Ronald Reagan (SDI concept), Freeman Dyson, Lowell Wood, modern think tanks (Heritage Foundation, Hudson Institute)",
      ru: "Рональд Рейган (концепция СОИ), Фримен Дайсон, Лоуэлл Вуд, современные аналитические центры (Heritage Foundation, Hudson Institute)"
    },
    guarantors: {
      en: "Each state operates its own defense systems under a universal protocol. Shared early-warning network governed by a multilateral treaty. Space-based sensor data shared in real time.",
      ru: "Каждое государство управляет собственными системами обороны в рамках универсального протокола. Совместная сеть раннего предупреждения, управляемая многосторонним договором. Данные космических сенсоров передаются в реальном времени."
    },
    requirements: {
      en: "— Immense R&D investment (estimated $500B–1T over 10–15 years)\n— Deployment of space-based interceptors and sensors\n— Ban on anti-satellite weapons (to protect defense constellation)\n— Limits on offensive missile numbers and MIRV capability\n— Integrated command and control for global defense network\n— Resolution of treaty issues (ABM Treaty withdrawal concerns)",
      ru: "— Огромные инвестиции в НИОКР (оценка $500 млрд–1 трлн за 10–15 лет)\n— Развёртывание космических перехватчиков и сенсоров\n— Запрет противоспутникового оружия (для защиты оборонительной группировки)\n— Ограничения на количество наступательных ракет и возможность РГЧ\n— Интегрированное командование и контроль глобальной сети обороны\n— Решение договорных вопросов (проблема выхода из Договора по ПРО)"
    },
    breachProbability: {
      en: "**USA**: Low (technology leader). **Russia**: Medium (concern about US dominance in defense tech). **China**: Medium-High (fears defense shield used for counterforce advantage). **All others**: Low-Medium (would rely on collectively operated systems).\n\nThe greatest breach risk is asymmetric: a state that lags in defense tech may build offensive nuclear forces specifically designed to overwhelm the defense network, triggering a new arms race rather than disarmament.",
      ru: "**США**: Низкая (технологический лидер). **Россия**: Средняя (озабоченность доминированием США в оборонных технологиях). **Китай**: Средне-высокая (опасения, что оборонительный щит будет использован для контрсилового преимущества). **Все остальные**: Низкая-средняя (полагались бы на коллективно управляемые системы).\n\nНаибольший риск нарушения — асимметричный: государство, отстающее в оборонных технологиях, может создать наступательные ядерные силы, специально предназначенные для преодоления оборонительной сети, что спровоцирует новую гонку вооружений вместо разоружения."
    },
    source: "https://en.wikipedia.org/wiki/Strategic_Defense_Initiative",
  },
  {
    id: "civil-society-transformation",
    name: { en: "Civil Society / Grassroots Transformation", ru: "Трансформация через гражданское общество" },
    description: {
      en: "A bottom-up model where global civil society movements generate enough political pressure to force nuclear disarmament. Historical precedents include the anti-nuclear movements of the 1980s (which contributed to INF Treaty), the International Campaign to Ban Landmines (Ottawa Treaty), and the climate justice movement.\n\nThe model leverages: public opinion shifts in nuclear-armed democracies (voters demanding disarmament), corporate divestment from nuclear weapons producers, legal challenges through national and international courts, scientific condemnation (medical and environmental consequences of nuclear war), and nonviolent direct action at nuclear bases.\n\nAs public pressure mounts, even authoritarian states face consequences — international isolation, economic sanctions, and diplomatic costs — that make nuclear retention more costly than disarmament.",
      ru: "Низовая модель, в которой глобальные движения гражданского общества создают достаточное политическое давление, чтобы принудить к ядерному разоружению. Исторические прецеденты включают антиядерные движения 1980-х (способствовавшие Договору РСМД), Международную кампанию по запрещению противопехотных мин (Оттавский договор) и движение за климатическую справедливость.\n\nМодель использует: сдвиги в общественном мнении в ядерных демократиях (избиратели, требующие разоружения), корпоративный отказ от инвестиций в производителей ядерного оружия, юридические вызовы через национальные и международные суды, научное осуждение (медицинские и экологические последствия ядерной войны) и ненасильственные прямые действия на ядерных базах.\n\nПо мере роста общественного давления даже авторитарные государства сталкиваются с последствиями — международная изоляция, экономические санкции, дипломатические издержки — которые делают сохранение ядерного оружия более затратным, чем разоружение."
    },
    authors: {
      en: "International Campaign to Abolish Nuclear Weapons (ICAN, Nobel Peace Prize 2017), Physicians for Social Responsibility (PSR), International Physicians for the Prevention of Nuclear War (IPPNW, Nobel Peace Prize 1985), Greenpeace",
      ru: "Международная кампания за ликвидацию ядерного оружия (ICAN, Нобелевская премия мира 2017), «Врачи за социальную ответственность» (PSR), «Врачи мира за предотвращение ядерной войны» (IPPNW, Нобелевская премия мира 1985), Greenpeace"
    },
    guarantors: {
      en: "Civil society organizations, international courts (ICJ, ICC), ethical investment funds, scientific academies, media networks, religious institutions",
      ru: "Организации гражданского общества, международные суды (МС, МУС), этические инвестиционные фонды, научные академии, медиасети, религиозные институты"
    },
    requirements: {
      en: "— Sustained public awareness campaigns\n— Education on nuclear consequences in school curricula\n— Corporate divestment campaigns (universities, pension funds)\n— Legal strategies: ICJ advisory opinions, national constitutional challenges\n— Civil disobedience at nuclear facilities\n— Building coalitions across political spectrums\n— Amplifying voices of nuclear test survivors (Hibakusha) and affected communities",
      ru: "— Устойчивые кампании повышения общественной осведомлённости\n— Обучение последствиям ядерной войны в школьных программах\n— Кампании корпоративного отказа от инвестиций (университеты, пенсионные фонды)\n— Юридические стратегии: консультативные заключения МС, национальные конституционные вызовы\n— Гражданское неповиновение на ядерных объектах\n— Построение коалиций через политические спектры\n— Усиление голосов выживших после ядерных испытаний (хибакуся) и пострадавших сообществ"
    },
    breachProbability: {
      en: "**Democracies**: Low-Medium (public pressure is effective but slow; governments may resist disarmament despite public opinion). **Authoritarian states**: Medium-High (less responsive to civil society, but international isolation and economic pressure can still compel change).\n\nThe model's main limitation: it has succeeded for specific weapons (landmines, cluster munitions) but not for weapons that states consider central to their sovereignty and security. Nuclear weapons are in a different category — changing this perception is the core challenge.",
      ru: "**Демократии**: Низкая-средняя (общественное давление эффективно, но медленно; правительства могут сопротивляться разоружению вопреки общественному мнению). **Авторитарные государства**: Средне-высокая (менее восприимчивы к гражданскому обществу, но международная изоляция и экономическое давление всё же могут принудить к изменениям).\n\nОсновное ограничение модели: она добилась успеха в отношении конкретных видов оружия (мины, кассетные боеприпасы), но не в отношении оружия, которое государства считают центральным для своего суверенитета и безопасности. Ядерное оружие находится в другой категории — изменение этого восприятия является ключевой задачей."
    },
    source: "https://www.icanw.org",
  },
  {
    id: "new-political-thinking",
    name: { en: "New Political Thinking and Common Security", ru: "Новое политическое мышление и общая безопасность" },
    description: {
      en: "A comprehensive model developed in the Soviet Union in the 1980s, primarily by Mikhail Gorbachev and his circle of advisors (Alexander Yakovlev, Eduard Shevardnadze, Georgy Shakhnazarov), complemented by Andrei Sakharov's earlier 'convergence' theory. The model's core premise: in the nuclear age, security cannot be achieved at the expense of others — it must be mutual.\n\nKey principles include: 'reasonable sufficiency' (разумная достаточность) — maintaining military forces only at the level necessary for defense, not for offense; the 'Common European Home' — a vision of Europe from the Atlantic to the Urals as a single security space; and the primacy of universal human values over class or national interests.\n\nThis was not merely theoretical — it directly shaped Soviet foreign policy from 1985–1991, leading to the INF Treaty (eliminating entire classes of nuclear missiles), START I (strategic reductions), unilateral nuclear test moratoriums, withdrawal from Afghanistan, and allowing the peaceful revolutions of Eastern Europe. The model proved that a nuclear superpower could voluntarily reverse the arms race.\n\nThe model lost influence after the Soviet collapse. Critics argue it was naive — it assumed reciprocity that did not always materialize. However, its core insight — that security is indivisible — remains foundational for disarmament thinking.",
      ru: "Всеобъемлющая модель, разработанная в Советском Союзе в 1980-х годах, прежде всего Михаилом Горбачёвым и его кругом советников (Александр Яковлев, Эдуард Шеварднадзе, Георгий Шахназаров), дополненная более ранней теорией «конвергенции» Андрея Сахарова. Основная посылка модели: в ядерный век безопасность не может быть достигнута за счёт других — она должна быть взаимной.\n\nКлючевые принципы: «разумная достаточность» — поддержание вооружённых сил только на уровне, необходимом для обороны, а не для нападения; «Общеевропейский дом» — видение Европы от Атлантики до Урала как единого пространства безопасности; примат общечеловеческих ценностей над классовыми или национальными интересами.\n\nЭто была не просто теория — она напрямую определяла советскую внешнюю политику 1985–1991 годов, приведя к Договору РСМД (ликвидация целых классов ядерных ракет), СНВ-1 (стратегические сокращения), односторонним мораториям на ядерные испытания, выводу войск из Афганистана и мирным революциям в Восточной Европе. Модель доказала, что ядерная сверхдержава может добровольно обратить вспять гонку вооружений.\n\nМодель утратила влияние после распада СССР. Критики считают её наивной — она предполагала взаимность, которая не всегда реализовывалась. Однако её ключевой принцип — неделимость безопасности — остаётся основополагающим для мышления о разоружении."
    },
    authors: {
      en: "Mikhail Gorbachev (Нобелевская премия мира 1990), Andrei Sakharov (Нобелевская премия мира 1975), Alexander Yakovlev, Eduard Shevardnadze, Georgy Shakhnazarov",
      ru: "Михаил Горбачёв (Нобелевская премия мира 1990), Андрей Сахаров (Нобелевская премия мира 1975), Александр Яковлев, Эдуард Шеварднадзе, Георгий Шахназаров"
    },
    guarantors: {
      en: "The model relies on great power leadership (especially the initiative of nuclear superpowers), backed by UN Security Council resolutions and multilateral verification. The INF Treaty's implementation demonstrated that bilateral US-Soviet inspection mechanisms were effective. In a wider framework, the OSCE could serve as the institutional guarantor of common security.",
      ru: "Модель опирается на лидерство великих держав (прежде всего инициативу ядерных сверхдержав), подкреплённое резолюциями СБ ООН и многосторонней верификацией. Реализация Договора РСМД показала, что двусторонние советско-американские инспекционные механизмы эффективны. В более широких рамках ОБСЕ могла бы служить институциональным гарантом общей безопасности."
    },
    requirements: {
      en: "— Political leadership willing to break with established security paradigms\n— Acceptance of mutual vulnerability as a starting point\n— Binding commitments to 'reasonable sufficiency' force levels\n— Negotiated, verifiable disarmament treaties (not just unilateral gestures)\n— Integration of former adversaries into common security institutions\n— Crisis management mechanisms to rebuild trust after breakdowns\n— The model's greatest requirement: trust. Without it, the entire framework collapses.",
      ru: "— Политическое руководство, готовое отказаться от устоявшихся парадигм безопасности\n— Принятие взаимной уязвимости как отправной точки\n— Обязательные обязательства по уровням сил «разумной достаточности»\n— Согласованные, верифицируемые договоры о разоружении (не только односторонние жесты)\n— Интеграция бывших противников в общие институты безопасности\n— Механизмы управления кризисами для восстановления доверия после срывов\n— Главное требование модели: доверие. Без него вся конструкция рушится."
    },
    breachProbability: {
      en: "**USA**: Medium (reciprocity-driven — if Russia shows good faith, the US responds in kind; but US domestic politics can be unpredictable). **Russia**: Medium (the model was born from Russian intellectual tradition, but current political leadership has rejected it). **China**: Medium (could adopt elements of 'reasonable sufficiency' but remains opaque). **Europe**: Low (committed to cooperative security frameworks like OSCE). **India/Pakistan**: Medium-High (regional rivalry undermines trust).\n\nThe model's fatal flaw: it depends entirely on the personal leadership of a single figure (Gorbachev in the 1980s). Without a coalition of leaders committed to common security, the model cannot function. The 2014–2024 breakdown of Russian-Western relations demonstrates how quickly common security architecture can collapse when trust evaporates.",
      ru: "**США**: Средняя (обусловлена взаимностью — при доброй воле России США отвечают тем же; но внутренняя политика США непредсказуема). **Россия**: Средняя (модель родилась из российской интеллектуальной традиции, но нынешнее политическое руководство отвергло её). **Китай**: Средняя (может заимствовать элементы «разумной достаточности», но остаётся непрозрачным). **Европа**: Низкая (привержена кооперативным рамкам безопасности, таким как ОБСЕ). **Индия/Пакистан**: Средне-высокая (региональное соперничество подрывает доверие).\n\nФатальный недостаток модели: она полностью зависит от личного руководства одного человека (Горбачёв в 1980-х). Без коалиции лидеров, приверженных общей безопасности, модель не может функционировать. Разрушение российско-западных отношений в 2014–2024 годах демонстрирует, как быстро может рухнуть архитектура общей безопасности, когда доверие исчезает."
    },
    source: "https://en.wikipedia.org/wiki/New_thinking_(Gorbachev)",
  },
]
