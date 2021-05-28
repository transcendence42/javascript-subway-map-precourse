import { toggleDisplay } from './toggle-display.js';
import { deleteStation } from './delete-station.js';
import { addStation } from './add-station.js';
import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';

export const controlStationManagement = () => {
  addButtonEvent(elementIds.stationManagerButton, toggleDisplay);
  addButtonEvent(elementIds.stationAddButton, addStation);
  for (const button of elementIds.stationDeleteButton) {
    addButtonEvent(button, deleteStation);
  }
};
