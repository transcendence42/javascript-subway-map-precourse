import { addButtonEvent } from '../utils.js';
import { storage } from '../../model/index.js';
import { elementIds } from '../../utils.js';

const toggleDisplayLineManagement = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = !elementIds.lineManagement.hidden;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
};

const addLine = () => {
  const lineName = elementIds.lineNameInput;
  // const lineStartStationSelector = elementIds.lineStartStationSelector;
  // const lineEndStationSelector = elementIds.lineEndStationSelector;

  console.log(storage.getLocalStorageMap('subway-station'))
  console.log(lineName.value);
};

export const controlLineManagement = () => {
  addButtonEvent(elementIds.lineManagerButton, toggleDisplayLineManagement);
  addButtonEvent(elementIds.lineAddButton, addLine);
};
