 let transactions = [];
        let activeFilter = 'all';
        let systemChartInstance = null;
        let userProfile = { name: 'User', currency: 'USD', darkMode: false };
        let mockAuthenticated = true;

        // Currency Format Definition Object Matrix mapping symbols
        const currencySymbols = { USD: '$', EUR: '€', GBP: '£', INR: '₹', JPY: '¥' };

        // Lifecycle Hooks On Boot Verification Runtime
        window.addEventListener('DOMContentLoaded', () => {
            initializeSystemState();
            masterRenderRefresh();
        });

        function initializeSystemState() {
            // Read profile setup attributes or set fallbacks
            const storedProfile = localStorage.getItem('fintrack_profile');
            if (storedProfile) {
                userProfile = JSON.parse(storedProfile);
            }
            // Sync UI toggle with local memory metrics
            document.getElementById('settings-name').value = userProfile.name;
            document.getElementById('settings-currency').value = userProfile.currency;
            document.getElementById('settings-darkmode').checked = userProfile.darkMode;
            
            if (userProfile.darkMode) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }

            // Sync transaction registry lists array from dynamic localized storage keys
            const storedTransactions = localStorage.getItem('fintrack_transactions');
            if (storedTransactions) {
                transactions = JSON.parse(storedTransactions);
            }
        }

        // View Routing Layer Component Hiding Logic Engine
        function showPage(pageId) {
            document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            
            document.getElementById(`section-${pageId}`).classList.add('active');
            document.getElementById(`link-${pageId}`).classList.add('active');
        }

        // Dynamic Format Mapping Conversions Component Tool
        function formatMoney(value) {
            const symbol = currencySymbols[userProfile.currency] || '$';
            return `${symbol}${parseFloat(value).toFixed(2)}`;
        }

        // Processing Runtime Matrix Engine for Dynamic Global Calculations
        function masterRenderRefresh() {
            document.getElementById('welcome-msg').innerText = `Welcome Back, ${userProfile.name}!`;
            
            let totalIncome = 0;
            let totalExpense = 0;

            transactions.forEach(t => {
                const amt = parseFloat(t.amount);
                if (t.type === 'income') totalIncome += amt;
                if (t.type === 'expense') totalExpense += amt;
            });

            const totalBalance = totalIncome - totalExpense;

            // Paint Card Elements on Screen
            document.getElementById('val-balance').innerText = formatMoney(totalBalance);
            document.getElementById('val-income').innerText = formatMoney(totalIncome);
            document.getElementById('val-expense').innerText = formatMoney(totalExpense);
            document.getElementById('val-count').innerText = transactions.length;

            renderTableDataView();
            renderChartVisualRepresentation();
        }

        // Dynamic Filtering Array Management and Dom Inject Engine
        function setFilter(filterType) {
            activeFilter = filterType;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`filter-${filterType}`).classList.add('active');
            renderTableDataView();
        }

        function renderTableDataView() {
            const tableBody = document.getElementById('transaction-rows');
            tableBody.innerHTML = '';

            const filteredData = transactions.filter(t => {
                if (activeFilter === 'all') return true;
                return t.type === activeFilter;
            });

            if (filteredData.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No ledger records mapped matching criteria.</td></tr>`;
                return;
            }

            // Sort newest first by date string
            filteredData.sort((a,b) => new Date(b.date) - new Date(a.date));

            filteredData.forEach(t => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${t.date}</td>
                    <td>${escapeHtml(t.description)}</td>
                    <td><span style="font-size: 0.85em; opacity: 0.85;">📂</span> ${t.category}</td>
                    <td class="${t.type === 'income' ? 'amt-income' : 'amt-expense'}">
                        ${t.type === 'income' ? '+' : '-'}${formatMoney(t.amount)}
                    </td>
                    <td>
                        <button class="btn-delete" onclick="deleteTransaction(${t.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(tr);
            });
        }

        // ChartJS Logic Framework Instance Lifecycles management implementation details
        function renderChartVisualRepresentation() {
            const ctx = document.getElementById('cashFlowChart').getContext('2d');
            
            if (systemChartInstance) {
                systemChartInstance.destroy();
            }

            // Group totals by transaction date strings map
            const structureMap = {};
            transactions.forEach(t => {
                if (!structureMap[t.date]) {
                    structureMap[t.date] = { income: 0, expense: 0 };
                }
                structureMap[t.date][t.type] += parseFloat(t.amount);
            });

            // Extract values and sort correctly chronologically array mapping
            const sortedDates = Object.keys(structureMap).sort((a,b) => new Date(a) - new Date(b));
            const incomeDatasets = [];
            const expenseDatasets = [];

            sortedDates.forEach(d => {
                incomeDatasets.push(structureMap[d].income);
                expenseDatasets.push(structureMap[d].expense);
            });

            // Resolve color configuration depending on active root classes variables theme states
            const isDarkModeActive = document.body.classList.contains('dark');
            const gridAndTextColors = isDarkModeActive ? '#94a3b8' : '#475569';

            systemChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: sortedDates,
                    datasets: [
                        {
                            label: 'Income Flows',
                            data: incomeDatasets,
                            backgroundColor: '#10b981',
                            borderRadius: 4
                        },
                        {
                            label: 'Expense Flows',
                            data: expenseDatasets,
                            backgroundColor: '#ef4444',
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: gridAndTextColors } }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { color: gridAndTextColors } },
                        y: { grid: { color: isDarkModeActive ? '#334155' : '#e2e8f0' }, ticks: { color: gridAndTextColors } }
                    }
                }
            });
        }

        // Overlay Modal Operations Methods Core Logic Functions
        function openModal() {
            document.getElementById('tx-date').value = new Date().toISOString().split('T')[0];
            document.getElementById('transaction-modal').classList.add('open');
        }

        function closeModal() {
            document.getElementById('transaction-form').reset();
            document.getElementById('transaction-modal').classList.remove('open');
        }

        function closeModalViaOverlay(event) {
            if (event.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        }

        // Form Submit Handler Middleware Engine Flow Data
        function handleFormSubmission(e) {
            e.preventDefault();

            const type = document.getElementById('tx-type').value;
            const description = document.getElementById('tx-desc').value.trim();
            const amount = document.getElementById('tx-amount').value;
            const date = document.getElementById('tx-date').value;
            const category = document.getElementById('tx-category').value;

            if (!type || !description || !amount || !date || !category) {
                alert('Verification process failed. Ensure all data structure cells are completed.');
                return;
            }

            const newTxObject = {
                id: Date.now(), // Generate unique processing id via timestamp
                type,
                description,
                amount: parseFloat(amount),
                date,
                category
            };

            transactions.push(newTxObject);
            persistTransactionsData();
            
            closeModal();
            masterRenderRefresh();
        }

        // Mutation Array Removals Tracking Modules Data
        function deleteTransaction(id) {
            transactions = transactions.filter(t => t.id !== id);
            persistTransactionsData();
            masterRenderRefresh();
        }

        function persistTransactionsData() {
            localStorage.setItem('fintrack_transactions', JSON.stringify(transactions));
        }

        // Preference Settings Configurations Modification Management Systems
        function saveSettings() {
            const nameInput = document.getElementById('settings-name').value.trim();
            const currencySelect = document.getElementById('settings-currency').value;
            const darkModeCheck = document.getElementById('settings-darkmode').checked;

            userProfile.name = nameInput || 'User';
            userProfile.currency = currencySelect;
            userProfile.darkMode = darkModeCheck;

            localStorage.setItem('fintrack_profile', JSON.stringify(userProfile));
            alert('System configurations stored internally.');
            
            masterRenderRefresh();
            showPage('dashboard');
        }

        function handleDarkToggle(isChecked) {
            if (isChecked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            // Live rendering configuration updating
            if(systemChartInstance) {
                renderChartVisualRepresentation();
            }
        }

        // Global Local Wipes Engine Storage Execution Functions
        function triggerSystemReset() {
            if (confirm('Critical Action Prompt: Are you absolutely certain you intend to scrub all cache registers permanently? This cannot be undone.')) {
                localStorage.removeItem('fintrack_transactions');
                localStorage.removeItem('fintrack_profile');
                transactions = [];
                userProfile = { name: 'User', currency: 'USD', darkMode: false };
                
                // Refresh Form inputs manually
                document.getElementById('settings-name').value = userProfile.name;
                document.getElementById('settings-currency').value = userProfile.currency;
                document.getElementById('settings-darkmode').checked = userProfile.darkMode;
                document.body.classList.remove('dark');
                
                masterRenderRefresh();
                showPage('dashboard');
            }
        }

        // Dummy Auth State Manager Module Implementation Interface Simulation
        function toggleAuth() {
            mockAuthenticated = !mockAuthenticated;
            const authBtn = document.getElementById('auth-btn');
            if (!mockAuthenticated) {
                authBtn.innerText = 'Login';
                authBtn.classList.remove('btn-outline');
                authBtn.classList.add('btn-primary');
                alert('Session state shifted. Client application simulation restricted to Read-Only logs until system is logged in.');
            } else {
                authBtn.innerText = 'Logout';
                authBtn.classList.remove('btn-primary');
                authBtn.classList.add('btn-outline');
                alert('Logged back in successfully.');
            }
        }

        // Sanitation Security Encoding Utilities Layer
        function escapeHtml(str) {
            return str.replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                      .replace(/"/g, "&quot;")
                      .replace(/'/g, "&#039;");
        }