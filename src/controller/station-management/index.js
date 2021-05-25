import { elementIds, addButtonEvent } from '../utils.js';

function toggleDisplayStationManagement() {
  elementIds.stationManagement.hidden = !(elementIds.stationManagement.hidden);
  elementIds.lineManagement.hidden = false;
  elementIds.sectionManagement.hidden = false;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = false;
  }
}
export const controlStationManagement = () => {
  addButtonEvent(elementIds.stationManagerButton, toggleDisplayStationManagement);
};
