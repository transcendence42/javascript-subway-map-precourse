import { ID } from '../../constants/index.js';
import { checkLineValid } from './check-valid.js';
import { addLineLocalStorage } from '../../model/02-line/index.js';
import { addLineListTableTbody } from '../../view/02-line/index.js';
import { clearInput } from '../utils.js';
import { setEventLineDeleteButton } from './handle-delete.js';

const addLine = () => {
  const lineNameInputId = document.getElementById(ID.LINE_NAME_INPUT);
  const lineName = lineNameInputId.value;
  const startStation = document.getElementById(ID.LINE_START_STATION_SELECTOR).value;
  const endStation = document.getElementById(ID.LINE_END_STATION_SELECTOR).value;

  if (!checkLineValid(lineName, startStation, endStation)) {
    // clearInput(lineNameInputId);
    return ;
  }
  addLineListTableTbody(lineName, startStation, endStation);
  addLineLocalStorage(lineName, startStation, endStation);
  setEventLineDeleteButton();
  clearInput(lineNameInputId);
}

export const handleLineAdd = () => {
  document
    .getElementById(ID.LINE_ADD_BUTTON)
    .addEventListener('click', addLine);
};
