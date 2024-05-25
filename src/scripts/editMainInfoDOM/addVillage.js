import { villageModal } from '../village/addVillageSkillModal';

const mainScreen = document.querySelector('.main-screen__info');
const skills = [
  { name: 'village', text: 'Village', func: villageModal },
  { name: 'woodcutting', text: 'Wood Cutting' },
  { name: 'mining', text: 'Mining' },
  { name: 'farming', text: 'Farming' },
  { name: 'crafting', text: 'Crafting' },
  { name: 'hunting', text: 'Hunting' },
  { name: 'leather-working', text: 'Leather Working' },
  { name: 'black-smithing', text: 'Black Smithing' },
  { name: 'army', text: 'Army' },
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
  mainScreen.style.visibility = 'hidden';
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
    mainScreen.style.visibility = 'visible';
  }, 200);
}
// have to remove children of mainScreen still
