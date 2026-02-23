// ===== APP STATE =====
let currentAppTab = 'glossary';
let currentGlossaryCat = 'all';
let currentToolsCat = 'all';
let currentSearch = '';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initSearch();
    initCategories();
    renderGlossary();
    renderTools();
    initQuiz();
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

            const searchInput = document.getElementById('searchInput');
            const controlsWrap = document.querySelector('.controls-wrap');
            if (tabId === 'glossary') {
                searchInput.placeholder = "ابحث عن مصطلح... Search term...";
                controlsWrap.classList.remove('hidden-tab');
            } else if (tabId === 'tools') {
                searchInput.placeholder = "ابحث عن أداة... Search tool...";
                controlsWrap.classList.remove('hidden-tab');
            } else {
                controlsWrap.classList.add('hidden-tab'); // Hide search on Quiz tab
            }
        });
    });


}

// ===== SEARCH LOGIC =====
function initSearch() {
    document.getElementById('searchInput').addEventListener('input', e => {
        currentSearch = e.target.value.toLowerCase();
        renderGlossary();
        renderTools();
    });
}

// ===== CATEGORY LOGIC =====
function initCategories() {
    // Glossary Categories
    document.querySelectorAll('#glossary-cats .cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#glossary-cats .cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGlossaryCat = btn.dataset.cat;
            renderGlossary();
        });
    });

    // Tools Categories
    document.querySelectorAll('#tools .fbtn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#tools .fbtn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentToolsCat = btn.dataset.cat;
            renderTools();
        });
    });
}

// ===== RENDERING GLOSSARY =====
function renderGlossary() {
    const container = document.getElementById('glossary-content');
    container.innerHTML = '';

    const filtered = glossaryData.filter(item => {
        const matchCat = currentGlossaryCat === 'all' || item.cat === currentGlossaryCat;
        const matchSearch = !currentSearch || item.en.toLowerCase().includes(currentSearch) || item.ar.includes(currentSearch);
        return matchCat && matchSearch;
    });

    filtered.forEach(item => {
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
    });
}

// ===== RENDERING TOOLS =====
function renderTools() {
    const container = document.getElementById('tools-content');
    container.innerHTML = '';

    const filtered = toolsData.filter(item => {
        const matchCat = currentToolsCat === 'all' || item.cat === currentToolsCat;
        const matchSearch = !currentSearch || item.name.toLowerCase().includes(currentSearch) || item.tagline.toLowerCase().includes(currentSearch) || item.desc.includes(currentSearch);
        return matchCat && matchSearch;
    });

    const stepColors = { management: '#4fc3f7', automation: '#3de68a', api: '#ff9f43', performance: '#ff5f7e', security: '#a855f7', mobile: '#7c6fff', static: '#f9ca24', reporting: '#f472b6' };

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'tool-card simple-tool-card';
        card.style.setProperty('--accent', item.accentColor);

        // Simple Card Content
        card.innerHTML = `
            <div class="accent-bar" style="background:linear-gradient(90deg,${item.accentColor},${item.accentColor}55); height: 4px;"></div>
            <div class="simple-card-body" style="padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                <div class="tool-logo-large" style="font-size: 3.5rem; margin-bottom: 15px; line-height: 1; transition: transform 0.3s ease;">${item.logo}</div>
                <div class="tool-name-large" style="font-size: 1.4rem; font-weight: 800; color: #fff; margin-bottom: 8px;">${item.name}</div>
                <div class="tool-tagline-short" style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.5;">${item.tagline}</div>
            </div>
        `;

        card.addEventListener('mouseenter', () => {
            card.style.borderColor = item.accentColor + '99';
            card.style.transform = 'translateY(-5px)';
            let logoEl = card.querySelector('.tool-logo-large');
            if (logoEl) logoEl.style.transform = 'scale(1.1) rotate(5deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '';
            card.style.transform = 'translateY(0)';
            let logoEl = card.querySelector('.tool-logo-large');
            if (logoEl) logoEl.style.transform = 'scale(1) rotate(0deg)';
        });

        card.addEventListener('click', () => {
            showToolModal(item, stepColors[item.cat] || '#7c6fff');
        });

        container.appendChild(card);
    });
}

// ===== TOOL MODAL LOGIC =====
function showToolModal(item, stepColor) {
    const modal = document.getElementById('tool-modal');
    const modalBody = document.getElementById('tool-modal-body');

    const badgesHTML = item.badges.map(b => {
        const [cls, label] = b.split(':');
        return `<span class="badge-item ${cls}">${label}</span>`;
    }).join('');

    const stepsHTML = item.steps.map((s, idx) => `
        <div class="step">
            <div class="step-num" style="background:${stepColor}20;color:${stepColor}">${idx + 1}</div>
            <div class="step-text">${s}</div>
        </div>`).join('');

    modalBody.innerHTML = `
        <div class="modal-header" style="text-align: center; border-bottom: 1px solid var(--border); padding-bottom: 24px; margin-bottom: 24px;">
            <div style="font-size: 4.5rem; margin-bottom: 12px; line-height: 1;">${item.logo}</div>
            <h2 style="font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 8px;">${item.name}</h2>
            <div style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 18px; line-height: 1.6;">${item.tagline}</div>
            <div class="tool-badges" style="justify-content: center; gap: 8px;">${badgesHTML}</div>
        </div>
        
        <div class="modal-scroll-area" style="text-align: right; direction: rtl;">
            <div class="section-label" style="font-size: 12px; margin-top: 0;">🇪🇬 شرح مفصل للأداة</div>
            <div class="desc-ar" style="font-size: 15px; margin-bottom: 28px;">${item.desc}</div>
            
            <div class="section-label" style="font-size: 12px;">📋 خطوات الاستخدام أو التسجيل</div>
            <div class="use-steps" style="margin-bottom: 28px;">${stepsHTML}</div>

            <div class="section-label" style="font-size: 12px;">💼 إمتى أستخدمها؟ (مثال عملي)</div>
            <div class="use-case-box" style="margin-bottom: 35px; border-right-color: ${stepColor};">
                <div class="use-case-label" style="font-size: 11px; color: ${stepColor};">💡 USE CASE</div>
                <div class="use-case-text" style="font-size: 14.5px;">${item.usecase}</div>
            </div>
            
            <div class="card-footer" style="padding: 0; justify-content: center; display: flex; flex-direction: row-reverse; gap: 12px;">
                <a href="${item.downloadLink}" class="btn-download" target="_blank" style="max-width: 280px; font-size: 15px; padding: 12px 20px;">⬇️ تحميل / زيارة الموقع</a>
                <a href="${item.docsLink}" class="btn-docs" target="_blank" style="max-width: 180px; font-size: 14px; padding: 12px 20px;">📚 الشروحات (Docs)</a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent bg scroll
}

document.addEventListener('DOMContentLoaded', () => {
    // Add close listener after init
    setTimeout(() => {
        const closeModalBtn = document.getElementById('close-tool-modal');
        const modal = document.getElementById('tool-modal');
        if (closeModalBtn && modal) {
            closeModalBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
            // Click outside to close
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }, 500);
});


// ===== QUIZ LOGIC =====
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 10;
let missedTerms = []; // TRACK MISSED TERMS

function initQuiz() {
    const startBtn = document.getElementById('start-quiz');
    if (startBtn) startBtn.addEventListener('click', startQuiz);
}

function startQuiz() {
    // Shuffle and pick 10 questions
    quizQuestions = [...glossaryData].sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);
    currentQuestionIndex = 0;
    score = 0;
    missedTerms = []; // Reset missed terms

    document.getElementById('quiz-progress-container').style.display = 'block';
    updateQuizUI();
    showQuestion();
}

function updateQuizUI() {
    const progress = (currentQuestionIndex / TOTAL_QUESTIONS) * 100;
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('quiz-progress-text');
    const scoreText = document.getElementById('quiz-score-text');

    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `Question ${currentQuestionIndex + 1} of ${TOTAL_QUESTIONS}`;
    if (scoreText) scoreText.textContent = `Score: ${score}`;
}

function showQuestion() {
    const container = document.getElementById('quiz-main-content');
    const questionData = quizQuestions[currentQuestionIndex];

    // type 0: show term → pick correct definition
    // type 1: show definition → pick correct term name
    const type = Math.random() > 0.5 ? 1 : 0;

    let questionHTML, correctAns;

    if (type === 0) {
        // Show TERM → pick right DEFINITION
        correctAns = questionData.defEN;
        let options = [correctAns];
        while (options.length < 4) {
            let r = glossaryData[Math.floor(Math.random() * glossaryData.length)].defEN;
            if (!options.includes(r)) options.push(r);
        }
        options.sort(() => Math.random() - 0.5);
        questionHTML = `
            <div class="quiz-q-label">What is the correct definition of:</div>
            <div class="quiz-q-term">${questionData.en}</div>
            <div class="quiz-options quiz-options-defs">
                ${options.map(opt => {
            const cleanOpt = opt.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
            const cleanCorrect = correctAns.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
            return `<div class="quiz-option quiz-opt-def" onclick="checkAnswer(this, '${cleanOpt}', '${cleanCorrect}')">${opt}</div>`;
        }).join('')}
            </div>`;
    } else {
        // Show DEFINITION → pick right TERM NAME
        correctAns = questionData.en;
        let options = [correctAns];
        while (options.length < 4) {
            let r = glossaryData[Math.floor(Math.random() * glossaryData.length)].en;
            if (!options.includes(r)) options.push(r);
        }
        options.sort(() => Math.random() - 0.5);
        questionHTML = `
            <div class="quiz-q-label">Which term matches this definition?</div>
            <div class="quiz-q-def">${questionData.defEN}</div>
            <div class="quiz-options quiz-options-terms">
                ${options.map(opt => {
            const cleanOpt = opt.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
            const cleanCorrect = correctAns.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
            return `<div class="quiz-option quiz-opt-term" onclick="checkAnswer(this, '${cleanOpt}', '${cleanCorrect}')">${opt}</div>`;
        }).join('')}
            </div>`;
    }


    container.innerHTML = `
        <div class="quiz-active-wrap" style="animation: fadeUp 0.4s ease both;">
            ${questionHTML}
            <div id="quiz-feedback" style="min-height: 80px; text-align: center;"></div>
        </div>`;
}

function checkAnswer(element, selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');

    const feedback = document.getElementById('quiz-feedback');
    const questionData = quizQuestions[currentQuestionIndex];

    // Find the term in glossary to get full data for explanation
    const termData = glossaryData.find(t => t.en === (selected === correct ? selected : correct) || t.en === questionData.en);

    if (selected === correct) {
        element.classList.add('correct');
        score++;
        feedback.innerHTML = `
            <div style="color:var(--green); margin-top:20px; font-weight:700; font-size:1.2rem; animation: pop 0.3s ease;">صح! إجابة عبقرية 🎉 +1</div>
            <div class="quiz-explanation-box">
                <span class="exp-label">💡 ليه دي الإجابة الصح؟</span>
                <div class="exp-text">${termData ? termData.ar : 'تعريف دقيق للمصطلح'}</div>
            </div>`;
    } else {
        element.classList.add('incorrect');
        options.forEach(opt => { if (opt.textContent.trim() === correct.trim()) opt.classList.add('correct'); });

        // Track missed term
        missedTerms.push(questionData);

        feedback.innerHTML = `
            <div style="color:var(--red); margin-top:20px; font-weight:700; font-size:1.1rem; animation: shake 0.4s ease;">للأسف غلط. الإجابة الصح هي: <br><em style="color:#fff;opacity:0.85">${correct}</em></div>
            <div class="quiz-explanation-box" style="border-right: 4px solid var(--red);">
                <span class="exp-label">📖 شرح علمي للمصطلح</span>
                <div class="exp-text">${termData ? termData.ar : 'راجع القاموس لهذا المصطلح'}</div>
            </div>`;
    }

    updateQuizUI();

    // Longer timeout to let user read the explanation
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            showQuestion();
        } else {
            showFinalScore();
        }
    }, 5000); // 5 seconds to read
}

function showFinalScore() {
    document.getElementById('progress-fill').style.width = `100%`;
    const container = document.getElementById('quiz-main-content');

    let message = "أداء جيد، محتاج شوية تركيز وتراجع المصطلحات.";
    let emoji = "📚";
    let color = "var(--accent)";

    if (score === TOTAL_QUESTIONS) {
        message = "ممتاز! إنت الآن خبير ISTQB معتمد! 🎓";
        emoji = "🏆";
        color = "var(--green)";
    }
    else if (score >= 7) {
        message = "عاش يا بطل! أداءك عالي جداً 🔥";
        emoji = "🌟";
        color = "#ff9f43";
    }
    else if (score < 5) {
        message = "محتاج تراجع القاموس وتجرب تاني، الموضوع سهل.";
        emoji = "💡";
        color = "var(--red)";
    }

    let reviewHTML = "";
    if (missedTerms.length > 0) {
        reviewHTML = `
            <div style="margin-top: 30px; text-align: right;">
                <h3 style="font-size: 1.1rem; color: var(--red); margin-bottom: 15px;">🔍 مصطلحات محتاج تراجعها (قوي نفسك فيها):</h3>
                <div class="review-list">
                    ${missedTerms.map(item => `
                        <div class="review-item">
                            <span class="review-term">${item.en}</span>
                            <button class="review-btn" onclick="goToReview('${item.en}')">ذاكره الآن 🔗</button>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    }

    container.innerHTML = `
        <div class="mastery-score-card" style="animation: fadeUp 0.6s ease both;">
            <div style="font-size: 5rem; margin-bottom: 10px;">${emoji}</div>
            <h2 style="font-size: 2.2rem; margin-bottom: 8px;">انتهى الاختبار!</h2>
            <div style="font-size: 1.8rem; margin-bottom: 20px;">درجتك: <span style="color:${color}; font-weight:900;">${score}/${TOTAL_QUESTIONS}</span></div>
            <p style="color:var(--text-muted); font-size:1.1rem; margin-bottom: 30px; line-height:1.6;">${message}</p>
            
            ${reviewHTML}

            <div style="display:flex; gap:12px; justify-content:center; margin-top:40px;">
                <button class="quiz-btn" onclick="startQuiz()" style="flex:1;">جرب مرة تانية 🔄</button>
                <button class="quiz-btn" onclick="switchTab('glossary')" style="flex:1; background:var(--surface3); border:1px solid var(--border);">العودة للقاموس 📖</button>
            </div>
        </div>`;
}

function goToReview(term) {
    switchTab('glossary');
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = term;
        // Trigger search
        const event = new Event('input');
        searchInput.dispatchEvent(event);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
