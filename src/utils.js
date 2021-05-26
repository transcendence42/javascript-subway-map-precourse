const getElementId = id => {
  return document.getElementById(id);
};

export const elementIds = {
  stationManagement: getElementId('station-management'),
  stationManagerButton: getElementId('station-manager-button'),
  stationNameInput: getElementId('station-name-input'),
  stationAddButton: getElementId('station-add-button'),
  stationDeleteButton: getElementId('station-delete-button'),
  stationTableTbody: document.querySelector('tbody'),
  lineManagement: getElementId('line-management'),
  lineManagerButton: getElementId('line-manager-button'),
  lineNameInput: getElementId('line-name-input'),
  lineStartStationSelector: getElementId('line-start-station-selector'),
  lineEndStationSelector: getElementId('line-end-station-selector'),
  lineAddButton: getElementId('lineAddButton'),
  lineDeleteButton: getElementId('lineDeleteButton'),
  sectionManagerButton: getElementId('section-manager-button'),
  sectionManagement: getElementId('section-management'),
  sectionLineMenuButton: getElementId('section-line-menu-button'),
  sectionStationSelector: getElementId('section-station-selector'),
  sectionOrderInput: getElementId('section-order-input'),
  sectionAddButton: getElementId('section-add-button'),
  sectionDeleteButton: getElementId('section-delete-button'),
  mapPrintManagement: getElementId('map-print-management'),
  mapPrintManagerButton: getElementId('map-print-manager-button'),
};