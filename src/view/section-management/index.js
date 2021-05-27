import { storage } from '../../model/index.js';
import { elementIds, removeChildAllElements } from '../../utils.js';

export const rerenderSectionButtons = () => {
  console.log(elementIds.sectionButtons)
  removeChildAllElements(elementIds.sectionButtons)
  renderLineButtons();
}

const renderLineButtons = () => {
  let result = '';
  for (let item of storage.getLocalStorageMap('subway-line').keys()) {
    result += `<button class="section-line-menu-button" data-line='${item}'>${item}</button> `;
  }
  elementIds.sectionButtons.insertAdjacentHTML('afterbegin', result);
};

export const renderSectionManagement = () => {
  renderLineButtons();
};
