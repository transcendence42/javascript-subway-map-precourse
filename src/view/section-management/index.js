import { storage } from '../../model/index.js';

const renderLineButtons = () => {
  let result = '';
  for (let item of storage.getLocalStorageMap('subway-line').keys()) {
    result += `<button class="section-line-menu-button">${item}</button> `;
  }
  document
    .getElementById('section-buttons')
    .insertAdjacentHTML('afterend', result);
};



export const renderSectionManagement = () => {
  renderLineButtons();
};
