import { errorMessage } from '../error-message.js';
import { storage } from '../../model/index.js';
import { elementIds } from '../../utils.js';

export const addLineList = (
  lineStartStationSelectorValue,
  lineEndStationSelectorValue,
) => {
  if (!storage.getLocalStorage('subway-line-list')) {
    storage.setLocalStorageArray('subway-line-list', []);
  }
  let lineList = storage.getLocalStorageArray('subway-line-list');
  lineList.push(lineStartStationSelectorValue, lineEndStationSelectorValue);
  storage.setLocalStorageArray('subway-line-list', lineList);
};

export const addLineLocalStorage = (
  lineStartStationSelectorValue,
  lineEndStationSelectorValue,
) => {
  if (!storage.getLocalStorage('subway-line')) {
    storage.setLocalStorageMap('subway-line', new Map());
  }
  const subwayLine = storage.getLocalStorageMap('subway-line');
  if (subwayLine.get(elementIds.lineNameInput.value)) {
    alert(errorMessage.lineDuplicate);
    return false;
  }
  subwayLine.set(elementIds.lineNameInput.value, [
    lineStartStationSelectorValue,
    lineEndStationSelectorValue,
  ]);
  storage.setLocalStorageMap('subway-line', subwayLine);
  return true;
};
