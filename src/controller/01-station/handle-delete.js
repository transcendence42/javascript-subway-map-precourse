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

export const deleteStation = (target) => {
  const stationName = target
    .closest('tr')
    .getElementsByTagName('td')[0].innerText;

  deleteStationListTableTbody(target);
  deleteStationLocalStorage(stationName);
};

export const handleStationDelete = () => {
  for (const target of document.getElementsByClassName(ID.STATION_DELETE_BUTTON)) {
    target.addEventListener('click', () => deleteStation(target));
  }
};
