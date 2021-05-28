import { initSubwayRouteMap } from '../subway-route-map/index.js';
import { elementIds } from '../../utils.js';

export const toggleDisplay = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = !elementIds.sectionManagement.hidden;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
  initSubwayRouteMap();
};
