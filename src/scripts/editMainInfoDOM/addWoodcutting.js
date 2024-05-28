import { removeMainScreenInfo } from './removeMainChildren';
import { mainScreenInfoSkill } from './skillTemplate';
import { testPNG } from '../importExportImages/importExportImages';
import {
  createButton,
  createDiv,
  createImage,
} from '../createDOMElements/createElements';

const mainScreen = document.querySelector('.main-screen__info');
// plots class - where the play can set wood and increase decrease workers
class WoodcuttingPlot {
  constructor(
    woodType,
    imageSrc,
    currentWorkers,
    maxWorkers,
    cost,
    generating,
  ) {
    this.woodType = woodType;
    this.imageSrc = imageSrc;
    this.currentWorkers = currentWorkers;
    this.maxWorkers = maxWorkers;
    this.cost = cost;
    this.generating = generating;
  }

  get wood() {
    return this.woodType;
  }

  set wood(newType) {
    this.woodType = newType;
  }
}
// have to somehow get the child number and use that for index when changing wood or
// adding workers
const plots = [
  new WoodcuttingPlot('Oak', testPNG, 1, 1, 250, 1000),
  new WoodcuttingPlot('Willow', testPNG, 3, 7, 25000, 10000),
  new WoodcuttingPlot('Oak', testPNG, 1, 1, 250, 1000),
  new WoodcuttingPlot('Willow', testPNG, 3, 7, 25000, 10000),
  new WoodcuttingPlot('Oak', testPNG, 1, 1, 250, 1000),
  new WoodcuttingPlot('Willow', testPNG, 3, 7, 25000, 10000),
  new WoodcuttingPlot('Oak', testPNG, 1, 1, 250, 1000),
  new WoodcuttingPlot('Willow', testPNG, 3, 7, 25000, 10000),
];
// changes the dom when wood cutting is clicked on
export function changeWoodcuttingDOM() {
  removeMainScreenInfo();
  mainScreen.style.opacity = 0;
  const frag = new DocumentFragment();
  mainScreen.className = 'main-screen__info main-screen__info--skill';
  // Gets the document frag that contains xp upgrade and tic info
  // TODO have to pass in xp amound, upgrade,descs,and costs
  // TODO setup desc above as consts and pass them in
  // TODO setup woodcutting logic to get the current xp numbers and upgrade costs
  const XpUpgradeTic = mainScreenInfoSkill();
  // TODO have to setup making plots for trees
  const contentContainer = createDiv(
    'main-screen-skill__content main-screen-skill__content--woodcutting',
  );
  plots.forEach((individualPlot) => {
    const plotDIV = createPlot(
      individualPlot.woodType,
      individualPlot.imageSrc,
      individualPlot.currentWorkers,
      individualPlot.maxWorkers,
      individualPlot.cost,
      individualPlot.generating,
    );
    contentContainer.append(plotDIV);
  });

  frag.append(XpUpgradeTic, contentContainer);
  mainScreen.append(frag);
  setTimeout(() => {
    mainScreen.animate([{ opacity: 0 }, { opacity: 1 }], 750);
    mainScreen.style.opacity = 1;
  }, 200);
}
// TODO not sure if i want to split up current and max workers with spans
function createPlot(
  title,
  imageSrc,
  currentWorker,
  maxWorker,
  cost,
  generating,
) {
  const docFrag = new DocumentFragment();
  const containerDiv = createDiv('skill-card');
  const titleDiv = createDiv('skill-card__title', title);
  const image = createImage('skill-card__image');
  image.src = imageSrc;
  const workersDiv = createPlotWorker(currentWorker, maxWorker);
  const purchaseDiv = createPurchase(cost);
  const generatingDiv = createDiv('skill-card__generating', generating);
  containerDiv.append(titleDiv, image, workersDiv, purchaseDiv, generatingDiv);
  docFrag.append(containerDiv);
  return docFrag;
}
function createPlotWorker(currentWorker, maxWorker) {
  const workersContainer = createDiv('skill-card__workers');
  const workerAmount = createDiv(
    'workers__amount',
    `${currentWorker} of ${maxWorker} workers`,
  );
  const workersAssignedContainer = createDiv('workers__assigned');
  const minusButton = createButton(
    'button--assigned button--assigned-minus',
    '-',
  );
  const plusButton = createButton(
    'button--assigned button--assigned-plus',
    '+',
  );
  workersAssignedContainer.append(minusButton, plusButton);
  workersContainer.append(workerAmount, workersAssignedContainer);
  return workersContainer;
}
function createPurchase(cost) {
  const container = createDiv('skill-card__purchase');
  const costDiv = createDiv('purchase__cost', cost);
  const button = createButton('purchase__buy', 'Buy');
  container.append(costDiv, button);
  return container;
}
