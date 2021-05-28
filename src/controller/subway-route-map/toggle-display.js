import { initSubwayRouteMap } from './init.js';
import {
  renderMapFrame,
  renderSubwayRouteMap,
} from '../../view/subway-route-map/index.js';
import { elementIds } from '../../utils.js';

export const toggleDisplay = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
  if (document.getElementsByClassName('map').length === 1) {
    initSubwayRouteMap();
    renderSubwayRouteMap();
  } else if (document.getElementsByClassName('map').length === 0) {
    renderMapFrame();
    renderSubwayRouteMap();
  }
};
