import { handleStationManagerButton } from './handle-manager.js';
import { handleStationAddButton } from './handle-add.js';
import { handleStationDeleteButton } from './handle-delete.js';

export const stationManager = () => {
  handleStationManagerButton();
  handleStationAddButton();
  // handleStationDeleteButton();
};
