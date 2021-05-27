import { ID, NAME } from '../../constants/index.js';

const createMenuButton = () => {
  return `
    <button id='${ID.STATION_MANAGER_BUTTON}'>${NAME.STATION_MANAGER_BUTTON}</button>
    <button id='${ID.LINE_MANAGER_BUTTON}'>${NAME.LINE_MANAGER_BUTTON}</button>
    <button id='${ID.SECTION_MANAGER_BUTTON}'>${NAME.SECTION_MANAGER_BUTTON}</button>
    <button id='${ID.MAP_PRINT_MANAGER_BUTTON}'>${NAME.MAP_PRINT_MANAGER_BUTTON}</button>
    `;
};

export const defaultRenderer = () => {
  const menuButtonContainer = document.createElement('div');
  menuButtonContainer.id = 'menu-button-container';
  menuButtonContainer.innerHTML = createMenuButton();
  document.querySelector('#app').appendChild(menuButtonContainer);
};
