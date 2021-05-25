import { controlStationManagement } from './station-management/index.js';
import { controlSubwayRouteMap } from './subway-route-map/index.js';

export const controller = () => {
  controlStationManagement();
  controlSubwayRouteMap();
};
