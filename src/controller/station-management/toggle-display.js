import { initSubwayRouteMap } from '../subway-route-map/index.js';
import { elementIds } from '../../utils.js';

export const toggleDisplayStationManagement = () => {
  elementIds.stationManagement.hidden = !elementIds.stationManagement.hidden;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
  initSubwayRouteMap();
};
