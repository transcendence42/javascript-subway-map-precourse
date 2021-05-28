import { elementIds, removeChildAllElements } from '../../utils.js';
import { renderLine } from '../../view/line-management/index.js';
import { addDeleteEvent } from './delete-section-station.js';
import { storage } from '../../model/index.js';

const addSelectOption = (element, stations) => {
  stations.forEach((station) => {
    const option = document.createElement('option');
    option.value = station;
    option.innerHTML = station;
    element.appendChild(option);
  });
};

const renderSelect = (lineName) => {
  let lineStation;
  removeChildAllElements(elementIds.sectionStationSelector);
  addSelectOption(elementIds.sectionStationSelector, [
    ...storage.getLocalStorageMap('subway-station').keys(),
  ]);
  for (const item of storage.getLocalStorageMap('subway-line')) {
    if (lineName === item[0]) {
      lineStation = item[1];
    }
  }
  renderSectionTable(lineStation);
};

const renderSelectionRegister = (lineName) => {
  elementIds.sectionManageText.innerHTML = '';
  elementIds.sectionManageText.insertAdjacentHTML(
    'afterbegin',
    `<h3>${lineName} 관리</h3>`,
  );
  elementIds.sectionRegister.hidden = false;
};

const renderLineManagementTable = () => {
  removeChildAllElements(elementIds.lineTableTbody);
  renderLine();
};

const renderAddLineStation = ({ index, value }) => {
  elementIds.sectionTableTbody.insertAdjacentHTML(
    'beforeend',
    `<tr data-line-station=\'${value}\'><td>${index}</td><td>${value}</td><td><button class='section-delete-button' data-line-station=\'${value}-button\'>노선에서 제거</button></td></tr>`,
  );
};

const renderSectionTable = (lineStation) => {
  elementIds.sectionTableTbody.innerHTML = '';
  lineStation.forEach((value, index) => {
    renderAddLineStation({ index, value });
  });
  addDeleteEvent();
};

export {
  renderSelect,
  renderSelectionRegister,
  renderLineManagementTable,
  renderSectionTable,
};
