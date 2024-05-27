import { removeMainScreenInfo } from './removeMainChildren';
import { mainScreenInfoSkill } from './skillTemplate';

const mainScreen = document.querySelector('.main-screen__info');

export function changeWoodcuttingDOM() {
  removeMainScreenInfo();
  mainScreen.style.opacity = 0;
  const frag = new DocumentFragment();
  mainScreen.className = 'main-screen__info main-screen__info--skill';
  // Gets the document frag that contains xp upgrade and tic info
  const XpUpgradeTic = mainScreenInfoSkill();
  //TODO have to setup making plots for trees
  const content
  mainScreen.append(frag);

  setTimeout(() => {
    mainScreen.animate([{ opacity: 0 }, { opacity: 1 }], 750);
    mainScreen.style.opacity = 1;
  }, 200);
}
