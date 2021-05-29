import { ID } from '../../constants/index.js';
import {
  stationManagerDiv,
  stationListTable,
  stationListTableTbody,
  stationListTableThead,
} from './template.js';
import { loadStationLocalStorage } from '../../model/01-station/index.js';
import { removeChildNodes } from '../utils.js';

export const addStationListTableTbody = (name) => {
  document
    .getElementById(ID.STATION_LIST_TABLE)
    .insertAdjacentHTML(`beforeend`, stationListTableTbody(name));
};

export const deleteStationListTableTbody = (line) => {
  const target = line.closest('tbody');
  target.remove();
};

const createStationListTableThead = () => {
  document
    .getElementById(ID.STATION_LIST_TABLE)
    .insertAdjacentHTML(`afterbegin`, stationListTableThead());
};

const createStationListTable = () => {
  document
    .getElementById(ID.STATION_MANAGER)
    .insertAdjacentHTML(`beforeend`, stationListTable());
  createStationListTableThead();
};

const createStationManagerDiv = () => {
  document
    .getElementById('app')
    .insertAdjacentHTML(`beforeend`, stationManagerDiv());
  createStationListTable();
};

export const createStationList = () => {
  const stationListTableId = document.getElementById(ID.STATION_LIST_TABLE);
  removeChildNodes(stationListTableId);
  if (!stationListTableId.hasChildNodes()) {
    createStationListTableThead();
  }
  const stationNameArray = loadStationLocalStorage().map((x) => {
    return x.name;
  });
  if (stationNameArray !== null) {
    stationNameArray.forEach((x) => {
      addStationListTableTbody(x);
    });
  }
};

export const stationRenderer = () => {
  createStationManagerDiv();
  createStationList();
};
