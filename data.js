// ============================================================
// ISTQB FL v4.0 — COMPLETE GLOSSARY DATA
// Organized by Chapter — Covers 100% of Syllabus
// ============================================================

const glossaryData = [

// ==========================================================
// CHAPTER 1 — FUNDAMENTALS OF TESTING (8Q: K1=2, K2=6)
// ==========================================================

    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Software Testing — What & Why",
        ar: "اختبار البرمجيات — ما هو ولماذا؟",
        defEN: "A set of activities to discover defects and evaluate the quality of software artifacts (test objects). Testing saves money, time, and reputation — it reduces risk of software failure in operation.",
        defAR: "مجموعة من الأنشطة لاكتشاف العيوب وتقييم جودة مواد البرمجيات (الكائنات التي نختبرها). الاختبار يوفر المال والوقت والسمعة — ويقلل من مخاطر فشل البرنامج أثناء التشغيل.",
        example: "قبل ما تطلق تطبيق دفع بنكي للمليون مستخدم — تختبره مسبقاً. لو فشل في الإنتاج بدون اختبار: خسارة مال (Transactions غلط)، خسارة سمعة (عملاء غاضبون)، ومشاكل قانونية. الاختبار يكشف المشاكل قبل وصولها للمستخدم."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Test Objectives (9 Goals)",
        ar: "أهداف الاختبار (الأهداف التسعة)",
        defEN: "9 test objectives: (1) Evaluate work products, (2) Trigger failures & find defects, (3) Ensure required coverage, (4) Reduce risk level, (5) Verify requirements are met, (6) Verify legal/contractual compliance, (7) Provide info to stakeholders, (8) Build confidence in quality, (9) Validate the system works as expected.",
        defAR: "9 أهداف: (1) تقييم مخرجات العمل، (2) تشغيل الفشل وإيجاد العيوب، (3) ضمان التغطية المطلوبة، (4) تقليل مستوى المخاطر، (5) التحقق من تحقق المتطلبات، (6) التحقق من الامتثال القانوني، (7) تزويد أصحاب المصلحة بمعلومات، (8) بناء الثقة في الجودة، (9) التصديق على أن النظام يعمل كما هو متوقع.",
        example: "الأهداف بتتغير حسب السياق: في مرحلة التطوير — هدف 2 (إيجاد bugs). قبل الإطلاق — هدف 8 (بناء ثقة العميل). في نظام طيارة — هدف 6 (الامتثال للوائح). كل مشروع يحدد أهدافه الأولوية."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Static Testing vs Dynamic Testing",
        ar: "الاختبار الساكن مقابل الاختبار الديناميكي",
        defEN: "Static Testing: reviewing/analyzing documents & code WITHOUT executing the software (reviews, static analysis). Dynamic Testing: EXECUTING the software with inputs and observing outputs (running test cases).",
        defAR: "الاختبار الساكن: مراجعة وتحليل الوثائق والكود بدون تشغيل البرنامج (مراجعات، تحليل ساكن). الاختبار الديناميكي: تشغيل البرنامج بمدخلات ومراقبة المخرجات (تشغيل حالات الاختبار).",
        example: "محامٍ يراجع عقداً قبل توقيعه = Static (قراءة بدون تنفيذ). قاضٍ ينفذ بنود العقد ويرى النتائج = Dynamic. في البرمجيات: Code Review = Static. تشغيل Test Case فعلي = Dynamic."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Error → Defect → Failure → Root Cause",
        ar: "خطأ ← عيب ← فشل ← السبب الجذري",
        defEN: "Error (human mistake) → produces a Defect/Bug in the code → when executed may cause a Failure (visible malfunction). Root Cause = the fundamental reason the error occurred. Defects don't always cause failures. Failures can also be caused by environmental conditions.",
        defAR: "الخطأ البشري ← ينتج عيباً في الكود ← عند التنفيذ قد يسبب فشلاً ظاهراً. السبب الجذري = السبب الأساسي لحدوث الخطأ. العيوب لا تسبب فشلاً دائماً. الفشل قد ينتج أيضاً عن ظروف بيئية.",
        example: "مطور كتب > بدل >= (خطأ بشري). هذا ينتج عيباً في الكود. لو مستخدم عمره 18 حاول يدخل — النظام رفضه بدل ما يقبله (فشل ظاهر). السبب الجذري: تدريب غير كافٍ للمطور على منطق الشروط."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Testing vs Debugging",
        ar: "الاختبار مقابل تتبع الأخطاء وإصلاحها",
        defEN: "Testing = finding failures (Tester's job — both static & dynamic). Debugging = finding the CAUSE and FIXING it (Developer's job). After debugging: Confirmation Testing confirms the fix worked, Regression Testing checks nothing else broke.",
        defAR: "الاختبار = اكتشاف الفشل (عمل المختبر — ساكن وديناميكي). تتبع الأخطاء = إيجاد السبب وإصلاحه (عمل المطور). بعد الإصلاح: Confirmation Testing يؤكد أن الإصلاح نجح، Regression Testing يتأكد أن شيئاً آخر لم يكسر.",
        example: "طبيب يكشف على مريض ويقول 'التهاب كلوي' = Testing. جراح يعمل عملية يصلح فيها الكلى = Debugging. بعد العملية: طبيب يتأكد إن المريض تعافى (Confirmation) + يراجع تقارير باقي الأعضاء (Regression)."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Testing's Contribution to Success (SQTC)",
        ar: "مساهمة الاختبار في نجاح المشروع (SQTC)",
        defEN: "Testing as quality control helps achieve goals within Scope, Quality, Time, and Cost (SQTC). Contributions: cost-effective defect detection, higher quality test objects, evaluating quality at each SDLC stage, contributing to go/no-go decisions, providing user representation.",
        defAR: "الاختبار كضبط جودة يساعد في تحقيق الأهداف ضمن النطاق والجودة والوقت والتكلفة (SQTC). مساهماته: اكتشاف العيوب بفعالية تكلفة، رفع جودة الكائنات التي تُختبر، تقييم الجودة في كل مرحلة SDLC، المساهمة في قرارات الإطلاق.",
        example: "بدون اختبار: Bug في صفحة الدفع يكتشفه المستخدم بعد الإطلاق = تكلفة 100x. مع اختبار: نفس الـ Bug يُكتشف في مرحلة التطوير = تكلفة 1x. الاختبار يوفر وقت وتكلفة الإطلاق بأقل مخاطر."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "QC vs QA vs Quality Management",
        ar: "ضبط الجودة مقابل ضمان الجودة مقابل إدارة الجودة",
        defEN: "Quality Control (QC): product-oriented CORRECTIVE approach — finds defects in products. Testing is a major form of QC. Quality Assurance (QA): process-oriented PREVENTIVE approach — improves processes to prevent defects. QA applies to BOTH development AND testing. Quality Management = QA + QC combined.",
        defAR: "ضبط الجودة QC: نهج تصحيحي موجه للمنتج — يجد العيوب في المنتجات. الاختبار هو الشكل الرئيسي لـ QC. ضمان الجودة QA: نهج وقائي موجه للعملية — يحسّن العمليات لمنع العيوب. QA يُطبق على التطوير والاختبار معاً. إدارة الجودة = QA + QC معاً.",
        example: "مصنع أدوية: QC = الفاحص عند نهاية الخط يرفض الحبوب المعيبة (تصحيح). QA = المهندس يراجع كل عملية التصنيع ويضيف فلاتر لمنع العيوب (وقاية). نتائج الاختبار: في QC → تُصلح العيوب. في QA → تُعطي feedback لتحسين العملية."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Verification vs Validation",
        ar: "التحقق مقابل التصديق",
        defEN: "Verification = 'Are we building the product RIGHT?' (checking it meets specifications). Validation = 'Are we building the RIGHT product?' (checking it meets user needs in real environment). Both are needed!",
        defAR: "التحقق = هل نبني المنتج بشكل صحيح؟ (التحقق من مطابقة المواصفات). التصديق = هل نبني المنتج الصحيح؟ (التحقق من تلبية احتياجات المستخدم في البيئة الحقيقية). كلاهما ضروري!",
        example: "كوبري: Verification = هل الحديد بالمواصفات المطلوبة؟ Validation = هل الكوبري في المكان الصح ويخدم الناس المحتاجينه؟ ممكن تبني كوبري صح تماماً (Verification ✓) لكن في المكان الغلط (Validation ✗)."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "STLC — 7 Test Activities (Test Process)",
        ar: "دورة حياة الاختبار — 7 أنشطة الاختبار",
        defEN: "The 7 test activities (often parallel/iterative, not strictly sequential): (1) Test Planning, (2) Test Monitoring & Control, (3) Test Analysis 'What to test?', (4) Test Design 'How to test?', (5) Test Implementation 'Setup', (6) Test Execution 'Run tests', (7) Test Completion.",
        defAR: "الأنشطة السبعة للاختبار (غالباً متوازية/تكرارية وليست بالضرورة تسلسلية): (1) تخطيط الاختبار، (2) متابعة والتحكم في الاختبار، (3) تحليل الاختبار 'ماذا نختبر؟'، (4) تصميم الاختبار 'كيف نختبر؟'، (5) تجهيز الاختبار 'الإعداد'، (6) تنفيذ الاختبار 'تشغيل الاختبارات'، (7) إتمام الاختبار.",
        example: "بناء عمارة: (1) خطة المشروع، (2) متابعة التقدم اليومي، (3) تحليل المتطلبات، (4) رسم التصميم، (5) تجهيز المواد والأدوات، (6) البناء الفعلي، (7) استلام العمارة وتوثيق الدروس. في STLC نفسها بالترتيب ولكن غالباً بتتداخل."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Test Basis vs Testware",
        ar: "أساس الاختبار مقابل مواد الاختبار",
        defEN: "Test Basis = INPUT documents used to derive tests (requirements, designs, user stories, regulations). Testware = OUTPUT work products created by testing (test plan, test cases, test data, test scripts, defect reports, test completion report).",
        defAR: "أساس الاختبار = وثائق الإدخال التي تُشتق منها الاختبارات (متطلبات، تصاميم، قصص مستخدم، لوائح). مواد الاختبار = مخرجات عمل يُنشئها الاختبار (خطة اختبار، حالات اختبار، بيانات اختبار، سكريبتات، تقارير عيوب، تقرير إتمام الاختبار).",
        example: "وثيقة المتطلبات تقول 'يجب قبول أعمار 18-70' (Test Basis) → ننشئ Test Cases: 'اختبر 17، 18، 70، 71' (Testware). الـ Testware هو 'كل حاجة خصت التيست' من بداية خطة الاختبار لنهاية التقرير."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Traceability",
        ar: "قابلية التتبع",
        defEN: "The ability to link test cases back to requirements/risks/defects they cover. Enables: coverage evaluation, impact analysis of changes, understanding test progress reports, assessing product quality. Good traceability also helps test audits.",
        defAR: "القدرة على ربط حالات الاختبار بالمتطلبات والمخاطر والعيوب التي تغطيها. تمكّن من: تقييم التغطية، تحليل تأثير التغييرات، فهم تقارير تقدم الاختبار، تقييم جودة المنتج. تتبع جيد يساعد أيضاً في عمليات التدقيق.",
        example: "Requirement R-45 'تحويل الأموال' → Test Cases: TC-23 (نجاح)، TC-24 (رصيد منخفض)، TC-25 (حساب محظور). لو R-45 اتغير → بنعرف بالضبط إن TC-23/24/25 لازم يتراجعوا ويتحدثوا. بدون Traceability الكل ضايع."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Test Process in Context (Contextual Factors)",
        ar: "عملية الاختبار حسب السياق (العوامل السياقية)",
        defEN: "Testing is NOT performed in isolation. The way testing is done depends on 8 contextual factors: Stakeholders, Team members, Business domain, Technical factors, Project constraints, Organizational factors, Software development lifecycle, and Tools.",
        defAR: "الاختبار لا يُنفذ بمعزل عن السياق. كيفية إجراء الاختبار تعتمد على 8 عوامل سياقية: أصحاب المصلحة، أعضاء الفريق، مجال الأعمال، العوامل التقنية، قيود المشروع، العوامل التنظيمية، دورة حياة التطوير، والأدوات.",
        example: "اختبار تطبيق لعبة موبايل (سياق أ) مختلف جداً عن اختبار نظام تحكم في طائرة (سياق ب). في الطيارة: قيود قانونية صارمة، استقلالية عالية للمختبر، وثائق مكثفة. في اللعبة: مرونة أكبر، Agile سريع، تركيز على UX."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Roles in Testing: Test Manager vs Tester",
        ar: "الأدوار في الاختبار: مدير الاختبار مقابل المختبر",
        defEN: "Test Manager: responsible for test process, test team, and leadership of test activities. Focuses on: planning, monitoring & control, test completion. Tester: responsible for engineering (technical) aspects. Focuses on: analysis, design, implementation, execution. One person can hold both roles.",
        defAR: "مدير الاختبار: مسؤول عن عملية الاختبار والفريق وقيادة الأنشطة. يركز على: التخطيط، المتابعة والتحكم، الإتمام. المختبر: مسؤول عن الجوانب الهندسية (التقنية). يركز على: التحليل، التصميم، التجهيز، التنفيذ. شخص واحد ممكن يلعب الدورين.",
        example: "في Agile: بعض مهام مدير الاختبار بتتعامل معها الـ Agile Team كلها. في مشاريع كبيرة: مدير اختبار منفصل يتابع ويخطط. في شركات صغيرة: نفس الشخص بيخطط وبيختبر. المهم إن الأدوار واضحة ومغطاة."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Generic Skills for Testers",
        ar: "المهارات العامة المطلوبة في المختبر",
        defEN: "Key tester skills: Testing knowledge (using test techniques), Thoroughness & attention to detail, Curiosity & carefulness, Good communication & active listening, Analytical & critical thinking, Technical knowledge (using test tools), Domain knowledge (understanding the business). Testers are often 'bearers of bad news' — communication skills are CRUCIAL.",
        defAR: "المهارات الرئيسية للمختبر: معرفة الاختبار، الدقة والانتباه للتفاصيل، الفضول والحرص، التواصل الجيد والاستماع الفعّال، التفكير التحليلي والنقدي، المعرفة التقنية (استخدام أدوات الاختبار)، معرفة المجال. المختبرون غالباً 'حاملو الأخبار السيئة' — مهارات التواصل حاسمة.",
        example: "مختبر بدون مهارات تواصل يكتب تقرير Bug بطريقة هجومية → مطورون يتحاملون عليه → بيئة عمل سيئة. مختبر بمهارات تواصل عالية يكتب Bug Report واضح ومحترم → مطورون يتعاونون → نتيجة أفضل للكل."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Whole Team Approach",
        ar: "مدخل الفريق الكامل",
        defEN: "From Extreme Programming (XP): ALL team members are responsible for quality. Testers collaborate with business representatives (acceptance tests) and developers (test strategy, automation). Everyone can perform quality tasks. May NOT be appropriate in safety-critical contexts that require high independence.",
        defAR: "من Extreme Programming: جميع أعضاء الفريق مسؤولون عن الجودة. المختبرون يتعاونون مع ممثلي الأعمال (اختبارات القبول) والمطورين (استراتيجية الاختبار، الأتمتة). الجميع يمكنه أداء مهام الجودة. قد لا يكون مناسباً في السياقات الحرجة التي تتطلب استقلالية عالية.",
        example: "في Scrum Sprint: المطور يكتب Unit Tests، المختبر يكتب Acceptance Criteria مع البيزنس، Product Owner يعلّق على جودة الـ Feature. كل الفريق مسؤول عن الجودة — مش المختبر لوحده."
    },
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "Independence of Testing (4 Levels)",
        ar: "استقلالية الاختبار (4 مستويات)",
        defEN: "4 levels: (1) No independence — author tests own work. (2) Some — peers from same team. (3) High — separate test team within org. (4) Very high — external org. Benefits: finds different failures, challenges assumptions. Drawbacks: isolation from dev team, communication issues, perceived as bottleneck.",
        defAR: "4 مستويات: (1) لا استقلالية — المؤلف يختبر عمله. (2) بعض الاستقلالية — زملاء من نفس الفريق. (3) عالية — فريق اختبار منفصل داخل المنظمة. (4) عالية جداً — منظمة خارجية. فوائد: يكتشف إخفاقات مختلفة، يتحدى الافتراضات. عيوب: عزل عن فريق التطوير، مشاكل تواصل.",
        example: "امتحانات الثانوية: لو المدرس يصحح ورقة طالبه (لا استقلالية). لو مدرس آخر يصحح (بعض الاستقلالية). لو لجنة وزارية (عالية جداً). كلما زاد الاستقلال، قلّ التحيز وزادت الموضوعية — لكن التواصل قد يصعب."
    },

    // ===== CH1 EXAM FOCUS CARD =====
    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: true, isExamFocus: true,
        en: "🎯 CH1 EXAM FOCUS — Key Points",
        ar: "🎯 أهم نقاط الفصل الأول للامتحان",
        defEN: "CRITICAL FOR EXAM: K1 remember, K2 understand and explain.",
        defAR: "الأهم للامتحان — الفصل الأول:",
        example: "① Testing SHOWS presence of defects, CANNOT prove absence ② Defect ≠ always causes Failure ③ Testing = Tester's job | Debugging = Developer's job ④ QC = product/corrective | QA = process/preventive ⑤ Test Basis (input) → Testware (output) ⑥ Roles: Test Manager (plan/monitor) | Tester (design/execute) ⑦ Independence: 4 levels — more independence = better defect detection BUT may cause isolation ⑧ Whole Team: everyone responsible for quality — NOT appropriate in safety-critical systems"
    },

// ==========================================================
// CHAPTER 2 — TESTING THROUGHOUT SDLC (6Q: K1=2, K2=4)
// ==========================================================

    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "SDLC Models — Overview",
        ar: "نماذج دورة حياة تطوير البرمجيات — نظرة عامة",
        defEN: "SDLC = abstract high-level representation of the software development process. Types: Sequential (Waterfall, V-model — phases complete one at a time), Iterative (Spiral, Prototyping — repeated loops), Incremental (Unified Process — parts delivered step by step), Agile (Scrum, Kanban — combines iterative + incremental).",
        defAR: "SDLC = تمثيل عالي المستوى لعملية تطوير البرمجيات. الأنواع: التسلسلية (Waterfall, V-model — مرحلة تكتمل قبل التالية)، التكرارية (Spiral, Prototyping — حلقات متكررة)، التصاعدية (Unified Process — أجزاء تُسلّم تدريجياً)، Agile (Scrum, Kanban — يجمع التكراري + التصاعدي).",
        example: "تشبيه لوحة فنية: Waterfall = رسم كامل ثم تقييم. Iterative = رسم مسودة كاملة، تحسينها، تحسينها. Incremental = رسم وجه مكتمل، ثم جسم مكتمل، ثم خلفية مكتملة. Agile = رسم لوحة كاملة مبسطة كل أسبوعين ثم تحسينها."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Waterfall Model",
        ar: "نموذج الشلال",
        defEN: "Sequential model: Requirements → Design → Coding → Testing → Deployment. Each phase completes before next begins. Advantages: simple, specific deliverables, works for small projects. Disadvantages: testing only at the end (NO early testing), inflexible, high risk if requirements change.",
        defAR: "نموذج تسلسلي: متطلبات → تصميم → كود → اختبار → نشر. كل مرحلة تكتمل قبل التالية. مزايا: بسيط، مخرجات محددة، يناسب المشاريع الصغيرة. عيوب: الاختبار في النهاية فقط (لا اختبار مبكر)، غير مرن، مخاطر عالية لو المتطلبات تغيّرت.",
        example: "كتابة رواية بالترتيب الصارم: كل الأبحاث أولاً، ثم كل الكتابة، ثم كل المراجعة، ثم النشر. لو اكتشفت في مرحلة النشر أن الفصل الأول كان غلطاً — تكلفة هائلة للتعديل. لهذا Waterfall مناسب فقط لو المتطلبات واضحة 100% من البداية."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "V-Model (Verification & Validation Model)",
        ar: "نموذج الـ V",
        defEN: "Extension of Waterfall where each development phase has a CORRESPONDING test level. Testing activities are planned EARLY (before coding). Left side (development): Requirements → High-Level Design → Low-Level Design → Coding. Right side (testing): Acceptance Test ↔ System Test ↔ Integration Test ↔ Unit Test.",
        defAR: "امتداد للـ Waterfall حيث كل مرحلة تطوير لها مستوى اختبار موازٍ. أنشطة الاختبار تُخطط مبكراً (قبل الكود). الجانب الأيسر (تطوير): متطلبات → تصميم عالي → تصميم تفصيلي → كود. الجانب الأيمن (اختبار): اختبار قبول ↔ اختبار نظام ↔ اختبار تكامل ↔ اختبار وحدة.",
        example: "مزايا V-Model: الاختبار يُصمم مبكراً جداً. لما بنكتب متطلبات بنخطط Acceptance Test في نفس الوقت. لما بنعمل High-Level Design بنخطط System Test. المختبر مشارك من الأول، مش بيجي في النهاية. عيب: لا يزال يفتقر للمرونة."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Iterative vs Incremental Development",
        ar: "التطوير التكراري مقابل التصاعدي",
        defEN: "Iterative: build FULL system repeatedly, each time refining and improving (rough sketch → detailed sketch → full painting). Incremental: deliver system in COMPLETE PARTS one at a time (paint the face completely, then body completely, then background). Agile combines BOTH: delivers complete increments iteratively.",
        defAR: "التكراري: بناء النظام الكامل عدة مرات، كل مرة بتحسين وتطوير. التصاعدي: تسليم النظام على أجزاء مكتملة في كل مرة. Agile يجمع الاثنين: يسلّم increments مكتملة بشكل تكراري.",
        example: "Iterative = Scrum: نفس ميزة التسجيل بتتحسن كل Sprint. Incremental: الـ Sprint الأول يسلّم صفحة Login كاملة، الثاني يسلّم Profile كاملة، الثالث يسلّم Dashboard كاملة. في الواقع Agile بيجمع الاثنين."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Good Testing Practices (Any SDLC)",
        ar: "الممارسات الجيدة للاختبار (في أي SDLC)",
        defEN: "4 good practices regardless of SDLC: (1) Every development activity has a corresponding test activity. (2) Different test levels have specific test objectives (avoiding redundancy). (3) Test analysis and design begins during the corresponding development phase. (4) Testers review work products as soon as drafts are available (supporting shift-left).",
        defAR: "4 ممارسات جيدة بصرف النظر عن SDLC: (1) كل نشاط تطوير له نشاط اختبار مقابل. (2) مستويات اختبار مختلفة لها أهداف اختبار محددة (تفادي التكرار). (3) تحليل وتصميم الاختبار يبدأ خلال مرحلة التطوير المقابلة. (4) المختبرون يراجعون مخرجات العمل بمجرد توفر المسودات.",
        example: "في كل Sprint: (1) المطور يكتب كود، المختبر يكتب Test Case في نفس الوقت. (2) Unit Test يختبر وحدات، System Test يختبر سلوك كامل — مش تكرار. (3) لما نكتب User Story، المختبر يكتب Acceptance Criteria في نفس الجلسة. (4) المختبر يراجع الـ wireframe قبل ما يتحول لكود."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "TDD, ATDD, BDD — Testing as Driver",
        ar: "TDD وATDD وBDD — الاختبار كمحرك للتطوير",
        defEN: "TDD: Write TEST first, then write code to make it pass, then refactor. ATDD: Business + Dev + Tester define acceptance tests TOGETHER before development. BDD: Scenarios written in natural language Given/When/Then (Gherkin) — readable by all stakeholders. All three follow shift-left principle and support iterative models.",
        defAR: "TDD: اكتب الاختبار أولاً، ثم الكود لتمريره، ثم أعد الهيكلة. ATDD: الأعمال + المطور + المختبر يحددون اختبارات القبول معاً قبل التطوير. BDD: سيناريوهات مكتوبة بلغة طبيعية Given/When/Then (Gherkin) — مفهومة لجميع أصحاب المصلحة. الثلاثة يتبعون مبدأ Shift-Left.",
        example: "TDD: 'اكتب امتحان الطالب قبل الدرس ثم اشرح ما يخليه ينجح'. ATDD: الكل يتفق على معايير النجاح قبل البناء. BDD: GIVEN المستخدم عمره 17 / WHEN يحاول يشتري كحول / THEN يُرفض طلبه مع رسالة 'العمر أقل من 18'."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "DevOps and Testing",
        ar: "DevOps والاختبار",
        defEN: "DevOps bridges Development and Operations. Promotes: team autonomy, fast feedback, integrated toolchains, CI/CD. Testing benefits: fast code quality feedback, shift-left (CI encourages component tests + static analysis), automated regression reduces risk, promotes non-functional testing. Risks: DevOps pipeline needs maintenance, CI/CD tools need resources, automation is complex.",
        defAR: "DevOps يجسر التطوير والتشغيل. يعزز: استقلالية الفريق، تغذية راجعة سريعة، سلاسل أدوات متكاملة، CI/CD. فوائد الاختبار: تغذية راجعة سريعة، Shift-Left، regression آلي يقلل المخاطر، يعزز الاختبار غير الوظيفي. مخاطر: الـ pipeline يحتاج صيانة، تعقيد الأتمتة.",
        example: "مطور يرفع كود → Jenkins يشغّل 500 Unit Test + Static Analysis في 5 دقائق → لو فشل: بلّغ المطور فوراً قبل ما يكمل. لو نجح: يُنشر تلقائياً لبيئة Staging. هذا هو DevOps pipeline — الاختبار مدمج في كل خطوة."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Shift-Left Approach",
        ar: "مدخل الانتقال لليسار (الاختبار المبكر)",
        defEN: "Testing is performed EARLIER in the SDLC. Good practices: reviewing specs from a testing perspective, writing tests before code (TDD), using CI/CD with automated component tests, completing static analysis before dynamic testing, performing non-functional testing at component level. Requires extra effort/cost early but SAVES effort/cost later.",
        defAR: "تنفيذ الاختبار في وقت أبكر من دورة حياة التطوير. ممارسات جيدة: مراجعة المواصفات من منظور الاختبار، كتابة الاختبارات قبل الكود (TDD)، استخدام CI/CD مع اختبارات مكونات آلية، إتمام التحليل الساكن قبل الاختبار الديناميكي، إجراء اختبار غير وظيفي على مستوى المكون.",
        example: "طبيب يعمل فحوصات دورية منتظمة (Shift-Left) أرخص بكثير من علاج مرض متأخر. في البرمجيات: مراجعة وثيقة متطلبات بمنظور اختباري في اليوم الأول = تكلفة 1. إصلاح نفس المشكلة بعد الإطلاق = تكلفة 100."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Shift-Right Testing",
        ar: "الاختبار المتأخر (Shift Right)",
        defEN: "Testing performed AFTER release in the production environment. Techniques: A/B testing, canary releases, feature flags, monitoring, chaos engineering. Purpose: gather real-world feedback, validate behavior at scale, find issues invisible in test environments. Complements, does NOT replace earlier testing.",
        defAR: "اختبار يتم بعد الإطلاق في بيئة الإنتاج. التقنيات: A/B testing، إصدارات canary، feature flags، مراقبة، هندسة الفوضى. الهدف: جمع ملاحظات من العالم الحقيقي، التحقق من السلوك على نطاق واسع، اكتشاف مشاكل غير مرئية في بيئات الاختبار. يُكمل، ولا يحل محل، الاختبار المبكر.",
        example: "Facebook عند إطلاق ميزة جديدة: أولاً تظهر لـ 1% من المستخدمين (Canary Release) — المهندسون يراقبون Errors والأداء. لو كل حاجة تمام → 10% → 50% → 100%. هذا Shift-Right Testing في الواقع."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Retrospectives and Process Improvement",
        ar: "الاجتماعات الاستعراضية والتحسين المستمر",
        defEN: "Post-project/iteration meetings where team discusses: What was successful?, What was not?, How to improve? Results are recorded and are normally part of the test completion report. Benefits for testing: increased effectiveness, better testware quality, team learning, improved test basis quality, better cooperation.",
        defAR: "اجتماعات بعد المشروع/التكرار يناقش فيها الفريق: ما الذي نجح؟ ما الذي لم ينجح؟ كيف نتحسن؟ النتائج تُسجل وهي عادةً جزء من تقرير إتمام الاختبار. فوائد للاختبار: فعالية أعلى، جودة testware أفضل، تعلم الفريق، تحسين جودة Test Basis، تعاون أفضل.",
        example: "Scrum Sprint Retrospective: 'الـ CI pipeline بطيء جداً (مشكلة) → الجلسة القادمة نحدّث خطوات الـ pipeline. التواصل مع البيزنس ممتاز (نجاح) → نكمّل نفس الأسلوب.' هذا هو التحسين المستمر الذي يُميّز الفرق الناضجة."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Test Levels (5 Levels + Test Pyramid)",
        ar: "مستويات الاختبار (5 مستويات + هرم الاختبار)",
        defEN: "5 test levels: (1) Component/Unit Testing — isolated components. (2) Component Integration Testing — interfaces between components. (3) System Testing — complete integrated system. (4) System Integration Testing — system with external systems. (5) Acceptance Testing — validation with real users (UAT, Alpha, Beta, Operational). Test Pyramid: Unit (many/fast) → Integration → E2E UI (few/slow).",
        defAR: "5 مستويات اختبار: (1) اختبار المكون/الوحدة — مكونات معزولة. (2) اختبار تكامل المكونات — واجهات بين المكونات. (3) اختبار النظام — النظام الكامل المتكامل. (4) اختبار تكامل الأنظمة — النظام مع الأنظمة الخارجية. (5) اختبار القبول — تصديق مع مستخدمين حقيقيين (UAT، Alpha، Beta).",
        example: "سيارة: (1) فحص كل برغي لوحده. (2) فحص المحرك مع الجير وهما مربوطان. (3) Test Drive كامل على الطريق. (4) فحص الاتصال مع GPS الخارجي وكاميرات الرادار. (5) العميل يجرب السيارة ويقرر يقبلها أو يرفضها."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Component Integration Testing — Strategies",
        ar: "اختبار تكامل المكونات — استراتيجيات التكامل",
        defEN: "Tests interfaces BETWEEN components after unit testing. 3 integration strategies: Bottom-Up (test low-level components first, needs DRIVERS to simulate higher-level callers), Top-Down (test high-level first, needs STUBS to simulate lower-level), Big-Bang (test all at once — risky, difficult to isolate failures).",
        defAR: "يختبر الواجهات بين المكونات بعد اختبار الوحدة. 3 استراتيجيات تكامل: من الأسفل للأعلى (اختبار المكونات منخفضة المستوى أولاً، يحتاج DRIVERS)، من الأعلى للأسفل (اختبار عالي المستوى أولاً، يحتاج STUBS)، Big-Bang (اختبار كل شيء مرة واحدة — محفوف بمخاطر).",
        example: "Bottom-Up: الأساسات أولاً ثم الجدران ثم السقف (يحتاج سقالات مؤقتة = Drivers). Top-Down: السقف أولاً ثم الجدران ثم الأساسات (يحتاج دعائم مؤقتة = Stubs). Big-Bang: بناء كل شيء مرة واحدة — لو انهار صعب تعرف أين المشكلة."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Test Types (Functional, Non-functional, WB, BB)",
        ar: "أنواع الاختبار (الوظيفي وغير الوظيفي والأبيض والأسود)",
        defEN: "4 test types: (1) Functional: WHAT the system does (features, functions). (2) Non-functional: HOW WELL — Performance, Usability, Security, Reliability, Compatibility, Maintainability, Portability (ISO 25010). (3) Black-box: specification-based, no internal code knowledge. (4) White-box: structure-based, uses internal code knowledge. All 4 can be applied at all test levels.",
        defAR: "4 أنواع اختبار: (1) وظيفي: ماذا يفعل النظام (الميزات والوظائف). (2) غير وظيفي: كيف يؤديه — أداء، سهولة استخدام، أمان، موثوقية، توافق، قابلية صيانة، نقل (ISO 25010). (3) صندوق أسود: قائم على المواصفات بدون معرفة بالكود. (4) صندوق أبيض: قائم على البنية باستخدام معرفة الكود الداخلي.",
        example: "زر 'نسيت كلمة المرور': Functional = هل يرسل إيميل؟. Non-functional Performance = هل يرسله في أقل من 3 ثوانٍ؟. Non-functional Usability = هل الزر واضح ومرئي للمستخدم الجديد؟. Non-functional Security = هل يمنع enumeration attacks؟"
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Confirmation Testing vs Regression Testing",
        ar: "اختبار التأكيد مقابل اختبار الانحدار",
        defEN: "Confirmation Testing (Re-test): runs the SAME failed test after a fix to confirm the defect is resolved. Regression Testing: after ANY change, runs tests on OTHER parts to ensure the change didn't break anything previously working. Regression testing is a strong candidate for automation. Impact Analysis shows which parts may be affected.",
        defAR: "اختبار التأكيد: يُعيد نفس الاختبار الفاشل بعد الإصلاح للتأكد من حل العيب. اختبار الانحدار: بعد أي تغيير، يُجري اختبارات على أجزاء أخرى للتأكد أن التغيير لم يكسر شيئاً كان يعمل. اختبار الانحدار مرشح قوي للأتمتة. تحليل التأثير يُظهر الأجزاء التي قد تتأثر.",
        example: "صنبور مطبخ سرّب → صاحب الشقة أصلح. Confirmation: فتح نفس الصنبور → لا تسريب ✓. Regression: فتح باقي الصنابير والدش → هل الضغط تأثر؟ هل خط المياه سليم؟ في البرمجيات: أصلح Bug في حساب الشحن → Regression على صفحات الدفع والسلة والفاتورة."
    },
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: false, isExamFocus: false,
        en: "Maintenance Testing",
        ar: "اختبار الصيانة",
        defEN: "Testing after software is in production. Triggered by: Modifications (corrective/adaptive/improvement), Upgrades or Migrations (new platform), Retirement. Always needs Confirmation + Regression testing. Scope depends on: degree of risk, size of existing system, size of change. Impact Analysis done BEFORE making changes to decide if changes should be made.",
        defAR: "اختبار بعد وصول البرنامج للإنتاج. محفوزات: التعديلات (تصحيحية/تكيفية/تحسينية)، الترقيات أو الهجرة (منصة جديدة)، التقاعد. يحتاج دائماً Confirmation + Regression. النطاق يعتمد على: درجة المخاطرة، حجم النظام الموجود، حجم التغيير.",
        example: "بنك ينقل بياناته من Oracle إلى PostgreSQL (Migration): يحتاج اختبار تحويل البيانات + التأكد أن كل العمليات تشتغل صح على قاعدة البيانات الجديدة + Regression كامل. لو نظام تقاعد — لازم تختبر أرشفة البيانات وإجراءات الاسترداد."
    },

    // ===== CH2 EXAM FOCUS CARD =====
    {
        cat: "ch2", catLabel: "الفصل الثاني · Ch2: SDLC", isNew: true, isExamFocus: true,
        en: "🎯 CH2 EXAM FOCUS — Key Points",
        ar: "🎯 أهم نقاط الفصل الثاني للامتحان",
        defEN: "CRITICAL FOR EXAM: K1 & K2 items.",
        defAR: "الأهم للامتحان — الفصل الثاني:",
        example: "① Waterfall = no early testing, inflexible ② V-Model = each dev phase has paired test phase, testing PLANNED early ③ TDD = test FIRST then code | ATDD = team defines tests together | BDD = Given/When/Then natural language ④ DevOps = CI/CD, fast feedback, automated regression ⑤ Shift-Left = test earlier in SDLC | Shift-Right = test in production ⑥ 5 Test Levels: Component → Component Integration → System → System Integration → Acceptance ⑦ Integration strategies: Bottom-Up (needs Drivers) | Top-Down (needs Stubs) | Big-Bang (risky) ⑧ Confirmation = re-run SAME failed test after fix | Regression = check OTHER areas after ANY change ⑨ Maintenance triggers: modifications, upgrades, migrations, retirement"
    },

// ==========================================================
// CHAPTER 3 — STATIC TESTING (4Q: K1=2, K2=2)
// ==========================================================

    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Static Testing Basics",
        ar: "أساسيات الاختبار الساكن",
        defEN: "In static testing, software DOES NOT NEED TO BE EXECUTED. Work products are evaluated through manual examination (reviews) or with tools (static analysis). Objectives: improving quality, detecting defects, assessing characteristics (readability, completeness, correctness, testability, consistency). Can be applied for both verification AND validation.",
        defAR: "في الاختبار الساكن، البرنامج لا يحتاج للتنفيذ. مخرجات العمل تُقيّم عبر الفحص اليدوي (مراجعات) أو الأدوات (تحليل ساكن). الأهداف: تحسين الجودة، اكتشاف العيوب، تقييم الخصائص (قابلية القراءة، الاكتمال، الصحة، قابلية الاختبار، الاتساق). يمكن تطبيقه للتحقق والتصديق معاً.",
        example: "محامٍ يراجع عقداً قبل التوقيع يجد 'ثغرة قانونية' (عيب) بدون ما ينفّذ العقد. مبرمج يراجع كود زميله ويجد 'متغير غير معرّف' (عيب) بدون ما يُشغّل الكود. كلاهما Static Testing."
    },
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Work Products Examinable by Static Testing",
        ar: "مخرجات العمل القابلة للفحص بالاختبار الساكن",
        defEN: "Almost ANY work product can be examined: requirement specs, source code, test plans, test cases, product backlog items, user stories, test charters, contracts, project documentation, models. For REVIEWS: any readable work product. For STATIC ANALYSIS: work products need a formal structure (e.g., code). NOT appropriate: 3rd party executable code (legal restrictions).",
        defAR: "تقريباً أي مخرج عمل يمكن فحصه: مواصفات متطلبات، كود مصدري، خطط اختبار، حالات اختبار، عناصر Product Backlog، قصص مستخدم، ميثاق اختبار، عقود، توثيق مشروع، نماذج. للمراجعات: أي مخرج يمكن قراءته. للتحليل الساكن: يحتاج بنية رسمية. غير مناسب: كود قابل للتنفيذ من طرف ثالث (قيود قانونية).",
        example: "مستشفى قبل إطلاق نظام جديد: يراجع وثيقة المتطلبات (متطلبات ناقصة)، تصميم قاعدة البيانات (علاقات خاطئة)، كود الـ API (ثغرات أمنية)، Test Cases (نقص تغطية). كل ده Static Testing قبل ما أي تشغيل يحصل."
    },
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Value of Static Testing",
        ar: "قيمة الاختبار الساكن",
        defEN: "Static testing detects defects EARLIEST possible (principle 3). Can find defects IMPOSSIBLE to find via dynamic testing (e.g., unreachable code, design pattern issues, non-executable work product defects). Builds confidence in work products. Even though reviews can be costly to implement, overall project costs are LOWER because less rework later.",
        defAR: "الاختبار الساكن يكتشف العيوب في أبكر مرحلة ممكنة (المبدأ الثالث). يمكنه إيجاد عيوب مستحيلة الاكتشاف بالاختبار الديناميكي (مثل: كود غير قابل للوصول، مشاكل design patterns، عيوب في مخرجات غير قابلة للتنفيذ). يبني الثقة في مخرجات العمل. رغم تكلفة المراجعات، التكلفة الإجمالية للمشروع أقل لأن التعديلات اللاحقة أقل.",
        example: "Defects in requirements (أكثر أنواع العيوب): غموض (ambiguity)، تناقضات (contradictions)، حذف (omissions)، عدم دقة (inaccuracies)، تكرار (duplications). لو هذه العيوب وُجدت في متطلبات ما اكتُشفت إلا في الإنتاج — التكلفة 100x."
    },
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Static vs Dynamic Testing — Key Differences",
        ar: "الاختبار الساكن مقابل الديناميكي — الفروق الرئيسية",
        defEN: "Both: detect defects, support early testing. Differences: Static finds defects DIRECTLY | Dynamic causes FAILURES then finds defects through analysis. Static can find defects in NON-EXECUTABLE work products | Dynamic only works on executable code. Static can detect omissions (missing requirements) | Dynamic can't easily detect what's NOT there. Static measures quality characteristics NOT dependent on execution.",
        defAR: "كلاهما: يكتشف العيوب، يدعم الاختبار المبكر. الاختلافات: الساكن يجد العيوب مباشرة | الديناميكي يسبب فشلاً ثم يجد العيوب عبر التحليل. الساكن يعمل على مخرجات غير قابلة للتنفيذ | الديناميكي يعمل فقط على الكود القابل للتنفيذ. الساكن يكتشف الحذف (requirements مفقودة) | الديناميكي لا يكتشف ما غير موجود بسهولة.",
        example: "وثيقة متطلبات تقول 'يجب أن يدعم النظام العربية'. لو ما فيش Developer يدعم RTL — Static Review يكتشف 'المتطلب محقق جزئياً' قبل الكود. Dynamic Testing بعد الكود سيكتشف 'النص مقلوب' — أي Static أسرع وأرخص هنا."
    },
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Review Process Activities (5 Steps)",
        ar: "أنشطة عملية المراجعة (5 خطوات)",
        defEN: "5 activities in the review process (ISO/IEC 20246): (1) Planning: define scope, purpose, criteria, work product, timeframes. (2) Review Initiation: ensure everyone is prepared and has access. (3) Individual Review: each reviewer examines independently, logs anomalies. (4) Communication & Analysis: discuss anomalies, assign status & ownership, decide follow-up. (5) Fixing & Reporting: create defect reports, accept work product when exit criteria met.",
        defAR: "5 أنشطة في عملية المراجعة (ISO/IEC 20246): (1) التخطيط: تحديد النطاق والهدف والمعايير ومخرج العمل والإطار الزمني. (2) بدء المراجعة: التأكد من استعداد الجميع وحصولهم على الوصول. (3) المراجعة الفردية: كل مراجع يفحص بشكل مستقل ويسجّل الشذوذات. (4) التواصل والتحليل: مناقشة الشذوذات وتحديد الحالة والملكية وإجراءات المتابعة. (5) الإصلاح والإبلاغ: إنشاء تقارير العيوب، قبول مخرج العمل عند استيفاء معايير الخروج.",
        example: "مراجعة وثيقة متطلبات: (1) المدير يحدد 'راجعوا فصل 3 عن الأمان خلال 3 أيام'. (2) الكل يستلم الوثيقة ويؤكد استعداده. (3) كل مراجع يقرأ ويسجّل ملاحظاته بشكل مستقل. (4) الاجتماع: مناقشة كل ملاحظة وتقرير إذا كانت عيباً حقيقياً. (5) كاتب الوثيقة يصلح وتُقبل الوثيقة."
    },
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Roles in Reviews (6 Roles)",
        ar: "الأدوار في المراجعات (6 أدوار)",
        defEN: "6 principal roles: (1) Manager: decides what to review, provides resources. (2) Author: creates and FIXES the work product under review. (3) Moderator (Facilitator): ensures effective review meetings, mediation, time management. (4) Scribe (Recorder): collates anomalies from reviewers and records decisions. (5) Reviewer: performs the review — can be anyone. (6) Review Leader: takes overall responsibility, organizes when and where.",
        defAR: "6 أدوار رئيسية: (1) المدير: يقرر ما يُراجع ويوفر الموارد. (2) المؤلف: ينشئ ويصلح مخرج العمل قيد المراجعة. (3) المنسق (الميسر): يضمن سير اجتماعات المراجعة بفعالية. (4) الكاتب (المُسجّل): يجمع الشذوذات من المراجعين ويسجّل القرارات. (5) المراجع: يؤدي المراجعة — يمكن أن يكون أي شخص. (6) قائد المراجعة: يتحمل المسؤولية الكاملة وينظم وقت ومكان المراجعة.",
        example: "اجتماع مراجعة عقد قانوني: مدير الشركة يقرر المراجعة (Manager). المحامي الذي كتب العقد يشرح ويصلح (Author). رئيس الجلسة يدير الوقت (Moderator). السكرتير يكتب الملاحظات (Scribe). المحامون الآخرون يراجعون (Reviewer). محامي كبير يتحمل المسؤولية الكاملة (Review Leader)."
    },
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Review Types (4 Types: Informal → Inspection)",
        ar: "أنواع المراجعات الأربعة",
        defEN: "4 review types (least to most formal): (1) Informal Review: no defined process, no documented output. Main objective: detecting anomalies. (2) Walkthrough: LED BY AUTHOR, informal. Objectives: evaluating quality, building confidence, educating reviewers, gaining consensus, generating new ideas. Individual review before walkthrough is NOT required. (3) Technical Review: by technically qualified peers, LED BY MODERATOR. Focus: technical problems. (4) Inspection: MOST FORMAL. Author CANNOT act as review leader or scribe. Metrics collected. Main objective: find maximum anomalies.",
        defAR: "4 أنواع مراجعات (من الأقل للأكثر رسمية): (1) مراجعة غير رسمية: لا عملية محددة، لا مخرجات موثقة. الهدف الرئيسي: اكتشاف الشذوذات. (2) Walkthrough: يقودها المؤلف، غير رسمية. (3) المراجعة التقنية: من أقران مؤهلين تقنياً، يقودها منسق. (4) الفحص: الأكثر رسمية. المؤلف لا يمكنه أن يكون قائد مراجعة أو كاتباً. يجمع مقاييس.",
        example: "مطور يريد مراجعة سريعة لكوده من زميل (Informal). مطور يشرح كوده للفريق ويطلب ملاحظات (Walkthrough). فريق من المهندسين يراجع Architecture Document بقيادة Lead Engineer (Technical Review). فريق رسمي يراجع Design Document الحرج بأدوار محددة ومعايير (Inspection)."
    },
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Early Stakeholder Feedback",
        ar: "التغذية الراجعة المبكرة من أصحاب المصلحة",
        defEN: "Early and frequent feedback allows early communication of quality problems. Without stakeholder involvement, the product might NOT meet their original vision. Failures to deliver cause: costly rework, missed deadlines, blame games, even project failure. Frequent feedback prevents misunderstandings and ensures requirement changes are understood early.",
        defAR: "التغذية الراجعة المبكرة والمتكررة تتيح التواصل المبكر حول مشاكل الجودة. بدون مشاركة أصحاب المصلحة، قد لا يلبي المنتج رؤيتهم الأصلية. إخفاق التسليم يسبب: إعادة عمل مكلفة، تأخير المواعيد، صراعات، وحتى فشل المشروع. التغذية الراجعة المتكررة تمنع سوء الفهم.",
        example: "شركة بنت نظام محاسبة كامل خلال 6 أشهر بدون مشاركة العميل. في التسليم: العميل قال 'أنا أريد نظام يدعم الضريبة المصرية، ليس الأمريكية'. 6 أشهر و 500,000 جنيه هدرت. مع مراجعات شهرية مع العميل — هذا كان سيُكتشف في الشهر الأول."
    },
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: false, isExamFocus: false,
        en: "Review Success Factors",
        ar: "عوامل نجاح المراجعة",
        defEN: "Key success factors: (1) Clear & measurable objectives. (2) Appropriate review type for objectives and context. (3) Reviewing small chunks (reviewers maintain concentration). (4) Feedback to authors and stakeholders. (5) Adequate preparation time. (6) Management support. (7) Making reviews part of organizational CULTURE. (8) Adequate training. (9) Facilitating review meetings.",
        defAR: "عوامل النجاح الرئيسية: (1) أهداف واضحة وقابلة للقياس. (2) نوع مراجعة مناسب للأهداف والسياق. (3) مراجعة أجزاء صغيرة (المراجعون يحافظون على التركيز). (4) تغذية راجعة للمؤلفين وأصحاب المصلحة. (5) وقت كافٍ للتحضير. (6) دعم الإدارة. (7) جعل المراجعات جزءاً من ثقافة المنظمة. (8) تدريب كافٍ. (9) تيسير اجتماعات المراجعة.",
        example: "فريق فشل في مراجعاته: وثيقة 200 صفحة تُراجع في يوم واحد (مراجعة كبيرة جداً). لا وقت للتحضير. لا هدف محدد. المدير لا يرى قيمة في المراجعة. النتيجة: اجتماع مضيع. فريق ناجح: يراجع 20 صفحة في كل جلسة، مع تحضير مسبق، وأهداف محددة."
    },

    // ===== CH3 EXAM FOCUS CARD =====
    {
        cat: "ch3", catLabel: "الفصل الثالث · Ch3: Static Testing", isNew: true, isExamFocus: true,
        en: "🎯 CH3 EXAM FOCUS — Key Points",
        ar: "🎯 أهم نقاط الفصل الثالث للامتحان",
        defEN: "CRITICAL FOR EXAM: K1 & K2 items.",
        defAR: "الأهم للامتحان — الفصل الثالث:",
        example: "① Static = no execution needed | Dynamic = execution required ② Static finds defects DIRECTLY | Dynamic causes failures first ③ Static can find NON-EXECUTABLE work product defects | Dynamic CANNOT ④ Review Process: 5 steps — Planning → Initiation → Individual Review → Communication → Fixing ⑤ 6 Roles: Manager (decides) | Author (creates+fixes) | Moderator (runs meeting) | Scribe (records) | Reviewer (reviews) | Review Leader (overall responsibility) ⑥ Review Types (least→most formal): Informal → Walkthrough (author leads) → Technical Review (moderator leads) → Inspection (most formal, author ≠ leader or scribe) ⑦ Success Factors: clear objectives, small chunks, adequate time, management support"
    },

// ==========================================================
// CHAPTER 4 — TEST ANALYSIS AND DESIGN (11Q: K2=6, K3=5)
// ==========================================================

    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Equivalence Partitioning (EP)",
        ar: "تقسيم التكافؤ (EP)",
        defEN: "Divides all possible inputs into PARTITIONS where all elements are processed the SAME WAY. ONE test per partition is sufficient. Partitions must NOT overlap and must be non-empty. Valid partitions (accepted data) + Invalid partitions (rejected data) must both be tested. Coverage = partitions exercised / total partitions × 100%.",
        defAR: "تقسيم جميع المدخلات الممكنة إلى أقسام حيث تُعالج كل العناصر بنفس الطريقة. اختبار واحد لكل قسم كافٍ. الأقسام يجب ألا تتداخل وأن تكون غير فارغة. الأقسام الصالحة (بيانات مقبولة) + الأقسام غير الصالحة (بيانات مرفوضة) يجب اختبار الاثنتين. التغطية = الأقسام المختبرة / إجمالي الأقسام × 100%.",
        example: "حقل سن: صالح [18-65]، غير صالح [أقل من 18]، غير صالح [أكبر من 65]. 3 أقسام → نختبر: 30 (صالح)، 10 (أصغر غير صالح)، 80 (أكبر غير صالح). لا داعي لاختبار 19، 20، 21... كلهم في نفس القسم."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Boundary Value Analysis (BVA) — 2-value & 3-value",
        ar: "تحليل القيم الحدية (BVA) — 2 قيم و3 قيم",
        defEN: "Extends EP by testing at the BOUNDARIES of partitions. 2-value BVA: test the boundary value AND its nearest neighbor in adjacent partition. 3-value BVA: test boundary value AND BOTH neighbors (one each side). 3-value BVA is MORE RIGOROUS — detects bugs 2-value misses (e.g., ≤ vs < errors). Only works on ORDERED partitions.",
        defAR: "يمتد EP باختبار الحدود الفاصلة بين الأقسام. 2-value BVA: اختبر القيمة الحدية وأقرب جار في القسم المجاور. 3-value BVA: اختبر القيمة الحدية وكلا الجارين (واحد من كل جانب). 3-value BVA أكثر صرامة — يكتشف bugs يفوت عليها 2-value. يعمل فقط على الأقسام المرتبة.",
        example: "حقل سن [18-65]: 2-value BVA: 17, 18, 65, 66 (حدود + أقرب جار). 3-value BVA: 16, 17, 18 (حول حد 18) + 64, 65, 66 (حول حد 65). لو مطور كتب 'if age > 18' بدل '>= 18': 2-value BVA يصطاده (17 رفض، 18 يجب قبوله). لو كتب 'if age >= 17': 3-value BVA يصطاده (16 رفض، 17 يُقبل خطأً)."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Decision Table Testing",
        ar: "اختبار جدول القرار",
        defEN: "Used when you have MULTIPLE CONDITIONS that affect ACTIONS/outcomes. Number of rules (columns) = 2^n where n = number of conditions. Coverage items = columns (feasible combinations). 100% coverage = exercise all feasible columns. Strength: systematically identifies ALL combinations — helps find GAPS and CONTRADICTIONS in requirements. Can be minimized by merging columns where some conditions don't affect the outcome.",
        defAR: "يُستخدم عند وجود شروط متعددة تؤثر على نتائج/أفعال. عدد القواعد (الأعمدة) = 2^n حيث n = عدد الشروط. عناصر التغطية = الأعمدة (التركيبات القابلة للتطبيق). 100% تغطية = اختبار كل الأعمدة القابلة للتطبيق. القوة: يُحدد بشكل منهجي جميع التركيبات — يساعد في إيجاد الثغرات والتناقضات في المتطلبات.",
        example: "تسجيل الدخول: شرطان (إيميل صح/غلط × كلمة مرور صح/غلط) = 4 تركيبات. صح+صح = يدخل. صح+غلط = رسالة خطأ. غلط+صح = رسالة خطأ. غلط+غلط = رسالة خطأ. 3 شروط → 8 تركيبات. لو أضفنا 'هل الحساب محظور؟' → 16 تركيبة."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "State Transition Testing",
        ar: "اختبار انتقال الحالات",
        defEN: "Used when system behavior depends on its CURRENT STATE. Key concepts: States, Transitions (initiated by events), Guard conditions, Actions. Representation: State Diagram OR State Table (rows=states, columns=events). 3 coverage criteria: (1) All States Coverage (weakest — visit all states). (2) Valid Transitions Coverage / 0-switch (most widely used — exercise all valid transitions). (3) All Transitions Coverage (strongest — includes invalid transitions; needed for safety-critical).",
        defAR: "يُستخدم عندما يعتمد سلوك النظام على حالته الحالية. المفاهيم الرئيسية: الحالات، الانتقالات (تُبادر بأحداث)، شروط الحراسة، الأفعال. التمثيل: مخطط حالة أو جدول حالة (صفوف=حالات، أعمدة=أحداث). 3 معايير تغطية: (1) تغطية كل الحالات (الأضعف). (2) تغطية الانتقالات الصالحة (الأكثر استخداماً). (3) تغطية كل الانتقالات (الأقوى — لأنظمة الأمان الحرجة).",
        example: "حساب بنكي: حالات: نشط → قيد الفحص → مقفول → مغلق. الانتقال: 3 محاولات خاطئة → قيد الفحص. طلب فك القفل المراجعة → نشط. تجاوز 90 يوم بدون تفعيل → مغلق. Valid Transitions Coverage: نختبر كل الانتقالات المسموحة بالسهام."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Statement Testing and Coverage",
        ar: "اختبار التعليمات وتغطيتها",
        defEN: "White-box technique. Coverage items = executable STATEMENTS. Coverage = statements exercised / total executable statements × 100%. 100% statement coverage: all executable statements executed at least once. LIMITATION: 100% statement coverage does NOT ensure all branches are tested (branch coverage can be higher). Exercising a statement will NOT detect defects in all cases.",
        defAR: "تقنية صندوق أبيض. عناصر التغطية = التعليمات القابلة للتنفيذ. التغطية = التعليمات المنفذة / إجمالي التعليمات القابلة للتنفيذ × 100%. 100% تغطية تعليمات: كل التعليمات القابلة للتنفيذ نُفِّذت مرة واحدة على الأقل. القيد: 100% تغطية تعليمات لا تضمن اختبار كل الفروع.",
        example: "كود: if (x > 0) { print 'positive'; } print 'done'; اختبار بـ x=5: يُشغّل 3 تعليمات من 3 = 100% statement coverage. لكن لم نختبر ماذا يحدث لو x=-1 (الـ if condition = false). 100% statement ≠ 100% branch coverage."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Branch Testing and Coverage (Decision Coverage)",
        ar: "اختبار الفروع وتغطيتها (تغطية القرارات)",
        defEN: "White-box technique. Coverage items = BRANCHES (transfers of control between nodes in control flow graph). Conditional branches: true/false from if...then. Unconditional branches: straight-line code. Coverage = branches exercised / total branches × 100%. KEY RULE: 100% branch coverage SUBSUMES (guarantees) 100% statement coverage — but NOT vice versa.",
        defAR: "تقنية صندوق أبيض. عناصر التغطية = الفروع (انتقالات التحكم بين العقد في مخطط تدفق التحكم). فروع شرطية: صح/خطأ من if...then. فروع غير شرطية: كود مستقيم. التغطية = الفروع المنفذة / إجمالي الفروع × 100%. القاعدة الرئيسية: 100% تغطية فروع تضمن 100% تغطية تعليمات — لكن ليس العكس.",
        example: "كود: if (age >= 18) { allow(); } else { deny(); } لـ 100% branch coverage: نحتاج اختبارين — age=25 (branch true) و age=16 (branch false). هذا يغطي كل التعليمات أيضاً. لكن 100% statement coverage ممكن بـ age=25 فقط — لكنه لا يغطي branch الـ false."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Error Guessing",
        ar: "تخمين الأخطاء",
        defEN: "Experience-based technique. Anticipates occurrence of errors, defects, and failures based on tester's knowledge: how the app worked in the past, types of errors developers tend to make, types of failures in similar apps. Fault Attacks = methodical approach to error guessing — create a list of possible errors/defects/failures and design tests targeting them.",
        defAR: "تقنية قائمة على الخبرة. توقّع حدوث أخطاء وعيوب وإخفاقات بناءً على معرفة المختبر: كيف عمل التطبيق في الماضي، أنواع الأخطاء التي يرتكبها المطورون عادةً، أنواع الإخفاقات في تطبيقات مشابهة. Fault Attacks = نهج منهجي لتخمين الأخطاء.",
        example: "مختبر خبير يعرف أن المطورين غالباً يخطئون في: حقول المبالغ (أرقام سالبة، صفر، فاصلة)، كلمات المرور (رموز خاصة، UTF-8)، التواريخ (29 فبراير في غير سنة كبيسة)، الحدود الأعلى للقوائم، والمدخلات الفارغة. بيركز اختباراته هناك."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Exploratory Testing",
        ar: "الاختبار الاستكشافي",
        defEN: "Tests are SIMULTANEOUSLY designed, executed, and evaluated while learning about the test object. Structured using Session-Based Testing: defined TIME-BOX (60-120 min) + TEST CHARTER (scope, goal, approach). After session: DEBRIEFING with stakeholders. Useful when: few/inadequate specifications, significant time pressure. More effective with experienced testers with analytical skills & curiosity.",
        defAR: "الاختبارات مُصممة ومُنفذة ومُقيّمة في آن واحد بينما يتعلم المختبر عن كائن الاختبار. هيكلة باستخدام اختبار قائم على الجلسات: TIME-BOX محدد (60-120 دقيقة) + TEST CHARTER (النطاق، الهدف، الأسلوب). بعد الجلسة: DEBRIEFING مع أصحاب المصلحة. مفيد عندما: مواصفات قليلة أو ضغط وقت كبير.",
        example: "مختبر يفتح تطبيق بنك جديد بدون مواصفات مفصّلة: TEST CHARTER 'استكشف صفحة التحويل، ابحث عن مشاكل في المبالغ الكبيرة والعملات المختلطة، 90 دقيقة'. يجرب حالات لم تخطر في البال (مبلغ 0.001، عملة مختلطة، تحويل لنفس الحساب). يكتشف bugs لم يفكر فيها أحد."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Checklist-Based Testing",
        ar: "الاختبار القائم على قوائم المراجعة",
        defEN: "Tester designs, implements, and executes tests to cover test conditions from a CHECKLIST. Checklists built from: experience, knowledge of what's important to the user, understanding of why software fails. Should NOT contain items that can be checked automatically, items better suited as entry/exit criteria, or items too general. Items phrased as QUESTIONS. Support both functional and non-functional testing.",
        defAR: "المختبر يصمم وينفّذ اختبارات لتغطية شروط الاختبار من قائمة مراجعة. تُبنى قوائم المراجعة من: الخبرة، معرفة ما هو مهم للمستخدم، فهم لماذا يفشل البرنامج. لا يجب أن تحتوي على: عناصر يمكن فحصها تلقائياً، عناصر تناسب أكثر معايير الدخول/الخروج، عناصر عامة جداً. العناصر مصاغة كأسئلة.",
        example: "قائمة مراجعة لصفحة تسجيل: 'هل تظهر رسالة خطأ واضحة لو الإيميل موجود؟', 'هل كلمة المرور مخفية أثناء الكتابة؟', 'هل يعمل التسجيل بأحرف عربية؟', 'هل يُبلَّغ المستخدم بمتطلبات كلمة المرور قبل الإرسال؟' — كل عنصر سؤال قابل للإجابة."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Collaborative User Story Writing",
        ar: "كتابة قصص المستخدم التعاونية",
        defEN: "Business, developers, and testers (3 Amigos) collaborate BEFORE development to write user stories. Standard format: 'As a [role], I want [goal], so that [reason]'. Rules: testable, independent, small enough to complete in one sprint. Testers explore, challenge, and help improve proposed user stories by asking 'what if?' questions.",
        defAR: "الأعمال والمطورون والمختبرون (الثلاثة أصدقاء) يتعاونون قبل التطوير لكتابة قصص المستخدم. الصيغة القياسية: 'كـ [دور]، أريد [هدف]، حتى [سبب]'. قواعد: قابلة للاختبار، مستقلة، صغيرة بما يكفي لإكمالها في sprint واحدة. المختبرون يستكشفون ويتحدون ويحسّنون القصص بأسئلة 'ماذا لو؟'.",
        example: "'كعميل بنك، أريد تحويل أموال فورياً، حتى أدفع الفواتير في أي وقت.' المختبر يسأل: 'ماذا لو الرصيد غير كافٍ؟ ماذا لو الحساب المستلم محظور؟ ماذا لو انقطع الإنترنت خلال التحويل؟' هذه الأسئلة تُحدد Acceptance Criteria قبل الكود."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "Acceptance Criteria",
        ar: "معايير القبول",
        defEN: "Conditions that a user story must satisfy to be ACCEPTED by stakeholders — the testable definition of 'done' for a story. Different from Entry/Exit Criteria (which apply to activities/levels). Acceptance Criteria can be written using: Scenario-based format (Given/When/Then — ATDD), Rule-based format (list of rules). Each criterion must be independently testable.",
        defAR: "الشروط التي يجب أن تستوفيها قصة المستخدم لقبولها من أصحاب المصلحة — التعريف القابل للاختبار لـ 'اكتملت' القصة. مختلفة عن معايير الدخول/الخروج (التي تُطبق على الأنشطة/المستويات). يمكن كتابة Acceptance Criteria باستخدام: صيغة السيناريو (Given/When/Then — ATDD)، صيغة القواعد (قائمة قواعد).",
        example: "قصة: 'أريد استلام تنبيه عند سحب من حسابي'. معايير القبول: 1) تنبيه SMS في أقل من 10 ثوانٍ من السحب. 2) التنبيه يتضمن المبلغ والرصيد المتبقي. 3) لو السحب فشل → لا تنبيه. 4) يعمل 24/7. كل معيار قابل للاختبار بشكل مستقل."
    },
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: false, isExamFocus: false,
        en: "ATDD — Acceptance Test-Driven Development",
        ar: "التطوير المدفوع باختبار القبول",
        defEN: "Derives tests from acceptance criteria as part of the system design process. Tests are written BEFORE the part of the application is developed (to satisfy the tests). Typically uses Given/When/Then format. Collaboratively defined by business + developers + testers. Tests become executable requirements (can be automated). Follows shift-left principle.",
        defAR: "يشتق اختبارات من معايير القبول كجزء من عملية تصميم النظام. الاختبارات تُكتب قبل تطوير الجزء المقابل من التطبيق. تستخدم عادةً صيغة Given/When/Then. تُحدَّد بشكل تعاوني من الأعمال والمطورين والمختبرين. الاختبارات تصبح متطلبات قابلة للتنفيذ (يمكن أتمتتها).",
        example: "قبل كتابة كود التحقق من السن: ATDD يكتب: GIVEN مستخدم عمره 17 / WHEN يحاول الاشتراك في خدمة للبالغين / THEN يظهر رسالة 'يجب أن يكون عمرك 18 أو أكثر' ويُرفض الطلب. هذا Test يُكتب قبل الكود ثم يُمرَّر عليه."
    },

    // ===== CH4 EXAM FOCUS CARD =====
    {
        cat: "ch4", catLabel: "الفصل الرابع · Ch4: Test Design", isNew: true, isExamFocus: true,
        en: "🎯 CH4 EXAM FOCUS — Key Points",
        ar: "🎯 أهم نقاط الفصل الرابع للامتحان",
        defEN: "CRITICAL FOR EXAM: K2 & K3 — highest weight chapter!",
        defAR: "الأهم للامتحان — الفصل الرابع (أعلى وزن: 11 سؤال!):",
        example: "① EP: 1 test per partition is sufficient | valid + invalid partitions | coverage = exercised/total ② BVA 2-value: boundary + nearest neighbor | 3-value: boundary + BOTH neighbors | 3-value MORE rigorous ③ Decision Table: columns = 2^n conditions | coverage = all feasible columns ④ State Transition: 3 criteria — All States (weakest) | Valid Transitions/0-switch (most used) | All Transitions (strongest, includes invalid) ⑤ Statement Coverage subsumes NOTHING | Branch Coverage SUBSUMES Statement Coverage ⑥ Error Guessing = experience-based | Exploratory = simultaneous design+execute+evaluate, uses Test Charter + Time-box ⑦ Checklist = questions, NOT automatable items | Acceptance Criteria = testable definition of done per story ⑧ ATDD: tests written BEFORE code | Given/When/Then | collaborative"
    },

// ==========================================================
// CHAPTER 5 — MANAGING TEST ACTIVITIES (9Q: K1=1, K2=5, K3=3)
// ==========================================================

    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Test Plan — Purpose and Content",
        ar: "خطة الاختبار — الهدف والمحتوى",
        defEN: "A test plan describes: objectives, resources, processes for a test project. Documents means and schedule for achieving test objectives. Serves as communication tool with stakeholders. Demonstrates adherence to test policy and strategy. Typical content: Context, Assumptions & constraints, Stakeholders, Communication, Risk register, Test approach (levels, types, techniques, entry/exit criteria, metrics, independence, deviations from policy), Budget & schedule.",
        defAR: "خطة الاختبار تصف: الأهداف والموارد والعمليات لمشروع اختبار. تُوثّق الوسائل والجدول الزمني لتحقيق أهداف الاختبار. تعمل كأداة تواصل مع أصحاب المصلحة. المحتوى النموذجي: السياق، الافتراضات والقيود، أصحاب المصلحة، التواصل، سجل المخاطر، نهج الاختبار، الميزانية والجدول الزمني.",
        example: "Test Plan لمشروع بنكي: 'نختبر 3 مستويات (Component/System/UAT)، بفريق من 4 مختبرين، خلال 6 أسابيع، مع 90% branch coverage كمعيار خروج، وبأولوية لصفحات الدفع والتحويل (risk-based)'."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Test Policy vs Test Strategy",
        ar: "سياسة الاختبار مقابل استراتيجية الاختبار",
        defEN: "Test Policy: high-level document defining principles and objectives for testing across the organization (general, stable, set by senior management). Test Strategy: describes how testing is done in a specific project or program — defines test approach, levels, types, and techniques (specific, derived from test policy). Test Plan may explain deviations from policy/strategy.",
        defAR: "سياسة الاختبار: وثيقة عالية المستوى تحدد مبادئ وأهداف الاختبار عبر المنظمة (عامة، مستقرة، يضعها الإدارة العليا). استراتيجية الاختبار: تصف كيفية إجراء الاختبار في مشروع أو برنامج محدد — تحدد نهج الاختبار والمستويات والأنواع والتقنيات (محددة، مشتقة من سياسة الاختبار).",
        example: "سياسة اختبار المنظمة: 'كل المنتجات يجب أن تحقق 80% code coverage على الأقل قبل الإطلاق'. استراتيجية مشروع معين: 'سنستخدم Selenium للأتمتة، JMeter للأداء، وسنجري UAT بـ 20 مستخدم حقيقي'. خطة الاختبار: 'في هذا المشروع تحديداً، Coverage ستكون 75% بسبب time constraints (انحراف موثق)'."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Entry Criteria and Exit Criteria",
        ar: "معايير الدخول ومعايير الخروج",
        defEN: "Entry Criteria: preconditions for undertaking a given activity (if not met, activity is more difficult/costly/risky). Typical entry: availability of resources, testware, initial quality level. Exit Criteria: what must be achieved to declare activity complete. Typical exit: measures of thoroughness (coverage, defect density), completion criteria. In Agile: Entry = Definition of Ready | Exit = Definition of Done.",
        defAR: "معايير الدخول: الشروط المسبقة لبدء نشاط معين (إذا لم تتحقق، النشاط أصعب/أكلف/أكثر خطورة). أمثلة دخول: توافر الموارد والـ testware ومستوى جودة أولي. معايير الخروج: ما يجب تحقيقه للإعلان عن اكتمال النشاط. في Agile: الدخول = Definition of Ready | الخروج = Definition of Done.",
        example: "Entry Criteria لـ System Testing: 'الكود مكتمل وخضع لـ Code Review، بيئة الاختبار تعمل، وثيقة المتطلبات معتمدة'. Exit Criteria: '95% من Test Cases اجتازت، لا يوجد Critical bugs مفتوحة، Code Coverage ≥ 85%'. لو في شرط واحد مش محقق → لا نبدأ/لا ننتهي."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Estimation Techniques (4 Methods)",
        ar: "تقنيات تقدير الجهد (4 أساليب)",
        defEN: "(1) Estimation Based on Ratios (metrics-based): use dev:test ratio from previous similar projects. (2) Extrapolation (metrics-based): measure early sprints, project forward using mathematical model — suitable for iterative SDLCs. (3) Wideband Delphi (expert-based): experts estimate independently, discuss deviations until consensus — Planning Poker is a variant. (4) Three-Point Estimation (expert-based): E=(a+4m+b)/6, SD=(b-a)/6.",
        defAR: "(1) التقدير بالنسب (قائم على مقاييس): استخدام نسبة dev:test من مشاريع مشابهة سابقة. (2) الاستقراء (قائم على مقاييس): قياس الـ sprints المبكرة والإسقاط للأمام بنموذج رياضي — مناسب لـ SDLCs التكرارية. (3) Wideband Delphi (قائم على خبراء): الخبراء يقدّرون بشكل مستقل، يناقشون الانحرافات للوصول لإجماع — Planning Poker نوع منه. (4) التقدير ثلاثي النقاط: E=(a+4m+b)/6.",
        example: "مشروع جديد لتطوير تطبيق موبايل: (1) المشاريع السابقة كانت 3 dev: 1 test → نقدر 100 يوم dev → 33 يوم اختبار. (2) أول sprint اخذ 5 أيام اختبار من 20 يوم → نتوقع 5×(كل الـ sprints) = X. (3) 3 خبراء بدون نقاش: 40, 60, 80 يوم. يناقشون → 55 يوم. (4) a=30, m=50, b=80 → E=(30+200+80)/6=51.7 يوم."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Test Case Prioritization (3 Strategies)",
        ar: "ترتيب أولويات حالات الاختبار (3 استراتيجيات)",
        defEN: "Determines ORDER of test case execution. 3 strategies: (1) Risk-based: cases covering most important risks executed first. (2) Coverage-based: cases achieving highest coverage executed first — Additional Coverage Prioritization: each subsequent case achieves highest ADDITIONAL coverage. (3) Requirements-based: cases covering highest-priority requirements executed first. CONSTRAINT: dependencies between cases must be respected.",
        defAR: "يُحدد ترتيب تنفيذ حالات الاختبار. 3 استراتيجيات: (1) قائمة على المخاطر: الحالات التي تغطي أهم المخاطر أولاً. (2) قائمة على التغطية: الحالات التي تحقق أعلى تغطية أولاً. (3) قائمة على المتطلبات: الحالات التي تغطي أهم المتطلبات أولاً. قيد: يجب احترام التبعيات بين الحالات.",
        example: "في مشروع بوقت محدود: Risk-based → نختبر صفحة الدفع (مخاطرة عالية: مال) قبل صفحة الإعدادات (مخاطرة منخفضة). لو وقت خلص قبل ما نخلص → الأهم اتغطى. Coverage-based: اختبر TC1 (يغطي 30%) ثم TC5 (يغطي 20% إضافية) ثم TC3 (يغطي 15% إضافية)."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Test Pyramid",
        ar: "هرم الاختبار",
        defEN: "Model showing different tests have different granularity. The HIGHER the layer → LOWER granularity, isolation, and execution time. Bottom (unit tests): MANY, small, fast, isolated, check small functionality. Top (end-to-end UI tests): FEW, large, slow, check large piece of functionality. Key use: support automation strategy and test effort allocation.",
        defAR: "نموذج يُظهر أن الاختبارات المختلفة لها تفصيل مختلف. كلما ارتفعت الطبقة → تفصيل أقل، عزل أقل، وقت تنفيذ أطول. القاعدة (unit tests): كثيرة، صغيرة، سريعة، معزولة. القمة (E2E UI tests): قليلة، كبيرة، بطيئة. الاستخدام الرئيسي: دعم استراتيجية الأتمتة وتخصيص الجهد.",
        example: "هرم مقلوب (كثير من E2E وقليل من Unit) = مشكلة: CI pipeline بطيء (E2E تأخذ ساعات)، صعب تشخيص أي مكون سبب الفشل. الهرم الصحيح: آلاف Unit Tests (ثوانٍ) → مئات Integration Tests (دقائق) → عشرات E2E Tests (ساعة). الفشل في Unit Tests = تشخيص فوري."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Testing Quadrants (Q1-Q4)",
        ar: "مربعات الاختبار الأربعة (Q1-Q4)",
        defEN: "Model by Brian Marick. Two axes: Business-facing vs Technology-facing AND Support the Team vs Critique the Product. Q1 (Technology, Support): component & integration tests — AUTOMATED, in CI. Q2 (Business, Support): functional tests, API tests, simulations — manual OR automated. Q3 (Business, Critique): exploratory, usability, UAT — MANUAL. Q4 (Technology, Critique): performance, security, smoke tests — AUTOMATED.",
        defAR: "نموذج من Brian Marick. محوران: موجه للأعمال مقابل موجه للتقنية، ودعم الفريق مقابل تقييم المنتج. Q1 (تقني، دعم): اختبارات مكونات وتكامل — آلية في CI. Q2 (أعمال، دعم): اختبارات وظيفية وAPI — يدوية أو آلية. Q3 (أعمال، تقييم): استكشافي وسهولة استخدام وUAT — يدوية. Q4 (تقني، تقييم): أداء وأمان واختبار دخان — آلية.",
        example: "فريق Agile يستخدم Quadrants لتخطيط Sprint: Q1 → Unit Tests آلية في كل Commit. Q2 → مختبر وبيزنس يتحققان من Acceptance Criteria يدوياً. Q3 → مختبر خبير يعمل Exploratory Testing بعد كل Sprint. Q4 → Jenkins يشغّل JMeter كل ليلة لاختبار الأداء."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Risk Definition and Attributes",
        ar: "تعريف المخاطرة وخصائصها",
        defEN: "Risk = potential event/hazard whose occurrence causes ADVERSE EFFECT. Characterized by 2 factors: Risk Likelihood (probability of occurrence: >0 and <1) + Risk Impact (consequences if it occurs). Risk Level = Likelihood × Impact. The HIGHER the risk level, the MORE IMPORTANT its treatment. Risk-Based Testing: activities selected/prioritized/managed based on risk analysis and control.",
        defAR: "المخاطرة = حدث/خطر محتمل يسبب تأثيراً سلبياً. تتسم بعاملين: احتمالية المخاطرة (احتمال الحدوث: >0 و<1) + تأثير المخاطرة (العواقب عند الحدوث). مستوى المخاطرة = الاحتمالية × التأثير. كلما ارتفع مستوى المخاطرة، كلما زادت أهمية معالجتها.",
        example: "قبل رحلة: 'تأخر الطيران' — احتمالية 30% × تأثير (خسارة اجتماع مهم) = مخاطرة متوسطة. 'انهيار الطائرة' — احتمالية 0.001% × تأثير (الموت) = مخاطرة عالية جداً. في الاختبار: 'خطأ في حساب الفائدة البنكية' = احتمالية متوسطة × تأثير مالي ضخم = مخاطرة عالية → يُعطى أولوية قصوى."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Project Risks vs Product Risks",
        ar: "مخاطر المشروع مقابل مخاطر المنتج",
        defEN: "Project Risks: related to management and control of the PROJECT. Include: Organizational issues (delays, bad estimates, cost-cutting), People issues (skills, conflicts, staff shortage), Technical issues (scope creep, poor tools), Supplier issues (3rd party failures). Product Risks: related to PRODUCT QUALITY characteristics. Include: missing functionality, incorrect calculations, poor architecture, security vulnerabilities, inadequate response time.",
        defAR: "مخاطر المشروع: تتعلق بإدارة والتحكم في المشروع. تشمل: مشاكل تنظيمية، مشاكل أفراد، مشاكل تقنية، مشاكل موردين. مخاطر المنتج: تتعلق بخصائص جودة المنتج. تشمل: وظائف مفقودة، حسابات خاطئة، هيكلة رديئة، ثغرات أمنية، وقت استجابة غير كافٍ.",
        example: "Project Risk: 'المطور الرئيسي سيسافر آخر أسبوع قبل التسليم' (مخاطرة في إدارة المشروع). Product Risk: 'صفحة الدفع قد تحسب الضريبة بطريقة خاطئة' (مخاطرة في جودة المنتج). Product Risks تُوجه أين نختبر أكثر."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Product Risk Analysis and Control",
        ar: "تحليل ومراقبة مخاطر المنتج",
        defEN: "Risk Analysis = Risk Identification + Risk Assessment. Risk Identification: generating comprehensive list using brainstorming, workshops, interviews, cause-effect diagrams. Risk Assessment: categorization, likelihood, impact, level, prioritization. Quantitative: Risk Level = likelihood × impact. Qualitative: Risk Matrix. Risk Control = Risk Mitigation + Risk Monitoring. Mitigation: implementing proposed actions to reduce risk level.",
        defAR: "تحليل المخاطر = تحديد المخاطر + تقييم المخاطر. تحديد المخاطر: إنشاء قائمة شاملة باستخدام العصف الذهني والورش والمقابلات. تقييم المخاطر: التصنيف، الاحتمالية، التأثير، المستوى، تحديد الأولويات. التقييم الكمي: مستوى المخاطرة = الاحتمالية × التأثير. النوعي: مصفوفة المخاطر. مراقبة المخاطر = تخفيف + رصد.",
        example: "مصفوفة المخاطر: احتمالية عالية × تأثير عالٍ = خلية حمراء (اختبار مكثف). احتمالية منخفضة × تأثير منخفض = خلية خضراء (اختبار أقل). نتائج Risk Analysis تُحدد: نطاق الاختبار، أي مستويات، أي تقنيات، كمية الجهد لكل منطقة."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Test Metrics (7 Categories)",
        ar: "مقاييس الاختبار (7 فئات)",
        defEN: "7 metric categories: (1) Project progress: task completion, resource usage. (2) Test progress: cases run/not run, passed/failed, execution time. (3) Product quality: availability, response time, mean time to failure. (4) Defect metrics: number/priority of found/fixed defects, defect density, detection percentage. (5) Risk: residual risk level. (6) Coverage: requirements, code coverage. (7) Cost: cost of testing, cost of quality.",
        defAR: "7 فئات مقاييس: (1) تقدم المشروع: اكتمال المهام، استخدام الموارد. (2) تقدم الاختبار: حالات شُغِّلت/لم تُشغَّل، اجتازت/فشلت. (3) جودة المنتج: التوافر، وقت الاستجابة، متوسط الوقت للفشل. (4) مقاييس العيوب: العدد والأولوية، الكثافة، نسبة الاكتشاف. (5) المخاطر: مستوى المخاطر المتبقية. (6) التغطية: تغطية المتطلبات والكود. (7) التكلفة.",
        example: "تقرير أسبوعي للإدارة: '750 من 1000 Test Case شُغِّلوا (75%)، 23 Bug مفتوح (منهم 3 Critical)، Code Coverage 87%، Defect Density 2.5 bugs/KLOC، المخاطر المتبقية: خطر منخفض في صفحة التقارير'. الإدارة بتاخد قرارات مبنية على أرقام."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Test Reports — Progress vs Completion",
        ar: "تقارير الاختبار — التقدم مقابل الإتمام",
        defEN: "Test Progress Reports: generated REGULARLY (daily/weekly) during testing. Content: test period, progress (ahead/behind schedule), impediments, metrics, new/changed risks, planned testing for next period. Test Completion Reports: prepared at END of testing (project/level/type complete). Content: test summary, quality evaluation, deviations from plan, impediments, metrics, unmitigated risks, lessons learned.",
        defAR: "تقارير تقدم الاختبار: تُنشأ بانتظام (يومياً/أسبوعياً) أثناء الاختبار. المحتوى: فترة الاختبار، التقدم، العقبات، المقاييس، المخاطر الجديدة/المتغيرة، الاختبار المخطط للفترة القادمة. تقارير إتمام الاختبار: تُعدّ في نهاية الاختبار. المحتوى: ملخص الاختبار، تقييم الجودة، الانحرافات عن الخطة، المخاطر غير المعالجة، الدروس المستفادة.",
        example: "تقرير تقدم أسبوعي: 'هذا الأسبوع: شغّلنا 200 Test Case، 180 نجحت، 20 فشلت (3 Critical). اكتشفنا 15 Bug جديدة. عائق: بيئة الاختبار كانت متوقفة يومين. الأسبوع القادم: سنختبر صفحة التقارير'. تقرير الإتمام: 'اختبرنا 1000 حالة، 950 نجحت، أطلقنا بمخاطر منخفضة، الدروس: الـ CI كان بطيئاً، نحسّنه في المشروع القادم'."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Configuration Management",
        ar: "إدارة التهيئة",
        defEN: "Ensures consistency and integrity of work products by controlling changes and versions. Benefits for testing: uniquely identifies each test item (traceability), provides info about which version is being tested, ensures test environment changes are controlled. Proper CM ensures that all testware is properly identified, version-controlled, tracked, and related to each other and the test basis.",
        defAR: "يضمن الاتساق وسلامة مخرجات العمل من خلال التحكم في التغييرات والإصدارات. فوائد للاختبار: التعريف الفريد لكل عنصر اختبار (قابلية التتبع)، معلومات عن الإصدار الذي يُختبر، ضمان التحكم في تغييرات بيئة الاختبار.",
        example: "بدون Configuration Management: مختبر يختبر Version 2.5 لكنه يعتقد أنه 2.4 → تقاريره غلط. مع CM: كل Version لها رقم واضح. Bug مُبلَّغ في v2.3 يُعرف على أي ملف وأي سطر وأي بيئة حصل فيه. لو حدث رجوع للإصدار القديم — معروف بالضبط ما اتغيّر."
    },
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: false, isExamFocus: false,
        en: "Defect Management",
        ar: "إدارة العيوب",
        defEN: "Defect reports document anomalies to give developers enough info to reproduce and fix. Key content: unique identifier, title/description, date, author, test object and environment, steps to reproduce, expected vs actual result, severity, priority, status, related risks. Anomalies found in static testing are also documented (but may not be called 'defects' as the SW isn't running).",
        defAR: "تقارير العيوب توثّق الشذوذات لإعطاء المطورين معلومات كافية لإعادة الإنتاج والإصلاح. المحتوى الرئيسي: معرّف فريد، العنوان والوصف، التاريخ، المؤلف، كائن الاختبار والبيئة، خطوات الإعادة، النتيجة المتوقعة مقابل الفعلية، الخطورة، الأولوية، الحالة، المخاطر المرتبطة.",
        example: "تقرير عيب مثالي: ID: BUG-0542. العنوان: 'صفحة الدفع تقبل مبلغ سالب'. الخطوات: 1) ادخل -500 في حقل المبلغ. 2) اضغط ادفع. النتيجة الفعلية: يُخصم -500 (أي يُضاف 500). المتوقع: رسالة خطأ. خطورة: Critical. أولوية: P1."
    },

    // ===== CH5 EXAM FOCUS CARD =====
    {
        cat: "ch5", catLabel: "الفصل الخامس · Ch5: Managing Activities", isNew: true, isExamFocus: true,
        en: "🎯 CH5 EXAM FOCUS — Key Points",
        ar: "🎯 أهم نقاط الفصل الخامس للامتحان",
        defEN: "CRITICAL FOR EXAM: K1, K2, K3 (9 questions).",
        defAR: "الأهم للامتحان — الفصل الخامس (9 أسئلة!):",
        example: "① Test Plan content: Context, Assumptions, Stakeholders, Communication, Risk Register, Test Approach, Budget ② Test Policy (org-level, stable) ≠ Test Strategy (project-level, specific) ③ Entry Criteria = preconditions to START | Exit Criteria = conditions to STOP ④ 4 Estimation: Ratios | Extrapolation | Wideband Delphi (Planning Poker variant) | Three-Point: E=(a+4m+b)/6 ⑤ 3 Prioritization: Risk-based | Coverage-based | Requirements-based ⑥ Test Pyramid: Unit (many/fast) → Integration → E2E (few/slow) ⑦ Quadrants: Q1=tech/support(automated) | Q2=business/support(manual+auto) | Q3=business/critique(manual) | Q4=tech/critique(automated) ⑧ Risk Level = Likelihood × Impact | Project Risk = management | Product Risk = quality ⑨ 7 Metrics categories: Project/Test/Product Quality/Defects/Risk/Coverage/Cost ⑩ Progress Report = regular during testing | Completion Report = at end ⑪ Defect Report must enable reproduction"
    },

// ==========================================================
// CHAPTER 6 — TEST TOOLS (2Q: K1=1, K2=1)
// ==========================================================

    {
        cat: "ch6", catLabel: "الفصل السادس · Ch6: Test Tools", isNew: false, isExamFocus: false,
        en: "Tool Support Categories (8 Types)",
        ar: "فئات أدوات دعم الاختبار (8 أنواع)",
        defEN: "8 tool support categories: (1) Management tools: manage SDLC, requirements, tests, defects, configuration (Jira, TestRail). (2) Static testing tools: support reviews and static analysis (SonarQube). (3) Test design & implementation tools: generate test cases, test data, test procedures. (4) Execution & coverage tools: automated execution and coverage measurement (Selenium). (5) Non-functional testing tools: performance, security (JMeter, OWASP ZAP). (6) DevOps tools: CI/CD, workflow, automated build (Jenkins). (7) Collaboration tools: communication. (8) Scalability & deployment tools: VMs, containers.",
        defAR: "8 فئات أدوات: (1) أدوات إدارة: تدير SDLC والمتطلبات والاختبارات والعيوب. (2) أدوات الاختبار الساكن: تدعم المراجعات والتحليل الساكن. (3) أدوات تصميم وتجهيز الاختبار: تُنشئ حالات اختبار وبيانات وإجراءات. (4) أدوات التنفيذ والتغطية: تنفيذ آلي وقياس تغطية. (5) أدوات الاختبار غير الوظيفي: أداء وأمان. (6) أدوات DevOps: CI/CD وبناء آلي. (7) أدوات التعاون. (8) أدوات قابلية التوسع والنشر.",
        example: "مشروع كامل يستخدم: Jira (إدارة) + SonarQube (تحليل ساكن) + Selenium (تنفيذ آلي) + JMeter (أداء) + OWASP ZAP (أمان) + Jenkins (CI/CD) + Slack (تعاون) + Docker (نشر). كل أداة لغرضها — لا أداة واحدة تعمل كل شيء."
    },
    {
        cat: "ch6", catLabel: "الفصل السادس · Ch6: Test Tools", isNew: false, isExamFocus: false,
        en: "Benefits of Test Automation",
        ar: "فوائد أتمتة الاختبار",
        defEN: "Key benefits: (1) Time saved on repetitive manual work (e.g., regression tests, data entry, comparing results). (2) Prevention of simple human errors (consistency and repeatability). (3) More objective assessment (coverage metrics too complex for humans). (4) Easier access to testing information for reporting. (5) Reduced test execution times → faster feedback → faster time to market. (6) Frees testers for designing more creative/complex manual tests.",
        defAR: "الفوائد الرئيسية: (1) توفير الوقت في العمل اليدوي المتكرر (regression tests، إدخال بيانات، مقارنة نتائج). (2) منع الأخطاء البشرية البسيطة (اتساق وتكرارية). (3) تقييم أكثر موضوعية (مقاييس تغطية معقدة للإنسان). (4) وصول أسهل لبيانات الاختبار للتقارير. (5) تقليل أوقات التنفيذ → تغذية راجعة أسرع → طرح أسرع في السوق. (6) تحرير المختبرين لتصميم اختبارات يدوية أكثر إبداعاً.",
        example: "قبل الأتمتة: 2 مختبر × 3 أيام = 6 أيام لتشغيل 500 Regression Test يدوياً، مع احتمال خطأ إنساني. بعد الأتمتة بـ Selenium: 500 Test تُشغَّل في 25 دقيقة بدقة 100%. المختبرون يوجّهون وقتهم لـ Exploratory Testing — يكتشفون bugs أعمق وأكثر قيمة."
    },
    {
        cat: "ch6", catLabel: "الفصل السادس · Ch6: Test Tools", isNew: false, isExamFocus: false,
        en: "Risks of Test Automation",
        ar: "مخاطر أتمتة الاختبار",
        defEN: "Key risks: (1) Unrealistic expectations about benefits (functionality and ease of use). (2) Inaccurate estimations of time/costs to introduce, maintain test scripts, and change manual process. (3) Using automation when MANUAL is more appropriate. (4) Over-reliance on tools — ignoring human critical thinking. (5) Vendor dependency (tool discontinued or sold). (6) Abandoned open-source software. (7) Tool not compatible with development platform. (8) Choosing unsuitable tool (regulatory/safety standards).",
        defAR: "المخاطر الرئيسية: (1) توقعات غير واقعية حول الفوائد. (2) تقديرات غير دقيقة للوقت والتكاليف (التقديم والصيانة والتغيير). (3) استخدام الأتمتة حين اليدوي أنسب. (4) الاعتماد المفرط على الأدوات مع إهمال التفكير النقدي البشري. (5) التبعية للمورد. (6) أدوات Open Source متروكة. (7) عدم توافق الأداة مع منصة التطوير. (8) اختيار أداة غير مناسبة للمتطلبات التنظيمية.",
        example: "شركة أتمتت صفحة سهلة التغيير: كل تحديث UI يكسر 50 Test Case → فريق يمضي 3 أيام يصلح scripts بدل 1 يوم اختبار يدوي. خطأ: أتمتة ما يتغير كثيراً. الصواب: أتمتة Regression Tests المستقرة، واليدوي للـ Exploratory والـ UI الجديدة."
    },

    // ===== CH6 EXAM FOCUS CARD =====
    {
        cat: "ch6", catLabel: "الفصل السادس · Ch6: Test Tools", isNew: true, isExamFocus: true,
        en: "🎯 CH6 EXAM FOCUS — Key Points",
        ar: "🎯 أهم نقاط الفصل السادس للامتحان",
        defEN: "CRITICAL FOR EXAM: K1 & K2 (only 2 questions but easy marks!).",
        defAR: "الأهم للامتحان — الفصل السادس (2 أسئلة فقط لكنها مضمونة!):",
        example: "① 8 Tool categories: Management | Static Analysis | Test Design | Execution+Coverage | Non-functional | DevOps | Collaboration | Scalability ② Benefits: saves time on repetitive work | prevents human errors | more objective assessment | faster feedback | frees testers for creative tests ③ Risks: unrealistic expectations | underestimated maintenance cost | automating when manual is better | over-reliance | vendor dependency | abandoned open-source | incompatibility | unsuitable for regulations ④ CRITICAL: simply acquiring a tool does NOT guarantee success — effort for introduction + maintenance + training is required ⑤ Manual testing will ALWAYS be needed even with high automation (especially user perspective testing)"
    },

// ==========================================================
// SEVEN TESTING PRINCIPLES (Referenced in Ch1)
// ==========================================================

    {
        cat: "ch1", catLabel: "الفصل الأول · Ch1: Fundamentals", isNew: false, isExamFocus: false,
        en: "7 Testing Principles",
        ar: "المبادئ السبعة للاختبار",
        defEN: "P1: Testing shows PRESENCE of defects, not ABSENCE. P2: Exhaustive testing is IMPOSSIBLE — use risk+priority. P3: Early testing SAVES time & money. P4: Defects CLUSTER TOGETHER (Pareto: 80% bugs in 20% modules). P5: Tests WEAR OUT (Pesticide Paradox) — update tests. P6: Testing is CONTEXT DEPENDENT — no universal approach. P7: Absence-of-defects FALLACY — bug-free ≠ useful product.",
        defAR: "م1: الاختبار يُثبت وجود العيوب لا غيابها. م2: الاختبار الشامل مستحيل — استخدم المخاطر والأولويات. م3: الاختبار المبكر يوفر الوقت والمال. م4: العيوب تتجمع (Pareto: 80% من الـ bugs في 20% من الوحدات). م5: الاختبارات تبلى (Pesticide Paradox) — حدّث اختباراتك. م6: الاختبار يعتمد على السياق. م7: وهم غياب الأخطاء — خالٍ من bugs ≠ منتج مفيد.",
        example: "م4 مثال: في تطبيق كبير، صفحة الدفع (20% من الكود) فيها 80% من الـ bugs. م5 مثال: اختبارات Regression ثابتة لسنة بدأت تفوّت bugs جديدة — المطورون 'تكيّفوا' مع الاختبارات القديمة. م7 مثال: نظام محاسبة بدون bugs تقنية لكن يحسب الضريبة بالنظام الأمريكي لعميل مصري."
    },

];

// ==========================================================
// TOOLS DATA (unchanged from original)
// ==========================================================

const toolsData = [
    {
        cat: 'management', catLabel: 'أدوات إدارة الاختبار', catIcon: '📋', catSub: 'Test Management Tools',
        name: 'Jira', logo: '🟦', accentColor: '#4fc3f7',
        tagline: 'أداة الإدارة المرنة الأشهر لتتبع العيوب والمشاريع',
        badges: ['freemium-badge:FREEMIUM', 'cloud-badge:CLOUD', 'enterprise-badge:ENTERPRISE'],
        desc: 'لو افترضنا إن تطوير البرامج زي بناء عمارة، فجيرة (Jira) هي "دفتر المهندس" اللي بيتسجل فيه كل حاجة. هي أداة إدارة مشاريع بتسمح للفرق يتابعوا كل الشغل المطلوب. كمختبر برمجيات، هتستخدم Jira عشان تسجل أي Bug بتلاقيها، وتتابعها لحد ما المطور يصلحها، وتتأكد إنها اتقفلت صح.',
        steps: ['التسجيل على Atlassian وإنشاء مشروع Scrum مجاني.', 'إنشاء Issue من نوع Bug مع عنوان واضح وخطوات الإعادة.', 'إضافة Screenshots وتحديد الأولوية والخطورة.', 'تحويل الحالة من To Do → In Progress → Done مع المطور.'],
        usecase: 'بتختبر تطبيق توصيل أكل، ولقيت إن زر "إضافة للسلة" مش بيشتغل على Android. بتفتح Jira، تعمل Bug Ticket بالتفاصيل الكاملة، تعين Priority = High. المطور يصلحها، ويردهالك تتأكد.',
        pricing: 'مجاني حتى 10 مستخدمين | من $8.15 للمستخدم',
        downloadLink: 'https://www.atlassian.com/software/jira',
        docsLink: 'https://support.atlassian.com/jira-software-cloud/docs/'
    },
    {
        cat: 'management', catLabel: 'أدوات إدارة الاختبار', catIcon: '📋', catSub: 'Test Management Tools',
        name: 'TestRail', logo: '🟩', accentColor: '#3de68a',
        tagline: 'الأداة المنظمة لإدارة Test Cases باحترافية',
        badges: ['paid-badge:PAID', 'cloud-badge:CLOUD', 'enterprise-badge:ENTERPRISE'],
        desc: 'لما يكون عندك 500 Test Case، مستحيل تحفظها في دماغك أو ملف وورد. TestRail بتخليك تنظمها في مجموعات، وتعمل Test Runs، وتتابع كل نتيجة بشكل احترافي.',
        steps: ['إنشاء مشروع وإضافة Test Suite وتنظيم الـ Cases في sections.', 'كتابة Test Cases بالخطوات والنتائج المتوقعة.', 'إنشاء Test Run وتنفيذ الاختبارات يدوياً.', 'تسجيل Pass/Fail وربط الـ Failures بـ Jira تلقائياً.'],
        usecase: 'نظام بنكي جديد: تنظم 300 Test Case في TestRail مقسمة لـ Login وTransfers وReports. تعمل Test Run لكل Sprint وتتابع نسبة النجاح اليومية.',
        pricing: 'تجريبي 14 يوم | من $36 شهرياً',
        downloadLink: 'https://www.testrail.com',
        docsLink: 'https://support.testrail.com/hc/en-us'
    },
    {
        cat: 'automation', catLabel: 'أدوات الأتمتة', catIcon: '🤖', catSub: 'Test Automation Tools',
        name: 'Selenium', logo: '🟢', accentColor: '#3de68a',
        tagline: 'الروبوت الآلي الأول عالمياً لاختبار المواقع',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'Selenium روبوت بيفتح المتصفح ويكتب ويضغط ويتحقق من النتائج أسرع منك 100 مرة. مجاني ويدعم Python وJava وJavaScript.',
        steps: ['تثبيت مكتبة Selenium بالأمر: pip install selenium.', 'تحميل WebDriver المناسب لمتصفحك.', 'كتابة سكريبت: driver.get(URL) → find_element → click/send_keys.', 'إضافة Assertions للتحقق من النتائج.'],
        usecase: 'كل صباح تشغّل سكريبت Selenium يتأكد إن صفحة Login شغالة وأن المنتجات بتظهر — بدل ما تعمله يدوياً كل يوم.',
        pricing: 'مجاني 100%',
        downloadLink: 'https://www.selenium.dev/downloads/',
        docsLink: 'https://www.selenium.dev/documentation/'
    },
    {
        cat: 'automation', catLabel: 'أدوات الأتمتة', catIcon: '🤖', catSub: 'Test Automation Tools',
        name: 'Playwright', logo: '🎭', accentColor: '#3de68a',
        tagline: 'المنافس الأقوى لـ Selenium من Microsoft',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'Playwright من Microsoft أسرع من Selenium وأذكى — بيعمل Auto-wait، يدعم Chrome وSafari وFirefox بنفس الكود، ويصوّر كل خطوة تلقائياً.',
        steps: ['npm init playwright@latest — يثبت كل حاجة تلقائياً.', 'استخدام Codegen لتسجيل حركاتك وتحويلها لكود.', 'كتابة tests بـ JavaScript أو Python.', 'تشغيل على كل المتصفحات في نفس الوقت.'],
        usecase: 'موقعك يجب يشتغل على iPhone وWindows وMac. Playwright يكتب Test واحد ويشغّله على محاكيات الثلاثة في نفس الوقت.',
        pricing: 'مجاني ومفتوح المصدر',
        downloadLink: 'https://playwright.dev/',
        docsLink: 'https://playwright.dev/docs/intro'
    },
    {
        cat: 'api', catLabel: 'أدوات اختبار الـ API', catIcon: '🔗', catSub: 'API Testing Tools',
        name: 'Postman', logo: '📮', accentColor: '#ff9f43',
        tagline: 'الأداة الأولى عالمياً لاختبار APIs',
        badges: ['freemium-badge:FREEMIUM', 'cloud-badge:CLOUD'],
        desc: 'Postman بيخليك تتكلم مع الـ API مباشرة بدون واجهة المستخدم. مثالي لاختبار الـ Backend قبل ما الـ Frontend يتجهز.',
        steps: ['تحميل Postman وإنشاء حساب مجاني.', 'إنشاء Request جديد وتحديد Method (GET/POST/PUT/DELETE).', 'إضافة Headers وBody وAuth tokens.', 'الضغط Send وتحليل الـ Response (Status Code + Body).'],
        usecase: 'المطور قالك "خلصت API جلب المنتجات". بدل ما تستنى الـ Frontend تجربه بـ Postman فوراً — ترسل GET request وتتأكد من البيانات.',
        pricing: 'مجاني للاستخدام الفردي | من $14 للـ Teams',
        downloadLink: 'https://www.postman.com/downloads/',
        docsLink: 'https://learning.postman.com/docs/'
    },
    {
        cat: 'performance', catLabel: 'أدوات اختبار الأداء', catIcon: '⚡', catSub: 'Performance Testing Tools',
        name: 'Apache JMeter', logo: '🌡', accentColor: '#ff5f7e',
        tagline: 'بطل اختبار الأداء والضغط على السيرفرات',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'JMeter بيحاكي آلاف المستخدمين في نفس الوقت لاختبار قدرة السيرفر على التحمل — قبل ما البلاك فرايداي يجي!',
        steps: ['تحميل JMeter (يحتاج Java) وفتح واجهته.', 'إنشاء Thread Group وتحديد عدد المستخدمين والـ Ramp-up time.', 'إضافة HTTP Request بالـ URL المطلوب.', 'إضافة Listeners لعرض الرسوم البيانية والإحصائيات.'],
        usecase: 'قبل Black Friday: JMeter يرسل 50,000 طلب في نفس الدقيقة. لو الموقع وقع في الاختبار — نصلحه قبل اليوم الحقيقي.',
        pricing: 'مجاني تماماً',
        downloadLink: 'https://jmeter.apache.org/download_jmeter.cgi',
        docsLink: 'https://jmeter.apache.org/usermanual/index.html'
    },
    {
        cat: 'security', catLabel: 'أدوات الأمان', catIcon: '🔒', catSub: 'Security Testing Tools',
        name: 'OWASP ZAP', logo: '⚡', accentColor: '#a855f7',
        tagline: 'الأداة الأشهر لاكتشاف الثغرات الأمنية',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'OWASP ZAP هو "الهاكر الأخلاقي الآلي" — يفحص موقعك ويجد الثغرات قبل ما الهاكرز الحقيقيين يجدوها.',
        steps: ['تحميل ZAP وفتح Automated Scan.', 'إدخال URL الموقع والضغط على Attack.', 'مراجعة الـ Alerts المُنتَجة (Red = Critical, Orange = Medium).', 'تقديم التقرير للمطورين لإصلاح الثغرات.'],
        usecase: 'موقع طبي به بيانات مرضى حساسة. قبل الإطلاق: ZAP يكتشف ثغرة SQL Injection في صفحة البحث — تُصلح قبل ما أي هاكر يستغلها.',
        pricing: 'مجاني تماماً',
        downloadLink: 'https://www.zaproxy.org/download/',
        docsLink: 'https://www.zaproxy.org/docs/'
    },
    {
        cat: 'static', catLabel: 'التحليل الساكن', catIcon: '🔍', catSub: 'Static Analysis Tools',
        name: 'SonarQube', logo: '🌊', accentColor: '#f9ca24',
        tagline: 'مراقب جودة الكود ونظافته (Clean Code)',
        badges: ['freemium-badge:FREEMIUM', 'enterprise-badge:ENTERPRISE'],
        desc: 'SonarQube يقرأ كودك ويخبرك: "هنا كود مكرر"، "هنا ثغرة أمنية محتملة"، "هنا تعقيد زائد". كل ده بدون تشغيل البرنامج.',
        steps: ['ربط SonarQube بـ GitHub أو GitLab.', 'مع كل Commit، سونار يفحص الأسطر الجديدة تلقائياً.', 'مراجعة Dashboard: أخضر = كود نظيف، أحمر = مشاكل.', 'تحديد Quality Gates لمنع الكود السيء من الدمج.'],
        usecase: 'فريق برمجي عنده 200,000 سطر كود وبدأ يعاني من بطء. SonarQube كشف إن 25% من الكود مكرر وفيه 15 ثغرة أمنية خفية.',
        pricing: 'مجاني للمشاريع Open Source | مدفوع للشركات',
        downloadLink: 'https://www.sonarqube.org/downloads/',
        docsLink: 'https://docs.sonarqube.org/'
    },
    {
        cat: 'mobile', catLabel: 'أدوات الموبايل', catIcon: '📱', catSub: 'Mobile Testing Tools',
        name: 'Appium', logo: '🔮', accentColor: '#7c6fff',
        tagline: 'الأداة رقم 1 لأتمتة تطبيقات الموبايل',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'Appium يفعل لتطبيقات الموبايل ما يفعله Selenium للمواقع — يتحكم في Android وiOS بنفس الكود.',
        steps: ['تثبيت Appium Server وAndroid SDK أو Xcode.', 'توصيل موبايل حقيقي أو فتح Emulator.', 'تعريف العناصر بـ Appium Inspector.', 'كتابة سكريبت بـ Python أو Java لأتمتة الخطوات.'],
        usecase: 'تطبيق بنك على Android وiOS: Appium يختبر عملية "تحويل الأموال" على 10 أجهزة مختلفة في نفس الوقت.',
        pricing: 'مجاني ومفتوح المصدر',
        downloadLink: 'https://appium.io/',
        docsLink: 'http://appium.io/docs/en/about-appium/intro/'
    },
    {
        cat: 'reporting', catLabel: 'التقارير', catIcon: '📊', catSub: 'Test Reporting Tools',
        name: 'Allure Report', logo: '🌈', accentColor: '#f472b6',
        tagline: 'أجمل تقارير اختبار بصرية في العالم',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'Allure يحوّل نتائج الاختبارات من نصوص مملة إلى تقارير تفاعلية بالألوان والرسوم البيانية والصور.',
        steps: ['ربط Allure كـ Plugin لأداة الأتمتة.', 'تشغيل الاختبارات — Allure يسجل كل خطوة تلقائياً.', 'تشغيل allure serve لعرض التقرير التفاعلي.', 'مشاركة اللينك مع الفريق والإدارة.'],
        usecase: 'مديرك يسأل عن نتائج الأسبوع. بدل ملف Excel مملة، تبعته Allure Report: رسم بياني، نسب نجاح/فشل، screenshots لكل Bug.',
        pricing: 'مجاني بالكامل',
        downloadLink: 'https://github.com/allure-framework/allure2/releases',
        docsLink: 'https://docs.qameta.io/allure/'
    },
];

const quizData = [...glossaryData];
