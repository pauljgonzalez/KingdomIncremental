import { editCurrentSkillName } from '../editCurrentSkillDOM/editSkillName';
import { editCurrentSkillDesc } from '../editCurrentSkillDOM/editDesc';
import { editCurrentImage } from '../editCurrentSkillDOM/editImage';
import { removeMainScreenInfo } from '../editMainInfoDOM/removeMainChildren';
import { changeWoodcuttingDOM } from '../editMainInfoDOM/addWoodcutting';

const skillArray = document.querySelectorAll('.skill');
const skillFunctions = {
  'Wood Cutting': function () {
    changeWoodcuttingDOM();
  },
  Fishing() {
    console.log('Fishing skill executed');
    // Add the logic for the "Fishing" skill here
  },
  // Add more skills and their corresponding functions as needed
};
export function addEventsToSkillsList() {
  skillArray.forEach((skill) => {
    skill.addEventListener('click', () => {
      removeMainScreenInfo();
      editCurrentSkillName(skill.innerHTML);
      editCurrentSkillDesc(skill);
      editCurrentImage(skill.innerHTML);
      skillFunctions[skill.innerHTML]();
    });
  });
}

// make array if skills and pass in the inner html to call that function
// is it the best who knows its what I though of :)
