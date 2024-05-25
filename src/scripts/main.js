import icon from '../images/icons/village.png';
import '../styles/styles.css';
import { addEventsToSkillsList } from './skills/addEventToSkills';
import { changeVillageDOM } from './editMainInfoDOM/addVillage';
import { modalTest } from './modalTemp/modals';

document.querySelector('.current-skill__icon').src = icon;
const villageSelect = document.querySelector('.individual__village');
addEventsToSkillsList();

villageSelect.addEventListener('click', () => {
  changeVillageDOM();
});
// eslint-disable-next-line prettier/prettier
// document.querySelector('.modalTest').addEventListener('click',() =>{
//   modalTest();
// });

function openDynamicModal() {
  // Create dialog element
  const modal = document.createElement('dialog');
  modal.classList = 'village-skill-modal';
  const mainContainer = document.createElement('div');
  mainContainer.className = 'skill-modal-main-container';

  // Create Container for skill name and close button
  const skillNameContainer = document.createElement('div');
  skillNameContainer.className = 'village-skill-modal__skill-name';

  // Create content for skill name and close button
  const skillName = document.createElement('div');
  skillName.class = 'village-skill-modal__skill-name__text';
  skillName.innerHTML = 'Village';

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className =
    'button village-skill-modal__skill-name__close-button';
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    modal.classList.add('village-skill-modal--hide');
    modal.addEventListener('animationend', () => {
      modal.close();
    });
  });

  // append skill name and close button to container
  skillNameContainer.appendChild(skillName);
  skillNameContainer.appendChild(closeButton);

  // make upgrades container
  const upgradeContainer = document.createElement('div');
  upgradeContainer.className = 'village-skill-modal__upgrades-list';

  // make inner container
  const upgrades = document.createElement('div');
  upgrades.className = 'village-skill-modal__upgrades-list__upgrade';
  upgrades.innerHTML = 'this is where upgrades go';

  // append upgrades to conatiner
  upgradeContainer.appendChild(upgrades);

  // Append conatiners to the modal
  mainContainer.appendChild(skillNameContainer);
  mainContainer.appendChild(upgradeContainer);
  modal.appendChild(mainContainer);

  // Append modal to body
  document.body.appendChild(modal);

  // Open the modal
  modal.showModal();
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
  modal.addEventListener('close', () => {
    document.body.removeChild(modal);
  });
}

// Get the button that opens the modal
const btn = document.querySelector('.modalTest');

// When the user clicks the button, open the dynamic modal
btn.onclick = function () {
  openDynamicModal();
};
// use this template for all village modals

// guessing just change the skill upgrades after creating it

// need basic themes and layouts for skills

// and how to draw lines between them thats nto goint go be fun

// but for now just set up the basics skill trees for each of the starting skills

// as the lines should only be needed for prestige trees

// the basis skill tree are just going to be one time upgrades until they get to the guild houses(prestiges)
