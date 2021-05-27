import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';
import { storage } from '../../model/index.js';

const toggleSectionManagement = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = !elementIds.sectionManagement.hidden;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
};

const renderSelectionRegister = (lineName) => {
  elementIds.sectionManageText.innerHTML = '';
  elementIds.sectionManageText.insertAdjacentHTML(
    'afterbegin',
    `<h3>${lineName}</h3>`,
  );
  elementIds.sectionRegister.hidden = false;
};

const addSelectOption = (element, stations) => {
  stations.forEach((station) => {
    let option = document.createElement('option');
    option.value = station;
    option.innerHTML = station;
    element.appendChild(option);
  });
};

const renderSelect = (lineName) => {
  console.log(storage.getLocalStorageMap('subway-line'));
  for (let item of storage.getLocalStorageMap('subway-line')) {
    if (lineName === item[0]) {
      addSelectOption(elementIds.sectionStationSelector, item[1]);
    }
  }
};

const selectSectionLineButton = (e) => {
  const lineName = e.currentTarget.dataset.line;
  renderSelectionRegister(lineName);
  renderSelect(lineName);
};

{/* <button class="section-delete-button">노선에서 제거</button> */}

export const controlSectionManagement = () => {
  addButtonEvent(elementIds.sectionManagerButton, toggleSectionManagement);
  for (let item of elementIds.sectionLineMenuButton) {
    addButtonEvent(item, selectSectionLineButton);
  }
};
