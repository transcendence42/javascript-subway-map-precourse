import { ID } from '../../constants/index.js';
import { removeChildNodes } from '../utils.js';
import { lineManagerDiv, lineListTable, lineListTableTbody, lineListTableThead } from './template.js';

const renderLineManagerDiv = () => {
  document
    .getElementById('app')
    .insertAdjacentHTML(`beforeend`, lineManagerDiv());
};

const renderLineListTable = () => {
  document
    .getElementById(ID.LINE_MANAGER)
    .insertAdjacentHTML(`beforeend`, lineListTable());
};

const renderLineListTableThead = () => {
  document
    .getElementById(ID.LINE_LIST_TABLE)
    .insertAdjacentHTML(`afterbegin`, lineListTableThead())
}

export const addLineListTableTbody = (lineName, startStation, endStation) => {
  document
    .getElementById(ID.LINE_LIST_TABLE)
    .insertAdjacentHTML(
      `beforeend`,
      lineListTableTbody(lineName, startStation, endStation),
    );
};

export const renderLineListTableTbodys = () => {
  const lineListTableId = document.getElementById(ID.LINE_LIST_TABLE);
  if (lineListTableId.hasChildNodes()) {
    removeChildNodes(lineListTableId);
  }
  if (!lineListTableId.hasChildNodes()) {
    renderLineListTableThead();
  }
}

export const lineRenderer = () => {
  renderLineManagerDiv();
  renderLineListTable();
  renderLineListTableThead();
};
