import { storage } from '../../model/index.js';
import { addButtonEvent, removeButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';
import { errorMessage } from '../error-message.js';
import { initSubwayRouteMap } from '../subway-route-map/index.js';

const toggleDisplayStationManagement = () => {
  elementIds.stationManagement.hidden = !elementIds.stationManagement.hidden;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
  initSubwayRouteMap();
};

const checkValidStationName = (subwayStation, stationNameInput) => {
  if (subwayStation.get(stationNameInput)) {
    alert(errorMessage.stationDuplicate);
    return false;
  } else if (stationNameInput.length < 2) {
    alert(errorMessage.stationLength);
    return false;
  }
  return true;
};

const addStationLocalStorage = (stationNameInput) => {
  if (!storage.getLocalStorage('subway-station')) {
    storage.setLocalStorageMap(new Map());
  }
  const subwayStation = storage.getLocalStorageMap('subway-station');
  if (!checkValidStationName(subwayStation, stationNameInput)) {
    return false;
  }
  subwayStation.set(stationNameInput, []);
  storage.setLocalStorageMap('subway-station', subwayStation);
  console.log('역 추가', storage.getLocalStorage('subway-station'));
  return true;
};

const renderAddStation = (stationNameInput) => {
  elementIds.stationTableTbody.insertAdjacentHTML(
    'beforeend',
    `<tr data-station=\'${stationNameInput}\'><td>${stationNameInput}</td><td><button class='station-delete-button' data-station=\'${stationNameInput}-button\'>삭제</button></td></tr>`,
  );
};

const addSelectOption = (element, value) => {
  let option = document.createElement('option');
  option.value = value;
  option.innerHTML = value;
  element.appendChild(option);
};

const addStationButtonEvent = (stationNameInput) => {
  for (let item of document.querySelectorAll(`tbody tr button`)) {
    if (item.dataset.station === `${stationNameInput}-button`) {
      addButtonEvent(item, deleteStation);
    }
  }
};

const addStation = () => {
  const stationNameInput = elementIds.stationNameInput.value;
  if (!addStationLocalStorage(stationNameInput)) {
    return;
  }
  renderAddStation(stationNameInput);
  addSelectOption(elementIds.lineStartStationSelector, stationNameInput);
  addSelectOption(elementIds.lineEndStationSelector, stationNameInput);
  elementIds.stationNameInput.value = '';
  elementIds.stationNameInput.focus();
  addStationButtonEvent(stationNameInput);
};

const deleteSelectOption = (datasetStation) => {
  const selectOption = document.querySelectorAll('option');
  for (let item of selectOption) {
    if (item.value == datasetStation) {
      item.remove();
    }
  }
};

const isLineList = (datasetStation) => {
  return storage
    .getLocalStorageArray('subway-line-list')
    .includes(datasetStation);
};

const deleteStation = (e) => {
  const datasetStation = e.currentTarget.dataset.station.slice(0, -7);
  if (isLineList(datasetStation)) {
    alert(errorMessage.lineStationForbidden);
    return;
  }
  deleteSelectOption(datasetStation);
  for (let item of document.querySelectorAll(`tbody tr`)) {
    if (item.dataset.station === datasetStation) {
      storage.removeLocalStorage('subway-station', item.dataset.station);
      item.remove();
    }
  }
  removeButtonEvent(e.currentTarget, deleteStation);
};

export const controlStationManagement = () => {
  addButtonEvent(
    elementIds.stationManagerButton,
    toggleDisplayStationManagement,
  );
  addButtonEvent(elementIds.stationAddButton, addStation);
  for (let button of elementIds.stationDeleteButton) {
    addButtonEvent(button, deleteStation);
  }
};
