import icon from '../images/icons/village.png';
import '../styles/styles.css';
import { addEventsToSkillsList } from './skills/addEventToSkills';
import { changeVillageDOM } from './editMainInfoDOM/addVillage';
import { openDynamicModal } from './modalSkillTemplate/modals';
import { testPNG } from './importExportImages/importExportImages';
import { createUpgrades } from './villageSkillUpgrades/villageUpgrades';
import { mainScreenInfoSkill } from './editMainInfoDOM/skillTemplate';

document.querySelector('.current-skill__icon').src = icon;
const villageSelect = document.querySelector('.individual__village');
addEventsToSkillsList();

villageSelect.addEventListener('click', () => {
  changeVillageDOM();
});
// eslint-disable-next-line prettier/prettier

// changeVillageDOM();

const testImage = document.querySelectorAll('.skill-card__image');
testImage.forEach((image) => {
  image.src = testPNG;
});

console.log(mainScreenInfoSkill());
