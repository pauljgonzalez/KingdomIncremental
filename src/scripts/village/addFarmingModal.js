import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/farmingUpgrades';

export function farmingModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Farming',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
