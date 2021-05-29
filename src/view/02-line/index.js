import { ID } from '../../constants/index.js';
import { lineManagerDiv, lineTable, lineListTableTbody } from './template.js';

const createLineTable = () => {
  document
    .getElementById(ID.LINE_MANAGER)
    .insertAdjacentHTML(`beforeend`, lineTable());
};

const createLineManager = () => {
  document
    .getElementById('app')
    .insertAdjacentHTML(`beforeend`, lineManagerDiv());
  createLineTable();
};

export const addLineListTableTbody = (lineName, startStation, endStation) => {
  document
    .getElementById(ID.LINE_TABLE)
    .insertAdjacentHTML(
      `beforeend`,
      lineListTableTbody(lineName, startStation, endStation),
    );
};

export const lineRenderer = () => {
  createLineManager();
};
