import { addButtonEvent } from '../utils.js';
import { storage } from '../../model/index.js';
import { elementIds } from '../../utils.js';
import { errorMessage } from '../error-message.js';

const toggleDisplayLineManagement = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = !elementIds.lineManagement.hidden;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
};

const addLineLocalStorage = (
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

const checkValidLineSelector = (
  lineStartStationSelectorValue,
  lineEndStationSelectorValue,
) => {
  if (lineStartStationSelectorValue === lineEndStationSelectorValue) {
    alert(errorMessage.stationDuplicate);
    return false;
  }
  return true;
};

const addLineTable = ({
  lineName,
  lineStartStationSelectorValue,
  lineEndStationSelectorValue,
}) => {
  return `<tr data-line=\'${lineName}\'><td>${lineName}</td><td>${lineStartStationSelectorValue}</td><td>${lineEndStationSelectorValue}</td><td><button class='line-delete-button' data-line=\'${lineName}-button\'>삭제</button></td></tr>`;
};

const renderLine = ({
  lineName,
  lineStartStationSelectorValue,
  lineEndStationSelectorValue,
}) => {
  let result = '';
  result += addLineTable({
    lineName,
    lineStartStationSelectorValue,
    lineEndStationSelectorValue,
  });
  elementIds.lineTableTbody.insertAdjacentHTML('beforeend', result);
};

const addLineList = (
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

const addLine = () => {
  const lineStartStationSelectorValue =
    elementIds.lineStartStationSelector.value;
  const lineEndStationSelectorValue = elementIds.lineEndStationSelector.value;
  if (
    !checkValidLineSelector(
      lineStartStationSelectorValue,
      lineEndStationSelectorValue,
    )
  ) {
    return;
  }
  if (
    !addLineLocalStorage(
      lineStartStationSelectorValue,
      lineEndStationSelectorValue,
    )
  ) {
    return;
  }
  renderLine({
    lineName: elementIds.lineNameInput.value,
    lineStartStationSelectorValue,
    lineEndStationSelectorValue,
  });
  elementIds.lineNameInput.value = '';
  elementIds.lineNameInput.focus();
  addLineList(lineStartStationSelectorValue, lineEndStationSelectorValue);
  console.log(storage.getLocalStorageMap('subway-line'));
};

const addRemoveButton = (e) => {
  const dataLine = e.currentTarget.dataset.line.slice(0, -7);
  for (let item of document.querySelectorAll(`table[id=line-table] tbody tr`)) {
    if (item.dataset.line === dataLine) {
      storage.removeLocalStorage('subway-line', item.dataset.line);
      item.remove();
    }
  }
  removeEventListener(e.currentTarget, addRemoveButton);
};

export const controlLineManagement = () => {
  addButtonEvent(elementIds.lineManagerButton, toggleDisplayLineManagement);
  addButtonEvent(elementIds.lineAddButton, addLine);
  for (let item of document.querySelectorAll(
    `table[id=line-table] tbody tr button`,
  )) {
    addButtonEvent(item, addRemoveButton);
  }
};
