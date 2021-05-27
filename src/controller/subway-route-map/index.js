import {renderSubwayRouteMap} from '../../view/subway-route-map/index.js'
import { addButtonEvent } from '../utils.js';
import {elementIds, removeChildAllElements} from '../../utils.js'

export const initSubwayRouteMap = () => {
    removeChildAllElements(document.getElementsByClassName('map'))
}

const toggleDisplaySubwayRouteMap = () => {
    elementIds.stationManagement.hidden = true;
    elementIds.lineManagement.hidden = true;
    elementIds.sectionManagement.hidden = true;
    if (elementIds.mapPrintManagement) {
      elementIds.mapPrintManagement.hidden = true;
    }
    renderSubwayRouteMap();
  };

export const controlSubwayRouteMap = () => {
    addButtonEvent(elementIds.mapPrintManagerButton, toggleDisplaySubwayRouteMap);
};
