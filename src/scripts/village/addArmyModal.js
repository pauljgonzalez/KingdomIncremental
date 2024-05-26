import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/armyUpgrades';

export function armyModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Wood Cutting',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
