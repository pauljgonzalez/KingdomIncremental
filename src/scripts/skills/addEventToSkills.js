import { editCurrentSkillName } from '../editCurrentSkillDOM/editSkillName';
import { editCurrentSkillDesc } from '../editCurrentSkillDOM/editDesc';
import { editCurrentImage } from '../editCurrentSkillDOM/editImage';
import { removeMainScreenInfo } from '../editMainInfoDOM/removeMainChildren';

const skillArray = document.querySelectorAll('.skill');

export function addEventsToSkillsList() {
  skillArray.forEach((skill) => {
    skill.addEventListener('click', () => {
      removeMainScreenInfo();
      editCurrentSkillName(skill.innerHTML);
      editCurrentSkillDesc(skill);
      editCurrentImage(skill.innerHTML);
    });
  });
}
