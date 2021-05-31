import { ID } from '../../constants/index.js';
import {
  addLineSelectOption,
  renderLineListTableTbodys,
} from '../../view/02-line/index.js';
import { loadStationLocalStorage } from '../../model/01-station/index.js';
import { handleLineDelete } from './handle-delete.js';

const toggleLineManagerButton = (self) => {
  if (self.hidden === false) {
    self.hidden = true;
    return;
  }
  self.hidden = false;
  document.getElementById(ID.LINE_NAME_INPUT).focus();
  document.getElementById(ID.STATION_MANAGER).hidden = true;
  // document.getElementById(ID.SECTION_MANAGER).hidden = true;
  // document.getElementById(ID.MAP_PRINT_MANAGER).hidden = true;
  renderLineListTableTbodys();
  handleLineDelete();
};

const setLineStationSelector = () => {
  loadStationLocalStorage().forEach((stationName) => {
    addLineSelectOption(
      document.getElementById(ID.LINE_START_STATION_SELECTOR),
      stationName,
    );
    addLineSelectOption(
      document.getElementById(ID.LINE_END_STATION_SELECTOR),
      stationName,
    );
  });
};

export const handleLineManager = () => {
  setLineStationSelector();
  document
    .getElementById(ID.LINE_MANAGER_BUTTON)
    .addEventListener('click', () =>
      toggleLineManagerButton(document.getElementById(ID.LINE_MANAGER)),
    );
};
