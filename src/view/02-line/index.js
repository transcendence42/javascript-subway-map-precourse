import { ID } from '../../constants/index.js';
import { loadLineLocalStorage } from '../../model/02-line/index.js';
import { removeChildNodes } from '../utils.js';
import {
  lineManagerDiv,
  lineListTable,
  lineListTableTbody,
  lineListTableThead,
} from './template.js';

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
    .insertAdjacentHTML(`afterbegin`, lineListTableThead());
};

export const addLineListTableTbody = (lineName, startStation, endStation) => {
  document
    .getElementById(ID.LINE_LIST_TABLE)
    .insertAdjacentHTML(
      `beforeend`,
      lineListTableTbody(lineName, startStation, endStation),
    );
};

export const deleteLineListTableTbody = (target) => {
  target.closest('tbody').remove();
};

export const renderLineListTableTbodys = () => {
  const lineListTableId = document.getElementById(ID.LINE_LIST_TABLE);
  if (lineListTableId.hasChildNodes()) {
    removeChildNodes(lineListTableId);
  }
  if (!lineListTableId.hasChildNodes()) {
    renderLineListTableThead();
  }
  const lines = loadLineLocalStorage();
  if (lines !== null) {
    lines.forEach((item) => {
      let stations = item.stations;
      addLineListTableTbody(
        item.line,
        stations[0],
        stations[stations.length - 1],
      );
    });
  }
};

export const addLineSelectOption = (element, value) => {
  const option = document.createElement('option');
  option.value = value;
  option.innerHTML = value;
  element.appendChild(option);
};

export const lineRenderer = () => {
  renderLineManagerDiv();
  renderLineListTable();
  renderLineListTableThead();
  renderLineListTableTbodys();
};
