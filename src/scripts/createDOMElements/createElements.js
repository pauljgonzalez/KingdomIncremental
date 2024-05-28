export function createDiv(className, innerHtml) {
  const div = document.createElement('div');
  div.className = className;
  if (innerHtml !== undefined) {
    div.innerHTML = innerHtml;
  }
  return div;
}
export function createImage(className, imageSrc) {
  const image = document.createElement('img');
  image.className = className;
  image.src = imageSrc;
  return image;
}
export function createUL(className) {
  const list = document.createElement('ul');
  list.className = className;
  return list;
}
export function createLI(className, innerHtml) {
  const listItem = document.createElement('li');
  listItem.className = className;
  if (innerHtml !== undefined) {
    listItem.textContent = innerHtml;
  }
  return listItem;
}
export function createButton(className, innerHtml) {
  const button = document.createElement('button');
  button.className = className;
  if (innerHtml !== undefined) {
    button.textContent = innerHtml;
  }
  button.type = 'button';
  return button;
}
export function createLabel(forName, className, innerHtml) {
  const label = document.createElement('Label');
  label.htmlFor = forName;
  label.className = className;
  if (innerHtml !== undefined) {
    label.textContent = innerHtml;
  }
  return label;
}
export function createProgrssBar(idName, value, maxValue, className) {
  const progress = document.createElement('progress');
  progress.id = idName;
  progress.value = value;
  progress.max = maxValue;
  progress.className = className;
  return progress;
}
