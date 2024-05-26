import { villageModal } from '../village/addVillageSkillModal';
import { woodcuttingModal } from '../village/addWoodcuttingModal';
import { miningModal } from '../village/addMiningModal';
import { farmingModal } from '../village/addFarmingModal';
import { craftingModal } from '../village/addCraftingModal';
import { huntingModal } from '../village/addHuntingModal';
import { leatherworkingModal } from '../village/addLeatherworkingModal';
import { blacksmithingModal } from '../village/addBlacksmithingModal';
import { armyModal } from '../village/addArmyModal';
import { removeMainScreenInfo } from './removeMainChildren';

const mainScreen = document.querySelector('.main-screen__info');
const skills = [
  { name: 'village', text: 'Village', func: villageModal },
  { name: 'woodcutting', text: 'Wood Cutting', func: woodcuttingModal },
  { name: 'mining', text: 'Mining', func: miningModal },
  { name: 'farming', text: 'Farming', func: farmingModal },
  { name: 'crafting', text: 'Crafting', func: craftingModal },
  { name: 'hunting', text: 'Hunting', func: huntingModal },
  // eslint-disable-next-line prettier/prettier
  { name: 'leather-working', text: 'Leather Working', func: leatherworkingModal },
  { name: 'blacksmith', text: 'Blacksmith', func: blacksmithingModal },
  { name: 'army', text: 'Army', func: armyModal },
];
let index = 0;

function createContainer(skill) {
  const div = document.createElement('div');
  div.className = `village-card village__${skill}`;
  return div;
}

function createText(text) {
  const div = document.createElement('div');
  div.className = 'village-card__text';
  div.innerHTML = text;
  return div;
}

function createImage(skill) {
  const image = document.createElement('img');
  image.className = `village-card__image village-card__image--${skill}`;
  return image;
}

function addEvent(container, func) {
  container.addEventListener('click', func);
}

export function changeVillageDOM() {
  removeMainScreenInfo();
  mainScreen.style.opacity = 0;
  const frag = new DocumentFragment();
  mainScreen.className = 'main-screen__info main-screen__info--village';
  skills.forEach(({ name, text, func }) => {
    const container = createContainer(name);
    const textElement = createText(text);
    const image = createImage(name);
    addEvent(container, func);
    container.append(textElement, image);
    frag.append(container);
    index += 1;
  });
  mainScreen.append(frag);
  index = 0;
  setTimeout(() => {
    mainScreen.animate([{ opacity: 0 }, { opacity: 1 }], 750);
    mainScreen.style.opacity = 1;
  }, 200);
}
// // have to remove children of mainScreen still
