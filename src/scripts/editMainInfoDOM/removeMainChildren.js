export function removeMainScreenInfo() {
  const container = document.querySelector('.main-screen__info');
  container.className = 'main-screen__info';
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
