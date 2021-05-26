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

const checkValidLineSelector = (lineStartStationSelectorValue, lineEndStationSelectorValue) => {
  if (lineStartStationSelectorValue === lineEndStationSelectorValue) {
    alert(errorMessage.stationDuplicate);
    return false;
  } 
  return true;
  // TODO storage compare
}

const addLine = () => {
  const lineStartStationSelectorValue = elementIds.lineStartStationSelector.value;
  const lineEndStationSelectorValue = elementIds.lineEndStationSelector.value;
  if (!checkValidLineSelector(lineStartStationSelectorValue, lineEndStationSelectorValue)) {
    return ;
  }

  let line = new Map();
  line.set(elementIds.lineNameInput.value , {
    lineStartStationSelectorValue,
    lineEndStationSelectorValue,
  })
  console.log(line)
  storage.setLocalStorageMap('subway-line', line);
};

export const controlLineManagement = () => {
  addButtonEvent(elementIds.lineManagerButton, toggleDisplayLineManagement);
  addButtonEvent(elementIds.lineAddButton, addLine);
};
