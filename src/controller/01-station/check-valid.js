import { ALERT } from '../../constants/index.js';
import { loadStationLocalStorage } from '../../model/01-station/index.js';
import { loadLineLocalStorage } from '../../model/02-line/index.js';
import { renderLineListTableTbodys } from '../../view/02-line/index.js';

const checkStationNameLength = (stationName) => {
  return stationName.length < 2;
};

const checkStationNameExist = (stationName, stations) => {
  return stations.some((x) => x === stationName);
};

const checkStationNameRegExp = (stationName) => {
  const stationRegExp = /^[가-힣]+$/;
  return !stationRegExp.test(stationName);
};

export const checkStationRegisteredLine = (stationName) => {
  const lines = loadLineLocalStorage();
  let registerdFlag = false;

  for (let index = 0; index < lines.length; index += 1) {
    let tmpStations = lines[index].stations.filter((x) => x != stationName);
    if (tmpStations.length != lines[index].stations.length)
      registerdFlag = true;
  }
  return registerdFlag;
};

export const checkStationValid = (stationName) => {
  if (checkStationNameLength(stationName)) {
    alert(ALERT.STATION_NAME_LENGTH);
    return false;
  }
  if (checkStationNameRegExp(stationName)) {
    alert(ALERT.STATION_NAME_REGEXP);
    return false;
  }
  if (checkStationNameExist(stationName, loadStationLocalStorage())) {
    alert(ALERT.STATION_NAME_EXIST);
    return false;
  }
  return true;
};
