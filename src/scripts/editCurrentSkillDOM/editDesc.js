const currentDesc = document.querySelector('.current-skill__description');
const descArray = {
  Village: 'Upgrade and progress your village here',
  'Wood Cutting':
    'Upgrade your wood here. Gather resources to upgrade your village',
  Mining:
    'Upgrade your mining here. Gather resources to upgrade your village and other skills tools',
  Farming: 'Upgrade your farming here. Gather more resources for your people',
  Hunting:
    'Upgrade your hunting here. You can get materials here for taming and leatherworking.',
  Crafting:
    'Upgrade your crafting here. You can craft upgrades for your village and other skills',
  'Leather Working':
    'Upgrade your leather working here. You can craft items for armies and upgrades for skills',
  Blacksmith:
    'Upgrade your black smithing here. You can craft items for armies and tools for skills',
  Army: 'Upgrade your empires might here. You can equip your army with items to increase stats',
};
export function editCurrentSkillDesc(skill) {
  //   console.log(descArray);
  const desc = getSkillDesc(skill.innerHTML);
  currentDesc.innerHTML = desc;
}
function getSkillDesc(skill) {
  if (Object.prototype.hasOwnProperty.call(descArray, skill)) {
    return descArray[skill];
  }
  return 'Skill not found.';
}
