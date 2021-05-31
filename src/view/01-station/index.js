import { ID } from '../../constants/index.js';
import {
  stationManagerDiv,
  stationListTable,
  stationListTableTbody,
  stationListTableThead,
} from './template.js';
import { loadStationLocalStorage } from '../../model/01-station/index.js';
import { removeChildNodes } from '../utils.js';

const renderStationManagerDiv = () => {
  document
    .getElementById('app')
    .insertAdjacentHTML(`beforeend`, stationManagerDiv());
};

const renderStationListTable = () => {
  document
    .getElementById(ID.STATION_MANAGER)
    .insertAdjacentHTML(`beforeend`, stationListTable());
};

const renderStationListTableThead = () => {
  document
    .getElementById(ID.STATION_LIST_TABLE)
    .insertAdjacentHTML(`afterbegin`, stationListTableThead());
};

export const addStationListTableTbody = (name) => {
  document
    .getElementById(ID.STATION_LIST_TABLE)
    .insertAdjacentHTML(`beforeend`, stationListTableTbody(name));
};

export const deleteStationListTableTbody = (target) => {
  target.closest('tbody').remove();
};

export const renderStationListTableTbodys = () => {
  const stationListTableId = document.getElementById(ID.STATION_LIST_TABLE);
  if (stationListTableId.hasChildNodes()) {
    removeChildNodes(stationListTableId);
  }
  if (!stationListTableId.hasChildNodes()) {
    renderStationListTableThead();
  }
  const stations = loadStationLocalStorage();
  if (stations !== null) {
    stations.forEach((stationName) => {
      addStationListTableTbody(stationName);
    });
  }
};

export const stationRenderer = () => {
  renderStationManagerDiv();
  renderStationListTable();
  renderStationListTableThead();
  renderStationListTableTbodys();
};
