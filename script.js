// ===== APP STATE =====
let currentAppTab = 'glossary';
let currentGlossaryCat = 'all';
let currentToolsCat = 'all';
let currentSearch = '';

const chapterInfo = {
    ch1: { q: '8 أسئلة', k: 'K1=2, K2=6', color: '#7c6fff', emoji: '📘', title: 'Fundamentals of Testing' },
    ch2: { q: '6 أسئلة', k: 'K1=2, K2=4', color: '#4fc3f7', emoji: '📗', title: 'Testing Throughout SDLC' },
    ch3: { q: '4 أسئلة', k: 'K1=2, K2=2', color: '#3de68a', emoji: '📙', title: 'Static Testing' },
    ch4: { q: '11 أسئلة', k: 'K2=6, K3=5', color: '#ff9f43', emoji: '📕', title: 'Test Analysis & Design' },
    ch5: { q: '9 أسئلة', k: 'K1=1, K2=5, K3=3', color: '#ff5f7e', emoji: '📓', title: 'Managing Test Activities' },
    ch6: { q: '2 أسئلة', k: 'K1=1, K2=1', color: '#2dd4bf', emoji: '📔', title: 'Test Tools' },
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initSearch();
    initCategories();
    renderGlossary();
    renderTools();
    initQuiz();
    initModalClose();
});

// ===== TAB LOGIC =====
function initTabs() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
            item.classList.add('active');
            const tabId = item.dataset.tab;
            document.getElementById(tabId).classList.add('active');
            currentAppTab = tabId;
            const controlsWrap = document.querySelector('.controls-wrap');
            if (tabId === 'quiz') {
                controlsWrap.classList.add('hidden-tab');
            } else {
                controlsWrap.classList.remove('hidden-tab');
                document.getElementById('searchInput').placeholder =
                    tabId === 'tools' ? 'ابحث عن أداة...' : 'ابحث عن مصطلح...';
            }
        });
    });

    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const controls = document.querySelector('.controls-wrap');
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
            controls?.classList.add('hidden-scroll');
        } else {
            controls?.classList.remove('hidden-scroll');
        }
        lastScrollY = currentScrollY;
    });
}

// ===== SEARCH =====
function initSearch() {
    document.getElementById('searchInput').addEventListener('input', e => {
        currentSearch = e.target.value.toLowerCase();
        renderGlossary();
        renderTools();
    });
}

// ===== CATEGORIES =====
function initCategories() {
    document.querySelectorAll('#glossary-cats .cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#glossary-cats .cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGlossaryCat = btn.dataset.cat;
            updateChapterInfoBar();
            renderGlossary();
        });
    });

    document.querySelectorAll('#tools .fbtn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#tools .fbtn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentToolsCat = btn.dataset.cat;
            renderTools();
        });
    });
}

function updateChapterInfoBar() {
    const bar = document.getElementById('chapter-info');
    if (!bar) return;
    if (currentGlossaryCat === 'all' || !chapterInfo[currentGlossaryCat]) {
        bar.style.display = 'none';
        return;
    }
    const info = chapterInfo[currentGlossaryCat];
    bar.style.display = 'flex';
    bar.style.borderColor = info.color + '55';
    bar.style.background = info.color + '12';
    bar.innerHTML = `
        <span style="font-size:1.5rem">${info.emoji}</span>
        <div>
            <div style="font-weight:800;color:#fff;font-size:1rem">${info.title}</div>
            <div style="color:var(--text-muted);font-size:0.85rem">الامتحان: <span style="color:${info.color};font-weight:700">${info.q}</span> &nbsp;|&nbsp; مستويات المعرفة: <span style="color:${info.color};font-weight:700">${info.k}</span></div>
        </div>
    `;
}

// ===== GLOSSARY RENDERING =====
function renderGlossary() {
    const container = document.getElementById('glossary-content');
    container.innerHTML = '';

    const filtered = glossaryData.filter(item => {
        if (item.isExamFocus) {
            // Show exam focus cards only when that chapter is selected
            return currentGlossaryCat === item.cat && !currentSearch;
        }
        const matchCat = currentGlossaryCat === 'all' || item.cat === currentGlossaryCat;
        const matchSearch = !currentSearch ||
            item.en.toLowerCase().includes(currentSearch) ||
            item.ar.includes(currentSearch) ||
            item.defEN.toLowerCase().includes(currentSearch) ||
            item.defAR.includes(currentSearch);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<div class="no-results" style="display:block;">لا توجد نتائج — جرّب كلمة أخرى 🔍</div>';
        return;
    }

    filtered.forEach(item => {
        if (item.isExamFocus) {
            renderExamFocusCard(container, item);
        } else {
            renderGlossaryCard(container, item);
        }
    });
}

function renderGlossaryCard(container, item) {
    const card = document.createElement('div');
    card.className = `card t-${item.cat}`;
    card.innerHTML = `
        <div class="card-accent-line"></div>
        <div class="card-top">
            <div class="card-tag-row">
                <span class="card-tag">${item.cat.toUpperCase()}</span>
                ${item.isNew ? '<span class="is-new">✨ NEW</span>' : ''}
            </div>
            <h3>${item.en}</h3>
        </div>
        <div class="card-body">
            <div class="def-block">
                <div class="def-label">📘 Definition</div>
                <div class="def-text-en">${item.defEN}</div>
            </div>
            <div class="def-block-ar">
                <div class="def-label-ar">🇪🇬 الشرح بالعربي</div>
                <div class="def-text-ar">${item.defAR}</div>
            </div>
            <div class="example-block">
                <div class="example-label">💡 Practical Example</div>
                <div class="example-text">${item.example}</div>
            </div>
        </div>`;
    container.appendChild(card);
}

function renderExamFocusCard(container, item) {
    const info = chapterInfo[item.cat] || { color: '#7c6fff' };
    const card = document.createElement('div');
    card.className = 'exam-focus-card';
    card.style.setProperty('--focus-color', info.color);

    // Parse the example field as numbered points
    const points = item.example.split('⑤').join('\n⑤').split('①').join('\n①')
        .split('②').join('\n②').split('③').join('\n③').split('④').join('\n④')
        .split('⑥').join('\n⑥').split('⑦').join('\n⑦').split('⑧').join('\n⑧')
        .split('⑨').join('\n⑨').split('⑩').join('\n⑩').split('⑪').join('\n⑪')
        .split('\n').filter(p => p.trim());

    const pointsHTML = points.map(p => {
        const clean = p.trim();
        if (!clean) return '';
        // Color the circled numbers
        const colored = clean.replace(/([①②③④⑤⑥⑦⑧⑨⑩⑪])/g,
            `<span style="color:${info.color};font-weight:900;font-size:1.1em">$1</span>`);
        return `<div class="focus-point">${colored}</div>`;
    }).join('');

    card.innerHTML = `
        <div class="focus-header">
            <div class="focus-icon">🎯</div>
            <div>
                <div class="focus-title">${item.ar}</div>
                <div class="focus-sub">${item.en}</div>
            </div>
            <div class="focus-badge" style="background:${info.color}22;color:${info.color};border-color:${info.color}44">
                EXAM FOCUS
            </div>
        </div>
        <div class="focus-body">
            <div class="focus-intro">${item.defAR}</div>
            <div class="focus-points">${pointsHTML}</div>
        </div>
    `;
    container.appendChild(card);
}

// ===== TOOLS RENDERING =====
function renderTools() {
    const container = document.getElementById('tools-content');
    container.innerHTML = '';

    const filtered = toolsData.filter(item => {
        const matchCat = currentToolsCat === 'all' || item.cat === currentToolsCat;
        const matchSearch = !currentSearch ||
            item.name.toLowerCase().includes(currentSearch) ||
            item.tagline.toLowerCase().includes(currentSearch) ||
            item.desc.includes(currentSearch);
        return matchCat && matchSearch;
    });

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'tool-card simple-tool-card';
        card.style.setProperty('--accent', item.accentColor);
        card.innerHTML = `
            <div class="accent-bar" style="background:linear-gradient(90deg,${item.accentColor},${item.accentColor}55);height:4px;"></div>
            <div style="padding:24px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100% - 4px);">
                <div style="font-size:3.5rem;margin-bottom:15px;transition:transform 0.3s ease;">${item.logo}</div>
                <div style="font-size:1.4rem;font-weight:800;color:#fff;margin-bottom:8px;">${item.name}</div>
                <div style="font-size:0.95rem;color:var(--text-muted);line-height:1.5;">${item.tagline}</div>
            </div>`;

        card.addEventListener('mouseenter', () => {
            card.style.borderColor = item.accentColor + '99';
            card.style.transform = 'translateY(-5px)';
            card.querySelector('div[style*="font-size:3.5rem"]').style.transform = 'scale(1.1) rotate(5deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '';
            card.style.transform = '';
            card.querySelector('div[style*="font-size:3.5rem"]').style.transform = '';
        });
        card.addEventListener('click', () => showToolModal(item));
        container.appendChild(card);
    });
}

// ===== TOOL MODAL =====
function showToolModal(item) {
    const modal = document.getElementById('tool-modal');
    const modalBody = document.getElementById('tool-modal-body');
    const badgesHTML = item.badges.map(b => {
        const [cls, label] = b.split(':');
        return `<span class="badge-item ${cls}">${label}</span>`;
    }).join('');
    const stepsHTML = item.steps.map((s, idx) => `
        <div class="step">
            <div class="step-num" style="background:${item.accentColor}20;color:${item.accentColor}">${idx + 1}</div>
            <div class="step-text">${s}</div>
        </div>`).join('');
    modalBody.innerHTML = `
        <div class="modal-header" style="text-align:center;border-bottom:1px solid var(--border);padding-bottom:24px;margin-bottom:24px;">
            <div style="font-size:4.5rem;margin-bottom:12px;">${item.logo}</div>
            <h2 style="font-size:2rem;font-weight:800;color:#fff;margin-bottom:8px;">${item.name}</h2>
            <div style="color:var(--text-muted);font-size:1.1rem;margin-bottom:18px;">${item.tagline}</div>
            <div class="tool-badges" style="justify-content:center;gap:8px;">${badgesHTML}</div>
        </div>
        <div class="modal-scroll-area" style="text-align:right;direction:rtl;">
            <div class="section-label">🇪🇬 شرح مفصل</div>
            <div class="desc-ar" style="margin-bottom:28px;">${item.desc}</div>
            <div class="section-label">📋 خطوات الاستخدام</div>
            <div class="use-steps" style="margin-bottom:28px;">${stepsHTML}</div>
            <div class="section-label">💼 مثال عملي</div>
            <div class="use-case-box" style="margin-bottom:35px;border-right-color:${item.accentColor};">
                <div class="use-case-label" style="color:${item.accentColor};">💡 USE CASE</div>
                <div class="use-case-text">${item.usecase}</div>
            </div>
            <div style="display:flex;gap:12px;justify-content:center;">
                <a href="${item.downloadLink}" class="btn-download" target="_blank">⬇️ تحميل / زيارة الموقع</a>
                <a href="${item.docsLink}" class="btn-docs" target="_blank">📚 الشروحات</a>
            </div>
        </div>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function initModalClose() {
    const closeBtn = document.getElementById('close-tool-modal');
    const modal = document.getElementById('tool-modal');
    if (closeBtn) closeBtn.addEventListener('click', () => { modal.classList.remove('active'); document.body.style.overflow = ''; });
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } });
}

// ===== QUIZ LOGIC =====
let quizQuestions = [], currentQuestionIndex = 0, score = 0, missedTerms = [];

function initQuiz() {
    const startBtn = document.getElementById('start-quiz');
    if (startBtn) startBtn.addEventListener('click', startQuiz);
}

function startQuiz() {
    // Filter out exam focus cards from quiz
    const quizPool = glossaryData.filter(item => !item.isExamFocus);
    quizQuestions = [...quizPool].sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    missedTerms = [];
    document.getElementById('quiz-progress-container').style.display = 'block';
    updateQuizUI();
    showQuestion();
}

function updateQuizUI() {
    const progress = (currentQuestionIndex / 10) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('quiz-progress-text').textContent = `السؤال ${currentQuestionIndex + 1} من 10`;
    document.getElementById('quiz-score-text').textContent = `النتيجة: ${score}`;
}

function showQuestion() {
    const container = document.getElementById('quiz-main-content');
    const questionData = quizQuestions[currentQuestionIndex];
    const pool = glossaryData.filter(item => !item.isExamFocus);
    const type = Math.random() > 0.5 ? 1 : 0;
    let questionHTML, correctAns;

    if (type === 0) {
        correctAns = questionData.defEN;
        let options = [correctAns];
        while (options.length < 4) {
            let r = pool[Math.floor(Math.random() * pool.length)].defEN;
            if (!options.includes(r)) options.push(r);
        }
        options.sort(() => Math.random() - 0.5);
        const chInfo = chapterInfo[questionData.cat] || { color: '#7c6fff', title: '' };
        questionHTML = `
            <div class="quiz-chapter-tag" style="background:${chInfo.color}22;color:${chInfo.color};border:1px solid ${chInfo.color}44;display:inline-block;padding:3px 12px;border-radius:20px;font-size:11px;font-family:monospace;margin-bottom:16px;">${questionData.cat.toUpperCase()} — ${chInfo.title}</div>
            <div class="quiz-q-label">ما هو التعريف الصحيح لـ:</div>
            <div class="quiz-q-term">${questionData.en}</div>
            <div class="quiz-options quiz-options-defs">
                ${options.map(opt => {
                    const e = opt.replace(/'/g,"&apos;").replace(/"/g,"&quot;");
                    const c = correctAns.replace(/'/g,"&apos;").replace(/"/g,"&quot;");
                    return `<div class="quiz-option quiz-opt-def" onclick="checkAnswer(this,'${e}','${c}')">${opt}</div>`;
                }).join('')}
            </div>`;
    } else {
        correctAns = questionData.en;
        let options = [correctAns];
        while (options.length < 4) {
            let r = pool[Math.floor(Math.random() * pool.length)].en;
            if (!options.includes(r)) options.push(r);
        }
        options.sort(() => Math.random() - 0.5);
        questionHTML = `
            <div class="quiz-q-label">أي مصطلح يطابق هذا التعريف؟</div>
            <div class="quiz-q-def">${questionData.defEN}</div>
            <div class="quiz-options quiz-options-terms">
                ${options.map(opt => {
                    const e = opt.replace(/'/g,"&apos;").replace(/"/g,"&quot;");
                    const c = correctAns.replace(/'/g,"&apos;").replace(/"/g,"&quot;");
                    return `<div class="quiz-option quiz-opt-term" onclick="checkAnswer(this,'${e}','${c}')">${opt}</div>`;
                }).join('')}
            </div>`;
    }

    container.innerHTML = `<div class="quiz-active-wrap" style="animation:fadeUp 0.4s ease both;">${questionHTML}<div id="quiz-feedback" style="min-height:80px;text-align:center;"></div></div>`;
}

function checkAnswer(element, selected, correct) {
    document.querySelectorAll('.quiz-option').forEach(opt => opt.style.pointerEvents = 'none');
    const feedback = document.getElementById('quiz-feedback');
    const questionData = quizQuestions[currentQuestionIndex];

    if (selected === correct) {
        element.classList.add('correct');
        score++;
        feedback.innerHTML = `
            <div style="color:var(--green);margin-top:20px;font-weight:700;font-size:1.2rem;">صح! 🎉 +1</div>
            <div class="quiz-explanation-box">
                <span class="exp-label">💡 الشرح بالعربي</span>
                <div class="exp-text">${questionData.defAR}</div>
            </div>`;
    } else {
        element.classList.add('incorrect');
        document.querySelectorAll('.quiz-option').forEach(opt => {
            if (opt.textContent.trim() === correct.trim()) opt.classList.add('correct');
        });
        missedTerms.push(questionData);
        feedback.innerHTML = `
            <div style="color:var(--red);margin-top:20px;font-weight:700;font-size:1.1rem;">للأسف غلط. الإجابة الصح: <em style="color:#fff;">${correct}</em></div>
            <div class="quiz-explanation-box" style="border-right:4px solid var(--red);">
                <span class="exp-label">📖 الشرح</span>
                <div class="exp-text">${questionData.defAR}</div>
            </div>`;
    }

    updateQuizUI();
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < 10) showQuestion();
        else showFinalScore();
    }, 5000);
}

function showFinalScore() {
    document.getElementById('progress-fill').style.width = '100%';
    const container = document.getElementById('quiz-main-content');
    let emoji = '📚', color = 'var(--accent)', message = 'أداء جيد، راجع المصطلحات اللي فاتتك.';
    if (score === 10) { emoji = '🏆'; color = 'var(--green)'; message = 'ممتاز! إنت خبير ISTQB حقيقي! 🎓'; }
    else if (score >= 7) { emoji = '🌟'; color = '#ff9f43'; message = 'عاش يا بطل! أداء عالي جداً 🔥'; }
    else if (score < 5) { emoji = '💡'; color = 'var(--red)'; message = 'محتاج تراجع أكثر — اقرأ بطاقات التركيز لكل فصل.'; }

    const reviewHTML = missedTerms.length > 0 ? `
        <div style="margin-top:30px;text-align:right;">
            <h3 style="font-size:1.1rem;color:var(--red);margin-bottom:15px;">🔍 راجع هذه المصطلحات:</h3>
            <div class="review-list">
                ${missedTerms.map(item => `
                    <div class="review-item">
                        <span class="review-term">${item.en}</span>
                        <span style="font-size:11px;color:var(--text-muted);font-family:monospace">${item.cat.toUpperCase()}</span>
                    </div>`).join('')}
            </div>
        </div>` : '';

    container.innerHTML = `
        <div class="mastery-score-card" style="animation:fadeUp 0.6s ease both;">
            <div style="font-size:5rem;margin-bottom:10px;">${emoji}</div>
            <h2 style="font-size:2.2rem;margin-bottom:8px;">انتهى الاختبار!</h2>
            <div style="font-size:1.8rem;margin-bottom:20px;">درجتك: <span style="color:${color};font-weight:900;">${score}/10</span></div>
            <p style="color:var(--text-muted);font-size:1.1rem;margin-bottom:30px;line-height:1.6;">${message}</p>
            ${reviewHTML}
            <div style="display:flex;gap:12px;justify-content:center;margin-top:40px;">
                <button class="quiz-btn" onclick="startQuiz()" style="flex:1;">جرب مرة تانية 🔄</button>
            </div>
        </div>`;
}
