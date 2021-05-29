import { ID, CLASS } from '../../constants/index.js';
import { addStationListTableTr } from '../../view/01-station/index.js';
import { addStationLocalStorage } from '../../model/01-station/index.js';
import { clearInput } from '../utils.js';
import { checkStationNameValid } from './check-valid.js';
import { setEventStationDeleteButton } from './handle-delete.js';

const addStation = () => {
  const stationNameInputID = document.getElementById(ID.STATION_NAME_INPUT);
  const stationName = stationNameInputID.value;

  if (checkStationNameValid(stationName)) {
    addStationListTableTr(stationName);
    addStationLocalStorage(stationName);
  }
  setEventStationDeleteButton();
  clearInput(stationNameInputID);
};

export const handleStationAdd = () => {
  document
    .getElementById(ID.STATION_ADD_BUTTON)
    .addEventListener('click', addStation);
};
