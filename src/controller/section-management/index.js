import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';
import { storage } from '../../model/index.js';
import {errorMessage} from '../error-message.js';

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


// const addSectionRemoveButtonEvent = (stationNameInput) => {
//   for (let item of document.querySelectorAll(`tbody tr button`)) {
//     if (item.dataset.station === `${stationNameInput}-button`) {
//       addButtonEvent(item, deleteStation);
//     }
//   }
// };

const renderAddLineStation = ({index, value}) => {
  elementIds.sectionTableTbody.insertAdjacentHTML(
    'beforeend',
    `<tr data-line-station=\'${index}\'><td>${index}</td><td>${value}</td><td><button class='section-delete-button' data-line-station=\'${value}-button\'>노선에서 제거</button></td></tr>`,
  );
};

const renderSectionTable = (lineStation) => {
  elementIds.sectionTableTbody.innerHTML = ''
  lineStation.forEach((value, index) => {
    renderAddLineStation({index, value})
  });
}

const renderSelect = (lineName) => {
  let lineStation;
  for (let item of storage.getLocalStorageMap('subway-line')) {
    if (lineName === item[0]) {
      lineStation = item[1];
      addSelectOption(elementIds.sectionStationSelector, lineStation);
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
  return ;
}

const checkValidInput = (stationLength, sectionOrderInputValue) => {
  return stationLength >= sectionOrderInputValue && sectionOrderInputValue >= 0
}

const checkValidOption = (lineStation, sectionStationOption) => {
  return !lineStation.includes(sectionStationOption)
}

const checkValidValue = ({lineStation, sectionOrderInputValue, sectionStationOption}) => {
  if (!checkValidInput(lineStation.length, Number(sectionOrderInputValue))) {
    initSectionInput(errorMessage.sectionInvalidRangeInput)
    return false;
  }
  if (!checkValidOption(lineStation, sectionStationOption)) {
    initSectionInput(errorMessage.sectionInvalidOption)
    return false;
  }
  return true;
}

const initSectionInput = (message) => {
  alert(message);
  elementIds.sectionOrderInput.value = ''
  elementIds.sectionOrderInput.focus()
}

const addLineStation = () => {

}

const addSectionLineStation = () => {
  let subwayLine;
  const sectionOrderInputValue = elementIds.sectionOrderInput.value
  const sectionStationOption = elementIds.sectionStationSelector.value

  subwayLine = findSubwayLineTag();
  if (!checkValidValue({lineStation: subwayLine[1], sectionOrderInputValue, sectionStationOption})) {
    return ;
  }
  // console.log(subwayLine.values())
  // if (subwayLine.values)
}

export const controlSectionManagement = () => {
  addButtonEvent(elementIds.sectionManagerButton, toggleSectionManagement);
  for (let item of elementIds.sectionLineMenuButton) {
    addButtonEvent(item, selectSectionLineButton);
  }
  addButtonEvent(elementIds.sectionAddButton, addSectionLineStation);
};
