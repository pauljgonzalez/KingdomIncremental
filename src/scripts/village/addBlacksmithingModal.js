import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/blacksmithUpgrades';

export function blacksmithingModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Blacksmith',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
