import { toggleDisplayStationManagement } from './toggle-display.js';
import { deleteStation } from './delete-station.js';
import { addStation } from './add-station.js';
import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';

export const controlStationManagement = () => {
  addButtonEvent(
    elementIds.stationManagerButton,
    toggleDisplayStationManagement,
  );
  addButtonEvent(elementIds.stationAddButton, addStation);
  for (let button of elementIds.stationDeleteButton) {
    addButtonEvent(button, deleteStation);
  }
};
