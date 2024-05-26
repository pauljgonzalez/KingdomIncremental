import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/huntingUpgrades';

export function huntingModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Hunting',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
