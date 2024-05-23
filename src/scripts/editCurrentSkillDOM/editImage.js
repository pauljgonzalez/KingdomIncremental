import {
  villagePNG,
  woodCuttingPNG,
  miningPNG,
} from '../importExportImages/importExportImages';

const currentImage = document.querySelector('.image__icon');

const imageArray = {
  Village: villagePNG,
  'Wood Cutting': woodCuttingPNG,
  Mining: miningPNG,
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
