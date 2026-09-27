import { haptic } from './utils.js';

const TABS = [
  { id: 'path',      label: 'Путь',     icon: '🧭' },
  { id: 'portfolio', label: 'Портфель', icon: '📊' },
  { id: 'mirror',    label: 'Зеркало',  icon: '🪞' },
  { id: 'journal',   label: 'Журнал',   icon: '📖' },
  { id: 'me',        label: 'Профиль',        icon: '👤' }
];

let currentTab = 'path';

export function renderTabBar() {
  const bar = document.getElementById('tabBar');
  bar.innerHTML = TABS.map(t => `
    <button class="tab ${t.id === currentTab ? 'active' : ''}" data-tab="${t.id}">
      <div class="tab-icon">${t.icon}</div>
      <div class="tab-label">${t.label}</div>
    </button>
  `).join('');

  bar.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

export function switchTab(id) {
  if (!TABS.find(t => t.id === id)) return;
  currentTab = id;

  document.querySelectorAll('.tab-content').forEach(c =>
    c.classList.toggle('active', c.id === 'tab-' + id)
  );
  document.querySelectorAll('.tab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === id)
  );

  window.scrollTo({ top: 0, behavior: 'smooth' });
  haptic();
}

export function getCurrentTab() {
  return currentTab;
}