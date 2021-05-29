import { ID } from '../../constants/index.js';
import { createStationList } from '../../view/01-station/index.js';

const toggleStationManagerButton = () => {
  const mySelf = document.getElementById(ID.STATION_MANAGER);
  if (mySelf.hidden === false) {
    mySelf.hidden = true;
    return;
  }
  mySelf.hidden = false;
  createStationList();
  document.getElementById(ID.STATION_NAME_INPUT).focus();
  document.getElementById(ID.LINE_MANAGER).hidden = true;
};

export const addEvent = () => {

}

export const handleStationManager = () => {
  document
    .getElementById(ID.STATION_MANAGER_BUTTON)
    .addEventListener('click', () => toggleStationManagerButton());
};
