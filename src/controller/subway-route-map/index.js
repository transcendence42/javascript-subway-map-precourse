import { elementIds, removeChildAllElements } from '../../utils.js';
import { toggleDisplay } from './toggle-display.js';
import { addButtonEvent } from '../utils.js';

const initSubwayRouteMap = () => {
  document.getElementsByClassName('map').length
    ? removeChildAllElements(document.getElementsByClassName('map')[0])
    : '';
};

const controlSubwayRouteMap = () => {
  addButtonEvent(elementIds.mapPrintManagerButton, toggleDisplay);
};

export { initSubwayRouteMap, controlSubwayRouteMap };
