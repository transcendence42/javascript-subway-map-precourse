import { renderAddStation, addSelectOption } from './view.js';
import { deleteStation } from './delete-station.js';
import { addStationLocalStorage } from './model.js';
import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';

const addStationButtonEvent = (stationNameInput) => {
  for (let item of document.querySelectorAll(`tbody tr button`)) {
    if (item.dataset.station === `${stationNameInput}-button`) {
      addButtonEvent(item, deleteStation);
    }
  }
};

export const addStation = () => {
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
