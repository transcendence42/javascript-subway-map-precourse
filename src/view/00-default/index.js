import { menuButton } from './template.js';

export const defaultRenderer = () => {
  const menuButtonContainer = document.createElement('div');
  menuButtonContainer.id = 'menu-button-container';
  menuButtonContainer.innerHTML = menuButton();
  document.querySelector('#app').appendChild(menuButtonContainer);
};
