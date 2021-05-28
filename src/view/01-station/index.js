import { ID } from '../../constants/index.js';
import {
  stationManagerDiv,
  stationListTable,
  stationListTableTr,
} from './template.js';

export const addStationListTableTr = (name) => {
  document
    .getElementById(ID.STATION_LIST_TABLE)
    .insertAdjacentHTML(`beforeend`, stationListTableTr(name));
};

const createStationListTable = () => {
  document
    .getElementById(ID.STATION_MANAGER)
    .insertAdjacentHTML(`beforeend`, stationListTable());
};

const createStationManager = () => {
  document
    .getElementById('app')
    .insertAdjacentHTML(`beforeend`, stationManagerDiv());
  createStationListTable();
};

export const stationRenderer = () => {
  createStationManager();
};
