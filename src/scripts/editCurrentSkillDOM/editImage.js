import {
  villagePNG,
  woodCuttingPNG,
  miningPNG,
  blacksmithPNG,
  leatherworkingPNG,
  farmingPNG,
  huntingPNG,
  armyPNG,
  craftingPNG,
} from '../importExportImages/importExportImages';

const currentImage = document.querySelector('.current-skill__icon');

const imageArray = {
  Village: villagePNG,
  'Wood Cutting': woodCuttingPNG,
  Mining: miningPNG,
  Blacksmith: blacksmithPNG,
  'Leather Working': leatherworkingPNG,
  Farming: farmingPNG,
  Hunting: huntingPNG,
  Army: armyPNG,
  Crafting: craftingPNG,
};

export function editCurrentImage(skill) {
  const newImage = getImage(skill);
  currentImage.src = newImage;
}

function getImage(skill) {
  if (Object.prototype.hasOwnProperty.call(imageArray, skill)) {
    return imageArray[skill];
  }
  return 'Image not found.';
}
