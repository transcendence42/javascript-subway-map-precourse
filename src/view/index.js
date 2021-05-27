import { renderStationManagement } from './station-management/index.js';
import { renderLineManagement } from './line-management/index.js';
import { renderSectionManagement } from './section-management/index.js';

export const render = () => {
  renderStationManagement();
  renderLineManagement();
  renderSectionManagement();
};
