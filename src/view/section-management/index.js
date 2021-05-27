import { storage } from '../../model/index.js';
import {elementIds} from '../../utils.js';

const renderLineButtons = () => {
  let result = '';
  for (let item of storage.getLocalStorageMap('subway-line').keys()) {
    result += `<button class="section-line-menu-button" data-line='${item}'>${item}</button> `;
  }
  elementIds.sectionButtons.insertAdjacentHTML('afterend', result);
};

export const renderSectionManagement = () => {
  renderLineButtons();
};