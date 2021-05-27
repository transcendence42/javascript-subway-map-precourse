import { storage } from '../../model/index.js';
import {elementIds} from '../../utils.js';

const renderLineButtons = () => {
  let result = '';
  for (let item of storage.getLocalStorageMap('subway-line').keys()) {
    result += `<button class="section-line-menu-button" data-line='${item}'>${item}</button> `;
  }
  elementIds.sectionButtons.insertAdjacentHTML('afterend', result);
};

// const addSelectOption = (element, value) => {
//   let option = document.createElement('option');
//   option.value = value;
//   option.innerHTML = value;
//   element.appendChild(option);
// };

// const renderSelect = () => {
//   for (let item of storage.getLocalStorageMap('subway-station')) {
//     addSelectOption(elementIds.lineStartStationSelector, item[0]);
//   }
//   for (let item of storage.getLocalStorageMap('subway-station')) {
//     addSelectOption(elementIds.lineEndStationSelector, item[0]);
//   }
// };

export const renderSectionManagement = () => {
  renderLineButtons();
  // renderSelect();
};
