import { removeChildAllElements } from '../../utils.js';

export const initSubwayRouteMap = () => {
  if (document.getElementsByClassName('map').length) {
    removeChildAllElements(document.getElementsByClassName('map')[0]);
  }
};
