export function openDynamicModal(skill) {
  // Create dialog element
  const modal = document.createElement('dialog');
  modal.classList = 'village-skill-modal';
  const mainContainer = document.createElement('div');
  mainContainer.className = 'skill-modal-main-container';

  // Create Container for skill name and close button
  const skillNameContainer = document.createElement('div');
  skillNameContainer.className = 'village-skill-modal__skill-name';

  // Create content for skill name and close button
  const skillName = document.createElement('div');
  skillName.class = 'village-skill-modal__skill-name__text';
  skillName.textContent = skill;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className =
    'button village-skill-modal__skill-name__close-button';
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    modal.classList.add('village-skill-modal--hide');
    modal.addEventListener('animationend', () => {
      modal.close();
    });
  });

  // append skill name and close button to container
  skillNameContainer.appendChild(skillName);
  skillNameContainer.appendChild(closeButton);

  // make upgrades container
  const upgradeContainer = document.createElement('div');
  upgradeContainer.className = 'village-skill-modal__upgrades-list';

  // make inner container
  const upgrades = document.createElement('div');
  upgrades.className = 'village-skill-modal__upgrades-list__upgrade';
  upgrades.innerHTML = 'this is where upgrades go';

  // append upgrades to conatiner
  upgradeContainer.appendChild(upgrades);

  // Append conatiners to the modal
  mainContainer.appendChild(skillNameContainer);
  mainContainer.appendChild(upgradeContainer);
  modal.appendChild(mainContainer);

  // Append modal to body
  document.body.appendChild(modal);

  // Open the modal
  modal.showModal();
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('village-skill-modal--hide');
      modal.addEventListener('animationend', () => {
        modal.close();
      });
    }
  });
  modal.addEventListener('close', () => {
    document.body.removeChild(modal);
  });
}
