import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/miningUpgrades';

export function miningModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Mining',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
