import { ALERT } from '../../constants/index.js';
import { loadStationLocalStorage } from '../../model/01-station/index.js';

const checkStationNameLengthValid = (stationName) => {
  return stationName.length < 2;
};

const checkStationDoubleValid = (stationName, stationNameArray) => {
  return stationNameArray.some((x) => x.name === stationName)
};

export const checkStationNameValid = (stationName) => {
  if (checkStationNameLengthValid(stationName)) {
    alert(ALERT.STATION_NAME_LENGTH);
    return false;
  } else if (checkStationDoubleValid(stationName, loadStationLocalStorage())) {
    alert(ALERT.STATION_NAME_DOUBLE);
    return false;
  }
  return true;
};