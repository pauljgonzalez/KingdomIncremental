import { removeMainScreenInfo } from './removeMainChildren';

const mainScreen = document.querySelector('.main-screen__info');

export function changeWoodcuttingDOM() {
  removeMainScreenInfo();
  mainScreen.style.opacity = 0;
  const frag = new DocumentFragment();
  mainScreen.className = 'main-screen__info skill';

  mainScreen.append(frag);

  setTimeout(() => {
    mainScreen.animate([{ opacity: 0 }, { opacity: 1 }], 750);
    mainScreen.style.opacity = 1;
  }, 200);
}
