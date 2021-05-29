import { ID } from '../../constants/index.js';
import { checkLineValid } from './check-valid.js';
import { addLineLocalStorage } from '../../model/02-line/index.js';
import { addLineListTableTbody } from '../../view/02-line/index.js';

const addLine = () => {
  const lineNameInputId = document.getElementById(ID.LINE_NAME_INPUT);
  const lineName = lineNameInputId.value;
  const startStation = document.getElementById(ID.LINE_START_STATION_SELECTOR).value;
  const endStation = document.getElementById(ID.LINE_END_STATION_SELECTOR).value;
  // console.log(lineName);
  // console.log(startStation);
  // console.log(endStation);

  if (checkLineValid(lineName, startStation, endStation)) {
    addLineListTableTbody(lineName, startStation, endStation);
    addLineLocalStorage(lineName, startStation, endStation);
  }
}

export const handleLineAdd = () => {
  document
    .getElementById(ID.LINE_ADD_BUTTON)
    .addEventListener('click', addLine);
};
