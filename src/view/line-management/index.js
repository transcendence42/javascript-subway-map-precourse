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

const addLineTable = ({ lineName, value }) => {
  return `<tr data-line=\'${lineName}\'><td>${lineName}</td><td>${value[0]}</td><td>${value[value.length-1]}</td><td><button class='line-delete-button' data-line=\'${lineName}-button\'>삭제</button></td></tr>`;
};

const renderLine = () => {
  const subwayLine = storage.getLocalStorageMap('subway-line');
  let result = '';
  for (let [lineName, value] of [...subwayLine]) {
    result += addLineTable({ lineName, value });
  }
  elementIds.lineTableTbody.insertAdjacentHTML('afterbegin', result);
};

export const renderLineManagement = () => {
  renderSelect();
  renderLine();
};
