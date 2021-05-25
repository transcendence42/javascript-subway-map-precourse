import { controlStationManagement } from './station-management/index.js';
import { controlLineManagement } from './line-management/index.js';
import { controlSectionManagement } from './section-management/index.js';
import { controlSubwayRouteMap } from './subway-route-map/index.js';

export const controller = () => {
  controlStationManagement();
  controlLineManagement();
  controlSectionManagement();
  controlSubwayRouteMap();
};
