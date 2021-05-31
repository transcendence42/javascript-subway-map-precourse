import { ID, CLASS } from '../../constants/index.js';
import { renderStationListTableTbodys } from '../../view/01-station/index.js';
import { handleStationDelete } from './handle-delete.js';

const toggleStationManagerButton = (self) => {
  if (self.hidden === false) {
    self.hidden = true;
    return;
  }
  self.hidden = false;
  document.getElementById(ID.STATION_NAME_INPUT).focus();
  document.getElementById(ID.LINE_MANAGER).hidden = true;
  // document.getElementById(ID.SECTION_MANAGER).hidden = true;
  // document.getElementById(ID.MAP_PRINT_MANAGER).hidden = true;
  renderStationListTableTbodys();
  handleStationDelete();
};

export const handleStationManager = () => {
  document
    .getElementById(ID.STATION_MANAGER_BUTTON)
    .addEventListener('click', () =>
      toggleStationManagerButton(document.getElementById(ID.STATION_MANAGER)),
    );
};
