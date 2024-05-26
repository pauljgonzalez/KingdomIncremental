import {
  createDiv,
  createImage,
  createUL,
  createLI,
  createButton,
} from '../createDOMElements/createElements';
import { testPNG } from '../importExportImages/importExportImages';
// cost should list each upgrade that it has so if it has multiple upgrade it list the first
// then when purched pops it off and puts the next on
const midevilEraOne = [
  {
    Title: 'Upgrade Era',
    Desc: 'Upgrade to the next Era. All other upgrades must be purchased first',
    Image: testPNG,
    Cost: ['200 wood', '400 wood', '800 wheat'],
    Container: 'village-upgrade-card village-upgrade-card--era',
  },
  {
    Title: 'Upgrade Roads',
    Desc: 'Upgrade your roads to allow for faster gathering.',
    Image: testPNG,
    Cost: ['200 wood', '400 wood', '800 wheat'],
    Container: 'village-upgrade-card village-upgrade-card--roads',
  },
  {
    Title: 'Upgrade Housing',
    Desc: 'Build more houses to increase population.',
    Image: testPNG,
    Cost: ['200 wood', '400 wood', '800 wheat'],
    Container: 'village-upgrade-card village-upgrade-card--housing',
  },
  {
    Title: 'Upgrade Defenses',
    Desc: 'Upgrade defenses to bolster your city and army.',
    Image: testPNG,
    Cost: ['200 wood', '400 wood', '800 wheat'],
    Container: 'village-upgrade-card village-upgrade-card--defenses',
  },
  {
    Title: 'Reaserch',
    Desc: 'Reaserch xyz to advance your village.',
    Image: testPNG,
    Cost: ['200 wood', '400 wood', '800 wheat'],
    Container: 'village-upgrade-card village-upgrade-card--reaserch',
  },
];

export function createUpgrades() {
  const docFrag = new DocumentFragment();
  // gets each upgrade from midevilEraOne
  midevilEraOne.forEach((upgrade) => {
    const container = createDiv(upgrade.Container);
    const title = createDiv('village-upgrade__title', upgrade.Title);
    const desc = createDiv('village-upgrade__desc', upgrade.Desc);
    const image = createImage('village-upgrade__image', testPNG);
    const costContainer = createDiv('village-upgrade__cost');
    const costList = createUL('cost__list');
    // gets each individual cost from current upgrade and puts it into list format
    upgrade.Cost.forEach((material) => {
      const item = createLI('list__item', material);
      costList.appendChild(item);
    });
    const buyButton = createButton('cost__buy', 'Upgrade');
    costContainer.append(costList, buyButton);
    container.append(title, desc, image, costContainer);
    docFrag.append(container);
  });
  return docFrag;
}
