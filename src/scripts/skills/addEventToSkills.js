import { editCurrentSkillName } from '../editCurrentSkillDOM/editSkillName';
import { editCurrentSkillDesc } from '../editCurrentSkillDOM/editDesc';
import { editCurrentImage } from '../editCurrentSkillDOM/editImage';

const skillArray = document.querySelectorAll('.skill');

export function addEventsToSkillsList() {
  skillArray.forEach((skill) => {
    skill.addEventListener('click', () => {
      editCurrentSkillName(skill.innerHTML);
      editCurrentSkillDesc(skill);
      editCurrentImage(skill.innerHTML);
    });
  });
}
