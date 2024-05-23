const currentSkill = document.querySelector('.current-skill__name');

export function editCurrentSkillName(skill) {
  currentSkill.innerHTML = skill;
}
