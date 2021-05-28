import { ID } from '../../constants/index.js';
import { addStationListTableTr } from '../../view/01-station/index.js';
import { loadStationLocalStorage } from '../../model/01-station/index.js';

const toggleStationManagerButton = () => {
  const self = document.getElementById(ID.STATION_MANAGER);
  if (self.hidden === false) {
    self.hidden = true;
    return;
  }
  self.hidden = false;
  document.getElementById(ID.STATION_NAME_INPUT).focus();
  document.getElementById(ID.LINE_MANAGER).hidden = true;
  // document.getElementById(ID.SECTION_MANAGER).hidden = true;
  // document.getElementById(ID.MAP_PRINT_MANAGER).hidden = true;
};

const setStationList = () => {
  const stationNameArray = loadStationLocalStorage().map((x) => {
    return x.name;
  });
  if (stationNameArray !== null) {
    stationNameArray.forEach((x) => {
      addStationListTableTr(x);
    });
  }
};

export const handleStationManagerButton = () => {
  document
    .getElementById(ID.STATION_MANAGER_BUTTON)
    .addEventListener('click', toggleStationManagerButton);
  setStationList();
};
