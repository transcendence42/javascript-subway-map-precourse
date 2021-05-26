import { elementIds } from '../../utils.js';
import { storage } from '../../model/index.js';

const addSelectOption = (element, value) => {
  let option = document.createElement('option');
  option.value = value;
  option.innerHTML = value;
  element.appendChild(option);
};

const renderSelect = () => {
  for (let item of storage.getLocalStorageMap('subway-station')) {
    addSelectOption(elementIds.lineStartStationSelector, item[0]);
  }
  for (let item of storage.getLocalStorageMap('subway-station')) {
    addSelectOption(elementIds.lineEndStationSelector, item[0]);
  }
};

const makeLineTable = ({ lineName, value }) => {
  return `<tr data-station=\'${lineName}\'><td>${lineName}</td><td>${value.lineEndStationSelectorValue}</td><td>${value.lineEndStationSelectorValue}</td><td><button class='station-delete-button' data-station=\'${lineName}-button\'>삭제</button></td></tr>`;
};

const renderLine = () => {
  const subwayLine = storage.getLocalStorageMap('subway-line');
  let result = '';
  for (let [lineName, value] of [...subwayLine]) {
    result += makeLineTable({ lineName, value });
  }
  elementIds.lineTableTbody.insertAdjacentHTML('afterbegin', result);
};

export const renderLineManagement = () => {
  renderSelect();
  renderLine();
};
