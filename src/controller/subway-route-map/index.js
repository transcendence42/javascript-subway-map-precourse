import {
  renderMapFrame,
  renderSubwayRouteMap,
} from '../../view/subway-route-map/index.js';
import { addButtonEvent } from '../utils.js';
import { elementIds, removeChildAllElements } from '../../utils.js';

const initSubwayRouteMap = () => {
  document.getElementsByClassName('map').length
    ? removeChildAllElements(document.getElementsByClassName('map')[0])
    : '';
};

const toggleDisplaySubwayRouteMap = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
  if (document.getElementsByClassName('map').length == 1) {
    initSubwayRouteMap();
    renderSubwayRouteMap();
  } else if (document.getElementsByClassName('map').length == 0) {
    renderMapFrame();
    renderSubwayRouteMap();
  }
};

const controlSubwayRouteMap = () => {
  addButtonEvent(elementIds.mapPrintManagerButton, toggleDisplaySubwayRouteMap);
};

export { initSubwayRouteMap, controlSubwayRouteMap };
