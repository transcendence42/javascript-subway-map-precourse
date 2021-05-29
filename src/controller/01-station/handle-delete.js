import { ID, CLASS } from '../../constants/index.js';
import { deleteStationListTableTbody } from '../../view/01-station/index.js';
import { deleteStationLocalStorage } from '../../model/01-station/index.js';

export const setEventStationDeleteButton = () => {
  const deleteButtonClasses = document.getElementsByClassName(
    CLASS.STATION_DELETE_BUTTON,
  );
  const index = deleteButtonClasses.length - 1;
  deleteButtonClasses[index].addEventListener('click', () =>
    deleteStation(deleteButtonClasses[index]),
  );
};

export const deleteStation = (line) => {
  const stationName = line
    .closest('tr')
    .getElementsByTagName('td')[0].innerText;

  deleteStationListTableTbody(line);
  deleteStationLocalStorage(stationName);
};

export const handleStationDelete = () => {
  for (const line of document.getElementsByClassName(ID.STATION_DELETE_BUTTON)) {
    line.addEventListener('click', () => deleteStation(line));
  }
};
