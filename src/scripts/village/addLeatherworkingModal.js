import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/leatherworkingUpgrades';

export function leatherworkingModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Leather Working',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
