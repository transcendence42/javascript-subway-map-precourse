import { addButtonEvent } from '../utils.js';
import { storage } from '../../model/index.js';
import { elementIds } from '../../utils.js';
import {errorMessage} from '../error-message.js';

const toggleDisplayLineManagement = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = !elementIds.lineManagement.hidden;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
};

const addLineLocalStorage = (lineStartStationSelectorValue, lineEndStationSelectorValue) => {
  if (!storage.getLocalStorage('subway-line')) {
    storage.setLocalStorageMap(new Map());
  }
  const subwayLine = storage.getLocalStorageMap('subway-line');
  if (subwayLine.get(elementIds.lineNameInput.value)) {
    alert(errorMessage.lineDuplicate);
    return false;
  }
  subwayLine.set(elementIds.lineNameInput.value , {
    lineStartStationSelectorValue,
    lineEndStationSelectorValue,
  })
  storage.setLocalStorageMap('subway-line', subwayLine);
  return true;
}

const checkValidLineSelector = (lineStartStationSelectorValue, lineEndStationSelectorValue) => {
  if (lineStartStationSelectorValue === lineEndStationSelectorValue) {
    alert(errorMessage.stationDuplicate);
    return false;
  } else if (storage.getLocalStorageMap('subway-line'))
  return true;
}

const addLine = () => {
  const lineStartStationSelectorValue = elementIds.lineStartStationSelector.value;
  const lineEndStationSelectorValue = elementIds.lineEndStationSelector.value;
  if (!checkValidLineSelector(lineStartStationSelectorValue, lineEndStationSelectorValue)) {
    return ;
  }
  addLineLocalStorage(lineStartStationSelectorValue, lineEndStationSelectorValue);
  console.log(storage.getLocalStorageMap('subway-line'));
};

export const controlLineManagement = () => {
  addButtonEvent(elementIds.lineManagerButton, toggleDisplayLineManagement);
  addButtonEvent(elementIds.lineAddButton, addLine);
};
