import { ID, CLASS } from '../../constants/index.js';
import { addStationListTableTbody } from '../../view/01-station/index.js';
import { addStationLocalStorage } from '../../model/01-station/index.js';
import { clearInput } from '../utils.js';
import { checkStationValid } from './check-valid.js';
import { setEventStationDeleteButton } from './handle-delete.js';
import { addLineSelectOption } from '../../view/02-line/index.js';

const addStation = () => {
  const stationNameInputID = document.getElementById(ID.STATION_NAME_INPUT);
  const stationName = stationNameInputID.value;

  if (!checkStationValid(stationName)) {
    clearInput(stationNameInputID);
    return ;
  }
  addStationListTableTbody(stationName);
  addStationLocalStorage(stationName, 'none');
  addLineSelectOption(document.getElementById(ID.LINE_START_STATION_SELECTOR), stationName)
  addLineSelectOption(document.getElementById(ID.LINE_END_STATION_SELECTOR), stationName)
  setEventStationDeleteButton();
  clearInput(stationNameInputID);
};

export const handleStationAdd = () => {
  document
    .getElementById(ID.STATION_ADD_BUTTON)
    .addEventListener('click', () => addStation());
};
