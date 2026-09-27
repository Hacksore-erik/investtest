import { renderTabBar } from './core/router.js';

// Заглушка — заполним на следующих шагах
function renderPlaceholders() {
  const placeholder = (title) => `
    <div class="header">
      <div class="header-top">
        <div class="header-title-wrap">
          <h1>${title}</h1>
          <span class="alfa-badge">Alfa</span>
        </div>
        <div class="avatar">АК</div>
      </div>
    </div>
    <div class="container">
      <div class="card card-neutral">
        <div class="empty-state">
          <div class="icon">🚧</div>
          <div class="title">Вкладка в разработке</div>
          <div class="desc">Наполним на следующих шагах</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('tab-path').innerHTML = placeholder('Путь');
  document.getElementById('tab-portfolio').innerHTML = placeholder('Портфель');
  document.getElementById('tab-mirror').innerHTML = placeholder('Зеркало');
  document.getElementById('tab-journal').innerHTML = placeholder('Журнал');
  document.getElementById('tab-me').innerHTML = placeholder('Я');
}

window.addEventListener('DOMContentLoaded', () => {
  renderTabBar();
  renderPlaceholders();
});