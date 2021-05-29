import { handleStationManager } from './handle-manager.js';
import { handleStationAdd } from './handle-add.js';
import { handleStationDelete } from './handle-delete.js';

export const stationManager = () => {
  handleStationManager();
  handleStationAdd();
  handleStationDelete();
};
