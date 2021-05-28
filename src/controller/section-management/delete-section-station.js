import { renderLineManagementTable, renderSectionTable } from './view.js';
import { storage } from '../../model/index.js';
import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';

const deleteLineStation = (e) => {
  const lineName = document
    .getElementsByTagName('h3')[1]
    .innerHTML.slice(0, -3);
  const lineStation = e.currentTarget.dataset.lineStation.slice(0, -7);
  if (!storage.removeSectionStation(lineName, lineStation)) {
    alert('역은 2개 이하로 삭제할 수 없습니다.');
  }
  renderSectionTable(storage.getLocalStorageMap('subway-line').get(lineName));
  renderLineManagementTable();
};

export const addDeleteEvent = () => {
  for (let button of elementIds.sectionDeleteButton) {
    addButtonEvent(button, deleteLineStation);
  }
};
