import { errorMessage } from '../error-message.js';
import { removeButtonEvent } from '../utils.js';
import { storage } from '../../model/index.js';

const deleteSelectOption = (datasetStation) => {
  const selectOption = document.querySelectorAll('option');
  for (const item of selectOption) {
    if (item.value === datasetStation) {
      item.remove();
    }
  }
};

const includeLineList = (datasetStation) => {
  return storage
    .getLocalStorageArray('subway-line-list')
    .includes(datasetStation);
};

export const deleteStation = (e) => {
  const datasetStation = e.currentTarget.dataset.station.slice(0, -7);
  if (includeLineList(datasetStation)) {
    alert(errorMessage.lineStationForbidden);
    return;
  }
  deleteSelectOption(datasetStation);
  for (const item of document.querySelectorAll(`tbody tr`)) {
    if (item.dataset.station === datasetStation) {
      storage.removeLocalStorage('subway-station', item.dataset.station);
      item.remove();
    }
  }
  removeButtonEvent(e.currentTarget, deleteStation);
};
