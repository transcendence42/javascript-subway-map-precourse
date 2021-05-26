import { storage } from '../../model/index.js';
import { elementIds, addButtonEvent } from '../utils.js';
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

const addStationLocalStorage = stationNameInput => {
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

const renderStation = stationNameInput => {
  document
    .querySelector('tbody')
    .insertAdjacentHTML(
      'beforeend',
      `<tr><td>${stationNameInput}</td><td><button id='stationDeleteButton'>삭제</button></td></tr>`,
    );
};

const addStation = () => {
  const stationNameInput = elementIds.stationNameInput.value;
  addStationLocalStorage(stationNameInput);
  renderStation(stationNameInput);
};

{
  /* <tr>
<td>John</td>
<td>Doe</td>
</tr> */
}
{
  /* <button class="station-delete-button">삭제</button>         */
}

export const controlStationManagement = () => {
  addButtonEvent(
    elementIds.stationManagerButton,
    toggleDisplayStationManagement,
  );
  addButtonEvent(elementIds.stationAddButton, addStation);
};
