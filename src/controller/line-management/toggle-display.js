import { initSubwayRouteMap } from '../subway-route-map/index.js';
import { elementIds } from '../../utils.js';

export const toggleDisplayLineManagement = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = !elementIds.lineManagement.hidden;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
  initSubwayRouteMap();
};
