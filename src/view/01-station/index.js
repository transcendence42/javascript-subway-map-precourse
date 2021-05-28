import { ID } from '../../constants/index.js';
import { stationManagerDiv, stationListTable } from './template.js';

const createStaionListTable = () => {
  document.getElementById(ID.STATION_MANAGER)
    .insertAdjacentHTML(`beforeend`, stationListTable());
}

const createStationManager = () => {
  document.getElementById('app')
    .insertAdjacentHTML(`beforeend`, stationManagerDiv());
  createStaionListTable();
};

export const stationRenderer = () => {
  createStationManager();
};
