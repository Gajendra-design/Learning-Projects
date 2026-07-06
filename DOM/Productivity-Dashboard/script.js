// --- CENTRAL APPLICATION CONTROLLER ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initClockAndBackground();
    initNavigation();
    initTodoList();
    initDailyPlanner();
    initMotivationQuote();
    initPomodoroTimer();
    initWeatherWidget();
    initDailyGoals();
});

// --- NAVIGATION SYSTEM ---
function initNavigation() {
    const cards = document.querySelectorAll('.feature-card');
    const backButtons = document.querySelectorAll('.back-btn');
    const homeView = document.getElementById('dashboard-home');
    const featureViews = document.querySelectorAll('.feature-view');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            homeView.classList.add('hidden');
            featureViews.forEach(view => {
                if(view.id === targetId) {
                    view.classList.add('active');
                } else {
                    view.classList.remove('active');
                }
            });
        });
    });

    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            featureViews.forEach(view => view.classList.remove('active'));
            homeView.classList.remove('hidden');
        });
    });
}

// --- DATE, LIVE TIME & DYNAMIC BACKGROUNDS ---
function initClockAndBackground() {
    const clockEl = document.getElementById('live-clock');
    const bodyEl = document.body;

    function updateTimeAndContext() {
        const now = new Date();
        
        // Time & date formatting
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const dateStr = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
        clockEl.textContent = `${dateStr} • ${timeStr}`;

        // Dynamic Background context based on hours
        const hour = now.getHours();
        bodyEl.classList.remove('from-slate-100', 'to-slate-200', 'from-amber-50', 'to-orange-100', 'from-sky-50', 'to-blue-100', 'from-indigo-950', 'to-slate-900');
        
        if (hour >= 5 && hour < 12) {
            // Morning Theme
            bodyEl.classList.add('from-amber-50', 'to-orange-100');
        } else if (hour >= 12 && hour < 17) {
            // Afternoon Theme
            bodyEl.classList.add('from-sky-50', 'to-blue-100');
        } else {
            // Evening/Night Fallback Default
            bodyEl.classList.add('from-slate-100', 'to-slate-200');
        }
    }

    updateTimeAndContext();
    setInterval(updateTimeAndContext, 1000);
}

// --- THEME SWITCHER (LIGHT / DARK SYSTEM) ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') html.classList.add('dark');

    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// --- TODO LIST MODULE (EVENT DELEGATION & STORAGE) ---
function initTodoList() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const listContainer = document.getElementById('todo-list');
    
    let todos = JSON.parse(localStorage.getItem('dashboard-todos')) || [];

    function saveAndRender() {
        localStorage.setItem('dashboard-todos', JSON.stringify(todos));
        listContainer.innerHTML = todos.length ? '' : `<p class="text-sm text-slate-400 text-center py-6">No tasks yet. Enjoy your day!</p>`;
        
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `flex items-center justify-between py-3 gap-2 group border-b border-slate-100 dark:border-slate-700/50 ${todo.completed ? 'opacity-60' : ''}`;
            li.innerHTML = `
                <div class="flex items-center gap-3 flex-1 min-w-0">
                    <button class="toggle-complete text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <i class="${todo.completed ? 'fa-solid fa-circle-check text-indigo-600 dark:text-indigo-400' : 'fa-regular fa-circle'} text-lg"></i>
                    </button>
                    <span class="text-sm truncate ${todo.completed ? 'line-through text-slate-400' : ''} ${todo.important ? 'font-bold text-orange-600 dark:text-orange-400' : ''}">${todo.text}</span>
                </div>
                <div class="flex items-center gap-1">
                    <button class="toggle-important p-1.5 text-slate-400 hover:text-orange-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                        <i class="fa-star ${todo.important ? 'fa-solid text-orange-500' : 'fa-regular'}"></i>
                    </button>
                    <button class="delete-todo p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            `;

            // Event Hooks
            li.querySelector('.toggle-complete').addEventListener('click', () => {
                todo.completed = !todo.completed;
                saveAndRender();
            });
            li.querySelector('.toggle-important').addEventListener('click', () => {
                todo.important = !todo.important;
                saveAndRender();
            });
            li.querySelector('.delete-todo').addEventListener('click', () => {
                todos = todos.filter(t => t.id !== todo.id);
                saveAndRender();
            });

            listContainer.appendChild(li);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if(!text) return;

        todos.push({ id: Date.now(), text, completed: false, important: false });
        input.value = '';
        saveAndRender();
    });

    saveAndRender();
}

// --- HOURLY DAILY PLANNER MODULE ---
function initDailyPlanner() {
    const slotsContainer = document.getElementById('planner-slots');
    const baseHours = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ];

    let plannerData = JSON.parse(localStorage.getItem('dashboard-planner')) || {};

    baseHours.forEach(hour => {
        const block = document.createElement('div');
        block.className = "flex items-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 transition-all";
        block.innerHTML = `
            <div class="w-24 px-3 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 border-r border-slate-200 dark:border-slate-800 select-none">${hour}</div>
            <input type="text" value="${plannerData[hour] || ''}" placeholder="No commitment scheduled" class="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none dark:text-slate-100">
        `;

        block.querySelector('input').addEventListener('input', (e) => {
            plannerData[hour] = e.target.value;
            localStorage.setItem('dashboard-planner', JSON.stringify(plannerData));
        });

        slotsContainer.appendChild(block);
    });
}

// --- LIVE QUOTES (FETCH API INTERACTIVE SYSTEM) ---
function initMotivationQuote() {
    const quoteTxt = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const refreshBtn = document.getElementById('refresh-quote');

    async function fetchQuote() {
        quoteTxt.textContent = "Summoning dynamic inspiration...";
        quoteAuthor.textContent = "";
        try {
            // Using a reliable open API route (Quotable fallback style)
            const response = await fetch('https://api.allorigins.win/raw?url=https://zenquotes.io/api/random');
            if(!response.ok) throw new Error();
            const data = await response.json();
            quoteTxt.textContent = `"${data[0].q}"`;
            quoteAuthor.textContent = `— ${data[0].a}`;
        } catch {
            quoteTxt.textContent = `"Action is the foundational key to all success."`;
            quoteAuthor.textContent = "— Pablo Picasso (Fallback)";
        }
    }

    refreshBtn.addEventListener('click', fetchQuote);
}

// --- POMODORO TIMER SPRINT CONTROLLER ---
function initPomodoroTimer() {
    const display = document.getElementById('pomodoro-display');
    const startBtn = document.getElementById('pomodoro-start');
    const pauseBtn = document.getElementById('pomodoro-pause');
    const resetBtn = document.getElementById('pomodoro-reset');
    const statusLabel = document.getElementById('pomodoro-session');

    let timerInterval = null;
    let timeLeft = 25 * 60; // 25 Minutes Default
    let isWorkSession = true;

    function updateDisplay() {
        const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const secs = (timeLeft % 60).toString().padStart(2, '0');
        display.textContent = `${mins}:${secs}`;
    }

    function startTimer() {
        if (timerInterval) return;
        startBtn.classList.add('hidden');
        pauseBtn.classList.remove('hidden');

        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert(isWorkSession ? "Work session done! Take a break." : "Break over! Time to get back to work.");
                // Toggle Session Structure
                isWorkSession = !isWorkSession;
                timeLeft = (isWorkSession ? 25 : 5) * 60;
                statusLabel.textContent = isWorkSession ? "Work Session" : "Break Time";
                statusLabel.className = isWorkSession 
                    ? "inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mb-6"
                    : "inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6";
                
                startBtn.classList.remove('hidden');
                pauseBtn.classList.add('hidden');
                updateDisplay();
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        pauseBtn.classList.add('hidden');
        startBtn.classList.remove('hidden');
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        isWorkSession = true;
        timeLeft = 25 * 60;
        statusLabel.textContent = "Work Session";
        statusLabel.className = "inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mb-6";
        pauseBtn.classList.add('hidden');
        startBtn.classList.remove('hidden');
        updateDisplay();
    }

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
}

// --- DYNAMIC LIVE WEATHER COMPONENT ---
function initWeatherWidget() {
    const tempEl = document.getElementById('weather-temp');
    const descEl = document.getElementById('weather-desc');
    const iconEl = document.getElementById('weather-icon');

    // Default static city setup or dynamic geo location check
    async function fetchWeather() {
        try {
            // Using a free, keyless route framework or fallbacks for simplicity
            const res = await fetch('https://wttr.in/Jaipur?format=j1');
            if(!res.ok) throw new Error();
            const data = await res.json();
            
            const current = data.current_condition[0];
            tempEl.textContent = `${current.temp_C}°C`;
            descEl.textContent = `| ${current.weatherDesc[0].value}`;
        } catch {
            tempEl.textContent = "28°C";
            descEl.textContent = "| Clear Sky (Fallback)";
        }
    }
    fetchWeather();
}

// --- DAILY GOALS & OVERALL METRIC HARNESS ---
function initDailyGoals() {
    const form = document.getElementById('goal-form');
    const input = document.getElementById('goal-input');
    const goalsList = document.getElementById('goals-list');
    
    let goals = JSON.parse(localStorage.getItem('dashboard-goals')) || [];

    function updateMetrics() {
        const total = goals.length;
        const completed = goals.filter(g => g.completed).length;
        
        // Update texts on Home Dashboard Summary Card
        document.getElementById('goals-progress-text').textContent = `${completed} of ${total} completed`;
        const percentage = total === 0 ? 0 : (completed / total) * 100;
        document.getElementById('goals-progress-bar').style.width = `${percentage}%`;
    }

    function saveAndRenderGoals() {
        localStorage.setItem('dashboard-goals', JSON.stringify(goals));
        goalsList.innerHTML = goals.length ? '' : `<p class="text-sm text-slate-400 text-center py-6">Set some primary macro-goals for today.</p>`;

        goals.forEach(goal => {
            const div = document.createElement('div');
            div.className = `flex items-center justify-between p-3 rounded-xl border ${goal.completed ? 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'} transition-all`;
            div.innerHTML = `
                <label class="flex items-center gap-3 flex-1 cursor-pointer select-none">
                    <input type="checkbox" ${goal.completed ? 'checked' : ''} class="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-slate-300">
                    <span class="text-sm font-medium ${goal.completed ? 'line-through text-slate-400' : ''}">${goal.text}</span>
                </label>
                <button class="delete-goal text-slate-400 hover:text-rose-500 p-1"><i class="fa-regular fa-trash-can"></i></button>
            `;

            div.querySelector('input').addEventListener('change', () => {
                goal.completed = !goal.completed;
                saveAndRenderGoals();
            });

            div.querySelector('.delete-goal').addEventListener('click', () => {
                goals = goals.filter(g => g.id !== goal.id);
                saveAndRenderGoals();
            });

            goalsList.appendChild(div);
        });

        updateMetrics();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if(!text) return;

        goals.push({ id: Date.now(), text, completed: false });
        input.value = '';
        saveAndRenderGoals();
    });

    saveAndRenderGoals();
}