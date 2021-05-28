import { elementIds } from '../../utils.js';
import { toggleDisplay } from './toggle-display.js';
import { addButtonEvent } from '../utils.js';

const controlSubwayRouteMap = () => {
  addButtonEvent(elementIds.mapPrintManagerButton, toggleDisplay);
};

export { controlSubwayRouteMap };
