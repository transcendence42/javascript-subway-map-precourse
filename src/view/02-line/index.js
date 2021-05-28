import { ID } from '../../constants/index.js';
import { lineManagerDiv, lineTable } from './template.js';

const createLineTable = () => {
  document.getElementById(ID.LINE_MANAGER)
    .insertAdjacentHTML(`beforeend`, lineTable());
}

const createLineManager = () => {
  document.getElementById('app')
    .insertAdjacentHTML(`beforeend`, lineManagerDiv());
  createLineTable();
};

export const lineRenderer = () => {
  createLineManager();
};
