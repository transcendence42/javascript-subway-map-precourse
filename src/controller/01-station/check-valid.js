import { ALERT } from '../../constants/index.js';
import { loadStationLocalStorage } from '../../model/01-station/index.js';

const checkStationNameLengthValid = (stationName) => {
  return stationName.length < 2;
};

const checkStationNameDoubleValid = (stationName, stations) => {
  return stations.some((x) => x.name === stationName)
};

export const checkStationValid = (stationName) => {
  if (checkStationNameLengthValid(stationName)) {
    alert(ALERT.STATION_NAME_LENGTH);
    return false;
  }
  if (checkStationNameDoubleValid(stationName, loadStationLocalStorage())) {
    alert(ALERT.STATION_NAME_DOUBLE);
    return false;
  }
  return true;
};