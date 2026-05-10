function addCss(filename) {
  const style = document.createElement('link')
  style.href = filename
  style.type = 'text/css'
  style.rel = 'stylesheet'
  document.body.append(style)
}
function initMenu() {
  const nav = document.querySelector('.right-nav-menu');
  if (!nav) {
    setTimeout(initMenu, 500);
    return;
  }
  
  const items = nav.querySelectorAll('.main-navigation-menu-item');
  if (items.length === 0) {
    setTimeout(initMenu, 500);
    return;
  }

  // Сдвигаем валюту левее
  const wallet = document.querySelector('.wallet-and-badges');
  if (wallet) wallet.style.marginRight = '80px';

  // Создаём кнопку-триггер
  const trigger = document.createElement('div');
  trigger.innerHTML = '☰';
  trigger.style.cssText = `
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 6px;
    background: rgba(40, 0, 80, 0.8);
    border: 1px solid rgba(100, 0, 200, 0.4);
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    pointer-events: auto;
  `;
  // Создаём панель
  const panel = document.createElement('div');
  panel.style.cssText = `
    display: none;
    position: absolute;
    top: 45px;
    right: -10px;
    background: rgba(20, 0, 40, 0.95);
    border: 1px solid rgba(150, 0, 255, 0.5);
    border-radius: 8px;
    padding: 8px;
    z-index: 9999;
    flex-direction: column;
    gap: 4px;
    pointer-events: auto;
  `;
  // Переносим кнопки в панель
  items.forEach(item => {
    panel.appendChild(item);
  });
  trigger.appendChild(panel);
  nav.appendChild(trigger);
  // Показываем/скрываем при наведении
  trigger.addEventListener('mouseenter', () => {
    panel.style.display = 'flex';
  });
  trigger.addEventListener('mouseleave', () => {
    panel.style.display = 'none';
  });
}
window.onload = () => {
  addCss("https://raw.githack.com/floyare/league-purple-theme/main/assets/theme.css");
  addCss("//plugins/purple-theme/theme.css");
  setTimeout(initMenu, 3000);
};