import { storage } from '../../model/index.js';

const renderLineButtons = () => {
    let result = ''
   for (let item of storage.getLocalStorageMap('subway-line').keys()) {
       document.getElementById('section-buttons').insertAdjacentHTML('afterend', `<button class="section-line-menu-button">${item}</button>`);
    //  result += `<button class="section-line-menu-button">${item}</button> `
   }

};

{/* <button class="section-line-menu-button">호선</button> */}

export const renderSectionManagement = () => {
  renderLineButtons();
};
