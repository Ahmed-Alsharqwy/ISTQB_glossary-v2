const glossaryData = [
    // ===== 1. BASIC CONCEPTS =====
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Software Testing", ar: "اختبار البرمجيات",
        defEN: "The process of evaluating software to find defects and verify it meets requirements.",
        defAR: "عملية نتأكد فيها أن البرنامج يعمل صح وبيحقق ما طلبه العميل — وأنه خالٍ من المشاكل.",
        example: "تخيّل إنك اشتريت تليفون جديد. قبل ما يوصلك، المصنع يجرّب كل حاجة فيه: الكاميرا، البطارية، الشاشة، الإنترنت. لو لقوا عطل صلحوه قبلك. ده بالظبط اختبار البرمجيات — بس على التطبيقات."
    },
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Error (Human Mistake)", ar: "خطأ بشري",
        defEN: "A mistake made by a person (developer, analyst) that introduces a problem into the software.",
        defAR: "الخطأ اللي بيعمله الإنسان وهو بيكتب الكود أو بيحلل المتطلبات.",
        example: "تخيّل طباخ كتب في الوصفة 'ملعقة ملح' بدل 'ملعقة صغيرة'. الخطأ ده بشري. في البرمجيات: مطور كتب > بدل >= في شرط السن، فالشخص عمره 18 بيتحوّل ياخده كـ 17 ويتحرم من الخدمة."
    },
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Defect (Bug / Fault)", ar: "عيب / خلل في الكود",
        defEN: "A flaw in the software code or design that was caused by a human error.",
        defAR: "الخطأ البشري بعد ما يتسجّل في الكود يبقى عيب — زي علبة كولا مسدودة في خط الإنتاج لما محدش فتحها بعد.",
        example: "تخيّل مطعم بيقبل أوردرات أون لاين. لو الكود مكتوب غلط وبيحسب الديليفري بالسعر القديم، ده defect. الخطأ ده موجود في الكود حتى لو ما اكتشفهوش المستخدمين لسه."
    },
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Failure", ar: "الفشل / الانهيار",
        defEN: "The visible, observable wrong behavior when the software runs — when the defect causes a real problem.",
        defAR: "لما العيب الموجود في الكود يظهر فعلياً ويأثر على المستخدم — اللحظة اللي حاجة فعلاً بتتعطل.",
        example: "عميل بيكمّل عملية دفع على موقع تسوّق، وفجأة الصفحة بتفضل تلف وما تكملش. ده failure — العيب اللي كان موجود في الكود ظهر فعلاً وأثّر على العميل الحقيقي."
    },
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Test Case", ar: "حالة الاختبار",
        defEN: "A documented set of steps and expected results to verify one specific behavior of the software.",
        defAR: "خطة مكتوبة تقول: 'افعل كذا، أدخل كذا، النتيجة المتوقعة كذا' — زي وصفة طبخ خاصة بالاختبار.",
        example: "تخيّل إنك بتاخد امتحان قيادة. الممتحن عنده ورقة مكتوب فيها: 'اطلب المتقدم يلف يمين عند الإشارة الحمراء — النتيجة المتوقعة: يوقف عند الأحمر ويلف يمين بعد ما يخضر'. ده بالظبط Test Case."
    },
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Test Condition", ar: "شرط / بند الاختبار",
        defEN: "A specific aspect or behavior of the software that needs to be verified by testing.",
        defAR: "الحاجة اللي عايزين نتأكد منها — كل سؤال بيخطر في ذهنك عن النظام هو test condition.",
        example: "في تطبيق بنك: 'هل يقدر المستخدم يحوّل أكتر من رصيده؟' — ده test condition. كل حاجة ممكن تتأكد منها تُعدّ شرطاً للاختبار."
    },
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Test Basis", ar: "أساس / مصدر الاختبار",
        defEN: "Any document we use to understand what to test (requirements, designs, user stories, etc.).",
        defAR: "المصادر اللي منها بنعرف إيه اللي المفروض يتعمل — وبالتالي بنبني الاختبارات منها.",
        example: "لو إيكيا أعطتك كتالوج الإمباكت لتركيب خزانة، ده هو أساسك. في البرمجيات: وثيقة المتطلبات، صفحة wire frame، أو user story — كلها أساس نبني منها الاختبارات."
    },
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Test Oracle", ar: "مرجع النتيجة الصحيحة",
        defEN: "The source that tells us what the correct result should be, so we can compare it with the actual system output.",
        defAR: "المرجع اللي بيقولنا إيه الإجابة الصح — عشان نعرف هل النظام جاوب صح ولا غلط.",
        example: "لما تعمل حساب على الآلة الحاسبة 25 × 4، والنتيجة من دماغك 100 — دماغك هو oracle. في البرمجيات: لو النظام حسب فاتورة وعايزين نتأكد، بنحسب يدوياً أو من قاعدة البيانات ونقارن."
    },
    {
        cat: "basic", catLabel: "المفاهيم الأساسية · Basic Concepts", isNew: false,
        en: "Verification vs Validation", ar: "التحقق والتصديق",
        defEN: "Verification = 'Are we building the product right?' | Validation = 'Are we building the right product?'",
        defAR: "التحقق = هل بنبني الحاجة صح؟ | التصديق = هل بنبني الحاجة الصح أصلاً؟",
        example: "تخيّل إنت بتبني كوبري. Verification: هل الحديد المستخدم بالمواصفات الصح؟ Validation: هل الكوبري ده في المكان الصح ويخدم الناس اللي محتاجاه؟ ممكن تبني الكوبري صح تماماً بس في المكان الغلط!"
    },

    // ===== 2. TESTING PRINCIPLES =====
    {
        cat: "principles", catLabel: "مبادئ الاختبار السبعة · 7 Testing Principles", isNew: true,
        en: "Testing Shows Presence of Defects", ar: "الاختبار يُثبت وجود عيوب — لا غيابها",
        defEN: "Testing can prove defects exist, but CANNOT prove the software is 100% defect-free.",
        defAR: "الاختبار يقدر يثبت إن في مشاكل، لكن لو ما لقيناش مشكلة ما يعنيش إن البرنامج خالي من المشاكل تماماً.",
        example: "لو فحصت 1000 تلاجة في المصنع ومالقيتش عطل — مش معناه إن كل تلاجات في العالم كاملة. ممكن في عطل نادر ما لاقيتوش. نفس الفكرة في البرمجيات."
    },
    {
        cat: "principles", catLabel: "مبادئ الاختبار السبعة · 7 Testing Principles", isNew: true,
        en: "Exhaustive Testing is Impossible", ar: "الاختبار الشامل مستحيل",
        defEN: "You cannot test every single combination of inputs — it's practically infinite. Focus on risk and priorities.",
        defAR: "مش ممكن تختبر كل تركيبة ممكنة من المدخلات — العدد بيكون خيالي. لازم تركّز على الأهم والأخطر.",
        example: "لو عندك خانة نص تقبل 10 حروف، الاحتمالات ملايين. بدل ما تجرّب كل حاجة (مستحيل)، تركّز على أهم الحالات: نص فاضي، نص بحروف خاصة، نص بالحد الأقصى."
    },
    {
        cat: "principles", catLabel: "مبادئ الاختبار السبعة · 7 Testing Principles", isNew: true,
        en: "Early Testing Saves Time & Money", ar: "الاختبار المبكر يوفّر الوقت والمال",
        defEN: "Finding defects early in development is much cheaper than finding them after release.",
        defAR: "كل ما اكتشفنا العيب بدري أرخص. العيب في مرحلة التحليل يكلف دولار، في الإنتاج يكلف 100 دولار.",
        example: "تخيّل بنيت مبنى وبعد ما خلصت اكتشفت إن القواعد غلط. التصليح هيكلّفك أكتر من بناء المبنى من أول. نفس الفكرة في البرنامج: لو في خطأ في تصميم قاعدة البيانات وما اتعمشملوش إلا في آخر لحظة — كارثة."
    },
    {
        cat: "principles", catLabel: "مبادئ الاختبار السبعة · 7 Testing Principles", isNew: true,
        en: "Defect Clustering", ar: "تجمّع العيوب",
        defEN: "Most defects tend to be concentrated in a small number of modules or features.",
        defAR: "العيوب مش بتتوزع بالتساوي — 80% من المشاكل بتكون في 20% من الكود.",
        example: "في أي متجر، زوايا معينة دايماً فيها أكتر حوادث سقوط. في التطبيقات: عادةً الـ payment module أو الـ authentication بيكون فيه أكتر bugs. ركّز اختباراتك هناك."
    },
    {
        cat: "principles", catLabel: "مبادئ الاختبار السبعة · 7 Testing Principles", isNew: true,
        en: "Pesticide Paradox", ar: "مفارقة المبيد الحشري",
        defEN: "Running the same tests repeatedly will stop finding new bugs. You must keep updating your tests.",
        defAR: "لو اختبرت بنفس الاختبارات كل مرة، الحشرات (الـ bugs) هتتعوّد عليها وما هيتاخدش. لازم تجدد.",
        example: "الحشرات بتتطوّر وتتمنّع ضد مبيد اتستخدم كتير. نفس الفكرة: لو عندك اختبار بيتعمل من سنة وما بيلقيش bugs جديدة — مش معناه إن كل حاجة تمام، يمكن الاختبار بقى قديم ومحتاج تحديث."
    },
    {
        cat: "principles", catLabel: "مبادئ الاختبار السبعة · 7 Testing Principles", isNew: true,
        en: "Testing is Context-Dependent", ar: "الاختبار يعتمد على السياق",
        defEN: "Testing strategies differ based on the type and risk of the software being built.",
        defAR: "مش في طريقة اختبار واحدة تصلح لكل شيء — اختبار موقع إخباري مختلف عن اختبار نظام مستشفى.",
        example: "كيفية اختبار تطبيق لعبة على التليفون مختلف تماماً عن اختبار نظام طائرة. في الطائرة، عيب واحد = كارثة. في اللعبة، بعض العيوب مقبولة. السياق هو اللي بيحدد مقدار الاختبار."
    },
    {
        cat: "principles", catLabel: "مبادئ الاختبار السبعة · 7 Testing Principles", isNew: true,
        en: "Absence of Errors Fallacy", ar: "وهم غياب الأخطاء",
        defEN: "Even if the software has no bugs, it could still be useless if it doesn't meet user needs.",
        defAR: "حتى لو البرنامج خالي 100% من الأخطاء التقنية، ممكن يكون عديم الفائدة لو ما يحقق احتياجات المستخدم.",
        example: "شركة صنعت سيارة بدون أي عطل تقني — لكن بدون مقاعد خلفية! السيارة 'شغّالة' تقنياً بس عديمة الفائدة. نفس الفكرة: برنامج محاسبة ما بيحسبش الضريبة الصح من حيث احتياجات المستخدم."
    },

    // ===== 3. TEST ACTIVITIES =====
    {
        cat: "activities", catLabel: "أنشطة الاختبار · Test Activities", isNew: false,
        en: "Test Planning", ar: "تخطيط الاختبار",
        defEN: "Creating a document that defines what will be tested, how, by whom, when, and with what resources.",
        defAR: "وضع خطة عمل شاملة قبل ما يبدأ أي اختبار — زي ما المعلّم بيحضّر الخطة الدراسية في بداية الترم.",
        example: "تخيّل هتنظم حفل زفاف. قبل أي حاجة: بتحدد الضيوف (الـ scope)، الميزانية (الموارد)، التوقيت (الجدول)، ومن مسؤول عن إيه (الأدوار). الـ Test Plan هو نفس الفكرة: من يختبر إيه، إمتى، وبأي طريقة."
    },
    {
        cat: "activities", catLabel: "أنشطة الاختبار · Test Activities", isNew: false,
        en: "Test Analysis", ar: "تحليل الاختبار",
        defEN: "Reading the requirements and asking 'What do we need to verify?' to extract testable conditions.",
        defAR: "قراءة المتطلبات وتحليلها لاستخراج كل الحالات الممكنة التي يجب اختبارها.",
        example: "المتطلب بيقول: 'المستخدم يقدر يغيّر رقم موبايله'. المحلّل يفكر: ماذا لو الرقم الجديد مسجّل بحساب تاني؟ ماذا لو فيه أحرف؟ ماذا لو قصير جداً؟ ده التحليل — استخراج كل الأسئلة الممكنة."
    },
    {
        cat: "activities", catLabel: "أنشطة الاختبار · Test Activities", isNew: false,
        en: "Test Design", ar: "تصميم حالات الاختبار",
        defEN: "Converting the test conditions into actual test cases with specific inputs and expected results.",
        defAR: "تحويل الأسئلة اللي استخرجناها من التحليل إلى خطوات محددة نعملها فعلياً للاختبار.",
        example: "بعد ما سألنا 'ماذا لو الرقم موجود بحساب تاني؟' — دلوقتي نكتب Test Case: 'ادخل 01099123456 وهو رقم مسجّل بيزيد آخر، اضغط حفظ، النتيجة المتوقعة: رسالة تقول الرقم مستخدم مسبقاً'."
    },
    {
        cat: "activities", catLabel: "أنشطة الاختبار · Test Activities", isNew: false,
        en: "Test Implementation", ar: "تجهيز بيئة الاختبار",
        defEN: "Preparing everything needed before running tests: environment, test data, test accounts, tools.",
        defAR: "تجهيز كل شيء قبل ما يبدأ الاختبار الفعلي — البيانات، الحسابات التجريبية، البيئة.",
        example: "زي الطبيب قبل العملية يجهّز غرفة العمليات، الأدوات، والتخدير قبل ما يدخل المريض. في الاختبار: ننشئ حسابات تجريبية، نحط أرصدة وهمية في قاعدة البيانات، ونأكد إن الـ test environment شغّالة."
    },
    {
        cat: "activities", catLabel: "أنشطة الاختبار · Test Activities", isNew: false,
        en: "Test Execution", ar: "تنفيذ الاختبار",
        defEN: "Actually running the test cases and recording whether they pass or fail.",
        defAR: "تنفيذ الاختبارات الفعلية وتسجيل النتيجة — الخطوة الوحيدة اللي بنتعامل فيها مع البرنامج مباشرةً.",
        example: "ده زي لما تجرّب طبخة جديدة لأول مرة. كل خطوة في الوصفة بتنفّذها وبتلاحظ النتيجة. في الاختبار: بندخل بيانات حقيقية ونشوف إيه اللي بيحصل فعلاً مقابل إيه اللي المفروض يحصل."
    },
    {
        cat: "activities", catLabel: "أنشطة الاختبار · Test Activities", isNew: false,
        en: "Test Monitoring & Control", ar: "متابعة الاختبار والتحكم فيه",
        defEN: "Tracking how testing is progressing and making adjustments if things go off-track.",
        defAR: "المتابعة المستمرة لتقدم الاختبار واتخاذ قرارات تصحيحية عند الحاجة.",
        example: "زي مدير مشروع بيتابع على dashboard: كم بيت اتبنى؟ كم باقي؟ في تأخير؟ في الاختبار: نعرف كم test case اتنفذ، كم passed وكم failed، وهل هنخلص في الوقت المحدد."
    },
    {
        cat: "activities", catLabel: "أنشطة الاختبار · Test Activities", isNew: false,
        en: "Test Completion", ar: "إنهاء الاختبار وإغلاقه",
        defEN: "Finalizing all testing work, writing the final summary report, and archiving everything.",
        defAR: "إنهاء كل أنشطة الاختبار رسمياً وإعداد التقرير النهائي وحفظ كل الوثائق.",
        example: "زي ما الطبيب بعد العملية يكتب تقرير: 'العملية نجحت، المريض مستقر، اتخذنا هذه الإجراءات'. Test Summary Report: كم bug اكتشفنا، كم اتصلح، كم مقبول للإطلاق، ما هي المخاطر المتبقية."
    },

    // ===== 4. TEST LEVELS =====
    {
        cat: "levels", catLabel: "مستويات الاختبار · Test Levels", isNew: false,
        en: "Component / Unit Testing", ar: "اختبار الوحدة / المكوّن",
        defEN: "Testing the smallest individual piece of code in complete isolation from everything else.",
        defAR: "اختبار أصغر وحدة في الكود بمعزل تام عن باقي الأجزاء.",
        example: "تخيّل مصنع سيارات. قبل تركيب المحرك في العربية، المهندسون يفحصون كل مسمار وكل ترس لوحده. في البرمجيات: اختبار دالة calculateDiscount() لوحدها — أعطيها أرقام وأتحقق من النتيجة قبل ربطها بأي شيء آخر."
    },
    {
        cat: "levels", catLabel: "مستويات الاختبار · Test Levels", isNew: false,
        en: "Integration Testing", ar: "اختبار التكامل",
        defEN: "Testing how different components or systems work together when connected.",
        defAR: "اختبار إن الأجزاء المختلفة بتتكلم مع بعض صح لما تتربط ببعض.",
        example: "محرك السيارة شغّال لوحده، الجير شغّال لوحده — لكن لما وصلناهم مع بعض هل الجير بيتحرك؟ في البرمجيات: Front-end يبعت طلب للـ Back-end، هل البيانات بتوصل صح وبالشكل المطلوب؟"
    },
    {
        cat: "levels", catLabel: "مستويات الاختبار · Test Levels", isNew: false,
        en: "System Testing", ar: "اختبار النظام",
        defEN: "Testing the complete, integrated system as a whole against the full requirements.",
        defAR: "اختبار النظام بالكامل كأنك مستخدم حقيقي — من أول خطوة لآخر خطوة.",
        example: "السيارة اتركّبت كلها — دلوقتي نعمل test drive حقيقي على الطريق. في البرمجيات: مستخدم يفتح الموقع، يتسجّل، يضيف منتج للسلة، يدفع، يستلم إيميل التأكيد — الرحلة كلها من أولها لآخرها."
    },
    {
        cat: "levels", catLabel: "مستويات الاختبار · Test Levels", isNew: false,
        en: "Acceptance Testing (UAT)", ar: "اختبار القبول",
        defEN: "The final check where the actual users or clients test the system to decide if they accept it.",
        defAR: "المرحلة الأخيرة اللي فيها العميل نفسه يجرّب النظام ويقرر يقبله ولا يرفضه.",
        example: "قبل ما تشتري شقة، بتعمل معاينة أخيرة — بتفتح النور، الماية، التكييف، كل حاجة. لو كل حاجة تمام توقّع العقد. UAT هو نفس الفكرة: العميل يجرب النظام بنفسه قبل الاستلام الرسمي."
    },
    {
        cat: "levels", catLabel: "مستويات الاختبار · Test Levels", isNew: true,
        en: "Alpha Testing", ar: "اختبار ألفا",
        defEN: "Testing done by internal teams at the developer's location, simulating real user behavior before public release.",
        defAR: "اختبار داخلي بيعمله فريق الشركة نفسها قبل ما المنتج يوصل لأي حد من برّا.",
        example: "مطعم جديد قبل افتتاحه، بيدعو موظفيه وأصحابهم يجرّبوا الأكل ويديّوه feedback. لو في مشكلة في الطعم أو الخدمة بيصلحوها قبل الافتتاح الرسمي. في البرمجيات: فريق الشركة يستخدم التطبيق كأنهم مستخدمين عاديين."
    },
    {
        cat: "levels", catLabel: "مستويات الاختبار · Test Levels", isNew: true,
        en: "Beta Testing", ar: "اختبار بيتا",
        defEN: "Testing by real external users in real conditions, before the final official release.",
        defAR: "اختبار بيعمله مستخدمين حقيقيين من برّا الشركة في بيئتهم الحقيقية.",
        example: "تطبيق جديد بيطلعوا نسخة 'Beta' لعدد محدود من المستخدمين — هم بيستخدموه في حياتهم الطبيعية ويبعتوا تقارير عن المشاكل. يوتيوب وجوجل بيعملوا كده دايماً قبل أي تحديث كبير."
    },

    // ===== 5. TEST TYPES =====
    {
        cat: "types", catLabel: "أنواع الاختبار · Test Types", isNew: false,
        en: "Functional Testing", ar: "الاختبار الوظيفي",
        defEN: "Testing that the software does what it's supposed to do — checking the features work correctly.",
        defAR: "اختبار إن كل وظيفة وكل زر وكل feature بيشتغل زي ما المفروض.",
        example: "زر 'نسيت كلمة المرور' — نضغطه، المفروض يجيلنا إيميل. لو جه = نجح. لو ما جاش أو جه الإيميل لبريد تاني = فشل. ده functional testing: بنتحقق إن الوظيفة نفسها بتشتغل."
    },
    {
        cat: "types", catLabel: "أنواع الاختبار · Test Types", isNew: false,
        en: "Non-Functional Testing", ar: "الاختبار غير الوظيفي",
        defEN: "Testing HOW WELL the software works — not if it works, but the quality of how it works.",
        defAR: "مش هل الوظيفة بتشتغل، لكن بأي جودة بتشتغل — السرعة، الأمان، السهولة، الاستقرار.",
        example: "الزر شغّال (functional ✓) — لكن بياخد 30 ثانية يستجيب (performance ✗). أو شغّال بس لما تضغطه من تليفون صغير الكلمات بتتداخل (usability ✗). ده non-functional testing: جودة التجربة."
    },
    {
        cat: "types", catLabel: "أنواع الاختبار · Test Types", isNew: false,
        en: "Performance Testing", ar: "اختبار الأداء",
        defEN: "Testing how fast and stable the system is under normal and heavy load conditions.",
        defAR: "اختبار سرعة النظام واستقراره تحت الضغط — هل يتحمّل كتير من الناس في نفس الوقت؟",
        example: "متجر إلكتروني قبل Black Friday: المهندسون يحاكوا 50,000 شخص بيفتحوا الموقع في نفس اللحظة. هل الموقع هيستجيب في ثانيتين أو هيسقط؟ لو سقط في الاختبار نصلحه قبل اليوم الفعلي."
    },
    {
        cat: "types", catLabel: "أنواع الاختبار · Test Types", isNew: false,
        en: "Security Testing", ar: "اختبار الأمان",
        defEN: "Testing whether the system can be hacked, penetrated, or misused by attackers.",
        defAR: "اختبار قدرة النظام على مقاومة الهجمات وحماية بيانات المستخدمين.",
        example: "بنك يستأجر 'لص محترف' يحاول يسرق — وده من المصلحة! لو اللص (مختبر أمني) وجد ثغرة، الشركة تصلحها قبل اللصوص الحقيقيين. في التطبيقات: محاولة تسجيل الدخول كمستخدم تاني، أو سرقة بيانات من قاعدة البيانات."
    },
    {
        cat: "types", catLabel: "أنواع الاختبار · Test Types", isNew: false,
        en: "Usability Testing", ar: "اختبار سهولة الاستخدام",
        defEN: "Testing how easy and intuitive the software is for real users who have never seen it before.",
        defAR: "اختبار إن الشخص العادي يقدر يستخدم التطبيق بسهولة من غير ما يحتاج تدريب أو تعليمات.",
        example: "اكيا بتطلب من ناس عاديين يركّبوا كنبة بدون الكتالوج — لو ناس كتير ضاعوا، مشكلة في التصميم مش في الناس. في التطبيقات: نطلب من جدة عمرها 60 تفتح حساب جديد وحدها، ونشوف وين هتقف."
    },
    {
        cat: "types", catLabel: "أنواع الاختبار · Test Types", isNew: false,
        en: "Reliability Testing", ar: "اختبار الموثوقية",
        defEN: "Testing how stable and consistent the system is over an extended period of continuous use.",
        defAR: "اختبار إن النظام يشتغل بثبات لفترة طويلة بدون ما يتعطّل أو يتصرف بشكل غريب.",
        example: "مولّد كهرباء في المستشفى لازم يشتغل 24/7/365 بدون انقطاع. في البرمجيات: بنشغّل سيرفر لأسبوع كامل بشكل متواصل ونراقب هل يواصل أداءه أم يبدأ يبطّأ أو يتعلق بعد ساعات."
    },
    {
        cat: "types", catLabel: "أنواع الاختبار · Test Types", isNew: true,
        en: "Accessibility Testing", ar: "اختبار إمكانية الوصول",
        defEN: "Testing that people with disabilities (visual, hearing, motor) can also use the software.",
        defAR: "اختبار إن الأشخاص ذوي الاحتياجات الخاصة يقدروا يستخدموا التطبيق بنفس الكفاءة.",
        example: "شخص ضعيف البصر يستخدم برنامج قراءة شاشة — هل التطبيق يقرأ الأزرار بصوت عالي صح؟ هل الألوان كافية للتمييز؟ شركات زي Apple وGoogle بتنفق ملايين على ده لأنه حق إنساني."
    },
    {
        cat: "types", catLabel: "أنواع الاختبار · Test Types", isNew: true,
        en: "Compatibility Testing", ar: "اختبار التوافق",
        defEN: "Testing that the software works correctly across different devices, browsers, and operating systems.",
        defAR: "اختبار إن التطبيق يشتغل صح على كل الأجهزة والمتصفحات وأنظمة التشغيل المختلفة.",
        example: "موقع تصميمه تمام على Chrome — بتفتحه على Safari ينهار الموقع. أو على تليفون صغير الأزرار بتتداخل. Compatibility testing بيضمن التطبيق يشتغل صح على iPhone وAndroid وWindows وMac."
    },

    // ===== 6. BLACK & WHITE BOX =====
    {
        cat: "boxes", catLabel: "الصندوق الأسود والأبيض · Black & White Box", isNew: false,
        en: "Black-Box Testing", ar: "اختبار الصندوق الأسود",
        defEN: "Testing without knowing the internal code — you only see what goes in and what comes out.",
        defAR: "اختبار من منظور المستخدم العادي — بندخل بيانات ونشوف النتيجة، بدون أي معرفة بالكود.",
        example: "تخيّل إنك بتختبر ماكينة قهوة. بتحط الكبسولة وتضغط الزر وتشوف لو طلع قهوة صح. مش محتاج تعرف الميكانيزم الداخلي. في البرمجيات: بتدخل بيانات وتشوف النتيجة — بدون ما تفتح الكود."
    },
    {
        cat: "boxes", catLabel: "الصندوق الأسود والأبيض · Black & White Box", isNew: false,
        en: "White-Box Testing", ar: "اختبار الصندوق الأبيض",
        defEN: "Testing with full knowledge of the internal code — verifying every path and branch executes correctly.",
        defAR: "اختبار مع معرفة كاملة بالكود الداخلي — بنتأكد إن كل مسار في الكود اتنفذ وشتغل صح.",
        example: "مهندس بيفحص محرك السيارة من الداخل — بيشيل الغطا ويفحص كل خط ومسار. في البرمجيات: المطور بيشوف الكود نفسه ويتأكد إن كل if-else وكل حلقة اتنفذت على الأقل مرة."
    },
    {
        cat: "boxes", catLabel: "الصندوق الأسود والأبيض · Black & White Box", isNew: true,
        en: "Grey-Box Testing", ar: "اختبار الصندوق الرمادي",
        defEN: "A combination of both: partial knowledge of the internal code while testing from a user perspective.",
        defAR: "خليط بين الاثنين — عندك معرفة جزئية بالكود وبتختبر من منظور المستخدم في نفس الوقت.",
        example: "مراقب ضرائب بيعرف بعض قواعد المحاسبة (مش خبير) ويراجع الأرقام من خارج. في البرمجيات: المختبر يعرف هيكل قاعدة البيانات (لكن مش الكود) وبيختبر من الواجهة — يعرف يتحقق من قاعدة البيانات مباشرةً."
    },

    // ===== 7. CONFIRMATION & REGRESSION =====
    {
        cat: "regression", catLabel: "Confirmation & Regression Testing", isNew: false,
        en: "Confirmation Testing (Re-Testing)", ar: "اختبار التأكيد",
        defEN: "Running the same failed test again after the developer fixes the reported bug, to confirm it's truly fixed.",
        defAR: "نعيد نفس الاختبار اللي فشل بالضبط بعد الإصلاح — للتأكد إن المشكلة اتحلت فعلاً.",
        example: "بلّغت صاحب الشقة إن صنبور المطبخ بيسرّب. اصلحه. رحت وفتحت الصنبور نفسه في نفس المطبخ — ده confirmation testing. نتأكد إن نفس المشكلة المحددة اتحلت، مش أي حاجة تانية."
    },
    {
        cat: "regression", catLabel: "Confirmation & Regression Testing", isNew: false,
        en: "Regression Testing", ar: "اختبار الانحدار",
        defEN: "After any change, re-testing other areas to make sure the change didn't accidentally break something else.",
        defAR: "بعد أي تعديل، بنختبر الأجزاء التانية للتأكد إن التعديل ما أثّرش على حاجات كانت شغّالة.",
        example: "دكتور غيّر دواء ضغط المريض — لازم يتابع تأثير ده على الكلى والقلب والسكر. في البرمجيات: غيّرنا طريقة حساب الشحن — لازم نعيد اختبار صفحات الدفع، السلة، الفاتورة، كلها — لأن التغيير قد يكون أثّر عليهم."
    },

    // ===== 8. STATIC TESTING =====
    {
        cat: "static", catLabel: "الاختبار الساكن · Static Testing", isNew: false,
        en: "Static Testing", ar: "الاختبار الساكن",
        defEN: "Finding problems WITHOUT running the software — by reading and reviewing documents and code.",
        defAR: "اكتشاف المشاكل بالقراءة والمراجعة بدون تشغيل البرنامج أصلاً.",
        example: "محامي بيراجع عقد قبل توقيعه — بيلاقي أخطاء أو ثغرات بدون ما ينفّذ العقد. في البرمجيات: مراجعة وثيقة المتطلبات لاكتشاف تناقضات أو نقاط غامضة قبل كتابة أي كود."
    },
    {
        cat: "static", catLabel: "الاختبار الساكن · Static Testing", isNew: false,
        en: "Review", ar: "المراجعة",
        defEN: "One or more people manually read and examine a document or code looking for issues.",
        defAR: "شخص أو أكثر بيقرأ ويفحص وثيقة أو كود يدوياً لإيجاد مشاكل.",
        example: "قبل طباعة كتاب، مراجع لغوي بيقرأه ويصحح الأخطاء النحوية. في البرمجيات: مطور تاني بيقرأ كودك قبل merge — Code Review على GitHub هو مثال يومي على ده."
    },
    {
        cat: "static", catLabel: "الاختبار الساكن · Static Testing", isNew: false,
        en: "Walkthrough", ar: "الجولة التفسيرية",
        defEN: "The author presents their work to peers who can ask questions and give feedback — informal review.",
        defAR: "صاحب الوثيقة أو الكود يشرحه للفريق وهم يسألوا ويعطوا ملاحظات — مراجعة غير رسمية.",
        example: "مهندس معماري بيعرض تصميم مبنى على الفريق ويشرح كل خطوة — الكل يسأل ويعلّق. في البرمجيات: المبرمج يشاشر كوده على Screen Share ويشرح كيف حلّ المشكلة، والفريق يعلّق."
    },
    {
        cat: "static", catLabel: "الاختبار الساكن · Static Testing", isNew: false,
        en: "Inspection", ar: "الفحص الرسمي المنظم",
        defEN: "A formal, structured review with defined roles (moderator, author, reviewers, scribe) to find defects systematically.",
        defAR: "مراجعة رسمية ومنظمة بأدوار محددة ووقت محدد وتقرير رسمي في النهاية.",
        example: "هيئة رقابية حكومية تراجع مشروع قانون رسمياً: في رئيس جلسة، محاضر، مراجعون مختصون، وتقرير رسمي. في البرمجيات: فريق من 5 يفحص وثيقة متطلبات مهمة بأدوار محددة ويوثّقوا كل ملاحظة."
    },
    {
        cat: "static", catLabel: "الاختبار الساكن · Static Testing", isNew: true,
        en: "Technical Review", ar: "المراجعة التقنية",
        defEN: "A structured review focused on technical accuracy, conducted by technical peers.",
        defAR: "مراجعة تقنية من زملاء متخصصين للتحقق من الدقة التقنية للوثيقة أو الكود.",
        example: "فريق من مهندسين بيراجع وثيقة تصميم قاعدة البيانات — هل الـ indexes صح؟ هل العلاقات بين الجداول منطقية؟ مش زي الـ Inspection الرسمي، بس أكثر تنظيماً من الـ Walkthrough."
    },
    {
        cat: "static", catLabel: "الاختبار الساكن · Static Testing", isNew: true,
        en: "Static Analysis", ar: "التحليل الساكن (بالأدوات)",
        defEN: "Using automated tools to scan the code for potential problems without running it.",
        defAR: "استخدام أدوات آلية تفحص الكود تلقائياً لإيجاد مشاكل محتملة — بدون تشغيل الكود.",
        example: "Grammarly بتحلل كتابتك وتلاحي أخطاء إملائية ونحوية بدون ما تقرأ الجملة كلها. في البرمجيات: SonarQube أو ESLint يفحصوا الكود ويوجدوا أخطاء محتملة تلقائياً قبل ما المطور يشغّل أي حاجة."
    },

    // ===== 9. TEST TECHNIQUES =====
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: false,
        en: "Equivalence Partitioning", ar: "تقسيم التكافؤ",
        defEN: "Dividing all possible inputs into groups that should behave the same way, and testing one from each group.",
        defAR: "تقسيم المدخلات لمجموعات متشابهة — اختبار واحدة من كل مجموعة بيكفي.",
        example: "أمازون بتشحن بسعر مختلف حسب الوزن: أقل من 1 كيلو (مجموعة)، 1-5 كيلو (مجموعة)، أكتر من 5 كيلو (مجموعة). بدل ما نختبر كل وزن ممكن، نختبر واحد من كل مجموعة (مثلاً 0.5 كيلو، 3 كيلو، 7 كيلو)."
    },
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: false,
        en: "Boundary Value Analysis", ar: "تحليل القيم الحدية",
        defEN: "Testing at the edges/boundaries of the partitions, where most bugs hide.",
        defAR: "اختبار الحدود الفاصلة بين المجموعات — لأن أكثر الأخطاء بتختبي هناك.",
        example: "سن القيادة من 18 لـ 70. نختبر: 17 (رفض)، 18 (قبول)، 19 (قبول)... 69 (قبول)، 70 (قبول)، 71 (رفض). الحدود بالضبط هي الأخطر! المبرمج غالباً بيغلط في > مقابل >= في القيم الحدية."
    },
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: false,
        en: "Decision Table Testing", ar: "اختبار جدول القرار",
        defEN: "Creating a table of all possible combinations of conditions to ensure no scenario is missed.",
        defAR: "جدول بكل تركيبات الشروط الممكنة لضمان تغطية كل السيناريوهات.",
        example: "بوليصة تأمين السيارة: العمر (أقل/أكثر من 25) × الجنس × هل فيه حوادث سابقة؟ كل تركيبة تعطي سعر مختلف. الجدول يضمن إننا اختبرنا كل الحالات: شاب 22 بدون حوادث، شاب 22 بحادثة، إلخ."
    },
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: false,
        en: "State Transition Testing", ar: "اختبار انتقال الحالات",
        defEN: "Testing all the different states a system can be in, and all the transitions between them.",
        defAR: "اختبار كل الحالات اللي يمكن يكون فيها النظام وكل الطرق اللي ينتقل بيها بين الحالات.",
        example: "تليفونك عنده حالات: شاشة مضاءة، مقفولة، في مكالمة، في الشحن. كل حالة عندها قواعد مختلفة. في البرمجيات: حساب بنكي ينتقل من Active → 3 محاولات غلط → Locked → طلب إعادة تعيين → Active. نختبر كل انتقال."
    },
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: false,
        en: "Statement Coverage", ar: "تغطية التعليمات",
        defEN: "Measuring what percentage of code lines have been executed by the tests.",
        defAR: "قياس كم سطر من الكود اتنفّذ في الاختبارات — بنقيس النسبة المئوية.",
        example: "كتاب مدرسي من 100 صفحة. الطالب راجع 80 صفحة فقط = 80% statement coverage. في البرمجيات: بعد تنفيذ الاختبارات، أداة بتقيس كم سطر اتنفذ. الهدف 100% — لكن في الواقع 80%+ يُعدّ جيد."
    },
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: false,
        en: "Decision Coverage (Branch Coverage)", ar: "تغطية القرارات والفروع",
        defEN: "Making sure each decision (true/false) in the code has been tested in both outcomes.",
        defAR: "التأكد إن كل قرار في الكود تم اختباره في حالتيه — الصح والغلط.",
        example: "ميزان حرارة: if (درجة > 38): 'حمّى'. لازم نختبر حالة الحمّى (39 درجة) وحالة عدم الحمّى (37 درجة). لو اختبرنا 39 فقط، راحت علينا حالة اللي درجته طبيعية — الـ branch الـ false ما اتغطيش."
    },
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: true,
        en: "Use Case Testing", ar: "اختبار حالات الاستخدام",
        defEN: "Designing test cases based on how users actually interact with the system step by step.",
        defAR: "تصميم اختبارات بناءً على السيناريوهات الحقيقية للمستخدم — كيف يستخدم النظام فعلاً.",
        example: "يوزر يفتح Netflix: يضغط بحث، يكتب اسم فيلم، يضغط تشغيل، الفيلم بيبدأ. ده use case. بنبني اختبارنا على هذا السيناريو الحقيقي خطوة بخطوة — مش مجرد اختبار كل زر لوحده."
    },
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: true,
        en: "Exploratory Testing", ar: "الاختبار الاستكشافي",
        defEN: "Testing without a pre-written script — the tester explores the software freely, using intuition and experience.",
        defAR: "اختبار حر بدون خطة مكتوبة مسبقاً — المختبر يستكشف البرنامج بحرية ويتّبع حدسه.",
        example: "مفتّش جنائي في مسرح الجريمة — مش عنده قائمة محددة يتبعها، بيتجوّل ويلاحظ وياخد نوتس. في البرمجيات: مختبر خبير يفتح التطبيق ويبدأ يجرّب كل حاجة تجي في باله — غالباً بيلاقي bugs ما حدش فكّر فيها."
    },
    {
        cat: "techniques", catLabel: "تقنيات تصميم الاختبار · Test Design Techniques", isNew: true,
        en: "Error Guessing", ar: "تخمين الأخطاء",
        defEN: "Using experience and intuition to predict where bugs are likely to be and test those areas specifically.",
        defAR: "استخدام الخبرة السابقة لتوقع أين الأخطاء المحتملة واختبارها تحديداً.",
        example: "طبيب متمرّس يشوف المريض ومن غير فحوص كثيرة يقول 'ده على الأرجح مشكلة في الكلى'. الخبرة بتوجّهه. مختبر خبير يعرف إن حقل المبالغ الكبيرة، والرموز الخاصة في كلمة المرور، وتغيير اللغة — هي أكتر الأماكن اللي بتحتوي bugs."
    },

    // ===== 10. RISK & MANAGEMENT =====
    {
        cat: "risk", catLabel: "المخاطر والإدارة · Risk & Management", isNew: false,
        en: "Risk", ar: "المخاطرة",
        defEN: "A potential future problem that could cause harm — measured by its probability and impact.",
        defAR: "احتمالية حدوث مشكلة في المستقبل مضروبة في خطورة تأثيرها.",
        example: "قبل رحلة سياحية بتفكر: 'ممكن مطر يخرّب الرحلة'. احتمالية × تأثير = مستوى المخاطرة. في البرمجيات: 'ممكن نظام الدفع ينهار في Black Friday' — احتمالية عالية × تأثير كارثي = risk عالي جداً."
    },
    {
        cat: "risk", catLabel: "المخاطر والإدارة · Risk & Management", isNew: true,
        en: "Product Risk", ar: "مخاطر المنتج",
        defEN: "Risk related to the quality of the product itself — what could go wrong inside the software.",
        defAR: "مخاطر تتعلق بجودة البرنامج نفسه — الأجزاء اللي ممكن تكون فيها عيوب.",
        example: "في مشروع بنكي: 'صفحة الدفع فيها منطق خاطئ ممكن يخصم مرتين' — ده product risk. بيحدد فين نركّز اختباراتنا: الأجزاء ذات المخاطر العالية تاخد اختبارات أكثر."
    },
    {
        cat: "risk", catLabel: "المخاطر والإدارة · Risk & Management", isNew: true,
        en: "Project Risk", ar: "مخاطر المشروع",
        defEN: "Risk related to the management of the testing project itself — schedule, resources, team issues.",
        defAR: "مخاطر تتعلق بإدارة المشروع نفسه — الوقت، الفريق، الموارد.",
        example: "'مطوّر رئيسي هيسافر في آخر أسبوع قبل التسليم' — ده project risk. مش عيب في الكود، لكن ممكن يأثر على جودة الاختبار. الـ Test Manager يخطط لده مسبقاً."
    },
    {
        cat: "risk", catLabel: "المخاطر والإدارة · Risk & Management", isNew: false,
        en: "Risk-Based Testing", ar: "الاختبار القائم على المخاطر",
        defEN: "Prioritizing testing efforts based on the risk level — test the riskiest parts first.",
        defAR: "ترتيب أولويات الاختبار بناءً على مستوى المخاطر — نبدأ بالأجزاء الأكثر خطورة.",
        example: "طيار بيعمل فحص قبل الإقلاع — مش بيفحص كل حاجة بنفس الوقت. بيبدأ بالمحرك والوقود والمقاييس الحيوية. في الاختبار: بدأ بصفحة الدفع والتسجيل قبل صفحة 'عنّا' أو الـ footer."
    },
    {
        cat: "risk", catLabel: "المخاطر والإدارة · Risk & Management", isNew: false,
        en: "Test Plan", ar: "خطة الاختبار",
        defEN: "A formal document that describes the testing scope, strategy, resources, schedule, and responsibilities.",
        defAR: "وثيقة رسمية تصف كل شيء عن الاختبار: إيه، كيف، مين، إمتى، وبأي موارد.",
        example: "مدير مشروع بيحضّر ورقة إدارية قبل أي مشروع: الهدف، الفريق، الميزانية، الجدول الزمني، خطة الطوارئ. Test Plan = نفس الفكرة بس للاختبار: scope، techniques، من يختبر، timing، وكيف نقيس النجاح."
    },
    {
        cat: "risk", catLabel: "المخاطر والإدارة · Risk & Management", isNew: false,
        en: "Test Summary Report", ar: "تقرير ملخص الاختبار",
        defEN: "A final report summarizing what was tested, what was found, and the readiness for release.",
        defAR: "تقرير ختامي يلخّص نتائج الاختبار ويقترح قرار الإطلاق.",
        example: "دكتور بعد رحلة علاجية بيكتب تقرير: 'المريض خلّص 10 جلسات، 9 ناجحة، ورحلة أخيرة اعتدنا فيها. التوصية: خروجه آمن'. Test Summary Report نفس الفكرة: كم test اتنفذ، كم failed، هل النظام جاهز للإطلاق؟"
    },
    {
        cat: "risk", catLabel: "المخاطر والإدارة · Risk & Management", isNew: true,
        en: "Entry Criteria", ar: "معايير البداية",
        defEN: "Conditions that must be met BEFORE testing can start.",
        defAR: "الشروط اللازمة لازم تتحقق قبل ما يبدأ الاختبار.",
        example: "الطبيب قبل العملية يشترط: المريض صايم، الفريق حاضر، غرفة العمليات جاهزة. في الاختبار: الكود جاهز، بيئة الاختبار شغّالة، وثيقة المتطلبات معتمدة — لو شرط واحد مش متحقق نأجّل."
    },
    {
        cat: "risk", catLabel: "المخاطر والإدارة · Risk & Management", isNew: true,
        en: "Exit Criteria", ar: "معايير الانتهاء",
        defEN: "Conditions that must be met BEFORE testing can be officially stopped and the product released.",
        defAR: "الشروط اللازمة تتحقق قبل ما نوقف الاختبار ونطلق المنتج رسمياً.",
        example: "شركة طيران لها معايير قبل طيران الطائرة: وقود 100%، فريق كامل، تصاريح ممنوحة. في الاختبار: 95% من الـ test cases passed، لا يوجد critical bugs مفتوحة، العميل وافق = جاهز للإطلاق."
    },

    // ===== 11. AGILE TESTING =====
    {
        cat: "agile", catLabel: "✨ اختبار الأجايل · Agile Testing", isNew: true,
        en: "Agile Testing", ar: "الاختبار في بيئة الأجايل",
        defEN: "Testing within Agile development where testers work continuously alongside developers in short sprints.",
        defAR: "اختبار بيحصل بشكل مستمر جنباً لجنب مع التطوير — مش في آخر المشروع.",
        example: "تخيّل مطعم بيجرّب أكلة جديدة: بدل ما يطبخ 50 طبق وبعدين يذوّق، كل يوم بيطبخ 2-3 أطباق ويذوّقهم فوراً ويتحسّن. Agile Testing نفس الفكرة: اختبار صغير ومستمر بدل اختبار ضخم في الآخر."
    },
    {
        cat: "agile", catLabel: "✨ اختبار الأجايل · Agile Testing", isNew: true,
        en: "Sprint", ar: "السبرينت",
        defEN: "A short, fixed time period (usually 1-4 weeks) where the team delivers a working piece of software.",
        defAR: "فترة زمنية قصيرة محددة (عادة أسبوعين) يسلّم فيها الفريق ميزة شغّالة قابلة للاختبار.",
        example: "فريق كرة القدم بيخطط للشوط الأول (45 دقيقة). في Sprint نفس الفكرة: كل أسبوعين الفريق يسلّم ميزة جديدة شغّالة — مش 6 أشهر وبعدين تشوف حاجة."
    },
    {
        cat: "agile", catLabel: "✨ اختبار الأجايل · Agile Testing", isNew: true,
        en: "Test-Driven Development (TDD)", ar: "التطوير المدفوع بالاختبار",
        defEN: "Write the test FIRST, then write the code to make that test pass — not the other way around.",
        defAR: "بنكتب الاختبار الأول قبل الكود — الكود بيتكتب لو الاختبار يعدي.",
        example: "تخيّل إنك بتكتب امتحان للطلبة قبل ما تشرح الدرس — وبعدين تشرح تحديداً اللي يخليهم يجيبوا إجابة صح. TDD نفس الفكرة: نحدد النتيجة المطلوبة (test) ثم نكتب الكود اللي يحقّق النتيجة دي."
    },
    {
        cat: "agile", catLabel: "✨ اختبار الأجايل · Agile Testing", isNew: true,
        en: "Acceptance Test-Driven Development (ATDD)", ar: "التطوير المدفوع باختبار القبول",
        defEN: "Business, developers, and testers write acceptance tests together BEFORE development starts.",
        defAR: "العميل والمطور والمختبر يكتبوا معايير القبول معاً قبل ما يبدأ التطوير.",
        example: "قبل بناء شقة: المالك والمهندس والمقاول يتّفقوا مع بعض على معايير القبول: 3 غرف، شبابيك مزدوجة، سقف 3 متر. كلهم موافقين قبل البناء. ATDD نفسها: الكل يتفق على معيار النجاح قبل ما الكود يتكتب."
    },
    {
        cat: "agile", catLabel: "✨ اختبار الأجايل · Agile Testing", isNew: true,
        en: "User Story", ar: "قصة المستخدم",
        defEN: "A short, simple description of a feature from the user's perspective: 'As a [user], I want [goal] so that [reason]'.",
        defAR: "وصف قصير لميزة من منظور المستخدم — اللغة البشرية بدل اللغة التقنية.",
        example: "بدل كتابة 'يجب تطوير module لإدارة المصادقة' نكتب: 'كمستخدم مسجّل، أريد تسجيل الدخول بالبصمة، حتى لا أحتاج كتابة كلمة مرور في كل مرة'. ده user story — واضح ومبني على احتياج حقيقي."
    },
    {
        cat: "agile", catLabel: "✨ اختبار الأجايل · Agile Testing", isNew: true,
        en: "Definition of Done (DoD)", ar: "تعريف الإنجاز",
        defEN: "A shared agreement on what 'finished' means — a checklist the team must complete before a task is truly done.",
        defAR: "اتفاق مشترك على معنى إن الشغل 'خلص' — قائمة شروط لازم تتحقق كلها.",
        example: "طبّاخ: 'الطبق جاهز' لما التدبيل صح، الطعام في الدرجة المثالية، والطبق نظيف. في البرمجيات: الميزة 'تمّت' لما الكود اتكتب + اتراجع + اتاختبر unit + regression passed + العميل وافق."
    },
    {
        cat: "agile", catLabel: "✨ اختبار الأجايل · Agile Testing", isNew: true,
        en: "Shift-Left Testing", ar: "الاختبار المبكّر (Shift Left)",
        defEN: "Moving testing earlier in the development cycle — catching problems before they become expensive to fix.",
        defAR: "تحريك الاختبار لأبكر مرحلة ممكنة في دورة التطوير — اكتشاف المشاكل مبكراً.",
        example: "الطبيب اللي بيعمل كشف دوري منتظم أحسن من اللي بيزور لما المريض وصل للمستشفى. Shift Left: بدل ما نختبر في آخر الـ sprint، بنختبر من أول يوم — مراجعة المتطلبات، كتابة الاختبارات مع الكود."
    },

    // ===== 12. DEFECT MANAGEMENT =====
    {
        cat: "defect", catLabel: "✨ إدارة العيوب · Defect Management", isNew: true,
        en: "Defect Report (Bug Report)", ar: "تقرير العيب",
        defEN: "A formal document describing a found bug with enough detail for the developer to reproduce and fix it.",
        defAR: "وثيقة مفصّلة تصف العيب المكتشف بما يكفي للمطور لإعادة الاختبار وإصلاحه.",
        example: "بلاغ بلدية عن حفرة في الشارع: الموقع بالعنوان الدقيق، الحجم، منذ متى، الخطر، صورة. Bug Report نفسها: اسم الزر، الخطوات لإعادة المشكلة، النتيجة الفعلية، النتيجة المتوقعة، screenshots."
    },
    {
        cat: "defect", catLabel: "✨ إدارة العيوب · Defect Management", isNew: true,
        en: "Defect Severity", ar: "خطورة العيب",
        defEN: "How serious is the impact of the bug on the system's functionality — Critical, Major, Minor, Trivial.",
        defAR: "مدى تأثير العيب على النظام — تصنيف من الأشد خطورة للأقل.",
        example: "خطأ إملائي في الموقع = Trivial. زر ما بيشتغلش = Minor. صفحة الدفع مش شغّالة = Critical. نفس منطق الطوارئ: كسر ظفر = بسيط، نوبة قلبية = حرج."
    },
    {
        cat: "defect", catLabel: "✨ إدارة العيوب · Defect Management", isNew: true,
        en: "Defect Priority", ar: "أولوية إصلاح العيب",
        defEN: "How urgently the bug needs to be fixed — High, Medium, Low — which may differ from severity.",
        defAR: "مدى إلحاحية إصلاح العيب — ممكن يختلف عن مستوى الخطورة.",
        example: "خطأ في شعار الشركة على الموقع (Severity: Minor) لكن لو الموقع هيُعرض على CEO بكرة = Priority: High! خطأ في صفحة نادراً ما تُزار (Severity: Major) = Priority: Low. الخطورة والأولوية ليسا نفس الشيء."
    },
    {
        cat: "defect", catLabel: "✨ إدارة العيوب · Defect Management", isNew: true,
        en: "Defect Life Cycle", ar: "دورة حياة العيب",
        defEN: "The stages a bug goes through from discovery to closure: New → Assigned → Fixed → Verified → Closed.",
        defAR: "المراحل التي يمرّ بها العيب من اكتشافه حتى إغلاقه رسمياً.",
        example: "شكوى عميل في بنك: تُسجَّل (New) → تُحوَّل للمسؤول (Assigned) → يُحل المشكلة (Fixed) → العميل يتأكد (Verified) → الشكوى تُغلق (Closed). Bug نفس الرحلة في أي bug tracking tool زي Jira."
    },
    {
        cat: "defect", catLabel: "✨ إدارة العيوب · Defect Management", isNew: true,
        en: "Root Cause Analysis", ar: "تحليل السبب الجذري",
        defEN: "Finding the true underlying reason a bug occurred — not just fixing the symptom but preventing recurrence.",
        defAR: "البحث عن السبب الحقيقي وراء وجود العيب وليس مجرد علاج الأعراض.",
        example: "غسّالة بتسرّب مية. بدل ما تمسح المية فقط (علاج أعراض)، تفتّش ليه بتسرّب: صمّامة كسرانة. Root Cause. في البرمجيات: بدل إصلاح الـ bug مباشرةً، نسأل ليه حصل؟ هل في نقص في المتطلبات؟ هل التوثيق غير واضح؟"
    },

    // ===== 13. TESTING TOOLS =====
    {
        cat: "tools", catLabel: "✨ أدوات الاختبار · Testing Tools", isNew: true,
        en: "Test Automation", ar: "أتمتة الاختبار",
        defEN: "Using software tools to run tests automatically without human intervention — faster and more consistent.",
        defAR: "استخدام أدوات وبرامج لتشغيل الاختبارات تلقائياً بدون تدخل بشري.",
        example: "بدل موظف يفحص 1000 منتج يدوياً كل يوم، ماكينة آلية تفحصهم في دقائق بدقة 100%. في البرمجيات: Selenium أو Playwright بيشغّلوا اختبارات الـ browser تلقائياً — بتختبر 500 حالة في 5 دقائق بدل يوم كامل."
    },
    {
        cat: "tools", catLabel: "✨ أدوات الاختبار · Testing Tools", isNew: true,
        en: "Continuous Integration / Continuous Testing", ar: "التكامل المستمر / الاختبار المستمر",
        defEN: "Automatically running tests every time new code is added — catching problems instantly.",
        defAR: "تشغيل الاختبارات تلقائياً مع كل تغيير في الكود — اكتشاف مشاكل فوري.",
        example: "مصنع بيفحص كل منتج على خط الإنتاج قبل ما يكمل طريقه — مش في آخر الخط. CI/CD pipeline نفسها: كل مرة مطور يضغط Commit، الاختبارات بتشتغل تلقائياً وفي ثواني بتعرف لو في مشكلة."
    },
    {
        cat: "tools", catLabel: "✨ أدوات الاختبار · Testing Tools", isNew: true,
        en: "Test Management Tool", ar: "أداة إدارة الاختبار",
        defEN: "Software used to organize test cases, track execution results, and manage defects (e.g., Jira, TestRail).",
        defAR: "برنامج لتنظيم وتتبع الاختبارات وإدارة العيوب.",
        example: "أوبر بيستخدم نظام لتتبع شكاوى السائقين والركاب — كل شكوى ليها ID، حالة، مسؤول. TestRail أو Jira نفسها: كل test case ليه ID، نتيجة، bugs مرتبطة. بدون ده، اختبار 10,000 حالة فوضى."
    },
    {
        cat: "tools", catLabel: "✨ أدوات الاختبار · Testing Tools", isNew: true,
        en: "Performance Testing Tool", ar: "أداة اختبار الأداء",
        defEN: "Tools that simulate thousands of users using the system at the same time to measure performance (e.g., JMeter, k6).",
        defAR: "أدوات بتحاكي آلاف المستخدمين في آن واحد لقياس أداء النظام تحت الضغط.",
        example: "بدل انتظار Black Friday لتعرف لو الموقع هيقع — Apache JMeter بيحاكي 50,000 مستخدم في نفس الوقت الآن. لو الموقع وقع في الاختبار، نعرف قبل اليوم الحقيقي ونصلح. آمن وأرخص بكتير."
    },
];

const toolsData = [
    // ===== 1. TEST MANAGEMENT =====
    {
        cat: 'management', catLabel: 'أدوات إدارة الاختبار', catIcon: '📋', catSub: 'Test Management Tools',
        name: 'Jira', logo: '🟦', accentColor: '#4fc3f7',
        tagline: 'أداة الإدارة المرنة الأشهر لتتبع العيوب والمشاريع',
        badges: ['freemium-badge:FREEMIUM', 'cloud-badge:CLOUD', 'enterprise-badge:ENTERPRISE'],
        desc: 'لو افترضنا إن تطوير البرامج زي بناء عمارة، فجيرة (Jira) هي "دفتر المهندس" اللي بيتسجل فيه كل حاجة. هي أداة إدارة مشاريع بتسمح للفرق (مطورين، مختبرين، مديري مشاريع) يتابعوا كل الشغل المطلوب. كمختبر برمجيات (Tester)، هتستخدم Jira عشان تسجل أي مشكلة (Bug) بتلاقيها، وتتابعها لحد ما المطور يصلحها، وتتأكد إنها اتقفلت بشكل صحيح. كمان بتقدر تربطها بأدوات تانية كتير عشان تدير الشغل كله من مكان واحد.',
        steps: [
            'التسجيل: ادخل على موقع Atlassian واعمل حساب مجاني، وبعدين أنشئ مشروع جديد (مثلاً بنظام Scrum).',
            'إنشاء تذكرة (Issue): لما تلاقي مشكلة في الموقع، اضغط على أعلى الشاشة "Create" واختار النوع "Bug" (عيب).',
            'كتابة التفاصيل: اكتب عنوان واضح للمشكلة، وخطوات إعادة إنتاجها خطوة بخطوة، وارفع صورة لشاشة الخطأ.',
            'المتابعة الدائمة: حول حالة المشكلة من "To Do" إلى "In Progress" لما المطور يبدأ شغل، وبعدين "In Review" لما ترجعلك تختبرها تاني.'
        ],
        usecase: 'تخيل إنك بتختبر تطبيق توصيل أكل، ولقيت إن زر "إضافة للسلة" مش بيشتغل على موبايلات أندرويد. بتفتح Jira، تعمل تذكرة (Ticket) جديدة، وتشرح فيها المشكلة بوضوح وتحط صورة للشاشة، وتعين الأولوية (Priority) كـ "عالية". المطور بيشوفها، وبيصلحها، ويردهالك عشان تتأكد إنها اشتغلت.',
        pricing: 'مجاني حتى 10 مستخدمين | بدءاً من $8.15 للمستخدم',
        downloadLink: 'https://www.atlassian.com/software/jira',
        docsLink: 'https://support.atlassian.com/jira-software-cloud/docs/'
    },
    {
        cat: 'management', catLabel: 'أدوات إدارة الاختبار', catIcon: '📋', catSub: 'Test Management Tools',
        name: 'TestRail', logo: '🟩', accentColor: '#3de68a',
        tagline: 'الأداة المنظمة لإدارة حالات الاختبار (Test Cases) باحترافية',
        badges: ['paid-badge:PAID', 'cloud-badge:CLOUD', 'enterprise-badge:ENTERPRISE'],
        desc: 'تخيل إن مطلوب منك تختبر موقع كامل فيه 500 صفحة. مستحيل تحفظ كل الخطوات في دماغك أو تكتبها في ملف وورد عادي ويظل منظم. هنا ييجي دور TestRail. هي أداة متخصصة بتخليك تكتب كل حالات الاختبار (Test Cases) بتاعتك بشكل منظم جداً ومقسم لمجموعات. ولما تحب تبدأ اختبار فعلي، بتعمل حاجة اسمها "Test Run" وتبدأ تمشي على الحالات خطوة بخطوة وتحدد هل الاختبار ده نجح (Passed) ولا فشل (Failed).',
        steps: [
            'إنشاء بيئة العمل: بعد ما تسجل في TestRail، بتعمل مشروع جديد للموقع اللي عايز تختبره وتضيف زملائك.',
            'كتابة الحالات المسبقة: بتنشئ مجموعة (Test Suite)، وتضيف جواها حالات الاختبار الفردية، وتكتب الخطوات والنتائج المتوقعة.',
            'بدء الاختبار الفعلي: في يوم الاختبار، بتعمل "Test Run" جديد، وتبدأ تنفذ الخطوات المكتوبة على الموقع الفعلي.',
            'تسجيل النتائج: لو الخطوة نجحت بتضغط (Pass)، ولو فشلت بتضغط (Fail) وتكتب السبب بوضوح، وممكن تربطها بـ Jira مباشرة لإنشاء عيب للمطور.'
        ],
        usecase: 'شغالين على النظام الجديد لبنك، ومطلوب منك تختبر صفحة تحويل الأموال بس المرة دي. بتدخل على TestRail، تختار الجزء الخاص بالتحويلات، وتعمل Test Run جديد. تبدأ تجرب: التحويل برصيد كافي (نجح -> Pass)، التحويل برصيد غير كافي (فشل والموقع هنج -> Fail وتكتب تعليق). وفي النهاية الإدارة بتشوف نسبة النجاح للتحويلات كلها.',
        pricing: 'فترة تجريبية 14 يوم مجاناً | يبدأ من $36 للشهر',
        downloadLink: 'https://www.testrail.com',
        docsLink: 'https://support.testrail.com/hc/en-us'
    },
    {
        cat: 'automation', catLabel: 'أدوات الأتمتة', catIcon: '🤖', catSub: 'Test Automation Tools',
        name: 'Selenium', logo: '🟢', accentColor: '#3de68a',
        tagline: 'الروبوت الآلي الأول عالمياً لاختبار المتصفحات والمواقع',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'تخيل لو كان عندك روبوت سحري بيعرف يفتح المتصفح، يكتب على الكيبورد، يضغط على الزراير، ويتأكد إن كل حاجة شغالة أسرع منك بـ 100 مرة! هو ده Selenium. هي أداة وأيقونة مجانية بتسمحلك تكتب كود برمجي (بأي لغة زي Python أو Java) عشان تخلي المتصفح يتحرك لوحده ويملى البيانات ويختبر الموقع آلياً بالكامل بدل ما تعمل ده بإيدك كل يوم.',
        steps: [
            'خطوة التثبيت البرمجي: بتنزل مكتبة Selenium للغة البرمجة اللي بتفضلها (زي مجلدات بايثون) من خلال الـ CMD.',
            'استدعاء السائق (WebDriver): بتنزل ملف صغير اسمه WebDriver (هو زي جهاز التحكم اللي بيخلي كودك يتحكم في متصفح كروم أو فايرفوكس).',
            'كتابة السكريبت التلقائي: بتكتب كود بيقول للمتصفح: افتح موقع كذا، دور على الزرار الفلاني بالاسم، واضغط عليه.',
            'شرط التحقق (Assertion): بتضيف سطر برمجي يقول: لو ظهرت رسالة "تم إرسال الطب بنجاح" على الشاشة، إذن الاختبار يعتبر ناجح وإلا اعتبره فاشل.'
        ],
        usecase: 'كل يوم الصبح لازم تتأكد إن مسار "تسجيل الدخول" وشراء منتج شغال. بدل ما تفتح الموقع وتكتب إيميل وتجرب تدفع كل يوم بإيدك، بتكتب كود Selenium مرة واحدة. بعد كده، كل يوم الصبح بتضغط زرار تشغيل، وهو بيفتح المتصفح في الهواء، يكتب البيانات ويضغط دخول ويبلغك لو في مشكلة في لحظات.',
        pricing: 'مجاني 100% ومفتوح المصدر',
        downloadLink: 'https://www.selenium.dev/downloads/',
        docsLink: 'https://www.selenium.dev/documentation/'
    },
    {
        cat: 'automation', catLabel: 'أدوات الأتمتة', catIcon: '🤖', catSub: 'Test Automation Tools',
        name: 'Cypress', logo: '🌲', accentColor: '#3de68a',
        tagline: 'البديل الحديث الأسرع والمصمم خصيصاً لمطوري الويب الحديث',
        badges: ['opensource-badge:OPEN SOURCE', 'freemium-badge:FREEMIUM'],
        desc: 'سيبريس (Cypress) هي بطلة العصر الحديث في أدوات الاختبار الآلي للمواقع (Automation). على عكس Selenium، Cypress بتشتغل جوه المتصفح نفسه مش كتحكم عن بُعد، وده بيخليها أسرع بشكل خرافي، ومفيهاش مشاكل التقطيع اللي بتظهر في سيلينيوم. كمان العبقرية فيها إنها بتصور الشاشة أوتوماتيك مع كل خطوة، فلو حصل خطأ، تقدر ترجع بالزمن وتشوف المتصفح خطوة بخطوة كأنك بتشاهد فيديو وتعلم المشكلة فين بالظبط.',
        steps: [
            'التنزيل المباشر: بتثبت الأداة عن طريق موجه الأوامر (Terminal) بكتابة الأمر السريع npm install cypress.',
            'بدء الواجهة التشغيلية: بتكتب الأمر npx cypress open، فهتفتحلك واجهة رسومية جميلة وبسيطة للمستخدم.',
            'كتابة الاختبار العصري: بتكتب ملف JavaScript بسيط (مفهوم جداً ومُيسر) بيلخص كل الخطوات بدوال واضحة.',
            'المشاهدة الحية والممتعة: أول ما تحفظ ملف الكود الاختباري، Cypress بتشغل المتصفح قدام عينك في لحظتها وتنفذ الخطوات بسرعة البرق وتوريك فين النتيجة.'
        ],
        usecase: 'المطورين عملوا تحديثات برمجية كثيرة في تصميم صفحة "دفع الفاتورة". بتستخدم Cypress عشان تراجع الشغل بعد كل حفظ للكود المحدّث. الأداة بتفتح المتصفح وتجرب وتضغط بسرعة رهيبة، ولو وقفت عند زرار الدفع وما عرفتش تضغط، هتاخد صورة للمشكلة وتوضح للمطور فورا إن الزرار اتغطى بالغلط ورا عنصر آخر في التصميم.',
        pricing: 'الاستخدام الأساسي مجاني | الخدمة السحابية المدفوعة $67',
        downloadLink: 'https://www.cypress.io/download',
        docsLink: 'https://docs.cypress.io'
    },
    {
        cat: 'api', catLabel: 'أدوات اختبار الـ API', catIcon: '🔗', catSub: 'API Testing Tools',
        name: 'Postman', logo: '📮', accentColor: '#ff9f43',
        tagline: 'الأداة الرشيقة الأولى عالمياً لاختبار وتحليل الـ APIs',
        badges: ['freemium-badge:FREEMIUM', 'cloud-badge:CLOUD'],
        desc: 'عشان تفهم بوستمان (Postman)، تخيل الـ API ده هو "الجرسون" اللي بياخد طلبك من قائمة المطعم (التطبيق) لطهاة المطبخ (السيرفر العقل المدبر) ويرجعلك بالأكل (النتيجة أو البيانات). Postman هي واجهة وتطبيق بيسمحلك تتكلم مع "الجرسون" ده مباشرة من غير ما تستنى بناء التطبيق الرسومي! بتقدر تبعتله طلبات (Requests) بأشكال وألوان وتشوف البيانات الخفية (Response) اللي بترجع من السيرفر كأنك مطور محترف وتتأكد إن البيانات سليمة وخالية من الأخطاء المنطقية.',
        steps: [
            'التحميل السلس: بتحمل برنامج Postman من موقعه الرسمي وتثبته على جهازك ببساطة وإنشاء حساب مجاني لو أردت.',
            'إنشاء طلب جديد (Request): بتعمل طلب جديد. لو عاوز تقرأ بيانات بتخلي النوع GET، ولو هترسل معلومات جديدة زي إنشاء حساب بتخليه POST، وتحط الـ URL (رابط الجرسون).',
            'إضافة التوابل للطلب: لو الطلب محتاج باسورد أو بيانات معينة (زي بيانات اسم العميل)، بتضيفها كمخطط بيانات في خانة تُسمى الـ Body أو كمعرفات في الـ Headers.',
            'الإرسال والتحليل الذكي: بتضغط على الزرار الأزرق الكبير (Send)، وتنتظر لجزء من الثانية لتفحص الرد أسفل الشاشة (Status Code 200 يعني العملية نجحت! 404 تعني أنك ضللت الطريق).'
        ],
        usecase: 'شركة بتبرمج تطبيق موبايل لسه الواجهة بتاعته وشكله مخلصوش تماماً، بس المطور قلك "أنا خلصت الكود الداخلي لجلب أسعار المنتجات". عشان تختبرها ومضيعش وقت لحد ما الواجهة تجهز، بتفتح Postman، وتحط رابط الأسعار الجديد، وتضغط Send. لو رجعلك بيانات أسعار مرتبة ومنسقة بسرعة وبدون أصفار أو أعطال، إذن الـ Backend أو الكود الخفي شغال بامتياز ومفيش عطل منتظر.',
        pricing: 'مجاني وكافي جداً للاستخدام الفردي | الميزات المتقدمة بـ $14',
        downloadLink: 'https://www.postman.com/downloads/',
        docsLink: 'https://learning.postman.com/docs/'
    },
    {
        cat: 'performance', catLabel: 'أدوات اختبار الأداء', catIcon: '⚡', catSub: 'Performance Testing Tools',
        name: 'Apache JMeter', logo: '🌡', accentColor: '#ff5f7e',
        tagline: 'بطل الوزن الثقيل لاختبار الأداء والضغط على السيرفرات',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'هل عمرك دخلت تشتري تذاكر ماتش مهم أو تحجز في أوكازيون لقيت الموقع مبيفتحش أوالسيرفر بيقع؟ ده بيحصل بسبب الضغط الشديد الزائد عن الحد. Jmeter هي أداة سحرية بتحاكي هذا الضغط بشكل كاذب ولكن واقعي قبل وقوع المصيبة. بتسمحلك تصنع آلاف "المستخدمين الآليين الوهميين" وتبعتهك في نفس اللحظة يهاجموا الموقع بشكل منظم عشان تقيس: هل الموقع هيستحمل ولا هينهار؟ وبياخد كام ثانية عشان يرد على كل الكم ده من الناس؟',
        steps: [
            'الاستعداد: بتحمل JMeter (بيتطلب تثبيت بيئة Java على الجهاز مسبقاً)، وتشغّل البرنامج من المجلد بالضغط على ملف jmeter.bat لتفتح واجهته الكلاسيكية.',
            'تصميم كتيبة المستخدمين: بتعمل قسم رئيسي اسمه المجموعة (Thread Group) وتحدد جواه بالضبط: عايز كام مستخدم وهمي؟ وهيدخلوا خلال كام ثانية بالتحديد؟ وممكن كمان كم مرة هيعيدوا الكرّة؟',
            'تحديد نقطة الهجوم: بتضيف خطوة الطلب، وهي تحديد رابط الصفحة المحددة اللي عايز المجموعة تهجم عليها بحملها وتزورها بصفة جماعية (HTTP Request).',
            'دروع المراقبة: بتضيف مستمعين أو شاشات المراقبة (Listeners) عشان تظهرلك الرسوم البيانية والأرقام التفصيلية عن بطء الشاشة أثناء الضغط ونسبة الأخطاء.'
        ],
        usecase: 'متجر أمازون أو جوميا بيستعد بشراسة ليوم البلاك فرايداي القادم حيث الخصومات تجذب الجموع. بيستخدم المهندسون JMeter لإرسال نص مليون مستخدم وهمي لصفحة "عربة التسوق" في نفس الدقيقة. لو لاقوا الموقع بياخد أكتر من 3 ثواني عشان يفتح أو بيقع تماماً ويسرّب البيانات، بيدقوا جرس الإنذار للمطورين ليزودوا كفاءة السيرفرات ويحسنوا الكود قبل اليوم المنتظر لتفادي الخسائر الملايينيّة.',
        pricing: 'مجاني تماماً وللأبد | مشروع مفتوح المصدر',
        downloadLink: 'https://jmeter.apache.org/download_jmeter.cgi',
        docsLink: 'https://jmeter.apache.org/usermanual/index.html'
    },
    // ===== NEW TOOLS ADDED =====
    {
        cat: 'api', catLabel: 'أدوات اختبار الـ API', catIcon: '🔗', catSub: 'API Testing Tools',
        name: 'Rest-Assured', logo: '☕', accentColor: '#ff9f43',
        tagline: 'الأداة الأقوى لمطوري Java لاختبار صفحات الـ API برمجياً',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'لو إنت مطور أو مختبر بتتعامل مع لغة Java، فـ Rest-Assured هي "الرفيق المثالي" لاختبار الـ APIs. هي مكتبة برمجية بتخلي كتابة الاختبارات للـ REST services سهلة جداً ومفهومة، لأنها بتستخدم لغة شبه اللغة البشرية (Given/When/Then). ميزتها الكبيرة إنها بتندمج بسهولة مع أدوات الأتمتة التانية زي Selenium عشان تعمل اختبار شامل للموقع والكود الخفي مع بعض.',
        steps: [
            'التهيئة: بتضيف مكتبة Rest-Assured لملف الـ POM الخاص بمشروعك (Maven أو Gradle).',
            'كتابة كود الاختبار: بتستخدم دوال بسيطة زي given() لتحديد البيانات المرسلة، وwhen() لتحديد الرابط، وthen() للتأكيد على النتيجة.',
            'التحقق الذكي: بتقدر تفحص الـ Status Code، والبيانات اللي راجعة (JSON)، وحتى الوقت اللي خده الطلب في سطر واحد.',
            'الدمج: بتشغل الاختبارات دي كجزء من الـ Unit Tests بتاعتك عشان تضمن إن مفيش تغيير في الكود بوظ الـ API.'
        ],
        usecase: 'شغال في مشروع كبير بيستخدم Java، وعاوز تتأكد إن "خدمة تسجيل الدخول" بترجع بيانات المستخدم صح وبسرعة. بدل ما تجرب يدوي، بتكتب سكريبت Rest-Assured يبعت بيانات وهمية ويتأكد إن الرد اللي جاي فيه "token" صحيح وصلاحيات العميل مظبوطة.',
        pricing: 'مجاني بالكامل ومفتوح المصدر',
        downloadLink: 'https://rest-assured.io/',
        docsLink: 'https://github.com/rest-assured/rest-assured/wiki/Usage'
    },
    {
        cat: 'automation', catLabel: 'أدوات الأتمتة', catIcon: '🤖', catSub: 'Test Automation Tools',
        name: 'Playwright', logo: '🎭', accentColor: '#3de68a',
        tagline: 'المنافس الأقوى والأحدث لـ Selenium من إنتاج Microsoft',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'بلاي-رايت (Playwright) هو "الجيل الجديد" من أدوات الأتمتة. صممته مايكروسوفت عشان يحل كل مشاكل الأدوات القديمة. هو سريع جداً، بيدعم كل المتصفحات (Chrome, Safari, Firefox) بنفس الكود، والأهم من كده إنه بيعمل "Auto-wait"، يعني مش محتاج تقوله "استنى لحد ما الصفحة تحمل"، هو ذكي كفاية إنه يستنى لوحده. كمان بيقدر يختبر الموبايل والتابلت بسهولة من خلال محاكاة الشاشات.',
        steps: [
            'التثبيت السريع: عن طريق الـ Terminal بتكتب npm init playwright@latest وهو بينزل كل حاجة محتاجها.',
            'تسجيل الاختبار (Codegen): دي ميزة عبقرية، بتفتح أداة بتسجل حركاتك على المتصفح وتحولها لكود برمجي جاهز فوراً.',
            'كتابة الاختبار: بتستخدم لغات زي JavaScript أو Python لكتابة خطوات دقيقة ومنظمة.',
            'التشغيل المتقدم: بتقدر تشغل الاختبارات على كذا متصفح في نفس الوقت وتشوف التقارير بشكل مرئي جميل وجذاب.'
        ],
        usecase: 'عندك موقع تجارة إلكترونية وعاوز تتأكد إنه شغال صح على "ايفون" وعلى "لابتوب ويندوز" وعلى "ماك". بـ Playwright بتكتب كود واحد، وهو بيفتح محاكي لكل الأجهزة دي ويجرب عملية الشراء ويتأكد إن الأزرار بتظهر في مكانها الصح في كل شاشة.',
        pricing: 'مجاني تماماً ومفتوح المصدر',
        downloadLink: 'https://playwright.dev/',
        docsLink: 'https://playwright.dev/docs/intro'
    },
    {
        cat: 'mobile', catLabel: 'أدوات الموبايل', catIcon: '📱', catSub: 'Mobile Testing Tools',
        name: 'Appium', logo: '🔮', accentColor: '#7c6fff',
        tagline: 'الأداة رقم 1 عالمياً لأتمتة تطبيقات الموبايل (Android & iOS)',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'لو عاوز تعمل اختبار آلي لتطبيق موبايل، فـ Appium هو "المعيار العالمي". هو زي Selenium بس للموبايل. العبقرية فيه إنه "Cross-platform"، يعني بتقدر تكتب كود واحد يشتغل على أندرويد وعلى آيفون. بيتعامل مع التطبيقات كأنها كائنات حقيقية، فبيقدر يضغط على الأزرار، يسحب الشاشة (Swipe)، ويجرب كل حركات اللمس اللي بيعملها المستخدم الحقيقي.',
        steps: [
            'التحضير: بتنزل Appium Server على جهازك وتثبت الـ SDK الخاص بالأندرويد أو الـ Xcode للآيفون.',
            'توصيل الجهاز: بتوصل موبايل حقيقي أو بتفتح "محاكي" (Emulator) على الكمبيوتر.',
            'تحديد العناصر (Inspector): بتستخدم أداة Appium Inspector عشان "تشوف" الأكواد الخفية للأزرار في الموبايل وتعرف هتحركها إزاي.',
            'تشغيل الكود: بتكتب سكريبت بلغة Java أو Python يبعت أوامر لـ Appium، وهو ينفذها فوراً على الموبايل قدام عينك.'
        ],
        usecase: 'بنك أطلق تطبيق موبايل جديد وعاوز يتأكد إن "البصمة" وشاشات التحويل شغالة صح على كل أنواع الموبايلات (Samsung, iPhone, Huawei). بتستخدم Appium عشان يفتح التطبيق على كل الأجهزة دي ويجرب العمليات الحساسة آلياً.',
        pricing: 'مجاني ومفتوح المصدر',
        downloadLink: 'https://appium.io/',
        docsLink: 'http://appium.io/docs/en/about-appium/intro/'
    },
    {
        cat: 'security', catLabel: 'أدوات الأمان', catIcon: '🔒', catSub: 'Security Testing Tools',
        name: 'OWASP ZAP', logo: '⚡', accentColor: '#a855f7',
        tagline: 'الأداة الأشهر والأسهل لاكتشاف الثغرات الأمنية في المواقع',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'هل الموقع بتاعك معرض للاختراق؟ ZAP (Zet Attack Proxy) هي الأداة اللي هتقولك الإجابة. هي "ماسح ضوئي" أمني بيقوم بدور "الهكر الأخلاقي". بيقوم بفحص الموقع بتاعك ويدور على أشهر الثغرات زي (SQL Injection) أو (XSS). ميزتها إنها مناسبة جداً للمبتدئين في الأمن السيبراني لأن فيها واجهة سهلة وبتقدر تعمل فحص تلقائي بضغطة زر واحدة.',
        steps: [
            'التشغيل: بتفتح برنامج ZAP وتحط رابط الموقع بتاعك في خانة "Automated Scan".',
            'الهجوم الوهمي: الأداة بتبدأ "تخبط" على أبواب الموقع بكل الطرق اللي الهكرز بيستخدموها عشان تشوف مين اللي هيفتح.',
            'تحليل النتائج: بعد الفحص، بتطلعلك قائمة بـ "التنبيهات" (Alerts)، وكل ثغرة بتقولك مدى خطورتها (حمراء يعني كارثة، صفراء يعني بسيطة).',
            'التقارير: بتقدر تطلع تقرير مفصل للمطورين يشرحلهم الثغرة فين بالظبط في الكود وإزاي يقفلوها.'
        ],
        usecase: 'خلصت بناء موقع لشركة طبية فيها بيانات مرضى حساسة. قبل ما تطلعه للناس، بتشغل OWASP ZAP عشان تتأكد إن مفيش ثغرة سهلة تخلي أي حد يسرق البيانات دي. الأداة بتكتشف إن في ثغرة في صفحة "تغيير كلمة السر" وبتبلغك تصلحها فوراً.',
        pricing: 'مجاني تماماً وللأبد',
        downloadLink: 'https://www.zaproxy.org/download/',
        docsLink: 'https://www.zaproxy.org/docs/'
    },
    {
        cat: 'static', catLabel: 'التحليل الساكن', catIcon: '🔍', catSub: 'Static Analysis Tools',
        name: 'SonarQube', logo: '🌊', accentColor: '#f9ca24',
        tagline: 'المراقب الصارم لجودة الكود ونظافته (Clean Code)',
        badges: ['freemium-badge:FREEMIUM', 'enterprise-badge:ENTERPRISE'],
        desc: 'سونار-كيوب (SonarQube) هو "مدقق لغوي" بس للكود البرمجي. هو مش بيشغل البرنامج، هو بس "بيقرأ" الكود ويقولك: "إنت معيد كود كتير هنا"، "المتغير ده ملوش لازمة"، أو "الحتة دي ممكن تسبب ثغرة أمنية مستقبلاً". هو بيساعد الفرق إنها تحافظ على مستوى عالي من الجودة وبيرسم خريطة لـ "الدين التقني" (Technical Debt) اللي هو الوقت اللي هتحتاجه عشان تصلح العك اللي في الكود.',
        steps: [
            'الربط: بيتم ربط SonarQube بمستودع الكود (GitHub أو GitLab).',
            'الفحص التلقائي: مع كل تغيير المطور بيعمله، سونار بيقوم بفحص الأسطر الجديدة فوراً.',
            'لوحة المعلومات (Dashboard): بتدخل تشوف "صحة المشروع" بالألوان؛ الأخضر يعني كود نظيف، الأحمر يعني محتاج وقفة.',
            'تحديد القواعد (Quality Gates): بتقدر تمنع المطور إنه يرفع كوده لو السونار لقى فيه أخطاء خطيرة، وده بيضمن جودة ثابتة.'
        ],
        usecase: 'فريق برمجي شغال على مشروع بقاله سنتين والكود بقى معقد جداً. بدأوا يستخدموا SonarQube عشان "ينظفوا" المشروع. الأداة كشفتلهم إن 20% من الكود مكرر ملوش لازمة، وفي ثغرات خفية كانت ممكن تسبب مشاكل أداء بعدين.',
        pricing: 'النسخة المجانية للمشاريع المفتوحة | خطط مدفوعة للشركات',
        downloadLink: 'https://www.sonarqube.org/downloads/',
        docsLink: 'https://docs.sonarqube.org/'
    },
    {
        cat: 'reporting', catLabel: 'التقارير', catIcon: '📊', catSub: 'Test Reporting Tools',
        name: 'Allure Report', logo: '🌈', accentColor: '#f472b6',
        tagline: 'أجمل وأوضح تقارير اختبار في العالم (Visual Reporting)',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'لو عملت 1000 اختبار آلي وطلعوا كلهم "ناجح" أو "فاشل" في سطر أسود على الشاشة، مفيش مدير هيقدر يفهم حاجة. هنا بييجي دور Allure. هي أداة "بصرية" بتحول نتائج الاختبارات المملة لتقارير تفاعلية، فيها رسوم بيانية، صور، وحتى فيديوهات للخطوات اللي فشلت. بتخلي التواصل بين التستر والمطور والمدير سهل جداً لأن كل حاجة واضحة وبالألوان.',
        steps: [
            'التكامل: بتضيف Allure كـ Plugin لأداة الأتمتة بتاعتك (زي Selenium أو Playwright).',
            'جمع البيانات: وأنت بتشغل الاختبارات، Allure بتسجل كل حركة وبتاخد "Screenshots" لو حصل أي فشل.',
            'توليد التقرير: بضغطة زر، Allure بتعمل صفحة ويب (Dashboard) كاملة فيها كل التفاصيل.',
            'المشاركة: بترفع الصفحة دي لزمايلك عشان يشوفوا إيه اللي شغال وإيه اللي محتاج تصليح.'
        ],
        usecase: 'مديرك سألك: "نسبة النجاح في السبرينت ده كام؟ وفين أكتر جزء فيه مشاكل؟". بدل ما تشرحله كلام كتير، بتبعتله لينك Allure Report. بيفتح يلاقي رسم بياني بيوري إن 90% ناجح، والـ 10% اللي فشلوا موجود ليهم صور بتوضح المشكلة فين بالظبط.',
        pricing: 'مجاني بالكامل ومفتوح المصدر',
        downloadLink: 'https://github.com/allure-framework/allure2/releases',
        docsLink: 'https://docs.qameta.io/allure/'
    },
    {
        cat: 'automation', catLabel: 'أدوات الأتمتة', catIcon: '🤖', catSub: 'Test Automation Tools',
        name: 'Robot Framework', logo: '🤖', accentColor: '#3de68a',
        tagline: 'الأتمتة باللغة البشرية - البساطة في أبهى صورها',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'لو إنت مش خبير برمجة بس عاوز تعمل أتمتة، Robot Framework هو اختيارك الأول. هو إطار عمل بيعتمد على "الكلمات المفتاحية" (Keywords). يعني بدل ما تكتب كود معقد، بتكتب كلمات زي Open Browser و Input Text. هو مرن جداً وبتقدر تستخدمه لاختبار المواقع، الموبايل، الـ API، وحتى قواعد البيانات.',
        steps: [
            'التهيئة: بتثبت الـ Framework باستخدام بايثون (pip install robotframework).',
            'كتابة السكريبت: بتكتب ملف نصي بسيط، الجزء الأول فيه بحدد المكتبات والجزء التاني فيه خطوات الاختبار بكلمات واضحة.',
            'التشغيل: بتكتب أمر التشغيل في الـ Terminal وبيبدأ ينفذ الخطوات خطوة بخطوة.',
            'رؤية النتائج: تلقائياً، الروبوت بيعملك ملف Log (تفصيلي) وملف Report (ملخص) في نهاية كل اختبار.'
        ],
        usecase: 'فريق مختبرين (Manual QA) عاوزين يدخلوا عالم الأتمتة بسرعة. اختاروا Robot Framework لأنهم قدروا يكتبوا اختباراتهم الأولى في يوم واحد بس لأنها شبه اللغة الإنجليزية العادية ومحتاجتش منهم مجهود برمجي كبير.',
        pricing: 'مجاني تماماً',
        downloadLink: 'https://robotframework.org/#getting-started',
        docsLink: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html'
    },
    {
        cat: 'mobile', catLabel: 'أدوات الموبايل', catIcon: '📱', catSub: 'Mobile Testing Tools',
        name: 'BrowserStack', logo: '☁️', accentColor: '#7c6fff',
        tagline: 'مختبرك السحابي لآلاف الأجهزة الحقيقية في جيبك',
        badges: ['paid-badge:PAID', 'cloud-badge:CLOUD'],
        desc: 'مستحيل كشركة تشتري كل أنواع الموبايلات الموجودة في السوق عشان تجرب عليها. BrowserStack بيحل المشكلة دي بإنه بيديك "اشتراك" في مزرعة أجهزة ضخمة موجودة في السحاب (Cloud). بضغطة زرار، بتقدر تفتح "iPhone 15" أو "Galaxy S24" حقيقي (مش محاكي) وتجرب موقعك أو تطبيقك عليه كأن الموبايل في إيدك بالظبط.',
        steps: [
            'الدخول: بتعمل حساب على موقعهم وتدخل على لوحة التحكم.',
            'اختيار الجهاز: بتنقي نوع المتصفح أو نوع الموبايل والنسخة اللي عاوز تجرب عليها.',
            'البدء: الأداة بتفتحلك شاشة الموبايل لايف قدامك على الكمبيوتر، وبتقدر تستخدم الماوس كأنه صباعك.',
            'الاختبار الآلي: بتقدر تربط كود السيلينيوم أو الابيوم بتاعك بـ BrowserStack عشان يشغل الاختبارات على كذا جهاز حقيقي في نفس الوقت.'
        ],
        usecase: 'عميل بلغك إن الموقع "بايظ" على متصفح قديم في موبايل أندرويد 8. بدل ما تدور على حد عنده الموبايل ده، بتدخل BrowserStack، بتفتحه في ثواني، وبتشوف المشكلة فين وتصلحها فوراً.',
        pricing: 'فترة تجريبية مجانية | خطط مدفوعة تبدأ من $29',
        downloadLink: 'https://www.browserstack.com/',
        docsLink: 'https://www.browserstack.com/docs'
    },
    {
        cat: 'api', catLabel: 'أدوات اختبار الـ API', catIcon: '🔗', catSub: 'API Testing Tools',
        name: 'Insomnia', logo: '🟣', accentColor: '#ff9f43',
        tagline: 'البديل الأنيق والبسيط لـ Postman لمصممي الـ APIs',
        badges: ['opensource-badge:OPEN SOURCE', 'freemium-badge:FREEMIUM'],
        desc: 'إنسومنيا (Insomnia) هي الأخت التوأم لـ Postman بس بتركيز أكتر على البساطة والأناقة. هي أداة بتسمحلك تصمم وتختبر الـ APIs بتاعتك بواجهة مريحة جداً ومش زحمة. ميزتها الكبيرة إنها بتدعم بروتوكولات حديثة زي GraphQL وgRPC بامتياز، وبتركز جداً على تجربة المستخدم (UX) عشان تخليك تخلص شغلك من غير تشتيت.',
        steps: [
            'التنصيب: بتحل البرنامج وتثبته ببساطة على ويندوز أو ماك.',
            'تنظيم الطلبات: بتقدر تعمل "Workspaces" لكل مشروع، وتجمع الـ Requests في مجلدات منظمة.',
            'استخدام المتغيرات: بتقدر تعمل Environment Variables عشان تبدل بين السيرفر التجريبي والسيرفر الحقيقي بسهولة.',
            'التجربة الحية: بتكتب الطلب وتضغط Send وتشوف الرد منظم وجميل قدامك مع إمكانية البحث جواه.'
        ],
        usecase: 'إنت شغال على مشروع بيستخدم تقنية GraphQL (دي تقنية حديثة في الـ API)، ومحتاج أداة تدعمها بشكل كامل وتديك اقتراحات للكود وأنت بتكتب. Insomnia هي الأداة المثالية للمهمة دي بفضل دعمها القوي للتقنيات الحديثة.',
        pricing: 'الاستخدام الأساسي مجاني | خطط متقدمة للفرق',
        downloadLink: 'https://insomnia.rest/download',
        docsLink: 'https://docs.insomnia.rest/'
    },
    {
        cat: 'performance', catLabel: 'أدوات اختبار الأداء', catIcon: '⚡', catSub: 'Performance Testing Tools',
        name: 'k6', logo: '📈', accentColor: '#ff5f7e',
        tagline: 'أداة اختبار الحمل (Load Testing) للمطورين العصريين',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'كيه-سيكس (k6) هي أداة اختبار أداء ثورية صممتها شركة Grafana. على عكس الأدوات القديمة اللي كانت بتعتمد على واجهات رسومية معقدة، k6 بتعتمد بالكامل على الكود (JavaScript). هي خفيفة جداً، سريعة، وبتقدر تشغلها كجزء من الـ CI/CD pipeline بسهولة تامة. هي مصممة "للمطورين" اللي عاوزين يكتبوا اختبارات الأداء بتاعتهم بنفس اللغة اللي بيكتبوا بيها كود الموقع.',
        steps: [
            'التثبيت: بتنزل ملف k6 الصغير وتعرفه على الجهاز (عن طريق winget أو brew).',
            'كتابة السكريبت: بتكتب ملف JavaScript بسيط بيحدد عدد المستخدمين الوهميين والوقت المطلوب.',
            'التنفيذ: بتكتب k6 run script.js في الـ Terminal ويبدأ الهجوم فوراً.',
            'تحليل النتائج: بتظهرلك إحصائيات دقيقة جداً عن وقت الاستجابة، ونسبة الأخطاء، وحجم البيانات.'
        ],
        usecase: 'عندك "System Update" كبير في السيرفر وعاوز تتأكد إن التغيير ده محصلش فيه تدهور في الأداء. بتكتب سكريبت k6 صغير وتخليه يشتغل أوتوماتيك مع كل عملية Build، لو الأداء نزل عن حد معين، الـ Build بيفشل والسيرفر "بيصفر" إن في مشكلة.',
        pricing: 'مجاني تماماً | خدمة سحابية مدفوعة للنتائج الضخمة',
        downloadLink: 'https://k6.io/docs/getting-started/installation/',
        docsLink: 'https://k6.io/docs/'
    },
    {
        cat: 'security', catLabel: 'أدوات الأمان', catIcon: '🔒', catSub: 'Security Testing Tools',
        name: 'Burp Suite', logo: '🟠', accentColor: '#a855f7',
        tagline: 'الأداة الاحترافية الأولى لخبراء الاختراق والأمان حول العالم',
        badges: ['paid-badge:PAID', 'freemium-badge:FREEMIUM'],
        desc: 'بيرب-سويت (Burp Suite) هي "السكينة السويسري" لكل متخصص في أمن المعلومات. هي مش مجرد أداة فحص، هي بيئة عمل كاملة بتسمحلك "تراقب" و"تعدل" البيانات وهي ماشية بين المتصفح والسيرفر (Proxy). بتستخدم في الهجمات المتقدمة اليدوية، وفيها ميزة الـ Intruder اللي بتقدر تجرب آلاف كلمات السر أو المتغيرات في ثواني. هي الأداة اللي مفيش "Bug Bounty Hunter" يقدر يعيش من غيرها.',
        steps: [
            'التهيئة: بتشغل البرنامج وتضبط المتصفح إنه يبعت البيانات من خلال Burp.',
            'الاعتراض (Intercept): بتوقف الطلب في النص، وتعدل فيه (مثلاً تغير السعر من 100 لـ 1 جنيه!) وتشوف السيرفر هيقبله ولا لأ.',
            'التكرار (Repeater): لو لقيت طلب مثير للاهتمام، بتبعته للـ Repeater عشان تقعد تعدل فيه وتجربه كذا مرة بسرعة.',
            'الفحص الآلي: النسخة الـ Pro فيها ماسح ضوئي عبقري بيكتشف ثغرات معقدة جداً مش أي أداة تانية تقدر تشوفها.'
        ],
        usecase: 'إنت بتختبر "منطق العمل" (Business Logic) بتاع موقع بنكي. بتستخدم Burp عشان تحاول تغير رقم الحساب اللي الفلوس بتتحول ليه في اللحظة اللي بتضغط فيها "تأكيد" عشان تشوف هل السيستم بيراجع البيانات دي ورا المستخدم ولا بيفترض إنها صح.',
        pricing: 'نسخة Community مجانية ومحدودة | نسخة Pro بـ $449 سنوياً',
        downloadLink: 'https://portswigger.net/burp/releases',
        docsLink: 'https://portswigger.net/burp/documentation/desktop'
    },
    {
        cat: 'api', catLabel: 'أدوات اختبار الـ API', catIcon: '🔗', catSub: 'API Testing Tools',
        name: 'SoapUI', logo: '🧼', accentColor: '#ff9f43',
        tagline: 'الأداة العملاقة لاختبار خدمات الـ SOAP و REST المتقدمة',
        badges: ['opensource-badge:OPEN SOURCE', 'freemium-badge:FREEMIUM'],
        desc: 'سواب-يو-آي (SoapUI) هو "الجد الأكبر" لأدوات اختبار الـ API. وبالرغم من قدمه، إلا إنه لسه الأقوى لما تتعامل مع خدمات الـ Web Services القديمة والمعقدة (SOAP). هو أداة شاملة بتقدر تعمل بيها اختبارات وظيفية، اختبارات حمل (Load)، وحتى اختبارات أمان للـ API. لو شغال في مؤسسة ضخمة أو بنك، غالباً هتلاقي SoapUI هو الأداة الأساسية هناك بسبب قوته في التعامل مع البروتوكولات الصعبة.',
        steps: [
            'التحميل: بتنزل نسخة الـ Open Source من الموقع الرسمي.',
            'إنشاء المشروع: بترفع ملف الـ WSDL أو الـ Swagger الخاص بالخدمة، وهو بيبني لك كل الطلبات تلقائياً.',
            'التأكيد (Assertions): بتقدر تضيف شروط معينة للتأكد إن الرد اللي جاي من السيرفر مطابق للمواصفات.',
            'الاختبار التسلسلي: بتقدر تربط كذا طلب ورا بعض عشان تجرب "سيناريو كامل" (زي: إنشاء عميل -> استعلام عن رصيده -> سحب مبلغ).'
        ],
        usecase: 'إنت شغال على نظام ربط مع "مصلحة الضرائب" أو "جهة حكومية" بتستخدم تقنيات قديمة وصعبة (SOAP). SoapUI هي الأداة الوحيدة اللي هتقدر تقرأ ملفاتهم المعقدة وتعرفك إزاي تبعت البيانات وتستلمها صح من غير مشاكل.',
        pricing: 'نسخة مفتوحة المصدر مجانية | نسخة ReadyAPI مدفوعة للميزات الضخمة',
        downloadLink: 'https://www.soapui.org/downloads/soapui/',
        docsLink: 'https://www.soapui.org/docs/'
    },
    {
        cat: 'performance', catLabel: 'أدوات اختبار الأداء', catIcon: '⚡', catSub: 'Performance Testing Tools',
        name: 'Locust', logo: '🦗', accentColor: '#ff5f7e',
        tagline: 'اختبار الحمل باستخدام لغة Python - البساطة والمرونة المطلقة',
        badges: ['opensource-badge:OPEN SOURCE', 'free-badge:FREE'],
        desc: 'لوكاست (Locust) هو "الخيار الأول" لعشاق لغة Python. هو أداة اختبار أداء بتسمحلك تكتب سيناريوهات الاختبار بكود بايثون بسيط. العبقرية فيه هي "توزيع الحمل"؛ بتقدر تشغله على كذا جهاز مع بعض عشان يحاكوا ملايين المستخدمين في وقت واحد. واجهة المستخدم بتاعته (Web Interface) بتعرضلك رسم بياني "لايف" وأنت شغال بيوريك السيرفر بيتعامل إزاي مع الضغط المتزايد.',
        steps: [
            'التثبيت المريح: عن طريق أمر pip install locust.',
            'كتابة السكريبت: بتكتب ملف Python بتعرف فيه "المستخدم" والوظائف اللي هيعملها (مثلاً: يفتح الصفحة الرئيسية، يضيف منتج).',
            'إطلاق السرب: بتشغل الأداة وتفتح المتصفح على عنوان معين عشان تبدأ الهجوم وتحدد عدد المستخدمين ومعدل دخولهم.',
            'المراقبة اللحظية: بتشوف شارتات حية بتوريك الـ Response Time والـ Failure Rate وأنت شغال.'
        ],
        usecase: 'إنت شغال في ستارت-أب (Start-up) سريعة، وعاملين نظام Back-end بلغة Python. عاوزين تختبروا قدرة النظام ده على تحمل 100 ألف مستخدم قبل حملة إعلانية ضخمة. Locust هيخليكم تعملوا ده بسرعة جداً وبكود بايثون نظيف ومعروف للفريق كله.',
        pricing: 'مجاني تماماً ومفتوح المصدر',
        downloadLink: 'https://locust.io/',
        docsLink: 'https://docs.locust.io/'
    }
];

const quizData = [...glossaryData];
