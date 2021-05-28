import { toggleDisplay } from './toggle-display.js';
import { deleteLine } from './delete-line.js';
import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';
import { addLine } from './add-line.js';

export const controlLineManagement = () => {
  addButtonEvent(elementIds.lineManagerButton, toggleDisplay);
  addButtonEvent(elementIds.lineAddButton, addLine);
  for (let item of document.querySelectorAll(
    `table[id=line-table] tbody tr button`,
  )) {
    addButtonEvent(item, deleteLine);
  }
};
