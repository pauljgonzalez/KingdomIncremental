import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/woodcuttingUpgrades';

export function woodcuttingModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Wood Cutting',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
