import {
  createButton,
  createDiv,
  createImage,
  createLabel,
  createProgrssBar,
} from '../createDOMElements/createElements';
import { testPNG } from '../importExportImages/importExportImages';

export function mainScreenInfoSkill() {
  const docFrag = new DocumentFragment();
  // have to pass in current and lifetime XP
  const xpContainer = createXPContainer();
  const skillUpgradesContainer = createDiv(
    'flex-wrap main-screen-skill__skill-upgrades',
  );
  // TODO have to pass in title ddesc, and cost
  const firstUpgrade = createSkillUpgrade();
  const secondUpgrade = createSkillUpgrade();
  skillUpgradesContainer.append(firstUpgrade, secondUpgrade);
  // TODO pass in current time and max time to show progrss bar
  const ticContainer = createTicProgressBar();
  docFrag.append(xpContainer, skillUpgradesContainer, ticContainer);
  return docFrag;
}
// TODO Have to pass in current and lifetime xp
function createXPContainer() {
  const xpContainer = createDiv('flex-wrap main-screen-skill__skill-upgrades');
  // current xp container
  const currentXPContainer = createDiv('card-250px skill-upgrades');
  const currentXPTitle = createDiv('skill-upgrades__title', 'Current XP');
  // TODO Have to pass in current xp number
  const currentXPNumber = createDiv('skill-xp__number', '32 XP');
  currentXPContainer.append(currentXPTitle, currentXPNumber);
  // lifetime XP
  const lifetimeXPContainer = createDiv('card-250px skill-upgrades');
  const lifetimeXPTitle = createDiv('skill-upgrades__title', 'Current XP');
  // TODO Have to pass in lifetime xp number
  const lifetimeXPNumber = createDiv('skill-xp__number', '320,000 XP');
  lifetimeXPContainer.append(lifetimeXPTitle, lifetimeXPNumber);
  // append xp to containter
  xpContainer.append(currentXPContainer, lifetimeXPContainer);
  return xpContainer;
}
// TODO have to pass in title and desc and cost for each upgrade and costs
function createSkillUpgrade() {
  const upgrade = createDiv('card-250px skill-upgrades');
  const upgradeTitle = createDiv('skill-upgrades__title', 'Sharpen Axes');
  // eslint-disable-next-line prettier/prettier
  const upgradeDesc = createDiv('skill-upgrades__desc', 'Reduce Tic Speed');
  const upgradeCostContainer = createDiv('skill-upgrades__purchase');
  // TODO have to pass in cost
  const upgradePurchaseCost = createDiv('purchase__cost', 'Cost');
  const purchaseButton = createButton('purchase__buy', 'Buy');
  // append purchase and button to container
  upgradeCostContainer.append(upgradePurchaseCost, purchaseButton);
  upgrade.append(upgradeTitle, upgradeDesc, upgradeCostContainer);
  return upgrade;
}
// TODO think i have to pass in current tic speed and current max speed to get progrss bar to work
function createTicProgressBar() {
  const container = createDiv('main-screen-skill__tic');
  const title = createLabel('progress-bar', 'tic__title', 'Current Harvest');
  const progressBar = createProgrssBar('progress-bar', 4, 15, 'progress-bar');
  container.append(title, progressBar);
  return container;
}
