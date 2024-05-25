import icon from '../images/icons/village.png';
import '../styles/styles.css';
import { addEventsToSkillsList } from './skills/addEventToSkills';
import { changeVillageDOM } from './editMainInfoDOM/addVillage';
import { openDynamicModal } from './modalSkillTemplate/modals';

document.querySelector('.current-skill__icon').src = icon;
const villageSelect = document.querySelector('.individual__village');
addEventsToSkillsList();

villageSelect.addEventListener('click', () => {
  changeVillageDOM();
});
// eslint-disable-next-line prettier/prettier

// changeVillageDOM();
