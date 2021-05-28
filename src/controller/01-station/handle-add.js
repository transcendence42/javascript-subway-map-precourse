import { ID } from '../../constants/index.js';
import { addStationListTableTr } from '../../view/01-station/index.js';
import { storeStationLocalStorage } from '../../model/01-station/index.js';
import { inputClear } from '../utils.js';
import { checkStationNameValid } from './check-valid.js';

const addStation = () => {
  const stationNameInputID = document.getElementById(ID.STATION_NAME_INPUT);
  const stationName = stationNameInputID.value;
  if (checkStationNameValid(stationName)) {
    addStationListTableTr(stationName);
    storeStationLocalStorage(stationName);
  }
  inputClear(stationNameInputID);
};

export const handleStationAddButton = () => {
  document
    .getElementById(ID.STATION_ADD_BUTTON)
    .addEventListener('click', addStation);
};
