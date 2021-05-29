import { ID, ALERT } from '../../constants/index.js';
import { loadLineLocalStorage } from '../../model/02-line/index.js';

const checkLineNameLengthValid = (lineName) => {
  return lineName.length < 1;
};

const checkLineNameDoubleValid = (lineName, lines) => {
  return lines.some((item) => item === lineName);
};

export const checkLineValid = (lineName, startStation, endStation) => {
  if (checkLineNameLengthValid(lineName)) {
    alert(ALERT.LINE_NAME_LENGTH);
    document.getElementById(ID.LINE_NAME_INPUT).focus();
    return false;
  }
  if (checkLineNameDoubleValid(lineName, loadLineLocalStorage())) {
    alert(ALERT.LINE_NAME_DOUBLE);
    return false;
  }
  if (startStation === endStation) {
    alert(ALERT.LINE_STATION_DOUBLE);
    return false;
  }
  return true;
};
