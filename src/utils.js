const getElementId = (id) => {
  return document.getElementById(id);
};

const getElementClass = (className) => {
  return document.getElementsByClassName(className);
};

export const elementIds = {
  stationManagement: getElementId('station-management'),
  stationManagerButton: getElementId('station-manager-button'),
  stationNameInput: getElementId('station-name-input'),
  stationAddButton: getElementId('station-add-button'),
  stationDeleteButton: getElementClass('station-delete-button'),
  stationTableTbody: document.querySelector('tbody'),
  stationTableTbodyTr: document.querySelectorAll(`tbody tr`),
  lineManagement: getElementId('line-management'),
  lineManagerButton: getElementId('line-manager-button'),
  lineNameInput: getElementId('line-name-input'),
  lineStartStationSelector: getElementId('line-start-station-selector'),
  lineEndStationSelector: getElementId('line-end-station-selector'),
  lineAddButton: getElementId('line-add-button'),
  lineDeleteButton: getElementClass('lineDeleteButton'),
  lineTableTbody: document.querySelectorAll('tbody')[1],
  lineTableTbodyTr: document.querySelectorAll(`table[id=line-table] tr`),
  sectionManagerButton: getElementId('section-manager-button'),
  sectionManagement: getElementId('section-management'),
  sectionLineMenuButton: getElementClass('section-line-menu-button'),
  sectionStationSelector: getElementId('section-station-selector'),
  sectionOrderInput: getElementId('section-order-input'),
  sectionAddButton: getElementId('section-add-button'),
  sectionDeleteButton: getElementClass('section-delete-button'),
  sectionButtons: getElementId('section-buttons'),
  sectionRegister: getElementId('section-register'),
  sectionManageText: getElementId('section-manage-text'),
  sectionTableTbody: document.querySelectorAll('tbody')[2],
  mapPrintManagement: getElementId('map-print-management'),
  mapPrintManagerButton: getElementId('map-print-manager-button'),
};
