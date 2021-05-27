import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';
import { storage } from '../../model/index.js';
import { errorMessage } from '../error-message.js';

const toggleSectionManagement = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = !elementIds.sectionManagement.hidden;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
};

const renderSelectionRegister = (lineName) => {
  elementIds.sectionManageText.innerHTML = '';
  elementIds.sectionManageText.insertAdjacentHTML(
    'afterbegin',
    `<h3>${lineName}</h3>`,
  );
  elementIds.sectionRegister.hidden = false;
};

const addSelectOption = (element, stations) => {
  stations.forEach((station) => {
    let option = document.createElement('option');
    option.value = station;
    option.innerHTML = station;
    element.appendChild(option);
  });
};

const renderAddLineStation = ({ index, value }) => {
  elementIds.sectionTableTbody.insertAdjacentHTML(
    'beforeend',
    `<tr data-line-station=\'${value}\'><td>${index}</td><td>${value}</td><td><button class='section-delete-button' data-line-station=\'${value}-button\'>노선에서 제거</button></td></tr>`,
  );
};

const deleteLineStation = (e) => {
  const lineName = document.getElementsByTagName('h3')[1].innerHTML;
  const lineStation = e.currentTarget.dataset.lineStation.slice(0, -7);
  if (!storage.removeSectionStation(lineName, lineStation)) {
    alert('역은 2개 이하로 삭제할 수 없습니다.');
  }
  renderSectionTable(storage.getLocalStorageMap('subway-line').get(lineName));
};

const addDeleteEvent = () => {
  for (let button of elementIds.sectionDeleteButton) {
    addButtonEvent(button, deleteLineStation);
  }
}

const renderSectionTable = (lineStation) => {
  elementIds.sectionTableTbody.innerHTML = '';
  lineStation.forEach((value, index) => {
    renderAddLineStation({ index, value });
  });
  addDeleteEvent();
};

const removeChildAllElements = (element) => {
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
};

const renderSelect = (lineName) => {
  let lineStation;
  removeChildAllElements(elementIds.sectionStationSelector);
  addSelectOption(elementIds.sectionStationSelector, [
    ...storage.getLocalStorageMap('subway-station').keys(),
  ]);
  for (let item of storage.getLocalStorageMap('subway-line')) {
    if (lineName === item[0]) {
      lineStation = item[1];
    }
  }
  renderSectionTable(lineStation);
};

const selectSectionLineButton = (e) => {
  const lineName = e.currentTarget.dataset.line;
  renderSelectionRegister(lineName);
  renderSelect(lineName);
};

const findSubwayLineTag = () => {
  for (let item of storage.getLocalStorageMap('subway-line')) {
    if (item[0] === document.getElementsByTagName('h3')[1].innerHTML) {
      return item;
    }
  }
  return;
};

const checkValidInput = (stationLength, sectionOrderInputValue) => {
  return stationLength >= sectionOrderInputValue && sectionOrderInputValue >= 0;
};

const checkValidOption = (lineStation, sectionStationOption) => {
  return !lineStation.includes(sectionStationOption);
};

const checkValidValue = ({
  lineStation,
  sectionOrderInputValue,
  sectionStationOption,
}) => {
  if (!checkValidInput(lineStation.length, Number(sectionOrderInputValue))) {
    initSectionInput(errorMessage.sectionInvalidRangeInput);
    return false;
  }
  if (!checkValidOption(lineStation, sectionStationOption)) {
    initSectionInput(errorMessage.sectionInvalidOption);
    return false;
  }
  return true;
};

const initSectionInput = (message) => {
  alert(message);
  elementIds.sectionOrderInput.value = '';
  elementIds.sectionOrderInput.focus();
};

const storeLineStation = ({ subwayLines, lineStation }) => {
  let lineName = document.getElementsByTagName('h3')[1].innerHTML;
  subwayLines.set(lineName, lineStation);
  storage.setLocalStorageMap('subway-line', subwayLines);
};

const addLineStation = ({ sectionOrderInputValue, sectionStationOption }) => {
  const subwayLines = storage.getLocalStorageMap('subway-line');
  const lineName = document.getElementsByTagName('h3')[1].innerHTML;
  let lineStation = subwayLines.get(lineName);

  lineStation.splice(sectionOrderInputValue, 0, sectionStationOption);
  renderSectionTable(lineStation);
  storeLineStation({ subwayLines, lineStation });
};

const addSectionLineStation = () => {
  let subwayLine;
  const sectionOrderInputValue = elementIds.sectionOrderInput.value;
  const sectionStationOption = elementIds.sectionStationSelector.value;

  subwayLine = findSubwayLineTag();
  if (
    !checkValidValue({
      lineStation: subwayLine[1],
      sectionOrderInputValue,
      sectionStationOption,
    })
  ) {
    return;
  }
  addLineStation({ sectionOrderInputValue, sectionStationOption });
};

export const controlSectionManagement = () => {
  addButtonEvent(elementIds.sectionManagerButton, toggleSectionManagement);
  for (let item of elementIds.sectionLineMenuButton) {
    addButtonEvent(item, selectSectionLineButton);
  }
  addButtonEvent(elementIds.sectionAddButton, addSectionLineStation);
};
