import { toggleDisplayLineManagement } from './toggle-display.js';
import { removeLine } from './remove-line.js';
import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';
import { addLine } from './add-line.js';

export const controlLineManagement = () => {
  addButtonEvent(elementIds.lineManagerButton, toggleDisplayLineManagement);
  addButtonEvent(elementIds.lineAddButton, addLine);
  for (let item of document.querySelectorAll(
    `table[id=line-table] tbody tr button`,
  )) {
    addButtonEvent(item, removeLine);
  }
};
