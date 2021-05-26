import { storage } from '../../model/index.js';
import { addButtonEvent, removeButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';
import { errorMessage } from '../error-message.js';

const toggleDisplayStationManagement = () => {
  elementIds.stationManagement.hidden = !elementIds.stationManagement.hidden;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
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

const addStation = () => {
  const stationNameInput = elementIds.stationNameInput.value;
  addStationLocalStorage(stationNameInput);
  renderAddStation(stationNameInput);
};

const deleteStation = (e) => {
  console.log(e.currentTarget.dataset.station.slice(0, -7));
  for (let item of document.querySelectorAll(`tbody tr`)) {
    if (item.dataset.station === e.currentTarget.dataset.station.slice(0, -7)) {
      storage.removeLocalStorageStation(item.dataset.station);
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
