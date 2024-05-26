import { openDynamicModal } from '../modalSkillTemplate/modals';
import { createUpgrades } from '../villageSkillUpgrades/craftingUpgades';

export function craftingModal() {
  const upgrades = createUpgrades();
  const modal = openDynamicModal(
    'Crafting',
    upgrades,
    'village-skill-modal__upgrades-list--village',
  );
  return modal;
}
