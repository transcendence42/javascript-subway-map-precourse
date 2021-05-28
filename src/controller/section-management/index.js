import { renderSectionManagement } from '../../view/section-management/index.js';
import { elementIds, removeChildAllElements } from '../../utils.js';
import { addSectionLineStation } from './add-section-station.js';
import { toggleSectionManagement } from './toggle-display.js';
import { selectSectionLineButton } from './select-section.js';
import { addButtonEvent } from '../utils.js';

export const rerenderSectionButtons = () => {
  removeChildAllElements(elementIds.sectionButtons);
  renderSectionManagement();
  for (let item of elementIds.sectionLineMenuButton) {
    addButtonEvent(item, selectSectionLineButton);
  }
};

export const controlSectionManagement = () => {
  addButtonEvent(elementIds.sectionManagerButton, toggleSectionManagement);
  for (let item of elementIds.sectionLineMenuButton) {
    addButtonEvent(item, selectSectionLineButton);
  }
  addButtonEvent(elementIds.sectionAddButton, addSectionLineStation);
};
