import { renderStationManagement } from './station-management/index.js';
import { renderLineManagement } from './line-management/index.js';

export const render = () => {
  renderStationManagement();
  renderLineManagement();
};
