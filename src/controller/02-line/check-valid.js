import { ID, ALERT } from '../../constants/index.js';
import { loadLineLocalStorage } from '../../model/02-line/index.js';

const checkLineNameLength = (lineName) => {
  return lineName.length < 1;
};

const checkLineNameDouble = (lineName, lines) => {
  return lines.some((item) => item.line === lineName)
};

const checkLineNameRegExp = (lineName) => {
  const lineRegExp = /^[가-힣0-9]+$/;
  return !lineRegExp.test(lineName);
};

// const checkLineAlreadyExistValid = (startStation, endStation) => {
//   const lines = loadLineLocalStorage();
//   lines.forEach((item) => {
//     let stations = item.stations;
//     if (startStation === stations[0] && endStation === stations[stations.length - 1]);
//       return false;
//   })
//   return true;
// }

export const checkLineValid = (lineName, startStation, endStation) => {
  if (checkLineNameLength(lineName)) {
    alert(ALERT.LINE_NAME_LENGTH);
    document.getElementById(ID.LINE_NAME_INPUT).focus();
    return false;
  }
  if (checkLineNameRegExp(lineName)) {
    alert(ALERT.LINE_NAME_REGEXP);
    return false;
  }
  if (checkLineNameDouble(lineName, loadLineLocalStorage())) {
    alert(ALERT.LINE_NAME_DOUBLE);
    return false;
  }
  // if (checkLineAlreadyExistValid(startStation, endStation)) {
  //   alert('상행 종점역과 하행 종점역이 동일한 노선이 이미 존재합니다');
  //   return false;
  // }
  if (startStation === endStation) {
    alert(ALERT.LINE_STATION_DOUBLE);
    return false;
  }
  return true;
};
