import { ID } from '../../constants/index.js';
import Station from '../../model/01-station/index.js';

const toggleStationManagerButton = () => {
  const self = document.getElementById(ID.STATION_MANAGER);

  if (self.hidden === false) {
    self.hidden = true;
    return;
  }
  self.hidden = false;
  document.getElementById(ID.LINE_MANAGER).hidden = true;
  // document.getElementById(ID.SECTION_MANAGER).hidden = true;
  // document.getElementById(ID.MAP_PRINT_MANAGER).hidden = true;
};

const handleStationManagerButton = () => {
  const stationManagerButton = document.getElementById(
    ID.STATION_MANAGER_BUTTON,
  );
  stationManagerButton.addEventListener('click', toggleStationManagerButton);
};

const createTableRow = (name) => {
  return `
    <tr>
      <td>${name}</td>
      <td><button id = '${ID.STATION_DELETE_BUTTON}'>삭제</td>
    </tr>
  `
}

const addStation = () => {
  console.log('hi2');
  const stationName = document.getElementById(ID.STATION_NAME_INPUT).value;
  const stationListTable = document.getElementById(ID.STATION_LIST_TABLE);
  stationListTable.insertAdjacentHTML(`beforeend`, createTableRow(stationName));
  // Station.addStation();
}

const handleStationAddButton = () => {
  console.log('hi');
  const stationAddButton = document.getElementById(ID.STATION_ADD_BUTTON);
  stationAddButton.addEventListener('click', addStation);
};

export const stationManager = () => {
  handleStationManagerButton();
  handleStationAddButton();
  // handleDeleteStationButton();
};
