import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/villageUpgrades';

export function villageModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Village',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
