import { elementIds, addButtonEvent } from '../utils.js';

function toggleDisplayStationManagement() {
  elementIds.stationManagement.hidden = !(elementIds.stationManagement.hidden);
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
}
export const controlStationManagement = () => {
  addButtonEvent(elementIds.stationManagerButton, toggleDisplayStationManagement);
};
